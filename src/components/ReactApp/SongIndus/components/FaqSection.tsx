import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_QUESTIONS } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <HelpCircle className="w-8 h-8 text-amber-500 mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Hỏi Đáp (FAQ)
          </h2>
          <p className="font-serif text-stone-600 italic">
            Những thắc mắc thường gặp về Sông Indus và trải nghiệm River Rafting.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_QUESTIONS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-amber-300 shadow-lg shadow-amber-900/5' : 'border-stone-200 hover:border-amber-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg text-stone-900 pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-amber-50 border-amber-200 text-amber-600' : 'bg-stone-50 border-stone-200 text-stone-400'
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
                      <div className="px-6 pb-6 pt-2 border-t border-stone-100">
                        <p className="text-stone-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
