import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ChevronRight, List, X, ExternalLink } from 'lucide-react';
import { LADAKH_TOC } from '../data/ladakhData';

interface Props {
  currentPart: number;
}

export default function SeriesNavigation({ currentPart }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine next part
  const nextPart = currentPart < 10 ? currentPart + 1 : 1;
  const nextItem = LADAKH_TOC.find(i => i.part === nextPart) || LADAKH_TOC[0];

  return (
    <>
      {/* =========================================
          BIG CTA (CHUYẾN ĐI TIẾP THEO)
         ========================================= */}
      <div className="max-w-4xl mx-auto px-6 py-16 mt-8 border-t border-white/10">
        <a 
          href={`/${nextItem.slug}`}
          className="block group relative bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-500"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700">
            <Compass className="w-48 h-48 animate-pulse-slow" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-amber-500 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-black flex items-center gap-2">
                <Compass className="w-3 h-3" />
                {currentPart < 10 ? 'CHUYẾN ĐI TIẾP THEO' : 'XEM LẠI TỪ ĐẦU'}
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-white font-medium group-hover:text-amber-400 transition-colors duration-300">
                Phần {nextItem.part}: {nextItem.title}
              </h3>
            </div>
            
            <div className="shrink-0 w-16 h-16 rounded-full border border-white/10 group-hover:border-amber-500 group-hover:bg-amber-500/10 flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-2">
              <ChevronRight className="w-8 h-8 text-stone-400 group-hover:text-amber-500 transition-colors duration-300" />
            </div>
          </div>
        </a>

        {/* =========================================
            ACTUAL TOUR CTA
           ========================================= */}
        <div className="mt-8 bg-[#0D1516] border border-[#162527] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://media.fittour.vn/uploads/2025/11/tour-ladakh-fittour.webp')] bg-cover bg-center opacity-10 mix-blend-luminosity group-hover:opacity-20 transition-opacity duration-700" />
          <div className="relative z-10 space-y-6">
            <span className="font-mono text-cyan-500 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-black">
              TRẢI NGHIỆM THỰC TẾ
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-medium max-w-2xl mx-auto leading-tight">
              Sẵn Sàng Chạm Vào Giấc Mơ Bắc Cực Cùng FIT TOUR?
            </h3>
            <p className="text-stone-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Khám phá Hành trình Tour Ladakh 8 Ngày 7 Đêm cao cấp. Tận mắt chiêm ngưỡng sông băng vĩnh cửu, chinh phục Denali và ngắm nhìn gấu nâu hoang dã.
            </p>
            <a 
              href="https://thericetour.com/tour/tour-ladakh-8n7d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-full transition-colors duration-300 mt-4"
            >
              XEM LỊCH TRÌNH TOUR <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================
          STICKY MENU BUTTON
         ========================================= */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        aria-label="Mục lục Series Ladakh"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] h-14 px-5 bg-stone-900 border border-amber-500/30 rounded-full flex items-center justify-center gap-3 shadow-2xl hover:scale-105 hover:border-amber-400 transition-all duration-300"
      >
        <List className="w-6 h-6 text-amber-400 animate-pulse" />
        <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase hidden md:inline-block pt-0.5">MỤC LỤC</span>
      </button>

      {/* =========================================
          FULLSCREEN DRAWER / MODAL TOC
         ========================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex justify-end bg-black/80 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full md:w-[450px] h-full bg-[#121B1C] border-l border-white/10 shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-amber-500 text-[10px] tracking-[0.2em] uppercase font-bold">ALASKA SERIES</span>
                  <h3 className="font-serif text-2xl text-white mt-1">Mục Lục Hành Trình</h3>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6 text-stone-400" />
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-2 custom-scrollbar">
                {LADAKH_TOC.map((item) => {
                  const isActive = item.part === currentPart;
                  return (
                    <a 
                      key={item.part}
                      href={`/${item.slug}`}
                      className={`block p-4 rounded-2xl border transition-all duration-300 ${isActive ? 'bg-amber-500/10 border-amber-500/50' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-xl font-bold ${isActive ? 'text-amber-500' : 'text-stone-600'}`}>
                          {item.part.toString().padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <p className={`font-serif leading-tight ${isActive ? 'text-amber-400' : 'text-stone-300'}`}>
                            {item.title}
                          </p>
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 bg-black/20 text-center">
                <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">FIT TOUR CURATORS</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
