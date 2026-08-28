import React from 'react';
import { motion } from 'framer-motion';

// Icons for Card 1 (Feather Icons via SVG)
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;

const AuthorStorySection: React.FC = () => {
  return (
    <section className="w-full bg-[#05080f] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 space-y-20 md:space-y-32">
        
        {/* Station 1: Khởi nguồn & Dấu ấn */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#0a0f16] border border-white/5 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl"
        >
          {/* Left Column: Image (1/3) */}
          <div className="w-full lg:w-1/3 h-[400px] lg:h-auto">
            <img 
              src="https://media.fittour.vn/uploads/mr-hieu-check-in-diem-ngam-canh-tren-cung-duong-roadtrip-ladakh.webp" 
              alt="Khởi nguồn cung đường" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Middle Column: Content (5/12 approx) */}
          <div className="w-full lg:w-5/12 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4 font-mono">01. KHỞI NGUỒN</p>
            <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight mb-6">
              Hành trình không bắt đầu từ bàn phím, mà từ những cung đường.
            </h3>
            <div className="text-white/60 text-sm md:text-base space-y-4 leading-relaxed font-light">
              <p>Khởi đầu từ những chuyến đi thực địa, tôi nhận ra rằng: Kỹ thuật SEO hay các thuật toán Marketing chỉ là bề nổi.</p>
              <p>Là một người xây dựng thương hiệu, tôi khao khát mang đến cho độc giả những trải nghiệm kiến thức đích thực, được đúc kết từ mồ hôi và những dặm đường tại Himalayas hay Con đường tơ lụa.</p>
              <p>Mỗi bài viết không chỉ là nội dung tối ưu, mà là một hành trình tri thức trọn vẹn.</p>
            </div>
          </div>

          {/* Right Column: Stats (1/4 approx) */}
          <div className="w-full lg:w-1/4 p-8 md:p-12 flex flex-col justify-center gap-8">
            {/* Stat 1 */}
            <div className="flex items-start gap-4">
              <div className="text-amber-500 mt-1"><MapPinIcon /></div>
              <div>
                <p className="text-white font-bold text-sm tracking-wide mb-1 uppercase">HIMALAYAS</p>
                <p className="text-white/50 text-xs leading-relaxed">Kinh nghiệm thực địa tại Ladakh, Tây Tạng, Silk Road.</p>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="flex items-start gap-4">
              <div className="text-amber-500 mt-1"><GlobeIcon /></div>
              <div>
                <p className="text-white font-bold text-sm tracking-wide mb-1 uppercase">BRAND ARCHITECT</p>
                <p className="text-white/50 text-xs leading-relaxed">Kiến trúc hệ sinh thái và trải nghiệm nội dung.</p>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="flex items-start gap-4">
              <div className="text-amber-500 mt-1"><TrendingUpIcon /></div>
              <div>
                <p className="text-white font-bold text-sm tracking-wide mb-1 uppercase">ORGANIC TRUST</p>
                <p className="text-white/50 text-xs leading-relaxed">Tăng trưởng bền vững từ lòng tin tự nhiên.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Station 2: Tuyên ngôn (Quote Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#0a0f16] border border-white/5 rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row shadow-2xl"
        >
          {/* Left Column: Quote (1/2) */}
          <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <span className="text-amber-500 text-6xl md:text-8xl font-serif leading-none opacity-50 mb-4 font-black">"</span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-snug mb-8 pr-4">
              Bạn không thể kiến tạo một thương hiệu có hồn nếu bản thân chưa từng dấn thân vào những nơi khắc nghiệt nhất.
            </h3>
            <p className="text-amber-500 italic font-serif text-lg">— Trọng Hiếu</p>
          </div>

          {/* Right Column: Image (1/2) */}
          <div className="w-full md:w-1/2 h-[350px] md:h-auto border-b md:border-b-0 md:border-l border-white/5">
            <img 
              src="https://media.fittour.vn/uploads/hanh-trinh-kham-pha-ladakh-cung-fit-tour.webp" 
              alt="Hành trình khám phá Ladakh" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Station 3: The EEAT Bento Grid (Travel Storytelling) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[500px]">
          
          {/* Big Box (Left - 2 columns span) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative bg-[#0a0f16] border border-white/5 rounded-2xl overflow-hidden shadow-2xl group min-h-[400px] lg:min-h-0"
          >
            {/* Full background image */}
            <img 
              src="https://media.fittour.vn/uploads/doan-fit-tour-tai-san-bay-leh-ladakh.webp" 
              alt="Đoàn FIT Tour tại sân bay Leh" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 object-center"
              loading="lazy"
            />
            {/* Glassmorphism content overlay */}
            <div className="absolute inset-x-4 bottom-4 lg:inset-x-8 lg:bottom-8 bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl transition-all duration-500">
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 font-mono">02. CHỨNG THỰC BẰNG CON NGƯỜI</p>
              <h3 className="text-xl md:text-2xl font-serif text-white leading-tight mb-4">
                Thành tựu lớn nhất là hàng ngàn chuyến đi trọn vẹn.
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                Một thương hiệu du lịch không được định hình bằng lượng truy cập vô hồn. Nó được bảo chứng bằng nụ cười và cái ôm của hàng ngàn khách hàng đã đặt trọn niềm tin vào hệ sinh thái của FIT Tour để bước ra thế giới.
              </p>
            </div>
          </motion.div>

          {/* Right Column (2 small boxes stacked vertically) */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* Top Small Box (Altitude) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 bg-[#0a0f16] border border-white/5 rounded-2xl p-8 flex flex-col justify-center shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500"
            >
              <div className="relative z-10">
                <h4 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter mb-2">5,359<span className="text-amber-500 text-4xl">m</span></h4>
                <p className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-3 font-mono">BƯỚC KHỎI VÙNG AN TOÀN</p>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  Chinh phục những đỉnh đèo khắc nghiệt nhất như Khardung La hay Magnetic Hill. Tri thức thực sự chỉ đến khi bạn tự mình trải qua cái lạnh đó.
                </p>
              </div>
            </motion.div>

            {/* Bottom Small Box (Depth) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 bg-[#0a0f16] border border-white/5 rounded-2xl p-8 flex flex-col justify-center shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500"
            >
              {/* Subtle background image */}
              <img 
                src="https://media.fittour.vn/uploads/mr-hieu-check-in-deo-magnetic-hill-ladakh.webp" 
                alt="Magnetic Hill" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 grayscale mix-blend-overlay"
                loading="lazy"
              />
              <div className="relative z-10">
                <h4 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-3 font-serif">Chiều sâu</h4>
                <p className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-3 font-mono">KIẾN TRÚC VĂN HÓA</p>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  Không dừng lại ở những bức ảnh check-in. Tôi xây dựng một kho tàng văn hóa bản địa sâu sắc để dẫn đường cho những trái tim xê dịch.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Station 4: Lời ngỏ (End Manifesto) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full pt-16 pb-24 text-center max-w-4xl mx-auto"
        >
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-10 opacity-50"></div>
          <p className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed font-light">
            Đích đến cuối cùng không phải là tạo ra một bài viết chuẩn SEO vô hồn. Đích đến là khi ai đó vô tình đọc được những dòng chữ ấy, họ quyết định xếp hành lý vào balo và bắt đầu một hành trình thay đổi cuộc đời.
          </p>
          <p className="text-amber-500 text-sm md:text-base mt-12 font-bold uppercase tracking-widest font-mono">
            Đó mới là sức mạnh thực sự của kiến trúc thương hiệu.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AuthorStorySection;
