import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORIES } from './data';
import Backpack from './components/Backpack';
import PhotoGallery from './components/PhotoGallery';
import FaqSection from './components/FaqSection';
import Guestbook from './components/Guestbook';
import JourneySelection from './components/JourneySelection';
import EmagazineCTA from './components/EmagazineCTA';
import RelatedArticles from './components/RelatedArticles';
import { Calendar, User, Compass, MapPin, Sparkles, BookOpen, Quote, Shield } from 'lucide-react';

export default function App() {
  const [activeCover, setActiveCover] = useState<number>(0);

  const PORTRAIT_COVERS = [
    {
      title: "DÒNG SÔNG ĐÓNG BĂNG",
      vibe: "Tuyến đường Chadar Trek",
      imageUrl: "https://media.fittour.vn/uploads/2023/06/canh-dep-ngo-ngang-o-zanskar.webp",
      quote: "Bước đi trên lớp băng dày của dòng Zanskar, cảm nhận nhịp đập của tự nhiên giữa cái lạnh giá mùa đông.",
      badge: "TRẢI NGHIỆM",
      coordinates: "33.5625° N, 76.9877° E",
      colorTheme: "border-amber-500 text-amber-400 bg-amber-500/10"
    },
    {
      title: "TU VIỆN CỔ KÍNH",
      vibe: "Tâm linh sâu sắc",
      imageUrl: "https://media.fittour.vn/uploads/2023/06/kien-truc-tu-vien-o-ladakh.webp",
      quote: "Sự bình yên tĩnh lặng của tu viện Sani, nơi lưu giữ tinh hoa Phật giáo qua ngàn năm.",
      badge: "TÂM LINH",
      coordinates: "33.4842° N, 76.8402° E",
      colorTheme: "border-red-500 text-red-400 bg-red-500/10"
    },
    {
      title: "THUNG LŨNG XANH",
      vibe: "Sức sống mãnh liệt",
      imageUrl: "https://media.fittour.vn/uploads/2022/10/thung-lung-suru-o-ladakh.webp",
      quote: "Khung cảnh tươi mát, xanh tốt của thung lũng Suru tương phản hoàn toàn với sự khô cằn của hoang mạc.",
      badge: "CẢNH QUAN",
      coordinates: "34.1200° N, 76.0100° E",
      colorTheme: "border-sky-500 text-sky-400 bg-sky-500/10"
    }
  ];
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-150 selection:text-amber-900 overflow-x-hidden antialiased">
      
      {/* 1. CINEMATIC OUTSIZED COVER PAGE */}
      <header className="relative min-h-[100dvh] flex flex-col justify-between items-center bg-stone-950 text-white overflow-hidden p-6 md:p-8">
        
        {/* Background Darkened Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.fittour.vn/uploads/2023/06/canh-dep-ngo-ngang-o-zanskar.webp"
            alt="Thung lũng Zanskar bao la"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-35 scale-105 filter brightness-90 saturate-50"
          />
          {/* Bottom vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
        </div>

        {/* Top Header Row of Magazine */}
        <div className="relative z-10 w-full flex justify-between items-center border-b border-white/10 pb-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-500 animate-spin-slow" />
            <span className="font-mono text-xs uppercase tracking-widest text-stone-300 font-bold">Kinh Nghiệm Du Lịch</span>
          </div>
          <div className="text-right">
            <span className="font-mono text-[10px] text-stone-400 block uppercase">Thể loại</span>
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">Cẩm Nang Khám Phá</span>
          </div>
        </div>

        {/* Hero Title Typography */}
        <div className="relative z-10 text-center max-w-4xl mx-auto my-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>KINH NGHIỆM KHÁM PHÁ TỪ HDV BẢN ĐỊA</span>
          </motion.div>

          <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6 text-center">
            <h1
              id="main-editorial-title"
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 mt-2 block"
            >
              Thung Lũng Zanskar - Vẻ đẹp viễn biên hùng vĩ
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-300 text-sm md:text-base font-serif italic max-w-2xl leading-relaxed mb-8 text-center"
          >
            Trọn bộ kinh nghiệm du lịch thực tế khám phá Thung lũng Zanskar - một trong những vùng đất hẻo lánh và kỳ bí nhất của Ladakh. Cẩm nang tóm gọn lịch trình di chuyển, những ngọn đèo hiểm trở, và hành trình chinh phục dòng sông băng Chadar Trek đầy mê hoặc.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-stone-400 font-mono text-[11px] border-t border-b border-white/5 py-4 px-6 md:px-12 w-fit"
          >
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-500" />
              <span>Chia sẻ bởi: <b>Travel Blogger Huỳnh Hiếu</b></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Điểm đến: <b>Thung Lũng Zanskar</b></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Cập nhật: <b>Năm 2026</b></span>
            </div>
          </motion.div>
        </div>

        {/* Bottom indicator (Scroll Down) */}
        <div className="relative z-10 w-full flex flex-col items-center max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-1 animate-scroll-down text-stone-400 font-mono text-[10px] tracking-widest cursor-pointer">
            <span>CUỘN ĐỂ ĐỌC HƯỚNG DẪN</span>
            <div className="w-1.5 h-6 bg-amber-500/60 rounded-full flex items-start justify-center p-0.5 mt-1.5">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

      </header>

      {/* 2. PROLOGUE SECTION (STATISTICS & DEEP ESSAY) */}
      <section id="prologue" className="relative py-28 px-4 md:px-8 bg-white text-stone-900 border-b border-amber-900/5">
        <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-amber-900 mb-6 uppercase">
              Giới thiệu Thung lũng Zanskar
              </h2>
              
              <div className="prose prose-stone prose-lg max-w-none text-justify font-serif text-stone-600 leading-relaxed marker:text-amber-500">
                <p className="mb-4">
                Có những nơi đẹp vì nổi tiếng, còn Zanskar thì đẹp vì sự hoang sơ và ít dấu chân người. Nằm lọt thỏm giữa lòng Himalaya hùng vĩ, vùng thung lũng này từng bị băng tuyết cô lập suốt nhiều tháng ròng rã mỗi năm. Mãi đến vài năm gần đây, khi những con đường mới được xẻ qua vách núi, Zanskar mới bắt đầu hé lộ vẻ đẹp thực sự của mình với dân mê xê dịch.
                </p>
                <p className="mb-4">
                Đến Zanskar, bạn không đi ngắm cảnh vội vã. Bạn đi để cảm nhận sự tĩnh lặng tuyệt đối. Ở đây chỉ có những tu viện Phật giáo Mật Tông nằm vắt vẻo trên vách đá sừng sững, dòng sông băng Chadar huyền thoại và những con đèo trống vắng. Một thế giới thô ráp, bụi bặm nhưng lại rực rỡ đến nghẹt thở.
                </p>
              </div>

          {/* EXPERT PROFILE BLOCK */}
          <div className="author-card-outer" style={{ marginBottom: '4rem' }}>
            <div className="author-card-box">
              <div className="author-card">
                <img src="https://media.fittour.vn/uploads/huynh-hieu-travel.webp" alt="Huỳnh Hiếu Travel" />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <span className="author-tag">TRAVEL BLOGGER</span>
                    <span className="author-org">KHẢO SÁT HÀNH TRÌNH FIT TOUR</span>
                  </div>
                  <div className="author-name-row">
                    <div className="author-name">Huỳnh Hiếu Travel</div>
                    <a href="/huynh-hieu" className="author-link">Xem hồ sơ chuyên gia</a>
                  </div>
                  <p className="author-bio">Với <strong>đam mê xê dịch</strong> mãnh liệt, tôi luôn khao khát được đặt chân đến những vùng đất mới lạ và kỳ vĩ. Những chia sẻ trong bài viết này được đúc kết từ <strong>chuyến đi thực tế</strong> của tôi trong vai trò một <strong>Travel Blogger</strong> độc lập, đồng thời trực tiếp <strong>khảo sát và thiết kế</strong> các hành trình du lịch tại FIT Tour. Hy vọng những <strong>kinh nghiệm chân thực</strong> này sẽ truyền cảm hứng cho chuyến đi sắp tới của bạn!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical statistical board for the trip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-amber-50/75 border border-amber-900/10 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">3.650m</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Độ cao trung bình</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">240km</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Từ Leh đến Padum</div>
            </div>
            <div className="text-center border-l sm:border-l border-amber-900/10 col-span-1">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">79km</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Sông Stod</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-2xl md:text-3xl font-bold text-amber-800">&lt; -20°C</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Nhiệt độ mùa đông</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. STORIES NARRATIVE CHAPTERS PROGRESSION */}
      <section id="chapters" className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {STORIES.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={story.id}
                id={`story-chapter-${story.id}`}
                className="py-20 md:py-28 border-b border-stone-200/60 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Chapter label indicator */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl font-bold text-amber-900 tracking-widest">{story.number}</span>
                      <div className="h-0.5 w-10 bg-amber-700/25"></div>
                      <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-extrabold">{story.locationName}</span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                      {story.title}
                    </h3>
                    
                    <p className="font-mono text-xs text-amber-800 italic uppercase tracking-wider font-semibold">
                      {story.subtitle}
                    </p>

                    <p className="font-serif font-semibold text-stone-600 text-sm md:text-base leading-relaxed border-l-3 border-amber-700 pl-4 py-1 italic bg-amber-50/40 pr-3 rounded" dangerouslySetInnerHTML={{ __html: story.abstract }} />

                    <div className="space-y-4 text-stone-700 text-sm md:text-base font-serif leading-relaxed text-justify">
                      {story.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className={pIdx === 0 ? "drop-cap" : ""} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </div>

                    {/* Pullout quote */}
                    {story.quote && (
                      <div id={`quote-${story.id}`} className="bg-gradient-to-br from-amber-50/80 to-stone-50 p-6 rounded-2xl border border-amber-950/5 shadow-inner mt-8">
                        <span className="font-serif text-5xl leading-none text-amber-600 font-bold block h-3 -mt-3">“</span>
                        <p className="font-serif text-sm text-stone-700 italic pl-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: story.quote }} />
                      </div>
                    )}

                  </div>

                  {/* Photo Column with Polaroid Styling */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white p-4 pb-12 shadow-xl border border-stone-200/80 transform hover:rotate-1 hover:scale-[1.01] transition-all duration-300 relative inline-block w-full">
                      
                      {/* Decorative scotch tape on corners */}
                      <div className="absolute -top-3 left-12 w-24 h-6 bg-white/60 text-stone-400 font-mono text-[9px] uppercase tracking-wider text-center pt-1 border border-stone-150 rotate-2 pointer-events-none shadow-sm shadow-stone-100">
                        MEMORIES DECK
                      </div>

                      {/* Frame container */}
                      <div className="aspect-video overflow-hidden bg-stone-100 border border-stone-150 rounded-sm">
                        <img
                          src={story.imgUrl}
                          alt={story.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover filter saturate-[85%]"
                        />
                      </div>

                      {/* Polaroid Handwriting Description label */}
                      <div className="mt-6 text-left pl-1">
                        <span className="font-serif text-[11px] text-amber-800 uppercase font-bold flex items-center gap-1.5 mb-1.5 font-mono">
                          <MapPin className="w-3.5 h-3.5" />
                          Góc Nhìn Thực Tế Tại Zanskar
                        </span>
                        <p className="font-serif text-stone-700 italic text-sm leading-relaxed">
                          Chương {story.number}: Những trải nghiệm độc bản tại Thung lũng Zanskar.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
          
        </div>
      </section>

      {/* 2.5 EDITORIAL CENTER PORTRAIT SPREAD */}
      <section id="vogue-portrait-centerpiece" className="relative bg-stone-950 py-28 px-4 md:px-8 overflow-hidden border-y border-stone-900">
        
        {/* Animated Background Serif Wordmark */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-5 z-0">
          <span className="font-serif text-[18vw] font-bold text-white tracking-tighter uppercase whitespace-nowrap leading-none">
            ZANSKAR
          </span>
        </div>

        {/* Ambient colored background lights */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-sky-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Section Editorial Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16 pb-8 border-b border-stone-800">
            <div className="md:col-span-8">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold block mb-3 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" />
                HƯỚNG DẪN THỰC TẾ / TỪ HDV FIT TOUR
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-none tracking-tight">
                "Vẻ Đẹp Hoang Sơ Của Zanskar"
              </h2>
            </div>
            
            {/* Interactive Edition Selectors (01 / 02 / 03) */}
            <div className="md:col-span-4 flex md:justify-end gap-3">
              {PORTRAIT_COVERS.map((cover, idx) => (
                <button
                  key={idx}
                  id={`vogue-tab-trigger-${idx}`}
                  onClick={() => setActiveCover(idx)}
                  className={`flex flex-col items-start px-4 py-2.5 rounded-lg border text-left transition-all duration-300 min-w-[90px] cursor-pointer relative group ${
                    activeCover === idx
                      ? 'border-amber-500 bg-amber-500/10 text-white shadow-lg'
                      : 'border-stone-800 bg-stone-900/40 text-stone-400 hover:border-amber-500/50 hover:text-amber-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold block">0{idx + 1}</span>
                  <span className="text-[10px] uppercase font-sans tracking-wider font-semibold active:text-amber-400">
                    {idx === 0 ? "Sông Băng" : idx === 1 ? "Tu Viện" : "Thung Lũng"}
                  </span>
                  <span className="absolute -top-3 -right-2 bg-amber-500 text-stone-900 text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Bấm để xem</span>
                </button>
              ))}
            </div>
          </div>

          {/* Core Central Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Magazine Specs & Metadata (3 columns) */}
            <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
              
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">CHIA SẺ BỞI</span>
                <p className="font-serif text-2xl font-semibold text-white leading-tight">Huỳnh Hiếu</p>
                <div className="h-0.5 w-12 bg-amber-500 mt-2"></div>
              </div>

              <div className="space-y-3 font-mono text-xs text-stone-400">
                <div className="flex justify-between py-1.5 border-b border-stone-900">
                  <span>Trải nghiệm</span>
                  <span className="text-white font-bold">Khảo sát & Thiết kế</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-900">
                  <span>Địa điểm chính</span>
                  <span className="text-white font-semibold">Thung Lũng Zanskar</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-900">
                  <span>Khẩu độ / Shutter</span>
                  <span className="text-white font-semibold">1/125s ISO 200</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-900">
                  <span>Thời gian</span>
                  <span className="text-white font-semibold">Mùa thu 2026</span>
                </div>
              </div>

              {/* Dynamic Coordinate Card */}
              <div className="bg-stone-900/60 border border-stone-800 p-4 rounded-xl font-mono text-xs text-stone-300 space-y-2">
                <div className="flex items-center gap-2 text-amber-500 font-bold text-[10px]">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                  BẢN ĐỒ TỌA ĐỘ
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] uppercase block">Zanskar GPS Point</span>
                  <span className="text-white font-bold">{PORTRAIT_COVERS[activeCover].coordinates}</span>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] uppercase block">Định danh ảnh chụp</span>
                  <span className="text-stone-300 italic">{PORTRAIT_COVERS[activeCover].vibe}</span>
                </div>
              </div>

            </div>

            {/* Middle: Golden Framed Magazine Portrait Cover (5 columns) */}
            <div id="vogue-central-cover-frame" className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCover}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-3/4 w-full max-w-[370px] bg-stone-900 border-4 border-amber-500/20 rounded-2xl shadow-2xl p-4 overflow-hidden group"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(218, 175, 90, 0.15)"
                  }}
                >
                  {/* Fine gold inner wire outline */}
                  <div className="absolute inset-2 border border-amber-500/30 rounded-xl z-20 pointer-events-none"></div>

                  {/* Absolute Image */}
                  <img
                    src={PORTRAIT_COVERS[activeCover].imageUrl}
                    alt={PORTRAIT_COVERS[activeCover].title}
                    referrerPolicy="referrer"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 brightness-[85%] scale-102 group-hover:scale-105"
                  />

                  {/* High-Fashion Vignette Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent z-10"></div>
                  
                  {/* Magazine Text Overlay (Top Left) */}
                  <div className="absolute top-6 left-6 z-25 text-white font-serif pointer-events-none">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-amber-400 block font-semibold">
                      ZANSKAR EXCLUSIVE
                    </span>
                    <h3 className="text-xl font-bold tracking-tight mt-0.5 drop-shadow">
                      FIT TOUR
                    </h3>
                  </div>

                  {/* High-Fashion issue labels (Top Right) */}
                  <div className="absolute top-6 right-6 z-25 text-right font-mono text-[8px] text-white/70 pointer-events-none">
                    <span>ISSUE 02</span>
                    <span className="block mt-0.5 text-amber-400 font-bold bg-amber-400/10 px-1 py-0.5 rounded border border-amber-400/20 uppercase">
                      {PORTRAIT_COVERS[activeCover].badge}
                    </span>
                  </div>

                  {/* Massive Magazine bottom block text */}
                  <div className="absolute bottom-6 inset-x-6 z-25 text-left pointer-events-none">
                    <div className="flex items-center gap-1 text-[8px] text-amber-400 font-mono tracking-widest block mb-1">
                      <span>NATURE GUIDE</span>
                      <span>•</span>
                      <span>LADAKH</span>
                    </div>
                    
                    <h4 className="font-serif text-2xl font-bold leading-tight uppercase tracking-tight text-white drop-shadow-md">
                      {PORTRAIT_COVERS[activeCover].title}
                    </h4>
                    
                    <p className="font-sans text-[10px] text-stone-300 line-clamp-2 mt-1.5 italic font-medium leading-relaxed opacity-95">
                      "{PORTRAIT_COVERS[activeCover].quote}"
                    </p>
                  </div>

                  {/* Film Grain overlay effect (simulated) */}
                  <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-stone-900 to-black z-15"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Poetic Big Quote & Signature (4 columns) */}
            <div className="lg:col-span-4 space-y-6 order-3">
              
              <div className="bg-stone-900/40 border border-stone-850 p-6 md:p-8 rounded-2xl relative">
                <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 left-4" />
                
                <h4 className="font-mono text-[9px] uppercase tracking-widest text-stone-400 font-bold block mb-4">
                  Ghi chép từ người dẫn đường
                </h4>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCover}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <p className="font-serif text-base sm:text-lg text-stone-200 leading-relaxed italic">
                      "{PORTRAIT_COVERS[activeCover].quote}"
                    </p>
                    
                    <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-400">Trích đoạn hướng dẫn</span>
                      <span className="text-amber-500 font-bold block">Huỳnh Hiếu</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Hand written style signet block */}
              <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-stone-400 block">TOUR DESIGNER</span>
                  <span className="font-serif text-lg font-bold italic text-amber-400 font-medium tracking-wide">
                    Hieu Huynh • FIT Tour
                  </span>
                </div>
                <div className="text-[10px] font-mono text-stone-400 border border-stone-800/80 rounded px-2.5 py-1 text-center bg-stone-900">
                  Bespoke Travel
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. BACKPACK COMPONENT PLACEHOLDER */}
      <Backpack />

      {/* 6. PHOTO GALLERY COMPONENT PLACEHOLDER */}
      <PhotoGallery />

      {/* EMAGAZINE CTA */}
      <EmagazineCTA />

      {/* FAQ SECTION */}
      <FaqSection />

      {/* SERIES */}
      <RelatedArticles />

      {/* 7. GUESTBOOK BOARD COMPONENT PLACEHOLDER */}
      <Guestbook />

      {/* LỰA CHỌN HÀNH TRÌNH */}
      <JourneySelection />

      {/* 8. EDITORIAL CONCLUSION FOOTER */}
      <footer className="bg-stone-950 text-white py-24 px-4 md:px-8 border-t border-amber-900/10 relative overflow-hidden">
        
        {/* Abstract light decoration */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <BookOpen className="w-10 h-10 text-amber-500 mx-auto mb-6 animate-pulse" />
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Lưu ý thiết thực khi đến Zanskar
          </h3>
          
          <p className="max-w-2xl mx-auto text-sm md:text-base font-serif italic text-stone-400 leading-relaxed mb-12 text-center">
            "Hãy giữ ấm tuyệt đối và luôn đi cùng hướng dẫn viên của FIT Tour để đảm bảo an toàn. Zanskar không chỉ là một điểm ngắm cảnh, đó là một hành trình vượt qua giới hạn bản thân để chạm đến vùng đất vắng bóng người kỳ bí nhất Ladakh."
          </p>

          

        </div>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0, margin: "-50% 0px 0px 0px" }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 bg-amber-500 text-stone-900 rounded-full shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:scale-110 transition-all border border-amber-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
      </motion.button>
    </div>
  );
}
