import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tent, Hammer, Sparkles, AlertCircle, Compass, Heart } from 'lucide-react';
import { nomadsData } from '../data/silkroadData';

export default function NomadicSection() {
  const [activeNomadIdx, setActiveNomadIdx] = useState<number>(0);
  const selectedNomad = nomadsData[activeNomadIdx];

  // Interactive Yurt Assembly Game state
  const [yurtStep, setYurtStep] = useState<number>(1);
  const [yurtState, setYurtState] = useState({
    latticeWall: false,
    roofCrown: false,
    feltCover: false,
  });

  const handleYurtBuild = (stepNum: number) => {
    if (stepNum === 1) {
      setYurtState(prev => ({ ...prev, latticeWall: true }));
      setYurtStep(2);
    } else if (stepNum === 2) {
      if (!yurtState.latticeWall) return;
      setYurtState(prev => ({ ...prev, roofCrown: true }));
      setYurtStep(3);
    } else if (stepNum === 3) {
      if (!yurtState.latticeWall || !yurtState.roofCrown) return;
      setYurtState(prev => ({ ...prev, feltCover: true }));
      setYurtStep(4); // Fully Built!
    }
  };

  const resetYurt = () => {
    setYurtState({
      latticeWall: false,
      roofCrown: false,
      feltCover: false,
    });
    setYurtStep(1);
  };

  return (
    <section id="nomads-section" className="scroll-mt-12 py-16 px-4 md:px-8 bg-white max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gold-250 pb-6 mb-12">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-1 text-gold-600 font-mono text-xs uppercase tracking-widest mb-1.5">
            <Tent className="w-4 h-4 text-gold-500" />
            <span>Sphere III — Nomadic Experience</span>
          </div>
          <h2 className="font-serif text-3.5xl md:text-5xl font-bold text-gold-900 leading-tight">
            Nomadic Experience
          </h2>
          <p className="font-serif italic text-sm text-gold-700 mt-1">
            Đắm mình vào tinh thần tự do phóng khoáng trên yên ngựa và những túp lều nỉ ấm áp.
          </p>
        </div>
        <div className="max-w-xs text-right">
          <span className="text-[10px] uppercase font-mono tracking-wider text-gold-500 block mb-1">Nomadic Axiom</span>
          <span className="text-xs text-gold-800 font-light block leading-relaxed animate-pulse">
            "Ngôi nhà của người du mục là nơi yên xe hạ xuống, trời làm mái, cỏ xanh làm chiếu giường."
          </span>
        </div>
      </div>

      {/* Grand Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* LEFT CARD: Traditional Nomadic Spheres details (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Quick tab filters */}
          <div className="flex bg-gold-50/80 p-1.5 rounded-xl border border-gold-200 gap-1">
            {nomadsData.map((item, index) => {
              const flagActive = index === activeNomadIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNomadIdx(index)}
                  className={`flex-1 py-2 text-center rounded-lg font-display text-xxs font-bold uppercase tracking-wider transition-all cursor-pointer focus:outline-none ${
                    flagActive
                      ? 'bg-gold-800 text-white shadow-sm'
                      : 'text-gold-700 hover:text-gold-950 hover:bg-gold-100/60'
                  }`}
                >
                  {item.title.split(' ')[1] || item.title}
                </button>
              );
            })}
          </div>

          {/* Nomad detail presentation */}
          <div className="bg-gold-50/30 p-6 rounded-2xl border border-gold-200 space-y-4">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              
              {/* Photo representation */}
              <div className="w-full md:w-5/12 aspect-[4/3] rounded-xl overflow-hidden border border-gold-200 shrink-0">
                <img
                  src={selectedNomad.image}
                  alt={selectedNomad.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text info */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-gold-600 block uppercase font-bold">
                  {selectedNomad.vietnameseTitle}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gold-900">
                  {selectedNomad.title}
                </h3>
                <p className="text-xs text-gold-800 leading-relaxed font-light">
                  {selectedNomad.description}
                </p>
              </div>
            </div>

            {/* Sacred custom annotation */}
            <div className="p-4 rounded-xl bg-gold-100/40 border border-gold-200 mt-2 flex gap-3 items-start">
              <Sparkles className="w-5 h-5 text-gold-600 shrink-0 select-none" />
              <div>
                <span className="font-display font-semibold text-xxs text-gold-700 block uppercase mb-0.5">
                  The Nomadic Heritage Significance
                </span>
                <span className="text-xs text-gold-900 leading-relaxed block font-medium">
                  {selectedNomad.highlightText}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT CARD: Miniature Interactive "Assemble Your Yurt" Simulator Game (5 cols) */}
        <div className="lg:col-span-5 bg-gold-100/40 p-6 rounded-2xl border-2 border-gold-250 flex flex-col justify-between relative overflow-hidden">
          
          <div>
            <span className="font-display font-bold text-[9px] tracking-widest text-gold-600 block uppercase mb-1">
              Active Experience
            </span>
            <h4 className="font-serif text-lg font-bold text-gold-900 leading-tight">
              Interactive Yurt Assembly
            </h4>
            <div className="w-10 h-0.5 bg-gold-400 my-2" />
            <p className="text-xs text-gold-700 leading-relaxed mb-6">
              Unlike permanent concrete structures, du mục yurts can be assembled and fully dismantled in under 2 hours by family members. Tap the blueprints to build yours!
            </p>

            {/* Visual Assembly Canvas */}
            <div className="relative aspect-video w-full rounded-xl border border-gold-300 bg-gold-50/60 p-4 shadow-inner flex flex-col items-center justify-center overflow-hidden">
              
              {/* Dynamic blueprint outline or parts representing state */}
              <div className="relative w-36 h-28 flex flex-col items-center justify-end">
                
                {/* 1. Lattice Wall representation */}
                <div className={`w-28 h-12 border-2 border-dashed rounded-b-md transition-all duration-500 flex items-center justify-center ${
                  yurtState.latticeWall 
                    ? 'border-gold-850 bg-repeat bg-center' 
                    : 'border-gold-300 bg-transparent'
                }`}
                style={yurtState.latticeWall ? {
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 10 10\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0l10 10m-10 0L10 0\' stroke=\'%237c2d12\' stroke-width=\'1\'/%3E%3C/svg%3E")'
                } : undefined}
                >
                  {!yurtState.latticeWall && (
                    <span className="font-mono text-[8px] text-gold-400 select-none">1. WALL LATTICE</span>
                  )}
                </div>

                {/* 2. Roof crown struts representing state */}
                <div className={`absolute bottom-11 w-24 h-10 border-t-2 border-l-2 border-r-2 border-dashed rounded-t-full transition-all duration-500 flex items-center justify-center ${
                  yurtState.roofCrown 
                    ? 'border-gold-700 bg-orange-150/20' 
                    : 'border-gold-250 bg-transparent'
                }`}>
                  {yurtState.roofCrown ? (
                    /* The sacred Shanyrak wooden crown wheel */
                    <div className="w-7 h-7 rounded-full border border-gold-600 flex items-center justify-center animate-spin-slow bg-gold-100">
                      <div className="w-px h-7 bg-gold-600 absolute rotate-45" />
                      <div className="w-px h-7 bg-gold-600 absolute -rotate-45" />
                    </div>
                  ) : (
                    <span className="font-mono text-[8px] text-gold-450 select-none">2. SHANYRAK COUPLING</span>
                  )}
                </div>

                {/* 3. Felt cover sheet overlay */}
                {yurtState.feltCover && (
                  <div className="absolute inset-x-2 top-2 bottom-0 bg-gold-100 border border-gold-400/80 rounded-t-2xl opacity-90 shadow flex flex-col items-center justify-center p-1 pointer-events-none animate-bounce">
                    <Tent className="w-5 h-5 text-gold-800" />
                    <span className="font-display font-bold text-[8px] tracking-wider text-gold-850 uppercase">BOZ-UI COMPLETE</span>
                  </div>
                )}
              </div>

              {/* Progress Tracker */}
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-gold-200/50 rounded border border-gold-300 text-[8px] font-mono text-gold-800">
                {yurtStep === 4 ? 'BUILT ✔' : `STEP ${yurtStep} OF 3`}
              </div>
            </div>

            {/* Instruction Banner */}
            <div className="my-4 text-center">
              {yurtStep === 1 && (
                <p className="text-xs text-gold-800 font-semibold italic">➡ First: Assemble the circular wood lattice walls (Kerege).</p>
              )}
              {yurtStep === 2 && (
                <p className="text-xs text-gold-800 font-semibold italic">➡ Next: Host the sacred crown (Shanyrak) connected with rafters.</p>
              )}
              {yurtStep === 3 && (
                <p className="text-xs text-gold-800 font-semibold italic">➡ Final: Lay thick, warm sheets of white sheep felt over the wood skeleton.</p>
              )}
              {yurtStep === 4 && (
                <p className="text-xs text-emerald-800 font-extrabold flex items-center justify-center gap-1">
                  <Sparkles className="w-4 h-4 animate-spin-slow" /> Your sacred Yurt is fully up! Welcome traveler!
                </p>
              )}
            </div>
          </div>

          {/* Action trigger button */}
          <div className="flex gap-2.5">
            {yurtStep < 4 ? (
              <button
                onClick={() => handleYurtBuild(yurtStep)}
                className="flex-1 py-2.5 bg-gold-800 hover:bg-gold-700 text-white font-display text-xxs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 "
              >
                <Hammer className="w-4 h-4" />
                <span>
                  {yurtStep === 1 && 'Deploy Kerege Lattice'}
                  {yurtStep === 2 && 'Hoist Shanyrak Crown'}
                  {yurtStep === 3 && 'Wrap Felt Wool Blankets'}
                </span>
              </button>
            ) : (
              <button
                onClick={resetYurt}
                className="flex-1 py-2.5 bg-gold-200 hover:bg-gold-300 text-gold-850 font-display text-xxs font-bold uppercase tracking-widest rounded-xl transition-all border border-gold-300 cursor-pointer text-center"
              >
                Tái Dựng Lều Mới
              </button>
            )}
          </div>

        </div>

      </div>

    </section>
  );
}
