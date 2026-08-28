import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, Compass, ArrowRight, Quote, Shield, Eye, Calendar, Sparkles, AlertCircle, RefreshCw, Send, CheckCircle2
} from 'lucide-react';

interface HimalayanJournalGuideProps {
  onTourSelect?: (tour: any) => void;
}

const LEDGER_PAGES = [
  {
    id: "mission",
    tabLabel: "I. LINH CẢM THỰC TRẠM",
    chapter: "BẢN THẢO 01",
    title: "Chín Năm Trực Giác & 80 Đợt Dẫn Quân",
    subtitle: "Ranh giới giữa sự phiêu lưu tuyệt vời và hiểm nguy sinh mệnh",
    content: "Suốt 9 năm dòng dã với 80 đợt trực tiếp chinh phạt dốc tuyết cao hẹp của Ladakh, Fit Tour sở hữu trực giác thực địa của những thợ săn bão tuyết kì cựu. Người dẫn đường am tường từng gờ đá nứt vụn, ngửi thấy hướng gió bấc tràn hiểm ác để dẫn dắt gia đình bạn lùi bước kịp thời trước vách sạt lở.",
    stampText: "CHỨNG THỰC 80 CHUYẾN ĐI // TUYỆT ĐỐI KHÔNG SỰ CỐ",
    signature: "Lãnh quân Tiền trạm: Huỳnh Hiếu",
    botanicalNote: "❖ Giao Thoa Địa Lý: Độ ẩm biên giới khô mộc, đòi hỏi thích nghi nhịp tim chậm từ 36 đến 48 giờ."
  },
  {
    id: "physiology",
    tabLabel: "II. Y PHÁC ĐỒ CHẶNG LÙI",
    chapter: "BẢN THẢO 02",
    title: "Toán Học Thích Thể & Khoa Học Áp Suất Phế Nang",
    subtitle: "Chúng tôi chống lại các rủi ro bằng y thuật lâm sàng",
    content: "Hội chứng thiếu oxy cấp (AMS) không thể giải quyết bằng ngậm gừng dân gian hay liều mạng băng đèo. Fit Tour đo sinh lý phổi SPO2 hằng ngày mỗi bình minh cho từng khách, phân chia lộ trình rải chặng thông minh ngủ đêm sâu ở Leh (3,500m) 2 ngày đầu để bọc lót túi phế nang giãn nở tự nhiên.",
    stampText: "Y TẾ CHUYÊN TRẠCH // BÌNH OXY ÁP LỰC CHUYÊN DỤNG",
    signature: "Bác Sỹ Cố Vấn: TS. Nguyễn Minh",
    botanicalNote: "❖ Cảnh Báo Lâm Sàng: Lên đèo Khardung La (5.359m) tốc hành không có phác đồ y tế dễ gây bục phế huyết bản."
  },
  {
    id: "army",
    tabLabel: "III. LIÊN PHÒNG QUÂN SỰ",
    chapter: "BẢN THẢO 03",
    title: "Đường Dây Nóng Trực Thăng SNM Hospital Leh",
    subtitle: "Tổng lực bảo lãnh quyền sinh tử thượng hạng",
    content: "Khi có biến chuyển sụt phổi tối cấp, Fit Tour mở quyền năng liên kết đặc khu trực thăng Không quân Ấn Độ để bốc dỡ lữ khách về thẳng quân y viện SNM Hospital trong 45 phút. Một thế lực cứu hộ thực phẩm mà các đơn vị du lịch tự phát trực tuyến không bao giờ cấu kết nổi ở ranh giới biên thùy quân sự nhạy cảm này.",
    stampText: "ĐẶC QUYỀN TRỰC THĂNG CỨU HỘ KHÔNG QUÂN ẤN ĐỘ",
    signature: "Bảo Chứng Ngoại Giao: Fit Tour India Ops",
    botanicalNote: "❖ Bản Đồ Vùng Khẩn: Liên lạc vệ tinh tầng cao, phủ sóng kể cả nơi mất mạng viễn thông dân dụng."
  },
  {
    id: "seniors",
    tabLabel: "IV. PHỤNG SỰ U70",
    chapter: "BẢN THẢO 04",
    title: "Kỳ Tích Chống Lạnh Âm 10 Độ Tại Hồ Pangong",
    subtitle: "Sứ mệnh đưa bố mẹ ngự trên nóc nhà thế giới an nhiên",
    content: "Nhiều người nghĩ tuổi 70 không thể đón sao trời bên hồ muối Pangong ẩm buốt. Fit Tour kiến thiết lều nệm sưởi điện nhiệt đới kẹp trong lều Glamping VIP hai lớp độc quyền, trà gừng hâm nóng liên tục 2 giờ một lần, xe SUV 4x4 xịn bọc nỉ kín gió. Biến ước vọng của bố mẹ thành sự thật trong giấc ngủ say nồng, ấm áp.",
    stampText: "ẤM SỰC LÒ SƯỞI GLAMPING // NÂNG NIU NGƯỜI LỚN TUỔI",
    signature: "Trưởng ban Hậu Cần: Ms. Trinh Mai",
    botanicalNote: "❖ Di Sản Gia Đình: Giúp bố mẹ chinh phục Tây Tạng là món quà hiếu nghĩa đong đầy những giọt nước mắt tự hào."
  }
];

