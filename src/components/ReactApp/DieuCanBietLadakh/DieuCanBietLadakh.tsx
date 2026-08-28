import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PillarGuide from './components/PillarGuide';
import { Compass, Sparkles, X, CheckCircle2, PhoneCall, Heart, Shield, Send } from 'lucide-react';

const LADAKH_TOURS = [
  { value: 'Ladakh Signature - Leh Pangong Nubra 7N6Đ', label: 'Ladakh Signature – Leh Pangong Nubra (7N6Đ)' },
  { value: 'Ladakh Trọn Vẹn - Leh Pangong Nubra Tso Moriri 9N8Đ', label: 'Ladakh Trọn Vẹn – Leh Pangong Nubra Tso Moriri (9N8Đ)' },
  { value: 'Ladakh x Kashmir - Srinagar Leh Pangong 10N9Đ', label: 'Ladakh × Kashmir – Srinagar Leh Pangong (10N9Đ)' },
  { value: 'Ladakh Mạo Hiểm - Khardung La Changla Expedition 8N7Đ', label: 'Ladakh Mạo Hiểm – Khardung La Expedition (8N7Đ)' },
  { value: 'Ladakh Mùa Đông - Chadar Trek Frozen River', label: 'Ladakh Mùa Đông – Chadar Trek Frozen River' },
  { value: 'other', label: '🔹 Khác (Tôi muốn tư vấn riêng)' },
];

const CONTACT_CHANNELS = [
  { value: 'zalo', label: 'Zalo', icon: '💬' },
  { value: 'facebook', label: 'Facebook', icon: '📘' },
  { value: 'email', label: 'Email', icon: '📧' },
  { value: 'phone', label: 'Gọi điện', icon: '📞' },
];

