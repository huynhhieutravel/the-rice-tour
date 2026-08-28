import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, ClipboardList, Map, ShieldCheck, Mail, Phone, CalendarRange } from 'lucide-react';
import type { TravelerCustomization } from '../types';

interface PlannerSectionProps {
  passengerName: string;
  travelStyle: 'rugged' | 'balanced' | 'luxury';
  setTravelStyle: (style: 'rugged' | 'balanced' | 'luxury') => void;
  durationDays: number;
  setDurationDays: (days: number) => void;
}

export default function PlannerSection({
  passengerName,
  travelStyle,
  setTravelStyle,
  durationDays,
  setDurationDays
}: PlannerSectionProps) {
  // Local form inputs
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companions, setCompanions] = useState<'solo' | 'couple' | 'caravan'>('couple');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formError, setFormError] = useState('');

  // Itinerary calculation logic depending on inputs
  const calculateEstimateCost = () => {
    let baseRate = 250; // Daily rate per person in USD
    if (travelStyle === 'balanced') baseRate = 420;
    if (travelStyle === 'luxury') baseRate = 850;

    const multiplier = companions === 'solo' ? 1 : companions === 'couple' ? 1.8 : 3.2;
    return Math.round(baseRate * durationDays * multiplier);
  };

  const getStyleDescription = () => {
    if (travelStyle === 'rugged') return 'Pure authentic yurt encampments, active mountain trekking, remote high pastures, horse paths, and organic local dining.';
    if (travelStyle === 'balanced') return 'Combination of rustic heritage homestays, comfortable lakeside timber cottages, and guided sightseeing canyons.';
    return 'Premium traditional heated yurts, five-star Almaty spa residences, helicopter canyon rides, and private chef dinners.';
  };

  const mapStationsIncluded = () => {
    if (durationDays === 7) return 'Almaty ➡ Lake Issyk-Kul';
    if (durationDays === 10) return 'Almaty ➡ Lake Issyk-Kul ➡ Lake Son-Kul';
    return 'Almaty ➡ Lake Issyk-Kul ➡ Lake Son-Kul ➡ Canyon Naryn & Tash Rabat';
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setFormError('Vui lòng nhập email liên hệ.');
      return;
    }
    if (!phone) {
      setFormError('Vui lòng nhập số điện thoại liên hệ.');
      return;
    }
    setFormError('');
    setShowSuccessModal(true);
  };

  const resetSuccessModal = () => {
    setShowSuccessModal(false);
    setEmail('');
    setPhone('');
  };

  return (
    <section id="planner-section" className="scroll-mt-12 py-16 px-4 md:px-8 bg-gold-50/40 border-t border-b border-gold-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Title area */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-gold-600 tracking-widest uppercase block mb-1">
            Section II — Customization Matrix
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl font-bold text-gold-905 tracking-tight">
            Plan Your Bespoke Expeditions
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto my-3" />
          <p className="font-sans text-sm text-gold-700 max-w-xl mx-auto">
            Tự tay tinh chỉnh những nốt nhạc của hành trình Central Asia, lựa chọn phong cách trải nghiệm, thời gian khám phá và nhận ước tính tức thì.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Customizer Form (6 cols) */}
          <div className="col-span-12 lg:col-span-6 bg-white p-6 md:p-8 rounded-2xl border border-gold-250 shadow-md flex flex-col justify-between">
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Traveler configuration details */}
              <div className="space-y-1.5 border-b border-gold-150 pb-4">
                <span className="text-[10px] font-mono uppercase text-gold-600 block font-bold">
                  Explorer Identity
                </span>
                <span className="text-sm font-semibold text-gold-900 block font-serif">
                  Curated For Traveler: <span className="text-gold-750 font-bold italic">{passengerName || 'Hành khánh kỳ tài'}</span>
                </span>
              </div>

              {/* 1. Travel style selector */}
              <div className="space-y-2">
                <label id="style-select-label" className="text-[10px] font-mono uppercase text-gold-600 block font-bold">
                  1. Expedition Style
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xxs font-display font-semibold uppercase tracking-wider">
                  {[
                    { id: 'rugged', title: 'Rugged Nomad' },
                    { id: 'balanced', title: 'Balanced Route' },
                    { id: 'luxury', title: 'Prestige Yurt' }
                  ].map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setTravelStyle(style.id as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        travelStyle === style.id
                          ? 'bg-gold-805 text-white border-gold-900 shadow-sm'
                          : 'bg-gold-50/50 border-gold-200 text-gold-700 hover:border-gold-350'
                      }`}
                    >
                      {style.title}
                    </button>
                  ))}
                </div>
                <p className="text-xxs text-gold-600 leading-relaxed italic mt-1.5">
                  Style detail: {getStyleDescription()}
                </p>
              </div>

              {/* 2. Duration Selector */}
              <div className="space-y-2">
                <label id="duration-select-label" className="text-[10px] font-mono uppercase text-gold-600 block font-bold">
                  2. Carriage Span (Duration)
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xxs font-display font-semibold uppercase tracking-wider">
                  {[
                    { id: 7, label: '7 Days' },
                    { id: 10, label: '10 Days' },
                    { id: 14, label: '14 Days' }
                  ].map((days) => (
                    <button
                      key={days.id}
                      type="button"
                      onClick={() => setDurationDays(days.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        durationDays === days.id
                          ? 'bg-gold-850 text-white border-gold-900 shadow-sm'
                          : 'bg-gold-50/50 border-gold-200 text-gold-700 hover:border-gold-350'
                      }`}
                    >
                      {days.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Companion details */}
              <div className="space-y-2">
                <label id="companions-select-label" className="text-[10px] font-mono uppercase text-gold-600 block font-bold">
                  3. Expedition companions
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xxs font-display font-semibold uppercase tracking-wider">
                  {[
                    { id: 'solo', label: 'Solo Explorer' },
                    { id: 'couple', label: 'Couples / Tandem' },
                    { id: 'caravan', label: 'Family Caravan' }
                  ].map((comp) => (
                    <button
                      key={comp.id}
                      type="button"
                      onClick={() => setCompanions(comp.id as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        companions === comp.id
                          ? 'bg-gold-850 text-white border-gold-900 shadow-sm'
                          : 'bg-gold-50/50 border-gold-200 text-gold-700 hover:border-gold-350'
                      }`}
                    >
                      {comp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Validation inputs */}
              <div className="space-y-4 pt-4 border-t border-gold-200">
                <span className="text-[10px] font-mono uppercase text-gold-600 block font-bold">
                  Contact Information
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xxs font-display text-gold-700 block">EMAIL ADDRESS</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs p-2.5 pl-9 bg-gold-50 border border-gold-200 rounded-lg text-gold-900 focus:outline-none"
                        placeholder="your.email@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xxs font-display text-gold-700 block">TELEPHONE NUMBER</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs p-2.5 pl-9 bg-gold-50 border border-gold-200 rounded-lg text-gold-900 focus:outline-none"
                        placeholder="+84 901 234 567"
                      />
                    </div>
                  </div>
                </div>

                {formError && (
                  <p className="text-xxs font-semibold text-rose-600 italic">✕ {formError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 bg-gold-800 hover:bg-gold-700 text-white font-display text-xxs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <ClipboardList className="w-4 h-4" />
                <span>Gửi bản đăng ký hành trình</span>
              </button>

            </form>
          </div>

          {/* RIGHT: Dynamic Golden Travel Ticket Frame (6 cols) */}
          <div className="col-span-12 lg:col-span-6 bg-gold-850 p-6 md:p-8 rounded-2xl flex flex-col justify-between text-white border-2 border-gold-450 relative shadow-2xl overflow-hidden pointer-events-none">
            
            {/* Background design elements */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold-200 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400 rounded-full blur-3xl" />
            </div>

            {/* Ticket Header */}
            <div className="border-b border-gold-500/30 pb-4 mb-4 flex justify-between items-start">
              <div>
                <span className="font-display text-[8px] tracking-[0.3em] font-bold text-gold-400 block uppercase">
                  Central Asia Caravan Ticket
                </span>
                <span className="font-serif text-lg font-bold block text-gold-100">
                  Fit Tour Premium Passport
                </span>
              </div>
              <span className="text-[9px] font-mono text-gold-305 px-2 bg-white/5 rounded border border-white/10 uppercase font-semibold">
                CLASS: {travelStyle}
              </span>
            </div>

            {/* Ticket Body details */}
            <div className="space-y-6">
              
              {/* Traveler name display */}
              <div className="space-y-1">
                <span className="text-[8px] font-mono text-gold-400 block uppercase">CARAVAN EXPEDITION HEADPINS</span>
                <span className="font-serif text-xl font-bold tracking-wide text-gold-150 uppercase block">
                  {passengerName || 'Quynh Anh Shyn'}
                </span>
              </div>

              {/* Style, Station list, and Duration metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-gold-400 block uppercase">JOURNEY SPAN</span>
                  <span className="text-sm font-bold text-white font-display uppercase">{durationDays} Days / {durationDays - 1} Nights</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-gold-400 block uppercase">COMPANIONS EXPEDITION</span>
                  <span className="text-sm font-bold text-white font-display uppercase">{companions} style</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-mono text-gold-400 block uppercase">ROUTE SEGMENTS PATHWAY</span>
                <span className="text-xs text-gold-200 block font-semibold">
                  {mapStationsIncluded()}
                </span>
              </div>

              <div className="space-y-1 border-t border-gold-500/20 pt-4">
                <span className="text-[8px] font-mono text-gold-400 block uppercase">CARAVAN ESTIMATE BUDGET (USD)</span>
                <span className="font-serif text-3.5xl font-extrabold text-gold-300 tracking-tight block">
                  ${calculateEstimateCost().toLocaleString()} USD
                </span>
                <span className="text-[8px] font-mono text-gold-450 block italic">
                  *Comprises all accommodation (yurt / cottage), private transit vehicles, entrance permits, and cultural meals.
                </span>
              </div>

            </div>

            {/* Ticket Footer bar */}
            <div className="border-t border-gold-500/30 pt-4 mt-6 flex justify-between items-center text-[8px] font-mono tracking-widest text-gold-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> SECURED BY FIT TOUR
              </span>
              <span>PASSPORT NO: SA-2026-XF</span>
            </div>

          </div>

        </div>

      </div>

      {/* Booking inquiry approved Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white max-w-md w-full p-6 md:p-8 rounded-2xl border-4 border-gold-400 text-center relative shadow-2xl"
            >
              <div className="w-14 h-14 bg-emerald-100 border border-emerald-305 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <span className="font-display font-semibold text-xxs tracking-wider text-gold-600 uppercase block mb-1">
                Fit Tour Concierge Approved
              </span>
              <h3 className="font-serif text-2xl font-bold text-gold-900 mb-3 leading-tight">
                Caravan Registered!
              </h3>
              
              <div className="w-10 h-0.5 bg-gold-400 mx-auto my-3" />
              
              <p className="text-xs text-gold-805 leading-relaxed mb-6">
                Xin chào <span className="font-bold text-gold-900">{passengerName}</span>, thông tin hành trình độc bản của quý khách đã được lưu trữ trong hệ thống đại sứ thương hiệu Fit Tour. Chuyên viên thám hiểm sẽ liên hệ trực tiếp qua email <span className="font-bold text-gold-900">{email}</span> hoặc điện thoại <span className="font-bold text-gold-900">{phone}</span> trong vòng 2 giờ làm việc để hoàn tất thủ tục visa và hành trang.
              </p>

              <button
                onClick={resetSuccessModal}
                className="px-6 py-2 bg-gold-850 hover:bg-gold-700 text-white font-display text-xxs font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-sm"
              >
                Trở lại Thảo Nguyên
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
