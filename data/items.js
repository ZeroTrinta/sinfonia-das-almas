// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Arsenal e Equipamentos
// ═══════════════════════════════════════════════

window.ITEMS = [
  // ═════ ARMAS MUNDANAS ═════
  { 
    name: "Espada Longa", category: "Armas", type: "Corpo a Corpo (Marcial)", 
    damage: "1d8", weight: "2 kg", price: "15 PO", 
    tags: ["corte", "versátil"], 
    desc: "Uma lâmina reta de aço forjado. Equilibrada e confiável, requer o uso de duas mãos para extrair o máximo de seu potencial (dano muda para 1d10 se usada com as duas mãos)." 
  },
  { 
    name: "Adaga", category: "Armas", type: "Corpo a Corpo (Simples)", 
    damage: "1d4", weight: "0.5 kg", price: "2 PO", 
    tags: ["perfuração", "arremesso", "acuidade"], 
    desc: "Lâmina curta e afiada, incrivelmente rápida. Facilmente ocultável sob as vestes." 
  },

  // ═════ FOCOS MÍSTICOS ═════
  { 
    name: "Conduíte Arcano (Básico)", category: "Focos Místicos", type: "Arcano", 
    damage: "-", weight: "0.5 kg", price: "20 PO", 
    tags: ["místico", "conduíte"], 
    desc: "Um cajado curto de madeira tratada ou um orbe de quartzo bruto. Adiciona **+2 de Valor Fixo** nas rolagens de dano de todas as magias Arcanas de 1º Círculo." 
  },
  { 
    name: "Conduíte Sagrado (Básico)", category: "Focos Místicos", type: "Sagrado", 
    damage: "-", weight: "0.5 kg", price: "25 PO", 
    tags: ["divino", "conduíte"], 
    desc: "Um relicário ou rosário benzido em prata. Adiciona **+2 de Valor Fixo** nas rolagens de cura e dano de todas as magias Divinas/Sagradas de 1º Círculo." 
  },

  // ═════ ARMADURAS E TRAJES MÍSTICOS ═════
  { 
    name: "Trajes de Tecido ou Vestes Arcanas", category: "Armaduras", type: "Traje Místico", 
    defense: "+1", weight: "1 kg", price: "5 PO", 
    tags: ["proteção", "vestuário", "místico"], 
    desc: "Vestes simples, túnicas ou sobretudos encantados levemente. Não oferecem proteção balística, mas também não impõem nenhuma penalidade de mobilidade. Permitem conjuração livre." 
  },
  { 
    name: "Couro Leve", category: "Armaduras", type: "Leve", 
    defense: "+2", weight: "5 kg", price: "15 PO", 
    tags: ["proteção", "furtividade"], 
    desc: "Armadura composta por camadas sobrepostas de couro curtido, oferecendo proteção decente contra cortes sem sacrificar a agilidade." 
  },
  { 
    name: "Armadura de Placas", category: "Armaduras", type: "Pesada", 
    defense: "+8", weight: "30 kg", price: "1.500 PO", 
    tags: ["proteção", "pesada", "ruidosa"], 
    desc: "A defesa suprema. Placas de aço temperado articuladas cobrindo todo o corpo. O usuário recebe **Desvantagem em testes de Furtividade e Esquiva**. Exige alto atributo de Poder para vestir sem fadiga." 
  },

  // ═════ ITENS MÁGICOS & CONSUMÍVEIS ═════
  { 
    name: "Frasco de Fogo Alquímico", category: "Consumíveis", type: "Alquimia", 
    damage: "1d8", weight: "0.5 kg", price: "50 PO", 
    tags: ["dano", "fogo", "arremesso", "uso único"], 
    desc: "Um frasco de vidro contendo um líquido volátil e pegajoso que entra em combustão ao contato com o ar. Pode ser arremessado a até 6 metros. O alvo sofre **1d8 de dano de fogo** no impacto e no início de seu próximo turno até que gaste uma ação para apagar as chamas." 
  },
  { 
    name: "Poção de Restauração", category: "Consumíveis", type: "Alquimia", 
    damage: "-", weight: "0.1 kg", price: "150 PO", 
    tags: ["cura", "cura-condição", "uso único"], 
    desc: "Um elixir perolado e espesso. Além de restaurar **1d8 Pontos de Vida**, consumir esta poção limpa o sangue do usuário, encerrando imediatamente uma condição física negativa, como *Envenenado* ou *Paralisado*." 
  }
];