const ARCHIVAL_POSTCARDS = [
  {
    code: "POSTCARD_LEH_01",
    title: "Tuyển Tập Ladakh – Đèn Trời Milky Way Pangong Tso",
    duration: "10 ngày / 9 đêm dã ngoại thượng đỉnh",
    price: "35.500.000 vnđ",
    experience: "Cung đường cực đỉnh dung hòa y tế 5 lớp vững chãi. Trải nghiệm trọn sưởi lều hồ Pangong lạnh giá, thảnh thơi vượt đèo Khardung La trên SUV đời mới.",
    notes: [
      "Trực giác 80 đoàn am tường, nhịp độ lùi an lành",
      "Lều Glamping bọc sưởi điện nhiệt độ âm 10 độ",
      "Oxy nén chuyên dụng túc trực 24/7 gối đầu xe",
      "Thưởng ngoạn dải ngân hà lộng lẫy nhất Tây Tạng"
    ]
  },
  {
    code: "POSTCARD_LEH_02",
    title: "Thu Vàng Sông Indus – Thư Thái Tĩnh Tâm",
    duration: "9 ngày / 8 đêm ngắm phong rực sắc",
    price: "32.900.000 vnđ",
    experience: "Thiết kế đo ni đóng giày dành cho các cặp vợ chồng ưu tú và bố mẹ lão niên. Mùa lá phong đỏ úa soi bóng nước xanh màu ngọc bích cực kỳ thư thả, sang quý.",
    notes: [
      "Khách sạn sưởi ấm toàn hệ thống tại thủ đô Leh",
      "Bách bộ thong thả thư giãn, không leo dốc gấp",
      "Kiểm tra chỉ số sinh lý SPO2 mỗi buổi sáng ấm áp",
      "Trà bơ nóng hổi và tiệc nướng sườn nướng thung lũng"
    ]
  },
  {
    code: "POSTCARD_LEH_03",
    title: "Mật Tông Thiksey – Hành Trình Tâm Thức Hoá Thân",
    duration: "8 ngày / 7 đêm thiền mộc ngàn năm",
    price: "29.900.000 vnđ",
    experience: "Kiến trúc tâm linh cổ xưa tựa vách núi đá dựng kề mây. Tham dự khóa lễ cầu nguyện bình an từ đại đức hóa thân tu viện Mật Tông Tây Tạng chính gốc.",
    notes: [
      "Đón hừng đông thiền học tại bảo tháp cổ",
      "Trò chuyện riêng tư đại diện dòng truyền thừa",
      "Vận động siêu thong dong nâng đỡ nhịp tim",
      "Hỗ trợ xe dã dọn oxy nâng niu bố mẹ trung niên"
    ]
  }
];

