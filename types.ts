
export interface Video {
  id: string;
  title: string;
  category: 'babies' | 'toddlers' | 'educational' | 'routine' | 'emotions' | 'basics' | 'nature';
  duration: string;
  thumbnail: string;
  url: string;
}

export interface Character {
  id: string;
  name: string;
  age: string;
  personality: string;
  color: string;
  image: string;
}

export interface Song {
  id: string;
  title: string;
  theme: string;
  lyricsSnippet: string;
}

export type GameEngineType = 'choice' | 'counting' | 'memory' | 'pattern';

export interface Game {
  id: string;
  title: string;
  description: string;
  engine: GameEngineType;
  category: 'colors' | 'numbers' | 'emotions' | 'fruits' | 'shapes' | 'animals' | 'logic' | 'objects';
  characterId: string;
  color: string;
  ageRange: '2-3' | '4-5'; // Adicionado para controle de dificuldade
}
