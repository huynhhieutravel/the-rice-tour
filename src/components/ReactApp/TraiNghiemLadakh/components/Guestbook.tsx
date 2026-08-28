import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { GuestbookMessage } from '../types';
import { MessageSquare, Heart, Send, Sparkles, MapPin, Smile } from 'lucide-react';

const INITIAL_MESSAGES: GuestbookMessage[] = [
  {
    id: 'm-1',
    name: 'Khánh Linh (24 tuổi)',
    message: '"Nhìn những bước chân của Cô Mây đứng vững chãi ở Khardung La giữa gió tuyết lạnh giá mà con rơi nước mắt. Một người trẻ tuổi như con đôi lúc gặp chút mệt mỏi trong công việc đã muốn buông xuôi, vậy mà nhìn Cô con dường như được truyền thêm ngọn lửa sinh khí mãnh liệt. Cảm ơn Cô đã truyền cảm hứng sống dũng cảm cho thế hệ trẻ!"',
    createdAt: '06/06/2026, 09:30',
    location: 'Hà Nội, Việt Nam'
  },
  {
    id: 'm-2',
    name: 'Chú Trần Đăng (66 tuổi)',
    message: '"Chào Chị Mây! Tôi cùng thế hệ với chị, vốn dĩ đầu gối cũng đã mỏi, lưng cũng đã chùn. Lâu nay chỉ nghĩ dưỡng già trồng rau cảnh cúc thôi. Nhìn thấy chị tự tay xoay kinh luân ở tu viện Thiksey và lội cái rét buốt hồ Pangong làm tôi rạo rực lòng dạ. Tôi sẽ bàn với bà xã làm một chuyến trekking Tây Bắc vào tháng sau. Cảm phục nghị lực phi thường của người phụ nữ Việt Nam!"',
    createdAt: '05/06/2026, 17:15',
    location: 'Đà Nẵng'
  },
  {
    id: 'm-3',
    name: 'Minh Quân',
    message: '"Đọc bài viết mà ngỡ như mình đang hít thở không khí loãng của Himalaya. Bài viết thực sự sâu sắc và mang lại nhiều góc nhìn mới mẻ về Ladakh ngoài những bức hình check-in sáo rỗng. Cảm ơn tác giả!"',
    createdAt: '04/06/2026, 21:05',
    location: 'TP. Hồ Chí Minh'
  }
];

export default function Guestbook() {
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [name, setName] = useState<string>('');
  const [messageText, setMessageText] = useState<string>('');
  const [locationStr, setLocationStr] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('ladakh_u70_guestbook');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages(INITIAL_MESSAGES);
      }
    } else {
      setMessages(INITIAL_MESSAGES);
      localStorage.setItem('ladakh_u70_guestbook', JSON.stringify(INITIAL_MESSAGES));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !messageText.trim()) return;

    const newMessage: GuestbookMessage = {
      id: `m-${Date.now()}`,
      name: name.trim(),
      message: messageText.trim(),
      createdAt: new Date().toLocaleString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      location: locationStr.trim() ? locationStr.trim() : undefined
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('ladakh_u70_guestbook', JSON.stringify(updated));

    // Reset Form
    setName('');
    setMessageText('');
    setLocationStr('');
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="guestbook-section" className="relative py-24 px-4 bg-amber-50/30 border-t border-amber-900/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-bold block mb-2">Góc Chia Sẻ Trải Nghiệm</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
            Câu Chuyện & Trải Nghiệm Thực Tế
          </h2>
          <div className="w-16 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          <p className="max-w-2xl mx-auto text-sm text-stone-600 font-sans">
            Chia sẻ những kỷ niệm không thể quên và cảm xúc chân thật nhất từ chuyến đi Ladakh của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: CTA Box (5 Columns) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-md border border-amber-900/10 relative h-fit">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none"></div>

            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-9 w-9 bg-amber-700/10 rounded-full flex items-center justify-center text-amber-800">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Viết Tiếp Hành Trình</h3>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                Ladakh - miền chân trời lang thang nơi ranh giới đất trời hòa làm một. Mỗi ngọn đèo, mỗi tu viện đều mang theo hơi thở của tự do và sự an yên tuyệt đối.
              </p>
              <p className="text-sm font-sans text-stone-600 leading-relaxed mb-6">
                Hãy để <b>FIT Tour</b> đồng hành cùng bạn trên cung đường Ladakh huyền thoại, nơi mọi giới hạn tuổi tác và sức khỏe đều có thể được vượt qua bằng ý chí và sự chuẩn bị kỹ lưỡng từ đội ngũ tổ chức chuyên nghiệp.
              </p>

              <a
                href="/tour/tour-ladakh-roadtrip/"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-amber-50 rounded-xl px-4 py-3 text-sm font-mono tracking-wider uppercase font-semibold transition shadow-sm hover:shadow-md"
              >
                <MapPin className="w-4 h-4" />
                Tham Khảo Tour Ladakh
              </a>
            </div>
          </div>

          {/* Right: Message List Display (7 Columns) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-4 max-h-[520px] overflow-y-auto pr-2 no-scrollbar border-t md:border-t-0 pt-6 md:pt-0">
            <div className="flex items-center justify-between border-b border-stone-250/20 pb-3 mb-2">
              <span className="font-mono text-[10px] text-stone-500 font-bold uppercase tracking-wide flex items-center gap-1.5">
                <Smile className="w-4.5 h-4.5 text-amber-700" />
                Tổng số lời chúc hiện tại: <b>{messages.length}</b>
              </span>
              <span className="text-[10px] text-stone-500 italic">Kéo xuống để xem thêm</span>
            </div>

            <AnimatePresence>
              {messages.map((m, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={m.id}
                  className="bg-white p-5 rounded-2xl border border-stone-150/70 shadow-sm relative group hover:border-amber-700/20 hover:shadow-md transition duration-300 text-left"
                >
                  {/* Hearts of support decorative corner */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition duration-300">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span className="text-[9px] font-mono font-bold text-stone-500">ĐÁNH GIÁ THỰC TẾ</span>
                  </div>

                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <h4 className="font-serif font-bold text-stone-900 text-sm">
                      {m.name}
                    </h4>
                    
                    <span className="text-[10px] text-stone-500 font-mono tracking-wider">
                      {m.createdAt}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-stone-600 leading-relaxed italic mb-3">
                    "{m.message}"
                  </p>

                  {m.location && (
                    <div className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/30">
                      <MapPin className="w-3 h-3" />
                      {m.location}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