export default function DieuCanBietLadakh({ seoDescription }: { seoDescription?: string }) {
  const [bookingTour, setBookingTour] = useState<any>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState(false);
  const [formOpenedAt, setFormOpenedAt] = useState<number>(Date.now());
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Load Cloudflare Turnstile script
  useEffect(() => {
    if (document.getElementById('cf-turnstile-script')) return;
    const script = document.createElement('script');
    script.id = 'cf-turnstile-script';
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    (window as any).onTurnstileLoad = () => {
      if (turnstileRef.current && (window as any).turnstile) {
        (window as any).turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAADgSZpv_LhM92oH4',
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
          theme: 'light',
          size: 'invisible',
        });
      }
    };
    return () => {};
  }, []);

  // Render Turnstile when modal opens
  useEffect(() => {
    if (bookingTour && turnstileRef.current && (window as any).turnstile) {
      try {
        turnstileRef.current.innerHTML = '';
        (window as any).turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAADgSZpv_LhM92oH4',
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
          theme: 'light',
          size: 'invisible',
        });
      } catch(e) {}
    }
  }, [bookingTour]);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    selectedTour: LADAKH_TOURS[0].value,
    month: '',
    contactChannel: 'zalo',
    notes: '',
  });

  const activeTourSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name.trim()) return;
    
    setSubmitting(true);
    try {
      const tourLabel = LADAKH_TOURS.find(t => t.value === bookingForm.selectedTour)?.label || bookingForm.selectedTour;
      const channelLabel = CONTACT_CHANNELS.find(c => c.value === bookingForm.contactChannel)?.label || bookingForm.contactChannel;
      
      await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'ladakh-booking',
          customerName: bookingForm.name,
          customerPhone: bookingForm.phone,
          customerEmail: bookingForm.email,
          tourName: tourLabel,
          options: JSON.stringify({
            month: bookingForm.month || 'Chưa xác định',
            contactChannel: channelLabel,
            notes: bookingForm.notes,
          }),
          sourceUrl: window.location.href,
          _ts: formOpenedAt,
          'cf-turnstile-response': turnstileToken,
        }),
      });
    } catch (err) {
      console.error('Submit error:', err);
    }
    setSubmitting(false);
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-150 selection:text-amber-900 overflow-x-hidden antialiased">
      {/* 2. MAIN CORE CONTENT: RECONCILED PILLAR GUIDE PORTAL */}
      <main className="min-h-[70vh]">
        <PillarGuide onTourSelect={setBookingTour} seoDescription={seoDescription} />
      </main>


      {/* 4. GORGEOUS HIGH-CONVERSION BOOKING MODAL */}
      <AnimatePresence>
        {bookingTour && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl border border-stone-200 shadow-2xl overflow-hidden w-full max-w-lg text-left relative max-h-[92vh] overflow-y-auto"
            >
              {/* Top Banner */}
              <div className="bg-stone-950 text-stone-100 px-6 py-5 relative flex justify-between items-center border-b border-stone-800">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2.5 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-amber-400 block uppercase font-bold tracking-widest">HÀNH TRÌNH LADAKH</span>
                    <h3 className="font-serif font-extrabold text-white text-base">Đăng Ký Đặt Tour & Tư Vấn</h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setBookingTour(null);
                    setBookingSubmitted(false);
                  }}
                  className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition cursor-pointer relative z-10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {!bookingSubmitted ? (
                  <form onSubmit={activeTourSubmit} className="space-y-4">
                    {/* Tour Selection */}
                    <div>
                      <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Chọn hành trình Ladakh</label>
                      <select
                        value={bookingForm.selectedTour}
                        onChange={e => setBookingForm({ ...bookingForm, selectedTour: e.target.value })}
                        className="w-full text-xs bg-amber-50/60 border border-amber-200/60 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition font-semibold text-stone-800"
                      >
                        {LADAKH_TOURS.map(tour => (
                          <option key={tour.value} value={tour.value}>{tour.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Name (Required) + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">
                          Họ & Tên <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Nguyễn Văn A"
                          value={bookingForm.name}
                          onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Số điện thoại</label>
                        <input
                          type="tel"
                          placeholder="0903 348 XXX"
                          value={bookingForm.phone}
                          onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    {/* Email + Month (text input) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Địa chỉ Email</label>
                        <input
                          type="email"
                          placeholder="email@gmail.com"
                          value={bookingForm.email}
                          onChange={e => setBookingForm({ ...bookingForm, email: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Tháng đi mong muốn</label>
                        <input
                          type="text"
                          placeholder="VD: Tháng 9/2026"
                          value={bookingForm.month}
                          onChange={e => setBookingForm({ ...bookingForm, month: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    {/* Contact Channel Preference */}
                    <div>
                      <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-2">Kênh liên hệ mong muốn</label>
                      <div className="flex flex-wrap gap-2">
                        {CONTACT_CHANNELS.map(ch => (
                          <label
                            key={ch.value}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold cursor-pointer border transition select-none ${
                              bookingForm.contactChannel === ch.value
                                ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-sm'
                                : 'bg-stone-50 border-stone-200 text-stone-500 hover:border-stone-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="contactChannel"
                              value={ch.value}
                              checked={bookingForm.contactChannel === ch.value}
                              onChange={e => setBookingForm({ ...bookingForm, contactChannel: e.target.value })}
                              className="sr-only"
                            />
                            <span>{ch.icon}</span>
                            <span>{ch.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block font-mono text-[9px] text-stone-500 uppercase font-bold mb-1">Ghi chú thêm (tuỳ chọn)</label>
                      <textarea
                        placeholder="VD: Đi cùng 4 người, có người lớn tuổi..."
                        value={bookingForm.notes}
                        onChange={e => setBookingForm({ ...bookingForm, notes: e.target.value })}
                        rows={2}
                        className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-700/50 focus:bg-white transition resize-none"
                      />
                    </div>

                    {/* Honeypot anti-spam (hidden) */}
                    <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

                    {/* Cloudflare Turnstile invisible widget */}
                    <div ref={turnstileRef} />

                    <button
                      type="submit"
                      disabled={submitting || !bookingForm.name.trim()}
                      className="w-full bg-stone-950 hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-xs font-bold py-3.5 px-6 rounded-xl transition shadow-md hover:shadow-lg hover:text-amber-50 cursor-pointer flex items-center justify-center gap-2 mt-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{submitting ? 'ĐANG GỬI...' : 'GỬI ĐĂNG KÝ ĐẶT TOUR LADAKH'}</span>
                    </button>

                    <p className="text-[10px] text-stone-400 text-center leading-relaxed">
                      Tư vấn viên chuyên Ladakh sẽ liên hệ lại trong vòng 15 phút qua kênh bạn chọn.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="w-12 h-12 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest block">ĐĂNG KÝ THÀNH CÔNG!</span>
                    <h4 className="font-serif font-extrabold text-stone-900 text-xl leading-tight">
                      Cảm ơn {bookingForm.name}!
                    </h4>
                    <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                      Yêu cầu tư vấn <b>Hành trình Ladakh</b> của bạn đã được ghi nhận thành công. 
                      Tư vấn viên chuyên Ladakh sẽ liên hệ bạn qua <b>{CONTACT_CHANNELS.find(c => c.value === bookingForm.contactChannel)?.label}</b> trong vòng 15 phút!
                    </p>
                    <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 inline-block font-mono text-[10px] text-stone-500">
                      Mã tư vấn: <strong className="text-stone-900 select-all font-bold font-mono">FT-LADAKH-{(Math.random() * 10000).toFixed(0)}</strong>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setBookingTour(null);
                          setBookingSubmitted(false);
                        }}
                        className="text-xs font-mono font-bold text-amber-800 hover:text-amber-900 border-b border-amber-800 shrink-0 pb-0.5"
                      >
                        Đóng cửa sổ
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

