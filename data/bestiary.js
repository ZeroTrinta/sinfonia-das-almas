// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Bestiário (taxonomia)
// ═══════════════════════════════════════════════

window.BESTIARY = {
  intro: "O mundo é vasto e perigoso. Para cada cidade iluminada existe uma floresta escura; para cada estrada segura, um caminho infestado. As criaturas a seguir não existem apenas para serem derrotadas — cada uma tem identidade, propósito e uma lógica própria, porque o mundo as criou.",

  categories: [
    { name: "Comum", glyph: "\u2022", color: "#7a8a72",
      desc: "Criaturas fracas, geralmente encontradas em grupos. Pouco PV e comportamento previsível — mas capazes de esgotar um grupo pela quantidade." },
    { name: "Elite", glyph: "\u25C6", color: "#5a9ad0",
      desc: "Adversários poderosos que, sozinhos, representam um desafio real. Possuem habilidades únicas e padrões de combate mais complexos." },
    { name: "Chefe", glyph: "\u2726", color: "#d08a30",
      desc: "Antagonistas centrais de um arco ou masmorra. Múltiplas habilidades, padrões táticos definidos e acesso à Alma Furiosa." },
    { name: "Lendário", glyph: "\u2737", color: "#c84068",
      desc: "Entidades de poder absurdo, com fases de combate, Alma Furiosa amplificada e encontros que definem campanhas inteiras." }
  ],

  types: [
    { name: "Bestas", glyph: "\u269C",
      desc: "Animais selvagens e predadores naturais que agem por instinto puro. Não planejam nem negociam; recuam apenas por medo ou dor. Movidas por fome, território e sobrevivência — um predador refinado por milênios é uma máquina de matar." },
    { name: "Humanoides", glyph: "\u2694",
      desc: "Seres racionais que fazem escolhas, nem sempre as certas. Pensam, planejam, recuam, negociam e às vezes se rendem. São os inimigos mais imprevisíveis porque têm motivações compreensíveis: ganância, medo, lealdade, desespero." },
    { name: "Mortos-vivos", glyph: "\u2620",
      desc: "O que resta quando a alma se vai mas o corpo se recusa a descansar. Não sentem dor nem medo e não negociam — apenas continuam, movidos por magia residual, vontade alheia ou ódio acumulado. Luz e Fogo são seus maiores inimigos." },
    { name: "Demônios", glyph: "\u25C9",
      desc: "Seres de um plano além da compreensão mortal. Não invadem o mundo por acidente: cada um carrega uma intenção ou fome espiritual específica. Pensam, manipulam e exploram fraquezas com prazer — tratá-los como monstros comuns é um erro." },
    { name: "Construtos", glyph: "\u2699",
      desc: "Máquinas com propósito, criadas por alguém para cumprir uma função até pararem de funcionar. Não sentem dor, medo ou hesitação. São os inimigos mais previsíveis do bestiário — e por isso, paradoxalmente, perigosos." },
    { name: "Monstruosidades", glyph: "\u2756",
      desc: "Criaturas que desafiam a classificação natural — nem bestas, nem humanoides, moldadas pelo caos, pela magia corrompida ou por experimentos proibidos. Corpos que se dividem, toxinas que desorientam, anatomias que ignoram as leis físicas. Exigem adaptação." },
    { name: "Dragões", glyph: "\u232C",
      desc: "Criaturas de poder absoluto e orgulho ainda maior. Antigos — alguns mais velhos que os reinos —, acumulam poder, conhecimento e rancor com igual dedicação. Raramente atacam sem motivo, mas quando o fazem, decidiram que você não merece existir." },
    { name: "Caóticos", glyph: "\u29BF",
      desc: "Aberrações que não pertencem a este plano: fragmentos de uma realidade alienígena cuja existência contradiz as leis naturais. Olhá-los por tempo demais custa a sanidade. Querem coisas que a mente mortal não consegue nomear." },
    { name: "Fadas", glyph: "\u273F",
      desc: "Seres do plano feérico — caprichoso, imprevisível e perigoso à sua maneira. Não são necessariamente malignas, mas seus valores diferem por completo dos mortais. Nunca aceite um favor de uma Fada sem ler as entrelinhas — e mesmo assim, provavelmente está perdendo algo." },
    { name: "Gigantes", glyph: "\u26F0",
      desc: "Seres de estatura monumental cuja presença altera o campo de batalha. Não são estúpidos — alguns são sábios e antigos —, mas todos compartilham uma verdade: quando decidem usar força, poucos a suportam. Um único Gigante pode valer um bando de criaturas menores." },
    { name: "Cósmicos", glyph: "\u2736",
      desc: "Entidades divinas ou quase divinas, manifestações vivas de conceitos: o Tempo, a Morte, o Caos, a Chama, o Vazio. Não são bons nem maus — simplesmente são. Tentar convencer um Cósmico a agir contra sua natureza é tão útil quanto pedir ao fogo que não queime." }
  ]
};
