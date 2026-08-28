import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOCATIONS } from '../data';
import type { LadakhLocation } from '../types';
import { MapPin, Compass, Thermometer, ChevronRight, Activity, ArrowRight } from 'lucide-react';

export default function MemoryMap() {
  const [selectedLocation, setSelectedLocation] = useState<LadakhLocation>(LOCATIONS[0]);

  return (
    <section id="memory-map-section" className="relative bg-amber-50/50 py-20 px-4 md:px-8 border-y border-amber-900/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">Đại Bản Đồ Số</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
            Khắc Họa Đường Băng Tuyết & Sỏi Đá
          </h2>
          <div className="w-16 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          <p className="max-w-2xl mx-auto text-sm text-stone-600 font-sans">
            Bấm chọn từng tọa độ dừng chân trên bản đồ hành trình hiểm trở để xem trang nhật ký ký ức, 
            nhiệt độ thực tế, cùng độ cao rợn ngợp của dãy Tây Tạng.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Display (7 Columns) */}
          <div className="lg:col-span-7 bg-stone-900 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between border border-stone-800">
            {/* Background topographic feel or decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-15 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400 stroke-1 stroke-current fill-none">
                <circle cx="50" cy="50" r="10" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="30" strokeDasharray="3 4" />
                <circle cx="50" cy="50" r="40" strokeDasharray="4 2" />
                <path d="M 0,50 L 100,50 M 50,0 L 50,100" strokeWidth="0.2" />
              </svg>
            </div>

            {/* Top Bar of the Map */}
            <div className="relative z-10 flex items-center justify-between border-b border-stone-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-500 animate-spin-slow" />
                <span className="font-mono text-xs uppercase tracking-wider text-stone-300 font-semibold">Ladakh Route Map</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                ACTIVE MONITOR
              </div>
            </div>

            {/* Map Canvas */}
            <div className="relative aspect-16/10 w-full bg-stone-950/80 rounded-xl overflow-hidden border border-stone-800/80 p-2">
              
              {/* Dynamic SVG Road Network */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {/* Connecting road trail */}
                <motion.path
                  d="M 25,70 L 38,76 L 45,35 L 60,22 L 88,55"
                  fill="none"
                  stroke="#daaf5a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="3 3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Thick glowing route bridge connection */}
                <path
                  d="M 25,70 L 38,76 L 45,35 L 60,22 L 88,55"
                  fill="none"
                  stroke="#ce902f"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-10"
                />
              </svg>

              {/* Labels & Landmarks inside Map */}
              <div className="absolute bottom-3 left-4 z-10 text-[10px] font-mono text-stone-400 flex flex-col gap-0.5 pointer-events-none">
                <span>Rặng Karakoram-Himalaya Bản Đồ Địa Hình</span>
                <span>Tất cả vị trí thực tế trong hành trình</span>
              </div>

              {/* Interactive Location Marker Nodes */}
              {LOCATIONS.map((loc, index) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    id={`map-node-${loc.id}`}
                    onClick={() => setSelectedLocation(loc)}
                    style={{ left: `${loc.coordinate.x}%`, top: `${loc.coordinate.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  >
                    {/* Ring Pulse Effect */}
                    {isSelected && (
                      <span className="absolute -inset-4 rounded-full bg-amber-500/20 animate-ping duration-1000"></span>
                    )}

                    {/* Outer hover rings */}
                    <span className={`absolute -inset-2 rounded-full border transition-all duration-300 ${
                      isSelected ? 'border-amber-500/50 scale-100' : 'border-transparent scale-50 group-hover:scale-100 group-hover:border-stone-700/50'
                    }`}></span>

                    {/* Actual Button Icon */}
                    <div className={`relative flex items-center justify-center h-8 w-8 rounded-full shadow-lg transition-all duration-300 ${
                      isSelected 
                        ? 'bg-amber-500 text-stone-950 scale-110' 
                        : 'bg-stone-800 text-stone-300 group-hover:text-amber-400 group-hover:bg-stone-700'
                    }`}>
                      <span className="text-xs font-mono font-bold font-semibold">{index + 1}</span>
                    </div>

                    {/* Small tooltips on hover */}
                    <span className="pointer-events-none absolute bottom-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-stone-900 border border-stone-800 text-[10px] text-amber-50 rounded px-2 py-0.5 whitespace-nowrap shadow-md z-30 font-serif">
                      {loc.name} ({loc.elevation})
                    </span>
                  </button>
                );
              })}

              {/* Graphical Compass Lines */}
              <div className="absolute top-4 right-4 text-stone-600 select-none opacity-40 pointer-events-none">
                <Compass className="w-10 h-10" />
              </div>
            </div>

            {/* Quick stats on the map footer */}
            <div className="relative z-10 flex flex-wrap gap-4 mt-4 pt-4 border-t border-stone-800 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-stone-400">
                <span className="w-2 h-2 rounded-full bg-stone-600"></span>
                <span>Điểm Xuất Phát: <b>Leh City</b></span>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-600 self-center hidden sm:block" />
              <div className="flex items-center gap-1.5 text-stone-400">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Điểm Cuối: <b>Pangong Lake</b></span>
              </div>
              <div className="ml-auto text-amber-500/80 italic font-serif">
                Hành trình dài hơn 420 km đèo đá hiểm trở
              </div>
            </div>

          </div>

          {/* Interactive Journal Pane (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                id="journal-paper-card"
                className="bg-amber-50 shadow-lg border border-amber-950/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full relative"
                style={{
                  backgroundImage: "radial-gradient(#fbf0d9 0.5px, transparent 0.5px)",
                  backgroundSize: "16px 16px"
                }}
              >
                {/* Journal Binder Ring Decorative Elements */}
                <div className="absolute -left-3 top-6 bottom-6 w-1 flex flex-col justify-between items-center pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full border border-stone-300 bg-stone-200 shadow-inner -ml-1"></div>
                  ))}
                </div>

                <div>
                  {/* Ledger Header */}
                  <div className="flex justify-between items-start border-b border-amber-900/10 pb-4 mb-5">
                    <div>
                      <span className="text-[10px] font-mono text-amber-800 tracking-wider font-bold">LADAKH MEMORIES JOURNAL</span>
                      <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">{selectedLocation.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-stone-400 block">Độ Cao</span>
                      <span className="font-mono text-sm font-bold text-amber-700 bg-amber-100/50 px-2.5 py-0.5 rounded-full mt-1 inline-block border border-amber-200">
                        {selectedLocation.elevation}
                      </span>
                    </div>
                  </div>

                  {/* Environment metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-stone-900/5 border border-stone-950/5 rounded-xl p-3 flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-amber-700" />
                      <div>
                        <span className="text-[9px] font-mono text-stone-400 block uppercase">Nhiệt độ</span>
                        <span className="text-xs font-mono font-bold text-stone-800">{selectedLocation.temperature}</span>
                      </div>
                    </div>
                    
                    <div className="bg-stone-900/5 border border-stone-950/5 rounded-xl p-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="text-[9px] font-mono text-stone-400 block uppercase">Hiệu ứng</span>
                        <span className="text-xs font-sans text-stone-700 leading-tight font-medium block overflow-hidden truncate">
                          {selectedLocation.soundEffectName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Journal handwritten Entry content */}
                  <div>
                    <h4 className="font-serif text-xs uppercase tracking-wider text-amber-800 italic mb-2">
                      {selectedLocation.diaryTitle}
                    </h4>
                    <p className="font-serif text-stone-700 text-sm leading-relaxed italic border-l-2 border-amber-700/30 pl-4 py-1">
                      "{selectedLocation.diaryEntry}"
                    </p>
                  </div>
                </div>

                {/* Legend & Navigation Tips */}
                <div className="mt-8 pt-4 border-t border-amber-900/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                    <span>Nhật ký hành trình</span>
                  </div>
                  <div className="flex gap-1.5">
                    {LOCATIONS.map((loc, idx) => (
                      <button
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc)}
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] border transition-all ${
                          selectedLocation.id === loc.id
                            ? 'bg-amber-700 text-amber-50 border-amber-700 font-bold scale-110'
                            : 'bg-white opacity-60 border-stone-300 text-stone-600 hover:opacity-100'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
