import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Sparkles, ShieldCheck, Activity, Landmark, Calendar, ArrowRight, Quote, Flame, Info, HelpCircle, 
  Map, Scissors, FileText, BadgeAlert, Layers, Check, ChevronRight
} from 'lucide-react';

interface AvantGardeScrapbookGuideProps {
  onTourSelect?: (tour: any) => void;
}

const EXPERIENCES = [
  {
    id: "experience",
    tag: "LOG 01 // THỰC CHIẾN",
    title: "Vết Sẹo Thổ Nhưỡng Đi Qua 80 Mùa Tuyết Sụp",
    subtitle: "Chúng tôi nắm rõ từng hòn sỏi khóc trên đèo Himalaya",
    icon: Compass,
    color: "bg-amber-400",
    content: "80 lần tự mình dắt du khách đi qua lốc tuyết và cát mặn không phải là con số thống kê lấy thành tích. Đó là những đêm mất ngủ tính toán hướng gió tại Chang La, cảm thấu nhịp thở mệt nhoài của 1.200 con người để đưa ra quyết định quay đầu hay tiến bước chính xác từng giây.",
    proof: "1.200 lữ khách dưới dải ngân hà 4.200m đều hồi quân bình an tuyệt đối."
  },
  {
    id: "expertise",
    tag: "LOG 02 // Y PHÁC ĐỒ",
    title: "Chống Sốc Độ Cao (AMS) Bằng Bản Sắc Khoa Học",
    subtitle: "Dẹp bỏ mẹo vặt truyền miệng, hãy nói chuyện bằng oxy khối",
    icon: Activity,
    color: "bg-orange-400",
    content: "AMS là tử thần lơ lửng ở cao độ 5.000m. Quy trình y tế bọc sườn của Fit Tour từ chối những lý thuyết suông. Mỗi xe SUV di chuyển đều được thiết kế như một phòng điều phối dưỡng khí dã chiến áp lực đặc biệt, đo SPO2 huyết áp mỗi sáng, ứng phó thích nghi bậc thang.",
    proof: "Đạt quy chuẩn 5 lớp bảo an được tinh lọc thực tế qua 80 đợt vận hành dã ngoại."
  },
  {
    id: "authoritativeness",
    tag: "LOG 03 // BÀI CỤC ĐỊA",
    title: "Danh Vị Liên Minh Vệ Tinh Đặc Quyền Cấp Trực Thăng",
    subtitle: "Mối quan hệ chính thức cấp cao tại thủ phủ Leh Ladakh",
    icon: Landmark,
    color: "bg-emerald-400",
    content: "Chúng tôi không dùng đại lý trung gian giá rẻ. Sự hiện diện bền bỉ suốt 9 năm giúp Fit Tour đạt được thỏa hiệp bảo an trực hệ với SNM Hospital Leh và quyền ưu tiên điều cứu trực thăng của quân đội Ấn khi phát hiện triệu chứng tràn dịch phổi cấp tính.",
    proof: "Đứng vững tại văn phòng thực địa Leh ứng cứu nhanh gấp 3 lần dịch vụ thông thường."
  },
  {
    id: "trustworthiness",
    tag: "LOG 04 // DI SẢN U70",
    title: "Tấm Khiên Bảo Thể Cho Cả Lứa Tuổi U70",
    subtitle: "Chuyển hóa nỗi sợ sụp phổi thành ký ức ngắm dải thiên hà",
    icon: ShieldCheck,
    color: "bg-blue-400",
    content: "Phụ huynh 70 tuổi khát vọng chinh phục Ladakh hoang sơ nhưng lo sợ tim rệu rã. Fit Tour sưởi ấm tâm hồn họ bằng chăn nhiệt điện sưởi êm giữa đêm hoang mạc âm 10 độ, phác đồ bách bộ từng chặng nâng niu như người thân của chính mình.",
    proof: "Hàng trăm cụ ông, cụ bà hoàn thành chặng đèo 5.300m khóc òa trong an toàn rực rỡ."
  }
];

