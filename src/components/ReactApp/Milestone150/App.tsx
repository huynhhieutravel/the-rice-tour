import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import EditorialAlpineGuide from './components/EditorialAlpineGuide';
import LocalConnectionSection from './components/LocalConnectionSection';
import { Compass, Sparkles, X, CheckCircle2, PhoneCall, Heart, Shield } from 'lucide-react';

interface AppProps {
  featuredImage?: string;
  toursSnippet?: React.ReactNode;
}

export default function App({ featuredImage = "", toursSnippet }: AppProps) {
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
    if (!bookingForm.name || !bookingForm.phone) return;
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans bg-stone-50 text-stone-900 selection:bg-amber-150 selection:text-amber-900 overflow-x-hidden antialiased transition-colors duration-550">
      
      {/* 1. INTUITIONAL BREADCRUMB & SEO TITLE AT THE PEAK */}
      <header className="bg-stone-50 border-b border-stone-200 py-12 px-4 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-6">
          <nav className="flex flex-wrap items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-wider">
            <a href="/" className="hover:text-stone-900 transition-colors">TRANG CHỦ</a>
            <span>/</span>
            <a href="/blog" className="hover:text-stone-900 transition-colors">BLOG</a>
            <span>/</span>
            <span className="text-stone-900 font-semibold">CỘT MỐC 150+ HÀNH TRÌNH HIMALAYA</span>
          </nav>
          <div className="text-left mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              
              {/* LEFT COLUMN: Title & Sapo */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/50 border border-amber-200/50 text-amber-900 font-mono text-[9px] uppercase tracking-wider font-bold">
                  KỶ NIỆM MỐC 150+ HÀNH TRÌNH CHINH PHỤC HIMALAYA
                </div>
                
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 leading-[1.1] tracking-tight uppercase">
                  CỘT MỐC 150+ HÀNH TRÌNH <br />
                  <span className="font-light italic text-4xl sm:text-6xl md:text-7xl text-stone-700 capitalize">Himalaya</span><br />
                  <span className="text-2xl sm:text-4xl text-stone-500">DO FIT TOUR THIẾT KẾ</span>
                </h1>

                {/* SEO & GEO-optimized Sapo under the Title */}
                <div className="space-y-4 pt-2">
                  <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-serif text-justify">
                    Himalaya không phải nơi dành cho những chuyến đi vội vã. Từ <a href="/country/ladakh" className="text-amber-700 font-medium hover:underline underline-offset-4 decoration-amber-300">Ladakh</a>, <a href="/country/tay-tang" className="text-amber-700 font-medium hover:underline underline-offset-4 decoration-amber-300">Tây Tạng</a> đến <a href="/country/bhutan" className="text-amber-700 font-medium hover:underline underline-offset-4 decoration-amber-300">Bhutan</a>, <strong>một hành trình trọn vẹn không đo bằng số điểm đến</strong>, mà bằng sự thấu hiểu sâu sắc vùng đất.
                  </p>
                  <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-serif text-justify">
                    <strong>150+ hành trình</strong> của FIT Tour không phải là sự lặp lại, mà là <strong>hơn 150 lần tinh chỉnh</strong> để mang đến một lộ trình hoàn hảo và thấu đáo nhất.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Các mốc khác:</span>
                    <a href="/cot-moc-80-chuyen-di-ladakh" className="text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors border-b border-amber-300 hover:border-amber-700 pb-0.5">
                      Cột mốc 80 Ladakh
                    </a>
                    <span className="text-stone-300">•</span>
                    <a href="/cot-moc-250-hanh-trinh-den-trung-quoc" className="text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors border-b border-amber-300 hover:border-amber-700 pb-0.5">
                      Cột mốc 250 Trung Quốc
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Guide Commitment Quote Box */}
              <div className="lg:col-span-5 flex flex-col justify-center mt-6 lg:mt-0">
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 relative overflow-hidden h-full flex flex-col justify-center">
                  {/* Subtle amber gradient aura at top right */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50/80 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-700 font-serif text-3xl font-black leading-none pt-2">
                      “
                    </div>
                    
                    <p className="font-serif italic text-stone-800 text-lg sm:text-xl leading-relaxed mb-8">
                      Tại độ cao 5.000m, <strong>mọi rủi ro đều không được phép xảy ra</strong>. Từng mét đường đèo và mỗi trạm nghỉ đều được chúng tôi tính toán bằng <strong>dữ liệu thực chứng</strong> và <strong>kinh nghiệm xương máu</strong>. Chúng tôi từ chối những lời quảng cáo suông, chỉ mang đến <strong>đặc quyền an toàn tuyệt đối</strong> từ những chuyên gia bản địa thực thụ.
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-stone-100 mt-auto">
                      <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white font-bold text-sm tracking-widest shrink-0">
                        FT
                      </div>
                      <div>
                        <div className="font-bold text-stone-900 text-sm">Ban Điều Hành FIT Tour</div>
                        <div className="text-xs text-stone-500 mt-0.5">& Đội Ngũ Local Guide Bản Xứ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic statistics section integrated directly at the peak */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-200 text-left">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-950 block">150<span className="text-lg text-stone-500 font-light">+</span></span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">Đoàn khởi hành trọn vẹn</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-950 block">100<span className="text-lg text-stone-500 font-light">%</span></span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">Kỷ luật an toàn</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-950 block">100<span className="text-lg text-stone-500 font-light">%</span></span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">Đồng hành cùng Local Guide bản xứ</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-950 block">6<span className="text-lg text-stone-500 font-light"> năm</span></span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">Kiến tạo hành trình độc bản</span>
              </div>
            </div>

            {/* Feature Image Added below stats */}
            {featuredImage && (
              <div className="mt-12 pt-6">
                <div className="w-full rounded-2xl overflow-hidden relative shadow-lg group">
                  <img 
                    src={featuredImage}
                    alt="Cột mốc 150+ Hành trình Himalaya" 
                    width="1200"
                    height="675"
                    className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. MAIN CORE CONTENT: RECONCILED COHESIVE SYSTEM PORTAL */}
      <main className="min-h-[70vh]">
        {/* Core Brand Authority Celebration Header & Tours - Locked in Swiss Light Editorial Theme */}
        <div className="relative mt-8 md:mt-16">
          <EditorialAlpineGuide toursSnippet={toursSnippet} onTourSelect={setBookingTour} />
        </div>
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
                    <span className="font-mono text-[9px] text-amber-400 block uppercase font-bold tracking-widest">FIT TOUR</span>
                    <h3 className="font-serif font-extrabold text-white text-base">Đăng Ký Tư Vấn Hành Trình</h3>
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
                          Tôi muốn nhận tư vấn về kinh nghiệm thích nghi độ cao và cách chuẩn bị trang phục từ FIT Tour.
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
                          Tôi muốn tìm hiểu thêm về các hoạt động trải nghiệm bản địa và ẩm thực dã ngoại trong chuyến đi.
                        </span>
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-stone-950 hover:bg-amber-800 text-white font-mono text-xs font-bold py-3.5 px-6 rounded-xl transition shadow-md hover:shadow-lg hover:text-amber-50 cursor-pointer flex items-center justify-center gap-2 mt-4"
                    >
                      <span>GỬI YÊU CẦU TƯ VẤN</span>
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
                      Yêu Cầu Tư Vấn Của Bạn Đã Được Tiếp Nhận
                    </h4>
                    <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                      Đội ngũ tư vấn của FIT Tour sẽ liên hệ với bạn qua số điện thoại <b>{bookingForm.phone}</b> hoặc email trong thời gian sớm nhất để hỗ trợ chi tiết về lịch trình.
                    </p>
                    <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 inline-block font-mono text-[10px] text-stone-500">
                      Mã đặt chỗ hành trình: <strong className="text-stone-900 select-all font-bold font-mono">FT-HIMALAYA-{(Math.random() * 10000).toFixed(0)}</strong>
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
