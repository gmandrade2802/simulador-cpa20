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
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correctAnswer: 2,
    category: "Geografia"
  },
  {
    id: 2,
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Carlos Drummond de Andrade"],
    correctAnswer: 0,
    category: "Literatura"
  },
  {
    id: 3,
    question: "Qual é o resultado de 15 + 27?",
    options: ["40", "42", "43", "45"],
    correctAnswer: 1,
    category: "Matemática"
  },
  {
    id: 4,
    question: "Em que ano o Brasil foi descoberto?",
    options: ["1492", "1500", "1530", "1550"],
    correctAnswer: 1,
    category: "História"
  },
  {
    id: 5,
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    correctAnswer: 2,
    category: "Ciências"
  },
  {
    id: 6,
    question: "Quantos continentes existem na Terra?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Geografia"
  },
  {
    id: 7,
    question: "Qual é a fórmula da água?",
    options: ["H2O", "CO2", "O2", "H2O2"],
    correctAnswer: 0,
    category: "Química"
  },
  {
    id: 8,
    question: "Quem pintou a Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Rafael", "Donatello"],
    correctAnswer: 1,
    category: "Arte"
  },
  {
    id: 9,
    question: "Qual é o idioma mais falado no mundo?",
    options: ["Inglês", "Espanhol", "Mandarim", "Hindi"],
    correctAnswer: 2,
    category: "Línguas"
  },
  {
    id: 10,
    question: "Qual é a moeda do Japão?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    correctAnswer: 2,
    category: "Geografia"
  },
  {
    id: 11,
    question: "Quantos lados tem um hexágono?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    category: "Matemática"
  },
  {
    id: 12,
    question: "Quem foi o primeiro presidente do Brasil?",
    options: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Floriano Peixoto"],
    correctAnswer: 2,
    category: "História"
  },
  {
    id: 13,
    question: "Qual é a velocidade da luz?",
    options: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "200.000 km/s"],
    correctAnswer: 0,
    category: "Física"
  },
  {
    id: 14,
    question: "Qual é o menor país do mundo?",
    options: ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    category: "Geografia"
  },
  {
    id: 15,
    question: "Quantas cores tem o arco-íris?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Ciências"
  },
  {
    id: 16,
    question: "Qual é o animal terrestre mais rápido?",
    options: ["Leão", "Guepardo", "Leopardo", "Tigre"],
    correctAnswer: 1,
    category: "Biologia"
  },
  {
    id: 17,
    question: "Em que ano terminou a Segunda Guerra Mundial?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
    category: "História"
  },
  {
    id: 18,
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correctAnswer: 3,
    category: "Geografia"
  },
  {
    id: 19,
    question: "Quantos ossos tem o corpo humano adulto?",
    options: ["186", "206", "226", "246"],
    correctAnswer: 1,
    category: "Biologia"
  },
  {
    id: 20,
    question: "Qual é a raiz quadrada de 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    category: "Matemática"
  },
  {
    id: 21,
    question: "Quem descobriu a penicilina?",
    options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Albert Einstein"],
    correctAnswer: 1,
    category: "Ciências"
  },
  {
    id: 22,
    question: "Qual é o rio mais extenso do mundo?",
    options: ["Nilo", "Amazonas", "Yangtzé", "Mississippi"],
    correctAnswer: 0,
    category: "Geografia"
  },
  {
    id: 23,
    question: "Quantos estados tem o Brasil?",
    options: ["25", "26", "27", "28"],
    correctAnswer: 2,
    category: "Geografia"
  },
  {
    id: 24,
    question: "Qual é o símbolo químico do ouro?",
    options: ["Au", "Ag", "Fe", "Cu"],
    correctAnswer: 0,
    category: "Química"
  },
  {
    id: 25,
    question: "Quem foi o autor de 'Os Lusíadas'?",
    options: ["Fernando Pessoa", "Luís de Camões", "Eça de Queirós", "José Saramago"],
    correctAnswer: 1,
    category: "Literatura"
  },
  {
    id: 26,
    question: "Qual é a montanha mais alta do mundo?",
    options: ["K2", "Monte Everest", "Kangchenjunga", "Makalu"],
    correctAnswer: 1,
    category: "Geografia"
  },
  {
    id: 27,
    question: "Quantos minutos tem uma hora?",
    options: ["50", "55", "60", "65"],
    correctAnswer: 2,
    category: "Matemática"
  },
  {
    id: 28,
    question: "Qual é o planeta mais próximo do Sol?",
    options: ["Vênus", "Terra", "Mercúrio", "Marte"],
    correctAnswer: 2,
    category: "Astronomia"
  },
  {
    id: 29,
    question: "Quem inventou a lâmpada elétrica?",
    options: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Alexander Graham Bell"],
    correctAnswer: 1,
    category: "História"
  },
  {
    id: 30,
    question: "Qual é o maior mamífero do mundo?",
    options: ["Elefante africano", "Baleia azul", "Girafa", "Rinoceronte"],
    correctAnswer: 1,
    category: "Biologia"
  },
  {
    id: 31,
    question: "Quantos jogadores tem um time de futebol?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    category: "Esportes"
  },
  {
    id: 32,
    question: "Qual é a capital da França?",
    options: ["Londres", "Berlim", "Paris", "Roma"],
    correctAnswer: 2,
    category: "Geografia"
  },
  {
    id: 33,
    question: "Em que continente fica o Egito?",
    options: ["Ásia", "África", "Europa", "América"],
    correctAnswer: 1,
    category: "Geografia"
  },
  {
    id: 34,
    question: "Qual é o resultado de 8 x 7?",
    options: ["54", "56", "58", "60"],
    correctAnswer: 1,
    category: "Matemática"
  },
  {
    id: 35,
    question: "Quem foi o criador da teoria da relatividade?",
    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileu Galilei"],
    correctAnswer: 1,
    category: "Física"
  },
  {
    id: 36,
    question: "Qual é o maior deserto do mundo?",
    options: ["Saara", "Gobi", "Antártica", "Árabe"],
    correctAnswer: 2,
    category: "Geografia"
  },
  {
    id: 37,
    question: "Quantas cordas tem um violão?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    category: "Música"
  },
  {
    id: 38,
    question: "Qual é o gás mais abundante na atmosfera terrestre?",
    options: ["Oxigênio", "Nitrogênio", "Gás Carbônico", "Hidrogênio"],
    correctAnswer: 1,
    category: "Química"
  },
  {
    id: 39,
    question: "Quem pintou 'A Última Ceia'?",
    options: ["Michelangelo", "Leonardo da Vinci", "Rafael", "Caravaggio"],
    correctAnswer: 1,
    category: "Arte"
  },
  {
    id: 40,
    question: "Qual é a capital da Itália?",
    options: ["Milão", "Veneza", "Roma", "Florença"],
    correctAnswer: 2,
    category: "Geografia"
  },
  {
    id: 41,
    question: "Quantos dias tem um ano bissexto?",
    options: ["365", "366", "367", "364"],
    correctAnswer: 1,
    category: "Matemática"
  },
  {
    id: 42,
    question: "Qual é o símbolo químico da prata?",
    options: ["Ag", "Au", "Pt", "Pb"],
    correctAnswer: 0,
    category: "Química"
  },
  {
    id: 43,
    question: "Quem foi o primeiro homem a pisar na Lua?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
    correctAnswer: 1,
    category: "História"
  },
  {
    id: 44,
    question: "Qual é o menor continente do mundo?",
    options: ["Europa", "Oceania", "Antártica", "América do Sul"],
    correctAnswer: 1,
    category: "Geografia"
  },
  {
    id: 45,
    question: "Quantos graus tem um ângulo reto?",
    options: ["45°", "60°", "90°", "180°"],
    correctAnswer: 2,
    category: "Matemática"
  },
  {
    id: 46,
    question: "Qual é a língua oficial do Brasil?",
    options: ["Espanhol", "Português", "Inglês", "Francês"],
    correctAnswer: 1,
    category: "Línguas"
  },
  {
    id: 47,
    question: "Quem foi Cleópatra?",
    options: ["Rainha do Egito", "Imperatriz romana", "Rainha da Inglaterra", "Princesa grega"],
    correctAnswer: 0,
    category: "História"
  },
  {
    id: 48,
    question: "Qual é a fórmula do gás carbônico?",
    options: ["CO", "CO2", "O2", "C2O"],
    correctAnswer: 1,
    category: "Química"
  },
  {
    id: 49,
    question: "Quantas teclas brancas tem um piano?",
    options: ["48", "52", "56", "60"],
    correctAnswer: 1,
    category: "Música"
  },
  {
    id: 50,
    question: "Qual é a capital da Espanha?",
    options: ["Barcelona", "Madrid", "Sevilha", "Valencia"],
    correctAnswer: 1,
    category: "Geografia"
  },
  {
    id: 51,
    question: "Quem escreveu 'Romeu e Julieta'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Oscar Wilde"],
    correctAnswer: 1,
    category: "Literatura"
  },
  {
    id: 52,
    question: "Qual é o resultado de 100 ÷ 4?",
    options: ["20", "25", "30", "35"],
    correctAnswer: 1,
    category: "Matemática"
  },
  {
    id: 53,
    question: "Quantos meses têm 31 dias?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Matemática"
  },
  {
    id: 54,
    question: "Qual é o país com a maior população do mundo?",
    options: ["Índia", "Estados Unidos", "China", "Brasil"],
    correctAnswer: 2,
    category: "Geografia"
  },
  {
    id: 55,
    question: "Quem foi Vincent van Gogh?",
    options: ["Escritor", "Músico", "Pintor", "Escultor"],
    correctAnswer: 2,
    category: "Arte"
  },
  {
    id: 56,
    question: "Qual é o nome do satélite natural da Terra?",
    options: ["Titã", "Europa", "Lua", "Io"],
    correctAnswer: 2,
    category: "Astronomia"
  },
  {
    id: 57,
    question: "Quantos zeros tem um milhão?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    category: "Matemática"
  },
  {
    id: 58,
    question: "Qual é a capital da Argentina?",
    options: ["Santiago", "Montevidéu", "Lima", "Buenos Aires"],
    correctAnswer: 3,
    category: "Geografia"
  },
  {
    id: 59,
    question: "Quem inventou o telefone?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
    correctAnswer: 2,
    category: "História"
  },
  {
    id: 60,
    question: "Qual é a cor que resulta da mistura de azul e amarelo?",
    options: ["Verde", "Laranja", "Roxo", "Marrom"],
    correctAnswer: 0,
    category: "Arte"
  }
];
