import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'Thung lũng Zanskar nằm ở đâu?',
    answer: 'Thung lũng Zanskar nằm ở phía tây nam của Ladakh, thuộc huyện Kargil, Ấn Độ, cách thành phố Leh khoảng 240 km.'
  },
  {
    question: 'Nên đi Zanskar vào mùa nào?',
    answer: 'Thời gian đẹp nhất là từ tháng 6 đến tháng 9, khi tuyết tan và các con đèo mở cửa (đặc biệt tháng 9 cảnh sắc mùa thu rất rực rỡ). Mùa đông cực kỳ lạnh giá, chủ yếu chỉ dành cho những ai muốn thử thách bản thân với Chadar Trek.'
  },
  {
    question: 'Đến Zanskar thì chơi gì?',
    answer: 'Chủ yếu là ngắm cảnh thiên nhiên hùng vĩ, cắm trại dã ngoại, và trekking thăm các tu viện cổ kính nằm vắt vẻo trên vách đá (nổi tiếng nhất là tu viện Phugtal). Nếu đi mùa đông, bạn có thể tham gia chuyến đi bộ trên sông băng huyền thoại Chadar Trek.'
  },
  {
    question: 'Cần lưu ý gì về sức khỏe và di chuyển?',
    answer: 'Đường đi Zanskar khá xóc nảy, rải đá dăm nên đi ô tô SUV gầm cao là thoải mái nhất. Vì thung lũng nằm ở độ cao trung bình 3.500m - 4.000m, bạn BẮT BUỘC phải ở lại Leh ít nhất 2 ngày để quen với không khí loãng (tránh sốc độ cao) rồi mới di chuyển vào Zanskar.'
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
            Những thắc mắc thường gặp nhất khi chuẩn bị hành trình chiêm ngưỡng vẻ đẹp Thung lũng Zanskar.
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
