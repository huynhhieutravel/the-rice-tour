import { ArrowRight, BookOpen } from 'lucide-react';

export default function EmagazineCTA() {
  return (
    <section className="bg-stone-50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="md:w-2/5 h-64 md:h-auto self-stretch">
          <img 
            src="https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-va-nhung-ngay-tan-huong-o-Zanskar.webp" 
            alt="Emagazine Đặng Thùy Dương ở Zanskar" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="md:w-3/5 p-8 md:p-12 text-left">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold">E-Magazine Độc Quyền</span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Theo chân Đặng Thùy Dương khám phá Zanskar
          </h3>
          <p className="text-stone-400 font-sans text-sm md:text-base mb-8 leading-relaxed">
            Trải nghiệm hành trình bằng hình ảnh chân thực và câu chuyện sống động qua định dạng E-Magazine tương tác cao cấp. Một góc nhìn đậm chất điện ảnh về thung lũng bí ẩn nhất Ladakh.
          </p>
          <a 
            href="https://thericetour.com/emagazine-dang-thuy-duong-o-zanskar/"
            target="_blank"
            className="inline-flex items-center gap-2 bg-amber-500 text-stone-950 font-bold font-sans px-6 py-3.5 rounded-full hover:bg-amber-400 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            Đọc E-Magazine Ngay <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
