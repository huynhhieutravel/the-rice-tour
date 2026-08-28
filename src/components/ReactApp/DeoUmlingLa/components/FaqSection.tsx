import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'Đèo Umling La cao bao nhiêu mét?',
    answer: 'Đèo Umling La có độ cao 5.883 mét (19.300 feet) so với mực nước biển, cao hơn cả Base Camp của đỉnh Everest (5.364m).'
  },
  {
    question: 'Đi Umling La có cần giấy phép không?',
    answer: 'Bắt buộc phải có Giấy phép khu vực nội tuyến (Inner Line Permit - ILP). Do nằm rất gần Đường kiểm soát thực tế (LAC) với Trung Quốc, quân đội Ấn Độ kiểm soát cực kỳ nghiêm ngặt. Khách hàng của FIT Tour luôn được hỗ trợ làm sẵn toàn bộ thủ tục này.'
  },
  {
    question: 'Có sóng điện thoại hoặc Internet trên đường đi không?',
    answer: 'Hầu như không có. Bạn sẽ mất hoàn toàn sóng di động khi rời khỏi Leh vài chục kilomet. Tại Hanle có thể có mạng BSNL hoặc Jio sóng yếu, nhưng lên đến Umling La thì 100% không có sóng điện thoại và Internet.'
  },
  {
    question: 'Bao lâu mới di chuyển tới được Umling La từ Leh?',
    answer: 'Thường mất khoảng 3 ngày 2 đêm hoặc 4 ngày 3 đêm, bao gồm các điểm dừng bắt buộc để cơ thể thích nghi với độ cao (ví dụ nghỉ tại <a href="/ho-pangong-tso" className="text-amber-600 hover:text-amber-700 underline decoration-amber-500/30 underline-offset-2">Pangong</a>, Tso Moriri, và Hanle).'
  },
  {
    question: 'Chứng say độ cao (AMS) có phổ biến không?',
    answer: 'Rất phổ biến nếu bạn chủ quan. Ở 5.883m, lượng oxy chỉ còn một nửa. Ngay cả những người khỏe mạnh nhất cũng sẽ bị nhức đầu và thở dốc. Uống nhiều nước, dùng thuốc Diamox, không vận động mạnh và trang bị bình oxy cá nhân là bắt buộc.'
  },
  {
    question: 'Nhiệt độ trên đèo là bao nhiêu?',
    answer: 'Vào mùa hè (tháng 6-9), ban ngày nhiệt độ có thể từ 0°C đến 10°C, nhưng do gió giật rất mạnh nên cảm giác lạnh buốt (wind chill) giống như đang ở dưới 0°C. Ban đêm hoặc mùa đông thì luôn ở mức âm sâu (-20°C đến -40°C).'
  },
  {
    question: 'Có nhà vệ sinh (WC) dọc đường không?',
    answer: 'Rất hiếm. Tại các ngôi làng như Hanle hay điểm dừng chân nhỏ có thể có WC thô sơ (dry toilet). Nhưng dọc tuyến đường hoang vu lên đèo và trên đỉnh đèo thì hoàn toàn không có nhà vệ sinh công cộng.'
  },
  {
    question: 'Có được bay flycam (drone) không?',
    answer: 'Tuyệt đối KHÔNG. Khu vực này giáp ranh biên giới và được quân đội tuần tra liên tục. Việc sử dụng drone bị cấm nghiêm ngặt và có thể bị tịch thu hoặc bắt giữ ngay lập tức.'
  },
  {
    question: 'Có trạm xăng nào gần đèo không?',
    answer: 'Trạm xăng cuối cùng là ở Karu (gần Leh) hoặc vùng phụ cận rất xa. Tất cả xe đưa đón của FIT Tour đều mang theo bình nhiên liệu dự phòng lớn vì không có bất kỳ cây xăng nào trong khu vực Hanle, Demchok hay Umling La.'
  },
  {
    question: 'Xe chạy có bị yếu đi không?',
    answer: 'Có, các loại động cơ đốt trong (đặc biệt là xe diesel) bị giảm công suất nghiêm trọng do buồng đốt không đủ oxy. Khói xả ra đen hơn và động cơ gào to hơn. Đòi hỏi tài xế phải có kinh nghiệm dày dặn.'
  },
  {
    question: 'Khu vực này có động vật hoang dã không?',
    answer: 'Có. Dọc đường từ Hanle đến Chisumle, bạn có thể dễ dàng bắt gặp lừa hoang Tây Tạng (Kiang), sóc chũi (Marmot), cừu xanh (Blue Sheep) và loài sếu cổ đen (Black-necked Crane) quý hiếm.'
  },
  {
    question: 'Nên nán lại trên đỉnh đèo trong bao lâu?',
    answer: 'Không quá 15-20 phút. Việc nán lại quá lâu ở độ cao cực hạn này làm tăng nguy cơ phù phổi cấp tính (HAPE) và phù não (HACE).'
  },
  {
    question: 'Có quán ăn nào dọc đường không?',
    answer: 'Đôi khi bạn sẽ gặp vài chiếc lều bán Maggi (mì gói Ấn Độ) và trà bơ của dân du mục, hoặc canteen nhỏ do quân đội mở gần cầu Chisumle. FIT Tour luôn chuẩn bị sẵn đồ ăn nhẹ và nước ấm nóng trên xe.'
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
            Những thắc mắc thường gặp nhất khi chuẩn bị hành trình chiêm ngưỡng vẻ đẹp đèo Umling La.
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
