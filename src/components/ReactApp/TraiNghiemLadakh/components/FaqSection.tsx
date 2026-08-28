import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShoppingBag, CreditCard, Clock, Gift } from 'lucide-react';

const FAQS = [
  {
    icon: ShoppingBag,
    question: 'Nên chuẩn bị sức khỏe như thế nào trước khi đến Ladakh?',
    answer: 'Ladakh nằm ở độ cao trung bình trên 3.500m so với mực nước biển. Bạn nên rèn luyện thể lực nhẹ nhàng trước chuyến đi 1 tháng. Khi đến nơi, hãy dành 1-2 ngày đầu để cơ thể thích nghi với độ cao (acclimatization), uống nhiều nước ấm, ăn nhẹ và tránh hoạt động mạnh.'
  },
  {
    icon: Clock,
    question: 'Thời điểm lý tưởng nhất để du lịch Ladakh là khi nào?',
    answer: 'Thời gian tuyệt vời nhất là từ tháng 5 đến tháng 9, khi thời tiết dễ chịu, tuyết đã tan mở đường đến Pangong và Nubra. Từ cuối tháng 9 đến giữa tháng 10 là mùa thu vàng tuyệt đẹp. Các tháng mùa đông (tháng 11 - tháng 4) rất khắc nghiệt, nhiệt độ có thể xuống -30°C và nhiều tuyến đường bị phong tỏa.'
  },
  {
    icon: HelpCircle,
    question: 'Làm thế nào để phòng tránh hội chứng sốc độ cao (AMS)?',
    answer: 'Hội chứng độ cao (AMS) rất phổ biến ở Ladakh. Để phòng tránh, bạn cần uống đủ 3-4 lít nước mỗi ngày, tuyệt đối không uống rượu bia trong những ngày đầu, giữ ấm cơ thể, ngủ đủ giấc. Bạn có thể tham khảo ý kiến bác sĩ để dùng thuốc chống sốc độ cao (Diamox) trước khi bay lên Leh.'
  },
  {
    icon: CreditCard,
    question: 'Chuẩn bị tiền bạc và kết nối mạng ở Ladakh như thế nào?',
    answer: 'Hãy mang theo đủ tiền mặt (Rupee Ấn Độ) vì các khu vực xa Leh như Pangong hay Nubra hiếm có ATM và ít nơi quẹt thẻ. Về liên lạc, sim quốc tế hay sim mua ở các bang khác của Ấn Độ sẽ không hoạt động ở Ladakh. Bạn có thể mua sim trả sau của BSNL, Airtel hoặc Jio ngay tại Leh, nhưng tín hiệu mạng ở các vùng xa thường rất yếu hoặc không có.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">Hỏi Đáp Nhanh</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            Cẩm Nang Du Lịch Bỏ Túi
          </h2>
          <div className="w-16 h-0.5 bg-amber-700 mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-colors duration-300 ${isOpen ? 'border-amber-700/30 bg-stone-50' : 'border-stone-200 bg-white hover:border-amber-700/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-500'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-lg font-bold text-stone-900">{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 pl-[60px] text-stone-600 font-sans leading-relaxed">
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
