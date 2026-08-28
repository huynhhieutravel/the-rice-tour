import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BACKPACK_ITEMS } from '../data';
import type { BackpackItem } from '../types';
import { Heart, ShieldCheck, ClipboardList, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Backpack() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'health' | 'essential' | 'sentimental'>('all');
  const [selectedItem, setSelectedItem] = useState<BackpackItem | null>(null);

  const filteredItems = BACKPACK_ITEMS.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="backpack-section" className="relative py-24 px-4 bg-stone-900 text-stone-150 border-t border-stone-800">
      
      {/* Decorative stars / ambient light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold block mb-2">Hành Trang Thiết Yếu</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Balo Đến Tso Moriri Tso Cần Chuẩn Bị Những Gì?
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4 mb-4"></div>
          <p className="max-w-2xl mx-auto text-sm text-stone-400 font-sans">
            Nhiệt độ khắc nghiệt và độ cao 4.522m của hồ Tso Moriri đòi hỏi sự chuẩn bị kỹ lưỡng. Đây là những vật dụng không thể thiếu giúp chuyến đi an toàn và trọn vẹn nhất.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Tất Cả Hành Trang', icon: ClipboardList },
            { id: 'health', label: 'Bảo Hộ Y Khoa', icon: Heart },
            { id: 'essential', label: 'Thực Phẩm & Tiện Ích', icon: ShieldCheck },
            { id: 'sentimental', label: 'Phao Đỡ Tinh Thần', icon: Gift },
          ].map(cat => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id as any);
                  setSelectedItem(null);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                    : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid and Interactive Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Item list (7 Columns) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => {
                const isSelected = selectedItem?.id === item.id;
                
                // Color codes based on category
                let badgeColor = '';
                if (item.category === 'health') badgeColor = 'bg-red-500/10 text-red-400 border-red-500/20';
                else if (item.category === 'essential') badgeColor = 'bg-sky-500/10 text-sky-400 border-sky-500/20';
                else badgeColor = 'bg-amber-500/10 text-amber-400 border-amber-500/20';

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`cursor-pointer rounded-xl p-5 border text-left transition-all duration-300 ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500 shadow-md scale-[1.02]'
                        : 'bg-stone-850/60 hover:bg-stone-800 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${badgeColor}`}>
                        {item.category === 'health' ? 'Y Khoa' : item.category === 'essential' ? 'Thiết Yếu' : 'Tinh Thần'}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400 font-semibold">{item.qty}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-400">
                      {item.vietnameseName}
                    </h3>
                    <p className="font-mono text-xs text-stone-400 mt-0.5 mb-3">{item.name}</p>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-400">Độ cần thiết:</span>
                      <span className={`font-semibold ${
                        item.importance === 'high' ? 'text-rose-400' : 'text-amber-400'
                      }`}>
                        {item.importance === 'high' ? '★★★ Cực kỳ cao' : '★★ Vừa đủ'}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right: Detailed Story card (5 Columns) */}
          <div className="md:col-span-5 self-stretch">
            <div className="bg-stone-850 border border-stone-800 rounded-xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

              {selectedItem ? (
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[11px] font-mono text-amber-500 uppercase tracking-widest font-bold block mb-2">Thuyết Minh Hành Lý</span>
                    
                    <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                      {selectedItem.vietnameseName}
                    </h3>
                    <p className="font-mono text-xs text-stone-400 mt-1 mb-6 italic">{selectedItem.name}</p>

                    <p className="text-sm font-sans text-stone-300 leading-relaxed bg-stone-900/30 p-4 rounded-xl border border-stone-800/60 mb-6 border-l-4 border-l-amber-500">
                      "{selectedItem.description}"
                    </p>

                    <div className="space-y-3 font-sans text-xs">
                      <div className="flex justify-between py-2 border-b border-stone-800 text-stone-400">
                        <span>Số lượng mang theo</span>
                        <span className="font-mono text-white font-semibold">{selectedItem.qty}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-stone-800 text-stone-400">
                        <span>Nhóm danh mục</span>
                        <span className="font-semibold text-white">
                          {selectedItem.category === 'health' ? '🛡️ Bảo vệ sức khỏe' : selectedItem.category === 'essential' ? '🎒 Tiện ích dã ngoại' : '❤️ Liệu pháp tâm lý'}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 text-stone-400">
                        <span>Tầm quan trọng thực tế</span>
                        <span className="font-mono text-white font-semibold uppercase">{selectedItem.importance === 'high' ? 'Khẩn cấp / Bắt buộc' : 'Khuyên dùng'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                      <span>Đóng gói cẩn thận</span>
                    </div>
                    <button 
                      onClick={() => setSelectedItem(null)} 
                      className="text-amber-500 hover:text-amber-400 underline"
                    >
                      Đóng Xem
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-16 h-full">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-amber-500/15 rounded-full blur-md"></div>
                    <Sparkles className="w-12 h-12 text-amber-500 relative" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">Chuyện Của Từng Đồ Vật</h4>
                  <p className="text-xs text-stone-400 max-w-xs leading-relaxed">
                    Hãy bấm vào một vật dụng bất kỳ trong túi đồ để tìm hiểu kinh nghiệm mua sắm thực tế.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
