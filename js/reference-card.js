// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Cartão de Referência rápida
//  Overlay imprimível
// ═══════════════════════════════════════════════
(function() {
  const overlay = document.createElement('div');
  overlay.id = 'ref-card-overlay';
  overlay.innerHTML = `
    <div class="rc-backdrop"></div>
    <div class="rc-shell">
      <div class="rc-toolbar">
        <div class="rc-toolbar-title">Cartão de Referência</div>
        <div class="rc-toolbar-actions">
          <button class="rc-tool-btn" id="rc-print">Imprimir / PDF</button>
          <button class="rc-tool-btn rc-close" id="rc-close" aria-label="Fechar">×</button>
        </div>
      </div>

      <div class="rc-page" id="rc-page">
        <!-- HEADER -->
        <div class="rc-header">
          <div class="rc-header-left">
            <div class="rc-brand-glyph">♥</div>
            <div>
              <div class="rc-brand-title">SINFONIA DAS ALMAS</div>
              <div class="rc-brand-sub">Cartão de Referência Rápida</div>
            </div>
          </div>
          <div class="rc-header-right">
            <div class="rc-formula-pill">
              <span class="rc-fp-label">Fórmula de Resolução</span>
              <span class="rc-fp-val">Dado A + Dado B + Mod ≥ ND</span>
            </div>
          </div>
        </div>

        <!-- GRID -->
        <div class="rc-grid">

          <!-- Atributos -->
          <section class="rc-block">
            <h3 class="rc-block-title">Atributos</h3>
            <div class="rc-attrs">
              <div><b>POD</b> <span>Poder</span></div>
              <div><b>AGI</b> <span>Agilidade</span></div>
              <div><b>INT</b> <span>Intelecto</span></div>
              <div><b>CAR</b> <span>Carisma</span></div>
              <div><b>MIS</b> <span>Misticismo</span></div>
            </div>
            <div class="rc-attr-scale">d6 · d8 · d10 · d12</div>
          </section>

          <!-- Maestria -->
          <section class="rc-block">
            <h3 class="rc-block-title">Graus de Maestria</h3>
            <table class="rc-mini-table">
              <tr><td>Iniciante</td><td><b>+2</b></td></tr>
              <tr><td>Treinado</td><td><b>+4</b></td></tr>
              <tr><td>Experiente</td><td><b>+6</b></td></tr>
            </table>
          </section>

          <!-- Ações por Turno -->
          <section class="rc-block rc-span-2">
            <h3 class="rc-block-title">Ações por Turno</h3>
            <div class="rc-actions">
              <div><b>Ação Inicial</b> Ataque, conjuração principal, manobra pesada</div>
              <div><b>Ação Parcial</b> Movimento secundário, foco, manipulação</div>
              <div><b>Movimento</b> Até o seu valor de Deslocamento</div>
              <div><b>Reação</b> Reposta a gatilho (1 / rodada)</div>
              <div><b>Ação Bônus</b> Habilidades específicas (ex: Passo Nebuloso)</div>
              <div><b>Ação Livre</b> Falar, soltar item — não consome turno</div>
            </div>
          </section>

          <!-- Fórmulas Vitais -->
          <section class="rc-block rc-span-2">
            <h3 class="rc-block-title">Fórmulas Vitais</h3>
            <table class="rc-mini-table rc-formula-table">
              <tr><td>PV Máximos</td><td>Nível + (5× Dado de Poder)</td></tr>
              <tr><td>PE Máximos</td><td>Nível + (5× Dado de Misticismo)</td></tr>
              <tr><td>Pontos de Inventário</td><td>6 (inicial)</td></tr>
              <tr><td>Deslocamento</td><td>9 metros padrão</td></tr>
              <tr><td>Defesa Passiva</td><td>Dado de Agilidade</td></tr>
              <tr><td>Iniciativa</td><td>Dado de Agilidade ÷ 2 (↓)</td></tr>
              <tr><td>ND Místico (Arcano)</td><td>8 + Dado de Misticismo</td></tr>
              <tr><td>ND Místico (Divino)</td><td>8 + Carisma</td></tr>
            </table>
          </section>

          <!-- Metragem -->
          <section class="rc-block">
            <h3 class="rc-block-title">Metragem</h3>
            <div class="rc-metragem">
              <div><b>1 quadrado</b> = 1,5 m</div>
              <div><b>Diagonal</b> = mesmo custo</div>
              <div><b>Terreno Difícil</b> = dobra custo</div>
            </div>
          </section>

          <!-- AoE -->
          <section class="rc-block rc-span-3">
            <h3 class="rc-block-title">Áreas de Efeito</h3>
            <div class="rc-aoe">
              <div class="rc-aoe-item">
                <svg viewBox="0 0 60 60">
                  <rect x="6" y="26" width="48" height="8" fill="#c8972a" opacity="0.35" stroke="#c8972a"/>
                  <circle cx="9" cy="30" r="2" fill="#c8972a"/>
                </svg>
                <b>Linha</b> · projétil reto
              </div>
              <div class="rc-aoe-item">
                <svg viewBox="0 0 60 60">
                  <rect x="14" y="14" width="32" height="32" fill="#c8972a" opacity="0.35" stroke="#c8972a"/>
                </svg>
                <b>Cubo</b> · área quadrada
              </div>
              <div class="rc-aoe-item">
                <svg viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="18" fill="#c8972a" opacity="0.3" stroke="#c8972a"/>
                  <circle cx="30" cy="30" r="2" fill="#c8972a"/>
                </svg>
                <b>Esfera</b> · raio do centro
              </div>
              <div class="rc-aoe-item">
                <svg viewBox="0 0 60 60">
                  <polygon points="10,30 50,12 50,48" fill="#c8972a" opacity="0.3" stroke="#c8972a"/>
                  <circle cx="10" cy="30" r="2" fill="#c8972a"/>
                </svg>
                <b>Cone</b> · expande
              </div>
            </div>
          </section>

          <!-- Magia: Custo por Círculo -->
          <section class="rc-block rc-span-2">
            <h3 class="rc-block-title">Custo de Magia</h3>
            <table class="rc-mini-table">
              <tr><th>Círculo</th><th>Custo em PE</th></tr>
              <tr><td>1º Círculo</td><td>5 ou 10 PE</td></tr>
              <tr><td>2º Círculo</td><td>10 ou 20 PE</td></tr>
              <tr><td>3º Círculo</td><td>20 ou 30 PE</td></tr>
            </table>
            <div class="rc-note">Conjurar 2º+ no turno restringe a outra ação a magias de 1º.</div>
          </section>

          <!-- Eixo da Alma -->
          <section class="rc-block rc-span-3">
            <h3 class="rc-block-title">Eixo da Alma</h3>
            <div class="rc-soul">
              <div class="rc-soul-bar">
                <span class="rcs-label det">★ Determinação</span>
                <div class="rcs-track"><div class="rcs-fill det" style="width:65%"></div></div>
              </div>
              <div class="rc-soul-bar">
                <span class="rcs-label cor">☠ Corrupção</span>
                <div class="rcs-track"><div class="rcs-fill cor" style="width:35%"></div></div>
              </div>
              <div class="rc-soul-rules">
                <div><b>Empenho</b> 1 PD: roda um dado extra e usa o maior (1×/rodada)</div>
                <div><b>Perseverança</b> 1 PD: ignora penalidades impostas</div>
                <div><b>Limiar do Desespero</b> 1 PC: +1 passo no dado (até d12)</div>
                <div><b>Força Mística</b> 1 PC: +5 em teste de perícia</div>
                <div class="rc-warn">Falhar usando Determinação dá <b>+1 Corrupção</b>. Soma sempre 10.</div>
              </div>
            </div>
          </section>

          <!-- Origens -->
          <section class="rc-block rc-span-2">
            <h3 class="rc-block-title">Origens (Evento + Ocupação)</h3>
            <div class="rc-origens">
              <div><b>1×/sessão por origem</b> — Mestre é OBRIGADO a reduzir o ND em <b>−5</b>.</div>
              <div><b>Segurança da Alma</b> — falhar nesse teste <b>NÃO</b> dá Corrupção.</div>
            </div>
          </section>

          <!-- Condições rápidas -->
          <section class="rc-block rc-span-3">
            <h3 class="rc-block-title">Condições Comuns</h3>
            <div class="rc-cond">
              <div><b>Atordoado</b> sem ações</div>
              <div><b>Enfraquecido</b> Desv. nos ataques</div>
              <div><b>Caído</b> deve gastar metade do desl. p/ levantar</div>
              <div><b>Amedrontado</b> Desv. perto da fonte</div>
              <div><b>Imobilizado</b> deslocamento 0</div>
              <div><b>Paralisado</b> sem ações nem reações</div>
              <div><b>Cego</b> falha em testes que exigem visão</div>
              <div><b>Ofuscado</b> Desv. em ataque/perceção visual</div>
              <div><b>Provocado</b> obrigado a focar quem provocou</div>
              <div><b>Desprevenido</b> Vantagem para quem ataca</div>
              <div><b>Silenciado</b> não conjura magia verbal</div>
              <div><b>Frágil</b> sofre dano dobrado de uma fonte</div>
            </div>
          </section>

        </div>

        <div class="rc-footer">
          ♥ Sinfonia das Almas — Cartão de Referência ♥
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const backdrop = overlay.querySelector('.rc-backdrop');
  const closeBtn = overlay.querySelector('#rc-close');
  const printBtn = overlay.querySelector('#rc-print');

  function open() {
    overlay.classList.add('open');
    document.body.classList.add('rc-open');
  }
  function close() {
    overlay.classList.remove('open');
    document.body.classList.remove('rc-open');
  }

  backdrop.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  printBtn.addEventListener('click', () => {
    document.body.classList.add('rc-printing');
    window.print();
    setTimeout(() => document.body.classList.remove('rc-printing'), 800);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });

  // Expose for triggers
  window.openReferenceCard = open;
})();
