import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORIES, PROLOGUE } from './data';
import { Calendar, User, Compass, MapPin, Sparkles } from 'lucide-react';

interface AppProps {
  featureImage?: string;
  title?: string;
}

export default function App({ featureImage, title }: AppProps) {

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-150 selection:text-amber-900 overflow-x-hidden antialiased">
      
      {/* 1. CINEMATIC OUTSIZED COVER PAGE */}
      <header className="relative min-h-[100dvh] flex flex-col justify-between items-center bg-stone-950 text-white overflow-hidden p-6 md:p-8">
        
        {/* Background Darkened Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={featureImage || "https://media.fittour.vn/uploads/route-map-tour-ladakh.webp"}
            alt="Toàn cảnh cung đường đèo tại Ladakh"
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
            <span className="font-mono text-xs uppercase tracking-widest text-stone-300 font-bold">Kinh Nghiệm Sinh Tồn</span>
          </div>
          <div className="text-right">
            <span className="font-mono text-[10px] text-stone-400 block uppercase">Chủ đề</span>
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">Say Độ Cao (AMS)</span>
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
            <span>TỪ KINH NGHIỆM THỰC TẾ HƠN 20 LẦN TỚI LADAKH</span>
          </motion.div>

          <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6 text-center">
            <h1
              id="main-editorial-title"
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 mt-2 block"
              dangerouslySetInnerHTML={{ __html: title?.replace(' - ', '<br/>') || 'Triệu Chứng Và Cách Phòng Tránh<br/>Say Độ Cao Khi Du Lịch' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-300 text-sm md:text-base font-serif italic max-w-2xl leading-relaxed mb-8 text-center"
          >
            Say độ cao (AMS) là gì, làm thế nào để khắc phục các triệu chứng Say độ cao khi Du lịch Ladakh, Tây Tạng, Nepal? Tìm hiểu các biện pháp y tế và tự nhiên hiệu quả nhất.
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
              <span>Khu vực: <b>Himalaya (Ladakh, Nepal, Tibet)</b></span>
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
              {title || PROLOGUE.title}
            </h2>
            <div className="w-12 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          </div>

          <div className="space-y-6 text-stone-700 font-serif leading-relaxed text-base md:text-lg mb-12 text-justify">
            {PROLOGUE.paragraphs[0] && <p dangerouslySetInnerHTML={{ __html: PROLOGUE.paragraphs[0] }} />}
            
            {featureImage && (
              <div className="my-8 w-full rounded-2xl overflow-hidden shadow-sm border border-stone-200">
                 <img src={featureImage} alt={title || PROLOGUE.title} className="w-full h-auto object-cover max-h-[500px]" width={1200} height={675} loading="lazy" />
              </div>
            )}

            {PROLOGUE.paragraphs.slice(1).map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
            ))}

            <div className="my-8 w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200 relative group">
              <iframe 
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3326415910863567&show_text=false&width=350" 
                width="350" 
                height="622" 
                style={{ border: 'none', overflow: 'hidden', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                className="mx-auto block"
                title="Video hành trình vùng cao"
                loading="lazy"
              >
              </iframe>
              <div className="absolute bottom-4 right-4 bg-stone-900/60 backdrop-blur-sm text-white/90 text-[10px] px-3 py-1.5 rounded-full font-mono uppercase tracking-widest border border-white/10 z-10 pointer-events-none">Video: Vừa hạ cánh Leh</div>
            </div>
          </div>

          {/* QUICK FACTS HIGHLIGHT */}
          <div className="bg-amber-50/50 border-l-4 border-amber-500 p-6 md:p-8 rounded-r-2xl mb-12 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Sự khắc nghiệt của Himalaya (Quick Facts)
            </h3>
            <ul className="space-y-3 font-sans text-sm md:text-base text-stone-700">
              {PROLOGUE.quickFacts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-0.5">•</span> 
                  <div><b>{fact.label}:</b> {fact.value}</div>
                </li>
              ))}
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
            {PROLOGUE.stats.map((stat, idx) => (
              <div key={idx} className={`text-center ${idx > 0 && idx !== 2 ? 'border-l border-amber-900/10' : ''} ${idx === 2 ? 'border-l sm:border-l border-amber-900/10 col-span-1' : ''}`}>
                <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">{stat.value}</div>
                <div className="font-mono text-[10px] text-stone-600 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. STORIES NARRATIVE CHAPTERS PROGRESSION */}
      <section id="chapters" className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {STORIES.map((story, index) => {
            const isEven = index % 2 === 0;
            const hasImage = !!story.imgUrl;
            return (
              <article
                key={story.id}
                id={`story-chapter-${story.id}`}
                className="py-20 md:py-28 border-b border-stone-200/60 last:border-b-0"
              >
                {!hasImage ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
                    <div className="lg:col-span-8 lg:col-start-3 space-y-8 mx-auto max-w-3xl">
                      {/* Chapter label indicator - centered */}
                      <div className="flex items-center justify-center gap-3">
                        <span className="font-mono text-3xl font-bold text-amber-900 tracking-widest">{story.number}</span>
                        <div className="h-0.5 w-10 bg-amber-700/25"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-extrabold">{story.locationName}</span>
                      </div>

                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight text-center">
                        {story.title}
                      </h3>
                      
                      <p className="font-mono text-sm text-amber-800 italic uppercase tracking-wider font-semibold text-center">
                        {story.subtitle}
                      </p>

                      <p className="font-serif font-semibold text-stone-600 text-base md:text-lg leading-relaxed italic bg-amber-50/40 p-4 md:p-6 rounded text-center border-t-2 border-b-2 border-amber-700/30" dangerouslySetInnerHTML={{ __html: story.abstract }} />

                      <div className="space-y-6 text-stone-700 text-sm md:text-base font-serif leading-relaxed text-justify mt-8">
                        {story.paragraphs.map((p, pIdx) => {
                          return <div key={pIdx} dangerouslySetInnerHTML={{ __html: p }} />;
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
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
                        return <div key={pIdx} dangerouslySetInnerHTML={{ __html: p }} />;
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
                    {story.imgUrl && (
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
                    )}

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
                )}
              </article>
            );
          })}
          
        </div>
      </section>
    </div>
  );
}
