import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, ShieldCheck, Heart, Share2, Eye, Award, Bookmark, 
  MapPin, Coffee, Volume2, CloudSnow, Sparkles, BookOpen, Clock, 
  UserCheck, ChevronRight, CornerDownRight, Edit3, MessageSquare,
  Thermometer, Wind, FileText, Footprints
} from 'lucide-react';
import { LADAKH_DAY1_CONFIG, LADAKH_HIGHLIGHTS, LADAKH_TIMELINE, LADAKH_GEAR } from './data/ladakhData';
import type { ArticleConfig } from './types';
import type { ReadingTheme, AlaskaArticleSection, GeographicHighlight } from './types';

import { lazy, Suspense } from 'react';
const InteractiveMap = lazy(() => import('./components/InteractiveMap'));
const PhotoGallery = lazy(() => import('./components/PhotoGallery'));
const AuroraControl = lazy(() => import('./components/AuroraControl'));
const SurvivalChecklist = lazy(() => import('./components/SurvivalChecklist'));
const HistoricalTimeline = lazy(() => import('./components/HistoricalTimeline'));
import SeriesNavigation from './components/SeriesNavigation';
import AuthorCard from './components/AuthorCard';

const JOURNAL_METADATA: Record<string, {
  coords: string;
  elev: string;
  temp: string;
  wind: string;
  weather: string;
  warning: string;
}> = {
  'intro': {
    coords: '61.2181° N, 149.9003° W',
    elev: '31m (Thung lũng Anchorage)',
    temp: '-12°C',
    wind: '18 km/h NNW (Cực Bắc)',
    weather: '❄️ Bão tuyết mây dày',
    warning: 'Trang bị Áo Khoác Nam Cực Chống Bão Cát Tuyết (Parka) là bắt buộc tối thượng để phòng tử lạnh dưới -10°C.'
  },
  'nature': {
    coords: '60.1042° N, 149.4422° W',
    elev: '0m (Vịnh Triều Kenai Fjords)',
    temp: '-4°C',
    wind: '32 km/h SSE (Gió lùa vịnh)',
    weather: '🌊 Sương giá ngưng tụ khói băng',
    warning: 'Sử dụng Giày Đinh Leo Băng Chuyên Dụng (Crampons) để thám sát an oản vách núi băng xanh cổ đại Kenai.'
  },
  'giants': {
    coords: '63.0692° N, 151.0063° W',
    elev: '2.031m (Đỉnh Sương Khói Denali)',
    temp: '-28°C',
    wind: '45 km/h NNE (Gió rít sườn)',
    weather: '🏔️ Tuyết sạt và sương giá mờ',
    warning: 'Đề phòng cực cao: Luôn sẵn sàng Bình Xịt Đuổi Gấu Nâu Hoang Dã (Bear Spray) trong tầm tay dọc thung lũng Denali!'
  },
  'frontier': {
    coords: '59.4538° N, 135.3139° W',
    elev: '879m (Mỏ vàng đèo White Pass)',
    temp: '-15°C',
    wind: '12 km/h W (Gió thung lũng)',
    weather: '🌲 Sương muối đẫm thông tuyết',
    warning: 'Kích hoạt Định Vị Vệ Tinh Khẩn Cấp (GPS Beacon) để lưu hành thông tin phòng khi mất tín hiệu vô tuyến hoàn toàn.'
  }
};

interface AppProps {
  featuredImage?: string;
  config?: ArticleConfig;
}

