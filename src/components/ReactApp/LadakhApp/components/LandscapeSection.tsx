import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mountain, Wind, ChevronRight, BookOpen, Volume2 } from 'lucide-react';

interface LandscapeCard {
  id: string;
  title: string;
  vietnameseTitle: string;
  image: string;
  description: string;
  lore: string;
  vibe: string;
}

const landscapes: LandscapeCard[] = [
  {
    id: 'charyn',
    title: 'Charyn Castle Valley',
    vietnameseTitle: 'Thung Lũng Kiến Trúc Charyn',
    image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
    description: 'A 154-kilometer long canyon of red clay formations, wind-sculpted towers, and mysterious vertical precipices that resemble ancient city walls and battlements.',
    lore: 'Legend says the spirits of the wind gather in the castle crevices at midnight, echoing the sounds of ancient battles or whispering guide maps to lost merchants.',
    vibe: 'Golden hour clay heat, dry wind, majestic heights'
  },
  {
    id: 'ala-archa',
    title: 'Ala-Archa Glacier Peak',
    vietnameseTitle: 'Đỉnh Băng Ala-Archa',
    image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
    description: 'An alpine National Park featuring deep granite gorges, fast-rushing glacier streams, and immense towering mountains of pure Semyonov-Tian-Shansky peaks reaching over 4,800m.',
    lore: 'Archa is a sacred juniper tree used by villagers in purification rituals. Spreading smoke from high valley archa is said to chase off evil eyes.',
    vibe: 'Crisp glacier scent, snow, absolute silence'
  },
  {
    id: 'kolsai',
    title: 'Kolsai Lakes Trio',
    vietnameseTitle: 'Tam Hồ Ngọc Lục Bảo Kolsai',
    image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
    description: 'A structural staircase of three crystal-clear emerald-green lakes nestled between vertical pine forests in the northern Tien Shan slopes.',
    lore: 'Known as the "Pearls of the Northern Tien Shan", the lakes perfectly mirror the clouds and sky, reflecting a twin cosmos where water nymphs make their homes.',
    vibe: 'Emerald reflections, evergreen forest moss, dew'
  }
];

