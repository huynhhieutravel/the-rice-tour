import { Check, X, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 bg-stone-100 border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">Internal Link / Phân tích</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Bản đồ các tu viện nổi bật tại Ladakh
          </h2>
          <p className="text-stone-600 font-serif italic max-w-2xl mx-auto">
            Mỗi tu viện tại Ladakh và Zanskar đều mang một dấu ấn riêng biệt, phản chiếu những thời kỳ lịch sử và đặc điểm địa hình khác nhau.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
          <div className="grid grid-cols-2 bg-stone-950 text-white font-mono text-xs md:text-sm uppercase tracking-wider font-bold">
            <div className="p-4 md:p-5 border-r border-stone-800">Tu Viện</div>
            <div className="p-4 md:p-5">Điểm Nổi Bật Đặc Trưng</div>
          </div>
          
          <div className="divide-y divide-stone-100 font-sans text-sm md:text-base">
            <div className="grid grid-cols-2 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-amber-700 border-r border-stone-100 flex items-center">Stongdey</div>
              <div className="p-4 md:p-5 text-stone-700 bg-amber-50/30">Tu viện lớn thứ hai của toàn vùng Zanskar với tầm nhìn ngoạn mục xuống thung lũng Doda.</div>
            </div>
            
            <div className="grid grid-cols-2 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center">Karsha</div>
              <div className="p-4 md:p-5 text-stone-600">Tu viện lớn nhất Zanskar, tựa như một thác nước trắng xóa đổ xuống vách núi sừng sững.</div>
            </div>

            <div className="grid grid-cols-2 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center"><a href="/tu-vien-phugtal" className="text-amber-700 hover:underline">Phugtal</a></div>
              <div className="p-4 md:p-5 text-stone-600">Tuyệt tác kiến trúc cổ nằm lọt thỏm hoàn toàn bên trong một hang động đá vôi khổng lồ.</div>
            </div>

            <div className="grid grid-cols-2 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center">Sani</div>
              <div className="p-4 md:p-5 text-stone-600">Một trong những tu viện cổ kính nhất (từ thời vương quốc Kushan thế kỷ 2) xây trên vùng đất bằng.</div>
            </div>

            <div className="grid grid-cols-2 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center">Hemis</div>
              <div className="p-4 md:p-5 text-stone-600">Nổi tiếng và giàu có bậc nhất, nơi tổ chức lễ hội Hemis Tsechu rực rỡ thu hút du khách quốc tế.</div>
            </div>

            <div className="grid grid-cols-2 hover:bg-stone-50 transition-colors">
              <div className="p-4 md:p-5 font-semibold text-stone-800 border-r border-stone-100 flex items-center">Thiksey</div>
              <div className="p-4 md:p-5 text-stone-600">Kiến trúc nhiều tầng giống hệt Potala ở Tây Tạng, nhìn ra thung lũng Indus màu mỡ bát ngát.</div>
            </div>
          </div>
          
          <div className="bg-stone-50 p-4 border-t border-stone-200 text-center">
            <a href="/tu-vien-ladakh" className="inline-flex items-center gap-2 text-amber-700 font-bold font-mono text-xs uppercase hover:text-amber-600 transition-colors">
              Đọc thêm chi tiết về các tu viện Zanskar <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
