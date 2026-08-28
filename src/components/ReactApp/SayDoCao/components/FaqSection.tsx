import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-[#fdfbf7] border-y border-stone-200">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-amber-700" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Giải Đáp Thắc Mắc Về Say Độ Cao
          </h2>
          <p className="text-stone-600 font-mono text-sm max-w-2xl mx-auto">
            HỎI ĐÁP CÙNG CHUYÊN GIA
          </p>
        </div>

        <div className="space-y-4">
          {FAQ.map((faq, idx) => (
            <div 
              key={idx}
              className={`bg-white border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'border-amber-300 shadow-md' : 'border-stone-200 hover:border-amber-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-serif font-bold text-lg text-stone-800 pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-stone-600 font-serif leading-relaxed border-t border-stone-100 bg-amber-50/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
