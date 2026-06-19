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
          { label: "Limiar do Desespero", text: "Aumenta em **1 passo** um dado de atributo na cena (d8 → d10 → d12, máx d12)." },
          { label: "Negar a Sorte", text: "Gasta **1 ponto de Corrupção** para rerrolar qualquer dado e ficar com o novo resultado." },
          { label: "Força das Sombras", text: "Gasta **1 ponto de Corrupção** para adicionar **+5** a um teste de perícia." }
        ]
      },
      {
        type: "subtitle",
        text: "Estilhaços da Alma"
      },
      {
        type: "para",
        text: "Se a Corrupção vencer o cabo de guerra, você adquire **um nível de Estilhaço da Alma** — uma condição que traz mutações na personalidade e/ou no corpo. Podem ser **benignas ou malignas**, mas sempre vêm com um custo. Após o Estilhaço, a Corrupção volta a **0** e a Determinação retoma normalmente — sem penalidade automática. Veja a seção **Estilhaços da Alma** para as tabelas completas."
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
    id: "progressao",
    title: "Progressão & Evolução",
    glyph: "⇡",
    blocks: [
      { type: "intro", text: "A jornada de um herói é medida pelo quanto sua alma cresce. A cada desafio superado, o personagem se aproxima do ápice do seu potencial." },
      { type: "subtitle", text: "Ganhando Níveis" },
      { type: "para", text: "Todo personagem começa no **Nível 5**. A progressão é simples e constante: ao final de cada sessão de jogo, todos sobem **1 nível**. Não há contagem de experiência — a evolução acompanha o ritmo da história e o grupo cresce junto." },
      { type: "callout-small", text: "O Mestre tem a palavra final sobre o que conta como uma sessão completa. Sessões muito curtas ou interrompidas podem ser agrupadas a critério da mesa." },
      { type: "subtitle", text: "O Que Você Ganha por Nível" },
      { type: "rule-list", items: [
        { label: "Ponto de Habilidade", text: "1 ponto para adquirir novas habilidades na árvore da sua classe ou aumentar o NH de técnicas que já possui." },
        { label: "Recursos Vitais", text: "+1 PV e +1 PE a cada nível conquistado." }
      ] },
      { type: "subtitle", text: "Marcos de Poder" },
      { type: "para", text: "Em três momentos cruciais, além dos ganhos normais de nível, o personagem dá um salto de poder e identidade:" },
      { type: "table", cols: ["Nível", "Ganho Extra"], rows: [
        ["10", "Aumento de Atributo: +1 passo num dado (máx d12). Aprimoramento: +1 Grau de Maestria em 2 perícias."],
        ["15", "Talento Heroico: uma capacidade que transcende a classe, escolhida de uma lista geral disponível a qualquer herói."],
        ["20", "Aumento de Atributo + Aprimoramento de 2 perícias — e abre-se o caminho para a Segunda Classe."]
      ] },
      { type: "callout-small", text: "Aumentar Poder ou Misticismo recalcula a base de PV e PE. A lista completa está na seção **Talentos Heroicos**." },
      { type: "subtitle", text: "O Despertar da Segunda Classe" },
      { type: "para", text: "O Nível 20 é um ponto de transição. A Classe Inicial atingiu seu ápice e o personagem pode trilhar uma **Segunda Classe**. A evolução não apaga o passado: você mantém tudo o que aprendeu e desbloqueia uma **nova árvore**, reiniciando a contagem de níveis para essa jornada." },
      { type: "rule-list", items: [
        { label: "Investimento na Árvore", text: "Pontos mínimos em habilidades específicas da Classe Inicial. Ex.: um Guerreiro que deseja ser Templário precisa de ao menos 5 pontos em Iniciado em Milagres." },
        { label: "Talento Heroico", text: "Alguns caminhos exigem um Talento Heroico específico, adquirido no Nível 15." }
      ] },
      { type: "callout-small", text: "Quem não cumpre os pré-requisitos não pode trilhar aquela Segunda Classe — o caminho se fecha para quem não se preparou." }
    ]
  },

  {
    id: "talentos",
    title: "Talentos Heroicos",
    glyph: "★",
    blocks: [
      { type: "intro", text: "No **Nível 15**, o personagem desperta um Talento Heroico — uma capacidade que transcende as fronteiras da sua classe. Talentos não pertencem a nenhuma árvore: são escolhidos desta lista geral, disponível a qualquer herói, e representam um avanço excepcional da alma." },
      { type: "table", cols: ["Talento", "Origem", "Efeito"], rows: [
        ["Coração Indômito", "Alma", "Sua Determinação máxima sobe de 10 para 12, e você suporta até 3 Estilhaços antes do ponto final, em vez de 2."],
        ["Fôlego de Guerra", "Guerreiro", "Seus PV máximos aumentam em +1 por nível de personagem."],
        ["Lâmina Certeira", "Gatuno", "Contra alvos Desprevenidos, Ocultos ou que ainda não agiram na rodada, seus ataques causam +1 dado de dano."],
        ["Olhar do Falcão", "Arqueiro", "Seus ataques à distância ignoram cobertura leve e somam +2 de dano fixo."],
        ["Mente Inesgotável", "Mago", "Como Ação Inicial, gaste metade dos seus PE atuais e ganhe esse mesmo valor em PV temporários (barreira de mana)."],
        ["Cura Persistente", "Sacerdote", "Um alvo curado por você recebe +5 de cura no início de cada turno dele, por 5 rodadas."]
      ] },
      { type: "callout-small", text: "Talentos transcendem a classe: qualquer personagem pode escolher qualquer um, independentemente da sua vocação. Alguns servem ainda como pré-requisito para Segundas Classes." }
    ]
  },

  {
    id: "estilhacos",
    title: "Estilhaços da Alma",
    glyph: "✶",
    blocks: [
      { type: "quote-small", text: "A cicatriz de uma ruptura que nunca volta a ser o que era." },
      { type: "intro", text: "Há um ponto sem retorno. Quando a Corrupção consome a alma por inteiro, algo se quebra. Um Estilhaço é uma mutação real — física e espiritual — que reescreve parte de quem o personagem é. Algumas concedem poder, outras são fardos; a maioria é ambas." },
      { type: "subtitle", text: "Quando um Estilhaço Surge" },
      { type: "para", text: "Quando a Corrupção atinge **10**, a alma se fragmenta e o personagem adquire **1 Estilhaço**. A Corrupção retorna a **0** e a Determinação volta a subir a partir daí. Não há penalidade automática na Determinação máxima — o peso do Estilhaço está no efeito que ele carrega." },
      { type: "subtitle", text: "Determinando o Estilhaço" },
      { type: "para", text: "Role **1d6** para a natureza do Estilhaço, depois role na tabela correspondente — ou crie um próprio com o Mestre." },
      { type: "table", cols: ["1d6", "Natureza"], rows: [
        ["1–2", "Maldição — mutação puramente prejudicial."],
        ["3–4", "Dádiva Sombria — poder real com custo real."],
        ["5–6", "Bênção Corrompida — rara; a escuridão concede algo útil."]
      ] },
      { type: "subtitle", text: "Maldições" },
      { type: "table", cols: ["1d6", "Estilhaço", "Efeito"], rows: [
        ["1", "Veias Negras", "Desvantagem em testes sociais com quem não conhece sua condição."],
        ["2", "Frieza da Alma", "Não pode formar novos Laços enquanto tiver este Estilhaço."],
        ["3", "Fome Espiritual", "Ao fim do Descanso Completo, role 1d6: com 1, ganha 1 Corrupção."],
        ["4", "Membro Apodrecido", "Reduz um dado de atributo em 1 passo permanente (mín. d6)."],
        ["5", "Mente Fragilizada", "Desvantagem em testes de Vontade contra efeitos mentais."],
        ["6", "Repulsa à Cura", "Curas restauram metade do valor em você."]
      ] },
      { type: "subtitle", text: "Dádivas Sombrias" },
      { type: "table", cols: ["1d6", "Estilhaço", "Efeito"], rows: [
        ["1", "Garras da Corrupção", "Ataque natural (POD+AGI+8, Trevas). Matar com ele recupera 20 PV e 20 PE."],
        ["2", "Sangue Venenoso", "Atacante corpo a corpo sofre 15 de Trevas. Você fica Vulnerável a Luz."],
        ["3", "Vigor Profano", "+3× Dado de Poder em PV. Porém −5 em testes de Reflexos."],
        ["4", "Olhos da Treva", "Visão no escuro e detecta Camuflados. Dano de Luz contra você impõe desvantagem nos seus ataques por 1 rodada."],
        ["5", "Força Emprestada", "1×/combate: +1 passo num atributo por cena. Ao usar, ganha 1 Corrupção."],
        ["6", "Couro Profano", "RD 5 físico. Porém −5 em Fortitude."]
      ] },
      { type: "subtitle", text: "Bênçãos Corrompidas" },
      { type: "table", cols: ["1d6", "Estilhaço", "Efeito"], rows: [
        ["1", "Resiliência Sombria", "Imune à condição Amedrontado."],
        ["2", "Segundo Coração", "1×/sessão, ao chegar a 0 PV, sai do Limiar com 1 PV."],
        ["3", "Mente Fraturada", "Vantagem em Vontade contra controle mental."],
        ["4", "Ecos de Poder", "Magias e habilidades custam 5 PE a menos (mín. 5)."],
        ["5", "Instinto Predatório", "+2 de Iniciativa permanente."],
        ["6", "Imparável", "Ao finalizar um alvo, pode agir novamente (até 2× por cena de combate)."]
      ] },
      { type: "subtitle", text: "O Terceiro Estilhaço" },
      { type: "callout", text: "A alma mortal carrega até **dois** Estilhaços e ainda permanece ela mesma. Mas quando a Corrupção atinge 10 pela **terceira** vez, não há mais alma suficiente para segurar o corpo: o personagem se torna um NPC sob controle permanente do Mestre, um eco distorcido movido apenas pela Corrupção que venceu." },
      { type: "subtitle", text: "Removendo Estilhaços" },
      { type: "para", text: "Não existe ritual, magia ou entidade que remova um Estilhaço — a Corrupção transcende o divino, pois é a manifestação de que ações têm consequências. Um Estilhaço só se desfaz por uma jornada de redenção genuína: escolhas e sacrifícios que provem, com atos, que o personagem mudou." },
      { type: "callout-small", text: "Ninguém se salva sozinho. Laços de Força 3 (Inabalável) são âncoras reais contra a escuridão, e a redenção avança mais quando impulsionada por esses vínculos." },
      { type: "quote-small", text: "Nenhuma alma está verdadeiramente perdida enquanto houver alguém disposto a lutar por ela." }
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
    id: "combate",
    title: "Combate",
    glyph: "⚔",
    blocks: [
      { type: "intro", text: "Combate é o momento em que a conversa acaba e as almas se provam. O Mestre descreve a cena, os jogadores descrevem suas intenções, e os dados decidem o destino." },
      { type: "subtitle", text: "Iniciando o Combate" },
      { type: "para", text: "Quando o conflito eclode, define-se quem age primeiro. A Iniciativa é um valor fixo — não se rola — calculado na criação do personagem." },
      { type: "highlight-formula", text: "Iniciativa = metade do Dado de Agilidade (arredondado para baixo)" },
      { type: "callout-small", text: "Os participantes agem em ordem decrescente de Iniciativa. Empate entre jogador e inimigo: o jogador age primeiro. Empate entre jogadores: eles decidem. A Iniciativa não muda durante o combate." },
      { type: "subtitle", text: "Estrutura do Turno" },
      { type: "rule-list", items: [
        { label: "Ação Inicial", text: "A ação principal: atacar, conjurar, usar uma habilidade poderosa, realizar uma manobra ou interagir de forma significativa com o ambiente." },
        { label: "Ação Parcial", text: "Uma ação secundária e mais limitada: habilidades menores, conjurações rápidas, interações simples." },
        { label: "Movimento", text: "Deslocar-se até o limite do seu deslocamento (padrão 9m). Pode ser dividido antes e depois de outra ação." },
        { label: "Reação", text: "Executada fora do seu turno, em resposta a um gatilho. Renova-se no início de cada um dos seus turnos." }
      ] },
      { type: "callout-small", text: "Uma Ação Inicial pode ser convertida voluntariamente em uma Ação Parcial adicional, mas o inverso não é possível. Falar, gritar, soltar um objeto ou gesticular não custam ação." },
      { type: "subtitle", text: "Realizando um Ataque" },
      { type: "para", text: "Declare o alvo e a perícia utilizada, role os dois dados da perícia e some o modificador. Compare o total com a Defesa passiva do alvo." },
      { type: "highlight-formula", text: "Dado A + Dado B + Modificador de Perícia ≥ Defesa do Alvo" },
      { type: "table", cols: ["Perícia", "Atributos", "Uso"], rows: [
        ["Armas Brancas", "POD+AGI ou AGI+AGI", "Espadas, machados, lanças"],
        ["Briga", "POD+AGI ou POD+POD", "Combate desarmado"],
        ["Armas de Fogo", "AGI+AGI", "Pistolas, rifles, bestas, arcos"],
        ["Conjuração Mística (Arcana)", "MIS+MIS", "Ataques mágicos arcanos"],
        ["Conjuração Mística (Divina)", "CAR+INT", "Ataques mágicos divinos"]
      ] },
      { type: "subtitle", text: "Dano, Resistências e Redução" },
      { type: "rule-list", items: [
        { label: "Resistência", text: "O alvo sofre metade do dano daquele tipo." },
        { label: "Vulnerabilidade", text: "O alvo sofre o dobro do dano daquele tipo." },
        { label: "Imunidade", text: "O alvo não sofre dano algum daquele tipo." },
        { label: "Redução de Dano (RD)", text: "Subtraia o valor da RD antes de aplicar o dano. O dano mínimo após RD é sempre 1." }
      ] },
      { type: "subtitle", text: "Sucessos Críticos" },
      { type: "para", text: "Quando os dois dados de um teste de ataque mostram o mesmo número e ambos estão acima de 6, algo extraordinário acontece." },
      { type: "rule-list", items: [
        { label: "Acerto Automático", text: "O ataque acerta, ignorando a Defesa do alvo." },
        { label: "Dano Dobrado", text: "Role o dano normalmente e dobre o resultado." },
        { label: "Oportunidade", text: "O atacante ganha um efeito extra à escolha do jogador e aprovado pelo Mestre: aplicar uma condição, reposicionar-se, intimidar a cena, recuperar PE, etc." }
      ] },
      { type: "callout-small", text: "Não existem falhas críticas — mas falhar repetidamente gera frustração e expõe a alma a riscos." },
      { type: "subtitle", text: "Ataques de Oportunidade" },
      { type: "para", text: "Quando uma criatura sai do alcance corpo-a-corpo de um inimigo sem usar a ação Desengajar, esse inimigo pode gastar sua Reação para um ataque imediato, seguindo as regras normais." },
      { type: "subtitle", text: "Cobertura" },
      { type: "rule-list", items: [
        { label: "Leve", text: "Móveis, arbustos, ângulo ruim: +2 na Defesa contra ataques diretos." },
        { label: "Pesada", text: "Paredes, pilares, barricadas: +5 na Defesa contra ataques diretos." },
        { label: "Total", text: "Completamente obstruído: não pode ser alvo de ataques diretos. Efeitos de área ainda o atingem." }
      ] },
      { type: "subtitle", text: "Ações Especiais de Combate" },
      { type: "rule-list", items: [
        { label: "Desengajar", text: "Seu movimento neste turno não provoca Ataques de Oportunidade." },
        { label: "Esquivar", text: "Até o início do próximo turno, ataques contra você têm Desvantagem e você tem Vantagem em Reflexos. Você não ataca." },
        { label: "Ajudar", text: "O próximo teste de ataque ou perícia de um aliado adjacente recebe Vantagem." },
        { label: "Procurar", text: "Teste de Percepção ou Investigação para localizar algo Oculto ou Camuflado." },
        { label: "Usar Item", text: "Usa um consumível do inventário, gastando Pontos de Inventário." },
        { label: "Preparar", text: "Declare uma ação e um gatilho. Se o gatilho ocorrer antes do próximo turno, a ação dispara como Reação." }
      ] },
      { type: "subtitle", text: "Nas Portas da Morte — O Crepúsculo" },
      { type: "para", text: "Ao chegar a 0 PV, o personagem entra no Crepúsculo da Morte, o espaço entre a vida e a morte onde só a força da alma o mantém no mundo." },
      { type: "rule-list", items: [
        { label: "Inconsciente", text: "Cai inconsciente e não pode realizar nenhuma ação." },
        { label: "Contagem da Alma", text: "Sua Determinação atual vira o número de turnos que resta antes de morrer." },
        { label: "Declínio", text: "No início de cada turno no Limiar, perde 1 ponto de Determinação." },
        { label: "Dano no Limiar", text: "Cada vez que recebe dano, perde mais 1 ponto de Determinação (2 se for crítico), independente do valor." },
        { label: "Marca da Queda", text: "Todo dano sofrido na Determinação vira Corrupção. Ao atingir o máximo de Corrupção, ganha um Estilhaço da Alma." },
        { label: "Último Fôlego", text: "Se a Determinação chegar a 1 no Limiar, faça um teste de Força de Vontade contra o ND da tabela. Falhar significa a morte." }
      ] },
      { type: "table", cols: ["Teste no Limiar", "ND (Força de Vontade)"], rows: [
        ["1º", "10"], ["2º", "16"], ["3º", "16"], ["4º", "20"], ["5º", "25"], ["6º", "30"]
      ] },
      { type: "quote", text: "Quase todo ser tem alma e, se tem alma, tem um coração — a culminação do seu ser." }
    ]
  },

  {
    id: "alma-furiosa",
    title: "Alma Furiosa",
    glyph: "✸",
    blocks: [
      { type: "intro", text: "Todo grande adversário guarda uma carta na manga. A Alma Furiosa é o trunfo dos chefes — um golpe de virada que se acumula no decorrer da batalha e, quando explode, muda o jogo. É a diferença entre um inimigo difícil e um inimigo inesquecível." },
      { type: "subtitle", text: "A Barra de Fúria" },
      { type: "para", text: "Exclusiva de criaturas **Chefe** e **Lendárias**, a Barra de Fúria é um recurso separado dos PV. Ela começa vazia e se enche conforme o combate se arrasta e a pressão aumenta — quanto mais longa a luta, mais perigoso o chefe se torna." },
      { type: "table", cols: ["Como a Fúria cresce", "Pontos"], rows: [
        ["Ao início de cada turno do chefe", "+1"],
        ["Quando o chefe sofre um acerto crítico", "+1"],
        ["Ao cruzar metade dos PV (uma única vez)", "+2"],
        ["Quando um aliado ou lacaio do chefe é derrubado", "+2"]
      ] },
      { type: "rule-list", items: [
        { label: "Chefe", text: "A barra enche ao atingir **10 Pontos de Fúria**." },
        { label: "Lendário", text: "A barra enche ao atingir **8 Pontos de Fúria** — e Lendários costumam despertar mais de uma vez ao longo das fases do combate." }
      ] },
      { type: "subtitle", text: "O Despertar" },
      { type: "rule-list", items: [
        { label: "Disparo Gratuito", text: "Ao encher a barra, no início do próximo turno o chefe dispara sua Alma Furiosa **sem gastar ação**." },
        { label: "Reinício", text: "A barra zera e volta a encher. Um chefe resistente pode despertar a Fúria várias vezes numa mesma batalha." },
        { label: "Inabalável", text: "Durante o turno do disparo, o chefe fica **imune a condições de controle**. Ninguém interrompe o golpe." },
        { label: "Timing do Mestre", text: "O Mestre pode segurar o disparo até o início do próximo turno do chefe, reservando-o para o momento mais dramático." }
      ] },
      { type: "subtitle", text: "A Alma Furiosa" },
      { type: "para", text: "O efeito em si é **livre**: cada chefe tem sua própria Alma Furiosa, criada pelo Mestre ao montar a criatura. Não há lista fechada — os moldes abaixo servem apenas como ponto de partida para a imaginação." },
      { type: "table", cols: ["Molde", "Inspiração"], rows: [
        ["Cataclismo", "Dano bruto em área, devastador. Ex.: todos em 9m sofrem 4d12 + atributo do chefe; metade com um teste de Reflexos contra o ND dele."],
        ["Sentença", "Controle pesado. Ex.: aplica Atordoado, Amedrontado ou Imobilizado em área por 1–2 rodadas, virando o ritmo a favor do chefe."],
        ["Juízo Final", "Dano e controle juntos — o pacote completo. Raro, reservado a Lendários ou ao clímax de uma campanha."]
      ] },
      { type: "callout", text: "Os moldes são trampólins, não gaiolas. A melhor Alma Furiosa é a que conta a história daquele chefe específico — invente livremente e deixe a criatividade crescer junto com a campanha." },
      { type: "quote-small", text: "Quando a alma de um monstro arde, o chão lembra." }
    ]
  },

  {
    id: "descanso",
    title: "Descanso & Recuperação",
    glyph: "☾",
    blocks: [
      { type: "intro", text: "A jornada é longa e o corpo tem limites. O descanso não é fraqueza — é o que separa os heróis dos mártires." },
      { type: "subtitle", text: "Descanso Curto" },
      { type: "para", text: "Algumas horas de respiro entre batalhas. Exige um local minimamente seguro e ao menos 2 horas sem interrupção." },
      { type: "rule-list", items: [
        { label: "Vitalidade", text: "Recupera 50% dos PV e 50% dos PE máximos." },
        { label: "Alívio", text: "Remove condições leves: Enfraquecido, Ofuscado, Caído, Chamuscado e Sangrando." },
        { label: "Suprimentos", text: "Restaura 2 Pontos de Inventário gastos com consumíveis." },
        { label: "Limite", text: "Só pode haver um Descanso Curto entre dois Descansos Completos." }
      ] },
      { type: "subtitle", text: "Descanso Completo" },
      { type: "para", text: "Uma noite inteira de sono, refeição e segurança real — nos ermos (área protegida ou hospitalidade amigável) ou em assentamentos (uma estalagem ou abrigo equivalente)." },
      { type: "rule-list", items: [
        { label: "Restauração Plena", text: "Recupera todos os PV e todos os PE." },
        { label: "Limpeza", text: "Remove todas as condições ativas, exceto as causadas por Estilhaço da Alma ou maldições permanentes." },
        { label: "Equilíbrio", text: "Recupera metade dos pontos de Determinação." },
        { label: "Inventário", text: "Restaura completamente os Pontos de Inventário." }
      ] },
      { type: "callout", text: "O Descanso Completo **não** reduz a Corrupção. A alma descansa, mas as marcas permanecem — Corrupção só cai por meios narrativos: rituais, redenção, magia sagrada ou escolhas do personagem." },
      { type: "subtitle", text: "Cenas de Descanso" },
      { type: "para", text: "Durante cada Descanso Completo, cada jogador tem direito a uma Cena de Descanso — um momento livre de interpretação, sem testes nem inimigos. Ao final, escolha um efeito:" },
      { type: "rule-list", items: [
        { label: "Formar um Laço", text: "Crie um novo Laço com alguém presente, definindo a Emoção e a Memória que o ancora." },
        { label: "Aprofundar um Laço", text: "Aumente a Força de um Laço existente em 1 (até 3)." },
        { label: "Transformar um Laço", text: "Troque a Emoção de um Laço por outra; a Força permanece." },
        { label: "Momento de Reflexão", text: "Recupera +1 ponto de Determinação além do normal e, se a narrativa justificar, remove 1 ponto de Corrupção." }
      ] },
      { type: "subtitle", text: "Laços & Vínculos" },
      { type: "para", text: "Laços são conexões emocionais — e força real. Quem luta por alguém é mais difícil de quebrar. Cada Laço tem uma Emoção, uma Memória e uma Força." },
      { type: "table", cols: ["Força", "Nome", "Significado"], rows: [
        ["1", "Nascente", "Conexão nova, ainda frágil e não testada."],
        ["2", "Firme", "Relação consolidada por experiências difíceis."],
        ["3", "Inabalável", "Vínculo que define o personagem; rompê-lo o mudaria."]
      ] },
      { type: "rule-list", items: [
        { label: "Ativar (Nascente)", text: "Uma vez por cena ao agir por esse Laço: Vantagem em um teste da ação." },
        { label: "Ativar (Firme)", text: "Vantagem no teste + recupera 5 PE." },
        { label: "Ativar (Inabalável)", text: "Vantagem no teste + 5 PE + 1 ponto de Determinação." },
        { label: "Proteção pela Conexão", text: "Com um aliado de Laço 2+ presente e consciente, o primeiro ponto de Determinação que perderia na cena é ignorado uma vez." },
        { label: "Custo de Perder", text: "Perder um Laço por morte ou traição custa Determinação: −1 (Nascente), −2 (Firme), −3 e +1 Corrupção (Inabalável)." }
      ] },
      { type: "callout-small", text: "O sistema de Laços é o mais experimental do jogo — pode ser usado como regra opcional. Máximo de 5 Laços ativos, 1 por pessoa." }
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
          { name: "Agarrado", color: "#a87038", desc: "Preso por uma criatura ou efeito. Deslocamento reduzido a 0 até se soltar (teste de Atletismo ou Briga contra quem agarra)." },
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
