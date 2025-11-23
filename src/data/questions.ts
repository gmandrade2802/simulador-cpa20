export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // índice da resposta correta (0-3)
  category?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Os Códigos da ANBIMA de Regulação e Melhores Práticas se aplicam, exclusivamente, às:",
    options: [
      "administradoras de fundos de investimento.",
      "instituições financeiras reguladas pelo Banco Central.",
      "instituições associadas e às que aderirem voluntariamente.",
      "instituições reguladas pela Comissão de Valores Mobiliários (CVM).",
    ],
    correctAnswer: 2,
    category: "Códigos de Regulação e Melhores Práticas",
  },
  {
    id: 2,
    question: "Um investidor adquiriu em uma agência bancária, na qual mantém sua conta corrente, um plano de previdência complementar do tipo Plano Gerador de Benefício Livre (PGBL). Além da própria seguradora contratada, ele poderá também obter esclarecimentos sobre as regras de composição da carteira desse plano com:",
    options: [
      "o Banco Central do Brasil (BACEN).",
      "a Superintendência Nacional de Previdência Complementar (PREVIC).",
      "a Superintendência de Seguros Privados (SUSEP).",
      "a Comissão de Valores Mobiliários (CVM).",
    ],
    correctAnswer: 3,
    category: "Previdência Complementar",
  },
  {
    id: 3,
    question: "Os Bancos Múltiplos podem \nI. atuar como agentes underwriters. \nII. captar recursos por meio de debêntures. \nIII. atuar no financiamento de capital de giro e fixo. \nEstá correto o que se afirma em",
    options: [
      "I e III, apenas.",
      "I, apenas.",
      "II, apenas.",
      "I, II, III.",
    ],
    correctAnswer: 0,
    category: "Sistema Financeiro Nacional",
  },
  {
    id: 4,
    question: "Dentre outras atribuições, cabe a um Banco de Investimento",
    options: [
      "assessorar a fusão, cisão e incorporação de empresas; conceder financiamentos de curto prazo e cheque especial.",
      "conceder financiamento de longo prazo; emitir, subscrever e distribuir títulos e valores mobiliários e atuar no segmento de dólar turismo.",
      "conceder financiamentos de médio e longo prazos, crédito direto ao consumidor e distribuir valores mobiliários.",
      "assessorar a fusão e a aquisição de empresas; coordenar a emissão de valores mobiliários e conceder financiamentos de médio e longo prazos.",
    ],
    correctAnswer: 3,
    category: "Sistema Financeiro Nacional",
  },
  {
    id: 5,
    question: "Um banco múltiplo com carteiras comercial e de arrendamento mercantil é autorizado pelo Banco Central a",
    options: [
      "receber depósitos à prazo.",
      "executar ordens de seus clientes no sistema de negociação das bolsas.",
      "administrar fundos de investimento.",
      "intermediar operações de câmbio.",
    ],
    correctAnswer: 0,
    category: "Sistema Financeiro Nacional",
  },
  {
    id: 6,
    question: "Ao não observar os princípios e regras de compliance legal e ética, uma instituição financeira estará incorrendo risco",
    options: [
      "legal e de imagem.",
      "de imagem, apenas.",
      "de Barreira da Informação, uma vez que poderão surgir situações de conflito de interesses.",
      "legal, apenas.",
    ],
    correctAnswer: 0,
    category: "Compliance",
  },
  {
    id: 7,
    question: "Faz parte da política de segurança de informação de uma instituição financeira,",
    options: [
      "a realização de testes periódicos de segurança para os sistemas de informações, em especial para os mantidos em meio eletrônico.",
      "o bloqueio ao acesso pelos diretores não estatutários aos sistemas de informações.",
      "a perpetuação da configuração dos desenhos dos sistemas de informações a fim de permitir comparações entre as rentabilidades obtidas nos anos anteriores.",
      "a realização de testes periódicos nos arquivos físicos, assegurando a autenticidade das informações mantidas e priorizando-as sobre aquelas em meio eletrônico.",
    ],
    correctAnswer: 0,
    category: "Controles Internos e Risco",
  },
  {
    id: 8,
    question: "É uma atribuição da área de controles internos das instituições financeiras",
    options: [
      "o desenvolvimento de cenários macroeconômicos que auxiliem o posicionamento da instituição no mercado.",
      "a exclusão de responsabilidades por parte dos profissionais que não sejam diretores estatutários dentro da instituição.",
      "a avaliação dos riscos de crédito de eventuais tomadores de recursos da instituição.",
      "a segregação das atividades de forma que seja evitado o conflito de interesses.",
    ],
    correctAnswer: 3,
    category: "Controles Internos e Risco",
  },
  {
    id: 9,
    question: "Uma instituição financeira possui os seguintes mecanismos de acompanhamento e controle para fins de prevenção à lavagem de dinheiro e ao financiamento do terrorismo: \nI. a definição de processos, testes e trilhas de auditoria. \nII. a definição de métricas e indicadores adequados. \nIII. a identificação e correção de eventuais deficiências. \nIV. o monitoramento do uso das redes sociais por seus clientes. \nSegundo o Banco Central do Brasil, são obrigatórios APENAS os mecanismos de acompanhamento e controle",
    options: [
      "II e III",
      "I e IV",
      "I, II e III",
      "II, III e IV",
    ],
    correctAnswer: 2,
    category: "Prevenção à Lavagem de Dinheiro",
  },
  {
    id: 10,
    question: "É um exemplo da prática de insider trading quando um operador",
    options: [
      "utiliza informações divulgadas em fatos relevantes em benefício próprio.",
      "compra ações para sua carteira pessoal, ao identificar no sistema da bolsa significativas ordens de compra dessas ações.",
      "divulga informações sobre seus clientes para terceiros, buscando vantagens e ganhos pessoais.",
      "utiliza informações privilegiadas em benefício próprio ou para beneficiar as carteiras de clientes que administra.",
    ],
    correctAnswer: 3,
    category: "Ética e Regulamentação",
  },
  {
    id: 11,
    question: "Um investidor institucional solicitou a uma corretora de valores que adquirisse uma quantidade significativa de ações de uma determinada empresa. Um corretor de valores, dessa mesma corretora, ao obter a informação sobre a negociação com o cliente adquiriu ações dessa empresa, para si próprio, antecipando-se à execução da ordem do cliente pela corretora. Nesse caso, a atitude indevida do corretor denomina-se",
    options: [
      "insider information.",
      "insider trading.",
      "front trading.",
      "front running.",
    ],
    correctAnswer: 3,
    category: "Ética e Regulamentação",
  },
  {
    id: 12,
    question: "De acordo com o Código ANBIMA de Regulação e Melhores Práticas para Distribuição de Produtos de Investimento, no processo de coleta de informações para uma adequada avaliação do perfil de um investidor deve se considerar \nI. a experiência do investidor em matéria de investimentos. \nII. os riscos associados ao produto ofertado. \nIII. o cenário econômico. \nEstá correto o que se afirma em",
    options: [
      "I, apenas.",
      "I, II e III.",
      "II, apenas.",
      "I e III, apenas.",
    ],
    correctAnswer: 0,
    category: "Análise do Perfil do Investidor (API)",
  },
  {
    id: 13,
    question: "Segundo o Código ANBIMA de Regulação e Melhores Práticas para Distribuição de Produtos de Investimento, as instituições participantes estão dispensadas de observar os artigos dispostos no Código, na distribuição",
    options: [
      "do Fundo de Investimento de Renda Fixa Simples.",
      "dos Títulos Públicos Federais.",
      "do Certificado de Depósito Bancário.",
      "da Caderneta de Poupança.",
    ],
    correctAnswer: 3,
    category: "Códigos de Regulação e Melhores Práticas",
  },
  {
    id: 14,
    question: "De acordo com o Código ANBIMA de Regulação e Melhores Práticas para Distribuição de Produtos de Investimento, ao definir a situação financeira do Investidor, as instituições devem considerar: \nI. O valor das receitas regulares declaradas; \nII. O valor e os ativos que compõem seu patrimônio; \nIII. O período em que será mantido o investimento. \nEstá correto o que se afirma em",
    options: [
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
      "I e II, apenas.",
    ],
    correctAnswer: 3,
    category: "Análise do Perfil do Investidor (API)",
  },
  {
    id: 15,
    question: "Um investidor pretende fazer um investimento em um Fundo de Renda Fixa que seja composto por títulos com baixo risco de crédito e de mercado. Ele não possui outros investimentos no mercado de capitais; não preencheu o questionário de Análise do Perfil do Investidor (API) nem a declaração de ausência desse perfil. Segundo a CVM, ele poderá aplicar, exclusivamente, no Fundo",
    options: [
      "Renda Fixa Referenciado DI.",
      "Renda Fixa Simples.",
      "Renda Fixa Pós-fixado.",
      "Renda Fixa Soberano.",
    ],
    correctAnswer: 1,
    category: "Fundos de Investimento",
  },
  {
    id: 16,
    question: "Segundo a Teoria de Finanças Comportamentais, a estratégia adotada pelos investidores ao tomarem o primeiro preço de compra de uma ação como referência e, a partir desse preço estimar o desempenho futuro dessa ação, é uma consequência da aplicação da heurística denominada",
    options: [
      "ancoragem.",
      "representatividade.",
      "aversão ao risco.",
      "disponibilidade.",
    ],
    correctAnswer: 0,
    category: "Finanças Comportamentais",
  },
  {
    id: 17,
    question: "O Fórum Econômico Mundial publica, anualmente, um relatório no qual apresenta os principais riscos globais identificados por meio de uma pesquisa com diversos stakeholders que representam a academia, o setor privado e o setor governamental, a sociedade civil e a liderança global. Neste relatório, os riscos globais são classificados em: riscos ambientais, geopolíticos, sociais, econômicos e tecnológicos. \nSão classificados como riscos ambientais os relacionados a",
    options: [
      "danos causados pela poluição para a saúde humana.",
      "eventos climáticos extremos.",
      "choques severos nas commodities.",
      "falhas na infraestrutura pública.",
    ],
    correctAnswer: 1,
    category: "Economia e Finanças Comportamentais",
  },
  {
    id: 18,
    question: "Um país que tem sua balança comercial superavitária significa que",
    options: [
      "o total de bens exportados são superiores ao total de bens importados.",
      "tenha um maior volume de remessas de lucros e juros de empréstimos enviados para o exterior.",
      "o total de bens exportados são inferiores ao total de bens importados.",
      "tenha um maior volume de remessas de lucros e juros de empréstimos vindos do exterior.",
    ],
    correctAnswer: 0,
    category: "Macroeconomia",
  },
  {
    id: 19,
    question: "O Produto Interno Bruto (PIB) de uma economia aberta inclui o valor dos bens e serviços finais destinados \nI. aos investimentos. \nII. às exportações líquidas. \nIII. ao consumo das famílias. \nIV. aos gastos do governo. \nEstá correto o que se afirma em",
    options: [
      "I, II e III, apenas.",
      "III e IV, apenas.",
      "II, III e IV, apenas.",
      "I, II, III e IV.",
    ],
    correctAnswer: 3,
    category: "Macroeconomia",
  },
  {
    id: 20,
    question: "Um investidor efetuará uma aplicação financeira a uma taxa de juros de 7,50%, para o período de 12 meses. A inflação projetada para esse mesmo período é de 4,50%. Nesse caso, a taxa de juros real projetada é",
    options: [
      "exatamente igual a 7,50%.",
      "exatamente igual a 3,00%.",
      "um pouco inferior a 3,00%.",
      "um pouco superior a 3,00%.",
    ],
    correctAnswer: 2,
    category: "Matemática Financeira",
  },
  {
    id: 21,
    question: "O valor presente de um título zero cupom com vencimento em 01 ano",
    options: [
      "diminui com a redução da taxa de juros.",
      "diminui com o aumento da taxa de juros.",
      "independe da taxa de juros.",
      "aumenta com o aumento da taxa de juros.",
    ],
    correctAnswer: 1,
    category: "Renda Fixa",
  },
  {
    id: 22,
    question: "No processo de decisão entre comprar ou vender ações de uma empresa, a análise fundamentalista utiliza",
    options: [
      "o peso relativo das ações da empresa na carteira teórica do Índice Bovespa.",
      "os gráficos de volume e preços das ações da empresa negociados historicamente.",
      "os preços de abertura e fechamento das ações da empresa na bolsa de valores.",
      "as demonstrações financeiras e as projeções de resultado da empresa.",
    ],
    correctAnswer: 3,
    category: "Renda Variável",
  },
  {
    id: 23,
    question: "Os BDRs - Brazilian Depositary Receipts são certificados de depósito de valores mobiliários",
    options: [
      "de uma companhia aberta com sede no exterior, negociados na B3.",
      "de uma companhia aberta com sede no Brasil, negociados nos Estados Unidos.",
      "transacionados no Brasil, em dólares e no mercado de balcão.",
      "com direito de conversão em ADRs - American Depositary Receipts.",
    ],
    correctAnswer: 0,
    category: "Renda Variável",
  },
  {
    id: 24,
    question: "Os Certificados de Recebíveis Imobiliários (CRI) são títulos de renda fixa do segmento imobiliário",
    options: [
      "que têm os rendimentos, para o investidor pessoa física, tributados na fonte quando ocorre resgate ou vencimento.",
      "emitidos por companhia securitizadora, que são instituições não financeiras.",
      "que podem ter cláusula de correção monetária com base na variação do dólar norte-americano.",
      "que possuem garantia do Fundo Garantidor de Crédito (FGC).",
    ],
    correctAnswer: 1,
    category: "Renda Fixa",
  },
  {
    id: 25,
    question: "Na escritura de emissão de uma debênture incentivada deve constar que",
    options: [
      "será assegurada a participação dos debenturistas nos lucros futuros da companhia emissora.",
      "em determinados períodos, seus rendimentos podem mudar de prefixados para pós-fixados.",
      "a companhia emissora utilizará os recursos captados para realizar projetos de infraestrutura.",
      "os debenturistas têm direito de voto na assembleia geral da companhia emissora.",
    ],
    correctAnswer: 2,
    category: "Renda Fixa",
  },
  {
    id: 26,
    question: "Os Certificados de Depósito Bancário e as Letras de Crédito são títulos que",
    options: [
      "são emitidos por bancos comerciais ou cooperativas de crédito.",
      "servem de lastro para as operações do mercado interfinanceiro.",
      "são emitidos por bancos comerciais ou bancos de investimento.",
      "servem de lastro para operações compromissadas.",
    ],
    correctAnswer: 0,
    category: "Renda Fixa",
  },
  {
    id: 27,
    question: "Nas debêntures simples remuneradas pela variação do IPCA + 5,00% a.a., com vencimento em 5 anos e pagamento semestral de rendimentos,",
    options: [
      "os rendimentos semestrais estarão sujeitos à incidência do imposto de renda a uma alíquota única, independentemente do momento em que ocorrer seu pagamento.",
      "o responsável pela retenção e recolhimento do imposto de renda será a instituição que efetuar o pagamento dos rendimentos.",
      "o responsável pela retenção e recolhimento do imposto de renda será o debenturista.",
      "não haverá incidência de imposto de renda no pagamento dos rendimentos aos investidores pessoas físicas.",
    ],
    correctAnswer: 1,
    category: "Tributação",
  },
  {
    id: 28,
    question: "Um cliente foi até a agência bancária para esclarecer dúvidas sobre uma nova aplicação em depósitos de Poupança. Seu gerente afirmou lhe que \nI. a remuneração é composta pela Taxa Referencial (TR) + remuneração adicional de 0,5% a.m., enquanto a meta da taxa Selic for superior a 8,50% a.a. \nII. a remuneração é composta pela Taxa Referencial (TR) + remuneração adicional de 70% da meta da taxa Selic ao ano, mensalizada, vigente na data de início do período de rendimento, enquanto a meta da taxa Selic for igual ou inferior a 8,50% a.a. \nIII. a poupança não possui garantia do Fundo Garantidor de Crédito (FGC). \nEstá correto o que se afirma em",
    options: [
      "I e II, apenas.",
      "I, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    correctAnswer: 0,
    category: "Renda Fixa",
  },
  {
    id: 29,
    question: "Uma Letra Financeira do Tesouro - LFT, negociada com ágio, terá obrigatoriamente um retorno",
    options: [
      "menor do que a Taxa do DI.",
      "maior do que a Taxa do DI.",
      "menor do que a Taxa Selic.",
      "maior do que a Taxa Selic.",
    ],
    correctAnswer: 2,
    category: "Títulos Públicos",
  },
  {
    id: 30,
    question: "Para um cliente que pretende adquirir, no Tesouro Direto, um título que tenha rendimento indexado a um índice de preços mais uma taxa de juros e não queira correr risco de reinvestimento, o gerente deverá indicar",
    options: [
      "Tesouro IPCA + (NTN-B principal).",
      "Tesouro Selic (LFT).",
      "Tesouro Prefixado (LTN).",
      "Tesouro IPCA + com juros semestrais (NTN-B).",
    ],
    correctAnswer: 0,
    category: "Títulos Públicos",
  },
  {
    id: 31,
    question: "A remuneração dos depósitos de poupança é calculada sobre",
    options: [
      "o saldo do primeiro dia útil do mês.",
      "o saldo médio de cada período de rendimento.",
      "o maior saldo de cada período de rendimento.",
      "o menor saldo de cada período de rendimento.",
    ],
    correctAnswer: 3,
    category: "Renda Fixa",
  },
  {
    id: 32,
    question: "Para o titular de opções, a perda máxima é",
    options: [
      "o valor do prêmio pago na aquisição.",
      "o custo da fiança bancária.",
      "o custo de oportunidade dos recursos depositados em garantia.",
      "a taxa de custódia dos títulos depositados em garantia.",
    ],
    correctAnswer: 0,
    category: "Derivativos",
  },
  {
    id: 33,
    question: "Um investidor ao efetuar uma operação de swap trocando a remuneração dos ativos de sua carteira de taxa prefixada para taxa pós fixada",
    options: [
      "elimina o risco de inflação.",
      "realiza uma operação de alavancagem.",
      "acredita em um cenário de aumento na taxa de juros.",
      "acredita em um cenário de queda na taxa de juros.",
    ],
    correctAnswer: 2,
    category: "Derivativos",
  },
  {
    id: 34,
    question: "A instrução CVM n° 400/2003 permite a coleta de intenções de investimento em oferta pública de distribuição de valores mobiliários",
    options: [
      "por meio da diretoria de relações com investidores da emissora.",
      "a qualquer tempo pela instituição líder da oferta.",
      "antes da divulgação do prospecto preliminar.",
      "a partir do protocolo do pedido de registro de distribuição na CVM.",
    ],
    correctAnswer: 3,
    category: "Oferta Pública",
  },
  {
    id: 35,
    question: "Calcula-se o valor da cota de um fundo de investimento",
    options: [
      "dividindo-se o valor do PL pelo número de cotistas.",
      "dividindo-se o valor do PL pelo número de cotas vendidas e multiplicando-se pelo número de cotistas.",
      "multiplicando-se o valor do PL pela rentabilidade do DI do dia e dividindo-se pelo número de cotas existentes.",
      "dividindo-se o valor do PL pelo número de cotas existentes.",
    ],
    correctAnswer: 3,
    category: "Fundos de Investimento",
  },
  {
    id: 36,
    question: "Um possível investidor informa que era cotista de um fundo referenciado ao IGP-M e que em um mês de significativas altas do índice e da taxa de juros, sua aplicação incorreu em rentabilidade negativa. Um profissional CPA-20 deve informá-lo de que esse tipo de evento",
    options: [
      "não pode ocorrer, pois os fundos atrelados a índices de preço têm de refletir a totalidade da variação desses índices.",
      "pode ocorrer, pois nem sempre os fundos conseguem refletir o movimento do mercado com a mesma rapidez em que os índices são divulgados.",
      "pode ocorrer, pois os títulos atrelados a índices de preço também sofrem o impacto das taxas de juros.",
      "não pode ocorrer, pois os fundos são marcados a mercado.",
    ],
    correctAnswer: 2,
    category: "Fundos de Investimento",
  },
  {
    id: 37,
    question: "Nas aplicações em fundos de investimentos realizadas por conta e ordem de clientes,",
    options: [
      "o administrador do fundo deve escriturar, no registro de cotistas, as cotas subscritas em nome dos respectivos cotistas, com base nas informações fornecidas pelo distribuidor.",
      "caso o contrato firmado entre o administrador e o distribuidor seja rescindido, as cotas desses clientes devem ser resgatadas, seguindo as regras do regulamento do fundo.",
      "o distribuidor é o responsável por efetuar a retenção e o recolhimento dos tributos incidentes nos resgates das cotas dos seus clientes que subscreverem cotas desse fundo.",
      "o administrador do fundo é o responsável por realizar os procedimentos de controle e manutenção de informações desses cotistas, visando a proteção e combate à lavagem de dinheiro ou ocultação de bens, direitos e valores.",
    ],
    correctAnswer: 0,
    category: "Fundos de Investimento",
  },
  {
    id: 38,
    question: "O percentual mínimo de ativos em uma carteira, relacionados diretamente com o fator de risco dos Fundos de Renda Fixa e Cambial é de:",
    options: [
      "80%",
      "90%",
      "67%",
      "50%",
    ],
    correctAnswer: 1,
    category: "Fundos de Investimento",
  },
  {
    id: 39,
    question: "O objetivo de um Fundo de Investimentos de Renda Fixa Simples destinado ao segmento de varejo é o de ter uma carteira de títulos sem risco de crédito e baixo risco de mercado. Esse objetivo é atingido com uma carteira composta por",
    options: [
      "Títulos do governo federal e de alta duração",
      "Títulos de instituições financeiras e de alta duração",
      "Títulos de instituições financeiras e de baixa duração",
      "Títulos do governo federal e de baixa duração",
    ],
    correctAnswer: 3,
    category: "Fundos de Investimento",
  },
  {
    id: 40,
    question: "Em relação às diferentes modalidades dos fundos de investimento, os fundos",
    options: [
      "fechados são aqueles em que os cotistas podem resgatar suas cotas a qualquer momento",
      "de ações podem comprar cotas de outros fundos",
      "exclusivos são voltados para um segmento de mercado, como empresas do segmento de energia elétrica.",
      "de renda fixa não podem adquirir ativos no exterior.",
    ],
    correctAnswer: 1,
    category: "Fundos de Investimento",
  },
  {
    id: 41,
    question: "Em fevereiro de 2017, um investidor fez uma aplicação em um fundo de investimento considerado de curto prazo conforme regulamentação da Receita Federal. Após 380 dias da aplicação efetuará o resgate total de suas cotas. Nesse caso, a alíquota do imposto de renda retido na fonte aplicável sobre o rendimento será de",
    options: [
      "22,5%",
      "20%",
      "15%",
      "17,5%",
    ],
    correctAnswer: 1,
    category: "Tributação de Fundos",
  },
  {
    id: 42,
    question: "Um investidor adquiriu cotas de um fundo de renda variável no valor de R$ 200.000,00 e, após 60 dias, as vendeu integralmente por R$ 220.000,00. Nesse caso, o agente responsável pelo recolhimento dos tributos é o",
    options: [
      "gestor.",
      "administrador.",
      "custodiante.",
      "investidor.",
    ],
    correctAnswer: 1,
    category: "Tributação de Fundos",
  },
  {
    id: 43,
    question: "Em relação à tributação dos fundos de investimento imobiliário pelo imposto de renda, é correto afirmar que",
    options: [
      "o imposto apurado deve ser recolhido pelo próprio titular das cotas, em 31 de junho e 31 de dezembro de cada ano.",
      "os lucros auferidos pelo fundo e que sejam distribuídos aos cotistas devem ser tributados na fonte à alíquota de 15%.",
      "trata-se de uma modalidade de aplicação isenta de imposto, para pessoa jurídica, sobre os ganhos de capital e/ou rendimentos na alienação ou resgate das cotas.",
      "há dois tipos de fatos geradores: a distribuição dos lucros auferidos pelo fundo aos cotistas e a obtenção de ganhos de capital e rendimentos na alienação ou resgate de cotas.",
    ],
    correctAnswer: 3,
    category: "Fundos Imobiliários",
  },
  {
    id: 44,
    question: "Um determinado fundo de investimento imobiliário possui cotas negociadas em bolsa de valores e 120 cotistas pessoas física, sendo que nenhum detém mais de 10% das cotas desse fundo. Nesse caso, os cotistas terão a",
    options: [
      "Incidência do imposto de renda sobre os rendimentos distribuídos, apenas.",
      "Incidência do imposto de renda sobre os rendimentos distribuídos e ganho de capital.",
      "Isenção do imposto de renda sobre os rendimentos distribuídos, apenas.",
      "Isenção do imposto de renda sobre os rendimentos distribuídos e ganho de capital.",
    ],
    correctAnswer: 2,
    category: "Fundos Imobiliários",
  },
  {
    id: 45,
    question: "Segundo a Receita Federal, para um investidor pessoa física, domiciliado e residente no Brasil, os prejuízos apurados no resgate de cotas em um Fundo de Investimento de Ações poderão ser compensados, com rendimentos auferidos em resgates posteriores, de",
    options: [
      "outros tipos de investimento classificados como de renda variável pela Receita Federal.",
      "todos os investimentos que possuam a mesma alíquota do Imposto de Renda.",
      "todos os fundos de investimento que o investidor possua com esse mesmo administrador.",
      "outros fundos de investimento que possuam a mesma classificação pela Receita Federal.",
    ],
    correctAnswer: 3,
    category: "Tributação de Fundos",
  },
  {
    id: 46,
    question: "Um investidor ao adquirir um Fundo de Ações, que investe em empresas Small Caps, deverá ser informado de que os principais fatores de risco dessa carteira são os de",
    options: [
      "mercado e operacional.",
      "crédito e mercado.",
      "mercado e liquidez.",
      "liquidez e crédito.",
    ],
    correctAnswer: 2,
    category: "Risco e Volatilidade",
  },
  {
    id: 47,
    question: "Ao explicar para seu cliente os três níveis da Classificação de Fundos ANBIMA, um gerente fez as seguintes afirmações: \n(I) O Nível 1 faz referência às classes definidas pela Comissão de Valores Mobiliários (CVM). \n(II) O Nível 2 identifica os tipos de gestão e riscos. \n(III) O Nível 3 identifica as estratégias de investimento. \nEstá correto o que se afirma em",
    options: [
      "I e II, apenas.",
      "I, apenas.",
      "I, II e III.",
      "II e III, apenas.",
    ],
    correctAnswer: 2,
    category: "Fundos de Investimento",
  },
  {
    id: 48,
    question: "Um indivíduo possui um plano de previdência complementar do tipo Plano Gerador de Benefício Livre (PGBL), com regime de tributação exclusivo na fonte (tabela regressiva) e decidiu fazer a portabilidade para um plano do tipo Vida Gerador de Benefício Livre (VGBL), com regime de tributação compensável (tabela regressiva). Nesse caso, esta portabilidade",
    options: [
      "será possível, pois se trata da transferência de recursos entre planos com mesmo regime de tributação.",
      "não será possível, pois não podem ser portados recursos de um PGBL para um VGBL.",
      "será possível, porém, ocorrerá tributação do Imposto de Renda (IR), de acordo com a tabela progressiva do IR.",
      "será possível, porém, ocorrerá tributação do Imposto de Renda (IR), de acordo com a tabela regressiva do IR.",
    ],
    correctAnswer: 1,
    category: "Previdência Complementar",
  },
  {
    id: 49,
    question: "Sobre o regime tributável ou compensável dos planos de previdência complementar, é INCORRETO que",
    options: [
      "a rentabilidade é renda tributável e, portanto, deve ser somada ao montante anual para efeito de compensação de tributação na Declaração de Ajuste Anual para a Receita Federal.",
      "é conhecido, também, como progressivo e se baseia apenas na renda tributável recebida anualmente pelo participante e, na sua compensação, pode gerar restituição do Imposto de Renda.",
      "a tributação, nas fases de diferimento ou acumulação e de recebimento ou concessão de benefício, implica uma antecipação do Imposto de Renda de 15,00% na fonte.",
      "a forma de aplicação, na fase de diferimento ou acumulação, implica uma antecipação do Imposto de Renda de 15,00% na fonte, antes da apuração final, que é feita na Declaração de Ajuste Anual para a Receita Federal no ano seguinte.",
    ],
    correctAnswer: 2,
    category: "Previdência Complementar",
  },
  {
    id: 50,
    question: "Nos planos de previdência complementar modalidade Plano Gerador de Benefício Livre (PGBL) e Vida Gerador de Benefício Livre (VGBL), é INCORRETO que",
    options: [
      "o PGBL, por ser um instrumento de planejamento tributário, não possui a característica de transmissão sucessória direta.",
      "a diferença básica entre ambos, por ocasião do resgate, é a base de cálculo para tributação.",
      "ambos são produtos de acumulação, no entanto, o primeiro tem objetivo de diferimento fiscal e, o segundo, de formação de reserva de longo prazo.",
      "o VGBL, para a formação de uma reserva de longo prazo, possui características exclusivas de isenção de tributação intermediária.",
    ],
    correctAnswer: 0,
    category: "Previdência Complementar",
  },
  {
    id: 51,
    question: "Um investidor residente e domiciliado no Brasil pretende iniciar seu planejamento de aposentadoria. Para indicar a modalidade adequada dos planos de previdência complementar dos Plano Gerador de Benefício Livre (PGBL) ou Vida Gerador de Benefício Livre (VGBL), um especialista de investimento deve questionar-lhe o",
    options: [
      "modelo atual da Declaração do Imposto de Renda (IR) e o vinculo com o Instituto Nacional do Seguro Social (INSS).",
      "valor da renda e o modelo atual da Declaração do Imposto de Renda da Pessoa Física (IRPF).",
      "tipo de renda e o modelo atual da Declaração do Imposto de Renda da Pessoa Física (IRPF).",
      "tipo de renda e as contribuições ao Regime Geral de Previdência Social (RGPS)",
    ],
    correctAnswer: 1,
    category: "Previdência Complementar",
  },
  {
    id: 52,
    question: "Em um plano de previdência complementar aberto do tipo Vida Gerador de Benefício Livre (VGBL) o investidor, durante a fase de diferimento (acumulação), assumirá o risco de crédito",
    options: [
      "do administrador da carteira do fundo de investimento (FIE).",
      "das ações que fazem parte da carteira do fundo de investimento (FIE).",
      "da seguradora proprietária do plano.",
      "do custodiante do fundo de investimento (FIE).",
    ],
    correctAnswer: 2,
    category: "Previdência Complementar",
  },
  {
    id: 53,
    question: "A recomendação para a composição de uma carteira de renda variável com ativos de elevada volatilidade histórica proporciona ao investidor a",
    options: [
      "expectativa de menores riscos",
      "projeção de rentabilidade estável",
      "referência de estimativa para uma volatilidade futura",
      "mensuração segura de variação efetiva do preço dos ativos no futuro",
    ],
    correctAnswer: 2,
    category: "Risco e Volatilidade",
  },
  {
    id: 54,
    question: "Dos ativos abaixo, pode-se considerar como ativo livre de risco:",
    options: [
      "LFT.",
      "FIDCs.",
      "CDB indexado à taxa Selic.",
      "Ações.",
    ],
    correctAnswer: 0,
    category: "Risco e Volatilidade",
  },
  {
    id: 55,
    question: "Um investidor informa-se, por meio da imprensa, que o índice de Sharpe de seu fundo de investimento é o menor da categoria à qual pertence, embora apresente rentabilidade mais elevada. Para esclarecer o conteúdo dessas informações, ele procura o administrador desse fundo. Esse investidor deve ser informado que o índice de Sharpe é um indicador de",
    options: [
      "risco, pois tem como referência ativos livre de risco",
      "performance, pois tem como referência especialista do fundo mais rentável da categoria",
      "performance, pois se destina a mensurar a relação entre o retorno e o risco dos fundos.",
      "risco, pois utiliza em seu cálculo o B de mercado.",
    ],
    correctAnswer: 2,
    category: "Performance e Risco",
  },
  {
    id: 56,
    question: "Um fundo de investimentos em ações tem como objetivo a replicação dos retornos do índice Bovespa. Para tanto, o gestor deve escolher ações que tenham",
    options: [
      "Índice de Sharpe próximo a 0.",
      "menor volatilidade.",
      "beta próximo a 1.",
      "maior retorno.",
    ],
    correctAnswer: 2,
    category: "Performance e Risco",
  },
  {
    id: 57,
    question: "Se os valores esperados do fluxo de caixa de determinado projeto possuem uma distribuição normal,",
    options: [
      "A média e o desvio padrão são iguais",
      "Aproximadamente 95% dos valores encontram-se no intervalo (média – 1 desvio padrão; média + 1 desvio padrão).",
      "Aproximadamente 95% dos valores encontram-se no intervalo (média - 2 desvio padrão; média + 2 desvio padrão).",
      "A média é igual a 2 desvios-padrão",
    ],
    correctAnswer: 2,
    category: "Estatística e Probabilidade",
  },
  {
    id: 58,
    question: "Uma operação de empréstimo que possua um seguro que garanta a liquidação de suas parcelas minimiza, para o doador, o risco",
    options: [
      "cambial.",
      "de contraparte.",
      "operacional.",
      "de mercado.",
    ],
    correctAnswer: 1,
    category: "Risco e Volatilidade",
  },
  {
    id: 59,
    question: "O aumento da duration de Macaulay de uma carteira de investimentos tem como consequência direta",
    options: [
      "a diminuição da relação entre o seu desvio padrão e sua variância.",
      "a diminuição da variação do valor da carteira em relação ao seu benchmark.",
      "o aumento da sua sensibilidade à mudanças nas taxas de juros.",
      "o aumento da relação entre o seu rating e seu risco de crédito.",
    ],
    correctAnswer: 2,
    category: "Mensuração de Risco",
  },
  {
    id: 60,
    question: "Os Códigos da ANBIMA de Regulação e Melhores Práticas se aplicam à",
    options: [
      "instituições associadas e as que aderirem voluntariamente.",
      "instituições financeiras reguladas pelo Banco Central.",
      "administradoras de fundos de investimento.",
      "instituições reguladas pela Comissão de Valores Mobiliários (CVM).",
    ],
    correctAnswer: 0,
    category: "Códigos de Regulação e Melhores Práticas",
  },
  {
    "id": 61,
    "question": "Compete privativamente ao Banco Central do Brasil",
    "options": [
      "fixar as diretrizes e normas da política cambial.",
      "fiscalizar o mercado de valores mobiliários.",
      "coordenar as políticas monetária e fiscal.",
      "realizar as operações de redesconto."
    ],
    "correctAnswer": 3,
    "category": "Sistema Financeiro Nacional"
  },
  {
    "id": 62,
    "question": "No Brasil, compete ao Conselho Monetário Nacional (CMN),\nI. disciplinar o crédito, em todas as suas modalidades, e as operações creditícias em todas as suas formas, inclusive aceites, avais e prestações de quaisquer garantias por parte das instituições financeiras.\nII. regular a constituição, funcionamento e fiscalização das Instituições Financeiras.\nIII. efetuar a compra e venda de títulos públicos federais com o objetivo de executar os serviços do meio circulante.\nEstá correto o que se afirma em",
    "options": [
      "I, apenas.",
      "I e II, apenas.",
      "I, II e III.",
      "II e III, apenas."
    ],
    "correctAnswer": 1,
    "category": "Sistema Financeiro Nacional"
  },
  {
    "id": 63,
    "question": "Segundo a Resolução n° 30 da CVM, os profissionais que fazem recomendação de produtos de investimento para clientes têm o dever, dentre outras atribuições, de verificar se\nI. a situação financeira do cliente é compatível com o produto, serviço ou operação apresentada.\nII. o produto, serviço ou operação é adequado aos objetivos de investimento do cliente.\nIII. o cliente possui conhecimento necessário para compreender os riscos relacionados ao produto, serviço ou operação apresentada.\nEstá correto o que se afirma em",
    "options": [
      "I e II, apenas.",
      "I, II e III.",
      "II e III, apenas.",
      "I e III, apenas."
    ],
    "correctAnswer": 1,
    "category": "Ética e Regulamentação"
  },
  {
    "id": 64,
    "question": "A legislação e regulamentação, que dispõem sobre os crimes de lavagem de dinheiro ou ocultação de bens, direitos e valores, define que",
    "options": [
      "estão sujeitos às punições aplicá veis aos crimes previstos nessa legislação, todos que contribuem para qualquer uma das etapas do processo de lavagem de dinheiro.",
      "o Banco Central é o único órgão competente para editar normativos referentes à prevenção e combate desses crimes.",
      "as punições estabelecidas no Código Penal não se aplicam a esses crimes.",
      "a ocorrência de infração penal precedente não é necessária para que se caracterize um crime de lavagem de dinheiro."
    ],
    "correctAnswer": 0,
    "category": "Prevenção à Lavagem de Dinheiro"
  },
  {
    "id": 65,
    "question": "Ao discutir com o gestor do seu portfólio, André afirma: \"não perdi dinheiro nessas ações que estão em baixa, pois nem as vendi, ainda\". Nesse caso, ele apresenta o viés da heurística",
    "options": [
      "do excesso de confiança.",
      "da ilusão de controle.",
      "da representatividade.",
      "da aversão à perda."
    ],
    "correctAnswer": 3,
    "category": "Finanças Comportamentais"
  },
  {
    "id": 66,
    "question": "Com a finalidade de prevenir o envolvimento do sistema financeiro em ilícitos, o cadastro dos clientes e as informações sobre as transações realizadas",
    "options": [
      "devem ser implementados quando a instituição financeira assim julgar conveniente.",
      "devem ser conservados durante o período mínimo de cinco anos a partir do encerramento da conta ou da conclusão da transação.",
      "devem ser conservados durante o período mínimo de dez anos a partir do encerramento da conta ou da conclusão da transação.",
      "são facultativos caso a operação seja realizada por pessoa jurídica que exerça atividades de promoção imobiliária ou compra e venda de imóveis."
    ],
    "correctAnswer": 1,
    "category": "Prevenção à Lavagem de Dinheiro"
  },
  {
    "id": 67,
    "question": "Nelson, além de um analista de investimento, é um crítico do chamado \"preço alvo\" e, portanto, sempre busca recomendar apenas a compra e venda, sem relacionar prováveis ganho ou preço. Nesse caso, ele tenta evitar que seus clientes incorram no viés da heurística",
    "options": [
      "da ancoragem.",
      "da representatividade.",
      "da disponibilidade.",
      "do framing."
    ],
    "correctAnswer": 0,
    "category": "Finanças Comportamentais"
  },
  {
    "id": 68,
    "question": "Aplicações em títulos hipotecados, emitidos por empresas europeias, foram oferecidas a um investidor, que decidiu não aportar recursos nesse tipo de investimento por associá-lo à recente crise de algumas economias europeias, apesar do retorno atrativo. Caso a decisão desse investidor tenha sido tomada, apenas com base neste evento recente, pode-se afirmar que ele foi influenciado pela heurística da",
    "options": [
      "ancoragem.",
      "representatividade.",
      "ilusão do controle.",
      "disponibilidade."
    ],
    "correctAnswer": 3,
    "category": "Finanças Comportamentais"
  },
  {
    "id": 69,
    "question": "Segundo a Resolução n° 30 da CVM, o profissional autorizado a recomendar produtos de investimento para clientes deve manter as informações relativas ao perfil de seus clientes atualizadas num intervalo máximo de _____ e proceder a nova análise e classificação das categorias de valores mobiliários em intervalos não superiores a _________.\nAs lacunas das frases deverão ser corretamente preenchidas por",
    "options": [
      "24 (vinte e quatro) meses e 5 (cinco) anos.",
      "5 (cinco) anos, em ambos os casos.",
      "5 (cinco) anos e 24 (vinte e quatro) meses.",
      "24 (vinte e quatro) meses, em ambos os casos."
    ],
    "correctAnswer": 0,
    "category": "Ética e Regulamentação"
  },
  {
    "id": 70,
    "question": "Segundo a Resolução n° 30 da CVM, o dever de verificar se o cliente possui conhecimento necessário para compreender os riscos dos produtos, serviços e operações ofertadas, dentre outros aspectos, está relacionado",
    "options": [
      "à necessidade futura de recursos e o valor das receitas regulares declaradas pelo cliente.",
      "à natureza das operações já realizadas pelo cliente no mercado de valores mobiliá rios e o período em que tais operações foram realizadas.",
      "às finalidades do investi mento no mercado de valores mobiliários e o período em que o cliente deseja manter o investimento.",
      "à tolerância e capacidade do cliente para assumir os riscos das operações ofertadas."
    ],
    "correctAnswer": 1,
    "category": "Ética e Regulamentação"
  },
  {
    "id": 71,
    "question": "Umas das possíveis medidas a serem implementadas pelo Banco Central do Brasil (BACEN) para reduzir a quantidade de dinheiro em circulação na economia e a exposição das instituições financeiras ao risco de crédito é",
    "options": [
      "a contenção dos gastos públicos.",
      "o aumento dos depósitos compulsórios.",
      "a compra de títulos públicos no Open Market.",
      "o aumento da alíquota do Imposto sobre Produtos Industrializados (IPI)."
    ],
    "correctAnswer": 1,
    "category": "Política Monetária"
  },
  {
    "id": 72,
    "question": "Um determinado título de renda fixa zero cupom tem seu valor de resgate de R$ 1.000,00 com vencimento em 12 meses. A taxa de juros do mercado para esse mesmo período é de 7,00% a.a. Nesse caso, o valor presente desse título é",
    "options": [
      "superior a R$ 1.000,00.",
      "igual a R$ 1.000,00.",
      "impossível de ser determinado.",
      "inferior a R$ 1.000,00."
    ],
    "correctAnswer": 3,
    "category": "Renda Fixa"
  },
  {
    "id": 73,
    "question": "Quanto mais alto for o PU (preço unitário) de um título de renda fixa zero-cupom",
    "options": [
      "menor será a quantidade de parcelas de amortização.",
      "maior será o rating do emissor.",
      "menor será o rendimento até seu resgate final.",
      "maior será o risco de crédito do emissor."
    ],
    "correctAnswer": 2,
    "category": "Renda Fixa"
  },
  {
    "id": 74,
    "question": "Os contratos futuro de ações da B3,",
    "options": [
      "têm risco de contraparte.",
      "são padronizados.",
      "não exigem depósito de margem de garantia.",
      "não possibilitam a alavancagem de resultados."
    ],
    "correctAnswer": 1,
    "category": "Derivativos"
  },
  {
    "id": 75,
    "question": "Em uma Oferta Pública de distribuição de uma debenture simples o responsável por representar os interesses dos investidores que adquirirem o ativo perante a companhia emissora é o",
    "options": [
      "Banco Coordenador",
      "Custodiante",
      "Banco Mandatário",
      "Agente Fiduciário"
    ],
    "correctAnswer": 3,
    "category": "Renda Fixa"
  },
  {
    "id": 76,
    "question": "Entre as modalidades que caracterizam o abuso de poder por parte do acionista controlador se inclui:\nI. a subscrição de ações com bens estranhos ao objeto social da companhia.\nII. contratar, direta ou indiretamente, com a companhia, segundo interesses pessoais.\nIII. o exercício de cargo de administrador ou fiscal com os deveres e responsabilidades próprios do cargo.\nEstão corretas as alternativas:",
    "options": [
      "II",
      "III",
      "I",
      "I e II"
    ],
    "correctAnswer": 3,
    "category": "Mercado de Ações"
  },
  {
    "id": 77,
    "question": "Ao recomendar um título de renda fixa Tesouro IPCA+2024 (NTN- B Principal), um especialista de investimento deverá explicar ao seu cliente que\nI. ao manter o título até seu vencimento, a rentabilidade obtida será formada pela variação do IPCA e, também, pela taxa de juro do momento da aquisição.\nII. variações na Taxa Selic terão influência direta na rentabilidade, uma vez que o retorno é dado pela variação do IPCA mais a Taxa Selic.\nIII. em um ambiente econômico de alta inflacionária a rentabilidade real do investidor é mantida.\nEstá correto o que se afirma em",
    "options": [
      "II, apenas.",
      "I, II e III.",
      "I e III, apenas.",
      "I, apenas."
    ],
    "correctAnswer": 2,
    "category": "Tesouro Direto"
  },
  {
    "id": 78,
    "question": "O Sistema de Pagamentos Brasileiro - SPB destina-se a promover a transferência",
    "options": [
      "de reservas bancá rias que representem recursos próprios das instituições financeiras que possuam conta no Sistema de Transferência de Reservas - STR, em tempo real, com a consequente redução do risco sistêmico.",
      "de fundos interbancários, próprios ou de terceiros, que podem ser liquidados, inclusive em tempo real, com a consequente redução do risco sistêmico.",
      "de recursos financeiros próprios de instituições que pertençam a um mesmo conglomerado financeiro por meio da Câmara Interbancária de Pagamentos -CIP, em tempo real, com a consequente redução do risco sistêmico.",
      "exclusiva de fundos entre os correntistas de um mesmo conglomerado financeiro, em tempo real, com a consequente redução do risco sistêmico."
    ],
    "correctAnswer": 0,
    "category": "Sistema Financeiro Nacional"
  },
  {
    "id": 79,
    "question": "Os ativos de renda variável se caracterizam por terem",
    "options": [
      "sua remuneração definida apenas no resgate da aplicação inicialmente feita.",
      "seus preços corrigidos por índices de mercado até sua data de vencimento.",
      "sua remuneração previamente definida, na aquisição do ativo.",
      "seus preços pós-fixados, corrigidos por taxas flutuantes até sua data de vencimento."
    ],
    "correctAnswer": 0,
    "category": "Renda Variável"
  },
  {
    "id": 80,
    "question": "Um investidor realizou um swap Pré x DI, ficando ativo na ponta pré-fixada e passivo na ponta pós-fixada. Nesse caso, esse investidor realizará um ganho no vencimento desse derivativo caso ocorra",
    "options": [
      "a queda da taxa de juro.",
      "a queda da inflação.",
      "o aumento do Ibovespa.",
      "o aumento da taxa de juro."
    ],
    "correctAnswer": 3,
    "category": "Derivativos"
  },
  {
    "id": 81,
    "question": "Os Certificados de Depósito Bancário (CDB) e as Letras de Crédito são títulos emitidos por\nI. Bancos Comerciais.\nII. Cooperativas de Crédito.\nIII. Bancos de Investimento.\nEstá correto o que se afirma em",
    "options": [
      "II, apenas.",
      "I, apenas.",
      "I e III, apenas.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "category": "Renda Fixa"
  },
  {
    "id": 82,
    "question": "Para efeitos de apuração e pagamento do imposto mensal sobre os ganhos líquidos, para o investidor pessoa física, as perdas incorridas em operações de swap em relação aos ganhos líquidos auferidos em outras operações de renda variável",
    "options": [
      "não poderão ser compensadas.",
      "poderão ser integralmente compensadas.",
      "não poderão ser compensadas se excederem aos demais ganhos.",
      "poderão ser compensadas até o limite dos ganhos."
    ],
    "correctAnswer": 3,
    "category": "Tributação"
  },
  {
    "id": 83,
    "question": "Segundo a Regulação da Comissão de Valores Mobiliários (CVM), um gestor de carteiras NÃO poderá aplicar recursos em ativos financeiros negociados no exterior, caso o Fundo seja classificado como",
    "options": [
      "Renda Fixa Simples.",
      "de Ações.",
      "Cambial.",
      "Multimercado."
    ],
    "correctAnswer": 0,
    "category": "Fundos de Investimento"
  },
  {
    "id": 84,
    "question": "O objetivo de uma classe Renda Fixa Simples de um Fundo de Investimento destinado ao segmento de varejo é o de ter uma carteira de títulos sem risco de crédito e baixo risco de mercado. Esse objetivo é atingido com uma carteira composta por",
    "options": [
      "títulos de instituições financeiras e de alta duração.",
      "títulos do governo federal e de alta duração.",
      "títulos do governo federal e de baixa duração.",
      "títulos de instituições financeiras e de baixa duração."
    ],
    "correctAnswer": 2,
    "category": "Fundos de Investimento"
  },
  {
    "id": 85,
    "question": "Um fundo que aplica 100% de seu patrimônio líquido em títulos representativos da dívida externa de\nresponsabilidade da União transacionados no mercado internacional, deve ser classificado, segundo a regulamentação vigente, como Fundo",
    "options": [
      "Renda Fixa Crédito Privado.",
      "Renda Fixa Dívida Externa.",
      "Multimercado.",
      "Cambial."
    ],
    "correctAnswer": 1,
    "category": "Fundos de Investimento"
  },
  {
    "id": 86,
    "question": "Segundo a Comissão de Valores Mobiliários (CVM), o fundo de investimento que permite ao investidor conhecer o valor da cota no momento de sua aplicação é o",
    "options": [
      "Cambial.",
      "Ações.",
      "Multimercado.",
      "Renda Fixa."
    ],
    "correctAnswer": 3,
    "category": "Fundos de Investimento"
  },
  {
    "id": 87,
    "question": "Em um Fundo de Investimento em Direitos Creditórios (FIDC)\nI - as cotas subordinadas possuem maiores riscos, caso os créditos não sejam performados.\nII - são exigidos ratings ( classificação de risco de agências de risco de mercado) apenas para as cotas sêniores.\nIII - as cotas sêniores possuem prioridade para fins de pagamento de amortização e resgates.\nEstá correto o que se afirma em:",
    "options": [
      "II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, apenas."
    ],
    "correctAnswer": 1,
    "category": "Fundos de Investimento"
  },
  {
    "id": 88,
    "question": "Um Fundo de Investimento que oferece diversificação, facilidade no balanceamento da carteira, possui cotas negociadas na Bolsa de Valores e é constituído sob a forma de condomínio aberto é o",
    "options": [
      "Exchange Traded Funds (ETFs).",
      "Fundo de investimento em Direito Creditório (FIDC).",
      "Fundo de Investimento imobiliário (FII).",
      "Fundo de Investimento em Participações (FIP)."
    ],
    "correctAnswer": 0,
    "category": "Fundos de Investimento"
  },
  {
    "id": 89,
    "question": "Um investidor que queira investir em fundos de investimento em ações (FIA) abertos, indexados ao Ibovespa, ou em ETF (Exchage Traded Funds), que tenham como referência o Ibovespa,",
    "options": [
      "pode comprar e vender ambos os fundos em suas respectivas instituições financeiras distribuidoras.",
      "pode comprar e vender o ETF na B3, via home broker; e comprar e vender o FIA em sua instituição financeira distribuidora.",
      "pode comprar e vender ambos os fundos na B3, via home broker.",
      "pode comprar e vender o ETF em sua instituição financeira distribuidora; e comprar e vender o FIA na B3, via home broker."
    ],
    "correctAnswer": 1,
    "category": "Fundos de Investimento"
  },
  {
    "id": 90,
    "question": "As classes tipificadas como Renda Fixa, Ações e Cambial são classificados a partir",
    "options": [
      "da composição da carteira em relação aos emissores dos títulos (públicos ou privados).",
      "do prazo médio da sua carteira de títulos.",
      "do principal fator de risco associado à sua carteira de títulos.",
      "do seu parâmetro de referência (benchmark)."
    ],
    "correctAnswer": 2,
    "category": "Fundos de Investimento"
  },
  {
    "id": 91,
    "question": "Um cliente que possui um plano de previdência complementar do tipo Vida Gerador de Benefício Livre - VGBL perguntou a seu gerente se poderia fazer a portabilidade de seus recursos para sua mãe. O gerente respondeu que a portabilidade dos recursos acumulados no VGBL",
    "options": [
      "poderá ser realizada e não haverá incidência de imposto de renda.",
      "poderá ser realizada, mas haverá incidência de imposto de renda.",
      "não poderá ser realizada, pois é vedada para planos do tipo VGBL.",
      "não poderá ser realizada, pois é vedada entre participantes distintos."
    ],
    "correctAnswer": 3,
    "category": "Previdência"
  },
  {
    "id": 92,
    "question": "Um indivíduo investiu há mais de 12 anos em um plano de previdência complementar aberta do tipo Plano Gerador de Benefício Livre (PGBL). No momento do resgate optou pelo regime de tributação compensável (tabela progressiva). A alíquota do Imposto de Renda que incidiu na fonte, no momento do resgate desse plano foi de",
    "options": [
      "15% sobre o valor total resgatado.",
      "10% sobre o valor total resgatado.",
      "15% sobre o rendimento.",
      "10% sobre o rendimento."
    ],
    "correctAnswer": 0,
    "category": "Previdência/Tributação"
  },
  {
    "id": 93,
    "question": "MMônica decidiu contratar um plano de previdência complementar do tipo Vida Gerador de Benefício Livre (VGBL), com aportes mensais de RS 2.000,00 e Tábua Biométrica BR-EMSsb. Seu objetivo é o de acumular o maior valor possível em 30 anos, para converter a reserva acumulada em um benefício de renda mensal vitalícia. Nesse caso, ela deverá selecionar, na fase de diferimento, um plano que possua a _____ taxa de carregamento e a ______ rentabilidade do fundo; e, na fase de concessão do benefício, o _____ percentual de reversão do excedente financeiro.\nAs lacunas da frase deverão ser preenchidas corretamente por",
    "options": [
      "menor - menor - menor",
      "menor - maior - menor",
      "maior - maior - menor",
      "menor - maior - maior"
    ],
    "correctAnswer": 3,
    "category": "Previdência"
  },
  {
    "id": 94,
    "question": "A taxa de carregamento cobrada, no momento do resgate, de um Plano de Previdência Complementar Aberta incide sobre o valor",
    "options": [
      "nominal das contribuições realizadas.",
      "total resgatado, nos planos do tipo PGBL.",
      "nominal das contribuições realizadas, acrescidos dos rendimentos.",
      "dos rendimentos, nos planos do tipo."
    ],
    "correctAnswer": 0,
    "category": "Previdência"
  },
  {
    "id": 95,
    "question": "Sr. Alfredo, de 80 anos, tem uma única fonte de renda anual que totaliza R$ 240.000,00, provenientes da participação nos lucros de uma empresa onde é sócio. Em relação à possibilidade de utilização do Plano Gerador de Benefício Livre - PGBL, para obtenção de benefícios fiscais,",
    "options": [
      "não é recomendado contratar um Plano Gerador de Benefícios Livre - PGBL, uma vez que sua renda não possibilita a obtenção de benefícios fiscais, mesmo que os aportes neste plano se mantenham dentro do limite máximo de 12% da sua renda bruta anual.",
      "recomenda-se contratar um Plano Gerador de Benefício Livre - PGBL, com valor máximo de 12% da sua renda bruta anual, para diminuição da sua base de cálculo para cobrança de imposto de renda.",
      "recomenda-se contratar um Plano Gerador de Benefício Livre - PGBL, uma vez que sua idade permite a contratação deste plano sem valor máximo para obtenção de benefícios fiscais e desta forma, pagar menos impostos.",
      "não é recomendado contratar um Plano Gerador de Benefícios Livre - PGBL, uma vez que sua idade não possibilita a obtenção de benefícios fiscais, mesmo que os aportes neste plano se mantenham dentro do limite máximo de 12% da sua renda bruta anual."
    ],
    "correctAnswer": 1,
    "category": "Previdência/Tributação"
  },
  {
    "id": 96,
    "question": "O rating de crédito de uma empresa, avaliado por empresas classificadoras, é uma forma de tentar quantificar a",
    "options": [
      "variação do preço das ações de uma empresa, negociadas na Bolsa de Valores.",
      "capacidade e intenção da empresa em honrar suas dívidas.",
      "exposição dos títulos de uma empresa a variações nas taxas de câmbio.",
      "capacidade de geração de caixa de uma empresa."
    ],
    "correctAnswer": 1,
    "category": "Risco"
  },
  {
    "id": 97,
    "question": "Pelo princípio da dominância entre carteiras, é correto afirmar que um investidor racional escolherá, entre duas carteiras de investimentos com",
    "options": [
      "riscos iguais, aquela com maior retorno esperado.",
      "retornos esperados diferentes, aquela com maior tracking error.",
      "retornos esperados iguais, aquela com maior risco.",
      "riscos diferentes, aquela com menor retorno esperado."
    ],
    "correctAnswer": 0,
    "category": "Gestão de Carteiras"
  },
  {
    "id": 98,
    "question": "Na tentativa de montar uma carteira de ações, sintetizando as variações no índice Bovespa, um investidor deve observar",
    "options": [
      "a moda.",
      "o beta.",
      "o Índice de Sharpe.",
      "a duration."
    ],
    "correctAnswer": 1,
    "category": "Gestão de Carteiras"
  },
  {
    "id": 99,
    "question": "O uso de um sistema de Back Testing é uma forma de\nI. aferir a validade do modelo de risco utilizado.\nII. avaliar o quanto um portfólio pode perder em um cenário hipotético de stress macroeconômico.\nIII. calcular o desvio-padrão da diferença entre os retornos da carteira.\nEstá correto o que se afirma em",
    "options": [
      "I, apenas.",
      "I e II, apenas.",
      "I, II e III.",
      "II e III, apenas."
    ],
    "correctAnswer": 0,
    "category": "Risco"
  },
  {
    "id": 100,
    "question": "O índice de Sharpe mede",
    "options": [
      "o risco não sistemático de um fundo de investimento.",
      "o retorno acumulado de um fundo de investi mento em relação ao seu benchmark.",
      "a duration, ou prazo médio, dos títulos que compõem um fundo de investimento.",
      "a relação do risco assumido e o retorno obtido em fundos de investimento."
    ],
    "correctAnswer": 3,
    "category": "Gestão de Carteiras"
  },
  {
    "id": 101,
    "question": "Uma das medidas de risco de um ativo mais frequentemente usada é o desvio padrão dos seus retornos. Esta medida reflete a distância",
    "options": [
      "mínima entre um dado retorno e o mínimo dos retornos.",
      "média entre um dado retorno e o máxi mo dos retornos.",
      "máxima entre um dado retorno e a média dos retornos.",
      "média entre um dado retorno e a média dos retornos."
    ],
    "correctAnswer": 3,
    "category": "Risco"
  }
];
