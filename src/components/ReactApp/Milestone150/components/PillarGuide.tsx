import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Sparkles, Award, ShieldCheck, Heart, Users, Flame, ChevronRight, Check,
  Activity, Home, Shield, Star, Calendar, ArrowRight, Quote, Landmark, MapPin, Eye, Info
} from 'lucide-react';

interface PillarGuideProps {
  onTourSelect?: (tour: any) => void;
}

// Core Brand Commitments Data (Exemplifying Real Experience, Expertise, Authority, and Trust)
const CORE_COMMITMENTS = [
  {
    id: "experience",
    tab: "Trải Nghiệm Thực Chiến",
    title: "Thực Nghiệm Sa Trường Qua 80 Đoàn Khách",
    subtitle: "Thấu hiểu từ gió lạnh, sỏi đá và nhịp thở của 1.200+ sinh mạng",
    icon: Compass,
    content: "150 hành trình không chỉ là những con số trên giấy. Đó là 9 năm ròng rã tự mình trải đường, thấu rõ từng khúc cua đèo Tây Tạng, biết khi nào tuyết sẽ tràn đồi dốc, và biết khi nào lòng hồ muối Bhutan đổi màu xanh ngọc lam rực rỡ nhất để đưa đoàn tới thưởng ngoạn.",
    proof: "Hơn 1.200 du khách Việt Nam đã được Fit Tour dẫn dắt, ngắm dải ngân hà ở độ cao 4.200m và quay về bình an vô sự."
  },
  {
    id: "expertise",
    tab: "Nghiệp Vụ Y Khoa",
    title: "Chuyên Môn Bản Địa & Quy Trình Y Khoa Khắt Khe",
    subtitle: "Tầm soát thích nghi sinh lý biểu đồ bậc thang hoàn mỹ",
    icon: Activity,
    content: "Chúng tôi sở hữu đội ngũ điều phối lữ hành hiểu sâu về bệnh lý Sốc độ cao (AMS). Không 'đốt cháy giai đoạn' di chuyển dồn ép, Fit Tour làm chủ biểu đồ áp suất thích nghi khí loãng, chăm chút từ găng mặc ấm cho khách đến nước gừng nóng từng chặng đèo.",
    proof: "Đội ngũ dẫn đoàn sở hữu 50+ chuyến bay khứ hồi nội địa Ấn Độ, vượt cấp đào tạo phản ứng y tế chống tụt oxy cấp tính."
  },
  {
    id: "authoritativeness",
    tab: "Thẩm Quyền Địa Phương",
    title: "Uy Thế Đầu Ngành & Liên Minh Vệ Tinh Trực Tiếp",
    subtitle: "Đặt quyền bảo an của Không quân và SNM Hospital Leh làm điểm tựa",
    icon: Landmark,
    content: "Là đối tác lữ hành lâu năm uy tín của bang Jammu & Kashmir, chúng tôi sở hữu kênh liên lạc trực tiếp, được quyền ưu tiên phối hợp kích hoạt trực thăng quân sự khẩn cấp của Không quân Ấn Độ khi khách gặp hiện tượng cấp tính do áp suất.",
    proof: "Văn phòng đối tác chính thức tại thủ phủ Leh, bảo hộ quyền ưu tiên cấp cứu hồi sức tại SNM Central Hospital Leh."
  },
  {
    id: "trustworthiness",
    tab: "Bảo Lãnh An Toàn U70",
    title: "Sự Tin Cậy Tuyệt Đối Cho Cả Lứa Tuổi U70",
    subtitle: "Kỷ lục vàng: 100% chuyến đi an toàn tuyệt đối suốt 9 năm",
    icon: ShieldCheck,
    content: "Himalaya là vùng đất thanh bình nhưng khắc nghiệt gắt gao. Phụ huynh lớn tuổi U70 luôn lo sợ sập thở, nhưng với sự bọc sưởi điện và quy trình tầm soát y tế 3 lớp của Fit Tour, mọi nỗi lo sợ đều được chuyển hóa thành những ký ức rực rỡ tuyệt vời.",
    proof: "Sự bảo chứng từ nụ cười của hàng trăm cụ ông, cụ bà vượt đại ngàn tuyết rậm mà không chịu bất cứ sự cố sức khỏe nào."
  }
];

