// ===============================================
//  SINFONIA DAS ALMAS - Itens & Equipamentos
//  Catalogo oficial (documento do sistema). Moeda: Zenites.
//  Consumiveis custam PI. Armas/armaduras/conduites nao custam PI.
// ===============================================
window.ITEMS = [
  // ---------- CONSUMIVEIS ----------
  { name: "Poção de Cura Menor", category: "Consumíveis", type: "Poção", pi: 1, price: "30 Zênites", desc: "Restaura 20 PV." },
  { name: "Poção de Cura", category: "Consumíveis", type: "Poção", pi: 2, price: "80 Zênites", desc: "Restaura 40 PV." },
  { name: "Poção de Cura Maior", category: "Consumíveis", type: "Poção", pi: 3, price: "180 Zênites", desc: "Restaura 80 PV." },
  { name: "Poção de Energia Menor", category: "Consumíveis", type: "Poção", pi: 1, price: "30 Zênites", desc: "Restaura 20 PE." },
  { name: "Poção de Energia", category: "Consumíveis", type: "Poção", pi: 2, price: "80 Zênites", desc: "Restaura 40 PE." },
  { name: "Poção de Energia Maior", category: "Consumíveis", type: "Poção", pi: 3, price: "180 Zênites", desc: "Restaura 80 PE." },
  { name: "Poção de Purificação", category: "Consumíveis", type: "Poção", pi: 2, price: "100 Zênites", desc: "Remove uma condição negativa ativa à escolha do usuário." },
  { name: "Elixir da Alma", category: "Consumíveis", type: "Poção", pi: 3, price: "250 Zênites", desc: "Restaura 40 PV e 40 PE simultaneamente." },

  // ---------- ARMAS: ESPADAS ----------
  { name: "Adaga", category: "Armas", type: "Espada", damage: "AGI + AGI + 6 — Físico", prop: "Dupla Empunhadura", price: "50 Zênites" },
  { name: "Short Sword", category: "Armas", type: "Espada", damage: "AGI + POD + 7 — Físico", prop: "—", price: "80 Zênites" },
  { name: "Long Sword", category: "Armas", type: "Espada", damage: "POD + AGI + 8 — Físico", prop: "—", price: "120 Zênites" },
  { name: "Sabre", category: "Armas", type: "Espada", damage: "AGI + AGI + 9 — Físico", prop: "Veloz: +1 Iniciativa", price: "150 Zênites" },
  { name: "Great Sword", category: "Armas", type: "Espada", damage: "POD + AGI + 13 — Físico", prop: "Duas mãos", price: "250 Zênites" },

  // ---------- ARMAS: HASTE ----------
  { name: "Lança Curta", category: "Armas", type: "Haste", damage: "POD + AGI + 7 — Físico", prop: "Arremesso: até 9m", price: "90 Zênites" },
  { name: "Lança Longa", category: "Armas", type: "Haste", damage: "POD + AGI + 9 — Físico", prop: "Alcance: até 3m", price: "140 Zênites" },
  { name: "Alabarda", category: "Armas", type: "Haste", damage: "POD + POD + 11 — Físico", prop: "Duas mãos. Alcance: até 3m", price: "200 Zênites" },
  { name: "Glaive", category: "Armas", type: "Haste", damage: "POD + AGI + 12 — Físico", prop: "Duas mãos. Veloz: +1 Iniciativa", price: "220 Zênites" },

  // ---------- ARMAS: PESADAS ----------
  { name: "Machado", category: "Armas", type: "Pesada", damage: "POD + AGI + 10 — Físico", prop: "—", price: "130 Zênites" },
  { name: "Machado de Duas Mãos", category: "Armas", type: "Pesada", damage: "POD + POD + 15 — Físico", prop: "Duas mãos. Brutal", price: "280 Zênites" },
  { name: "Maça", category: "Armas", type: "Pesada", damage: "POD + POD + 11 — Físico", prop: "Contundente", price: "160 Zênites" },
  { name: "Martelo de Guerra", category: "Armas", type: "Pesada", damage: "POD + POD + 13 — Físico", prop: "Duas mãos. Contundente", price: "260 Zênites" },

  // ---------- ARMAS: PRECISAO ----------
  { name: "Arco Curto", category: "Armas", type: "Precisão", damage: "AGI + AGI + 7 — Físico", prop: "Alcance 18m. Duas mãos", price: "100 Zênites" },
  { name: "Arco Longo", category: "Armas", type: "Precisão", damage: "AGI + INT + 10 — Físico", prop: "Alcance 27m. Duas mãos", price: "180 Zênites" },
  { name: "Besta Leve", category: "Armas", type: "Precisão", damage: "AGI + INT + 8 — Físico", prop: "Alcance 18m. Recarga: Ação Parcial", price: "120 Zênites" },
  { name: "Besta Pesada", category: "Armas", type: "Precisão", damage: "AGI + INT + 13 — Físico", prop: "Alcance 27m. Recarga: Ação Inicial. Duas mãos", price: "350 Zênites" },
  { name: "Pistola", category: "Armas", type: "Precisão", damage: "AGI + INT + 9 — Físico", prop: "Alcance 12m. Recarga: Ação Parcial", price: "200 Zênites" },
  { name: "Rifle", category: "Armas", type: "Precisão", damage: "AGI + INT + 15 — Físico", prop: "Alcance 36m. Recarga: Ação Inicial. Duas mãos", price: "400 Zênites" },

  // ---------- ARMADURAS ----------
  { name: "Armadura de Couro", category: "Armaduras", type: "Leve", defense: "Defesa 9", prop: "—", price: "80 Zênites" },
  { name: "Armadura de Couro Reforçado", category: "Armaduras", type: "Leve", defense: "Defesa 10", prop: "—", price: "140 Zênites" },
  { name: "Cota de Malha", category: "Armaduras", type: "Média", defense: "Defesa 12", prop: "—", price: "200 Zênites" },
  { name: "Armadura de Placas Parcial", category: "Armaduras", type: "Média", defense: "Defesa 13", prop: "Penalidade de deslocamento por POD - 10. Desvantagem em Furtividade.", price: "300 Zênites" },
  { name: "Armadura de Placas Completa", category: "Armaduras", type: "Pesada", defense: "Defesa 15", prop: "Penalidade de deslocamento por POD - 10. Desvantagem em Furtividade.", price: "500 Zênites" },
  { name: "Armadura de Guerra", category: "Armaduras", type: "Pesada", defense: "Defesa 16", prop: "Penalidade de deslocamento por POD - 12. Desvantagem em Furtividade. RD 3 físico.", price: "750 Zênites" },

  // ---------- ESCUDOS ----------
  { name: "Escudo Leve", category: "Escudos", type: "Escudo", defense: "+1 Defesa", prop: "—", price: "60 Zênites" },
  { name: "Escudo de Torre", category: "Escudos", type: "Escudo", defense: "+2 Defesa", prop: "—", price: "150 Zênites" },

  // ---------- CONDUITES: ARCANOS ----------
  { name: "Cajado de Aprendiz", category: "Conduítes", type: "Arcano", valorFixo: "Valor Fixo +4", prop: "—", price: "100 Zênites" },
  { name: "Varinha de Foco", category: "Conduítes", type: "Arcano", valorFixo: "Valor Fixo +5", prop: "Leve", price: "150 Zênites" },
  { name: "Cajado de Batalha", category: "Conduítes", type: "Arcano", valorFixo: "Valor Fixo +7", prop: "Corpo a corpo: MIS + MIS + 7 — Físico", price: "250 Zênites" },
  { name: "Tomo Arcano", category: "Conduítes", type: "Arcano", valorFixo: "Valor Fixo +6", prop: "Grimório: +1 magia conhecida", price: "300 Zênites" },
  { name: "Orbe de Cristal", category: "Conduítes", type: "Arcano", valorFixo: "Valor Fixo +8", prop: "Expansão: +1 ND Mística", price: "400 Zênites" },
  { name: "Cajado do Arcano Superior", category: "Conduítes", type: "Arcano", valorFixo: "Valor Fixo +10", prop: "Duas mãos. Expansão: +1 ND Mística", price: "600 Zênites" },

  // ---------- CONDUITES: SAGRADOS ----------
  { name: "Símbolo Sagrado Simples", category: "Conduítes", type: "Sagrado", valorFixo: "Valor Fixo +4", prop: "—", price: "100 Zênites" },
  { name: "Rosário Abençoado", category: "Conduítes", type: "Sagrado", valorFixo: "Valor Fixo +5", prop: "Leve", price: "150 Zênites" },
  { name: "Relíquia de Batalha", category: "Conduítes", type: "Sagrado", valorFixo: "Valor Fixo +7", prop: "Corpo a corpo: CAR + INT + 7 — Luz", price: "250 Zênites" },
  { name: "Tomo Divino", category: "Conduítes", type: "Sagrado", valorFixo: "Valor Fixo +6", prop: "Sagrado: +1 magia sagrada conhecida", price: "300 Zênites" },
  { name: "Símbolo Sagrado Abençoado", category: "Conduítes", type: "Sagrado", valorFixo: "Valor Fixo +8", prop: "Expansão: +1 ND Mística", price: "400 Zênites" },
  { name: "Relíquia Ancestral", category: "Conduítes", type: "Sagrado", valorFixo: "Valor Fixo +10", prop: "Duas mãos. Expansão: +1 ND Mística", price: "600 Zênites" }
];
