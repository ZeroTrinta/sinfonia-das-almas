// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Regras (estruturadas)
// ═══════════════════════════════════════════════

window.RULES_SECTIONS = [
  {
    id: "fundamentos",
    title: "Fundamentos",
    glyph: "◈",
    blocks: [
      {
        type: "intro",
        text: "Para desbravar este mundo, você precisará entender como sua Alma interage com os desafios ao seu redor. Este sistema utiliza dados clássicos (d6, d8, d10, d12) para resolver todas as ações — a forma como você os utiliza depende de quem você é e de como se posiciona no campo de batalha."
      },
      {
        type: "subtitle",
        text: "Os Cinco Atributos"
      },
      {
        type: "para",
        text: "Todo personagem é definido por cinco atributos fundamentais. Eles representam o tamanho do dado que você rolará em seus testes. Atributos variam de **d6** (fraco/iniciante) a **d12** (sobre-humano/expert)."
      },
      {
        type: "attr-grid",
        items: [
          { code: "POD", name: "Poder", desc: "Força física, vigor e atividades físicas. Empurrar, segurar, bater, usar coisas pesadas." },
          { code: "AGI", name: "Agilidade", desc: "Reflexos, velocidade e precisão. Esquivar-se, saltar, armas leves." },
          { code: "INT", name: "Intelecto", desc: "Conhecimento, percepção tática e raciocínio lógico. Análise, estudos, percepção." },
          { code: "CAR", name: "Carisma", desc: "Lábia, presença, intimidação e capacidade de liderança." },
          { code: "MIS", name: "Misticismo", desc: "Afinidade com o arcano, manipulação de energia, rituais e o sobrenatural." }
        ]
      },
      {
        type: "subtitle",
        text: "A Regra de Ouro: Fórmula de Resolução"
      },
      {
        type: "para",
        text: "Sempre que houver incerteza, o Mestre define uma rolagem de perícia atrelada a dois atributos. Você rola os dados, soma os resultados e adiciona o **Modificador numérico de Perícia**. Se o total igualar ou superar o **Nível de Dificuldade (ND)**, você triunfa."
      },
      {
        type: "highlight-formula",
        text: "Dado A + Dado B + Modificador da Perícia  ≥  ND"
      },
      {
        type: "subtitle",
        text: "Graus de Maestria"
      },
      {
        type: "para",
        text: "Em vez de bônus flutuantes, sua competência em uma Perícia é definida por categorias. Você adiciona o bônus fixo da sua categoria atual."
      },
      {
        type: "table",
        cols: ["Categoria", "Bônus", "Narrativa"],
        rows: [
          ["Iniciante", "+2", "Você possui os fundamentos básicos."],
          ["Treinado", "+4", "Um profissional ou aventureiro experiente — sua rotina de trabalho."],
          ["Experiente", "+6", "Uma referência. Realiza feitos que parecem impossíveis para outros."]
        ]
      }
    ]
  },

  {
    id: "pericias",
    title: "Perícias",
    glyph: "✦",
    blocks: [
      {
        type: "intro",
        text: "Cada perícia é resolvida com dois atributos sugeridos (o Mestre pode adaptar conforme a situação)."
      },
      {
        type: "skill-table",
        rows: [
          ["Armas Brancas", "POD + AGI", "Facas, espadas, machados e lanças leves."],
          ["Armas de Fogo", "AGI + INT", "Pistolas, rifles ou mosquetes."],
          ["Atletismo", "POD + POD / AGI", "Correr, saltar, escalar, resistir."],
          ["Briga", "POD + AGI", "Combate desarmado, socos, imobilizações."],
          ["Condução", "AGI + INT", "Veículos ou montarias em risco."],
          ["Furtividade", "AGI + INT", "Esconder-se ou mover-se silenciosamente."],
          ["Fortitude", "POD + POD", "Venenos, doenças, exaustão, paralisia corporal."],
          ["Força de Vontade", "POD + CAR", "Medo, controle mental, Corrupção, ataques à Determinação."],
          ["Reflexos", "AGI + AGI", "Desviar de explosões, armadilhas, projéteis."],
          ["Ladinagem", "AGI + INT", "Fechaduras, bater carteiras, truques de mãos."],
          ["Ofícios", "INT + INT / AGI", "Criar, consertar, modificar itens."],
          ["Sobrevivência", "POD + INT", "Rastrear e sobreviver em ambientes selvagens."],
          ["Empatia com Animais", "CAR + CAR", "Acalmar ou entender criaturas."],
          ["Etiqueta", "CAR + INT", "Cortes, nobreza, eventos formais."],
          ["Intimidação", "CAR + CAR/POD", "Coagir por ameaça física ou moral."],
          ["Liderança", "CAR + CAR", "Inspirar aliados e comandar em crise."],
          ["Malandragem", "INT + INT/CAR", "Ruas, contatos ilegais, fofocas urbanas."],
          ["Performance", "CAR + AGI", "Atuar, tocar, discursar para plateias."],
          ["Persuasão", "CAR + CAR", "Convencer por lógica ou charme."],
          ["Intuição", "INT + CAR", "Perceber mentiras, pensar rápido sob pressão."],
          ["Subterfúgio", "CAR + INT", "Enganar, mentir, criar disfarces."],
          ["Ciência", "INT + INT", "Química, física e leis naturais."],
          ["Erudição", "INT + INT", "História, geografia, cultura geral."],
          ["Finanças", "INT + INT", "Avaliar itens, negociar preços, gerir recursos."],
          ["Investigação", "INT + INT", "Procurar pistas, deduzir, analisar crimes."],
          ["Medicina", "INT + INT / MIS - AGI", "Ferimentos, doenças, estabilizar aliados."],
          ["Arcanismo", "MIS + MIS", "Sobrenatural, magias, conjurações."],
          ["Percepção", "INT + INT / MIS", "Notar detalhes, inimigos escondidos."],
          ["Política", "INT + INT / CAR", "Jogos de poder, leis e burocracia."],
          ["Tecnologia", "INT + INT", "Hackear sistemas ou operar máquinas complexas."]
        ]
      }
    ]
  },

  {
    id: "metragem",
    title: "Metragem & Área",
    glyph: "▦",
    blocks: [
      {
        type: "intro",
        text: "Para garantir precisão tática durante confrontos e explorações, utilizamos sistema de metragem tradicional baseado em quadrados."
      },
      {
        type: "subtitle",
        text: "A Unidade de Medida Base"
      },
      {
        type: "rule-list",
        items: [
          { label: "Conversão", text: "**1 Quadrado = 1,5 Metros**." },
          { label: "Diagonal", text: "Mover-se 1 quadrado na diagonal custa o mesmo que ortogonal (1,5m)." },
          { label: "Terreno Difícil", text: "Escombros, lama ou áreas obstruídas **dobram** o custo de movimento." }
        ]
      },
      {
        type: "subtitle",
        text: "Áreas de Efeito (AoE)"
      },
      {
        type: "aoe-grid",
        items: [
          { name: "Linha", icon: "linha", desc: "Projeta-se em linha reta a partir do usuário. Comprimento definido pela habilidade (Raio de 9m = 6 quadrados em linha)." },
          { name: "Cubo", icon: "cubo", desc: "Área quadrada ou cúbica originada de um dos lados do ponto escolhido." },
          { name: "Esfera / Círculo", icon: "esfera", desc: "Emana de um ponto central. Raio de 3m = todos os quadrados em alcance de 2 quadrados do centro." },
          { name: "Cone", icon: "cone", desc: "Expande-se conforme se afasta. Cone de 4,5m termina com 3 quadrados de largura na extremidade." }
        ]
      },
      {
        type: "callout",
        text: "Sempre que uma área exigir teste de resistência (Reflexos, Fortitude…), a fórmula é a mesma:  **Perícia ≥ ND = Sucesso**."
      }
    ]
  },

  {
    id: "identidade",
    title: "Identidade & Pilar",
    glyph: "♦",
    blocks: [
      {
        type: "intro",
        text: "Personagens neste sistema são mais do que números. Eles possuem uma **Identidade** que pulsa através de seu coração. O Pilar, as Qualidades e os Defeitos moldam não apenas a narrativa, mas a força da Alma."
      },
      {
        type: "subtitle",
        text: "O Pilar do Personagem"
      },
      {
        type: "para",
        text: "O Pilar é o núcleo moral ou a ambição maior. Define a Determinação e impede que o personagem desista quando os desafios superam suas capacidades."
      },
      {
        type: "examples",
        title: "Exemplos",
        items: [
          "**A Busca pela Verdade** — Nada é mais importante do que desvendar o que está oculto.",
          "**Protetor dos Indefesos** — Sua força existe para ser o escudo dos fracos.",
          "**Sede de Reconhecimento** — Ser lembrado como o maior em sua área."
        ]
      },
      {
        type: "split",
        left: {
          title: "Qualidades",
          accent: "#80e8f8",
          text: "Traços positivos, talentos naturais ou características marcantes que não dependem de treinamento técnico. Dão **sabor** às habilidades.",
          examples: [
            "**Carismático** — As pessoas se sentem inclinadas a ouvir você.",
            "**Cético** — Difícil de enganar, busca falhas em discursos.",
            "**Resiliente** — Suporta dor ou pressão acima da média."
          ]
        },
        right: {
          title: "Defeitos",
          accent: "#c87070",
          text: "Falhas trágicas, traumas ou dificuldades sociais. Principal fonte de drama e evolução narrativa — um convite ao erro que cria cenas mais ricas.",
          examples: [
            "**Arrogante** — Subestima oponentes ou ignora conselhos.",
            "**Fobia** — Medo paralisante de algo específico (fogo, altura, criaturas).",
            "**Código de Honra** — Regras que dificultam concluir objetivos."
          ]
        }
      },
      {
        type: "callout",
        text: "Pilares, Qualidades e Defeitos influenciam diretamente a mecânica de **Ressonância da Alma**."
      }
    ]
  },

  {
    id: "eixo-alma",
    title: "Eixo da Alma",
    glyph: "♥",
    blocks: [
      {
        type: "quote",
        text: "Quase todo ser tem alma e, se tem uma alma, tem um coração — a culminação do seu ser. O coração oscila e pode variar, e por isso existe um cabo de guerra em se manter bom, mau ou neutro."
      },
      {
        type: "soul-bars"
      },
      {
        type: "subtitle",
        text: "Determinação"
      },
      {
        type: "para",
        text: "Varia de 0 a 10 e mede a força de vontade da alma. Quanto mais alto, mais confiante, emocionalmente estável e disposta. O Nível de Determinação determina sua reserva máxima de Pontos."
      },
      {
        type: "rule-list",
        items: [
          { label: "Empenho", text: "Antes da rolagem, gasta 1 Ponto: adiciona um dado e usa o **maior** resultado (máx 1×/rodada)." },
          { label: "Perseverança", text: "Gasta 1 Ponto para **ignorar penalidades** impostas por condições ou pelo Mestre." }
        ]
      },
      {
        type: "callout",
        text: "Se usar essas habilidades e ainda assim falhar, você recebe **1 ponto de Corrupção**. A Determinação é atacada por decepções, perdas, frustrações e estresse — agindo como ferida na saúde emocional."
      },
      {
        type: "subtitle",
        text: "Corrupção da Alma"
      },
      {
        type: "para",
        text: "Ao invés de gastar Determinação, você pode **corromper sua alma** em troca de poder. Mas até nas sombras existe força — a um preço alto."
      },
      {
        type: "rule-list",
        items: [
          { label: "Limiar do Desespero", text: "Aumenta em **1 passo** um dado de atributo na cena (d8 → d10 → d12)." },
          { label: "Rerrolar Dados", text: "Permite rerrolar dados perdidos." },
          { label: "Força Mística", text: "Adiciona **+5** num teste de perícia." }
        ]
      },
      {
        type: "subtitle",
        text: "Estilhaços da Alma"
      },
      {
        type: "para",
        text: "Se a Corrupção vencer o cabo de guerra, você adquire **um nível de Estilhaço da Alma** — uma condição que traz mutações na personalidade e/ou no corpo. Podem ser **benignas ou malignas**, mas sempre vêm com um custo. O cabo se reinicia pendendo agora pelo lado da Corrupção."
      },
      {
        type: "quote-small",
        text: "Se o cabo de guerra continuar até você se corromper por inteiro… você não terá mais alma. Esse corpo não pertencerá mais a você."
      }
    ]
  },

  {
    id: "criacao",
    title: "Criação de Personagem",
    glyph: "✧",
    blocks: [
      {
        type: "intro",
        text: "Criar um personagem é dar forma a uma vontade inabalável. Siga os 7 passos para construir seu herói."
      },
      {
        type: "step",
        n: 1,
        title: "Perfil de Atributos",
        text: "Cinco atributos representados por dados, do d6 ao d12. Escolha um set e distribua entre POD/AGI/INT/CAR/MIS:",
        sets: [
          { name: "Especializado", dice: ["d12", "d10", "d6", "d6", "d6"] },
          { name: "Mediano", dice: ["d10", "d8", "d8", "d8", "d6"] },
          { name: "Pau pra Toda Obra", dice: ["d8", "d8", "d8", "d8", "d8"] }
        ]
      },
      {
        type: "step",
        n: 2,
        title: "PV e PE",
        formulas: [
          { label: "PV Máximos", formula: "Nível + (5 × Dado de Poder)" },
          { label: "PE Máximos", formula: "Nível + (5 × Dado de Misticismo)" }
        ]
      },
      {
        type: "step",
        n: 3,
        title: "Pontos de Inventário",
        text: "Sua reserva de itens utilizáveis. Cada item custa um valor de PI.",
        formulas: [{ label: "PI Iniciais", formula: "6" }]
      },
      {
        type: "step",
        n: 4,
        title: "Deslocamento",
        text: "Capacidade de mover-se em conflito.",
        formulas: [{ label: "Padrão", formula: "9 metros" }]
      },
      {
        type: "step",
        n: 5,
        title: "Defesa e Iniciativa",
        formulas: [
          { label: "Defesa Passiva", formula: "Dado de Agilidade" },
          { label: "Iniciativa", formula: "Dado de Agilidade ÷ 2 (arredondado para baixo)" }
        ]
      },
      {
        type: "step",
        n: 6,
        title: "Origens da Alma",
        text: "Duas sentenças curtas que compõem sua história, em conjunto com Pilar, Qualidades e Defeitos:",
        items: [
          {
            label: "Evento Marcante",
            text: "Situação do passado que moldou sua visão de mundo — a 'cicatriz' ou o 'troféu'. Ex: \"Sobrevivente de um acidente trágico\" ou \"Se tornou o melhor em sua profissão\"."
          },
          {
            label: "Ocupação",
            text: "Como você se empenha diariamente. Duas palavras: identidade + especificidade. Ex: \"Guerreiro Amargurado\", \"Missionário Devoto\"."
          }
        ],
        bonus: "Ao realizar rolagem conectada a uma Origem (1×/sessão), o Mestre é **OBRIGADO a reduzir a dificuldade em 5**. Falhar não dá Corrupção (Segurança da Alma)."
      },
      {
        type: "step",
        n: 7,
        title: "Classe & Árvore",
        text: "Todo personagem começa no **Nível 5**. A cada nível você ganha **1 Ponto de Habilidade** para investir na árvore da classe. O **Nível de Habilidade (NH)** de uma técnica aumenta dano, alcance ou reduz custo.",
        sub: "Ao atingir o **Nível 20** com base em pré-requisitos, você pode evoluir para uma **Segunda Classe**, reiniciando a contagem e liberando uma nova árvore sem perder o aprendido. Exemplo: Espadachim → Cavaleiro ou Templário."
      }
    ]
  },

  {
    id: "magia",
    title: "Regulamento de Magia",
    glyph: "✺",
    blocks: [
      {
        type: "intro",
        text: "A magia neste sistema representa a manipulação direta do tecido da realidade e dos fluxos da alma. Conjuradores usam poder mental e espiritual para moldar feitiços, consumindo Pontos de Energia (PE)."
      },
      {
        type: "subtitle",
        text: "As 9 Formas de Magia"
      },
      {
        type: "schools-grid",
        items: [
          { name: "Abjuração",     desc: "Proteção: barreiras, Redução de Dano, anular condições, repelir forças." },
          { name: "Conjuração",    desc: "Invocação/Criação: objetos místicos, aliados temporários, teletransporte." },
          { name: "Adivinhação",   desc: "Revelação/Percepção: bônus em acerto, prever, revelar ocultos, anular Ofuscado." },
          { name: "Encantamento",  desc: "Mentalismo: condições como Provocado, pacificar ameaças, drenar energia." },
          { name: "Evocação",      desc: "Destruição Elemental: dano bruto (Fogo, Gelo, Raio, Terra, Ar) em áreas." },
          { name: "Ilusão",        desc: "Engano Visual: duplicatas para erros de ataque, coberturas falsas." },
          { name: "Necromancia",   desc: "Vida/Morte: Sangramento, drenar vitalidade, invocar mortos-vivos." },
          { name: "Transmutação",  desc: "Alteração Física: Terreno Difícil, buffs em atributos." },
          { name: "Magias Divinas", desc: "9ª forma. Milagres das divindades. Exclusivas de Sacerdotes e Templários." }
        ]
      },
      {
        type: "subtitle",
        text: "Progressão por NH (Conjuradores Puros)"
      },
      {
        type: "table",
        cols: ["NH", "Círculo Máx", "Magias Conhecidas"],
        rows: [
          ["NH 1", "1º", "6 (apenas 1º)"],
          ["NH 2", "1º", "7 (apenas 1º)"],
          ["NH 3", "1º", "8 (apenas 1º)"],
          ["NH 4", "2º", "9 (1º ou 2º)"],
          ["NH 5", "2º", "10 (1º ou 2º)"],
          ["NH 6", "2º", "11 (1º ou 2º)"],
          ["NH 7", "2º", "12 (1º ou 2º)"],
          ["NH 8", "3º", "13 (1º, 2º ou 3º)"],
          ["NH 9", "3º", "14"],
          ["NH 10", "3º", "15"]
        ]
      },
      {
        type: "callout",
        text: "**Classes marciais e híbridas** só conseguem **1º Círculo** via habilidades específicas (Iniciado em Magia Arcana, Iniciado em Milagres, Iniciado em Magia de Encantamento). 4º e 5º Círculos só após **Segunda Classe**."
      },
      {
        type: "subtitle",
        text: "Custo de Energia"
      },
      {
        type: "table",
        cols: ["Círculo", "Custo em PE"],
        rows: [
          ["1º", "5 ou 10 PE"],
          ["2º", "10 ou 20 PE"],
          ["3º", "20 ou 30 PE"]
        ]
      },
      {
        type: "subtitle",
        text: "Nível de Dificuldade Místico"
      },
      {
        type: "split-formula",
        items: [
          { label: "Magias Arcanas", formula: "ND = 8 + Valor do Dado de Misticismo" },
          { label: "Magias Divinas",  formula: "ND = 8 + Valor de Carisma" }
        ]
      },
      {
        type: "subtitle",
        text: "Acerto em Conjuração — Ataques Místicos"
      },
      {
        type: "para",
        text: "Quando uma magia exige acerto direto contra a **Defesa do alvo** (em vez de teste de resistência), o conjurador rola sua perícia de conjuração. Cada classe utiliza uma combinação própria de dados:"
      },
      {
        type: "split-formula",
        items: [
          { label: "Magos (Arcanismo)", formula: "Dado de Misticismo + Dado de Intelecto" },
          { label: "Sacerdotes (Arcanismo Sagrado)", formula: "Dado de Carisma + Dado de Intelecto" }
        ]
      },
      {
        type: "callout-small",
        text: "Sacerdotes substituem o atributo místico padrão de **Arcanismo** pelos seus atributos chave — **Carisma + Intelecto** — sempre que precisarem rolar acerto de magia divina."
      },
      {
        type: "subtitle",
        text: "Regras de Conjuração"
      },
      {
        type: "rule-list",
        items: [
          { label: "Gatilho de Círculo Alto", text: "Conjurar magia de **2º Círculo ou superior** instabiliza o fluxo arcano. No restante do turno, sua outra ação só pode conjurar **1º Círculo**." },
          { label: "Habilidades de Aceleração", text: "Mesmo transformando 1 Ação Padrão em 1 Ação Bônus, o limite de círculos é absoluto." },
          { label: "Custo Contínuo", text: "Magias com `(Contínuo)` exigem pagamento no início de cada turno seguinte. Se faltar PE, o feitiço **colapsa imediatamente** sem gastar ação." }
        ]
      },
      {
        type: "callout-small",
        text: "**Exemplo:** Um mago acelera Hélice Ácida (2º) para Ação Bônus. Mesmo com Ação Padrão livre, ela só pode conjurar magia de 1º Círculo."
      }
    ]
  },

  {
    id: "condicoes",
    title: "Glossário de Condições",
    glyph: "❖",
    blocks: [
      {
        type: "intro",
        text: "Estados temporários que afetam criaturas durante o jogo. Habilidades, magias e venenos costumam aplicar uma ou mais dessas condições — consulte-as sempre que precisar."
      },
      {
        type: "conditions-grid",
        items: [
          { name: "Atordoado", color: "#e85040", desc: "Não pode realizar ações nem reações. Não conta como ativo no início do próprio turno." },
          { name: "Paralisado", color: "#c84040", desc: "Não pode se mover, falar ou realizar qualquer ação ou reação. O corpo trava completamente." },
          { name: "Incapacitado", color: "#c0584c", desc: "Impossibilitado de realizar ações, reações ou se levantar — geralmente combinado com Caído." },
          { name: "Imobilizado", color: "#b88040", desc: "Deslocamento reduzido a 0. Ainda pode agir, atacar e reagir normalmente." },
          { name: "Caído", color: "#a08850", desc: "Prostrado no chão. Para levantar gasta metade do deslocamento. Ataques corpo-a-corpo contra você ganham vantagem." },
          { name: "Enfraquecido", color: "#a06840", desc: "Sofre Desvantagem em rolagens de ataque e em testes de Poder/Agilidade." },
          { name: "Debilitada", color: "#9070d0", desc: "Deslocamento pela metade, -2 Defesa, dado de Agilidade reduzido em 1 passo, sem reações." },
          { name: "Frágil", color: "#e07060", desc: "Sofre o dobro do dano da próxima fonte de dano que receber." },
          { name: "Sangrando", color: "#c0282a", desc: "Sofre dano necrótico/físico recorrente no início do turno até estabilizar (teste de Medicina ou Fortitude)." },
          { name: "Chamuscado", color: "#e85040", desc: "Tem o dado de Agilidade reduzido em 1 passo e perde 1d6 de dano de fogo a cada início de turno." },
          { name: "Amedrontado", color: "#8060a0", desc: "Sofre Desvantagem em testes e ataques enquanto a fonte do medo estiver à vista. Não pode se aproximar dela voluntariamente." },
          { name: "Provocado", color: "#d06040", desc: "Compelido a focar ataques na criatura que o provocou. Atacar outro alvo aplica penalidade severa (-10 acerto / -5 dano)." },
          { name: "Enfeitiçado", color: "#e070b0", desc: "Não pode atacar o conjurador da magia, que ganha Vantagem em testes sociais contra você." },
          { name: "Cego", color: "#404040", desc: "Falha automaticamente em testes que dependem de visão. Ataca com Desvantagem; ataques contra você ganham Vantagem." },
          { name: "Ofuscado", color: "#807060", desc: "Visão prejudicada. Desvantagem em ataques e testes de Percepção visual." },
          { name: "Silenciado", color: "#506070", desc: "Não pode falar nem conjurar magias com componente verbal." },
          { name: "Surdo", color: "#506070", desc: "Não escuta sons. Falha em testes que dependem de audição." },
          { name: "Desprevenido", color: "#c87040", desc: "Pego de surpresa. Ataques contra você ganham Vantagem e ativam efeitos como Ataque Vital." },
          { name: "Camuflado", color: "#608060", desc: "Não é notado normalmente. Para perceber é preciso teste de Investigação contra ND. Visão Real ignora a camuflagem." },
          { name: "Oculto", color: "#609060", desc: "Posição revelada, mas ataques contra você ainda têm Desvantagem (de Invisibilidade descoberta por som ou pista)." },
          { name: "Totalmente Indetectável", color: "#40b0a0", desc: "Localização desconhecida. Imune a ataques diretos e feitiços de alvo; área ainda atinge se o conjurador acertar o quadrado." },
          { name: "Invisível", color: "#80c8d8", desc: "Não pode ser visto a olho nu. Ataques contra você têm Desvantagem; seus ataques têm Vantagem (sai do estado ao atacar)." },
          { name: "Enredada", color: "#80a040", desc: "Presa em teia/raiz. Deslocamento 0 e Desvantagem em ataques. Libertar-se exige teste de Atletismo." },
          { name: "Inconsciente", color: "#404060", desc: "Dormindo, desmaiado ou morto. Cai Caído, falha automaticamente em Reflexos/Vontade; ataques contra você são críticos a curta distância." }
        ]
      },
      {
        type: "subtitle",
        text: "Termos Frequentes"
      },
      {
        type: "rule-list",
        items: [
          { label: "Vantagem", text: "Adiciona **+5** ao resultado do teste." },
          { label: "Desvantagem", text: "Subtrai **−5** do resultado do teste." },
          { label: "Resistência", text: "Sofre apenas **metade do dano** do tipo elemental especificado." },
          { label: "Vulnerabilidade", text: "Sofre o **dobro do dano** do tipo elemental especificado." },
          { label: "Visão Real", text: "Permite ver através de ilusões, invisibilidade, camuflagem e formas alteradas." }
        ]
      }
    ]
  }
];
