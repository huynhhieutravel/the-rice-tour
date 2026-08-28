import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Sparkles, Award, ShieldCheck, Heart, Users, Flame, ChevronRight, Check,
  Activity, Home, Shield, Star, Calendar, ArrowRight, ArrowLeft, Quote, Landmark, MapPin, Eye, Info, HelpCircle
} from 'lucide-react';
import LocalConnectionSection from './LocalConnectionSection.tsx';

interface EditorialAlpineGuideProps {
  onTourSelect?: (tour: any) => void;
  toursSnippet?: React.ReactNode;
}

// Data mirroring the previous model but framed with sophisticated editorial tones
const COMMITMENTS = [
  {
    id: "experience",
    tab: "Lịch Trình Độc Bản",
    title: "Nhịp Độ Thong Dong, Thích Nghi Khoa Học",
    subtitle: "Chúng tôi ưu tiên sự chậm rãi, nói không với những chuyến đi vội vã",
    icon: Compass,
    content: <>Ở <a href="/country/himalaya/" className="text-amber-700 font-medium hover:underline underline-offset-4 decoration-amber-300">Himalaya</a>, đi nhanh là một rủi ro lớn. Bằng kinh nghiệm thực tế, FIT Tour luôn ưu tiên nhịp độ chậm rãi ở những ngày đầu tại Leh để cơ thể làm quen với độ cao. Sự thong dong này không chỉ giúp bạn giữ gìn sức khỏe, mà còn tạo không gian để thư thả ngắm nhìn vẻ đẹp của núi tuyết.</>,
    proof: "Rất nhiều cô chú U60, U70 đã hoàn thành hành trình nhẹ nhàng nhờ tuân thủ nguyên tắc thích nghi này."
  },
  {
    id: "expertise",
    tab: "Người Dẫn Đường Bản Xứ",
    title: "Những Người Dẫn Đường Bản Xứ Tận Tâm",
    subtitle: "Hiểu về Himalaya qua những câu chuyện thật từ người địa phương",
    icon: Users,
    content: <>Không ai hiểu vùng đất này hơn chính những người sinh ra ở đây. FIT Tour may mắn có được những người bạn đồng hành là các hướng dẫn viên địa phương giàu kinh nghiệm người Tây Tạng và Ladakh. Họ không chỉ thạo đường đi nước bước, mà còn chia sẻ những nét văn hóa, tôn giáo sâu sắc bên những tách trà ấm.</>,
    proof: "Đội ngũ hướng dẫn viên bản xứ chân chất, nhiệt tình và luôn chăm sóc khách như người nhà."
  },
  {
    id: "authoritativeness",
    tab: "Chăm Sóc Khẩu Vị",
    title: "Chăm Chút Từng Bữa Ăn Nơi Đèo Cao",
    subtitle: "Kết hợp ẩm thực địa phương và những hương vị quê nhà",
    icon: Flame,
    content: "Ăn ngon và đủ chất là điều kiện tiên quyết cho những chuyến đi dài. Để mọi người luôn ăn uống ngon miệng, FIT Tour chuẩn bị sẵn nguyên liệu từ Việt Nam, thỉnh thoảng tự tay nấu những bát phở bò nóng hổi ngay giữa cái lạnh của vùng cao. Song song đó, chúng tôi cũng chọn lọc kỹ lưỡng những quán ăn địa phương sạch sẽ, ngon miệng để bạn yên tâm trải nghiệm.",
    proof: "Sự kết hợp tinh tế giữa những bữa ăn bản địa và hương vị Việt Nam giúp khách luôn ấm bụng."
  },
  {
    id: "trustworthiness",
    tab: "Quản Trị Rủi Ro",
    title: "Ưu Tiên An Toàn & Chuẩn Bị Y Tế Kỹ Lưỡng",
    subtitle: "Luôn có phương án dự phòng cho mọi tình huống thời tiết và sức khỏe",
    icon: ShieldCheck,
    content: "An toàn của bạn luôn được đặt lên hàng đầu. Các xe của FIT Tour đều trang bị sẵn bình oxy y tế dung tích lớn và máy đo SpO2 để theo dõi sức khỏe mỗi ngày. Hơn thế nữa, với kinh nghiệm đi tour thực tế, chúng tôi luôn có phương án linh hoạt xử lý các tình huống bất ngờ như sạt lở đường hay hoãn chuyến bay nội địa.",
    proof: "Hơn 150 chuyến đi an toàn là minh chứng cho sự chuẩn bị kỹ lưỡng và kinh nghiệm thực tế của chúng tôi."
  }
];

