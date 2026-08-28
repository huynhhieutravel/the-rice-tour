import { ArrowRight, Star, Map, Compass } from 'lucide-react';

export default function SignatureTour() {
  return (
    <section className="relative py-16 px-4 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-amber-900 to-stone-900 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-700/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
            <div className="p-8 md:p-12 text-left">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-amber-300 uppercase font-bold bg-amber-900/50 border border-amber-500/30 px-3 py-1.5 rounded-full mb-6">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                Sản Phẩm Signature
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Ladakh Series
              </h3>
              <p className="text-stone-300 font-sans text-sm md:text-base leading-relaxed mb-8">
                Tự hào là đơn vị tiên phong với kinh nghiệm tổ chức chuyên nghiệp, <strong>FIT Tour</strong> mang đến chuỗi hành trình khám phá Tiểu Tây Tạng độc quyền, thiết kế riêng để đảm bảo sức khỏe và trải nghiệm tối ưu cho mọi lứa tuổi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://thericetour.com/country/ladakh/" 
                  target="_blank"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  Xem Series Ladakh
                </a>
                <a 
                  href="https://thericetour.com/tour/tour-ladakh-roadtrip/" 
                  target="_blank"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Map className="w-4 h-4" />
                  Chi Tiết Tour 10N9Đ
                </a>
              </div>
            </div>
            
            <div className="h-64 md:h-full relative overflow-hidden">
              <img 
                src="https://media.fittour.vn/uploads/2024/06/deo-Umling-La.webp" 
                alt="Tour Ladakh" 
                className="w-full h-full object-cover object-center absolute inset-0 mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
