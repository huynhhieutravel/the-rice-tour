import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'Có cần xin permit để trekking đến Phugtal không?',
    answer: 'Có. Vì Phugtal nằm sâu trong thung lũng Zanskar (vùng viễn biên), tất cả du khách nước ngoài đều bắt buộc phải xin Giấy phép khu vực nội tuyến (Inner Line Permit). FIT Tour sẽ hỗ trợ xin toàn bộ giấy tờ này cho bạn trước chuyến đi.'
  },
  {
    question: 'Có thể ngủ lại tại tu viện Phugtal không?',
    answer: 'Tu viện có một nhà khách (guesthouse) rất cơ bản nằm ngay phía dưới chân vách đá phục vụ khách hành hương và trekker. Nếu may mắn hoặc được sắp xếp trước, bạn có thể xin tá túc bên trong khu vực của tu viện, trải nghiệm ăn uống kham khổ và nghe các nhà sư tụng kinh buổi sớm.'
  },
  {
    question: 'Tu viện Phugtal có nhà vệ sinh không?',
    answer: 'Guesthouse dưới chân tu viện có nhà vệ sinh kiểu khô (dry toilet) truyền thống của người Tạng (bạn sẽ xúc đất/cát lấp sau khi đi vệ sinh). Không có bồn cầu xả nước hay vòi hoa sen nước nóng. Đây là sự đánh đổi cho trải nghiệm vô giá ở nơi hoang sơ.'
  },
  {
    question: 'Tu viện có điện không?',
    answer: 'Năm 2016, tu viện Phugtal đã được lắp đặt hệ thống điện mặt trời (solar micro-grid). Một trong những tu viện biệt lập nhất Himalaya cuối cùng cũng đã có ánh sáng vào ban đêm. Tuy nhiên nguồn điện rất hạn chế, ưu tiên cho sinh hoạt của chư tăng, nên bạn vẫn cần mang sạc dự phòng cho các thiết bị cá nhân.'
  },
  {
    question: 'Trong thung lũng có internet hay sóng điện thoại không?',
    answer: 'Không. Trong tu viện gần như không nên kỳ vọng internet ổn định. Tín hiệu mạng (BSNL hoặc Jio) chỉ xuất hiện rải rác ở vài điểm dọc tuyến đường mới (NPD Road). Trải nghiệm ở Phugtal thiên về "disconnect" hoàn toàn hơn là online.'
  },
  {
    question: 'Đi Phugtal vào tháng nào là đẹp nhất?',
    answer: 'Tháng 6 đến tháng 9 là thời điểm lý tưởng nhất vì thời tiết tương đối dễ chịu, ít tuyết rơi cản trở đường đi. Mùa đông (tháng 11 đến tháng 4) đường đèo bị phong tỏa, chỉ những người có kinh nghiệm sinh tồn trên sông băng (Chadar Trek) mới có thể tiếp cận.'
  },
  {
    question: 'Người lớn tuổi có thể đi tuyến này được không?',
    answer: 'Được, với điều kiện có nền tảng thể lực tốt và không có bệnh lý nền về tim mạch, huyết áp. Việc mở đường xe đến tận Purne đã giúp giảm đáng kể thời gian đi bộ (chỉ còn 2-3 giờ dọc sông so với nhiều ngày như trước đây). Nên tham khảo ý kiến bác sĩ và sử dụng dịch vụ tour có chuẩn bị oxy y tế như FIT Tour.'
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
            Những thắc mắc thiết thực nhất khi chuẩn bị cho chuyến trekking tới vùng viễn biên Zanskar.
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