const HISTORICAL_CHRONOLOGY = [
  {
    year: "2017 – 2018",
    voyages: "Hành Trình Tiền Trạm",
    title: "Những Bước Chân Đầu Tiên",
    desc: <>Max Vũ cùng những người bạn đồng hành rong ruổi trên chiếc xe Jeep, trực tiếp đi qua từng ngọn đèo và khảo sát kỹ lưỡng các tuyến đường. Đó là những ngày tháng vất vả để đúc kết ra một lộ trình thực sự an toàn và phù hợp cho du khách Việt khi khám phá Himalaya.</>,
    milestone: "Nền móng được xây dựng từ những chuyến đi khảo sát thực tế vất vả nhất."
  },
  {
    year: "2019 – 2022",
    voyages: "Hành trình 16 - 45",
    title: "Gắn Kết Với Người Bản Xứ",
    desc: "Thay vì chỉ đi qua như những vị khách, FIT Tour chọn cách làm bạn với người dân địa phương. Chúng tôi may mắn mời được những hướng dẫn viên người Tây Tạng dày dặn kinh nghiệm đồng hành, giúp du khách hiểu sâu hơn về văn hóa và con người nơi đây.",
    milestone: "Những bữa phở bò nóng hổi tự nấu giữa thiên nhiên trở thành kỷ niệm khó quên."
  },
  {
    year: "2023 – 2025",
    voyages: "Hành trình 46 - 120",
    title: "Nâng Cao Trải Nghiệm & Tiện Nghi",
    desc: "Để vượt qua cái lạnh khắc nghiệt bên hồ Pangong, chúng tôi đưa vào sử dụng lều Glamping có khả năng giữ nhiệt. Những chiếc đệm sưởi, ly trà gừng và bữa ăn ấm cúng đã giúp hành trình trở nên nhẹ nhàng và thoải mái hơn rất nhiều.",
    milestone: "Giúp hàng trăm cô chú lớn tuổi tự tin hoàn thành chuyến đi Himalaya một cách khỏe mạnh."
  },
  {
    year: "2026 - Nay",
    voyages: "Cột Mốc Kỷ Lục 150+",
    title: "Hành Trình Trọn Vẹn Cảm Xúc",
    desc: <>Đúc kết từ kinh nghiệm của hơn 150 chuyến đi, từng nhịp độ di chuyển và nghỉ ngơi đều được tính toán hợp lý. FIT Tour mong muốn mỗi chuyến đi không chỉ là tham quan, mà là một hành trình trọn vẹn để bạn cảm nhận sự bình yên của Himalaya.</>,
    milestone: "Trở thành người bạn đồng hành tin cậy, mang đến trải nghiệm an toàn và sâu sắc."
  }
];

