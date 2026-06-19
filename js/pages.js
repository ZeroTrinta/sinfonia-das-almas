// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Page Renderers
//  Renders: Regras, Classes, Magias, Bestiário, Itens, Lore
// ═══════════════════════════════════════════════

// Helper: simple markdown-ish inline parser (bold + code + escape)
function fmt(s) {
  if (!s) return '';
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>');
}

// ═══════════════════════════════════════════════
//  REGRAS PAGE
// ═══════════════════════════════════════════════
function renderRegras() {
  const page = document.getElementById('page-regras');
  if (!page) return;

  const sections = window.RULES_SECTIONS || [];

  const html = `
    <div class="regras-wrapper">
      <aside class="regras-toc">
        <div class="toc-title">Sumário</div>
        <nav class="toc-nav">
          ${sections.map((s, i) => `
            <a class="toc-link${i === 0 ? ' active' : ''}" data-target="rule-${s.id}">
              <span class="toc-glyph">${s.glyph}</span>
              <span>${s.title}</span>
            </a>
          `).join('')}
        </nav>
      </aside>
      <div class="regras-content" id="regras-content">
        ${sections.map(s => `
          <section class="rule-section" id="rule-${s.id}">
            <div class="rule-section-header">
              <span class="rule-glyph">${s.glyph}</span>
              <h2>${s.title}</h2>
            </div>
            ${s.blocks.map(renderBlock).join('')}
          </section>
        `).join('')}
      </div>
    </div>
  `;
  page.innerHTML = html;

  // TOC scroll spy
  const content = document.getElementById('regras-content');
  const links = page.querySelectorAll('.toc-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = page.querySelector('#' + link.dataset.target);
      if (target) {
        content.scrollTo({ top: target.offsetTop - 24, behavior: 'smooth' });
      }
    });
  });

  // Active section on scroll
  content.addEventListener('scroll', () => {
    const sectionEls = page.querySelectorAll('.rule-section');
    let active = sectionEls[0]?.id;
    sectionEls.forEach(el => {
      if (el.offsetTop - 80 <= content.scrollTop) active = el.id;
    });
    links.forEach(l => l.classList.toggle('active', l.dataset.target === active));
  });
}

