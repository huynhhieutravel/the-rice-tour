import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Shield, Heart, ArrowRight, Star, Sliders, ChevronLeft, ChevronRight, Eye, Focus, ZoomIn, Info, AlertTriangle, Send, CheckCircle2, Camera, Layers, Volume2
} from 'lucide-react';

interface CinematicOdysseyGuideProps {
  onTourSelect?: (tour: any) => void;
}

const CINEMATIC_CHAPTERS = [
  {
    id: "chapter1",
    num: "CHƯƠNG I",
    title: "Trực Giác Thực Địa Chín Năm Trọc Lằn",
    hook: "80 Chuyến Đi Tuyệt Đối Không Sự Cố Tại Himalaya",
    desc: "Suốt một thập kỷ băng sương, người dẫn đầu của Fit Tour không đọc thông tin qua mặt giấy. Chúng tôi ngửi thấy gió bấc đang dồn về thung lũng Nubra, thấu suốt nhịp thở nông sâu của đá mỏi bên đường đèo Tây Tạng. Trực giác dạn dày là dải radar an toàn vững chãi nhất cho cha mẹ bạn.",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
    quote: "“Kinh nghiệm không chỉ là thời gian, đó là số lần bạn cứu vãn hành trình trước khi cơn sương tuyết ập xuống.”",
    author: "Huỳnh Hiếu - Trưởng đoàn Tiền trạm"
  },
  {
    id: "chapter2",
    num: "CHƯƠNG II",
    title: "Y Phác Đồ 5 Lớp & Khoa Học Áp Suất",
    hook: "Toán Học Thích Thể Bảo Hộ Tế Bào Phế Nang",
    desc: "Fit Tour phản đối việc ngậm gừng dân mộc cầu may khi đối mặt với hội chứng AMS độ cao nguy hiểm. Toàn bộ lộ trình được kiến thiết khoa học với chặng nghỉ lùi tĩnh 48 giờ tuyệt vời tại Leh giúp phế nang thư giãn tự nhiên, đồng hành sát sao cùng SUV 4x4 trang bị bình oxi nén khí áp cực kì đầy đủ.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    quote: "“Áp suất khí loãng là một bài toán cơ học, và chúng tôi giải quyết nó bằng phác đồ giải nén lâm học.”",
    author: "TS. BS Nguyễn Minh - Cố vấn Y khoa"
  },
  {
    id: "chapter3",
    num: "CHƯƠNG III",
    title: "Đường Dây Nóng Cứu Hộ Không Quân",
    hook: "Trực Thăng Quân Sự SNM Hospital Leh 45 Phút",
    desc: "Là đơn vị duy nhất sở hữu liên hệ khẩn cấp trực hệ trực tiếp với SNM Hospital thủ phủ Leh và Bộ chỉ huy Không quân Ấn Độ vùng biên thùy. Khi có biến cố sụt SpO2 cấp tính dồn dập, trực thăng dã chiến bốc thẳng lữ khách rời đỉnh mây về bệnh viện trung tâm rành mạch trong chưa đầy 45 phút.",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop",
    quote: "“Ở vùng biên ải quân sự nhạy cảm, thế lực liên lạc trực thăng chính là ranh giới sống còn.”",
    author: "Bảo chứng Ngoại Giao - Fit Tour India Ops"
  },
  {
    id: "chapter4",
    num: "CHƯƠNG IV",
    title: "Vọng Ước Ngân Hà Của Bố Mẹ Tuổi 70",
    hook: "Ấm Áp Sưởi Nhiệt Glamping Âm 10 Độ Bhutan",
    desc: "Bản lĩnh của chuyến đi thứ 80 là hiện thực hóa giấc mơ ngắm dải vũ trụ Milky Way lộng lẫy bên hồ Bhutan giá lạnh âm 10 độ cho những lữ khách U70 gối mỏi. Bằng lều sưởi nhiệt điện ấm sực hai lớp cao cấp, trà gừng hâm nóng liên hoàn, kẹp sát sức khỏe trong lòng bàn tay hậu cần chu đáo tỉ mỉ.",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1600&auto=format&fit=crop",
    quote: "“Bố mẹ đã dành cả đời bọc lót cho con cháu, tuổi 70 xứng đáng được ngự trên nóc nhà thế giới đón bình minh một cách trọn sưởi.”",
    author: "Mỹ Trinh - Ban Hậu cần"
  }
];

