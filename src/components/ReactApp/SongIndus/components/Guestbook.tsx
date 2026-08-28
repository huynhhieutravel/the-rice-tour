import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Heart } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Phương Linh',
    date: 'Tháng 9, 2026',
    message: 'Nước hồ đổi màu thật vi diệu. Mình từng đến nhiều dòng sông hùng vĩ trên thế giới nhưng vẻ hùng vĩ và tĩnh lặng của Sông Indus thực sự làm mình nghẹt thở!',
    likes: 124
  },
  {
    id: 2,
    name: 'Hoàng Quân',
    date: 'Tháng 8, 2026',
    message: 'Trải nghiệm ngủ đêm tại Glamping của FIT Tour xuất sắc. Ban đêm tuyết rơi nhẹ bên ngoài lều nhưng bên trong ấm sực. Sáng dậy mở cửa thấy ngay dải ngân hà, không thể tin được!',
    likes: 89
  },
  {
    id: 3,
    name: 'Bích Ngọc',
    date: 'Tháng 7, 2026',
    message: 'Khuyên mọi người đi đường cẩn thận và nhớ uống thuốc chống sốc độ cao. Bù lại cảnh ở khúc Shooting Point đẹp y chang trong phim 3 Chàng Ngốc.',
    likes: 210
  }
];

export default function Guestbook() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-stone-900 border-t border-amber-900/20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <MessageSquare className="w-8 h-8 text-amber-500 mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Lưu bút khách hành hương
          </h2>
          <p className="font-serif text-stone-400 italic">
            Cảm nhận từ những đôi chân từng đặt đến miền viễn biên Sông Indus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={mounted ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-stone-800/50 border border-stone-700/50 p-6 rounded-2xl flex flex-col justify-between"
            >
              <p className="font-serif text-stone-300 italic leading-relaxed mb-6">
                "{review.message}"
              </p>
              
              <div className="flex items-center justify-between border-t border-stone-700/50 pt-4">
                <div>
                  <div className="text-white font-bold text-sm">{review.name}</div>
                  <div className="font-mono text-[10px] text-stone-400 uppercase">{review.date}</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full">
                  <Heart className="w-3 h-3 fill-amber-500" />
                  <span>{review.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500">
            <button className="bg-stone-900 hover:bg-stone-800 text-white font-bold py-3 px-8 rounded-full transition-colors font-sans text-sm uppercase tracking-wider">
              Chia sẻ câu chuyện của bạn
            </button>
          </div>
          <p className="font-mono text-[10px] text-stone-400 uppercase mt-4 max-w-md mx-auto leading-relaxed">
            Sông Indus - bức tranh ngoạn mục giữa lòng Himalaya. Từng con sóng nhỏ, từng tia nắng đều mang theo câu chuyện của thiên nhiên.
          </p>
        </div>

      </div>
    </section>
  );
}