function renderBlock(b) {
  switch (b.type) {
    case 'intro': return `<p class="rule-intro">${fmt(b.text)}</p>`;
    case 'subtitle': return `<h3 class="rule-subtitle">${fmt(b.text)}</h3>`;
    case 'para': return `<p class="rule-para">${fmt(b.text)}</p>`;
    case 'quote': return `<blockquote class="rule-quote">${fmt(b.text)}</blockquote>`;
    case 'quote-small': return `<blockquote class="rule-quote-small">${fmt(b.text)}</blockquote>`;
    case 'highlight-formula': return `<div class="formula-box">${fmt(b.text)}</div>`;
    case 'callout': return `<div class="rule-callout">${fmt(b.text)}</div>`;
    case 'callout-small': return `<div class="rule-callout small">${fmt(b.text)}</div>`;
    case 'table':
      return `
        <div class="rule-table-wrap">
          <table class="rule-table">
            <thead><tr>${b.cols.map(c => `<th>${fmt(c)}</th>`).join('')}</tr></thead>
            <tbody>
              ${b.rows.map(r => `<tr>${r.map(c => `<td>${fmt(c)}</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
        </div>`;
    case 'skill-table':
      return `
        <div class="skill-table-wrap">
          <table class="skill-table">
            <thead><tr><th>Perícia</th><th>Combinação</th><th>Uso</th></tr></thead>
            <tbody>
              ${b.rows.map(r => `<tr><td class="sk-name">${fmt(r[0])}</td><td class="sk-combo">${fmt(r[1])}</td><td>${fmt(r[2])}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>`;
    case 'attr-grid':
      return `
        <div class="rule-attr-grid">
          ${b.items.map(a => `
            <div class="rule-attr-card">
              <div class="ra-code">${a.code}</div>
              <div class="ra-name">${a.name}</div>
              <div class="ra-desc">${fmt(a.desc)}</div>
            </div>
          `).join('')}
        </div>`;
    case 'aoe-grid':
      return `
        <div class="aoe-grid">
          ${b.items.map(a => `
            <div class="aoe-card">
              <div class="aoe-visual">${aoeVisual(a.icon)}</div>
              <div class="aoe-name">${a.name}</div>
              <div class="aoe-desc">${fmt(a.desc)}</div>
            </div>
          `).join('')}
        </div>`;
    case 'rule-list':
      return `
        <ul class="rule-list">
          ${b.items.map(it => `<li><strong class="rl-label">${fmt(it.label)}.</strong> ${fmt(it.text)}</li>`).join('')}
        </ul>`;
    case 'examples':
      return `
        <div class="examples-box">
          <div class="ex-title">${fmt(b.title)}</div>
          <ul>${b.items.map(it => `<li>${fmt(it)}</li>`).join('')}</ul>
        </div>`;
    case 'split':
      return `
        <div class="rule-split">
          <div class="split-card" style="--accent:${b.left.accent}">
            <div class="split-title">${fmt(b.left.title)}</div>
            <p>${fmt(b.left.text)}</p>
            <ul>${b.left.examples.map(e => `<li>${fmt(e)}</li>`).join('')}</ul>
          </div>
          <div class="split-card" style="--accent:${b.right.accent}">
            <div class="split-title">${fmt(b.right.title)}</div>
            <p>${fmt(b.right.text)}</p>
            <ul>${b.right.examples.map(e => `<li>${fmt(e)}</li>`).join('')}</ul>
          </div>
        </div>`;
    case 'soul-bars':
      return `
        <div class="soul-bars-visual">
          <div class="sb-det">
            <span class="sb-label">★ Determinação</span>
            <div class="sb-track"><div class="sb-fill det" style="width:70%"></div></div>
            <span class="sb-val">7</span>
          </div>
          <div class="sb-cor">
            <span class="sb-label">☠ Corrupção</span>
            <div class="sb-track"><div class="sb-fill cor" style="width:30%"></div></div>
            <span class="sb-val">3</span>
          </div>
          <div class="sb-note">Soma sempre 10. Cada avanço da Corrupção subtrai um nível da Determinação, e vice-versa.</div>
        </div>`;
    case 'step':
      return `
        <div class="rule-step">
          <div class="step-marker">${b.n}</div>
          <div class="step-body">
            <div class="step-title">${fmt(b.title)}</div>
            ${b.text ? `<p>${fmt(b.text)}</p>` : ''}
            ${b.formulas ? `<div class="step-formulas">${b.formulas.map(f => `
              <div class="step-formula"><span class="sf-label">${fmt(f.label)}</span><span class="sf-value">${fmt(f.formula)}</span></div>
            `).join('')}</div>` : ''}
            ${b.sets ? `<div class="step-sets">${b.sets.map(s => `
              <div class="set-card">
                <div class="set-name">${fmt(s.name)}</div>
                <div class="set-dice">${s.dice.map(d => `<span class="die-chip">${d}</span>`).join('')}</div>
              </div>
            `).join('')}</div>` : ''}
            ${b.items ? `<div class="step-items">${b.items.map(it => `
              <div class="step-item"><span class="si-label">${fmt(it.label)}</span><p>${fmt(it.text)}</p></div>
            `).join('')}</div>` : ''}
            ${b.bonus ? `<div class="step-bonus">${fmt(b.bonus)}</div>` : ''}
            ${b.sub ? `<p class="step-sub">${fmt(b.sub)}</p>` : ''}
          </div>
        </div>`;
    case 'schools-grid':
      return `
        <div class="schools-grid">
          ${b.items.map(sch => `
            <div class="school-card" style="--accent:${(window.SCHOOL_COLORS && window.SCHOOL_COLORS[sch.name]) || '#c8972a'}">
              <div class="school-name">${fmt(sch.name)}</div>
              <div class="school-desc">${fmt(sch.desc)}</div>
            </div>
          `).join('')}
        </div>`;
    case 'conditions-grid':
      return `
        <div class="conditions-grid">
          ${b.items.map(c => `
            <div class="cond-card" style="--accent:${c.color}">
              <div class="cond-name">${fmt(c.name)}</div>
              <div class="cond-desc">${fmt(c.desc)}</div>
            </div>
          `).join('')}
        </div>`;
    case 'split-formula':
      return `
        <div class="split-formula">
          ${b.items.map(it => `
            <div class="sf-card">
              <div class="sf-card-label">${fmt(it.label)}</div>
              <div class="sf-card-formula">${fmt(it.formula)}</div>
            </div>
          `).join('')}
        </div>`;
    default: return '';
  }
}

function aoeVisual(kind) {
  const COLOR = 'var(--gold)';
  const FAINT = 'rgba(200,151,42,0.25)';
  if (kind === 'linha') {
    return `<svg viewBox="0 0 80 80"><g stroke="${FAINT}" stroke-width="0.5">
      ${[...Array(6)].map((_,i)=>`<line x1="${i*13+1}" y1="0" x2="${i*13+1}" y2="80"/><line y1="${i*13+1}" x1="0" y2="${i*13+1}" x2="80"/>`).join('')}
    </g>
    <circle cx="14" cy="40" r="3" fill="${COLOR}"/>
    ${[...Array(5)].map((_,i)=>`<rect x="${14+i*13}" y="32" width="13" height="16" fill="${COLOR}" opacity="0.35" stroke="${COLOR}"/>`).join('')}
    </svg>`;
  }
  if (kind === 'cubo') {
    return `<svg viewBox="0 0 80 80"><g stroke="${FAINT}" stroke-width="0.5">
      ${[...Array(6)].map((_,i)=>`<line x1="${i*13+1}" y1="0" x2="${i*13+1}" y2="80"/><line y1="${i*13+1}" x1="0" y2="${i*13+1}" x2="80"/>`).join('')}
    </g>
    <rect x="14" y="14" width="39" height="39" fill="${COLOR}" opacity="0.35" stroke="${COLOR}"/>
    </svg>`;
  }
  if (kind === 'esfera') {
    return `<svg viewBox="0 0 80 80"><g stroke="${FAINT}" stroke-width="0.5">
      ${[...Array(6)].map((_,i)=>`<line x1="${i*13+1}" y1="0" x2="${i*13+1}" y2="80"/><line y1="${i*13+1}" x1="0" y2="${i*13+1}" x2="80"/>`).join('')}
    </g>
    <circle cx="40" cy="40" r="25" fill="${COLOR}" opacity="0.25" stroke="${COLOR}"/>
    <circle cx="40" cy="40" r="3" fill="${COLOR}"/>
    </svg>`;
  }
  if (kind === 'cone') {
    return `<svg viewBox="0 0 80 80"><g stroke="${FAINT}" stroke-width="0.5">
      ${[...Array(6)].map((_,i)=>`<line x1="${i*13+1}" y1="0" x2="${i*13+1}" y2="80"/><line y1="${i*13+1}" x1="0" y2="${i*13+1}" x2="80"/>`).join('')}
    </g>
    <polygon points="14,40 65,18 65,62" fill="${COLOR}" opacity="0.3" stroke="${COLOR}"/>
    <circle cx="14" cy="40" r="3" fill="${COLOR}"/>
    </svg>`;
  }
  return '';
}

// ═══════════════════════════════════════════════
//  CLASSES PAGE
// ═══════════════════════════════════════════════
function renderClasses() {
  const page = document.getElementById('page-classes');
  if (!page) return;
  const classes = window.CLASSES || [];

  page.innerHTML = `
    <div class="classes-wrapper">
      <div class="classes-header">
        <div class="ficha-title">Classes & Vocações</div>
        <hr class="ficha-divider">
        <p class="classes-lead">A Classe define como a sua vontade inabalável se manifesta no presente. Ao Nível 20, com base nas habilidades escolhidas, a sua alma evolui para uma <em>Segunda Classe</em>.</p>
      </div>
      <div class="class-tabs-row">
        ${classes.map((c, i) => `
          <button class="class-tab-pill${i === 0 ? ' active' : ''}" data-class="${c.id}" style="--c:${c.color}">
            <span class="ctp-glyph">${c.glyph}</span>${c.name}
          </button>
        `).join('')}
      </div>
      ${classes.map((c, i) => `
        <div class="class-panel${i === 0 ? ' active' : ''}" id="cp-${c.id}" style="--c:${c.color}">
          <div class="class-hero">
            <div class="class-glyph-big">${c.glyph}</div>
            <div class="class-hero-text">
              <h2>${c.name}</h2>
              <p class="class-tagline">${c.tagline}</p>
              <p class="class-desc">${fmt(c.desc)}</p>
            </div>
          </div>

          <div class="class-stats-grid">
            <div class="cs-card"><div class="cs-label">Atributos Chave</div><div class="cs-value">${fmt(c.attrs)}</div></div>
            <div class="cs-card"><div class="cs-label">Pontos de Vida</div><div class="cs-value">${fmt(c.pv)}</div></div>
            <div class="cs-card"><div class="cs-label">Pontos de Energia</div><div class="cs-value">${fmt(c.pe)}</div></div>
            <div class="cs-card"><div class="cs-label">Perícias</div><div class="cs-value">${fmt(c.pericias)}</div></div>
          </div>

          <div class="abilities-title">Árvore de Habilidades</div>
          <div class="ability-list">
            ${c.abilities.map(a => renderAbility(a)).join('')}
          </div>

          ${c.extra ? renderExtra(c.extra) : ''}
        </div>
      `).join('')}
    </div>
  `;

  // Tab switching
  page.querySelectorAll('.class-tab-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      page.querySelectorAll('.class-tab-pill').forEach(b => b.classList.remove('active'));
      page.querySelectorAll('.class-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('cp-' + btn.dataset.class);
      if (panel) panel.classList.add('active');
    });
  });
}

function renderAbility(a) {
  return `
    <div class="ability-card">
      <div class="ab-head">
        <div class="ab-name">${fmt(a.name)}</div>
        <div class="ab-tags">
          ${a.tier ? `<span class="ab-chip tier">${a.tier}</span>` : ''}
          ${a.cost ? `<span class="ab-chip cost">${fmt(a.cost)}</span>` : ''}
        </div>
      </div>
      <div class="ab-desc">${fmt(a.desc)}</div>
    </div>
  `;
}

function renderExtra(extra) {
  if (extra.sections) {
    return `
      <div class="abilities-title">${fmt(extra.title)}</div>
      ${extra.sections.map(s => `
        <div class="extra-subtitle">${fmt(s.subtitle)}</div>
        <div class="ability-list compact">
          ${s.items.map(renderAbility).join('')}
        </div>
      `).join('')}
    `;
  }
  return `
    <div class="abilities-title">${fmt(extra.title)}</div>
    <div class="ability-list compact">
      ${extra.items.map(renderAbility).join('')}
    </div>
  `;
}

// ═══════════════════════════════════════════════
//  MAGIAS PAGE
// ═══════════════════════════════════════════════
let magiasFilters = { type: 'all', circle: 'all', school: 'all', q: '' };
let openedSpell = null;

function renderMagias() {
  const page = document.getElementById('page-magias');
  if (!page) return;
  const spells = window.SPELLS || [];
  const schools = [...new Set(spells.map(s => s.school))].sort();

  page.innerHTML = `
    <div class="magias-wrapper">
      <div class="magias-header">
        <div class="ficha-title">Grimório</div>
        <hr class="ficha-divider">
        <div class="magias-count" id="magias-count"></div>
      </div>

      <div class="magias-filters">
        <div class="filter-group">
          <label>Tipo</label>
          <div class="pill-row" data-filter="type">
            <button class="pill active" data-val="all">Todas</button>
            <button class="pill" data-val="arcana">Arcanas</button>
            <button class="pill" data-val="divina">Sagradas</button>
          </div>
        </div>
        <div class="filter-group">
          <label>Círculo</label>
          <div class="pill-row" data-filter="circle">
            <button class="pill active" data-val="all">Todos</button>
            <button class="pill" data-val="1">1º</button>
            <button class="pill" data-val="2">2º</button>
            <button class="pill" data-val="3">3º</button>
          </div>
        </div>
        <div class="filter-group">
          <label>Escola</label>
          <select class="school-select" id="school-select">
            <option value="all">Todas as escolas</option>
            ${schools.map(s => `<option value="${s}">${s}</option>`).join('')}
          </select>
        </div>
        <div class="filter-group grow">
          <label>Buscar</label>
          <input type="text" class="search-input" id="spell-search" placeholder="Nome ou palavra-chave…">
        </div>
      </div>
      <div class="spell-grid" id="spell-grid"></div>
    </div>
  `;

  let modal = document.getElementById('spell-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'spell-modal';
    modal.id = 'spell-modal';
    modal.innerHTML = `<div class="spell-modal-backdrop"></div><div class="spell-modal-card"></div>`;
    document.body.appendChild(modal);
  }

  page.querySelectorAll('.pill-row').forEach(row => {
    row.addEventListener('click', e => {
      const btn = e.target.closest('.pill');
      if (!btn) return;
      const filter = row.dataset.filter;
      row.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      magiasFilters[filter] = btn.dataset.val;
      updateSpellGrid();
    });
  });
  page.querySelector('#school-select').addEventListener('change', e => { magiasFilters.school = e.target.value; updateSpellGrid(); });
  page.querySelector('#spell-search').addEventListener('input', e => { magiasFilters.q = e.target.value.toLowerCase().trim(); updateSpellGrid(); });
  modal.querySelector('.spell-modal-backdrop').addEventListener('click', closeSpell);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeSpell(); });
  updateSpellGrid();
}

function updateSpellGrid() {
  const spells = window.SPELLS || [];
  const grid = document.getElementById('spell-grid');
  const count = document.getElementById('magias-count');
  if (!grid) return;

  const filtered = spells.filter(s => {
    if (magiasFilters.type !== 'all' && s.type !== magiasFilters.type) return false;
    if (magiasFilters.circle !== 'all' && String(s.circle) !== magiasFilters.circle) return false;
    if (magiasFilters.school !== 'all' && s.school !== magiasFilters.school) return false;
    if (magiasFilters.q) {
      const hay = (s.name + ' ' + s.desc + ' ' + (s.tags || []).join(' ')).toLowerCase();
      if (!hay.includes(magiasFilters.q)) return false;
    }
    return true;
  });

  if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? 'magia' : 'magias'}`;

  const groups = [1, 2, 3].map(c => ({
    circle: c, items: filtered.filter(s => s.circle === c)
  })).filter(g => g.items.length > 0);

  grid.innerHTML = groups.map(g => `
    <div class="spell-group">
      <div class="spell-group-header"><span class="sg-num">${romanize(g.circle)}</span><span class="sg-label">${g.circle}º Círculo</span><span class="sg-count">${g.items.length}</span></div>
      <div class="spell-cards">${g.items.map(spellCardHTML).join('')}</div>
    </div>
  `).join('') || `<div class="no-results">Nenhuma magia encontrada com estes filtros.</div>`;

  grid.querySelectorAll('.spell-card').forEach(card => {
    card.addEventListener('click', () => openSpell(card.dataset.name));
  });
}

function spellCardHTML(s) {
  const c = (window.SCHOOL_COLORS || {})[s.school] || '#c8972a';
  const typeChip = s.type === 'divina' ? '<span class="sc-type divine">Sagrada</span>' : '<span class="sc-type arcane">Arcana</span>';
  const brief = (s.desc || '').replace(/\*\*/g, '').replace(/\n.*$/s, '').slice(0, 110) + '…';
  return `
    <div class="spell-card" data-name="${s.name.replace(/"/g, '&quot;')}" style="--school:${c}">
      <div class="sc-top"><span class="sc-school">${s.school}</span>${typeChip}</div>
      <div class="sc-name">${s.name}</div>
      <div class="sc-meta"><span class="sc-meta-item">⏱ ${s.cast}</span><span class="sc-meta-item">⌖ ${s.range}</span><span class="sc-meta-item">⚡ ${s.cost}</span></div>
      <div class="sc-brief">${fmt(brief)}</div>
      ${s.tags ? `<div class="sc-tags">${s.tags.map(t => `<span class="sc-tag">${t}</span>`).join('')}</div>` : ''}
    </div>
  `;
}

function openSpell(name) {
  const s = (window.SPELLS || []).find(x => x.name === name);
  if (!s) return;
  openedSpell = s;
  const modal = document.getElementById('spell-modal');
  const c = (window.SCHOOL_COLORS || {})[s.school] || '#c8972a';
  modal.querySelector('.spell-modal-card').innerHTML = `
    <button class="sm-close" aria-label="Fechar">×</button>
    <div class="sm-top" style="--school:${c}">
      <div class="sm-circle">${romanize(s.circle)}</div>
      <div class="sm-top-text"><div class="sm-school">${s.school} — ${s.type === 'divina' ? 'Sagrada' : 'Arcana'}</div><h2 class="sm-name">${s.name}</h2></div>
    </div>
    <div class="sm-meta">
      <div class="sm-meta-row"><span class="sm-mkey">Tempo</span><span class="sm-mval">${s.cast}</span></div>
      <div class="sm-meta-row"><span class="sm-mkey">Alcance</span><span class="sm-mval">${s.range}</span></div>
      <div class="sm-meta-row"><span class="sm-mkey">Duração</span><span class="sm-mval">${s.duration}</span></div>
      <div class="sm-meta-row"><span class="sm-mkey">Custo</span><span class="sm-mval">${s.cost}</span></div>
    </div>
    <div class="sm-desc">${fmt(s.desc)}</div>
    ${s.tags ? `<div class="sm-tags">${s.tags.map(t => `<span class="sc-tag">${t}</span>`).join('')}</div>` : ''}
  `;
  modal.querySelector('.sm-close').addEventListener('click', closeSpell);
  modal.classList.add('open');
}

function closeSpell() {
  const modal = document.getElementById('spell-modal');
  if (modal) modal.classList.remove('open');
  openedSpell = null;
}
function romanize(n) { return ({ 1: 'I', 2: 'II', 3: 'III' })[n] || n; }

// ═══════════════════════════════════════════════
//  BESTIÁRIO PAGE
// ═══════════════════════════════════════════════
function renderBestiario() {
  const page = document.getElementById('page-bestiario');
  if (!page) return;

  const B = window.BESTIARY || { intro: '', categories: [], types: [] };

  page.innerHTML = `
    <div class="bestiario-wrapper">
      <div class="classes-header">
        <div class="ficha-title">Bestiário</div>
        <hr class="ficha-divider">
        <p class="classes-lead">${B.intro}</p>
      </div>

      <div class="best-section-title"><span class="bst-line"></span><span class="bst-text">Categorias de Ameaça</span><span class="bst-line"></span></div>
      <div class="best-cat-grid">
        ${B.categories.map((c, i) => `
          <div class="best-cat-card" id="best-cat-${i}" style="--accent:${c.color}">
            <div class="bcc-glyph">${c.glyph}</div>
            <div class="bcc-body">
              <div class="bcc-name">${c.name}</div>
              <div class="bcc-desc">${c.desc}</div>
            </div>
          </div>`).join('')}
      </div>

      <div class="best-section-title"><span class="bst-line"></span><span class="bst-text">Tipos de Criatura</span><span class="bst-line"></span></div>
      <div class="best-type-grid">
        ${B.types.map((t, i) => `
          <div class="best-type-card" id="best-type-${i}">
            <div class="btc-head"><span class="btc-glyph">${t.glyph}</span><span class="btc-name">${t.name}</span></div>
            <div class="btc-desc">${t.desc}</div>
          </div>`).join('')}
      </div>

      ${(window.CREATURES && window.CREATURES.length) ? `
      <div class="best-section-title"><span class="bst-line"></span><span class="bst-text">Criaturas</span><span class="bst-line"></span></div>
      <div class="creature-list">
        ${window.CREATURES.map((cr, i) => creatureCardHTML(cr, i)).join('')}
      </div>` : ''}

      <div class="best-note">A taxonomia acima organiza o bestiário; as fichas de criatura abaixo trazem atributos, recursos e habilidades completos. O catálogo seguirá crescendo.</div>
    </div>
  `;
}

function creatureCardHTML(cr, i) {
  const CAT_COLORS = { 'Comum': '#7a8a72', 'Elite': '#5a9ad0', 'Chefe': '#d08a30', 'Lendário': '#c84068' };
  const accent = CAT_COLORS[cr.categoria] || '#c8972a';
  const A = cr.atributos || {};
  const attrs = [['POD', A.pod], ['AGI', A.agi], ['INT', A.int], ['CAR', A.car], ['MIS', A.mis]]
    .map(([k, v]) => `<span class="cc-attr"><b>${k}</b> ${v || '—'}</span>`).join('');
  const statDefs = [['PV', cr.pv], ['PE', cr.pe], ['Defesa', cr.defesa]];
  if (cr.ndMistica != null) statDefs.push(['ND Místico', cr.ndMistica]);
  statDefs.push(['Desloc.', cr.deslocamento != null ? cr.deslocamento + 'm' : '—']);
  const stats = statDefs.map(([k, v]) => `<div class="cc-stat"><span class="cc-stat-k">${k}</span><span class="cc-stat-v">${v}</span></div>`).join('');
  const ataques = (cr.ataques || []).map(a => `<div class="cc-abil"><div class="cc-abil-h"><span class="cc-abil-n">${fmt(a.nome)}</span>${a.custo ? `<span class="cc-abil-c">${fmt(a.custo)}</span>` : ''}</div><div class="cc-abil-d">${fmt(a.efeito)}</div></div>`).join('');
  const habs = (cr.habilidades || []).map(h => `<div class="cc-abil"><div class="cc-abil-h"><span class="cc-abil-n">${fmt(h.nome)}</span></div><div class="cc-abil-d">${fmt(h.efeito)}</div></div>`).join('');
  const af = cr.almaFuriosa ? `
    <div class="cc-furia">
      <div class="cc-furia-top"><span class="cc-furia-tag">✸ Alma Furiosa</span><span class="cc-furia-bar">Barra de Fúria: ${cr.almaFuriosa.barra}</span></div>
      <div class="cc-furia-name">${fmt(cr.almaFuriosa.nome)}</div>
      <div class="cc-furia-eff">${fmt(cr.almaFuriosa.efeito)}</div>
    </div>` : '';
  return `
    <div class="creature-card" id="creature-${i}" style="--accent:${accent}">
      <div class="cc-head">
        <div class="cc-id"><span class="cc-name">${fmt(cr.nome)}</span><span class="cc-type">${fmt(cr.tipo)}</span></div>
        <span class="cc-cat">${fmt(cr.categoria)}</span>
      </div>
      ${cr.descricao ? `<div class="cc-flavor">${fmt(cr.descricao)}</div>` : ''}
      <div class="cc-attrs">${attrs}</div>
      <div class="cc-stats">${stats}</div>
      ${cr.resistencias ? `<div class="cc-resist"><span class="cc-resist-k">Resistências:</span> ${fmt(cr.resistencias)}</div>` : ''}
      ${ataques ? `<div class="cc-sec-label">Ataques</div>${ataques}` : ''}
      ${habs ? `<div class="cc-sec-label">Habilidades</div>${habs}` : ''}
      ${af}
    </div>`;
}

// ═══════════════════════════════════════════════
//  ITENS PAGE (A Nova Aba!)
// ═══════════════════════════════════════════════
let itensFilters = { category: 'all', q: '' };

function renderItens() {
  const page = document.getElementById('page-itens');
  if (!page) return;
  const items = window.ITEMS || [];
  
  // Pegar todas as categorias únicas que criamos
  const categories = [...new Set(items.map(i => i.category))].sort();

  page.innerHTML = `
    <div class="magias-wrapper">
      <div class="magias-header">
        <div class="ficha-title">Arsenal & Equipamentos</div>
        <hr class="ficha-divider">
        <div class="magias-count" id="itens-count"></div>
      </div>

      <div class="magias-filters">
        <div class="filter-group">
          <label>Categoria</label>
          <select class="school-select" id="item-category-select">
            <option value="all">Todas as categorias</option>
            ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
        </div>
        <div class="filter-group grow">
          <label>Buscar Equipamento</label>
          <input type="text" class="search-input" id="item-search" placeholder="Nome do item ou propriedade...">
        </div>
      </div>

      <div class="spell-grid" id="item-grid"></div>
    </div>
  `;

  // Adicionar eventos aos filtros
  page.querySelector('#item-category-select').addEventListener('change', e => {
    itensFilters.category = e.target.value;
    updateItemGrid();
  });
  page.querySelector('#item-search').addEventListener('input', e => {
    itensFilters.q = e.target.value.toLowerCase().trim();
    updateItemGrid();
  });

  let modal = document.getElementById('item-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'spell-modal';
    modal.id = 'item-modal';
    modal.innerHTML = `<div class="spell-modal-backdrop"></div><div class="spell-modal-card"></div>`;
    document.body.appendChild(modal);
  }
  modal.querySelector('.spell-modal-backdrop').addEventListener('click', closeItem);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeItem(); });

  updateItemGrid();
}

function updateItemGrid() {
  const items = window.ITEMS || [];
  const grid = document.getElementById('item-grid');
  const count = document.getElementById('itens-count');
  if (!grid) return;

  const filtered = items.filter(i => {
    if (itensFilters.category !== 'all' && i.category !== itensFilters.category) return false;
    if (itensFilters.q) {
      const hay = (i.name + ' ' + i.desc + ' ' + (i.tags || []).join(' ')).toLowerCase();
      if (!hay.includes(itensFilters.q)) return false;
    }
    return true;
  });

  if (count) {
    count.textContent = `${filtered.length} ${filtered.length === 1 ? 'item' : 'itens'}`;
  }

  grid.innerHTML = filtered.map(itemCardHTML).join('') || `<div class="no-results">Nenhum item encontrado.</div>`;

  grid.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', () => openItem(card.dataset.name));
  });
}

