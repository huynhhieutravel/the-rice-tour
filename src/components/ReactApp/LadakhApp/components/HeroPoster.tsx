import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mountain, Compass, Tent, Soup, Camera, Eye, MapPin, Feather, Upload, Trash2, RefreshCw, Image as ImageIcon } from 'lucide-react';

interface HeroPosterProps {
  passengerName: string;
  setPassengerName: (name: string) => void;
  selectedLocation: string;
  setSelectedLocation: (id: string) => void;
  onExploreSection: (sectionId: string) => void;
  passengerPhoto: string | null;
  setPassengerPhoto: (photo: string | null) => void;
}

export default function HeroPoster({
  passengerName,
  setPassengerName,
  selectedLocation,
  setSelectedLocation,
  onExploreSection,
  passengerPhoto,
  setPassengerPhoto
}: HeroPosterProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [displayMode, setDisplayMode] = useState<'collage-cutout' | 'full-frame'>('collage-cutout');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setPassengerPhoto(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setPassengerPhoto(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Quick map points matching the poster overlay
  const routePoints = [
    { id: 'almaty', label: 'ALMATY' },
    { id: 'issyk-kul', label: 'ISSYK-KUL' },
    { id: 'son-kul', label: 'SON-KUL' },
    { id: 'naryn', label: 'NARYN' }
  ];

  const handlePointClick = (id: string) => {
    setSelectedLocation(id);
    const element = document.getElementById(`location-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div id="hero-poster" className="relative max-w-4xl mx-auto vintage-paper border-8 border-gold-400 p-4 md:p-8 rounded-xl shadow-2xl overflow-hidden gold-border-glow">
      {/* Decorative Corner Filigrees */}
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold-600 pointer-events-none" />
      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold-600 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold-600 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold-600 pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="text-center mb-2 md:mb-4">
        <span className="font-display text-[11px] md:text-[9px] md:text-xs tracking-[0.3em] text-gold-700 font-semibold block uppercase">
          Fit Tour Presents
        </span>
      </div>

      {/* Main Poster Typography */}
      <div className="text-center mb-3">
        <h1 className="font-serif text-5xl md:text-8xl tracking-[0.1em] text-gold-900 font-extrabold select-none leading-none drop-shadow-sm">
          SILKROAD
        </h1>
        <div className="flex items-center justify-center gap-3 my-1">
          <span className="text-gold-600 text-sm md:text-xs md:text-sm">♦</span>
          <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-semibold text-gold-800">
            2026
          </span>
          <span className="text-gold-600 text-sm md:text-xs md:text-sm">♦</span>
        </div>
        <h2 className="font-display text-sm md:text-lg tracking-[0.25em] text-gold-900 font-bold uppercase mt-1">
          KAZAKHSTAN & KYRGYZSTAN
        </h2>
        <p className="font-serif italic text-sm md:text-lg text-gold-700 mt-1 font-medium">
          A Bespoke Journey Through Central Asia
        </p>
      </div>

      {/* Curated Passenger Customization Section */}
      <div className="text-center my-4 relative z-20 bg-gold-100/60 backdrop-blur-sm py-1.5 px-3 rounded-lg max-w-md mx-auto border border-gold-200 shadow-sm">
        <span className="font-display text-[11px] md:text-[9px] md:text-xxs tracking-[0.2em] text-gold-600 uppercase block mb-1">
          Curated by Fit Tour For
        </span>
        
        {isEditing ? (
          <div className="flex items-center justify-center gap-2">
            <input
              id="passenger-name-input"
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              className="px-3 py-1 bg-white text-gold-900 font-serif text-lg md:text-xl font-bold border-b border-gold-500 focus:outline-none rounded text-center w-full max-w-xs"
              autoFocus
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
            />
            <button
              id="save-passenger-name"
              onClick={() => setIsEditing(false)}
              className="text-gold-700 text-sm md:text-xs hover:text-gold-900 font-semibold px-2 py-1 bg-gold-200 rounded"
            >
              Lưu
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 group">
            <span
              id="passenger-name-display"
              onClick={() => setIsEditing(true)}
              className="font-serif text-xl md:text-2xl font-bold italic text-gold-800 underline decoration-dashed decoration-gold-400 underline-offset-4 cursor-pointer hover:text-gold-600 transition-colors py-0.5"
            >
              {passengerName || 'Nhập tên của bạn'}
            </span>
            <button
              id="edit-passenger-name"
              onClick={() => setIsEditing(true)}
              className="p-1 opacity-60 hover:opacity-100 transition-opacity text-gold-700 cursor-pointer"
              title="Chỉnh sửa tên hành trình"
            >
              <Feather className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Main Structural Grid with Map Paths, Model Visual & Slogans */}
      <div className="grid grid-cols-12 gap-4 my-4 items-stretch relative">
        
        {/* Left Side Labels (Borders of Poster) */}
        <div className="hidden md:flex col-span-2 flex-col justify-between py-6 pr-2 border-r border-gold-200 text-right select-none">
          <div className="space-y-1">
            <span className="text-gold-800 font-bold block text-[12px] md:text-[10px] tracking-wider uppercase font-display">Where</span>
            <span className="text-gold-700 block text-[11px] md:text-[9px] tracking-normal uppercase">Ancient Roads</span>
            <span className="text-gold-700 block text-[11px] md:text-[9px] tracking-normal uppercase">Tell</span>
            <span className="text-gold-700 block text-[11px] md:text-[9px] tracking-normal uppercase">Timeless</span>
            <span className="text-gold-800 font-semibold block text-[12px] md:text-[10px] tracking-wider uppercase font-display">Stories</span>
          </div>
          <div className="my-4 border-t border-b border-gold-300 py-4 flex flex-col items-end gap-1.5 text-right">
            <span className="text-gold-600 block text-[10px] md:text-[8px] tracking-wider font-semibold uppercase">Silk Road Heritage</span>
            <span className="text-gold-600 block text-[10px] md:text-[8px] tracking-wider font-semibold uppercase">Nomadic Culture</span>
            <span className="text-gold-600 block text-[10px] md:text-[8px] tracking-wider font-semibold uppercase">Breathtaking Landscapes</span>
          </div>
          <div className="flex justify-end/center text-gold-700 hover:text-gold-900 cursor-pointer">
            <div className="flex items-center gap-1">
              <span className="text-[11px] md:text-[9px] tracking-widest font-serif block rotate-270 whitespace-nowrap">EST. 2026</span>
            </div>
          </div>
        </div>

        {/* Central Collage Image Visual Area */}
        <div 
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          className={`col-span-12 md:col-span-8 relative aspect-3/4 md:aspect-[4/5] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
            dragActive ? 'border-dashed border-gold-500 bg-gold-900/10' : 'border-gold-300 bg-gold-200'
          } flex flex-col justify-end shadow-inner group`}
        >
          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
          />

          {/* Drag & Drop Visual Overlay */}
          {dragActive && (
            <div className="absolute inset-0 z-30 bg-gold-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-gold-100 gap-2 border-4 border-dashed border-gold-450 m-1 rounded-md">
              <Upload className="w-10 h-10 text-gold-400 animate-bounce" />
              <p className="font-serif italic text-base">Thả ảnh Quỳnh Anh Shyn của bạn vào đây...</p>
              <p className="font-mono text-sm md:text-xs md:text-xxs tracking-wider text-gold-350 uppercase">Định dạng hỗ trợ: JPG, PNG, WEBP</p>
            </div>
          )}

          {/* Top-Right Interactive Control Panel */}
          <div className="absolute top-4 right-4 z-25 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            {passengerPhoto && (
              <button
                onClick={() => setDisplayMode(displayMode === 'collage-cutout' ? 'full-frame' : 'collage-cutout')}
                className="bg-gold-950/90 hover:bg-gold-900 text-gold-100 border border-gold-500/40 px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 cursor-pointer text-sm md:text-xs md:text-xxs uppercase font-mono tracking-wider transition-all"
                title="Đổi kiểu trang trí"
              >
                <ImageIcon className="w-3 h-3 text-gold-400" />
                <span>{displayMode === 'collage-cutout' ? 'Khung Đầy' : 'Cắt Người'}</span>
              </button>
            )}
            <button
              onClick={triggerFileInput}
              className="bg-gold-950/90 hover:bg-gold-900 text-gold-200 border border-gold-500/40 p-1.5 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all"
              title="Tải ảnh Ambassador mới"
            >
              <Upload className="w-3.5 h-3.5 text-gold-400" />
            </button>
            {passengerPhoto && (
              <button
                onClick={() => {
                  setPassengerPhoto(null);
                  setDisplayMode('collage-cutout');
                }}
                className="bg-red-950/95 hover:bg-red-900 text-red-200 border border-red-500/35 p-1.5 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all"
                title="Đặt lại ảnh gốc"
              >
                <Trash2 className="w-3.5 h-3.5 text-red-400" />
              </button>
            )}
          </div>

          {/* Upload Initial Floating Trigger (appears if no image has been uploaded) */}
          {!passengerPhoto && (
            <button
              onClick={triggerFileInput}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-gold-900/90 hover:bg-gold-950 text-gold-100 border border-gold-400/40 py-2.5 px-4.5 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer text-sm md:text-xs md:text-xxs uppercase font-mono tracking-widest font-bold whitespace-nowrap backdrop-blur-sm hover:scale-105 active:scale-95 transition-all shadow-gold-900/20"
            >
              <Upload className="w-4 h-4 animate-pulse text-gold-300" />
              <span>Tải ảnh Đại Sứ Shyn lên</span>
            </button>
          )}

          {/* Central Rendering Layer: Choice of Display Mode */}
          {displayMode === 'full-frame' && passengerPhoto ? (
            /* FULL FRAME MODE: The uploaded photo is rendered as the complete background */
            <div className="absolute inset-0 z-0">
              <img 
                src={passengerPhoto} 
                alt="Uploaded Full Frame Ambassador" 
                className="absolute inset-0 w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-950/90 via-transparent to-gold-950/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-950/20 via-transparent to-gold-950/10" />
            </div>
          ) : (
            /* COLLAGE CUTOUT MODE: Background elements stay, but cutout is customizable */
            <>
              {/* Layered Composite Background representing Central Asia */}
              <div className="absolute inset-0 z-0">
                {/* Mountain range background */}
                <img 
                  src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png" 
                  alt="Central Asia Mountain Range" 
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                {/* Soft gold/amber sunset radial gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold-900/90 via-gold-700/40 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold-800/20 via-transparent to-gold-800/10" />

                {/* Dome Mosque Mosque overlay inside (bottom right) */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-75 pointer-events-none mix-blend-screen transition-all group-hover:scale-105 duration-700">
                  <img 
                    src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png" 
                    alt="Samarkand style turquoise tile dome" 
                    className="w-full h-full object-cover object-left-bottom"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Camels Caravan standing (bottom left) */}
                <div className="absolute bottom-4 left-4 w-5/12 h-1/3 opacity-80 pointer-events-none transition-transform group-hover:-translate-x-1 duration-700">
                  <img 
                    src="/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png" 
                    alt="Camel caravan silhouette" 
                    className="w-full h-full object-contain object-left-bottom"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Model cutout: Default or Custom Portrait */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-5/6 z-10 pointer-events-none flex items-end justify-center">
                <img 
                  src={passengerPhoto || "/assets/tour-mong-co-tuan-loc/4.%20MONGOLIA.png"} 
                  alt="Ambassador central portrait travel pose"
                  className="w-full h-full object-cover object-top mix-blend-luminosity brightness-110 saturate-120 drop-shadow-2xl rounded-t-full border-t-4 border-l-2 border-r-2 border-gold-300 mask-gradient"
                  style={{
                    maskImage: 'linear-gradient(to top, transparent 5%, white 40%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 5%, white 40%)'
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </>
          )}

          {/* Map Overlay Representation (Top Left) */}
          <div className="absolute top-4 left-4 z-20 bg-gold-50/90 border border-gold-300 p-2.5 rounded-lg shadow-lg max-w-[200px] hover:bg-gold-50 transition-colors">
            <span className="font-display text-[11px] md:text-[9px] tracking-wider text-gold-800 font-bold block mb-1.5 flex items-center gap-1 border-b border-gold-200 pb-1">
              <Compass className="w-3 h-3 text-gold-600 animate-spin-slow" /> EXPEDITION PATH
            </span>
            <div className="space-y-1 relative pl-2">
              <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-dashed border-l border-gold-400" />
              {routePoints.map((point, index) => {
                const isActive = selectedLocation === point.id;
                return (
                  <button
                    key={point.id}
                    onClick={() => handlePointClick(point.id)}
                    className={`flex items-center gap-2 w-full text-left font-display text-[12px] md:text-[10px] py-0.5 cursor-pointer relative transition-all ${
                      isActive 
                        ? 'text-gold-700 font-extrabold scale-103' 
                        : 'text-gold-600 hover:text-gold-800 hover:translate-x-0.5'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full z-10 -ml-1.5 border border-gold-400 ${
                      isActive ? 'bg-gold-600 scale-125' : 'bg-gold-50'
                    }`} />
                    <span>{point.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Banner inside Poster collage */}
          <div className="relative z-20 p-4 md:p-6 text-center text-white bg-gradient-to-t from-black/90 to-transparent">
            <p className="font-serif italic text-sm md:text-xs md:text-sm text-gold-100 mb-0.5 tracking-wider">
              "Beyond the destination, beyond the ordinary."
            </p>
            <p className="font-display text-[10px] md:text-[8px] md:text-[9px] tracking-[0.25em] text-gold-300 uppercase">
              Curated Itinerary for the Adventurous Mind
            </p>
          </div>
        </div>

        {/* Right Side Labels (Borders of Poster) */}
        <div className="hidden md:flex col-span-2 flex-col justify-between py-6 pl-2 border-l border-gold-200 text-left select-none">
          <div className="space-y-2 flex flex-col">
            <span className="text-gold-600 text-[12px] md:text-[10px] tracking-widest font-bold uppercase font-display">Beyond</span>
            <span className="text-gold-700 text-[11px] md:text-[9px] uppercase">The Destination,</span>
            <span className="text-gold-600 text-[12px] md:text-[10px] tracking-widest font-bold uppercase font-display">Beyond</span>
            <span className="text-gold-700 text-[11px] md:text-[9px] uppercase">The Ordinary.</span>
          </div>
          <div className="flex flex-col gap-2 items-start py-4">
            <div className="w-10 h-0.5 bg-gold-400" />
            <span className="text-gold-700 block text-[11px] md:text-[9px] leading-relaxed">
              Kazakh & Kyrgyz pastures meet historical silk arches and pristine glacier mirrors.
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-gold-700 block text-[10px] md:text-[8px] uppercase">Explore Below</span>
            <span className="text-gold-700 block text-[10px] md:text-[8px] uppercase">Or Customize Itinerary</span>
          </div>
        </div>
      </div>

      {/* Iconic Bottom Navigation Bar representing the 5 Features */}
      <div className="border-t-2 border-gold-300 mt-4 pt-4">
        <p className="text-center font-display text-[11px] md:text-[9px] md:text-xxs tracking-[0.4em] text-gold-800 uppercase mb-3 font-semibold">
          Interactive Journey Spheres
        </p>
        <div className="grid grid-cols-5 gap-1.5 md:gap-3 text-center">
          
          <button
            id="nav-landscapes"
            onClick={() => onExploreSection('landscapes')}
            className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gold-400 flex items-center justify-center bg-gold-100 hover:bg-gold-200 group-hover:scale-110 group-hover:border-gold-600 transition-all shadow-sm">
              <Mountain className="w-4 h-4 md:w-5 md:h-5 text-gold-700 group-hover:text-gold-900" />
            </div>
            <span className="font-display text-[10px] md:text-[8px] md:text-[10px] font-bold text-gold-800 tracking-wider h-5 flex items-center uppercase select-none">
              Landscapes
            </span>
          </button>

          <button
            id="nav-heritage"
            onClick={() => onExploreSection('heritage')}
            className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gold-400 flex items-center justify-center bg-gold-100 hover:bg-gold-200 group-hover:scale-110 group-hover:border-gold-600 transition-all shadow-sm">
              <Compass className="w-4 h-4 md:w-5 md:h-5 text-gold-700 group-hover:text-gold-900" />
            </div>
            <span className="font-display text-[10px] md:text-[8px] md:text-[10px] font-bold text-gold-800 tracking-wider h-5 flex items-center uppercase select-none">
              Heritage
            </span>
          </button>

          <button
            id="nav-nomads"
            onClick={() => onExploreSection('nomads')}
            className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gold-400 flex items-center justify-center bg-gold-100 hover:bg-gold-200 group-hover:scale-110 group-hover:border-gold-600 transition-all shadow-sm">
              <Tent className="w-4 h-4 md:w-5 md:h-5 text-gold-700 group-hover:text-gold-900" />
            </div>
            <span className="font-display text-[10px] md:text-[8px] md:text-[10px] font-bold text-gold-800 tracking-wider h-5 flex items-center uppercase select-none">
              Nomadic
            </span>
          </button>

          <button
            id="nav-cuisine"
            onClick={() => onExploreSection('cuisine')}
            className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gold-400 flex items-center justify-center bg-gold-100 hover:bg-gold-200 group-hover:scale-110 group-hover:border-gold-600 transition-all shadow-sm">
              <Soup className="w-4 h-4 md:w-5 md:h-5 text-gold-700 group-hover:text-gold-900" />
            </div>
            <span className="font-display text-[10px] md:text-[8px] md:text-[10px] font-bold text-gold-800 tracking-wider h-5 flex items-center uppercase select-none">
              Cuisine
            </span>
          </button>

          <button
            id="nav-editorials"
            onClick={() => onExploreSection('editorials')}
            className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gold-400 flex items-center justify-center bg-gold-100 hover:bg-gold-200 group-hover:scale-110 group-hover:border-gold-600 transition-all shadow-sm">
              <Camera className="w-4 h-4 md:w-5 md:h-5 text-gold-700 group-hover:text-gold-900" />
            </div>
            <span className="font-display text-[10px] md:text-[8px] md:text-[10px] font-bold text-gold-800 tracking-wider h-5 flex items-center uppercase select-none">
              Editorial
            </span>
          </button>

        </div>
      </div>

      {/* Poster Footer Margin */}
      <div className="text-center mt-5 pt-2 border-t border-gold-250 select-none">
        <p className="font-serif italic text-sm md:text-xs md:text-sm text-gold-800">
          Follow the ancient path. Create your own story.
        </p>
      </div>

    </div>
  );
}
