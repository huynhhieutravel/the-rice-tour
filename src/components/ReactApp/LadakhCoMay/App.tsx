import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORIES } from './data';
import MemoryMap from './components/MemoryMap';
import Backpack from './components/Backpack';
import PhotoGallery from './components/PhotoGallery';
import Guestbook from './components/Guestbook';
import PortraitCenterpiece from './PortraitCenterpiece';
import { Calendar, User, Compass, MapPin, Sparkles, BookOpen, Quote, Shield } from 'lucide-react';

export default function App() {
  const [activeCover, setActiveCover] = useState<number>(0);

  const PORTRAIT_COVERS = [
    {
      title: "MÂY TRÊN ĐỈNH KHARDUNG LA",
      vibe: "Gió Lạnh Tuyết Trắng — 5,359m",
      imageUrl: "https://media.fittour.vn/uploads/trai-nghiem-choi-tuyet-khardungla-ladakh.webp",
      quote: "Ở độ cao nghẹt thở này, hơi thở tôi mỏng mảnh nhưng khát khao của tôi lại dày dặn hơn bao giờ hết. Khi gió quất lạnh buốt, tôi tự hào vì gối mình không quỵ ngã.",
      badge: "ACTIVE EXPLORER",
      coordinates: "34.2787° N, 77.6047° E",
      colorTheme: "border-amber-500 text-amber-400 bg-amber-500/10"
    },
    {
      title: "TIẾNG CHUÔNG ĐỒNG THIKSEY",
      vibe: "Tâm Linh Thâm Trầm — 3,600m",
      imageUrl: "https://media.fittour.vn/uploads/ms-may-chup-anh-tai-deo-magnetic-hill-ladakh.webp",
      quote: "Đứng trước bức tượng Phật Di Lặc uy nghiêm, tiếng chuông gió đập ngân nga làm tôi rũ bỏ tất cả bão dông tích tụ của một đời người phụ nữ Việt Nam hiền thuần.",
      badge: "SPIRITUAL SOUL",
      coordinates: "34.0560° N, 77.6667° E",
      colorTheme: "border-red-500 text-red-400 bg-red-500/10"
    },
    {
      title: "HƯƠNG GỪNG ẤM PANGONG",
      vibe: "Hồ Muối Đêm Ngân Hà — 4,225m",
      imageUrl: "https://media.fittour.vn/uploads/du-khach-ben-bo-ho-pangong.webp",
      quote: "Bên bờ hồ lộng gió âm 5 độ C, một tay giữ chặt áo ấm, một tay nắn nót dòng nhật ký. Trên đầu là cả triệu tinh tú sà xuống, đẹp đến lịm tim.",
      badge: "THE STARGAZER",
      coordinates: "33.7225° N, 78.9158° E",
      colorTheme: "border-sky-500 text-sky-400 bg-sky-500/10"
    }
  ];
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-150 selection:text-amber-900 overflow-x-hidden antialiased">
      
      {/* 1. CINEMATIC OUTSIZED COVER PAGE */}
      <header className="relative h-screen flex flex-col justify-between items-center bg-stone-950 text-white overflow-hidden p-6 md:p-8">
        
        {/* Background Darkened Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp"
            alt="Đỉnh núi Himalaya hoang dã"
            referrerPolicy="no-referrer"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-35 scale-105 filter brightness-90 saturate-50"
          />
          {/* Bottom vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
        </div>

        {/* Top Header Row of Magazine */}
        <div className="relative z-10 w-full flex justify-between items-center border-b border-white/10 pb-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-500 animate-spin-slow" />
            <span className="font-mono text-xs uppercase tracking-widest text-stone-300 font-bold">Ký Sự Tây Tạng</span>
          </div>
          <div className="text-right">
            <span className="font-mono text-[10px] text-stone-400 block uppercase">Thể loại</span>
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">E-Magazine Số Độc Bản</span>
          </div>
        </div>

        {/* Hero Title Typography (Playfair + Wide track sans) */}
        <div className="relative z-10 text-center max-w-4xl mx-auto my-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>KHÁT VỌNG CHINH PHỤC CỦA PHƯỢT THỦ U70</span>
          </motion.div>

          <h1
            id="main-editorial-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Emagazine Ladakh U70 trên dãy Himalaya <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 text-5xl md:text-7xl lg:text-8xl mt-2 block">
              Ký Ức Cô Mây
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-300 text-sm md:text-base font-serif italic max-w-2xl leading-relaxed mb-8"
          >
            "Ở tuổi sáu mươi tám, tôi bỏ lại sau lưng những ấm êm vặt vãnh, mang căn bệnh huyết áp lội qua lớp không khí loãng của Himalaya, chỉ để một lần sờ tay vào dải ngân hà rực rỡ bên kia dãy đèo tuyết."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-stone-400 font-mono text-[11px] border-t border-b border-white/5 py-4 px-6 md:px-12 w-fit"
          >
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-500" />
              <span>Chân dung: <b>Cô Mây U70 (68 tuổi)</b></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Điểm đến: <b>Leh - Nubra - Pangong Tso</b></span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Nhật ký: <b>Ấn Độ Thu 2026</b></span>
            </div>
          </motion.div>
        </div>

        {/* Bottom indicator (Scroll Down) */}
        <div className="relative z-10 w-full flex flex-col items-center max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-1 animate-scroll-down text-stone-400 font-mono text-[10px] tracking-widest cursor-pointer">
            <span>CUỘN ĐỂ ĐỌC NHẬT KÝ</span>
            <div className="w-1.5 h-6 bg-amber-500/60 rounded-full flex items-start justify-center p-0.5 mt-1.5">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

      </header>

      {/* 2. PROLOGUE SECTION (STATISTICS & DEEP ESSAY) */}
      <section id="prologue" className="relative py-28 px-4 md:px-8 bg-white text-stone-900 border-b border-amber-900/5">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">Lời Mở Đầu ký cảm</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-stone-900">
              Khi Đầu Gối Mỏi Nhưng Lòng Vẫn Mộng Viễn Du
            </h2>
            <div className="w-12 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          </div>

          <div className="space-y-6 text-stone-700 font-serif leading-relaxed text-base md:text-lg mb-16 text-justify">
            <p className="drop-cap">
              Ở tuổi 68, ranh giới giữa an toàn và phiêu bạt mong manh hơn bao giờ hết. Khi phần lớn bè bạn chọn cho mình mảnh sân yên tĩnh, mảnh vườn cảnh hay những cốc chè chiều yên ả quê hương, Cô Mây đã lặng lẽ sửa soạn hành trang dọn mình hướng về dãy đèo Khardung La mù tuyết, cao trên 5.000 mét. Ladakh không phải thiên đường nghỉ dưỡng êm ái, nơi đây chỉ có sa mạc lạnh khắc nghiệt mặn nhạt, vách đá sừng sững xám xịt và nồng độ oxy loãng thử thách mọi quả tim dũng cảm nhất.
            </p>
            <p>
              Nhưng sức hút của Ladakh nằm ở lối tâm linh thâm nồng và vẻ hoang dã tráng lệ không gợn nhân tạo. Giữa cái rát bỏng ngày cao nguyên sỏi cát và cái giá buốt thấu kẽ tay của đêm trại Pangong mờ xa, hành trình của người thợ dệt mây U70 không đơn thuần là hành trình du lịch thông thường. Đó là lời xác tín đầy dũng khí của một con người cả đời vì con vì cháu, giờ đây mỉm cười kiêu hãnh khẳng định: <b>Ý chí con người lấp lánh hơn tất cả những giới hạn thể xác.</b>
            </p>
          </div>

          {/* Graphical statistical board for the trip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-amber-50/75 border border-amber-900/10 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">U70</div>
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mt-1">Độ tuổi Cô Mây (68 tuổi)</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">5.359m</div>
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mt-1">Đỉnh đèo Khardung La</div>
            </div>
            <div className="text-center border-l sm:border-l border-amber-900/10 col-span-1">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">2000 km</div>
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mt-1">Hành trình roadtrip ngoạn mục</div>
            </div>
            <div className="text-center border-l border-amber-900/10">
              <div className="font-serif text-3xl md:text-4xl font-bold text-amber-800">10 vạn</div>
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mt-1">Vòng kinh luân xoay bình an</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2.5 EDITORIAL CENTER PORTRAIT SPREAD (QUỲNH ANH SHYN / VOGUE STYLE) */}
      <PortraitCenterpiece />

      {/* 3. STORIES NARRATIVE CHAPTERS PROGRESSION */}
      <section id="chapters" className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {STORIES.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={story.id}
                id={`story-chapter-${story.id}`}
                className="py-20 md:py-28 border-b border-stone-200/60 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Chapter label indicator */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl font-bold text-amber-700/35 tracking-widest">{story.number}</span>
                      <div className="h-0.5 w-10 bg-amber-700/25"></div>
                      <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-extrabold">{story.locationName}</span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                      {story.title}
                    </h3>
                    
                    <p className="font-mono text-xs text-amber-800 italic uppercase tracking-wider font-semibold">
                      {story.subtitle}
                    </p>

                    <p className="font-serif font-semibold text-stone-600 text-sm md:text-base leading-relaxed border-l-3 border-amber-700 pl-4 py-1 italic bg-amber-50/40 pr-3 rounded">
                      {story.abstract}
                    </p>

                    <div className="space-y-4 text-stone-700 text-sm md:text-base font-serif leading-relaxed text-justify">
                      {story.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className={pIdx === 0 ? "drop-cap" : ""}>
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Pullout quote */}
                    {story.quote && (
                      <div id={`quote-${story.id}`} className="bg-gradient-to-br from-amber-50/80 to-stone-50 p-6 rounded-2xl border border-amber-950/5 shadow-inner mt-8">
                        <span className="font-serif text-5xl leading-none text-amber-600 font-bold block h-3 -mt-3">“</span>
                        <p className="font-serif text-sm text-stone-700 italic pl-6 leading-relaxed">
                          {story.quote}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Photo Column with Polaroid Styling */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white p-4 pb-12 shadow-xl border border-stone-200/80 transform hover:rotate-1 hover:scale-[1.01] transition-all duration-300 relative inline-block w-full">
                      
                      {/* Decorative scotch tape on corners */}
                      <div className="absolute -top-3 left-12 w-24 h-6 bg-white/60 text-stone-400 font-mono text-[9px] uppercase tracking-wider text-center pt-1 border border-stone-150 rotate-2 pointer-events-none shadow-sm shadow-stone-100">
                        MEMORIES DECK
                      </div>

                      {/* Frame container */}
                      <div className="aspect-4/3 overflow-hidden bg-stone-100 border border-stone-150 rounded-sm">
                        <img
                          src={story.imgUrl}
                          alt={story.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover filter saturate-[85%]"
                        />
                      </div>

                      {/* Polaroid Handwriting Description label */}
                      <div className="mt-6 text-left pl-1">
                        <span className="font-serif text-[11px] text-amber-800 uppercase font-bold flex items-center gap-1.5 mb-1.5 font-mono">
                          <MapPin className="w-3.5 h-3.5" />
                          Hành Trình Tây Tạng Của Cô Mây - Lược chụp thực tế
                        </span>
                        <p className="font-serif text-stone-700 italic text-sm leading-relaxed">
                          Chương {story.number}: Biên bản ghi lại hành trình cảm xúc chân thực của phượt thủ U70 dải đất tuyết trắng.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
          
        </div>
      </section>

      {/* 4. INTERACTIVE MEMORY MAP COMPONENT PLACEHOLDER */}
      <MemoryMap />

      {/* 5. BACKPACK COMPONENT PLACEHOLDER */}
      <Backpack />

      {/* 6. PHOTO GALLERY COMPONENT PLACEHOLDER */}
      <PhotoGallery />

      {/* 7. GUESTBOOK BOARD COMPONENT PLACEHOLDER */}
      <Guestbook />

      {/* 8. EDITORIAL CONCLUSION FOOTER */}
      <footer className="bg-stone-950 text-white py-24 px-4 md:px-8 border-t border-amber-900/10 relative overflow-hidden">
        
        {/* Abstract light decoration */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <BookOpen className="w-10 h-10 text-amber-500 mx-auto mb-6 animate-pulse" />
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Mây Bay Vẫn Phiêu Du Trên Rặng Đèo Tuyết
          </h3>
          
          <p className="max-w-2xl mx-auto text-sm md:text-base font-serif italic text-stone-400 leading-relaxed mb-12 text-center">
            "Ở tuổi sáu mươi tám, Ladakh đón gót chân tôi bằng lớp tuyết băng khô lạnh dốc thẳm. Nhưng khi lồng ngực tự thở đều một bầu trời đầy sao, 
            tôi biết dặm đường của đời mình sẽ không dừng lại ở những ấm êm góc sân cũ kĩ. Còn hơi thở, tôi sẽ còn ngửa mặt ngắm trăng ngự hư không cao nguyên."
          </p>

          <div className="flex flex-col items-center gap-4 border-t border-white/5 pt-10">
            <span className="font-mono text-[9px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
              Trang Emagazine Độc Bản Chân Kính
            </span>
            <div className="text-amber-500 italic font-serif text-lg">
              Kính tặng Cô Mây - Người truyền lửa dặm đường sương gió Himalaya.
            </div>
            
            
          </div>

        </div>
      </footer>

    </div>
  );
}
