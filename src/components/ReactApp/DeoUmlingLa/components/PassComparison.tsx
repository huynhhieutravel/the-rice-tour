import { useState } from 'react';
import { motion } from 'motion/react';
import { Mountain, ArrowRight } from 'lucide-react';

const PASSES = [
  { name: 'Umling La', height: '5.883m', info: 'Tuyến đường cơ giới cao nhất thế giới hiện tại (Kỷ lục Guinness).', color: 'text-amber-500', bg: 'bg-amber-500' },
  { name: 'Marsimik La', height: '5.582m', info: 'Con đèo gồ ghề, từng được coi là cao nhất trước khi Umling La xuất hiện.', color: 'text-stone-300', bg: 'bg-stone-600' },
  { name: 'Chang La', height: '5.360m', info: 'Cửa ngõ chính dẫn đến Hồ Pangong Tso, cực kỳ lạnh và nhiều tuyết.', color: 'text-stone-400', bg: 'bg-stone-500' },
  { name: 'Khardung La', height: '5.359m', info: 'Từng giữ danh hiệu "cao nhất thế giới" trong nhiều năm, là cửa ngõ vào thung lũng Nubra.', color: 'text-stone-400', bg: 'bg-stone-500' },
];

export default function PassComparison() {
  return (
    <section className="py-24 bg-stone-900 border-t border-stone-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <Mountain className="w-8 h-8 text-amber-500 mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            So Sánh Các Con Đèo Khổng Lồ
          </h2>
          <p className="font-sans text-stone-400 max-w-xl mx-auto">
            Ladakh là vùng đất của những con đèo vĩ đại. Dưới đây là bảng xếp hạng độ cao để thấy được sự vượt trội của Umling La.
          </p>
        </div>

        <div className="bg-stone-950/80 rounded-2xl border border-stone-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-stone-800 text-stone-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <div className="col-span-4 md:col-span-3">Tên Đèo</div>
            <div className="col-span-3 md:col-span-2 text-right">Độ Cao</div>
            <div className="col-span-5 md:col-span-7 pl-4">Đặc Điểm</div>
          </div>
          
          <div className="divide-y divide-stone-800/50">
            {PASSES.map((pass, index) => (
              <motion.div 
                key={pass.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-12 gap-4 p-4 md:p-6 items-center transition-colors hover:bg-stone-800/20 ${index === 0 ? 'bg-stone-900/50' : ''}`}
              >
                <div className="col-span-4 md:col-span-3 flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${pass.bg}`}></span>
                  <span className={`font-serif font-bold text-lg md:text-xl ${pass.color}`}>{pass.name}</span>
                </div>
                <div className="col-span-3 md:col-span-2 text-right font-mono text-lg md:text-2xl text-stone-200">
                  {pass.height}
                </div>
                <div className="col-span-5 md:col-span-7 pl-4 text-xs md:text-sm text-stone-400">
                  {pass.info}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
