import { BookOpen } from 'lucide-react';

const ARTICLES = [
  {
    title: "Khách Hàng Quay Lại Tây Tạng & Kailash 3 Năm Liên Tiếp",
    url: "/khach-hang-quay-lai-tay-tang-kailash-3-nam",
    img: "https://media.fittour.vn/uploads/chi-ly-tai-deo-dolma-5600m.webp"
  },
  {
    title: "Nhật ký Ladakh và những ngày bầu trời ở gần hơn mặt đất",
    url: "/nhat-ky-kham-pha-ladakh",
    img: "https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp"
  },
  {
    title: "4 Năm, 20 Hành Trình và Những Niệm An Lành Gửi Lại Thế Giới",
    url: "/4-nam-20-hanh-trinh-cua-chi-thuy-cung-fittour",
    img: "https://media.fittour.vn/uploads/2026/01/4-nam-20-hanh-trinh-dong-hanh-chi-thuy-cung-fittour.webp"
  }
];

export default function RelatedArticles() {
  return (
    <section className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex items-center gap-3 mb-10">
          <BookOpen className="w-6 h-6 text-amber-700" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
            Bài Viết Liên Quan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ARTICLES.map((article, idx) => (
            <a 
              key={idx} 
              href={article.url}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 transform hover:-translate-y-1"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={article.img} 
                  alt={article.title}
                  width={600}
                  height={338} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-serif font-bold text-stone-800 group-hover:text-amber-700 transition-colors line-clamp-3 leading-snug">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
