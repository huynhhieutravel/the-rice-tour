import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CloudSun, FileText, Compass, DollarSign, Briefcase, HelpCircle, 
  ChevronDown, PhoneCall, ArrowRight, CheckCircle2, Ticket, AlertTriangle, 
  Map, Sunrise, Snowflake, ShieldCheck, Heart, Sparkles, Activity, Navigation, 
  ThermometerSnowflake, Cross, Stethoscope, Utensils, Tent, BookOpen
} from 'lucide-react';
import DiaryCenterpiece from './DiaryCenterpiece';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Ladakh nằm ở đâu? Du lịch Ladakh có cần xin giấy phép đặc biệt không?",
    answer: "Ladakh là một vùng lãnh thổ liên bang của Ấn Độ, nằm ở độ cao cực lớn hơn 3.000m thuộc dãy thượng Himalaya. Để du lịch các vùng biên giới nhạy cảm như Hồ Pangong, Thung lũng Nubra hay Đèo Khardung La, du khách bắt buộc phải xin Giấy phép Nội địa (Inner Line Permit - ILP)."
  },
  {
    question: "Bị say độ cao (AMS) khi đi Ladakh có nguy hiểm không? Làm sao phòng tránh?",
    answer: "Sốc độ cao (AMS) cực kỳ phổ biến khi tăng độ cao đột ngột. Triệu chứng gồm đau đầu, chóng mặt, buồn nôn, khó thở. Cách phòng tránh tốt nhất: dành trọn vẹn 24-48 giờ đầu tiên nghỉ ngơi tuyệt đối tại Leh; uống thuốc Acetazolamid theo hướng dẫn y tế; tránh vận động mạnh, kiêng đồ uống có cồn; luôn uống từ 3-4 lít nước ấm mỗi ngày."
  },
  {
    question: "Nên xin visa loại nào để đi du lịch Ladakh tự túc?",
    answer: "Bạn chỉ cần xin e-Tourist Visa (Visa điện tử) của Ấn Độ qua cổng thông tin chính thức. Visa này có hiệu lực lưu trú 30 ngày (hoặc 1-5 năm) với thủ tục trực tuyến đơn giản bao gồm ảnh chân dung nền trắng và scan trang thông tin hộ chiếu."
  },
  {
    question: "Có chuyến bay thẳng từ Việt Nam đến Ladakh (Leh) không?",
    answer: "Hiện tại CHƯA có đường bay thẳng. Bạn sẽ bay từ Hà Nội/TP.HCM sang thủ đô New Delhi trước (khoảng 4-5 tiếng). Sau đó nối chuyến nội địa từ New Delhi đi Leh vào sáng sớm hôm sau (khoảng 1.5 tiếng)."
  },
  {
    question: "Chi phí đi du lịch tự túc Ladakh khoảng bao nhiêu tiền?",
    answer: "Chi phí một hành trình Ladakh tự túc dao động khoảng từ 26.000.000 VNĐ đến 32.000.000 VNĐ cho hành trình 9-10 ngày, bao gồm vé máy bay, visa, giấy phép, thuê xe SUV đặc chủng, ăn ngủ homestay/camp và phí tham quan."
  },
  {
    question: "Có cần mang bình oxy không?",
    answer: "Trên xe trung chuyển của FIT TOUR luôn có sẵn bình oxy y tế dự phòng. Bạn có thể tự mua một vài bình oxy cầm tay nhỏ tại chợ Leh nếu muốn an tâm hơn."
  },
  {
    question: "Phụ nữ hoặc người lớn tuổi có đi được không?",
    answer: "Ladakh là cung đường khắc nghiệt. Phụ nữ hoàn toàn có thể tham gia nếu thường xuyên tập luyện. Đối với người lớn tuổi (trên 60) hoặc có tiền sử tim mạch huyết áp, FIT TOUR khuyến cáo nên tham khảo kỹ ý kiến bác sĩ chuyên khoa trước khi quyết định."
  },
  {
    question: "Nên mang USD hay đổi tiền Rupee từ nhà?",
    answer: "Bạn nên đổi sẵn Rupee Ấn Độ (INR) từ Việt Nam hoặc mang USD để đổi tại sân bay New Delhi/chợ Leh. Thanh toán bằng thẻ ở Ladakh rất hạn chế, đa số giao dịch tại Nubra hay Pangong đều yêu cầu tiền mặt."
  },
  {
    question: "Pangong có sóng điện thoại không?",
    answer: "Tại Pangong và khu vực sâu trong thung lũng Nubra, sóng viễn thông và Internet gần như không có. Bạn sẽ hoàn toàn \"ngắt kết nối\" với thế giới bên ngoài, tận hưởng trọn vẹn thiên nhiên."
  }
];

const DESTINATIONS = [
  { 
    name: "Tu Viện Hemis", 
    img: "https://media.fittour.vn/uploads/2022/05/chup-anh-cung-tu-vien-hemis.webp", 
    link: "/tu-vien-hemis/",
    badge: "VĂN HOÁ – TÂM LINH",
    category: "Spiritual Journey",
    desc: "Tu viện lớn nhất và giàu có nhất Ladakh, nơi diễn ra lễ hội Hemis linh thiêng với các điệu múa mặt nạ Cham đặc sắc."
  },
  { 
    name: "Tu Viện Likir", 
    img: "https://media.fittour.vn/uploads/2022/04/tu-vien-likir.webp", 
    link: "/tu-vien-likir/",
    badge: "KIẾN TRÚC – LỊCH SỬ",
    category: "Spiritual Journey",
    desc: "Nổi bật với bức tượng Phật Di Lặc khổng lồ dát vàng cao 23 mét ngồi uy nghi ngoài trời, nhìn ra toàn cảnh thung lũng."
  },
  { 
    name: "Tu Viện Thiksey", 
    img: "https://media.fittour.vn/uploads/2022/05/tu-vien-thiksey.webp", 
    link: "/tu-vien-thiksey/",
    badge: "BẢN ĐỊA – NHIẾP ẢNH",
    category: "Immersive Journey",
    desc: "Được mệnh danh là 'Tiểu Potala', tu viện 12 tầng này là bối cảnh chụp ảnh tuyệt đẹp dưới ánh bình minh rực rỡ."
  },
  { 
    name: "Shanti Stupa", 
    img: "https://media.fittour.vn/uploads/2022/06/kien-truc-bao-thap-shanti-stupa.webp", 
    link: "/bao-thap-shanti/",
    badge: "BẢN ĐỊA – NHIẾP ẢNH",
    category: "Immersive Journey",
    desc: "Bảo tháp hòa bình trắng muốt trên đỉnh đồi Chanspa, điểm ngắm hoàng hôn buông xuống thị trấn Leh đẹp nhất."
  },
  { 
    name: "Đèo Khardung La", 
    img: "https://media.fittour.vn/uploads/2022/04/fit-tour-va-con-deo-cao-nhat-the-gioi-khardungla.webp", 
    link: "/deo-khardung-la-va-chang-la/",
    badge: "MOTOR – CHINH PHỤC",
    category: "Adventure Journey",
    desc: "Một trong những con đèo có thể chạy xe cơ giới cao nhất thế giới (5.359m), thách thức mọi tín đồ đam mê chinh phục."
  },
  { 
    name: "Thung Lũng Nubra", 
    img: "https://media.fittour.vn/uploads/2021/11/cuoi-lac-da-xuyen-qua-nubra-valley-ladakh.webp", 
    link: "/thung-lung-nubra/",
    badge: "BẢN ĐỊA – NHIẾP ẢNH",
    category: "Immersive Journey",
    desc: "Ốc đảo xanh giữa sa mạc cát tuyết, nơi bạn có thể cưỡi lạc đà hai bướu Bactrian dạo bước trên đồi cát Hunder."
  },
  { 
    name: "Tu Viện Diskit", 
    img: "https://media.fittour.vn/uploads/2021/11/tu-vien-Diskit-Gompa.webp", 
    link: "/tu-vien-diskit/",
    badge: "VĂN HOÁ – TÂM LINH",
    category: "Spiritual Journey",
    desc: "Tu viện cổ nhất thung lũng Nubra với bức tượng Phật Di Lặc khổng lồ 32m rực rỡ sắc màu hướng ra dòng sông Shyok."
  },
  { 
    name: "Hồ Pangong Tso", 
    img: "https://media.fittour.vn/uploads/2024/06/canh-quan-hoang-so-ho-pangong.webp", 
    link: "/ho-pangong-tso/",
    badge: "THIÊN NHIÊN – KỲ QUAN",
    category: "Immersive Journey",
    desc: "Hồ nước lợ lớn nhất dãy Himalaya, đổi màu ảo diệu theo ánh nắng rực rỡ và trải dài tận biên giới Tây Tạng."
  },
  { 
    name: "Hồ Tso Moriri", 
    img: "https://media.fittour.vn/uploads/2021/11/ve-dep-cua-ho-Tso-Moriri-.webp", 
    link: "/ho-tso-moriri/",
    badge: "THIÊN NHIÊN – KỲ QUAN",
    category: "Immersive Journey",
    desc: "Tuyệt tác hồ nước ngọt thiêng liêng ở độ cao 4.522m, yên bình, vắng lặng và ít dấu chân du khách hơn Pangong."
  }
];

