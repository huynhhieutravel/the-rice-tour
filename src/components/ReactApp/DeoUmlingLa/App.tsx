import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORIES } from './data';
import PhotoGallery from './components/PhotoGallery';
import Guestbook from './components/Guestbook';
import FaqSection from './components/FaqSection';
import PassComparison from './components/PassComparison';
import RelatedArticles from './components/RelatedArticles';
import { Calendar, User, Compass, MapPin, Sparkles, BookOpen, Quote, Shield } from 'lucide-react';

export default function App() {
  const [activeCover, setActiveCover] = useState<number>(0);

  const PORTRAIT_COVERS = [
    {
      title: "ĐỈNH ĐÈO KỶ LỤC",
      vibe: "Tuyến đường cao nhất",
      imageUrl: "https://media.fittour.vn/uploads/2024/06/deo-Umling-La.webp",
      quote: "Lần đầu bước xuống xe, mình hơi bị hụt hơi vì áp suất và lượng oxy chỉ còn một nửa so với đồng bằng.",
      badge: "TRẢI NGHIỆM",
      coordinates: "32.6953° N, 79.2789° E",
      colorTheme: "border-amber-500 text-amber-400 bg-amber-500/10"
    },
    {
      title: "CẢNH QUAN HÙNG VĨ",
      vibe: "Hành trình vùng cao",
      imageUrl: "https://media.fittour.vn/uploads/2023/06/emagazine-nhung-ngay-du-muc-zanskar.webp",
      quote: "Những mảng màu đất nung cằn cỗi tương phản với nền trời xanh trong vắt không một chút hơi ẩm.",
      badge: "CẢNH ĐẸP",
      coordinates: "32.6955° N, 79.2792° E",
      colorTheme: "border-red-500 text-red-400 bg-red-500/10"
    },
    {
      title: "HỆ SINH THÁI",
      vibe: "Động vật hoang dã",
      imageUrl: "https://media.fittour.vn/uploads/2024/06/canh-quan-an-tuong-cua-man-mua-le-hoi-hemis.webp",
      quote: "Qua những cung đường vắng lặng, thỉnh thoảng mới bắt gặp những đàn Kiang Tây Tạng đang nhẩn nha gặm cỏ.",
      badge: "SINH THÁI",
      coordinates: "32.6950° N, 79.2780° E",
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
            src="https://media.fittour.vn/uploads/2024/06/deo-Umling-La.webp"
            alt="Đèo Umling La cao nhất thế giới"
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
              Đèo Umling La - Con Đèo Cao Nhất Thế Giới Có Thể Đi Bằng Xe
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-300 text-sm md:text-base font-serif italic max-w-2xl leading-relaxed mb-8 text-center"
          >
            Cẩm nang đi đèo Umling La bằng đường bộ, điểm cao 5.883m. Tóm tắt lịch trình, chuẩn bị y tế và kinh nghiệm đi tour thực tế tại <a href="/du-lich-ladakh" className="text-amber-600 hover:text-amber-700 underline decoration-amber-500/30 underline-offset-2">vùng đất Ladakh</a>.
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
              <span>Điểm đến: <b>Đèo Umling La</b></span>
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
              Tổng quan đèo Umling La
            </h2>
            <div className="w-12 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          </div>

          <div className="space-y-6 text-stone-700 font-serif leading-relaxed text-base md:text-lg mb-12 text-justify">
            <p className="drop-cap">
              Những chia sẻ dưới đây được đúc kết từ chuyến đi thực tế của tôi trong quá trình khảo sát và thiết kế các hành trình du lịch tại FIT Tour. Qua thực tế điều hành tour tại Umling La, tôi nhận ra rằng một chuyến đi trọn vẹn không chỉ là việc check-in tại những điểm nổi tiếng, mà đòi hỏi sự chuẩn bị kỹ lưỡng về thể lực và y tế.
            </p>
            <div className="my-8 rounded-lg overflow-hidden shadow-lg border border-stone-200">
              <img 
                src="https://media.fittour.vn/uploads/thanh-vien-ekip-fit-tour-rang-ro-voi-chung-nhan-ky-luc-guinness-tai-deo-umling-la.webp" 
                alt="Thành viên ekip FIT Tour tự hào tại đèo Umling La"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </div>
            <p>
              Khác với những bài viết <a href="/cam-nang-du-lich-ladakh" className="text-amber-600 hover:text-amber-700 underline decoration-amber-500/30 underline-offset-2">cẩm nang phượt tự túc</a> thông thường, bài viết này cung cấp góc nhìn từ những chuyến đi thực địa đến điểm cao kỷ lục này. Với định hướng du lịch an toàn và trọn vẹn, những kinh nghiệm chia sẻ ở đây sẽ giúp bạn chuẩn bị tốt nhất để thưởng thức vẻ đẹp của khu vực này một cách an tâm tuyệt đối. Đặc biệt, nhằm xua tan nỗi lo <a href="/say-do-cao-ladakh" className="text-amber-600 hover:text-amber-700 underline decoration-amber-500/30 underline-offset-2">say độ cao (AMS)</a>, FIT Tour luôn bố trí sẵn bình oxy y tế phục vụ du khách trên hành trình, đảm bảo an toàn cao nhất khi vượt qua cột mốc 5.883m.
            </p>
          </div>

          {/* QUICK FACTS HIGHLIGHT */}
          <div className="bg-amber-50/50 border-l-4 border-amber-500 p-6 md:p-8 rounded-r-2xl mb-12 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Tóm tắt kinh nghiệm nhanh (Quick Facts)
            </h3>
            <ul className="space-y-3 font-sans text-sm md:text-base text-stone-700">
              <li className="flex items-start gap-3"><span className="text-amber-500 font-bold mt-0.5">•</span> <b>Mùa lý tưởng:</b> Tháng 6 đến 9 (nhiệt độ ban ngày 0-10°C, âm vào ban đêm). Các tháng khác tuyết dày không thể qua đèo.</li>
              <li className="flex items-start gap-3"><span className="text-amber-500 font-bold mt-0.5">•</span> <b>Giấy phép:</b> Bắt buộc phải có Inner Line Permit vì đây là khu vực cực kỳ nhạy cảm sát biên giới Ấn-Trung.</li>
              <li className="flex items-start gap-3"><span className="text-amber-500 font-bold mt-0.5">•</span> <b>Sức khỏe:</b> Yêu cầu phải thích nghi độ cao trước đó ít nhất 3-4 ngày ở Leh và Hanle trước khi lên đèo.</li>
            </ul>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-amber-50/75 border border-amber-900/10 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">5.883m</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Độ cao đỉnh đèo</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">Kỷ Lục</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Đèo cơ giới cao nhất</div>
            </div>
            <div className="text-center border-l sm:border-l border-amber-900/10 col-span-1">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">Ấn - Trung</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Sát biên giới</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">0°C-10°C</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Nhiệt độ ban ngày</div>
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
                  <div className={`space-y-6 ${story.imgUrl ? (isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2') : 'lg:col-span-12 max-w-4xl mx-auto'}`}>
                    
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
                  {story.imgUrl && (
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

                      <div className="mt-6 text-left pl-1">
                        <span className="font-serif text-[11px] text-amber-800 uppercase font-bold flex items-center gap-1.5 mb-1.5 font-mono">
                          <MapPin className="w-3.5 h-3.5" />
                          Góc Nhìn Thực Tế Từ Umling La
                        </span>
                        <p className="font-serif text-stone-700 italic text-sm leading-relaxed">
                          Chương {story.number}: Đường lên điểm cao 5.883m.
                        </p>
                      </div>
                    </div>
                  </div>
                  )}

                </div>
              </article>
            );
          })}
          
        </div>
      </section>



      {/* 6. PHOTO GALLERY COMPONENT PLACEHOLDER */}
      <PhotoGallery />

      {/* 7. GUESTBOOK BOARD COMPONENT PLACEHOLDER */}
      <Guestbook />
      
      <PassComparison />
      <FaqSection />

      {/* RELATED ARTICLES */}
      <RelatedArticles />

      {/* 8. EDITORIAL CONCLUSION FOOTER */}
      <footer className="bg-stone-950 text-white py-24 px-4 md:px-8 border-t border-amber-900/10 relative overflow-hidden">
        
        {/* Abstract light decoration */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <BookOpen className="w-10 h-10 text-amber-500 mx-auto mb-6 animate-pulse" />
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Kinh nghiệm thực tế khi đi đèo
          </h3>
          
          <p className="max-w-2xl mx-auto text-sm md:text-base font-serif italic text-stone-400 leading-relaxed mb-12 text-center">
            "Hãy giữ ấm tuyệt đối và luôn đi cùng hướng dẫn viên của FIT Tour để đảm bảo an toàn sức khỏe. Umling La không chỉ là một đỉnh đèo, đó là một hành trình vượt qua giới hạn bản thân để chạm đến kỷ lục vô tiền khoáng hậu."
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
