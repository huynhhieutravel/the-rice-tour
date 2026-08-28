import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, MapPin, Compass, Snowflake, Info, ArrowUpRight, Award, Footprints } from 'lucide-react';
import { ALASKA_HIGHLIGHTS } from '../data/alaskaData';
import type { GeographicHighlight } from '../types';

export default function InteractiveMap({ onSelectPoint }: { onSelectPoint?: (pt: GeographicHighlight) => void }) {
  const [selectedPt, setSelectedPt] = useState<GeographicHighlight>(ALASKA_HIGHLIGHTS[0]);

  const handlePointSelect = (pt: GeographicHighlight) => {
    setSelectedPt(pt);
    if (onSelectPoint) {
      onSelectPoint(pt);
    }
  };

  return (
    <div id="alaska-interactive-explorer" className="bg-[#0C1315] rounded-3xl border border-white/10 p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
      {/* Visual Ambient Light glow back of the map */}
      <div className="absolute w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] -top-12 -left-12 pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[90px] bottom-12 right-12 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
        
        {/* Left column: SVG Vector Map Representation */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          <div className="text-left">
            <span className="font-mono text-[11px] md:text-[9px] tracking-[0.4em] text-cyan-400 font-extrabold uppercase block">
              DỰ ÁN ARNATIC SERIES • MAP EXPLORER
            </span>
            <h3 className="font-prata text-xl md:text-2xl font-light text-white uppercase tracking-wider mt-1">
              Bản Đồ Địa Biên Cực Bắc
            </h3>
            <p className="font-serif italic text-sm md:text-xs text-stone-400 mt-0.5">
              Nhấp chọn các địa danh then chốt được nhắc đến trong sớ văn để giải mã sâu sắc vùng đất biên thùy.
            </p>
          </div>

          {/* SVG map canvas aspect container */}
          <div className="relative w-full aspect-[4/3] max-w-[650px] mx-auto bg-slate-950/80 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center p-4">
            
            {/* Arctic Compass Rose watermark */}
            <div className="absolute opacity-5 pointer-events-none w-56 h-56">
              <Compass className="w-full h-full text-white animate-spin-slow" />
            </div>

            {/* Simulated Geographic Grid Lines */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-20">
              <svg className="w-full h-full text-stone-700" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="25%" x2="100%" y2="25%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
                <line x1="0" y1="75%" x2="100%" y2="75%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
                <line x1="25%" y1="0" x2="25%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
                <line x1="75%" y1="0" x2="75%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
                
                {/* 60 deg latitude label */}
                <text x="5%" y="48%" fill="currentColor" fontSize="8" fontFamily="monospace">60° N LATITUDE</text>
                <text x="45%" y="96%" fill="currentColor" fontSize="8" fontFamily="monospace">150° W LONGITUDE</text>
              </svg>
            </div>

            {/* Simulated Coastline Vector Outline */}
            <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Complex curved path representing stylized coastline of southern Alaska */}
              <motion.path 
                d="M 5 20 Q 15 15 25 22 T 40 18 T 50 35 T 45 55 T 55 68 T 72 61 T 85 75 T 95 65" 
                stroke="rgba(168,209,219,0.3)" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />

              <path 
                d="M 50 35 L 45 55 L 55 68 Z" 
                fill="rgba(16,33,38,0.2)" 
              />
            </svg>

            {/* Geographical Connective Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="rgba(251,191,36,0.15)" strokeWidth="0.75" strokeDasharray="3,3">
                <line x1="42" y1="38" x2="48" y2="53" />
                <line x1="48" y1="53" x2="46" y2="64" />
                <line x1="46" y1="64" x2="53" y2="70" />
                <line x1="53" y1="70" x2="78" y2="65" />
              </g>
            </svg>

            {/* Interactive Pins */}
            {ALASKA_HIGHLIGHTS.map((pt) => {
              const isSelected = selectedPt.id === pt.id;
              
              return (
                <div
                  key={pt.id}
                  style={{ left: `${pt.coords.x}%`, top: `${pt.coords.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <button
                    onClick={() => handlePointSelect(pt)}
                    className="relative focus:outline-none cursor-pointer w-12 h-12 flex items-center justify-center -m-6 rounded-full"
                  >
                    {/* Pulsing ring */}
                    {isSelected && (
                      <span className="absolute inline-flex h-10 w-10 -left-3.5 -top-3.5 rounded-full bg-cyan-400/20 blur-[2px] animate-ping" />
                    )}

                    <div className={`p-1.5 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-amber-400 text-slate-950 scale-125 shadow-lg shadow-amber-400/30' 
                        : 'bg-slate-900 border border-white/20 text-cyan-300 hover:bg-slate-800 hover:scale-110'
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                    </div>

                    {/* Always-on Label */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-7 bg-slate-950/40 backdrop-blur-[2px] p-0.5 px-2 rounded text-[9px] md:text-[7.5px] font-mono tracking-[0.2em] uppercase whitespace-nowrap z-40 text-cyan-100/90 shadow-sm pointer-events-none">
                      {pt.name}
                    </span>

                    {/* Hover Feature Tooltip */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-11 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-800 border border-white/10 p-1.5 px-3 rounded-md text-[10px] md:text-[8px] font-sans whitespace-nowrap z-50 text-[#F2C94C] shadow-xl pointer-events-none opacity-0 group-hover:opacity-100">
                      {pt.feature}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Quick geographical status strip */}
          <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 text-[11px] md:text-[9px] font-mono tracking-widest text-[#A8D1DB] uppercase">
            <span>🌍 TOẠ ĐỘ THƯƠNG ĐOÀN KHẢO CỔ ALASKA</span>
            <span className="hidden sm:inline">MŨI CỰC BẮC NƠI HOANG DẠ VĨNH CỬU</span>
            <span>FIT TOUR ARNATIC SUITE 2026</span>
          </div>
        </div>

        {/* Right column: Editorial Detail Frame */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-white/10 p-6 text-left relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPt.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {/* Thumbnail image with frosty scanline overlay */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10">
                <img 
                  src={selectedPt.image} 
                  alt={selectedPt.name} 
                  className="w-full h-full object-cover filter contrast-[1.05] saturate-[0.85]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <span className="absolute bottom-3 left-3 bg-cyan-900/90 text-cyan-200 font-mono text-[10px] md:text-[8px] px-2.5 py-1 rounded border border-cyan-400/20 uppercase tracking-widest font-black">
                  {selectedPt.feature}
                </span>
              </div>

              {/* Geographical metadata titles */}
              <div className="space-y-1">
                <span className="font-mono text-[11px] md:text-[9px] text-[#A8D1DB]/70 tracking-widest uppercase block">
                  {selectedPt.name}
                </span>
                <h4 className="font-prata text-xl text-white font-medium uppercase leading-tight">
                  {selectedPt.vietnameseName}
                </h4>
                {selectedPt.altitude && (
                  <span className="font-mono text-[11px] md:text-[9px] text-amber-300 uppercase block tracking-wider mt-0.5">
                    Độ cao vách núi: {selectedPt.altitude}
                  </span>
                )}
              </div>

              <p className="font-serif text-[15.5px] md:text-[13.5px] leading-relaxed text-stone-300 text-justify">
                "{selectedPt.description}"
              </p>

              {selectedPt.quote && (
                <div className="bg-slate-900/60 p-3 rounded-lg border-l-2 border-amber-500 text-left text-sm md:text-xs text-amber-300/90 italic font-serif leading-normal">
                  "{selectedPt.quote}"
                </div>
              )}

              {/* Curator advice */}
              <div className="pt-4 border-t border-white/5 space-y-1.5 text-sm md:text-xs text-stone-400">
                <span className="font-mono text-[10.5px] md:text-[8.5px] text-[#A8D1DB] uppercase block tracking-widest font-bold">
                  BÁO CÁO DI SẢN (HERITAGE STORY)
                </span>
                <p className="font-serif italic leading-relaxed text-slate-300">
                  {selectedPt.heritageStory}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>



        </div>

      </div>
    </div>
  );
}