const TOURS = [
  {
    id: "tour-1",
    title: "01. LADAKH – Vùng Đất Của Các Lạt Ma",
    duration: "8N7Đ | Signature Journey",
    price: "36.990.000đ",
    vibe: "Land of the Lamas",
    highlights: ["Khám phá vẻ đẹp kinh điển của Ladakh", "Vượt đèo Khardung La huyền thoại", "Chiêm ngưỡng hồ Pangong xanh thẳm"],
    tag: "Văn hóa – Cảnh quan",
    image: "https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-du-ky-o-Zanskar.webp",
    link: "/tour/tour-ladakh-roadtrip"
  },
  {
    id: "tour-2",
    title: "02. LADAKH – Kingdom Above the Clouds",
    duration: "10N9Đ | Expedition Journey",
    price: "46.990.000đ",
    vibe: "Kashmir • Zanskar • Ladakh",
    highlights: ["Chinh phục những vùng đất hùng vĩ", "Hành trình xuyên Kashmir và Zanskar", "Trải nghiệm văn hóa Himalaya biệt lập"],
    tag: "Thám hiểm – Roadtrip",
    image: "https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp",
    link: "/tour/tour-ladakh-khoi-hanh-ha-noi"
  },
  {
    id: "tour-3",
    title: "03. LIVING LADAKH",
    duration: "Immersive Journey",
    price: "42.900.000đ",
    vibe: "Beyond the Tourist Trail",
    highlights: ["Trải nghiệm sống cùng người bản địa", "Khám phá thung lũng Hanle và Tso Moriri", "Tọa độ nguyên sơ ít người đặt chân tới"],
    tag: "Bản địa – Nhiếp ảnh",
    image: "https://media.fittour.vn/uploads/2023/05/trai-nghiem-mo-to-trio-o-ladakh.webp",
    link: "/tour/motor-trip-ladakh"
  },
  {
    id: "tour-4",
    title: "04. LADAKH – Path of the Pilgrims",
    duration: "Spiritual Journey",
    price: "47.490.000đ",
    vibe: "Himalayan Buddhism",
    highlights: ["Hòa mình vào Lễ hội Hemis linh thiêng", "Theo dấu chân hành hương Phật giáo", "Chiêm ngưỡng tu viện cổ kính ngàn năm"],
    tag: "Văn hóa – Tâm linh",
    image: "https://media.fittour.vn/uploads/co-gai-ben-tuong-trang-tu-vien-hemis.webp",
    link: "/tour/tour-ladakh-mua-le-hoi-hemis"
  },
  {
    id: "tour-5",
    title: "05. LADAKH MOTOR ADVENTURE",
    duration: "Adventure Journey",
    price: "Liên hệ",
    vibe: "Beyond Himalaya",
    highlights: ["Chinh phục đèo Umling La 5.798m", "Cầm lái Royal Enfield 452cc huyền thoại", "Hành trình phiêu lưu vượt mọi giới hạn"],
    tag: "Motor – Chinh phục",
    image: "https://media.fittour.vn/uploads/2023/10/motor-trip-ladakh-4.webp",
    link: "/tour/tour-motor-ladakh-10n9d-chinh-phuc-deo-cao-nhat"
  }
];

interface PillarGuideProps {
  onTourSelect?: (tour: any) => void;
}

