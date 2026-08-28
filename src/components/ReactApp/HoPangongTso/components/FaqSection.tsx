import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'Có được phép tắm ở hồ Pangong không?',
    answer: 'Không. Pangong Tso được người dân địa phương xem là hồ nước thiêng. Ngoài ra, nước hồ quanh năm cực kỳ lạnh và vì lý do sinh thái học mỏng manh, chính quyền địa phương cấm tuyệt đối mọi hoạt động tắm rửa hay xả rác xuống hồ.'
  },
  {
    question: 'Ngủ đêm tại Pangong có lạnh không?',
    answer: 'Có, rất lạnh! Nhiệt độ ban đêm ngay cả vào mùa hè cũng có thể rớt xuống mức đóng băng. Tuy nhiên, nếu bạn lưu trú tại các khu Luxury Glamping do FIT Tour cung cấp, lều sẽ có chăn sưởi điện và túi ngủ chuyên dụng giúp bạn ấm áp hoàn toàn.'
  },
  {
    question: 'Di chuyển từ Leh đến Pangong Tso mất bao lâu?',
    answer: 'Quãng đường từ Leh đến Pangong dài khoảng 134km nhưng phải đi qua đèo Chang La (5.360m). Thường sẽ mất khoảng 4 đến 5 tiếng lái xe tùy thuộc vào điều kiện thời tiết và giao thông trên đèo.'
  },
  {
    question: 'Có cần xin giấy phép đặc biệt để đến hồ không?',
    answer: 'Có. Vì Pangong nằm sát biên giới Tây Tạng (Trung Quốc), toàn bộ du khách đều phải có Giấy phép khu vực nội tuyến (Inner Line Permit). FIT Tour sẽ chuẩn bị sẵn giấy phép này cho bạn trước khi khởi hành.'
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
            Những thắc mắc thường gặp nhất khi chuẩn bị hành trình chiêm ngưỡng vẻ đẹp Pangong Tso.
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
