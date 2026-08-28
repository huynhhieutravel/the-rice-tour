import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ChevronLeft, ChevronRight, X, Heart, ShieldCheck, Camera, Sparkles } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  vietnameseTitle: string;
  source: string;
  source: string;
  location: string;
  narrative: string;
  category: 'fauna' | 'landscape' | 'cryo';
}

const ALASKA_PHOTOS: PhotoItem[] = [
  {
    id: 'bear-salmon',
    title: 'Gấu Nâu Hoang Dã',
    vietnameseTitle: 'Gấu Nâu Alaska Trong Tự Nhiên',
    source: 'https://media.fittour.vn/uploads/gau-nau-alaska-trong-thien-nhien-hoang-da.webp',
    location: 'Katmai National Park',
    narrative: 'Nơi những con gấu nâu khổng lồ nặng tới nửa tấn đứng thong dong hàng giờ trên vách đá tung bọt trắng đón lõng chú cá hồi đỏ lội ngược dòng sinh sản hoang dã cực đại.',
    category: 'fauna'
  },
  {
    id: 'glacier-calve',
    title: 'Sông Băng Alaska',
    vietnameseTitle: 'Dãy Núi Tuyết Và Sông Băng Bất Tận',
    source: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
    location: 'Glacier Bay National Park',
    narrative: 'Khung cảnh kỳ vĩ khi những dòng sông băng khổng lồ nối liền với dãy núi tuyết hùng vĩ, tạo nên một tuyệt tác thiên nhiên chỉ có ở Alaska.',
    category: 'cryo'
  },
  {
    id: 'cruise-glacier',
    title: 'Khám Phá Sông Băng',
    vietnameseTitle: 'Du Thuyền Khám Phá Sông Băng',
    source: 'https://media.fittour.vn/uploads/du-thuyen-tham-quan-song-bang-alaska.webp',
    location: 'Kenai Fjords Coastal Waters',
    narrative: 'Hành trình lướt qua những bức tường băng khổng lồ xanh biếc trên tàu du lịch, mang lại cảm giác nhỏ bé và choáng ngợp trước quy mô của tự nhiên.',
    category: 'cryo'
  },
  {
    id: 'aurora-taiga',
    title: 'Cực Quang Alaska',
    vietnameseTitle: 'Cực Quang Tuyệt Mỹ Bầu Trời Bắc',
    source: 'https://media.fittour.vn/uploads/cuc-quang-phuong-bac-tren-bau-troi-alaska.webp',
    location: 'Fairbanks Midnight Dome',
    narrative: 'Sắc xanh và lục ngọc nhảy múa uốn lượn thướt tha giữa khoảng trời đêm, thắp sáng màn đêm băng giá ở vùng cận cực phương Bắc.',
    category: 'landscape'
  },
  {
    id: 'caribou',
    title: 'Tuần Lộc Caribou',
    vietnameseTitle: 'Tuần Lộc Khổng Lồ Trên Lãnh Nguyên',
    source: 'https://media.fittour.vn/uploads/tuan-loc-caribou-tren-lanh-nguyen-alaska.webp',
    location: 'Denali National Park',
    narrative: 'Những đàn tuần lộc Caribou rong ruổi di cư dọc theo lãnh nguyên vô tận, biểu tượng sống động về sức sống bền bỉ ở vùng đất lạnh giá.',
    category: 'fauna'
  },
  {
    id: 'humpback',
    title: 'Vũ Điệu Cá Voi',
    vietnameseTitle: 'Cá Voi Lưng Gù Vùng Biển Cực',
    source: 'https://media.fittour.vn/uploads/ca-voi-lung-gu-tai-vung-bien-alaska.webp',
    location: 'Prince William Sound',
    narrative: 'Thiên hà xanh đen sâu thẳm mở rộng nơi sinh vật khổng lồ nặng hàng chục tấn đột ngột tung mình khỏi bọt sóng xô gập ráng chiều lạnh buốt.',
    category: 'fauna'
  }
];