export default function PillarGuide({ onTourSelect }: PillarGuideProps = {}) {
  const [activeSection, setActiveSection] = useState('tong-quan');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const destSliderRef = useRef<HTMLDivElement>(null);
  const emagSliderRef = useRef<HTMLDivElement>(null);
  const kienThucSliderRef = useRef<HTMLDivElement>(null);
  const diningSliderRef = useRef<HTMLDivElement>(null);
  const monasterySliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const scriptId = 'jsonld-faq-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);

    const observer = new IntersectionObserver((entries) => {
      let visibleSection = '';
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });
      if (visibleSection) {
        setActiveSection(visibleSection);
      }
    }, { rootMargin: '-150px 0px -60% 0px' });

    const sections = ['tong-quan', 'suc-khoe', 'lich-trinh', 'dia-diem', 'chuan-bi', 'tour', 'faq'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#f8fafc] text-[#1e293b] font-sans">
      


      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex items-center gap-2 md:gap-6 py-4 overflow-x-auto no-scrollbar justify-start md:justify-center">
            {[
              { id: 'tong-quan', label: 'Tổng Quan' },
              { id: 'suc-khoe', label: 'Sức Khỏe' },
              { id: 'lich-trinh', label: 'Lịch Trình' },
              { id: 'dia-diem', label: 'Địa Điểm' },
              { id: 'chuan-bi', label: 'Chuẩn Bị' },
              { id: 'tour', label: 'Tour' },
              { id: 'faq', label: 'Hỏi Đáp' }
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeSection === item.id 
                    ? 'bg-amber-800 text-white shadow-md' 
                    : 'text-stone-600 hover:bg-amber-50 hover:text-amber-900'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="max-w-5xl mx-auto px-4 py-12 md:py-20 space-y-24">
        
        <section id="tong-quan" className="scroll-mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-stone-900 mb-12">Tổng Quan Về Ladakh</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Độ Cao</span>
              <strong className="block text-2xl font-extrabold text-stone-900">3.500m+</strong>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Nhiệt Độ</span>
              <strong className="block text-2xl font-extrabold text-stone-900">-10°C → 25°C</strong>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Nguy Cơ AMS</span>
              <strong className="block text-2xl font-extrabold text-red-600">Cao</strong>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Internet</span>
              <strong className="block text-2xl font-extrabold text-stone-900">Hạn Chế</strong>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-amber-50 rounded-2xl text-amber-700">
                <CloudSun className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Thời Tiết 12 Tháng & Trang Phục</h3>
                <p className="text-stone-500 mt-1">Khí hậu cực kỳ khô lạnh đặc thù của sa mạc cao độ.</p>
              </div>
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm text-left border-collapse min-w-[600px]">
                <thead className="bg-stone-900 text-white font-mono text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="p-4 border-r border-stone-800">Tháng</th>
                    <th className="p-4 border-r border-stone-800">Nhiệt Độ</th>
                    <th className="p-4 border-r border-stone-800">Cảnh Sắc</th>
                    <th className="p-4">Trang Phục</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700">
                  <tr className="border-b border-stone-150 bg-stone-50/50">
                    <td className="p-4 font-bold text-sky-800">T4 - T5</td>
                    <td className="p-4 font-mono text-xs">5°C ~ 15°C (Đêm -3°C)</td>
                    <td className="p-4">Đầu hè, tuyết tan dần mở đèo. Sông lấp lánh băng trắng, hoa mai dâu rừng nở lấm tấm.</td>
                    <td className="p-4 text-xs font-medium">Áo giữ nhiệt tốt, áo khoác gió. Kính râm chống lóa sương mù tuyết.</td>
                  </tr>
                  <tr className="border-b border-stone-150">
                    <td className="p-4 font-bold text-amber-700">T6 - T8</td>
                    <td className="p-4 font-mono text-xs">12°C ~ 25°C (Đêm 5°C)</td>
                    <td className="p-4">Mùa cao điểm đẹp nhất. Trời xanh biếc pha lê, rực nắng, vách đá lộ rõ màu vân.</td>
                    <td className="p-4 text-xs font-medium">Áo hoodie mỏng, quần jean, kem chống nắng SPF50+ (tia UV cực độc).</td>
                  </tr>
                  <tr className="border-b border-stone-150 bg-amber-50/30">
                    <td className="p-4 font-bold text-amber-900">T9 - T10</td>
                    <td className="p-4 font-mono text-xs">2°C ~ 15°C (Đêm -5°C)</td>
                    <td className="p-4">Mùa thu vàng lộng lẫy tuyệt đẹp. Thung lũng Indus rực lá phong vàng ấm.</td>
                    <td className="p-4 text-xs font-medium">Áo lông vũ siêu ấm, găng tay, mũ len che tai, son dưỡng môi chống nứt.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-stone-500">T11 - T3</td>
                    <td className="p-4 font-mono text-xs">-10°C ~ 5°C (Đêm -20°C)</td>
                    <td className="p-4">Mùa đông khắc nghiệt. Sông băng Zanskar đóng cứng. Hầu hết đèo bị cô lập.</td>
                    <td className="p-4 text-xs font-medium">Dành cho mạo hiểm, giày chống nước cao cổ, áo phao rêu chuyên dụng.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex gap-3 bg-amber-100/50 p-4 border border-amber-200 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
              <p className="text-sm text-amber-900">
                <b>Khuyên dùng:</b> Tháng 7, 8, 9 và đầu tháng 10 chính là khung thời gian vàng hoàng kim nhất cho những vị khách trung niên (U50 - U70) muốn thưởng lãm an toàn.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-stone-100 rounded-2xl text-stone-700">
                <Navigation className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Sơ Đồ Chặng Bay Transit</h3>
                <p className="text-stone-500 mt-1">Các chuyến bay tới Leh chỉ khai thác vào sáng tinh mơ.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-dashed bg-stone-200 -translate-y-1/2 hidden md:block z-0"></div>
              
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 relative z-10">
                <span className="font-mono text-xs text-stone-500 font-bold uppercase tracking-widest block mb-2">Chặng 1</span>
                <h4 className="font-bold text-lg text-stone-900 mb-2">Việt Nam → New Delhi</h4>
                <p className="text-sm text-stone-600 mb-4">Bay từ Hà Nội hoặc TP.HCM bằng Indigo hoặc Vietjet.</p>
                <div className="text-xs font-mono font-bold text-amber-700 bg-amber-50 inline-block px-3 py-1 rounded-full">~ 4.5 Tiếng</div>
              </div>

              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 relative z-10">
                <span className="font-mono text-xs text-stone-600 font-bold uppercase tracking-widest block mb-2">Chặng 2</span>
                <h4 className="font-bold text-lg text-stone-900 mb-2">Chờ Transit Tại Sân Bay</h4>
                <p className="text-sm text-stone-600 mb-4">Làm thủ tục hải quan, tự chuyển sang Terminal nội địa chờ bay rạng sáng.</p>
                <div className="text-xs font-mono font-bold text-stone-700 bg-stone-200 inline-block px-3 py-1 rounded-full">Nghỉ ngơi 5-6 Tiếng</div>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 relative z-10">
                <span className="font-mono text-xs text-amber-700 font-bold uppercase tracking-widest block mb-2">Chặng 3</span>
                <h4 className="font-bold text-lg text-amber-900 mb-2">New Delhi → Leh</h4>
                <p className="text-sm text-amber-800 mb-4">Bay sát qua những rặng núi tuyết trắng hoành tráng sừng sững dốc thẳm.</p>
                <div className="text-xs font-mono font-bold text-white bg-amber-800 inline-block px-3 py-1 rounded-full">~ 1.5 Tiếng</div>
              </div>
            </div>
          </div>
        </section>

        <section id="suc-khoe" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Sức Khỏe & Chống Sốc Độ Cao (AMS)</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Vượt qua rào cản sợ hãi lớn nhất của du khách khi đến Himalaya.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Activity, text: "Sợ Say Độ Cao" },
              { icon: ThermometerSnowflake, text: "Sợ Rét Đậm" },
              { icon: ShieldCheck, text: "Cần Bảo Hiểm Y Tế" },
              { icon: Heart, text: "Lo Lắng Khó Thở" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-stone-200 text-center flex flex-col items-center justify-center gap-3 hover:border-amber-400 transition-colors">
                <item.icon className="w-8 h-8 text-amber-600" />
                <span className="font-bold text-sm text-stone-800">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border-2 border-amber-200 rounded-3xl overflow-hidden shadow-md">
              <div className="bg-amber-700 text-white p-6 text-center">
                <h3 className="font-bold text-xl uppercase tracking-wider">Triệu Chứng Nhẹ</h3>
                <span className="text-amber-100 text-sm font-medium">(Hoàn toàn bình thường)</span>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-stone-700 font-medium">
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Chóng mặt, choáng nhẹ</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Buồn nôn, khó tiêu</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Khó thở khi đi nhanh</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Mất ngủ đêm đầu tiên</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-red-200 rounded-3xl overflow-hidden shadow-md">
              <div className="bg-red-800 text-white p-6 text-center">
                <h3 className="font-bold text-xl uppercase tracking-wider">Triệu Chứng Nặng</h3>
                <span className="text-red-100 text-sm font-medium">(Bắt buộc vào bệnh viện lập tức)</span>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-stone-700 font-bold">
                  <li className="flex gap-3 items-center text-red-700"><AlertTriangle className="w-5 h-5" /> SpO2 (Oxy trong máu) giảm sâu &lt; 60%</li>
                  <li className="flex gap-3 items-center text-red-700"><AlertTriangle className="w-5 h-5" /> Phù phổi (ho khạc ra bọt hồng)</li>
                  <li className="flex gap-3 items-center text-red-700"><AlertTriangle className="w-5 h-5" /> Phù não (lú lẫn, mất ý thức, lịm đi)</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-center font-serif text-2xl font-bold text-stone-900 mb-8">Cẩm Nang Sống Còn Từ FIT TOUR</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-sky-50 border border-sky-200 p-8 rounded-3xl">
              <h4 className="font-bold text-sky-900 text-lg mb-6 flex items-center gap-2">
                <span className="bg-sky-200 text-sky-900 px-3 py-1 rounded-full font-mono text-sm">Trước 10 Ngày</span>
              </h4>
              <ul className="space-y-3 text-sm text-sky-800 leading-relaxed">
                <li>• Bổ sung hoạt huyết dưỡng não</li>
                <li>• Hạn chế uống rượu bia, thức khuya</li>
                <li>• Tập thể dục nâng cao sức bền, leo cầu thang, Yoga</li>
              </ul>
            </div>
            <div className="bg-sky-50 border border-sky-200 p-8 rounded-3xl">
              <h4 className="font-bold text-sky-900 text-lg mb-6 flex items-center gap-2">
                <span className="bg-sky-200 text-sky-900 px-3 py-1 rounded-full font-mono text-sm">Trước 02 Ngày</span>
              </h4>
              <ul className="space-y-3 text-sm text-sky-800 leading-relaxed">
                <li>• Bắt đầu uống thuốc ngừa say độ cao Acetazolamid (cần tư vấn bác sĩ)</li>
                <li>• Liều lượng: 02 viên/ngày</li>
                <li>• Tích cực ăn nhiều trái cây (chuối, táo) và uống nhiều nước</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-300 p-8 rounded-3xl shadow-md transform lg:-translate-y-4">
              <h4 className="font-bold text-amber-900 text-lg mb-6 flex items-center gap-2">
                <span className="bg-amber-700 text-white px-3 py-1 rounded-full font-mono text-sm">24H ĐẦU Ở LEH</span>
              </h4>
              <ul className="space-y-3 text-sm font-semibold text-amber-900 leading-relaxed">
                <li className="text-red-600 flex items-start gap-2"><span>✕</span> Tuyệt đối không tắm gội!</li>
                <li className="text-red-600 flex items-start gap-2"><span>✕</span> Không vận động mạnh, đi nhanh, vác nặng</li>
                <li className="text-red-600 flex items-start gap-2"><span>✕</span> Không uống rượu bia, không thức khuya</li>
                <li className="text-emerald-700 flex items-start gap-2"><span>✔</span> Nằm im nghỉ ngơi trên giường</li>
                <li className="text-emerald-700 flex items-start gap-2"><span>✔</span> Uống 3-4 lít nước ấm</li>
                <li className="text-emerald-700 flex items-start gap-2"><span>✔</span> Đau đầu nhẹ có thể uống 1 viên Panadol</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4">
            <p className="text-stone-500 italic font-serif text-lg text-center px-4">Khám phá chi tiết những sai lầm thường gặp trong 24h đầu tiên</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a 
                href="/ngay-dau-tien-o-ladakh-nen-luu-y-gi" 
                className="inline-flex items-center justify-center bg-white border border-amber-200 text-amber-700 font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all group text-sm"
              >
                <span>Ngày đầu tiên ở Ladakh nên lưu ý gì?</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="/ladakh-lanh-nhu-the-nao" 
                className="inline-flex items-center justify-center bg-white border border-amber-200 text-amber-700 font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all group text-sm"
              >
                <span>Mặc để giữ ấm tại Ladakh</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="/internet-o-ladakh" 
                className="inline-flex items-center justify-center bg-white border border-amber-200 text-amber-700 font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all group text-sm"
              >
                <span>Internet ở Ladakh ra sao</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="/doi-tien-ladakh" 
                className="inline-flex items-center justify-center bg-white border border-amber-200 text-amber-700 font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all group text-sm"
              >
                <span>Có nên đổi tiền trước</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="lich-trinh" className="scroll-mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-stone-900 mb-12">Hành Trình Khám Phá & Chi Phí</h2>
          
          <div className="mb-16">
            <img 
              src="https://media.fittour.vn/uploads/route-map-tour-ladakh.webp" 
              alt="Bản đồ tuyến đường Ladakh" 
              width={1200}
              height={600}
              className="w-full h-auto rounded-3xl shadow-lg border border-stone-200"
            />
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-5 gap-4 mb-16 pb-6 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { name: "Leh", link: "/cho-leh-ladakh", img: "https://media.fittour.vn/uploads/pho-di-bo-main-bazaar-leh-ladakh.webp" },
              { name: "Hemis", link: "/tu-vien-giau-co-nhat-ladakh-hemis", img: "https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-o-tu-vien-hemis.webp" },
              { name: "Nubra", link: "/thung-lung-nubra", img: "https://media.fittour.vn/uploads/2022/06/trai-nghiem-cuoi-lac-da-o-thung-lung-nubra-ladakh.webp" },
              { name: "Pangong", link: "/hinh-anh-ho-pangong-tso", img: "https://media.fittour.vn/uploads/2024/06/canh-quan-hoang-so-ho-pangong.webp" },
              { name: "Chang La", link: "/deo-khardung-la-va-chang-la", img: "https://media.fittour.vn/uploads/check-in-chang-la-pass-ladakh.webp" }
            ].map((dest, i) => (
              <a href={dest.link} key={i} className="relative block group overflow-hidden rounded-2xl cursor-pointer shrink-0 w-[65vw] sm:w-[45vw] md:w-auto snap-center">
                <div className="aspect-[4/5] bg-stone-200">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-amber-400 font-mono text-[10px] uppercase font-bold tracking-widest mb-1">Điểm đến {i+1}</span>
                  <span className="text-white font-serif text-lg md:text-xl font-bold">{dest.name}</span>
                </div>
              </a>
            ))}
          </div>

          {/* =========================================================
              E-MAGAZINE SECTION
              ========================================================= */}
          <div className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-amber-50 rounded-2xl text-amber-700">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-wide uppercase">Nhật Ký Hành Trình</h2>
                <p className="text-stone-500 mt-1 max-w-2xl">Những câu chuyện truyền cảm hứng từ những người đã đặt chân đến vùng đất Tiểu Tây Tạng.</p>
              </div>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                {
                  title: "Cô Mây",
                  desc: "Chuyến đi Ladakh như một giấc mơ có thật...",
                  img: "https://media.fittour.vn/uploads/du-khach-ben-bo-ho-pangong.webp",
                  link: "/co-may"
                },
                {
                  title: "Nhật Ký Khám Phá Ladakh",
                  desc: "Hành trình chinh phục những đỉnh đèo cao nhất thế giới.",
                  img: "https://media.fittour.vn/uploads/hanh-trinh-kham-pha-ladakh-cung-fit-tour.webp",
                  link: "/nhat-ky-kham-pha-ladakh"
                },
                {
                  title: "Khám Phá Bằng Xe Máy",
                  desc: "Góc nhìn hoang dã của phượt thủ qua lăng kính xe máy.",
                  img: "https://media.fittour.vn/uploads/2023/10/motor-trip-ladakh-5.webp",
                  link: "/nhat-ky-hanh-trinh-ladakh-bang-xe-may"
                }
              ].map((article, i) => (
                <a key={i} href={article.link} className="relative group overflow-hidden rounded-2xl cursor-pointer shrink-0 w-[80vw] sm:w-[60vw] md:w-auto snap-center bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-stone-100 relative">
                    <img src={article.img} onError={(e) => e.currentTarget.src='https://media.fittour.vn/uploads/2024/06/canh-quan-hoang-so-ho-pangong.webp'} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-amber-700 font-mono text-[10px] uppercase font-bold tracking-widest mb-3 inline-block">E-Magazine</span>
                    <h3 className="text-stone-900 font-serif text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">{article.title}</h3>
                    <p className="text-stone-500 text-sm mb-4 line-clamp-2">{article.desc}</p>
                    <span className="mt-auto text-[11px] font-bold tracking-widest uppercase text-stone-900 group-hover:text-amber-600 inline-flex items-center gap-2">
                      Đọc Thêm <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-10">
              <a href="/gallery-ladakh" className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-amber-700 transition-colors shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Thư Viện Ảnh Ladakh
              </a>
              <a href="/hinh-anh-le-hoi-hemis" className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-amber-700 transition-colors shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Ảnh Lễ Hội Hemis
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-700">
                <DollarSign className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Bảng Dự Trù Chi Phí Tự Túc (7 Ngày)</h3>
                <p className="text-stone-500 mt-1">Cân đối chi phí thông minh để có chuyến đi an toàn không lãng phí.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-4 text-sm font-medium">
                {[
                  ["Vé máy bay (Quốc tế & Nội địa Ấn Độ)", "~ 11.500.000 VNĐ"],
                  ["Xe SUV đặc chủng 7 ngày (Bao gồm xăng, trạm thu phí)", "~ 8.500.000 VNĐ"],
                  ["Chỗ ở 7 ngày (Khách sạn 4 sao & Camp cao cấp)", "~ 7.000.000 VNĐ"],
                  ["Ăn uống 7 ngày (Nhà hàng địa phương & Đặc sản)", "~ 3.500.000 VNĐ"],
                  ["Visa Ấn, Giấy phép ILP & Vé tham quan", "~ 1.500.000 VNĐ"],
                  ["Bình Oxy y tế & Thuốc men chống AMS", "~ 1.200.000 VNĐ"],
                  ["Phí phát sinh (Tip tài xế, Sim 4G, tỷ giá)", "~ 1.500.000 VNĐ"]
                ].map(([title, price], idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-stone-100 items-center">
                    <span className="text-stone-700 pr-4">{title}</span>
                    <span className="font-mono text-amber-800 font-bold whitespace-nowrap">{price}</span>
                  </div>
                ))}
                <div className="flex justify-between py-4 mt-4 text-lg items-center bg-stone-50 px-4 rounded-xl border border-stone-200">
                  <span className="text-stone-900 font-bold uppercase tracking-wide">Tổng Chi Phí (Chuẩn Cao Cấp)</span>
                  <span className="font-mono text-stone-900 font-extrabold">~ 34.700.000 VNĐ / Người</span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-stone-950 text-stone-200 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-amber-500 font-bold uppercase tracking-widest block mb-2">Tự Túc Hay Mua Tour?</span>
                  <p className="text-sm text-stone-400 font-sans leading-relaxed text-justify mb-4">
                    Nếu tự túc nhưng muốn hưởng dịch vụ Resort 4-5 sao (như The Grand Dragon), xe SUV đặc chủng và bình Oxy an toàn như tiêu chuẩn của FIT TOUR, chi phí cá nhân sẽ đội lên rất cao. Việc đi tour trọn gói của agency uy tín giúp bạn tận dụng được giá booking doanh nghiệp, đảm bảo y tế tuyệt đối mà không phải lo sợ các khoản phát sinh.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-amber-500 font-semibold">
                  <span>FIT TOUR BẢO VỆ Y KHOA</span>
                  <Heart className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            KHỐI MỚI: ĐỊA ĐIỂM & ẨM THỰC
            ========================================================= */}
        <section id="dia-diem" className="scroll-mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-stone-900 mb-4">Top 9 Trải Nghiệm & Điểm Đến</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-center mb-12">Những kỳ quan siêu thực trên độ cao 4000m mà bạn không thể bỏ lỡ khi tới Ladakh.</p>
          
          <div className="relative max-w-[1400px] mx-auto">
            {/* Nav buttons */}
            <button 
              onClick={() => destSliderRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}
              aria-label="Previous slide"
              className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
              style={{ position: 'absolute', left: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={() => destSliderRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}
              aria-label="Next slide"
              className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
              style={{ position: 'absolute', right: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div 
              ref={destSliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-4 lg:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {DESTINATIONS.map((dest, i) => (
                <div 
                  key={i}
                  className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 shrink-0 w-[85%] sm:w-[45%] md:w-[35%] lg:w-[28%] snap-center"
                >
                  {/* Image Section */}
                  <div className="relative h-48 md:h-56 w-full overflow-hidden shrink-0">
                    <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="bg-amber-50 text-amber-700 text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                        {dest.category}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {`${String(i + 1).padStart(2, '0')}. ${dest.name}`}
                    </h3>
                    
                    <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                      {dest.desc}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[10px] text-stone-500 font-mono uppercase tracking-widest">Beyond The Trail</span>
                      <a href={dest.link} className="inline-flex items-center justify-center bg-stone-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-colors">
                        Chi Tiết <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
              <h3 className="font-serif text-2xl font-bold text-amber-900 mb-4 flex items-center gap-3">
                <Utensils className="w-6 h-6 text-amber-700" />
                Ẩm Thực Địa Phương
              </h3>
              <p className="text-sm text-amber-900/80 leading-relaxed text-justify">
                Thực đơn chủ yếu là thịt gà, cừu non (người dân không ăn thịt heo, bò). Đặc sản nên thử là Momo (sủi cảo kiểu Tạng), Thukpa (mì súp), Xiên cừu nướng và Trà Bơ (Butter Tea). Các nhà hàng ở Leh khá đa dạng, tuy nhiên khi di chuyển xa (Nubra, Pangong), đồ ăn thường đậm gia vị cà-ri Ấn Độ. Fit Tour luôn chuẩn bị sẵn ruốc, khô gà, mì gói Việt Nam để đổi vị.
              </p>
            </div>
            <div className="bg-stone-100 p-8 rounded-3xl border border-stone-200">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <Tent className="w-6 h-6 text-stone-700" />
                Lưu Trú & Cắm Trại
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed text-justify">
                Tại trung tâm thị trấn Leh, khách sạn đạt chuẩn 3 sao dạng Lodge/Hut bằng gỗ, nệm êm và view núi rất đẹp. Tại những khu vực xa xôi (Thung lũng Nubra, Hồ Pangong, Tso Moriri), bạn sẽ được ngủ trong các khu Lều Trại (Glamping Tents) siêu tiện nghi, có nước nóng, chăn gối sạch sẽ và không gian ngắm dải ngân hà tuyệt mỹ.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            KHỐI NHẬT KÝ HÀNH TRÌNH (DIARY CENTERPIECE)
            ========================================================= */}
        <DiaryCenterpiece />

        <section id="chuan-bi" className="scroll-mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-stone-900 mb-12">Chuẩn Bị Hành Trang Trước Giờ G</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-amber-700" />
                Hồ Sơ Xin e-Visa Ấn Độ
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Hộ Chiếu Phổ Thông Gốc</h4>
                    <p className="text-xs text-stone-500 mt-1">Còn hạn trên 6 tháng, tối thiểu 2 trang trống kế tiếp.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Ảnh Chân Dung File Số</h4>
                    <p className="text-xs text-stone-500 mt-1">Vuông 5x5cm, phông nền trắng, không đeo kính, không hở răng.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Thẻ Thanh Toán Quốc Tế</h4>
                    <p className="text-xs text-stone-500 mt-1">Visa/Mastercard để thanh toán lệ phí 25 USD online.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-stone-50 rounded-xl text-xs font-mono text-stone-600 border border-stone-150">
                Xét duyệt: 48h - 72h làm việc. Khuyên nộp trước 20 ngày.
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-amber-700" />
                Checklist Cá Nhân (Phải Có)
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm mb-2 border-b border-stone-100 pb-2">Trang Phục Giữ Ấm 3 Lớp</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">Áo giữ nhiệt ôm khít thân, Áo phao lông vũ chống gió/tuyết, Găng tay, Mũ len che tai, Tất len dày, Giày trekking chống trượt.</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm mb-2 border-b border-stone-100 pb-2">Đồ Điện & Phụ Kiện</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">Phích cắm loại 2 đầu tròn (chuẩn WA-10), Ổ cắm nối dài (siêu quan trọng), Sạc dự phòng, Kính râm phân cực chống mù tuyết, Son dưỡng chống nẻ.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-red-100 text-red-600 p-4 rounded-full shrink-0">
              <Cross className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-red-700 font-bold text-xl mb-2 uppercase tracking-wide">Tuyệt Đối Không Mang Theo</h3>
              <p className="text-red-900 font-medium leading-relaxed">
                <span className="font-bold">✕ Không mang Vape / Thuốc lá điện tử:</span> Luật Ấn Độ phạt rất nặng.<br/>
                <span className="font-bold">✕ Không mang bình xịt tuyết/tạo áp suất lớn:</span> Sẽ bị thu giữ tại sân bay. Bình xịt tóc nhỏ phải ký gửi.
              </p>
            </div>
          </div>
        </section>

        <section id="tour" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Lựa Chọn Hành Trình Tuyệt Bút</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Được thiết kế tối ưu độ an toàn cho người Việt bởi FIT TOUR.</p>
          </div>

          <div className="relative max-w-[1400px] mx-auto">
            {/* Nav buttons */}
            <button 
              onClick={() => sliderRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}
              aria-label="Previous slide"
              className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
              style={{ position: 'absolute', left: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={() => sliderRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}
              aria-label="Next slide"
              className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
              style={{ position: 'absolute', right: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* Slider track */}
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 md:-mx-8 md:px-8" 
              style={{ gap: '1.5rem', scrollbarWidth: 'none' }}
            >
              {TOURS.map(tour => (
                <a 
                  key={tour.id}
                  href={tour.link}
                  className="bg-white rounded-3xl border border-stone-200 flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group snap-center shrink-0"
                  style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">
                        {tour.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4 flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">{tour.duration}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 leading-tight group-hover:text-amber-800 transition-colors">
                        {tour.title}
                      </h3>
                      <p className="font-sans text-xs text-stone-500 italic mb-4">"{tour.vibe}"</p>
                      <ul className="space-y-2 text-sm text-stone-600">
                        {tour.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-[10px] text-stone-500 font-mono block uppercase">Giá từ</span>
                        <span className="font-mono text-lg font-extrabold text-stone-900">{tour.price}</span>
                      </div>
                      <div className="bg-stone-950 hover:bg-amber-800 text-white rounded-xl px-4 py-2.5 text-xs font-bold tracking-wider transition shadow-sm">
                        Chi Tiết →
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* E-Magazine Section */}
          <div className="mt-16 max-w-[1400px] mx-auto pb-12">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-3 flex items-center justify-center gap-3">
                E-Magazine Khám Phá Ladakh
              </h3>
              <p className="text-stone-500 max-w-2xl mx-auto text-sm">Những câu chuyện chân thực nhất từ hành trình thực tế</p>
            </div>
            
            <div className="relative max-w-[1400px] mx-auto">
              {/* Nav buttons */}
              <button 
                onClick={() => emagSliderRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}
                aria-label="Previous slide"
                className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
                style={{ position: 'absolute', left: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={() => emagSliderRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}
                aria-label="Next slide"
                className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
                style={{ position: 'absolute', right: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>

              <div 
                ref={emagSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 md:-mx-8 md:px-8" 
                style={{ gap: '1.5rem', scrollbarWidth: 'none' }}
              >
              {/* Article 1 */}
              <a href="/nhat-ky-hanh-trinh-ladakh-bang-xe-may" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2024/01/nhat-ky-trai-nghiem-du-lich-ladakh-bang-xe-may.webp" alt="Nhật ký hành trình Ladakh bằng xe máy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Ký sự đường phố</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Nhật ký hành trình Ladakh bằng xe máy – Cảm xúc ở Himalayas
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Nhật ký hành trình Ladakh bằng xe máy kể lại hành trình 8 ngày qua vùng đất thuộc dãy Himalayas này! Những hình ảnh đặc biệt đầy ấn tượng.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
              
              {/* Article 2 */}
              <a href="/ladakh-emegazine" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/legacy/ladakh-mien-chan-troi-lang-thang-o-himalayas.webp" alt="Ladakh Emagazine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Khám phá văn hoá</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Emagazine Ladakh – Miền Chân Trời Lang Thang Ở Himalaya
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Bài viết Emagazine Ladakh với chủ đề Miền chân trời lang thang ở dãy Himalaya. Câu chuyện khám phá với những hình ảnh nổi bật.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
              
              {/* Article 3 */}
              <a href="/emagazine-dang-thuy-duong-o-zanskar" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2023/06/emagazine-nhung-ngay-du-muc-zanskar.webp" alt="Đặng Thuỳ Dương ở Zanskar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Trải nghiệm mùa đông</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Đặng Thuỳ Dương Ở Zanskar
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Chuyến đi Zanskar vào mùa đông của Đặng Thùy Dương khám phá thung lũng tuyết trắng, dòng sông băng và trải nghiệm cái lạnh âm độ khắc nghiệt.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
              {/* Article 4 */}
              <a href="/nhat-ky-kham-pha-ladakh" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp" alt="Nhật ký Ladakh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Ký sự đường phố</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Nhật ký Ladakh và những ngày bầu trời ở gần hơn mặt đất
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Khám phá Ladakh qua Pangong, Nubra, những con đèo hùng vĩ và các câu chuyện đời thường khiến hành trình ở lại rất lâu trong ký ức.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 5 */}
              <a href="/co-may" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/emagazine-u70-chinh-phuc-ladakh.webp" alt="Cô Mây U70" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Khám phá văn hoá</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Emagazine Ladakh: Hành Trình Cô Mây U70
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Emagazine hành trình Cô Mây chinh phục Ladakh đầy bản lĩnh ở độ tuổi U70. Khám phá hành trình đầy ấn tượng của cô ở dãy Himalaya.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a href="/cau-chuyen-du-lich/" className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-amber-700 transition-colors shadow-md">
                Xem thêm bài viết <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          {/* Kiến Thức Thú Vị Ladakh Section */}
          <div className="mt-8 max-w-[1400px] mx-auto pb-12">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-3 flex items-center justify-center gap-3">
                Kiến Thức Thú Vị Ladakh
              </h3>
              <p className="text-stone-500 max-w-2xl mx-auto text-sm">Những thông tin hữu ích cho chuyến đi của bạn</p>
            </div>
            
            <div className="relative max-w-[1400px] mx-auto">
              {/* Nav buttons */}
              <button 
                onClick={() => kienThucSliderRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}
                aria-label="Previous slide"
                className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
                style={{ position: 'absolute', left: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={() => kienThucSliderRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}
                aria-label="Next slide"
                className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
                style={{ position: 'absolute', right: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>

              <div 
                ref={kienThucSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 md:-mx-8 md:px-8" 
                style={{ gap: '1.5rem', scrollbarWidth: 'none' }}
              >
              {/* Article 1 */}
              <a href="/tai-sao-goi-ladakh-la-vung-dat-cua-cac-lat-ma" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2024/06/tai-sao-ladakh-duoc-goi-la-vung-dat-cua-lat-ma.webp" alt="Tại sao gọi Ladakh là Vùng đất của các Lạt Ma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Tôn giáo</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Tại sao gọi Ladakh là Vùng đất của các Lạt Ma
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Ladakh, vùng đất hùng vĩ và xa xôi ở dãy Himalaya, Ấn Độ, được biết đến với biệt danh Vùng đất của các Lạt Ma. Cùng tìm hiểu lý do của cái tên.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 2 */}
              <a href="/le-hoi-hemis" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2024/06/canh-quan-an-tuong-cua-man-mua-le-hoi-hemis.webp" alt="Lễ hội Hemis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Văn hoá</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Lễ hội Hemis: Lễ kỷ niệm văn hóa và truyền thống ở Ladakh
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Lễ hội Hemis là một trong những lễ hội văn hóa nổi tiếng và sôi động nhất ở Ladakh, Ấn Độ. Nó được tổ chức hàng năm tại Tu viện Hemis.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 3 */}
              <a href="/le-hoi-purnima" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2023/06/mua-mat-na-huou-tai-le-hoi-Purnima-ladakh.webp" alt="Lễ hội Purnima" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Lễ hội</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Lễ hội Purnima ở Ladakh: Kỷ niệm Đản sinh Đức Phật Thích Ca
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Lễ hội Purnima (Phật đản) có ý nghĩa to lớn với người theo đạo Phật ở Ladakh. Thời gian diễn ra vào ngày trăng tròn tháng Vesakha (tháng 4 và 5).
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 4 */}
              <a href="/mua-sam-o-ladakh" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2022/08/mua-sam-o-ladakh.webp" alt="Mua sắm ở Ladakh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Mua sắm</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Mua sắm ở Ladakh: Hướng dẫn chi tiết Mua gì? Ở đâu?
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Khách du lịch thường mua sắm ở Ladakh các mặt hàng Thủ công mỹ nghệ Tây Tạng, Mứt làm từ quả mơ, Khăn choàng Pashmina, Đồ trang sức.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 5 */}
              <a href="/ho-ladakh" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2022/06/khung-canh-ho-pangong-tso-ladakh.webp" alt="Hồ Ladakh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Thiên nhiên</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Top 9 hồ Ladakh đẹp nhất mà bạn nên ghé thăm
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Những hồ Ladakh đẹp nhất và hướng dẫn chi tiết mà bạn nên đọc trước khi khám phá khía cạnh huyền bí của vùng đất Shangri La cuối cùng!
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 6 */}
              <a href="/am-thuc-ladakh" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2022/04/am-thuc-ladakh.webp" alt="Ẩm thực Ladakh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Ẩm thực</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Ẩm thực Ladakh: Top 10 món ăn hấp dẫn
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Danh sách top 10 món ăn hàng đầu khi khám phá ẩm thực Ladakh. Món ăn ở Ladakhi vị không cay, tuy đơn giản nhưng tốt cho sức khỏe.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              </div>
            </div>
            
            <div className="text-center mt-10">
              <a href="/blog/" className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-amber-700 transition-colors shadow-md">
                Xem thêm bài viết <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          {/* Ăn và Ở Section */}
          <div className="mt-8 max-w-[1400px] mx-auto pb-12">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-3 flex items-center justify-center gap-3">
                Ăn và Ở cùng FIT Tour Tại Ladakh
              </h3>
              <p className="text-stone-500 max-w-2xl mx-auto text-sm">Trải nghiệm dịch vụ lưu trú và ẩm thực độc quyền</p>
            </div>
            
            <div className="relative max-w-[1400px] mx-auto">
              {/* Nav buttons */}
              <button 
                onClick={() => diningSliderRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}
                aria-label="Previous slide"
                className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
                style={{ position: 'absolute', left: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={() => diningSliderRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}
                aria-label="Next slide"
                className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
                style={{ position: 'absolute', right: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>

              <div 
                ref={diningSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 md:-mx-8 md:px-8" 
                style={{ gap: '1.5rem', scrollbarWidth: 'none' }}
              >
              {/* Article 1 */}
              <a href="/sama-resort-pangong" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/day-phong-nghi-sama-resort-tai-pangong-lake.webp" alt="Sama Resort Pangong" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-emerald-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Nơi ở</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Sama Resort Pangong – Nơi Ở Có View Hồ Pangong Đáng Giá Nhất
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Review thực tế về view hồ Pangong, phòng cottage, bữa ăn, tiện nghi và trải nghiệm lưu trú tại Ladakh.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 2 */}
              <a href="/wilderness-camp-diskit" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/khu-leu-nghi-duong-wilderness-camp-diskit.webp" alt="Wilderness Camp Diskit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-emerald-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Nơi ở</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Wilderness Camp Diskit – Một Nơi Để Sống Chậm Giữa Nubra Valley
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Khám phá Wilderness Camp Diskit tại Nubra Valley Ladakh với view tu viện Diskit, lửa trại, lều nghỉ và bữa cơm Việt giữa Himalaya.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 3 */}
              <a href="/saigon-bbq-and-hotpot-bua-com-viet-giua-himalaya" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/cong-vao-saigon-bbq-hotpot-authentic-vietnamese-cuisine-leh.webp" alt="Saigon BBQ & Hotpot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-rose-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Ẩm thực</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Saigon BBQ & Hotpot – Bữa cơm Việt giữa Himalaya đầy ấn tượng
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Khám phá Saigon BBQ & Hotpot ở Leh Ladakh qua góc nhìn thực tế của đoàn FIT TOUR. Một bữa cơm Việt giữa Himalaya ấm cúng.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* Article 4 */}
              <a href="/the-tibetan-kitchen-leh-ladakh" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/mat-tien-the-tibetan-kitchen-leh-ladakh.webp" alt="The Tibetan Kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-rose-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Ẩm thực</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    The Tibetan Kitchen - Nhà hàng món ăn Tây Tạng tại Leh Ladakh
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    The Tibetan Kitchen là một trong những nhà hàng Tây Tạng nổi tiếng tại Leh Ladakh. Cùng FIT Tour khám phá thực đơn, không gian.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a href="/cau-chuyen-du-lich/" className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-amber-700 transition-colors shadow-md">
                Xem thêm bài viết <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          {/* Tu Viện Section */}
          <div className="max-w-[1400px] mx-auto pb-12">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-3 flex items-center justify-center gap-3">
                Tu viện Ladakh
              </h3>
              <p className="text-stone-500 max-w-2xl mx-auto text-sm">Các tu viện linh thiêng bậc nhất trên dãy Himalaya</p>
            </div>
            
            <div className="relative max-w-[1400px] mx-auto">
              {/* Nav buttons */}
              <button 
                onClick={() => monasterySliderRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}
                aria-label="Previous slide"
                className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
                style={{ position: 'absolute', left: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={() => monasterySliderRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}
                aria-label="Next slide"
                className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
                style={{ position: 'absolute', right: '-20px', top: '45%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>

              <div 
                ref={monasterySliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 md:-mx-8 md:px-8" 
                style={{ gap: '1.5rem', scrollbarWidth: 'none' }}
              >
                {[
                  { name: "Tu viện Hemis", link: "/tu-vien-giau-co-nhat-ladakh-hemis", img: "https://media.fittour.vn/uploads/2023/06/tu-vien-hemis-ladakh-fittour.webp" },
                  { name: "Tu viện Thiksey", link: "/tu-vien-thiksey", img: "https://media.fittour.vn/uploads/2022/05/tu-vien-thiksey.webp" },
                  { name: "Tu viện Chemrey", link: "/tu-vien-chemrey", img: "https://media.fittour.vn/uploads/2024/06/tu-vien-Chemrey-ladakh.webp" },
                  { name: "Tu viện Phyang", link: "/tu-vien-phyang", img: "https://media.fittour.vn/uploads/2023/01/tu-vien-Phyang-ladakh.webp" },
                  { name: "Tu viện Matho", link: "/tu-vien-matho", img: "https://media.fittour.vn/uploads/2024/06/tu-vien-matho-ladakh.webp" },
                  { name: "Tu viện Alchi", link: "/tu-vien-alchi", img: "https://media.fittour.vn/uploads/2024/06/tu-vien-alchi-ladakh.webp" },
                  { name: "Tu viện Lamayuru", link: "/tu-vien-lamayuru", img: "https://media.fittour.vn/uploads/2024/06/toan-canh-tu-vien-lamayuru.webp" },
                  { name: "Tu viện Likir", link: "/tu-vien-likir", img: "https://media.fittour.vn/uploads/2022/04/tu-vien-likir.webp" },
                  { name: "Tu viện Diskit", link: "/tu-vien-diskit", img: "https://media.fittour.vn/uploads/legacy/tu-vien-diskit-gompa.webp" },
                  { name: "Tu viện Phuktal", link: "/tu-vien-phugtal", img: "https://media.fittour.vn/uploads/2023/06/du-khach-chup-anh-ben-tu-vien-Phugtal.webp" },
                  { name: "Tu viện Stongde", link: "/tu-vien-stongdey", img: "https://media.fittour.vn/uploads/2023/06/khong-gian-ben-trong-yen-tinh-tu-vien-Stongdey-Zanskar-ladakh.webp" }
                ].map((monastery, idx) => (
                  <a key={idx} href={monastery.link} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                    <div className="aspect-video bg-stone-200 overflow-hidden relative">
                      <img src={monastery.img} alt={monastery.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Tâm linh</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                        {monastery.name}
                      </h4>
                      <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                        <span>Xem chi tiết</span>
                        <span>→</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a href="/tu-vien-ladakh/" className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-amber-700 transition-colors shadow-md">
                Khám phá tất cả Tu viện <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                Góc Giải Đáp & Kinh Nghiệm
              </h2>
              <p className="text-sm font-sans text-stone-600 leading-relaxed text-justify">
                Những băn khoăn thiết thực nhất được chúng tôi cô đọng từ hàng ngàn câu hỏi của khách du lịch suốt nhiều năm vận hành tuyến Himalaya khắc nghiệt này.
              </p>
              
              <div className="bg-stone-900 p-6 rounded-2xl text-stone-300 space-y-4">
                <div className="font-serif italic text-lg leading-relaxed text-stone-100">
                  "Tôi không ngờ son dưỡng môi lại quan trọng đến vậy. Không khí quá khô khiến ai không mang son đều nứt nẻ môi rướm máu sau nửa ngày."
                </div>
                <div className="text-xs font-mono text-stone-400 uppercase">— Chị Lan Anh (Tour 10/2023)</div>
              </div>

              <div className="bg-stone-900 p-6 rounded-2xl text-stone-300 space-y-4">
                <div className="font-serif italic text-lg leading-relaxed text-stone-100">
                  "Túi chườm nước nóng cao su ở trại Pangong ban đêm là thứ tôi nhớ nhất. Nó đã cứu rỗi thanh xuân của tôi."
                </div>
                <div className="text-xs font-mono text-stone-400 uppercase">— Khách đi Tour mùa Thu</div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {FAQS.map((faq, index) => {
                const isExpanded = expandedFaq === index;
                return (
                  <div 
                    key={index}
                    className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-stone-900 text-sm md:text-base hover:bg-stone-50 transition-colors gap-4"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-sm font-medium text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================
            EDITORIAL CREDITS
            ========================================================= */}
        <section id="behind-the-journey" className="bg-slate-50 py-16 -mx-4 px-4 md:-mx-8 md:px-8 mt-12 rounded-t-[40px]">
          <div className="max-w-[1000px] mx-auto border-t border-slate-200 pt-12">
            
            <div className="text-center md:text-left mb-10">
              <h2 className="font-serif text-2xl font-bold tracking-wider uppercase text-slate-900 mb-4">Behind The Journey</h2>
              <p className="text-slate-600 text-sm leading-relaxed italic font-serif max-w-3xl">
                Toàn bộ nội dung cẩm nang được đúc kết từ những tư liệu khảo sát thực tế, kinh nghiệm thiết kế tour và dẫn đoàn của tập thể chuyên gia FIT Tour trong suốt nhiều năm gắn bó với vùng đất Ladakh.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
              
              {/* Main Editor */}
              <a href="/huynh-hieu" className="flex items-center gap-4 md:border-r md:border-slate-200 md:pr-10 group cursor-pointer">
                <div className="w-16 h-16 rounded-full p-1 border border-amber-500 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <img src="https://media.fittour.vn/uploads/huynh-hieu-travel.webp" alt="Huỳnh Hiếu" className="w-full h-full object-cover rounded-full" loading="lazy" />
                </div>
                <div className="text-left shrink-0 w-[120px]">
                  <span className="text-[10px] text-amber-700 font-bold tracking-[0.2em] uppercase block mb-1">BIÊN TẬP CHÍNH</span>
                  <h3 className="text-slate-900 font-serif text-lg font-bold group-hover:text-amber-600 transition-colors">Huỳnh Hiếu</h3>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">Travel Blogger</p>
                </div>
              </a>
              
              {/* Collaborators */}
              <div className="flex-1 text-center md:text-left w-full overflow-x-auto pb-4 hide-scrollbar">
                <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase block mb-4">CỐ VẤN CHUYÊN MÔN & CỘNG TÁC TƯ LIỆU</span>
                <div className="flex justify-center md:justify-start gap-4 lg:gap-6 min-w-max">
                  {[
                    { name: "Max Vũ", role: "Founder", img: "https://media.fittour.vn/uploads/max-vu-founder-fit-tour.webp", link: "/max-vu" },
                    { name: "Huy Ngô", role: "Tour Leader", img: "https://media.fittour.vn/uploads/hdv-huy-ngo-fittour.webp", link: "/hdv-huy-ngo" },
                    { name: "Thuptsan", role: "Cultural Guide", img: "https://media.fittour.vn/uploads/thuptsan-pangong-lake-guide.webp", link: "/thuptsan" },
                    { name: "Lulu", role: "Local Curator", img: "https://media.fittour.vn/uploads/lulu-road-captain-ladakh.webp", link: "/lulu" }
                  ].map((collab, idx) => {
                    const content = (
                      <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-slate-200 border border-slate-200 group-hover:border-amber-500 transition-colors shadow-sm">
                          <img src={collab.img} alt={collab.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        </div>
                        <div className="text-left w-[100px]">
                          <h4 className="text-slate-900 text-sm font-bold group-hover:text-amber-700 transition-colors">{collab.name}</h4>
                          <p className="text-slate-500 text-[10px] font-medium">{collab.role}</p>
                        </div>
                      </div>
                    );

                    return collab.link ? (
                      <a href={collab.link} key={idx} className="block cursor-pointer">
                        {content}
                      </a>
                    ) : (
                      <div key={idx}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
