import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CloudSun, FileText, Compass, DollarSign, Briefcase, HelpCircle, 
  ChevronDown, PhoneCall, ArrowRight, CheckCircle2, Ticket, AlertTriangle, 
  Map, Sunrise, Snowflake, ShieldCheck, Heart, Sparkles, Activity, Navigation, 
  ThermometerSnowflake, Cross, Stethoscope, Utensils, Tent, BookOpen
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Kailash nằm ở đâu? Du lịch Kailash có cần xin giấy phép đặc biệt không?",
    answer: "Núi thiêng Kailash (Ngân Sơn) nằm ở vùng Ngari (A Lý), phía Tây của Khu tự trị Tây Tạng, Trung Quốc. Để đến được đây, du khách bắt buộc phải có Visa đoàn Trung Quốc, Giấy thông hành Tây Tạng (Tibet Travel Permit - TTP), Giấy phép Biên phòng (Alien's Travel Permit) và Giấy phép Quân sự vùng Ngari."
  },
  {
    question: "Bị say độ cao (AMS) khi đi Kailash có nguy hiểm không? Làm sao phòng tránh?",
    answer: "Sốc độ cao (AMS) cực kỳ phổ biến vì đa số thời gian ở Tây Tạng bạn sẽ ở độ cao trên 4.000m (Kailash Kora lên tới 5.630m). Bạn cần uống thuốc Acetazolamid trước 72 giờ, dành 2 ngày đầu nghỉ ngơi tại Lhasa (3.600m), không vận động mạnh, kiêng tắm gội những ngày đầu và luôn giữ ấm cơ thể."
  },
  {
    question: "Nên xin visa loại nào để đi du lịch Kailash?",
    answer: "Bạn không thể tự túc xin visa và giấy phép vào Tây Tạng. Bắt buộc phải thông qua công ty du lịch để xin Visa đoàn Trung Quốc và hệ thống giấy phép TTP. FIT Tour sẽ lo toàn bộ thủ tục pháp lý phức tạp này cho bạn."
  },
  {
    question: "Có chuyến bay thẳng từ Việt Nam đến Kailash không?",
    answer: "Hiện tại CHƯA có đường bay thẳng. Thông thường bạn sẽ bay từ Việt Nam sang Trùng Khánh hoặc Thành Đô (Trung Quốc), sau đó nối chuyến bay nội địa từ Trung Quốc đến thành phố Lhasa (Tây Tạng). Từ Lhasa, đoàn sẽ đi đường bộ ròng rã nhiều ngày để đến vùng Ngari - nơi có núi Kailash."
  },
  {
    question: "Chi phí đi du lịch Kailash khoảng bao nhiêu tiền?",
    answer: "Chi phí một hành trình hành hương Kailash trọn gói cao cấp kéo dài 13-15 ngày thường dao động khoảng 90.000.000 VNĐ đến 110.000.000 VNĐ, bao gồm tất cả vé máy bay, visa, giấy phép, khách sạn 4-5 sao (nơi có thể), xe di chuyển, ăn uống và hướng dẫn viên chuyên nghiệp."
  },
  {
    question: "Có cần mang bình oxy không?",
    answer: "Hệ thống xe trung chuyển của FIT Tour và các khách sạn cao cấp luôn trang bị sẵn bình oxy y tế lớn hoặc máy tạo oxy. Tuy nhiên, trong 3 ngày trekking Kora quanh núi Kailash, bạn có thể tự chuẩn bị các bình oxy cầm tay nhỏ gọn."
  },
  {
    question: "Phụ nữ hoặc người lớn tuổi có đi được không?",
    answer: "Kailash là cung đường vô cùng khắc nghiệt về thể lực và tinh thần, đặc biệt là 3 ngày đi bộ Kora quanh núi. Phụ nữ hoàn toàn có thể tham gia nếu có sức khỏe tốt. Với người trên 60 tuổi hoặc có tiền sử tim mạch, huyết áp, bắt buộc phải có ý kiến bác sĩ chuyên khoa."
  },
  {
    question: "Nên mang USD hay đổi tiền Nhân dân tệ (CNY)?",
    answer: "Bạn nên đổi sẵn Nhân dân tệ (CNY) từ Việt Nam. Hầu hết các chi tiêu nhỏ lẻ tại Tây Tạng đều dùng WeChat Pay, Alipay hoặc tiền mặt CNY. Việc thanh toán bằng thẻ quốc tế (Visa/Mastercard) rất hạn chế ở vùng Ngari."
  },
  {
    question: "Kailash có sóng điện thoại và Internet không?",
    answer: "Tại Lhasa và Shigatse, sóng 4G/5G rất tốt. Tuy nhiên, càng tiến sâu vào vùng Ngari và núi Kailash, sóng điện thoại sẽ chập chờn và hầu như không có Internet ổn định. Bạn sẽ có cơ hội 'ngắt kết nối' hoàn toàn."
  }
];

