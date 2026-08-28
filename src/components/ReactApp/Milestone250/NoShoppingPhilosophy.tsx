import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Eye, Compass, Leaf, ChevronRight } from 'lucide-react';

const COMMITMENTS = [
  {
    id: "time",
    tab: "Trả Lại Thời Gian",
    title: "Ý Nghĩa Thật Sự",
    subtitle: "Một buổi chiều trên hồ Namtso",
    icon: Clock,
    content: "Một buổi chiều trên hồ Namtso. Có hai lựa chọn. Dừng xe thêm hai giờ để ngắm mặt trời lặn. Hoặc ghé một cửa hàng mua sắm theo lịch trình. FIT TOUR luôn chọn phương án đầu tiên. Đó là ý nghĩa thật sự của triết lý No Shopping. Không cần giải thích. Khách tự hiểu.",
    proof: "100% thời lượng tour được dành trọn vẹn cho việc chiêm ngưỡng cảnh quan và tận hưởng cuộc sống."
  },
  {
    id: "authenticity",
    tab: "Tính Nguyên Bản",
    title: "Những Cuộc Chạm Trán Chân Thực",
    subtitle: "Trò chuyện cùng người bản xứ, không phải nhân viên bán hàng",
    icon: Eye,
    content: "Thay vì bị lùa vào các trung tâm mua sắm khép kín ngột ngạt, khách hàng của FIT Tour được tự do dạo bước trong các khu chợ cổ ở Kashgar (Tân Cương) hay có đủ thời gian dừng lại trò chuyện với một vị lạt ma giữa tu viện Tây Tạng hẻo lánh. Sự tương tác tự nhiên này mới chính là linh hồn của những vùng đất huyền bí.",
    proof: "Hàng trăm cuộc gặp gỡ văn hóa chân thực, không bị thương mại hóa dọc theo con đường Tơ Lụa."
  },
  {
    id: "exclusive",
    tab: "Trải Nghiệm Độc Bản",
    title: "Khai Mở Các Tuyến Đường Lạ",
    subtitle: "Tiến sâu vào những cung đường khắc nghiệt nhất",
    icon: Compass,
    content: "Việc không phụ thuộc vào hoa hồng mua sắm giúp chúng tôi tự chủ hoàn toàn trong việc thiết kế lộ trình. Nhờ đó, FIT Tour mới có thể mở ra những tuyến đường đi sâu vào Đạo Thành Á Đinh hay Kailash, nơi không có bóng dáng của du lịch công nghiệp, chỉ có thiên nhiên hoang sơ và kỳ vĩ đang chờ đón.",
    proof: "Tiên phong khai mở thành công các tuyến đường độc lạ mà các tour truyền thống không thể chạm tới."
  },
  {
    id: "freedom",
    tab: "Sự Tự Do Tuyệt Đối",
    title: "Viễn Du Không Vướng Bận",
    subtitle: "Trả lại sự tự do cho lữ khách",
    icon: Leaf,
    content: "Triết lý '0 Shopping' của chúng tôi không phải để phô trương, mà để trả lại sự tự do và tính nguyên bản cho một chuyến viễn du. Bạn không cần phải lo lắng về việc bị ép mua đồ hay lãng phí nửa ngày trời trong cửa hàng. Mọi khoảnh khắc trong hành trình là của bạn, do chính bạn cảm nhận và quyết định.",
    proof: "Sự thảnh thơi tuyệt đối trong tâm trí, không có những ánh mắt khó chịu hay sự thúc ép thương mại."
  }
];

export default function NoShoppingPhilosophy() {
  const [selectedCommitment, setSelectedCommitment] = useState<string>("time");

  return (
    <section className="py-24 border-b border-stone-300 px-4 sm:px-12 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b-2 border-stone-950 pb-6 mb-16 gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-amber-800 uppercase tracking-widest font-black block">■ TRIẾT LÝ NO-SHOPPING</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-stone-950">
              Cái Giá Của "0 Điểm Shopping"
            </h2>
          </div>
          <p className="text-stone-500 font-serif italic text-base sm:text-base max-w-sm text-left">
            “Chúng tôi thà giữ giá tour ở mức phản ánh đúng giá trị dịch vụ thực tế, để đổi lấy những khoảnh khắc nguyên bản đắt giá nhất của đời người.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Minimalist Selection Rails (Left 4 Columns) */}
          <div className="lg:col-span-4 space-y-1">
            {COMMITMENTS.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedCommitment(pillar.id)}
                  className={`w-full text-left p-5 transition-all flex items-center justify-between border-b border-stone-100 group cursor-pointer ${
                    selectedCommitment === pillar.id
                      ? 'bg-stone-50 pl-6 border-l-4 border-l-stone-950 text-stone-950 font-bold'
                      : 'text-stone-500 hover:text-stone-800 hover:pl-5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <IconComponent className={`w-4 h-4 transition-transform ${selectedCommitment === pillar.id ? 'scale-110 text-amber-800' : 'text-stone-400'}`} />
                    <span className="font-serif text-base sm:text-lg tracking-tight">{pillar.tab}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedCommitment === pillar.id ? 'rotate-90 text-stone-950' : 'text-stone-300 opacity-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}
          </div>

          {/* Highly Polished Editorial Document View (Right 8 Columns) */}
          <div className="lg:col-span-8 bg-stone-50/50 border border-stone-200/80 p-8 sm:p-12 relative min-h-[420px] rounded flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {COMMITMENTS.filter(p => p.id === selectedCommitment).map((p) => {
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 text-left"
                  >
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-amber-800 font-extrabold bg-amber-50 px-2 py-0.5 border border-amber-900/10">CỘT MỐC 250</span>
                      <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-950 leading-tight">
                        {p.title}
                      </h3>
                      <p className="font-serif italic text-stone-600 text-base sm:text-lg">
                        &quot;{p.subtitle}&quot;
                      </p>
                    </div>

                    <div className="w-12 h-[1px] bg-stone-950"></div>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-justify font-sans">
                      {p.content}
                    </p>

                    <div className="mt-6 p-5 bg-white border-l-2 border-amber-600 border border-stone-200 space-y-1 rounded-r">
                      <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest font-black block">CON SỐ THỰC CHỨNG (VERIFIED PROOF)</span>
                      <p className="text-sm sm:text-base text-stone-800 font-serif italic leading-relaxed">
                        {p.proof}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
