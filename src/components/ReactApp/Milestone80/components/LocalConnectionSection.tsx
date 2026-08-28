export default function LocalConnectionSection() {
  return (
    <section className="py-16 lg:py-24 w-full bg-[#0a0a0a] border-t border-stone-900">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* TRAVELERS WORDS */}
          <div className="lg:col-span-5 relative rounded-xl lg:rounded-2xl overflow-hidden flex flex-col justify-end p-8 lg:p-10 min-h-[400px] lg:min-h-[450px]">
            <div className="absolute inset-0 z-0">
              <img src="https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp" alt="Background" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/80 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wide leading-tight">
                  TRAVELERS'<br/>WORDS
                </h2>
              </div>
              <p className="text-white text-[50px] font-serif opacity-30 leading-none h-6">"</p>
              <p className="text-lg md:text-xl font-serif text-white leading-relaxed mb-6 font-light">
                Đây không phải là một tour du lịch.<br/>Đây là hành trình khiến tôi phải lòng<br/>Ladakh mãi mãi.
              </p>
              <p className="text-[#c5a365] text-sm font-serif italic tracking-wide mb-8">
                — Minh Anh, <span className="text-gray-400 text-xs font-sans font-light not-italic">Ladakh Autumn 2024</span>
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden"><img src="https://media.fittour.vn/uploads/lulu-road-captain-ladakh.webp" alt="Avatar 1" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden"><img src="https://media.fittour.vn/uploads/thuptsan-pangong-lake-guide.webp" alt="Avatar 2" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden"><img src="https://media.fittour.vn/uploads/doan-khach-check-in-ho-pangong.webp" alt="Avatar 3" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden"><img width="40" height="40" src="https://media.fittour.vn/uploads/bep-nha-hang-wilderness-camp-diskit.webp" alt="Avatar 4" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-gray-800 flex items-center justify-center text-xs text-white">+</div>
              </div>
            </div>
          </div>

          {/* PEOPLE BEHIND */}
          <div className="lg:col-span-7 bg-[#12151a] border border-white/5 rounded-xl lg:rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wide leading-tight">
                THE PEOPLE<br/>BEHIND THE JOURNEY
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/max-vu" className="group relative aspect-[3/4] overflow-hidden rounded-lg block cursor-pointer">
                <img width="300" height="400" src="https://media.fittour.vn/uploads/max-vu-founder-fit-tour.webp" alt="Max Vũ" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90"></div>
                <div className="absolute bottom-4 w-full text-center flex flex-col items-center">
                  <h3 className="text-white font-serif text-sm md:text-base mb-0.5">Max Vũ</h3>
                  <p className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-3">Founder</p>
                  <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-[#c5a365] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    CHI TIẾT <span className="text-base leading-none transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
              <a href="/hdv-huy-ngo" className="group relative aspect-[3/4] overflow-hidden rounded-lg block cursor-pointer">
                <img width="300" height="400" src="https://media.fittour.vn/uploads/hdv-huy-ngo-fittour.webp" alt="Huy Ngô" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90"></div>
                <div className="absolute bottom-4 w-full text-center flex flex-col items-center">
                  <h3 className="text-white font-serif text-sm md:text-base mb-0.5">Huy Ngô</h3>
                  <p className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-3">Tour Leader</p>
                  <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-[#c5a365] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    CHI TIẾT <span className="text-base leading-none transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
              <a href="/thuptsan" className="group relative aspect-[3/4] overflow-hidden rounded-lg block cursor-pointer">
                <img width="300" height="400" src="https://media.fittour.vn/uploads/thuptsan-pangong-lake-guide.webp" alt="Thuptsan" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90"></div>
                <div className="absolute bottom-4 w-full text-center flex flex-col items-center">
                  <h3 className="text-white font-serif text-sm md:text-base mb-0.5">Thuptsan</h3>
                  <p className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-3">Cultural Guide</p>
                  <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-[#c5a365] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    CHI TIẾT <span className="text-base leading-none transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
              <a href="/lulu" className="group relative aspect-[3/4] overflow-hidden rounded-lg block cursor-pointer">
                <img width="300" height="400" src="https://media.fittour.vn/uploads/lulu-road-captain-ladakh.webp" alt="Lulu" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90"></div>
                <div className="absolute bottom-4 w-full text-center flex flex-col items-center">
                  <h3 className="text-white font-serif text-sm md:text-base mb-0.5">Lulu</h3>
                  <p className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-3">Local Curator</p>
                  <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-[#c5a365] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    CHI TIẾT <span className="text-base leading-none transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