export default function App({ featuredImage, config = LADAKH_DAY1_CONFIG }: AppProps) {
  // Reading mode settings state
  const [theme, setTheme] = useState<ReadingTheme>('cabin-glow');
  
  // Blog presentation view style: 'magazine' vs 'journal' (Alaska authentic)
  const [viewStyle, setViewStyle] = useState<'magazine' | 'journal'>('journal');
  
  // Custom interactive traveler reader details
  const [readerName, setReaderName] = useState<string>('Lữ Khách Cực Bắc');
  const [isNominalRegistered, setIsNominalRegistered] = useState<boolean>(false);
  const [explorerPoints, setExplorerPoints] = useState<number>(0);
  
  // Highlighting/Bookmarking states
  const [bookmarkedSections, setBookmarkedSections] = useState<string[]>([]);
  const [readingNotes, setReadingNotes] = useState<Record<string, string>>({});
  const [activeNoteSection, setActiveNoteSection] = useState<string | null>(null);
  const [currentNoteText, setCurrentNoteText] = useState<string>('');
  
  // Shared interactive score for active map point shown in main body
  const [selectedHighlight, setSelectedHighlight] = useState<GeographicHighlight>(LADAKH_HIGHLIGHTS[0]);

  // Handle updates from maps directly to trigger aesthetic ripples
  const handleMapHighlightUpdate = (pt: GeographicHighlight) => {
    setSelectedHighlight(pt);
    setExplorerPoints(prev => prev + 5);
  };

  const toggleBookmark = (id: string) => {
    if (bookmarkedSections.includes(id)) {
      setBookmarkedSections(bookmarkedSections.filter(sid => sid !== id));
    } else {
      setBookmarkedSections([...bookmarkedSections, id]);
      setExplorerPoints(prev => prev + 10);
    }
  };

  const saveSectionNote = (sectionId: string) => {
    setReadingNotes(prev => ({
      ...prev,
      [sectionId]: currentNoteText
    }));
    setActiveNoteSection(null);
    setCurrentNoteText('');
    setExplorerPoints(prev => prev + 15);
  };

  // Aesthetic mapping for active Reading Theme classes
  const getThemeClasses = () => {
    switch (theme) {
      case 'glacial-ice':
        return {
          wrapper: 'bg-[#0E1517] text-[#E0ECEF] selection:bg-cyan-500 selection:text-slate-900',
          paper: 'bg-[#121B1D]/90 border border-cyan-500/10 shadow-glacier text-[#E2ECEF]',
          title: 'text-cyan-200',
          paragraph: 'text-slate-205 md:text-[16px] leading-[1.8] font-serif',
          accentBorder: 'border-cyan-500/30',
          sidebarBadge: 'bg-cyan-950 text-cyan-300 border-cyan-500/25',
          bodyBg: 'radial-gradient(circle at 10% 20%, rgba(14,21,23,1) 0%, rgba(6,10,12,1) 100%)'
        };
      case 'cabin-glow':
        return {
          wrapper: 'bg-[#FAF6EE] text-[#1F1916] selection:bg-[#B05D2D] selection:text-white',
          paper: 'bg-white rounded-3xl border border-amber-900/10 shadow-sm text-stone-800',
          title: 'text-amber-950 font-prata',
          paragraph: 'text-stone-701 md:text-[16.5px] leading-[1.85] font-serif',
          accentBorder: 'border-amber-900/20',
          sidebarBadge: 'bg-amber-100 text-amber-900 border-amber-900/10',
          bodyBg: 'linear-gradient(to bottom, #FAF6EE, #F4EFE6)'
        };
      case 'midnight-spruce':
      default:
        return {
          wrapper: 'bg-[#060B0A] text-[#E5ECE9] selection:bg-emerald-500 selection:text-[#060B0A]',
          paper: 'bg-[#0A1110]/95 border border-emerald-500/10 shadow-lg text-[#E6EEEC]',
          title: 'text-emerald-300',
          paragraph: 'text-stone-300 text-[18px] md:text-[20px] leading-[1.85] font-serif',
          accentBorder: 'border-emerald-500/20',
          sidebarBadge: 'bg-emerald-950 text-emerald-300 border-emerald-500/20',
          bodyBg: 'radial-gradient(circle at 50% 50%, #060B0A 0%, #030505 100%)'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`min-h-screen ${themeClasses.wrapper} transition-all duration-300 antialiased overflow-x-hidden relative font-sans`} style={{ backgroundImage: theme === 'cabin-glow' ? themeClasses.bodyBg : 'none' }}>
      
      {/* Decorative Star/Boreal background particles */}
      {theme !== 'cabin-glow' && (
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.015\"/%3E%3C/svg%3E')" }}
        />
      )}



      {/* MAGNIFICENT COVER POSTER STYLE HERO SECTION */}
      <section className="relative w-full h-[620px] md:h-[750px] overflow-hidden flex items-center justify-center border-b border-white/5 bg-slate-950">
        
        {/* Extreme cinematic high quality backdrop photo */}
        <div className="absolute inset-0 bg-[#09151A]">
          <img
            src={featuredImage || "https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp"}
            alt="Alaska Chugach Glacier Mountain Range Backdrop cinematic"
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter contrast-[1.05] saturate-[0.8] brightness-[0.45]"
            referrerPolicy="no-referrer"
          />

          {/* Color overlays depending on requested reading theme */}
          {theme === 'glacial-ice' && (
            <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
          )}
          {theme === 'cabin-glow' && (
            <div className="absolute inset-0 bg-amber-900/15 mix-blend-soft-light" />
          )}
          {theme === 'midnight-spruce' && (
            <div className="absolute inset-0 bg-emerald-950/15 mix-blend-multiply" />
          )}

          {/* Editorial vignette gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B0A] via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Floating Custom Aurora Light Show in cover representation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
          <div className="absolute w-[800px] h-[350px] bg-emerald-400/10 rounded-full blur-[120px] -rotate-12 transform -translate-y-24 translate-x-12 animate-pulse" />
          <div className="absolute w-[600px] h-[250px] bg-sky-400/10 rounded-full blur-[100px] rotate-12 transform translate-y-24 -translate-x-12" />
        </div>

        {/* Main interactive poster contents */}
        <div className="max-w-4xl mx-auto px-6 z-20 text-center space-y-8">
          <div className="space-y-3.5">
            <span className="font-mono text-[#A8D1DB] text-[12px] md:text-[10px] md:text-[11px] tracking-[0.55em] uppercase font-black block animate-pulse">
              ★ SERIES BLOG TRUYỀN KÝ DÃ NGOẠI ★
            </span>
            <div className="w-14 h-[1.5px] bg-[#A8D1DB]/50 mx-auto" />
          </div>

          <div className="space-y-4">
            <h1 className="font-prata text-5xl md:text-7xl lg:text-8xl text-white font-normal leading-[0.95] uppercase tracking-tighter drop-shadow-xl select-all">
              {config.seriesTitle}
            </h1>
            <span className="font-serif italic text-2xl md:text-3xl text-amber-300 block font-light tracking-wide">
              {config.heroSubtitle}
            </span>
            
            <p className="font-sans text-[13px] md:text-[11px] md:text-[12px] tracking-[0.35em] text-cyan-200 uppercase block font-black border-y border-white/5 py-2.5 max-w-lg mx-auto mt-4">
              {config.heroChapter}
            </p>
          </div>

          <p className="font-serif text-[15px] md:text-[18px] text-stone-200 font-light leading-relaxed max-w-2xl mx-auto italic select-all mt-8 mb-4">
            {config.heroQuote}
          </p>

          {/* Micro down scroll tip */}
          <div className="pt-8 text-stone-400 space-y-1 select-none animate-bounce">
            <span className="font-mono text-[10px] md:text-[8px] uppercase tracking-widest block">Kéo xuống để bắt đầu đọc sách</span>
            <CornerDownRight className="w-4 h-4 mx-auto text-amber-305 rotate-90" />
          </div>

        </div>

      </section>

      {/* DUAL VIEW BLOG LAYOUT SELECTOR */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-6 flex flex-col items-center justify-center space-y-4">
        <span className="font-mono text-[#A8D1DB] text-[12px] md:text-[10px] tracking-[0.45em] uppercase font-black block">
          ★ THỂ HIỆN BÀI VIẾT (PRESENTATION LAYER) ★
        </span>
        
        <div className="flex bg-slate-950/90 border border-white/10 p-1 rounded-2xl w-full max-w-md shadow-2xl relative z-40">
          <button
            onClick={() => setViewStyle('magazine')}
            className={`flex-1 py-2.5 px-3 rounded-xl font-sans text-sm md:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              viewStyle === 'magazine'
                ? 'bg-gradient-to-r from-emerald-900 to-emerald-950 text-emerald-300 shadow-md border border-emerald-500/25'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tạp Chí Địa Lý</span>
          </button>
          
          <button
            onClick={() => setViewStyle('journal')}
            className={`flex-1 py-2.5 px-3 rounded-xl font-sans text-sm md:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              viewStyle === 'journal'
                ? 'bg-[#915422] text-amber-100 shadow-md border border-amber-400/20'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Sổ Tay Viễn Chinh</span>
          </button>
        </div>
        
        <p className="font-serif italic text-sm md:text-xs text-stone-400 text-center max-w-lg leading-relaxed">
          {viewStyle === 'magazine'
            ? 'Cân bằng, tinh tế theo phong cách báo chí khảo cổ học với cột phân bổ dữ kiện địa chất.'
            : 'Đậm đặc phong vị Ladakh: Trang sách gáy xoắn mộc bọc sương đọng, tọa độ thời tiết thực địa & sớ triện đỏ dán tên lữ hành.'}
        </p>
      </section>

      {/* AUTHOR INTRO */}
      <AuthorCard />

      {/* CORE EDITORIAL BLOG COLUMNS & ARTICLES GRID */}
      <section className="max-w-4xl mx-auto px-6 py-8 space-y-16 relative">
        {config.sections.map((sec) => {
          const isNoteOpen = activeNoteSection === sec.id;
          const hasSavedNote = !!readingNotes[sec.id];
          const hasBookmarked = bookmarkedSections.includes(sec.id);

          return (
            <AnimatePresence mode="wait" key={sec.id}>
              {viewStyle === 'magazine' ? (
                // VIEW 1: TRADITIONAL HIGH-END TRAVEL MAGAZINE
                <motion.article 
                  id={sec.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 md:p-10 ${themeClasses.paper} rounded-3xl transition-all duration-300 text-left relative overflow-hidden`}
                >
                  
                  {/* Dynamic corner backdrop label representing the section progress order */}
                  <div className="absolute -top-3 -right-3 font-mono text-[80px] font-black text-white/5 pointer-events-none select-none">
                    0{sec.order}
                  </div>

                  {/* Header metadata segment */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                    <div>
                      <span className="font-mono text-[11px] md:text-[9px] text-[#A8D1DB]/80 tracking-widest block uppercase font-bold">
                        CHAP. 0{sec.order} — {sec.subtitle || 'FRONTIER INSIGHTS'}
                      </span>
                      
                      <h2 className={`font-prata text-2xl md:text-3xl ${themeClasses.title} font-normal uppercase mt-0.5`}>
                        {sec.title}
                      </h2>
                    </div>


                  </div>

                  {/* Main reading structure with drop-cap integration and fact box side columns */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Text blocks: 8 columns on desktop */}
                    <div className="lg:col-span-8 space-y-5">
                      {sec.paragraphs.map((pText, pIdx) => {
                        const isFirstP = pIdx === 0;
                        
                        return (
                          <p 
                            key={pIdx} 
                            className={`${themeClasses.paragraph} text-justify select-all`}
                          >
                            {isFirstP ? (
                              <>
                                {/* Majestic editorial drop-cap */}
                                <span className="float-left text-5xl md:text-6xl font-sans font-black mr-3 mt-1 text-amber-400 bg-white/5 p-2 px-3 rounded-xl border border-white/10 leading-none select-none">
                                  {pText.charAt(0)}
                                </span>
                                {pText.slice(1)}
                              </>
                            ) : (
                              pText
                            )}
                          </p>
                        );
                      })}

                      {/* High quality quote pull */}
                      {sec.highlightText && (
                        <blockquote className="p-4 bg-white/5 rounded-2xl border-l-4 border-[#A8D1DB]/50 text-left font-serif italic text-[16.5px] md:text-[14.5px] text-amber-200 leading-relaxed max-w-xl">
                          “{sec.highlightText}”
                        </blockquote>
                      )}
                    </div>

                    {/* Sidebar illustrative facts cards (4 columns) */}
                    <div className="lg:col-span-4 space-y-4">
                      {sec.illustrativeFact && (
                        <div className="bg-[#0B1516] p-4.5 rounded-2xl border border-white/10 text-left">
                          <span className="font-mono text-[9px] md:text-[7px] text-[#A8D1DB] uppercase tracking-[0.3em] block font-bold mb-1">
                            SỐ LIỆU ĐỊA LÝ LADAKH
                          </span>
                          <span className="font-mono text-xl font-bold block text-white select-all">
                            {sec.illustrativeFact.value}
                          </span>
                          <span className="font-sans font-black text-sm md:text-xs md:text-xxs tracking-wider text-amber-305 uppercase block mt-1">
                            {sec.illustrativeFact.label}
                          </span>
                          <p className="font-serif text-[13px] md:text-[11px] text-stone-400 mt-1.5 leading-relaxed">
                            {sec.illustrativeFact.description}
                          </p>
                        </div>
                      )}

                      <div className="bg-slate-950/60 p-4.5 rounded-2xl border border-white/5 space-y-1">
                        <span className="font-mono text-[9px] md:text-[7px] text-[#A8D1DB]/75 uppercase tracking-[0.2em] block font-bold">
                          CURATOR INSIGHT
                        </span>
                        <p className="font-serif italic text-[13.5px] md:text-[11.5px] text-[#E0ECEF] leading-relaxed text-justify">
                          "{sec.keyInsight || sec.highlightText}"
                        </p>
                      </div>
                    </div>

                  </div>



                </motion.article>
              ) : (
                // VIEW 2: HIGHLY IMMERSIVE POLAR EXPEDITION JOURNAL
                <motion.article
                  id={sec.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 md:p-10 md:pl-20 md:pr-12 rounded-2xl transition-all duration-300 text-left relative overflow-hidden border-2 ${
                    theme === 'cabin-glow'
                      ? 'bg-[#FAF6EE] border-amber-900/45 text-[#1F1916] shadow-xl'
                      : theme === 'glacial-ice'
                      ? 'bg-[#0A1214] border-cyan-500/25 text-[#E0ECEF] shadow-[0_20px_40px_rgba(0,0,0,0.85)]'
                      : 'bg-[#070F0D] border-emerald-500/25 text-[#E5ECE9] shadow-lg'
                  }`}
                >
                  {/* Spiral binding rings simulation on left border */}
                  <div className="absolute left-3 top-0 bottom-0 hidden md:flex flex-col justify-around py-5 pointer-events-none z-30 select-none">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        {/* Spiral loop hole */}
                        <div className={`w-2 h-2 rounded-full shadow-inner border ${
                          theme === 'cabin-glow' ? 'bg-[#1F1916]/10 border-[#1F1916]/10' : 'bg-slate-950/90 border-white/5'
                        }`} />
                        {/* Spiral metal loop */}
                        <div className={`w-5.5 h-2.5 rounded-r-full border-t border-r border-b ${
                          theme === 'cabin-glow' ? 'border-amber-900/35 bg-amber-50/10' : 'border-slate-500/25'
                        } -ml-1`} />
                      </div>
                    ))}
                  </div>

                  {/* Stamp of Authentication */}
                  <div className={`absolute top-20 right-5 md:right-12 w-28 h-28 rounded-full border border-dashed flex flex-col items-center justify-center p-2 text-center select-none pointer-events-none opacity-40 uppercase font-mono tracking-tighter ${
                    theme === 'cabin-glow' 
                      ? 'border-red-900/50 text-red-800 rotate-12 bg-red-900/5' 
                      : theme === 'glacial-ice'
                      ? 'border-cyan-400/40 text-cyan-300 -rotate-12 bg-cyan-950/10'
                      : 'border-emerald-400/40 text-emerald-300 rotate-6 bg-emerald-950/10'
                  }`}>
                    <span className="text-[9px] md:text-[7px] font-black tracking-widest leading-none">FIT TOUR</span>
                    <div className="w-16 h-[0.5px] bg-current my-0.5" />
                    <span className="text-[10.5px] md:text-[8.5px] font-black leading-none">EXPEDITION</span>
                    <span className="text-[9px] md:text-[7px] font-bold font-sans text-amber-500 truncate max-w-[80px] my-0.5">{readerName}</span>
                    <div className="w-16 h-[0.5px] bg-current my-0.5" />
                    <span className="text-[9px] md:text-[7px] font-bold tracking-widest leading-none">ARNATIC 26</span>
                  </div>

                  {/* Field Meteorological report box */}
                  <div className={`border p-4 rounded-xl font-mono text-[12.5px] md:text-[10.5px] mb-6 space-y-1.5 relative z-10 ${
                    theme === 'cabin-glow' 
                      ? 'border-[#1F1916]/20 bg-[#FAF6EE]/50 text-stone-700' 
                      : 'border-white/10 bg-white/[0.015] text-stone-300'
                  }`}>
                    <div className="flex items-center justify-between text-sm md:text-xs font-black border-b border-dashed pb-1.5 mb-1 text-amber-500">
                      <span className="flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 animate-spin-slow animate-pulse" />
                        BẢN THÔNG ĐIỆP ĐỊA TRÌNH
                      </span>
                      <span>ENTRY 0{sec.order}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                      <div>TỌA ĐỘ: <span className="font-sans font-extrabold text-sky-400 block sm:inline">{JOURNAL_METADATA[sec.id]?.coords || 'N/A'}</span></div>
                      <div>THỜI TIẾT: <span className="font-sans font-extrabold text-emerald-450 block sm:inline">{JOURNAL_METADATA[sec.id]?.weather || 'N/A'}</span></div>
                      <div>ĐỘ CAO: <span className="font-sans font-extrabold text-stone-400 block sm:inline">{JOURNAL_METADATA[sec.id]?.elev || 'N/A'}</span></div>
                      <div>SỨC GIÓ: <span className="font-sans font-extrabold text-cyan-450 block sm:inline">{JOURNAL_METADATA[sec.id]?.wind || 'N/A'}</span></div>
                    </div>
                  </div>

                  {/* Section Title & Subheading */}
                  <div className="mb-6 relative z-10">
                    <span className="font-mono text-[10px] md:text-[8px] text-amber-500 uppercase tracking-[0.3em] font-black block mb-1">
                      ★ POLAR FLIGHT LOG: PART {config.partNumber}, CHAP. {sec.order} ★
                    </span>
                    <h2 className={`font-prata text-2xl md:text-3xl ${themeClasses.title} uppercase font-normal tracking-wide`}>
                      {sec.title}
                    </h2>
                    <span className="font-serif italic text-sm md:text-xs text-stone-400 block mt-0.5">
                      "{sec.subtitle || 'Northern Expedition'}" — Trích dã sử viễn chinh
                    </span>
                  </div>

                  {/* Paragraph Typewriter-ruled Section & Survival alert bento columns */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
                    
                    {/* Columns 8: Paragraphs text */}
                    <div className="lg:col-span-8 space-y-4">
                      {sec.paragraphs.map((para, index) => (
                        <p 
                          key={index}
                          className="font-serif text-[16px] md:text-[14.5px] leading-relaxed text-justify text-stone-300 tracking-wide select-all"
                        >
                          {index === 0 ? (
                            <>
                              <span className="float-left text-3xl font-mono border-2 border-dashed border-amber-500/30 text-amber-500 bg-amber-500/5 p-1.5 px-2.5 rounded-lg mr-2 font-bold leading-none select-none">
                                †
                              </span>
                              {para}
                            </>
                          ) : para}
                        </p>
                      ))}

                      {/* Pull quote formatted as cursive researcher annotations */}
                      {sec.highlightText && (
                        <div className={`p-4 rounded-xl border-y border-dashed relative my-5 ${
                          theme === 'cabin-glow'
                            ? 'bg-amber-100/40 border-amber-900/10 text-stone-900 font-serif italic'
                            : 'bg-white/[0.015] border-white/5 text-amber-100'
                        }`}>
                          <span className="font-mono text-[9px] md:text-[7px] text-stone-450 uppercase tracking-widest block mb-1.5">
                            ✍️ BÚT TÍCH NGHIÊN CỨU:
                          </span>
                          <p className="font-serif text-[15.5px] md:text-[13.5px] italic leading-relaxed text-left">
                            "{sec.highlightText}"
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Columns 4: Survival / meteorological advisor block */}
                    <div className="lg:col-span-4 space-y-4">
                      
                      {/* Interactive Field Warning Banner */}
                      <div className="bg-red-950/25 border border-red-500/20 rounded-2xl p-4 text-left space-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
                        <div className="flex items-center gap-1.5 text-red-400 font-mono text-[10px] md:text-[8px] font-black uppercase tracking-widest">
                          <Compass className="w-3.5 h-3.5 text-red-500 animate-spin-slow" />
                          <span>KHUYẾN CÁO SINH TỒN THỰC ĐỊA</span>
                        </div>
                        <p className="font-serif text-sm md:text-xs md:text-xxs text-stone-300 leading-relaxed">
                          {JOURNAL_METADATA[sec.id]?.warning}
                        </p>
                        <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[9.5px] md:text-[7.5px] font-mono text-red-400">
                          <span>SỔ TẠY HUẤN LUYỆN</span>
                          <span className="cursor-pointer underline" onClick={() => {
                            const suitcase = document.getElementById('polar-survival-suitcase');
                            if (suitcase) suitcase.scrollIntoView({ behavior: 'smooth' });
                          }}>Mở hòm vật tư ↳</span>
                        </div>
                      </div>

                      {/* Sticky Curators handwritten diary paper bookmark */}
                      <div className="bg-amber-50 border border-amber-900/10 rounded-xl p-4 rotate-1 shadow-md text-stone-900 space-y-2">
                        <span className="font-mono text-[9px] md:text-[7px] text-amber-900/90 uppercase tracking-widest block font-bold border-b border-amber-900/10 pb-1">
                          📋 MEMOIR NOTE:
                        </span>
                        <p className="font-sans text-[13px] md:text-[11px] font-medium leading-relaxed text-justify italic text-stone-850">
                          "{sec.keyInsight || sec.highlightText}"
                        </p>
                        <span className="font-mono text-[9.5px] md:text-[7.5px] text-stone-500 block text-right">
                          — Signed, Curator Max Vu
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Action row with Bookmark, Field Comment toggles */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-4.5 mt-6 relative z-10 select-none">


                    <span className="font-mono text-[10px] md:text-[8px] text-stone-505 tracking-wider hidden sm:block">
                      EST. JUNE 12, 2026 • ARNATIC LOGS BY FIT TOUR
                    </span>
                  </div>



                  {/* Paw / boot footprints tracking across the bottom margin */}
                  <div className="flex gap-4 justify-center py-2 text-stone-700/10 select-none pointer-events-none mt-4">
                    <Footprints className="w-4.5 h-4.5 rotate-12 opacity-30" />
                    <Footprints className="w-4.5 h-4.5 -rotate-12 opacity-25 mt-1" />
                    <Footprints className="w-4.5 h-4.5 rotate-6 opacity-20 mt-2" />
                    <Footprints className="w-4.5 h-4.5 -rotate-6 opacity-15 mt-3" />
                  </div>

                </motion.article>
              )}
            </AnimatePresence>
          );
        })}
      </section>

      {/* INTERACTIVE GEOGRAPHIC EXPLORER AT THE HEART */}
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        <Suspense fallback={<div className="h-[400px] bg-stone-900/20 animate-pulse rounded-2xl" />}>
          <InteractiveMap onSelectPoint={handleMapHighlightUpdate} />
        </Suspense>
      </section>

      {/* SPECTACULAR PHOTO EXPOSURE SLIDER AND AURORA CONTROL BENTO ROW */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Full Cinematic Gallery uses 8 cols */}
        <div className="lg:col-span-8">
          <Suspense fallback={<div className="h-[400px] bg-stone-900/20 animate-pulse rounded-2xl" />}>
            <PhotoGallery />
          </Suspense>
        </div>

        {/* Aurora Borealis adjusters uses 4 cols */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <Suspense fallback={<div className="h-[200px] bg-stone-900/20 animate-pulse rounded-2xl" />}>
            <AuroraControl />
          </Suspense>
          
          {/* Quick Fit Tour badge info inside bento */}
          <div className="bg-[#0B1516] border border-white/10 rounded-3xl p-5 text-left flex flex-col justify-between flex-1 relative overflow-hidden">
            <div className="absolute w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl -top-5 -right-5 pointer-events-none" />
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="font-mono text-[10px] md:text-[8px] text-[#A8D1DB] uppercase tracking-widest font-black">
                  ARNATIC PROJECT MISSION
                </span>
              </div>
              <h4 className="font-prata text-md uppercase font-light text-white tracking-wide leading-tight">
                Triết Lý Curator Lộ Trình
              </h4>
              <p className="font-serif text-[14.5px] md:text-[12.5px] text-stone-350 leading-relaxed text-justify">
                FIT TOUR Arnatic là series hành trình khai thác các vùng cực lạnh, hoang dã tột đỉnh của hành tinh giúp lữ khách "hiểu sâu sắc và lưu truyền vạn dặm ký sự".
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[12px] md:text-[10px] text-stone-500 font-mono">
              <span>EST. 2026 SERIES TOUR</span>
              <span className="text-amber-400">FIT TOUR CURATORS</span>
            </div>
          </div>
        </div>

      </section>

      {/* CLIMB HISTORICAL SEWARD DESTRUCTIVE TIME SCALE */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <Suspense fallback={<div className="h-[300px] bg-stone-900/20 animate-pulse rounded-2xl" />}>
          <HistoricalTimeline />
        </Suspense>
      </section>

      {/* SURVIVAL CHECKLIST CHALLENGE */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <Suspense fallback={<div className="h-[400px] bg-stone-900/20 animate-pulse rounded-2xl" />}>
          <SurvivalChecklist />
        </Suspense>
      </section>

      {/* SERIES NAVIGATION HUB */}
      <SeriesNavigation currentPart={config.partNumber} />

    </div>
  );
}
