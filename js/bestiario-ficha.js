// ===============================================
//  SINFONIA DAS ALMAS - Ficha de Monstro (Bestiario)
//  Editavel, com persistencia local. Subsecao da aba Bestiario.
//  Schema inspirado na ficha do Foundry, adaptado a criaturas.
// ===============================================
(function () {
  'use strict';

  const STORE_KEY = 'sda-monstros-v1';
  const DICE = ['d6', 'd8', 'd10', 'd12'];
  const TIPOS = ['Bestas', 'Humanoides', 'Mortos-vivos', 'Dem\u00f4nios', 'Construtos', 'Monstruosidades', 'Drag\u00f5es', 'Ca\u00f3ticos', 'Fadas', 'Gigantes', 'C\u00f3smicos'];
  const CATEGORIAS = ['Comum', 'Elite', 'Chefe', 'Lend\u00e1rio'];
  const CAT_COLORS = { 'Comum': '#7a8a72', 'Elite': '#5a9ad0', 'Chefe': '#d08a30', 'Lend\u00e1rio': '#c84068' };
  const ATTR_LABELS = { pod: 'Poder', agi: 'Agilidade', int: 'Intelecto', car: 'Carisma', mis: 'Misticismo' };
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

  function blankMonster(nome) {
    const pericias = {}; Object.keys(PERICIA_LABELS).forEach(k => pericias[k] = '');
    return {
      _id: 'm' + Date.now() + Math.floor(Math.random() * 1000),
      nome: nome || 'Nova Criatura', tipo: 'Bestas', categoria: 'Comum',
      atributos: { pod: 'd8', agi: 'd8', int: 'd6', car: 'd6', mis: 'd6' },
      pv: 20, pe: 0, defesa: 8, ndMistica: '', deslocamento: 9,
      resistencias: '', pericias: pericias,
      ataques: [{ nome: '', custo: '', efeito: '' }],
      habilidades: [{ nome: '', efeito: '' }],
      almaFuriosa: { barra: '', nome: '', efeito: '' },
      descricao: ''
    };
  }

  function fromSeed(cr) {
    const m = blankMonster(cr.nome);
    m._id = 'm' + Date.now() + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 9999);
    m.nome = cr.nome || m.nome; m.tipo = cr.tipo || m.tipo; m.categoria = cr.categoria || m.categoria;
    if (cr.atributos) m.atributos = Object.assign({}, m.atributos, cr.atributos);
    ['pv', 'pe', 'defesa', 'deslocamento', 'resistencias', 'descricao'].forEach(k => { if (cr[k] != null) m[k] = cr[k]; });
    m.ndMistica = cr.ndMistica != null ? cr.ndMistica : '';
    if (Array.isArray(cr.ataques) && cr.ataques.length) m.ataques = cr.ataques.map(a => ({ nome: a.nome || '', custo: a.custo || '', efeito: a.efeito || '' }));
    if (Array.isArray(cr.habilidades) && cr.habilidades.length) m.habilidades = cr.habilidades.map(h => ({ nome: h.nome || '', efeito: h.efeito || '' }));
    if (cr.almaFuriosa) m.almaFuriosa = { barra: cr.almaFuriosa.barra != null ? cr.almaFuriosa.barra : '', nome: cr.almaFuriosa.nome || '', efeito: cr.almaFuriosa.efeito || '' };
    return m;
  }

  let store = { mons: [], active: null };

  function load() {
    try { const raw = localStorage.getItem(STORE_KEY); if (raw) store = JSON.parse(raw); }
    catch (e) { store = { mons: [], active: null }; }
    if (!store.mons || !store.mons.length) {
      const seed = (window.CREATURES || []).map(fromSeed);
      store = { mons: seed.length ? seed : [blankMonster('Nova Criatura')], active: null };
      store.active = store.mons[0]._id;
    }
    if (!store.active || !store.mons.find(m => m._id === store.active)) store.active = store.mons[0]._id;
  }

  let saveTimer = null;
  function save() { clearTimeout(saveTimer); saveTimer = setTimeout(() => { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {} }, 250); }

  function current() { return store.mons.find(m => m._id === store.active) || store.mons[0]; }

  function getPath(obj, path) { return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj); }
  function setPath(obj, path, val) {
    const keys = path.split('.'); let o = obj;
    for (let i = 0; i < keys.length - 1; i++) { if (o[keys[i]] == null) o[keys[i]] = {}; o = o[keys[i]]; }
    o[keys[keys.length - 1]] = val;
  }

  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  function num(label, path) { return `<div class="m-field"><label>${label}</label><input type="number" data-path="${path}"></div>`; }

  function render() {
    const root = document.getElementById('monstro-root');
    if (!root) return;
    const m = current();

    const opts = store.mons.map(x => `<option value="${x._id}" ${x._id === m._id ? 'selected' : ''}>${esc(x.nome || 'Sem nome')}</option>`).join('');
    const attrBoxes = Object.keys(ATTR_LABELS).map(k => {
      const o = DICE.map(d => `<option ${m.atributos[k] === d ? 'selected' : ''}>${d}</option>`).join('');
      return `<div class="m-attr"><div class="m-attr-code">${k.toUpperCase()}</div><div class="m-attr-name">${ATTR_LABELS[k]}</div><select data-path="atributos.${k}">${o}</select></div>`;
    }).join('');
    const tipoOpts = TIPOS.map(t => `<option ${m.tipo === t ? 'selected' : ''}>${t}</option>`).join('');
    const catOpts = CATEGORIAS.map(cat => `<option ${m.categoria === cat ? 'selected' : ''}>${cat}</option>`).join('');
    const periciaItems = Object.keys(PERICIA_LABELS).map(k => `<div class="m-peri"><span class="m-peri-n">${PERICIA_LABELS[k]}</span><input type="text" data-path="pericias.${k}" placeholder="-"></div>`).join('');

    const ataques = m.ataques.map((a, i) => `
      <div class="m-list-item">
        <div class="m-list-row">
          <div class="m-field grow"><label>Ataque ${i + 1} - Nome</label><input type="text" data-path="ataques.${i}.nome" placeholder="Ex: Mordida Voraz"></div>
          <div class="m-field"><label>Custo</label><input type="text" data-path="ataques.${i}.custo" placeholder="1 A\u00e7\u00e3o / 15 PE"></div>
          <button class="m-rm" data-rm="ataques" data-idx="${i}" title="Remover">\u00d7</button>
        </div>
        <div class="m-field"><label>Efeito</label><textarea rows="2" data-path="ataques.${i}.efeito" placeholder="Descri\u00e7\u00e3o do ataque..."></textarea></div>
      </div>`).join('');
    const habilidades = m.habilidades.map((h, i) => `
      <div class="m-list-item">
        <div class="m-list-row">
          <div class="m-field grow"><label>Habilidade ${i + 1} - Nome</label><input type="text" data-path="habilidades.${i}.nome" placeholder="Ex: Aura de Desespero"></div>
          <button class="m-rm" data-rm="habilidades" data-idx="${i}" title="Remover">\u00d7</button>
        </div>
        <div class="m-field"><label>Efeito</label><textarea rows="2" data-path="habilidades.${i}.efeito" placeholder="Descri\u00e7\u00e3o da habilidade..."></textarea></div>
      </div>`).join('');

    root.innerHTML = `
      <div class="m-toolbar">
        <select class="m-charsel" id="monstro-sel">${opts}</select>
        <button class="m-btn" data-act="new">+ Nova</button>
        <button class="m-btn" data-act="dup">Duplicar</button>
        <button class="m-btn danger" data-act="del">Excluir</button>
        <span class="m-spacer"></span>
        <button class="m-btn" data-act="export">Exportar</button>
        <button class="m-btn" data-act="import">Importar</button>
        <input type="file" id="monstro-file" accept="application/json" style="display:none">
      </div>

      <div class="m-panel" style="--accent:${CAT_COLORS[m.categoria] || '#c8972a'}">
        <div class="m-panel-title">Identidade</div>
        <div class="m-row id">
          <div class="m-field grow"><label>Nome da Criatura</label><input type="text" data-path="nome" data-namesync="1" placeholder="Nome..."></div>
          <div class="m-field"><label>Tipo</label><select data-path="tipo">${tipoOpts}</select></div>
          <div class="m-field"><label>Categoria</label><select data-path="categoria" data-catsync="1">${catOpts}</select></div>
        </div>
      </div>

      <div class="m-panel">
        <div class="m-panel-title">Atributos</div>
        <div class="m-attr-row">${attrBoxes}</div>
      </div>

      <div class="m-panel">
        <div class="m-panel-title">Combate & Recursos</div>
        <div class="m-combat-row">
          ${num('PV', 'pv')}
          ${num('PE', 'pe')}
          ${num('Defesa', 'defesa')}
          ${num('ND M\u00edstico', 'ndMistica')}
          ${num('Deslocamento', 'deslocamento')}
        </div>
        <div class="m-field"><label>Resist\u00eancias</label><input type="text" data-path="resistencias" placeholder="Ex: Imune a veneno. Vulner\u00e1vel a Luz e Fogo."></div>
      </div>

      <div class="m-panel">
        <div class="m-panel-title">Per\u00edcias</div>
        <div class="m-peri-grid">${periciaItems}</div>
      </div>

      <div class="m-panel">
        <div class="m-panel-title">Ataques</div>
        <div class="m-list">${ataques}</div>
        <button class="m-add" data-add="ataques">+ Adicionar ataque</button>
      </div>

      <div class="m-panel">
        <div class="m-panel-title">Habilidades</div>
        <div class="m-list">${habilidades}</div>
        <button class="m-add" data-add="habilidades">+ Adicionar habilidade</button>
      </div>

      <div class="m-panel furia">
        <div class="m-panel-title">Alma Furiosa <span class="m-hint">(Chefes e Lend\u00e1rios)</span></div>
        <div class="m-row furia">
          <div class="m-field"><label>Barra de F\u00faria</label><input type="number" data-path="almaFuriosa.barra" placeholder="10 / 8"></div>
          <div class="m-field grow"><label>Nome do Golpe</label><input type="text" data-path="almaFuriosa.nome" placeholder="Ex: Ceifa das Almas"></div>
        </div>
        <div class="m-field"><label>Efeito</label><textarea rows="3" data-path="almaFuriosa.efeito" placeholder="O que acontece quando a barra enche..."></textarea></div>
      </div>

      <div class="m-panel">
        <div class="m-panel-title">Descri\u00e7\u00e3o</div>
        <div class="m-field"><textarea rows="4" data-path="descricao" placeholder="Apar\u00eancia, comportamento, lenda..."></textarea></div>
      </div>`;

    syncValues(); bind();
  }

  function syncValues() {
    const m = current();
    document.querySelectorAll('#monstro-root [data-path]').forEach(el => {
      const v = getPath(m, el.dataset.path);
      if (el.type === 'checkbox') el.checked = !!v;
      else el.value = v == null ? '' : v;
    });
  }

  function bind() {
    const root = document.getElementById('monstro-root');
    root.querySelectorAll('[data-path]').forEach(el => {
      const ev = (el.tagName === 'SELECT') ? 'change' : 'input';
      el.addEventListener(ev, () => {
        const m = current();
        let val = el.type === 'number' ? (el.value === '' ? '' : Number(el.value)) : el.value;
        setPath(m, el.dataset.path, val);
        if (el.dataset.namesync) { const sel = document.getElementById('monstro-sel'); if (sel) { const o = sel.querySelector(`option[value="${m._id}"]`); if (o) o.textContent = val || 'Sem nome'; } }
        if (el.dataset.catsync) { const p = root.querySelector('.m-panel'); if (p) p.style.setProperty('--accent', CAT_COLORS[val] || '#c8972a'); }
        save();
      });
    });
    root.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => {
      const m = current(), key = b.dataset.add;
      m[key].push(key === 'ataques' ? { nome: '', custo: '', efeito: '' } : { nome: '', efeito: '' });
      save(); render();
    }));
    root.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => {
      const m = current(), key = b.dataset.rm, idx = +b.dataset.idx;
      m[key].splice(idx, 1);
      if (!m[key].length) m[key].push(key === 'ataques' ? { nome: '', custo: '', efeito: '' } : { nome: '', efeito: '' });
      save(); render();
    }));
    root.querySelector('#monstro-sel').addEventListener('change', e => { store.active = e.target.value; save(); render(); });
    root.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => action(b.dataset.act)));
    root.querySelector('#monstro-file').addEventListener('change', importFile);
  }

  function action(act) {
    if (act === 'new') { const m = blankMonster('Nova Criatura'); store.mons.push(m); store.active = m._id; save(); render(); }
    else if (act === 'dup') { const copy = JSON.parse(JSON.stringify(current())); copy._id = 'm' + Date.now() + Math.floor(Math.random() * 1000); copy.nome = (copy.nome || 'Criatura') + ' (c\u00f3pia)'; store.mons.push(copy); store.active = copy._id; save(); render(); }
    else if (act === 'del') { if (store.mons.length <= 1) { alert('\u00c9 preciso manter ao menos uma criatura.'); return; } if (!confirm('Excluir "' + (current().nome || 'esta criatura') + '"?')) return; store.mons = store.mons.filter(x => x._id !== store.active); store.active = store.mons[0]._id; save(); render(); }
    else if (act === 'export') exportJSON();
    else if (act === 'import') document.getElementById('monstro-file').click();
  }

  function exportJSON() {
    const m = JSON.parse(JSON.stringify(current())); delete m._id;
    const blob = new Blob([JSON.stringify(m, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'criatura-' + (m.nome || 'monstro').replace(/[^\w\-]+/g, '_') + '.json';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function importFile(e) {
    const file = e.target.files && e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data.atributos && !data.nome) { alert('Arquivo n\u00e3o parece ser uma ficha de criatura v\u00e1lida.'); return; }
        const m = fromSeed(data); store.mons.push(m); store.active = m._id; save(); render();
        alert('Criatura "' + m.nome + '" importada.');
      } catch (err) { alert('N\u00e3o foi poss\u00edvel ler o arquivo JSON.'); }
    };
    reader.readAsText(file); e.target.value = '';
  }

  function injectCSS() {
    if (document.getElementById('monstro-css')) return;
    const css = [
      "#monstro-section{margin-top:30px;}",
      "#monstro-root{margin-top:6px;}",
      "#monstro-root .m-toolbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:16px;padding:12px;border:1px solid var(--border,#2a2a2a);background:rgba(200,151,42,.04);}",
      "#monstro-root .m-charsel{background:#141414;color:var(--gold-light,#e8c87a);border:1px solid var(--gold-dim,#6b5a2a);padding:7px 10px;font-family:'Cinzel',serif;font-size:13px;min-width:180px;}",
      "#monstro-root .m-btn{background:linear-gradient(#1d1d1d,#141414);color:#cbb988;border:1px solid var(--gold-dim,#6b5a2a);padding:7px 12px;font-family:'Cinzel',serif;font-size:11px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .15s;}",
      "#monstro-root .m-btn:hover{border-color:var(--gold,#c8972a);color:#ffe9a0;}",
      "#monstro-root .m-btn.danger{color:#d08a8a;border-color:#6b3a3a;}",
      "#monstro-root .m-spacer{flex:1;}",
      "#monstro-root .m-panel{border:1px solid var(--border,#2a2a2a);border-left:3px solid var(--accent,#c8972a);background:linear-gradient(135deg,rgba(26,26,26,.6),rgba(10,10,10,.6));padding:16px 18px;margin-bottom:14px;}",
      "#monstro-root .m-panel.furia{border-color:#c84068;border-left-color:#c84068;}",
      "#monstro-root .m-panel-title{font-family:'Cinzel',serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--gold,#c8972a);border-bottom:1px solid rgba(200,151,42,.18);padding-bottom:8px;margin-bottom:14px;}",
      "#monstro-root .m-panel.furia .m-panel-title{color:#e87090;border-color:rgba(200,64,104,.25);}",
      "#monstro-root .m-hint{font-family:'EB Garamond',serif;font-style:italic;font-size:12px;letter-spacing:0;text-transform:none;color:var(--silver-dim,#8a8a8a);}",
      "#monstro-root label{display:block;font-family:'Cinzel',serif;font-size:9.5px;letter-spacing:1px;text-transform:uppercase;color:var(--silver-dim,#8a8a8a);margin-bottom:4px;}",
      "#monstro-root input[type=text],#monstro-root input[type=number],#monstro-root select,#monstro-root textarea{width:100%;background:#141414;color:#ececec;border:1px solid var(--border,#2a2a2a);padding:7px 9px;font-family:'EB Garamond',serif;font-size:14px;box-sizing:border-box;}",
      "#monstro-root textarea{resize:vertical;line-height:1.5;}",
      "#monstro-root input:focus,#monstro-root select:focus,#monstro-root textarea:focus{border-color:var(--gold,#c8972a);outline:none;}",
      "#monstro-root .m-row{display:grid;gap:12px;}",
      "#monstro-root .m-row.id{grid-template-columns:2fr 1.2fr 1fr;}",
      "#monstro-root .m-row.furia{grid-template-columns:1fr 3fr;}",
      "#monstro-root .m-field{margin-bottom:0;}",
      "#monstro-root .m-attr-row{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;}",
      "#monstro-root .m-attr{border:1px solid rgba(200,151,42,.2);background:rgba(200,151,42,.04);padding:10px;text-align:center;}",
      "#monstro-root .m-attr-code{font-family:'Cinzel Decorative',serif;font-size:18px;color:var(--gold-light,#e8c87a);}",
      "#monstro-root .m-attr-name{font-family:'EB Garamond',serif;font-size:11px;color:var(--silver-dim,#8a8a8a);margin:2px 0 8px;}",
      "#monstro-root .m-attr select{text-align:center;text-align-last:center;color:#fff;}",
      "#monstro-root .m-combat-row{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:12px;}",
      "#monstro-root .m-combat-row input{text-align:center;}",
      "#monstro-root .m-peri-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 28px;}",
      "#monstro-root .m-peri{display:flex;align-items:center;justify-content:space-between;gap:10px;border-bottom:1px solid rgba(200,151,42,.08);padding:3px 0;}",
      "#monstro-root .m-peri-n{font-family:'EB Garamond',serif;font-size:14px;color:#d8d4c8;}",
      "#monstro-root .m-peri input{width:78px;flex:none;text-align:center;color:var(--gold-light,#e8c87a);font-family:'Cinzel',serif;font-size:12px;padding:4px;}",
      "#monstro-root .m-list-item{border:1px solid rgba(200,151,42,.12);background:rgba(0,0,0,.2);padding:12px;margin-bottom:10px;}",
      "#monstro-root .m-list-row{display:flex;gap:10px;align-items:flex-end;margin-bottom:8px;}",
      "#monstro-root .m-list-row .grow{flex:1;}",
      "#monstro-root .m-rm{flex:none;width:32px;height:34px;background:#2a1414;border:1px solid #6b3a3a;color:#d08a8a;font-size:16px;cursor:pointer;}",
      "#monstro-root .m-rm:hover{border-color:#c85050;color:#ffb0b0;}",
      "#monstro-root .m-add{background:rgba(200,151,42,.06);border:1px dashed var(--gold-dim,#6b5a2a);color:var(--gold-light,#e8c87a);padding:8px 14px;font-family:'Cinzel',serif;font-size:11px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;width:100%;}",
      "#monstro-root .m-add:hover{border-color:var(--gold,#c8972a);background:rgba(200,151,42,.1);}",
      "#monstro-root .grow{flex:1;}",
      "@media (max-width:760px){#monstro-root .m-row.id,#monstro-root .m-row.furia{grid-template-columns:1fr;}#monstro-root .m-attr-row,#monstro-root .m-combat-row{grid-template-columns:repeat(2,1fr);}#monstro-root .m-peri-grid{grid-template-columns:1fr;}}"
    ].join('\n');
    const st = document.createElement('style'); st.id = 'monstro-css'; st.textContent = css;
    document.head.appendChild(st);
  }

  function mount() {
    const page = document.getElementById('page-bestiario');
    if (!page) return;
    const wrap = page.querySelector('.bestiario-wrapper') || page;
    if (document.getElementById('monstro-section')) return;
    // remove eventuais fichas estaticas duplicadas (versao read-only antiga)
    const oldList = wrap.querySelector('.creature-list');
    if (oldList) {
      const prev = oldList.previousElementSibling;
      if (prev && prev.classList.contains('best-section-title')) prev.remove();
      oldList.remove();
    }
    const sec = document.createElement('div');
    sec.id = 'monstro-section';
    sec.innerHTML = `
      <div class="best-section-title"><span class="bst-line"></span><span class="bst-text">Fichas de Criatura</span><span class="bst-line"></span></div>
      <div id="monstro-root"></div>`;
    wrap.appendChild(sec);
    injectCSS();
    load();
    render();
  }

  function init() {
    if (document.getElementById('page-bestiario')) { mount(); }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.SDA_Monstro = { rerender: render, reset: () => { localStorage.removeItem(STORE_KEY); load(); render(); } };
})();
