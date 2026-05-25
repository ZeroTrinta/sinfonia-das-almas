// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Classes
// ═══════════════════════════════════════════════

window.CLASSES = [
  {
    id: "guerreiro",
    name: "Guerreiro",
    color: "#c84040",
    glyph: "⚔",
    tagline: "Força física, vigor e resiliência no campo de batalha",
    desc: "O Guerreiro é a personificação da força física, do vigor e da resiliência no campo de batalha. Como combatente de linha de frente clássico, utiliza espadas, machados e lanças para conter o avanço das ameaças. Treinado para absorver impactos e ditar o ritmo do combate corporal, o Guerreiro protege seus aliados tornando-se o foco da fúria dos inimigos.",
    attrs: "PODER + AGILIDADE",
    pv: "Nível + (5× Dado de Poder)",
    pe: "Nível + (5× Dado de Misticismo)",
    pericias: "Escolha 4 perícias para Treinado e 2 para Iniciante",
    abilities: [
      { name: "Perícia com Espadas", desc: "Você se torna capaz de utilizar Espadas sem penalidade." },
      { name: "Perícia com Armas de Haste", desc: "Você se torna capaz de utilizar Lanças sem penalidade." },
      { name: "Perícia com Armas Pesadas", desc: "Você se torna capaz de utilizar armas Pesadas sem penalidade." },
      { name: "Vigor", tier: "3X", desc: "Aumenta seus Pontos de Vida Máximos em [3 × Pontos de Habilidade investidos]." },
      { name: "Manobra de Combate", tier: "10X", desc: "Ao escolher essa habilidade você aprende uma manobra de combate. Veja a lista abaixo." },
      { name: "Iniciado em Milagres", tier: "5X", desc: "Comunhão com divindades. Ao escolher, aprende magias de categoria Sagrada de 1º nível. Na 5ª vez ganha acesso a duas magias de 2º nível." },
      { name: "Provocar", tier: "5X · 5 PE", desc: "Teste de Intimidação contra Intuição. Em caso de falha, alvos ficam com condição **Provocado**. Alvos provocados que atacarem outro alvo sofrem **-10 em Acerto e -5 em Dano** até o fim da ação. Repetem Intuição no fim de seus turnos para dispersar." },
      { name: "Ataque Extra", tier: "2X", desc: "Ao tomar ação de ataque, pode realizar um segundo em sequência. A segunda compra custa o dobro de pontos (2)." },
      { name: "Iniciado em Magia Arcana", tier: "5X", desc: "Aprende magias Arcanas de 1º nível. Na 5ª vez ganha acesso a duas de 2º nível." }
    ],
    extra: {
      title: "Lista de Manobras",
      items: [
        { name: "Golpe Giratório", cost: "10 PE", desc: "Ataque corpo-a-corpo em área de 3m de você. Alvos acertados recebem seu Dado de Poder de dano adicional.\n**Aprimorado (+5 PE):** gastando todas as ações, expande para 6m e força teste de Fortitude contra acerto ou alvos ficam **Atordoados**." },
        { name: "Rude Buster", tier: "3X", cost: "15 PE", desc: "Ataque poderoso a até 9m de você.\n**Aprimorado (+5 PE):** alveja mais um alvo dentro do alcance.\n**Compra adicional:** +1 dado de dano por Ponto de Habilidade gasto." },
        { name: "Rompe Defesas", cost: "10 PE", desc: "Seu próximo ataque acertado reduz a Defesa do alvo em -2." },
        { name: "Contra-Ataque", desc: "Quando inimigo acerta ou erra ataque corpo-a-corpo contra você e o dado é **Par**, use sua reação para atacar imediatamente." },
        { name: "Ripostar", desc: "Quando inimigo acerta ou erra ataque corpo-a-corpo e o dado é **Ímpar**, você bloqueia (sem dano) e aplica condição **Enfraquecido** no alvo até o início do turno dele." },
        { name: "Ataque Descuidado", cost: "10 PE", desc: "Durante o turno inteiro: +5 acerto e dano, mas -5 de Defesa até o início da próxima rodada." },
        { name: "Postura de Aço", cost: "10 PE (Ação Parcial)", desc: "Adota postura defensiva: redução de dano -10 e +5 Defesa até o final do próximo turno." },
        { name: "Precisão", cost: "10 PE", desc: "Adiciona +5 no acerto de um ataque." },
        { name: "Retomar o Fôlego", cost: "10 PE (Ação Parcial)", desc: "Role 5 dados de Poder; cura-se com o resultado." },
        { name: "Líder Inspirador", cost: "15 PE", desc: "Concede PV Temporários = 3× seu Dado de Poder aos aliados. Enquanto tiverem PVT, +5 contra testes de **Amedrontado**." }
      ]
    }
  },

  {
    id: "gatuno",
    name: "Gatuno",
    color: "#40b8c8",
    glyph: "✸",
    tagline: "Mestre da mobilidade, do oportunismo e da astúcia",
    desc: "O Gatuno é o mestre da mobilidade, do oportunismo e da astúcia. Longe de bater de frente, prefere flanquear ameaças, usando velocidade e distração. Especialista em adagas, armas leves e ferramentas de precisão, brilha ao encontrar brechas, desferir golpes letais onde dói mais e desaparecer antes que possam revidar.",
    attrs: "AGILIDADE + INTELECTO",
    pv: "Nível + (5× Dado de Poder)",
    pe: "Nível + (5× Dado de Misticismo)",
    pericias: "Escolha 4 perícias para Treinado e 2 para Iniciante",
    abilities: [
      { name: "Perícia com Armas Leves", desc: "Adagas, Facas e Espadas Curtas sem penalidades." },
      { name: "Perícia com Armas de Precisão", desc: "Bestas Leves, Pistolas e Facas de Arremesso sem penalidades." },
      { name: "Reflexos Apurados", cost: "5 PE", desc: "Adiciona +5 a um teste de Reflexos." },
      { name: "Esquiva Implacável", cost: "10 PE", desc: "Ao ser alvo de dano, reduz **metade do dano causado**." },
      { name: "Iniciado em Venenos", tier: "5X", desc: "Aprende a fabricar e aplicar venenos básicos em armas Leves ou de Precisão. Veja o catálogo abaixo." },
      { name: "Truques Sujos", tier: "10X", desc: "Cada vez aprende um Truque Sujo da lista. Veja abaixo." },
      { name: "Prodígio", tier: "2X", desc: "Escolha uma perícia para ser considerado **Experiente**." },
      { name: "Corpo Resistente a Venenos", desc: "Vantagem em todos os testes para resistir a venenos." },
      { name: "Ataque Extra", desc: "Ao tomar ação de ataque, pode realizar um segundo em sequência." }
    ],
    extra: {
      title: "Catálogo de Venenos & Truques Sujos",
      sections: [
        {
          subtitle: "Venenos (fabricação: Ofício CD 12, custa 2 PI)",
          items: [
            { name: "Peçonha Estagnante", desc: "Fortitude vs ND. Falha → **Atordoado** até o fim do próximo turno; deslocamento 0." },
            { name: "Extrato de Beladona", desc: "Fortitude vs ND. Falha → **Enfraquecido** até o fim do próximo turno." },
            { name: "Lágrima de Névoa", desc: "Reflexos vs ND. Falha → **Ofuscado** até o fim do próximo turno." },
            { name: "Toxina da Víbora", desc: "Acerto. Adiciona um dado de Agilidade ao dano. Por 5 rodadas: **10 de dano de Ácido** por turno." },
            { name: "Soro da Raiva", desc: "Vontade vs ND. Falha → **Provocado**, ataca qualquer um próximo." },
            { name: "Essência do Pesadelo", desc: "Vontade vs ND. Falha → **Amedrontado** contra você (ou alvo mais próximo se você está escondido)." },
            { name: "Soro Letárgico", desc: "Fortitude vs ND. Falha → perde Ação Inicial; iniciativa **-3 permanente na cena**." }
          ]
        },
        {
          subtitle: "Truques Sujos",
          items: [
            { name: "Ataque Vital", tier: "5X", desc: "Reserva de **d6 de precisão** = pontos investidos. Contra alvo **Desprevenido** ou com aliado adjacente, gasta dados (até nível atual, máx 5d6) para dano extra. Reserva recupera no início de cada turno." },
            { name: "Passo das Sombras", cost: "10 PE (Ação Parcial)", desc: "Move até 6m (4q) instantaneamente. Sem ataques de oportunidade. Se terminar em cobertura, teste imediato de Furtividade." },
            { name: "Bomba de Fumaça", cost: "15 PE", desc: "Esfera de fumaça de raio 3m. Cobertura total e bloqueia linha de visão.\n**Aprimorado (+10 PE):** fumaça vira veneno tóxico por 2 rodadas; quem inicia turno na área deve resistir ao veneno escolhido." },
            { name: "Mão Leve", desc: "Se o dado de ataque corpo-a-corpo do inimigo contra você for **Ímpar**, teste de Ladinagem. Sucesso: rouba 2 Pontos de Inventário do alvo." },
            { name: "Areia nos Olhos", cost: "10 PE (Ação Parcial)", desc: "Teste de Ladinagem contra Reflexos. Sucesso: alvo recebe condição **Cego** por uma rodada." },
            { name: "Redirecionar Ataque", cost: "10 PE (Reação)", desc: "Se o dado de ataque do agressor for **Par**, puxa um alvo adjacente para a trajetória; ataque resolve contra a Defesa dele." },
            { name: "Finta Ardilosa", cost: "5 PE (Ação Parcial)", desc: "Ladinagem contra Percepção. Sucesso: alvo fica **Desprevenido** contra seu próximo ataque, ativando o bônus de Ataque Vital." },
            { name: "Espinhos de Bolso", cost: "1 PI (Ação Parcial)", desc: "Área 3×3m vira **Terreno Difícil** até o fim do combate. 1d6 físico por quadrado atravessado." },
            { name: "Canelada de Interrupção", cost: "5 PE (Reação/AO)", desc: "Se o ataque acertar, o deslocamento restante do alvo é reduzido a 0." },
            { name: "Afanar Vitae", desc: "Se reduzir um inimigo a 0 PV com **Ataque Vital**, gaste sua Reação para curar PV iguais à metade do dano causado." },
            { name: "Copiar Magia", desc: "Quando ver criatura conjurar magia, gaste Reação e faça Misticismo contra ND. Sucesso: aprende a usar a magia **uma única vez** (segue custos e regras originais)." }
          ]
        }
      ]
    }
  },

  {
    id: "arqueiro",
    name: "Arqueiro",
    color: "#58c858",
    glyph: "➹",
    tagline: "Mestre do combate à distância e da precisão",
    desc: "O Arqueiro é o mestre do combate à distância, da precisão e do monitoramento do campo de batalha. Não precisa se aproximar para ser letal; mantém distância segura, analisa o campo, antecipa movimentos e dispara projéteis certeiros. Especialista em arcos e bestas, brilha ao controlar o espaço, criar zonas de perigo e interromper avanços antes do primeiro golpe.",
    attrs: "AGILIDADE + INTELECTO",
    pv: "Nível + (5× Dado de Poder)",
    pe: "Nível + (5× Dado de Misticismo)",
    pericias: "Escolha 4 perícias para Treinado e 2 para Iniciante",
    abilities: [
      { name: "Perícia com Arcos", desc: "Arcos Curtos e Longos sem penalidades de empunhadura e distância." },
      { name: "Perícia com Bestas", desc: "Bestas Leves e Pesadas sem penalidades de recarga." },
      { name: "Olhos de Águia", desc: "Visão a longas distâncias (dobro do normal). Em combate, vê através de fumaças e lugares obscurecidos." },
      { name: "Iniciado em Magia de Encantamento", tier: "5X", desc: "Aprende uma nova magia Arcana da escola **Encantamento** por ponto investido." },
      { name: "Armadilha de Caça", desc: "Gastando 2 PI, coloca armadilha camuflada (ND 12). Quem ativa: Reflexos ND 12. Falha → **Imobilizado** e recebe dano físico: **2× Dado de Agilidade + 12**." },
      { name: "Concentração", tier: "3X", desc: "+2 de Dano fixo em ataques com Arcos ou Bestas por ponto investido." },
      { name: "Ataque Extra", desc: "Realiza segundo ataque em sequência." },
      { name: "Disparos Especiais", tier: "10X", desc: "Cada vez aprende um Disparo Especial da lista abaixo." }
    ],
    extra: {
      title: "Lista de Disparos Especiais",
      items: [
        { name: "Chuva de Flechas", cost: "15 PE (Ação Inicial)", desc: "Saraivada em cubo de 4,5m até 12m. Reflexos ND 12; falha = dano da arma e perde metade do deslocamento." },
        { name: "Tiro Perfurante", cost: "10 PE (Ação Inicial)", desc: "Linha reta de 9m. Reflexos vs ND; falha = **dobro do dano** padrão.\n**Aprimorado (+5 PE):** Defesa -2 dos acertados até o fim do turno dos inimigos." },
        { name: "Tiro de Interceptação", cost: "10 PE (Reação)", desc: "Se um ataque à distância for **Par**, dispara para cancelar o projétil ao acertar." },
        { name: "Recuo Calculado", cost: "10 PE (Reação)", desc: "Se ataque/aproximação inimiga for **Ímpar**, salta 3m para trás sem AO. Durante o salto pode atacar à distância; acerto rola **dobro de dados de dano**." },
        { name: "Marca do Caçador", cost: "5 PE (Ação Parcial)", desc: "Acerto fixa marca; até o fim da cena, você e aliados ganham **+2 acerto** contra o alvo.\n**Aprimorado (+5 PE, Ação Inicial):** alvo perde camuflagem, invisibilidade ou furtividade." },
        { name: "Flecha Estilhaçadora", cost: "15 PE (Ação Inicial)", desc: "Acerto + dano normal + condição **Frágil** no alvo." },
        { name: "Disparo Violento", cost: "Reação", desc: "Ao eliminar um alvo, recupera **15 PE**." },
        { name: "Tiro Fantasma", cost: "15 PE (Ação Ataque)", desc: "Ignora paredes, coberturas totais e obstáculos sólidos até 12m; precisa de teste prévio de Percepção." },
        { name: "Flecha Armadilha", cost: "10 PE (Ação Inicial)", desc: "Acerto + dano normal + **Imobilizado** (deslocamento 0)." },
        { name: "Inimigo Eleito", cost: "Ação Parcial", desc: "Por 10 rodadas: **+2 acerto e dano** contra alvo. Ao eliminá-lo, **recupera 20 PV**. Pode transferir a marca por **5 PE** como Ação Livre." }
      ]
    }
  },

  {
    id: "mago",
    name: "Mago",
    color: "#9060e8",
    glyph: "✦",
    tagline: "Mestre absoluto das forças arcanas e dos elementos",
    desc: "O Mago é o mestre absoluto das forças arcanas, dos elementos e da alteração das leis da realidade através do estudo e da força de vontade. Em vez de armas de metal, canaliza energia mística pura através de cajados, varinhas e grimórios. Na retaguarda, capaz de obliterar exércitos com feitiços de área, erguer barreiras intransponíveis ou teleportar-se. Sua mente é sua maior arma.",
    attrs: "MISTICISMO + INTELECTO",
    pv: "Nível + (5× Dado de Poder)",
    pe: "Nível + (5× Dado de Misticismo)",
    pericias: "Escolha 4 perícias para Treinado e 2 para Iniciante",
    abilities: [
      { name: "Perícia com Conduítes Arcanos", desc: "Cajados, Varinhas e Tomos Místicos sem penalidades de conjuração." },
      { name: "Mente Expandida", tier: "3X", desc: "+10 PE Máximos por ponto investido." },
      { name: "Domínio das Magias Arcanas", tier: "10X", desc: "Habilidade central do Mago. NH 1: escolhe **6 magias iniciais de 1º Círculo**.\n• Cada ponto subsequente: +1 magia.\n• **NH 4:** desbloqueia **2º Círculo**.\n• **NH 8:** desbloqueia **3º Círculo**." },
      { name: "Lâmina Arcana", cost: "15 PE (Ação Parcial)", desc: "Manifesta arma corpo-a-corpo de energia arcana por 1 minuto. Usa **Arcanismo** no acerto. Dano: **Dado de Misticismo + 15** (místico)." },
      { name: "Expansão Mística", tier: "3X", desc: "+1 no seu **ND Místico** por ponto investido (máx +3)." },
      { name: "Recuperação Arcana", tier: "5X", desc: "Ação Parcial: recupera **10 PE por ponto investido** (até 50 PE no máximo)." }
    ]
  },

  {
    id: "sacerdote",
    name: "Sacerdote",
    color: "#f0c060",
    glyph: "✝",
    tagline: "O elo espiritual e pilar de sustentação do grupo",
    desc: "O Sacerdote é o elo espiritual e o pilar de sustentação de qualquer grupo de aventureiros. Enquanto outros focam em destruir e subjugar, o Sacerdote canaliza as forças da fé, da vida e da proteção para curar feridas, dissipar malevolências e abençoar aliados. É a engrenagem que dita quem vive e quem cai nas frentes de combate.",
    attrs: "CARISMA + INTELECTO",
    pv: "Nível + (5× Dado de Poder)",
    pe: "Nível + (5× Dado de Misticismo)",
    pericias: "Escolha 4 perícias para Treinado e 2 para Iniciante",
    abilities: [
      { name: "Perícia com Símbolos Sagrados", desc: "Rosários, Símbolos Sagrados e Relíquias sem penalidades." },
      { name: "Fé Expandida", tier: "3X", desc: "+10 PE Máximos por ponto investido." },
      { name: "Domínio das Magias Sagradas", tier: "10X", desc: "NH 1: escolhe **6 magias iniciais de 1º Círculo** sagradas.\n• Cada ponto subsequente: +1 magia.\n• **NH 4:** desbloqueia **2º Círculo**.\n• **NH 8:** desbloqueia **3º Círculo**." },
      { name: "Kyrie Eleison", tier: "3X · 20 PE (Ação Parcial)", desc: "Concede a um aliado escudo com **PV Temporários = Dado de Carisma + 15**. Enquanto ativos: imune a empurrão e derrubada. Cada ponto: **+5 no valor fixo**." },
      { name: "Magnificat", tier: "5X · 25 PE (Ação Inicial)", desc: "Aura de melodia divina por 1 minuto. Aliados afetados recuperam **5 PE no início de cada turno**. Cada ponto: **+2 PE/rodada** (até 15 PE no máximo)." },
      { name: "Lex Divina", cost: "15 PE (Ação Padrão)", desc: "Alvo testa **Vontade** contra ND Místico. Falha → condição **Silenciado** por 1 rodada." },
      { name: "Exorcizar", tier: "3X · 20 PE (Ação Padrão)", desc: "Força morto-vivo a testar **Fortitude** contra ND Místico. Falha → **Dado de Misticismo + 20** de dano de Luz. Se PV abaixo de 1/4 e falhar → **destruído**. Cada ponto: **+10 dano** e margem sobe para 1/3 e depois metade dos PV." }
    ]
  }
];