const MILESTONES = [
  {
    num: "STAGE I",
    years: "2017 – 2018",
    title: "Bụi Gió Và Khai Hoang",
    desc: "Vượt qua bụi sơn cùng SUV đời cũ rà đường, Fit Tour thiết lập văn phòng liên minh cốt lõi trực tiếp ngay giữa lòng Leh.",
    highlight: "Sàng lọc 15 tài xế bản xứ cự phách nhất vùng cao."
  },
  {
    num: "STAGE II",
    years: "2019 – 2022",
    title: "Y Khoa Hóa Vượt Cực Hạn",
    desc: "Chuẩn hóa hệ thống tầm soát y thế túc trực. Trang bị sục oxy, máy đo SPO2 và phác đồ dược phẩm thích nghi cho từng chặn ngủ.",
    highlight: "Giải nguy miễn phí cho hàng chục du khách đi bụi gặp nguy hiểm bão tuyết."
  },
  {
    num: "STAGE III",
    years: "2023 – 2025",
    title: "Kỷ Nguyên Ấm Điện Bồng Bềnh",
    desc: "Đột phá đưa mô hình lều VIP Glamping vách cách lạt chống bão, sưởi ấm đệm điện hừng hực nhiệt đới bờ hồ Pangong Tso lạnh vạn năm.",
    highlight: "Đón tiếp hơn 300 du khách U70 ngắm tuyết sơn không chút mệt mỏi."
  },
  {
    num: "STAGE IV",
    years: "2026",
    title: "Kỷ Lục Mốc Son 80",
    desc: "Đúc kết từ 80 chuyến đi điêu luyện để ban hành bộ luật An toàn 5 lớp đặc hiệu chống AMS hữu hiệu nhất Việt Nam.",
    highlight: "Bảo lãnh tối thượng từ thực tiễn, không nằm trên máy tính."
  }
];

const DETAILED_LAYERS = [
  {
    code: "LYR-01",
    name: "TẦM SOÁT THỂ TRẠNG 3 CHẶN",
    desc: "Lọc huyết áp, đo tiền sử tim mạch kỹ lưỡng ngay tại vạch xuất phát Việt Nam.",
    verdict: "Thực chiến khuyên: Nói không với các ca bệnh đe dọa tim mạch thầm kín."
  },
  {
    code: "LYR-02",
    name: "TỊNH NGHỈ CHẬM 48H Ở 3.500M",
    desc: "Chặn đứng mọi di chuyển vội vàng dồn dập. Toàn bộ ngày đầu du khách chỉ được thiền, nằm ngủ hít thở đón không khí loãng tại Leh.",
    verdict: "Thực chiến khuyên: Khí quản cần biểu đồ dốc thoải để thích thích khí áp tự nhiên."
  },
  {
    code: "LYR-03",
    name: "SUV GIA KÈM BÌNH CỨU HỘ KHỐI RỘNG",
    desc: "Bình oxy bọc sườn khí sục lắp đặt trên mọi chiếc xe 4x4 vượt đèo Khardung La.",
    verdict: "Thực chiến khuyên: Cứu SPO2 tức thì ngăn ngừa nguy biến từ phế nang."
  },
  {
    code: "LYR-04",
    name: "CÁCH LY ĐÊM PANGONG KHẢ TRẢ",
    desc: "Chăn sàn sưởi sàn trung tâm Leh. Bờ hồ dã ngoại lều bọc vách lót sưởi nhiệt điện đỏ hực.",
    verdict: "Thực chiến khuyên: 90% biến chứng độ cao kích thích từ nhiễm lạnh chân tay cốt lõi."
  },
  {
    code: "LYR-05",
    name: "ĐẶC QUYỀN KHÔNG QUÂN LIÊN LIÊN",
    desc: "Hiệp ước kích cứu trực thăng quân đoàn dốc đứng bốc bay nạn nhân về Leh dưới 60 phút.",
    verdict: "Thực chiến khuyên: Mối quan hệ chính thức bảo vệ mạng sống du khách cao hơn mọi bảo hiểm."
  }
];

const EXTREME_TOURS = [
  {
    slug: "LADAKH-GOLD-AUTUMN",
    title: "Chuyến Đi Vàng Mùa Thu Bên Dòng Sông Indus",
    time: "9 NGÀY // 8 ĐÊM",
    rate: "32.900.000đ",
    essence: "Ngắm rừng phong dương cổ thụ rực rỡ soi bóng trên làn nước pha lê",
    points: [
      "Trực chỉ chuỗi boutique sưởi sàn đỉnh nhất Leh",
      "Gia thong dặm đường tránh dồn nén mệt nhọc",
      "Sàng lọc mạch y tế sát chặng bay"
    ],
    status: "32 lần khởi hành trọn vẹn"
  },
  {
    slug: "PANGONG-ADV-EXPLORER",
    title: "Chinh Phục Khardung La & Đêm Lửa Trại Pangong",
    time: "10 NGÀY // 9 ĐÊM",
    rate: "35.500.000đ",
    essence: "Giao tranh giữa đỉnh đèo 5.359m và mặt hồ đổi 7 sắc màu kỳ vĩ",
    points: [
      "Bọc SUV 4x4 xịn vượt đỉnh Khardung La nhẹ nhõm",
      "Trải nghiệm đêm Glamping sưởi điện bờ hồ muối mặn cổ",
      "Tiệc trà bơ du mục ngắm thiên hà Milky Way hoang vắng"
    ],
    status: "Cột mốc thực tế 80 chuyến đi"
  },
  {
    slug: "MONASTERY-SILENT-WAY",
    title: "Hành Trình Giác Ngộ - Tìm Lại Bản Ngã Vực Tuyết",
    time: "8 NGÀY // 7 ĐÊM",
    rate: "29.900.000đ",
    essence: "Tìm tịnh lặng giữa từng nhịp mõ cổ kính ngân tụ",
    points: [
      "Bình minh linh thánh Thiksey phong cách vách núi treo leo",
      "Tham đàm triết học riêng trực tiếp cùng các Cao Tăng Tây Tạng",
      "Nhịp đi thong thả thâm ý phục vụ cha mẹ cao niên U70"
    ],
    status: "Chinh phục 98% lòng tin lứa tuổi U70"
  }
];

