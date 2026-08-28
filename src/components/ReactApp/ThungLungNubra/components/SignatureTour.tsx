import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Compass } from 'lucide-react';

const TOURS = [
  {
    href: '/tour/tour-ladakh-roadtrip',
    image: 'https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-du-ky-o-Zanskar.webp',
    badge: 'Văn hóa – Cảnh quan – Trải nghiệm lần đầu',
    duration: '8N7Đ | Signature Journey',
    title: '01. LADAKH – Vùng Đất Của Các Lạt Ma',
    subtitle: 'Land of the Lamas',
    desc: 'Hành trình đầu tiên dành cho những ai muốn khám phá vẻ đẹp kinh điển của Ladakh.',
    route: 'Leh • Nubra • Pangong • Khardung La • Tu viện cổ'
  },
  {
    href: '/tour/tour-ladakh-khoi-hanh-ha-noi',
    image: 'https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp',
    badge: 'Thám hiểm – Roadtrip – Ít người đặt chân tới',
    duration: '10N9Đ | Expedition Journey',
    title: '02. LADAKH – Kingdom Above the Clouds',
    subtitle: 'Kashmir • Zanskar • Ladakh',
    desc: 'Hành trình xuyên qua những vùng đất hùng vĩ và biệt lập nhất của Himalaya.',
    route: 'Srinagar • Drass • Kargil • Zanskar • Leh'
  },
  {
    href: '/tour/tour-kashmir-zanskar',
    image: 'https://media.fittour.vn/uploads/nguoi-dan-gat-lua-ben-ho-ldakh.webp',
    badge: 'Bản địa – Nhiếp ảnh – Trải nghiệm sâu',
    duration: 'Immersive Journey',
    title: '03. LIVING LADAKH',
    subtitle: 'Beyond the Tourist Trail',
    desc: 'Dành cho những người muốn sống cùng Ladakh thay vì chỉ ghé thăm.',
    route: 'Hanle • Changthang • Hồ Tso Moriri • Làng xa xôi'
  },
  {
    href: '/tour/tour-ladakh-mua-le-hoi-hemis',
    image: 'https://media.fittour.vn/uploads/co-gai-ben-tuong-trang-tu-vien-hemis.webp',
    badge: 'Phật giáo Himalaya – Văn hóa – Tâm linh',
    duration: 'Spiritual Journey',
    title: '04. LADAKH – Path of the Pilgrims',
    subtitle: 'Journey to the Heart of Himalayan Buddhism',
    desc: 'Hành trình theo dấu chân những người hành hương trên Con Đường Phật Giáo Himalaya.',
    route: 'Thiksey • Hemis • Alchi • Lamayuru • Diskit • Rizong'
  },
  {
    href: '/tour/tour-motor-ladakh-10n9d-chinh-phuc-deo-cao-nhat',
    image: 'https://media.fittour.vn/uploads/2023/10/motor-trip-ladakh-4.webp',
    badge: 'Motor – Chinh phục – Phiêu lưu',
    duration: 'Adventure Journey',
    title: '05. LADAKH MOTOR ADVENTURE',
    subtitle: 'Beyond Himalaya',
    desc: 'Hành trình dành cho những người đam mê mô tô và các cung đường huyền thoại của Himalaya.',
    route: 'Khardung La • Chang La • Pangong • Hanle • Umling La'
  }
];

export default function SignatureTour() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-700/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 font-mono">
              Những Hành Trình Độc Bản
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-wide">
              Lựa Chọn Hành Trình
            </h2>
          </div>
          <a
            href="https://thericetour.com/country/ladakh/"
            target="_blank"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-xs font-mono font-bold uppercase tracking-widest transition-colors group"
          >
            Xem tất cả Series Ladakh
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav Buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-[35%] -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-stone-900 border border-white/10 text-white hover:bg-amber-600 hover:text-black transition-colors shadow-xl cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-[35%] -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-stone-900 border border-white/10 text-white hover:bg-amber-600 hover:text-black transition-colors shadow-xl cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Tour Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {TOURS.map((tour, idx) => (
              <a
                key={idx}
                href={tour.href}
                target="_blank"
                className="group block bg-[#050505] hover:bg-[#111] transition-colors rounded-2xl overflow-hidden shadow-xl border border-white/5 hover:border-white/20 snap-center flex-shrink-0"
                style={{ width: 380, maxWidth: '80vw' }}
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden bg-stone-900" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                    <span className="text-white font-bold uppercase text-[9px] tracking-wider">{tour.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <p className="font-bold uppercase mb-2 text-amber-500 text-[10px] tracking-[0.2em] font-mono">
                    {tour.duration}
                  </p>
                  <h3 className="text-white font-serif text-lg mb-1.5 leading-tight">
                    {tour.title}
                  </h3>
                  <p className="text-stone-400 font-serif italic text-[13px] mb-4">
                    {tour.subtitle}
                  </p>
                  <p className="text-stone-300 font-light leading-relaxed text-[13px] mb-6 grow">
                    {tour.desc}
                  </p>
                  <div className="pt-4 mt-auto border-t border-white/5">
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      <span className="text-white font-medium">Hành trình:</span> {tour.route}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