const DESTINATIONS = [
  { 
    name: "Lễ hội Saga Dawa", 
    img: "https://media.fittour.vn/uploads/2024/07/doan-khach-fit-tour-chup-anh-tai-chua-dai-chieu.webp", 
    link: "/tour/tour-hanh-huong-nui-kailash-12n11d",
    badge: "VĂN HOÁ – TÂM LINH",
    category: "Spiritual Journey",
    desc: "Lễ hội quan trọng nhất của người Tạng kỷ niệm ngày Đức Phật Đản Sinh, Thành Đạo và Nhập Niết Bàn. Dựng cột cờ Tarboche khổng lồ dưới chân núi."
  },
  { 
    name: "Vòng Kora 52km", 
    img: "https://media.fittour.vn/uploads/max-vu-kailash-pilgrimage-top.webp", 
    link: "/tour/tour-hanh-huong-nui-kailash-12n11d",
    badge: "CHINH PHỤC – TÂM LINH",
    category: "Adventure Journey",
    desc: "Hành trình 3 ngày đi bộ vòng quanh ngọn núi thiêng. Người Tạng tin rằng hoàn thành vòng Kora sẽ giúp tịnh hoá tâm hồn và mang lại bình an."
  },
  { 
    name: "Thị trấn Darchen (4.575m)", 
    img: "https://media.fittour.vn/wp-content/uploads/2024/08/hang-da-milarepa.jpg", 
    link: "/tour/tour-hanh-huong-nui-kailash-12n11d",
    badge: "BẢN ĐỊA – ĐỜI SỐNG",
    category: "Base Camp",
    desc: "Điểm xuất phát và kết thúc của vòng Kora. Nơi quy tụ hàng nghìn khách hành hương từ khắp nơi trên thế giới chuẩn bị thể lực."
  },
  { 
    name: "Tu viện Dirapuk (5.080m)", 
    img: "https://media.fittour.vn/uploads/2024/07/cung-dien-potala-nam-2024.webp", 
    link: "/tour/tour-hanh-huong-nui-kailash-12n11d",
    badge: "THIÊN NHIÊN – KỲ QUAN",
    category: "North Face",
    desc: "Điểm dừng chân mang lại góc nhìn rõ nét nhất để chiêm ngưỡng toàn cảnh mặt Bắc (North Face) của núi Kailash."
  },
  { 
    name: "Đèo Dolma La (5.630m)", 
    img: "https://media.fittour.vn/uploads/max-vu-kailash-pilgrimage-top.webp", 
    link: "/tour/tour-hanh-huong-nui-kailash-12n11d",
    badge: "THỬ THÁCH SINH TỬ",
    category: "Highest Point",
    desc: "Điểm cao nhất của vòng Kora và cũng là thử thách lớn nhất về thể lực. Người Tạng tin rằng vượt qua đèo Dolma La tượng trưng cho một lần tái sinh."
  },
  { 
    name: "Tu viện Zutulpuk (4.790m)", 
    img: "https://media.fittour.vn/wp-content/uploads/2024/08/ho-manasarovar.jpg", 
    link: "/tour/tour-hanh-huong-nui-kailash-12n11d",
    badge: "VĂN HOÁ – TÂM LINH",
    category: "Miracle Cave",
    desc: "Nơi tôn giả Milarepa từng ẩn tu và để lại nhiều dấu tích thần thông. Là điểm dừng chân cuối cùng trước khi về lại Darchen."
  }
];

const TOURS = [
  {
    id: "tour-1",
    title: "01. HÀNH HƯƠNG KAILASH 12N11Đ",
    duration: "Spiritual Journey",
    price: "119.000.000đ",
    vibe: "Tây Tạng • Ngari • Kailash",
    highlights: ["Chinh phục vòng Kora núi Kailash", "Chiêm bái Potala và Chùa Đại Chiêu", "Nghỉ dưỡng khách sạn 4-5 sao"],
    tag: "Văn hóa – Tâm linh",
    image: "https://media.fittour.vn/uploads/max-vu-kailash-pilgrimage-top.webp",
    link: "/tour/tour-hanh-huong-nui-kailash-12n11d"
  }
];

interface PillarGuideProps {
  onTourSelect?: (tour: any) => void;
}

