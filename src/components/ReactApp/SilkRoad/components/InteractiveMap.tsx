import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, Eye, Calendar, Sparkles, Compass } from 'lucide-react';
import { locationsData } from '../data/silkroadData';
import type { LocationPoint } from '../types';

interface InteractiveMapProps {
  selectedId: string;
  setSelectedId: (id: string) => void;
  passengerName: string;
}

export default function InteractiveMap({ selectedId, setSelectedId, passengerName }: InteractiveMapProps) {
  const selectedLocation = locationsData.find(loc => loc.id === selectedId) || locationsData[0];
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const handleLocationSwitch = (id: string) => {
    setSelectedId(id);
    setActiveImageIdx(0);
  };

  return (
    <div className="vintage-paper border-t border-b border-gold-300 py-10 px-4 md:px-8 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto">
        
        {/* Title area */}
        <div className="text-center mb-10">
          <span className="font-mono text-xs text-gold-600 tracking-widest uppercase block mb-1">
            Section I — Immersive Logistics
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-gold-900 font-bold tracking-tight">
            The Golden Caravan Trail Map
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto my-3" />
          <p className="font-sans text-sm text-gold-700 max-w-xl mx-auto">
            Click on any station on the ancient route to visualize your detailed day-by-day travel map, altitudes, and curated photo collections.
          </p>
        </div>

        {/* Grand Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Dynamic Interactive Map Visualizer (4 cols) */}
          <div className="lg:col-span-5 bg-gold-100/50 p-6 rounded-2xl border-2 border-gold-200 shadow-md relative overflow-hidden backdrop-blur-sm">
            <span className="font-display text-xxs tracking-widest text-gold-600 uppercase block mb-4 font-bold">
              Topographic Path Chart
            </span>

            {/* Simulated Vintage Map Background */}
            <div className="relative aspect-square w-full border border-gold-300/60 rounded-xl bg-gold-50/40 p-4 shadow-inner overflow-hidden">
              
              {/* Map grid lines */}
              <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 pointer-events-none opacity-30">
                <div className="border-r border-dashed border-gold-300 col-span-1" />
                <div className="border-r border-dashed border-gold-300 col-span-1" />
                <div className="border-r border-dashed border-gold-300 col-span-1" />
                <div className="border-r border-dashed border-gold-300 col-span-1" />
                <div className="border-b border-dashed border-gold-300 row-span-1 absolute w-full top-1/5" />
                <div className="border-b border-dashed border-gold-300 row-span-1 absolute w-full top-2/5" />
                <div className="border-b border-dashed border-gold-300 row-span-1 absolute w-full top-3/5" />
                <div className="border-b border-dashed border-gold-300 row-span-1 absolute w-full top-4/5" />
              </div>

              {/* Decorative Compass Rose and Mountain doodles */}
              <div className="absolute right-4 top-4 w-12 h-12 opacity-25 border border-gold-800 rounded-full flex items-center justify-center pointer-events-none">
                <Compass className="w-6 h-6 text-gold-800 animate-spin-slow" />
              </div>

              {/* Map SVG Routes Connection */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line 
                  x1="25%" y1="35%" x2="50%" y2="48%" 
                  className="stroke-gold-400 stroke-2 dashed-map-line"
                />
                <line 
                  x1="50%" y1="48%" x2="68%" y2="65%" 
                  className="stroke-gold-400 stroke-2 dashed-map-line"
                />
                <line 
                  x1="68%" y1="65%" x2="82%" y2="85%" 
                  className="stroke-gold-400 stroke-2 dashed-map-line"
                />
              </svg>

              {/* Location Pins & Interactivity */}
              {locationsData.map((loc, idx) => {
                const isActive = loc.id === selectedId;
                return (
                  <div
                    key={loc.id}
                    className="absolute z-10 transition-transform hover:scale-110"
                    style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                  >
                    <button
                      onClick={() => handleLocationSwitch(loc.id)}
                      className="group/btn relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer focus:outline-none"
                    >
                      {/* Concentric pulsing circles */}
                      {isActive && (
                        <>
                          <span className="absolute w-10 h-10 bg-gold-400/20 rounded-full animate-ping pointer-events-none" />
                          <span className="absolute w-6 h-6 bg-gold-500/10 rounded-full border border-gold-500 animate-pulse pointer-events-none" />
                        </>
                      )}
                      
                      {/* Marker Body */}
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all shadow ${
                        isActive 
                          ? 'bg-gold-600 border-gold-800 text-gold-100 scale-110 shadow-lg' 
                          : 'bg-white border-gold-300 text-gold-700 hover:border-gold-500 hover:text-gold-900'
                      }`}>
                        <span className="font-mono text-xs font-extrabold">{idx + 1}</span>
                      </div>

                      {/* Floating Text Indicator */}
                      <span className={`px-2 py-0.5 mt-1 rounded text-[8px] md:text-[9px] font-bold font-display uppercase tracking-wider shadow-sm border transition-colors ${
                        isActive 
                          ? 'bg-gold-800 border-gold-800 text-white' 
                          : 'bg-gold-50/95 border-gold-300 text-gold-800 group-hover/btn:bg-gold-100'
                      }`}>
                        {loc.name}
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* Kazakhstan-Kyrgyzstan Border Illustration */}
              <div className="absolute top-1/2 left-4 px-2 py-0.5 border border-dashed border-gold-300 rounded text-[8px] font-mono tracking-widest text-gold-400 select-none rotate-12">
                ------ BORDER LINE ------
              </div>
              <div className="absolute top-1/4 left-1/3 text-[9px] font-mono tracking-widest text-gold-400 select-none uppercase">
                Kazakhstan
              </div>
              <div className="absolute bottom-1/4 right-1/4 text-[9px] font-mono tracking-widest text-gold-400 select-none uppercase">
                Kyrgyzstan
              </div>
            </div>

            {/* Progression Bar summary */}
            <div className="mt-6 flex justify-between items-center bg-gold-50/60 p-3 rounded-lg border border-gold-200">
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase text-gold-500 block">Current Itinerary Segment</span>
                <span className="text-sm font-bold text-gold-900 font-serif">{selectedLocation.name}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-gold-500 block">Nomadic Span</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 bg-gold-200 text-gold-800 rounded-full font-display">
                  {selectedLocation.days}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Information Panel (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Details Card */}
            <div 
              id={`location-${selectedLocation.id}`}
              className="bg-white p-6 rounded-2xl border border-gold-250 shadow-md relative"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20px] right-[-20px] w-12 h-12 bg-gold-100 rotate-45 border-b border-gold-300" />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5 text-gold-600 font-mono text-xs">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>{selectedLocation.vietnameseName}</span>
                </div>
                <div className="px-3 py-1 bg-gold-100 border border-gold-200 rounded text-xs font-mono font-bold text-gold-800">
                  ALTITUDE: {selectedLocation.altitude}
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3.5xl text-gold-900 font-semibold mb-3 leading-tight block">
                {selectedLocation.title}
              </h3>
              
              <p className="font-sans text-sm text-gold-800 leading-relaxed font-light">
                {selectedLocation.description}
              </p>

              {/* Golden Highlight block */}
              <div className="my-5 p-4 border-l-4 border-gold-500 bg-gold-50/80 rounded-r-lg flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-bold text-xxs tracking-wider uppercase text-gold-700 block mb-0.5">
                    Highlight of this Station (For Hùng & {passengerName})
                  </span>
                  <span className="text-xs text-gold-900 italic font-medium leading-relaxed block">
                    {selectedLocation.keyHighlight}
                  </span>
                </div>
              </div>

              {/* Day-by-Day Activities */}
              <div>
                <span className="font-display font-semibold text-xxs tracking-wider uppercase text-gold-500 block mb-3">
                  Curated Daily Activities
                </span>
                <ul className="space-y-3">
                  {selectedLocation.activities.map((act, index) => (
                    <li key={index} className="flex gap-3 items-start text-xs text-gold-800 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-gold-200/80 text-gold-800 flex items-center justify-center font-mono font-semibold shrink-0">
                        {index + 1}
                      </span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dynamic Gallery Slider underneath details Card */}
            <div className="bg-white p-4 rounded-2xl border border-gold-250 shadow-md">
              <span className="font-display font-semibold text-xxs tracking-wider uppercase text-gold-500 block mb-3">
                Station Photo-Journal
              </span>
              
              <div className="grid grid-cols-12 gap-3">
                
                {/* Mega highlighted photo (8 cols) */}
                <div className="col-span-8 relative aspect-video rounded-xl overflow-hidden border border-gold-200 shadow-sm bg-gold-50 group">
                  <img
                    src={selectedLocation.gallery[activeImageIdx]}
                    alt={`${selectedLocation.name} Active Frame`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white md:bg-black/25 md:px-2 md:py-0.5 rounded md:backdrop-blur-sm">
                    <span className="text-[10px] font-mono tracking-wider">PHOTOGRAPH {activeImageIdx + 1} OF 3</span>
                    <span className="text-[9px] font-display uppercase tracking-widest flex items-center gap-1">
                      <Eye className="w-3 h-3" /> PRESTIGE SHOT
                    </span>
                  </div>
                </div>

                {/* Vertical Thumbnails grid (4 cols) */}
                <div className="col-span-4 flex flex-col justify-between gap-1.5">
                  {selectedLocation.gallery.map((imgUrl, thumbIdx) => {
                    const isSelected = thumbIdx === activeImageIdx;
                    return (
                      <button
                        key={thumbIdx}
                        onClick={() => setActiveImageIdx(thumbIdx)}
                        className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                          isSelected 
                            ? 'border-gold-500 scale-102 shadow-md' 
                            : 'border-transparent opacity-60 hover:opacity-100 hover:scale-101'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt="Thumbnail"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-gold-500/10 pointer-events-none" />
                        )}
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