const RAW_TOASTS = [
  {
    tag: "ĐOÀN KHỞI HÀNH THỨ 23",
    author: "Bác Sĩ Lê Hoàng Minh (Khoa Nội y tế, TP.HCM)",
    quote: "Phải đi qua những cung đường Himalaya loãng khí lạnh tanh mới thấy trân quý sự khắt khe y học từ Fit Tour. Không hô hào khẩu hiệu suông, họ giải quyết bài toán AMS cực kỳ khoa học bằng oxy nén dồi dào trên xe. 80 chuyến lý nghiệm là hoàn toàn xứng đáng!"
  },
  {
    tag: "ĐOÀN KHỞI HÀNH THỨ 49",
    author: "Cô Lê Thị Thanh (64 tuổi, Ba Đình, Hà Nội)",
    quote: "Mấy đứa bảo mệt lắm không đi nổi đâu nhưng đi Fit Tour được các cháu chăm chút nước gừng ấm tối tối, lều ven hồ Pangong chăn ấm rực điện ấm áp êm ru. Tôi đi về chẳng sốt chảAMS tí nào. Chúc mừng các cháu đạt mốc 80 rực rỡ!"
  },
  {
    tag: "ĐOÀN KHỞI HÀNH THỨ 77",
    author: "Khương Duy (Nhiếp ảnh gia - Adventure Vlogger)",
    quote: "Tôi đọc đầy rẫy bài kinh nghiệm copy chắp vá chả thực tế. Đi với Fit Tour mới thấy cái uy lực local của họ. Xe bị kẹt đèo tuyết một cái là đội cứu hộ bản xứ tại Leh ứng phó cực nhanh. Uy tín và Expertise thật sự nằm ở những thực tế đấy."
  }
];

