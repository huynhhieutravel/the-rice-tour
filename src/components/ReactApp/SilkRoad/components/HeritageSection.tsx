import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, BookOpen, MapPin, Milestone, ChevronRight, Eye } from 'lucide-react';
import { heritagesData } from '../data/silkroadData';
import type { HeritageItem } from '../types';

export default function HeritageSection() {
  const [activeId, setActiveId] = useState<string>(heritagesData[0].id);
  const selectedHeritage = heritagesData.find(h => h.id === activeId) || heritagesData[0];

  return (
    <section id="heritage-section" className="scroll-mt-12 py-16 px-4 md:px-8 bg-gold-50/30 border-t border-b border-gold-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 text-gold-600 font-mono text-xs uppercase tracking-widest mb-1.5">
            <Compass className="w-4 h-4 text-gold-500" />
            <span>Sphere II — Silk Road Heritage</span>
          </div>
          <h2 className="font-serif text-3.5xl md:text-5xl font-bold text-gold-900 tracking-tight">
            Silk Road Heritage
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto my-3" />
          <p className="font-sans text-sm text-gold-700 max-w-xl mx-auto">
            Hành trình ngược thời gian về thời kỳ vàng son của Con Đường Tơ Lụa, nơi giao thoa của tín ngưỡng, kiến trúc và giao thương cổ đại.
          </p>
        </div>

        {/* Master Flexboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left list: Navigation (4 cols) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3.5 justify-center">
            {heritagesData.map((heritage) => {
              const isActive = heritage.id === activeId;
              return (
                <button
                  key={heritage.id}
                  onClick={() => setActiveId(heritage.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer focus:outline-none flex flex-col justify-between ${
                    isActive 
                      ? 'bg-gold-800 border-gold-900 text-white shadow-md scale-[1.01]' 
                      : 'bg-white border-gold-250/80 text-gold-900 hover:border-gold-400 hover:bg-gold-50/50'
                  }`}
                >
                  <div>
                    <span className={`font-mono text-[9px] tracking-widest block uppercase mb-1 ${
                      isActive ? 'text-gold-200' : 'text-gold-600'
                    }`}>
                      {heritage.period}
                    </span>
                    <h3 className="font-serif text-lg font-bold tracking-tight mb-2 leading-tight">
                      {heritage.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-3 text-[10px] font-display font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1 opacity-85">
                      <MapPin className="w-3.5 h-3.5" /> {heritage.location}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1 rotate-90 lg:rotate-0' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right box: Rich Detail Focus (8 cols) */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-2xl border border-gold-250 shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden">
            
            {/* Structural corner overlay */}
            <div className="absolute top-2 left-2 border-t border-l border-gold-300 w-6 h-6 pointer-events-none" />
            <div className="absolute top-2 right-2 border-t border-r border-gold-300 w-6 h-6 pointer-events-none" />
            <div className="absolute bottom-2 left-2 border-b border-l border-gold-300 w-6 h-6 pointer-events-none" />
            <div className="absolute bottom-2 right-2 border-b border-r border-gold-300 w-6 h-6 pointer-events-none" />

            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-gold-600 font-bold block mb-1">
                  {selectedHeritage.vietnameseTitle}
                </span>
                <span className="text-[9px] font-display tracking-widest uppercase text-gold-500 block mb-2">
                  TIMELINE: {selectedHeritage.period}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl font-semibold text-gold-900 leading-tight">
                  {selectedHeritage.title}
                </h4>
              </div>

              <p className="text-xs md:text-sm text-gold-800 font-light leading-relaxed">
                {selectedHeritage.description}
              </p>

              {/* Architectural Insight block */}
              <div className="bg-gold-50 p-4 rounded-xl border border-gold-200">
                <span className="font-display font-bold text-[9px] tracking-wider text-gold-700 block mb-1.5 uppercase flex items-center gap-1">
                  <Milestone className="w-3.5 h-3.5 text-gold-500" /> Architectural Highlights
                </span>
                <span className="text-xs text-gold-900 leading-relaxed block font-medium">
                  {selectedHeritage.architecture}
                </span>
              </div>
            </div>

            {/* Big heritage illustration overlay */}
            <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-xl overflow-hidden border border-gold-200 shadow-sm bg-gold-100 shrink-0">
              <img
                src={selectedHeritage.image}
                alt={selectedHeritage.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/60 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="absolute bottom-3.5 left-4 text-white">
                <span className="text-[9px] font-mono uppercase text-gold-300 tracking-wider block">
                  HERITAGE CARD
                </span>
                <span className="font-serif text-sm italic block text-gold-50">
                  {selectedHeritage.location}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
