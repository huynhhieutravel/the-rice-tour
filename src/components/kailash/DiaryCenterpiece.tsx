import { useState, useEffect } from 'react';
import { Shield, MapPin, Quote } from 'lucide-react';

export default function DiaryCenterpiece() {
  const [activeCover, setActiveCover] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayCover, setDisplayCover] = useState(0);

  // Handle smooth transition without framer-motion
  useEffect(() => {
    if (activeCover !== displayCover) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayCover(activeCover);
        setIsAnimating(false);
      }, 300); // Wait for fade out
      return () => clearTimeout(timer);
    }
  }, [activeCover, displayCover]);

  const PORTRAIT_COVERS = [
    {
      title: "MÂY TRÊN ĐỈNH KHARDUNG LA",
      vibe: "Gió Lạnh Tuyết Trắng — 5,359m",
      imageUrl: "https://media.fittour.vn/uploads/trai-nghiem-choi-tuyet-khardungla-kailash.webp",
      quote: "Ở độ cao nghẹt thở này, hơi thở tôi mỏng mảnh nhưng khát khao của tôi lại dày dặn hơn bao giờ hết. Khi gió quất lạnh buốt, tôi tự hào vì gối mình không quỵ ngã.",
      badge: "ACTIVE EXPLORER",
      coordinates: "34.2787° N, 77.6047° E",
      link: "/co-may",
      shortTitle: "Cô Mây U70",
      author: "Cloudy May • 1958",
      authorDesc: "Phượt thủ 68 tuổi"
    },
    {
      title: "BẦU TRỜI GẦN HƠN MẶT ĐẤT",
      vibe: "Biển Mây & Tu Viện — 3,600m",
      imageUrl: "https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-kailash.webp",
      quote: "Khám phá Kailash qua Pangong, Nubra, những con đèo hùng vĩ và các câu chuyện đời thường khiến hành trình ở lại rất lâu trong ký ức.",
      badge: "CULTURAL IMMERSION",
      coordinates: "34.0560° N, 77.6667° E",
      link: "/nhat-ky-kham-pha-kailash",
      shortTitle: "Khám Phá",
      author: "Nhật Ký Kailash",
      authorDesc: "Ghi chép hành trình"
    },
    {
      title: "CẢM XÚC Ở HIMALAYAS",
      vibe: "Cung Đường Tuyệt Mỹ — 4,225m",
      imageUrl: "https://media.fittour.vn/uploads/2024/01/nhat-ky-trai-nghiem-du-lich-kailash-bang-xe-may.webp",
      quote: "Nhật ký hành trình Kailash bằng xe máy kể lại hành trình 8 ngày qua vùng đất thuộc dãy Himalayas này! Những hình ảnh đặc biệt đầy ấn tượng.",
      badge: "THE RIDER",
      coordinates: "33.7225° N, 78.9158° E",
      link: "/nhat-ky-hanh-trinh-kailash-bang-xe-may",
      shortTitle: "Motor Trip",
      author: "Biker's Journal",
      authorDesc: "Phượt xe máy"
    }
  ];

  return (
    <section className="relative bg-stone-50 py-24 px-4 md:px-8 overflow-hidden border-y border-stone-200 font-sans my-16 rounded-3xl mx-2 md:mx-0">
      
      {/* Animated Background Serif Wordmark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03] z-0">
        <span className="font-serif text-[18vw] font-bold text-stone-900 tracking-tighter uppercase whitespace-nowrap leading-none">
          NHẬT KÝ
        </span>
      </div>

      {/* Ambient colored background lights */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-sky-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Editorial Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16 pb-8 border-b border-stone-200">
          <div className="md:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold block mb-3 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" />
              THE EDITORIAL SPREAD / NHẬT KÝ HÀNH TRÌNH
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 leading-none tracking-tight">
              "Cuộc Đời Là Một Cuốn Phim, Tôi Từ Chối Làm Khán Giả"
            </h2>
          </div>
          
          {/* Interactive Edition Selectors (01 / 02 / 03) */}
          <div className="md:col-span-4 flex md:justify-end gap-3">
            {PORTRAIT_COVERS.map((cover, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCover(idx)}
                className={`flex flex-col items-start px-4 py-2.5 rounded-lg border text-left transition-all duration-300 min-w-[90px] cursor-pointer ${
                  activeCover === idx
                    ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-md'
                    : 'border-stone-200 bg-white text-stone-500 hover:border-stone-300 hover:text-stone-700 shadow-sm'
                }`}
              >
                <span className="font-mono text-xs font-bold block">0{idx + 1}</span>
                <span className="text-[10px] uppercase font-sans tracking-wider font-bold">
                  {cover.shortTitle}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Core Central Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Magazine Specs & Metadata (3 columns) */}
          <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
            
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest block">CHÂN DUNG KHẮC HỌA</span>
              <p className={`font-serif text-2xl font-bold text-stone-900 leading-tight transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {PORTRAIT_COVERS[displayCover].shortTitle}
              </p>
              <div className="h-0.5 w-12 bg-amber-500 mt-2"></div>
            </div>

            <div className="space-y-3 font-mono text-xs text-stone-600">
              <div className="flex justify-between py-1.5 border-b border-stone-200">
                <span>Bộ sưu tập</span>
                <span className="text-stone-900 font-bold">Kailash 2026</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-200">
                <span>Hình thái</span>
                <span className="text-stone-900 font-semibold">Tự truyện du ký</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-200">
                <span>Độ cao trung bình</span>
                <span className="text-stone-900 font-semibold">{'>'} 3,500m</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-200">
                <span>Chuyên mục</span>
                <span className="text-stone-900 font-semibold">Nhật ký FIT Tour</span>
              </div>
            </div>

            {/* Dynamic Coordinate Card */}
            <div className={`bg-white border border-stone-200 shadow-sm p-4 rounded-xl font-mono text-xs text-stone-600 space-y-2 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex items-center gap-2 text-amber-700 font-bold text-[10px]">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse"></span>
                BẢN ĐỒ TỌA ĐỘ
              </div>
              <div>
                <span className="text-stone-500 text-[10px] uppercase block">Kailash GPS Point</span>
                <span className="text-stone-900 font-bold">{PORTRAIT_COVERS[displayCover].coordinates}</span>
              </div>
              <div>
                <span className="text-stone-500 text-[10px] uppercase block">Định danh</span>
                <span className="text-stone-700 italic">{PORTRAIT_COVERS[displayCover].vibe}</span>
              </div>
            </div>

          </div>

          {/* Middle: Golden Framed Magazine Portrait Cover (5 columns) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div
              className={`relative aspect-3/4 w-full max-w-[370px] bg-stone-100 border-4 border-amber-500/30 rounded-2xl shadow-xl p-4 overflow-hidden group transition-all duration-300 transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
              style={{
                boxShadow: "0 25px 50px -12px rgba(218, 175, 90, 0.25)"
              }}
            >
              {/* Fine gold inner wire outline */}
              <div className="absolute inset-2 border border-amber-500/40 rounded-xl z-20 pointer-events-none"></div>

              {/* Absolute Image */}
              <img
                src={PORTRAIT_COVERS[displayCover].imageUrl}
                alt={PORTRAIT_COVERS[displayCover].title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 brightness-[90%] scale-105 group-hover:scale-110"
              />

              {/* High-Fashion Vignette Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent z-10"></div>
              
              {/* Magazine Text Overlay (Top Left) */}
              <div className="absolute top-6 left-6 z-20 text-white font-serif pointer-events-none">
                <span className="font-mono text-[8px] uppercase tracking-widest text-amber-400 block font-bold">
                  FIT TOUR EXCLUSIVE
                </span>
                <h3 className="text-xl font-bold tracking-tight mt-0.5 drop-shadow">
                  DIARY
                </h3>
              </div>

              {/* High-Fashion issue labels (Top Right) */}
              <div className="absolute top-6 right-6 z-20 text-right font-mono text-[8px] text-white/90 pointer-events-none">
                <span>ISSUE 0{displayCover + 1}</span>
                <span className="block mt-0.5 text-amber-400 font-bold bg-amber-400/20 px-1 py-0.5 rounded border border-amber-400/40 uppercase">
                  {PORTRAIT_COVERS[displayCover].badge}
                </span>
              </div>

              {/* Massive Magazine bottom block text */}
              <div className="absolute bottom-6 inset-x-6 z-20 text-left pointer-events-none">
                <div className="flex items-center gap-1 text-[8px] text-amber-400 font-mono tracking-widest block mb-1">
                  <span>PORTRAIT SPREAD</span>
                  <span>•</span>
                  <span>STORY</span>
                </div>
                
                <h4 className="font-serif text-2xl font-bold leading-tight uppercase tracking-tight text-white drop-shadow-md">
                  {PORTRAIT_COVERS[displayCover].title}
                </h4>
                
                <p className="font-sans text-[10px] text-stone-200 line-clamp-2 mt-1.5 italic font-medium leading-relaxed opacity-95">
                  "{PORTRAIT_COVERS[displayCover].quote}"
                </p>
              </div>

              {/* Link overlay */}
              <a href={PORTRAIT_COVERS[displayCover].link} className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-[3px]">
                  <span className="px-6 py-3 border border-amber-600 text-stone-900 font-mono text-xs uppercase tracking-widest bg-white/95 hover:bg-amber-600 hover:text-white transition-colors rounded-full font-bold shadow-xl">
                    Đọc Bài Viết
                  </span>
              </a>
            </div>
          </div>

          {/* Right: Poetic Big Quote & Signature (4 columns) */}
          <div className="lg:col-span-4 space-y-6 order-3">
            
            <div className="bg-white border border-stone-200 shadow-sm p-6 md:p-8 rounded-2xl relative">
              <Quote className="w-8 h-8 text-amber-200 absolute top-4 left-4" />
              
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-stone-500 font-bold block mb-4">
                Trích Đoạn Hành Trình
              </h4>

              <div className={`space-y-4 transition-all duration-300 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <p className="font-serif text-base sm:text-lg text-stone-700 leading-relaxed italic font-medium">
                  "{PORTRAIT_COVERS[displayCover].quote}"
                </p>
                
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-500">Đọc toàn bộ bài viết</span>
                  <a href={PORTRAIT_COVERS[displayCover].link} className="text-amber-700 hover:text-amber-600 underline font-bold block">Tại đây</a>
                </div>
              </div>
            </div>

            {/* Hand written style signet block */}
            <div className={`p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div>
                <span className="font-mono text-[9px] text-amber-700 block font-bold">SIGNATURE OF MEMORY</span>
                <span className="font-serif text-lg font-bold italic text-amber-900 tracking-wide">
                  {PORTRAIT_COVERS[displayCover].author}
                </span>
              </div>
              <div className="text-[10px] font-mono text-stone-600 border border-stone-300 rounded px-2.5 py-1 text-center bg-white shadow-sm">
                {PORTRAIT_COVERS[displayCover].authorDesc}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
