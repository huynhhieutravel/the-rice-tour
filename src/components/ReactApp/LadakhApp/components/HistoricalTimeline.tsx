import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, Compass, DollarSign, Award, Zap, Sparkles } from 'lucide-react';
import { LADAKH_TIMELINE } from '../data/ladakhData';
import type { HistoricalEvent } from '../types';

export default function HistoricalTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent>(LADAKH_TIMELINE[0]);

  return (
    <div id="ladakh-historical-engravings" className="bg-[#121B1C]/90 rounded-3xl border border-white/10 p-6 md:p-8 text-white text-left relative overflow-hidden">
      
      {/* Tiny decorative polar watermark */}
      <div className="absolute top-8 right-8 text-white/5 font-mono text-[70px] font-black leading-none pointer-events-none select-none">
        1867
      </div>

      <div className="border-b border-white/10 pb-5 mb-6">
        <span className="font-mono text-[11px] md:text-[9px] tracking-[0.4em] text-[#A8D1DB] font-extrabold uppercase block">
          MIÊN CHƯƠNG LỊCH SỬ BIÊN THÙY
        </span>
        <h3 className="font-prata text-xl md:text-2xl font-light text-white uppercase tracking-wider mt-1">
          Hành Trình Khai Hoang & Định Danh
        </h3>
        <p className="font-serif italic text-sm md:text-xs text-stone-450 mt-1">
          Lật giở các dấu mốc định mệnh thay đổi số phận của vùng đất băng giá cổ kính.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Horizontal timeline scale select */}
        <div className="lg:col-span-12 flex justify-between items-center bg-slate-950/60 p-4 rounded-2xl border border-white/5 overflow-x-auto custom-scrollbar gap-4">
          {LADAKH_TIMELINE.map((ev) => {
            const isSelected = selectedEvent.year === ev.year;
            return (
              <button
                key={ev.year}
                onClick={() => setSelectedEvent(ev)}
                className={`relative px-6 py-3 rounded-xl flex flex-col items-center justify-center min-w-[120px] transition-all cursor-pointer border ${
                  isSelected 
                    ? 'bg-[#0E2922] text-amber-300 border-amber-400 font-bold scale-105 shadow-lg shadow-emerald-900/35' 
                    : 'bg-white/5 hover:bg-white/10 border-transparent text-stone-400'
                }`}
              >
                <span className="font-mono text-[16px] md:text-[14px] tracking-widest">{ev.year}</span>
                <span className="font-serif italic text-[12px] md:text-[10px] opacity-75 whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] mt-0.5">
                  {ev.title.split(' ')[0]}
                </span>
                
                {/* Visual marker inside under state */}
                {isSelected && (
                  <motion.span 
                    layoutId="timeline-underline" 
                    className="absolute -bottom-1 w-6 h-1 bg-amber-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Focus Event detail view */}
        <div className="lg:col-span-12 bg-slate-950/50 rounded-2xl border border-white/5 p-6 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent.year}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              
              {/* Event year display */}
              <div className="md:col-span-3 text-center md:text-left border-r border-white/5 pr-4 space-y-2">
                <span className="font-mono text-[42px] font-black text-amber-300 tracking-tighter leading-none block">
                  {selectedEvent.year}
                </span>
                
                <span className="bg-[#183D33] text-emerald-300 font-mono text-[10px] md:text-[8px] px-2.5 py-1 rounded inline-block uppercase tracking-widest font-extrabold border border-emerald-500/10">
                  Lược Sử Di Sản
                </span>
              </div>

              {/* Event content core */}
              <div className="md:col-span-6 space-y-2">
                <h4 className="font-prata text-lg md:text-xl text-white font-medium uppercase leading-tight">
                  {selectedEvent.vietnameseTitle}
                </h4>
                <p className="font-serif text-sm leading-relaxed text-stone-300 text-justify">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Economy or fun facts */}
              <div className="md:col-span-3 space-y-4 bg-slate-900/60 p-4 rounded-xl border border-white/5">
                {selectedEvent.economicValue && (
                  <div className="text-left space-y-1">
                    <span className="font-mono text-[10px] md:text-[8px] text-stone-400 uppercase tracking-widest block font-bold">
                      GIÁ TRỊ/QUY MÔ:
                    </span>
                    <span className="font-serif text-amber-300 font-bold block italic">
                      {selectedEvent.economicValue}
                    </span>
                  </div>
                )}

                {selectedEvent.funFact && (
                  <div className="text-left space-y-1">
                    <span className="font-mono text-[10px] md:text-[8px] text-stone-400 uppercase tracking-widest block font-bold">
                      BẠN CÓ BIẾT:
                    </span>
                    <p className="font-sans text-[13px] md:text-[11px] leading-relaxed text-stone-300">
                      {selectedEvent.funFact}
                    </p>
                  </div>
                )}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}
