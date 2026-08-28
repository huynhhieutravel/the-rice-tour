import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Heart, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Minh Tuấn',
    date: 'Tháng 8, 2026',
    message: 'Một trải nghiệm không thể quên ở Zanskar. Lái xe đường dài rất mệt nhưng khi tới thung lũng Suru và ngắm nhìn sông băng, mọi mệt mỏi đều tan biến.',
    avatar: 'https://i.pravatar.cc/150?u=minhtuan'
  },
  {
    id: 2,
    name: 'Hoàng Anh',
    date: 'Tháng 12, 2025',
    message: 'Tu viện Sani mang lại một cảm giác tĩnh lặng tuyệt đối. Mùa đông ở đây tuyết rơi trắng xóa, mình không dám đi Chadar trek nhưng quang cảnh thực sự vĩ đại.',
    avatar: 'https://i.pravatar.cc/150?u=hoanganh'
  },
  {
    id: 3,
    name: 'Thanh Hương',
    date: 'Tháng 7, 2025',
    message: 'Khuyến cáo các bạn đi Zanskar phải chuẩn bị thuốc cẩn thận. Ở đây rất hoang sơ và thiếu thốn tiện nghi y tế. Tuy vậy, vẻ đẹp hoang dã là vô song.',
    avatar: 'https://i.pravatar.cc/150?u=thanhhuong'
  },
  {
    id: 4,
    name: 'Quốc Bảo',
    date: 'Tháng 9, 2026',
    message: 'Hành trình dài từ Leh đến Padum thực sự là một thử thách. Nhưng sự kỳ vĩ của thiên nhiên Ladakh đã đền đáp xứng đáng mọi công sức.',
    avatar: 'https://i.pravatar.cc/150?u=quocbao'
  }
];

export default function Guestbook() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200/50 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-600 font-bold block mb-3 flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Lưu bút hành trình
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-6">
            Sổ Tay Của Kẻ Lữ Hành
          </h2>
          <p className="font-serif text-stone-600 max-w-2xl mx-auto italic">
            Cảm nhận từ những đôi chân từng đặt đến miền viễn biên Zanskar.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="break-inside-avoid bg-white p-6 md:p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <Quote className="w-8 h-8 text-amber-500/10 absolute top-6 right-6 group-hover:text-amber-500/20 transition-colors" />
              
              <p className="font-serif text-stone-700 italic leading-relaxed mb-6 text-sm md:text-base">
                "{review.message}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full border border-stone-200 grayscale-[20%]"
                />
                <div>
                  <div className="font-mono text-xs font-bold text-stone-900 uppercase tracking-wider">{review.name}</div>
                  <div className="font-sans text-[10px] text-stone-400">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="break-inside-avoid bg-amber-600 text-white p-8 rounded-2xl shadow-md flex flex-col justify-center min-h-[250px]">
            <h3 className="font-serif text-2xl font-bold mb-4">Chia sẻ câu chuyện của bạn</h3>
            <p className="text-amber-100 text-sm mb-6 leading-relaxed">
              Zanskar - bức tranh ngoạn mục giữa lòng Himalaya. Từng rặng núi, từng nhánh sông đều mang theo câu chuyện của thiên nhiên.
            </p>
            <button className="bg-white text-amber-600 font-bold py-3 px-6 rounded-full transition-colors font-sans text-sm uppercase tracking-wider hover:bg-amber-50">
              Viết lưu bút
            </button>
          </div>
          <p className="font-mono text-[10px] text-stone-500 uppercase mt-4 max-w-md mx-auto leading-relaxed">
            Zanskar - vùng đất nguyên sơ khép mình trong lòng dãy Himalaya. Một hành trình thử thách nhưng xứng đáng.
          </p>
        </div>

      </div>
    </section>
  );
}
