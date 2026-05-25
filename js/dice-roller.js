// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Dice Roller flutuante
// ═══════════════════════════════════════════════
(function() {

  function rollDie(sides) {
    return 1 + Math.floor(Math.random() * sides);
  }

  // Parse "2d10+d8+4" or "d10+5" etc.
  function parseAndRoll(formula) {
    const clean = formula.replace(/\s+/g, '').toLowerCase();
    if (!clean) return { error: 'Vazio' };
    const tokens = clean.match(/[+-]?[^+-]+/g);
    if (!tokens) return { error: 'Inválido' };
    const rolls = [];
    let modifier = 0;
    for (const raw of tokens) {
      let sign = 1, t = raw;
      if (t.startsWith('+')) t = t.slice(1);
      else if (t.startsWith('-')) { sign = -1; t = t.slice(1); }
      if (!t) continue;
      const m = t.match(/^(\d*)d(\d+)$/);
      if (m) {
        const count = m[1] ? parseInt(m[1], 10) : 1;
        const sides = parseInt(m[2], 10);
        if (count < 1 || count > 50 || sides < 2 || sides > 1000) {
          return { error: 'Fora do limite' };
        }
        for (let i = 0; i < count; i++) {
          rolls.push({ die: sides, value: rollDie(sides), sign });
        }
      } else if (/^\d+$/.test(t)) {
        modifier += sign * parseInt(t, 10);
      } else {
        return { error: 'Token inválido: ' + t };
      }
    }
    const total = rolls.reduce((s, r) => s + r.sign * r.value, 0) + modifier;
    return { rolls, modifier, total, ok: true };
  }

  // ── DOM build ──
  const root = document.createElement('div');
  root.id = 'dice-roller-root';
  root.innerHTML = `
    <button class="dr-fab" id="dr-fab" title="Dice Roller (R)" aria-label="Abrir Dice Roller">
      <svg viewBox="0 0 32 32" class="dr-fab-icon" aria-hidden="true">
        <polygon points="16,3 28,11 28,23 16,29 4,23 4,11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        <polygon points="16,3 28,11 16,17 4,11" fill="currentColor" opacity="0.18"/>
        <polygon points="16,17 28,11 28,23 16,29" fill="currentColor" opacity="0.34"/>
        <text x="16" y="22" text-anchor="middle" font-family="Cinzel, serif" font-size="9" font-weight="700" fill="currentColor">d</text>
      </svg>
      <span class="dr-fab-last" id="dr-fab-last"></span>
    </button>

    <div class="dr-panel" id="dr-panel" role="dialog" aria-label="Dice Roller">
      <div class="dr-header">
        <div class="dr-title">
          <span class="dr-title-glyph">◈</span>
          Dice Roller
        </div>
        <button class="dr-close" id="dr-close" aria-label="Fechar">×</button>
      </div>

      <div class="dr-section">
        <div class="dr-section-label">Rolagem Rápida</div>
        <div class="dr-quick-grid">
          <button class="dr-quick" data-die="6">d6</button>
          <button class="dr-quick" data-die="8">d8</button>
          <button class="dr-quick" data-die="10">d10</button>
          <button class="dr-quick" data-die="12">d12</button>
          <button class="dr-quick" data-die="20">d20</button>
          <button class="dr-quick" data-die="100">d100</button>
        </div>
      </div>

      <div class="dr-section">
        <div class="dr-section-label">Fórmula Personalizada</div>
        <form class="dr-formula-row" id="dr-form">
          <input type="text" class="dr-formula-input" id="dr-formula" placeholder="d10+d8+4" autocomplete="off">
          <button type="submit" class="dr-roll-btn">Rolar</button>
        </form>
        <div class="dr-hint">Aceita <code>d10</code> · <code>2d6+3</code> · <code>d12+d8+4</code></div>
      </div>

      <div class="dr-section dr-result-section" id="dr-result-section" hidden>
        <div class="dr-result-label" id="dr-result-formula"></div>
        <div class="dr-result-total" id="dr-result-total"></div>
        <div class="dr-result-breakdown" id="dr-result-breakdown"></div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const fab = root.querySelector('#dr-fab');
  const panel = root.querySelector('#dr-panel');
  const closeBtn = root.querySelector('#dr-close');
  const formulaInput = root.querySelector('#dr-formula');
  const form = root.querySelector('#dr-form');
  const resultSection = root.querySelector('#dr-result-section');
  const resultFormula = root.querySelector('#dr-result-formula');
  const resultTotal = root.querySelector('#dr-result-total');
  const resultBreakdown = root.querySelector('#dr-result-breakdown');
  const fabLast = root.querySelector('#dr-fab-last');

  function togglePanel(open) {
    const isOpen = panel.classList.contains('open');
    const next = open === undefined ? !isOpen : open;
    panel.classList.toggle('open', next);
    if (next) {
      setTimeout(() => formulaInput.focus(), 100);
    }
  }

  fab.addEventListener('click', () => togglePanel());
  closeBtn.addEventListener('click', () => togglePanel(false));

  root.querySelectorAll('.dr-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      const die = parseInt(btn.dataset.die, 10);
      const result = parseAndRoll('d' + die);
      result.formula = 'd' + die;
      showResult(result);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = formulaInput.value.trim();
    if (!f) return;
    const result = parseAndRoll(f);
    if (result.error) {
      resultSection.hidden = false;
      resultSection.classList.add('error');
      resultFormula.textContent = f;
      resultTotal.textContent = '—';
      resultBreakdown.textContent = result.error;
      return;
    }
    result.formula = f;
    showResult(result);
  });

  function showResult(r) {
    resultSection.hidden = false;
    resultSection.classList.remove('error');
    resultFormula.textContent = r.formula;
    resultTotal.textContent = r.total;

    // Breakdown — but skip if it's a single die with no modifier (redundant with total)
    const onlyOneDie = r.rolls.length === 1 && r.modifier === 0;
    if (onlyOneDie) {
      resultBreakdown.innerHTML = `<span class="single-note">d${r.rolls[0].die}</span>`;
    } else {
      const parts = r.rolls.map(roll => {
        const sign = roll.sign === -1 ? '−' : '';
        let cls = 'roll-die';
        if (roll.value === roll.die) cls += ' crit-high';
        else if (roll.value === 1) cls += ' crit-low';
        return `<span class="${cls}" title="d${roll.die}">${sign}${roll.value}</span>`;
      });
      let breakdown = parts.join('<span class="op">+</span>');
      if (r.modifier > 0) breakdown += `<span class="op">+</span><span class="roll-mod">${r.modifier}</span>`;
      else if (r.modifier < 0) breakdown += `<span class="op">−</span><span class="roll-mod">${Math.abs(r.modifier)}</span>`;
      resultBreakdown.innerHTML = breakdown;
    }

    // animate the total pop
    resultTotal.classList.remove('pop');
    void resultTotal.offsetWidth;
    resultTotal.classList.add('pop');

    // FAB ripple
    fab.classList.remove('pulse');
    void fab.offsetWidth;
    fab.classList.add('pulse');
    fabLast.textContent = r.total;
    fabLast.classList.remove('show');
    void fabLast.offsetWidth;
    fabLast.classList.add('show');
  }

  // Keyboard shortcut: R (when not typing) opens/closes
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      togglePanel(false);
      return;
    }
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      togglePanel();
    }
  });
})();