export default function AvantGardeScrapbookGuide({ onTourSelect }: AvantGardeScrapbookGuideProps) {
  const [activeLog, setActiveLog] = useState<string>("experience");
  const [activeStage, setActiveStage] = useState<number>(3);
  const [activeOpinion, setActiveOpinion] = useState<number>(0);
  const [brutalistWish, setBrutalistWish] = useState({ author: "", group: "2026", words: "" });
  const [opinionStream, setOpinionStream] = useState<any[]>(RAW_TOASTS);
  const [wishDone, setWishDone] = useState<boolean>(false);

  const handlePostBrutalist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brutalistWish.author || !brutalistWish.words) return;
    const newOpinion = {
      tag: `LƯU BÚT PHIÊN BẢN 80 // CHUYẾN ĐI MỚI`,
      author: `${brutalistWish.author} (Lữ khách chúc mừng mốc vàng)`,
      quote: brutalistWish.words
    };
    setOpinionStream([newOpinion, ...opinionStream]);
    setWishDone(true);
    setBrutalistWish({ author: "", group: "2026", words: "" });
  };

  return (
    <div className="bg-[#FFFDF6] text-stone-950 font-mono tracking-tight text-left min-h-screen p-4 sm:p-8 selection:bg-orange-400 selection:text-stone-950" id="raw-brutalist-scrapbook">
      
      {/* ======================================================================
          1. RADICAL RAW HERO BANNER (TICKET STUB VIBE)
          ====================================================================== */}
      <section className="border-4 border-stone-950 bg-stone-950 text-white p-6 sm:p-12 relative overflow-hidden mb-8 shadow-[8px_8px_0px_0px_#1c1917]">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2200&q=95" 
            alt="Rough terrain" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter grayscale contrast-200"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-orange-400 text-stone-950 border-2 border-white px-3 py-1 font-black text-xs uppercase tracking-wider animate-bounce">
              LOGGED DEPARTURES // 80 CHUYẾN ĐI
            </span>
            <span className="font-mono text-xs text-stone-300">
              ● PHIÊN BẢN HOÀN TOÀN KHÁC BIỆT THỰC CHIẾN
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-sans font-black text-5xl sm:text-8xl tracking-tighter leading-none uppercase">
              ĂN MỪNG <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 text-transparent bg-clip-text">
                80 HÀNH TRÌNH
              </span> <br />
              THỰC THỂ KHÔNG LÝ THUYẾT
            </h1>
            
            <p className="font-sans text-stone-200 text-base sm:text-2xl font-light leading-snug max-w-3xl italic border-l-4 border-orange-450 border-l-orange-500 pl-4">
              “Chúng tôi phản đối mọi dạng cẩm nang, bài viết kinh nghiệm dạo chắp vá, hời hợt trên mạng xã hội. 
              Bạn muốn chinh phục vùng đất chết an sinh, bạn buộc phải tin vào kẻ thực chiến dắt đoàn 80 chuyến đi hoàn mỹ.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-stone-900 border-2 border-stone-800 p-4 rounded-none">
              <span className="text-[10px] text-stone-400 block font-black">EXPERT REPORT CODE //</span>
              <span className="text-xl font-bold font-sans text-orange-400">1.200 VƯỢT ĐÈN VẸN TOÀN</span>
              <p className="text-[11px] text-stone-400 mt-1">Từ lứa tuổi tráng niên đến bố mẹ lão niên U70.</p>
            </div>
            <div className="bg-stone-900 border-2 border-stone-800 p-4 rounded-none">
              <span className="text-[10px] text-stone-400 block font-black">EMERGENCY ALLIANCE //</span>
              <span className="text-xl font-bold font-sans text-amber-350 text-amber-400">ỨNG CHỨC KHÔNG QUÂN TRỰC THĂNG</span>
              <p className="text-[11px] text-stone-400 mt-1">Kích hoạt chuyển thương bốc thẳng về Leh trong 60 phút.</p>
            </div>
            <div className="bg-stone-900 border-2 border-stone-800 p-4 rounded-none">
              <span className="text-[10px] text-stone-400 block font-black">INFRASTRUCTURE LAYER //</span>
              <span className="text-xl font-bold font-sans text-emerald-400">100% SƯỞI ĐỆM NHIỆT ĐIỆN</span>
              <p className="text-[11px] text-stone-400 mt-1">Kháng lạnh bờ hồ muối vạn năm Pangong âm 10 độ.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#brutalist-dossier" 
              className="bg-orange-400 text-stone-950 font-black px-6 py-3 border-2 border-stone-950 hover:bg-orange-500 transition-all font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2 active:translate-y-1 shadow-[4px_4px_0px_0px_#f97316]"
            >
              <span>XEM BÁO CÁO THỰC CHIẾN</span>
              <ArrowRight className="w-4 h-4 text-stone-950" />
            </a>
            <a 
              href="#extreme-catalog" 
              className="bg-stone-850 hover:bg-stone-800 px-6 py-3 border-4 border-stone-900 text-white font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2"
            >
              <span>NHẬT KÝ ĐẠI DIỆN TOURS</span>
            </a>
          </div>

        </div>
      </section>

      {/* ======================================================================
          2. THE BRUTALIST DOSSIER: THE 4 CORE REAL EXPERIENCED ELEMENTS
          ====================================================================== */}
      <section id="brutalist-dossier" className="mb-12">
        <div className="bg-amber-450 bg-amber-250 border-4 border-stone-950 p-6 sm:p-10 bg-yellow-50 relative shadow-[8px_8px_0px_0px_#1c1917]">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b-4 border-stone-950 pb-6 mb-8">
            <div className="space-y-1">
              <span className="bg-stone-950 text-white font-black px-3.5 py-0.5 text-xs inline-block uppercase">■ EXPEDITION VERBAL REPORTS</span>
              <h2 className="font-sans font-black text-3xl sm:text-6xl uppercase tracking-tighter text-stone-950">
                04 SỰ THẬT TẦM LỮ CỦA FIT TOUR
              </h2>
            </div>
            <p className="text-stone-700 text-sm sm:text-base font-sans max-w-sm font-semibold opacity-90 leading-normal text-justify">
              “Chúng tôi rà quét và kiến thiết thành tựu 80 chuyến đi bằng máu, tuyết và y pháp độc quyền, tuyệt đối từ chối copy dán.”
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stamp-like selector rail (Left 4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              {EXPERIENCES.map((exp) => {
                const IconComp = exp.icon;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveLog(exp.id)}
                    className={`w-full text-left p-4 border-2 border-stone-950 font-mono transition-all flex items-center justify-between cursor-pointer ${
                      activeLog === exp.id
                        ? `${exp.color} text-stone-950 font-black shadow-[4px_4px_0px_0px_#1c1917] translate-x-[-2px] translate-y-[-2px]`
                        : 'bg-white text-stone-500 hover:text-stone-950'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1 border border-stone-950 bg-white">
                        <IconComp className="w-4 h-4 text-stone-950" />
                      </div>
                      <span className="text-sm sm:text-base uppercase tracking-tight">{exp.tag}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeLog === exp.id ? 'rotate-90' : ''}`} />
                  </button>
                );
              })}

              <div className="mt-6 p-4 border-4 border-dashed border-stone-950 bg-white">
                <span className="text-[10px] font-black text-red-650 text-red-650 block uppercase mb-1">⚠ CHỈ HIỆN THỰC THỰC HIỆN TỪ CHUYÊN SÂU</span>
                <p className="text-[11px] text-stone-700 font-sans italic leading-relaxed text-justify">
                  &quot;Himalaya có biên áp suất gắt gao. Học kinh nghiệm vớt từ chat-bot tự túc của những kẻ dạo mát chỉ đem tới sự bất trắc sức khỏe thảm hại.&quot;
                </p>
              </div>
            </div>

            {/* Neon Accent Detailed Dossier Sheet (Right 8 cols) */}
            <div className="lg:col-span-8 bg-white border-4 border-stone-950 p-6 sm:p-10 relative shadow-[8px_8px_0px_0px_#1c1917] min-h-[360px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {EXPERIENCES.filter(exp => exp.id === activeLog).map((exp) => {
                  const IconComp = exp.icon;
                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 border-b-2 border-stone-900 pb-3">
                        <div className={`p-2 border-2 border-stone-950 ${exp.color} rounded-sm`}>
                          <IconComp className="w-6 h-6 text-stone-950" />
                        </div>
                        <div>
                          <span className="text-[10px] text-stone-500 block uppercase font-bold">{exp.tag} // ARCHIVE LABELS</span>
                          <h3 className="font-sans font-black text-xl sm:text-3xl text-stone-950 uppercase tracking-tighter">
                            {exp.title}
                          </h3>
                        </div>
                      </div>

                      <p className="font-serif italic text-stone-750 text-stone-800 text-base sm:text-lg bg-stone-50 p-3 border-l-4 border-stone-950 leading-relaxed text-left text-justify">
                        “{exp.subtitle}”
                      </p>

                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans text-justify">
                        {exp.content}
                      </p>

                      <div className="bg-stone-950 text-white p-4 font-mono space-y-1">
                        <span className="text-[10px] text-orange-400 font-extrabold uppercase tracking-wider block">✓ HỒ SƠ QUÂN SỰ BẢO CHỨNG SỐ / (VERIFIED PROOF)</span>
                        <p className="text-xs text-stone-250 italic font-medium leading-relaxed">
                          {exp.proof}
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
          3. RAW BRUTALIST TIMELINE SECTOR: BIÊN NIÊN SỬ TIẾN HÓA
          ====================================================================== */}
      <section className="mb-12">
        <div className="border-4 border-stone-950 bg-stone-950 text-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_#101010]">
          
          <div className="space-y-2 mb-10 max-w-3xl">
            <span className="bg-orange-400 text-stone-950 font-black px-2 py-0.5 text-xs uppercase tracking-widest inline-block">
              CHRONOLOGY LOG BOOK // TIẾN HÓA HẬU CẦN
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
              SỰ TIẾN HÓA CỦA 80 CHẬNG DÃ NGOẠI
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-sans">
              80 chuyến đi là chặng đường lữ hành thô mộc rèn giũa từ thời chưa phủ ấm đến thời phủ lều sưởi nhiệt điện và liên hệ Không quân trực tiếp:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {MILESTONES.map((mst, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-6 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  activeStage === idx 
                    ? 'bg-amber-400 text-stone-950 border-white shadow-[4px_4px_0px_0px_#fff] translate-x-[-2px] translate-y-[-2px]' 
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-500'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                    <span className="text-xs font-black">{mst.num}</span>
                    <span className="text-[10px] tracking-wider uppercase opacity-80">{mst.years}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-sans font-black text-lg uppercase leading-tight">
                      {mst.title}
                    </h3>
                    <p className={`text-xs text-justify leading-relaxed ${activeStage === idx ? 'text-stone-900' : 'text-stone-400'}`}>
                      {mst.desc}
                    </p>
                  </div>
                </div>

                <div className={`mt-6 pt-3 border-t text-left ${activeStage === idx ? 'border-stone-950' : 'border-stone-800'}`}>
                  <span className="text-[9px] uppercase tracking-widest font-black block mb-1 opacity-70">MỐC SÁNG SUỐT</span>
                  <p className="text-[11px] font-sans italic leading-normal font-bold">
                    &quot;{mst.highlight}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          4. SAFETY LAYERS CARD DECK (Replaces manual hacks)
          ====================================================================== */}
      <section className="mb-12" id="safety-layers-deck">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="bg-emerald-400 text-stone-950 border-2 border-stone-950 px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest inline-block animate-pulse">
              QUY TRÌNH BAO CẬP LINH HOẠT KHÔNG PHẢI KINH NGHIỆM DẠO
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter text-stone-950">
              5 LỚP BỌC SÂN CHỐNG AMS CHO CHA MẸ
            </h2>
            <p className="text-stone-600 font-serif text-base sm:text-base italic">
              Vực lạnh Ladakh khắc nghiệt không dành cho những bài chia sẻ vu vơ của dân đi bụi. Đi cùng gia đình, hãy đặt niềm tin vào quy chuẩn cứng cáp sau:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {DETAILED_LAYERS.map((layer, index) => (
              <div 
                key={index}
                className="bg-white border-4 border-stone-950 p-6 relative flex flex-col justify-between shadow-[6px_6px_0px_0px_#1c1917] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#1c1917] transition-all"
              >
                <div className="absolute right-4 top-2 font-mono text-5xl font-black text-stone-100 select-none pointer-events-none">
                  {layer.code}
                </div>

                <div className="space-y-4">
                  <div className="inline-flex p-1.5 border-2 border-stone-950 bg-stone-950 text-white font-black text-[10px]">
                    LỚP PHÒNG CHỐNG // {index+1}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-sans font-black text-base sm:text-lg uppercase leading-tight text-stone-950">
                      {layer.name}
                    </h3>
                    <p className="text-xs text-stone-700 leading-relaxed font-sans text-justify">
                      {layer.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t-2 border-stone-950 bg-amber-50 p-3 italic">
                  <span className="text-[9px] uppercase tracking-wider text-red-650 text-red-700 font-black block mb-0.5">■ PHÁN QUYẾT BẢN ĐỊA:</span>
                  <p className="text-[11px] text-stone-900 leading-snug font-serif font-semibold">
                    {layer.verdict}
                  </p>
                </div>
              </div>
            ))}

            {/* Asymmetric CTA Card */}
            <div className="p-6 border-4 border-stone-950 bg-orange-400 flex flex-col justify-between items-start text-stone-950 shadow-[6px_6px_0px_0px_#1c1917]">
              <div className="space-y-2">
                <span className="bg-stone-950 text-white font-mono text-[9px] px-2 py-0.5 font-bold uppercase tracking-wider">HEALTH ENQUIRIES REPORT</span>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase leading-none">
                  Phòng Khám Lâm Sàng Tim Phồi Bố Mẹ
                </h3>
                <p className="text-xs font-sans text-stone-900 leading-relaxed font-medium text-justify">
                  Sợ bố mẹ suy hấp, mòn sập tim phổi? Chỉ cần gửi tư vấn từ xa, Fit Tour sẽ thiết lập biểu đồ giãn áp suất khí loãng tương ứng hoàn toàn miễn phí.
                </p>
              </div>

              <button
                onClick={() => {
                  onTourSelect?.({
                    title: "Bao sườn Tầm soát Y tế AMS Lâm sàng Ladakh U70",
                    duration: "Miễn phí tư vấn chi tiết",
                    price: "Thực chứng bởi FIT Tour",
                    tag: "Dịch lý an toàn dã ngoại"
                  });
                }}
                className="w-full mt-6 bg-stone-950 hover:bg-stone-900 text-white font-mono text-[10px] font-black py-3.5 px-4 tracking-widest uppercase transition-all shadow-[4px_4px_0px_0px_#f97316] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
              >
                GẶP Y SĨ TƯ VẤN THỰC ĐỊA
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          5. EXTREME TOURS EXPOSITION
          ====================================================================== */}
      <section className="mb-12" id="extreme-catalog">
        <div className="border-4 border-stone-950 bg-stone-950 text-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_#151515]">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="bg-amber-400 text-stone-950 px-3 py-0.5 font-black text-xs uppercase tracking-widest inline-block">
              SELECTIVE VOYAGE ARTIFACTS
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
              CUNG ĐƯỜNG TINH LỌC 80 CHUYẾN
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-sans">
              Các gói viễn hành tinh chất, loại bỏ sạch điểm trì nhấc mệt mỏi, dãn dọn chặng thông minh bậc nhất:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {EXTREME_TOURS.map((tour) => (
              <div 
                key={tour.slug}
                className="bg-stone-900 border-2 border-stone-800 p-6 flex flex-col justify-between hover:border-orange-400 transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-850 pb-4">
                    <span className="bg-stone-800 text-orange-400 font-mono text-[9px] font-bold px-2.5 py-0.5">
                      {tour.status}
                    </span>
                    <span className="font-mono text-xs text-stone-400">
                      {tour.time}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-sans font-black text-lg sm:text-xl uppercase leading-tight text-white">
                      {tour.title}
                    </h3>
                    <p className="font-serif text-xs text-amber-300 italic">
                      “{tour.essence}”
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-stone-850 text-xs text-stone-300">
                    {tour.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-850 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] text-stone-500 block font-bold leading-none uppercase">CHỈ SỐ QUỸ QUY ĐỊNH //</span>
                    <span className="font-mono text-lg font-black text-white">{tour.rate}</span>
                  </div>

                  <button
                    onClick={() => {
                      onTourSelect?.({
                        title: tour.title,
                        duration: tour.time,
                        price: tour.rate,
                        tag: "Đồng hành Mốc son 80 Chuyến"
                      });
                    }}
                    className="bg-white hover:bg-orange-400 text-stone-950 font-black px-4 py-2 font-mono text-[10px] uppercase transition cursor-pointer flex items-center gap-1.5"
                  >
                    <span>LÊN ĐƯỜNG</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          6. RAW GUEST FEEDBACK LOG
          ====================================================================== */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Rough Parchment feedback sheet (Left 7 cols) */}
          <div className="lg:col-span-7 bg-white border-4 border-stone-950 p-6 sm:p-10 shadow-[6px_6px_0px_0px_#1c1917]">
            <div className="space-y-2 mb-6 border-b-2 border-stone-900 pb-4">
              <span className="bg-orange-400 text-stone-950 font-black px-2 py-0.5 text-xs inline-block">NOMAD SHOUT OUTS</span>
              <h2 className="font-sans font-black text-3xl uppercase tracking-tighter text-stone-950">
                THỰC CHỨNG TỪ NHẬT KÝ ĐẦY GƯƠNG MẶT
              </h2>
            </div>

            <div className="bg-[#FAF9F5] border-2 border-stone-950 p-6 relative">
              <Quote className="absolute right-4 bottom-2 w-16 h-16 text-stone-200 pointer-events-none select-none z-0" />
              
              <div className="relative z-10 space-y-4">
                <p className="font-serif text-stone-800 text-base sm:text-base italic leading-relaxed text-justify">
                  “{opinionStream[activeOpinion].quote}”
                </p>
                
                <div className="pt-4 border-t-2 border-stone-950 flex flex-wrap justify-between items-end gap-4 text-xs font-sans">
                  <div>
                    <span className="bg-stone-950 text-white font-mono text-[9px] px-2 py-0.5 font-bold uppercase">{opinionStream[activeOpinion].tag}</span>
                    <strong className="text-stone-900 block font-serif italic mt-1">{opinionStream[activeOpinion].author}</strong>
                  </div>

                  <div className="flex gap-1">
                    {opinionStream.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveOpinion(idx)}
                        className={`w-3.5 h-3.5 border border-stone-950 transition-all font-mono text-[9px] font-bold cursor-pointer ${
                          activeOpinion === idx ? 'bg-orange-400 text-stone-950' : 'bg-white text-stone-500'
                        }`}
                      >
                        {idx+1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Brutalist form (Right 5 cols) */}
          <div className="lg:col-span-5 bg-yellow-50 border-4 border-stone-950 p-6 sm:p-8 space-y-6 shadow-[6px_6px_0px_0px_#1c1917]">
            <div>
              <span className="text-[10px] text-stone-500 uppercase tracking-widest font-black block">ANONYMOUS COMMEMORATIVE PLACARD</span>
              <h3 className="font-sans font-black text-xl uppercase tracking-tight text-stone-950">
                BẢNG VINH DANH LÂN CẬY
              </h3>
              <p className="text-xs text-stone-700 leading-normal mt-1">
                Lữ khách cũ của chuyến thứ 14, 45, 78 hay người hâm mộ thám hiểm y khoa, hãy ghi lại danh ngôn của bạn chúc mừng mốc 80:
              </p>
            </div>

            {!wishDone ? (
              <form onSubmit={handlePostBrutalist} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-850 font-black uppercase text-[9px] mb-1">TÊN QUÝ DANH:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Biệt danh hoặc Họ tên..."
                      value={brutalistWish.author}
                      onChange={(e) => setBrutalistWish({ ...brutalistWish, author: e.target.value })}
                      className="w-full bg-white border-2 border-stone-900 outline-none p-2.5 rounded-none text-stone-950"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-850 font-black uppercase text-[9px] mb-1">MỐC ĐỒNG HÀNH kỉ:</label>
                    <select
                      value={brutalistWish.group}
                      onChange={(e) => setBrutalistWish({ ...brutalistWish, group: e.target.value })}
                      className="w-full bg-white border-2 border-stone-900 outline-none p-2.5 rounded-none text-stone-700 font-bold"
                    >
                      <option value="2026">2026 (Xuất ngũ 80)</option>
                      <option value="2025">2025 (Chặn 70)</option>
                      <option value="2024">2024</option>
                      <option value="Khac">Độc giả tự do</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-850 font-black uppercase text-[9px] mb-1">LỜI CHÚC THÂN TÌNH (VERIFIED THỰC CHỨNG):</label>
                  <textarea 
                    required
                    rows={3}
                    value={brutalistWish.words}
                    onChange={(e) => setBrutalistWish({ ...brutalistWish, words: e.target.value })}
                    placeholder="Ngưỡng mộ quy chuẩn sụp oxy sục chuyên dụng trên SUV của các bạn..."
                    className="w-full bg-white border-2 border-stone-900 outline-none p-2.5 rounded-none text-stone-950 resize-none text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-stone-950 hover:bg-stone-905 text-white hover:bg-stone-900 font-bold uppercase tracking-widest transition-all cursor-pointer text-xs shadow-[4px_4px_0px_0px_#f97316]"
                >
                  GHI TRÊN BAN VÀNG THỰC CHỨNG
                </button>
              </form>
            ) : (
              <div className="p-6 border-2 border-dashed border-stone-950 bg-white text-center space-y-3">
                <span className="bg-emerald-400 text-stone-950 px-3 py-0.5 text-[9px] font-black uppercase inline-block">POST RECORDED //</span>
                <h4 className="font-sans font-black text-stone-950 text-base">GẢI THỰC ĐỔI THÀNH CÔNG!</h4>
                <p className="text-xs text-stone-600 leading-normal font-sans">
                  Lời chúc đã được lưu bút của bạn đã dán thẳng lên bảng kỷ niệm vàng mốc 80 chuyến đi của thương hiệu.
                </p>
                <button
                  onClick={() => setWishDone(false)}
                  className="text-xs text-orange-500 hover:underline font-black uppercase block mx-auto"
                >
                  Gửi thêm lưu bút khác
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ======================================================================
          7. OUTLAW INQUIRIES
          ====================================================================== */}
      <section className="bg-white border-4 border-stone-950 p-6 sm:p-10 shadow-[6px_6px_0px_0px_#101010]">
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          
          <div className="text-center space-y-2">
            <span className="bg-stone-950 text-white px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest inline-block">RAW QUESTIONS CLINIC // FAQ</span>
            <h2 className="font-sans font-black text-3xl text-stone-950 uppercase tracking-tighter">HỎI ĐÁP KHỎI AMS TUYỆT KHỐI</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Vì sao 80 chuyến thực nghiệm dã ngoại quý giá hơn vạn bài cẩm nang mạng?",
                a: "Himalaya có bộ thông số áp suất sinh lý biến động khôn lường. Chỉ có kinh nghiệm hồi sức 80 đợt đoàn, sờ tay vào tuyết, dẫn dắt hàng ngàn du khách U70 vượt đại ngàn mới giúp trưởng đoàn thấu hiểu thời gian di cư an an, thích nghi bậc chặng để triệt tiêu biến chứng tử thần AMS."
              },
              {
                q: "Làm sao bảo vệ sức khỏe cho cha mẹ đi dã ngoại âm 10 độ ở hồ muối Pangong?",
                a: "Không bao giờ để cha mẹ ngủ lều lạnh dột nát. Bản sắc Fit Tour mang đến lều Glamping VIP hai lớp Anh Quốc bọc nhiệt đệm sưởi điện rực rực suốt đêm lạnh. Sưởi ấm xương khớp trung khu là chìa khóa chặn đứng viêm phổi khô chết người."
              }
            ].map((faq, fIdx) => (
              <div 
                key={fIdx}
                className="bg-stone-50 border-2 border-stone-950 p-6 shadow-[4px_4px_0px_0px_#1c1917]"
              >
                <div className="flex items-start justify-between gap-4 font-sans font-black text-base text-stone-950 uppercase">
                  <span>{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-stone-900 shrink-0 mt-0.5" />
                </div>
                <p className="mt-4 pt-4 border-t-2 border-dashed border-stone-950 text-sm sm:text-base text-stone-700 leading-relaxed font-mono">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
