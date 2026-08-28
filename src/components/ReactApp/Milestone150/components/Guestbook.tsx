import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GuestbookMessage } from '../types';
import { MessageSquare, Heart, Send, Sparkles, MapPin, Smile } from 'lucide-react';

const INITIAL_MESSAGES: GuestbookMessage[] = [
  {
    id: 'm-1',
    name: 'Anh Tuấn & Chị Linh (Chuyến số 34)',
    message: 'Từng đi Himalaya với FIT Tour vào năm ngoái, tôi rất ấn tượng với sự chuẩn bị chu đáo và nồi phở bò nóng hổi của các bạn giữa thung lũng lạnh giá. Chúc FIT Tour ngày càng phát triển!',
    createdAt: '06/06/2026, 09:30',
    location: 'Hà Nội, Việt Nam'
  },
  {
    id: 'm-2',
    name: 'Cô Bích Liên (65 tuổi)',
    message: 'Khâm phục sức khỏe và sự tận tâm của đội ngũ guide bản xứ. Nhờ các cháu đệm sưởi điện và trà gừng mật ong mà cô cùng bác trai U70 vẫn đi về khỏe re, ngày nào cũng nhắc lại kỷ niệm ngắm sao ở hồ Bhutan Tso.',
    createdAt: '05/06/2026, 17:15',
    location: 'Đà Nẵng'
  },
  {
    id: 'm-3',
    name: 'Minh Quân (Hành trình Nepal)',
    message: 'Chuyến Motor Trip băng qua thung lũng Nepal thực sự là một trải nghiệm để đời. Sự chuyên nghiệp và am hiểu địa hình của các bác tài FIT Tour đã giúp tôi rất yên tâm khi vượt qua những cung đường sỏi đá.',
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
    const saved = localStorage.getItem('himalaya_80_guestbook');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages(INITIAL_MESSAGES);
      }
    } else {
      setMessages(INITIAL_MESSAGES);
      localStorage.setItem('himalaya_80_guestbook', JSON.stringify(INITIAL_MESSAGES));
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
    localStorage.setItem('himalaya_80_guestbook', JSON.stringify(updated));

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
          <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-bold block mb-2">Góc Gửi Niềm Tin</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
            Gieo Hạt Mầm Truyền Cảm Hứng
          </h2>
          <div className="w-16 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          <p className="max-w-2xl mx-auto text-sm text-stone-600 font-sans">
            Hành trình 80 cột mốc của FIT Tour đã truyền cảm hứng viễn du cho bạn như thế nào? Hãy chia sẻ những kỷ niệm đẹp hoặc gửi lời chúc đến đội ngũ hướng dẫn tận tâm tại đây.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Form (5 Columns) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-md border border-amber-900/10 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none"></div>

            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-9 w-9 bg-amber-700/10 rounded-full flex items-center justify-center text-amber-800">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Gửi Lời Chúc / Chia Sẻ</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1.5 font-bold">
                  Họ Tên / Biệt Danh <span className="text-red-500">*</span>
                </label>
                <input
                  id="guestbook-input-name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Ví dụ: Hoàng Nam, Bạn đọc từ Huế..."
                  className="w-full text-sm px-4 py-2.5 border rounded-xl bg-stone-50 outline-none border-stone-200 focus:border-amber-700 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1.5 font-bold">
                  Nơi Ở Hiện Tại (Không bắt buộc)
                </label>
                <input
                  id="guestbook-input-location"
                  type="text"
                  value={locationStr}
                  onChange={e => setLocationStr(e.target.value)}
                  placeholder="Ví dụ: TP. Hồ Chí Minh, Việt Nam"
                  className="w-full text-sm px-4 py-2.5 border rounded-xl bg-stone-50 outline-none border-stone-200 focus:border-amber-700 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1.5 font-bold">
                  Lời nhắn gửi đến đội ngũ / Chia sẻ kỷ niệm <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="guestbook-input-message"
                  required
                  rows={4}
                  value={messageText}
                  onChange={e => setMessageText(e.target.value)}
                  placeholder="Viết lời bày tỏ cảm ơn về sự tận tâm của Guide, hoặc kể về ước mơ viễn du của riêng bạn..."
                  className="w-full text-sm px-4 py-2.5 border rounded-xl bg-stone-50 outline-none border-stone-200 focus:border-amber-700 focus:bg-white transition resize-none leading-relaxed"
                />
              </div>

              <button
                id="guestbook-submit-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-amber-50 rounded-xl px-4 py-3 text-xs font-mono tracking-wider uppercase font-semibold transition shadow-sm hover:shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                Gửi Lời Chia Sẻ
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex items-center gap-2 border border-emerald-150"
                >
                  <Sparkles className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <span>Cảm ơn bạn! Lời nhắn của bạn đã được ghi lại thành kính trên tấm bảng truyền cảm hứng này.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Message List Display (7 Columns) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-4 max-h-[520px] overflow-y-auto pr-2 no-scrollbar border-t md:border-t-0 pt-6 md:pt-0">
            <div className="flex items-center justify-between border-b border-stone-250/20 pb-3 mb-2">
              <span className="font-mono text-[10px] text-stone-400 font-bold uppercase tracking-wide flex items-center gap-1.5">
                <Smile className="w-4.5 h-4.5 text-amber-700" />
                Tổng số lời chúc hiện tại: <b>{messages.length}</b>
              </span>
              <span className="text-[10px] text-stone-400 italic">Kéo xuống để xem thêm</span>
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
                    <span className="text-[9px] font-mono font-bold text-stone-400">TRUYỀN CẢM HỨNG</span>
                  </div>

                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <h4 className="font-serif font-bold text-stone-900 text-sm">
                      {m.name}
                    </h4>
                    
                    <span className="text-[10px] text-stone-400 font-mono tracking-wider">
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
