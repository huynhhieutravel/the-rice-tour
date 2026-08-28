import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-[100svh] w-full bg-[#0a0f16] font-sans overflow-hidden flex flex-col justify-between">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://media.fittour.vn/uploads/huynhhieutravel.webp')"
        }}
      >
        {/* Dark gradient on the left to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/90 via-[#050a14]/50 to-transparent w-full md:w-3/4 lg:w-2/3"></div>
        {/* Dark gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/90 via-transparent to-transparent h-full w-full opacity-80"></div>
      </div>

      {/* Main Content Area */}
      <motion.div 
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 xl:px-12 pt-10 md:pt-16 pb-6 flex-grow flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-8 xl:gap-16">
          
          {/* LEFT COLUMN - Profile Info */}
          <motion.div className="flex-1 w-full flex flex-col" variants={slideRightVariants}>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black text-white tracking-tighter mb-0 font-['Inter'] leading-[0.9] drop-shadow-xl uppercase">
                Hiếu Huỳnh
              </h1>
              
              <h2 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-amber-500 tracking-wide uppercase mb-1 drop-shadow-md mt-4 xl:mt-5">
                Digital Growth Architect
              </h2>
              
              <h3 className="text-[16px] md:text-[18px] lg:text-[19px] font-bold text-white mb-6 drop-shadow-md tracking-wide">
                Travel Marketing • SEO • AI Search
              </h3>
              
              <div className="space-y-2.5 max-w-[440px] text-[15px] md:text-[16px] xl:text-[16px] text-white/95 leading-[1.6] drop-shadow-md font-medium">
                <p>
                  Tôi xây dựng hệ thống tăng trưởng cho giáo dục và <span className="text-amber-400 font-semibold">du lịch</span> thông qua SEO, AI Search, Content Strategy, Analytics và Marketing Automation.
                </p>
                <p>
                  Đồng thời trực tiếp khảo sát, thiết kế nội dung và triển khai các dự án tại Ladakh, Bhutan, Tây Tạng, Pakistan, Kyrgyzstan và nhiều điểm đến thuộc <span className="text-amber-400 font-semibold">Himalaya & Con Đường Tơ Lụa</span>.
                </p>
              </div>
            </div>

            {/* Bottom section aligned with right sidebar */}
            <div className="mt-auto pt-8">
              {/* Stats Bar */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#0c121a]/60 backdrop-blur-xl border border-white/10 rounded-[1.25rem] p-5 xl:p-6 flex flex-wrap sm:flex-nowrap items-center justify-between gap-5 shadow-2xl relative overflow-hidden w-full"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>

                {/* Stat 1 */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-amber-500 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                  </div>
                  <div>
                    <div className="text-[18px] xl:text-[20px] font-bold text-white leading-tight">5.000+</div>
                    <div className="text-[11px] text-slate-300 leading-snug mt-0.5">Travel Photos<br/>Managed</div>
                  </div>
                </div>

                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-[#31A8FF] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m16 13-3.5 3.5"/><path d="m11 18-2 1 1-2 5.5-5.5a1.414 1.414 0 0 1 2 2L12 18z"/></svg>
                  </div>
                  <div>
                    <div className="text-[18px] xl:text-[20px] font-bold text-white leading-tight">500+</div>
                    <div className="text-[11px] text-slate-300 leading-snug mt-0.5">Travel Articles &<br/>Landing Pages</div>
                  </div>
                </div>

                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-[#31A8FF] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                  </div>
                  <div>
                    <div className="text-[18px] xl:text-[20px] font-bold text-white leading-tight">80+</div>
                    <div className="text-[11px] text-slate-300 leading-snug mt-0.5">Ladakh Journeys<br/>Supported</div>
                  </div>
                </div>

                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>

                {/* Stat 4 */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-amber-500 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <div>
                    <div className="text-[18px] xl:text-[20px] font-bold text-white leading-tight">2</div>
                    <div className="text-[11px] text-slate-300 leading-snug mt-0.5">Industries<br/>Specialized<br/><span className="text-[9px] text-slate-400">Travel & Education</span></div>
                  </div>
                </div>

              </motion.div>

              {/* Author Bio Below Stats */}
              <motion.div 
                variants={itemVariants}
                className="mt-3 bg-[#0c121a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 xl:p-5 flex items-center gap-4 shadow-xl relative overflow-hidden w-full"
              >
                <div className="w-10 h-10 rounded-full border-[1.5px] border-[#c89845] flex items-center justify-center text-[#c89845] flex-shrink-0 bg-[#453c29]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <p className="text-[13px] xl:text-[14px] text-white/95 leading-[1.5]">
                  Tác giả của các cẩm nang du lịch, bài viết chuyên sâu và nội dung chuẩn SEO tập trung vào vùng <span className="text-amber-400 font-semibold">Ladakh, Bhutan, Tây Tạng, Pakistan, Trung Á</span> và du lịch trải nghiệm.
                </p>
              </motion.div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN - Expertise Sidebar */}
          <motion.div 
            className="w-full lg:w-[320px] xl:w-[340px] flex-shrink-0 relative" 
            variants={slideLeftVariants}
          >
            <div className="bg-[#1c1d22]/70 backdrop-blur-xl border border-white/10 border-t-[1.5px] border-t-[#c89845] rounded-[1.5rem] p-5 xl:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden h-full flex flex-col justify-center">
              
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-[#c89845] font-bold tracking-[0.15em] uppercase text-[11px] whitespace-nowrap">
                  EXPERTISE
                </h3>
                <div className="h-px bg-white/10 flex-grow"></div>
              </div>

              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex gap-4 group">
                  <div className="w-[40px] h-[40px] rounded-full border-[1.5px] border-[#c89845] flex items-center justify-center text-[#c89845] flex-shrink-0 mt-0.5 bg-[#453c29]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L2.5 8l6.5 4.5L5 16.5l-3.3-.8L.5 17l4.6 1.9L7 23.5l1.3-1.2-.8-3.3L11.5 15l4.5 6.5 1.2-1.2c.4-.2.7-.6.6-1.1Z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[13px] xl:text-[14px] mb-1 tracking-wide">TRAVEL MARKETING</h4>
                    <ul className="text-[#cbd5e1] space-y-0.5 text-[12px] xl:text-[12.5px] leading-[1.5] list-disc list-inside marker:text-[#cbd5e1]/50">
                      <li>Destination Marketing</li>
                      <li>Tour SEO</li>
                      <li>Travel Content Systems</li>
                      <li>Experience-led Storytelling</li>
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 w-full ml-[56px] w-[calc(100%-56px)] my-3"></div>

                {/* Item 2 */}
                <div className="flex gap-4 group">
                  <div className="w-[40px] h-[40px] rounded-full border-[1.5px] border-[#3aa655] flex items-center justify-center text-white flex-shrink-0 mt-0.5 bg-[#1f402c]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[13px] xl:text-[14px] mb-1 tracking-wide">SEARCH & VISIBILITY</h4>
                    <ul className="text-[#cbd5e1] space-y-0.5 text-[12px] xl:text-[12.5px] leading-[1.5] list-disc list-inside marker:text-[#cbd5e1]/50">
                      <li>Technical SEO</li>
                      <li>AI Search Optimization</li>
                      <li>Entity SEO</li>
                      <li>Topical Authority</li>
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 w-full ml-[56px] w-[calc(100%-56px)] my-3"></div>

                {/* Item 3 */}
                <div className="flex gap-4 group">
                  <div className="w-[40px] h-[40px] rounded-full border-[1.5px] border-[#6159b3] flex items-center justify-center text-white flex-shrink-0 mt-0.5 bg-[#2d305c]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[13px] xl:text-[14px] mb-1 tracking-wide">GROWTH SYSTEMS</h4>
                    <ul className="text-[#cbd5e1] space-y-0.5 text-[12px] xl:text-[12.5px] leading-[1.5] list-disc list-inside marker:text-[#cbd5e1]/50">
                      <li>Content Operations</li>
                      <li>Analytics & Attribution</li>
                      <li>Marketing Automation</li>
                      <li>Conversion Optimization</li>
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 w-full ml-[56px] w-[calc(100%-56px)] my-3"></div>

                {/* Item 4 */}
                <div className="flex gap-4 group">
                  <div className="w-[40px] h-[40px] rounded-full border-[1.5px] border-[#c89845] flex items-center justify-center text-[#c89845] flex-shrink-0 mt-0.5 bg-[#453c29]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[13px] xl:text-[14px] mb-1 tracking-wide">AUTOMATION & OPTIMIZATION</h4>
                    <ul className="text-[#cbd5e1] space-y-0.5 text-[12px] xl:text-[12.5px] leading-[1.5] list-disc list-inside marker:text-[#cbd5e1]/50">
                      <li>Marketing Automation</li>
                      <li>AI Workflow</li>
                      <li>CRO & Funnel Optimization</li>
                      <li>Process Design</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* TOOLS & PLATFORMS Strip - Floating */}
      <motion.div 
        className="relative z-10 w-full max-w-[1300px] mx-auto px-4 lg:px-8 mb-6 mt-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="bg-[#05080f]/90 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 xl:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-2xl">
          <div className="flex-shrink-0">
            <h4 className="text-amber-500 font-bold text-[11px] xl:text-[12px] tracking-widest uppercase">TOOLS<br/><span className="text-white">& PLATFORMS</span></h4>
          </div>
          
          <div className="flex-grow flex flex-wrap xl:flex-nowrap items-center justify-center lg:justify-between gap-4 lg:gap-5 text-white/80 text-[12px] xl:text-[13px] font-medium">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">⚙️</span> Antigravity
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">🏗</span> FIT ERP
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">☁️</span> Cloudflare
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">🚀</span> Astro
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">🌐</span> WordPress
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">🔍</span> GSC
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">📊</span> GA4
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">🎨</span> Photoshop
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <span className="text-[14px] xl:text-[15px]">🎬</span> CapCut
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