const FILMIC_TOURS = [
  {
    id: "tour1",
    name: "LADAKH THƯỢNG ĐỈNH - ĐÈN TRỜI PANGONG TSO",
    concept: "Chinh Phục Thiên Hà Toàn Sưởi Lều Glamping",
    duration: "10 Ngày / 9 Đêm",
    price: "35.500.000 vnđ",
    heroImg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Vượt đỉnh đèo Tây Tạng (5.359m) thung thăng ung dung",
      "Nghỉ đêm lều Glamping VIP có đệm nhiệt sưởi ấm 40°C giữa mây",
      "Hệ thống SUV 4x4 riêng biệt, oxy y tế gối đầu đầy đủ nước nôi",
      "Tiệc trà bơ du mục bên hồ muối đổi màu diệu kỳ"
    ],
    verified: "Mốc Son Chuyến Đi Thứ 80 Tuyệt Mỹ"
  },
  {
    id: "tour2",
    name: "THU VÀNG SÔNG INDUS - CHIỀU SƯƠNG BÁCH BỘ",
    concept: "Thư Thái Tĩnh Thức Dài Phong Đỏ Khách Sạn Sưởi Ấm",
    duration: "9 Ngày / 8 Đêm",
    price: "32.900.000 vnđ",
    heroImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Khách sạn sưởi trung tâm điều khí ấm áp tại thủ phủ Leh",
      "Vận động thong thả, đo đạc SPO2 và huyết áp đều đặn mỗi sáng",
      "Cung đường ngắm lá phong rực đỏ soi bóng ngọc bích êm dệu",
      "Bánh nướng bơ sữa dân dã thung lũng Nubra ngọt lịm"
    ],
    verified: "Nâng niu tuyệt vời cho du khách U70"
  },
  {
    id: "tour3",
    name: "HÀNH TRÌNH TÂM THỨC - MẬT TÔNG TU VIỆN THIKSEY",
    concept: "Bình An Khai Huyệt Thiền Định Đầu Sóng Everest",
    duration: "8 Ngày / 7 Đêm",
    price: "29.900.000 vnđ",
    heroImg: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Đón bình minh thiền học dốc tu viện vách núi Thiksey tráng lệ",
      "Tham gia khóa cầu an Mật Tông linh nghiệm Tây Tạng gốc",
      "Trò chuyện riêng tư cùng các đại sư Tây Tạng hóa thân",
      "Hậu cần nâng niu nhịp tim, không gắng sức phế quản"
    ],
    verified: "35 Lượt đoàn lớn tuổi đúc kết kinh nghiệm"
  }
];