export default function PillarGuide({ onTourSelect }: PillarGuideProps = {}) {
  const [activeSection, setActiveSection] = useState('tong-quan');
  const [quizStep, setQuizStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const destSliderRef = useRef<HTMLDivElement>(null);
  const nuCuoiSliderRef = useRef<HTMLDivElement>(null);
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

    const sections = ['tong-quan', 'kham-pha', 'hanh-trinh', 'suc-khoe', 'chuan-bi', 'chi-phi', 'tour', 'faq'];
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
              { id: 'kham-pha', label: 'Khám Phá' },
              { id: 'hanh-trinh', label: 'Hành Trình' },
              { id: 'suc-khoe', label: 'Sức Khỏe' },
              { id: 'chuan-bi', label: 'Chuẩn Bị' },
              { id: 'chi-phi', label: 'Chi Phí' },
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-stone-900 mb-12">Tổng Quan Về Kailash</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Đỉnh Kora</span>
              <strong className="block text-2xl font-extrabold text-stone-900">5.630m</strong>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Độ Khó</span>
              <strong className="block text-xl font-extrabold text-stone-900 tracking-widest text-amber-500">★★★★<span className="text-stone-300">☆</span></strong>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Thời Gian</span>
              <strong className="block text-2xl font-extrabold text-stone-900">12 Ngày</strong>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Trekking</span>
              <strong className="block text-2xl font-extrabold text-stone-900">52km</strong>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Mùa Đẹp</span>
              <strong className="block text-xl font-extrabold text-stone-900">T5 - T9</strong>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Khách Đã Đi</span>
              <strong className="block text-2xl font-extrabold text-emerald-600">75+</strong>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Nguy Cơ AMS</span>
              <strong className="block text-xl font-extrabold text-red-600">Rất Cao</strong>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
              <span className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Internet</span>
              <strong className="block text-xl font-extrabold text-stone-900">Hạn Chế</strong>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-amber-50 rounded-2xl text-amber-700">
                <CloudSun className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Thời Tiết 12 Tháng & Trang Phục</h3>
                <p className="text-stone-500 mt-1">Khí hậu núi cao Tây Tạng chênh lệch nhiệt độ ngày đêm rất lớn.</p>
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
                    <td className="p-4 font-mono text-xs">0°C ~ 15°C (Đêm -5°C)</td>
                    <td className="p-4">Đầu mùa hành hương, tuyết còn đọng trên đèo Dolma La. Trời trong xanh, không khí thanh sạch.</td>
                    <td className="p-4 text-xs font-medium">Áo giữ nhiệt 2 lớp, áo lông vũ, kính râm chống loá mặt tuyết.</td>
                  </tr>
                  <tr className="border-b border-stone-150">
                    <td className="p-4 font-bold text-amber-700">T6 - T8</td>
                    <td className="p-4 font-mono text-xs">8°C ~ 20°C (Đêm 2°C)</td>
                    <td className="p-4">Mùa hè & lễ hội Saga Dawa. Thời tiết ấm nhất, đôi khi có mưa rào nhẹ. Dễ dàng đi Kora nhất.</td>
                    <td className="p-4 text-xs font-medium">Áo khoác Gore-Tex (chống nước/gió), quần trekking co giãn, giày leo núi cổ cao.</td>
                  </tr>
                  <tr className="border-b border-stone-150 bg-amber-50/30">
                    <td className="p-4 font-bold text-amber-900">T9 - T10</td>
                    <td className="p-4 font-mono text-xs">-5°C ~ 15°C (Đêm -10°C)</td>
                    <td className="p-4">Mùa thu vàng, trời trong vắt không một gợn mây, cơ hội nhìn rõ đỉnh Kailash nhất. Rất lạnh về đêm.</td>
                    <td className="p-4 text-xs font-medium">Áo lông vũ siêu ấm, túi ngủ cá nhân, găng tay dày, mũ len bịt tai, miếng dán nhiệt.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-stone-500">T11 - T3</td>
                    <td className="p-4 font-mono text-xs">-20°C ~ 0°C (Đêm -30°C)</td>
                    <td className="p-4">Mùa đông khắc nghiệt. Tuyết phủ kín bít bùng các lối đi Kora và đèo. Không đón khách du lịch.</td>
                    <td className="p-4 text-xs font-medium text-red-600">KHÔNG KHUYẾN KHÍCH HOẶC ĐÓNG CỬA.</td>
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
                <p className="text-stone-500 mt-1">Các chuyến bay đến Lhasa (Tây Tạng) khởi hành từ Trùng Khánh/Thành Đô.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-dashed bg-stone-200 -translate-y-1/2 hidden md:block z-0"></div>
              
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 relative z-10">
                <span className="font-mono text-xs text-stone-500 font-bold uppercase tracking-widest block mb-2">Chặng 1</span>
                <h4 className="font-bold text-lg text-stone-900 mb-2">Việt Nam → Trùng Khánh</h4>
                <p className="text-sm text-stone-600 mb-4">Bay từ Hà Nội hoặc TP.HCM đến các sân bay trung chuyển lớn của Trung Quốc (Trùng Khánh/Thành Đô).</p>
                <div className="text-xs font-mono font-bold text-amber-700 bg-amber-50 inline-block px-3 py-1 rounded-full">~ 3.5 Tiếng</div>
              </div>

              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 relative z-10">
                <span className="font-mono text-xs text-stone-600 font-bold uppercase tracking-widest block mb-2">Chặng 2</span>
                <h4 className="font-bold text-lg text-stone-900 mb-2">Chờ Transit Tại Sân Bay</h4>
                <p className="text-sm text-stone-600 mb-4">Làm thủ tục nhập cảnh Trung Quốc, nghỉ ngơi tại khách sạn sân bay chờ chuyến bay nội địa.</p>
                <div className="text-xs font-mono font-bold text-stone-700 bg-stone-200 inline-block px-3 py-1 rounded-full">Nghỉ ngơi 4-5 Tiếng</div>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 relative z-10">
                <span className="font-mono text-xs text-amber-700 font-bold uppercase tracking-widest block mb-2">Chặng 3</span>
                <h4 className="font-bold text-lg text-amber-900 mb-2">Trùng Khánh → Lhasa</h4>
                <p className="text-sm text-amber-800 mb-4">Bay sát qua những rặng núi tuyết trắng hoành tráng sừng sững dốc thẳm của dãy Himalaya.</p>
                <div className="text-xs font-mono font-bold text-white bg-amber-800 inline-block px-3 py-1 rounded-full">~ 2.5 Tiếng</div>
              </div>
            </div>
          </div>
        </section>

          {/* INTERACTIVE DECISION QUIZ */}
          <section id="kham-pha" className="scroll-mt-24 mt-16 bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Khảo sát cá nhân</span>
              <h2 className="font-serif text-3xl font-bold text-stone-900">Bạn có phù hợp đi Kailash không?</h2>
              <p className="text-stone-500 mt-3 max-w-2xl mx-auto">Kailash là hành trình thử thách cả thể chất lẫn tinh thần. Hãy trả lời vài câu hỏi nhanh dưới đây để xem bạn cần chuẩn bị gì.</p>
            </div>

            <div className="max-w-3xl mx-auto bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200 min-h-[320px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {quizStep === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                    <h3 className="text-2xl font-bold text-stone-900 mb-8 leading-relaxed">Sức khoẻ của bạn dạo này thế nào? Có hay bị cao huyết áp hay bệnh tim mạch không?</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button onClick={() => setQuizStep(1)} className="px-8 py-4 bg-red-100 text-red-700 font-bold rounded-xl hover:bg-red-200 transition-colors shadow-sm">Có, tôi có bệnh nền</button>
                      <button onClick={() => setQuizStep(2)} className="px-8 py-4 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors shadow-sm">Không, tôi hoàn toàn khỏe mạnh</button>
                    </div>
                  </motion.div>
                )}
                {quizStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6">
                      <AlertTriangle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-4">Bạn cần tham vấn y tế!</h3>
                    <p className="text-stone-600 mb-8 max-w-xl mx-auto text-lg">Đường vòng Kora ở độ cao 5.630m có lượng oxy cực kỳ loãng. Nếu có bệnh lý tim mạch hay huyết áp, chuyên gia y tế khuyên bạn <strong>chỉ nên dạo quanh hồ Manasarovar</strong> để đảm bảo an toàn tuyệt đối nhé.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button onClick={() => setQuizStep(0)} className="px-8 py-3 border border-stone-300 text-stone-600 font-bold rounded-xl hover:bg-stone-100 transition-colors">Làm lại</button>
                      <a href="tel:0908123456" className="px-8 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                        <PhoneCall className="w-4 h-4" /> Gọi Bác sĩ tư vấn
                      </a>
                    </div>
                  </motion.div>
                )}
                {quizStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                    <h3 className="text-2xl font-bold text-stone-900 mb-8 leading-relaxed">Bạn đã bao giờ đi trekking ở độ cao trên 4.000m chưa? <br/><span className="text-lg text-stone-500 font-medium">(Kiểu như leo EBC, Annapurna hay đi Ladakh ấy)</span></h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button onClick={() => setQuizStep(3)} className="px-8 py-4 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition-colors shadow-sm">Rồi, tôi đã có kinh nghiệm</button>
                      <button onClick={() => setQuizStep(4)} className="px-8 py-4 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors shadow-sm">Chưa, đây là lần đầu</button>
                    </div>
                  </motion.div>
                )}
                {quizStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-4">Quá xịn! Bạn là ứng viên cực kỳ lý tưởng.</h3>
                    <p className="text-stone-600 mb-8 max-w-xl mx-auto text-lg">Kinh nghiệm từng leo núi cao sẽ giúp cơ thể bạn làm quen với hội chứng AMS cực nhanh. Giờ bạn chỉ cần một lịch trình chuẩn và đội support xịn sò đi kèm thôi.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button onClick={() => setQuizStep(0)} className="px-8 py-3 border border-stone-300 text-stone-600 font-bold rounded-xl hover:bg-stone-100 transition-colors">Làm lại</button>
                      <a href="https://thericetour.com/tour/tour-hanh-huong-nui-kailash-12n11d" className="px-8 py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer">
                        Xem Lịch Trình Tour <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                )}
                {quizStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6">
                      <HelpCircle className="w-10 h-10" /> 
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-4">Không sao! Hãy chuẩn bị trước 2 tháng.</h3>
                    <p className="text-stone-600 mb-8 max-w-xl mx-auto text-lg">Không sao cả, ai cũng có lần đầu mà! Quan trọng là bạn cần tập chạy bộ hoặc leo cầu thang trước chuyến đi cỡ 2 tháng. Cứ yên tâm, FIT TOUR luôn chuẩn bị sẵn ngựa và đội porter để hỗ trợ nếu bạn thấy đuối sức giữa chừng.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button onClick={() => setQuizStep(0)} className="px-8 py-3 border border-stone-300 text-stone-600 font-bold rounded-xl hover:bg-stone-100 transition-colors">Làm lại</button>
                      <a href="#chuan-bi" className="px-8 py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); scrollToSection('chuan-bi'); }}>
                        Đọc Guide Chuẩn Bị <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

        <section id="suc-khoe" className="scroll-mt-24 mt-20">
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
                <span className="bg-amber-700 text-white px-3 py-1 rounded-full font-mono text-sm">48H ĐẦU Ở LHASA</span>
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
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a 
                href="https://thericetour.com/thong-tin-can-biet-hanh-huong-nui-kailash" 
                className="inline-flex items-center justify-center bg-white border border-amber-200 text-amber-700 font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all group text-sm" target="_blank" rel="noopener noreferrer"
              >
                <span>Thông tin cần biết</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="https://thericetour.com/truyen-thuyet-va-su-that-ve-nui-kailash" 
                className="inline-flex items-center justify-center bg-white border border-amber-200 text-amber-700 font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all group text-sm" target="_blank" rel="noopener noreferrer"
              >
                <span>Truyền thuyết và sự thật</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="https://thericetour.com/vi-sao-kora-kailash-lam-thay-doi-cuoc-doi" 
                className="inline-flex items-center justify-center bg-white border border-amber-200 text-amber-700 font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all group text-sm" target="_blank" rel="noopener noreferrer"
              >
                <span>Vì sao Kora làm thay đổi cuộc đời</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="https://thericetour.com/nhung-thac-mac-thuong-gap-khi-hanh-huong-kailash" 
                className="inline-flex items-center justify-center bg-white border border-amber-200 text-amber-700 font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all group text-sm" target="_blank" rel="noopener noreferrer"
              >
                <span>Những thắc mắc thường gặp</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="hanh-trinh" className="scroll-mt-24 mt-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-stone-900 mb-12">Hành Trình Chuẩn Bị & Khám Phá</h2>
            
            <div className="max-w-3xl mx-auto mb-20">
              <div className="relative border-l-2 border-stone-200 ml-4 md:ml-6 space-y-12">
                
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-6 h-6 bg-white border-4 border-amber-600 rounded-full -left-[13px] top-1"></div>
                  <h3 className="text-sm font-bold text-amber-800 uppercase tracking-widest mb-2">60 Ngày Trước</h3>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Lên kế hoạch & Đặt tour</h4>
                  <p className="text-stone-600 leading-relaxed text-base">Tây Tạng yêu cầu giấy thông hành TTP (Tibet Travel Permit) mất ít nhất 30 ngày để xử lý. Bạn cần chốt danh sách đoàn, nộp passport và bắt đầu tìm hiểu chi tiết về chuyến đi.</p>
                </div>

                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-6 h-6 bg-white border-4 border-amber-500 rounded-full -left-[13px] top-1"></div>
                  <h3 className="text-sm font-bold text-amber-800 uppercase tracking-widest mb-2">30 Ngày Trước</h3>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Rèn thể lực & Mua sắm</h4>
                  <p className="text-stone-600 leading-relaxed text-base">Bắt đầu tập leo cầu thang, đi bộ đường dài mang ba lô. Sắm sửa áo khoác lông vũ chống nước âm độ, giày trekking cổ cao, gậy leo núi, và kính râm phân cực (UV400).</p>
                </div>

                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-6 h-6 bg-white border-4 border-amber-400 rounded-full -left-[13px] top-1"></div>
                  <h3 className="text-sm font-bold text-amber-800 uppercase tracking-widest mb-2">7 Ngày Trước</h3>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Chuẩn bị Y tế</h4>
                  <p className="text-stone-600 leading-relaxed text-base">Uống thuốc ngừa say độ cao (Hoạt huyết dưỡng não, Ginkgo Biloba) từ bây giờ. Uống Acetazolamid trước ngày bay 72 giờ theo chỉ định của bác sĩ.</p>
                </div>

                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-6 h-6 bg-stone-900 rounded-full -left-[13px] top-1 flex items-center justify-center">
                    <Navigation className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-2">Khởi Hành & Đến Lhasa (3.600m)</h3>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Thích nghi sinh học</h4>
                  <p className="text-stone-600 leading-relaxed text-base">Sau chuyến bay dài transit qua Thành Đô hay Trùng Khánh, bạn sẽ đặt chân đến Lhasa. Mới lên cao, <strong>tuyệt đối đừng tắm gội vội</strong>. Cứ đi lại từ từ, ăn nhẹ nhàng và nạp nhiều nước ấm để cơ thể quen dần với cái loãng của oxy nhé.</p>
                </div>

                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-6 h-6 bg-amber-700 rounded-full -left-[13px] top-1 flex items-center justify-center">
                    <Activity className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-amber-700 uppercase tracking-widest mb-2">Trọng Tâm: Kailash Kora (4.500m - 5.630m)</h3>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Hành hương 52km quanh núi thiêng</h4>
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 font-bold text-stone-900 text-xl">N1</div>
                      <div>
                        <strong className="block text-stone-900 text-lg mb-1">Darchen → Dirapuk (20km)</strong>
                        <span className="text-stone-600">Đường khá bằng phẳng, men theo thung lũng. Cảnh sắc hùng vĩ với vách đá phía Tây Kailash. Nghỉ đêm ở độ cao 5.080m.</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-red-50 text-red-700 border border-red-100 rounded-xl shadow-sm flex items-center justify-center shrink-0 font-bold text-xl">N2</div>
                      <div>
                        <strong className="block text-stone-900 text-lg mb-1">Dirapuk → Đèo Dolma La → Zutulpuk (18km)</strong>
                        <span className="text-stone-600">Ngày thử thách nhất của hành trình. Leo dốc đứng 6km để qua đèo Dolma La (5.630m). Băng qua hồ Gauri Kund và xuống dốc đá gập ghềnh.</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 font-bold text-stone-900 text-xl">N3</div>
                      <div>
                        <strong className="block text-stone-900 text-lg mb-1">Zutulpuk → Darchen (14km)</strong>
                        <span className="text-stone-600">Hành trình nhẹ nhàng kết thúc vòng Kora, trở về thị trấn Darchen nghỉ ngơi.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-6 h-6 bg-white border-4 border-emerald-500 rounded-full -left-[13px] top-1"></div>
                  <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2">Trở Về Việt Nam</h3>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Tái sinh tinh thần</h4>
                  <p className="text-stone-600 leading-relaxed text-base">Kết thúc hành trình. Dù cơ thể có hơi rã rời sau nhiều ngày đi bộ, nhưng đổi lại tâm trí bạn sẽ thấy cực kỳ nhẹ nhõm, như trút bỏ được mọi muộn phiền để bước sang một trang mới.</p>
                </div>

              </div>
              

            </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-5 gap-4 mb-16 pb-6 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { name: "Lhasa", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Thủ phủ linh thiêng, cung điện Potala & chùa Đại Chiêu." },
              { name: "Yamdrok", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Một trong 3 hồ thiêng của Tây Tạng, màu xanh ngọc bích." },
              { name: "Shigatse", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Đại tu viện Tashilhunpo hùng vĩ của Ban Thiền Lạt Ma." },
              { name: "Saga", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Trạm trung chuyển huyết mạch tiến vào vùng hoang dã Ngari." },
              { name: "Manasarovar", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Hồ nước ngọt kỳ vỹ, tinh khiết nhất vũ trụ tâm linh." },
              { name: "Darchen", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Thị trấn nhỏ dưới chân núi Kailash, vạch xuất phát Kora." },
              { name: "Dirapuk", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Tu viện mặt Bắc Kailash, nơi chiêm ngưỡng núi gần nhất." },
              { name: "Dolma La", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Đèo cao 5.630m, điểm thử thách khắc nghiệt nhất." },
              { name: "Zutulpuk", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Tu viện của vị thánh Milarepa, điểm nghỉ Kora ngày 2." },
              { name: "Tirthapuri", link: "/tour/tour-hanh-huong-nui-kailash-12n11d", desc: "Suối nước nóng thiêng liêng, nơi tẩy trần sau chuyến Kora." }
            ].map((dest, i) => (
              <a href={dest.link} key={i} className="group flex flex-col justify-start bg-white border border-stone-200 hover:border-amber-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shrink-0 w-[65vw] sm:w-[45vw] md:w-auto snap-center">
                <span className="text-4xl md:text-5xl font-serif text-stone-500 group-hover:text-amber-600 font-bold transition-colors mb-8">{(i + 1).toString().padStart(2, '0')}</span>
                <div className="flex flex-col flex-1">
                  <h4 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2">{dest.name}</h4>
                  <p className="text-sm text-stone-500 leading-snug">{dest.desc}</p>
                </div>
              </a>
            ))}
          </div>

                  {/* =========================================================
            KHỐI MỚI: ĐỊA ĐIỂM & ẨM THỰC
            ========================================================= */}
        <section id="dia-diem" className="scroll-mt-24 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-stone-900 mb-4">Khám Phá Cảnh Quan</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-center mb-12">Những địa điểm tuyệt đẹp không thể bỏ qua trên độ cao 4000m trong hành trình hướng về Kailash.</p>
          
          <div className="relative max-w-[1400px] mx-auto">
            <button 
              onClick={() => destSliderRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}
              aria-label="Previous slide"
              className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
              style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={() => destSliderRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}
              aria-label="Next slide"
              className="hidden md:flex items-center justify-center bg-white text-stone-900 rounded-full cursor-pointer hover:bg-amber-100 transition-colors shadow-lg border border-stone-200"
              style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '48px', height: '48px' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div 
              ref={destSliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {[
                {
                  url: "https://media.fittour.vn/uploads/2023/03/ho-yamdrok.webp",
                  alt: "Hồ thiêng Yamdrok xanh ngọc bích",
                  caption: "Hồ thiêng Yamdrok"
                },
                {
                  url: "https://media.fittour.vn/uploads/chi-ly-kora-kailash-lan-thu-hai.webp",
                  alt: "Du khách FIT Tour tại đèo Dolma La",
                  caption: "Đèo Dolma La (5.630m)"
                },
                {
                  url: "https://media.fittour.vn/uploads/2025/07/tu-vien-tagong-co-gai-vuon-tay-truoc-nui-tuyet.webp",
                  alt: "Cảnh quan tu viện hùng vĩ vùng ngọa Tạng",
                  caption: "Tu viện hùng vĩ"
                },
                {
                  url: "https://media.fittour.vn/uploads/2025/07/hdv-sonam-don-mung-co-ni-voi-khan-khanta.webp",
                  alt: "Nghi thức đón khách bằng khăn Khata thiêng liêng",
                  caption: "Nghi thức đón khách"
                },
                {
                  url: "https://media.fittour.vn/uploads/2024/07/du-khach-tour-kailash-tan-huong-su-tuyet-voi-tai-song-bang-karola.webp",
                  alt: "Sông băng Karola hùng vĩ",
                  caption: "Sông băng Karola"
                },
                {
                  url: "https://media.fittour.vn/uploads/2024/07/du-khach-thoai-mai-trong-ngay-dau-tien-bat-dau-hanh-trinh-hanh-huong-nui-kailash.webp",
                  alt: "Bắt đầu hành trình Kora quanh đỉnh Kailash",
                  caption: "Bắt đầu Kora"
                }
              ].map((img, i) => (
                <div key={i} className="group relative block overflow-hidden rounded-xl shrink-0 w-[85vw] md:w-[calc(25%-18px)] snap-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-stone-200 relative">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <p className="text-white font-sans font-bold text-sm leading-tight drop-shadow-md">{img.caption}</p>
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
                Thực đơn chủ yếu là thịt bò Yak, cừu non. Đặc sản nên thử là Momo (sủi cảo kiểu Tạng), Thukpa (mì súp), Khẩu nhục và Trà Bơ (Butter Tea). Các nhà hàng ở Lhasa khá đa dạng, tuy nhiên khi di chuyển xa (Ngari, Manasarovar), đồ ăn thường đậm vị địa phương. Fit Tour luôn chuẩn bị sẵn ruốc, khô gà, mì gói Việt Nam để đổi vị.
              </p>
            </div>
            <div className="bg-stone-100 p-8 rounded-3xl border border-stone-200">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <Tent className="w-6 h-6 text-stone-700" />
                Lưu Trú & Cắm Trại
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed text-justify">
                Khách sạn tại Lhasa khá đa dạng, từ tiêu chuẩn 3 sao đến các khách sạn quốc tế 5 sao. Tại những khu vực xa xôi (Thung lũng Ngari, Hồ Manasarovar, Yamdrok), bạn sẽ được ngủ trong các khu Lều Trại (Glamping Tents) siêu tiện nghi, có nước nóng, chăn gối sạch sẽ và không gian ngắm dải ngân hà tuyệt mỹ.
              </p>
            </div>
          </div>
        </section>

          {/* E-Magazine Section */}
          <div className="mb-20 mt-16 max-w-[1400px] mx-auto pb-12">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-3 flex items-center justify-center gap-3">
                E-Magazine Hành Trình
              </h3>
              <p className="text-stone-500 max-w-2xl mx-auto text-sm">Những góc nhìn chân thật và sống động nhất từ khách hàng</p>
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
              <a href="/khach-hang-quay-lai-tay-tang-kailash-3-nam" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/chi-ly-tai-deo-dolma-5600m.webp" alt="Khách Hàng Quay Lại Tây Tạng" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Khách Hàng Kể Chuyện</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Khách Hàng Quay Lại Tây Tạng & Kailash 3 Năm Liên Tiếp: Vì Sao Chị Ly Luôn Chọn FIT TOUR?
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Chị Huỳnh Diễm Ly quay lại Tây Tạng và Kora Kailash cùng FIT TOUR suốt 3 năm liên tiếp. Câu chuyện về niềm tin, trải nghiệm và Himalaya.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
              
              {/* Article 2 */}
              <a href="/nhat-ky-hanh-trinh-hanh-huong-nui-kailash" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2024/07/hanh-trinh-kora-kailash-fittour.webp" alt="Nhật ký hành trình hành hương núi Kailash" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Ký Sự Hành Trình</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Nhật ký hành trình hành hương núi Kailash Tây Tạng Cùng Fit Tour
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Chuyến đi này là một cuộc hành hương kora tìm về bản ngã tâm linh đặc biệt qua những hình ảnh chân thực và xúc động nhất.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
              
              {/* Article 3 */}
              <a href="/phuong-thanh-lan-3-den-ladakh" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/ca-si-phuong-thanh-tan-bo-giua-thung-lung-da-cuoi-vung-ladakh.webp" alt="Ca sĩ Phương Thanh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Đồng Hành Cùng Sao</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Ca sĩ Phương Thanh và lần 3 hành hương trên độ cao 5.000 mét
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Hành trình tâm linh lần 3 của ca sĩ Phương Thanh tại vùng đất Phật Ladakh. Cùng FIT Tour khám phá chuyến hành hương đầy cảm xúc ở độ cao trên 5.000 mét.
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
              
              {/* Article 4 */}
              <a href="/emagazine-dang-thuy-duong-o-zanskar" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                <div className="aspect-video bg-stone-200 overflow-hidden relative">
                  <img src="https://media.fittour.vn/uploads/2023/06/emagazine-nhung-ngay-du-muc-zanskar.webp" alt="Đặng Thuỳ Dương ở Zanskar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">Trải nghiệm mùa đông</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                    Nhật Ký Zanskar, Ladakh - Đặng Thùy Dương Và Hành Trình Đến Vùng Đất Cô Độc Nhất Himalaya
                  </h4>
                  <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                    Nhật ký du hành của Đặng Thùy Dương tại Zanskar, Ladakh, qua bài viết Emagazine. Nơi gặp gỡ con người, tu viện, cảnh quan độc đáo của Himalaya.
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

          {/* Kiến Thức Thú Vị Kailash Section */}
          <div className="mt-8 max-w-[1400px] mx-auto pb-12">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-3 flex items-center justify-center gap-3">
                Kiến Thức Thú Vị Kailash
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
              {[
                {
                  title: "Trang phục hành hương Kora Kailash: Mặc gì để giữ ấm và an toàn?",
                  link: "/trang-phuc-kora-kailash",
                  img: "https://media.fittour.vn/uploads/2024/07/du-khach-chup-hinh-tu-cung-dien-potala.webp",
                  tag: "Kinh nghiệm",
                  desc: "Hướng dẫn chi tiết cách chọn lớp áo nền, áo khoác chống gió, và giày trekking phù hợp nhất để chinh phục đỉnh Kora ở độ cao 5.630m."
                },
                {
                  title: "Chuẩn bị sức khoẻ và rèn luyện trước khi Kora Kailash",
                  link: "/chuan-bi-suc-khoe-kora-kailash",
                  img: "https://media.fittour.vn/uploads/2024/07/chuan-bi-hanh-trinh-trek-hanh-huong-kora-kailash-ngay-dau-tien.webp",
                  tag: "Sức khoẻ",
                  desc: "Bài tập tăng cường thể lực, cách hít thở và các biện pháp chống say độ cao (AMS) hiệu quả dành cho người Việt."
                },
                {
                  title: "Những thắc mắc thường gặp khi đi hành hương Kailash",
                  link: "/nhung-thac-mac-thuong-gap-khi-hanh-huong-kailash",
                  img: "https://media.fittour.vn/uploads/2025/04/thac-mac-thuong-gap-khi-hanh-huong-kailash.webp",
                  tag: "Cẩm nang",
                  desc: "Giải đáp tất tần tật từ visa, giấy phép Tibet Travel Permit (TTP) đến ăn uống và tắm gội trong suốt 3 ngày Kora."
                },
                {
                  title: "Vì sao Kora Kailash có thể làm thay đổi cuộc đời bạn?",
                  link: "/vi-sao-kora-kailash-lam-thay-doi-cuoc-doi",
                  img: "https://media.fittour.vn/uploads/2025/04/vi-sao-kora-kailash-lam-thay-doi-cuoc-doi-ban.webp",
                  tag: "Trải nghiệm",
                  desc: "Hành trình rửa sạch tội lỗi một đời và thấu hiểu ý nghĩa nhân sinh qua góc nhìn của những khách hành hương trở về."
                },
                {
                  title: "Truyền thuyết và sự thật về Núi Kailash qua các tôn giáo",
                  link: "/truyen-thuyet-va-su-that-ve-nui-kailash",
                  img: "https://media.fittour.vn/uploads/2025/04/truyen-thuyet-va-su-that-ve-nui-kailash.webp",
                  tag: "Tôn giáo",
                  desc: "Khám phá vì sao Kailash được tôn kính bởi 4 tôn giáo lớn: Phật giáo, Hindu giáo, Đạo Jain và Đạo Bon cổ xưa."
                },
                {
                  title: "Núi Kailash là gì? Vì sao gọi là “Trục vũ trụ” của thế giới?",
                  link: "/nui-kailash-la-gi",
                  img: "https://media.fittour.vn/uploads/2025/04/nui-kailash-la-gi.webp",
                  tag: "Văn hoá",
                  desc: "Kiến thức địa lý và tâm linh đằng sau danh xưng 'Trục của thế giới' - nơi giao thoa giữa trời và đất."
                },
                {
                  title: "Thông Tin Cần Biết Khi Hành Hương Núi Kailash",
                  link: "/thong-tin-can-biet-hanh-huong-nui-kailash",
                  img: "https://media.fittour.vn/uploads/2025/04/thong-tin-can-biet-khi-hanh-huong-nui-kailash.webp",
                  tag: "Thông tin",
                  desc: "Tổng hợp toàn bộ kiến thức thiết thực từ thời tiết, tiền tệ, liên lạc cho đến văn hoá địa phương để có chuyến đi trọn vẹn."
                }
              ].map((article, i) => (
                <a key={i} href={article.link} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 snap-center shrink-0" style={{ width: 'calc((100% - 72px) / 3.5)', minWidth: 'min(280px, 85vw)' }}>
                  <div className="aspect-video bg-stone-200 overflow-hidden relative">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-mono font-bold bg-amber-700 text-white px-3 py-1 rounded-full uppercase shadow-md">{article.tag}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="font-sans text-sm text-stone-600 line-clamp-3 mb-6">
                      {article.desc}
                    </p>
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
              <a href="/blog/" className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-amber-700 transition-colors shadow-md">
                Xem thêm bài viết <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          </section>

          <section id="chi-phi" className="scroll-mt-24 mt-20">
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-700">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Các Khoản Chi Phí Cần Chuẩn Bị</h3>
                  <p className="text-stone-500 mt-1">Ngân sách đi Tây Tạng phụ thuộc rất nhiều vào mùa vụ và tiêu chuẩn dịch vụ bạn chọn.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                  <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-xs">1</span>
                    Chi phí cố định bắt buộc
                  </h4>
                  <ul className="space-y-3 text-sm text-stone-600">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"/> <strong>Visa & Giấy phép:</strong> Visa đoàn Trung Quốc, Tibet Travel Permit, Alien's Permit, Military Permit.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"/> <strong>Vé máy bay:</strong> Quốc tế đến Trung Quốc (Thành Đô/Trùng Khánh) và Nội địa bay lên Lhasa.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"/> <strong>Xe cộ:</strong> Phải là xe địa hình hoặc bus du lịch chuyên dụng do công ty du lịch Tạng cấp phép.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"/> <strong>Vé tham quan:</strong> Potala, Đại Chiêu, phí vào khu bảo tồn Kailash.</li>
                  </ul>
                </div>

                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                  <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-xs">2</span>
                    Biến phí theo nhu cầu
                  </h4>
                  <ul className="space-y-3 text-sm text-stone-600">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"/> <strong>Khách sạn:</strong> Lưu trú 3 sao sẽ rẻ hơn đáng kể so với 5 sao quốc tế như InterContinental Lhasa hay Songtsam.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"/> <strong>Ăn uống:</strong> Nhà hàng đặc sản hay ăn theo tiêu chuẩn đoàn.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"/> <strong>Hỗ trợ Kora:</strong> Thuê ngựa, thuê porter vác đồ trong 3 ngày trekking quanh núi.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"/> <strong>Bảo hiểm & Y tế:</strong> Gói bảo hiểm cao cấp và bình oxy cá nhân y tế.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-stone-950 text-stone-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-xl">
                <div className="max-w-2xl">
                  <span className="font-mono text-[10px] text-amber-500 font-bold uppercase tracking-widest block mb-2">Tự Túc Hay Mua Tour?</span>
                  <p className="text-stone-400 font-sans leading-relaxed text-justify">
                    Trung Quốc <strong className="text-white">không cấp phép du lịch tự túc cho người nước ngoài tại Tây Tạng</strong>. Bạn bắt buộc phải đi qua một công ty du lịch để xin TTP (Tibet Travel Permit) và phải có Hướng dẫn viên địa phương đi kèm suốt tuyến. Việc đi tour trọn gói của agency uy tín giúp bạn tận dụng được giá booking doanh nghiệp, được hỗ trợ y tế chuyên nghiệp và không phải lo lắng về thủ tục giấy tờ.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col gap-3 w-full md:w-auto">
                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-500 font-semibold px-4 py-2 border border-amber-900/30 bg-amber-900/10 rounded-full">
                    <span>FIT TOUR BẢO VỆ Y KHOA</span>
                    <Heart className="w-4 h-4" />
                  </div>
                  <a href="https://thericetour.com/tour/tour-hanh-huong-nui-kailash-12n11d" className="px-6 py-3 bg-white text-stone-900 font-bold text-center rounded-xl hover:bg-stone-100 transition-colors" target="_blank" rel="noopener noreferrer">
                    Xem Báo Giá Tour
                  </a>
                </div>
              </div>
            </div>
          </section>



        <section id="chuan-bi" className="scroll-mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-stone-900 mb-12">Chuẩn Bị Hành Trang Trước Giờ G</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-amber-700" />
                Visa Trung Quốc & TTP
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
                    <h4 className="font-bold text-stone-900 text-sm">Tiền Mặt & Ứng Dụng</h4>
                    <p className="text-xs text-stone-500 mt-1">Nên mang tiền mặt CNY và cài sẵn Alipay/WeChat Pay vì thẻ quốc tế ít phổ biến.</p>
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
              <h3 className="text-red-700 font-bold text-xl mb-2 uppercase tracking-wide">Tuyệt Đối Không Mang Theo & Lưu Ý</h3>
              <div className="text-red-900 font-medium leading-relaxed">
                <p className="mb-2"><span className="font-bold">✕ Vape / Thuốc lá điện tử:</span> Trung Quốc cấm lưu hành Vape có hương vị (chỉ cho phép vị thuốc lá mộc). Thiết bị bắt buộc để trong hành lý xách tay.</p>
                <p className="mb-2"><span className="font-bold">✕ Bình khí nén / Oxy cá nhân:</span> Tuyệt đối không mang bình oxy nén lên máy bay vì nguy cơ cháy nổ (du khách có thể mua dễ dàng khi đến Tây Tạng).</p>
                <p className="mb-4"><span className="font-bold">⚠ Lưu ý Pin sạc dự phòng:</span> Bắt buộc phải có in rõ thông số dung lượng trên vỏ pin (không quá 20.000 mAh) và chỉ được xách tay.</p>
                <a href="https://thericetour.com/quy-dinh-mang-pin-du-phong-khi-du-lich-trung-quoc" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-700 text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-red-800 transition-colors shadow-sm">
                  Xem chi tiết quy định Pin sạc dự phòng →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="tour" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Lựa Chọn Hành Trình Tuyệt Bút</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Được thiết kế tối ưu độ an toàn cho người Việt bởi FIT TOUR.</p>
          </div>

          <div className="max-w-3xl mx-auto px-4 md:px-0">
            {TOURS.map(tour => (
              <a 
                key={tour.id}
                href={tour.link}
                className="bg-white rounded-[2rem] border border-stone-200 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-full aspect-video relative overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="text-xs font-mono font-bold bg-amber-700 text-white px-4 py-1.5 rounded-full uppercase shadow-md">
                      {tour.tag}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-[11px] text-amber-700 font-bold bg-amber-50 px-3 py-1 rounded-md uppercase tracking-widest">{tour.duration}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors">
                      {tour.title}
                    </h3>
                    <p className="font-sans text-sm text-stone-500 italic mb-6">"{tour.vibe}"</p>
                    <ul className="space-y-4 text-base text-stone-700">
                      {tour.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-2 border-t border-stone-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-500 font-mono block uppercase mb-1">Giá từ</span>
                      <span className="font-mono text-2xl md:text-3xl font-extrabold text-stone-900">{tour.price}</span>
                    </div>
                    <div className="bg-stone-950 group-hover:bg-amber-700 text-white rounded-2xl px-6 py-3 text-sm font-bold tracking-wider transition-colors shadow-md flex items-center justify-center w-full sm:w-auto gap-2">
                      Xem Chi Tiết <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
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
                  "Túi chườm nước nóng cao su ở trại Manasarovar ban đêm là thứ tôi nhớ nhất. Nó đã cứu rỗi thanh xuân của tôi."
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
                Toàn bộ nội dung cẩm nang được đúc kết từ những tư liệu khảo sát thực tế, kinh nghiệm thiết kế tour và dẫn đoàn của tập thể chuyên gia FIT Tour trong suốt nhiều năm gắn bó với vùng đất Kailash.
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
              <div className="flex-1 text-center md:text-left w-full pb-4">
                <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase block mb-4">CỐ VẤN CHUYÊN MÔN & CỘNG TÁC TƯ LIỆU</span>
                <div className="flex justify-start md:justify-start gap-4 lg:gap-6 flex-wrap">
                  {[
                    { name: "Max Vũ", role: "Founder", img: "https://media.fittour.vn/uploads/max-vu-founder-fit-tour.webp", link: "/max-vu" },
                    { name: "Dương Gia Tường", role: "Tour Guide", img: "https://media.fittour.vn/uploads/huong-dan-vien-duong-gia-tuong-ho-bang-dong-bac-a.webp", link: "/hdv-duong-gia-tuong" },
                    { name: "Nguyễn Tuấn Anh", role: "Tour Leader | MC", img: "https://media.fittour.vn/uploads/2025/04/hdv-nguyen-tuan-anh-fit-tour.webp", link: "" },
                    { name: "Tiêu Văn Sang", role: "HDV Quốc Tế", img: "https://media.fittour.vn/uploads/2025/04/hdv-tieu-van-sang-fittour.webp", link: "/hdv-tieu-sang" },
                    { name: "Trần Quốc Thịnh", role: "Project Manager", img: "https://media.fittour.vn/uploads/2024/05/trip-planner-tran-thinh.webp", link: "https://dulichcoguu.com/tran-quoc-thinh/" },
                    { name: "Đặng Trần Bích Quyên", role: "Thạc Sĩ – MC – TL", img: "https://media.fittour.vn/uploads/2025/04/HDV-dang-tran-bich-quyen-fittour.webp", link: "" },
                    { name: "Nguyễn Hồ Đông Hải", role: "Outbound Operator", img: "https://media.fittour.vn/uploads/2025/05/hdv-nguyen-ho-dong-hai-fittour.webp", link: "/dong-hai" }
                  ].map((collab, idx) => {
                    const content = (
                      <div className="flex items-center gap-3 group shrink-0">
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
                      <a href={collab.link} key={idx} className="block cursor-pointer shrink-0">
                        {content}
                      </a>
                    ) : (
                      <div key={idx} className="shrink-0">
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
