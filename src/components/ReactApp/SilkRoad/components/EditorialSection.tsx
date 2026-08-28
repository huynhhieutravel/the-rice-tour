import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Eye, Image as ImageIcon, Sparkles, Sliders, Check, RefreshCw } from 'lucide-react';
import { editorialsData } from '../data/silkroadData';
import type { EditorialMemory } from '../types';

export default function EditorialSection() {
  const [activeMoment, setActiveMoment] = useState<EditorialMemory>(editorialsData[0]);
  
  // Magazine generator preferences
  const [photoFilter, setPhotoFilter] = useState<'sepia' | 'vintage' | 'high-contrast' | 'nature'>('vintage');
  const [magazineTitle, setMagazineTitle] = useState('SILKROAD NOMAD');
  const [magazineQuote, setMagazineQuote] = useState('Đất lạnh nhuộm đầy cát đỏ hoang dại.');

  return (
    <section id="editorials-section" className="scroll-mt-12 py-16 px-4 md:px-8 bg-white max-w-6xl mx-auto">
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gold-250 pb-6 mb-12">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-1 text-gold-600 font-mono text-xs uppercase tracking-widest mb-1.5 font-bold">
            <Camera className="w-4 h-4 text-gold-500" />
            <span>Sphere V — Editorial Moments</span>
          </div>
          <h2 className="font-serif text-3.5xl md:text-5xl font-bold text-gold-900 leading-tight">
            Editorial Moments
          </h2>
          <p className="font-serif italic text-sm text-gold-700 mt-1">
            Gợi ý phong cách thời trang và góc chụp để tạo nên những bộ ảnh ấn tượng tạp chí.
          </p>
        </div>
        <div className="max-w-xs text-right">
          <span className="text-[10px] uppercase font-mono tracking-wider text-gold-500 block mb-1">Aesthetic Guideline</span>
          <span className="text-xs text-gold-805 font-light block leading-relaxed">
            Bohemian nomad accents. Earth tones, flowing fabrics, wool ponchos, and high contrast.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* LEFT: Photo shoot directories & details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <span className="font-display font-bold text-[9px] tracking-widest text-gold-600 block uppercase">
              Curated Photoshoot Locations
            </span>

            {/* Selector list */}
            <div className="space-y-2.5">
              {editorialsData.map((moment) => {
                const isActive = moment.id === activeMoment.id;
                return (
                  <button
                    key={moment.id}
                    onClick={() => {
                      setActiveMoment(moment);
                      setMagazineQuote(moment.quote.replace(/"/g, ''));
                    }}
                    className={`w-full text-left p-4.5 rounded-xl border transition-all cursor-pointer focus:outline-none flex gap-3 ${
                      isActive 
                        ? 'bg-gold-50/70 border-gold-400 shadow-sm' 
                        : 'bg-white border-gold-200 text-gold-700 hover:border-gold-305'
                    }`}
                  >
                    <IconBadge isSelected={isActive} />
                    <div>
                      <span className="text-[10px] font-mono text-gold-500 block uppercase mb-0.5">
                        {moment.location}
                      </span>
                      <span className="font-serif text-sm font-extrabold text-gold-900 leading-tight block">
                        {moment.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Styling Tips & Outfit specs */}
          <div className="bg-gold-50/50 p-5 rounded-2xl border border-gold-200 space-y-3.5">
            <span className="font-display font-bold text-[9px] tracking-widest text-gold-700 block uppercase border-b border-gold-200 pb-1 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-gold-600" /> Fashion Stylist Board
            </span>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-gold-500 block">Outfits & Textiles Recommended</span>
              <span className="text-xs text-gold-905 block leading-relaxed font-semibold">
                👗 {activeMoment.clothingTip}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-gold-500 block">Posing & Wind Directives</span>
              <span className="text-xs text-gold-905 block leading-relaxed font-light">
                📸 {activeMoment.poseTip}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: High Interactive "Editorial Polarizer Cover Maker" (7 cols) */}
        <div className="lg:col-span-7 bg-gold-100/30 p-6 rounded-2xl border-2 border-gold-250 flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-display font-bold text-[9px] tracking-widest text-gold-600 block uppercase">
                Dynamic Interactive Cover
              </span>
              <span className="text-[9px] font-mono text-gold-500">COVER GENERATOR v1.2</span>
            </div>
            
            <p className="text-xs text-gold-700 leading-relaxed mb-6">
              Create a bespoke travel magazine cover representing your travel aesthetic. Select photographic filters, change headers/quotes, and observe changes live!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Cover Canvas container (7 cols) */}
              <div className="md:col-span-7 relative aspect-[3/4] w-full rounded-xl border-4 border-gold-400 overflow-hidden shadow-2xl bg-black vintage-paper select-none">
                
                {/* Photo with selected filter */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={activeMoment.image}
                    alt={activeMoment.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      photoFilter === 'sepia' ? 'sepia contrast-110 saturate-[0.7]' :
                      photoFilter === 'vintage' ? 'sepia-[0.35] brightness-95 saturate-[0.85]' :
                      photoFilter === 'high-contrast' ? 'contrast-125 saturate-120 md:brightness-105' :
                      'saturate-110 contract-95'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  {/* Grain layer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 mix-blend-multiply pointer-events-none" />
                </div>

                {/* Typography Layer */}
                <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between pointer-events-none text-white text-center">
                  
                  {/* Top Header */}
                  <div>
                    <span className="text-[7px] tracking-[0.25em] font-display uppercase block text-gold-300">
                      FIT TOUR COLLAGE SERIES
                    </span>
                    <h3 className="font-serif text-sm px-2 tracking-[0.1em] font-extrabold uppercase border-b border-t border-gold-400/40 py-0.5 mt-0.5">
                      {magazineTitle || 'SILKROAD'}
                    </h3>
                  </div>

                  {/* Curated quote bottom banner */}
                  <div>
                    <p className="font-serif italic text-xs leading-relaxed text-gold-100 pr-2 pl-2">
                       "{magazineQuote || 'Theo dấu chân Con Đường Tơ Lụa cổ.'}"
                    </p>
                    <span className="text-[7px] tracking-widest font-mono text-gold-400 uppercase mt-1 block">
                      {activeMoment.location}
                    </span>
                  </div>

                </div>

              </div>

              {/* Preferences Editor (5 cols) */}
              <div className="md:col-span-5 space-y-4">
                
                {/* Header configuration */}
                <div className="space-y-1">
                  <label id="header-label" className="text-[10px] font-mono uppercase text-gold-600 block font-bold">
                    Magazine Header
                  </label>
                  <input
                    id="magazine-header-input"
                    type="text"
                    value={magazineTitle}
                    onChange={(e) => setMagazineTitle(e.target.value)}
                    className="w-full text-xs p-2 bg-white border border-gold-250 rounded font-serif text-gold-900 focus:outline-none"
                    placeholder="SILKROAD"
                  />
                </div>

                {/* Cover Quote configuration */}
                <div className="space-y-1">
                  <label id="quote-label" className="text-[10px] font-mono uppercase text-gold-600 block font-bold">
                    Curated Quote Text
                  </label>
                  <textarea
                    id="magazine-quote-input"
                    rows={2}
                    value={magazineQuote}
                    onChange={(e) => setMagazineQuote(e.target.value)}
                    className="w-full text-xs p-2 bg-white border border-gold-250 rounded italic text-gold-900 focus:outline-none resize-none"
                    placeholder="Write a custom aesthetic line..."
                  />
                </div>

                {/* Filters selection */}
                <div className="space-y-1.5">
                  <label id="filters-label" className="text-[10px] font-mono uppercase text-gold-600 block font-bold">
                     Tone Polarization
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'vintage', label: 'Vintage Gold' },
                      { id: 'sepia', label: 'Caravan Sepia' },
                      { id: 'high-contrast', label: 'Bespoke Vivid' },
                      { id: 'nature', label: 'Alpine Raw' }
                    ].map((filt) => (
                      <button
                        key={filt.id}
                        onClick={() => setPhotoFilter(filt.id as any)}
                        className={`text-[9px] py-1.5 font-display font-medium rounded border cursor-pointer capitalize transition-all ${
                          photoFilter === filt.id
                            ? 'bg-gold-800 text-white border-gold-900 shadow-sm'
                            : 'bg-white border-gold-200 text-gold-700 hover:border-gold-350'
                        }`}
                      >
                        {filt.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Prompt reset */}
          <div className="mt-6 pt-3 border-t border-gold-200 flex justify-between items-center text-xxs font-display text-gold-700">
            <span className="flex items-center gap-1 font-semibold">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Auto-Polarized Cover Ready
            </span>
            <button
              onClick={() => {
                setMagazineTitle('SILKROAD NOMAD');
                setPhotoFilter('vintage');
                setMagazineQuote(activeMoment.quote.replace(/"/g, ''));
              }}
              className="text-gold-800 hover:text-gold-950 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" /> Reset default
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

function IconBadge({ isSelected }: { isSelected: boolean }) {
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
      isSelected 
        ? 'bg-gold-800 border-gold-800 text-white' 
        : 'bg-gold-100 border-gold-200 text-gold-600'
    }`}>
      {isSelected ? <Sparkles className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
    </div>
  );
}
