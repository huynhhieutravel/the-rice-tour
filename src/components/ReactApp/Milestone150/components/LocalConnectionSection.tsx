export default function LocalConnectionSection() {
  const TEAM_MEMBERS = [
    {
      name: "Max Vũ",
      role: "Founder",
      img: "https://media.fittour.vn/uploads/max-vu-founder-fit-tour.webp",
      link: "/max-vu"
    },
    {
      name: "Hồng Trang",
      role: "Tour Leader",
      img: "https://media.fittour.vn/uploads/huong-dan-vien-hong-trang-ao-dai-ben-bien.webp",
      link: "/hong-trang"
    },
    {
      name: "Bùi Hiếu",
      role: "Tour Leader",
      img: "https://media.fittour.vn/uploads/bui-hieu-bromo-indonesia.webp",
      link: "/bui-hieu"
    },
    {
      name: "Huy Ngô",
      role: "Tour Leader",
      img: "https://media.fittour.vn/uploads/hdv-huy-ngo-fittour.webp",
      link: "/hdv-huy-ngo"
    },
    {
      name: "Thuptsan",
      role: "Local Guide",
      img: "https://media.fittour.vn/uploads/thuptsan-pangong-lake-guide.webp",
      link: "/thuptsan"
    },
    {
      name: "Lulu",
      role: "Local Guide",
      img: "https://media.fittour.vn/uploads/lulu-road-captain-ladakh.webp",
      link: "/lulu"
    }
  ];

  return (
    <section className="py-16 lg:py-24 w-full bg-[#0a0a0a] border-t border-stone-900 relative z-10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* TRAVELERS WORDS */}
          <div className="lg:col-span-5 relative rounded-xl lg:rounded-2xl overflow-hidden flex flex-col justify-end p-8 lg:p-10 min-h-[420px] lg:min-h-[500px]">
            <div className="absolute inset-0 z-0">
              <img src="https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp" alt="Background" width="800" height="600" className="w-full h-full object-cover" loading="lazy" />
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
                ...có sự bố trí hợp lý về lịch trình của Fit Tour để thành viên đoàn có được sự chuẩn bị tốt nhất với môi trường tại Tây Tạng. Sự hướng dẫn hỗ trợ nhiệt tình từ các thành viên trong đoàn của Fit Tour, Local Guide đặc biệt là bạn Trần Thịnh...
              </p>
              <p className="text-[#c5a365] text-sm font-serif italic tracking-wide mb-8">
                — Anh Đức Anh, <span className="text-gray-400 text-xs font-sans font-light not-italic">Đoàn Kora Kailash</span>
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {TEAM_MEMBERS.map((member, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-full border border-white/20 overflow-hidden shrink-0">
                    <img width="40" height="40" src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PEOPLE BEHIND */}
          <div className="lg:col-span-7 bg-[#12151a] border border-white/5 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wide leading-tight">
                THE PEOPLE<br/>BEHIND THE JOURNEY
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {TEAM_MEMBERS.map((member, idx) => (
                <a 
                  key={idx}
                  href={member.link} 
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg block cursor-pointer border border-white/5 hover:border-[#c5a365]/40 transition-all duration-300 shadow-md"
                >
                  <img 
                    width="300" 
                    height="400" 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity group-hover:opacity-90"></div>
                  <div className="absolute bottom-3 md:bottom-4 w-full text-center flex flex-col items-center px-2">
                    <h3 className="text-white font-serif text-xs sm:text-sm md:text-base font-semibold mb-0.5 leading-tight">{member.name}</h3>
                    <p className="text-gray-400 text-[8px] sm:text-[9px] font-bold tracking-widest uppercase mb-2">{member.role}</p>
                    <span className="inline-flex items-center gap-1.5 text-[8px] sm:text-[9px] font-bold tracking-[0.2em] uppercase text-[#c5a365] opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      CHI TIẾT <span className="text-sm leading-none transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
