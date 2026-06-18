// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Busca Global (Ctrl/Cmd+K)
// ═══════════════════════════════════════════════
(function() {

  // Build search index after everything loads
  function buildIndex() {
    const idx = [];

    // ── RULES (sections + subtitles) ──
    (window.RULES_SECTIONS || []).forEach(sec => {
      // section itself
      idx.push({
        cat: 'Regras',
        icon: sec.glyph || '◈',
        title: sec.title,
        sub: 'Seção das Regras',
        nav: { tab: 'regras', target: 'rule-' + sec.id },
        keywords: sec.title
      });
      // subtitles inside (mini headings)
      sec.blocks.forEach(b => {
        if (b.type === 'subtitle') {
          idx.push({
            cat: 'Regras',
            icon: '·',
            title: b.text,
            sub: sec.title,
            nav: { tab: 'regras', target: 'rule-' + sec.id },
            keywords: b.text + ' ' + sec.title
          });
        }
        // conditions
        if (b.type === 'conditions-grid') {
          b.items.forEach(c => {
            idx.push({
              cat: 'Condição',
              icon: '❖',
              title: c.name,
              sub: c.desc,
              nav: { tab: 'regras', target: 'rule-condicoes' },
              keywords: c.name + ' ' + c.desc,
              accent: c.color
            });
          });
        }
        // schools
        if (b.type === 'schools-grid') {
          b.items.forEach(s => {
            idx.push({
              cat: 'Escola de Magia',
              icon: '✦',
              title: s.name,
              sub: s.desc,
              nav: { tab: 'magias', school: s.name },
              keywords: s.name + ' ' + s.desc
            });
          });
        }
      });
    });

    // ── CLASSES & ABILITIES ──
    (window.CLASSES || []).forEach(cls => {
      idx.push({
        cat: 'Classe',
        icon: cls.glyph || '⚔',
        title: cls.name,
        sub: cls.tagline,
        nav: { tab: 'classes', class: cls.id },
        keywords: cls.name + ' ' + cls.tagline + ' ' + cls.desc,
        accent: cls.color
      });
      cls.abilities.forEach(a => {
        idx.push({
          cat: cls.name + ' · Habilidade',
          icon: '◇',
          title: a.name,
          sub: stripBold(a.desc).slice(0, 90) + '…',
          nav: { tab: 'classes', class: cls.id },
          keywords: a.name + ' ' + a.desc,
          accent: cls.color
        });
      });
      // extras (manobras, venenos, truques, disparos)
      if (cls.extra) {
        const groups = cls.extra.sections ? cls.extra.sections : [{ subtitle: cls.extra.title, items: cls.extra.items }];
        groups.forEach(g => {
          (g.items || []).forEach(it => {
            idx.push({
              cat: cls.name + ' · ' + (g.subtitle || cls.extra.title),
              icon: '◈',
              title: it.name,
              sub: stripBold(it.desc).slice(0, 90) + '…',
              nav: { tab: 'classes', class: cls.id },
              keywords: it.name + ' ' + it.desc,
              accent: cls.color
            });
          });
        });
      }
    });

    // ── SPELLS ──
    (window.SPELLS || []).forEach(s => {
      const sc = (window.SCHOOL_COLORS || {})[s.school] || '#c8972a';
      idx.push({
        cat: (s.type === 'divina' ? 'Magia Sagrada' : 'Magia Arcana') + ' · ' + s.circle + 'º',
        icon: '✺',
        title: s.name,
        sub: s.school + ' · ' + s.cost + (s.tags ? ' · ' + s.tags.join(', ') : ''),
        nav: { tab: 'magias', spell: s.name },
        keywords: s.name + ' ' + s.school + ' ' + s.desc + ' ' + (s.tags || []).join(' '),
        accent: sc
      });
    });

    // ── ITEMS (Equipamentos e Arsenal) ──
    (window.ITEMS || []).forEach(it => {
      idx.push({
        cat: 'Equipamento',
        icon: '⚖',
        title: it.name,
        sub: it.category + (it.damage && it.damage !== '-' ? ' · Dano: ' + it.damage : '') + (it.defense ? ' · Defesa: ' + it.defense : ''),
        nav: { tab: 'itens', itemSearch: it.name },
        keywords: (it.name + ' ' + it.category + ' ' + it.type + ' ' + (it.desc || '') + ' ' + (it.tags || []).join(' ')).toLowerCase(),
        accent: '#7888a0'
      });
    });

    // ── TALENTOS HEROICOS (linha a linha da tabela) ──
    {
      const talSec = (window.RULES_SECTIONS || []).find(s => s.id === 'talentos');
      const talTbl = talSec && talSec.blocks.find(b => b.type === 'table');
      if (talTbl) talTbl.rows.forEach(r => {
        idx.push({
          cat: 'Talento Heroico',
          icon: '★',
          title: r[0],
          sub: r[1] + ' · ' + (r[2] || '').slice(0, 50),
          nav: { tab: 'regras', target: 'rule-talentos' },
          keywords: (r.join(' ')).toLowerCase(),
          accent: '#f0c060'
        });
      });
    }

    // ── BESTIÁRIO (categorias de ameaça + tipos de criatura) ──
    if (window.BESTIARY) {
      (window.BESTIARY.categories || []).forEach((c, i) => {
        idx.push({
          cat: 'Categoria de Ameaça',
          icon: c.glyph || '☠',
          title: c.name,
          sub: 'Bestiário · ' + (c.desc || '').slice(0, 60),
          nav: { tab: 'bestiario', target: 'best-cat-' + i },
          keywords: (c.name + ' ' + (c.desc || '')).toLowerCase(),
          accent: c.color || '#c8972a'
        });
      });
      (window.BESTIARY.types || []).forEach((t, i) => {
        idx.push({
          cat: 'Tipo de Criatura',
          icon: '☠',
          title: t.name,
          sub: 'Bestiário · ' + (t.desc || '').slice(0, 60),
          nav: { tab: 'bestiario', target: 'best-type-' + i },
          keywords: (t.name + ' ' + (t.desc || '')).toLowerCase(),
          accent: '#9aa0b0'
        });
      });
    }

    return idx;
  }

  function stripBold(s) {
    return (s || '').replace(/\*\*/g, '').replace(/\n/g, ' ');
  }

  // Scoring: name match > sub match > keywords match
  function score(item, q) {
    if (!q) return 0;
    const qLow = q.toLowerCase();
    const titleLow = item.title.toLowerCase();
    const subLow = (item.sub || '').toLowerCase();
    const kwLow = (item.keywords || '').toLowerCase();
    if (titleLow === qLow) return 1000;
    if (titleLow.startsWith(qLow)) return 500 + (50 - Math.min(titleLow.length, 50));
    if (titleLow.includes(qLow)) return 300;
    if (subLow.includes(qLow)) return 100;
    if (kwLow.includes(qLow)) return 30;
    return 0;
  }

  // ── DOM build ──
  const overlay = document.createElement('div');
  overlay.id = 'search-overlay';
  overlay.innerHTML = `
    <div class="srch-backdrop"></div>
    <div class="srch-modal">
      <div class="srch-input-row">
        <span class="srch-icon">🔎</span>
        <input type="text" class="srch-input" id="srch-input" placeholder="Buscar regras, itens, magias, condições…" autocomplete="off" autofocus>
        <span class="srch-kbd">ESC</span>
      </div>
      <div class="srch-results" id="srch-results"></div>
      <div class="srch-footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> navegar</span>
        <span><kbd>Enter</kbd> abrir</span>
        <span><kbd>Esc</kbd> fechar</span>
        <span class="srch-tip">Atalho: <kbd>Ctrl</kbd>+<kbd>K</kbd></span>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const backdrop = overlay.querySelector('.srch-backdrop');
  const input = overlay.querySelector('#srch-input');
  const resultsEl = overlay.querySelector('#srch-results');

  let index = [];
  let currentResults = [];
  let selectedIdx = 0;

  function refreshIndex() {
    index = buildIndex();
  }

  function openPalette() {
    if (!index.length) refreshIndex();
    overlay.classList.add('open');
    input.value = '';
    selectedIdx = 0;
    renderResults(getDefaultResults());
    setTimeout(() => input.focus(), 50);
  }
  function closePalette() {
    overlay.classList.remove('open');
  }
  function getDefaultResults() {
    // Show a "suggestions" panel: random per category + tips
    const groups = {};
    index.forEach(it => {
      const g = it.cat.split(' · ')[0];
      if (!groups[g]) groups[g] = [];
      groups[g].push(it);
    });
    const out = [];
    ['Regras', 'Classe', 'Magia Arcana', 'Equipamento', 'Condição'].forEach(g => {
      const arr = groups[g] || [];
      arr.slice(0, 3).forEach(x => out.push(x));
    });
    return out.slice(0, 12);
  }

  function renderResults(items) {
    currentResults = items;
    if (!items.length) {
      resultsEl.innerHTML = '<div class="srch-empty">Nenhum resultado.</div>';
      return;
    }
    resultsEl.innerHTML = items.map((it, i) => `
      <div class="srch-row${i === selectedIdx ? ' selected' : ''}" data-idx="${i}" style="${it.accent ? '--accent:' + it.accent : ''}">
        <span class="sr-icon">${it.icon}</span>
        <div class="sr-text">
          <div class="sr-title">${escape(it.title)}</div>
          <div class="sr-sub">${escape(it.sub || '')}</div>
        </div>
        <span class="sr-cat">${escape(it.cat)}</span>
      </div>
    `).join('');
    resultsEl.querySelectorAll('.srch-row').forEach(row => {
      row.addEventListener('click', () => {
        selectedIdx = parseInt(row.dataset.idx, 10);
        commit();
      });
      row.addEventListener('mouseenter', () => {
        selectedIdx = parseInt(row.dataset.idx, 10);
        updateSelection();
      });
    });
    updateSelection();
  }

  function updateSelection() {
    resultsEl.querySelectorAll('.srch-row').forEach((row, i) => {
      row.classList.toggle('selected', i === selectedIdx);
    });
    const sel = resultsEl.querySelector('.srch-row.selected');
    if (sel) sel.scrollIntoView({ block: 'nearest' });
  }

  function escape(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ── Navigation ──
  function commit() {
    const it = currentResults[selectedIdx];
    if (!it) return;
    const nav = it.nav;
    closePalette();

    // 1. Switch tab
    if (typeof window.navigateTo === 'function') {
      window.navigateTo(nav.tab);
    } else {
      // Fallback: click the nav tab
      const tab = document.querySelector(`.nav-tab[data-page="${nav.tab}"]`);
      if (tab) tab.click();
    }

    // 2. Optional: deep navigation after a short delay (let page render)
    setTimeout(() => {
      if (nav.target) {
        const targetEl = document.getElementById(nav.target);
        if (targetEl) {
          const content = document.getElementById('regras-content');
          if (content && nav.tab === 'regras') {
            content.scrollTo({ top: targetEl.offsetTop - 16, behavior: 'smooth' });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          // flash highlight
          flash(targetEl);
        }
      }
      if (nav.class) {
        const pill = document.querySelector(`.class-tab-pill[data-class="${nav.class}"]`);
        if (pill) pill.click();
      }
      if (nav.spell) {
        if (typeof window.__openSpellByName === 'function') {
          window.__openSpellByName(nav.spell);
        }
      }
      if (nav.school) {
        const sel = document.getElementById('school-select');
        if (sel) {
          sel.value = nav.school;
          sel.dispatchEvent(new Event('change'));
        }
      }
      if (nav.itemSearch) {
        const searchInput = document.getElementById('item-search');
        if (searchInput) {
          searchInput.value = nav.itemSearch;
          searchInput.dispatchEvent(new Event('input'));
        }
      }
    }, 380);
  }

  function flash(el) {
    el.classList.add('srch-flash');
    setTimeout(() => el.classList.remove('srch-flash'), 1400);
  }

  // ── Input ──
  input.addEventListener('input', () => {
    const q = input.value.trim();
    selectedIdx = 0;
    if (!q) {
      renderResults(getDefaultResults());
      return;
    }
    const scored = index.map(it => ({ it, s: score(it, q) }))
                       .filter(x => x.s > 0)
                       .sort((a, b) => b.s - a.s)
                       .slice(0, 30)
                       .map(x => x.it);
    renderResults(scored);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = Math.min(currentResults.length - 1, selectedIdx + 1);
      updateSelection();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = Math.max(0, selectedIdx - 1);
      updateSelection();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      commit();
    }
  });

  backdrop.addEventListener('click', closePalette);

  // Global shortcut
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closePalette();
      return;
    }
    // Ctrl/Cmd + K
    const isK = e.key === 'k' || e.key === 'K';
    if (isK && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      openPalette();
    }
    // Also support "/" when not focused on an input
    const tag = (e.target.tagName || '').toLowerCase();
    if (e.key === '/' && tag !== 'input' && tag !== 'textarea' && !overlay.classList.contains('open')) {
      e.preventDefault();
      openPalette();
    }
  });

  // Expose hook for the magia page renderer to wire up
  window.__openSearch = openPalette;

  // Public refresh API
  window.refreshSearchIndex = refreshIndex;

  // Build initial index once content pages are ready
  setTimeout(refreshIndex, 100);
})();