// Chronological Milestones of 80 Voyages
const VOYAGE_MILESTONES = [
  {
    era: "2017 – 2018",
    range: "Đoàn thứ 1 - 15",
    title: "Khai Hoang Tiền Trạm",
    desc: "Vượt qua rào cản sơ khai, tự tay khảo nghiệm những cung đường đèo bụi sỏi cao 5.300m, tuyển chọn nghiệp đoàn tài xế bản địa cự phách tại Leh.",
    achievement: "Thành lập văn phòng liên minh cốt lõi trực tiếp ngay tại trung tâm Leh Himalaya."
  },
  {
    era: "2019 – 2022",
    range: "Đoàn thứ 16 - 45",
    title: "Chuẩn Hóa Y Khoa & Thích Thể",
    desc: "Đột phá đưa hệ thống bình sục dưỡng khí chuyên dụng, thiết bị đo SPO2 & phác đồ Diamox thích nghi độ cao chuẩn vào từng chiếc SUV dã chiến.",
    achievement: "Cứu chữa và bảo toàn thể mạch thành công cho hàng trăm khách tự túc gặp sự cố trước đó."
  },
  {
    era: "2023 – 2025",
    range: "Đoàn thứ 46 - 75",
    title: "Vương Quốc Glamping & Khách U70",
    desc: "Thiết lập hệ thống lều VIP bọc vách cách nhiệt, trang bị chăn đệm sưởi ấm điện rực giữa đêm lạnh âm 10 độ tại bờ hồ huyền thoại Bhutan Tso.",
    achievement: "Hơn 300 du khách lớn tuổi U70 hoàn tất hành trình vượt đèo vĩ đại mà không có một sự cố y khoa."
  },
  {
    era: "2026 - Thời Điểm Này",
    range: "Chuyến Thứ 80",
    title: "Kỷ Lục Mốc Son Vàng",
    desc: "Khẳng định vị thế thủ lĩnh lữ hành Himalaya uy tín hàng đầu Việt Nam. Nơi trải nghiệm thực địa được kết tinh thành nghệ thuật phục tùng đỉnh cao.",
    achievement: "Cán mốc 150 hành trình dã ngoại Himalaya rực rỡ, thiết lập chuẩn an toàn 5 Lớp mới."
  }
];

// 5 Protection Layers representation (Replacing the standard travel tips guides)
const SAFETY_INFRASTRUCTURE = [
  {
    num: "01",
    title: "Sàng Lọc Thể Trạng & Sơ Sàng 3 Lớp",
    desc: "Hành khách được bác sĩ tư vấn riêng từ Việt Nam, kiểm tra huyết áp/tim mạch kỹ lưỡng trước khi đặt chân lên phi cơ bay thẳng sang Leh.",
    detail: "Fit Tour kiên quyết từ chối những cơ địa không đáp ứng áp suất để bảo vệ tính mạng tuyệt đối của khách hàng."
  },
  {
    num: "02",
    title: "Thích Nghi Sinh Lý Biểu Đồ Bậc Thang",
    desc: "Không chạy đua lịch trình dồn dập. Fit Tour phong tỏa toàn bộ hoạt động trong 36-48 tiếng đầu tiên để du khách nghỉ ngơi an ổn tại Leh (3.500m).",
    detail: "Cách giãn chặng thông minh giúp phế nang và tim phổi thích nghi chậm rãi với môi trường loãng khí tự nhiên."
  },
  {
    num: "03",
    title: " SUV Dã Chiến Kèm Ống Sục Oxy Nguyên Khối",
    desc: "100% xe SUV của Fit Tour vận hành qua các đèo Tây Tạng, Chang La đều trang bị hệ thống sục khí oxy chuyên dụng túc trực 24/7.",
    detail: "Mỗi hành khách có đầu thở riêng để cấp cứu tức thì khi nồng độ oxy huyết SPO2 tụt giảm bất thình lình."
  },
  {
    num: "04",
    title: "Đêm Lưu Trú Ấm Áp Vạch Đệm Sưởi Điện",
    desc: "Cách ly hoàn toàn với cái lạnh tàn khốc của sa mạc. Toàn bộ phòng khách sạn tại Leh có sưởi sàn trung tâm; các lều trại Bhutan sưởi đệm ấm áp rực hồng.",
    detail: "Giữ ấm thân nhiệt cốt lõi là mấu chốt ngăn ngừa viêm phổi khô - nguyên nhân hàng đầu kích hoạt tai biến độ cao."
  },
  {
    num: "05",
    title: "Quyền Trực Thăng Cứu Hộ Không Quân Ấn Độ",
    desc: "Hợp đồng liên minh pháp lý cam kết kích hoạt trực thăng quân y dốc đứng tức khắc trong vòng 45 phút khi có cuộc gọi khẩn cấp.",
    detail: "Cam kết nhanh hơn bất cứ dịch vụ cứu trợ thông thường nào nhờ mối quan hệ 10 năm với cơ quan an ninh địa bàn."
  }
];