function itemCardHTML(i) {
  const detail = i.desc ? i.desc : (i.prop && i.prop !== '—' ? i.prop : '');
  return `
    <div class="spell-card item-card" data-name="${(i.name || '').replace(/"/g, '&quot;')}" style="--school:#7888a0;">
      <div class="sc-top">
        <span class="sc-school" style="color:var(--gold)">${i.category}</span>
        <span class="sc-type" style="background:rgba(200,151,42,0.1);color:var(--gold-light)">${i.type}</span>
      </div>
      <div class="sc-name" style="color:#fff">${i.name}</div>
      <div class="sc-meta" style="justify-content: flex-start; gap: 12px; flex-wrap: wrap;">
        ${i.damage ? `<span class="sc-meta-item">⚔ ${i.damage}</span>` : ''}
        ${i.defense ? `<span class="sc-meta-item">🛡 ${i.defense}</span>` : ''}
        ${i.valorFixo ? `<span class="sc-meta-item">✦ ${i.valorFixo}</span>` : ''}
        ${i.pi ? `<span class="sc-meta-item">◈ ${i.pi} PI</span>` : ''}
        <span class="sc-meta-item">💰 ${i.price}</span>
      </div>
      ${detail ? `<div class="sc-brief" style="margin-top: 10px;">${fmt(detail)}</div>` : ''}
    </div>
  `;
}