export default function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<PhotoItem>(ALASKA_PHOTOS[0]);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<PhotoItem | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const nextPhoto = () => {
    const idx = ALASKA_PHOTOS.findIndex(p => p.id === activePhoto.id);
    const nextIdx = (idx + 1) % ALASKA_PHOTOS.length;
    setActivePhoto(ALASKA_PHOTOS[nextIdx]);
  };

  const prevPhoto = () => {
    const idx = ALASKA_PHOTOS.findIndex(p => p.id === activePhoto.id);
    const prevIdx = (idx - 1 + ALASKA_PHOTOS.length) % ALASKA_PHOTOS.length;
    setActivePhoto(ALASKA_PHOTOS[prevIdx]);
  };

  return (
    <div id="alaska-sensory-gallery" className="bg-[#10191B]/95 rounded-3xl border border-white/10 p-6 md:p-8 text-white">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-white/10 gap-4 text-left">
        <div>
          <span className="font-mono text-[11px] md:text-[9px] tracking-[0.45em] text-[#A8D1DB] font-extrabold uppercase block">
            CINEMATIC WILDERNESS EXPOSURES
          </span>
          <h3 className="font-prata text-xl md:text-2xl font-light text-white uppercase tracking-wider mt-1">
            Góc Kính Khoảnh Khắc Cự Cực
          </h3>
          <p className="font-serif italic text-sm md:text-xs text-stone-450">
            Khám phá ống kính chân thật tôn sùng sự hoang dã và hoành vĩ vô biên của Alaska.
          </p>
        </div>

        {/* Categories selector indicator badges */}
        <div className="flex gap-2 text-[10px] md:text-[8px] font-mono tracking-widest uppercase">
          <span className="bg-[#0E2922] text-cyan-200 p-1 px-3.5 rounded border border-cyan-500/20"># Động_Vật</span>
          <span className="bg-blue-950 text-blue-200 p-1 px-3.5 rounded border border-blue-500/20"># Băng_Hà</span>
          <span className="bg-[#241c10] text-[#ecd192] p-1 px-3.5 rounded border-amber-900/40 border"># Núi_Tuyết</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-stretch">
        
        {/* Left Column: Big Interactive Spotlight Carousel */}
        <div className="lg:col-span-8 flex flex-col justify-between relative space-y-4">
          <div className="relative aspect-[16/10] w-full bg-slate-950 rounded-2xl overflow-hidden border border-white/5 group">
            
            <AnimatePresence mode="wait">
              <motion.img
                key={activePhoto.id}
                src={activePhoto.source}
                alt={activePhoto.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover filter contrast-[1.03] saturate-[0.88]"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 p-5 bg-gradient-to-b from-slate-950/40 via-transparent to-transparent flex justify-between items-center text-white pointer-events-none">
              <span className="font-mono text-[11px] md:text-[9px] tracking-widest bg-slate-900/90 p-1.5 px-3 rounded uppercase font-black border border-white/5">
                {activePhoto.location}
              </span>

              <span className="font-mono text-[11px] md:text-[9px] tracking-widest text-[#A8D1DB]">
                CURATED EXPEDITION ART
              </span>
            </div>



            {/* Carousel navigation buttons */}
            <button
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white flex items-center justify-center border border-white/10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white flex items-center justify-center border border-white/10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Photo Title Overlay (Bottom left) */}
            <div className="absolute bottom-5 left-5 text-left pointer-events-none">
              <span className="font-mono text-[10px] md:text-[8px] text-amber-400 font-extrabold uppercase tracking-widest block">
                {activePhoto.title}
              </span>
              <h4 className="font-prata text-lg text-white font-normal uppercase">
                {activePhoto.vietnameseTitle}
              </h4>
            </div>

          </div>

          {/* Row of indicators for rapid select */}
          <div className="flex gap-2 overflow-x-auto py-1.5 custom-scrollbar">
            {ALASKA_PHOTOS.map((ph) => {
              const isActive = ph.id === activePhoto.id;
              return (
                <button
                  key={ph.id}
                  onClick={() => setActivePhoto(ph)}
                  className={`relative aspect-[16/10] w-20 shrink-0 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    isActive ? 'border-amber-400 ring-2 ring-amber-400/35 scale-95' : 'border-white/10 opacity-55 hover:opacity-100'
                  }`}
                >
                  <img src={ph.source} alt={ph.title} className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Camera Metadata & Narrative Story */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-white/10 p-5 text-left">
          
          <div className="space-y-4">

            <div className="space-y-2">
              <span className="font-mono text-[10.5px] md:text-[8.5px] text-[#A8D1DB]/80 tracking-widest font-extrabold uppercase block">
                BẢN KÝ SƯ ẢNH ẤN
              </span>
              <p className="font-serif text-[15px] md:text-[13px] leading-relaxed text-stone-300 text-justify">
                {activePhoto.narrative}
              </p>
            </div>
          </div>

          {/* Golden Badge detailing Fit Tour Arnatic advice */}
          <div className="mt-5 p-3.5 rounded-xl bg-amber-950/45 border border-amber-900/30 text-sm md:text-xs text-amber-200">
            <div className="flex items-center gap-1.5 font-bold font-mono tracking-wider text-[#ecd192] uppercase text-[11px] md:text-[9px] mb-1">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>ARNATIC SERIES ADVICE</span>
            </div>
            <p className="font-serif italic leading-relaxed text-amber-100/90 text-justify">
              "Để bảo tồn khoảnh khắc vĩ đại này, FIT TOUR gợi ý bạn ghé thăm vào khoảng hừng đông từ tháng 6 tới tháng 8 - thời điểm thời tiết ủng hộ tuyệt mỹ và động vật hoang dã tấp nập sôi nổi."
            </p>
          </div>

        </div>

      </div>

      {/* Fullscreen interactive Modal overlay */}
      <AnimatePresence>
        {fullscreenPhoto && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <button
              onClick={() => setFullscreenPhoto(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 border border-white/10 cursor-pointer z-50 shadow-2xl"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10"
            >
              <img 
                src={fullscreenPhoto.source} 
                alt={fullscreenPhoto.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 text-left text-white max-w-xl">
                <span className="font-mono text-[11px] md:text-[9px] text-amber-400 uppercase font-extrabold tracking-widest mb-1 block">
                  📍 {fullscreenPhoto.location} • PHOTO EXPEDITIONS
                </span>
                <h4 className="font-prata text-2xl uppercase text-white font-normal mt-0.5">
                  {fullscreenPhoto.vietnameseTitle}
                </h4>
                <p className="font-serif text-sm opacity-80 leading-relaxed italic mt-1.5">
                  "{fullscreenPhoto.narrative}"
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
