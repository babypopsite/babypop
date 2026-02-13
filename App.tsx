
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Play, Music, Heart, Home as HomeIcon, Video as VideoIcon, 
  Gamepad2, Sun, Moon, X, Search, Download, Baby, ShieldCheck,
  Youtube, Instagram, LucideIcon
} from 'lucide-react';
import { VIDEOS, SONGS, GAMES, CHARACTERS } from './constants';
import { Game, Song } from './types';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Logo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = { sm: 'text-2xl', md: 'text-4xl md:text-5xl', lg: 'text-7xl md:text-9xl' };
  return (
    <div className={`font-kids font-bold tracking-tight flex items-center justify-center gap-1 select-none drop-shadow-lg ${sizeClasses[size]}`}>
      <span className="text-[#3b82f6]">B</span><span className="text-[#ec4899]">a</span><span className="text-[#06b6d4]">b</span><span className="text-[#eab308]">y</span>
      <span className="text-[#a855f7] ml-1">P</span><span className="text-[#ef4444]">o</span><span className="text-[#22c55e]">p</span>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [diaryEntries, setDiaryEntries] = useState<any[]>([]);
  const [newNote, setNewNote] = useState('');
  const [playingGame, setPlayingGame] = useState<Game | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [showWin, setShowWin] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [ageFilter, setAgeFilter] = useState<'all' | '2-3' | '4-5'>('all');

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  
  const memoryCards = useMemo(() => {
    if (playingGame?.engine !== 'memory') return [];
    const itemsPool = ['🍎', '🐶', '☀️', '⚽', '🚗', '🐱', '🍌', '🌈', '🍦', '🧸', '🍭', '✈️'];
    const pairCount = playingGame.ageRange === '2-3' ? 3 : 6; 
    const selectedItems = itemsPool.slice(0, pairCount);
    const deck = [...selectedItems, ...selectedItems]
      .sort(() => Math.random() - 0.5)
      .map((content, id) => ({ id, content }));
    return deck;
  }, [playingGame]);

  useEffect(() => {
    const saved = localStorage.getItem('babypop_diary');
    if (saved) setDiaryEntries(JSON.parse(saved));
    
    const updateTimeState = () => {
      const hour = new Date().getHours();
      setIsNight(hour >= 18 || hour < 6);
    };
    updateTimeState();
    const interval = setInterval(updateTimeState, 60000);
    return () => clearInterval(interval);
  }, []);

  const saveToLocalStorage = (entries: any[]) => {
    localStorage.setItem('babypop_diary', JSON.stringify(entries));
    setDiaryEntries(entries);
  };

  const handleGameAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setShowWin(true);
      setTimeout(() => {
        setShowWin(false);
        setPlayingGame(null);
        setFlippedCards([]);
        setMatchedPairs([]);
      }, 2500);
    }
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(id) || matchedPairs.includes(id)) return;
    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (memoryCards[first].content === memoryCards[second].content) {
        const newMatched = [...matchedPairs, first, second];
        setMatchedPairs(newMatched);
        setFlippedCards([]);
        if (newMatched.length === memoryCards.length) handleGameAnswer(true);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const filteredGames = GAMES.filter(g => {
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAge = ageFilter === 'all' || g.ageRange === ageFilter;
    return matchesSearch && matchesAge;
  });

  const platformBtnClass = (color: string, shadow: string, isActive = false) => `
    relative flex flex-col items-center justify-center p-8 rounded-[40px] text-white font-kids font-bold uppercase
    transition-all transform hover:scale-105 active:scale-95 shadow-xl border-b-[12px] ${shadow} ${color}
    ${isActive ? 'translate-y-2 border-b-4 ring-4 ring-white shadow-none' : ''}
  `;

  const navItemClass = (item: any) => `
    flex items-center gap-2 px-6 py-4 rounded-2xl font-kids text-white transition-all shadow-md shrink-0 
    border-b-4 border-black/20 active:border-b-0 active:translate-y-1
    ${activeTab === item.id ? `${item.color} ring-2 ring-white scale-105 border-b-0 translate-y-1` : 'bg-black/10 hover:bg-black/20'}
  `;

  // Dynamic Greeting Icon
  const GreetingIcon = isNight ? Moon : Sun;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-1000 ${isNight ? 'bg-[#1e293b]' : 'bg-[#7dd3fc]'}`}>
      <header className={`sticky top-0 z-50 border-b-8 px-4 py-4 shadow-xl transition-colors duration-1000 ${isNight ? 'bg-[#334155] border-[#1e293b]' : 'bg-[#FFD700] border-[#FDB813]'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div onClick={() => {setActiveTab('home'); setPlayingGame(null);}} className="cursor-pointer hover:scale-110 transition-transform"><Logo size="sm" /></div>
          <nav className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto justify-center py-2 px-4">
            {[
              { id: 'home', icon: HomeIcon, label: 'Início', color: 'bg-orange-400' },
              { id: 'videos', icon: VideoIcon, label: 'Vídeos', color: 'bg-rose-400' },
              { id: 'games', icon: Gamepad2, label: 'Jogos', color: 'bg-emerald-400' },
              { id: 'music', icon: Music, label: 'Músicas', color: 'bg-violet-400' },
              { id: 'parents', icon: Heart, label: 'Pais', color: 'bg-pink-400' }
            ].map(item => (
              <button key={item.id} onClick={() => {setActiveTab(item.id); setPlayingGame(null);}} className={navItemClass(item)}>
                <item.icon size={24} /><span className="hidden lg:inline font-bold text-lg">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 pb-32">
        {activeTab === 'home' && !playingGame && (
          <div className="space-y-20 animate-in fade-in duration-700">
            <section className="bg-white/10 backdrop-blur-md p-12 md:p-16 rounded-[80px] border-4 border-white shadow-2xl text-center">
              <Logo size="lg" />
              <div className="flex items-center justify-center gap-4 text-4xl font-kids text-white mt-8">
                <GreetingIcon className="text-yellow-300" size={60} />
                <span className="font-bold">{isNight ? 'Boa noite!' : 'Bom dia!'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
                {[
                  { id: 'videos', label: 'VÍDEOS', icon: Play, color: 'bg-rose-500', shadow: 'border-rose-700' },
                  { id: 'games', label: 'JOGOS', icon: Gamepad2, color: 'bg-emerald-500', shadow: 'border-emerald-700' },
                  { id: 'music', label: 'MÚSICAS', icon: Music, color: 'bg-violet-500', shadow: 'border-violet-700' },
                  { id: 'parents', label: 'DIÁRIO', icon: Heart, color: 'bg-pink-500', shadow: 'border-pink-700' }
                ].map(btn => (
                  <button key={btn.id} onClick={() => setActiveTab(btn.id)} className={platformBtnClass(btn.color, btn.shadow)}>
                    <btn.icon size={80} className="mb-4" />
                    <span className="text-3xl tracking-wide">{btn.label}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="text-center px-4">
               <h2 className="text-5xl font-kids mb-12 text-blue-900 drop-shadow-lg font-bold">Nossos Amigos</h2>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {CHARACTERS.map(char => (
                    <div key={char.id} className="group cursor-default">
                      <div className={`${char.color} aspect-square rounded-[50px] p-4 border-b-8 border-black/10 shadow-xl overflow-hidden transform group-hover:-translate-y-4 transition-all duration-300`}>
                        <img src={char.image} alt={char.name} className="w-full h-full object-contain" />
                      </div>
                      <p className="font-kids font-bold mt-4 text-3xl text-blue-900">{char.name}</p>
                    </div>
                  ))}
               </div>
            </section>
          </div>
        )}

        {activeTab === 'games' && !playingGame && (
          <div className="animate-in slide-in-from-bottom-10 duration-500">
            <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto mb-12">
              <div className="relative flex-grow">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
                <input type="text" placeholder="Qual jogo hoje?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-16 pr-6 py-6 rounded-[40px] border-b-[12px] border-gray-200 shadow-2xl font-kids text-2xl outline-none" />
              </div>
              <div className="flex gap-4">
                 <button onClick={() => setAgeFilter('2-3')} className={platformBtnClass('bg-emerald-500', 'border-emerald-700', ageFilter === '2-3').replace('p-8', 'p-4 px-8')}>2-3 ANOS</button>
                 <button onClick={() => setAgeFilter('4-5')} className={platformBtnClass('bg-orange-500', 'border-orange-700', ageFilter === '4-5').replace('p-8', 'p-4 px-8')}>4-5 ANOS</button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
              {filteredGames.map(game => (
                <div key={game.id} onClick={() => setPlayingGame(game)} className={platformBtnClass(game.color, 'border-black/20').replace('p-8', 'p-12 min-h-[300px] cursor-pointer')}>
                  <div className="absolute top-4 right-6 bg-white/20 px-3 py-1 rounded-full text-sm font-black tracking-widest">{game.ageRange} ANOS</div>
                  <div className="text-8xl mb-6">
                    {game.engine === 'memory' ? '🎴' : game.category === 'numbers' ? '🔢' : '🎮'}
                  </div>
                  <h3 className="text-3xl font-kids text-center font-black leading-tight">{game.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {playingGame && (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-300">
            <div className="bg-white rounded-[60px] p-8 md:p-12 shadow-2xl border-b-[24px] border-gray-200 text-center relative overflow-hidden">
              {showWin && (
                <div className="absolute inset-0 z-10 bg-emerald-500/95 flex flex-col items-center justify-center text-white animate-in slide-in-from-top-full duration-500">
                  <h2 className="text-7xl font-kids uppercase drop-shadow-md">VOCÊ É DEMAIS!</h2>
                  <p className="text-2xl font-kids mt-2 opacity-90 font-bold">Parabéns pelo excelente trabalho!</p>
                </div>
              )}
              <button onClick={() => setPlayingGame(null)} className="absolute top-8 right-8 text-gray-300 hover:text-red-500 p-2"><X size={48} /></button>
              <h2 className="text-5xl font-kids text-blue-900 font-bold uppercase mb-12 leading-tight">{playingGame.title}</h2>
              
              <div className="p-8 md:p-16 bg-blue-50/50 rounded-[50px] border-4 border-dashed border-blue-200">
                {playingGame.engine === 'memory' ? (
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
                    {memoryCards.map((card) => (
                      <div 
                        key={card.id} 
                        onClick={() => handleCardClick(card.id)}
                        className={`aspect-square cursor-pointer rounded-3xl border-b-8 transition-all flex items-center justify-center text-5xl md:text-6xl shadow-xl ${flippedCards.includes(card.id) || matchedPairs.includes(card.id) ? 'bg-white border-blue-200' : 'bg-blue-500 border-blue-700 active:scale-95'}`}
                      >
                        {(flippedCards.includes(card.id) || matchedPairs.includes(card.id)) ? card.content : '?'}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-12">
                    <p className="text-4xl font-kids text-blue-800 font-bold">Encontre a cor correta!</p>
                    <div className="w-32 h-32 bg-emerald-500 rounded-full mx-auto border-4 border-white shadow-xl"></div>
                    <div className="grid grid-cols-2 gap-8">
                       <button onClick={() => handleGameAnswer(true)} className="p-12 bg-emerald-100 rounded-[40px] border-b-8 border-emerald-200 text-6xl hover:bg-emerald-200 transition-colors">✅</button>
                       <button onClick={() => alert('Quase lá! Tente de novo!')} className="p-12 bg-red-100 rounded-[40px] border-b-8 border-red-200 text-6xl hover:bg-red-200 transition-colors">❌</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 animate-in fade-in duration-500">
            {VIDEOS.map(v => (
              <div key={v.id} className="bg-white p-6 rounded-[60px] shadow-2xl hover:-translate-y-4 transition-all group cursor-pointer border-b-[16px] border-gray-100">
                <div className="relative overflow-hidden rounded-[45px]">
                  <img src={v.thumbnail} className="w-full aspect-video object-cover" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 p-8 rounded-full"><Play size={60} className="text-rose-500" fill="currentColor" /></div>
                  </div>
                </div>
                <h3 className="font-kids text-2xl text-blue-900 mt-8 font-black text-center leading-tight">{v.title}</h3>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'music' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in duration-500">
            {SONGS.map(song => (
              <button key={song.id} className="p-8 bg-white rounded-[40px] border-b-[12px] border-gray-200 shadow-xl hover:-translate-y-2 transition-all flex items-center gap-6 group">
                <div className="p-4 bg-violet-100 text-violet-500 rounded-2xl group-hover:bg-violet-500 group-hover:text-white transition-colors"><Play fill="currentColor" size={32} /></div>
                <p className="font-kids font-bold text-xl text-left truncate">{song.title}</p>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'parents' && (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500">
            <div className="bg-white p-12 md:p-16 rounded-[80px] shadow-2xl border-b-[30px] border-pink-100">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-kids text-pink-600 font-black uppercase mb-4">Diário BabyPop</h2>
                <p className="text-xl font-kids text-pink-300 font-bold uppercase tracking-widest">Guarde momentos mágicos em família</p>
              </div>

              <div className="space-y-10">
                <div className="bg-pink-50/30 p-8 rounded-[60px] border-b-8 border-pink-50">
                  <label className="block text-2xl font-kids text-pink-700 font-black mb-6">Qual foi a descoberta de hoje?</label>
                  <textarea 
                    value={newNote} 
                    onChange={(e) => setNewNote(e.target.value)} 
                    className="w-full p-8 text-2xl rounded-[40px] border-4 border-white outline-none font-kids min-h-[300px] shadow-inner focus:ring-4 focus:ring-pink-200 transition-all" 
                    placeholder="Escreva aqui sobre o seu pequeno..."
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <button 
                    onClick={() => { 
                      if(!newNote.trim()) return; 
                      const updated = [{id: Date.now(), date: new Date().toLocaleDateString('pt-BR'), text: newNote}, ...diaryEntries];
                      saveToLocalStorage(updated);
                      setNewNote(''); 
                      alert('Memória guardada com carinho!');
                    }} 
                    className="bg-pink-500 text-white px-12 py-6 rounded-full font-kids text-3xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 border-b-8 border-pink-700"
                  >
                    <Download size={36} /> Salvar Memória
                  </button>
                  
                  <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-[30px] border-2 border-emerald-100">
                    <ShieldCheck className="text-emerald-500" size={36} />
                    <p className="text-sm font-bold text-emerald-800 leading-tight">100% Privado: Seus dados nunca saem deste aparelho.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="p-20 mt-auto border-t-[12px] bg-[#FFD700] border-[#FDB813]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <Logo size="sm" />
            <p className="font-kids font-black mt-4 text-2xl text-yellow-900 tracking-tight">Aprendendo Brincando, Vivendo com Amor</p>
            <p className="mt-2 text-yellow-800/60 font-bold uppercase text-xs tracking-widest">© BabyPop World 2024</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="p-6 bg-red-600 text-white rounded-[30px] shadow-xl border-b-[8px] border-red-800 hover:scale-110 active:translate-y-2 transition-all"><Youtube size={32}/></a>
            <a href="#" className="p-6 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 text-white rounded-[30px] shadow-xl border-b-[8px] border-purple-800 hover:scale-110 active:translate-y-2 transition-all"><Instagram size={32}/></a>
            <a href="#" className="p-6 bg-black text-white rounded-[30px] shadow-xl border-b-[8px] border-gray-800 hover:scale-110 active:translate-y-2 transition-all"><TikTokIcon size={32}/></a>
          </div>
        </div>
      </footer>

      {/* Navegação Mobile Fixa */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[100] bg-white/95 backdrop-blur-2xl rounded-[50px] shadow-[0_-15px_60px_rgba(0,0,0,0.2)] p-4 flex justify-between items-center border-b-4 border-gray-100">
        {[
          { id: 'home', icon: HomeIcon, color: 'bg-orange-400' },
          { id: 'videos', icon: VideoIcon, color: 'bg-rose-400' },
          { id: 'games', icon: Gamepad2, color: 'bg-emerald-400' },
          { id: 'music', icon: Music, color: 'bg-violet-400' },
          { id: 'parents', icon: Heart, color: 'bg-pink-400' }
        ].map(item => (
          <button key={item.id} onClick={() => {setActiveTab(item.id); setPlayingGame(null);}} className={`p-4 rounded-[25px] transition-all ${activeTab === item.id ? `${item.color} text-white scale-110 shadow-lg -translate-y-4` : 'text-gray-400 hover:text-gray-600'}`}>
            <item.icon size={28} />
          </button>
        ))}
      </div>
    </div>
  );
}
