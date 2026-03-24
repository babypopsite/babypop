import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Tv, 
  Music, 
  BookOpen, 
  Gamepad2, 
  ShoppingBag, 
  Star, 
  Cloud, 
  CircleDot,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
  Send,
  Share2,
  Play,
  Ghost
} from 'lucide-react';

// Custom Icons for platforms not in Lucide
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.73.41-1.31 1.07-1.58 1.86-.2.55-.22 1.15-.13 1.74.14.77.55 1.48 1.14 2.01.66.58 1.55.89 2.44.88 1.14-.01 2.21-.61 2.84-1.56.36-.54.55-1.18.56-1.83.02-3.28.01-6.57.01-9.86z"/>
  </svg>
);

const KwaiIcon = () => (
  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">K</div>
);

const RumbleIcon = () => (
  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">R</div>
);

const GettrIcon = () => (
  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">G</div>
);

const SnapchatIcon = () => (
  <div className="w-5 h-5 bg-yellow-400 rounded-sm flex items-center justify-center text-black">
    <Ghost size={14} fill="currentColor" />
  </div>
);

const DailymotionIcon = () => (
  <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center text-[10px] font-bold text-white">D</div>
);

const BehanceIcon = () => (
  <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-[10px]">Bē</div>
);

const PinterestIcon = () => (
  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-[12px]">P</div>
);

type SectionType = 'videos' | 'musics' | 'stories' | 'games' | 'indica';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('videos');

  const generateItems = (count: number, prefix: string) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${prefix}-${i + 1}`,
      title: `${prefix} ${i + 1}`,
      color: [
        'bg-blue-400', 'bg-pink-400', 'bg-yellow-400', 'bg-green-400', 'bg-red-400',
        'bg-purple-400', 'bg-orange-400', 'bg-teal-400', 'bg-indigo-400', 'bg-rose-400'
      ][i % 10]
    }));
  };

  const sections = {
    videos: generateItems(50, 'Vídeo'),
    musics: generateItems(50, 'Música'),
    games: generateItems(50, 'Jogo'),
    stories: generateItems(20, 'História'),
    indica: generateItems(15, 'Oferta'),
  };

  const navItems = [
    { id: 'videos', label: 'Vídeos', icon: <Tv size={32} />, color: 'bg-red-500' },
    { id: 'musics', label: 'Músicas', icon: <Music size={32} />, color: 'bg-blue-500' },
    { id: 'stories', label: 'Histórias', icon: <BookOpen size={32} />, color: 'bg-green-500' },
    { id: 'games', label: 'Jogos', icon: <Gamepad2 size={32} />, color: 'bg-yellow-500' },
    { id: 'indica', label: 'Indica', icon: <ShoppingBag size={32} />, color: 'bg-pink-500' },
  ];

  const socialLinks = [
    { name: 'TikTok', icon: <TikTokIcon />, color: 'bg-black' },
    { name: 'YouTube', icon: <Youtube size={20} />, color: 'bg-red-600' },
    { name: 'Instagram', icon: <Instagram size={20} />, color: 'bg-pink-600' },
    { name: 'Kwai', icon: <KwaiIcon />, color: 'bg-orange-500' },
    { name: 'Telegram', icon: <Send size={20} />, color: 'bg-blue-400' },
    { name: 'WhatsApp', icon: <MessageCircle size={20} />, color: 'bg-green-500' },
    { name: 'Rumble', icon: <RumbleIcon />, color: 'bg-green-700' },
    { name: 'X', icon: <Twitter size={20} />, color: 'bg-black' },
    { name: 'Gettr', icon: <GettrIcon />, color: 'bg-red-600' },
    { name: 'Facebook', icon: <Facebook size={20} />, color: 'bg-blue-800' },
    { name: 'Pinterest', icon: <PinterestIcon />, color: 'bg-red-600' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, color: 'bg-blue-700' },
    { name: 'Behance', icon: <BehanceIcon />, color: 'bg-blue-600' },
    { name: 'Snapchat', icon: <SnapchatIcon />, color: 'bg-yellow-400' },
    { name: 'Dailymotion', icon: <DailymotionIcon />, color: 'bg-blue-900' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-x-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Star className="absolute top-20 left-[10%] text-yellow-200 opacity-40 animate-float" size={48} />
        <Cloud className="absolute top-40 right-[15%] text-white opacity-30 animate-float-delayed" size={120} />
        <CircleDot className="absolute bottom-40 left-[5%] text-pink-200 opacity-30 animate-float-slow" size={64} />
        <Star className="absolute bottom-20 right-[10%] text-blue-200 opacity-40 animate-float" size={48} />
      </div>

      {/* Header Banner */}
      <header className="w-full h-[1440px] md:h-[423px] lg:h-[423px] xl:h-[423px] relative flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-sm z-10">
        <div className="w-[2560px] h-full flex items-center justify-center relative">
          {/* Safe Area Content */}
          <div className="safe-area w-full flex flex-col items-center justify-center text-center px-4">
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-8xl md:text-9xl font-black text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] tracking-tighter mb-4"
            >
              BabyPop
            </motion.h1>
            <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-md max-w-3xl">
              Universo Infantil Educativo: PJ, Mia, Mio e toda a turma! 👶✨
            </p>
            <div className="flex gap-4 mt-8">
              {['#kids', '#nurseryrhymes', '#músicainfantil', '#educaçãoinfantil'].map(tag => (
                <span key={tag} className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 py-6 flex justify-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id as SectionType)}
            className={`flex flex-col items-center gap-2 min-w-[80px] transition-all duration-300 ${
              activeSection === item.id ? 'scale-110' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
              {item.icon}
            </div>
            <span className="font-black text-sm uppercase tracking-wider text-slate-800">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Main Content Grid */}
      <main className="flex-1 w-full p-0 z-10">
        <div className="w-full grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-0">
          <AnimatePresence mode="wait">
            {sections[activeSection].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: (index % 20) * 0.02 }}
                className={`card-vertical relative group overflow-hidden border-4 border-white/10 ${item.color} flex flex-col items-center justify-center p-6`}
              >
                {/* Character Silhouette / Placeholder */}
                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Play size={40} fill="white" className="text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="mt-4 bg-white text-slate-900 px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                    Em Breve
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Share2 className="text-slate-800" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Bio & Social Section */}
      <footer className="w-full bg-slate-900 text-white py-20 px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-black tracking-tighter">BabyPop 🧡</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Infantil educativo, para crianças e toda a família. Diversão em vídeos, músicas, jogos, histórias e lugares incríveis para a imaginação das crianças. 👶✨ Explore coisas novas de um jeito divertido e colorido. 🌈
            </p>
            <div className="flex flex-wrap gap-2">
              {['#kids', '#nurseryrhymes', '#músicainfantil', '#desenhoinfantil', '#educaçãoinfantil', '#paracrianças', '#atividadesinfantis', '#mundoinfantil', '#maesfesteiras', '#aniversarios', '#paisefilhos', '#bebes', '#desenho', '#kidsvideo'].map(tag => (
                <span key={tag} className="text-orange-400 font-bold hover:text-orange-300 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-slate-400">Nossas Redes</h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl ${social.color} hover:scale-105 transition-transform shadow-lg`}
                >
                  {social.icon}
                  <span className="text-[10px] font-bold uppercase truncate w-full text-center">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm font-medium">
          © 2026 BabyPop - Todos os direitos reservados. Criado para divertir e educar.
        </div>
      </footer>
    </div>
  );
}
