import { useState } from 'react';
import { Compass, Sparkles, Feather, ArrowDown, ArrowRight, Map, Heart, Star, Send } from 'lucide-react';
import HeroPoster from './components/HeroPoster';
import InteractiveMap from './components/InteractiveMap';
import LandscapeSection from './components/LandscapeSection';
import HeritageSection from './components/HeritageSection';
import NomadicSection from './components/NomadicSection';
import CuisineSection from './components/CuisineSection';
import EditorialSection from './components/EditorialSection';
import PlannerSection from './components/PlannerSection';

export default function App() {
  // Global passenger state synced dynamically across sections
  const [passengerName, setPassengerName] = useState('Quỳnh Anh Shyn');
  const [passengerPhoto, setPassengerPhoto] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState('almaty');
  const [travelStyle, setTravelStyle] = useState<'rugged' | 'balanced' | 'luxury'>('balanced');
  const [durationDays, setDurationDays] = useState<number>(10);

  // Smooth scroll handler targeting components
  const scrollToSection = (sectionId: string) => {
    let targetId = '';
    if (sectionId === 'landscapes') targetId = 'landscapes-section';
    else if (sectionId === 'heritage') targetId = 'heritage-section';
    else if (sectionId === 'nomads') targetId = 'nomads-section';
    else if (sectionId === 'cuisine') targetId = 'cuisine-section';
    else if (sectionId === 'editorials') targetId = 'editorials-section';
    else if (sectionId === 'planner') targetId = 'planner-section';

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen vintage-paper text-gold-900 selection:bg-gold-200 selection:text-gold-900 antialiased overflow-x-hidden">
      
      {/* Top Floating Sleek Navigation Bar */}
      <header className="sticky top-0 z-40 bg-gold-50/90 backdrop-blur-md border-b border-gold-250 py-3.5 px-4 md:px-8 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gold-900 flex items-center justify-center text-gold-50 shadow-md">
              <Compass className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <span className="font-serif font-extrabold text-sm tracking-widest text-gold-950 uppercase block">FIT TOUR</span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-gold-600 block">Central Asia</span>
            </div>
          </div>

          {/* Quick status bar flag */}
          <div className="hidden sm:flex items-center gap-2 py-1 px-3 bg-gold-100 border border-gold-200 rounded-full">
            <Feather className="w-3.5 h-3.5 text-gold-600" />
            <span className="font-display text-xxs font-bold text-gold-805 uppercase tracking-wider">
              CARAVAN PASSPORT: {passengerName || 'Explorer'}
            </span>
          </div>

          {/* Nav Items */}
          <nav className="flex items-center gap-3.5">
            <button
              onClick={() => scrollToSection('planner')}
              className="px-4.5 py-1.5 bg-gold-900 border border-gold-900 text-gold-50 font-display text-xxs font-bold uppercase tracking-widest rounded-lg shadow-md hover:bg-gold-800 transition-colors cursor-pointer"
            >
              Bespoke Planner
            </button>
          </nav>

        </div>
      </header>

      {/* Hero Poster Frame Section */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto text-center">
        
        {/* App Title & Introduction */}
        <div className="max-w-3xl mx-auto text-center mt-12 mb-16 relative z-10 px-4">
          <h2 className="font-display text-xs md:text-sm tracking-[0.3em] text-gold-600 font-bold uppercase mb-4">
            Tuyển Tập Tạp Chí Thám Hiểm v2026
          </h2>
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-gold-950 mb-6 leading-tight drop-shadow-sm">
            Du Lịch Kazakhstan & Kyrgyzstan <br/>
            Cùng Quỳnh Anh Shyn
          </h1>
          <p className="font-sans text-sm md:text-base text-gold-800 leading-relaxed font-light">
            Dấn bước vào chuyến du hành vượt thời gian dọc theo dải lụa huyền thoại của nhân loại. Khám phá những câu chuyện du mục bí ẩn, chiêm ngưỡng cảnh quan thiên nhiên hùng vĩ và chạm vào di sản kiến trúc nghìn năm qua góc nhìn độc bản của FIT Tour.
          </p>
          <div className="flex items-center justify-center pt-2">
            <button
              onClick={() => {
                const element = document.getElementById('hero-poster');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 font-display text-[10px] tracking-widest text-gold-100 bg-gold-900 hover:bg-gold-800 px-6 py-3 border-2 border-gold-400 rounded transition-all flex items-center gap-2 cursor-pointer uppercase shadow-lg shadow-gold-900/20"
            >
              Thiết kế Hành Trình <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Central Masterpiece Interactive Poster Component */}
        <div className="mb-20 px-2 md:px-0 relative z-20">
          <HeroPoster 
            passengerName={passengerName}
            setPassengerName={setPassengerName}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            onExploreSection={scrollToSection}
            passengerPhoto={passengerPhoto}
            setPassengerPhoto={setPassengerPhoto}
          />
        </div>

        {/* Dynamic Spheres: Main Content Sections */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-24 pb-24 relative z-10">
          <div className="flex items-center justify-center mb-16 opacity-50">
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <span className="mx-4 font-display text-[9px] tracking-widest text-gold-600 uppercase whitespace-nowrap">
              Danh mục Phân cảnh
            </span>
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

      </section>

      {/* Sphere Sections */}
      <InteractiveMap 
        selectedId={selectedLocation} 
        setSelectedId={setSelectedLocation} 
        passengerName={passengerName}
      />
      
      <LandscapeSection />
      
      <HeritageSection />
      
      <NomadicSection />
      
      <CuisineSection />
      
      <EditorialSection />
      
      <PlannerSection 
        passengerName={passengerName}
        travelStyle={travelStyle}
        setTravelStyle={setTravelStyle}
        durationDays={durationDays}
        setDurationDays={setDurationDays}
      />

      {/* Immersive Editorial Footer */}
      <footer className="bg-stone-950 vintage-paper-dark border-t-4 border-gold-400 py-16 px-4 md:px-8 text-gold-200">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12 items-start">
            
            {/* Column 1 - Brand (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center text-stone-950 font-bold shadow">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-black tracking-widest text-lg text-gold-100 block">FIT TOUR PRESENTS</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gold-400 block">© 2026 CENTRAL ASIA</span>
                </div>
              </div>
              <p className="text-xs text-gold-300 leading-relaxed font-light">
                Đại sứ thám hiểm Con Đường Tơ Lụa kết hợp những giá trị di sản cổ điển cùng công nghệ tương tác sang trọng định hình trải nghiệm du lịch thời thượng.
              </p>
            </div>

            {/* Column 2 - Links (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <span className="font-display font-bold text-xxs tracking-widest text-gold-400 block uppercase">
                Danh mục Phân cảnh
              </span>
              <ul className="grid grid-cols-2 gap-2 text-xs text-gold-300/80 font-mono font-light">
                <li><button onClick={() => scrollToSection('landscapes')} className="hover:text-gold-200 cursor-pointer block text-left">1. Cảnh Quan</button></li>
                <li><button onClick={() => scrollToSection('heritage')} className="hover:text-gold-200 cursor-pointer block text-left">2. Di Sản</button></li>
                <li><button onClick={() => scrollToSection('nomads')} className="hover:text-gold-200 cursor-pointer block text-left">3. Du Mục</button></li>
                <li><button onClick={() => scrollToSection('cuisine')} className="hover:text-gold-200 cursor-pointer block text-left">4. Ẩm Thực</button></li>
                <li><button onClick={() => scrollToSection('editorials')} className="hover:text-gold-200 cursor-pointer block text-left">5. Tạp Chí</button></li>
                <li><button onClick={() => scrollToSection('planner')} className="hover:text-gold-200 cursor-pointer block text-left">6. Lên Lịch Trình</button></li>
              </ul>
            </div>

            {/* Column 3 - Newsletter (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <span className="font-display font-bold text-xxs tracking-widest text-gold-400 block uppercase">
                Bản tin Caravan
              </span>
              <p className="text-xs text-gold-300/90 leading-relaxed font-light">
                Đăng ký nhận tạp chí thời trang thám hiểm du mục hàng tháng gửi từ Almaty & Bishkek.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your.email@gmail.com"
                  className="bg-white/5 border border-white/10 rounded-lg p-2 text-xs w-full focus:outline-none text-gold-100 placeholder:text-gold-500"
                />
                <button
                  onClick={() => alert('Cảm ơn bạn đã đăng ký tờ san Thảo Nguyên!')}
                  className="bg-gold-500 hover:bg-gold-605 text-stone-950 font-display text-[9px] font-bold tracking-widest uppercase px-3 rounded-lg flex items-center justify-center cursor-pointer shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] font-mono text-gold-500 gap-4">
            <span>FIT TOUR EXPEDITION PORTAL © EST. 2026. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-1 text-gold-450">
              <span>Crafted with</span> <Heart className="w-3.5 h-3.5 fill-gold-500 text-gold-500" /> <span>in Almaty, Bishkek & Hanoi</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