const SAFETY_LAYERS = [
  {
    step: "01",
    name: "Đội Ngũ Hướng Dẫn Viên Bản Xứ Tận Tâm",
    desc: "Những người bạn đồng hành người Tây Tạng hiền lành, thông thuộc từng cung đường và luôn sẵn sàng chia sẻ những nét văn hóa địa phương đặc sắc.",
    impact: "Sự nhiệt tình của họ giúp mọi người nhanh chóng làm quen và cảm thấy gần gũi."
  },
  {
    step: "02",
    name: "Chăm Lo Bữa Ăn & Giấc Ngủ",
    desc: "Từ chiếc đệm sưởi ấm áp trong đêm lạnh đến bình trà gừng nóng hổi mỗi sáng. Cả đoàn thỉnh thoảng cùng nhau nhóm bếp nấu ăn, tạo nên không khí gia đình rộn ràng giữa chuyến đi.",
    impact: "Những bát phở bò mang hương vị Việt Nam luôn là niềm vui nhỏ giúp mọi người xua tan mệt mỏi."
  },
  {
    step: "03",
    name: "Nguyên Tắc Thích Nghi Độ Cao Khoa Học",
    desc: "Những ngày đầu tiên luôn được thiết kế thư thả, dạo quanh phố cổ Leh và uống trà nhẹ nhàng để cơ thể từ từ làm quen với sự thay đổi của áp suất không khí.",
    impact: "Kinh nghiệm thực tế này giúp mọi người luôn giữ được sức khỏe tốt trong suốt những ngày tiếp theo."
  },
  {
    step: "04",
    name: "Chuẩn Bị Y Tế & Phương Án Dự Phòng",
    desc: "Hướng dẫn viên luôn theo dõi sát sức khỏe của từng khách. Trên xe trang bị đủ bình oxy lớn và thiết bị y tế. Chúng tôi cũng giữ liên lạc thường xuyên với các cơ sở y tế địa phương.",
    impact: "Sự chuẩn bị kỹ lưỡng mang lại cảm giác an tâm cho tất cả các thành viên trong đoàn."
  }
];

const LADAKH_SERIES_TOURS = [
  {
    id: "tour-1",
    tag1: "VĂN HÓA - CẢNH QUAN - TRẢI NGHIỆM LẦN ĐẦU",
    tag2: "8N7Đ | SIGNATURE JOURNEY",
    title: "01. LADAKH - Vùng Đất Của Các Lạt Ma",
    subtitle: "Land of the Lamas",
    desc: "Hành trình đầu tiên dành cho những ai muốn khám phá vẻ đẹp kinh điển của Himalaya.",
    route: "Hành trình: Leh • Nubra • Bhutan • Tây Tạng • Tu viện cổ",
    image: "https://media.fittour.vn/uploads/2024/06/man-mua-truyen-thong-tai-le-hoi-hemis.webp",
    link: "https://thericetour.com/tour/tour-himalaya-roadtrip"
  },
  {
    id: "tour-2",
    tag1: "THÁM HIỂM - ROADTRIP - ÍT NGƯỜI ĐẶT CHÂN TỚI",
    tag2: "10N9Đ | EXPEDITION JOURNEY",
    title: "02. LADAKH - Kingdom Above the Clouds",
    subtitle: "Kashmir • Nepal • Himalaya",
    desc: "Hành trình xuyên qua những vùng đất hùng vĩ và biệt lập nhất của Himalaya.",
    route: "Hành trình: Srinagar • Drass • Kargil • Nepal • Leh",
    image: "https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-du-ky-o-Nepal.webp",
    link: "https://thericetour.com/tour/tour-kashmir-zanskar"
  },
  {
    id: "tour-3",
    tag1: "BẢN ĐỊA - NHIẾP ẢNH - TRẢI NGHIỆM SÂU",
    tag2: "IMMERSIVE JOURNEY",
    title: "03. LIVING LADAKH",
    subtitle: "Beyond the Tourist Trail",
    desc: "Dành cho những người muốn sống cùng Himalaya thay vì chỉ ghé thăm.",
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
    link: "https://thericetour.com/tour/tour-himalaya-mua-le-hoi-hemis"
  },
  {
    id: "tour-5",
    tag1: "MOTOR – CHINH PHỤC – PHIÊU LƯU",
    tag2: "10N9Đ | ADVENTURE JOURNEY",
    title: "05. LADAKH MOTOR ADVENTURE",
    subtitle: "Beyond Himalaya",
    desc: "Hành trình dành cho những người đam mê mô tô và các cung đường huyền thoại của Himalaya.",
    route: "Hành trình: Tây Tạng • Chang La • Bhutan • Hanle • Umling La",
    image: "https://media.fittour.vn/uploads/2023/10/motor-trip-himalaya-4.webp",
    link: "https://thericetour.com/tour/tour-motor-himalaya-10n9d-chinh-phuc-deo-cao-nhat"
  }
];

