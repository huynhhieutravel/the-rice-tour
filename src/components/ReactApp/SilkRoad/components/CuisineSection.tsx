import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Soup, Heart, Sparkles, BookOpen, Clock, Users } from 'lucide-react';
import { cuisinesData } from '../data/silkroadData';
import type { CuisineItem } from '../types';

export default function CuisineSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'beverage'>('all');
  const [selectedDish, setSelectedDish] = useState<CuisineItem | null>(null);

  const filteredCuisines = cuisinesData.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section id="cuisine-section" className="scroll-mt-12 py-16 px-4 md:px-8 bg-gold-50/20 border-t border-b border-gold-250">
      <div className="max-w-6xl mx-auto">
        
        {/* Title area */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 text-gold-600 font-mono text-xs uppercase tracking-widest mb-1.5">
            <Soup className="w-4 h-4 text-gold-500" />
            <span>Sphere IV — Local Cuisine</span>
          </div>
          <h2 className="font-serif text-3.5xl md:text-5xl font-bold text-gold-900 tracking-tight">
            Central Asian Culinary Arts
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto my-3" />
          <p className="font-sans text-sm text-gold-700 max-w-xl mx-auto">
            Khám phá hương vị ẩm thực du mục thuần khiết từ mỡ cừu béo ngậy, thảo mộc dại dã sinh, và những loại đồ uống lên men truyền thống.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2.5 mb-10 max-w-md mx-auto">
          {['all', 'food', 'beverage'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as any);
                setSelectedDish(null);
              }}
              className={`px-4 py-1.5 font-display text-xxs font-bold tracking-widest uppercase rounded-lg border cursor-pointer focus:outline-none transition-all ${
                activeTab === tab 
                  ? 'bg-gold-800 border-gold-900 text-white shadow-sm' 
                  : 'bg-white border-gold-250 text-gold-700 hover:border-gold-450 hover:text-gold-950'
              }`}
            >
              {tab === 'all' && 'Tất cả món ngon'}
              {tab === 'food' && 'Món Ăn Du Mục'}
              {tab === 'beverage' && 'Đồ Uống Lên Men'}
            </button>
          ))}
        </div>

        {/* Dining Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredCuisines.map((item) => {
            const isChosen = selectedDish?.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedDish(isChosen ? null : item)}
                className={`group flex flex-col justify-between bg-white rounded-2xl border p-4.5 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  isChosen ? 'ring-2 ring-gold-500 border-transparent bg-gold-50/50' : 'border-gold-250/70 hover:border-gold-400'
                }`}
              >
                <div>
                  {/* Photo frame */}
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-gold-150/80 mb-3.5 bg-gold-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/40 text-white font-mono text-[9px] font-bold rounded uppercase tracking-wider backdrop-blur-sm">
                      {item.type}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-widest text-gold-600 block mb-1">
                    {item.vietnameseName}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-gold-900 leading-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gold-700 font-light leading-relaxed line-clamp-3 mb-2">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-gold-150 pt-3 flex items-center justify-between text-[10px] font-display font-bold uppercase tracking-wider text-gold-800">
                  <span>{isChosen ? 'Đóng chi tiết' : 'Xem Công Thức & Nghi Lễ'}</span>
                  <span className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 text-xs font-serif font-extrabold group-hover:bg-gold-800 group-hover:text-white transition-colors">
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal-like Overlay Card below when a culinary item is selected */}
        <AnimatePresence>
          {selectedDish && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-10 bg-white p-6 md:p-8 rounded-2xl border-2 border-gold-300 shadow-xl max-w-3xl mx-auto position relative"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-7 h-7 text-gold-600 hover:text-gold-900 border border-gold-200 hover:bg-gold-100 rounded-full flex items-center justify-center cursor-pointer text-xs font-bold font-mono"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Product spec block (5 cols) */}
                <div className="md:col-span-5 space-y-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gold-200 shadow-sm bg-gold-100">
                    <img
                      src={selectedDish.image}
                      alt={selectedDish.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Little culinary badges info */}
                  <div className="grid grid-cols-2 gap-2 text-center text-xxs font-display font-semibold uppercase tracking-wider">
                    <div className="p-2.5 bg-gold-50 border border-gold-200 rounded-lg flex flex-col items-center gap-1">
                      <Clock className="w-4 h-4 text-gold-600" />
                      <span>Cooking Cauldron</span>
                    </div>
                    <div className="p-2.5 bg-gold-50 border border-gold-200 rounded-lg flex flex-col items-center gap-1">
                      <Users className="w-4 h-4 text-gold-600" />
                      <span>Family Feast size</span>
                    </div>
                  </div>
                </div>

                {/* Narrative block (7 cols) */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gold-600 font-bold block mb-1">
                      {selectedDish.vietnameseName}
                    </span>
                    <h4 className="font-serif text-2xl md:text-3.5xl font-bold text-gold-900 leading-none">
                      {selectedDish.name}
                    </h4>
                  </div>

                  <div>
                    <span className="font-display font-bold text-[9px] tracking-wider text-gold-600 block uppercase mb-1.5">
                      Core Nomadic Ingredients
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedDish.ingredients.map((ing, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-gold-100 border border-gold-200 rounded-md text-[10px] font-medium text-gold-800">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tradition & Consumption protocol */}
                  <div className="p-4 bg-gold-50 border border-gold-200 rounded-xl space-y-1.5">
                    <span className="font-display font-bold text-[9px] tracking-wider text-gold-700 block uppercase flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-gold-600" /> Cultural Consumptive Rituals
                    </span>
                    <p className="text-xs text-gold-900 leading-relaxed font-light italic">
                      {selectedDish.tradition}
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
