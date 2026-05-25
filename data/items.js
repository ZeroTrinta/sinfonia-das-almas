// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Arsenal e Equipamentos
// ═══════════════════════════════════════════════

window.ITEMS = [
  { 
    name: "Espada Longa", category: "Armas Corpo a Corpo", type: "Marcial", 
    damage: "1d8", weight: "2 kg", price: "15 PO", 
    tags: ["corte", "versátil"], 
    desc: "Uma lâmina reta de aço forjado. Equilibrada e confiável, requer o uso de duas mãos para extrair o máximo de seu potencial (dano muda para 1d10 se usada com as duas mãos)." 
  },
  { 
    name: "Adaga", category: "Armas Corpo a Corpo", type: "Simples", 
    damage: "1d4", weight: "0.5 kg", price: "2 PO", 
    tags: ["perfuração", "arremesso", "acuidade"], 
    desc: "Lâmina curta e afiada, incrivelmente rápida. Facilmente ocultável sob as vestes." 
  },
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
  { 
    name: "Armadura de Couro Batido", category: "Armaduras", type: "Leve", 
    defense: "+2", weight: "6 kg", price: "45 PO", 
    tags: ["proteção", "vestuário"], 
    desc: "Couro fervido reforçado com rebites de metal leve. Não impõe nenhuma penalidade em testes de Agilidade ou magias." 
  },
  { 
    name: "Cota de Malha", category: "Armaduras", type: "Pesada", 
    defense: "+6", weight: "27 kg", price: "75 PO", 
    tags: ["proteção", "pesada", "ruidosa"], 
    desc: "Anéis de aço pesado entrelaçados. Concede Desvantagem em testes de Furtividade e exige atributo Poder forte para não penalizar o deslocamento." 
  },
  { 
    name: "Poção de Cura Menor", category: "Consumíveis", type: "Alquimia", 
    damage: "-", weight: "0.1 kg", price: "50 PO", 
    tags: ["cura", "uso único"], 
    desc: "Um pequeno frasco contendo um líquido rubi cintilante. Como uma Ação Parcial, o usuário pode bebê-la para recuperar imediatamente **2d4 + 2 Pontos de Vida**." 
  }
];
