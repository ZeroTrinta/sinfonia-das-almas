// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Bestiário: fichas de criatura
//  Schema inspirado no actor do Foundry (v0.8.x)
// ═══════════════════════════════════════════════
//
//  Campos de cada criatura:
//   nome, tipo (um dos 11 tipos), categoria (Comum|Elite|Chefe|Lendário),
//   atributos {pod,agi,int,car,mis}, pv, pe, defesa, ndMistica, deslocamento,
//   resistencias (texto livre), ataques [{nome,custo,efeito}],
//   habilidades [{nome,efeito}], almaFuriosa {barra,nome,efeito} (só Chefe/Lendário),
//   descricao
//
window.CREATURES = [
  {
    nome: "Cadáver Errante",
    tipo: "Mortos-vivos",
    categoria: "Comum",
    atributos: { pod: "d8", agi: "d6", int: "d6", car: "d6", mis: "d6" },
    pv: 18, pe: 0, defesa: 6, ndMistica: null, deslocamento: 6,
    resistencias: "Imune a veneno e à condição Amedrontado. Vulnerável a Luz e Fogo.",
    ataques: [
      { nome: "Mordida Voraz", custo: "1 Ação Inicial", efeito: "Ataque corpo a corpo (POD+AGI). Em caso de acerto: 1d8 de dano perfurante. O alvo testa Fortitude contra ND 12 ou fica Sangrando." }
    ],
    habilidades: [
      { nome: "Horda", efeito: "Quando dois ou mais Cadáveres Errantes atacam o mesmo alvo na mesma rodada, cada um soma +2 de dano." },
      { nome: "Levantar-se", efeito: "Ao cair a 0 PV, role 1d6: com 6, o cadáver se reergue com 1 PV. Funciona uma vez." }
    ],
    descricao: "Corpos remendados pela magia residual de um campo de batalha esquecido. Lentos e burros, mas raramente vêm sozinhos — e nunca param de vir."
  },
  {
    nome: "Ceifador de Almas",
    tipo: "Mortos-vivos",
    categoria: "Chefe",
    atributos: { pod: "d10", agi: "d8", int: "d8", car: "d10", mis: "d10" },
    pv: 130, pe: 60, defesa: 8, ndMistica: 16, deslocamento: 9,
    resistencias: "Imune a Sombra e à condição Amedrontado. Resistente a dano físico. Vulnerável a Luz.",
    ataques: [
      { nome: "Foice Espectral", custo: "1 Ação Inicial", efeito: "Ataque corpo a corpo (POD+AGI). Em caso de acerto: 2d10+5 de dano de corte. O Ceifador cura PV igual à metade do dano causado." },
      { nome: "Toque Dilacerante", custo: "15 PE", efeito: "Um alvo a até 6m testa Vontade contra ND 16. Se falhar, perde 1 ponto de Determinação e fica Amedrontado até o fim do próximo turno dele." }
    ],
    habilidades: [
      { nome: "Aura de Desespero", efeito: "Inimigos a até 6m do Ceifador sofrem -2 em testes de Força de Vontade." },
      { nome: "Colheita", efeito: "Ao reduzir um alvo a 0 PV, o Ceifador recupera 20 PE e ganha +2 Pontos de Fúria." }
    ],
    almaFuriosa: {
      barra: 10,
      nome: "Ceifa das Almas",
      efeito: "Todos os inimigos a até 9m sofrem 4d12 de dano de Sombra (metade com um teste de Reflexos contra ND 16) e testam Vontade contra ND 16 ou ficam Amedrontados por 1 rodada. O Ceifador cura PV igual ao maior dano causado a um único alvo."
    },
    descricao: "Onde ele caminha, a esperança definha. Diz-se que cada alma ceifada engrossa o manto que arrasta atrás de si — e que o manto nunca para de crescer."
  }
];