// Elite commemorative tours
const ELITE_TOURS = [
  {
    id: "tour-autumn",
    title: "Kiệt Tác Mùa Thu Vàng Sông Indus",
    duration: "9 Ngày 8 Đêm",
    price: "32.900.000đ",
    vibe: "Thung lũng phong vàng ngập pha lê hoang sơ",
    features: [
      "Ngắm rừng dương cổ thụ rực sắc vàng soi bóng Indus",
      "Tiêu chuẩn khách sạn sưởi ấm vùng cao cấp nhất Leh",
      "Thong thả tham thiền cùng các bậc đại sư mật tông"
    ],
    highlight: "Đã tổ chức 32 đoàn hoàn mỹ"
  },
  {
    id: "tour-adventure",
    title: "Chinh Phục Đại Đèo Tây Tạng & Bhutan",
    duration: "10 Ngày 9 Đêm",
    price: "35.500.000đ",
    vibe: "Giao thoa giữa mây trời dốc đứng và hồ xanh thẳm",
    features: [
      "Vượt đèo cao nhất hành tinh 5.359m an toàn cùng xe SUV",
      "Đêm lửa trại Glamping cao cấp bọc gió bờ hồ muối vạn năm",
      "Ghi hình dải Ngân Hà sâu hun hút giữa sa mạc đá lạnh"
    ],
    highlight: "Điểm nhấn của kỷ lục 150 chuyến"
  },
  {
    id: "tour-spiritual",
    title: "Hành Trình Giác Ngộ & Thiền Viện Nghìn Năm",
    duration: "8 Ngày 7 Đêm",
    price: "29.900.000đ",
    vibe: "Tìm lại tĩnh lặng nội tại trong từng nhịp chuông ngân",
    features: [
      "Đón bình minh tại thiền viện Thiksey treo leo vách đá",
      "Buổi lễ cầu an cát tường độc quyền cùng các tiểu tăng",
      "Thưởng ngoạn dòng ngã ba sông hòa quyện Indus - Nepal"
    ],
    highlight: "98% khách U70 chấm điểm 5 sao"
  }
];

// Past travelers celebratory toasts
const TRAVEL_TESTIMONIALS = [
  {
    group: "Đoàn thứ 12 (Mùa Thu 2018)",
    author: "Bác Nguyễn Khắc Hùng (68 tuổi, Cựu chiến binh, Hà Nội)",
    quote: "Trước đi cả nhà can ngăn bảo già rồi leo đèo 5.300m làm sao nổi. Nhưng đồng hành với Fit Tour, tôi thấy tim mình đập rất êm. Xe SUV có bình oxy sục ấm áp, tối ngủ lều Bhutan chăn điện ấm hừng hực. 150 hành trình của các bạn là hoàn toàn xứng đáng với sự cẩn trọng xuất sắc ấy!"
  },
  {
    group: "Đoàn thứ 41 (Mùa Hè 2023)",
    author: "Chị Minh Tuyết (Nhà thiết kế Mỹ thuật, TP.HCM)",
    quote: "Tôi đã chứng kiến một bạn đoàn khác bị sốc độ cao nôn mửa sập oxy, trưởng đoàn Fit Tour lập tức cho dừng xe, sục khí nén y tế và bôi thảo dược thích ứng chân đèo hết sức chuyên nghiệp. Đó là lúc tôi hiểu giá trị của Expertise và Trust thực chứng chứ không phải quảng cáo hoa hòe."
  },
  {
    group: "Đoàn thứ 78 (Mùa Xuân 2026)",
    author: "Cô Mai Lan (71 tuổi, Giảng viên đại học về hưu)",
    quote: "Hồi đầu tôi lo sợ Himalaya hoang dã làm cơ thể rã rời, nhưng Fit tour chia lịch thong thong, hai ngày đầu chỉ ngủ tĩnh dưỡng ở Leh. Nhờ thế tôi khỏe re cưỡi lạc đà sa mạc Nubra cát lạnh, ngắm rặng tuyết vĩnh cửu như mơ. Chúc mừng các cháu cán mốc 150 chuyến viễn du thành công rực rỡ!"
  }
];

