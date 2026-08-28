import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Compass, Eye, Heart, Volume2, X, ChevronRight, Sparkles, ArrowRight, Sun, 
  CloudRain, Thermometer, ShieldCheck, Map, Calendar, Ship, FileText, Info, Award, 
  Sparkle, ShoppingBag, Landmark
} from 'lucide-react';

interface EditorialProps {
  passengerName: string;
  setPassengerName: (name: string) => void;
  passengerPhoto: string | null;
}

interface DestinationCard {
  id: string;
  idx: string;
  name: string;
  subtitle: string;
  image: string;
  days: string;
  mileage: string;
  altitude: string;
  weather: string;
  temp: string;
  description: string;
  highlight: string;
  instrument: string;
  heritageStory: string;
  chord: number[];
  notesDescription: string;
  activities: string[];
  cuisine: {
    name: string;
    desc: string;
    image: string;
  };
}

export default function SilkRoadCollection({ 
  passengerName, 
  setPassengerName, 
  passengerPhoto 
}: EditorialProps) {
  
  const [selectedDest, setSelectedDest] = useState<DestinationCard | null>(null);
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>({});
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  
  // Caravan custom planner state
  const [plannerOpen, setPlannerOpen] = useState<boolean>(false);
  const [transportType, setTransportType] = useState<'camel' | 'horse' | 'carriage'>('camel');
  const [selectedGoods, setSelectedGoods] = useState<string[]>(['Tơ lụa thượng hạng', 'Trà Phổ Nhĩ đóng bánh']);
  const [caravanName, setCaravanName] = useState<string>('Vân Đông Tiêu Thương');
  
  // List of 5 majestic destinations on the Silk Road requested by the user
  const destinations: DestinationCard[] = [
    {
      id: 'mong-co',
      idx: '01',
      name: 'Mông Cổ',
      subtitle: 'Khúc Hát Thảo Nguyên',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 1 - 5',
      mileage: 'Km 0',
      altitude: '1,580m',
      weather: 'Khô ráo, lộng gió trời cỏ xanh',
      temp: '16°C',
      description: 'Lạc lối giữa đại thảo nguyên bao la không bóng người, nơi đất trời giao hòa qua tiếng vó ngựa dập dồn thâu đêm. Khói bếp bay lên từ những nếp lều yurt đơn sơ dệt nên câu chuyện thiên di vạn diệp của cổ nhân du mục.',
      highlight: 'Lắng nghe khúc hát đồng thanh độc đáo của những người con thảo nguyên bên bếp lửa hồng rực rỡ.',
      instrument: 'Đầu Hổ Cầm (Horsehead Fiddle - Morin Khuur)',
      heritageStory: 'Khởi đầu từ biên thùy phía Bắc, hành trình mang đậm tính sử thi dâng tấu khúc ca độc bản hoang vu đầy kiêu hãnh của vương quốc mây cỏ cưỡi ngựa lừng lẫy trời xanh.',
      chord: [196.00, 220.00, 293.66, 329.63, 392.00], // G, A, D, E, G (Deep resonant throat vibration)
      notesDescription: 'Âm thanh trầm u trầm lắng đặc trưng thảo nguyên hoang vu, ngân vang lòng dạ người lữ hành.',
      activities: [
        'Trải nghiệm cưỡi ngựa thuần chủng Mông Cổ vượt đồi cỏ hoang sơ',
        'Nghỉ ngơi trong lều Yurt truyền thống lót da thú ấm cúng dưới bầu trời ngập tràn sao tinh tú',
        'Thưởng ngâm đêm âm nhạc cổ truyền với nhạc cụ Mã Đầu Cầm độc bản'
      ],
      cuisine: {
        name: 'Trà Sữa Mặn & Bánh Mỳ Chiên Bơ Tải',
        desc: 'Trà gạch nung sữa ngựa pha muối tạo vị béo đậm đà tiếp sinh khí cho ngày hành quân dài dặc.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'tan-cuong',
      idx: '02',
      name: 'Tân Cương',
      subtitle: 'Con Đường Tơ Lụa Cổ Kính',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 6 - 11',
      mileage: 'Km 1,820',
      altitude: '1,200m',
      weather: 'Khí hậu sa mạc khô ráo, đêm se lạnh',
      temp: '22°C',
      description: 'Nơi rực rỡ những thành trì cổ Kashgar làm bằng đất sét vàng bừng sáng dưới ánh hoàng hôn ngút mắt. Vách tường cổ chứa đựng hương thơm nức của gia vị hạt thì là cùng điệu múa rộn ràng quyện tiếng đàn dây vang dội tấp nập của phiên chợ cổ xưa.',
      highlight: 'Chạm khắc dấu tay lên tường gạch cổ, dạo bước qua những ngõ hẻm ngập rào sắc màu vải dệt.',
      instrument: 'Đàn Dutar Ba Tư (Uyghur Plucked Lute)',
      heritageStory: 'Giao điểm cổ truyền huyễn hoặc của hai luồng giao thương văn minh Á - Âu lộng lẫy tột cùng, nơi những rặng lạc đà kéo chuông vàng khua dọc đụn cát sa mạc lấp lánh.',
      chord: [233.08, 293.66, 311.13, 392.00, 415.30], // Bb, D, Eb, G, Ab (Exotic Oasis scales)
      notesDescription: 'Quả pluck thánh thót bọc thạch anh, hãm sắc khói lửa sa mạc nồng nàn.',
      activities: [
        'Vãng chợ Ba-za cổ kính nức danh thưởng thức giai điệu vĩ cầm Ba Tư',
        'Dấn bước khám phá tàn tích tháp canh lửa Đất Nung Giao Hà cổ thành kỳ bí',
        'Tĩnh tâm dưới giàn nho xanh mát lành thưởng thức vũ điệu ngọc bích'
      ],
      cuisine: {
        name: 'Cừu Nướng Ống Đất Thì Là',
        desc: 'Sườn cừu tươi tẩm ướp hạt cumin thơm lừng, nướng trong lò đất sét sâu hực lửa đỏ rực.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'tay-tu-xuyen',
      idx: '03',
      name: 'Tây Tứ Xuyên',
      subtitle: 'Vùng Đất Kham Huyền Bí',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 12 - 16',
      altitude: '3,200m',
      mileage: 'Km 2,940',
      weather: 'Không khí loãng se lạnh, nắng rạng hừng đông',
      temp: '11°C',
      description: 'Sát sườn rặng tuyết sơn Minya Konka linh thiêng, vương quốc đất Kham sừng sững phơi bày những tu viện màu hồng rực rỡ dán chặt vào vách sỏi đứng im kìm hãm dòng thung lũng sương mù. Nơi lòng tin hóa thanh tâm kinh nguyện ngũ sắc, bay lượn rầm rộ giữa giông gió hoang hoải.',
      highlight: 'Theo dấu thiền sư vãn cảnh qua rừng tùng tuyết cổ xưa đón ánh hào quang óng bạc thâm nghiêm.',
      instrument: 'Huyền Chuông Đồng Tạng (Tibetan Temple Bell)',
      heritageStory: 'Mục sở thị cõi thiêng Tây Tạng mờ huyễn trong sương mù tuyết, vạn dặm hành đạo rèn chí lữ giả cùng tinh túy tịnh độ tâm linh thanh khiết vô hạn.',
      chord: [220.00, 277.18, 329.63, 440.00, 554.37], // Deep monastery tones
      notesDescription: 'Nhát chuông đồng sâu ngấm tâm tủy, cộng hưởng rung mờ vách sương đá.',
      activities: [
        'Tham sảo tự viện đá đỏ thẫm đắm chìm trong tiếng tụng kinh huyền vũ truyền đời',
        'Chinh phục đỉnh đèo tuyết lộng gió ngắm sắc cờ phong mã bay lượn rợp trời',
        'Thưởng thức ngậm trà bơ nóng ấm bên bếp lửa gỗ bách nồng cay khói'
      ],
      cuisine: {
        name: 'Trà Sữa Lúa Mạch Bò Tót Hot',
        desc: 'Lúa mạch đen nướng vàng xay mịn trộn cùng sữa bò tót béo dồi dào năng lượng.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'thanh-hai',
      idx: '04',
      name: 'Thanh Hải',
      subtitle: 'Miền Đất Hồ Xanh',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 17 - 19',
      altitude: '3,260m',
      mileage: 'Km 3,850',
      weather: 'Trong trẻo tuyệt đối, lộng gió hồ bao la',
      temp: '14°C',
      description: 'Hồ nước mặn rộng lớn thênh thang hớp hồn lữ khách bằng sắc xanh ngọc lam biêng biếc, viền quanh bởi rặng hoa cải dầu vàng ruộm chao nghiêng đón nắng vàng dịu mát. Mặt hồ tựa gương soi phản chiếu tuyệt mỹ cả vũ trụ mây khói cuồn cuộn vắt ngang rặng núi tuyết.',
      highlight: 'Đạp xe dạo thong dong sát thềm sóng nước xanh biếc lấp lánh như dát bạc kim cương.',
      instrument: 'Khuyên Tiêu Thảo Nguyên (Steppe Bamboo Flute)',
      heritageStory: 'Dấu chân lắng đọng thư thái bên thềm lòng nước ngọc, cõi tịnh mộng tách biệt phàm trần thế tục nuôi dưỡng tâm linh trong trẻo thuần khiết nhất.',
      chord: [261.63, 293.66, 349.23, 392.00, 523.25], // F, G, C, D, F (Pure fluid pentatonic)
      notesDescription: 'Tiếng sáo trong vắt tựa làn hơi mỏng lướt mịn trên bệ băng hồ sâu.',
      activities: [
        'Đón hừng đông rực hồng ánh dương nhô lên từ lòng sóng ngọc bích phẳng lặng',
        'Tự tay gieo dòng hạt hoa cải dốc đồi xanh, ngắm chim di trú bay rợp trời',
        'Lắng nghe câu chuyện chư tăng vãng sanh bên thềm đền phế cổ nằm giữa lòng hồ'
      ],
      cuisine: {
        name: 'Sữa Chua Thanh Hải Ngào Mật Ong',
        desc: 'Sữa chua bò lên men tự nhiên đặc quánh, bề mặt vàng rộm rưới mật ong tuyết cỏ râm.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'trung-as',
      idx: '05',
      name: 'Kyrgyzstan & Kazakhstan',
      subtitle: 'Thảo Nguyên Du Mục Kỳ Vĩ',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 20 - 25',
      altitude: '2,100m',
      mileage: 'Km 5,200',
      weather: 'Tươi mát, thung lũng thông reo rì rào',
      temp: '12°C',
      description: 'Hùng vĩ dãy Thiên Sơn trói rặng mây tuyết sương, mở ra thế giới thần tiên của những khe núi hẹp chật chội và những thung lũng rừng thông ba lá thẳng tắp. Nơi đại bàng vàng săn mồi chao cánh lượn tự do đầy hoang dại, dẫn lối đoàn lữ hành khám phá biên ải Trung Á xa xôi tuyệt trần.',
      highlight: 'Tận mắt chiêm bái nghệ thuật huấn luyện đại bàng săn mồi thượng thừa kiêu bạt.',
      instrument: 'Dân Cầm Dombra (Plucked Kazakh Longneck Lute)',
      heritageStory: 'Điểm cực tột đầy vinh quang khép lại lộ trình ngàn dặm cổ, hòa sáp cùng nền văn minh thung lũng du mục Trung Á oai nghiêm phóng khoáng tựa gió ngàn.',
      chord: [196.00, 261.63, 293.66, 392.00, 440.00], // Grounded strings
      notesDescription: 'Cú bập gảy dombra tốc độ nhanh dồn dập rền vang vó ngựa thảo nguyên.',
      activities: [
        'Chứng kiến màn săn mồi ngoạn mục đỉnh núi của đại bàng chúa núi ngàn năm',
        'Đi dạo qua thung lũng Spruce biếc thẳm men theo biên ải lấp lánh tuyết ngọc',
        'Vãn thiền nghe sáo gỗ rền tấu khúc thanh âm hoang dã bên thảo dã cỏ'
      ],
      cuisine: {
        name: 'Beshbarmak Thịt Hầm Tay',
        desc: 'Món ăn Năm Ngón cổ xưa: mì sợi thô rộng bản lót thịt cừu ninh nhừ cùng hành tây thơm nồng.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    }
  ];

  // Pluck Audio Synthesizer mimicking native wooden instruments
  const playAncientPluck = (freqs: number[], type: 'sine' | 'sawtooth' | 'triangle' | 'square' = 'sine') => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      freqs.forEach((freq, idx) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gainNode = ctx.createGain();
          
          osc.type = type;
          osc.frequency.value = freq;
          
          // Realistic wood string decaying vibration
          gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 1.4);
          
          // Lowpass filter to emulate warm wooden body resonation
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.value = type === 'sawtooth' ? 800 : 1200;
          
          osc.connect(filter);
          filter.connect(gainNode);
          gainNode.connect(ctx.destination);
          
          osc.start();
          osc.stop(ctx.currentTime + 1.5);
        }, idx * 160);
      });
    } catch (e) {}
  };

  const handleCardClick = (dest: DestinationCard, index: number) => {
    setSelectedDest(dest);
    setActiveStepIndex(index);
    
    // Choose appropriate synth waves for distinct national flavors
    let wave: 'sine' | 'sawtooth' | 'triangle' | 'square' = 'sine';
    if (dest.id === 'mong-co') wave = 'triangle'; // Horsehead string bow
    if (dest.id === 'tan-cuong') wave = 'sawtooth'; // Dutar sharp pluck
    if (dest.id === 'tay-tu-xuyen') wave = 'sine'; // Deep temple bell
    if (dest.id === 'thanh-hai') wave = 'sine'; // Airy breathe
    if (dest.id === 'trung-as') wave = 'square'; // Dombra crisp gallop
    
    playAncientPluck(dest.chord, wave);
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(prev => ({ ...prev, [id]: !prev[id] }));
    playAncientPluck([392.00, 523.25], 'sine'); // High tinkling chime
  };

  const handleAddGood = (good: string) => {
    if (selectedGoods.includes(good)) {
      setSelectedGoods(selectedGoods.filter(g => g !== good));
    } else {
      setSelectedGoods([...selectedGoods, good]);
      playAncientPluck([293.66, 349.23], 'sine');
    }
  };

  return (
    <div className="bg-[#FAF6EE] text-[#1D1916] min-h-screen font-serif relative overflow-hidden pb-16 selection:bg-[#8C3B1A] selection:text-white">
      
      {/* Editorial Watermark Overlay Background */}
      <div className="absolute inset-x-0 top-0 h-[1000px] bg-gradient-to-b from-[#FAF6EE] via-[#FAF6EE]/80 to-transparent pointer-events-none" />
      
      {/* Micro Top Header for SILK ROAD ONLY */}
      <div className="border-b border-[#1D1916]/10 py-5 px-6 md:px-12 flex items-center justify-between text-[#1D1916] relative z-20">
        <div className="text-left font-serif leading-none">
          <span className="font-bold tracking-[0.3em] text-sm md:text-xs block uppercase text-[#8C3B1A]">SILK ROAD COLLECTION</span>
          <span className="font-mono text-[9px] md:text-[7px] tracking-[0.3em] font-light text-stone-500 uppercase block mt-1">ACROSS DESERTS • ACROSS CIVILIZATIONS</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 font-mono text-[11px] md:text-[9px] tracking-widest font-black uppercase text-stone-600">
          <span className="hover:text-[#8C3B1A] transition-colors cursor-pointer text-[#8C3B1A] border-b border-[#8C3B1A]/40 pb-0.5">THE ROUTE</span>
          <span onClick={() => {
            setPlannerOpen(true);
            playAncientPluck([293.66, 392.00], 'sine');
          }} className="hover:text-[#8C3B1A] transition-colors cursor-pointer">CARAVAN CABINET</span>
          <span className="hover:text-[#8C3B1A] transition-colors cursor-pointer">HERITAGE MAP</span>
          <span className="hover:text-[#8C3B1A] transition-colors cursor-pointer">MERCHANT ARCHIVES</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] md:text-[8px] text-stone-400 font-bold uppercase tracking-wider">FIT TOUR EDITIONS</span>
          <button 
            onClick={() => {
              setPlannerOpen(true);
              playAncientPluck([261.63, 329.63, 392.00], 'sine');
            }}
            className="border-2 border-[#1D1916] px-4 py-1.5 rounded-lg hover:bg-[#1D1916] hover:text-[#FAF6EE] transition-all cursor-pointer font-mono text-[10.5px] md:text-[8.5px] font-black uppercase tracking-widest"
          >
            KHAI SỔ THƯƠNG ĐOÀN
          </button>
        </div>
      </div>

      {/* Hero Poster Banner Replica */}
      <section className="relative w-full overflow-hidden border-b border-[#1D1916]/10 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[750px] items-stretch relative">
          
          {/* Left Column: Luxurious High-Contrast Editorial Metadata */}
          <div className="lg:col-span-5 p-8 md:p-14 lg:p-20 flex flex-col justify-center space-y-8 relative z-10">
            
            <div className="space-y-2.5 animate-pulse">
              <span className="font-mono text-[12px] md:text-[10px] tracking-[0.5em] text-[#8C3B1A] uppercase font-extrabold block">
                T A T T O O E D   B Y   S A N D
              </span>
              <div className="w-14 h-[1.5px] bg-[#8C3B1A]" />
            </div>

            <div className="space-y-4">
              <h1 className="font-prata text-5xl md:text-6xl lg:text-7xl text-[#1D1916] font-normal leading-[0.9] uppercase tracking-tighter">
                SILK ROAD
              </h1>
              <span className="font-serif italic text-2xl md:text-3xl text-[#8C3B1A] tracking-wider block font-light">
                Across Deserts <span className="text-[#1B3B6F] font-serif font-light">·</span> Across Civilizations
              </span>
              <p className="font-serif text-[14px] md:text-[12px] tracking-[0.25em] text-stone-500 uppercase block font-black">
                Along The Ancient Trade Routes
              </p>
            </div>

            <p className="font-serif text-[16.5px] md:text-[14.5px] text-stone-700 font-light leading-relaxed text-justify max-w-md">
              Hành trình độc bản dâng hiến sớ văn dã sử theo dấu ngũ đại văn minh rực sắc bụi cát vàng trên Con Đường Tơ Lụa kì vĩ ngàn năm. Những bước chân nối liền vách núi mây ngàn, lòng biếc hồ bạt ngàn và rặng lều thảo nguyên du mục.
            </p>

            {/* Custom Terracotta & Lapis Seal Matrix */}
            <div className="flex items-center gap-4.5 pt-4">
              <div className="w-11 h-11 border-2 border-[#8C3B1A] text-[#8C3B1A] flex flex-col items-center justify-center font-serif font-black text-[11px] md:text-[9px] leading-tight select-none rotate-2 shadow-sm shrink-0">
                <span>西域</span>
                <span className="text-[9.5px] md:text-[7.5px] border-t border-[#8C3B1A]/40 w-full text-center">古道</span>
              </div>
              
              <div className="text-left leading-tight">
                <span className="font-mono text-[10px] md:text-[8px] text-stone-400 uppercase tracking-widest block font-extrabold">VERIFIED EXPEDITION EMBLEM</span>
                <span className="font-serif text-[14px] md:text-[12px] text-[#1D1916] font-bold block italic uppercase">Imperial Silk Trade Authorized</span>
              </div>
            </div>

            {/* Micro quote card */}
            <div className="p-4 bg-stone-100/50 rounded-xl border border-stone-200 text-left text-sm md:text-xs max-w-sm font-serif italic text-stone-600 leading-relaxed">
              "Bụi vàng sa mạc phủ mờ dấu gót lữ khách, chuông đồng vọng rền sương thẳm, kéo dải lụa điều qua vạn dặm sơn hà vĩnh cửu."
            </div>

          </div>

          {/* Right Column: Stunning Sand-Dust Majestic Landscape Illustration */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-auto overflow-hidden">
            <div className="absolute inset-0 bg-[#F4EFE6]">
              <img
                src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png"
                alt="Silk Road Caravan Desert Dunes Kashgar Sunset view"
                className="w-full h-full object-cover filter contrast-[1.03] saturate-[0.78]"
                referrerPolicy="no-referrer"
              />
              
              {/* Silk Road watercolor overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/20 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE] via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-[#8C3B1A]/5 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Floating Royal Silk Ribbon Banner */}
            <div className="absolute top-10 right-10 flex flex-col items-center gap-1.5 bg-[#8C3B1A] text-[#FAF6EE] p-3.5 py-5 rounded-b-lg shadow-lg z-10 border border-[#FAF6EE]/5">
              <span className="font-serif text-[12px] md:text-[10px] tracking-[0.25em] font-black [writing-mode:vertical-rl] uppercase">
                絲綢之路 • COLLECTION
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 animate-ping" />
            </div>

            {/* Geographical dynamic coordinates for current active destination */}
            <div className="absolute bottom-8 left-8 md:right-8 md:left-auto font-mono text-[11px] md:text-[9px] text-[#FAF6EE] tracking-widest bg-stone-900/90 p-3 px-5 rounded-lg border border-amber-900/10 backdrop-blur-md uppercase">
              📍 HIỂN THỊ: ẢI CỔ TÂN CƯƠNG • HUYỄN THOẠI SA MẠC
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE CARAVAN PROGRESS TRACKER & DIGITAL MAP TIMELINE */}
      <section className="py-12 px-6 md:px-12 bg-stone-900 text-[#FAF6EE] relative overflow-hidden border-y border-amber-900/20">
        <div className="max-w-6xl mx-auto space-y-8 relative z-10">
          
          <div className="text-center space-y-1">
            <span className="font-mono text-[#8C3B1A] text-sm md:text-xs md:text-xxs tracking-[0.45em] uppercase block font-extrabold">DIGITAL EXPEDITION CHART</span>
            <h2 className="font-prata text-xl md:text-2xl uppercase tracking-widest text-[#FAF6EE]">Bản Thần Lộ Trình Sát Ký</h2>
            <p className="font-serif text-stone-400 italic text-sm md:text-xs">Nhấp chọn các điểm mốc dọc hành trình dặm dài 5,200 km để ngự lãm sâu sắc chi tiết.</p>
          </div>

          {/* Interactive timeline map route bar */}
          <div className="relative pt-6 pb-2">
            
            {/* Connecting Route Line */}
            <div className="absolute left-6 right-6 top-[37px] h-1.5 bg-stone-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#8C3B1A] via-amber-600 to-[#1B3B6F]"
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStepIndex / 4) * 100}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Connecting dash animation overlay */}
            <div className="absolute left-6 right-6 top-[37px] h-1.5 pointer-events-none opacity-40">
              <div className="w-full h-full border-t border-dashed border-amber-300 animate-pulse" />
            </div>

            <div className="grid grid-cols-5 relative">
              {destinations.map((dest, index) => {
                const isActive = activeStepIndex === index;
                const isPassed = index <= activeStepIndex;
                
                return (
                  <div key={dest.id} className="flex flex-col items-center group relative">
                    <button
                      onClick={() => handleCardClick(dest, index)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all ${
                        isActive 
                        ? 'bg-amber-400 text-stone-950 scale-125 ring-4 ring-[#8C3B1A]/40' 
                        : isPassed 
                        ? 'bg-[#8C3B1A] text-white hover:bg-amber-500' 
                        : 'bg-stone-800 text-stone-500 hover:bg-[#8C3B1A]/40'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </button>

                    <span className="font-mono text-[11px] md:text-[9px] text-[#FAF6EE]/50 mt-2 tracking-widest block uppercase font-bold">
                      {dest.mileage}
                    </span>

                    <span className={`font-prata text-sm md:text-xs mt-1 block tracking-tight text-center max-w-[120px] transition-colors ${
                      isActive ? 'text-amber-300 font-extrabold' : 'text-stone-300 group-hover:text-amber-200'
                    }`}>
                      {dest.name}
                    </span>

                    <span className="font-serif italic text-[12px] md:text-[10px] text-stone-500 text-center leading-none mt-0.5 hidden sm:inline">
                      {dest.subtitle.split(' ')[0]}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Quick interactive controller info card */}
          <div className="p-5 rounded-2xl bg-stone-950/75 border border-[#8C3B1A]/20 grid grid-cols-1 md:grid-cols-4 items-center gap-4 text-left">
            <div className="col-span-1 border-r border-[#FAF6EE]/10 pr-2">
              <span className="font-mono text-stone-500 uppercase text-[10px] md:text-[8px] font-bold tracking-widest block">CHẶNG THÁM HIỂM</span>
              <h3 className="font-prata text-[17px] text-amber-300 font-normal uppercase leading-tight mt-1">{destinations[activeStepIndex].name}</h3>
              <p className="font-serif italic text-sm md:text-xs text-stone-300">{destinations[activeStepIndex].subtitle}</p>
            </div>
            
            <div className="col-span-2 space-y-1.5 px-0 md:px-5">
              <span className="font-mono text-stone-500 uppercase text-[10px] md:text-[8px] font-bold tracking-widest block">TẤM LƯỢC KÝ SƠ LƯỢC</span>
              <p className="font-sans text-[14px] md:text-[12px] font-light leading-relaxed text-stone-300">
                "{destinations[activeStepIndex].description.slice(0, 130)}..."
              </p>
            </div>

            <div className="col-span-1 flex flex-col items-stretch gap-2 pl-0 md:pl-4 border-l border-[#FAF6EE]/10">
              <button
                onClick={() => handleCardClick(destinations[activeStepIndex], activeStepIndex)}
                className="py-2.5 px-4 bg-[#8C3B1A] hover:bg-[#a64721] rounded-xl text-stone-950 font-mono text-[11.5px] md:text-[9.5px] font-black uppercase tracking-widest font-black flex items-center justify-center gap-2 cursor-pointer transition-colors text-[#FAF6EE]"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>PHÁC HỌA CHI TIẾT</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5-CARD COMPREHENSIVE EDITORIAL CATALOGUE ROW */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between text-left pb-4 border-b border-[#1D1916]/10">
          <div>
            <div className="flex items-center gap-2 text-[#8C3B1A] font-mono text-sm md:text-xs md:text-xxs font-black tracking-widest uppercase">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>THE FIVE SENSORY CHOP-MARKS</span>
            </div>
            <h2 className="font-prata text-3xl font-light text-[#1D1916] uppercase tracking-wide mt-1">
              Ngũ Đại Danh Sương Di Sản
            </h2>
          </div>
          <p className="font-serif italic text-stone-500 text-sm max-w-md md:text-right mt-3 md:mt-0 leading-relaxed font-light">
            Mỗi điểm đến là một vết ấn gối đầu trên nền tảng của con đường thương lộ huyền thoại, dệt tơ lụa ngàn dặm nối liền Á Âu.
          </p>
        </div>

        {/* Catalog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <div
              key={dest.id}
              onClick={() => handleCardClick(dest, idx)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#1D1916]/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between cursor-pointer hover:border-amber-900/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.05] group-hover:scale-105 group-hover:saturate-[1.0] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badge top left */}
                <div className="absolute top-4 left-4 bg-stone-900/95 text-white font-mono text-[10.5px] md:text-[8.5px] px-3 py-1 rounded-md tracking-wider uppercase font-black">
                  {dest.mileage}
                </div>

                {/* Heart like marker */}
                <button
                  onClick={(e) => toggleLike(dest.id, e)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-stone-200 hover:bg-[#8C3B1A] hover:text-white transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isLiked[dest.id] ? 'fill-red-505 text-red-500' : 'text-stone-100'}`} />
                </button>

                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end text-white">
                  <span className="font-mono text-[11px] md:text-[9px] text-[#8C3B1A] font-black uppercase tracking-[0.25em]">
                    STORY {dest.idx}
                  </span>
                  <h3 className="font-prata text-lg font-normal tracking-wide text-[#FAF6EE] mt-0.5">
                    {dest.subtitle}
                  </h3>
                </div>
              </div>

              {/* Description and card specs */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                <p className="font-serif text-sm leading-relaxed text-stone-605 text-justify italic h-20 overflow-hidden line-clamp-3">
                  "{dest.description}"
                </p>

                <div className="space-y-2 border-t border-stone-100 pt-4 font-mono text-[12px] md:text-[10px] text-stone-500 uppercase tracking-wider">
                  <div className="flex justify-between">
                    <span>Độ cao địa bàn:</span>
                    <span className="font-bold text-stone-800">{dest.altitude}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mộc nhạc khí:</span>
                    <span className="font-bold text-[#8C3B1A] text-right">{dest.instrument.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#8C3B1A] font-mono text-[12.5px] md:text-[10.5px] font-black uppercase tracking-wider pt-2 border-t border-stone-100/50">
                  <span className="group-hover:text-amber-600 transition-colors">Khảo Sát Di Sản</span>
                  <div className="w-6 h-6 rounded-full bg-stone-100 group-hover:bg-[#8C3B1A] group-hover:text-white flex items-center justify-center transition-all">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* CALLIGRAPHIC WATERCOLOR INK STYLED SECTION BANNER */}
      <section className="py-24 px-4 bg-[#F2EDE2] relative overflow-hidden flex flex-col items-center justify-center border-t border-[#1D1916]/5">
        
        {/* Minimal vector line mountains simulating ink brush */}
        <div className="w-full max-w-4xl opacity-[0.2] pointer-events-none absolute h-60 -bottom-2 select-none">
          <svg viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 170 C150 120 280 100 450 150 C600 170 750 110 1000 140 L1000 200 L0 200 Z" fill="#1D1916" />
            <path d="M50 175 C250 105 400 125 600 145 C750 155 850 105 1000 125 L1000 200 L50 200 Z" fill="#1D1916" opacity="0.6" />
            <path d="M280 143 L285 133 L287 133 L289 143 L279 143 Z" fill="#1D1916" />
            <line x1="285" y1="133" x2="285" y2="120" stroke="#1D1916" strokeWidth="1" />
            <path d="M285 120 L291 127 L285 130 Z" fill="#1D1916" />
            <path d="M550 70 Q554 65 558 70 Q562 65 566 70" stroke="#1D1916" strokeWidth="1" fill="none" />
            <path d="M580 80 Q583 77 586 80 Q589 77 592 80" stroke="#1D1916" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Splendid text spacing */}
        <div className="text-center space-y-5 max-w-3xl z-10 relative">
          <span className="font-mono text-[11px] md:text-[9px] tracking-[0.5em] text-[#8C3B1A] uppercase font-black block">
            THE WORLD WRITTEN BY THE HORSE WHIP
          </span>

          <h2 className="font-prata text-2xl md:text-3xl lg:text-4xl text-[#1D1916] uppercase tracking-[0.18em] leading-relaxed max-w-2xl mx-auto font-normal">
            BỤI VÀNG SA MẠC PHỦ HOA LỆ.<br />CHUÔNG ĐỒNG VANG VỌNG CÕI THƯ KHƯC.
          </h2>

          <div className="flex justify-center items-center py-3">
            <div className="w-14 h-[1.5px] bg-[#8C3B1A]" />
          </div>

          <p className="font-serif italic text-stone-600 text-sm max-w-lg mx-auto">
            Khăn sương tơ lụa phủ vạn dặm thương đồ, lột sớ ngàn chương để bảo lưu từng dấu chân lữ sương.
          </p>
        </div>
      </section>

      {/* SENSORY SPECTACULAR DETAIL DRAWER / DI SẢN KHẢO SÁT CHI TIẾT */}
      <AnimatePresence>
        {selectedDest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-stone-950/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-5xl bg-[#FCFAF5] text-[#1D1916] rounded-3xl overflow-hidden border-2 border-[#8C3B1A]/20 shadow-2xl flex flex-col lg:flex-row relative max-h-[88vh] lg:max-h-[85vh]"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 z-40 w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Heavy Panoramic Image Cover */}
              <div className="w-full lg:w-[45%] relative min-h-[250px] lg:min-h-full">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.08]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Visual spec details cards over photo */}
                <div className="absolute bottom-6 left-6 text-white space-y-2">
                  <span className="font-mono text-[11px] md:text-[9px] bg-[#8C3B1A] px-3.5 py-1.5 rounded-md text-white uppercase tracking-widest font-black inline-block">
                    {selectedDest.days}
                  </span>
                  
                  <h3 className="font-prata text-3xl font-normal tracking-wide text-[#FAF6EE]">
                    {selectedDest.name}
                  </h3>
                  
                  <div className="flex gap-4 font-mono text-[11.5px] md:text-[9.5px] text-stone-200 uppercase tracking-widest">
                    <span>TOẠ ĐỘ: {selectedDest.mileage}</span>
                    <span>•</span>
                    <span>ĐỘ CAO: {selectedDest.altitude}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Immersive Content Scroll space */}
              <div className="w-full lg:w-[55%] p-6 md:p-10 overflow-y-auto space-y-6 text-left relative custom-scrollbar">
                
                {/* Header details */}
                <div>
                  <div className="flex items-center gap-1.5 text-[#8C3B1A] font-mono text-sm md:text-xs md:text-xxs font-black tracking-widest uppercase">
                    <Compass className="w-4 h-4 animate-spin-slow" />
                    <span>HÀNH TRÌNH KHẢO SỨ DI SẢN • LEVEL {selectedDest.idx}</span>
                  </div>
                  
                  <h4 className="font-prata text-xl text-stone-900 font-normal uppercase mt-1 leading-tight border-b border-stone-200 pb-3">
                    {selectedDest.subtitle}
                  </h4>
                </div>

                {/* Substantive Description block */}
                <div className="space-y-3 font-serif text-sm leading-relaxed text-stone-701">
                  <p className="text-justify font-normal first-letter:text-3.5xl first-letter:font-black first-letter:text-[#8C3B1A] first-letter:mr-2.5 first-letter:float-left">
                    {selectedDest.description}
                  </p>
                  
                  <p className="italic text-stone-500 text-[15px] md:text-[13px] border-l-2 border-amber-600/50 pl-3 leading-relaxed">
                    “{selectedDest.highlight}”
                  </p>
                </div>

                {/* Digital Folk Instrument Synthesizer box */}
                <div className="bg-[#ede7da] p-4.5 rounded-2xl border border-amber-900/15">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-[#8C3B1A] shrink-0" />
                      <span className="font-mono text-[11px] md:text-[9px] tracking-widest text-[#8C3B1A] font-extrabold uppercase">
                        CỔ ĐẠO ÂM CHO DÒNG NHẠC KHÍ
                      </span>
                    </div>
                    <span className="text-[9.5px] md:text-[7.5px] font-mono text-stone-550 uppercase tracking-widest font-bold">DIGITAL MOCK PLUCK</span>
                  </div>
                  
                  <h5 className="text-[14px] md:text-[12px] font-prata text-stone-800 font-bold mb-1.5">
                    {selectedDest.instrument}
                  </h5>
                  
                  <p className="text-[13px] md:text-[11px] text-stone-500 italic mb-3">
                    {selectedDest.notesDescription} Hệ ngũ âm mô tả thực thế thần hồn mây núi hoang dã dặm dài.
                  </p>
                  
                  <button
                    onClick={() => {
                      let type: 'sine' | 'sawtooth' | 'triangle' | 'square' = 'sine';
                      if (selectedDest.id === 'mong-co') type = 'triangle';
                      if (selectedDest.id === 'tan-cuong') type = 'sawtooth';
                      if (selectedDest.id === 'trung-as') type = 'square';
                      playAncientPluck(selectedDest.chord, type);
                    }}
                    className="w-full py-2.5 bg-[#8C3B1A]/10 hover:bg-[#8C3B1A]/20 border border-[#8C3B1A]/20 rounded-xl cursor-pointer text-[#8C3B1A] font-mono text-[11.5px] md:text-[9.5px] font-black tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8C3B1A] animate-pulse" />
                    <span> GÕ TẤU CHÂN ÂM NGŨ KHÚC</span>
                  </button>
                </div>

                {/* Day-by-day actions */}
                <div className="space-y-3">
                  <span className="font-mono text-sm md:text-xs md:text-xxs tracking-widest text-stone-400 font-extrabold uppercase block">
                    HOẠT ĐỘNG THƯỢNG HẠNG (CABIN EXPEDITIONS)
                  </span>
                  
                  <div className="space-y-2.5">
                    {selectedDest.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm md:text-xs text-stone-800 font-sans leading-normal">
                        <div className="w-4 h-4 rounded-full bg-[#1D1916] text-[#FAF6EE] text-[11.5px] md:text-[9.5px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="font-light">{act}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Culinary recommendation */}
                <div className="border-t border-stone-200 pt-5 space-y-3">
                  <span className="font-mono text-sm md:text-xs md:text-xxs tracking-widest text-stone-400 font-extrabold uppercase block">
                    ĐẶC SẢN NƠI PHIÊN TRẤN (LOCAL TASTE)
                  </span>

                  <div className="flex flex-col sm:flex-row items-stretch gap-4 bg-stone-100/50 p-3.5 rounded-xl border border-stone-200">
                    <img
                      src={selectedDest.cuisine.image}
                      alt={selectedDest.cuisine.name}
                      className="w-full sm:w-28 h-20 object-cover rounded-lg filter saturate-[0.8] contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-1.5 flex flex-col justify-center text-left">
                      <h5 className="font-prata text-sm md:text-xs font-bold text-stone-900 uppercase">
                        {selectedDest.cuisine.name}
                      </h5>
                      <p className="text-[13px] md:text-[11px] font-serif text-stone-550 leading-relaxed italic">
                        "{selectedDest.cuisine.desc}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Weather Status */}
                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-stone-200">
                  <div className="bg-stone-150/40 p-2 text-center rounded-xl border border-stone-200">
                    <Sun className="w-4 h-4 text-[#8C3B1A] mx-auto mb-1 animate-pulse" />
                    <span className="text-[10px] md:text-[8px] font-mono text-stone-400 uppercase block font-bold">Thời tiết</span>
                    <span className="text-[12px] md:text-[10px] font-serif font-black text-stone-800">{selectedDest.weather}</span>
                  </div>
                  <div className="bg-stone-150/40 p-2 text-center rounded-xl border border-stone-200">
                    <Thermometer className="w-4 h-4 text-orange-550 mx-auto mb-1" />
                    <span className="text-[10px] md:text-[8px] font-mono text-stone-400 uppercase block font-bold">Nhiệt độ</span>
                    <span className="text-[12px] md:text-[10px] font-serif font-black text-stone-800">{selectedDest.temp}</span>
                  </div>
                  <div className="bg-stone-150/40 p-2 text-center rounded-xl border border-stone-200">
                    <Compass className="w-4 h-4 text-[#1B3B6F] mx-auto mb-1" />
                    <span className="text-[10px] md:text-[8px] font-mono text-stone-400 uppercase block font-bold">Lưu trình</span>
                    <span className="text-[12px] md:text-[10px] font-serif font-black text-stone-800">{selectedDest.mileage}</span>
                  </div>
                </div>

                {/* Footer in drawer */}
                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-stone-400 font-mono text-[9px] md:text-[7px] tracking-widest uppercase">
                    VĂN BẢN TRUYỀN DỤ CHÂN SỔ • ALL RIGHTS RESERVED
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedDest(null);
                      setPlannerOpen(true);
                      playAncientPluck([293.66, 392.00, 587.33], 'sine');
                    }}
                    className="p-2.5 py-1.5 bg-[#8C3B1A] hover:bg-stone-900 text-[#FAF6EE] rounded-lg text-[11.5px] md:text-[9.5px] font-mono font-black tracking-widest uppercase cursor-pointer"
                  >
                    GHI DANH TOA XE DU HÀNH
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BESPOKE SILK ROAD MERCHANT PASS & CARAVAN EXPLORER PLANNER OVERLAY */}
      <AnimatePresence>
        {plannerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-stone-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-[#FAF6EE] text-[#1D1916] rounded-3xl overflow-hidden border-2 border-amber-900/40 p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setPlannerOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1.5 border-b border-[#1D1916]/10 pb-4">
                <span className="font-mono text-sm md:text-xs md:text-xxs tracking-[0.35em] text-[#8C3B1A] font-black block uppercase">
                  BẢN KIẾT THIẾT THƯƠNG ĐOÀN KHẢO CỔ • MERCANTILE ENGINES
                </span>
                
                <h3 className="font-prata text-2xl uppercase tracking-widest text-[#8C3B1A]">
                  Hành Sách Khai Ký Lộ Thư
                </h3>
                
                <p className="text-stone-550 text-sm md:text-xs italic">
                  Thiết kế toa hành quân du mục, may đo vận tải gấm hoa và tơ trà thông hành.
                </p>
              </div>

              {/* Passenger Name & Caravan Name edit box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10.5px] md:text-[8.5px] text-stone-400 font-extrabold tracking-widest uppercase block">
                    Danh Vương Lữ Hành (Explorer Name):
                  </label>
                  <input
                    type="text"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 hover:border-[#8C3B1A] focus:border-[#8C3B1A] rounded-xl font-serif text-sm focus:outline-none text-stone-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10.5px] md:text-[8.5px] text-stone-400 font-extrabold tracking-widest uppercase block">
                    Tên Thương Đoàn (Caravan Name):
                  </label>
                  <input
                    type="text"
                    value={caravanName}
                    onChange={(e) => setCaravanName(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 hover:border-[#8C3B1A] focus:border-[#8C3B1A] rounded-xl font-serif text-sm focus:outline-none text-stone-900"
                  />
                </div>
              </div>

              {/* Transportation Type selection */}
              <div className="text-left space-y-2.5">
                <span className="font-mono text-[10.5px] md:text-[8.5px] text-stone-400 font-extrabold tracking-widest uppercase block">
                  PHƯƠNG TIỆN DU HÀNH BĂNG SA (CARAVAN MOUNTS):
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { id: 'camel', title: 'Phi Hồng Lạc Đà', sub: 'Thoát hiểm vượt sa mạc khô', desc: 'Có chuông đồng cổ đun khói, kiệu gỗ lót nhung bọc lụa mỏng chống bão cát.' },
                    { id: 'horse', title: 'Thiết Kỵ Thảo Nguyên', sub: 'Băng đồi cỏ dốc cao', desc: 'Đoàn tuấn mã thuần chủng tuyển dũng dã hoang, thích ứng leo dốc vượt thung lũng.' },
                    { id: 'carriage', title: 'Ngự Phòng Liễm Xá', sub: 'Điện thờ di động sang quý', desc: 'Ngự phòng lợp gốm tráng bạc, có chõ sưởi tinh tùng hương, thong thả thông hành.' }
                  ].map((mount) => (
                    <button
                      key={mount.id}
                      onClick={() => {
                        setTransportType(mount.id as any);
                        playAncientPluck([329.63, 392.00], mount.id === 'camel' ? 'sawtooth' : 'sine');
                      }}
                      className={`p-3.5 rounded-xl border-2 text-left cursor-pointer transition-all ${
                        transportType === mount.id 
                          ? 'bg-stone-900 border-stone-900 text-white shadow-md' 
                          : 'bg-stone-50 border-stone-200 hover:border-amber-900/30 text-stone-800'
                      }`}
                    >
                      <h4 className="font-prata text-sm md:text-xs font-bold uppercase">{mount.title}</h4>
                      <span className="text-[10.5px] md:text-[8.5px] font-mono text-amber-500 font-bold block">{mount.sub}</span>
                      <p className="text-[12.5px] md:text-[10.5px] font-sans leading-normal opacity-75 mt-2 font-light">{mount.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cargo Selection */}
              <div className="text-left space-y-2.5">
                <span className="font-mono text-[10.5px] md:text-[8.5px] text-stone-400 font-extrabold tracking-widest uppercase block">
                  VẬN TẢI HÀNG HOÁ THƯƠNG PHONG (MERCHANDISE SPECIALS):
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Tơ lụa thượng hạng',
                    'Trà Phổ Nhĩ đóng bánh',
                    'Thủy Tinh Khói Ba Tư',
                    'Lư hương Hổ phách cổ',
                    'Gốm rồng men ngọc biếc',
                    'Thảo tuyết sâm Tây Tạng'
                  ].map((good, index) => {
                    const isSel = selectedGoods.includes(good);
                    return (
                      <button
                        key={index}
                        onClick={() => handleAddGood(good)}
                        className={`p-2.5 rounded-lg border text-sm md:text-xs text-left cursor-pointer transition-all flex items-center justify-between ${
                          isSel 
                            ? 'bg-[#8C3B1A]/10 border-[#8C3B1A] text-[#8C3B1A] font-bold' 
                            : 'bg-stone-100/50 border-stone-200 hover:bg-stone-150 text-stone-700'
                        }`}
                      >
                        <span className="truncate">{good}</span>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9.5px] md:text-[7.5px] font-black shrink-0 ${isSel ? 'bg-[#8C3B1A] text-white border-[#8C3B1A]' : 'border-stone-300'}`}>
                          {isSel ? '✓' : ''}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Prestigious Silk Road Merchant Pass Certificate Render */}
              <div className="bg-[#FAF2DF] p-6 rounded-2xl border-2 border-dashed border-[#8C3B1A]/40 text-left space-y-3.5 relative shadow-inner overflow-hidden uppercase">
                
                {/* Visual stamp watermark watermark logo in background */}
                <div className="absolute right-6 top-6 w-20 h-20 border border-[#8C3B1A]/20 rounded-full flex items-center justify-center font-serif text-[9px] md:text-[7px] text-[#8C3B1A]/30 font-black rotate-12 pointer-events-none tracking-widest">
                  SILK ROAD PASS
                </div>

                <div className="flex items-center gap-2 border-b border-[#8C3B1A]/15 pb-2">
                  <ShieldCheck className="w-4 h-4 text-[#8C3B1A] shrink-0" />
                  <span className="font-mono text-[10px] md:text-[8px] tracking-[0.3em] text-[#8C3B1A] font-extrabold block">
                    THÔNG HÀNH LỘ THƯ VÂN KIÊN • OFFICIAL PASSPORT
                  </span>
                </div>

                <div className="font-serif text-sm md:text-xs leading-relaxed space-y-2.5 text-stone-850 lowercase italic first-letter:uppercase">
                  <p className="normal-case not-italic tracking-wide text-stone-850">
                    Bổ nhiệm quan sai kính dụ, đặc cách cấp hộ lộ chiếu cho lữ lăng <strong className="text-[#8C3B1A] font-extrabold underline decoration-[#8C3B1A]/30 uppercase">{passengerName}</strong> dẫn tháp dòng thương đội <strong className="text-stone-900 font-bold uppercase">"{caravanName}"</strong> du mục.
                  </p>
                  
                  <p className="normal-case not-italic tracking-wide text-stone-800">
                    Pháp định vận thăng Toa xe: <strong className="font-bold text-[#1B3B6F] uppercase">{transportType} class mount</strong>. 
                    {selectedGoods.length > 0 && (
                      <span> Vật phẩm mang theo bao gồm: {selectedGoods.join(', ')}.</span>
                    )}
                  </p>
                </div>

                <div className="flex justify-between items-end pt-3 border-t border-[#8C3B1A]/15 text-[10.5px] md:text-[8.5px] font-mono text-stone-500 tracking-wider">
                  <span>ẤN CHỨNG TRUYỀN LỆ LỘ THƯ</span>
                  <span className="text-[#8C3B1A] font-bold">SERIAL: SR-OFF-2026</span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-2">
                <button
                  onClick={() => setPlannerOpen(false)}
                  className="p-3 py-2 border border-stone-350 hover:border-stone-800 rounded-xl font-mono text-[11px] md:text-[9px] font-bold uppercase tracking-widest cursor-pointer"
                >
                  ĐÓNG (CLOSE)
                </button>
                
                <button
                  onClick={() => {
                    alert(`Gởi thành công ngự lộ thư vạn hảo! Khởi động chuyển vận mộc bản thương đoàn "${caravanName}" của tiền bối ${passengerName} vạn thu hái phát dạt! Sứ thần đã đóng sắc ấn.`);
                    setPlannerOpen(false);
                    playAncientPluck([220.00, 293.66, 329.63, 440.00, 554.37], 'sine');
                  }}
                  className="p-3 py-2 bg-[#8C3B1A] hover:bg-[#a64721] text-white border border-[#8C3B1A] rounded-xl font-mono text-[11px] md:text-[9px] font-extrabold uppercase tracking-widest cursor-pointer hover:scale-103 transition-transform shadow-md"
                >
                  GỬI SỚ KIẾT LỘ (SUBMIT PASS)
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
