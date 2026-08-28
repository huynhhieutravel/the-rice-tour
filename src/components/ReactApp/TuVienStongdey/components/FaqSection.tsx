import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'Có cần xin permit khi đến Stongdey không?',
    answer: 'Có. Tương tự như các khu vực viễn biên khác ở Zanskar, tất cả du khách nước ngoài đều bắt buộc phải xin Giấy phép khu vực nội tuyến (Inner Line Permit). FIT Tour sẽ hỗ trợ xin toàn bộ giấy tờ này cho bạn trước chuyến đi.'
  },
  {
    question: 'Quy tắc tham quan tu viện là gì?',
    answer: 'Khi bước vào chánh điện và các khu vực linh thiêng, bạn cần tuân thủ: (1) Không đội mũ; (2) Không dùng tay sờ vào các pho tượng hay bích họa; (3) Không nói chuyện lớn tiếng; (4) Tuyệt đối không bay flycam/drone trong không phận tu viện.'
  },
  {
    question: 'Có phải bỏ giày khi vào chánh điện không?',
    answer: 'Có. Theo quy tắc của mọi tu viện Phật giáo Tây Tạng, bạn bắt buộc phải cởi giày/dép để lại ngoài cửa trước khi bước vào chánh điện (Dukhang) và các phòng thờ cúng.'
  },
  {
    question: 'Có được chụp ảnh trong chánh điện không?',
    answer: 'Tùy khu vực. Một số phòng thờ cúng linh thiêng cấm chụp ảnh hoàn toàn. Bạn phải quan sát các biển báo hoặc luôn xin phép các nhà sư trước khi giơ máy lên chụp, đặc biệt là khi chụp ảnh cá nhân họ.'
  },
  {
    question: 'Có quy định trang phục khi đến tu viện không?',
    answer: 'Bạn cần ăn mặc lịch sự, kín đáo. Tuyệt đối không mặc quần đùi, áo sát nách hay các trang phục hở hang. Nên mang theo áo khoác mỏng hoặc khăn choàng để che phủ khi cần.'
  },
  {
    question: 'Có mất phí tham quan không?',
    answer: 'Stongdey không thu vé tham quan cố định đối với du khách. Tuy nhiên, việc duy trì một quần thể kiến trúc hàng ngàn năm tuổi trên núi cao là vô cùng tốn kém.'
  },
  {
    question: 'Có thể quyên góp cho tu viện không?',
    answer: 'Hoàn toàn được hoan nghênh. Bạn có thể bỏ tiền lẻ vào các hòm công đức (donation box) đặt rải rác trong các phòng thờ để góp phần hỗ trợ chư tăng và tu sửa tu viện.'
  },
  {
    question: 'Ở đây có bán đồ lưu niệm không?',
    answer: 'Không. Khác với các tu viện lớn ở trung tâm Leh, Stongdey nằm ở vùng viễn biên và giữ được sự nguyên sơ nên không có các quầy hàng lưu niệm thương mại bên trong.'
  },
  {
    question: 'Có thể ngủ lại tại tu viện Stongdey không?',
    answer: 'Được. Tu viện có khu vực nhà khách (guesthouse) cơ bản phục vụ khách hành hương và khách du lịch. Tuy nhiên, tiện nghi rất hạn chế, chủ yếu để bạn có cơ hội trải nghiệm không khí tĩnh lặng và tham gia tụng kinh buổi sáng cùng chư tăng.'
  },
  {
    question: 'Người lớn tuổi có thể đi tuyến này được không?',
    answer: 'Hoàn toàn được. Khác với nhiều tu viện phải leo bậc thang dốc hoặc trekking nhiều ngày, hiện nay xe ô tô có thể chạy thẳng đến khu vực sân của tu viện Stongdey. Tuy nhiên, do độ cao 3.900m, du khách vẫn cần <a href="/say-do-cao" class="text-amber-700 font-medium hover:underline">đi chậm và chú ý nhịp thở</a>.'
  },
  {
    question: 'Đi Stongdey vào tháng nào là đẹp nhất?',
    answer: 'Tháng 6 đến tháng 9 là thời điểm lý tưởng nhất vì thời tiết tương đối dễ chịu, thung lũng Doda xanh mướt và ít tuyết rơi cản trở đường đi. Đây cũng là mùa diễn ra lễ hội Gustor rực rỡ.'
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
            Những thông tin thiết thực nhất khi chuẩn bị cho chuyến viếng thăm tu viện Stongdey.
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
                      <div 
                        className="p-6 pt-0 text-stone-600 font-serif leading-relaxed text-justify border-t border-stone-100 mt-2"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
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
