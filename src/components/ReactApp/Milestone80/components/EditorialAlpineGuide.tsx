import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Sparkles, Award, ShieldCheck, Heart, Users, Flame, ChevronRight, Check,
  Activity, Home, Shield, Star, Calendar, ArrowRight, ArrowLeft, Quote, Landmark, MapPin, Eye, Info, HelpCircle
} from 'lucide-react';
import LocalConnectionSection from './LocalConnectionSection.tsx';
import VoguePortraitCenterpiece from './VoguePortraitCenterpiece.tsx';

interface EditorialAlpineGuideProps {
  onTourSelect?: (tour: any) => void;
}

// Data mirroring the previous model but framed with sophisticated editorial tones
const COMMITMENTS = [
  {
    id: "experience",
    tab: "Trải Nghiệm Thật",
    title: "5+ Năm Kiến Tạo Trải Nghiệm Độc Bản",
    subtitle: "Hành Trình 80 Cột Mốc Viễn Du Bản Địa",
    icon: Compass,
    content: "Hơn 5 năm viễn du vùng biên thùy Ấn Độ, Fit Tour rèn giũa năng lực thấu hiểu thổ nhưỡng bằng chính những sương gió đèo Khardung La. Chúng tôi am hiểu tận sâu sắc từng dốc đá mỏi mệt bên đường, thấu suốt nhịp thở của tự nhiên và thốt lên linh hồn Ladakh qua những câu chuyện kể sâu đậm tình bằng hữu, đảm bảo chuyến du khảo thảnh thơi trọn vẹn tuyệt vời.",
    proof: "Hơn 755+ lữ khách Việt Nam từ lứa tuổi 18 đến U70 chạm đỉnh tuyết sơn Ladakh một cách trọn vẹn và an bình."
  },
  {
    id: "expertise",
    tab: "Local Guides Bản Địa",
    title: "Kết Nối Các Trưởng Đoàn & Local Guide Cự Phách",
    subtitle: "Thấu hiểu chân lý Ladakh bằng tiếng nói của người con bản xứ",
    icon: Users,
    content: "Fit Tour tự hào sở hữu mạng lưới liên minh trực tiếp với các thủ lĩnh dẫn dắt bản địa lão luyện hàng đầu vùng núi. Họ am hiểu thông thạo thổ ngữ địa phương, có khả năng kết nối tâm linh và văn hóa cổ xưa, đưa du khách đi sâu chạm ngõ những tu viện cheo leo ít người đặt chân tới.",
    proof: "Sự thấu cảm dạn dày sương gió, đồng hành sát sao cùng các tài xế bản xứ thân thương như anh em một nhà."
  },
  {
    id: "authoritativeness",
    tab: "Trải Nghiệm Đồng Hành",
    title: "Giao Lưu Trải Nghiệm & Tự Tay Nhóm Lửa Vào Bếp",
    subtitle: "Mang ẩm thực dã ngoại sưởi ấm tâm hồn lữ khách muôn phương",
    icon: Flame,
    content: "Trải nghiệm trọn vẹn ẩm thực bản địa tại những nhà hàng Tạng, Ladakhi nổi tiếng nhất. Thế nhưng trong chuyến viễn du 6-7 ngày, hương vị quê hương xen kẽ là điều vô cùng cần thiết. Giữa thung lũng Nubra hay bên hồ Pangong giá lạnh, khoảng cách giữa lữ khách và người dẫn đường được xóa nhòa khi chúng ta cùng nhau nhóm lên mâm bếp dã ngoại, tự tay nấu những món ăn đậm đà hương vị Việt Nam để sưởi ấm tâm hồn.",
    proof: "Mỹ vị đồng hành dã ngoại chân thật kiến tạo nên tiếng cười giòn tan gắn kết tình thân sâu đậm."
  },
  {
    id: "trustworthiness",
    tab: "Gắn Kết Tâm Tình",
    title: "Sự Chăm Sóc Nâng Niu Trân Trọng Như Người Nhà",
    subtitle: "Những đêm băng sương lều trại ấm áp như gia đình",
    icon: ShieldCheck,
    content: (
      <>
        Sự tận tâm và chuyên nghiệp của Fit Tour đã mang lại sự hài lòng tuyệt đối cho hàng ngàn lữ khách, biến những hành trình khắc nghiệt thành kỳ nghỉ thảnh thơi. Chúng tôi thấu đáo trong từng tách trà gừng mật ong nóng hổi hằng đêm, bọc đệm sưởi điện rực hồng suốt 12 tiếng đêm hồ Pangong Tso giá lạnh. Minh chứng rõ nét nhất cho sự chăm sóc này là việc nhiều du khách lớn tuổi vẫn hoàn thành trọn vẹn chuyến đi một cách nhẹ tênh (bạn có thể xem thêm <a href="/co-may" className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-4">câu chuyện truyền cảm hứng của Cô Mây U70 tại đây</a>).
      </>
    ),
    proof: "Hàng nghìn du khách ở mọi lứa tuổi đã hoàn thành hành trình một cách an toàn và để lại vô vàn những lời lưu niệm đầy cảm mến."
  }
];

const HISTORICAL_CHRONOLOGY = [
  {
    year: "2017 – 2018",
    voyages: "Hành Trình Tiền Trạm",
    title: "Khai Sơn Phá Thạch",
    desc: "Max Vũ - CEO FIT Tour, là một trong những tour guide người Việt tiên phong khám phá vùng đất Ladakh. Giai đoạn vỡ lòng với chiếc Jeep dã chiến, trực tiếp rà soát từng cây số hiểm trở để đặt nền móng đầu tiên.",
    milestone: "Những chuyến đi khám phá cá nhân dạn dày sương gió trước khi thương hiệu FIT Tour chính thức thành hình."
  },
  {
    year: "2019 – 2022",
    voyages: "Hành trình 16 - 45",
    title: "Bản Địa Hóa & Gắn Kết Bạn Đường",
    desc: "Tuyển dụng khắt khe và đào tạo chuyên sâu mạng lưới dẫn đoàn, liên kết chặt chẽ với những thủ lĩnh văn hóa Tây Tạng trên đỉnh cao nguyên Leh Ladakh để đảm bảo trải nghiệm gốc chân thực.",
    milestone: "Khởi xướng hoạt động tự tay nấu phở dã ngoại sưởi ấm tình bằng hữu giữa đại ngàn."
  },
  {
    year: "2023 – 2025",
    voyages: "Hành trình 46 - 75",
    title: "Glamping Ấm Áp & Ẩm Thực Đồng Hành",
    desc: "Cách ly cái lạnh tuyệt đối bên dòng hồ Pangong Tso bằng lều cách nhiệt cao cấp dệt đệm sưởi ấm áp, hòa nhịp tiếng đàn ca hạnh phúc bên lửa trại hồng.",
    milestone: "Cán mốc kỳ diệu: Hàng trăm gia đình và bố mẹ lão niên U70 thoải mái viễn du."
  },
  {
    year: "2026 - Nay",
    voyages: "Cột Mốc Vàng 80",
    title: "Hành Trình Gắn Kết Thượng Thượng Thừa",
    desc: "Kết hợp tinh hoa từ kinh nghiệm 80 chuyến đi thực tế. Khẳng định vị thế người dẫn đoàn sành sỏi, mang đến giá trị tinh thần chân thực nguyên bản sâu đậm.",
    milestone: "Khẳng định uy tín danh tiếng qua đội ngũ local guide mộc mạc và chân thành bậc nhất."
  }
];

const SAFETY_LAYERS = [
  {
    step: "01",
    name: "Đội Ngũ Local Leader & Local Guide Cự Phách",
    desc: "Liên minh chặt chẽ cùng các người dẫn dắt Tây Tạng ưu tú bản xứ, am hiểu thấu đáo từng con đèo tuyết đá, giàu kiến văn tâm linh cổ xưa vùng biên thùy.",
    impact: "Xóa tan bỡ ngỡ ban đầu, kết nối tình thân bằng những câu chuyện kể trầm hùng tuyệt diệu."
  },
  {
    step: "02",
    name: "Sự Tận Tâm Chăm Chút & Ẩm Thực Đồng Hành",
    desc: "Chu toàn đệm sưởi rực hồng suốt đêm Pangong giá lạnh, bình trà gừng thơm nâng đỡ lữ khách già trẻ. Cùng nhau tự tay nhóm bếp dã ngoại, đun cốc trà bơ béo ngậy mang hơi sực quê hương.",
    impact: "Tận tụy phục vụ, kết nối chữ tình gia đình qua bát phở bò nóng hổi đượm tình thân hữu."
  },
  {
    step: "03",
    name: "Bí Quyết Thích Nghi & Chia Sẻ Kinh Nghiệm Thập Kỷ",
    desc: "Dành trọn thời gian đồng hành nhàn nhã bách bộ quanh ngõ ngách Leh cổ kính, thong thả thưởng trà, để nhịp tim thích nghi mềm mại dẻo dai cùng khí áp cao độ.",
    impact: "Sự thấu đạt lý thuyết và thực chiến giúp lữ khách sảng khoái suốt dặm trường chinh phục."
  },
  {
    step: "04",
    name: "Hệ Thống An Toàn Y Tế & Chăm Sóc Sức Khỏe",
    desc: "Dặn dò sát sao sức khỏe hàng ngày. Trang bị sẵn sàng bình oxy y tế, thuốc men chuyên dụng. Đặc biệt liên kết chặt chẽ với các bệnh viện địa phương và hệ thống bảo hiểm cấp cứu.",
    impact: "Lá chắn bảo vệ vững chắc mang đến sự an tâm tuyệt đối, gạt bỏ mọi âu lo về rủi ro độ cao."
  }
];

const LADAKH_SERIES_TOURS = [
  {
    id: "tour-1",
    tag1: "VĂN HÓA - CẢNH QUAN - TRẢI NGHIỆM LẦN ĐẦU",
    tag2: "8N7Đ | SIGNATURE JOURNEY",
    title: "01. LADAKH - Vùng Đất Của Các Lạt Ma",
    subtitle: "Land of the Lamas",
    desc: "Hành trình đầu tiên dành cho những ai muốn khám phá vẻ đẹp kinh điển của Ladakh.",
    route: "Hành trình: Leh • Nubra • Pangong • Khardung La • Tu viện cổ",
    image: "https://media.fittour.vn/uploads/2024/06/man-mua-truyen-thong-tai-le-hoi-hemis.webp",
    link: "https://thericetour.com/tour/tour-ladakh-roadtrip"
  },
  {
    id: "tour-2",
    tag1: "THÁM HIỂM - ROADTRIP - ÍT NGƯỜI ĐẶT CHÂN TỚI",
    tag2: "10N9Đ | EXPEDITION JOURNEY",
    title: "02. LADAKH - Kingdom Above the Clouds",
    subtitle: "Kashmir • Zanskar • Ladakh",
    desc: "Hành trình xuyên qua những vùng đất hùng vĩ và biệt lập nhất của Himalaya.",
    route: "Hành trình: Srinagar • Drass • Kargil • Zanskar • Leh",
    image: "https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-du-ky-o-Zanskar.webp",
    link: "https://thericetour.com/tour/tour-kashmir-zanskar"
  },
  {
    id: "tour-3",
    tag1: "BẢN ĐỊA - NHIẾP ẢNH - TRẢI NGHIỆM SÂU",
    tag2: "IMMERSIVE JOURNEY",
    title: "03. LIVING LADAKH",
    subtitle: "Beyond the Tourist Trail",
    desc: "Dành cho những người muốn sống cùng Ladakh thay vì chỉ ghé thăm.",
    route: "Hành trình: Hanle • Changthang • Hồ Tso Moriri • Làng xa xôi",
    image: "https://media.fittour.vn/uploads/nguoi-dan-gat-lua-ben-ho-ldakh.webp",
    link: "https://thericetour.com/tour/tour-kashmir-zanskar"
  },
  {
    id: "tour-4",
    tag1: "PHẬT GIÁO - CHỮA LÀNH - THIỀN ĐỊNH",
    tag2: "SPIRITUAL JOURNEY",
    title: "04. LADAKH - Spiritual Awakening",
    subtitle: "Inner Peace",
    desc: "Hành trình tìm lại bình yên nội tại giữa những tu viện linh thiêng ngàn năm.",
    route: "Hành trình: Rizong • Alchi • Thiksey • Hemis • Lamayuru",
    image: "https://media.fittour.vn/uploads/2022/05/tu-vien-thiksey.webp",
    link: "https://thericetour.com/tour/tour-ladakh-mua-le-hoi-hemis"
  },
  {
    id: "tour-5",
    tag1: "MOTOR – CHINH PHỤC – PHIÊU LƯU",
    tag2: "10N9Đ | ADVENTURE JOURNEY",
    title: "05. LADAKH MOTOR ADVENTURE",
    subtitle: "Beyond Himalaya",
    desc: "Hành trình dành cho những người đam mê mô tô và các cung đường huyền thoại của Himalaya.",
    route: "Hành trình: Khardung La • Chang La • Pangong • Hanle • Umling La",
    image: "https://media.fittour.vn/uploads/2023/10/motor-trip-ladakh-4.webp",
    link: "https://thericetour.com/tour/tour-motor-ladakh-10n9d-chinh-phuc-deo-cao-nhat"
  }
];

const LIGHT_TESTIMONIALS = [
  {
    group: "Hành Khách Chuyến Thứ 15",
    name: "Nhà báo Hồng Hạnh (Báo Du Lịch, Hà Nội)",
    msg: "Tôi từng đọc hàng chục bài viết kinh nghiệm và tự túc đầy dông dài trên mạng, nhưng bước chân vào hành trình của Fit Tour mới thấu chữ Chuyên Nghiệp. Từ sự ân cần của các local leader bản địa đến bếp lửa tự nấu phở ấm sực giữa đỉnh đèo Nubra dã ngoại. 80 chuyến đi của các bạn là bề dày của sự uy tín thực chứng."
  },
  {
    group: "Hành Khách Chuyến Thứ 52",
    name: "Chú Phạm Thế Cường (69 tuổi, Bình Thạnh, TP.HCM)",
    msg: "Bọn trẻ cứ bảo già run rẩy chớ có lên Ladakh. Nhưng Fit Tour kết nạp những lái xe local cực tốt và chân tình, đêm lầu uống trà dầy mật ngọt, nấu phở bò nóng nghi ngút khói ngay giữa đồng cỏ. Tôi đi về trẻ ra mấy tuổi! Cảm kích các cháu lữ hành vì sự chu đáo tôn trọng này!"
  },
  {
    group: "Hành Khách Chuyến Thứ 79",
    name: "TS. Nguyễn Hoàng Anh (Đại học Quốc gia Hà Nội)",
    msg: "Kinh nghiệm chỉ là chủ quan, quy trình an toàn thân thương của Fit Tour mới là bản sắc. Trải nghiệm tự tay nấu ăn cùng người bản xứ và sự chăm chút tận tâm của local guide là điểm sáng tuyệt vời nhất. Chúc mừng các bạn khép lại chuyến thứ 80 bình an vô sự."
  }
];

export default function EditorialAlpineGuide({ onTourSelect }: EditorialAlpineGuideProps) {
  const [selectedCommitment, setSelectedCommitment] = useState<string>("experience");
  const [selectedChronology, setSelectedChronology] = useState<number>(3);
  const [selectedReview, setSelectedReview] = useState<number>(0);
  const [customWish, setCustomWish] = useState({ author: "", year: "2026", text: "" });
  const [userWishes, setUserWishes] = useState<any[]>(LIGHT_TESTIMONIALS);
  const [wishPublished, setWishPublished] = useState<boolean>(false);

  const handlePostWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customWish.author || !customWish.text) return;
    const newWish = {
      group: `Lời Chúc Mới Quý Giá (2026)`,
      name: `${customWish.author} (Lữ khách chúc mừng mốc 80)`,
      msg: customWish.text
    };
    setUserWishes([newWish, ...userWishes]);
    setWishPublished(true);
    setCustomWish({ author: "", year: "2026", text: "" });
  };

  return (
    <div className="bg-[#FAF9F5] text-stone-900 font-sans tracking-normal text-left min-h-screen relative overflow-x-hidden antialiased" id="editorial-swiss-hub">
      
      {/* Decorative clean line accents representing Swiss editorial guidelines */}
      <div className="absolute top-0 left-10 bottom-0 w-[1px] bg-stone-200/50 pointer-events-none hidden md:block"></div>
      <div className="absolute top-0 right-10 bottom-0 w-[1px] bg-stone-200/50 pointer-events-none hidden md:block"></div>

      {/* Core sections start directly */}

      {/* ======================================================================
          2. THE EDITORIAL DOSSIER: 4 ESSENTIAL BRAND PILLARS
          ====================================================================== */}
      <section className="py-24 border-b border-stone-300 px-4 sm:px-12 relative bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between border-b-2 border-stone-950 pb-6 mb-16 gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-amber-800 uppercase tracking-widest font-black block">■ ĐỊNH VỊ BẢN SẮC</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-stone-950">
                4 Chân Lý Đi Cùng FIT Tour
              </h2>
            </div>
            <p className="text-stone-500 font-serif italic text-base sm:text-base max-w-sm text-left">
              “Chúng tôi từ chối xây dựng hành trình bằng những nội dung lý thuyết suông. Bốn chân lý sau đây tạo nên thành quả 80 chuyến đi trọn vẹn.”
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Minimalist Selection Rails (Left 4 Columns) */}
            <div className="lg:col-span-4 space-y-1">
              {COMMITMENTS.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setSelectedCommitment(pillar.id)}
                    className={`w-full text-left p-5 transition-all flex items-center justify-between border-b border-stone-100 group cursor-pointer ${
                      selectedCommitment === pillar.id
                        ? 'bg-stone-50 pl-6 border-l-4 border-l-stone-950 text-stone-950 font-bold'
                        : 'text-stone-500 hover:text-stone-800 hover:pl-5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <IconComponent className={`w-4 h-4 transition-transform ${selectedCommitment === pillar.id ? 'scale-110 text-amber-850' : 'text-stone-400'}`} />
                      <span className="font-serif text-base sm:text-lg tracking-tight">{pillar.tab}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedCommitment === pillar.id ? 'rotate-90 text-stone-950' : 'text-stone-300 opacity-0 group-hover:opacity-100'}`} />
                  </button>
                );
              })}

              <div className="mt-10 p-6 bg-stone-50 border border-stone-200 rounded text-left">
                <span className="font-mono text-[9px] text-stone-500 block uppercase font-bold tracking-widest mb-2">HỘI CHỨNG AMS KHÔNG KHOAN NHƯỢNG</span>
                <p className="text-xs text-stone-600 leading-relaxed font-serif italic">
                  &quot;Sốc độ cao không chừa một ai chủ quan. Hãy tin người thực hành thực chiến dắt đoàn, không đọc bài viết dạo mát.&quot;
                </p>
              </div>
            </div>

            {/* Highly Polished Editorial Document View (Right 8 Columns) */}
            <div className="lg:col-span-8 bg-stone-50/50 border border-stone-200/80 p-8 sm:p-12 relative min-h-[420px] rounded flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {COMMITMENTS.filter(p => p.id === selectedCommitment).map((p) => {
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6 text-left"
                    >
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-amber-800 font-extrabold bg-amber-50 px-2 py-0.5 border border-amber-900/10">ARTICLE CHUYÊN SÂU</span>
                        <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-950 leading-tight">
                          {p.title}
                        </h3>
                        <p className="font-serif italic text-stone-600 text-base sm:text-lg">
                          &quot;{p.subtitle}&quot;
                        </p>
                      </div>

                      <div className="w-12 h-[1px] bg-stone-950"></div>

                      <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-justify font-sans">
                        {p.content}
                      </p>

                      <div className="mt-6 p-5 bg-white border-l-2 border-amber-600 border border-stone-200 space-y-1 rounded-r">
                        <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest font-black block">CON SỐ THỰC CHỨNG (VERIFIED PROOF)</span>
                        <p className="text-sm sm:text-base text-stone-800 font-serif italic leading-relaxed">
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
          2.5. FACEBOOK-STYLE HORIZONTAL GALLERY SLIDER
          ====================================================================== */}
      <section className="py-20 bg-[#0a0a0a] border-t border-stone-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-3 tracking-wide">
                KHOẢNH KHẮC VIỄN DU
              </h2>
              <p className="text-stone-400 font-sans font-light text-base sm:text-base max-w-xl leading-relaxed">
                Những hình ảnh chân thực nhất từ chuyến đi thực tế. Không cần quá nhiều lời giải thích cho vẻ đẹp nguyên sơ này.
              </p>
            </div>
            
          </div>

          <div className="relative mt-8">
            {/* FLOATING NAVIGATION BUTTONS */}
            <button 
              onClick={() => {
                const el = document.getElementById('image-gallery-scroll');
                if (el) el.scrollBy({ left: -660, behavior: 'smooth' });
              }}
              className="hidden md:flex items-center justify-center bg-[#111] text-white rounded-full cursor-pointer hover:bg-[#c5a365] hover:text-black transition-colors absolute z-50 w-12 h-12 border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ left: '-24px', top: '50%', transform: 'translateY(-50%)' }}
            >
              <ArrowLeft className="w-5 h-5 pointer-events-none" />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('image-gallery-scroll');
                if (el) el.scrollBy({ left: 660, behavior: 'smooth' });
              }}
              className="hidden md:flex items-center justify-center bg-[#111] text-white rounded-full cursor-pointer hover:bg-[#c5a365] hover:text-black transition-colors absolute z-50 w-12 h-12 border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ right: '-24px', top: '50%', transform: 'translateY(-50%)' }}
            >
              <ArrowRight className="w-5 h-5 pointer-events-none" />
            </button>

            <div id="image-gallery-scroll" className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth" style={{ scrollbarWidth: 'none' }}>
              {[
                "https://media.fittour.vn/uploads/lulu-motor-expedition-ladakh.webp",
                "https://media.fittour.vn/uploads/doan-khach-check-in-ho-pangong.webp",
                "https://media.fittour.vn/uploads/du-khach-fit-tour-chup-anh-cung-lac-da-hai-buouu-nubra.webp",
                "https://media.fittour.vn/uploads/2023/10/motor-trip-ladakh-3.webp"
              ].map((img, idx) => (
                <div key={idx} className="relative shrink-0 w-[85vw] md:w-[480px] lg:w-[640px] aspect-video bg-[#111] overflow-hidden snap-start rounded-xl block">
                  <img src={img} alt={`Ladakh Journey ${idx}`} className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-1000 ease-out" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* TRAVELERS WORDS & PEOPLE BEHIND THE JOURNEY */}
      <LocalConnectionSection />

      {/* ======================================================================
          3. SWISS CHRONOLOGY TIMELINE: THE EVOLUTION TRACE OF 80 TOURS
          ====================================================================== */}
      <section className="py-24 border-b border-stone-300 px-4 sm:px-12 relative bg-stone-50/40">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest font-bold">HISTORICAL RECORD BOOK</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-stone-950 tracking-tight">
              Biên Niên Sử Hành Trình
            </h2>
            <p className="text-stone-500 font-serif text-base sm:text-base italic leading-relaxed">
              Mốc 80 đoàn không tự khởi sắc từ hư vô. Xem cách kinh nghiệm thực chiến và văn hóa địa phương kết tụ thành nghệ thuật lữ hành đỉnh phong:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {HISTORICAL_CHRONOLOGY.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedChronology(idx)}
                className={`p-6 bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer group text-left ${
                  selectedChronology === idx 
                    ? 'border-stone-950 ring-1 ring-stone-950 shadow-md translate-y-[-4px]' 
                    : 'border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="font-mono text-xs text-amber-800 font-extrabold">{item.year}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 font-semibold">{item.voyages}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif font-black text-stone-950 text-base sm:text-lg group-hover:text-amber-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-stone-600 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 space-y-1">
                  <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest block font-bold">KẾT TINH THỰC TẾ</span>
                  <p className="font-serif text-xs text-stone-800 italic leading-snug">
                    “{item.milestone}”
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          4. THE SOVEREIGN SAFEGUARD DOSSIER (Replaces manual hacks with local expertise and comfort)
          ====================================================================== */}
      <section id="sovereign-safeguard" className="py-24 border-b border-stone-300 px-4 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest font-black inline-flex items-center gap-1.5 px-3 py-1 bg-stone-50 border border-stone-200 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              DI SẢN TRẢI NGHIỆM ĐỒNG HÀNH
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-stone-950 tracking-tight">
              4 Giá Trị Đồng Hành Chân Thực Bản Địa
            </h2>
            <p className="text-stone-500 text-base sm:text-base leading-relaxed font-serif italic">
              Vượt qua các thông tin quảng cáo sáo rỗng trên mạng xã hội. Đây là 4 giá trị di sản thực tế qua 80 chuyến hành trình tạo nên niềm tự hào Fit Tour:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {SAFETY_LAYERS.map((layer, index) => (
              <div 
                key={index} 
                className="bg-stone-50/40 border border-stone-200 p-6 rounded relative overflow-hidden group hover:bg-white hover:border-stone-950 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute right-4 top-2 font-serif text-6xl font-light text-stone-100/60 select-none group-hover:text-amber-100/40 transition-colors">
                  {layer.step}
                </div>

                <div className="space-y-4 relative z-10 text-left">
                  <div className="inline-flex p-2 bg-stone-950 text-stone-50 rounded">
                    <Shield className="w-4 h-4 text-amber-400" />
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-amber-800 uppercase tracking-widest font-bold block">GIÁ TRỊ {layer.step}</span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-950 leading-tight">
                      {layer.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed text-left mt-2">
                      {layer.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-200/85 bg-white/60 p-3 rounded text-left">
                  <span className="font-mono text-[9px] text-amber-800 font-extrabold block uppercase mb-1">■ MINH CHỨNG TRẢI NGHIỆM:</span>
                  <p className="text-[11px] text-stone-800 leading-normal italic font-serif">
                    {layer.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Elegant horizontal premium CTA banner below */}
          <div className="mt-8 p-8 border border-amber-900/10 bg-amber-50/40 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3 text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest font-black text-amber-800 bg-amber-50 px-2 py-0.5 border border-amber-900/10 inline-block">DESIGN CO-CREATION</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 leading-tight">
                Thiết Kế Hành Trình Của Riêng Bạn
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed max-w-3xl">
                Bạn cùng gia đình hay bố mẹ lớn tuổi mong muốn thấu cảm trọn vẹn Ladakh? Hãy để các Trưởng đoàn kỳ cựu của Fit Tour chu toàn từng người bạn đồng hành, mâm cơm ấm áp dã ngoại và bí quyết thích thích nghi an lòng nhất.
              </p>
            </div>

            <button
              onClick={() => {
                onTourSelect?.({
                  title: "Tư vấn Thiết kế Cung đường Bản địa Ladakh cho Gia đình",
                  duration: "Hỗ trợ chu đáo 24/7",
                  price: "Đại sảnh Fit Tour",
                  tag: "Bạn đồng hành"
                });
              }}
              className="w-full md:w-auto px-6 py-3.5 bg-stone-950 hover:bg-stone-800 text-stone-100 font-mono text-[10px] font-bold rounded uppercase tracking-wider text-center cursor-pointer shadow transition shrink-0"
            >
              Liên Hệ Thiết Kế Riêng Biệt
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================================
          5. TOURS OF DISTINCTION EXHIBITION
          ====================================================================== */}
      <section id="journal-exhibition" className="py-24 bg-[#0a0a0a] border-t border-stone-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] text-[#c5a365] uppercase tracking-[0.2em] font-bold block mb-3">
                The Select Collections
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight">
                Lựa Chọn Hành Trình
              </h2>
              <p className="text-stone-400 font-sans font-light text-base sm:text-base max-w-xl leading-relaxed">
                Thiết kế hoàn hảo được đúc kết từ phản hồi chân thực sau 80 lần hạ lều bờ hồ. Những hành trình độc bản với sự đồng hành của FIT Tour.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://thericetour.com/why-fittour-ladakh" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors border-b border-stone-400 hover:border-white pb-1">
                Vì Sao Chọn FIT Tour?
              </a>
              <a href="https://thericetour.com/country/ladakh/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a365] hover:text-white transition-colors border-b border-[#c5a365] hover:border-white pb-1">
                Khám Phá Ladakh Series <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="relative">
            {/* FLOATING NAVIGATION BUTTONS */}
            <button 
              onClick={() => {
                const el = document.getElementById('tour-gallery-scroll');
                if (el) el.scrollBy({ left: -360, behavior: 'smooth' });
              }}
              className="hidden md:flex items-center justify-center bg-[#111] text-white rounded-full cursor-pointer hover:bg-[#c5a365] hover:text-black transition-colors absolute z-50 w-12 h-12 border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ left: '-24px', top: '40%', transform: 'translateY(-50%)' }}
            >
              <ArrowLeft className="w-5 h-5 pointer-events-none" />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('tour-gallery-scroll');
                if (el) el.scrollBy({ left: 360, behavior: 'smooth' });
              }}
              className="hidden md:flex items-center justify-center bg-[#111] text-white rounded-full cursor-pointer hover:bg-[#c5a365] hover:text-black transition-colors absolute z-50 w-12 h-12 border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ right: '-24px', top: '40%', transform: 'translateY(-50%)' }}
            >
              <ArrowRight className="w-5 h-5 pointer-events-none" />
            </button>

            <div id="tour-gallery-scroll" className="flex gap-4 md:gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth" style={{ scrollbarWidth: 'none' }}>
              {LADAKH_SERIES_TOURS.map((item) => (
                <a href={item.link} key={item.id} target="_blank" rel="noopener" className="group block bg-[#050505] hover:bg-[#111] transition-colors flex-col h-full rounded-2xl overflow-hidden shadow-xl border border-white/5 hover:border-white/20 snap-center relative shrink-0 w-[85vw] md:w-[340px] lg:w-[380px]" style={{ flex: '0 0 auto' }}>
                  <div className="relative w-full overflow-hidden bg-[#111] shrink-0" style={{ aspectRatio: '16/9' }}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy" />
                    <div className="absolute bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] top-4 left-4 px-3 py-1.5 border border-white/10">
                      <span className="text-white font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block text-[9px] tracking-[0.05em] leading-none pt-0.5">{item.tag1}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col grow relative z-10">
                    <p className="font-bold uppercase mb-2 text-[#c5a365] text-[10px] tracking-[0.2em]">{item.tag2}</p>
                    <h3 className="text-white font-serif mb-2 leading-tight transition-colors text-[18px] group-hover:text-[#c5a365]">{item.title}</h3>
                    <p className="text-gray-400 font-serif italic mb-4 text-[13px]">{item.subtitle}</p>
                    <p className="text-gray-300 font-light leading-relaxed mb-6 grow text-[13px]">{item.desc}</p>
                    
                    <div className="pt-4 mt-auto border-t border-white/5">
                      <p className="text-gray-400 leading-relaxed text-[11px]">{item.route}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ======================================================================
          CÔ MÂY U70 - PORTRAIT SPREAD
          ====================================================================== */}
      <VoguePortraitCenterpiece />

      {/* ======================================================================
          6. INTUITIVE CUSTOMER LOGS & WISH WALL
          ====================================================================== */}
      <section className="py-24 border-b border-stone-300 px-4 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Parchment Styled Letters (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-stone-500 uppercase tracking-widest block font-bold">WISH WALL & VOICES</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-stone-950 leading-tight">
                  Cảm Nhận Từ Những Đôi Chân Từng Leo Đèo
                </h2>
                <div className="w-16 h-0.5 bg-stone-950"></div>
              </div>

              {/* Editorial review window */}
              <div className="bg-[#FAF9F5] border border-stone-200 p-8 sm:p-10 relative rounded text-left">
                <Quote className="absolute right-10 bottom-6 w-20 h-20 text-stone-200/50 pointer-events-none select-none z-0" />
                
                <div className="relative z-10 space-y-4">
                  <p className="font-serif text-stone-850 text-stone-800 italic leading-relaxed text-base sm:text-base text-justify">
                    “{userWishes[selectedReview].msg}”
                  </p>
                  
                  <div className="pt-6 border-t border-stone-250/60 border-stone-200 flex flex-wrap gap-4 justify-between items-end">
                    <div>
                      <span className="font-mono text-[10px] text-amber-800 font-extrabold uppercase block tracking-wider">{userWishes[selectedReview].group}</span>
                      <strong className="text-stone-950 font-serif text-xs italic">{userWishes[selectedReview].name}</strong>
                    </div>

                    <div className="flex items-center">
                      {userWishes.map((_, i) => (
                        <button
                          key={i}
                          aria-label={`Xem nhận xét của ${userWishes[i].name}`}
                          onClick={() => setSelectedReview(i)}
                          className="min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer group focus:outline-none"
                        >
                          <span className={`block h-2 rounded-full transition-all ${
                            selectedReview === i ? 'bg-stone-950 w-6' : 'bg-stone-200 group-hover:bg-stone-300 w-2'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant Form to leave a message (Right 5 cols) */}
            <div className="lg:col-span-5 bg-stone-50 border border-stone-200 p-8 rounded space-y-6 text-left">
              <div>
                <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest block font-bold">REGISTRY LOG BOOK</span>
                <h3 className="font-serif font-black text-stone-950 text-xl leading-tight">
                  Bảng Lưu Bút Kỷ Định Mốc Vàng
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">
                  Nếu bạn là lữ khách cũ, hay đang háo hức cho hành trình thong dong cảm ngộ Ladakh cùng Fit Tour, xin hãy gửi lại lời chúc tâm tình:
                </p>
              </div>

              {!wishPublished ? (
                <form onSubmit={handlePostWish} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="registry-name" className="block text-stone-500 font-mono text-[9px] mb-1 font-bold uppercase tracking-wider">Họ & Tên:</label>
                      <input 
                        id="registry-name"
                        type="text" 
                        required
                        placeholder="Ví dụ: Hoàng Minh Long"
                        value={customWish.author}
                        onChange={(e) => setCustomWish({ ...customWish, author: e.target.value })}
                        className="w-full bg-white border border-stone-200 hover:border-stone-300 outline-none p-2.5 rounded text-stone-800 transition text-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="registry-year" className="block text-stone-500 font-mono text-[9px] mb-1 font-bold uppercase tracking-wider">Năm Hành Trình kỉ niệm:</label>
                      <select
                        id="registry-year"
                        value={customWish.year}
                        onChange={(e) => setCustomWish({ ...customWish, year: e.target.value })}
                        className="w-full bg-white border border-stone-200 outline-none p-2.5 rounded text-stone-600 transition text-xs font-semibold"
                      >
                        <option value="2026">2026 (Chuyến 80)</option>
                        <option value="2025">2025 (Chặng 70)</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="Khac">Độc giả mến mộ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-500 font-mono text-[9px] mb-1 font-bold uppercase tracking-wider">Lưu bút chúc viết (Cột mốc thực chứng):</label>
                    <textarea 
                      required
                      rows={3}
                      value={customWish.text}
                      onChange={(e) => setCustomWish({ ...customWish, text: e.target.value })}
                      placeholder="Tuyệt vời nhất là bát phở bò sực sưởi giữa đèo cùng tiếng tấu của local guide bản xứ..."
                      className="w-full bg-white border border-stone-200 hover:border-stone-300 outline-none p-2.5 rounded text-stone-800 transition text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-stone-950 hover:bg-stone-800 text-stone-100 hover:text-white font-mono font-bold uppercase tracking-wider transition text-center cursor-pointer text-xs"
                  >
                    GHI LƯU PHỔ KỶ NIỆM
                  </button>
                </form>
              ) : (
                <div className="p-6 bg-amber-500/5 border border-amber-900/10 rounded text-center space-y-3">
                  <ShieldCheck className="w-10 h-10 text-stone-900 mx-auto" />
                  <span className="font-mono text-[9px] text-amber-800 uppercase tracking-widest font-black block">WISH LOGGED</span>
                  <h4 className="font-serif font-black text-stone-950 text-base">Cảm ơn lời lưu bút của bạn!</h4>
                  <p className="text-xs text-stone-650 text-stone-600 leading-relaxed font-serif italic">
                    Lưu bút tràn đầy cảm mến của bạn đã được lưu giữ trang trọng tại bản đồ kỷ niệm 80 phiên bản hành trình Ladakh rực thắm.
                  </p>
                  <button
                    onClick={() => setWishPublished(false)}
                    className="text-xs font-mono font-bold text-stone-950 hover:underline inline-block uppercase tracking-wider"
                  >
                    Viết thêm lưu bút mới
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          7. FAQ SECTOR
          ====================================================================== */}
      <section className="py-24 border-b border-stone-300 px-4 sm:px-12 bg-stone-50/50">
        <div className="max-w-4xl mx-auto space-y-12 text-left">
          
          <div className="text-center space-y-2">
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest font-bold">COMMON INQUIRIES</span>
            <h2 className="font-serif text-3xl font-black text-stone-950">Đặt Câu Hỏi Chuyên Sâu Về Điểm Đi 80 Chuyến</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Vì sao con số 80 chuyến đi giúp tạo nên kết nối và trải nghiệm chân thực vượt mức thông thường?",
                a: "Trải nghiệm từ 80 lần hạ trại thực tế giúp chúng tôi xây dựng liên minh vô giá với những thủ lĩnh local guide cự phách và lái xe bản xứ dạn sương. Từ đó chúng tôi thiết kế nhịp độ bách bộ thoải mái nhất, tự tay nhóm lửa dã dã lý sưởi ấm gia vị phở Việt thân tình, mang đến linh hồn văn hóa Ladakh trung thực thay vì cách chạy sô hời hợt."
              },
              {
                q: "Quy chuẩn lều Glamping tại Pangong Tso giữ ấm thế nào giữa âm 10 độ?",
                a: "Trải qua 80 chuyến đi thực tế, Fit Tour loại bỏ hoàn toàn dòng lều chất lượng mỏng. Chúng tôi sử dụng lều Glamping cách nhiệt cao cấp kép, lắp đặt hệ thống đệm đơm sưởi nhiệt điện chạy suốt 12 giờ đêm, cung cấp chăn lông tuyết ấm áp, biến đêm lạnh mệt mỏi thành giấc ngủ êm dịu phục hồi thể lực."
              }
            ].map((faq, fIdx) => (
              <div 
                key={fIdx}
                className="bg-white border border-stone-200 rounded p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 font-serif text-base font-bold text-stone-950">
                  <span>{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                </div>
                <p className="mt-4 pt-4 border-t border-stone-100 text-sm sm:text-base text-stone-600 leading-relaxed font-sans text-justify">
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
