import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const JOURNEYS = [
  {
    id: 'j1',
    link: '/tour/tour-ladakh-roadtrip',
    image: 'https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-du-ky-o-Zanskar.webp',
    tag: 'Văn hóa – Cảnh quan – Trải nghiệm lần đầu',
    duration: '8N7Đ | Signature Journey',
    title: '01. LADAKH – Vùng Đất Của Các Lạt Ma',
    subtitle: 'Land of the Lamas',
    desc: 'Hành trình đầu tiên dành cho những ai muốn khám phá vẻ đẹp kinh điển của Ladakh.',
    route: 'Leh • Nubra • Pangong • Khardung La • Tu viện cổ'
  },
  {
    id: 'j2',
    link: '/tour/tour-ladakh-khoi-hanh-ha-noi',
    image: 'https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp',
    tag: 'Thám hiểm – Roadtrip – Ít người đặt chân tới',
    duration: '10N9Đ | Expedition Journey',
    title: '02. LADAKH – Kingdom Above the Clouds',
    subtitle: 'Kashmir • Zanskar • Ladakh',
    desc: 'Hành trình xuyên qua những vùng đất hùng vĩ và biệt lập nhất của Himalaya.',
    route: 'Srinagar • Drass • Kargil • Zanskar • Leh'
  },
  {
    id: 'j3',
    link: '/tour/tour-kashmir-zanskar',
    image: 'https://media.fittour.vn/uploads/nguoi-dan-gat-lua-ben-ho-ldakh.webp',
    tag: 'Bản địa – Nhiếp ảnh – Trải nghiệm sâu',
    duration: 'Immersive Journey',
    title: '03. LIVING LADAKH',
    subtitle: 'Beyond the Tourist Trail',
    desc: 'Dành cho những người muốn sống cùng Ladakh thay vì chỉ ghé thăm.',
    route: 'Hanle • Changthang • Hồ Tso Moriri • Làng xa xôi'
  },
  {
    id: 'j4',
    link: '/tour/tour-ladakh-mua-le-hoi-hemis',
    image: 'https://media.fittour.vn/uploads/co-gai-ben-tuong-trang-tu-vien-hemis.webp',
    tag: 'Phật giáo Himalaya – Văn hóa – Tâm linh',
    duration: 'Spiritual Journey',
    title: '04. LADAKH – Path of the Pilgrims',
    subtitle: 'Journey to the Heart of Himalayan Buddhism',
    desc: 'Hành trình theo dấu chân những người hành hương trên Con Đường Phật Giáo Himalaya.',
    route: 'Thiksey • Hemis • Alchi • Lamayuru • Diskit • Rizong'
  },
  {
    id: 'j5',
    link: '/tour/tour-motor-ladakh-10n9d-chinh-phuc-deo-cao-nhat',
    image: 'https://media.fittour.vn/uploads/2023/10/motor-trip-ladakh-4.webp',
    tag: 'Motor – Chinh phục – Phiêu lưu',
    duration: 'Adventure Journey',
    title: '05. LADAKH MOTOR ADVENTURE',
    subtitle: 'Beyond Himalaya',
    desc: 'Hành trình dành cho những người đam mê mô tô và các cung đường huyền thoại của Himalaya.',
    route: 'Khardung La • Chang La • Pangong • Hanle • Umling La'
  }
];

export default function JourneySelection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a]" id="journeys">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#c5a365] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">NHỮNG HÀNH TRÌNH ĐỘC BẢN</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-wide">LỰA CHỌN HÀNH TRÌNH</h2>
          </div>
        </div>
        
        <div className="relative w-full">
          <button 
            onClick={scrollLeft}
            type="button"  
            className="hidden md:flex items-center justify-center bg-[#111] text-white rounded-full cursor-pointer hover:bg-[#c5a365] hover:text-black transition-colors" 
            style={{ position: 'absolute', left: '-24px', top: '40%', transform: 'translateY(-50%)', zIndex: 50, width: '48px', height: '48px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight}
            type="button"  
            className="hidden md:flex items-center justify-center bg-[#111] text-white rounded-full cursor-pointer hover:bg-[#c5a365] hover:text-black transition-colors" 
            style={{ position: 'absolute', right: '-24px', top: '40%', transform: 'translateY(-50%)', zIndex: 50, width: '48px', height: '48px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto -mx-6 px-6 lg:-mx-12 lg:px-12 snap-x snap-mandatory" 
            style={{ gap: '1.25rem', paddingBottom: '2rem', scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
          >
            {JOURNEYS.map((journey) => (
              <a 
                key={journey.id}
                href={journey.link} 
                className="group block bg-[#050505] hover:bg-[#111] transition-colors flex-col h-full rounded-2xl overflow-hidden shadow-xl border border-white/5 hover:border-white/20 snap-center shrink-0" 
                style={{ flex: '0 0 auto', width: '380px', maxWidth: '75vw', display: 'flex' }}
              >
                <div className="relative w-full overflow-hidden bg-[#111]" style={{ aspectRatio: '16/9', flexShrink: 0 }}>
                  <img 
                    src={journey.image} 
                    alt={journey.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                    loading="lazy" 
                  />
                  <div className="absolute bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)]" style={{ top: '1rem', left: '1rem', padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="text-white font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style={{ fontSize: '9px', letterSpacing: '0.05em', lineHeight: 1, paddingTop: '2px' }}>
                      {journey.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col grow relative z-10 text-left">
                  <p className="font-bold uppercase mb-2" style={{ color: '#c5a365', fontSize: '10px', letterSpacing: '0.2em' }}>{journey.duration}</p>
                  <h3 className="text-white font-serif mb-2 leading-tight transition-colors" style={{ fontSize: '18px' }}>{journey.title}</h3>
                  <p className="text-gray-400 font-serif italic mb-4" style={{ fontSize: '13px' }}>{journey.subtitle}</p>
                  <p className="text-gray-300 font-light leading-relaxed mb-6 grow" style={{ fontSize: '13px' }}>{journey.desc}</p>
                  <div className="pt-4 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p className="text-gray-400 leading-relaxed" style={{ fontSize: '11px' }}><span className="text-white font-medium">Hành trình:</span> {journey.route}</p>
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