export default function LandscapeSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [inhaleState, setInhaleState] = useState<'idle' | 'inhaling' | 'holding' | 'exhaling'>('idle');

  const startBreathing = () => {
    setInhaleState('inhaling');
    setTimeout(() => {
      setInhaleState('holding');
      setTimeout(() => {
        setInhaleState('exhaling');
        setTimeout(() => {
          setInhaleState('idle');
        }, 3000);
      }, 2000);
    }, 3500);
  };

  return (
    <section id="landscapes-section" className="scroll-mt-12 py-16 px-4 md:px-8 bg-white max-w-6xl mx-auto">
      
      {/* Structural Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gold-250 pb-6 mb-12">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-1 text-gold-600 font-mono text-sm md:text-xs uppercase tracking-widest mb-1.5">
            <Mountain className="w-4 h-4 text-gold-500" />
            <span>Sphere I — Landscapes</span>
          </div>
          <h2 className="font-serif text-3.5xl md:text-5xl font-bold text-gold-900 leading-tight">
            Iconic Landscapes
          </h2>
          <p className="font-serif italic text-sm text-gold-700 mt-1">
            Chân trời vĩ đại nơi thảo nguyên chạm tới những dãy núi thiêng.
          </p>
        </div>
        <div className="max-w-xs text-right">
          <span className="text-[12px] md:text-[10px] uppercase font-mono tracking-wider text-gold-500 block mb-1">Environmental Status</span>
          <span className="text-sm md:text-xs text-gold-800 font-light block leading-relaxed">
            Tian Shan peaks range from 800m to 7,439m altitude. Pure sub-arctic microenvironments.
          </span>
        </div>
      </div>

      {/* Mini Interactive breathing loop widget */}
      <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 mb-10 max-w-2xl mx-auto text-center relative overflow-hidden shadow-sm">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gold-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <span className="font-display font-bold text-sm md:text-xs md:text-xxs tracking-widest text-gold-600 block uppercase mb-1">
          Alpine Atmospheric Meditation
        </span>
        <h4 className="font-serif text-lg font-bold text-gold-900 mb-2">
          Breathe the Pure Air of Kyrgyzstan Peaks
        </h4>
        <p className="text-sm md:text-xs text-gold-700 max-w-md mx-auto mb-5 leading-relaxed">
          The high jailoo pastures have 98.7% oxygen purity. Experience a virtual breathing loop simulated for alpine lungs.
        </p>

        {/* Breathing Circle display */}
        <div className="flex flex-col items-center justify-center relative">
          
          <div className={`w-28 h-28 rounded-full border-2 border-gold-450 flex items-center justify-center transition-all duration-1000 ${
            inhaleState === 'inhaling' ? 'scale-135 bg-gold-200/50' : 
            inhaleState === 'holding' ? 'scale-135 bg-gold-300' :
            inhaleState === 'exhaling' ? 'scale-100 bg-gold-100/30' : 'scale-100 bg-transparent'
          }`}>
            <span className="font-display text-sm md:text-xs md:text-xxs font-bold text-gold-800 uppercase tracking-widest select-none">
              {inhaleState === 'idle' && 'BẮT ĐẦU'}
              {inhaleState === 'inhaling' && 'HÍT VÀO'}
              {inhaleState === 'holding' && 'GIỮ HƠI'}
              {inhaleState === 'exhaling' && 'THỞ RA'}
            </span>
          </div>

          <button
            onClick={startBreathing}
            disabled={inhaleState !== 'idle'}
            className={`mt-6 px-5 py-1.5 rounded-full font-display text-sm md:text-xs md:text-xxs font-bold uppercase tracking-widest cursor-pointer shadow-sm ${
              inhaleState === 'idle'
                ? 'bg-gold-800 text-white hover:bg-gold-700 border border-gold-800' 
                : 'bg-gold-100 border border-gold-200 text-gold-450 cursor-not-allowed'
            }`}
          >
            {inhaleState === 'idle' ? 'Khởi động hít thở' : 'Đang mô phỏng...'}
          </button>
        </div>
      </div>

      {/* Landscape Cards Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {landscapes.map((land) => (
          <div
            key={land.id}
            className="group flex flex-col justify-between bg-gold-50/10 hover:bg-gold-50/40 rounded-2xl border border-gold-200 p-4 transition-all duration-300 hover:shadow-lg"
          >
            <div>
              {/* Card visual frame */}
              <div className="relative aspect-3/2 rounded-xl overflow-hidden border border-gold-200/60 shadow-sm mb-4">
                <img
                  src={land.image}
                  alt={land.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-2 left-3 text-[12px] md:text-[10px] font-mono tracking-widest text-gold-200 uppercase">
                  {land.vibe}
                </span>
              </div>

              {/* Text metadata */}
              <span className="text-[12px] md:text-[10px] font-mono tracking-wider font-semibold text-gold-600 block mb-1">
                {land.vietnameseTitle}
              </span>
              <h3 className="font-serif text-xl font-bold text-gold-900 mb-2 tracking-tight">
                {land.title}
              </h3>
              <p className="text-sm md:text-xs text-gold-800 font-light leading-relaxed mb-4">
                {land.description}
              </p>
            </div>

            {/* Click to expand detail or read legend */}
            <div className="border-t border-gold-200 pt-3">
              {selectedId === land.id ? (
                <div className="bg-gold-100/60 p-3 rounded-lg border border-gold-250 mb-3 text-left">
                  <span className="font-display font-extrabold text-[11px] md:text-[9px] tracking-wider text-gold-700 block mb-1 uppercase flex items-center gap-1">
                    <BookOpen className="w-3 h-3" /> Truyền Thuyết Cổ Bản
                  </span>
                  <p className="text-sm md:text-xs text-gold-900 italic font-medium leading-relaxed">
                    {land.lore}
                  </p>
                </div>
              ) : null}

              <button
                onClick={() => setSelectedId(selectedId === land.id ? null : land.id)}
                className="flex items-center gap-1.5 text-[12px] md:text-[10px] font-display font-bold uppercase tracking-wider text-gold-800 hover:text-gold-900 cursor-pointer focus:outline-none"
              >
                <span>{selectedId === land.id ? 'Ẩn truyền thuyết' : 'Đọc truyền thuyết xưa'}</span>
                <ChevronRight className={`w-3.5 h-3.5 text-gold-600 transition-transform ${selectedId === land.id ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
