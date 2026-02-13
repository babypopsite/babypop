
import { Video, Character, Song, Game } from './types';

export const CHARACTERS: Character[] = [
  { id: 'pj', name: 'PJ', age: '', personality: '', color: 'bg-blue-400', image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=PJ' },
  { id: 'mia', name: 'Mia', age: '', personality: '', color: 'bg-pink-400', image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mia' },
  { id: 'mio', name: 'Mio', age: '', personality: '', color: 'bg-orange-400', image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mio' },
  { id: 'mae', name: 'Mãe', age: '', personality: '', color: 'bg-red-400', image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mom' },
  { id: 'pai', name: 'Pai', age: '', personality: '', color: 'bg-blue-600', image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Dad' },
  { id: 'jamir', name: 'Jamir', age: '', personality: '', color: 'bg-amber-600', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Jamir' },
  { id: 'passaro', name: 'Pássaro', age: '', personality: '', color: 'bg-yellow-300', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Bird' },
  { id: 'urso', name: 'Urso', age: '', personality: '', color: 'bg-amber-800', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Bear' },
  { id: 'pato', name: 'Pato', age: '', personality: '', color: 'bg-yellow-400', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Duck' },
  { id: 'gato', name: 'Gato', age: '', personality: '', color: 'bg-gray-400', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Cat' },
  { id: 'coelho', name: 'Coelho', age: '', personality: '', color: 'bg-white', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Bunny' },
  { id: 'tartaruga', name: 'Tartaruga', age: '', personality: '', color: 'bg-green-500', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Turtle' }
];

export const VIDEOS: Video[] = Array.from({ length: 48 }, (_, i) => {
  const titles = [
    'Aquarela das Cores', 'Hora do Banho', 'Os Números Mágicos', 'Bom Dia BabyPop', 
    'Dança com o Jamir', 'O Som do Pássaro', 'Cuidando das Plantas', 'Aventura no Bosque',
    'Brincando na Chuva', 'O Pato na Lagoa', 'Gato Curioso', 'O Pulo do Coelho',
    'Devagar se vai ao longe', 'Amizade é Tudo', 'As Vogais Coloridas', 'O Trem da Alegria',
    'Formas Geométricas', 'Limpando o Quarto', 'Frutas Deliciosas', 'O Urso Dorminhoco',
    'Sol e Lua', 'As Estações do Ano', 'Animais da Fazenda', 'Fundo do Mar',
    'Espaço Sideral', 'Corpo Humano', 'Sentimentos Bons', 'Ajudando o Próximo',
    'O Ciclo da Água', 'Reciclar é Divertido', 'O Som do Trovão', 'Cores Primárias',
    'Família Reunida', 'Piquenique no Parque', 'Escovando os Dentes', 'Hora de Comer',
    'Vestindo a Roupa', 'Amarrando o Sapato', 'Contando até 10', 'O ABC Divertido',
    'Instrumentos Musicais', 'Pintura a Dedo', 'Massinha de Modelar', 'Bolhas de Sabão',
    'Voo do Avião', 'O Carro do Pai', 'A Moto do Tio', 'O Barco no Rio'
  ];
  return {
    id: `v${i + 1}`,
    title: titles[i] || `Vídeo Educativo ${i + 1}`,
    category: 'educational',
    duration: '3:00',
    thumbnail: `https://picsum.photos/seed/babypop_v${i + 1}/400/225`,
    url: '#'
  };
});

export const SONGS: Song[] = Array.from({ length: 50 }, (_, i) => {
  const songDatabase = [
    'O ABC da Alegria', 'Contando Estrelas', 'Dança do Jamir', 'Canto do Pássaro', 'Lavar as Mãos',
    'As Cores do Mundo', 'O Trem dos Bichos', 'Hora do Sono', 'Comer Frutas', 'Amigo Especial',
    'O Baile das Formas', 'Chuva de Confete', 'Rodas do Ônibus', 'Sítio do Seu Lobato', 'Pinto Amarelo',
    'Cabeça, Ombro, Joelho e Pé', 'A Dona Aranha', 'Brilha Brilha Estrela', 'O Jacaré foi à Cidade', 'Se Você está Contente',
    'O Som do Tambor', 'As Vogais Mágicas', 'Dia de Sol', 'Banho de Espuma', 'Arrumar os Brinquedos',
    'Por favor e Obrigado', 'O Voo do Pássaro', 'O Pulo do Jamir', 'Dente Limpo', 'Amo Pai e Mãe',
    'Marcha Soldado', 'Ciranda', 'O Cravo e a Rosa', 'Peixe Vivo', 'Sapo Cururu',
    'Índios Amigos', 'Escravos de Jó', 'Cai Cai Balão', 'Capelinha de Melão', 'Atirei o Pau no Gato',
    'Samba Lelê', 'A Canoa Virou', 'Fui ao Mercado', 'Borboleta no Jardim', 'O Pinto Piu',
    'Cinco Patos', 'Upa Upa Cavalo', 'O Elefante', 'A Baleia', 'O Leão Rei'
  ];
  return {
    id: `s${i + 1}`,
    title: songDatabase[i] || `Música Animada ${i + 1}`,
    theme: 'Música',
    lyricsSnippet: 'Vamos cantar!'
  };
});

export const GAMES: Game[] = Array.from({ length: 48 }, (_, i) => {
  const charIds = CHARACTERS.map(c => c.id);
  const colors = ['bg-blue-500', 'bg-pink-500', 'bg-orange-500', 'bg-red-500', 'bg-violet-500', 'bg-emerald-500', 'bg-cyan-500'];
  
  const gameTypes = [
    { title: 'Jogo da Memória', engine: 'memory', category: 'logic' },
    { title: 'Qual é o Número?', engine: 'choice', category: 'numbers' },
    { title: 'Qual é a Forma?', engine: 'choice', category: 'shapes' },
    { title: 'Qual é a Cor?', engine: 'choice', category: 'colors' },
    { title: 'Quantos você vê?', engine: 'counting', category: 'numbers' },
    { title: 'Qual é a Fruta?', engine: 'choice', category: 'fruits' },
    { title: 'Qual é o Objeto?', engine: 'choice', category: 'objects' }
  ];

  const currentType = gameTypes[i % gameTypes.length];
  const ageRange: '2-3' | '4-5' = i % 2 === 0 ? '2-3' : '4-5';

  return {
    id: `g${i + 1}`,
    title: currentType.title,
    description: 'Vamos brincar!',
    engine: currentType.engine as any,
    category: currentType.category as any,
    characterId: charIds[i % charIds.length],
    color: colors[i % colors.length],
    ageRange: ageRange
  };
});