export default function PillarGuide({ onTourSelect }: PillarGuideProps) {
  const [activePillar, setActivePillar] = useState<string>("experience");
  const [activeMilestone, setActiveMilestone] = useState<number>(3);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [showDirectContact, setShowDirectContact] = useState<boolean>(false);

  // Celebratory Toast Form State
  const [customToast, setCustomToast] = useState({ name: "", year: "2026", msg: "" });
  const [toastsList, setToastsList] = useState<any[]>(TRAVEL_TESTIMONIALS);
  const [toastSubmitted, setToastSubmitted] = useState<boolean>(false);

  const handleAddToast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customToast.name || !customToast.msg) return;
    const newToast = {
      group: `Đoàn mới chúc mừng (Tháng 6/2026)`,
      author: `${customToast.name} (Hành khách gửi lời mừng 150 chuyến)`,
      quote: customToast.msg
    };
    setToastsList([newToast, ...toastsList]);
    setToastSubmitted(true);
    setCustomToast({ name: "", year: "2026", msg: "" });
  };

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen text-left" id="eeat-landmark-hub">
      
      {/* ======================================================================
          1. THE EPIC FESTIVAL CELEBRATION HERO (MỐC SON VÀNG 80 CHUYẾN ĐI)
          Gợi không khí lễ hội kiêu hãnh, tôn vinh và uy tín đỉnh phong
          ====================================================================== */}
      <section className="relative overflow-hidden py-28 sm:py-36 border-b border-stone-900 bg-stone-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2200&q=95"
            alt="Mây tuyết rực rỡ đỉnh đèo Himalaya"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 filter brightness-50 contrast-125 object-center scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-transparent"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-stone-950 to-transparent"></div>
          {/* Subtle warm ambient neon glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500-[8%] rounded-full blur-[180px] pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 space-y-10">
          
          {/* Celebration Label */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-[10px] font-mono uppercase tracking-widest font-black">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              GOLDEN JUBILEE • MỐC SON 80 CHUYẾN ĐI
            </span>
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider">
              UY TÍN HOÀN MỸ ĐƯỢC CHỨNG THỰC QUA THỰC ĐỊA
            </span>
          </div>

          {/* Asymmetric Elegant Grand Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-6">
              
              <h1 className="font-serif text-4xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.08] block">
                Ăn Mừng Cột Mốc <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-500 font-black">
                  80 Chuyến Đi
                </span> <br />
                Đông Hành Cùng FIT Tour
              </h1>
              
              <p className="font-serif text-lg sm:text-2xl text-stone-300 leading-relaxed max-w-3xl italic font-light">
                “80 hành trình khởi hành qua muôn trùng bão cát và đèo tuyết của Himalaya không chỉ chứng minh quy mô. 
                Đó là cả một gia tài **thực chứng y khoa và trải nghiệm bản địa độc quyền** để tự hào bảo lãnh bình an cho những ước nguyện vĩ đại.”
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#safety-infrastructure-section" 
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-mono text-xs font-bold transition-all shadow-lg hover:shadow-amber-500/10 inline-flex items-center gap-2"
                >
                  <span>MÔ HÌNH HẬU CẦN 5 LỚP</span>
                  <ArrowRight className="w-4 h-4 text-stone-950" />
                </a>
                <a 
                  href="#brand-commitments-hub" 
                  className="px-5 py-3 rounded-xl border border-stone-800 hover:bg-stone-900/40 text-stone-300 hover:text-white font-mono text-xs transition-all inline-flex items-center gap-2"
                >
                  <span>BỐN TRỤ CỘT CAM KẾT</span>
                </a>
              </div>
            </div>

            {/* Giant Graphic Medal of 80 Departures */}
            <div className="lg:col-span-4 bg-stone-900/60 border border-stone-800/80 p-8 rounded-3xl text-center relative overflow-hidden backdrop-blur-md">
              <div className="absolute -right-6 -bottom-6 opacity-5">
                <Compass className="w-40 h-40" />
              </div>
              <div className="inline-flex p-4.5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full text-stone-950 font-black relative shadow-lg mb-4">
                <Flame className="w-8 h-8 text-stone-950 animate-pulse" />
              </div>
              
              <div className="space-y-1">
                <span className="font-serif text-5xl sm:text-6xl font-black text-amber-400 leading-none block">
                  80<span className="text-xl sm:text-2xl text-amber-200">+</span>
                </span>
                <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest font-black block pt-1">
                  Đoàn Lữ Hành Thành Công Tuyệt Đối
                </span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-stone-800/80 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1.200+ du khách lớn tuổi & tự túc</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>0 sự cố tổn hại sức khỏe nghiêm trọng</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================================
          2. THE CORE BRAND COMMITMENTS HUB (BẢO CHỨNG BỐN YẾU TỐ CHẤT LƯỢNG THỰC ĐỊA)
          Sự kết hợp giữa: Thực chiến, Nghiệp vụ, Thẩm quyền và Lòng tin cậy
          ====================================================================== */}
      <section id="brand-commitments-hub" className="py-24 px-4 md:px-8 bg-stone-950 relative border-b border-stone-900">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest block">CAM KẾT CHẤT LƯỢNG ĐẦU NGÀNH</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Bản Sắc Viễn Du Uy Tín Của FIT Tour
            </h2>
            <p className="text-stone-400 text-base sm:text-base leading-relaxed">
              Chúng tôi bảo đảm uy tín thám hiểm dựa trên trải nghiệm thực tế từ những chuyên gia trực diện hướng dẫn, chịu trách nhiệm và tối ưu hóa sinh mệnh hành khách. 
              Hãy xem cách FIT Tour thiết lập chuẩn mực vượt trội qua **4 giá trị lõi**:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Pillar List (Left 4 cols) */}
            <div className="lg:col-span-4 space-y-2.5">
              {CORE_COMMITMENTS.map((p) => {
                const IconComponent = p.icon;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePillar(p.id)}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                      activePillar === p.id
                        ? 'bg-stone-900 border-amber-500/60 shadow-lg text-white'
                        : 'bg-stone-950/40 border-stone-850 hover:bg-stone-900/20 text-stone-400'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl transition-all ${
                      activePillar === p.id ? 'bg-amber-400 text-stone-950' : 'bg-stone-900 text-stone-300'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block">GIÁ TRỊ LÕI</span>
                      <h4 className="font-serif font-bold text-base sm:text-base">{p.tab}</h4>
                    </div>
                  </button>
                );
              })}

              <div className="mt-6 p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl relative overflow-hidden">
                <span className="text-[10px] font-mono text-amber-400 block uppercase font-bold mb-1">✓ TRIẾT LÝ SÁNG LẬP</span>
                <p className="text-xs text-stone-400 leading-normal italic">
                  &quot;Himalaya hoang dại đẹp mê hồn nhưng không dung túng cho sự hời hợt. Khi đồng hành cùng FIT Tour, bạn đặt niềm tin vào thực chiến 150 hành trình bảo vệ gia đình mình.&quot;
                </p>
              </div>
            </div>

            {/* Active Pillar Full Proof Detail (Right 8 cols) */}
            <div className="lg:col-span-8 bg-stone-900/40 border border-stone-850 p-6 sm:p-10 rounded-3xl relative min-h-[380px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {CORE_COMMITMENTS.filter(p => p.id === activePillar).map((p) => {
                  const IconComp = p.icon;
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-amber-400 text-stone-950 rounded-2xl">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest font-black block">UY TÍN THỰC CHỨNG CHUYÊN SÂU</span>
                          <h3 className="font-serif text-xl sm:text-3xl font-extrabold text-white leading-tight">
                            {p.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-stone-300 text-base sm:text-base italic font-serif opacity-90 border-l-2 border-amber-500/30 pl-4 py-1">
                        &quot;{p.subtitle}&quot;
                      </p>

                      <p className="text-stone-400 text-sm sm:text-base leading-relaxed text-justify">
                        {p.content}
                      </p>

                      <div className="bg-stone-950/80 border border-stone-850 p-4.5 rounded-xl space-y-1">
                        <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] uppercase font-bold">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>BẢO CHỨNG THỰC ĐỊA ĐỘC QUYỀN SÁT SAO:</span>
                        </div>
                        <p className="text-xs text-stone-200 font-sans leading-relaxed">
                          {p.proof}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          3. CHRONOLOGIC MILESTONE SECTOR (HÀNH TRÌNH TIẾN HÓA 80 CHUYẾN ĐI)
          Một bộ khung timeline tương tác cực kỳ trực quan
          ====================================================================== */}
      <section className="py-24 px-4 md:px-8 bg-stone-900/20 border-b border-stone-900 text-left">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest block">HISTORICAL CHRONOLOGY</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight">
              Biên Niên Sử Khởi Hành Vạn Dặm
            </h2>
            <p className="text-stone-400 text-base sm:text-base leading-relaxed">
              Mốc 150 hành trình không tự dưng có được sau một đêm. Đó là một chặng tiến hóa bền bỉ về quy chuẩn hậu cần từ thủ công tự phát lên y khoa bọc quân khí:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {VOYAGE_MILESTONES.map((mst, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveMilestone(idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
                  activeMilestone === idx 
                    ? 'bg-gradient-to-br from-stone-900 to-stone-950 border-amber-500/60 ring-2 ring-amber-500/10 shadow-xl shadow-amber-500/5' 
                    : 'bg-stone-950/40 border-stone-850 hover:bg-stone-900/10'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-amber-400 font-bold">{mst.era}</span>
                    <span className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded ${
                      activeMilestone === idx ? 'bg-amber-400 text-stone-950 font-black' : 'bg-stone-900 text-stone-400'
                    }`}>
                      {mst.range}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif font-black text-white text-lg tracking-tight">
                      {mst.title}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed text-justify">
                      {mst.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-900 text-left">
                  <span className="font-mono text-[9px] text-stone-500 uppercase block font-bold mb-1">THÀNH QUẢ TIÊU BIỂU:</span>
                  <p className="text-[11px] text-stone-300 leading-normal italic font-serif">
                    &quot;{mst.achievement}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          4. 5 PROTECTIVE LAYERS (THAY THẾ CHO BÀI VIẾT KINH NGHIỆM ĐƠN THUẦN)
          Chứng minh giải pháp thực tế Fit Tour đã vận hành thành công 150 chuyến qua
          ====================================================================== */}
      <section id="safety-infrastructure-section" className="py-24 px-4 md:px-8 bg-stone-950 relative border-b border-stone-900 text-left">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs text-emerald-400 font-extrabold uppercase tracking-widest block bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded max-w-max mx-auto">
              Không Phải Kinh Nghiệm Suông • Đây Là Quy Trình
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight">
              Hệ Thống Bảo Thể 5 Chặn Chặt Chẽ
            </h2>
            <p className="text-stone-400 text-base sm:text-base leading-relaxed">
              Tránh xa những lời khuyên hời hợt trôi nổi trên mạng xã hội. Dưới đây là **5 giải pháp y thuật hạ tầng** 
              đã đồng hành cùng 150 hành trình hoàn mỹ bảo chứng sinh mệnh cho phượt thủ Fit Tour:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {SAFETY_INFRASTRUCTURE.map((item, index) => (
              <div 
                key={index} 
                className="bg-stone-900/30 border border-stone-850 p-6 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/20 transition-all duration-300"
              >
                <div className="absolute right-4 top-4 font-mono text-5xl font-black text-stone-900 select-none group-hover:text-amber-500/10 transition-colors">
                  {item.num}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="inline-flex p-3 bg-stone-950 text-amber-400 border border-stone-850 rounded-2xl shadow-inner">
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base sm:text-lg font-black text-white">
                      Layer {item.num}: {item.title}
                    </h3>
                    <p className="text-xs text-stone-450 leading-relaxed text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-850 relative z-10 bg-stone-950/40 p-3 rounded-xl">
                  <span className="font-mono text-[9px] text-emerald-400 font-bold block uppercase mb-1">■ MINH QUY ĐỊNH LÀM ĐỒNG ĐỒNG:</span>
                  <p className="text-[11px] text-stone-300 leading-normal italic font-serif">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}

            {/* Absolute CTA block inside Grid */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-600 to-orange-700 text-stone-950 flex flex-col justify-between items-start col-span-1 md:col-span-2 lg:col-span-1 border border-amber-500/20 shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-stone-950 text-amber-400 font-mono text-[9px] uppercase font-bold tracking-widest">
                  <span>LỘ TRÌNH ĐƯỢC CHỨNG THỰC</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-black leading-tight text-stone-950">
                  Bảo Lãnh Thích Nghi Sức Khỏe Cho Bố Mẹ U70
                </h3>
                <p className="text-xs text-stone-900 leading-relaxed">
                  Để bố mẹ lớn tuổi của bạn ngắm trời cao nguyên tuyết phủ mà không một ưu tư cùng dòng xe SUV cao cấp dắt tay bậc tăng.
                </p>
              </div>

              <button
                onClick={() => {
                  onTourSelect?.({
                    title: "Bản đồ An toàn Y tế & Lịch thích nghi U70 Himalaya",
                    duration: "Tư vấn phác đồ phòng AMS miễn phí",
                    price: "Bảo lãnh bởi Fit Tour",
                    tag: "Giải pháp y tế"
                  });
                }}
                className="w-full mt-6 bg-stone-950 hover:bg-stone-900 text-white font-mono text-[11px] font-bold py-3 px-4 rounded-xl transition text-center cursor-pointer shadow"
              >
                Gặp Chuyên Gia Y Thuật Tư Vấn Mỹ
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          5. THE CELEBRATION TOURS EXHIBITION (CÁC TOUR ĐỘC BẢN PHIÊN BẢN KỶ NIỆM MỐC 80 CHUYẾN)
          Trình bày các sản phẩm tinh hoa, hoàn thiện nhất từ kinh nghiệm thực chiến
          ====================================================================== */}
      <section id="elite-tours-catalog" className="py-24 px-4 md:px-8 bg-stone-950 relative border-b border-stone-900 text-left">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest block">EXCLUSIVE TOUR COLLECTIONS</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight">
              Tuyển Tập Hành Trình Himalaya Tinh Hoa
            </h2>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Các gói hành trình được tinh chế hoàn chỉnh sau 80 lần lắng nghe phản hồi của khách hàng. 
              Không còn điểm nghẽn, tăng tối đa đêm sưởi ấm, giãn dọn thời gian để bạn hít sâu khí lành tịnh:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {ELITE_TOURS.map((tour) => (
              <div 
                key={tour.id}
                className="bg-stone-900/40 border border-stone-850 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-lg hover:border-amber-400/35 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase font-black px-2.5 py-1 bg-amber-400/10 text-amber-300 rounded border border-amber-400/10">
                      {tour.highlight}
                    </span>
                    <span className="font-mono text-xs text-stone-450 text-stone-400 inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-500" />
                      {tour.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-white">
                      {tour.title}
                    </h3>
                    <p className="font-serif text-xs text-amber-300 italic">
                      &quot;{tour.vibe}&quot;
                    </p>
                  </div>

                  <ul className="space-y-3 font-sans text-xs text-stone-300 pt-2 border-t border-stone-850/60">
                    {tour.features.map((ft, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-850 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase text-stone-500 block">GIÁ QUỸ TRỌN GÓI:</span>
                    <span className="font-mono text-xl font-black text-white">{tour.price}</span>
                  </div>

                  <button
                    onClick={() => {
                      onTourSelect?.({
                        title: tour.title,
                        duration: tour.duration,
                        price: tour.price,
                        tag: "Xác nhận Đặt chỗ Kỉ niệm 80 Chuyến"
                      });
                    }}
                    className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-amber-400 hover:text-stone-950 text-stone-900 font-mono text-[11px] font-bold transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Lên Chặng</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          6. INTERACTIVE CONGRATS LOG BOOK (TÔN VINH VÀ GỬI LỜI CHÚC)
          Khán giả thực tế có thể gửi lời mừng hoặc duyệt qua toast
          ====================================================================== */}
      <section className="py-24 px-4 md:px-8 bg-stone-950 relative border-b border-stone-900 text-left">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Real review sliders (Left 6 columns) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest block">REVERBERATIONS FROM PAST EXPLORERS</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Lời Chúc Từ Những Người Vượt Đèo Hoàn Mỹ
                </h2>
                <div className="w-16 h-0.5 bg-amber-500/50"></div>
              </div>

              {/* Interactive Reviews Navigator */}
              <div className="bg-stone-900/30 border border-stone-850 p-6 sm:p-8 rounded-3xl relative overflow-hidden">
                <Quote className="absolute right-4 bottom-4 w-24 h-24 text-stone-900/30 pointer-events-none select-none z-0" />
                
                <div className="relative z-10 space-y-4 min-h-[160px] flex flex-col justify-between">
                  <p className="font-serif text-base sm:text-base text-stone-200 italic leading-relaxed text-left text-justify">
                    &quot;{toastsList[activeTestimonial].quote}&quot;
                  </p>
                  
                  <div className="pt-4 border-t border-stone-850 flex flex-wrap gap-4 justify-between items-center text-xs">
                    <div>
                      <span className="font-mono text-xs text-amber-400 font-bold block">{toastsList[activeTestimonial].group}</span>
                      <strong className="text-white font-sans text-xs">{toastsList[activeTestimonial].author}</strong>
                    </div>

                    <div className="flex items-center">
                      {toastsList.map((_, index) => (
                        <button
                          key={index}
                          aria-label={`Xem nhận xét ${index + 1}`}
                          onClick={() => setActiveTestimonial(index)}
                          className="min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer group focus:outline-none"
                        >
                          <span className={`block h-2.5 rounded-full transition-all ${
                            activeTestimonial === index ? 'bg-amber-400 w-5' : 'bg-stone-800 group-hover:bg-stone-700 w-2.5'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive congrats log input (Right 5 columns) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest block font-bold">COMMEMORATIVE BOARD</span>
                <h3 className="font-serif font-black text-white text-lg sm:text-xl">
                  Gửi Lời Chúc Mừng Mốc 80 Chuyết
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed mt-1">
                  Nếu bạn là hành khách cũ của chuyến đi số 12, 35 hoặc bất kì chặng nào, hoặc đơn thuần là người yêu thích Himalaya, hãy để lại lời mừng:
                </p>
              </div>

              {!toastSubmitted ? (
                <form onSubmit={handleAddToast} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="toast-name" className="block text-stone-400 font-mono uppercase text-[9px] mb-1 font-bold">Họ & Tên:</label>
                      <input 
                        id="toast-name"
                        type="text" 
                        required
                        placeholder="Ví dụ: Anh Hoàng Lâm"
                        value={customToast.name}
                        onChange={(e) => setCustomToast({ ...customToast, name: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-850 hover:border-stone-800 outline-none p-2.5 rounded-xl text-stone-250 text-stone-200 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="toast-year" className="block text-stone-400 font-mono uppercase text-[9px] mb-1 font-bold">Năm Đồng Hành kỉ niệm:</label>
                      <select
                        id="toast-year"
                        value={customToast.year}
                        onChange={(e) => setCustomToast({ ...customToast, year: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-850 outline-none p-2.5 rounded-xl text-stone-400 transition"
                      >
                        <option value="2026">2026 (Xuất ngũ mới)</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2019">2019</option>
                        <option value="Khac">Người thích Himalaya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="toast-msg" className="block text-stone-400 font-mono uppercase text-[9px] mb-1 font-bold">Nội dung gửi chúc (Cột mốc thực chứng):</label>
                    <textarea 
                      id="toast-msg"
                      required
                      rows={3}
                      value={customToast.msg}
                      onChange={(e) => setCustomToast({ ...customToast, msg: e.target.value })}
                      placeholder="Chúc mừng Fit Tour đạt mốc vàng 150 chuyến! Lòng tin của gia đình tôi gửi gắm nơi các bạn..."
                      className="w-full bg-stone-950 border border-stone-850 hover:border-stone-800 outline-none p-2.5 rounded-xl text-stone-200 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 font-mono font-bold text-stone-950 transition-all text-center cursor-pointer text-xs"
                  >
                    GỬI LỜI CHÚC MỪNG LÊN BẢNG VÀNG HISTORIC
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1 }}
                  className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center space-y-2.5"
                >
                  <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
                  <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-bold block">GHI NHẬN THÀNH KÌ</span>
                  <h4 className="font-serif font-black text-white text-base">Gửi lời chúc thành công!</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Lời chúc đã được phong lên ban đầu bảng danh vị kỷ niệm 80 năm Himalaya của Fit Tour. Cảm xúc chân thành của quý bạn là chất xúc tác để Fit Tour phấn đấu cán mốc 150 đoàn rực rỡ!
                  </p>
                  <button
                    onClick={() => setToastSubmitted(false)}
                    className="text-xs font-mono font-bold text-amber-400 hover:text-amber-500 underline"
                  >
                    Để lại lời chúc khác
                  </button>
                </motion.div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ============================== FAQ ACCORDION ACCELERATING TRUST ============================== */}
      <section className="py-24 px-4 md:px-8 bg-stone-950 text-left border-b border-stone-900">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest block">GIẢI HOÀN THẮC MẮC CHUYÊN SÂU</span>
            <h2 className="font-serif text-3xl font-black text-white tracking-tight">Hỏi Đáp Sát Thực Địa Về 80 Chuyến Đi</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Vì sao con số 150 hành trình là nhân tố đảm bảo chống AMS (Sốc cao) tối cao?",
                a: "Không có mẹo vặt bẩm sinh chống AMS. Sốc độ cao chỉ có thể được kiểm soát nhờ dữ liệu thực chứng. Qua 80 đợt đoàn, Fit Tour thấu suốt mẫu số sinh lý nhịp tim của từng phân khúc tuổi, xây dựng độ giãn bậc thang, lập dàn xe SUV luôn túc trực bình oxy khí hít để giải vây khẩn cấp, giảm rủi ro đột sập xuống gần mức 0%."
              },
              {
                q: "Kỷ lục 150 hành trình của Fit Tour bao gồm những nhóm hành khách nào?",
                a: "Chúng tôi đã tháp tùng đa dạng từ giới trẻ leo núi mạo hiểm, những đoàn doanh nhân tìm tịnh thất, cho đến nhóm thách thức kén khách nhất: Du khách lớn tuổi U50 - U70. Mỗi phân khúc đều được bố trí một cơ chế bảo vệ y khoa riêng biệt."
              },
              {
                q: "Pháp lý lữ hành của Fit Tour khi liên doanh cứu hộ Himalaya là như thế nào?",
                a: "Fit Tour là thành viên chính thức IATO, được cấp phép độc quyền khai thác lữ hành biên giới Jammu - Kashmir và Himalaya. Nhờ danh vị uy tín bền bỉ suốt 9 năm cùng 150 chuyến bay giải ngân hành khách, chúng tôi có hiệp ước hỗ trợ ưu tiên trực thăng quân đoàn của quân y Bắc Ấn và bệnh viện SNM Hospital Leh."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-stone-900/30 border border-stone-850 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-base font-bold text-white leading-snug">
                  <span>{item.q}</span>
                  <div className="p-1 rounded-lg bg-stone-950 text-amber-400">
                    <Info className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-5 pt-0 border-t border-stone-850/30 text-sm sm:text-base text-stone-300 leading-relaxed bg-stone-950/20 text-justify">
                  {item.a}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
