import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Compass, Feather, Flame, Heart, Scroll, Sparkles, 
  Wind, MapPin, Award, Volume2, RotateCcw, Send, Coffee, CornerDownRight 
} from 'lucide-react';

interface ClassicalImperialProps {
  passengerName: string;
  setPassengerName: (name: string) => void;
  passengerPhoto: string | null;
}

export default function ClassicalImperialChina({ 
  passengerName, 
  setPassengerName, 
  passengerPhoto 
}: ClassicalImperialProps) {
  
  // States of interactive elements
  const [activeScroll, setActiveScroll] = useState<boolean>(true);
  const [selectedTea, setSelectedTea] = useState<'longest' | 'puer' | 'tieguanyin'>('puer');
  const [brewTemp, setBrewTemp] = useState<number>(85);
  const [isBrewing, setIsBrewing] = useState<boolean>(false);
  const [brewMessage, setBrewMessage] = useState<string>('Bấm để nhóm lửa trà lò thâm thâm');
  
  // Interactive bamboo slip journal state
  const [activeSlip, setActiveSlip] = useState<number>(0);

  // Brush Slate states
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#1c1917'); // Pitch ink black
  const [brushSize, setBrushSize] = useState(6);

  // Audio Pentatonic Scale Chord
  const playAncientChord = (freqs: number[]) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      freqs.forEach((f, idx) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = f;
          
          // Mimic plucked wooden string decay
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
          
          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.start();
          osc.stop(ctx.currentTime + 1.9);
        }, idx * 120);
      });
    } catch (e) {}
  };

  // Canvas drawing logic for Brush Calligraphy
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set background to wet slate / stone slab hue on load
    ctx.fillStyle = '#fbf9f3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid lines for calligraphy precision
    ctx.strokeStyle = 'rgba(153, 27, 27, 0.08)';
    ctx.lineWidth = 1;
    // Horizontal centered lines
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    // Diagonals for imperial grids
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = brushColor;
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      // Prevent scrolling while drawing on mobile
      if (e.cancelable) e.preventDefault();
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#fbf9f3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Restore imperial red grid lines
    ctx.strokeStyle = 'rgba(153, 27, 27, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();

    playAncientChord([293.66, 329.63]);
  };

  // Tea Ceremony simulation
  const handleBrewTea = () => {
    setIsBrewing(true);
    setBrewMessage('Đang đun thạch thủy bằng than tùng... ♨');
    playAncientChord([392.00, 440.00, 523.25]);

    setTimeout(() => {
      setIsBrewing(false);
      let review = '';
      if (selectedTea === 'longest') {
        review = `Trà cụ Long Tỉnh đã trào ngậy sắc tía ngọc ẩm tại ${brewTemp}°C. Hương cốm non nẩy lộc ban phát cát tường!`;
      } else if (selectedTea === 'puer') {
        review = `Cổ trà Phổ Nhĩ ${brewTemp}°C chín thẫm ngọt hậu, xoa dịu phong trần lữ hành, lắng đọng thời gian trôi tàn.`;
      } else {
        review = `Thiết Quan Âm tuyệt đỉnh thanh khiết ninh chưng ở ${brewTemp}°C, hương hoa lan ngạt ngào tràn phủ hiên đình.`;
      }
      setBrewMessage(review);
      playAncientChord([261.63, 329.63, 392.00, 523.25]);
    }, 2200);
  };

  // Classic Bamboo slip data
  const bambooSlips = [
    {
      title: 'I. KHỞI HÀNH KHAI MÔN',
      location: 'Cố Cung Bắc Kinh (Beijing Palace)',
      desc: 'Ngoại thành mờ sương tấc đất vàng kim, lữ nhân thắp hương bái kiến ngọc điện điện các, dâng hương hoa tía tế bái thần minh trước khi dong xe tơ.'
    },
    {
      title: 'II. TIÊN CẢNH SA THẠCH',
      location: 'U Lính Trương Gia Giới (Wulingyuan)',
      desc: 'Ba ngàn cột đá sa thạch thọc mây thẳng đứng, bè tre rẽ lối qua làn khói biếc mịt mù nơi danh gia nho sĩ tìm về tĩnh tâm quy ẩn.'
    },
    {
      title: 'III. CỔ ĐẠO TRÀ MÃ',
      location: 'Lệ Giang & Vân Nam (Yunnan Caravan)',
      desc: 'Cưỡi ngựa thong dong qua thềm đá phiến rêu phong nghìn năm, thưởng thức Đơn Tùng trà dưới hiên nhà gỗ của người Nạp Tây mộc mạc.'
    },
    {
      title: 'IV. THỦY MẶC VẠN NIÊN',
      location: 'Sông Ly & Quế Lâm (Yulong River)',
      desc: 'Đêm đông gõ mạn thuyền rêu, nghe tiếng hát chèo mộc mạc hòa nhịp đàn tranh. Soi bóng sườn núi đá vôi u tịch lững lờ trên sông biếc.'
    }
  ];

  return (
    <div className="bg-[#fcf8ef] text-[#2c1d11] min-h-screen font-serif relative overflow-hidden pb-16 selection:bg-red-800 selection:text-white">
      
      {/* Ancient silk painting background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#854d0e_0.3px,transparent_0.3px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
      
      {/* Outer borders mimicking woodblock frame */}
      <div className="absolute top-4 bottom-4 left-4 right-4 border-[2px] border-[#a16207]/40 pointer-events-none rounded-lg" />
      <div className="absolute top-6 bottom-6 left-6 right-6 border border-dashed border-[#a16207]/25 pointer-events-none rounded-lg" />

      {/* Decorative Golden Chinese Clouds Top and Bottom */}
      <div className="absolute top-10 left-10 text-amber-800/10 font-bold select-none text-9xl leading-none pointer-events-none font-sans">
        雲
      </div>
      <div className="absolute bottom-10 right-10 text-amber-800/10 font-bold select-none text-9xl leading-none pointer-events-none font-sans">
        山
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10 space-y-12">
        
        {/* Classical Header Banner */}
        <div className="text-center py-8 border-b-2 border-dashed border-amber-800/20 max-w-3xl mx-auto space-y-3.5">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-700 rounded-full" />
            <span className="font-mono text-[11.5px] md:text-[9.5px] tracking-[0.4em] text-amber-800 uppercase font-black">
              PARCHMENT CLASSICAL VERSION • 皇室古風版
            </span>
            <span className="w-1.5 h-1.5 bg-red-700 rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-red-950 uppercase tracking-widest leading-tight">
            TRUNG HOA THƯ SỰ
          </h2>
          
          <p className="text-[#a16207] text-sm md:text-xs md:text-sm font-bold tracking-widest uppercase">
            BẢN THUYẾT HOÀNG GIA ĐỘC BẢN CỔ ĐIỂN
          </p>

          <div className="flex justify-center items-center gap-2 pt-2">
            <span className="w-8 h-[1px] bg-amber-700/40" />
            <div className="w-6 h-6 rounded bg-red-800 border border-amber-500/50 flex items-center justify-center text-white scale-90 rotate-6 select-none font-serif text-[9.5px] md:text-[7.5px] font-bold">
              御
            </div>
            <span className="w-8 h-[1px] bg-amber-700/40" />
          </div>
        </div>

        {/* Dynamic Dual Grid Column: Imperial Seal Certificate & Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Broadside Certificate (Imperial Decree) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-[#fcfaf2] border-2 border-[#854d0e]/60 p-6 rounded-2xl shadow-xl space-y-5 relative overflow-hidden">
              {/* Corner delicate stamp line borders */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-red-700/40" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-red-700/40" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-red-700/40" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-red-700/40" />

              {/* Certificate Header */}
              <div className="flex items-center justify-between border-b border-[#a16207]/20 pb-2">
                <span className="font-serif text-[12px] md:text-[10px] text-red-800 font-extrabold tracking-widest">FIT TOUR • 御書勅令</span>
                <span className="font-serif text-[11.5px] md:text-[9.5px] text-stone-500 font-bold tracking-wider">CHỨNG PHÒNG THÔNG HÀNH</span>
              </div>

              <div className="space-y-4">
                <div className="text-center bg-[#f3ecd5]/60 border border-[#a16207]/15 p-4 rounded-xl relative">
                  {/* Delicate Background Wax Seal overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                    <span className="text-9xl text-red-900 font-bold font-serif">印</span>
                  </div>

                  <span className="text-[11px] md:text-[9px] font-mono text-stone-500 uppercase tracking-widest block font-bold">ĐẠI SỨ DU KHẢO ĐƯỢC CHỈ ĐỊNH</span>
                  
                  {/* Name value showing inside hand-crafted plaque */}
                  <div className="my-2 flex justify-center items-center gap-1">
                    <input
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      className="font-serif text-[22px] md:text-[26px] font-black tracking-widest text-[#7f1d1d] bg-transparent border-b-2 border-dashed border-red-800/40 hover:border-red-900 focus:outline-none focus:border-red-900 py-1 text-center w-full max-w-[300px] uppercase cursor-pointer"
                      title="Nhấp chuột để tự do cải biên danh thánh"
                    />
                  </div>
                  <span className="text-[12px] md:text-[10px] text-[#2c1d11]/80 italic block">Lữ nhân tôn kính có thể tự do gõ sửa tôn hiệu trực tiếp bên trên.</span>
                </div>

                {/* Substantive decree text */}
                <div className="space-y-3 text-sm md:text-xs md:text-sm text-stone-800 leading-relaxed text-justify px-2">
                  <p className="indent-6 font-semibold">
                    Chiếu dụ truyền hạ: Sắc phong hoàng gia ưu ái dành riêng cho tịnh sĩ <strong className="text-red-900 font-black italic">{passengerName}</strong> được bảo trợ lữ hành vạn tấc núi sông, gõ cửa đình chùa mờ ảo sương khói của vùng sa thạch Trung Hoa u tích.
                  </p>
                  <p className="indent-6 text-stone-700 italic">
                    Bản chiếu văn này tích tụ chân nguyên cổ cầm ngũ cung cùng sớ sách thi họa của các tiền hiền Đường triều, bảo đảm hành trình xa hoa khép kín, tắm tư niệm thanh lương để tái dấy tâm hồn rộng mở của quý khách.
                  </p>
                </div>

                {/* Grid stats in historical look */}
                <div className="grid grid-cols-2 gap-3 border-t border-[#a16207]/20 pt-4 text-[12px] md:text-[10px] font-serif text-stone-600 uppercase">
                  <div className="bg-[#f0e6cb]/40 p-2.5 rounded border border-[#a16207]/10 flex flex-col justify-between">
                    <span>VÔ ƯU HÀNH TRÌNH TỐC</span>
                    <strong className="text-red-900 font-black text-sm md:text-xs mt-1 block">CHÂN TƯỢNG TỨ TOA TRUYỀN</strong>
                  </div>
                  <div className="bg-[#f0e6cb]/40 p-2.5 rounded border border-[#a16207]/10 flex flex-col justify-between">
                    <span>ĐIỂM NGHỈ TỊCH DƯƠNG</span>
                    <strong className="text-[#a16207] font-black text-sm md:text-xs mt-1 block">THỜI THIỀN CHÚA CỐ TRẤN</strong>
                  </div>
                </div>

              </div>
              
              {/* Seal Footer wrapper */}
              <div className="flex justify-between items-end pt-3 text-sm md:text-xs border-t border-[#a16207]/15">
                <div>
                  <span className="block text-[10px] md:text-[8px] font-mono text-stone-500 tracking-wider">CHỨNG CHỈ FIT TOUR MAJESTIC</span>
                  <span className="text-[#7f1d1d] font-black block">Ấn Triện Ngự Sứ Hà Nội</span>
                </div>
                
                <div className="flex gap-2">
                  {/* Decorative Vintage Red Wax Stamp */}
                  <div className="w-10 h-10 rounded-full bg-red-800 border-2 border-amber-500/60 flex items-center justify-center text-white font-serif font-black text-[11px] md:text-[9px] leading-none text-center select-none rotate-6 shadow">
                    敕令<br/>御印
                  </div>
                  <div className="w-10 h-10 bg-red-950 border border-red-700 flex items-center justify-center text-amber-300 font-serif font-bold text-[10px] md:text-[8px] leading-tight text-center select-none rotate-12 shadow">
                    VẠN CHỈ<br/>SA THẠCH
                  </div>
                </div>
              </div>

            </div>

            {/* Guqin sound master box */}
            <div className="bg-[#fdfcf9] border border-[#a16207]/30 p-4.5 rounded-xl shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f4eecd] flex items-center justify-center text-[#7f1d1d] border border-amber-700/20">
                  <Volume2 className="w-4 h-4 text-red-900 shrink-0" />
                </div>
                <div>
                  <h4 className="font-serif font-extrabold text-sm md:text-xs text-red-950 uppercase block">ÂM SẮC CỔ CẦM TÚY ĐIỆU</h4>
                  <span className="font-mono text-[10.5px] md:text-[8.5px] text-stone-500 tracking-wide uppercase block">PLUCK GENTLY UPON THESE PENTATONIC STRINGS</span>
                </div>
              </div>
              
              {/* Set of 5 ancient tơ strings with custom pitches */}
              <div className="grid grid-cols-5 gap-2 mt-4">
                {[
                  { name: 'CUNG', pitch: [261.63, 311.13, 392.00] },
                  { name: 'THƯƠNG', pitch: [293.66, 349.23, 440.00] },
                  { name: 'DỐC', pitch: [329.63, 392.00, 493.88] },
                  { name: 'CHỦY', pitch: [392.00, 466.16, 587.33] },
                  { name: 'VŨ', pitch: [440.00, 523.25, 659.25] },
                ].map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => playAncientChord(s.pitch)}
                    className="p-2 py-3 bg-gradient-to-b from-stone-50 to-[#f5edd5] border border-stone-200 hover:border-red-700 rounded-lg text-center cursor-pointer shadow-sm transition-all duration-300 active:scale-95 group/qin flex flex-col justify-between h-20 relative overflow-hidden"
                  >
                    {/* Simulated string line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-r border-dashed border-red-800/10 group-hover/qin:border-red-700/40" />
                    <span className="font-serif text-[13px] md:text-[11px] font-black text-stone-800 group-hover/qin:text-red-900 tracking-wider block relative z-10">{s.name}</span>
                    <span className="text-[9px] md:text-[7px] font-mono text-stone-400 group-hover/qin:text-red-700 font-bold block relative z-10">SOUND</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Interactive Calligraphy Practice Canvas Slate */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-[#1c1917] p-5 rounded-2xl shadow-xl text-stone-100 border-4 border-[#292524] relative flex flex-col">
              
              {/* Header Title describing the calligraphy plate */}
              <div className="mb-3 flex justify-between items-center border-b border-stone-800 pb-2">
                <div className="space-y-0.5">
                  <h4 className="font-serif font-black text-sm md:text-xs tracking-wider uppercase text-amber-200">KỶ TRÀ TRIỆN LỆ ( WRITING SLATE )</h4>
                  <span className="font-mono text-[9.5px] md:text-[7.5px] text-stone-400 uppercase tracking-widest block font-bold">DRAW YOUR CHINESE SEAL SIGNATURE WITH WET INK</span>
                </div>
                
                <span className="px-2 py-0.5 bg-red-900/60 border border-red-700 rounded text-[9px] md:text-[7px] font-mono tracking-widest uppercase">CALLIGRAPHY</span>
              </div>

              {/* Instructions and tips */}
              <p className="text-[12.5px] md:text-[10.5px] text-stone-300 font-sans leading-relaxed mb-3.5 italic">
                Nơi rải nét phong nhã. Hãy nhấn nút dời chuột trực tiếp lê láng trên thềm đá tơ tấm tấp bên dưới để bay nét chữ ký của riêng lữ nhân.
              </p>

              {/* Canvas Container */}
              <div className="relative aspect-square w-full bg-[#fbf9f3] rounded-xl overflow-hidden border-2 border-stone-800 shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={380}
                  height={380}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-full cursor-crosshair touch-none"
                />

                {/* Watermarked Imperial Seal stamp in the upper right quadrant of slate */}
                <div className="absolute top-4 right-4 pointer-events-none select-none border-2 border-red-700/40 p-1.5 rounded rotate-12 text-red-800/25 font-serif text-[10px] md:text-[8px] font-bold tracking-widest leading-none text-center">
                  CỐ QUỐC<br/>DI SẢN
                </div>
              </div>

              {/* Interactive Brush Toolbox controls */}
              <div className="grid grid-cols-12 gap-3 mt-4 items-center">
                
                {/* Size controller */}
                <div className="col-span-12 sm:col-span-7 flex items-center justify-between gap-2.5">
                  <span className="text-[10.5px] md:text-[8.5px] font-mono text-stone-400 uppercase font-black tracking-wider shrink-0">Bút Phong (Size): {brushSize}px</span>
                  <input
                    type="range"
                    min="3"
                    max="18"
                    value={brushSize}
                    onChange={(e) => setBrushSize(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1 bg-stone-800 rounded-lg"
                  />
                </div>

                {/* Clear Button */}
                <div className="col-span-12 sm:col-span-5 flex justify-end gap-2">
                  <button
                    onClick={clearCanvas}
                    className="w-full p-2 py-1.5 bg-stone-900 hover:bg-stone-800 rounded-lg border border-stone-800 hover:border-amber-600/40 text-stone-300 hover:text-white text-[11px] md:text-[9px] font-mono font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3 text-amber-500" />
                    <span>Làm Sạch (Clear)</span>
                  </button>
                </div>

              </div>

              {/* Classic Ink Plate color choices selector */}
              <div className="flex gap-2.5 mt-3 pt-3 border-t border-stone-850 items-center justify-center">
                <span className="text-[9.5px] md:text-[7.5px] font-mono text-stone-405 font-black uppercase tracking-widest">Nghiên Mực (Shade):</span>
                {[
                  { value: '#1c1917', name: 'Mực Than Trúc (Pitch Black)', bg: 'bg-[#1c1917]' },
                  { value: '#7f1d1d', name: 'Mực Thạch Sa (Imperial Cinnabar)', bg: 'bg-[#7f1d1d]' },
                  { value: '#14532d', name: 'Mực Ngọc Phỉ Thúy (Old Jade)', bg: 'bg-[#14532d]' }
                ].map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setBrushColor(col.value);
                      playAncientChord([293.66 * (idx + 1)]);
                    }}
                    className={`w-4 h-4 rounded-full border cursor-pointer relative ${col.bg} ${
                      brushColor === col.value ? 'ring-2 ring-amber-500 border-white' : 'border-stone-700 hover:scale-110'
                    }`}
                    title={col.name}
                  />
                ))}
              </div>

            </div>

            {/* Quote of calligraphic truth in classical layout */}
            <div className="bg-[#fcfaf2] border border-[#a16207]/20 p-3.5 rounded-xl text-sm md:text-xs md:text-xxs italic leading-normal text-stone-605 font-serif text-[#634832] flex items-start gap-2.5">
              <span className="text-[#b45309] text-base leading-none">“</span>
              <p className="text-justify font-light">
                Chữ viết tịnh lặng mở cõi lòng. Việc phác họa nét thư pháp bằng nước trên Slate tương truyền tẩy trần bách bệnh, gạt bỏ khói đời dơ bẩn, giúp du giả thâu vào nguồn linh khí sơn hà.
              </p>
            </div>

          </div>

        </div>

        {/* Bamboo slips vertical itinerary scroll */}
        <div className="bg-gradient-to-r from-[#ebdcb9] via-[#f7ecd5] to-[#ebdcb9] border-2 border-[#854d0e] p-6 md:p-8 rounded-2xl shadow-xl my-8 text-[#2c1d11]">
          
          <div className="text-center space-y-1.5 mb-8 border-b border-[#a16207]/30 pb-4 max-w-2xl mx-auto">
            <span className="font-mono text-[11px] md:text-[9px] tracking-widest text-[#7f1d1d] font-black uppercase block">BẢN THƯ KÝ SÁCH TRE • ANCIENT BAMBOO TRAVEL SLIPS</span>
            <h3 className="font-serif text-lg md:text-xl font-black text-red-950 uppercase tracking-widest">TIÊN KHẢO GIANG SƠN ĐỆ NHẤT KÝ</h3>
            <p className="text-[12.5px] md:text-[10.5px] italic text-[#634832]">Gạt lật sách bằng ngọc để lướt qua tịnh lộ trình điêu khắc sương mù.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
            {bambooSlips.map((slip, idx) => (
              <div
                key={idx}
                onMouseEnter={() => {
                  setActiveSlip(idx);
                  playAncientChord([261.63 + (idx * 30)]);
                }}
                onClick={() => {
                  setActiveSlip(idx);
                  playAncientChord([261.63 + (idx * 30)]);
                }}
                className={`p-4 rounded-xl border transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                  activeSlip === idx 
                    ? 'bg-[#faf6eb] border-red-800 shadow-lg scale-102 ring-1 ring-red-900/10' 
                    : 'bg-[#eae0c0]/95 border-amber-950/20 hover:border-red-900/30'
                }`}
              >
                {/* Vintage Bamboo vertical bar on left edge */}
                <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-amber-700/10 via-amber-800/15 to-transparent border-r border-[#a16207]/20 pointer-events-none rounded-l-xl" />

                <div className="pl-3 space-y-3">
                  <span className="font-mono text-[10px] md:text-[8px] font-bold text-red-800 block uppercase tracking-widest">{slip.title}</span>
                  <h4 className="font-serif font-black text-sm md:text-xs md:text-[13px] text-red-950 block tracking-wide">{slip.location}</h4>
                  <p className="text-[12.5px] md:text-[10.5px] font-serif leading-relaxed text-stone-701 italic text-justify">
                    "{slip.desc}"
                  </p>
                </div>

                {/* Hover indicator red seal dot */}
                <div className="flex justify-end pt-4 pl-3">
                  <span className={`w-2 h-2 rounded-full ${activeSlip === idx ? 'bg-red-700 animate-ping' : 'bg-amber-800/30'}`} />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Traditional Tea Ceremony Room (Cha Jing - Kinh Trà) */}
        <div id="classical-tea-retreat" className="bg-[#fcfaf2] border-2 border-[#854d0e]/60 p-6 md:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Subtle floral/cloud watermark design */}
          <div className="absolute top-4 right-4 text-[#854d0e]/10 font-black font-serif select-none text-9xl pointer-events-none">
            茶
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            
            {/* Left Col: Tea selector */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="font-mono text-[11px] md:text-[9px] tracking-widest text-[#b45309] uppercase font-black">KINH TRÀ HOA HẠ • TEA SUTRA CEREMONY</span>
              </div>
              <h3 className="font-serif font-black text-lg text-red-950 uppercase tracking-widest leading-tight">THIỀN TRÀ NGỰ PHÒNG</h3>
              <p className="text-stone-700 text-sm md:text-xs leading-relaxed font-light">
                Theo Lục Vũ Kinh Trà cổ đại, tịnh dưỡng khí lực bằng sương nhấp ô long trà dâng tràn lồng ngực giúp thông mạch sương tuyết tầm dặm lữ khách. Thử pha chế dạo nước trà bên lò than hồng.
              </p>

              {/* Tea types selector tiles */}
              <div className="space-y-2 pt-2">
                {/* Pu'er */}
                <button
                  onClick={() => {
                    setSelectedTea('puer');
                    setBrewTemp(95);
                    playAncientChord([293.66]);
                  }}
                  className={`w-full p-3 rounded-xl border text-left transition-colors flex items-center justify-between cursor-pointer ${
                    selectedTea === 'puer' 
                      ? 'bg-[#29140c] border-[#7f1d1d] text-amber-200' 
                      : 'bg-[#faf6eb]/80 border-stone-200 hover:border-[#a16207]/50 text-stone-777'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-red-900/10 flex items-center justify-center font-bold text-[11px] md:text-[9px] font-serif text-red-905">
                      P
                    </div>
                    <div>
                      <span className="font-serif font-extrabold text-[14px] md:text-[12px] block">Cổ Trà Phổ Nhĩ • 普洱茶</span>
                      <span className="font-mono text-[9px] md:text-[7px] text-stone-500 uppercase">Long-aged Dark Fermented Tea</span>
                    </div>
                  </div>
                  <span className="text-[11.5px] md:text-[9.5px] font-mono text-stone-500 font-black">95°C</span>
                </button>

                {/* Longjing */}
                <button
                  onClick={() => {
                    setSelectedTea('longest');
                    setBrewTemp(80);
                    playAncientChord([329.63]);
                  }}
                  className={`w-full p-3 rounded-xl border text-left transition-colors flex items-center justify-between cursor-pointer ${
                    selectedTea === 'longest' 
                      ? 'bg-[#14532d]/10 border-emerald-800 text-emerald-950' 
                      : 'bg-[#faf6eb]/80 border-stone-200 hover:border-[#a16207]/50 text-stone-777'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-900/10 flex items-center justify-center font-bold text-[11px] md:text-[9px] font-serif text-emerald-905">
                      L
                    </div>
                    <div>
                      <span className="font-serif font-extrabold text-[14px] md:text-[12px] block">Long Tỉnh Tây Hồ • 龍井茶</span>
                      <span className="font-mono text-[9px] md:text-[7px] text-[#0f5132]/60 uppercase">West Lake Panoramic Green Tea</span>
                    </div>
                  </div>
                  <span className="text-[11.5px] md:text-[9.5px] font-mono text-stone-505 font-black">80°C</span>
                </button>

                {/* Tieguanyin */}
                <button
                  onClick={() => {
                    setSelectedTea('tieguanyin');
                    setBrewTemp(90);
                    playAncientChord([392.00]);
                  }}
                  className={`w-full p-3 rounded-xl border text-left transition-colors flex items-center justify-between cursor-pointer ${
                    selectedTea === 'tieguanyin' 
                      ? 'bg-[#18110b]/90 border-amber-800 text-amber-204' 
                      : 'bg-[#faf6eb]/80 border-stone-200 hover:border-[#a16207]/50 text-stone-777'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-amber-900/10 flex items-center justify-center font-bold text-[11px] md:text-[9px] font-serif text-amber-905">
                      T
                    </div>
                    <div>
                      <span className="font-serif font-extrabold text-[14px] md:text-[12px] block">Thiết Quan Âm • 鐵觀音</span>
                      <span className="font-mono text-[9px] md:text-[7px] text-stone-500 uppercase">Premium Floral Roasted Oolong</span>
                    </div>
                  </div>
                  <span className="text-[11.5px] md:text-[9.5px] font-mono text-stone-550 font-black">90°C</span>
                </button>
              </div>

            </div>

            {/* Right Col: Interactive brewing kettle */}
            <div className="md:col-span-7 bg-[#faf6eb] border border-[#a16207]/30 p-5 rounded-2xl shadow-inner flex flex-col justify-between space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#a16207]/10">
                <span className="text-[11px] md:text-[9px] font-mono uppercase text-stone-500 block">LÒ HƯƠNG ĐUN TRÀ THẠCH THỦY</span>
                <span className="font-serif italic text-red-800 text-[12.5px] md:text-[10.5px] font-extrabold block">Bình Tự Chưng Cổ Điển</span>
              </div>

              {/* Water Temperature Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[12px] md:text-[10px] font-mono text-stone-605">
                  <span>NHIỆT ĐỘ KHỦNG LÒ (TEMPERATURE)</span>
                  <span className="text-red-800 font-extrabold">{brewTemp}°C</span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="100"
                  value={brewTemp}
                  onChange={(e) => {
                    setBrewTemp(parseInt(e.target.value));
                    playAncientChord([261.63 + (parseInt(e.target.value) * 1.5)]);
                  }}
                  className="w-full accent-amber-700 cursor-pointer h-1.5 bg-[#ebdcb9] rounded-lg"
                />
              </div>

              {/* simulated tea pot visualizer with vapor animations */}
              <div className="h-28 bg-[#18110b] border border-stone-800 rounded-xl relative flex items-center justify-center overflow-hidden">
                
                {/* Traditional floating hot cloud vapor effects */}
                <AnimatePresence>
                  {isBrewing && (
                    <div className="absolute inset-x-0 top-2 flex justify-center gap-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0, scale: 0.8 }}
                        animate={{ y: -30, opacity: [0, 0.7, 0], scale: 1.5 }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 0.1 }}
                        className="w-4 h-4 bg-orange-400/20 blur-md rounded-full"
                      />
                      <motion.div
                        initial={{ y: 20, opacity: 0, scale: 0.8 }}
                        animate={{ y: -35, opacity: [0, 0.8, 0], scale: 1.8 }}
                        transition={{ duration: 2.1, repeat: Infinity, delay: 0.4 }}
                        className="w-3 h-3 bg-red-400/10 blur-sm rounded-full"
                      />
                    </div>
                  )}
                </AnimatePresence>

                {/* Simulated tea-making center circle */}
                <div className="text-center space-y-1.5 z-10">
                  <div className={`w-12 h-12 rounded-full mx-auto border-2 border-dashed border-[#d4af37]/45 flex items-center justify-center text-amber-300 font-black text-sm md:text-xs ${isBrewing ? 'animate-spin-slow bg-red-950/40 text-rose-300' : ''}`}>
                    <Coffee className="w-5 h-5" />
                  </div>
                  
                  <span className="font-mono text-[11px] md:text-[9px] tracking-wider text-amber-100 uppercase block">{isBrewing ? 'CHẬN CHƯNG HOA LAN...' : 'LÒ CHỜ THẬT THỤ'}</span>
                </div>

              </div>

              {/* Status Message Text Box */}
              <p className="bg-[#f0e6cc] p-3 rounded-lg border border-[#a16207]/10 text-sm md:text-xs leading-relaxed font-serif text-stone-800 italic text-justify">
                <strong>TIÊN CHỈ PHƯƠNG KỂ:</strong> "{brewMessage}"
              </p>

              {/* Action Button trigger */}
              <button
                onClick={handleBrewTea}
                disabled={isBrewing}
                className="w-full py-2.5 bg-gradient-to-r from-amber-800 via-[#a16207] to-amber-800 hover:from-amber-700 hover:to-amber-700 disabled:from-stone-300 disabled:to-stone-400 border border-amber-950 text-white font-serif text-[13px] md:text-[11px] font-black uppercase tracking-widest rounded-xl shadow cursor-pointer transition-transform hover:scale-102 active:scale-98 flex items-center justify-center gap-1.5"
              >
                <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>{isBrewing ? 'ĐANG KỶ CHƯNG TRÀ LỘ...' : 'HỎA LÒ PHUN TRÀ ( BREW CEREMONY )'}</span>
              </button>

            </div>

          </div>

        </div>

        {/* Vintage Postcard Editorial Photo Grid */}
        <div className="pt-4 text-center max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-1">
            <span className="font-mono text-[10.5px] md:text-[8.5px] tracking-[0.25em] text-amber-800 uppercase font-black block">HISTORIC PHOTO REPLICAS</span>
            <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-red-950 tracking-widest">NĂM DỰ BÁT CHI SƠN PHÒNG</h3>
            <p className="text-sm md:text-xs text-[#a16207]/80 italic font-medium">Bản thêu gấm dệt tay được phục dựng bởi sứ thần thám hiểm từ các địa đồ tranh sớ.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Huangshan Pine */}
            <div className="bg-[#fcfaf2] border border-[#a16207]/30 p-4 rounded-xl shadow-md space-y-4 group">
              <div className="aspect-[4/3] bg-stone-900 rounded-lg overflow-hidden relative border border-[#a16207]/20">
                <img
                  src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png"
                  alt="Huangshan Mist"
                  className="w-full h-full object-cover filter sepia contrast-110 saturate-50 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-serif font-black text-sm md:text-xs uppercase tracking-widest">HOÀNG SƠN PHONG KIẾT</span>
              </div>
              <p className="text-[13px] md:text-[11px] text-stone-700 leading-relaxed font-serif italic text-justify">
                "Nơi những ngọn thông tuyết phong trần bám vào vách đá ngọc phiến dựng đứng, vẽ nên ranh giới mịt sương tuyệt diệu tách biệt thế phàm trần lữ nhân."
              </p>
            </div>

            {/* Card 2: Li River Bamboo */}
            <div className="bg-[#fcfaf2] border border-[#a16207]/30 p-4 rounded-xl shadow-md space-y-4 group">
              <div className="aspect-[4/3] bg-stone-900 rounded-lg overflow-hidden relative border border-[#a16207]/20">
                <img
                  src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png"
                  alt="Yangtze Gorges"
                  className="w-full h-full object-cover filter sepia contrast-115 saturate-50 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-serif font-black text-sm md:text-xs uppercase tracking-widest">LY GIANG BIẾC PHỔ NGẠN BẠN</span>
              </div>
              <p className="text-[13px] md:text-[11px] text-stone-700 leading-relaxed font-serif italic text-justify">
                "Khua mái dầm khói mọc sương mù, dọc dòng Ly Giang rạn rụa, thâu tháo nét ngâm xướng dã sử mộc mạc làm xoa dịu lòng du sĩ bước gót kiêu sa dặm dài."
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
