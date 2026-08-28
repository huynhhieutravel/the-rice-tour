
import { motion } from 'motion/react';
import { Quote, Compass, BookOpen, Feather, Sparkles, MapPin, Map } from 'lucide-react';

interface EMagazineArticleProps {
  passengerName: string;
  passengerPhoto: string | null;
  onBackToHome: () => void;
}

export default function EMagazineArticle({ passengerName, passengerPhoto, onBackToHome }: EMagazineArticleProps) {
  // Highlight occurrences of passengerName dynamically in the text
  const uppercaseName = passengerName.toUpperCase();

  return (
    <div id="emagazine-article" className="relative min-h-screen bg-[#faf7f2] overflow-x-hidden selection:bg-gold-200 selection:text-gold-950">
      
      {/* Standalone Reading Header Bar */}
      <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-gold-200 py-4 px-4 md:px-8 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBackToHome}
            className="group flex items-center gap-2 py-1.5 px-4 bg-gold-950 hover:bg-gold-900 border border-gold-900 text-gold-100 font-serif italic text-sm md:text-xs font-bold rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:scale-103"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1 duration-300">←</span>
            <span>Quay lại Trang Chủ</span>
          </button>

          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-gold-700 animate-spin-slow" />
            <span className="font-mono text-sm md:text-xs md:text-xxs tracking-widest text-[#635132] uppercase">FIT TOUR CHRONICLES</span>
          </div>
        </div>
      </header>

      {/* Main Column Body */}
      <div className="relative py-16 px-4 md:px-8 max-w-4xl mx-auto">
        {/* Editorial Watermark */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-[0.02] -mr-48 -mt-24 select-none">
          <Compass className="w-full h-full text-gold-900" />
        </div>
        
        {/* Editorial Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-1.5 py-1 px-4.5 bg-gold-950 text-gold-100 rounded-full text-[12px] md:text-[10px] font-mono tracking-[0.2em] uppercase font-bold shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            <span>Ký Sự Đặc Biệt • E-Magazine</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="font-serif font-black text-3.5xl md:text-5.5xl text-gold-950 leading-tight tracking-tight max-w-4xl mx-auto"
          >
            {uppercaseName} VÀ HÀNH TRÌNH THEO DẤU CON ĐƯỜNG TƠ LỤA GIỮA TRÁI TIM TRUNG Á
          </motion.h2>

          <div className="w-24 h-0.5 bg-gold-400 mx-auto my-6" />

          <p className="font-serif italic text-sm md:text-base text-gold-800 max-w-2xl mx-auto leading-relaxed">
            Hành trình thời trang kết hợp trải nghiệm thám hiểm độc bản, tìm kiếm những giá trị nguyên sơ và linh hồn của con đường giao thương vĩ đại nhất lịch sử.
          </p>
        </div>

        {/* Lead Graphic or Parallax Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-stretch">
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden shadow-xl border-2 border-gold-300 min-h-[300px] md:min-h-[400px]">
            <img 
              src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png" 
              alt="Central Asia Steppe Scenic" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120f0a]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <span className="text-[12px] md:text-[10px] font-mono uppercase tracking-widest text-gold-300 block mb-1">Mê Kính Thiên Sơn</span>
              <p className="font-serif italic text-sm text-gold-50">"Ở đâu đó giữa lòng lục địa Á - Âu, tồn tại một vùng đất rộng lớn..."</p>
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col justify-between bg-gold-900 text-gold-50 p-6 rounded-2xl shadow-xl border border-gold-950 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 opacity-10 pointer-events-none">
              <Feather className="w-full h-full text-gold-100" />
            </div>
            <div>
              <span className="text-[11px] md:text-[9px] font-mono tracking-widest uppercase text-gold-300 block mb-3 border-b border-gold-600/50 pb-2">Ambassador Portrait</span>
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-gold-500 bg-gold-950 mb-4 shadow-inner">
                <img 
                  src={passengerPhoto || "/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png"} 
                  alt={passengerName}
                  className="w-full h-full object-cover object-top mix-blend-luminosity brightness-110 saturate-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-gold-100">{passengerName}</h4>
              <p className="font-serif italic text-[13px] md:text-[11px] text-gold-300 mt-1">Đại Sứ Hành Trình Con Đường Tơ Lụa</p>
            </div>
            <div className="pt-6 border-t border-gold-800/60 flex items-center gap-2 mt-4 text-[12px] md:text-[10px] font-mono text-gold-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Charyn Canyon, Almaty & Bishkek</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="font-sans text-stone-900 text-sm md:text-base leading-relaxed md:leading-loose space-y-8 text-justify col-count-1 md:col-count-2 col-gap-10">
          
          {/* Paragraph 1 with Drop Cap */}
          <p className="relative">
            <span className="float-left text-5xl md:text-6xl font-serif font-black text-gold-950 mr-3 line-height-none pt-1">Ở</span>
            đâu đó giữa lòng lục địa Á - Âu, tồn tại một vùng đất rộng lớn đến mức người ta có thể lái xe hàng giờ mà không gặp một thị trấn nào, nơi những đồng cỏ trải dài bất tận đến tận đường chân trời và những dãy núi tuyết khổng lồ vẫn đứng đó như đã đứng suốt hàng triệu năm qua. Giữa không gian mênh mông ấy, dưới bóng dãy Thiên Sơn hùng vĩ, một trong những câu chuyện vĩ đại nhất của lịch sử loài người đã từng được viết nên.
          </p>

          <p className="font-serif italic text-gold-950 text-lg py-5 pl-4 border-l-3 border-gold-500 font-extrabold my-8 tracking-wide bg-gold-200/20 pr-4 rounded-r-lg">
            Đó là Con Đường Tơ Lụa.
          </p>

          <p>
            Ngày nay, khi nhắc đến Con Đường Tơ Lụa, nhiều người hình dung đến những trang sách lịch sử cũ kỹ hay những bản đồ cổ treo trong bảo tàng. Nhưng thực tế, Con Đường Tơ Lụa chưa bao giờ chỉ là một con đường. Nó là một mạng lưới khổng lồ kéo dài hàng nghìn kilomet, băng qua sa mạc, thảo nguyên, núi cao và các ốc đảo, kết nối những nền văn minh lớn nhất của thế giới cổ đại từ Trường An của Trung Hoa, qua Trung Á, Ba Tư, đến tận Địa Trung Hải.
          </p>

          {/* Pullout highlight grid */}
          <div className="my-10 bg-gold-50 border border-gold-250 p-6.5 rounded-2xl shadow-sm space-y-4 not-prose">
            <div className="flex items-center gap-1.5 text-gold-700 font-mono text-sm md:text-xs uppercase tracking-wider border-b border-gold-200 pb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              <span>Dấu ấn nghìn năm trên dặm cát viễn chinh</span>
            </div>
            
            <p className="text-sm md:text-xs text-gold-900 leading-relaxed font-light">Trong suốt hơn hai thiên niên kỷ, hàng triệu con người đã đi qua vùng đất này:</p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-xs text-gold-950 font-serif italic">
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-extrabold">✦</span>
                <span>Những đoàn thương nhân chở tơ lụa, ngọc thạch, ngọc lục bảo, trà và gia vị.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-extrabold">✦</span>
                <span>Những nhà thám hiểm mang theo dấn thân phiêu lưu và khát vọng khám phá thế giới rộng lớn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-extrabold">✦</span>
                <span>Những nhà sư kiên cường đi qua ranh giới gập ghềnh truyền bá tư tưởng và tín ngưỡng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-extrabold">✦</span>
                <span>Những sứ thần khoác trên mình phẩm phục vương triều của các đế chế đại ngàn hùng mạnh.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-gold-150 flex items-center justify-center">
              <p className="font-serif italic text-sm text-gold-950 text-center font-bold">
                "Những đoàn caravan hàng trăm con lạc đà nối đuôi nhau trên các tuyến thương mại dài bất tận."
              </p>
            </div>
          </div>

          <p>
            Không chỉ hàng hóa được vận chuyển trên Con Đường Tơ Lụa. Những ý tưởng, tri thức, tôn giáo, nghệ thuật và văn hóa cũng theo đó mà lan tỏa khắp lục địa Á - Âu, làm thay đổi tiến trình phát triển của nhân loại.
          </p>

          <p className="font-serif italic text-gold-950 text-lg py-5 pl-4 border-l-3 border-gold-500 font-extrabold my-8 tracking-wide bg-gold-200/20 pr-4 rounded-r-lg">
            Trung Á chính là trái tim của câu chuyện ấy.
          </p>

          <p>
            Đây là nơi những tuyến đường giao thương gặp nhau. Đây là nơi các nền văn minh giao thoa. Và cũng là nơi những đế chế thảo nguyên từng trỗi dậy, để lại dấu ấn sâu đậm trong lịch sử thế giới.
          </p>

          {/* Central image grid layout */}
          <div className="grid grid-cols-2 gap-4 my-10">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-200 shadow-md">
              <img 
                src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png" 
                alt="Nomadic Lifestyle Yurts" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-2 left-2 text-[11px] md:text-[9px] font-mono uppercase bg-black/60 text-gold-200 px-1.5 py-0.5 rounded">Yurts Thảo Nguyên</span>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-200 shadow-md">
              <img 
                src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png" 
                alt="Samarkand Turquoise Tiles" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-2 left-2 text-[11px] md:text-[9px] font-mono uppercase bg-black/60 text-gold-200 px-1.5 py-0.5 rounded">Kiến Trúc Cổ Kính</span>
            </div>
          </div>

          <p>
            Giữa những đồng cỏ bất tận của Kazakhstan và Kyrgyzstan ngày nay, người ta vẫn có thể cảm nhận được dư âm của thời đại ấy. Những di tích cổ nằm lặng lẽ bên các tuyến đường xưa. Những tàn tích của các trạm dịch từng là nơi nghỉ chân cho thương nhân sau nhiều ngày vượt núi và băng sa mạc. Những khu chợ địa phương nơi tinh thần giao thương vẫn còn hiện hữu trong đời sống thường nhật. Và trên hết là văn hóa du mục – một lối sống đã định hình nên bản sắc của vùng đất này suốt hàng nghìn năm.
          </p>

          <p>
            Trước khi xuất hiện những quốc gia hiện đại, trước khi biên giới được vẽ trên bản đồ, những bộ tộc du mục đã sống trên các thảo nguyên rộng lớn của Trung Á. Họ di chuyển theo mùa, sống cùng đàn gia súc và những đàn ngựa. Họ là những chiến binh, những người chăn nuôi, những người dẫn đường và đôi khi là những người kiến tạo nên các đế chế.
          </p>

          <p>
            Lịch sử từng ghi nhận sự hiện diện của người Hung Nô trên các vùng thảo nguyên rộng lớn này. Sau đó là sự xuất hiện của các liên minh bộ tộc, các vương triều và những đế chế hùng mạnh nối tiếp nhau kiểm soát các tuyến giao thương huyết mạch giữa Đông và Tây. Trong nhiều thế kỷ, ai kiểm soát được Con Đường Tơ Lụa sẽ nắm giữ quyền lực, của cải và ảnh hưởng vượt xa biên giới lãnh thổ của mình.
          </p>

          <p>
            Nhưng điều khiến Trung Á trở nên đặc biệt không chỉ nằm trong lịch sử. Điều khiến nơi đây trở nên cuốn hút là bởi rất nhiều giá trị nguyên bản vẫn còn tồn tại.
          </p>

          <p>
            Ở nhiều vùng quê xaôi của Kyrgyzstan, những gia đình du mục vẫn dựng Yurt trên đồng cỏ mùa hè. Trẻ em vẫn lớn lên cùng ngựa. Những người đàn ông vẫn dành phần lớn cuộc đời trên lưng ngựa. Những đàn gia súc vẫn di chuyển theo mùa như cách tổ tiên họ đã làm từ nhiều thế hệ trước.
          </p>

          {/* Full Width Quote Overlay block */}
          <div className="my-12 relative py-12 px-6 rounded-2xl bg-gold-950 text-gold-100 border-2 border-gold-400 overflow-hidden shadow-xl text-center">
            <div className="absolute inset-0 opacity-[0.06] select-none pointer-events-none">
              <img 
                src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png" 
                alt="Camel outline" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <Quote className="w-8 h-8 text-gold-400 mx-auto mb-4 opacity-50" />
            <p className="font-serif italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gold-105 font-bold">
              "Vào những buổi chiều mùa hè, khi ánh nắng cuối ngày phủ vàng lên thảo nguyên dưới chân dãy Thiên Sơn, người ta có thể bắt gặp những kỵ sĩ xuất hiện từ phía xa, nhỏ bé giữa không gian bao la của núi non và đồng cỏ."
            </p>
            <span className="block mt-4.5 text-[11px] md:text-[9px] font-mono tracking-widest uppercase text-gold-400">
              Khung cảnh ấy gần như không thay đổi quá nhiều so với hàng trăm năm trước.
            </span>
          </div>

          <p>
            Chính sự nguyên bản đó đã khiến vùng đất này trở thành điểm đến tiếp theo trong hành trình khám phá của <span className="font-bold border-b-2 border-gold-550 text-gold-950 px-0.5">{passengerName}</span>.
          </p>

          <p>
            Sau những dự án nghệ thuật tại Kashmir, sau những ngày rong ruổi trên thảo nguyên Mông Cổ, hành trình lần này không đơn thuần là một chuyến đi qua hai quốc gia Trung Á. Đó là hành trình theo dấu những tuyến đường đã từng kết nối thế giới. Là cơ hội để bước vào không gian của những nền văn minh cổ đại, những câu chuyện lịch sử, những cộng đồng du mục và những con người vẫn đang gìn giữ một phần linh hồn của Con Đường Tơ Lụa.
          </p>

          <p>
            Giữa thời đại mà mọi thứ dường như ngày càng nhanh hơn, gần hơn và dễ tiếp cận hơn, Trung Á vẫn giữ lại cho mình một cảm giác rất khác. Một cảm giác của khoảng cách. Của sự rộng lớn. Của những chân trời không có điểm kết thúc.
          </p>

          <p>
            Và có lẽ cũng chính vì thế mà Con Đường Tơ Lụa vẫn luôn có sức hấp dẫn đặc biệt đối với những người yêu khám phá.
          </p>

          {/* Master concluding poem layout */}
          <div className="pt-8 border-t border-gold-250 mt-12 max-w-md mx-auto text-center space-y-2">
            <p className="font-serif italic text-[#635132] text-sm font-semibold">
              Bởi đó không chỉ là hành trình đi qua một vùng đất.
            </p>
            <p className="font-serif italic text-[#635132] text-sm font-semibold">
              Đó là hành trình đi qua lịch sử của cả một lục địa.
            </p>
            <div className="flex justify-center pt-4">
              <Compass className="w-5 h-5 text-gold-500 animate-spin-slow" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
