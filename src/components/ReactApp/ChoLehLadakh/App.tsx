import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORIES } from './data';
import MemoryMap from './components/MemoryMap';
import Backpack from './components/Backpack';
import PhotoGallery from './components/PhotoGallery';
import Guestbook from './components/Guestbook';
import FaqSection from './components/FaqSection';
import SignatureTour from './components/SignatureTour';
import RelatedArticles from './components/RelatedArticles';
import { Calendar, User, Compass, MapPin, Sparkles, BookOpen, Quote, Shield, Home, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeCover, setActiveCover] = useState<number>(0);

  const PORTRAIT_COVERS = [
    {
      title: "NHỊP SỐNG GÓC PHỐ",
      vibe: "Thành phố đi bộ không xe cộ",
      imageUrl: "https://media.fittour.vn/uploads/2022/06/con-pho-chinh-o-leh-ladakh.webp",
      quote: "Chợ Leh không đơn thuần là điểm để tiêu tiền, đó là nơi tuyệt vời để sống chậm lại và hít căng lồng ngực không khí cao nguyên.",
      badge: "TRẢI NGHIỆM",
      coordinates: "34.1642° N, 77.5848° E",
      colorTheme: "border-amber-500 text-amber-400 bg-amber-500/10"
    },
    {
      title: "GỢI Ý MUA SẮM",
      vibe: "Pashmina, Yak & Thảo dược",
      imageUrl: "https://media.fittour.vn/uploads/2022/06/ba-cu-ban-hang-rong-o-leh-ladakh.webp",
      quote: "Nếu bạn đang tìm kiếm những món quà mang đậm dấu ấn bản địa và thiết thực, chợ Leh là một kho báu thực sự.",
      badge: "QUÀ TẶNG",
      coordinates: "34.1645° N, 77.5852° E",
      colorTheme: "border-red-500 text-red-400 bg-red-500/10"
    },
    {
      title: "ẨM THỰC ĐỊA PHƯƠNG",
      vibe: "Bánh Momo & Mì Thukpa",
      imageUrl: "https://media.fittour.vn/uploads/2022/06/duong-pho-dong-duc-leh-ladakh.webp",
      quote: "Ẩm thực ở Leh là sự giao thoa hài hòa giữa Tây Tạng và Ấn Độ, giản dị, không cầu kỳ nhưng làm ấm cơ thể ngay tức thì.",
      badge: "ĂN UỐNG",
      coordinates: "34.1640° N, 77.5840° E",
      colorTheme: "border-sky-500 text-sky-400 bg-sky-500/10"
    }
  ];
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-150 selection:text-amber-900 overflow-x-hidden antialiased">
      
      {/* 1. CINEMATIC OUTSIZED COVER PAGE */}
      <header className="relative h-screen flex flex-col justify-between items-center bg-stone-950 text-white overflow-hidden p-6 md:p-8">
        
        {/* Background Darkened Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.fittour.vn/uploads/2022/06/trung-tam-leh-ladakh-nhin-ra-den-co.webp"
            alt="Chợ chính Leh Ladakh về đêm"
            referrerPolicy="no-referrer"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-35 scale-105 filter brightness-90 saturate-50"
          />
          {/* Bottom vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
        </div>

        {/* Top Breadcrumb Row */}
        <div className="relative z-10 w-full flex items-center border-b border-white/10 pb-4 pt-4 max-w-7xl mx-auto text-xs font-mono tracking-widest text-stone-300">
          <a href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1"><Home className="w-3.5 h-3.5"/> Trang Chủ</a>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-stone-500" />
          <a href="/kinh-nghiem-du-lich-nuoc-ngoai/" className="hover:text-amber-400 transition-colors">Cẩm Nang</a>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-stone-500" />
          <span className="text-amber-400 font-bold truncate max-w-[200px] sm:max-w-none">Chợ Leh Ladakh</span>
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
            <span>KINH NGHIỆM ĐI CHỢ TỪ HDV BẢN ĐỊA</span>
          </motion.div>

          <h1
            id="main-editorial-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 text-center"
          >
            Chợ Leh Ladakh <span className="sr-only"> - </span> <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 text-3xl md:text-5xl lg:text-6xl mt-2 block pb-2 sm:pb-4">
              Có gì vui, mua gì, làm gì ở đó
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-300 text-sm md:text-base font-serif max-w-3xl leading-relaxed mb-8"
          >
            Khám phá khu chợ trung tâm Leh Ladakh sầm uất: từ những món đồ lưu niệm thủ công tinh xảo, trang sức đá quý, pashmina đến các trải nghiệm ẩm thực đường phố đặc sắc. Bỏ túi ngay kinh nghiệm mua sắm, trả giá và dạo chơi tại trái tim của "Tiểu Tây Tạng" từ hướng dẫn viên bản địa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-stone-400 font-mono text-[11px] border-t border-b border-white/5 py-4 px-6 md:px-12 w-fit"
          >
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-500" />
              <span>Chia sẻ bởi: <b>HDV Huỳnh Hiếu</b></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Điểm đến: <b>Trung tâm Leh</b></span>
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
          
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">Về bài viết này</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-stone-900">
              Tổng quan khu chợ chính Leh (Main Bazaar)
            </h2>
            <div className="w-12 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          </div>

          <div className="space-y-6 text-stone-700 font-serif leading-relaxed text-base md:text-lg mb-12 text-justify">
            <p className="drop-cap">
              Những chia sẻ dưới đây được đúc kết từ chuyến đi thực tế của tôi trong quá trình khảo sát và thiết kế các hành trình du lịch tại FIT Tour. Xây dựng các chuyến đi theo triết lý "Bespoke" – chú trọng chiều sâu văn hóa và hoàn toàn vắng bóng các điểm mua sắm ép buộc thương mại.
            </p>
            <p>
              Tôi tin rằng vẻ đẹp nguyên bản của một chuyến đi khám phá Ladakh luôn nằm ở nụ cười, nếp sống thường nhật và những món đồ thủ công đượm mồ hôi của người bản xứ ngay tại chính khu chợ địa phương này. Kể từ khi được quy hoạch thành phố đi bộ cấm hoàn toàn xe cộ, Leh Main Bazaar đã gạt bỏ được sự ồn ào, khói bụi để trả lại một không gian văn hóa sống động và đậm chất thiền định.
            </p>
          </div>

          {/* EXPERT PROFILE BLOCK */}
          <div className="mb-16 bg-stone-50/80 border border-stone-200/60 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-sm relative overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl"></div>
            
            <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
              <img 
                src="https://media.fittour.vn/uploads/huynh-hieu-travel.webp" 
                alt="Huỳnh Hiếu Travel" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-4 relative z-10">
              <div>
                <span className="font-mono text-[10px] text-stone-600 uppercase tracking-widest block mb-1">VỀ TÁC GIẢ</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Huỳnh Hiếu Travel</h3>
                <span className="font-mono text-xs text-amber-700 uppercase tracking-widest font-semibold mt-1 block">Travel Blogger / Khảo sát hành trình FIT Tour</span>
              </div>
              <p className="font-serif text-stone-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
                Với đam mê xê dịch mãnh liệt, tôi luôn khao khát được đặt chân đến những vùng đất kỳ vĩ như Ladakh hay Tây Tạng. Những chia sẻ trong bài viết này được đúc kết từ chuyến đi thực tế của tôi trong vai trò một du khách, đồng thời khảo sát và thiết kế các hành trình du lịch tại FIT Tour. Hy vọng những kinh nghiệm dạo bộ và mua sắm tại chợ Leh này sẽ giúp ích cho chuyến đi sắp tới của bạn!
              </p>
            </div>
          </div>

          {/* Graphical statistical board for the trip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-amber-50/75 border border-amber-900/10 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">100%</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Đi Bộ Không Xe Cộ</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">3.500m</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Độ Cao Trung Tâm</div>
            </div>
            <div className="text-center border-l sm:border-l border-amber-900/10 col-span-1">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">10-20%</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Mức Giá Mặc Cả</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">16:00</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Giờ Vàng Dạo Chợ</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2.5 EDITORIAL CENTER PORTRAIT SPREAD */}
      <section id="vogue-portrait-centerpiece" className="relative bg-stone-950 py-28 px-4 md:px-8 overflow-hidden border-y border-stone-900">
        
        {/* Animated Background Serif Wordmark */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-5 z-0">
          <span className="font-serif text-[18vw] font-bold text-white tracking-tighter uppercase whitespace-nowrap leading-none">
            LEH BAZAAR
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
                "Kinh Nghiệm Sống Chậm Tại Góc Phố Cao Nguyên"
              </h2>
            </div>
            
            {/* Interactive Edition Selectors (01 / 02 / 03) */}
            <div className="md:col-span-4 flex md:justify-end gap-3">
              {PORTRAIT_COVERS.map((cover, idx) => (
                <button
                  key={idx}
                  id={`vogue-tab-trigger-${idx}`}
                  onClick={() => setActiveCover(idx)}
                  className={`flex flex-col items-start px-4 py-2.5 rounded-lg border text-left transition-all duration-300 min-w-[90px] cursor-pointer ${
                    activeCover === idx
                      ? 'border-amber-500 bg-amber-500/10 text-white shadow-lg'
                      : 'border-stone-800 bg-stone-900/40 text-stone-400 hover:border-stone-700 hover:text-stone-300'
                  }`}
                >
                  <span className="font-mono text-xs font-bold block">0{idx + 1}</span>
                  <span className="text-[10px] uppercase font-sans tracking-wider font-semibold active:text-amber-400">
                    {idx === 0 ? "Bình Yên" : idx === 1 ? "Thủ Công" : "Ẩm Thực"}
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
                  <span className="text-white font-semibold">Leh Main Bazaar</span>
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
                  <span className="text-stone-400 text-[10px] uppercase block">Leh GPS Point</span>
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
                      LEH EXCLUSIVE
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
                      <span>SHOPPING GUIDE</span>
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

                    <p className="font-serif font-semibold text-stone-700 text-sm md:text-base leading-relaxed border-l-3 border-amber-700 pl-4 py-1 italic bg-amber-50/40 pr-3 rounded" dangerouslySetInnerHTML={{ __html: story.abstract }} />

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
                      <div className="aspect-4/3 overflow-hidden bg-stone-100 border border-stone-150 rounded-sm">
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
                          Góc Nhìn Thực Tế Từ Chợ Leh
                        </span>
                        <p className="font-serif text-stone-700 italic text-sm leading-relaxed">
                          Chương {story.number}: Kinh nghiệm dạo chợ và mua sắm hữu ích nhất dành cho du khách.
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

      {/* 4. INTERACTIVE MEMORY MAP COMPONENT PLACEHOLDER */}
      <MemoryMap />

      {/* 5. BACKPACK COMPONENT PLACEHOLDER */}
      <Backpack />

      {/* 6. PHOTO GALLERY COMPONENT PLACEHOLDER */}
      <PhotoGallery />

      {/* FAQ SECTION */}
      <FaqSection />

      {/* 7. GUESTBOOK BOARD COMPONENT PLACEHOLDER */}
      <Guestbook />

            {/* RELATED ARTICLES */}
      <RelatedArticles />

      {/* SIGNATURE TOUR CTA */}
      <SignatureTour />

      {/* 8. EDITORIAL CONCLUSION FOOTER */}
      <footer className="bg-stone-950 text-white py-24 px-4 md:px-8 border-t border-amber-900/10 relative overflow-hidden">
        
        {/* Abstract light decoration */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <BookOpen className="w-10 h-10 text-amber-500 mx-auto mb-6 animate-pulse" />
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Lưu ý thiết thực khi dạo chợ
          </h3>
          
          <p className="max-w-2xl mx-auto text-sm md:text-base font-serif italic text-stone-400 leading-relaxed mb-12 text-center">
            "Hãy mang theo balo cá nhân và không sử dụng túi nilon để chung tay bảo vệ môi trường. Dạo chợ ở Leh không chỉ là mua sắm, đó là sự trải nghiệm một nhịp sống chậm lại, yên bình và đậm đà bản sắc của vùng Tiểu Tây Tạng."
          </p>

          

        </div>
      </footer>

    </div>
  );
}