const ITEM_PROPERTIES = {
  'Duas Mãos': 'Exige as duas mãos para ser empunhada. Não pode ser usada junto de escudo ou segunda arma.',
  'Leve': 'Pode ser empunhada com uma mão sem penalidade, liberando a outra para um escudo.',
  'Dupla Empunhadura': 'Apenas armas com esta propriedade podem ser empunhadas uma em cada mão. Ao atacar com a segunda arma, gasta uma Ação Parcial; o dano é apenas o valor fixo da arma, sem os dados de atributo.',
  'Arremesso': 'Pode ser lançada como ataque à distância até o alcance indicado. Após o arremesso, a arma precisa ser recuperada — ela não retorna sozinha.',
  'Recarga': 'Após cada disparo, é necessário gastar a ação indicada (Parcial ou Inicial) para recarregar antes de disparar novamente.',
  'Veloz': 'Concede +1 na Iniciativa enquanto a arma estiver empunhada.',
  'Brutal': 'Em caso de Crítico, o ataque causa +5 de dano adicional além do dano dobrado normal.',
  'Contundente': 'Ignora completamente a RD concedida por armaduras leves.'
};

function itemSpecialProps(i) {
  const text = ((i.prop || '') + ' ' + (i.valorFixo || '')).toLowerCase();
  return Object.keys(ITEM_PROPERTIES).filter(k => text.includes(k.toLowerCase()));
}

