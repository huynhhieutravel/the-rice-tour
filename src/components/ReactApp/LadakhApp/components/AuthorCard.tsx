import React from 'react';

export default function AuthorCard() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0 py-8 not-prose">
      <div className="bg-white border border-amber-100 hover:border-amber-300 rounded-2xl p-6 md:p-8 relative flex flex-col md:flex-row items-center gap-8 transition-colors duration-500 shadow-sm hover:shadow-md">
        
        {/* Avatar */}
        <div className="shrink-0 relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-white ring-2 ring-amber-500/20 shadow-md">
          <img 
            src="https://media.fittour.vn/uploads/hdv-huy-ngo-fittour.webp" 
            alt="Huy Ngô" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
                <span className="font-mono text-amber-700 text-[10px] tracking-[0.2em] uppercase font-bold bg-amber-50 px-2 py-1 rounded border border-amber-100">
                  TÁC GIẢ BÀI VIẾT & TOUR LEADER
                </span>
                <span className="font-mono text-stone-500 text-[10px] uppercase font-bold pl-1">
                  HDV FIT TOUR
                </span>
                <span className="font-mono text-cyan-700 text-[10px] italic border-l border-stone-300 pl-2">
                  &gt; 20 LẦN ĐẾN LADAKH
                </span>
              </div>
              <h2 className="font-serif text-3xl text-stone-900 font-bold">Huy Ngô</h2>
            </div>
            
            <a 
              href="https://thericetour.com/hdv-huy-ngo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-amber-50 border border-amber-200 hover:border-amber-400 hover:bg-amber-100 text-amber-800 font-mono text-[10px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 whitespace-nowrap"
            >
              XEM HỒ SƠ CHUYÊN GIA
            </a>
            
          </div>
          
          <p className="font-serif text-stone-700 text-[15px] leading-relaxed max-w-3xl">
            Người trực tiếp chắp bút cho bài viết này và đảm nhiệm vai trò <strong className="text-amber-700 font-bold">Hướng Dẫn Viên (Tour Leader)</strong> cho tuyến tour Ladakh của FIT TOUR. Bằng kinh nghiệm thực chiến dạn dày sau hơn 20 lần đồng hành cùng du khách chinh phục miền đất "Tiểu Tây Tạng", Huy Ngô luôn mang đến những góc nhìn chân thực và kỹ năng sinh tồn thiết yếu để mỗi hành trình đều trọn vẹn và an toàn.
          </p>
        </div>
      </div>
    </div>
  );
}