const LIGHT_TESTIMONIALS = [
  {
    group: "Đánh Giá Hành Trình Ladakh",
    name: "Chị Minh Nguyễn (TP.HCM) • Chuyến đi Ladakh",
    msg: "Ladakh đẹp đến ngạt thở nhưng độ cao 3.500m - 5.300m từng làm mình rất e ngại. May mắn là đi cùng FIT Tour, từ bình oxy, đo SpO2 mỗi sáng đến từng bữa ăn ấm nóng giữa thung lũng Nubra và đèo Khardung La đều được chăm sóc tận răng. Đội ngũ guide bản địa và tour leader cực kỳ có tâm."
  },
  {
    group: "Đánh Giá Hành Trình Hành Hương Kailash",
    name: "Anh Huân Nguyễn (Hà Nội) • Kora Núi Thiêng Kailash & Tây Tạng",
    msg: <>Vòng Kora 52km quanh <a href="/country/kailash/" className="text-amber-700 font-medium hover:underline underline-offset-4 decoration-amber-300">núi thiêng Kailash</a> ở độ cao trên 5.000m là thử thách lớn nhất cuộc đời tôi. Nhờ sự am hiểu sâu sắc về y tế độ cao và kinh nghiệm dẫn đoàn hơn trăm chuyến của FIT Tour, cả đoàn ai cũng hoàn thành trọn vẹn và bình an trở về trong niềm xúc động khó tả.</>
  },
  {
    group: "Đánh Giá Hành Trình Du Mục Zanskar",
    name: "Đặng Thùy Dương • Những ngày du mục Zanskar (Ladakh)",
    msg: "Không phải chuyến du lịch cưỡi ngựa xem hoa thông thường. FIT Tour đưa mình chạm vào đời sống du mục thực sự của người dân bản xứ, cắm trại bên bờ hồ Pangong và lắng nghe tiếng chuông tu viện cổ. Cảm giác như tìm thấy một góc bình yên tuyệt đối giữa lòng dãy Himalaya."
  },
  {
    group: "Đánh Giá Hành Trình Bhutan",
    name: "Cô Bích Liên (65 tuổi, Đà Nẵng) • Chinh phục Tu viện Tiger's Nest",
    msg: "Lúc đầu gia đình cứ lo tôi lớn tuổi đi bộ lên tu viện Tiger's Nest ở Bhutan không nổi. Nhưng nhờ lịch trình FIT Tour phân bổ khoa học, đi chậm thích nghi độ cao và các cháu hướng dẫn viên động viên từng bước, tôi đã chạm tay vào tu viện một cách nhẹ nhàng ngoài mong đợi."
  }
];