function openItem(name) {
  const i = (window.ITEMS || []).find(x => x.name === name);
  if (!i) return;
  const modal = document.getElementById('item-modal');
  if (!modal) return;
  const rows = [['Categoria', i.category], ['Tipo', i.type]];
  if (i.damage) rows.push(['Dano', i.damage]);
  if (i.defense) rows.push(['Defesa', i.defense]);
  if (i.valorFixo) rows.push(['Conduíte', i.valorFixo]);
  if (i.pi) rows.push(['Custo de Inventário', i.pi + ' PI']);
  rows.push(['Preço', i.price]);
  const special = itemSpecialProps(i);
  modal.querySelector('.spell-modal-card').innerHTML = `
    <button class="sm-close" aria-label="Fechar">×</button>
    <div class="sm-top" style="--school:#c8972a">
      <div class="sm-top-text"><div class="sm-school">${i.category} — ${i.type}</div><h2 class="sm-name">${i.name}</h2></div>
    </div>
    <div class="sm-meta">
      ${rows.map(r => `<div class="sm-meta-row"><span class="sm-mkey">${r[0]}</span><span class="sm-mval">${fmt(String(r[1]))}</span></div>`).join('')}
    </div>
    ${i.desc ? `<div class="sm-desc">${fmt(i.desc)}</div>` : ''}
    ${i.prop && i.prop !== '—' ? `<div class="sm-desc"><strong>Propriedade:</strong> ${fmt(i.prop)}</div>` : ''}
    ${special.length ? `<div class="item-prop-defs"><div class="ipd-title">Propriedades Especiais</div>${special.map(k => `<div class="ipd"><span class="ipd-name">${k}</span><span class="ipd-desc">${ITEM_PROPERTIES[k]}</span></div>`).join('')}</div>` : ''}
  `;
  modal.querySelector('.sm-close').addEventListener('click', closeItem);
  modal.classList.add('open');
}

function closeItem() {
  const modal = document.getElementById('item-modal');
  if (modal) modal.classList.remove('open');
}

// ═══════════════════════════════════════════════
//  LORE PAGE
// ═══════════════════════════════════════════════
function renderLore() {
  const page = document.getElementById('page-lore');
  if (!page) return;
  page.innerHTML = `
    <div class="lore-wrapper">
      <div class="lore-hero">
        <div class="lore-hero-glyph">✺</div><h1>Lore</h1>
        <div class="lore-status"><span class="pulse-dot"></span>Em construção</div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════
//  INIT GLOBALS
// ═══════════════════════════════════════════════
window.__openSpellByName = function(name) {
  setTimeout(() => openSpell(name), 50);
};

window.initContentPages = function() {
  renderRegras();
  renderClasses();
  renderMagias();
  renderBestiario();
  renderItens();  // <-- A renderizar a aba de Itens!
  renderLore();
};
