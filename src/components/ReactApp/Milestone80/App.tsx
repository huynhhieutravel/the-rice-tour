import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import EditorialAlpineGuide from './components/EditorialAlpineGuide';
import MemoryMap from './components/MemoryMap';
import PhotoGallery from './components/PhotoGallery';
import Backpack from './components/Backpack';
import LocalConnectionSection from './components/LocalConnectionSection';
import { Compass, Sparkles, X, CheckCircle2, PhoneCall, Heart, Shield } from 'lucide-react';

interface AppProps {
  featuredImage?: string;
}

export default function App({ featuredImage = "https://media.fittour.vn/uploads/cot-moc-80-chuyen-di-ladakh-fittour.webp" }: AppProps) {
  const [bookingTour, setBookingTour] = useState<any>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: 'Tháng 9 - Mùa Thu Vàng',
    ageGroup: 'U70',
    readAms: true,
    needOxygen: false,
  });

  const activeTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans bg-stone-50 text-stone-900 selection:bg-amber-150 selection:text-amber-900 overflow-x-hidden antialiased transition-colors duration-550">
      
      {/* 1. INTUITIONAL BREADCRUMB & SEO TITLE AT THE PEAK (Bỏ header thanh điều hướng truyền thống) */}
      <header className="bg-stone-50 border-b border-stone-200 py-12 px-4 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-6">
          <nav className="flex flex-wrap items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-wider">
            <a href="/" className="hover:text-stone-900 transition-colors">TRANG CHỦ</a>
            <span>/</span>
            <a href="/blog" className="hover:text-stone-900 transition-colors">BLOG</a>
            <span>/</span>
            <span className="text-stone-900 font-semibold">CỘT MỐC 80 CHUYẾN ĐI LADAKH</span>
          </nav>

          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/50 border border-amber-200/50 text-amber-900 font-mono text-[9px] uppercase tracking-wider font-bold mb-4">
              KỶ NIỆM MỐC 80 CHUYẾN ĐI THÀNH CÔNG VƯỢT TUYẾT SƠN
            </div>
            
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 leading-[1.1] tracking-tight uppercase">
              CỘT MỐC 80 CHUYẾN ĐI <br />
              <span className="font-light italic text-4xl sm:text-6xl md:text-7xl text-stone-700 capitalize">Ladakh</span><br />
              <span className="text-2xl sm:text-4xl text-stone-500">DO FIT TOUR THIẾT KẾ</span>
            </h1>

            {/* SEO & GEO-optimized Sapo under the Title */}
            <div className="space-y-4 pt-2 max-w-4xl">
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-serif italic text-justify">
                Khám phá "Tiểu Tây Tạng" <strong>Ladakh (Ấn Độ)</strong> không dành cho những tay ngang. Chinh phục cung đường Road Trip và Motor Trip vĩ đại nhất hành tinh qua dải <strong>Tây Himalaya</strong> khắc nghiệt đòi hỏi kinh nghiệm thực chiến, bản lĩnh và sự thấu hiểu sâu sắc thổ nhưỡng bản địa.
              </p>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-serif italic text-justify">
                Với định vị là <strong>Nhà tổ chức viễn du tiên phong</strong>, <strong>FIT Tour</strong> tự hào đúc rút tinh hoa từ <strong>hơn 80 hành trình chinh phục thành công</strong>. Chúng tôi không bán một tour du lịch đại trà, chúng tôi kiến tạo <strong>di sản viễn du độc bản</strong> — đưa hơn 755 lữ khách Việt (từ người trẻ đam mê xê dịch đến lứa tuổi U70) an toàn chạm đỉnh những con đèo cao nhất thế giới, tận hưởng trọn vẹn vẻ đẹp ngoạn mục của thủ phủ Leh, thung lũng sa mạc Nubra và hồ thiêng Pangong Tso.
              </p>
            </div>

            {/* Guide commitment requested by User to be placed below Title + Sapo */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="bg-amber-50/60 border-l-4 border-amber-808 border-amber-800 p-6 rounded-r-xl max-w-4xl">
                <span className="font-mono text-[9px] uppercase tracking-widest font-extrabold text-amber-900 block mb-2">
                  ★ LỜI CAM KẾT TỪ NGƯỜI DẪN ĐƯỜNG (FIT TOUR LEADER)
                </span>
                <p className="font-serif italic text-stone-800 text-base sm:text-base leading-relaxed">
                  “Ladakh không phải là nơi để cưỡi ngựa xem hoa hay phó mặc cho những tay mơ. Mỗi mét đường đèo, mỗi nhịp thở ở độ cao 5.000m đều được FIT Tour tính toán nghiêm ngặt bằng dữ liệu thực chứng và kinh nghiệm xương máu của người đi trước. Chúng tôi từ chối những nội dung sao chép suông trên mạng, chỉ mang đến đặc quyền trải nghiệm an toàn tuyệt đối và sự bảo bọc tận tâm bậc nhất từ những chuyên gia thực thụ.”
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-[1.5px] bg-stone-400"></div>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest font-bold">
                    Ban Điều Hành FIT Tour & Đội Ngũ Local Guide Bản Xứ
                  </span>
                </div>
              </div>
            </div>

            {/* Dynamic statistics section integrated directly at the peak */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-250 text-left border-stone-200">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-950 block">80<span className="text-lg text-stone-500 font-light">+</span></span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">Đoàn khởi hành trọn vẹn</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-950 block">755<span className="text-lg text-stone-500 font-light">+</span></span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">Khách hàng</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-950 block">100%</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">Đồng hành cùng Local Guide bản xứ</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-950 block">5<span className="text-lg text-stone-500 font-light">+ năm</span></span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">Kiến tạo hành trình độc bản</span>
              </div>
            </div>

            {/* Feature Image Added below stats */}
            <div className="mt-12 pt-6">
              <div className="w-full rounded-2xl overflow-hidden relative shadow-lg group">
                <img 
                  src={featuredImage}
                  alt="Cột mốc 80 chuyến đi Ladakh" 
                  width="1200"
                  height="675"
                  className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. MAIN CORE CONTENT: RECONCILED COHESIVE SYSTEM PORTAL */}
      <main className="min-h-[70vh]">
        {/* Core Brand Authority Celebration Header & Tours - Locked in Swiss Light Editorial Theme */}
        <div className="relative mt-8 md:mt-16">
          <EditorialAlpineGuide onTourSelect={setBookingTour} />
        </div>
        
        {/* Interactive Topographic Routing Map */}
        <MemoryMap />

        {/* Breathtaking Polaroid Memoir Gallery */}
        <PhotoGallery />

        {/* Gear Preparation Interactive Guide */}
        <Backpack />


      </main>

      {/* 4. GORGEOUS HIGH-CONVERSION BOOKING MODAL */}
      <AnimatePresence>
        {bookingTour && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl border border-stone-200 shadow-2xl overflow-hidden w-full max-w-lg text-left relative"
            >
              {/* Top Banner decoration */}
              <div className="bg-stone-950 text-stone-100 px-6 py-5 relative flex justify-between items-center border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <Compass className="w-5 h-5 text-amber-500 animate-spin-slow" />
                  <div>
                    <span className="font-mono text-[9px] text-amber-400 block uppercase font-bold tracking-widest">FIT TOUR CHUYÊN NGHIỆP</span>
                    <h3 className="font-serif font-extrabold text-white text-base">Đăng Ký Tư Vấn & Đặt Vé Chuyên Sâu</h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setBookingTour(null);
                    setBookingSubmitted(false);
                  }}
                  className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {!bookingSubmitted ? (
                  <form onSubmit={activeTourSubmit} className="space-y-4">
                    <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-900/10 mb-2">
                      <span className="font-mono text-[9px] text-amber-800 block uppercase font-bold">Chương trình lựa chọn:</span>
                      <h4 className="font-serif font-bold text-stone-900 text-sm mt-0.5">{bookingTour.title}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 font-mono">Thời lượng: <strong className="text-stone-800">{bookingTour.duration}</strong> | Giá trọn gói từ: <strong className="text-amber-800 font-extrabold">{bookingTour.price}</strong></p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Họ & Tên Hành Khách</label>
                        <input
                          type="text"
                          required
                          placeholder="Ví dụ: Nguyễn Thị Hoa"
                          value={bookingForm.name}
                          onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Số điện thoại liên hệ</label>
                        <input
                          type="tel"
                          required
                          placeholder="Ví dụ: 0903348XXX"
                          value={bookingForm.phone}
                          onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Địa chỉ Email</label>
                      <input
                        type="email"
                        required
                        placeholder="Ví dụ: hoa.nguyen@gmail.com"
                        value={bookingForm.email}
                        onChange={e => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Tháng đi mong muốn</label>
                        <select
                          value={bookingForm.date}
                          onChange={e => setBookingForm({ ...bookingForm, date: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition"
                        >
                          <option value="Tháng 9 - Mùa Thu Vàng">Tháng 9/2026 - Mùa Thu Vàng</option>
                          <option value="Tháng 10 - Tuyết Đầu Mùa">Tháng 10/2026 - Tuyết Đầu Mùa</option>
                          <option value="Tháng 11 - Sa Mạc Lạnh Cô Tịch">Tháng 11/2026 - Sa Mạc Lạnh</option>
                          <option value="Khác - Đăng ký đặt riêng">Mùa khác (Yêu cầu riêng)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Độ Tuổi Khách Hàng</label>
                        <select
                          value={bookingForm.ageGroup}
                          onChange={e => setBookingForm({ ...bookingForm, ageGroup: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition font-semibold text-amber-900"
                        >
                          <option value="U70">Khách lớn tuổi U70 (Trên 65 tuổi)</option>
                          <option value="50-64">Từ 50 đến 64 tuổi</option>
                          <option value="Dưới 50">Dưới 50 tuổi</option>
                        </select>
                      </div>
                    </div>

                    {/* HỖ TRỢ TRẢI NGHIỆM BẢN ĐỊA & KINH NGHIỆM */}
                    <div className="space-y-1.5 border-t border-stone-100 pt-3">
                      <label className="flex items-start gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={bookingForm.readAms}
                          onChange={e => setBookingForm({ ...bookingForm, readAms: e.target.checked })}
                          className="mt-0.5 accent-amber-700 scale-95"
                        />
                        <span className="text-[10px] text-stone-600 leading-normal">
                          Tôi đồng ý nhận chia sẻ tư vấn kinh nghiệm thích ứng khí hậu và bí quyết chuẩn bị trang phục ấm chuẩn từ các Trưởng đoàn Fit Tour dày dạn kinh nghiệm.
                        </span>
                      </label>
                      <label className="flex items-start gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={bookingForm.needOxygen}
                          onChange={e => setBookingForm({ ...bookingForm, needOxygen: e.target.checked })}
                          className="mt-0.5 accent-amber-700 scale-95"
                        />
                        <span className="text-[10px] text-stone-600 leading-normal">
                          Tôi muốn yêu cầu hỗ trợ thêm thông tin về các hoạt động giao lưu cùng local guide bản xứ và cùng tham gia nấu ăn dã ngoại khi đi đoàn.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-stone-950 hover:bg-amber-800 text-white font-mono text-xs font-bold py-3.5 px-6 rounded-xl transition shadow-md hover:shadow-lg hover:text-amber-50 cursor-pointer flex items-center justify-center gap-2 mt-4"
                    >
                      <span>GỬI ĐĂNG KÝ TRẢI NGHIỆM ĐỒNG HÀNH BẢN ĐỊA</span>
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="w-12 h-12 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest block">ĐĂNG KÝ THÀNH CÔNG!</span>
                    <h4 className="font-serif font-extrabold text-stone-900 text-xl leading-tight">
                      Lịch Hỗ Trợ Đặt Chỗ Của {bookingForm.name} Đã Sẵn Sàng
                    </h4>
                    <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                      Lịch trình chi tiết và cẩm nang kinh nghiệm cho hành trình <b>Ladakh Thu 2026</b> đã được phong tỏa chỗ ngồi ưu tiên. 
                      Đại diện tư vấn cùng Trưởng đoàn Fit Tour sẽ gửi Email & liên lạc qua số điện thoại <b>{bookingForm.phone}</b> trong ít phút tới để cùng thảo luận.
                    </p>
                    <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 inline-block font-mono text-[10px] text-stone-500">
                      Mã đặt chỗ hành trình: <strong className="text-stone-900 select-all font-bold font-mono">FT-LADAKH-{(Math.random() * 10000).toFixed(0)}</strong>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setBookingTour(null);
                          setBookingSubmitted(false);
                        }}
                        className="text-xs font-mono font-bold text-amber-800 hover:text-amber-900 border-b border-amber-800 shrink-0 pb-0.5"
                      >
                        Đóng cửa sổ
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
