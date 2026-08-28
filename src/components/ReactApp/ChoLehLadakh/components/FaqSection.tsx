import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShoppingBag, CreditCard, Clock, Gift } from 'lucide-react';

const FAQS = [
  {
    icon: ShoppingBag,
    question: 'Đi chợ Leh có thể mặc cả không?',
    answer: 'Bạn có thể mặc cả nhẹ nhàng khoảng 10-20% tại các sạp vỉa hè hoặc cửa hàng tư nhân. Tuy nhiên, tại các cửa hàng hợp tác xã của chính quyền (Government Emporium) hoặc hiệu thuốc mỹ phẩm, mọi mặt hàng đều bán đúng giá niêm yết (Fixed Price).'
  },
  {
    icon: CreditCard,
    question: 'Có thể thanh toán bằng thẻ hay cần chuẩn bị tiền mặt?',
    answer: 'Tốt nhất bạn nên chuẩn bị sẵn tiền mặt (Rupee Ấn Độ). Một số cửa hàng lớn hoặc tiệm trang sức có máy quẹt thẻ, nhưng do ở vùng núi cao nên tín hiệu mạng đôi khi không ổn định, dễ gây gián đoạn thanh toán.'
  },
  {
    icon: Clock,
    question: 'Thời gian tốt nhất để đi dạo mua sắm ở chợ là khi nào?',
    answer: 'Khoảng thời gian lý tưởng nhất là từ 4h chiều đến tối. Lúc này cái nắng gắt đã dịu đi, các sạp hàng bày bán đầy đủ nhất và không khí nhộn nhịp, lung linh khi khu chợ bắt đầu lên đèn.'
  },
  {
    icon: Gift,
    question: 'Nên mua gì về làm quà gọn nhẹ và ý nghĩa nhất?',
    answer: 'Khăn len Yak hoặc Pashmina rất nhẹ và ấm. Ngoài ra, trà hắc mai biển (sea buckthorn) dạng hộp nhỏ, quả mơ sấy khô, và chuông xoay mini là những món quà đậm chất văn hóa, dễ dàng xếp vào vali.'
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
            Cẩm Nang Mua Sắm Bỏ Túi
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
