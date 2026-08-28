import React from 'react';

export default function AuthorCard() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      <div className="bg-[#121B1C]/60 border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 relative flex flex-col md:flex-row items-center gap-8 transition-colors duration-500">
        
        {/* Avatar */}
        <div className="shrink-0 relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-[3px] border-[#121B1C] ring-2 ring-amber-500/20 shadow-xl">
          <img 
            src="https://media.fittour.vn/uploads/max-vu-founder-fit-tour.webp" 
            alt="Max Vũ" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
                <span className="font-mono text-amber-500 text-[10px] tracking-[0.2em] uppercase font-bold bg-amber-500/10 px-2 py-1 rounded">
                  TÁC GIẢ BÀI VIẾT & TRIP PLANNER
                </span>
                <span className="font-mono text-stone-400 text-[10px] uppercase font-bold pl-1">
                  CEO FIT TOUR
                </span>
                <span className="font-mono text-cyan-500/80 text-[10px] italic border-l border-stone-700 pl-2">
                  10 NĂM KINH NGHIỆM
                </span>
              </div>
              <h2 className="font-serif text-3xl text-white">Max Vũ</h2>
            </div>
            <a 
              href="https://thericetour.com/max-vu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-stone-900 border border-stone-700 hover:border-amber-500 hover:bg-amber-500/10 text-stone-300 hover:text-white font-mono text-[10px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 whitespace-nowrap"
            >
              XEM HỒ SƠ CHUYÊN GIA
            </a>
          </div>
          
          <p className="font-serif text-stone-300 text-[14.5px] leading-relaxed max-w-3xl">
            Người trực tiếp chắp bút cho series 10 bài viết này và đảm nhiệm vai trò <strong className="text-amber-100 font-medium">Chuyên gia thiết kế hành trình (Trip Planner)</strong> cho tuyến tour Alaska. Bằng kinh nghiệm thực chiến dạn dày, Max Vũ khát vọng đưa du khách vượt ra khỏi ranh giới truyền thống để thực sự chạm đến bản nguyên vĩ đại của miền biên cương Bắc Cực.
          </p>
        </div>
      </div>
    </div>
  );
}
