import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Compass, Eye, Heart, Volume2, X, ChevronRight, Sparkles, ArrowRight, Sun, CloudRain, Thermometer, ShieldCheck
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
  altitude: string;
  weather: string;
  temp: string;
  desc: string;
  highlight: string;
  chord: number[];
  activities: string[];
  cuisine: {
    name: string;
    desc: string;
    image: string;
  };
}

export default function ChinaHeritageEditorial({ 
  passengerName, 
  setPassengerName, 
  passengerPhoto 
}: EditorialProps) {
  
  const [selectedDest, setSelectedDest] = useState<DestinationCard | null>(null);
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>({});
  const [plannerOpen, setPlannerOpen] = useState<boolean>(false);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [travelCabinet, setTravelCabinet] = useState<'grand_imperial' | 'royal_pavilion' | 'jade_retreat'>('grand_imperial');

  // Multi-destination list matching the exact 7 items in the visual catalog
  const destinations: DestinationCard[] = [
    {
      id: 'giang-nam',
      idx: '01',
      name: 'Giang Nam',
      subtitle: 'Miền Cổ Trấn',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 1 - 3',
      altitude: '180m',
      weather: 'Sương mù nhẹ, se lạnh',
      temp: '18°C',
      desc: 'Nơi rêu phong ôm lấy những nếp nhà gỗ ngàn năm bám rễ vách mương nước cổ xưa. Bước chân người đi dọc sông Ly, tai nghe nhịp phách gỗ đánh rơi chầm chậm hòa quyện nhịp giặt áo rạt rào tắp nập của cổ nhân bên bến sông mộng.',
      highlight: 'Sắc sương sớm rải rác che phủ mặt nước, đón chuyến bè tre tĩnh tâm khua một nhịp dầm sỏi đá rêu.',
      chord: [261.63, 311.13, 392.00], // Cung chord
      activities: [
        'Vãn cảnh cổ trấn Tây Đường mờ ảo đèn lồng đỏ hoàng hôn',
        'Tĩnh đạo trên thuyền ô bồng chèo tay lững lờ trên kênh',
        'Thưởng ngự trà cổ bên hiên nhà gỗ của nho sĩ thời Minh'
      ],
      cuisine: {
        name: 'Trà tôm Long Tỉnh Tây Hồ',
        desc: 'Món ăn thanh đạm tẩm ngâm tôm ngọc sông cùng búp trà tươi vụ xuân dịu ngọt.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'bac-kinh',
      idx: '02',
      name: 'Bắc Kinh',
      subtitle: 'Dấu Ấn Đế Chế',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 4 - 6',
      altitude: '45m',
      weather: 'Khô ráo, hửng nắng vàng hoàng gia',
      temp: '22°C',
      desc: 'Trọng đình uy nghiêm phủ sắc tường đỏ hoa lệ đan cốt đất nếp dẻo nhà Minh. Di sản nghìn vạn năm uy nghiêm lắng đọng dưới thềm xưa các ngôi bệ ngự tiền bái lễ cao rộng thọc mây trời gió bụi.',
      highlight: 'Vượt thềm Tử Cấm Thành buổi hừng đông, chạm tay vào rặng gỗ đàn hương tôn kính tột bậc.',
      chord: [293.66, 349.23, 440.00], // Thương chord
      activities: [
        'Chiêm ngưỡng sắc vàng Cố Cung từ đỉnh đồi Cảnh Sơn',
        'Dạo bước thong dong qua tháp gác mờ khói bọc đá hòn',
        'Thưởng ngự ẩm hoàng cung quay gỗ tùng thơm nức'
      ],
      cuisine: {
        name: 'Vịt Quay Bắc Kinh Cung Đình',
        desc: 'Vịt tẩm mật ong đỏ dâng lò hỏa quay giòn bì bóng loáng hổ phách mộc hương cát xắt.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'tay-an',
      idx: '03',
      name: 'Tây An',
      subtitle: 'Kinh Đô Ngàn Năm',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 7 - 8',
      altitude: '400m',
      weather: 'Gió nhẹ mát mẻ, trong trẻo',
      temp: '20°C',
      desc: 'Nơi khởi hành Con Đường Tơ Lụa kì vĩ nối liền Á-Âu. Phía dưới lớp cát bụi vàng là vạn tháp mộ binh của vị hoàng đế dũng liệt, rầm rắp bảo vệ đế chế vĩnh hằng dưới tầng tối sâu.',
      highlight: 'Lắng nghe tiếng chuông chùa Đại Nhạn vọng rền rạt rào cả buổi hoàng hôn u huyễn.',
      chord: [329.63, 392.00, 493.88], // Dốc chord
      activities: [
        'Tham sảo lăng mộ vạn linh binh mã dũng gốm nung tinh xảo',
        'Đạp xe thong dong trên rặng thành lũy đá rộng lớn bậc nhất',
        'Cầm bút phác hoạ lụa tranh về dòng hành nhân lữ quán cổ'
      ],
      cuisine: {
        name: 'Biang Biang Diện Sợi Thô',
        desc: 'Mỳ kéo tay bản rộng dầy dai rắc ớt bột nung giấm đen thơm nức đầu lưỡi lữ giả.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'van-nam',
      idx: '04',
      name: 'Vân Nam',
      subtitle: 'Của Những Sắc Màu',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 9 - 12',
      altitude: '2,400m',
      weather: 'Khí hậu mùa xuân vĩnh cửu',
      temp: '19°C',
      desc: 'Rặng núi tuyết Ngọc Long sừng sững dốc thẳm trói buộc làn gió ngàn Vân Nam rực rỡ sắc dệt tơ tằm. Dãy ruộng bậc thang rực óng bên sườn đồi, nơi cụ già hái chè nghêu ngao lời hát dã sử hoang hoải.',
      highlight: 'Chạm đỉnh Thạch Cương tuyết bao phủ, ngắm mây trào lấp lánh như lụa gấm dệt dập dờn.',
      chord: [392.00, 466.16, 587.33], // Chủy chord
      activities: [
        'Cưỡi ngựa vượt thềm Trà Mã Cổ Đạo đá phiến rêu bám nghìn năm',
        'Uống trà Phổ Nhĩ kỉ chưng bên hiên gỗ cổ kính trấn người Nạp Tây',
        'Tự tay sờ dải tơ dệt truyền thống sắc đỏ sặc sỡ'
      ],
      cuisine: {
        name: 'Bánh Hoa Hồng Vân Nam',
        desc: 'Bột ngàn lớp nướng giòn nhân cánh hoa hồng tuyết ngào mật rừng dâng vua chúa xưa.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'truong-gia-gioi',
      idx: '05',
      name: 'Trương Gia Giới',
      subtitle: 'Tuyệt Tác Thiên Nhiên',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 13 - 15',
      altitude: '1,518m',
      weather: 'Mây phủ bồng bềnh, sương tơ rậm',
      temp: '15°C',
      desc: 'Ba ngàn cột đá sa thạch kiêu dũng đâm thẳng kịch trần sương trắng như cảnh giới tiên bồng bất diệt. Nơi mây ngàn dệt lối, thác lụa trôi trút vang dội khắp thung sâu u mờ huyễn hoặc.',
      highlight: 'Lướt cáp treo cheo leo xuyên làn sương mù ảo diệu Thiên Môn Sơn kỳ vĩ bậc nhất.',
      chord: [440.00, 523.25, 659.25], // Vũ chord
      activities: [
        'Men theo dải Sạn Đạo Kính bọc vách đá cao nghìn trượng ngợp mắt',
        'Thu tháo cảnh ngọc sa thạch vút mây từ ban công Đền thờ Tiên Nhân',
        'Chụp ảnh cùng sương khói bay rợp tựa cõi mộng ảo vô cầu'
      ],
      cuisine: {
        name: 'Lẩu Cá Đá Núi Sương',
        desc: 'Nước lẩu ninh xương sụn cá suối đá cùng thảo mộc lạnh bồi bổ sinh lực lữ giả.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'dao-thanh',
      idx: '06',
      name: 'Đạo Thành Á Đinh',
      subtitle: 'Vùng Đất Thiên Khiết',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 16 - 19',
      altitude: '3,800m',
      weather: 'Tuyết nhẹ rải rác, không khí loãng',
      temp: '8°C',
      desc: 'Vương quốc Shangri-La vô vô cùng biệt tích dưới chóp tuyết vĩnh cửu trắng buốt ngời ngời. Cọp tùng biếc, thảo nguyên vàng và rặng tháp đá dâng tôn kính tuyệt đối giữa vầng tịnh quang sáng bạc đầu cao nguyên.',
      highlight: 'Sờ dải cờ nguyện ngũ sắc bay rầm rộ đón nắng đầu sơn cốc tuyết.',
      chord: [261.63, 329.63, 392.00, 523.25], // Đại bảo hòa âm
      activities: [
        'Chân rảo bộ dốc thung thung quanh hai hồ sữa trong vắt thấu đáy',
        'Vãn thiền trước Đại Tháp Cổ Tạng linh khiết u sầm sương tuyết',
        'Cắm lều lá chiêm bái trần sao dải lụa ngân hà rực thảm xanh'
      ],
      cuisine: {
        name: 'Trà Bơ Sữa Sâm Tạng',
        desc: 'Trà đen nung bơ bò tót béo ấm cùng vụn sâm tuyết chống lạnh hồi dương cực quý.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    },
    {
      id: 'cap-nhi-tan',
      idx: '07',
      name: 'Cáp Nhĩ Tân',
      subtitle: 'Xứ Sở Băng Tuyết',
      image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png',
      days: 'Day 20 - 22',
      altitude: '150m',
      weather: 'Băng giá rậm, tuyết phủ lấp lánh',
      temp: '-15°C',
      desc: 'Kỳ quan xây rắp tháp lâu băng khổng lồ lấp lánh tựa tinh tú thủy tinh sa ngã dưới gót. Thành trì rực sáng dải đèn sắc quang lóng lánh kì huyễn xoa dịu tuyết giá buốt đêm cao đông lãnh.',
      highlight: 'Dạo gót giữa vạn ngọc thành tháp nước đóng đá đắm mình sắc hoàng hôn tím thẫm.',
      chord: [293.66, 392.00, 587.33], // Băng tơ tấu
      activities: [
        'Tận mắt sờ ngắm điêu khắc rồng tuyết ngọc dài nghìn thước rầm rộ',
        'Trượt ván gỗ phong trần trên sông Tùng Hoa đóng băng dày đặc',
        'Ấm bụng rượu dâu rừng tuyết đun nóng cạnh lửa lò gạch'
      ],
      cuisine: {
        name: 'Thịt Heo Chiên Sốt Chua Ngọt',
        desc: 'Món ăn đại gia sưởi ấm vùng Đông Bắc, vỏ bột xốp giòn rụm bọc sốt chua cay ngậy.',
        image: '/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png'
      }
    }
  ];

  // Pluck instrument audio synthesizer Simulation
  const playAncientPluck = (freqs: number[]) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      freqs.forEach((freq, idx) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gainNode = ctx.createGain();
          
          osc.type = 'sine'; // Pure sweet bell-like ancient sound
          osc.frequency.value = freq;
          
          gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
          // Plucked wood string fast decay
          gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
          
          osc.connect(gainNode);
          gainNode.connect(ctx.destination);
          
          osc.start();
          osc.stop(ctx.currentTime + 1.3);
        }, idx * 140);
      });
    } catch (e) {}
  };

  const handleCardClick = (dest: DestinationCard) => {
    setSelectedDest(dest);
    playAncientPluck(dest.chord);
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(prev => ({ ...prev, [id]: !prev[id] }));
    playAncientPluck([523.25, 659.25]); // high chime
  };

  const handleAddActivity = (act: string) => {
    if (selectedActivities.includes(act)) {
      setSelectedActivities(selectedActivities.filter(a => a !== act));
    } else {
      setSelectedActivities([...selectedActivities, act]);
      playAncientPluck([329.63, 392.00]);
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1C1713] min-h-screen font-serif relative overflow-hidden pb-12 selection:bg-red-800 selection:text-white">
      
      {/* Editorial Grid Overlay */}
      <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-[#FFFDFB] via-[#FAF8F5] to-transparent pointer-events-none" />
      
      {/* 1. Micro Elegant Image-Matched Header ONLY for Editorial tab */}
      <div className="border-b border-[#1C1713]/10 py-4 px-6 md:px-10 flex items-center justify-between text-[#1C1713] relative z-20">
        <div className="text-left font-serif leading-none">
          <span className="font-bold tracking-[0.25em] text-sm md:text-xs block uppercase">FIT TOUR</span>
          <span className="font-mono text-[8.5px] md:text-[6.5px] tracking-[0.3em] font-light text-stone-500 uppercase block mt-1">BEYOND THE DESTINATION</span>
        </div>
        
        <div className="hidden md:flex items-center gap-7 font-mono text-[11px] md:text-[9px] tracking-widest font-black uppercase text-stone-605">
          <span className="hover:text-red-950 transition-colors cursor-pointer text-red-805">JOURNEYS</span>
          <span className="hover:text-red-950 transition-colors cursor-pointer">DESTINATIONS</span>
          <span className="hover:text-red-950 transition-colors cursor-pointer">EXPERIENCES</span>
          <span className="hover:text-red-950 transition-colors cursor-pointer">EXPEDITIONS</span>
          <span className="hover:text-red-950 transition-colors cursor-pointer font-bold">JOURNAL</span>
          <span className="hover:text-red-950 transition-colors cursor-pointer">ABOUT US</span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[10px] md:text-[8px] tracking-wider">
          <span className="text-stone-400 font-bold">EN ▾</span>
          <button 
            onClick={() => setPlannerOpen(true)}
            className="border border-[#1C1713] px-3 py-1 rounded hover:bg-[#1C1713] hover:text-[#FAF8F5] transition-all cursor-pointer font-bold uppercase"
          >
            CONTACT
          </button>
        </div>
      </div>

      {/* 2. Panoramic Layout-Replicated Hero Section */}
      <section className="relative w-full overflow-hidden border-b border-[#1C1713]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[620px] md:min-h-[720px] items-stretch relative">
          
          {/* Left Column: Huge High-Fashion Display Typography */}
          <div className="md:col-span-5 p-8 md:p-14 lg:p-20 flex flex-col justify-center space-y-7 relative z-10">
            
            <div className="space-y-1.5 animate-fade-in">
              <span className="font-mono text-[11.5px] md:text-[9.5px] tracking-[0.45em] text-red-700 uppercase font-black block">
                C O L L E C T I O N
              </span>
              <div className="w-10 h-[1.5px] bg-[#1C1713]" />
            </div>

            <div className="space-y-3">
              <h1 className="font-prata text-5xl md:text-6xl lg:text-7xl text-[#1C1713] font-normal leading-[0.95] uppercase tracking-normal">
                CHINA<br />HERITAGE
              </h1>
              <p className="font-serif italic text-lg md:text-xl text-[#8E4437] tracking-wide mt-2 font-light">
                Stories Written By Time
              </p>
            </div>

            <p className="font-serif text-sm text-[15.5px] md:text-[13.5px] text-stone-701 font-light leading-relaxed text-justify max-w-sm">
              Khám phá những lớp trầm tích văn hóa, lịch sử và thiên nhiên làm nên một Trung Hoa rộng lớn và đầy mê hoặc.
            </p>

            {/* Custom imperial red brand seal stamp */}
            <div className="flex items-center gap-4 pt-3">
              <div className="w-10 h-10 border-2 border-red-800 text-red-850 flex flex-col items-center justify-center font-serif font-black text-[11px] md:text-[9px] leading-tight select-none rotate-3 rotate shadow-inner">
                <span>国风</span>
                <span className="text-[9.5px] md:text-[7.5px] border-t border-red-800/40 w-full text-center">印</span>
              </div>
              
              <div className="text-left leading-tight">
                <span className="font-mono text-[10px] md:text-[8px] text-stone-400 uppercase tracking-widest block font-bold">VERIFIED VOYAGER SEALS</span>
                <span className="font-serif text-[13px] md:text-[11px] text-[#1C1713] font-bold block italic uppercase">Imperial Approved Series</span>
              </div>
            </div>

          </div>

          {/* Right Column: Breathtaking Panoramic Artwork Frame */}
          <div className="md:col-span-7 relative min-h-[350px] md:min-h-auto overflow-hidden">
            <div className="absolute inset-0 bg-[#f9f7f4] md:bg-transparent">
              <img
                src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png"
                alt="China Panoramic Heritage view with red Hanfu woman standpoint"
                className="w-full h-full object-cover filter contrast-102 saturate-[0.85]"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay gradient mimicking watercolor fading paper */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/30 to-transparent hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent md:hidden" />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Simulated Floating Red Imperial Ribbon hanging in sương mù */}
            <div className="absolute top-10 right-10 flex flex-col items-center gap-1 bg-[#851D1D] text-white p-3 py-4 rounded-b-md shadow-md">
              <span className="font-serif text-[12px] md:text-[10px] tracking-widest font-black [writing-mode:vertical-rl] uppercase">
                御書勅令 • FIT TOUR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 animate-pulse" />
            </div>

            {/* Absolute watermark locator indicator */}
            <div className="absolute bottom-6 right-6 font-mono text-[10.5px] md:text-[8.5px] text-[#FAF8F5]/80 tracking-widest bg-stone-950/70 p-2.5 px-4 rounded backdrop-blur-md uppercase">
              📍 HIỂN THỊ: PHONG CẢNH THỦY MẶC VÂN NAM
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Replicated 7-Card Fine Grid Row (Divided by simple fine lines) */}
      <section className="border-y border-[#1C1713]/10">
        
        {/* Row 1: The First 4 Destinations (col-span-1 each, equal 25% width on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] bg-stone-200">
          {destinations.slice(0, 4).map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleCardClick(dest)}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-900 cursor-pointer transition-all duration-500"
            >
              {/* Photo Background */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.08] transition-transform duration-700 group-hover:scale-105 group-hover:saturate-[1.1]"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient dark overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 group-hover:to-black/20 transition-all duration-500" />
              
              {/* Red overlay tint on hover */}
              <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Like / Heart badge */}
              <button
                onClick={(e) => toggleLike(dest.id, e)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#f7eedc] hover:bg-red-800 transition-colors"
              >
                <Heart className={`w-4 h-4 ${isLiked[dest.id] ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>

              {/* Text Information elements matching visual print precisely */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end text-white space-y-1.5 z-10">
                
                {/* Large Serif Number */}
                <span className="font-prata text-xl md:text-2xl text-stone-300 font-extralight block leading-none opacity-90 group-hover:text-red-400 group-hover:scale-105 transition-all">
                  {dest.idx}
                </span>

                {/* Location Name */}
                <h3 className="font-prata text-lg md:text-xl font-normal tracking-wide text-white group-hover:translate-x-1 transition-transform">
                  {dest.name}
                </h3>

                {/* Subtitle */}
                <p className="font-serif italic text-sm md:text-xs text-stone-300/80 tracking-wide font-light">
                  {dest.subtitle}
                </p>

                {/* Hover Quick Indicator arrow */}
                <div className="flex items-center gap-1.5 pt-2 font-mono text-[10px] md:text-[8px] tracking-widest text-[#FAF8F5]/60 group-hover:text-amber-300 transition-colors uppercase opacity-0 group-hover:opacity-100 duration-500">
                  <span>THẨM SÂU CHÂN KÝ</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>

              </div>

              {/* Border lines matching layout detail exactly */}
              <div className="absolute inset-x-4 top-4 bottom-4 border border-white/5 group-hover:border-white/15 pointer-events-none transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Row 2: The Next 3 Destinations (3 columns, each 1/3 width on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-stone-200">
          {destinations.slice(4, 7).map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleCardClick(dest)}
              className="group relative aspect-[3/4] sm:aspect-square md:aspect-[4/3] overflow-hidden bg-stone-900 cursor-pointer transition-all duration-500"
            >
              {/* Photo Background */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.08] transition-transform duration-700 group-hover:scale-105 group-hover:saturate-[1.1]"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient dark overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 group-hover:to-black/20 transition-all duration-500" />
              
              {/* Red overlay tint on hover */}
              <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Like / Heart badge */}
              <button
                onClick={(e) => toggleLike(dest.id, e)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#f7eedc] hover:bg-red-800 transition-colors"
              >
                <Heart className={`w-4 h-4 ${isLiked[dest.id] ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>

              {/* Text Information elements matching visual print precisely */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end text-white space-y-1.5 z-10">
                
                {/* Large Serif Number */}
                <span className="font-prata text-xl md:text-2xl text-stone-300 font-extralight block leading-none opacity-90 group-hover:text-red-400 group-hover:scale-105 transition-all">
                  {dest.idx}
                </span>

                {/* Location Name */}
                <h3 className="font-prata text-lg md:text-xl font-normal tracking-wide text-white group-hover:translate-x-1 transition-transform">
                  {dest.name}
                </h3>

                {/* Subtitle */}
                <p className="font-serif italic text-sm md:text-xs text-stone-300/80 tracking-wide font-light">
                  {dest.subtitle}
                </p>

                {/* Hover Quick Indicator arrow */}
                <div className="flex items-center gap-1.5 pt-2 font-mono text-[10px] md:text-[8px] tracking-widest text-[#FAF8F5]/60 group-hover:text-amber-300 transition-colors uppercase opacity-0 group-hover:opacity-100 duration-500">
                  <span>THẨM SÂU CHÂN KÝ</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>

              </div>

              {/* Border lines matching layout detail exactly */}
              <div className="absolute inset-x-4 top-4 bottom-4 border border-white/5 group-hover:border-white/15 pointer-events-none transition-colors duration-500" />
            </div>
          ))}
        </div>

      </section>

      {/* 4. Bottom Aesthetic Calligraphic Ink Landscape Banner (Direct exact replica of typography in mockup) */}
      <section className="py-20 px-4 md:px-8 bg-[#FAF8F5] relative overflow-hidden flex flex-col items-center justify-center border-t border-[#1C1713]/5">
        
        {/* Artistic SVG stylized minimalist ink mountains & water waves landscape */}
        <div className="w-full max-w-4xl opacity-[0.14] pointer-events-none absolute h-52 -bottom-2 select-none">
          <svg viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Mountain range 1 */}
            <path d="M0 180 C200 130 350 110 500 160 C650 180 800 120 1000 150 L1000 200 L0 200 Z" fill="#1C1713" />
            {/* Mountain range 2 */}
            <path d="M100 180 C300 110 450 130 650 150 C800 160 900 110 1000 130 L1000 200 L100 200 Z" fill="#1C1713" />
            {/* Solitary traditional junk boat */}
            <path d="M350 148 L356 138 L358 138 L360 148 L348 148 Z" fill="#1C1713" />
            <line x1="356" y1="138" x2="356" y2="125" stroke="#1C1713" strokeWidth="1" />
            <path d="M356 125 L363 132 L356 135 Z" fill="#1C1713" />
            {/* Floating remote birds */}
            <path d="M680 80 Q685 75 690 80 Q695 75 700 80" stroke="#1C1713" strokeWidth="1" fill="none" />
            <path d="M720 90 Q723 87 726 90 Q729 87 732 90" stroke="#1C1713" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Minimal text matching style sheet with immense negative space pacing */}
        <div className="text-center space-y-4 max-w-3xl z-10 relative">
          
          <span className="font-mono text-[11px] md:text-[9px] tracking-[0.4em] text-stone-500 uppercase font-black block">
            MỖI HÀNH TRÌNH
          </span>

          <h2 className="font-prata text-xl md:text-2xl lg:text-3xl text-[#1C1713] uppercase tracking-[0.22em] leading-relaxed max-w-xl mx-auto font-normal">
            LÀ MỘT CHƯƠNG TRONG<br />CÂU CHUYỆN CỦA THỜI GIAN.
          </h2>

          <div className="flex justify-center items-center py-2">
            {/* Subtle red line matching print design */}
            <div className="w-12 h-[2px] bg-red-800" />
          </div>

        </div>
      </section>

      {/* 5. IMMERSIVE COMPREHENSIVE DETAIL MODAL / PANEL */}
      <AnimatePresence>
        {selectedDest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-stone-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full max-w-5xl bg-[#FAF6EE] text-[#1C1713] rounded-3xl overflow-hidden border-2 border-red-950/20 shadow-2xl flex flex-col md:flex-row relative max-h-[88vh] md:max-h-[85vh]"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 z-40 w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual Showcase Panel */}
              <div className="w-full md:w-[45%] relative min-h-[250px] md:min-h-full">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Visual Metadata overlay details */}
                <div className="absolute bottom-6 left-6 text-white space-y-2">
                  <span className="font-mono text-sm md:text-xs md:text-xxs bg-red-800 px-3 py-1 rounded text-white uppercase tracking-widest font-black inline-block">
                    {selectedDest.days}
                  </span>
                  
                  <h3 className="font-prata text-3xl font-normal tracking-wide">
                    {selectedDest.name}
                  </h3>
                  
                  <div className="flex gap-4 font-mono text-[11.5px] md:text-[9.5px] text-stone-200 uppercase tracking-widest">
                    <span>ĐỘ CAO: {selectedDest.altitude}</span>
                    <span>•</span>
                    <span>NHIỆT ĐỘ: {selectedDest.temp}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Immersive Content Scroll space */}
              <div className="w-full md:w-[55%] p-6 md:p-10 overflow-y-auto space-y-6 text-left relative custom-scrollbar">
                
                {/* Top header details */}
                <div>
                  <div className="flex items-center gap-1.5 text-red-850 font-mono text-sm md:text-xs md:text-xxs font-black tracking-widest uppercase">
                    <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>DI SẢN CHI TIẾT • LEVEL {selectedDest.idx}</span>
                  </div>
                  <h4 className="font-prata text-xl text-stone-950 font-normal uppercase mt-1 leading-tight border-b border-stone-200 pb-3">
                    {selectedDest.subtitle}
                  </h4>
                </div>

                {/* Substantive Description block */}
                <div className="space-y-3 font-serif text-sm leading-relaxed text-stone-701">
                  <p className="text-justify font-normal first-letter:text-3xl first-letter:font-black first-letter:text-red-800 first-letter:mr-2 first-letter:float-left">
                    {selectedDest.desc}
                  </p>
                  <p className="italic text-stone-605 text-[15px] md:text-[13px] border-l-2 border-amber-600/50 pl-3">
                    “{selectedDest.highlight}”
                  </p>
                </div>

                {/* Guzheng Instrument Sound Generator */}
                <div className="bg-[#ebdcb9]/40 p-4.5 rounded-2xl border border-amber-800/15">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-red-900 shrink-0" />
                      <span className="font-mono text-[11px] md:text-[9px] tracking-widest text-[#7f1d1d] font-black uppercase">ÂM LUẬN CO CẦM ĐỘC KHƯC</span>
                    </div>
                    <span className="text-[9.5px] md:text-[7.5px] font-mono text-stone-500 uppercase tracking-widest font-bold">PENTATONIC AUDIO CHIME</span>
                  </div>
                  <p className="text-[13px] md:text-[11px] text-stone-605 italic mb-3">
                    Nhấp rảo màng gõ sáo ngũ âm bên dưới để ngân tấu khúc nhạc huyền linh cổ kính phác họa thần hồn của vùng di sản này.
                  </p>
                  <button
                    onClick={() => playAncientPluck(selectedDest.chord)}
                    className="w-full py-2 bg-red-900/10 hover:bg-red-900/20 border border-red-800/20 rounded-xl cursor-pointer text-[#7f1d1d] font-mono text-[11px] md:text-[9px] font-black tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-red-700 animate-pulse" />
                    <span> GÕ TẤU CHÂN HUYỀN CHÚA CRADLE</span>
                  </button>
                </div>

                {/* Day-by-Day Immersive Activities list */}
                <div className="space-y-3">
                  <span className="font-mono text-sm md:text-xs md:text-xxs tracking-widest text-stone-400 font-extrabold uppercase block">
                    HOẠT ĐỘNG THƯỢNG HẠNG (ROYAL ACTIVITIES)
                  </span>
                  
                  <div className="space-y-2.5">
                    {selectedDest.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm md:text-xs text-stone-800 font-sans leading-normal">
                        <div className="w-4 h-4 rounded-full bg-[#1C1713] text-[#FAF8F5] text-[11.5px] md:text-[9.5px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
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
                    ĐẶC SẢN QUÝ KHÁCH PHẢI THỬ (IMPERIAL TASTE)
                  </span>

                  <div className="flex flex-col sm:flex-row items-stretch gap-4 bg-stone-100/50 p-3 rounded-xl border border-stone-200">
                    <img
                      src={selectedDest.cuisine.image}
                      alt={selectedDest.cuisine.name}
                      className="w-full sm:w-28 h-20 object-cover rounded-lg filter saturate-85 contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-1.5 flex flex-col justify-center text-left">
                      <h5 className="font-prata text-sm md:text-xs font-bold text-red-950 uppercase">
                        {selectedDest.cuisine.name}
                      </h5>
                      <p className="text-[13px] md:text-[11px] font-serif text-stone-605 leading-relaxed italic">
                        "{selectedDest.cuisine.desc}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Weather widget details */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-stone-200">
                  <div className="bg-stone-100 p-2 text-center rounded">
                    <Sun className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                    <span className="text-[10px] md:text-[8px] font-mono text-stone-450 uppercase block">Thời Tiết</span>
                    <span className="text-[12px] md:text-[10px] font-serif font-black text-stone-800">{selectedDest.weather}</span>
                  </div>
                  <div className="bg-stone-100 p-2 text-center rounded">
                    <Thermometer className="w-4 h-4 text-red-500 mx-auto mb-1" />
                    <span className="text-[10px] md:text-[8px] font-mono text-stone-450 uppercase block">Nhiệt Độ</span>
                    <span className="text-[12px] md:text-[10px] font-serif font-black text-stone-800">{selectedDest.temp}</span>
                  </div>
                  <div className="bg-stone-100 p-2 text-center rounded">
                    <Compass className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <span className="text-[10px] md:text-[8px] font-mono text-stone-450 uppercase block">Độ Cao</span>
                    <span className="text-[12px] md:text-[10px] font-serif font-black text-stone-800">{selectedDest.altitude}</span>
                  </div>
                </div>

                {/* Footer seal in drawer */}
                <div className="pt-6 border-t border-stone-200 flex justify-between items-center">
                  <div className="text-stone-400 font-mono text-[9px] md:text-[7px] tracking-wide uppercase">
                    Bản Quyền Độc Bản Fit Tour Heritage
                  </div>
                  <button
                    onClick={() => {
                      setSelectedDest(null);
                      setPlannerOpen(true);
                      playAncientPluck([329.63, 440.00, 523.25]);
                    }}
                    className="p-2 py-1.5 bg-stone-900 text-white hover:bg-red-850 rounded text-[11.5px] md:text-[9.5px] font-mono font-black tracking-widest uppercase cursor-pointer"
                  >
                    ĐẶT CHUYẾN ĐI TIÊN SƠN
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. BESPOKE TRAVEL CABINET PLANNER OVERLAY */}
      <AnimatePresence>
        {plannerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-stone-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-[#FCFAF5] text-[#1C1713] rounded-3xl overflow-hidden border-2 border-amber-900/40 p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              
              <button
                onClick={() => setPlannerOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2 border-b border-[#1C1713]/10 pb-4">
                <span className="font-mono text-sm md:text-xs md:text-xxs tracking-widest text-red-800 font-black block uppercase">
                  BẢN LẬP TOA TOA XE CÁ NHÂN • TRAVEL CABINET
                </span>
                
                <h3 className="font-prata text-2xl uppercase tracking-wider text-red-950">
                  Hành Sách Thiết Kế Của {passengerName}
                </h3>
                
                <p className="text-stone-500 text-sm md:text-xs italic">
                  Tùy chỉnh toa du hành ngự phòng cổ phục và tóm tắt lộ trình dâng lễ.
                </p>
              </div>

              {/* Passenger Name Modifier */}
              <div className="space-y-2 text-left">
                <label className="font-mono text-[11px] md:text-[9px] text-stone-400 font-black tracking-wide uppercase block">Danh Vương Vương Giả (Passenger Name):</label>
                <input
                  type="text"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  className="w-full p-2.5 bg-stone-100/80 border border-stone-200 hover:border-red-800 focus:border-red-900 rounded-xl font-serif text-sm focus:outline-none placeholder:text-stone-405 text-stone-900"
                />
              </div>

              {/* Cabinet Class Selector */}
              <div className="space-y-3 text-left">
                <span className="font-mono text-[11px] md:text-[9px] text-stone-400 font-black tracking-wide uppercase block">CẤP ĐỘ TOA XE NGỰ PHÒNG (CABIN CLASS):</span>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { id: 'grand_imperial', title: 'Grand Imperial', subtitle: 'Toa Thừa Tự Hoàng Gia', desc: 'Sách trà tơ, ngự tiền bái sớ, phục sức Hanfu cao cấp dệt tay.' },
                    { id: 'royal_pavilion', title: 'Royal Pavilion', subtitle: 'Toa Đình Đài Nguyệt Ánh', desc: 'Có trà sư pha Đơn Tùng tại phòng, sáo cầm tấu lụa mỏng.' },
                    { id: 'jade_retreat', title: 'Jade Hermitage', subtitle: 'Toa Ngọc Thiền Ẩn Cát', desc: 'Phục vụ ngâm chân thảo tuyết sơn, lều tĩnh dã ngoại ngát thơm.' }
                  ].map((cab) => (
                    <button
                      key={cab.id}
                      onClick={() => {
                        setTravelCabinet(cab.id as any);
                        playAncientPluck([392.00, 523.25]);
                      }}
                      className={`p-3.5 rounded-xl border-2 text-left cursor-pointer transition-all ${
                        travelCabinet === cab.id
                          ? 'bg-[#1C1713] border-[#1C1713] text-[#FAF8F5]'
                          : 'bg-stone-50 border-stone-200 hover:border-[#1C1713]/40 text-stone-850'
                      }`}
                    >
                      <h4 className="font-prata text-sm md:text-xs font-bold uppercase">{cab.title}</h4>
                      <span className="text-[11px] md:text-[9px] font-serif italic text-amber-500 font-bold block mt-0.5">{cab.subtitle}</span>
                      <p className="text-[12px] md:text-[10px] font-sans leading-normal opacity-80 mt-2 font-light">{cab.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Activities list */}
              <div className="space-y-3 text-left">
                <span className="font-mono text-[11px] md:text-[9px] text-stone-400 font-black tracking-wide uppercase block">CHỌN NGHI LỄ DI SẢN KHẢO SÁT (HERITAGE ACTIVITIES):</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-xs">
                  {[
                    'Ngồi thuyền cổ gõ mạn sông Ly sương mù',
                    'Uống trà Phổ Nhĩ 10 năm tại thềm gỗ Lễ Giang',
                    'Thực sảo Ngũ Hoa Hải Tứ Xuyên bay bổng',
                    'Khoác Hanfu hớp rượu chưng sương tuyết',
                    'Vẽ thuỷ mặc mực tùng khói trên thềm vách cổ'
                  ].map((act, idx) => {
                    const isSel = selectedActivities.includes(act);
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAddActivity(act)}
                        className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors flex items-center justify-between ${
                          isSel 
                            ? 'bg-red-900/10 border-red-800 text-red-900 font-bold' 
                            : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
                        }`}
                      >
                        <span>{act}</span>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[10px] md:text-[8px] font-black ${isSel ? 'bg-red-800 text-white border-red-800' : 'border-stone-300'}`}>
                          {isSel ? '✓' : ''}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Total Summary */}
              <div className="bg-[#1C1713] text-[#FAF8F5] p-5 rounded-2xl space-y-3.5 text-left shadow-lg">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-mono text-[10.5px] md:text-[8.5px] tracking-widest text-[#FAF8F5]/80 font-black block uppercase">
                    BẢN CAM KẾT CHU DU FIT TOUR CHÂN TỰ
                  </span>
                </div>

                <div className="font-serif text-sm md:text-xs leading-relaxed space-y-2 opacity-95">
                  <p>
                    Cổ thư thiết kế dành riêng cho đức tính sĩ <strong className="text-amber-400 font-bold uppercase">{passengerName}</strong>. 
                    Quý khách đã quyết định chọn toa xe ngự hạng đẳng cấp <strong className="text-amber-305 font-bold uppercase">{travelCabinet.replace('_', ' ')}</strong> để bãi viếng vạn dặm danh sương mây ngàn Trung Hoa diệu vợi.
                  </p>
                  
                  {selectedActivities.length > 0 && (
                    <p className="indent-4 italic text-stone-303">
                      Các hoạt sắc cam đoan gối đầu gồm: {selectedActivities.join(', ')}.
                    </p>
                  )}
                </div>

                <div className="flex justify-between items-end pt-2 border-t border-white/5 text-[11.5px] md:text-[9.5px]">
                  <span>ẤN CHỨNG KHAI KÝ VÔ ƯU</span>
                  <span className="text-red-400 font-bold font-mono">CODE: FIT-CN-2026-REG</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 justify-end pt-3">
                <button
                  onClick={() => setPlannerOpen(false)}
                  className="p-3 py-2 border border-stone-300 hover:border-stone-800 rounded-xl font-mono text-[11px] md:text-[9px] font-bold uppercase tracking-widest cursor-pointer"
                >
                  ĐÓNG (CLOSE)
                </button>
                <button
                  onClick={() => {
                    alert(`Đăng ký ngự chúc toa xe của ${passengerName} thành công vạn hảo! Fit Tour đã ghi nhận và truyền dụ chuyển phát tơ sớ.`);
                    setPlannerOpen(false);
                    playAncientPluck([261.63, 329.63, 392.00, 523.25, 659.25]);
                  }}
                  className="p-3 py-2 bg-gradient-to-r from-red-950 to-red-800 border border-red-700 text-amber-200 rounded-xl font-mono text-[11px] md:text-[9px] font-black uppercase tracking-widest cursor-pointer hover:scale-103 shadow transition-transform"
                >
                  GỬI SỚ NGỰ KHẢO ( SUBMIT CABINET )
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
