import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

import { FAQS } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-stone-900 text-stone-100 border-t border-stone-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-850 skew-x-12 translate-x-32 pointer-events-none opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-4 sticky top-24">
            <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl mb-6">
              <HelpCircle className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Câu Hỏi<br/><span className="text-stone-400">Thường Gặp</span>
            </h2>
            <div className="w-16 h-1 bg-amber-500 mb-6"></div>
            <p className="font-sans text-stone-400 leading-relaxed text-sm">
              Tất cả những gì bạn cần biết trước khi đặt chân đến Thung lũng Nubra. Từ lịch trình, chi phí, đến những lưu ý sức khỏe quan trọng nhất.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-stone-850/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-amber-500/50 shadow-lg shadow-amber-900/10' : 'border-stone-800 hover:border-stone-700 hover:bg-stone-850'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <span className={`font-serif text-lg md:text-xl font-bold pr-8 transition-colors ${
                      isOpen ? 'text-amber-400' : 'text-stone-200 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 p-2 rounded-full transition-all duration-300 ${
                      isOpen ? 'bg-amber-500 text-stone-900 rotate-180' : 'bg-stone-800 text-stone-400 group-hover:bg-stone-700 group-hover:text-stone-200'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-stone-400 font-sans leading-relaxed text-justify mt-2" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
