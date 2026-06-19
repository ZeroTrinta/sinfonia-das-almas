// ===============================================
//  SINFONIA DAS ALMAS - Ficha de Personagem (drop-in)
//  Espelha o schema do sistema Foundry VTT (v0.8.x)
//  Persistencia local + calculo de derivados + import/export Foundry
//
//  INSTALACAO: salvar como js/ficha.js e adicionar antes de </body>:
//    <script src="js/ficha.js"></script>
// ===============================================
(function () {
  'use strict';

  const STORE_KEY = 'sda-fichas-v1';
  const DIE_FACES = { d6: 6, d8: 8, d10: 10, d12: 12 };
  const DICE = ['d6', 'd8', 'd10', 'd12'];

  const ATTR_LABELS = { pod: 'Poder', agi: 'Agilidade', int: 'Intelecto', car: 'Carisma', mis: 'Misticismo' };
  const RESIST_LABELS = { fisico: 'F\u00edsico', fogo: 'Fogo', gelo: 'Gelo', trovao: 'Trov\u00e3o', acido: '\u00c1cido', luz: 'Luz', sombra: 'Sombra' };
  const PERICIA_LABELS = {
    armasBrancas: 'Armas Brancas', armasDeFogo: 'Armas de Fogo', atletismo: 'Atletismo', briga: 'Briga',
    conducao: 'Condu\u00e7\u00e3o', furtividade: 'Furtividade', fortitude: 'Fortitude', forcaDeVontade: 'For\u00e7a de Vontade',
    reflexos: 'Reflexos', ladinagem: 'Ladinagem', oficios: 'Of\u00edcios', sobrevivencia: 'Sobreviv\u00eancia',
    empatiaAnimais: 'Empatia c/ Animais', etiqueta: 'Etiqueta', intimidacao: 'Intimida\u00e7\u00e3o', lideranca: 'Lideran\u00e7a',
    malandragem: 'Malandragem', performance: 'Performance', persuasao: 'Persuas\u00e3o', intuicao: 'Intui\u00e7\u00e3o',
    subterfugio: 'Subterf\u00fagio', ciencia: 'Ci\u00eancia', erudicao: 'Erudi\u00e7\u00e3o', financas: 'Finan\u00e7as',
    investigacao: 'Investiga\u00e7\u00e3o', medicina: 'Medicina', arcanismo: 'Arcanismo', percepcao: 'Percep\u00e7\u00e3o',
    politica: 'Pol\u00edtica', tecnologia: 'Tecnologia'
  };
  const CLASSES = ['Guerreiro', 'Gatuno', 'Arqueiro', 'Mago', 'Sacerdote'];

  function blankActor(name) {
    const pericias = {}; Object.keys(PERICIA_LABELS).forEach(k => pericias[k] = '');
    const resist = {}; Object.keys(RESIST_LABELS).forEach(k => resist[k] = '');
    return {
      name: name || 'Novo Personagem', type: 'personagem', img: 'icons/svg/mystery-man.svg',
      system: {
        recursos: { pv: { value: 30, max: 30, temp: 0 }, pe: { value: 30, max: 30 }, pi: { value: 6, max: 6 } },
        atributos: { pod: 'd8', agi: 'd8', int: 'd8', car: 'd8', mis: 'd6' },
        resistencias: resist,
        combate: { defesa: 8, defesaBonus: 0, iniciativa: 4, iniciativaBonus: 0, ndMistica: 8, ndMisticaBonus: 0, deslocamento: 9, estilhacos: 0 },
        progressao: { nivel: 5, pontosHabilidade: 5, classe: '', segundaClasse: '' },
        alma: { determinacao: 7, corrupcao: 3, estilhacos: 0, crepusculo: false, morto: false, testesVontade: 0, pilar: '', qualidades: '', defeitos: '' },
        origem: { eventoMarcante: { descricao: '', usadoNaSessao: false }, ocupacao: { descricao: '', usadoNaSessao: false } },
        pericias: pericias, biografia: '', notas: ''
      },
      _localId: 'c' + Date.now() + Math.floor(Math.random() * 1000)
    };
  }

  let store = { chars: [], active: null };

  function load() {
    try { const raw = localStorage.getItem(STORE_KEY); if (raw) store = JSON.parse(raw); }
    catch (e) { store = { chars: [], active: null }; }
    if (!store.chars || !store.chars.length) { const c = blankActor('Meu Personagem'); store = { chars: [c], active: c._localId }; }
    if (!store.active || !store.chars.find(c => c._localId === store.active)) store.active = store.chars[0]._localId;
  }

  let saveTimer = null;
  function save() { clearTimeout(saveTimer); saveTimer = setTimeout(() => { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {} }, 250); }

  function current() { return store.chars.find(c => c._localId === store.active) || store.chars[0]; }

  function getPath(obj, path) { return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj); }
  function setPath(obj, path, val) {
    const keys = path.split('.'); let o = obj;
    for (let i = 0; i < keys.length - 1; i++) { if (o[keys[i]] == null) o[keys[i]] = {}; o = o[keys[i]]; }
    o[keys[keys.length - 1]] = val;
  }

  function faces(die) { return DIE_FACES[die] || 0; }
  function recalc(c) {
    const s = c.system, lvl = +s.progressao.nivel || 0;
    s.recursos.pv.max = lvl + 5 * faces(s.atributos.pod);
    s.recursos.pe.max = lvl + 5 * faces(s.atributos.mis);
    s.combate.defesa = faces(s.atributos.agi) + (+s.combate.defesaBonus || 0);
    s.combate.iniciativa = Math.floor(faces(s.atributos.agi) / 2) + (+s.combate.iniciativaBonus || 0);
  }

  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  function txt(label, path, ph) { return `<div class="f-field"><label>${label}</label><input type="text" data-path="${path}" placeholder="${ph || ''}"></div>`; }
  function num(label, path, derive) { return `<div class="f-field"><label>${label}</label><input type="number" data-path="${path}"${derive ? ' data-derive="1"' : ''}></div>`; }
  function pair(label, p1, p2, sep) { return `<div class="f-field"><label>${label}</label><div class="f-pair"><input type="number" data-path="${p1}"><span>${sep || '/'}</span><input type="number" data-path="${p2}"></div></div>`; }

  function render() {
    const root = document.getElementById('ficha-root');
    if (!root) return;
    const c = current(), s = c.system;

    const charOptions = store.chars.map(ch => `<option value="${ch._localId}" ${ch._localId === c._localId ? 'selected' : ''}>${esc(ch.name || 'Sem nome')}</option>`).join('');
    const attrBoxes = Object.keys(ATTR_LABELS).map(k => {
      const opts = DICE.map(d => `<option ${s.atributos[k] === d ? 'selected' : ''}>${d}</option>`).join('');
      return `<div class="f-attr"><div class="f-attr-code">${k.toUpperCase()}</div><div class="f-attr-name">${ATTR_LABELS[k]}</div><select data-path="system.atributos.${k}" data-derive="1">${opts}</select></div>`;
    }).join('');
    const classOpts = ['<option value="">- escolha -</option>'].concat(CLASSES.map(cl => `<option ${s.progressao.classe === cl ? 'selected' : ''}>${cl}</option>`)).join('');
    const periciaItems = Object.keys(PERICIA_LABELS).map(k => `<div class="f-peri"><span class="f-peri-n">${PERICIA_LABELS[k]}</span><input type="text" data-path="system.pericias.${k}" placeholder="-"></div>`).join('');
    const resistItems = Object.keys(RESIST_LABELS).map(k => `<div class="f-resist"><label>${RESIST_LABELS[k]}</label><input type="text" data-path="system.resistencias.${k}" placeholder="-"></div>`).join('');

    root.innerHTML = `
      <div class="sheet-wrapper">
        <div class="f-toolbar">
          <select class="f-charsel" id="ficha-charsel" title="Personagem ativo">${charOptions}</select>
          <button class="f-btn" data-act="new">+ Novo</button>
          <button class="f-btn" data-act="dup">Duplicar</button>
          <button class="f-btn danger" data-act="del">Excluir</button>
          <span class="f-spacer"></span>
          <button class="f-btn" data-act="recalc" title="Recalcula PV, PE, Defesa e Iniciativa">Recalcular</button>
          <button class="f-btn" data-act="import">Importar</button>
          <button class="f-btn" data-act="export">Exportar (Foundry)</button>
          <button class="f-btn" data-act="print">Imprimir</button>
          <input type="file" id="ficha-file" accept="application/json" style="display:none">
        </div>
        <div class="f-header"><div class="f-title">Ficha de Personagem</div><hr class="f-divider"></div>

        <div class="f-panel">
          <div class="f-panel-title">Identidade</div>
          <div class="f-row id1">
            <div class="f-field"><label>Nome do Personagem</label><input type="text" data-path="name" data-namesync="1" placeholder="Como sua alma e conhecida..."></div>
            ${num('N\u00edvel', 'system.progressao.nivel', true)}
            ${num('Pts de Habilidade', 'system.progressao.pontosHabilidade')}
          </div>
          <div class="f-row id2">
            <div class="f-field"><label>Classe</label><select data-path="system.progressao.classe">${classOpts}</select></div>
            ${pair('Vida (PV)', 'system.recursos.pv.value', 'system.recursos.pv.max')}
            ${pair('Energia (PE)', 'system.recursos.pe.value', 'system.recursos.pe.max')}
            ${pair('Invent\u00e1rio (PI)', 'system.recursos.pi.value', 'system.recursos.pi.max')}
          </div>
        </div>

        <div class="f-panel">
          <div class="f-panel-title">Atributos</div>
          <div class="f-attr-row">${attrBoxes}</div>
        </div>

        <div class="f-panel">
          <div class="f-panel-title">Combate</div>
          <div class="f-combat-row">
            ${num('Defesa', 'system.combate.defesa')}
            ${num('B\u00f4nus Def.', 'system.combate.defesaBonus', true)}
            ${num('Iniciativa', 'system.combate.iniciativa')}
            ${num('B\u00f4nus Inic.', 'system.combate.iniciativaBonus', true)}
            ${num('ND M\u00edstico', 'system.combate.ndMistica')}
            ${num('B\u00f4nus ND', 'system.combate.ndMisticaBonus')}
            ${num('Deslocamento', 'system.combate.deslocamento')}
            ${num('PV Tempor\u00e1rios', 'system.recursos.pv.temp')}
          </div>
        </div>

        <div class="f-panel">
          <div class="f-panel-title">Per\u00edcias</div>
          <div class="f-peri-grid">${periciaItems}</div>
        </div>

        <div class="f-panel">
          <div class="f-panel-title">Resist\u00eancias</div>
          <div class="f-resist-row">${resistItems}</div>
        </div>

        <div class="f-panel">
          <div class="f-panel-title">Eixo da Alma</div>
          <div class="f-soul">
            <div class="f-soul-col">
              <div class="f-soul-lbl det">Determina\u00e7\u00e3o</div>
              <div class="f-bar-track"><div class="f-bar-fill det" id="det-bar"></div></div>
              <div class="f-soul-ctrl"><button class="f-soul-btn" data-soul="determinacao" data-delta="-1">-</button><input type="number" data-path="system.alma.determinacao" data-soulbar="1"><button class="f-soul-btn" data-soul="determinacao" data-delta="1">+</button></div>
            </div>
            <div class="f-soul-col">
              <div class="f-soul-lbl cor">Corrup\u00e7\u00e3o</div>
              <div class="f-bar-track"><div class="f-bar-fill cor" id="cor-bar"></div></div>
              <div class="f-soul-ctrl"><button class="f-soul-btn" data-soul="corrupcao" data-delta="-1">-</button><input type="number" data-path="system.alma.corrupcao" data-soulbar="1"><button class="f-soul-btn" data-soul="corrupcao" data-delta="1">+</button></div>
            </div>
          </div>
          <div class="f-row soul2">
            <div class="f-field grow"><label>Pilar da Alma</label><input type="text" data-path="system.alma.pilar" placeholder="O que sustenta sua vontade..."></div>
            ${num('Estilha\u00e7os', 'system.alma.estilhacos')}
            ${num('Testes de Vontade', 'system.alma.testesVontade')}
          </div>
          <div class="f-flags">
            <label class="f-flag"><input type="checkbox" data-path="system.alma.crepusculo"> Crep\u00fasculo da Morte</label>
            <label class="f-flag"><input type="checkbox" data-path="system.alma.morto"> Morto</label>
          </div>
          <div class="f-row soul3">
            <div class="f-field"><label>Qualidades</label><textarea rows="3" data-path="system.alma.qualidades" placeholder="Uma por linha..."></textarea></div>
            <div class="f-field"><label>Defeitos</label><textarea rows="3" data-path="system.alma.defeitos" placeholder="Uma por linha..."></textarea></div>
          </div>
        </div>

        <div class="f-panel">
          <div class="f-panel-title">Biografia Geral</div>
          <div class="f-row bio1">
            <div class="f-field"><label>Evento Marcante</label><input type="text" data-path="system.origem.eventoMarcante.descricao" placeholder="A cicatriz que moldou sua alma..."></div>
            <div class="f-field"><label>Ocupa\u00e7\u00e3o</label><input type="text" data-path="system.origem.ocupacao.descricao" placeholder="Ex: Guerreiro Amargurado"></div>
          </div>
          <div class="f-field"><label>Biografia</label><textarea rows="5" data-path="system.biografia" placeholder="Hist\u00f3ria, apar\u00eancia, contatos..."></textarea></div>
          <div class="f-field"><label>Notas</label><textarea rows="4" data-path="system.notas" placeholder="Anota\u00e7\u00f5es livres, miss\u00f5es, lembretes..."></textarea></div>
        </div>

        <div class="f-footer">Sinfonia das Almas - Ficha sincroniz\u00e1vel com o Foundry</div>
      </div>`;

    syncBoundValues(); updateSoulBars(); bind();
  }

  function syncBoundValues() {
    const c = current();
    document.querySelectorAll('#ficha-root [data-path]').forEach(el => {
      const v = getPath(c, el.dataset.path);
      if (el.type === 'checkbox') el.checked = !!v;
      else el.value = v == null ? '' : v;
    });
  }

  function updateSoulBars() {
    const c = current();
    const det = Math.max(0, Math.min(10, +c.system.alma.determinacao || 0));
    const cor = Math.max(0, Math.min(10, +c.system.alma.corrupcao || 0));
    const db = document.getElementById('det-bar'), cb = document.getElementById('cor-bar');
    if (db) db.style.width = (det * 10) + '%';
    if (cb) cb.style.width = (cor * 10) + '%';
  }

  function bind() {
    const root = document.getElementById('ficha-root');
    root.querySelectorAll('[data-path]').forEach(el => {
      const ev = (el.tagName === 'SELECT' || el.type === 'checkbox') ? 'change' : 'input';
      el.addEventListener(ev, () => {
        const c = current(); let val;
        if (el.type === 'checkbox') val = el.checked;
        else if (el.type === 'number') val = el.value === '' ? '' : Number(el.value);
        else val = el.value;
        setPath(c, el.dataset.path, val);
        if (el.dataset.namesync) { const sel = document.getElementById('ficha-charsel'); if (sel) { const o = sel.querySelector(`option[value="${c._localId}"]`); if (o) o.textContent = val || 'Sem nome'; } }
        if (el.dataset.derive) { recalc(c); refreshDerived(); }
        if (el.dataset.soulbar) updateSoulBars();
        save();
      });
    });
    root.querySelectorAll('[data-soul]').forEach(btn => {
      btn.addEventListener('click', () => {
        const c = current(), key = btn.dataset.soul, d = +btn.dataset.delta;
        c.system.alma[key] = Math.max(0, Math.min(10, (+c.system.alma[key] || 0) + d));
        const inp = root.querySelector(`[data-path="system.alma.${key}"]`); if (inp) inp.value = c.system.alma[key];
        updateSoulBars(); save();
      });
    });
    root.querySelector('#ficha-charsel').addEventListener('change', e => { store.active = e.target.value; save(); render(); });
    root.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => action(b.dataset.act)));
    root.querySelector('#ficha-file').addEventListener('change', importFile);
  }

  function refreshDerived() {
    const c = current(), root = document.getElementById('ficha-root');
    ['system.recursos.pv.max', 'system.recursos.pe.max', 'system.combate.defesa', 'system.combate.iniciativa'].forEach(p => {
      const el = root.querySelector(`[data-path="${p}"]`); if (el) el.value = getPath(c, p);
    });
  }

  function action(act) {
    if (act === 'new') { const c = blankActor('Novo Personagem'); store.chars.push(c); store.active = c._localId; save(); render(); }
    else if (act === 'dup') { const copy = JSON.parse(JSON.stringify(current())); copy._localId = 'c' + Date.now() + Math.floor(Math.random() * 1000); copy.name = (copy.name || 'Personagem') + ' (c\u00f3pia)'; store.chars.push(copy); store.active = copy._localId; save(); render(); }
    else if (act === 'del') { if (store.chars.length <= 1) { alert('\u00c9 preciso manter ao menos um personagem.'); return; } if (!confirm('Excluir "' + (current().name || 'este personagem') + '"?')) return; store.chars = store.chars.filter(c => c._localId !== store.active); store.active = store.chars[0]._localId; save(); render(); }
    else if (act === 'recalc') { recalc(current()); save(); render(); }
    else if (act === 'export') exportJSON();
    else if (act === 'import') document.getElementById('ficha-file').click();
    else if (act === 'print') window.print();
  }

  function exportJSON() {
    const c = JSON.parse(JSON.stringify(current())); delete c._localId;
    const blob = new Blob([JSON.stringify(c, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'ficha-' + (c.name || 'personagem').replace(/[^\w\-]+/g, '_') + '.json';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function importFile(e) {
    const file = e.target.files && e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data.system || !data.system.atributos) { alert('Arquivo n\u00e3o parece ser uma ficha v\u00e1lida do Sinfonia das Almas.'); return; }
        const merged = blankActor(data.name || 'Importado');
        merged.name = data.name || merged.name; merged.img = data.img || merged.img;
        deepMerge(merged.system, data.system);
        if (data.prototypeToken) merged.prototypeToken = data.prototypeToken;
        if (data.items) merged.items = data.items;
        merged._localId = 'c' + Date.now() + Math.floor(Math.random() * 1000);
        store.chars.push(merged); store.active = merged._localId; save(); render();
        alert('Ficha "' + merged.name + '" importada com sucesso.');
      } catch (err) { alert('N\u00e3o foi poss\u00edvel ler o arquivo JSON.'); }
    };
    reader.readAsText(file); e.target.value = '';
  }

  function deepMerge(target, src) {
    Object.keys(src || {}).forEach(k => {
      if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k])) { if (typeof target[k] !== 'object' || target[k] == null) target[k] = {}; deepMerge(target[k], src[k]); }
      else target[k] = src[k];
    });
  }

  function injectCSS() {
    if (document.getElementById('ficha-css')) return;
    const css = [
      "#ficha-root{max-width:960px;margin:0 auto;}",
      "#ficha-root .sheet-wrapper{padding:4px 2px 40px;}",
      "#ficha-root .f-toolbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:18px;padding:12px;border:1px solid var(--border,#2a2a2a);background:rgba(200,151,42,.04);}",
      "#ficha-root .f-charsel{background:#141414;color:var(--gold-light,#e8c87a);border:1px solid var(--gold-dim,#6b5a2a);padding:7px 10px;font-family:'Cinzel',serif;font-size:13px;min-width:170px;}",
      "#ficha-root .f-btn{background:linear-gradient(#1d1d1d,#141414);color:#cbb988;border:1px solid var(--gold-dim,#6b5a2a);padding:7px 12px;font-family:'Cinzel',serif;font-size:11px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .15s;}",
      "#ficha-root .f-btn:hover{border-color:var(--gold,#c8972a);color:#ffe9a0;box-shadow:0 0 12px rgba(200,151,42,.2);}",
      "#ficha-root .f-btn.danger{color:#d08a8a;border-color:#6b3a3a;}",
      "#ficha-root .f-btn.danger:hover{border-color:#c85050;color:#ffb0b0;}",
      "#ficha-root .f-spacer{flex:1;}",
      "#ficha-root .f-header{text-align:center;margin-bottom:20px;}",
      "#ficha-root .f-title{font-family:'Cinzel Decorative',serif;font-size:26px;color:var(--gold,#c8972a);letter-spacing:3px;}",
      "#ficha-root .f-divider{border:none;border-top:1px solid var(--gold-dim,#6b5a2a);max-width:260px;margin:10px auto 0;}",
      "#ficha-root .f-panel{border:1px solid var(--border,#2a2a2a);background:linear-gradient(135deg,rgba(26,26,26,.6),rgba(10,10,10,.6));padding:16px 18px;margin-bottom:16px;}",
      "#ficha-root .f-panel-title{font-family:'Cinzel',serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--gold,#c8972a);border-bottom:1px solid rgba(200,151,42,.18);padding-bottom:8px;margin-bottom:14px;}",
      "#ficha-root label{display:block;font-family:'Cinzel',serif;font-size:9.5px;letter-spacing:1px;text-transform:uppercase;color:var(--silver-dim,#8a8a8a);margin-bottom:4px;}",
      "#ficha-root input[type=text],#ficha-root input[type=number],#ficha-root select,#ficha-root textarea{width:100%;background:#141414;color:#ececec;border:1px solid var(--border,#2a2a2a);padding:7px 9px;font-family:'EB Garamond',serif;font-size:14px;box-sizing:border-box;}",
      "#ficha-root textarea{resize:vertical;line-height:1.5;}",
      "#ficha-root input:focus,#ficha-root select:focus,#ficha-root textarea:focus{border-color:var(--gold,#c8972a);outline:none;}",
      "#ficha-root .f-row{display:grid;gap:12px;}",
      "#ficha-root .f-row.id1{grid-template-columns:2.4fr 1fr 1.2fr;}",
      "#ficha-root .f-row.id2{grid-template-columns:1.6fr 1fr 1fr 1fr;}",
      "#ficha-root .f-row.soul2{grid-template-columns:2fr 1fr 1fr;margin-top:14px;}",
      "#ficha-root .f-row.soul3{grid-template-columns:1fr 1fr;margin-top:12px;}",
      "#ficha-root .f-row.bio1{grid-template-columns:1fr 1fr;margin-bottom:12px;}",
      "#ficha-root .f-pair{display:flex;align-items:center;gap:6px;}",
      "#ficha-root .f-pair input{text-align:center;}",
      "#ficha-root .f-pair span{color:var(--silver-dim,#8a8a8a);}",
      "#ficha-root .f-attr-row{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;}",
      "#ficha-root .f-attr{border:1px solid rgba(200,151,42,.2);background:rgba(200,151,42,.04);padding:10px;text-align:center;}",
      "#ficha-root .f-attr-code{font-family:'Cinzel Decorative',serif;font-size:18px;color:var(--gold-light,#e8c87a);letter-spacing:1px;}",
      "#ficha-root .f-attr-name{font-family:'EB Garamond',serif;font-size:11px;color:var(--silver-dim,#8a8a8a);margin:2px 0 8px;}",
      "#ficha-root .f-attr select{text-align:center;text-align-last:center;font-family:'Cinzel',serif;color:#fff;}",
      "#ficha-root .f-combat-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}",
      "#ficha-root .f-combat-row input{text-align:center;}",
      "#ficha-root .f-peri-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 28px;}",
      "#ficha-root .f-peri{display:flex;align-items:center;justify-content:space-between;gap:10px;border-bottom:1px solid rgba(200,151,42,.08);padding:3px 0;}",
      "#ficha-root .f-peri-n{font-family:'EB Garamond',serif;font-size:14px;color:#d8d4c8;}",
      "#ficha-root .f-peri input{width:78px;flex:none;text-align:center;color:var(--gold-light,#e8c87a);font-family:'Cinzel',serif;font-size:12px;padding:4px;}",
      "#ficha-root .f-resist-row{display:grid;grid-template-columns:repeat(7,1fr);gap:10px;}",
      "#ficha-root .f-resist input{text-align:center;}",
      "#ficha-root .f-soul{display:grid;grid-template-columns:1fr 1fr;gap:24px;}",
      "#ficha-root .f-soul-lbl{font-family:'Cinzel',serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;}",
      "#ficha-root .f-soul-lbl.det{color:#e8c87a;}",
      "#ficha-root .f-soul-lbl.cor{color:#d07a8a;}",
      "#ficha-root .f-bar-track{height:12px;background:#141414;border:1px solid var(--border,#2a2a2a);overflow:hidden;}",
      "#ficha-root .f-bar-fill{height:100%;transition:width .25s;}",
      "#ficha-root .f-bar-fill.det{background:linear-gradient(90deg,#8a6a1e,#e8c87a);}",
      "#ficha-root .f-bar-fill.cor{background:linear-gradient(90deg,#6a2230,#c84068);}",
      "#ficha-root .f-soul-ctrl{display:flex;align-items:center;gap:8px;margin-top:8px;}",
      "#ficha-root .f-soul-ctrl input{width:60px;text-align:center;font-family:'Cinzel Decorative',serif;font-size:15px;color:#fff;}",
      "#ficha-root .f-soul-btn{width:30px;height:30px;background:#1a1a1a;border:1px solid var(--gold-dim,#6b5a2a);color:var(--gold-light,#e8c87a);font-size:16px;cursor:pointer;line-height:1;}",
      "#ficha-root .f-soul-btn:hover{border-color:var(--gold,#c8972a);background:#222;}",
      "#ficha-root .f-flags{display:flex;flex-wrap:wrap;gap:18px;margin-top:12px;}",
      "#ficha-root .f-flag{display:flex;align-items:center;gap:7px;font-family:'EB Garamond',serif;font-size:14px;color:#cfcabb;text-transform:none;letter-spacing:0;cursor:pointer;margin:0;}",
      "#ficha-root .f-flag input{width:auto;}",
      "#ficha-root .f-footer{text-align:center;font-family:'EB Garamond',serif;font-style:italic;font-size:12px;color:var(--silver-dim,#7a7a7a);margin-top:24px;}",
      "@media (max-width:760px){#ficha-root .f-row.id1,#ficha-root .f-row.id2,#ficha-root .f-row.soul2,#ficha-root .f-row.soul3,#ficha-root .f-row.bio1{grid-template-columns:1fr;}#ficha-root .f-attr-row{grid-template-columns:repeat(2,1fr);}#ficha-root .f-combat-row{grid-template-columns:repeat(2,1fr);}#ficha-root .f-peri-grid{grid-template-columns:1fr;}#ficha-root .f-resist-row{grid-template-columns:repeat(2,1fr);}#ficha-root .f-soul{grid-template-columns:1fr;}}",
      "@media print{#site-header,#nav-tabs,.nav-tabs,#starfield,#ficha-root .f-toolbar{display:none!important;}#ficha-root,#page-ficha{position:static!important;overflow:visible!important;}body{background:#fff!important;}}"
    ].join('\n');
    const st = document.createElement('style'); st.id = 'ficha-css'; st.textContent = css;
    document.head.appendChild(st);
  }

  function init() {
    const page = document.getElementById('page-ficha');
    if (!page) return;
    injectCSS();
    page.innerHTML = '<div id="ficha-root"></div>';
    load();
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.SDA_Ficha = { rerender: render, reset: () => { localStorage.removeItem(STORE_KEY); load(); render(); } };
})();