export default function EditorialAlpineGuide({ onTourSelect, toursSnippet }: EditorialAlpineGuideProps) {
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
      name: `${customWish.author} (Lữ khách chúc mừng mốc 150)`,
      msg: customWish.text
    };
    setUserWishes([newWish, ...userWishes]);
    setWishPublished(true);
    setCustomWish({ author: "", year: "2026", text: "" });
  };

  return (
    <div className="bg-[#FAF9F5] text-stone-900 font-sans tracking-normal text-left min-h-screen relative overflow-x-hidden antialiased" id="editorial-swiss-hub">
      
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
              “Chúng tôi từ chối xây dựng hành trình bằng những nội dung lý thuyết suông. Bốn chân lý sau đây tạo nên thành quả 150 hành trình trọn vẹn.”
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
                {
                  src: "https://media.fittour.vn/uploads/du-khach-fit-tour-check-in-khardungla-pass.webp",
                  alt: "Du khách FIT Tour check-in đèo Khardung La - Ladakh"
                },
                {
                  src: "https://media.fittour.vn/uploads/du-khach-fit-tour-chup-anh-cung-lac-da-hai-buouu-nubra.webp",
                  alt: "Du khách trải nghiệm thung lũng Nubra - Ladakh"
                },
                {
                  src: "https://media.fittour.vn/uploads/2024/07/du-khach-tour-kailash-tan-huong-su-tuyet-voi-tai-song-bang-karola.webp",
                  alt: "Chiêm ngưỡng sông băng Karola - Tây Tạng"
                },
                {
                  src: "https://media.fittour.vn/uploads/2023/07/doan-khach-kham-pha-bhutan-den-tu-vien-tiger-nest.webp",
                  alt: "Đoàn khách FIT Tour chinh phục tu viện Tiger's Nest - Bhutan"
                },
                {
                  src: "https://media.fittour.vn/uploads/2022/11/doan-khach-fit-tour-check-in-diem-de-everest-base-camp.webp",
                  alt: "Đoàn khách FIT Tour check-in Everest Base Camp"
                },
                {
                  src: "https://media.fittour.vn/uploads/2022/11/du-khach-fit-tour-o-himalayas.webp",
                  alt: "Du khách FIT Tour trên cung đường Himalaya"
                },
                {
                  src: "https://media.fittour.vn/uploads/chi-ly-kora-kailash-lan-thu-hai.webp",
                  alt: "Hành hương quanh đỉnh núi thiêng Kailash"
                },
                {
                  src: "https://media.fittour.vn/uploads/cac-nha-su-nghi-ngoi-trong-khuon-vien-tu-vien-diskit.webp",
                  alt: "Các nhà sư tại tu viện Diskit - Ladakh"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative shrink-0 w-[85vw] md:w-[480px] lg:w-[640px] aspect-video bg-[#111] overflow-hidden snap-start rounded-xl block">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    width="640"
                    height="360"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-1000 ease-out" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* TRAVELERS WORDS & PEOPLE BEHIND THE JOURNEY */}
      <LocalConnectionSection />

      {/* ======================================================================
          3. SWISS CHRONOLOGY TIMELINE: THE EVOLUTION TRACE OF 150+ TOURS
          ====================================================================== */}
      <section className="py-24 border-b border-stone-300 px-4 sm:px-12 relative bg-stone-50/40">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest font-bold">HISTORICAL RECORD BOOK</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-stone-950 tracking-tight">
              Biên Niên Sử Hành Trình
            </h2>
            <p className="text-stone-500 font-serif text-base sm:text-base italic leading-relaxed">
              Kỷ lục 150+ chuyến đi không phải là điều ngẫu nhiên. Đó là quá trình đúc kết từ những ngày tháng đi khảo sát thực tế và sự thấu hiểu sâu sắc về văn hóa địa phương:
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
      <section id="sovereign-safeguard" className="py-24 px-4 sm:px-12 bg-white">
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
              Không quảng cáo sáo rỗng, đây là 4 giá trị thực tế đúc kết từ 150 chuyến đi tạo nên bản sắc của FIT Tour:
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
                Bạn cùng gia đình hay bố mẹ lớn tuổi muốn có một chuyến đi Himalaya nhẹ nhàng, an toàn? Hãy để đội ngũ FIT Tour đồng hành, chuẩn bị chu đáo từ bữa ăn ấm áp đến kinh nghiệm thích nghi độ cao khoa học nhất.
              </p>
            </div>

            <button
              onClick={() => {
                onTourSelect?.({
                  title: "Tư vấn Thiết kế Cung đường Bản địa Himalaya cho Gia đình",
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
      {toursSnippet ? (
        toursSnippet
      ) : (
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
                Thiết kế hoàn hảo được đúc kết từ phản hồi chân thực sau 150 lần hạ lều bờ hồ. Những hành trình độc bản với sự đồng hành của FIT Tour.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://thericetour.com/why-fittour-himalaya" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors border-b border-stone-400 hover:border-white pb-1">
                Vì Sao Chọn FIT Tour?
              </a>
              <a href="https://thericetour.com/country/himalaya/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a365] hover:text-white transition-colors border-b border-[#c5a365] hover:border-white pb-1">
                Khám Phá Himalaya Series <ArrowRight className="w-3 h-3" />
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
      )}

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
                  Sổ Lưu Bút Kỷ Niệm 150 Hành Trình
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">
                  Nếu bạn đã từng đồng hành hoặc đang ấp ủ giấc mơ khám phá Himalaya cùng FIT Tour, hãy để lại đôi dòng cảm nghĩ nhé:
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
                      <label htmlFor="registry-year" className="block text-stone-500 font-mono text-[9px] mb-1 font-bold uppercase tracking-wider">Năm đồng hành:</label>
                      <select 
                        id="registry-year"
                        value={customWish.year}
                        onChange={(e) => setCustomWish({ ...customWish, year: e.target.value })}
                        className="w-full bg-white border border-stone-200 outline-none p-2.5 rounded text-stone-600 transition text-xs font-semibold"
                      >
                        <option value="2026">2026 (Chuyến 150)</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="Khac">Độc giả mến mộ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-500 font-mono text-[9px] mb-1 font-bold uppercase tracking-wider">Lời chúc hoặc cảm nghĩ của bạn:</label>
                    <textarea 
                      required
                      rows={3}
                      value={customWish.text}
                      onChange={(e) => setCustomWish({ ...customWish, text: e.target.value })}
                      placeholder="Chia sẻ cảm xúc hoặc kỷ niệm đáng nhớ của bạn trong chuyến đi..."
                      className="w-full bg-white border border-stone-200 hover:border-stone-300 outline-none p-2.5 rounded text-stone-800 transition text-xs resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 bg-stone-950 hover:bg-stone-800 text-stone-100 hover:text-white font-mono font-bold uppercase tracking-wider transition text-center cursor-pointer text-xs"
                  >
                    GỬI LỜI CHÚC
                  </button>
                </form>
              ) : (
                <div className="p-6 bg-amber-500/5 border border-amber-900/10 rounded text-center space-y-3">
                  <ShieldCheck className="w-10 h-10 text-stone-900 mx-auto" />
                  <span className="font-mono text-[9px] text-amber-800 uppercase tracking-widest font-black block">WISH LOGGED</span>
                  <h4 className="font-serif font-black text-stone-950 text-base">Cảm ơn lời lưu bút của bạn!</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-serif italic">
                    Cảm ơn bạn rất nhiều! Lời chúc của bạn đã được lưu vào sổ kỷ niệm 150 hành trình của FIT Tour.
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
            <h2 className="font-serif text-3xl font-black text-stone-950">Câu Hỏi Thường Gặp</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Làm thế nào để phòng tránh và đối phó với hội chứng sốc độ cao (AMS) ở Himalaya?",
                a: "Sự an toàn của du khách luôn là ưu tiên hàng đầu tại FIT Tour. Tất cả các hành trình của chúng tôi đều được thiết kế với nhịp độ leo dốc chậm rãi (Acclimatization), đảm bảo cơ thể có đủ thời gian thích nghi. Đội ngũ y tế luôn trang bị đầy đủ bình oxy tiêu chuẩn, máy đo nồng độ oxy trong máu (SpO2), và các loại thuốc đặc trị. Nếu có bất kỳ dấu hiệu mệt mỏi nào, hướng dẫn viên bản địa giàu kinh nghiệm sẽ ngay lập tức hỗ trợ và điều chỉnh nhịp độ chuyến đi phù hợp với thể trạng của bạn."
              },
              {
                q: "Người lớn tuổi hoặc sức khỏe không quá tốt có thể tham gia các tour Himalaya không?",
                a: "Hoàn toàn có thể. FIT Tour đã đồng hành cùng nhiều du khách trên 60 tuổi hoàn thành xuất sắc các chuyến đi đến Ladakh, Bhutan hay Tây Tạng. Bí quyết nằm ở một lịch trình được thiết kế cá nhân hóa, thong thả, di chuyển chủ yếu bằng xe chuyên dụng thoải mái và hạn chế tối đa việc trekking gắng sức. Chúng tôi luôn tư vấn kỹ lưỡng tình trạng sức khỏe của từng khách hàng trước khi khởi hành để đưa ra lời khuyên và sắp xếp phù hợp nhất."
              },
              {
                q: "Vấn đề ăn uống ở những vùng núi cao hẻo lánh sẽ được giải quyết như thế nào?",
                a: "Ẩm thực vùng cao thường khá khác biệt và đôi khi khó hợp khẩu vị với người Việt. Thấu hiểu điều này, FIT Tour luôn có sự chuẩn bị chu đáo về hậu cần ăn uống. Bên cạnh việc chọn lọc những nhà hàng địa phương sạch sẽ, đảm bảo vệ sinh, tour leader của chúng tôi luôn mang theo các nguyên liệu quê nhà (như chà bông, mì gói, gia vị phở, trà gừng) để nấu những bữa ăn ấm cúng, đậm đà hương vị Việt, giúp du khách luôn ấm bụng và tràn đầy năng lượng giữa thời tiết lạnh giá."
              },
              {
                q: "Thủ tục xin visa và giấy phép vào các khu vực đặc biệt (Tây Tạng, Ladakh) có phức tạp không?",
                a: "Đến với các vùng biên giới và khu tự trị tại Himalaya như Tây Tạng hay Ladakh đòi hỏi nhiều loại giấy phép (Permit) khắt khe. Tuy nhiên, du khách không cần phải bận tâm về vấn đề này. FIT Tour sở hữu mạng lưới đối tác bản địa uy tín và nhiều năm kinh nghiệm xử lý hồ sơ, đảm bảo bao trọn gói toàn bộ thủ tục Visa và Permit hợp lệ, nhanh chóng và tỷ lệ đậu cao nhất. Bạn chỉ cần chuẩn bị hành lý và một tinh thần thoải mái."
              },
              {
                q: "Thời tiết Himalaya rất khắc nghiệt, FIT Tour có giải pháp lưu trú nào đảm bảo giữ ấm không?",
                a: "Khác với những chuyến du lịch bụi thông thường, trải nghiệm lưu trú cùng FIT Tour luôn ưu tiên sự ấm áp và tiện nghi. Tại các vùng hẻo lánh như hồ Pangong (Ladakh) hay Everest Base Camp, chúng tôi sử dụng hệ thống lều Glamping hoặc Guest house cao cấp có lớp cách nhiệt dày. Giường luôn được trang bị đệm sưởi điện, chăn lông cừu, túi ngủ chịu nhiệt độ âm và máy sưởi không gian, đảm bảo bạn luôn có một giấc ngủ êm ái, trọn vẹn để phục hồi sinh lực sau một ngày dài."
              },
              {
                q: "Kinh nghiệm từ hơn 150 chuyến đi giúp FIT Tour mang lại trải nghiệm độc quyền như thế nào?",
                a: "Con số 150+ đoàn khách không chỉ là một thành tựu, mà là bảo chứng cho độ am hiểu địa hình sâu sắc của FIT Tour. Chúng tôi thiết lập được mối quan hệ khăng khít với những người dẫn đường (local guide), trưởng xe (road captain) và các tu viện trưởng uy tín nhất tại khu vực. Điều này giúp FIT Tour đưa du khách đến những góc nhìn bí ẩn, tham gia các nghi lễ thiêng liêng độc quyền mà các tour đại trà không thể tiếp cận, tạo nên một hành trình mang đậm tính cá nhân."
              }
            ].map((faq, fIdx) => (
              <details 
                key={fIdx}
                className="group bg-white border border-stone-200 rounded p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-start justify-between gap-4 font-serif text-base font-bold text-stone-950 cursor-pointer list-none outline-none">
                  <span className="group-open:text-amber-800 transition-colors">{faq.q}</span>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity text-stone-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity text-amber-800 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 pt-4 border-t border-stone-100 text-sm sm:text-base text-stone-600 leading-relaxed font-sans text-justify animate-fade-in-down">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