export default function CinematicOdysseyGuide({ onTourSelect }: CinematicOdysseyGuideProps) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  
  // Custom Interactive Camera Lens HUD (Altitude Gauge)
  const [hudAltitude, setHudAltitude] = useState(3800); // meters
  const [hudOxygenShield, setHudOxygenShield] = useState(true);
  const [exposureVal, setExposureVal] = useState(75);
  
  // Interactive Custom Postcard Box
  const [postcardName, setPostcardName] = useState("");
  const [postcardDesc, setPostcardDesc] = useState("");
  const [postcardFrame, setPostcardFrame] = useState<'vintage' | 'cinemahdr' | 'monochrome'>('cinemahdr');
  const [submittedPostcards, setSubmittedPostcards] = useState<any[]>([
    {
      name: "GIA ĐÌNH BÁC LONG U71",
      desc: "NHỮNG BỨC ẢNH CHỤP TẠI PANGONG TSO LÀ KÝ ỨC VÔ GIÁ CỦA CUỘC ĐỜI TÔI. ĐOÀN LO CO SƯỞI ĐIỆN QUÁ ẤM, PHÁC ĐỒ THEO SÁT CHẰNG TỐT NÊN KHÔNG HỀ MỆT MỎI.",
      frame: "vintage",
      date: "09.06.2026"
    },
    {
      name: "MINH THƯ - HÀ NỘI",
      desc: "CHƯA BAO GIỜ THẤY ĐƠN VỊ DU LỊCH NÀO TRÂN TRỌNG HÌNH ẢNH VÀ TRẢI NGHIỆM KHÁCH HÀNG CHU ĐÁO ĐẾN VẬY. 5 SAO CHO CHUYẾN ĐI THỨ 80!",
      frame: "cinemahdr",
      date: "08.06.2026"
    }
  ]);
  const [postcardAdded, setPostcardAdded] = useState(false);

  // Auto-scroll chapters slightly just to offer dynamic feel if clicked
  const nextChapter = () => {
    setActiveChapterIndex((prev) => (prev + 1) % CINEMATIC_CHAPTERS.length);
  };

  const prevChapter = () => {
    setActiveChapterIndex((prev) => (prev - 1 + CINEMATIC_CHAPTERS.length) % CINEMATIC_CHAPTERS.length);
  };

  // Math simulation for real-time camera lens HUD values
  const simSpo2 = Math.max(65, Math.min(100, Math.round(98 - ((hudAltitude - 3000) / 95) + (hudOxygenShield ? 9 : -12))));
  const simHeartRate = Math.max(60, Math.min(145, Math.round(70 + ((hudAltitude - 3000) / 42) - (hudOxygenShield ? 11 : -22))));

  const handleCreatePostcard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcardName || !postcardDesc) return;
    const newPostcard = {
      name: postcardName.toUpperCase(),
      desc: postcardDesc.toUpperCase(),
      frame: postcardFrame,
      date: "09.06.2026"
    };
    setSubmittedPostcards([newPostcard, ...submittedPostcards]);
    setPostcardName("");
    setPostcardDesc("");
    setPostcardAdded(true);
  };

  return (
    <div className="bg-[#0b0c10] text-[#c5c6c7] font-sans text-left min-h-screen relative overflow-hidden pb-16" id="cinematic-odyssey-portal">
      
      {/* Cinematic grid layer overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-10"></div>
      
      {/* Background radial atmosphere glow */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

      {/* ======================================================================
          PART 1: WIDE CINEMATIC HERO SLIDERSHOW (CHAPTER BASED VISUALS)
          ====================================================================== */}
      <section className="relative min-h-[90vh] flex flex-col justify-end bg-black overflow-hidden border-b border-stone-800">
        
        {/* Full-bleed background image with crossfade */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={CINEMATIC_CHAPTERS[activeChapterIndex].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.75, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full relative"
            >
              <img 
                src={CINEMATIC_CHAPTERS[activeChapterIndex].img} 
                alt={CINEMATIC_CHAPTERS[activeChapterIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/40 to-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cinematic Aspect Ratio Guide Rails - Absolute luxury movie layout */}
        <div className="absolute top-4 inset-x-4 z-40 flex justify-between text-[10px] text-stone-500 font-mono uppercase tracking-widest pointer-events-none select-none">
          <span>FILM FORMAT // ASPECT_RATIO_2.39:1_HDR</span>
          <span className="text-amber-500/80 font-bold">● V80 ULTIMATE EXPEDITION REC</span>
          <span>FIT TOUR CAM {activeChapterIndex + 1}/04</span>
        </div>

        {/* Content Overlay Panel */}
        <div className="relative z-20 max-w-6xl mx-auto w-full px-4 sm:px-8 pb-12 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Chapter Text Details (Left 7 Cols) */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            <div className="flex items-center gap-3">
              <span className="text-xs bg-amber-500 text-stone-950 font-mono font-black px-2.5 py-0.5 rounded tracking-widest">
                {CINEMATIC_CHAPTERS[activeChapterIndex].num}
              </span>
              <span className="text-xs text-stone-400 font-mono tracking-widest uppercase">
                // HÀNH TRÌNH THỰC KÝ
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-amber-400 font-sans font-bold text-base sm:text-lg block tracking-wide">
                {CINEMATIC_CHAPTERS[activeChapterIndex].hook}
              </span>
              <h1 className="font-serif font-black text-3xl sm:text-5xl text-white leading-tight uppercase tracking-tight max-w-2xl">
                {CINEMATIC_CHAPTERS[activeChapterIndex].title}
              </h1>
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed text-justify max-w-xl font-sans bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5">
              {CINEMATIC_CHAPTERS[activeChapterIndex].desc}
            </p>

            {/* Vintage style handwritten quote overlay */}
            <div className="border-l-2 border-amber-500 pl-4 py-1 italic font-serif text-amber-300 text-sm sm:text-base bg-amber-500/5 max-w-md rounded-r-lg">
              {CINEMATIC_CHAPTERS[activeChapterIndex].quote}
              <span className="block text-[10px] text-stone-400 font-mono uppercase mt-1 not-italic tracking-wider">— {CINEMATIC_CHAPTERS[activeChapterIndex].author}</span>
            </div>

            {/* Indicator Bars */}
            <div className="flex gap-2 pt-2 select-none">
              {CINEMATIC_CHAPTERS.map((chap, i) => (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapterIndex(i)}
                  className={`h-1.5 rounded transition-all cursor-pointer ${
                    activeChapterIndex === i ? 'w-12 bg-amber-500' : 'w-3 bg-stone-700 hover:bg-stone-500'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Cinematic Dialers Widget (Right 4 Cols) */}
          <div className="lg:col-span-4 bg-black/60 backdrop-blur-lg border border-stone-850 p-6 rounded-2xl space-y-4 shadow-lg">
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold">CHAPTER NAVIGATION HUD</span>
              <Focus className="w-4 h-4 text-amber-500 animate-spin-slow" />
            </div>

            <div className="flex justify-between gap-2">
              <button 
                onClick={prevChapter}
                className="flex-1 py-3 bg-stone-900 hover:bg-stone-850 text-white font-mono text-xs uppercase tracking-wider rounded-lg border border-stone-800 transition flex items-center justify-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 w-4 text-stone-400" />
                <span>TRƯỚC</span>
              </button>
              <button 
                onClick={nextChapter}
                className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-mono text-xs uppercase tracking-widest font-black rounded-lg transition hover:brightness-110 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>TIẾP THEO</span>
                <ChevronRight className="w-4 w-4" />
              </button>
            </div>

            <div className="text-[10px] text-stone-500 leading-normal text-justify pt-1 font-mono">
              <span className="text-amber-400 font-black block">✓ KÍNH NGẮM BẢN CHẤT:</span>
              Thực nghiệm 150 hành trình là nguồn cảm hứng nghệ thuật đỉnh cao của chúng tôi. Hãy bách lãm để thấu suốt bản ngã Himalaya hiểm trở.
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================================
          PART 2: INTERACTIVE CAMERA HUD (PHYSIOLOGICAL FOCUS GAUGE)
          ====================================================================== */}
      <section id="camera-focus-hud" className="py-24 border-b border-stone-900 px-4 sm:px-8 bg-[#0d0e14]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase font-black inline-flex items-center gap-1.5 tracking-wider select-none">
              <Camera className="w-3.5 h-3.5 animate-pulse" />
              THỂ THỰC KÍNH QUAY // LĂNG KÍNH KHÍ ÁP
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
              Phân Tích Thấu Kính Thích Nghi
            </h2>
            <p className="text-stone-400 font-sans text-base sm:text-base italic leading-relaxed">
              Trải nghiệm độ cao nguy cơ cao của Himalaya qua góc ngắm góc chụp camera. Kéo thước đo thấu kính để đo sinh thốn huyết áp bố mẹ U70:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* The Lens Simulator HUD Control (Left 5 Cols) */}
            <div className="lg:col-span-5 bg-black border border-stone-850 p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-inner">
              
              <div className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-stone-850 pb-2">
                  <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">LENS CONTROL HUD</span>
                  <Sliders className="w-3.5 h-3.5 text-stone-400" />
                </div>

                {/* Altitude parameter */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-stone-400 font-bold uppercase tracking-wider">Độ Cao Thu Phóng (Distance):</span>
                    <span className="text-amber-400 font-black text-base">{hudAltitude.toLocaleString()} M</span>
                  </div>
                  <input 
                    type="range" 
                    min="3500" 
                    max="5359" 
                    step="50"
                    value={hudAltitude} 
                    onChange={(e) => setHudAltitude(Number(e.target.value))}
                    className="w-full accent-amber-500 h-1.5 bg-stone-900 rounded-lg cursor-pointer appearance-none"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-600 font-bold">
                    <span>Thủ Đô Leh (3.500m)</span>
                    <span>Đèo Chang La (5.360m)</span>
                  </div>
                </div>

                {/* Focus Exposure slider (For visual effect only!) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-stone-400 font-bold uppercase tracking-wider">Mở Khẩu Độ sáng (Exposure):</span>
                    <span className="text-blue-400 font-black text-xs font-mono">f/{ (exposureVal / 24).toFixed(1) }</span>
                  </div>
                  <input 
                    type="range" 
                    min="12" 
                    max="96" 
                    step="4"
                    value={exposureVal} 
                    onChange={(e) => setExposureVal(Number(e.target.value))}
                    className="w-full accent-blue-500 h-1.5 bg-stone-900 rounded-lg cursor-pointer appearance-none"
                  />
                </div>

                {/* Medical safety shield activation */}
                <div className="pt-4 border-t border-stone-850 space-y-3">
                  <span className="text-xs font-mono font-black text-stone-400 uppercase tracking-widest block">CHỌN PHƯƠNG THỨC LỮ HÀNH:</span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setHudOxygenShield(true)}
                      className={`p-3.5 rounded-xl border font-mono text-xs text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                        hudOxygenShield 
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-[0px_0px_12px_rgba(245,158,11,0.15)] font-black' 
                          : 'bg-stone-950 border-stone-850 text-stone-500 hover:border-stone-700'
                      }`}
                    >
                      <span>🛡 FIT TOUR PARADIGM</span>
                      <span className="text-[8px] opacity-75 mt-1 leading-normal font-normal uppercase">Lò sưởi, y tá riêng, đo đạc oxy 5 lớp</span>
                    </button>

                    <button
                      onClick={() => setHudOxygenShield(false)}
                      className={`p-3.5 rounded-xl border font-mono text-xs text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                        !hudOxygenShield 
                          ? 'bg-red-500/10 border-red-500 text-red-500 shadow-[0px_0px_12px_rgba(239,68,68,0.15)] font-black' 
                          : 'bg-stone-950 border-stone-850 text-stone-500 hover:border-stone-700'
                      }`}
                    >
                      <span>🎒 TỰ TÚC RỦI RO</span>
                      <span className="text-[8px] opacity-75 mt-1 leading-normal font-normal uppercase">Không gối oxy, lều lạnh giá, leo dốc cấp tính</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Photographer quote panel */}
              <div className="p-4 bg-stone-900 border-l-2 border-amber-500 text-stone-400 text-xs italic font-sans leading-relaxed rounded-r-lg">
                <span className="text-[9px] font-mono text-amber-400 font-bold block not-italic uppercase tracking-widest mb-1">
                  ✎ Báo cáo kỹ thuật góc máy:
                </span>
                {hudOxygenShield ? (
                  <span>“Đoàn thứ 80 vừa qua mang theo 14 bố mẹ lớn tuổi, nhờ quy trình bọc sưởi ấm nóng Bhutan và túc trực bình nén khí, nhịp phế thở của các cụ đều giữ trơn mộc mọc.”</span>
                ) : (
                  <span>“Cực kỳ dại dột khi khách tự túc bỏ qua thích nghi 48h ở Leh. Lên đèo cao 5.000m tim bóp thắt bạo, ngón tay tím tái do sụt SpO2 cấp tốc cực đoan!”</span>
                )}
              </div>

            </div>

            {/* The Cinematic Lens HUD Viewport (Right 7 Cols) */}
            <div className="lg:col-span-7 bg-black border border-stone-850 rounded-2xl p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              
              {/* Dynamic image mockup mimicking a viewfinder with adjustable exposure (brightness) */}
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none transition-all duration-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Camera viewfinder background"
                  className="w-full h-full object-cover transition-all"
                  style={{ filter: `brightness(${exposureVal}%) contrast(110%)` }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Absolute Glass overlay blur representing Camera HUD */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none z-10"></div>

              <div className="relative z-20 space-y-8">
                
                {/* Simulated Focus bracket bounds */}
                <div className="absolute inset-x-8 inset-y-12 border-2 border-white/10 pointer-events-none rounded-xl flex items-center justify-center">
                  <div className="w-12 h-12 border border-dashed border-amber-500/50 rounded-full animate-pulse flex items-center justify-center">
                    <span className="w-2 h-2 rounded bg-amber-500"></span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-stone-800/60 pb-3 font-mono text-[9px] text-stone-400 font-bold">
                  <span>VIEWFINDER REALTIME DIAGNOSTIC</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${hudOxygenShield ? 'bg-emerald-500' : 'bg-red-500 animate-ping'}`}></span>
                    <span>{hudOxygenShield ? "SECURITY ACTIVE" : "CRITICAL RISK"}</span>
                  </div>
                </div>

                {/* Simulated Biometrics readings */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Oxygen Gauge */}
                  <div className="p-4 bg-black/70 backdrop-blur-md border border-stone-800 rounded-xl space-y-2">
                    <span className="font-mono text-[9.5px] text-stone-400 block uppercase tracking-wider font-bold">Dưỡng Khí SpO2 (Oxy Phổi):</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-mono text-3xl sm:text-5xl font-black ${simSpo2 >= 90 ? 'text-emerald-400' : simSpo2 >= 80 ? 'text-amber-400' : 'text-red-500 animate-pulse'}`}>
                        {simSpo2}%
                      </span>
                      <span className="text-[9px] text-stone-500 font-bold uppercase">VALUE</span>
                    </div>
                    <div className="w-full bg-stone-900 h-1.5 rounded overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${simSpo2 >= 90 ? 'bg-emerald-400' : simSpo2 >= 80 ? 'bg-amber-400' : 'bg-red-500'}`}
                        style={{ width: `${simSpo2}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Heart Rate Gauge */}
                  <div className="p-4 bg-black/70 backdrop-blur-md border border-stone-800 rounded-xl space-y-2">
                    <span className="font-mono text-[9.5px] text-stone-400 block uppercase tracking-wider font-bold">Mạch Phế Quản (BPM):</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-3xl sm:text-5xl text-stone-350 font-black">
                        {simHeartRate}
                      </span>
                      <span className="text-[9px] text-stone-500 font-bold uppercase">BPM</span>
                    </div>
                    <p className="text-[8.5px] font-mono text-stone-500 uppercase tracking-widest leading-none">
                      {simHeartRate > 105 ? "⚠️ Co tim bóp siết" : "✓ Trơn nhịp thanh nhiên"}
                    </p>
                  </div>

                </div>

                {/* Analytical Verdict */}
                <div className="pt-6 relative z-10">
                  <div className={`p-4 bg-black/85 backdrop-blur-lg border text-xs leading-relaxed text-justify rounded-xl ${
                    simSpo2 >= 90 
                      ? 'border-emerald-500/30 text-stone-200' 
                      : simSpo2 >= 80 
                      ? 'border-amber-500/30 text-amber-300' 
                      : 'border-red-500/40 text-red-400 animate-pulse'
                  }`}>
                    <div className="flex gap-2.5 items-start">
                      <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                      <div>
                        <strong className="text-white uppercase font-bold block mb-1">
                          {simSpo2 >= 90 ? "✓ HÀNH TRÌNH TỐT" : simSpo2 >= 80 ? "⚠️ CẢNH BÁO CAO ĐỘ" : "☠ NGUY CƠ AMS CẤP TÍNH"}
                        </strong>
                        {simSpo2 >= 90 ? (
                          "Với phác đồ sưởi Glamping & di chuyển chậm êm, cơ thể cha mẹ U70 duy trì lượng dưỡng khí dồi dào, an nhiên ngắm sao Milky Way tuyệt dệu không chút mệt mỏi."
                        ) : simSpo2 >= 80 ? (
                          "Người lớn bắt đầu thấy đau đầu dữ dội hốc mắt, lồng ngực nén thắt. Cần dừng di chuyển dốc đứng và hít thở ngay oxy nén di động của Fit Tour gối gối trên xe SUV!"
                        ) : (
                          "NGUY CẤP! Khí áp loãng sụt xông tràn dồn dập phế quản. Khách tự túc sẽ ngất mê sụt tức thì. Fit Tour kích hoạt cuộc gọi trực thăng không quân để cứu sinh trong 45 phút!"
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          PART 3: HIGH-END CINEM ATOGRAPHIC CAROUSEL (WIDE POSTERS)
          ====================================================================== */}
      <section className="py-24 border-b border-stone-900 px-4 sm:px-8 bg-black">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-stone-850 pb-6 gap-4 text-left">
            <div className="space-y-1">
              <span className="font-mono text-xs text-amber-500 font-black tracking-widest block">// EXHIBITION SCREENING PROGRAM</span>
              <h2 className="font-serif font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
                Cung Đường Hành Ảnh Cao Cấp
              </h2>
            </div>
            <p className="text-stone-400 text-sm sm:text-base italic font-sans max-w-sm text-justify">
              “Chúng tôi dọn sẵn những khung hình thiên thể lộng lẫy và bọc lót y tế chu toàn tột đỉnh để bạn và cha mẹ thoải mái bấm máy.”
            </p>
          </div>

          <div className="space-y-8">
            {FILMIC_TOURS.map((tour) => (
              <div 
                key={tour.id}
                className="bg-[#111218]/90 border border-stone-850 rounded-3xl overflow-hidden hover:border-amber-500/40 hover:shadow-[0px_0px_30px_rgba(245,158,11,0.06)] transition-all duration-300 relative group flex flex-col lg:flex-row items-stretch"
                id={`cinetour-${tour.id}`}
              >
                {/* Hovering image scale frame */}
                <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-[380px] overflow-hidden">
                  <img 
                    src={tour.heroImg} 
                    alt={tour.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-black/30 to-[#111218] z-10"></div>
                  
                  {/* Aspect stamp ornament */}
                  <div className="absolute top-4 left-4 bg-amber-500 text-stone-950 font-mono text-[8spx] text-[8px] font-black px-2.5 py-0.5 rounded tracking-widest uppercase z-20">
                    {tour.verified}
                  </div>
                </div>

                {/* Tour Detail Panel */}
                <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-6 text-left relative z-20">
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between text-stone-500 font-mono text-[10px] tracking-widest border-b border-stone-800 pb-3 gap-2">
                      <span className="font-bold">// SỐ HIỆU LỮ: {tour.id.toUpperCase()}</span>
                      <span className="text-amber-500 font-black uppercase text-xs">{tour.duration} DÃ TRẠM</span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-amber-400 font-serif italic text-xs block leading-none">
                        ✦ {tour.concept}
                      </span>
                      <h3 className="font-serif font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight">
                        {tour.name}
                      </h3>
                    </div>

                    {/* Features checklist with premium bullet styles */}
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-[9px] text-stone-500 uppercase tracking-wider block font-bold">điểm bọc lót cốt yếu:</span>
                      <ul className="space-y-2 text-xs text-stone-300 font-sans">
                        {tour.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-amber-500 font-mono font-black select-none shrink-0">✦</span>
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-stone-800 pt-6 gap-4">
                    <div>
                      <span className="font-mono text-[8px] text-stone-500 uppercase block font-bold leading-none">CHI PHÍ KIM QUY:</span>
                      <span className="font-mono text-lg font-black text-amber-500 tracking-tighter">
                        {tour.price}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onTourSelect?.({
                          title: tour.name,
                          duration: tour.duration,
                          price: tour.price,
                          tag: "Premium Cinematic Expedition V80"
                        });
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-mono text-[10px] font-black uppercase tracking-wider rounded-lg cursor-pointer transition shadow-lg flex items-center gap-1.5"
                    >
                      <span>MỞ KHUNG LÊN ĐƯỜNG</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          PART 4: THE MEMORY ODYSSEY GRID (INTERACTIVE IMAGE POSTCARDS)
          ====================================================================== */}
      <section className="py-24 border-b border-stone-900 px-4 sm:px-8 bg-[#0d0e14]">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Postcard Submitter Feed (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-1 text-left">
                <span className="font-mono text-xs text-amber-500 font-black tracking-widest block">// COMMUNITY MEMOIRS POSTCARDS</span>
                <h2 className="font-serif font-black text-2xl sm:text-4xl uppercase tracking-tighter text-white">
                  Bưu thiếp kỷ niệm vàng
                </h2>
                <p className="text-sm sm:text-base text-stone-400 font-sans max-w-prose">
                  “Cá nhân và cha mẹ viết trích đoạn tạ ơn quy trình y thuật bảo hộ rực sưởi của dường đẻo Fit Tour:”
                </p>
              </div>

              {/* Grid of Postcards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {submittedPostcards.map((post, pIdx) => (
                  <div 
                    key={pIdx}
                    className={`p-6 rounded-2xl border flex flex-col justify-between h-[230px] shadow relative overflow-hidden transition-all duration-300 ${
                      post.frame === 'vintage'
                        ? 'bg-[#efebd6] border-stone-400 text-stone-900'
                        : post.frame === 'monochrome'
                        ? 'bg-stone-900 border-stone-750 text-stone-200'
                        : 'bg-black border-stone-800 text-stone-200'
                    }`}
                  >
                    {/* Decorative Stamp on Vintage Card */}
                    {post.frame === 'vintage' && (
                      <div className="absolute top-4 right-4 w-9 h-11 border-2 border-stone-400 rounded-sm bg-stone-100 flex items-center justify-center font-serif text-[10px] font-bold text-stone-500 opacity-60 transform rotate-12 pointer-events-none select-none">
                        LEH
                      </div>
                    )}

                    {/* Faded Camera focus HUD graphic back */}
                    <div className="absolute right-2 bottom-2 font-mono text-[60px] text-white/5 font-black leading-none pointer-events-none select-none">
                      CAM
                    </div>

                    <div className="space-y-4 relative z-10 text-left">
                      <div className="flex justify-between items-center text-[8.5px] font-mono tracking-widest font-bold opacity-70">
                        <span>POSTCARDS SERIES</span>
                        <span>{post.date}</span>
                      </div>
                      <p className="font-serif leading-relaxed text-xs italic text-justify line-clamp-6">
                        “{post.desc}”
                      </p>
                    </div>

                    <div className="border-t border-stone-800/20 pt-3 flex justify-between items-baseline text-left relative z-10">
                      <span className="text-[8.5px] font-mono text-stone-400 font-bold uppercase tracking-widest leading-none">THỨC ĐẠN SỬ:</span>
                      <span className="font-serif font-black italic text-xs leading-none">
                        {post.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Teletype Postcard Constructor (Right 5 cols) */}
            <div className="lg:col-span-5 bg-black border border-stone-850 p-6 sm:p-8 rounded-2xl space-y-6 shadow-inner text-left">
              
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest block font-bold">// POSTCARD DESPATCH PROCESSOR</span>
                <h3 className="font-serif font-black text-white text-xl uppercase">
                  Kiến Tạo Bưu Thiếp Di Sản
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed font-sans text-justify pt-1">
                  Hãy dập gõ lời cảm mến cùng cha mẹ để Fit Tour lưu giữ mốc kỷ lục chuyến du khảo thứ 80 bất diệt:
                </p>
              </div>

              {!postcardAdded ? (
                <form onSubmit={handleCreatePostcard} className="space-y-4 text-xs font-mono">
                  
                  <div className="space-y-1">
                    <label className="block text-amber-400 font-bold text-[9px] uppercase tracking-widest">Tên Khách Hàng / Biệt Hiệu:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ví dụ: GIA ĐÌNH CHÚ DUY TP.HCM"
                      value={postcardName}
                      onChange={(e) => setPostcardName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg p-2.5 outline-none transition uppercase text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-amber-400 font-bold text-[9px] uppercase tracking-widest">Lời Lưu Bút Tri Ân Y Tế & Cảnh Sắc:</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="CẢM ƠN TIỀN TRẠM KHÉO LÉO, CHA MẸ QUÁ AN TÂM KHI SƯỞI ĐIỆN ĐẦY ĐỦ..."
                      value={postcardDesc}
                      onChange={(e) => setPostcardDesc(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-lg p-2.5 outline-none transition uppercase text-xs text-white leading-relaxed resize-none"
                    />
                  </div>

                  {/* Frame Style choices */}
                  <div className="space-y-1.5">
                    <label className="block text-amber-400 font-bold text-[9px] uppercase tracking-widest">Giao diện bưu thiếp:</label>
                    <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                      {(['cinemahdr', 'vintage', 'monochrome'] as const).map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => setPostcardFrame(style)}
                          className={`py-2 px-1 rounded-md border text-center transition-all cursor-pointer font-bold ${
                            postcardFrame === style
                              ? 'bg-amber-500 text-stone-950 border-amber-500'
                              : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                          }`}
                        >
                          {style.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer text-center text-xs shadow-lg"
                  >
                    DẬP GỐI GỬI BƯU THIẾP VÀNG
                  </button>

                </form>
              ) : (
                <div className="p-6 bg-amber-500/5 border border-dashed border-amber-500/20 rounded-xl text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto animate-pulse" />
                  <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest block">STATUS: POSTCARD_ESTABLISHED</span>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans text-justify bg-stone-900/60 p-3 border-l border-amber-500 rounded">
                    Bưu thiếp hồi ức luyến ái của bạn đã được in và đóng dấu vĩnh hằng lên bức vách danh dự vàng của Chuyến du lịch lần thứ 80 Tây Tạng!
                  </p>
                  <button
                    onClick={() => setPostcardAdded(false)}
                    className="text-[10.5px] text-amber-400 font-black underline uppercase hover:text-amber-550 cursor-pointer"
                  >
                    Kiến tạo thêm bưu thiếp mới
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
