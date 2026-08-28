import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

const ARTICLES = [
  {
    title: 'Vì Sao Ladakh Được Gọi Là Tiểu Tây Tạng Của Ấn Độ?',
    excerpt: 'Khám phá sự tương đồng sâu sắc về địa lý, văn hóa, tôn giáo và lối sống với vùng đất thiêng Tây Tạng qua những tu viện hàng trăm năm tuổi.',
    url: 'https://thericetour.com/vi-sao-ladakh-duoc-goi-la-tieu-tay-tang',
    image: 'https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-kham-pha-tu-vien-Hemis.webp',
    date: 'Tháng 6, 2026',
    readTime: '10 phút đọc'
  },
  {
    title: 'Mặc gì khi đi du lịch Ladakh để lên hình đẹp nhất?',
    excerpt: 'Ladakh có bảng màu đặc biệt, một bộ đồ phù hợp với bối cảnh sẽ tạo nên những bức ảnh để đời. Kinh nghiệm chọn trang phục roadtrip phóng khoáng.',
    url: 'https://thericetour.com/mac-gi-de-chup-hinh-dep-o-ladakh',
    image: 'https://media.fittour.vn/uploads/co-gai-chup-anh-tren-xe-roadtrip-ladakh-truoc-tu-vien-thiksey.webp',
    date: 'Tháng 5, 2026',
    readTime: '7 phút đọc'
  }
];

export default function RelatedArticles() {
  return (
    <section className="relative py-24 px-4 bg-white border-t border-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">Đọc Thêm</span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
              Có Thể Bạn Quan Tâm
            </h2>
          </div>
          <div className="hidden md:block">
            <BookOpen className="w-8 h-8 text-stone-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article, idx) => (
            <a 
              key={idx}
              href={article.url}
              target="_blank"
              className="group flex flex-col bg-stone-50 rounded-2xl overflow-hidden border border-stone-200/60 hover:border-amber-700/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-mono text-stone-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm font-sans text-stone-600 leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mt-auto">
                  Đọc ngay <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
