import { Check, X, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 bg-stone-100 border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">Internal Link / Phân tích</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Những điều khiến Phugtal khác biệt
          </h2>
          <p className="text-stone-600 font-serif italic max-w-2xl mx-auto">
            Tại sao lại chọn một hành trình trekking vất vả thay vì ngồi xe đến tận cửa những tu viện trung tâm nổi tiếng như Hemis hay Thiksey?
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
          <div className="grid grid-cols-3 bg-stone-950 text-white font-mono text-xs md:text-sm uppercase tracking-wider font-bold">
            <div className="p-4 border-r border-stone-800">Tiêu chí</div>
            <div className="p-4 border-r border-stone-800 bg-amber-900/40 text-amber-400">Tu viện Phugtal</div>
            <div className="p-4 text-stone-400">Hemis / Thiksey</div>
          </div>
          
          <div className="divide-y divide-stone-100 font-sans text-sm md:text-base">
            <div className="grid grid-cols-3 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center">Vị trí & Kiến trúc</div>
              <div className="p-4 md:p-5 text-stone-700 border-r border-stone-100 bg-amber-50/30 font-serif font-medium">Hang đá tự nhiên trên vách núi đứng</div>
              <div className="p-4 md:p-5 text-stone-500">Xây dựng trên đồi hoặc bãi đất bằng phẳng</div>
            </div>
            
            <div className="grid grid-cols-3 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center">Khả năng tiếp cận</div>
              <div className="p-4 md:p-5 text-stone-700 border-r border-stone-100 bg-amber-50/30 font-serif font-medium flex items-center gap-2">Trek 2-3 giờ (mới có đường xe tới Purne)</div>
              <div className="p-4 md:p-5 text-stone-500">Xe ô tô chở tới tận cổng tu viện</div>
            </div>

            <div className="grid grid-cols-3 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center">Lượng du khách</div>
              <div className="p-4 md:p-5 text-stone-700 border-r border-stone-100 bg-amber-50/30 font-serif font-medium">Rất ít, chủ yếu là trekker hoặc hành hương</div>
              <div className="p-4 md:p-5 text-stone-500">Đông đúc, là điểm du lịch phổ thông</div>
            </div>

            <div className="grid grid-cols-3 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center">Tính chất trải nghiệm</div>
              <div className="p-4 md:p-5 text-stone-700 border-r border-stone-100 bg-amber-50/30 font-serif font-medium">Nguyên sơ, tách biệt thế giới, "disconnect"</div>
              <div className="p-4 md:p-5 text-stone-500">Thương mại hóa hơn, tiện nghi cao</div>
            </div>
          </div>
          
          <div className="bg-stone-50 p-4 border-t border-stone-200 text-center">
            <a href="/tu-vien-ladakh" className="inline-flex items-center gap-2 text-amber-700 font-bold font-mono text-xs uppercase hover:text-amber-600 transition-colors">
              Đọc thêm về các tu viện khác ở Ladakh <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
