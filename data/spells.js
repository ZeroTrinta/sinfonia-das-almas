// ═══════════════════════════════════════════════
//  SINFONIA DAS ALMAS — Grimório completo (v0.3.2)
// ═══════════════════════════════════════════════

window.SPELLS = [
  // ═══════════════════════════════════════════════
  //  MAGIAS ARCANAS — 1º CÍRCULO
  // ═══════════════════════════════════════════════
  {
    name: "Dardo de Fogo", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "fogo"],
    desc: "Você canaliza uma fagulha volátil na ponta dos dedos ou no topo do seu conduíte e a arremessa como um projétil veloz contra uma criatura ou objeto dentro do alcance. Faça um teste de acerto místico (INT + MIS) contra a Defesa do alvo.\\n\\n• **Em caso de acerto:** o alvo sofre **1d10 de dano de fogo** + o Valor Fixo do seu Conduíte Arcano equipado."
  },
  {
    name: "Borrifo de Ácido", type: "arcana", circle: 1, school: "Conjuração",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "ácido"],
    desc: "Você projeta e arremessa uma bolha de fluido altamente corrosiva. Escolha uma criatura visível, ou duas adjacentes a até 1,5m uma da outra. Cada alvo deve realizar um teste de **Reflexos** contra o seu ND Místico.\\n\\n• **Em caso de falha:** o alvo sofre **1d6 de dano de ácido** + o Valor Fixo do seu Conduíte Arcano equipado."
  },
  {
    name: "Toque Gélido", type: "arcana", circle: 1, school: "Necromancia",
    cast: "1 Ação Inicial", range: "Toque", duration: "1 rodada", cost: "10 PE",
    tags: ["dano", "gelo", "debuff"],
    desc: "Você cria uma onda de frio sepulcral ao redor da sua mão. Faça um teste de acerto místico contra a Defesa do alvo.\\n\\n• **Em caso de acerto:** o alvo sofre **1d8 de dano de gelo** e fica sob a condição **Imobilizado** (deslocamento 0) até o início do seu próximo turno devido ao congelamento parcial das articulações."
  },
  {
    name: "Luzes Dançantes", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "36m (24q)", duration: "Até 1 minuto / Concentração", cost: "10 PE",
    tags: ["utilitária", "luz"],
    desc: "Você cria até quatro luzes do tamanho de tochas ou uma forma brilhante humanoide de tamanho Médio. As luzes emanam luz penumbra em um raio de 3 metros.\\n\\n• **Movimentação:** no seu turno, você pode usar uma Ação Parcial para mover as luzes por até 9 metros para qualquer ponto dentro do alcance máximo."
  },
  {
    name: "Mão Mágica", type: "arcana", circle: 1, school: "Conjuração",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "1 minuto", cost: "10 PE",
    tags: ["utilitária"],
    desc: "Uma mão espectral e flutuante se materializa em um ponto à sua escolha. Você pode usar sua Ação Parcial para controlar a mão.\\n\\n• **Ações:** você pode usar a mão para manipular objetos mundanos, abrir portas destrancadas, guardar ou retirar itens de bolsas abertas ou carregar até 5 kg.\\n• **Restrição:** a mão não pode golpear, ativar itens mágicos ou empunhar armas."
  },
  {
    name: "Lâmina Estrondosa", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "Pessoal (alcance da arma)", duration: "1 rodada", cost: "10 PE",
    tags: ["dano", "combate", "raio"],
    desc: "Você imbui sua arma corpo a corpo com energias sônicas instáveis e realiza um ataque físico comum. Se acertar o ataque físico, o alvo sofre o dano normal da arma.\\n\\n• **Efeito Ecoante:** além disso, o alvo fica envolto por uma barreira de som estrondoso. Se ele se mover voluntariamente antes do início do seu próximo turno, a barreira detona, causando **1d8 de dano de Raio/bruto** imediatamente."
  },
  {
    name: "Lâmina de Chamas Verdes", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "Pessoal (alcance da arma)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "combate", "fogo"],
    desc: "Você envolve sua lâmina em chamas verde-esmeralda e desfere um ataque corpo a corpo comum. Se acertar, aplica o dano mundano da arma.\\n\\n• **Salto de Chamas:** as chamas saltam para um segundo oponente adjacente ao alvo original (a até 1,5m dele). Esse segundo alvo sofre **dano de fogo igual ao Valor Fixo do seu Conduíte Arcano**."
  },
  {
    name: "Prestidigitação", type: "arcana", circle: 1, school: "Transmutação",
    cast: "1 Ação Inicial", range: "3m (2q)", duration: "Até 1 hora", cost: "10 PE",
    tags: ["utilitária"],
    desc: "Um truque sutil que permite a realização de pequenos efeitos mágicos e truques de ilusão inofensivos.\\n\\n• **Efeitos Possíveis:** criar uma distorção sensorial momentânea (odor, som fraco), acender ou apagar uma vela/tocha, limpar ou sujar um objeto pequeno, ou resfriar/aquecer uma porção de comida por 1 hora."
  },
  {
    name: "Estrondo Trovejante", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "Pessoal (Raio de 1,5m)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "área", "raio"],
    desc: "Uma onda de força sônica destrutiva explode a partir de você. Todas as criaturas em quadrados adjacentes (raio de 1,5m) devem realizar um teste de **Fortitude** contra seu ND Místico.\\n\\n• **Em caso de falha:** sofrem **1d6 de dano de Raio/bruto**.\\n• **Efeito Sonoro:** o barulho gerado por este feitiço é extremamente alto e reverbera distintamente por até 90 metros."
  },
  {
    name: "Alarme", type: "arcana", circle: 1, school: "Abjuração",
    cast: "1 minuto", range: "9m (6q)", duration: "8 horas", cost: "10 PE",
    tags: ["utilitária", "proteção"],
    desc: "Você tece uma teia sutil invisível ao redor de uma área fechada ou objeto contido em um cubo de até 6 metros de lado.\\n\\n• **Gatilho:** quando uma criatura entrar na área protegida sem proferir uma senha previamente escolhida, o alarme dispara.\\n• **Modos:** pode emitir um som estrondoso (audível a 18m) ou um alerta mental que ecoa apenas na mente do conjurador (se estiver a até 40m da área)."
  },
  {
    name: "Atração", type: "arcana", circle: 1, school: "Encantamento",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "1 rodada", cost: "10 PE",
    tags: ["controle", "debuff"],
    desc: "Você projeta um forte magnetismo mental ou gravitacional sobre um alvo. Faça um teste de acerto místico contra a Defesa do oponente.\\n\\n• **Em caso de acerto:** você ganha **Vantagem** em todos os ataques e magias direcionados a este alvo até o fim do seu turno.\\n• Se o alvo tentar se mover e se afastar de você no turno dele, ficará sob a condição **Debilitado**."
  },
  {
    name: "Causar Medo", type: "arcana", circle: 1, school: "Necromancia",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Até 1 minuto / Concentração", cost: "10 PE",
    tags: ["debuff", "controle"],
    desc: "Você desperta visões aterrorizantes da mortalidade na mente de um ser vivo. O alvo deve passar em um teste de **Força de Vontade** contra seu ND Místico.\\n\\n• **Em caso de falha:** fica sob a condição **Amedrontado** pela duração da magia.\\n• O alvo pode repetir o teste de Vontade no final de cada um dos turnos dele para tentar quebrar o efeito."
  },
  {
    name: "Vida Falsa", type: "arcana", circle: 1, school: "Necromancia",
    cast: "1 Ação Inicial", range: "Pessoal", duration: "1 hora", cost: "10 PE",
    tags: ["buff", "proteção"],
    desc: "Você extrai forças latentes do plano da necromancia para sustentar o seu próprio corpo místico.\\n\\n• **Efeito:** você ganha imediatamente **1d4 + 4 Pontos de Vida Temporários**. Esses PV Temporários absorvem o dano diretamente e desaparecem após 1 hora se não forem consumidos antes."
  },
  {
    name: "Queda Suave", type: "arcana", circle: 1, school: "Transmutação",
    cast: "1 Reação", range: "18m (12q)", duration: "1 minuto", cost: "10 PE",
    tags: ["utilitária"],
    desc: "Reação ativada quando você ou uma criatura em alcance começa a cair de uma altura elevada.\\n\\n• **Efeito:** altera a velocidade de queda de até 5 criaturas para apenas 3 metros por rodada. As criaturas afetadas não sofrem nenhum dano de queda e pousam suavemente de pé se a magia ainda estiver ativa."
  },
  {
    name: "Barreira Arcana", type: "arcana", circle: 1, school: "Abjuração",
    cast: "1 Reação", range: "Pessoal", duration: "1 rodada", cost: "10 PE",
    tags: ["proteção", "buff"],
    desc: "Reação disparada quando você está prestes a ser atingido por um ataque físico ou místico.\\n\\n• **Efeito:** um escudo cintilante de força geométrica surge para interceptar o golpe. Você ganha **+5 de bônus na Defesa Passiva** contra todos os ataques recebidos até o início do seu próximo turno."
  },
  {
    name: "Sono", type: "arcana", circle: 1, school: "Encantamento",
    cast: "1 Ação Inicial", range: "27m (18q)", duration: "1 minuto", cost: "10 PE",
    tags: ["controle"],
    desc: "Você sopra uma névoa invisível de letargia mística. Escolha um ponto central. Role **5d10**; o total é o pool de Pontos de Vida que esta magia consegue afetar.\\n\\n• **Efeito:** começando pelas criaturas com a menor quantidade de PV atual na área (esfera de 6m de raio), elas caem sob a condição **Inconsciente** (dormindo). O efeito salta para as próximas até esgotar o pool rolled. Criaturas imunes a encantos ou mortos-vivos são imunes."
  },
  {
    name: "Detectar Magia", type: "arcana", circle: 1, school: "Adivinhação",
    cast: "1 Ação Inicial", range: "Pessoal (Raio de 9m)", duration: "Até 10 min / Concentração", cost: "10 PE",
    tags: ["utilitária", "adivinhação"],
    desc: "Seus olhos brilham com uma tonalidade azulada. Você passa a enxergar fluxos e linhas de poder místico em até 9 metros.\\n\\n• **Efeito:** você localiza a presença de objetos mágicos ou efeitos de feitiços ativos, conseguindo identificar a qual escola de magia pertencem através da cor da aura."
  },
  {
    name: "Identificar", type: "arcana", circle: 1, school: "Adivinhação",
    cast: "1 minuto", range: "Toque", duration: "Instantânea", cost: "10 PE",
    tags: ["utilitária", "adivinhação"],
    desc: "Você medita profundamente mantendo contato físico contínuo com um item ou criatura por 1 minuto.\\n\\n• **Efeito:** você descobre todas as propriedades mágicas do item, como utilizá-lo, suas maldições latentes, cargas restantes ou quais feitiços ativos estão afetando a criatura tocada."
  },
  {
    name: "Absorver Elementos", type: "arcana", circle: 1, school: "Abjuração",
    cast: "1 Reação", range: "Pessoal", duration: "1 rodada", cost: "10 PE",
    tags: ["proteção", "combate"],
    desc: "Reação ativada quando você sofre dano elemental (Fogo, Gelo, Terra, Ar ou Raio).\\n\\n• **Efeito:** você ganha **Resistência** (sofre metade do dano) contra o elemento desencadeador até o início do seu próximo turno.\\n• **Contra-ataque:** seu primeiro ataque físico desferido no próximo turno causará **+1d6 de dano extra** do tipo elemental absorvido."
  },
  {
    name: "Corte de Ar", type: "arcana", circle: 1, school: "Transmutação",
    cast: "1 Ação Inicial", range: "12m (8q)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "ar"],
    desc: "Você golpeia o ar com as mãos ou conduíte, gerando uma lâmina de vácuo pressurizada e invisível contra um alvo.\\n\\n• **Efeito:** faça um teste de acerto místico contra a Defesa do oponente. Em caso de acerto, causa **1d10 de dano de Ar/bruto** + o Valor Fixo do seu Conduíte Arcano equipado."
  },
  {
    name: "Estilhaço de Pedra", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "terra", "controle"],
    desc: "Você arranca e arremessa um bloco de rocha pontiaguda do solo em direção ao oponente. Faça um teste de acerto místico.\\n\\n• **Em caso de acerto:** causa **1d10 de dano de Terra** e o alvo deve passar num teste de **Fortitude** contra seu ND ou cairá sob a condição **Caído** devido ao forte impacto."
  },
  {
    name: "Riso Incontrolável", type: "arcana", circle: 1, school: "Encantamento",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "Até 1 minuto / Concentração", cost: "10 PE",
    tags: ["controle", "debuff"],
    desc: "Você aponta para uma criatura e planta uma piada conceitual absurda diretamente em seu cérebro. O alvo deve fazer um teste de **Força de Vontade** contra seu ND Místico.\\n\\n• **Em caso de falha:** desaba em gargalhadas histéricas, ficando sob as condições **Caído** e **Incapacitado**.\\n• O alvo repete o teste de Vontade no fim de cada turno dele para tentar recuperar a compostura."
  },
  {
    name: "Armadura Arcana", type: "arcana", circle: 1, school: "Abjuração",
    cast: "1 Ação Inicial", range: "Toque", duration: "8 horas", cost: "10 PE",
    tags: ["proteção", "buff"],
    desc: "Você tece uma barreira protetora invisível, mas tangível, ao redor de uma criatura voluntária que não esteja vestindo armadura. Pela duração da magia, a base da Defesa Passiva do alvo muda.\\n\\n• **Cálculo de Defesa:** a Defesa Passiva do alvo passa a ser **13 + Valor do Dado de Agilidade**.\\n• A magia encerra imediatamente se o alvo vestir uma armadura ou se você a dispensar como Ação Livre."
  },
  {
    name: "Mísseis Mágicos", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "36m (24q)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "força"],
    desc: "Você cria três dardos reluzentes de energia mágica pura que flutuam ao seu redor e disparam simultaneamente. Os mísseis atingem os alvos de forma infalível, sem necessidade de rolagens de acerto místico.\\n\\n• **Dano das Saetas:** cada dardo causa **1d4 + 1 de dano místico (Força)**.\\n• **Divisão de Alvos:** os dardos podem ser direcionados para uma única criatura ou divididos entre vários alvos dentro do alcance, golpeando de forma simultânea."
  },
  {
    name: "Onda de Choque", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "Pessoal (Cone de 4,5m)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "impacto", "área", "empurrar"],
    desc: "Uma onda de força cinética e estalos sônicos irrompe das suas mãos estendidas. Cada criatura contida no cone de 4,5m deve realizar um teste de **Reflexos** contra seu ND Místico.\\n\\n• **Em caso de falha:** sofre **2d8 de dano de impacto** e é empurrada **3 metros para trás** em linha reta, afastando-se de você.\\n• **Em caso de sucesso:** sofre apenas metade do dano e não é empurrada."
  },

  // ═══════════════════════════════════════════════
  {
    name: "Raio de Gelo", type: "arcana", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "gelo", "debuff"],
    desc: "Um feixe gélido de luz azul-esbranquiçada dispara violentamente em direção a uma criatura dentro do alcance. Faça um teste de acerto místico (INT + MIS) contra a Defesa do alvo.\\n\\n• **Em caso de acerto:** o alvo sofre **1d8 de dano de gelo** + o Valor Fixo do seu Conduíte Arcano equipado (ou apenas **1d8** de dano bruto sem conduíte).\\n• **Congelamento:** o frio extremo reduz o deslocamento do alvo em **3m (2q)** até o início do próximo turno dele."
  },
  {
    name: "Lasca Mental", type: "arcana", circle: 1, school: "Encantamento",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "1 rodada", cost: "10 PE",
    tags: ["dano", "debuff"],
    desc: "Você finca uma farpa desorientadora de energia psíquica na mente de uma criatura visível dentro do alcance. O alvo realiza um teste de **Vontade** contra o seu ND Místico.\\n\\n• **Em caso de falha:** sofre **1d6 de dano psíquico** + o Valor Fixo do seu Conduíte Arcano equipado (ou apenas **1d6** bruto sem conduíte).\\n• **Foco Estilhaçado:** a dor faz o alvo **subtrair 1d4** do próximo teste de perícia (Fortitude, Reflexos ou Vontade) que realizar até o fim do próximo turno dele.\\n• **Em caso de sucesso:** sofre apenas o dano normalmente."
  },

  //  MAGIAS ARCANAS — 2º CÍRCULO
  // ═══════════════════════════════════════════════
  {
    name: "Hélice Ácida", type: "arcana", circle: 2, school: "Conjuração",
    cast: "1 Ação Inicial", range: "Linear (6m de comprimento)", duration: "Instantânea", cost: "20 PE",
    tags: ["dano", "ácido", "área"],
    desc: "Um jato espiralado de líquido esverdeado e borbulhante irrompe de suas mãos em uma linha reta de 6 metros de comprimento por 1,5m de largura. Todas as criaturas na linha devem testar **Reflexos** contra seu ND.\\n\\n• **Efeito:** causa **3d8 de dano de ácido** em caso de falha, ou metade em caso de sucesso."
  },
  {
    name: "Bolha de Ar", type: "arcana", circle: 2, school: "Conjuração",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "24 horas", cost: "20 PE",
    tags: ["utilitária"],
    desc: "Você manifesta um globo lípido e oscilante de ar purificado ao redor da cabeça de uma criatura.\\n\\n• **Efeito:** o alvo torna-se completamente imune a efeitos de sufocamento, afogamento ou gases venenosos gasosos pela duração da magia. O suprimento de ar é autossustentável e renovável."
  },
  {
    name: "Disfarce Ilusório", type: "arcana", circle: 2, school: "Ilusão",
    cast: "1 Ação Inicial", range: "Pessoal", duration: "1 hora", cost: "20 PE",
    tags: ["utilitária", "ilusão"],
    desc: "Um manto óptico maleável envolve seu corpo e pertences. Você pode alterar drasticamente sua aparência física.\\n\\n• **Limitações:** você pode parecer até 30 cm mais alto ou mais baixo, mudar suas roupas, feições faciais e tom de voz. Um observador astuto pode realizar um teste de **Investigação** contra seu ND para discernir a ilusão por toque ou falhas ópticas."
  },
  {
    name: "Imagem Silenciosa", type: "arcana", circle: 2, school: "Ilusão",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Até 10 min / Concentração", cost: "20 PE",
    tags: ["utilitária", "ilusão"],
    desc: "Você projeta uma ilusão puramente visual de um objeto, criatura ou fenômeno contido dentro de um cubo de até 4,5 metros de lado.\\n\\n• **Restrição:** a imagem não emite som, cheiro, calor ou qualquer textura tangível. Interagir fisicamente com ela revela que se trata de um holograma místico vazado."
  },
  {
    name: "Aspecto Animal", type: "arcana", circle: 2, school: "Transmutação",
    cast: "1 Ação Inicial", range: "Pessoal", duration: "10 minutos", cost: "20 PE",
    tags: ["buff"],
    desc: "Seu corpo sofre uma mutação mística temporária, assimilando traços ferozes. Escolha uma manifestação ao conjurar:\\n\\n• **Olhos de Gato:** ganha Visão no Escuro (9 metros).\\n• **Garras Selvagens:** suas mãos viram armas que causam **1d6 de dano de impacto/corte** e atacam com Ação Parcial.\\n• **Mandíbula Bestial:** ganha um ataque de mordida decapante que causa **1d8 de dano**."
  },
  {
    name: "Fogo Feérico", type: "arcana", circle: 2, school: "Evocação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "1 minuto / Concentração", cost: "20 PE",
    tags: ["utilitária", "suporte", "luz"],
    desc: "Chamas luminescentes de cor neon delineiam todos os objetos e criaturas em um cubo de 3 metros de lado. Alvos na área devem testar **Reflexos**.\\n\\n• **Efeito:** em caso de falha, ficam envoltos pela luz. Qualquer ataque desferido contra um alvo afetado ganha **Vantagem**. Além disso, essa magia anula totalmente os efeitos de Camuflagem ou invisibilidade mística."
  },
  {
    name: "Invisibilidade", type: "arcana", circle: 2, school: "Ilusão",
    cast: "1 Ação Inicial", range: "Toque", duration: "Até 1 hora / Concentração", cost: "20 PE",
    tags: ["utilitária", "ilusão"],
    desc: "Você toca uma criatura voluntária e faz com que seu corpo e pertences fiquem completamente transparentes à luz física.\\n\\n• **Efeito:** o alvo adquire a condição **Totalmente Indetectável**.\\n• **Quebra:** a magia encerra imediatamente se o alvo desferir um ataque, causar dano ou conjurar qualquer feitiço hostil."
  },
  {
    name: "Força Fantasmagórica", type: "arcana", circle: 2, school: "Ilusão",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Até 1 minuto / Concentração", cost: "20 PE",
    tags: ["dano", "controle", "ilusão"],
    desc: "Você implanta um pesadelo tangível diretamente na mente de um alvo. Ele deve realizar um teste de **Força de Vontade** contra seu ND.\\n\\n• **Em caso de falha:** o alvo enxerga uma ameaça ilusória (fogo, monstros, abismo) que parece real apenas para ele. A mente dele reage fisicamente, sofrendo **1d6 de dano psíquico/mental** no início de cada um dos turnos dele enquanto acreditar na ilusão."
  },
  {
    name: "Prisão Glacial", type: "arcana", circle: 2, school: "Evocação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "1 rodada", cost: "20 PE",
    tags: ["dano", "gelo", "controle"],
    desc: "Surgem blocos pesados de gelo que tentam sepultar e congelar um oponente. Faça um teste de acerto místico contra a Defesa do alvo.\\n\\n• **Em caso de acerto:** causa **4d6 de dano de gelo** e o alvo deve testar **Fortitude** contra o seu ND. Se falhar no teste físico, fica sob a condição **Imobilizado** com deslocamento reduzido a 0 devido à crosta congelada."
  },
  {
    name: "Ver o Invisível", type: "arcana", circle: 2, school: "Adivinhação",
    cast: "1 Ação Inicial", range: "Pessoal", duration: "1 hora", cost: "20 PE",
    tags: ["utilitária", "adivinhação"],
    desc: "Seus olhos sintonizam com espectros de luz ocultos e frequências etéreas.\\n\\n• **Efeito:** você consegue enxergar perfeitamente criaturas e objetos sob a condição *Invisível* ou *Totalmente Indetectável* por meios mágicos em até 18 metros. Você ignora as penalidades normais de ataque contra inimigos ocultos."
  },
  {
    name: "Imobilizar Pessoa", type: "arcana", circle: 2, school: "Encantamento",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Até 1 minuto / Concentração", cost: "20 PE",
    tags: ["controle"],
    desc: "Você emite uma ordem mística paralisante no sistema motor de uma criatura do tipo **Humanoide**. O alvo deve realizar um teste de **Fortitude** contra seu ND.\\n\\n• **Em caso de falha:** fica sob a condição **Paralisado** (incapaz de se mover ou agir).\\n• O alvo repete o teste de Fortitude no final de cada um dos turnos dele para tentar se libertar."
  },
  {
    name: "Teia", type: "arcana", circle: 2, school: "Conjuração",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "1 minuto / Concentração", cost: "20 PE",
    tags: ["controle", "área"],
    desc: "Uma enxurrada de fios espessos e extremamente pegajosos preenche um cubo de 6 metros de lado a partir de um ponto escolhido. A área vira Terreno Difícil.\\n\\n• **Efeito:** qualquer criatura que iniciar o turno na teia ou entrar nela deve passar num teste de **Atletismo** contra seu ND ou ficará sob a condição **Enredada**.\\n• **Vulnerabilidade:** a teia é inflamável; se sofrer dano de fogo, queima em 1 rodada causando 2d4 de dano a quem estiver dentro."
  },
  {
    name: "Passo Nebuloso", type: "arcana", circle: 2, school: "Conjuração",
    cast: "1 Ação Bônus", range: "Pessoal", duration: "Instantânea", cost: "20 PE",
    tags: ["mobilidade"],
    desc: "Você é brevemente envolto por uma fumaça prateada e etérea, dissolvendo sua presença corpórea.\\n\\n• **Efeito:** você se teletransporta instantaneamente por até 9 metros para um quadrado vazio e desimpedidido que consiga enxergar. Este movimento não provoca ataques de oportunidade dos oponentes."
  },
  {
    name: "Distorção de Vórtice", type: "arcana", circle: 2, school: "Conjuração",
    cast: "1 Ação Inicial", range: "27m (18q)", duration: "Instantânea", cost: "20 PE",
    tags: ["mobilidade", "controle"],
    desc: "Você abre um rasgo espacial sob os pés de uma criatura que consiga ver dentro do alcance. Alvos hostis podem realizar um teste de **Reflexos** contra seu ND para evitar o efeito.\\n\\n• **Efeito:** você teletransporta o alvo por até 27 metros para outro espaço vazio que você veja. O destino selecionado deve ser uma superfície sólida capaz de suportar o peso do alvo."
  },
  {
    name: "Sugestão", type: "arcana", circle: 2, school: "Encantamento",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "Até 8 horas", cost: "20 PE",
    tags: ["utilitária", "encanto"],
    desc: "Você tece um comando mental sutil expresso em até duas frases para uma criatura que compreenda sua fala. O alvo realiza um teste de **Força de Vontade** contra seu ND.\\n\\n• **Em caso de falha:** ele executa a atividade sugerida da melhor forma possível, desde que ela não pareça flagrantemente suicida ou autodestrutiva. A magia encerra assim que a tarefa for concluída."
  },
  {
    name: "Lâmina Sanguinária", type: "arcana", circle: 2, school: "Necromancia",
    cast: "1 Ação Inicial", range: "Pessoal (alcance da arma)", duration: "1 rodada", cost: "20 PE",
    tags: ["dano", "combate", "cura", "trevas"],
    desc: "Névoas de energia estagnada corrompem sua lâmina. Faça um ataque corpo a corpo comum. Se acertar, todo o dano do ataque físico é convertido integralmente para **Dano de Trevas**.\\n\\n• **Vampirismo:** você drena a essência vital do inimigo, recuperando Pontos de Vida (PV) iguais à metade do dano total infligido ao alvo (válido apenas contra seres vivos corporais)."
  },
  {
    name: "Arrombar", type: "arcana", circle: 2, school: "Transmutação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Instantânea", cost: "20 PE",
    tags: ["utilitária"],
    desc: "Você aponta para um objeto trancado (porta, baú, algemas, cadeado ou obstáculo fechado). Um estalo alto e ressonante — audível a até 90 metros de distância — ecoa do objeto.\\n\\n• **Abertura:** a tranca mecânica comum é destrancada instantaneamente.\\n• **Contra Trancas Místicas:** se o objeto tiver sido fechado por uma magia de trancamento, esse feitiço é reprimido e anulado por 10 minutos, permitindo que a passagem seja aberta normalmente."
  },
  {
    name: "Levitação", type: "arcana", circle: 2, school: "Transmutação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Até 10 min / Contínuo", cost: "20 PE (+5 PE contínuo)",
    tags: ["utilitária", "mobilidade"],
    desc: "Você sintoniza os fluxos de gravidade ao redor de si mesmo ou de uma criatura/objeto de até 200 kg. O alvo realiza um teste de **Fortitude** contra o seu ND (alvos voluntários podem falhar de propósito).\\n\\n• **Controle Vertical:** o alvo flutua e fica suspenso no ar em até 6m. No seu turno, você pode gastar uma Ação Parcial para movê-lo **verticalmente** por até 6 metros.\\n• **Restrição Horizontal:** a magia não permite movimento horizontal voluntário. O alvo pode apenas se puxar ao longo de paredes ou tetos fixos para se deslocar lateralmente."
  },
  {
    name: "Raio do Enfraquecimento", type: "arcana", circle: 2, school: "Necromancia",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "1 minuto / Concentração", cost: "20 PE",
    tags: ["debuff", "raio"],
    desc: "Um raio de energia negra e decadentente brota dos seus dedos em direção ao peito do oponente. Faça um teste de acerto místico contra a Defesa do alvo.\\n\\n• **Em caso de acerto:** o alvo deve realizar um teste de **Fortitude** contra o seu ND Místico.\\n• **Em caso de falha:** a musculatura e o vigor do alvo atrofiam temporariamente. Pela duração da magia, ele causará apenas **metade do dano** em qualquer ataque baseado no atributo **Poder**.\\n• O alvo repete o teste de Fortitude no final de cada um dos turnos dele para tentar encerrar o efeito."
  },

  // ═══════════════════════════════════════════════
  //  MAGIAS ARCANAS — 3º CÍRCULO
  // ═══════════════════════════════════════════════
  {
    name: "Bola de Fogo", type: "arcana", circle: 3, school: "Evocação",
    cast: "1 Ação Inicial", range: "45m (30q)", duration: "Instantânea", cost: "35 PE",
    tags: ["dano", "fogo", "área"],
    desc: "Uma pequena fagulha hiper-comprimida singra o ar até o ponto escolhido, detonando em uma explosão devastadora que preenche uma esfera de 6 metros de raio. Todas as criaturas na área devem realizar um teste de **Reflexos** contra seu ND.\\n\\n• **Em caso de falha:** sofrem **8d6 de dano de fogo** e ficam sob a condição **Chamuscado**.\\n• **Em caso de sucesso:** sofrem apenas metade do dano e evitam a condição contínua."
  },
  {
    name: "Nova Congelante", type: "arcana", circle: 3, school: "Evocação",
    cast: "1 Ação Inicial", range: "Pessoal (Esfera de 6m de raio)", duration: "Instantânea", cost: "35 PE",
    tags: ["dano", "gelo", "área", "controle"],
    desc: "Um pulso de frio absoluto expande a partir de você em todas as direções. Inimigos em um raio de 6m devem realizar um teste de **Fortitude**.\\n\\n• **Efeito:** causa **8d6 de dano de gelo** e deixa o solo coberto por uma camada escorregadia que age como Terreno Difícil por 1 rodada. Alvos que falharem no teste têm o deslocamento reduzido pela metade."
  },
  {
    name: "Ciclone Devastador", type: "arcana", circle: 3, school: "Evocação",
    cast: "1 Ação Inicial", range: "36m (24q)", duration: "Instantânea", cost: "35 PE",
    tags: ["dano", "ar", "área", "empurrar"],
    desc: "Uma microexplosão atmosférica colossa se forma em um cilindro de 3m de raio por 9m de altura. Criaturas afetadas devem testar **Reflexos**.\\n\\n• **Efeito:** causa **8d6 de dano de impacto/Ar** e arremessa os alvos que falharem por **3 metros em direções aleatórias**, deixando-os sob a condição *Caído*."
  },
  {
    name: "Esfera Corrosiva", type: "arcana", circle: 3, school: "Evocação",
    cast: "1 Ação Inicial", range: "27m (18q)", duration: "Instantânea", cost: "35 PE",
    tags: ["dano", "ácido", "área"],
    desc: "Uma massa concentrada de chuva ácida dissolve as defesas em uma área esférica de 4,5m de raio. Alvos devem testar **Fortitude**.\\n\\n• **Efeito:** causa **8d6 de dano de ácido**. Armaduras e escudos mundanos empunhados por alvos que falharam sofrem uma penalidade permanente de -1 em sua eficácia de proteção até serem reparados."
  },
  {
    name: "Estilhaço Rochoso", type: "arcana", circle: 3, school: "Evocação",
    cast: "1 Ação Inicial", range: "36m (24q)", duration: "Instantânea", cost: "35 PE",
    tags: ["dano", "terra", "área"],
    desc: "Uma saraivada violenta de pedras afiadas e estilhaços pontiagudos de quartzo explode em um cubo de 6 metros de lado. Alvos testam **Reflexos**.\\n\\n• **Efeito:** causa **8d6 de dano de Terra**. O entulho deixado no chão transforma a área em Terreno Difícil de forma permanente até ser limpo manualmente."
  },
  {
    name: "Esfera Elétrica", type: "arcana", circle: 3, school: "Evocação",
    cast: "1 Ação Inicial", range: "36m (24q)", duration: "Instantânea", cost: "35 PE",
    tags: ["dano", "raio", "área"],
    desc: "Um vórtice de relâmpagos encadeados chicoteia em um raio esférico de 4,5 metros. Criaturas na área devem testar **Reflexos**.\\n\\n• **Efeito:** inflige **8d6 de dano de Raio**. Devido à forte sobrecarga elétrica no sistema nervoso, alvos que falharem no teste ficam completamente impedidos de realizarem quaisquer *Reações* até o início do próximo turno deles."
  },
  {
    name: "Velocidade", type: "arcana", circle: 3, school: "Transmutação",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "Até 1 minuto / Contínuo", cost: "35 PE (+10 PE contínuo)",
    tags: ["buff", "mobilidade"],
    desc: "Você distorce o fluxo temporal ao redor de um aliado voluntário. O alvo recebe buffs de velocidade impressionantes.\\n\\n• **Benefícios:** o deslocamento é **dobrado**, o alvo ganha **+2 de bônus fixo na Defesa Passiva**, Vantagem em testes de Reflexos e adquire **1 Ação Adicional** em cada um dos turnos dele (pode ser usada apenas para dar passos, realizar Ação Parcial ou Interagir).\\n• **Exaustão:** quando a magia encerra, o alvo fica sob o estado *Debilitado* por 1 rodada devido ao cansaço extremo."
  },
  {
    name: "Voo", type: "arcana", circle: 3, school: "Transmutação",
    cast: "1 Ação Inicial", range: "Toque", duration: "Até 10 min / Contínuo", cost: "35 PE (+5 PE contínuo)",
    tags: ["utilitária", "mobilidade"],
    desc: "Você imbui uma criatura com a capacidade de repelir a gravidade da terra.\\n\\n• **Efeito:** o alvo adquire **Deslocamento de Voo de 18 metros** por rodada com controle tridimensional impecável. Se a magia expirar ou o fluxo contínuo de energia for cortado enquanto o alvo estiver no ar, ele flutua caindo lentamente por 1 rodada (3m/rodada) antes de despencar."
  },
  {
    name: "Montaria Fantasma", type: "arcana", circle: 3, school: "Ilusão",
    cast: "1 minuto", range: "9m (6q)", duration: "1 hora", cost: "35 PE",
    tags: ["utilitária", "ilusão"],
    desc: "Você materializa uma criatura equina grande, translúcida e de aspecto espectral dotada de cascos silenciosos feitos de fumaça mística.\\n\\n• **Efeito:** a montaria possui deslocamento terrestre de **30 metros** por rodada e ignora penalidades de terreno mundano na estrada. Ela desmaterializa instantaneamente se sofrer qualquer quantidade de dano direto."
  },
  {
    name: "Invocação de Espírito Feérico", type: "arcana", circle: 3, school: "Conjuração",
    cast: "1 Ação Inicial", range: "27m (18q)", duration: "Até 1 hora / Concentração", cost: "35 PE",
    tags: ["invocação"],
    desc: "Você rasga o véu da realidade e convoca um ser oriundo das florestas feéricas eternas. O espírito assume uma forma corpórea maleável à sua escolha e age logo após seu turno no combate.\\n\\n• **Temperamentos (Escolha ao conjurar):**\\n  - *Irado:* focado em combate agressivo, causa dano extra e ataca alvos provocados.\\n  - *Alegre:* emana uma aura que cura aliados adjacentes de forma passiva.\\n  - *Ardiloso:* consegue usar passos e teletransportes curtos, confundindo oponentes e aplicando debuffs visuais."
  },
  {
    name: "Invocação de Espírito Morto-Vivo", type: "arcana", circle: 3, school: "Necromancia",
    cast: "1 Ação Inicial", range: "27m (18q)", duration: "Até 1 hora / Concentração", cost: "35 PE",
    tags: ["invocação", "trevas"],
    desc: "Você comanda as energias do submundo para erguer um constructo de ectoplasma e ossos. O morto-vivo obedece cegamente aos seus comandos verbais.\\n\\n• **Essências (Escolha ao conjurar):**\\n  - *Fantasmagórica:* consegue flutuar e atravessar superfícies sólidas delgadas, atacando o medo mental dos inimigos.\\n  - *Pútrida:* emana um odor nauseante fétido que deixa alvos adjacentes sob a condição *Debilitado*.\\n  - *Esquelética:* focado em combate à distância desferindo saraivadas de lascas ósseas afiadas."
  },
  {
    name: "Fortaleza Intelectual", type: "arcana", circle: 3, school: "Abjuração",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "Até 1 hora / Concentração", cost: "35 PE",
    tags: ["buff", "proteção"],
    desc: "Você ergue barreiras geométricas adamantinas na mente de uma criatura voluntária contra invasões cognitivas.\\n\\n• **Efeito:** o alvo ganha **Resistência** a danos do tipo *Trevas/Psíquico* e recebe um massivo bônus de **+10 em todos os testes de Força de Vontade** contra magias das escolas de Encantamento ou Ilusão."
  },
  {
    name: "Dissipar Magia", type: "arcana", circle: 3, school: "Abjuração",
    cast: "1 Ação Inicial", range: "36m (24q)", duration: "Instantânea", cost: "35 PE",
    tags: ["utilitária"],
    desc: "Você emite uma contra-frequência de energia abjuradora pura que quebra e dissolve a teia de feitiços ativos.\\n\\n• **Efeito:** escolha uma criatura, objeto ou barreira mística dentro do alcance. Qualquer feitiço ou estrutura mágica ativa de 1º, 2º ou 3º círculo que esteja afetando o alvo é cancelada e encerrada instantaneamente."
  },
  {
    name: "Lentidão", type: "arcana", circle: 3, school: "Transmutação",
    cast: "1 Ação Inicial", range: "27m (18q)", duration: "Até 1 minuto / Concentração", cost: "35 PE",
    tags: ["debuff", "controle", "área"],
    desc: "Você altera o continuum do tempo em um cubo de 12 metros de lado. Até 6 criaturas à sua escolha na área devem testar **Força de Vontade**.\\n\\n• **Efeito em caso de falha:** o tempo passa arrastado para elas. O deslocamento é **reduzido pela metade**, elas sofrem uma penalidade de **-2 fixo na Defesa Passiva** e em testes de Reflexos, tornam-se incapazes de usar Reações e só podem realizar uma única ação no turno delas."
  },

  // ═══════════════════════════════════════════════
  //  MAGIAS SAGRADAS / DIVINAS — 1º CÍRCULO
  // ═══════════════════════════════════════════════
  {
    name: "Chama Ascendente", type: "divina", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "cura", "luz"],
    desc: "Um pilar vertical de chamas douradas radiantes desce sobre um oponente. Faça um teste de acerto místico sagrado (CAR + REZ) contra a Defesa do alvo.\\n\\n• **Em caso de acerto:** inflige **1d6 de dano de Luz**. Além disso, o poder da fé reverbera, curando o próprio conjurador em uma quantidade de Pontos de Vida igual à metade do dano real causado ao alvo."
  },
  {
    name: "Bênção Protetora", type: "divina", circle: 1, school: "Abjuração",
    cast: "1 Reação", range: "9m (6q)", duration: "1 rodada", cost: "10 PE",
    tags: ["proteção", "suporte"],
    desc: "Reação ativada quando um aliado dentro do alcance está prestes a sofrer um ataque físico ou místico anunciado pelo Mestre.\\n\\n• **Efeito:** você emite uma prece rápida e projeta um escudo de luz celestial sobre o aliado, concedendo-lhe um bônus de **+2 de Defesa Passiva** contra o ataque desencadeador e futuros golpes até o início do próximo turno dele."
  },
  {
    name: "Orientação Divina", type: "divina", circle: 1, school: "Adivinhação",
    cast: "1 Ação Inicial", range: "Toque", duration: "Até 1 minuto / Contínuo", cost: "10 PE (+2 PE contínuo)",
    tags: ["buff", "suporte"],
    desc: "Você toca um aliado voluntário e sussurra uma prece de iluminação e competência artística.\\n\\n• **Efeito:** enquanto você mantiver a concentração e o custo contínuo, uma vez por rodada o alvo pode rolar **1d4 adicional** e somar o valor em qualquer teste de perícia fora de combate ou salvaguardas mundanas."
  },
  {
    name: "Detectar Alinhamento Espiritual", type: "divina", circle: 1, school: "Adivinhação",
    cast: "1 Ação Inicial", range: "Pessoal (Raio de 9m)", duration: "Até 10 min / Concentração", cost: "10 PE",
    tags: ["utilitária", "adivinhação"],
    desc: "Seus sentidos divinos se expandem. Você detecta instantaneamente a presença e a localização exata de criaturas que pertençam às seguintes naturezas em até 9 metros:\\n\\n• **Tipos Detectados:** *Caóticos, Cósmicos, Elementais, Feéricos, Infernais* ou *Mortos-Vivos*. A magia revela a quantidade e a categoria planar do ser, mas não seu nome ou ficha técnica."
  },
  {
    name: "Detectar Venenos e Doenças", type: "divina", circle: 1, school: "Adivinhação",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "Até 10 min / Concentração", cost: "10 PE",
    tags: ["utilitária"],
    desc: "Seu olfato e visão mística captam impurezas biológicas. Você sente a presença, rastro e intensidade de venenos, toxinas ativas ou infecções bacterianas/doenças místicas em criaturas, poções ou alimentos dentro do alcance, permitindo identificá-los precisamente."
  },
  {
    name: "Palavra de Alívio", type: "divina", circle: 1, school: "Evocação",
    cast: "1 Ação Parcial", range: "18m (12q)", duration: "Instantânea", cost: "10 PE",
    tags: ["cura", "suporte"],
    desc: "Você profere uma palavra de conforto e oração em tom audível. A energia sagrada viaja pelo som até um aliado ferido que consiga te ouvir.\\n\\n• **Restauração:** cura o alvo em **1d4 + o Valor Fixo do seu Conduíte Sagrado** equipado. Por usar apenas uma Ação Parcial, é ideal para suporte rápido em rodadas apertadas."
  },
  {
    name: "Infringir Ferimentos", type: "divina", circle: 1, school: "Necromancia",
    cast: "1 Ação Inicial", range: "Toque", duration: "Instantânea", cost: "10 PE",
    tags: ["dano", "trevas"],
    desc: "Você cobre sua mão com uma névoa estagnada de pura entropia e decadência da alma, desferindo um toque condenatório contra o alvo. Faça um teste de acerto místico contra a Defesa oponente.\\n\\n• **Em caso de acerto:** descarrega a corrupção diretamente na carne do alvo, causando **3d10 de Dano de Trevas**."
  },
  {
    name: "Saeta Guia", type: "divina", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "36m (24q)", duration: "1 rodada", cost: "10 PE",
    tags: ["dano", "luz", "suporte"],
    desc: "Um feixe de luz reluzente e focado é disparado contra um oponente dentro do alcance. Faça um teste de acerto místico sagrado.\\n\\n• **Em caso de acerto:** causa **4d6 de Dano de Luz** e partículas douradas passam a orbitar o oponente. O próximo aliado que desferir um ataque contra este alvo antes do início do seu próximo turno receberá **Vantagem** automática no acerto."
  },
  {
    name: "Preservar o Moribundo", type: "divina", circle: 1, school: "Necromancia",
    cast: "1 Ação Inicial", range: "Toque", duration: "Instantânea", cost: "10 PE",
    tags: ["suporte"],
    desc: "Você coloca as mãos sobre o peito de uma criatura viva que esteja com 0 PV e depondo testes de morte.\\n\\n• **Efeito:** a energia da oração estabiliza os batimentos e a alma do alvo imediatamente. O personagem agonizante fica sob a condição **Estabilizado** (não corre mais risco de morrer por turnos), embora continue inconsciente com 0 PV."
  },
  {
    name: "Infundir Elemento", type: "divina", circle: 1, school: "Transmutação",
    cast: "1 Ação Inicial", range: "Toque", duration: "1 minuto", cost: "10 PE",
    tags: ["buff", "combate"],
    desc: "Você abençoa a arma empunhada por um aliado voluntário. Escolha um elemento básico ao conjurar: **Fogo, Gelo, Ar, Terra** ou **Raio**.\\n\\n• **Efeito:** pela duração do feitiço, todo o dano mundano físico causado por aquela arma é inteiramente convertido para o tipo elemental escolhido, contornando resistências físicas de monstros."
  },
  {
    name: "Luz", type: "divina", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "Toque", duration: "1 hora", cost: "10 PE",
    tags: ["utilitária", "luz"],
    desc: "Você toca um objeto mundano pequeno (moeda, cabo de espada, cajado). O objeto passa a emanar uma aura luminescente lípida.\\n\\n• **Alcance da Luz:** projeta **Luz Plena por 6 metros** ao redor e Luz Penumbra por mais 6 metros adicionais. Pode ser coberto por um pano opaco para suprimir o efeito temporariamente."
  },
  {
    name: "Bênção", type: "divina", circle: 1, school: "Encantamento",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "1 minuto / Concentração", cost: "10 PE",
    tags: ["buff", "suporte"],
    desc: "Você estende suas mãos e clama pela proteção de sua divindade sobre seus aliados. Escolha até três criaturas dentro do alcance.\\n\\n• **Bônus Abençoado:** uma vez por rodada, antes ou depois de rolar os dados, as criaturas afetadas podem rolar **1d4 adicional** e somar o resultado a uma **rolagem de ataque** ou a um **teste de resistência** (Reflexos, Fortitude ou Vontade)."
  },
  {
    name: "Comando", type: "divina", circle: 1, school: "Encantamento",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "1 rodada", cost: "10 PE",
    tags: ["controle", "encanto"],
    desc: "Você profere uma palavra de ordem imbuída de autoridade divina incontestável. Escolha uma criatura que possa ouvir e compreender seu idioma. O alvo deve realizar um teste de **Força de Vontade** contra seu ND Místico Sagrado.\\n\\n• **Falha:** o alvo é compelido a seguir sua ordem rigidamente no próximo turno dele. Exemplos:\\n  - *Prostre-se:* gasta o turno deitando-se Caído no chão.\\n  - *Largue:* solta tudo o que estiver empunhando imediatamente e encerra o turno.\\n  - *Fuja:* gasta o movimento correndo para longe de você da forma mais rápida disponível."
  },
  {
    name: "Cura Divina", type: "divina", circle: 1, school: "Evocação",
    cast: "1 Ação Inicial", range: "Toque", duration: "Instantânea", cost: "10 PE",
    tags: ["cura", "suporte"],
    desc: "Você canaliza energia positiva pura através de suas mãos, costurando carne rasgada e restaurando a vitalidade por toque.\\n\\n• **Restauração:** a criatura viva tocada recupera **1d8 + Valor Fixo do seu Conduíte Sagrado** equipado em Pontos de Vida.\\n• **Restrição:** não surte efeito mecânico em construtos ou mortos-vivos."
  },
  {
    name: "Escudo da Fé", type: "divina", circle: 1, school: "Abjuração",
    cast: "1 Ação Bônus", range: "18m (12q)", duration: "1 minuto / Concentração", cost: "10 PE",
    tags: ["proteção", "buff"],
    desc: "Você projeta um campo cintilante e translúcido de energia protetora ao redor de uma criatura dentro do alcance (pode ser você mesmo).\\n\\n• **Proteção Divina:** o alvo recebe **+2 de bônus na Defesa Passiva** pela duração da magia.\\n• **Restrição:** você só pode manter um Escudo da Fé ativo por vez. Se conjurar novamente, o primeiro dissipa."
  },
  {
    name: "Santuário", type: "divina", circle: 1, school: "Abjuração",
    cast: "1 Ação Inicial", range: "9m (6q)", duration: "1 minuto", cost: "10 PE",
    tags: ["proteção", "suporte"],
    desc: "Você tece uma aura de paz celestial ao redor de uma criatura. Qualquer oponente que tentar desferir um ataque direto ou conjurar uma magia que alveje a criatura protegida deve antes realizar um teste de **Força de Vontade** contra seu ND.\\n\\n• **Falha:** o atacante é incapaz de golpear o alvo. Ele deve selecionar uma nova criatura como alvo ou perderá o ataque/ação.\\n• **Quebra do Santuário:** se a criatura protegida realizar um ataque, conjurar uma magia hostil ou causar dano a qualquer ser, a magia dissipa imediatamente."
  },

  // ═══════════════════════════════════════════════
  //  MAGIAS SAGRADAS / DIVINAS — 2º CÍRCULO
  // ═══════════════════════════════════════════════
  {
    name: "Acalmar Emoções", type: "divina", circle: 2, school: "Encantamento",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Até 1 minuto / Concentração", cost: "20 PE",
    tags: ["controle", "área"],
    desc: "Uma emanação invisível de serenidade expande em uma esfera de 6m de raio a partir de um ponto. Criaturas na área devem testar **Força de Vontade**.\\n\\n• **Suprimir Efeitos:** em caso de falha, o feitiço suprime imediatamente as condições *Enfeitiçado* ou *Amedrontado* ativas nos alvos pelo tempo que durar. Ao terminar, retornam se ainda não tiverem expirado.\\n• **Tornar Indiferente:** remove agressividade contra criaturas de sua escolha. A hostilidade cessa instantaneamente. **Quebra** se o alvo sofrer ataque, for atingido por magia prejudicial ou testemunhar um aliado seu sendo ferido."
  },
  {
    name: "Aprimorar Aptidão", type: "divina", circle: 2, school: "Transmutação",
    cast: "1 Ação Inicial", range: "Toque", duration: "Até 1 hora", cost: "20 PE",
    tags: ["buff"],
    desc: "Você toca em uma criatura voluntária e canaliza uma benção mística que altera o fluxo de energia em seu corpo ou mente. Escolha **uma aptidão**:\\n\\n• **Vigor do Urso** — Vantagem em testes de **Fortitude** + ganha imediatamente **2d6 PV Temporários**.\\n• **Força do Touro** — Vantagem em **Atletismo** + capacidade de carga total **duplicada**.\\n• **Graça do Gato** — Vantagem em **Reflexos** + imune a dano de quedas de até 6m (4q).\\n• **Esplendor da Águia** — Vantagem em testes de **Carisma** (interações sociais, lábia, liderança).\\n• **Astúcia da Raposa** — Vantagem em testes de **Intelecto** (investigação, lógica, conhecimentos).\\n• **Sabedoria da Coruja** — Vantagem em **Percepção** e **Intuição**."
  },
  {
    name: "Restauração Menor", type: "divina", circle: 2, school: "Abjuração",
    cast: "1 Ação Inicial", range: "Toque", duration: "Instantânea", cost: "20 PE",
    tags: ["suporte", "cura-condição"],
    desc: "Você toca um aliado e canaliza uma onda purificadora que quebra amarras biológicas ou místicas negativas.\\n\\n• **Purificação:** encerra instantaneamente **uma** das seguintes condições que estejam afetando o alvo: **Cego, Surdo, Paralisado ou Ofuscado**."
  },
  {
    name: "Oração", type: "divina", circle: 2, school: "Encantamento",
    cast: "1 Ação Inicial", range: "Pessoal (Esfera de 9m de raio)", duration: "Até 1 minuto / Concentração", cost: "20 PE",
    tags: ["buff", "debuff", "área"],
    desc: "Você entoa um cântico sagrado que distorce as probabilidades a favor de sua causa. Uma esfera invisível de 9m de raio se expande a partir de você e se move junto com seus passos.\\n\\n• **Favorecimento Aliado:** todos os aliados contidos na área recebem **+2 de bônus fixo** em todas as rolagens de ataque e testes de perícia.\\n• **Punição Inimiga:** todos os inimigos contidos na área sofrem **-2 de penalidade fixa** em seus ataques e testes de perícia enquanto permanecerem dentro do raio."
  },
  {
    name: "Consagrar", type: "divina", circle: 2, school: "Transmutação",
    cast: "1 minuto", range: "Pessoal (raio de 9m / 6q)", duration: "1 hora", cost: "20 PE",
    tags: ["área", "buff", "proteção"],
    desc: "Você ajoelha, pronuncia uma longa oração e infunde o espaço ao redor com a presença sagrada, transformando o local em território abençoado.\\n\\n• **Mortos-vivos** que iniciarem o turno na área testam **Fortitude** contra seu ND ou sofrem **1d8 de dano de Luz**.\\n• **Aliados** na área recebem **+2 em testes de Força de Vontade ou Fortitude**.\\n• **Marca Visível:** símbolos dourados sutis surgem no solo e paredes, visíveis apenas com Detectar Alinhamento Espiritual ou visão mágica equivalente.\\n• **Limitação:** apenas **uma** zona consagrada ativa por vez; conjurar novamente encerra a anterior."
  },
  {
    name: "Punição Divina", type: "divina", circle: 2, school: "Evocação",
    cast: "1 Ação Inicial", range: "18m (12q)", duration: "Instantânea", cost: "20 PE",
    tags: ["dano", "luz"],
    desc: "Você estende a mão e um clarão de luz sagrada desce em linha reta sobre um inimigo, carregado pela ira concentrada da sua fé.\\n\\n• **Ataque Sagrado:** realize um ataque de Conjuração Mística à distância contra a Defesa do alvo.\\n• **Impacto Radiante:** em caso de acerto, o alvo sofre **3d10 + Valor Fixo do Conduíte Sagrado** de dano de Luz.\\n• **Flagelo dos Impuros:** se o alvo for morto-vivo, infernal ou entidade caótica, o dano sobe para **4d10 + Valor Fixo do Conduíte Sagrado** e ele testa **Fortitude** contra seu ND ou fica **Atordoado** até o fim do próximo turno dele."
  },
  {
    name: "Aspersio", type: "divina", circle: 2, school: "Transmutação",
    cast: "1 Ação Parcial", range: "Toque", duration: "Até 10 minutos (10 rodadas)", cost: "20 PE",
    tags: ["buff", "luz", "combate"],
    desc: "A arma de um aliado passa a brilhar com uma luz sagrada tênue, tornando cada golpe uma sentença divina.\\n\\n• **Atributo Sagrado:** a arma causa dano de Luz em vez do dano original, ignorando resistências naturais de mortos-vivos e infernais.\\n• **Bênção do Golpe:** uma vez por rodada, ao acertar com a arma consagrada, o portador rola **1d6 de dano de Luz adicional** sem custo.\\n• **Limitação:** apenas uma arma consagrada por vez."
  }
];

// Helper dictionaries for system render
window.SPELL_SCHOOLS = ["Abjuração", "Adivinhação", "Conjuração", "Encantamento", "Evocação", "Ilusão", "Necromancia", "Transmutação"];
window.SPELL_TAGS = ["dano", "cura", "proteção", "buff", "debuff", "controle", "utilitária", "mobilidade", "área", "invocação", "luz", "fogo", "gelo", "ácido", "ar", "terra", "raio", "trevas", "combate", "cura-condição", "encanto", "força", "impacto", "suporte"];

// School colors for UI
window.SCHOOL_COLORS = {
  "Abjuração":     "#60a8d8",
  "Conjuração":    "#a070d8",
  "Adivinhação":   "#d8c860",
  "Encantamento":  "#e070b0",
  "Evocação":      "#e85040",
  "Ilusão":        "#9078a8",
  "Necromancia":   "#60a060",
  "Transmutação":  "#d89060"
};
