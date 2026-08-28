import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORIES } from './data';
import { Calendar, User, Compass, MapPin, Sparkles } from 'lucide-react';

interface AppProps {
  featureImage?: string;
}

export default function App({ featureImage }: AppProps) {

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-150 selection:text-amber-900 overflow-x-hidden antialiased">
      
      {/* 1. CINEMATIC OUTSIZED COVER PAGE */}
      <header className="relative min-h-[100dvh] flex flex-col justify-between items-center bg-stone-950 text-white overflow-hidden p-6 md:p-8">
        
        {/* Background Darkened Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={featureImage || "https://media.fittour.vn/uploads/2022/06/cuoi-lac-da-o-thung-lung-nubra-ladakh.webp"}
            alt="Thung lũng Nubra lúc bình minh"
            width={1920}
            height={1080}
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
              Thung lũng Nubra, Ladakh - Khám phá nét đẹp, hướng dẫn tham quan
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-300 text-sm md:text-base font-serif italic max-w-2xl leading-relaxed mb-8 text-center"
          >
            Kinh nghiệm du lịch thực tế chinh phục Thung lũng Nubra – Hình ảnh và hướng dẫn du lịch chi tiết. Cẩm nang lịch trình Leh – Khardung La – Diskit – Hunder, cách phòng tránh say núi cấp tính và các điểm tham quan nổi bật.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-stone-400 font-mono text-[11px] border-t border-b border-white/5 py-4 px-6 md:px-12 w-fit"
          >
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-500" />
              <span>Chia sẻ bởi: <b>HDV Huy Ngô</b></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Điểm đến: <b>Thung lũng Nubra</b></span>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
              Thông tin thiết yếu về Thung lũng Nubra
            </h2>
            <div className="w-12 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          </div>

          <div className="space-y-6 text-stone-700 font-serif leading-relaxed text-base md:text-lg mb-12 text-justify">
            <p className="drop-cap">
              Thung lũng Nubra là một trong những nơi PHẢI THAM QUAN khi đi <a href="/du-lich-ladakh" className="text-amber-700 hover:text-amber-800 underline decoration-amber-500/30 underline-offset-2 font-semibold">du lịch Ladakh</a>, đặc biệt nếu bạn đến thăm lần đầu tiên. Nó nằm trong số các tiểu khu ở Ladakh, nằm ở phía Đông Bắc có Làng Diskit làm trụ sở chính. Nằm cách thị trấn Leh khoảng 120 km, nơi đây là sự hòa quyện tuyệt đẹp giữa những dòng sông, thung lũng, sa mạc cát và tu viện cổ kính.
            </p>

            <div className="my-8 w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200 relative group">
              <img 
                src={featureImage || "https://media.fittour.vn/uploads/2022/06/doan-nguoi-cuoi-lac-da-o-thung-lung-nubra.webp"} 
                alt="Vẻ đẹp ngoạn mục của Thung lũng Nubra" 
                width={800}
                height={450}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 aspect-video" 
              />
            <div className="absolute bottom-4 right-4 bg-stone-900/60 backdrop-blur-sm text-white/90 text-[10px] px-3 py-1.5 rounded-full font-mono uppercase tracking-widest border border-white/10">Ảnh: FIT Tour</div>
          </div>

          <p>
            Phong cảnh cực rộng, những khuôn mặt núi non trùng điệp, những con đường mòn xinh xắn, nhiều màu sắc và dòng sông Shyok âm nhạc chảy giữa thung lũng sẽ khiến bạn cuốn hút ngay từ cái nhìn đầu tiên. Vì nó nằm gần Đường kiểm soát thực tế, bạn cần phải có <strong>Giấy phép Nội tuyến (ILP)</strong> đối với mọi du khách.
          </p>
          </div>

          {/* QUICK FACTS HIGHLIGHT */}
          <div className="bg-amber-50/50 border-l-4 border-amber-500 p-6 md:p-8 rounded-r-2xl mb-12 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Tóm tắt kinh nghiệm nhanh (Quick Facts)
            </h3>
            <ul className="space-y-3 font-sans text-sm md:text-base text-stone-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span> 
                <div><b>Thời điểm lý tưởng:</b> Tháng 5 đến tháng 8 là mùa du lịch cao điểm. Tháng 9 và 10 thời tiết mát mẻ và màu sắc đẹp.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span> 
                <div><b>Giấy phép:</b> Bắt buộc phải xin Inner Line Permit (ILP) để vào thung lũng.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span> 
                <div><b>Thích nghi độ cao:</b> Ngủ ở Nubra (độ cao thấp ~3.000m) giúp thích nghi rất tốt sau khi vượt đèo Khardung La.</div>
              </li>
            </ul>
          </div>

          {/* EXPERT PROFILE BLOCK */}
          <div className="author-card-outer" style={{ marginBottom: '4rem' }}>
            <div className="author-card-box">
              <div className="author-card">
                <img src="https://media.fittour.vn/uploads/hdv-huy-ngo-fittour.webp" alt="Huy Ngô" width={100} height={100} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <span className="author-tag">Tác giả bài viết &amp; Tour Leader</span>
                    <span className="author-org">HDV FIT TOUR</span>
                  </div>
                  <span className="author-credentials">&gt; 20 lần đến Ladakh</span>
                  <div className="author-name-row">
                    <div className="author-name">Huy Ngô</div>
                    <a href="/hdv-huy-ngo" className="author-link">Xem hồ sơ chuyên gia</a>
                  </div>
                  <p className="author-bio">Người trực tiếp chấp bút cho bài viết này và đảm nhiệm vai trò <strong>Hướng Dẫn Viên (Tour Leader)</strong> cho tuyến tour Ladakh của FIT TOUR. Bằng kinh nghiệm thực chiến dạn dày sau hơn 20 lần đồng hành cùng du khách chinh phục miền đất "Tiểu Tây Tạng", Huy Ngô luôn mang đến những góc nhìn chân thực và kỹ năng sinh tồn thiết yếu để mỗi hành trình đều trọn vẹn và an toàn.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical statistical board for the trip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-amber-50/75 border border-amber-900/10 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">3.048m</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Độ cao trung bình</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">120km</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Khoảng cách từ Leh</div>
            </div>
            <div className="text-center border-l sm:border-l border-amber-900/10 col-span-1">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">Diskit</div>
              <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">Trung tâm chính</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">-20°C</div>
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Chapter label indicator */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl font-bold text-amber-900 tracking-widest">{story.number}</span>
                      <div className="h-0.5 w-10 bg-amber-700/25"></div>
                      <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-extrabold">{story.locationName}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
                      {story.title}
                    </h3>
                    
                    <p className="font-mono text-xs text-amber-800 italic uppercase tracking-wider font-semibold">
                      {story.subtitle}
                    </p>

                    <p className="font-serif font-semibold text-stone-600 text-sm md:text-base leading-relaxed border-l-3 border-amber-700 pl-4 py-1 italic bg-amber-50/40 pr-3 rounded" dangerouslySetInnerHTML={{ __html: story.abstract }} />

                    <div className="space-y-4 text-stone-700 text-sm md:text-base font-serif leading-relaxed text-justify">
                      {story.paragraphs.map((p, pIdx) => {
                        const isFirstP = pIdx === 0 || story.paragraphs.slice(0, pIdx).every(prev => /^\s*<(h[1-6]|ul|ol|div|blockquote|table|figure|strong)/i.test(prev));
                        return <div key={pIdx} className={isFirstP ? "drop-cap [&>p]:inline" : ""} dangerouslySetInnerHTML={{ __html: p }} />;
                      })}

                      {/* Quote moved to text column if 3 images are present */}
                      {story.quote && story.imgUrl3 && (
                        <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 p-6 md:p-8 rounded-2xl border border-amber-950/5 shadow-inner w-full relative !mt-8">
                          <span className="font-serif text-5xl md:text-6xl leading-none text-amber-600/30 font-bold absolute top-2 md:top-4 left-2 md:left-4">“</span>
                          <p className="font-serif text-base md:text-lg text-stone-800 italic pl-6 md:pl-8 leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: story.quote }} />
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Photo Column with stacked layout & interleaved quote */}
                  <div className={`lg:col-span-6 flex flex-col justify-center gap-10 md:gap-14 ${isEven ? 'lg:order-2' : 'lg:order-1'} lg:pt-24 pt-2`}>
                    
                    {/* Main Image 1 */}
                    <div className="bg-white p-3 pb-10 shadow-xl border border-stone-200/80 transform hover:-rotate-1 hover:scale-[1.01] transition-all duration-300 relative w-full max-w-[500px] mx-auto">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/60 text-stone-400 font-mono text-[9px] uppercase tracking-wider text-center pt-1 border border-stone-150 shadow-sm backdrop-blur-sm z-30 pointer-events-none">
                        SCENE 01
                      </div>
                      <div className="relative overflow-hidden bg-stone-100 border border-stone-150">
                        <img
                          src={story.imgUrl}
                          alt={story.imgCaption || story.title}
                          width={600}
                          height={400}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto block filter saturate-[85%]"
                        />
                      </div>
                      <div className="mt-4 text-center px-4">
                        <span className="font-serif text-[11px] text-amber-800 uppercase font-bold tracking-wider leading-relaxed">
                          {story.imgCaption}
                        </span>
                      </div>
                    </div>

                    {/* Interleaved Pullout Quote */}
                    {story.quote && !story.imgUrl3 && (
                      <div id={`quote-${story.id}`} className="bg-gradient-to-br from-amber-50/80 to-stone-50 p-8 rounded-2xl border border-amber-950/5 shadow-inner max-w-[500px] mx-auto w-full relative">
                        <span className="font-serif text-6xl leading-none text-amber-600/30 font-bold absolute top-4 left-4">“</span>
                        <p className="font-serif text-base md:text-lg text-stone-800 italic pl-8 leading-relaxed relative z-10 text-center" dangerouslySetInnerHTML={{ __html: story.quote }} />
                      </div>
                    )}

                    {/* Secondary Image 2 */}
                    {story.imgUrl2 && (
                      <div className="bg-white p-3 pb-10 shadow-xl border border-stone-200/80 transform rotate-1 hover:rotate-0 hover:scale-[1.01] transition-all duration-300 relative w-full max-w-[500px] mx-auto">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/60 text-stone-400 font-mono text-[9px] uppercase tracking-wider text-center pt-1 border border-stone-150 shadow-sm backdrop-blur-sm z-30 pointer-events-none">
                          SCENE 02
                        </div>
                        <div className="relative overflow-hidden bg-stone-100 border border-stone-150">
                          <img
                            src={story.imgUrl2}
                            alt={story.imgCaption2 || `${story.title} - ảnh phụ`}
                            width={600}
                            height={400}
                            referrerPolicy="no-referrer"
                            className="w-full h-auto block filter saturate-[85%]"
                          />
                        </div>
                        <div className="mt-4 text-center px-4">
                          <span className="font-serif text-[11px] text-amber-800 uppercase font-bold tracking-wider leading-relaxed">
                            {story.imgCaption2}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Third Image 3 */}
                    {story.imgUrl3 && (
                      <div className="bg-white p-3 pb-10 shadow-xl border border-stone-200/80 transform -rotate-1 hover:rotate-0 hover:scale-[1.01] transition-all duration-300 relative w-full max-w-[500px] mx-auto">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/60 text-stone-400 font-mono text-[9px] uppercase tracking-wider text-center pt-1 border border-stone-150 shadow-sm backdrop-blur-sm z-30 pointer-events-none">
                          SCENE 03
                        </div>
                        <div className="relative overflow-hidden bg-stone-100 border border-stone-150">
                          <img
                            src={story.imgUrl3}
                            alt={story.imgCaption3 || `${story.title} - ảnh phụ`}
                            width={600}
                            height={400}
                            referrerPolicy="no-referrer"
                            className="w-full h-auto block filter saturate-[85%]"
                          />
                        </div>
                        <div className="mt-4 text-center px-4">
                          <span className="font-serif text-[11px] text-amber-800 uppercase font-bold tracking-wider leading-relaxed">
                            {story.imgCaption3}
                          </span>
                        </div>
                      </div>
                    )}


                  </div>

                </div>
              </article>
            );
          })}
          
        </div>
      </section>
    </div>
  );
}
