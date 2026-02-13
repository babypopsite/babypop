
import { Video, Character, Song, Game } from './types';

export const CHARACTERS: Character[] = [
  { id: 'pj', name: 'PJ', age: '', personality: '', color: 'bg-blue-400', image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=PJ' },
  { id: 'mia', name: 'Mia', age: '', personality: '', color: 'bg-pink-400', image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mia' },
  { id: 'mio', name: 'Mio', age: '', personality: '', color: 'bg-orange-400', image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mio' },
  { id: 'jamir', name: 'Jamir', age: '', personality: '', color: 'bg-amber-600', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Jamir' },
  { id: 'passaro', name: 'Pássaro', age: '', personality: '', color: 'bg-yellow-300', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Bird' },
  { id: 'urso', name: 'Urso', age: '', personality: '', color: 'bg-amber-800', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Bear' }
];

// IDs Reais do YouTube para exemplo (Canais educativos)
const YOUTUBE_SAMPLES = [
  'y8vS0I_8VvE', '6_tUFrp_3Lw', 'Wz89pNoeC3U', 'pW27O_e4_H8', 
  'L_u_3p_vVfI', 'm_s_1p_vVfI', 'k_s_2p_vVfI', 'j_s_3p_vVfI'
];

export const VIDEOS: Video[] = Array.from({ length: 48 }, (_, i) => {
  const titles = [
    'As Cores do Arco-Íris', 'Aprendendo os Números', 'Os Animais da Fazenda', 'Hora de Escovar os Dentes', 
    'A Roda do Ônibus', 'Brincando com as Vogais', 'O Som dos Bichos', 'A Dança do Robô',
    'Frutas e Vegetais', 'As Estações do Ano', 'O Ciclo da Água', 'Higiene é Saúde'
  ];
  const youtubeId = YOUTUBE_SAMPLES[i % YOUTUBE_SAMPLES.length];
  return {
    id: `v${i + 1}`,
    title: titles[i % titles.length] + (i > 11 ? ` ${i + 1}` : ''),
    category: 'educational',
    duration: '3:00',
    thumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
    url: `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
  };
});

export const SONGS: Song[] = Array.from({ length: 50 }, (_, i) => {
  const songDatabase = [
    'O ABC da Alegria', 'Contando Estrelas', 'Dança do Jamir', 'Canto do Pássaro', 'Lavar as Mãos',
    'As Cores do Mundo', 'O Trem dos Bichos', 'Hora do Sono', 'Comer Frutas', 'Amigo Especial'
  ];
  return {
    id: `s${i + 1}`,
    title: songDatabase[i % songDatabase.length] + (i > 9 ? ` ${i + 1}` : ''),
    theme: 'Música',
    lyricsSnippet: 'Vamos cantar!'
  };
});

export const GAMES: Game[] = Array.from({ length: 48 }, (_, i) => {
  const charIds = CHARACTERS.map(c => c.id);
  const colors = ['bg-blue-500', 'bg-pink-500', 'bg-orange-500', 'bg-red-500', 'bg-violet-500', 'bg-emerald-500'];
  
  const gameTypes = [
    { title: 'Jogo da Memória', engine: 'memory', category: 'logic' },
    { title: 'Encontre a Cor', engine: 'choice', category: 'colors' },
    { title: 'Qual é o Número?', engine: 'choice', category: 'numbers' }
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
