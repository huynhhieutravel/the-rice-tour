import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORIES } from './data';
import PhotoGallery from './components/PhotoGallery';
import Guestbook from './components/Guestbook';
import FaqSection from './components/FaqSection';
import ComparisonTable from './components/ComparisonTable';
import SignatureTour from './components/SignatureTour';
import RelatedArticles from './components/RelatedArticles';
import { Calendar, User, Compass, MapPin, Sparkles, BookOpen, Quote, Shield } from 'lucide-react';

export default function App() {
  const [activeCover, setActiveCover] = useState<number>(0);

  const PORTRAIT_COVERS = [
    {
      title: "NGÔI ĐỀN TRÊN ĐỈNH ĐỒI",
      vibe: "Tầm nhìn bao quát",
      imageUrl: "https://media.fittour.vn/uploads/toan-canh-tu-vien-stongdey.jpeg",
      quote: "Stongdey Gompa vươn mình sừng sững trên đỉnh đồi, bao trọn tầm nhìn xuống thung lũng Doda xanh ngát.",
      badge: "TRẢI NGHIỆM",
      coordinates: "33.5193° N, 76.9882° E",
      colorTheme: "border-amber-500 text-amber-400 bg-amber-500/10"
    },
    {
      title: "KIẾN TRÚC MẬT TÔNG",
      vibe: "Không gian linh thiêng",
      imageUrl: "https://media.fittour.vn/uploads/2023/06/khong-gian-ben-trong-yen-tinh-tu-vien-Stongdey-Zanskar-ladakh.webp",
      quote: "Chánh điện là nơi giao thoa của nghệ thuật tranh bích họa và những pho tượng hàng trăm năm tuổi.",
      badge: "TÂM LINH",
      coordinates: "33.5193° N, 76.9882° E",
      colorTheme: "border-red-500 text-red-400 bg-red-500/10"
    },
    {
      title: "NHỮNG ĐỨA TRẺ ZANSKAR",
      vibe: "Giao lưu văn hóa",
      imageUrl: "https://media.fittour.vn/uploads/2023/06/dang-thuy-duong-va-cac-em-nho-o-tu-vien-Stongdey.webp",
      quote: "Nụ cười hồn nhiên của các tiểu sư đem lại sự ấm áp xua tan cái lạnh vùng sơn cước.",
      badge: "GẶP GỠ",
      coordinates: "33.5193° N, 76.9882° E",
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
            src="https://media.fittour.vn/uploads/toan-canh-tu-vien-stongdey.jpeg"
            alt="Tu viện Stongdey nhìn từ xa"
            referrerPolicy="no-referrer"
            fetchpriority="high"
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
              Tu viện Stongdey: Góc nhìn toàn cảnh Zanskar
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-300 text-sm md:text-base font-serif italic max-w-2xl leading-relaxed mb-8 text-center"
          >
            Khám phá Tu viện Stongdey (Stongde Gompa) - một ngôi chùa cổ nằm trên ngọn đồi cao tại Zanskar, nổi bật với tầm nhìn bao quát toàn bộ thung lũng Doda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-stone-400 font-mono text-[11px] border-t border-b border-white/5 py-4 px-6 md:px-12 w-fit"
          >
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-500" />
              <span>Chia sẻ bởi: <b>Huy Ngô (Đã dẫn 20+ đoàn)</b></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Điểm đến: <b>Tu viện Stongdey</b></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Cập nhật: <b>14/07/2026 (Ảnh tháng 8/2025)</b></span>
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
              Tổng quan tu viện Stongdey
            </h2>
            <div className="w-12 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          </div>

          <div className="space-y-6 text-stone-700 font-serif leading-relaxed text-base md:text-lg mb-12 text-justify">
            <p className="drop-cap">
              Những chia sẻ dưới đây được đúc kết từ chuyến đi thực tế của tôi trong quá trình khảo sát và thiết kế các hành trình du lịch tại FIT Tour. Khác với những <a href="/tu-vien-ladakh" className="text-amber-700 hover:text-amber-800 font-medium underline decoration-amber-700/30 underline-offset-4">tu viện nổi tiếng như Hemis hay Thiksey</a>, Stongdey mang đến một vẻ đẹp kỳ vĩ nhờ vị trí địa lý đắc địa, nằm trên đỉnh một ngọn đồi chót vót bao quát toàn bộ thung lũng Doda xanh mướt.
            </p>
            <p>
              Stongdey là tu viện lớn thứ hai của toàn vùng Zanskar. Sự phát triển của cơ sở hạ tầng giao thông gần đây đã giúp xe ô tô có thể chạy một mạch lên tận cửa tu viện, thay vì phải đi bộ vất vả như trước kia. Điều này giúp Stongdey trở thành điểm dừng chân hoàn hảo trên tuyến hành trình khám phá Zanskar của bất kỳ độ tuổi nào. Bạn chỉ cần bước xuống xe là có thể ngay lập tức đắm mình vào không gian tâm linh thuần khiết của vùng đất viễn biên.
            </p>
          </div>

          {/* QUICK FACTS HIGHLIGHT */}
          <div className="bg-amber-50/50 border-l-4 border-amber-500 p-6 md:p-8 rounded-r-2xl mb-12 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Tóm tắt kinh nghiệm nhanh (Quick Facts)
            </h3>
            <ul className="space-y-3 font-sans text-sm md:text-base text-stone-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-0.5 shrink-0">•</span> 
                <span>
                  <strong className="font-bold text-stone-800">Thời điểm lý tưởng:</strong> Tháng 6 đến giữa tháng 9 là mùa du lịch an toàn nhất cho <a href="/du-lich-ladakh" className="text-amber-700 hover:text-amber-600 font-medium underline decoration-amber-700/30 underline-offset-4">Ladakh</a> và khu vực Zanskar, khi đường xá thông thoáng.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-0.5 shrink-0">•</span> 
                <span>
                  <strong className="font-bold text-stone-800">Giấy phép:</strong> Dù không nằm sát biên giới, bạn vẫn phải mang theo passport để đăng ký thông tin tại các chốt kiểm tra dọc đường.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-0.5 shrink-0">•</span> 
                <span>
                  <strong className="font-bold text-stone-800">Sức khỏe:</strong> Dù ô tô đưa lên tận nơi, độ cao của tu viện vẫn là ~3.900m. Bạn yêu cầu phải phòng ngừa tốt <a href="/say-do-cao" className="text-amber-700 hover:text-amber-600 font-medium underline decoration-amber-700/30 underline-offset-4">hội chứng say độ cao</a> và di chuyển chậm rãi trong khuôn viên tu viện.
                </span>
              </li>
            </ul>
          </div>

          {/* EXPERT PROFILE BLOCK */}
          <div className="author-card-outer" style={{ marginBottom: '4rem' }}>
            <div className="author-card-box">
              <div className="author-card">
                <img src="https://media.fittour.vn/uploads/hdv-huy-ngo-fittour.webp" alt="Huy Ngô" />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <span className="author-tag">TRAVEL BLOGGER</span>
                    <span className="author-org">KHẢO SÁT HÀNH TRÌNH FIT TOUR</span>
                  </div>
                  <div className="author-name-row">
                    <div className="author-name">Huy Ngô</div>
                    <a href="/hdv-huy-ngo" className="author-link">Xem hồ sơ chuyên gia</a>
                  </div>
                  <p className="author-bio">Với <strong>đam mê xê dịch</strong> mãnh liệt, tôi luôn khao khát được đặt chân đến những vùng đất mới lạ và kỳ vĩ. Những chia sẻ trong bài viết này được đúc kết từ <strong>chuyến đi thực tế</strong> của tôi trong vai trò một <strong>Travel Blogger</strong> độc lập, đồng thời trực tiếp <strong>khảo sát và thiết kế</strong> các hành trình du lịch tại FIT Tour. Hy vọng những <strong>kinh nghiệm chân thực</strong> này sẽ truyền cảm hứng cho chuyến đi sắp tới của bạn!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical statistical board for the trip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-amber-50/75 border border-amber-900/10 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">3.900m</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Độ cao trung bình</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">18km</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Cách TT Padum</div>
            </div>
            <div className="text-center border-l sm:border-l border-amber-900/10 col-span-1">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">~1.000</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Năm lịch sử</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">Mùa hè</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Thời điểm lý tưởng</div>
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
                          Góc Nhìn Thực Tế Tại Stongdey
                        </span>
                        <p className="font-serif text-stone-700 italic text-sm leading-relaxed">
                          Chương {story.number}: Sự thay đổi diệu kỳ của mặt nước qua lăng kính lữ khách.
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





      {/* 6. PHOTO GALLERY COMPONENT PLACEHOLDER */}
      <PhotoGallery />

      {/* FAQ SECTION */}
      <FaqSection />

      {/* COMPARISON TABLE */}
      <ComparisonTable />

      {/* 7. GUESTBOOK BOARD COMPONENT PLACEHOLDER */}
      <Guestbook />

            {/* RELATED ARTICLES */}
      <RelatedArticles />

      {/* SIGNATURE TOUR CTA */}
      <SignatureTour />



      {/* FLOATING BACK TO TOP BUTTON */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0, margin: "-50% 0px 0px 0px" }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 bg-amber-500 text-stone-900 rounded-full shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:scale-110 transition-all border border-amber-300 group"
        aria-label="Cuộn lên đầu trang"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
      </motion.button>
    </div>
  );
}
