import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'Giá taxi từ Leh đến Tso Moriri là bao nhiêu?',
    answer: 'Theo giá cước liên đoàn taxi, giá taxi cho chuyến đi 2 ngày từ Leh đến Tso Moriri là khoảng 15.711 Rs (Hơn 200 USD) và 31.362 Rs (Hơn 400 USD) cho chuyến đi 3 ngày từ Leh đến Tso Moriri đến Manali.'
  },
  {
    question: 'Tôi có thể đi từ Leh đến Tso Moriri bằng xe buýt không?',
    answer: 'Có 3 chuyến xe buýt đi từ Leh đến Tso Moriri vào các ngày 10, 20 và 30 trong tháng. Xe buýt khởi hành lúc 6:30 sáng vào những ngày này từ trạm xe buýt Leh.'
  },
  {
    question: 'Nơi nào tốt hơn giữa Hồ Tso Moriri hoặc Hồ Pangong?',
    answer: 'Nếu thích tính chất thô sơ và ít đám đông thương mại hóa, Tso Moriri là lựa chọn tuyệt vời. Tuy nhiên, nếu bạn đến Ladakh lần đầu tiên, Pangong Tso là một biểu tượng mà bạn không nên bỏ lỡ để khỏi hối tiếc.'
  },
  {
    question: 'Tôi có thể thực hiện chuyến đi Tso Moriri đến Leh trong 1 ngày không?',
    answer: 'Không nên thực hiện một chuyến đi 1 ngày. Thời gian di chuyển mỗi chiều mất 7-8 tiếng (240km). Bạn nên luôn lên kế hoạch cho chuyến đi ít nhất 2 ngày từ Leh.'
  }
];

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
            Những thắc mắc thường gặp nhất về lịch trình, chi phí và cách di chuyển đến Tso Moriri.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-amber-500/50 shadow-md' : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-serif text-lg font-bold transition-colors ${
                    isOpen ? 'text-amber-800' : 'text-stone-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 p-2 rounded-full transition-colors ${
                    isOpen ? 'bg-amber-100 text-amber-700' : 'bg-stone-100 text-stone-400'
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
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
                      <div className="p-6 pt-0 text-stone-600 font-serif leading-relaxed text-justify border-t border-stone-100 mt-2">
                        {faq.answer}
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