export default function HimalayanJournalGuide({ onTourSelect }: HimalayanJournalGuideProps) {
  const [activeTab, setActiveTab] = useState<string>("mission");
  
  // Dynamic Mechanical Altimeter States
  const [altitude, setAltitude] = useState<number>(3500); // from 3500 to 5359
  const [shieldActive, setShieldActive] = useState<boolean>(true);
  
  // Custom Telegram Box States
  const [telegramSender, setTelegramSender] = useState<string>("");
  const [telegramMsg, setTelegramMsg] = useState<string>("");
  const [telegrams, setTelegrams] = useState<any[]>([
    {
      id: 1,
      sender: "TS_NGUYEN_HOA_Y_KHOA_108",
      time: "1926-06-09 04:12",
      text: "ĐOÀN LẦN THỨ 80 VỪA TRỞ VỀ KHỎE MẠNH. SỰ PHỐI HỢP CÙNG QUÂN Y VIÊN SNM HOSPITAL LEH ĐÃ GIỮ AN TOÀN TUYỆT ĐỐI CHO 18 BỐ MẸ TRUNG NIÊN QUY TRÌNH QUÁ HOÀN HẢO STOP."
    },
    {
      id: 2,
      sender: "CO_LAN_ANH_U69_SAI_GON",
      time: "1926-06-08 23:45",
      text: "LỒ LÒ SƯỞI ĐIỆN ẤM SỰC GIỮA ĐÊM HỒ PANGONG. TIM ĐẬP RẤT ÊM KHÔNG ĐAU ĐẦU CẢM ƠN HẬU CẦN ĐOÀN KHÉO LÉO STOP."
    }
  ]);
  const [submittedTele, setSubmittedTele] = useState<boolean>(false);

  const performPostTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!telegramSender || !telegramMsg) return;
    const now = new Date();
    const formattedTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newTele = {
      id: Date.now(),
      sender: telegramSender.toUpperCase().replace(/\s+/g, '_'),
      time: formattedTime,
      text: telegramMsg.toUpperCase() + " STOP."
    };
    setTelegrams([newTele, ...telegrams]);
    setTelegramSender("");
    setTelegramMsg("");
    setSubmittedTele(true);
  };

  // Math simulation for real-time biological log book notes
  const oxygenRatio = Math.max(
    60,
    Math.min(
      100,
      Math.round(98 - ((altitude - 3000) / 95) + (shieldActive ? 8 : -14))
    )
  );

  const pulseRatio = Math.max(
    55,
    Math.min(
      140,
      Math.round(72 + ((altitude - 3000) / 40) - (shieldActive ? 12 : -25))
    )
  );

  return (
    <div className="bg-[#f0e6d6] text-stone-900 font-sans tracking-wide text-left min-h-screen relative overflow-hidden py-10 px-4 sm:px-8 border-t-8 border-amber-900" id="himalayan-ledger-portal">
      
      {/* Visual Retro Textures - Subtle vintage lined borders and faded ink backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(#d3c2a6_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-25 pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-amber-800/5 blur-[80px] pointer-events-none"></div>
      
      {/* Decorative Stamp Watermark */}
      <div className="absolute top-10 right-10 opacity-15 select-none pointer-events-none font-serif text-[100px] font-bold text-amber-950 inline-block leading-none transform rotate-12">
        80
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">

        {/* ======================================================================
            HEADER: AN ANTIQUE HAND-PRESSED GAZETTE TITLE
            ====================================================================== */}
        <header className="border-4 border-double border-amber-900/60 p-6 sm:p-10 bg-[#f7f2ea] rounded-2xl relative shadow-[10px_10px_0px_rgba(120,53,15,0.06)] text-center">
          
          {/* Confidendial Ledger Code Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-stone-400 pb-3 mb-6 font-mono text-[10px] text-amber-900 font-bold uppercase tracking-widest gap-2">
            <span>❖ ARCHIVE DOSSIER: V80-COLLECTION / RE-ROUTING SAFETY GUIDE</span>
            <span className="bg-amber-900 text-amber-50 px-3 py-0.5 rounded font-bold text-[9px]">KHAI THÁC CHÍNH THỨC</span>
          </div>

          <div className="space-y-4">
            <span className="font-serif italic text-base sm:text-xl text-amber-800 tracking-wide block">
              Tư liệu lưu trữ chín năm thực chứng Ladakh dốc tuyết
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-6xl text-stone-950 leading-none uppercase tracking-tight">
              BẢN THẢO TIỀN TRẠM <br />
              <span className="text-amber-900 underline decoration-double decoration-amber-900/40 pb-2 inline-block">HÀNH QUYỂN LỰ</span>
            </h1>
            
            <div className="w-24 h-0.5 bg-amber-900/40 mx-auto"></div>
            
            <p className="max-w-2xl mx-auto font-sans text-stone-700 text-base sm:text-base leading-relaxed text-justify sm:text-center italic">
              “Chúng tôi từ chối những bài diễn thuyết cóp nhặt vô hồn từ văn phòng máy lạnh. An tâm của gia đình bạn trên đỉnh đèo Everest hay vách đá mây Tây Tạng được bảo hộ bằng xương máu của 80 đợt trực tiếp hành quân.”
            </p>
          </div>

          {/* Sealed Vintage Stamps */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-stone-300 mt-6 md:px-10">
            <div className="border border-stone-400 rotate-[-1deg] px-3.5 py-1.5 rounded bg-stone-100 text-stone-600 font-mono text-[10px] font-black uppercase text-center leading-none">
              <span className="block text-[8px] text-stone-400">REGISTERED</span>
              EST. 2017
            </div>
            <div className="border-2 border-dashed border-red-800 rotate-[2deg] px-4 py-1 rounded-lg bg-red-50 text-red-800 font-serif font-extrabold text-xs uppercase tracking-wider text-center leading-none">
              <span className="block text-[7px] text-red-400 mb-0.5">VERIFIED REPORT</span>
              80 ASCENTS OK
            </div>
            <div className="border border-amber-850 rotate-[-2deg] px-4 py-1.5 rounded-xl bg-[#fffcf5] text-amber-900 font-mono text-[9px] font-bold uppercase text-center leading-none">
              <span className="block text-[7px] text-amber-700 mb-0.5">CLINICAL CONTROL</span>
              5-LAYER PARADIGM
            </div>
          </div>
        </header>


        {/* ======================================================================
            SECTION 1: THE TACTILE LEDGER TABS (CORES OF FIT TOUR SYSTEM)
            ====================================================================== */}
        <section className="space-y-6">
          <div className="text-left space-y-1">
            <span className="font-mono text-xs text-amber-900 font-extrabold tracking-widest uppercase block">// EXERCISES IN ABSOLUTE TRUST</span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-stone-950 uppercase">
              Tứ Trụ Thực Trị Bản Địa
            </h2>
            <div className="w-16 h-1 bg-amber-900"></div>
          </div>

          {/* Interactive Ledger Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Labeled Ledger File Tabs (Left 4 cols) */}
            <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24">
              <p className="text-xs text-stone-500 font-mono uppercase pb-2 tracking-widest block font-bold">mục lục văn bản thực chứng:</p>
              
              {LEDGER_PAGES.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setActiveTab(page.id)}
                  className={`w-full text-left p-4 rounded-xl border-l-4 transition-all duration-300 font-mono text-xs cursor-pointer flex items-center justify-between shadow-sm hover:translate-x-1 ${
                    activeTab === page.id
                      ? 'bg-[#eae0d0] border-amber-900 text-amber-900 font-black shadow-md'
                      : 'bg-[#fbf7f0]/80 border-stone-300 text-stone-600 hover:text-stone-900 hover:bg-[#ebdcb9]/40'
                  }`}
                >
                  <span>{page.tabLabel}</span>
                  <span className={`w-2 h-2 rounded-full ${activeTab === page.id ? 'bg-amber-900 animate-ping' : 'bg-transparent'}`}></span>
                </button>
              ))}

              <div className="p-4 bg-[#fbf7f0] border border-stone-300 rounded-xl space-y-2 mt-6">
                <span className="font-serif text-amber-900 font-bold block text-sm italic">✥ Lời thề Tiền Cương</span>
                <p className="text-xs text-stone-600 leading-relaxed text-justify">
                  &quot;Trách nhiệm y tế không nằm ở chữ nghĩa hợp đồng bảo hiểm rườm rà né tránh. Khi bạn tin tưởng dắt bố mẹ vượt đèo tuyết cùng Fit Tour, tính mạng của cả gia đình là trách nhiệm linh thiêng nhất của chúng tôi.&quot;
                </p>
              </div>
            </div>

            {/* Immersive Aged Document Viewer Card (Right 8 cols) */}
            <div className="lg:col-span-8 bg-[#fdfaf5] border-2 border-stone-300 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-lg min-h-[440px] flex flex-col justify-between">
              
              {/* Background texture line overlay */}
              <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-amber-900/10 to-transparent pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                {LEDGER_PAGES.filter(p => p.id === activeTab).map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 text-left"
                  >
                    {/* Header code */}
                    <div className="flex items-center justify-between border-b border-stone-300 pb-3">
                      <span className="font-mono text-xs font-bold text-amber-900 tracking-wider">
                        {p.chapter} // EXPEDITION WITNESS DATA
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono tracking-widest">
                        SECURE LOG V80
                      </span>
                    </div>

                    {/* Headline titles */}
                    <div className="space-y-1">
                      <span className="text-sm sm:text-base font-sans font-semibold text-amber-800 italic block leading-none">
                        {p.subtitle}
                      </span>
                      <h3 className="font-serif font-extrabold text-xl sm:text-3xl text-stone-900 leading-tight">
                        {p.title}
                      </h3>
                    </div>

                    {/* Main Document Body on Lined Paper simulation */}
                    <div className="font-sans text-stone-850 text-base sm:text-base leading-relaxed text-justify space-y-4 font-normal bg-gradient-to-b from-transparent to-transparent py-2">
                      <p className="first-letter:font-serif first-letter:text-4xl first-letter:float-left first-letter:mr-2 first-letter:font-bold first-letter:text-amber-900 first-letter:leading-none">
                        {p.content}
                      </p>
                    </div>

                    {/* Botanical field sketch note stamp */}
                    <div className="p-3 bg-[#fdf9f0] border-l-4 border-amber-800/50 rounded text-xs text-amber-900 italic font-medium leading-relaxed">
                      {p.botanicalNote}
                    </div>

                    {/* Footer stamps / ink signature seal */}
                    <div className="border-t border-stone-300 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-xs">
                      <div>
                        <span className="text-[9px] text-stone-400 block uppercase font-bold tracking-wider">HẬU CẦN ĐOÀN BẢO CHỨNG:</span>
                        <span className="text-stone-800 font-serif font-black italic block text-sm mt-0.5">
                          {p.signature}
                        </span>
                      </div>

                      {/* Crimson Hand Stamp Seal design */}
                      <div className="self-start sm:self-center bg-red-800/10 border-2 border-dashed border-red-800/60 rounded px-2 text-center text-red-800 font-mono text-[9px] font-black uppercase rotate-[-2deg] tracking-widest leading-loose select-none pointer-events-none">
                        {p.stampText}
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>

            </div>

          </div>
        </section>


        {/* ======================================================================
            SECTION 2: DYNAMIC PARCHMENT ALTIMETER DIAL (ATMOSPHERIC CODES)
            ====================================================================== */}
        <section className="border-4 border-double border-amber-900/40 p-6 sm:p-10 bg-[#fbf7f1] rounded-2xl relative shadow-md">
          
          <div className="max-w-xl mx-auto text-center space-y-2 mb-12">
            <span className="font-mono text-xs text-amber-900 font-black uppercase tracking-widest px-2.5 py-1 bg-amber-900/10 rounded inline-block">
              ❖ THIẾT BỊ ĐO ĐẠC SINH LÝ PHẾ NANG
            </span>
            <h2 className="font-serif font-extrabold text-2xl sm:text-4xl text-stone-900 leading-tight uppercase">
              Bản Đồ Đối Chiếu Khí Áp Ladakh
            </h2>
            <p className="text-stone-600 font-sans text-sm sm:text-base italic">
              Kéo thước đo cao độ để kiểm nghiệm phản ứng phổi tự nhiên của bố mẹ già U70 dưới quy trình y khoa Fit Tour thượng lưu đối chiếu với du lịch tự do dốc vội:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Slide dial controls (Left 5 Cols) */}
            <div className="lg:col-span-5 bg-[#faf4ec] border border-stone-300 p-6 rounded-xl flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="text-[10px] text-stone-500 font-mono font-bold block">// ĐỊNH VỊ CAO ĐỘ THỰC TRẠM:</span>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline font-serif text-sm font-bold text-stone-900">
                    <span>Độ Cao Đo Đạc:</span>
                    <span className="text-amber-900 font-black text-lg font-mono">{altitude.toLocaleString()} M</span>
                  </div>
                  
                  <input 
                    type="range" 
                    min="3500" 
                    max="5359" 
                    step="100"
                    value={altitude} 
                    onChange={(e) => setAltitude(Number(e.target.value))}
                    className="w-full accent-amber-900 h-1.5 bg-stone-200 rounded-lg cursor-pointer appearance-none"
                  />
                  
                  <div className="flex justify-between text-[9px] font-mono text-stone-500 font-bold">
                    <span>Thủ Phủ Leh (3.500m)</span>
                    <span>Đèo Khardung La (5.359m)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-300 space-y-3">
                  <span className="text-xs font-mono font-bold text-stone-700 block">Quy chuẩn y phác thám hiểm:</span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setShieldActive(true)}
                      className={`p-3 rounded-lg border text-left transition-all duration-305 flex flex-col justify-between cursor-pointer ${
                        shieldActive 
                          ? 'bg-amber-900/10 border-amber-900 text-amber-950 font-black shadow-inner' 
                          : 'bg-[#faf4ec] border-stone-400 text-stone-500 hover:border-stone-600 hover:text-stone-800'
                      }`}
                    >
                      <span className="font-serif text-[11px] font-bold block">✓ PHÁC ĐỒ FIT TOUR</span>
                      <span className="text-[8px] font-mono opacity-80 mt-1 uppercase font-normal">Trữ oxy SUV, lò sưởi, 48h tĩnh thích nghi</span>
                    </button>

                    <button
                      onClick={() => setShieldActive(false)}
                      className={`p-3 rounded-lg border text-left transition-all duration-305 flex flex-col justify-between cursor-pointer ${
                        !shieldActive 
                          ? 'bg-red-900/10 border-red-950 text-red-950 font-black shadow-inner' 
                          : 'bg-[#faf4ec] border-stone-400 text-stone-500 hover:border-stone-600 hover:text-stone-800'
                      }`}
                    >
                      <span className="font-serif text-[11px] font-bold block">🎒 TỰ TÚC VỘI VÃ</span>
                      <span className="text-[8px] font-mono opacity-80 mt-1 uppercase font-normal">Băng đèo nhanh gấp, lều cỏ tự phát, tự ứng phó</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Doctor Hand-written Ink Note emulation */}
              <div className="p-4 bg-[#f4ebd9] border-l-4 border-amber-700 text-xs italic font-sans text-stone-800 leading-normal rounded-r-lg space-y-1">
                <span className="font-serif font-black text-amber-900 block not-italic">
                  ✎ Nhật ký thực trạm y sĩ:
                </span>
                {shieldActive ? (
                  <span>“Nhờ sự điều chỉnh chặng lùi tĩnh dưỡng và SUV đời mới chứa gối oxy trực tiếp, nang khí phổi của người già nở êm đềm, không lo dồn nén hồi bóp nhịp tim.”</span>
                ) : (
                  <span>“Máu sụt oxy nghiêm trọng khi cố leo dốc gió Khardung không nhịp nghỉ. Bố mẹ lớn tuổi dễ dính phù phổi kịch độc cực kỳ vô lý, đầu óc mê man ngay ở độ cao này!”</span>
                )}
              </div>

            </div>

            {/* Physiological Visual Report Sheet (Right 7 Cols) */}
            <div className={`lg:col-span-7 border p-6 sm:p-10 rounded-xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              shieldActive 
                ? 'bg-[#fcfaf4] border-amber-900/40 shadow' 
                : 'bg-red-50/50 border-red-900/40 shadow-inner'
            }`}>
              
              <div className="space-y-6">
                
                <div className="flex justify-between items-center border-b border-stone-300 pb-3 font-mono text-[10px] text-stone-500 font-bold">
                  <span>MÃ PHÚC HOẠT: REG_PHYSIO_MONITOR</span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${shieldActive ? 'bg-emerald-600' : 'bg-red-600 animate-ping'}`}></span>
                    <span className="uppercase">{shieldActive ? "HỆ THỐNG AN TOÀN" : "CẢNH BÁO CAO ĐỘ"}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Oxygen SpO2 */}
                  <div className="p-4 bg-[#fceddb]/50 border border-stone-300 rounded-lg space-y-2">
                    <span className="font-serif text-xs italic text-stone-600 block leading-tight">Chỉ số Oxy tế bào phế (SPO2):</span>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-5xl font-mono font-black ${oxygenRatio >= 90 ? 'text-amber-900' : oxygenRatio >= 80 ? 'text-stone-800' : 'text-red-800 animate-pulse'}`}>
                        {oxygenRatio}%
                      </span>
                      <span className="text-[10px] font-mono text-stone-400 font-bold">MỨC ĐO</span>
                    </div>
                    <div className="w-full bg-stone-200 h-1 rounded overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-310 ${oxygenRatio >= 90 ? 'bg-amber-900' : oxygenRatio >= 80 ? 'bg-amber-700' : 'bg-red-800'}`}
                        style={{ width: `${oxygenRatio}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Pulse heart rate */}
                  <div className="p-4 bg-[#fceddb]/50 border border-stone-300 rounded-lg space-y-2">
                    <span className="font-serif text-xs italic text-stone-600 block leading-tight">Nhịp đập động mạch cổ (BPM):</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-5xl font-mono font-black text-stone-900">
                        {pulseRatio}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400 font-bold">NHỊP/PHÚT</span>
                    </div>
                    <p className="text-[9px] font-mono text-stone-500 font-bold leading-none uppercase">
                      {pulseRatio > 100 ? "⚠️ Tim thắt bóp gấp gáp" : "✓ Trơn nhịp phế nang"}
                    </p>
                  </div>

                </div>

                {/* Analytical verdict log text */}
                <div className="p-4 rounded-lg bg-stone-100 border border-stone-300 space-y-1.5 text-xs text-stone-700 font-sans leading-relaxed text-justify">
                  <span className="font-mono text-[9px] text-stone-500 uppercase block font-bold tracking-widest leading-none">PHÂN TÍCH CHỈ SỐ SINH TRẮC LÂM LỰ:</span>
                  
                  {shieldActive ? (
                    <span>
                      <strong>✓ Quỹ Đạo An Toàn Tuyệt Đối:</strong> Dưới sự bọc lót y khoa 5 lớp, cơ thể người lớn tuổi thích nghi mềm mại, huyết áp duy trì cân bằng phế quản. Đạt tiêu chuẩn tối ưu chinh phục đỉnh đèo tuyết cao kề sương mây, bảo bọc trọn gói.
                    </span>
                  ) : (
                    <span>
                      <strong>⚠️ Cực Kỳ Nguy Hiểm Cho Sức Khỏe:</strong> Khí thở loãng bất thình lình làm tim co thắt bạo liệt hộc phế thở gấp. Nguy cơ biến chứng tràn dịch não tủy nguy kịch (HAPE). Bạn bắt buộc phải rút lui dốc độ dưới 45 phút nếu không có trực thăng hoặc oxy nén hỗ trợ trực tiếp!
                    </span>
                  )}
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================================
            SECTION 3: THE VINTAGE POSTCARD TOUR CATALOG
            ====================================================================== */}
        <section id="himalayan-catalogue" className="space-y-6">
          <div className="text-left space-y-1">
            <span className="font-mono text-xs text-amber-900 font-extrabold tracking-widest uppercase block">// THE THREE CLASSICAL TRAVEL MEMOIRS</span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-stone-950 uppercase">
              Chương Trình Viễn Hành Thượng Cấp
            </h2>
            <div className="w-16 h-1 bg-amber-900"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {ARCHIVAL_POSTCARDS.map((postcard) => (
              <div 
                key={postcard.code}
                className="bg-[#faf6ee] border-2 border-stone-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative hover:border-amber-900/60 hover:shadow-lg transition-all duration-300"
              >
                {/* Vintage stamp ornament */}
                <div className="absolute top-4 right-4 bg-red-800/10 border border-dashed border-red-850 px-2 py-0.5 rounded text-[8px] font-mono text-red-800 font-bold uppercase rotate-6">
                  {postcard.code}
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-amber-900 tracking-widest uppercase block font-bold leading-none">
                      {postcard.duration}
                    </span>
                    <h3 className="font-serif font-extrabold text-lg sm:text-xl text-stone-900 leading-tight">
                      {postcard.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-amber-900/30"></div>
                  </div>

                  <p className="font-sans text-stone-650 text-xs text-justify leading-relaxed italic">
                    “{postcard.experience}”
                  </p>

                  <div className="space-y-2 border-t border-dashed border-stone-300 pt-4">
                    <span className="font-mono text-[8.5px] text-stone-400 uppercase tracking-wider block font-bold">điểm cốt túc phế nang:</span>
                    <ul className="space-y-1.5 text-xs font-sans text-stone-750 text-stone-700">
                      {postcard.notes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-800 shrink-0 select-none">✥</span>
                          <span className="leading-tight">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-stone-300 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[8px] text-stone-500 uppercase block font-bold leading-none">CHI PHÍ TRỌN QUY:</span>
                    <span className="font-mono text-base font-black text-amber-900 tracking-tighter">
                      {postcard.price}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onTourSelect?.({
                        title: postcard.title,
                        duration: postcard.duration,
                        price: postcard.price,
                        tag: "Độc Quyền Bản Thảo Fit Tour 80"
                      });
                    }}
                    className="px-4 py-2.5 bg-amber-900 hover:bg-amber-950 text-amber-50 font-serif font-bold text-xs uppercase tracking-wide rounded-lg cursor-pointer transition shadow flex items-center gap-1.5"
                  >
                    <span>Lên Bản Đồ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>


        {/* ======================================================================
            SECTION 4: TYPEWRITER TELEGRAM FEEDBACK SHEET (COMMUNIQUES)
            ====================================================================== */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Old Telegram stream (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-1">
                <span className="font-mono text-xs text-amber-900 font-extrabold tracking-widest uppercase block">// ARCHIVAL FEEDBACK REELS</span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-950 uppercase">
                  Thông Điệp Điện Tín Phục Hành
                </h2>
                <p className="text-xs text-stone-600 font-sans">
                  Lời tâm tình chân thật gõ bằng máy chữ của những lữ khách thực trạm:
                </p>
              </div>

              {/* The Telegram Box Case */}
              <div className="bg-[#fcfaf5] border-2 border-stone-350 border-stone-300 p-6 sm:p-8 rounded-xl shadow-inner relative space-y-6">
                
                {/* Decorative retro teletype banner */}
                <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-amber-900 text-amber-50 px-3 py-1 font-mono text-[9px] font-black uppercase tracking-widest rounded shadow">
                  FAR EAST TELETYPE OFFICE
                </div>

                <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 no-scrollbar scrollbar-thin scrollbar-thumb-amber-900/20">
                  {telegrams.map((tel) => (
                    <div key={tel.id} className="border-b border-dashed border-stone-300 pb-4 last:border-0 last:pb-0 font-mono text-xs text-left text-stone-850">
                      <div className="flex justify-between items-baseline text-[9px] text-amber-900 font-black mb-1">
                        <span>SENDER // {tel.sender}</span>
                        <span>RECEIPT: OK_VERIFIED</span>
                      </div>
                      <p className="font-mono text-stone-800 bg-stone-100/60 p-3 border-l-2 border-amber-800 tracking-wide text-[11px] uppercase leading-relaxed">
                        “{tel.text}”
                      </p>
                      <span className="text-[8px] text-stone-400 block mt-1 tracking-widest uppercase align-right text-right">
                        DISPATCHED AT: {tel.time} GTM
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Brutalist Command Input Form (Right 5 Cols) */}
            <div className="lg:col-span-5 bg-[#faf6ee] border-2 border-stone-300 p-6 sm:p-8 rounded-xl space-y-6 shadow-md">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest block font-bold">// CHỦ TRẠM BIÊN ĐỒ</span>
                <h3 className="font-serif font-black text-stone-900 text-lg uppercase leading-none">
                  Ký Đóng Lưu Chỉ Niên Vàng
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans text-justify pt-1">
                  Đoàn thứ 80 kết thúc thành chương viên mãn. Xin hãy trút gõ một bức điện tín cổ điển để gửi gắm lời vàng hoặc đề xuất bảo hộ y học:
                </p>
              </div>

              {!submittedTele ? (
                <form onSubmit={performPostTelegram} className="space-y-4 text-xs font-mono">
                  
                  <div className="space-y-1">
                    <label className="block text-amber-900 font-black text-[9px] uppercase tracking-widest">Danh vị điện báo viên:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ví dụ: CO_DUYEN_HA_NOI"
                      value={telegramSender}
                      onChange={(e) => setTelegramSender(e.target.value)}
                      className="w-full bg-[#fceddb]/40 border border-stone-300 focus:border-amber-900 rounded p-2.5 outline-none transition uppercase text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-amber-900 font-black text-[9px] uppercase tracking-widest">Nội dung bức điện chỉ:</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Chúng tôi vô cùng mạn nguyện khi bố tôi 68 tuổi ngủ rất tròn ấm bờ hồ tso..."
                      value={telegramMsg}
                      onChange={(e) => setTelegramMsg(e.target.value)}
                      className="w-full bg-[#fceddb]/40 border border-stone-300 focus:border-amber-900 rounded p-2.5 outline-none transition uppercase text-xs leading-relaxed resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-900 hover:bg-amber-950 text-amber-50 font-serif font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer text-center text-xs shadow"
                  >
                    VỆ TINH GỬI ĐIỆN BÁO KHẨN
                  </button>

                </form>
              ) : (
                <div className="p-6 bg-amber-900/5 border border-dashed border-amber-900/30 rounded-xl text-center space-y-4">
                  <span className="text-[10px] text-amber-900 font-black uppercase tracking-widest block">TELEGRAM_DISPATCHED_OK</span>
                  <div className="w-10 h-10 border-2 border-amber-900 rounded-full flex items-center justify-center mx-auto text-amber-900">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm uppercase">Điện Tín Đã Được Ghi Sổ!</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans text-justify">
                    Hệ thống đã nhận tín hiệu bưu chính Tây Tạng và hiển thị vĩnh viễn trên bức tường danh dự của Chuyến du lịch lần thứ 80. Cảm phục lòng hiếu nghĩa và khao khát đi cực của bạn!
                  </p>
                  <button
                    onClick={() => setSubmittedTele(false)}
                    className="text-[10px] text-amber-900 font-black font-mono underline uppercase hover:text-amber-950 cursor-pointer"
                  >
                    GÕ BỨC ĐIỆN TÍN KHÁC
                  </button>
                </div>
              )}

            </div>

          </section>

      </div>
    </div>
  );
}
