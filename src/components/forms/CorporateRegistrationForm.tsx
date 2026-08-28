import React, { useState, useRef, useEffect } from 'react';
import { track } from '@/lib/analytics';
import { EVENTS } from '@/tracking/events';

export default function CorporateRegistrationForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    companyName: '',
    budget: '',
    destination: '',
    hotelStandard: '',
    notes: '',
  });

  const [setupType, setSetupType] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  const [ts, setTs] = useState<string>('');

  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTs(Date.now().toString());

    // Load Cloudflare Turnstile script
    if (document.getElementById('cf-turnstile-script')) {
      renderTurnstile();
      return;
    }

    const script = document.createElement('script');
    script.id = 'cf-turnstile-script';
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    (window as any).onTurnstileLoad = () => {
      renderTurnstile();
    };

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const renderTurnstile = () => {
    if (turnstileRef.current && (window as any).turnstile) {
      turnstileRef.current.innerHTML = '';
      (window as any).turnstile.render(turnstileRef.current, {
        sitekey: '0x4AAAAAADgSZpv_LhM92oH4', // Using the synchronized sitekey that works
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSetupType(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const formPayload = {
        formType: 'corporate',
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: formData.customerEmail,
        tourName: 'Tư vấn Tour Doanh Nghiệp',
        sourceUrl: window.location.href,
        _hp: (document.getElementById('hp_field') as HTMLInputElement)?.value,
        _ts: ts,
        'cf-turnstile-response': turnstileToken,
        options: {
          companyName: formData.companyName,
          destination: formData.destination,
          hotelStandard: formData.hotelStandard,
          budget: formData.budget,
          setupType: setupType,
          notes: formData.notes
        }
      };

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formPayload),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitResult({ success: true, message: data.message });
        // Tracking: generate_lead — Không gửi PII (tên công ty, SĐT, email)
        track({
          event: EVENTS.GENERATE_LEAD,
          form_type: 'corporate_registration',
        });
        setFormData({
          customerName: '', customerPhone: '', customerEmail: '', 
          companyName: '', budget: '', destination: '', hotelStandard: '', notes: ''
        });
        setSetupType('');
      } else {
        setSubmitResult({ success: false, message: data.error || 'Có lỗi xảy ra.' });
      }
    } catch (err) {
      setSubmitResult({ success: false, message: 'Lỗi kết nối. Vui lòng thử lại sau.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
      {/* Honeypot field - Hidden from users */}
      <input type="text" id="hp_field" name="hp_field" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {submitResult && (
        <div className={`mb-8 p-4 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {submitResult.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* THÔNG TIN LIÊN HỆ */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">1. Thông tin liên hệ</h3>
          
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            <input id="customerName" type="text" name="customerName" value={formData.customerName} onChange={handleInputChange} 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-500 outline-none transition-shadow text-sm" placeholder="Nguyễn Văn A" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
              <input id="customerPhone" type="tel" name="customerPhone" required value={formData.customerPhone} onChange={handleInputChange} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-500 outline-none transition-shadow text-sm" placeholder="0901234567" />
            </div>
            <div>
              <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input id="customerEmail" type="email" name="customerEmail" value={formData.customerEmail} onChange={handleInputChange} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-500 outline-none transition-shadow text-sm" placeholder="email@congty.com" />
            </div>
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Tên Công ty / Tổ chức</label>
            <input id="companyName" type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-500 outline-none transition-shadow text-sm" placeholder="Công ty TNHH..." />
          </div>
        </div>

        {/* NHU CẦU ĐẶC THÙ */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">2. Yêu cầu chương trình</h3>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Địa điểm</label>
              <select id="destination" name="destination" value={formData.destination} onChange={handleInputChange} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-500 outline-none transition-shadow text-gray-700 text-sm">
                <option value="">-- Chọn địa điểm --</option>
                <optgroup label="Trong nước">
                  <option value="Phú Quốc">Phú Quốc</option>
                  <option value="Nha Trang / Cam Ranh">Nha Trang / Cam Ranh</option>
                  <option value="Đà Nẵng / Hội An">Đà Nẵng / Hội An</option>
                  <option value="Hạ Long / Cát Bà">Hạ Long / Cát Bà</option>
                  <option value="Đà Lạt">Đà Lạt</option>
                  <option value="Các điểm đến khác (Trong nước)">Các điểm đến khác (Trong nước)</option>
                </optgroup>
                <optgroup label="Quốc tế">
                  <option value="Đông Nam Á (Thái Lan, Indonesia, Singapore...)">Đông Nam Á (Thái Lan, Indonesia, Singapore...)</option>
                  <option value="Đông Bắc Á (Nhật Bản, Hàn Quốc, Đài Loan...)">Đông Bắc Á (Nhật Bản, Hàn Quốc, Đài Loan...)</option>
                  <option value="Trung Quốc">Trung Quốc</option>
                  <option value="Châu Âu">Châu Âu</option>
                  <option value="Châu Úc / Mỹ">Châu Úc / Mỹ</option>
                  <option value="Các điểm đến khác (Quốc tế)">Các điểm đến khác (Quốc tế)</option>
                </optgroup>
                <option value="Chưa xác định (Để FIT Tour tư vấn)">Chưa xác định (Để FIT Tour tư vấn)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="hotelStandard" className="block text-sm font-medium text-gray-700 mb-1">Tiêu chuẩn lưu trú</label>
              <select id="hotelStandard" name="hotelStandard" value={formData.hotelStandard} onChange={handleInputChange} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-500 outline-none transition-shadow text-gray-700 text-sm">
                <option value="">-- Chọn tiêu chuẩn --</option>
                <option value="Khách sạn / Resort 3 Sao">Khách sạn / Resort 3 Sao</option>
                <option value="Khách sạn / Resort 4 Sao">Khách sạn / Resort 4 Sao</option>
                <option value="Khách sạn / Resort 5 Sao">Khách sạn / Resort 5 Sao</option>
                <option value="Homestay / Ecolodge / Đặc biệt">Homestay / Ecolodge / Đặc biệt</option>
                <option value="Chưa xác định (Để FIT Tour đề xuất)">Chưa xác định (Để FIT Tour đề xuất)</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Ngân sách dự kiến</label>
              <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-500 outline-none transition-shadow text-gray-700 text-sm">
                <option value="">-- Chọn mức ngân sách --</option>
                <option value="Dưới 5 triệu / người">Dưới 5 triệu / người</option>
                <option value="Từ 5 - 10 triệu / người">Từ 5 - 10 triệu / người</option>
                <option value="Từ 10 - 20 triệu / người">Từ 10 - 20 triệu / người</option>
                <option value="Trên 20 triệu / người">Trên 20 triệu / người</option>
                <option value="Chưa xác định (Cần tư vấn)">Chưa xác định (Cần tư vấn)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Loại hình tổ chức</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { val: 'Company Trip', label: 'Company Trip', desc: 'Du lịch công ty' },
                { val: 'Incentive Travel', label: 'Incentive Travel', desc: 'Du lịch khen thưởng' },
                { val: 'Corporate Retreat', label: 'Corporate Retreat', desc: 'Nghỉ dưỡng doanh nghiệp' },
                { val: 'MICE', label: 'MICE', desc: 'Hội nghị & Sự kiện' },
                { val: 'Bespoke', label: 'Tùy chỉnh riêng', desc: 'Bespoke' },
              ].map((item) => (
                <label key={item.val} className="flex items-start space-x-3 cursor-pointer group">
                  <div className="flex items-center h-5">
                    <input type="radio" name="setupType" value={item.val} checked={setupType === item.val} onChange={handleRadioChange} 
                      className="w-4 h-4 text-brand-600 border-gray-300 focus:ring-brand-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 group-hover:text-brand-600">{item.label}</span>
                    <span className="text-xs text-gray-500">({item.desc})</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* LỜI NHẮN */}
      <div className="mt-8">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Yêu cầu thêm (Quy mô đoàn, Nhu cầu đặc biệt, ...)</label>
        <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={handleInputChange} 
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-500 outline-none transition-shadow text-sm" 
          placeholder="Ví dụ: Đoàn khoảng 50 người, cần tổ chức Gala Dinner ngoài trời..." />
      </div>

      {/* Turnstile */}
      <div className="mt-8 flex justify-center">
        <div ref={turnstileRef} />
      </div>

      {/* SUBMIT */}
      <div className="mt-8 text-center">
        <button type="submit" disabled={isSubmitting || !turnstileToken} 
          className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white font-medium text-lg rounded-md hover:bg-brand-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto min-w-[250px]">
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Gửi Yêu Cầu Tư Vấn'}
        </button>
        <p className="mt-4 text-xs text-gray-500">
          * Đội ngũ FIT Tour sẽ liên hệ lại qua số điện thoại trong vòng 24h.
        </p>
      </div>

    </form>
  );
}
