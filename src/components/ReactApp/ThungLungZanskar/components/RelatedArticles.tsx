import { ChevronRight } from 'lucide-react';

const SERIES = [
  {
    part: 1,
    title: 'Kinh nghiệm du lịch Zanskar thực tế',
    excerpt: 'Tổng hợp trọn bộ bí kíp khám phá thung lũng Zanskar khắc nghiệt nhưng đầy mê hoặc, cẩm nang chi tiết nhất cho chuyến hành trình.',
    url: 'https://thericetour.com/kinh-nghiem-du-lich-zanskar/',
    image: 'https://media.fittour.vn/uploads/2023/06/hanh-trinh-road-trip-vung-dat-zanskar-ladakh.webp',
  },
  {
    part: 2,
    title: 'Những địa điểm du lịch Zanskar không thể bỏ lỡ',
    excerpt: 'Điểm danh các tọa độ ngoạn mục nhất dọc theo tuyến đường huyền thoại, từ những ngọn đèo tuyết phủ đến thung lũng bí ẩn.',
    url: 'https://thericetour.com/dia-diem-du-lich-zanskar/',
    image: 'https://media.fittour.vn/uploads/2023/06/khung-canh-nui-non-dep-ngo-ngang-o-zanskar.webp',
  },
  {
    part: 3,
    title: 'Review chi tiết khách sạn tại Zanskar',
    excerpt: 'Đánh giá chân thực các điểm lưu trú, guesthouse và homestay tốt nhất tại vùng đất hoang sơ này.',
    url: 'https://thericetour.com/khach-san-tai-zanskar/',
    image: 'https://media.fittour.vn/uploads/2023/06/cam-nhan-nui-non-vung-zanskar.webp',
  },
  {
    part: 4,
    title: 'Khám phá ẩm thực Zanskar độc đáo',
    excerpt: 'Hương vị vùng cao có gì đặc sắc? Thưởng thức các món ăn truyền thống giúp người bản địa sinh tồn qua mùa đông khắc nghiệt.',
    url: 'https://thericetour.com/am-thuc-zanskar/',
    image: 'https://media.fittour.vn/uploads/2023/06/doi-cuu-ben-nui-o-zanskar.webp',
  },
  {
    part: 5,
    title: 'Trải nghiệm các lễ hội linh thiêng ở Zanskar',
    excerpt: 'Hòa mình vào không khí nhộn nhịp của các lễ hội tôn giáo, nơi điệu múa mặt nạ Cham truyền tải câu chuyện ngàn năm.',
    url: 'https://thericetour.com/le-hoi-o-zanskar/',
    image: 'https://media.fittour.vn/uploads/2023/06/nui-tuyen-vung-zanskar-ladakh.webp',
  },
  {
    part: 6,
    title: 'Hệ thống tu viện đồ sộ tại Zanskar',
    excerpt: 'Hành trình hành hương qua những gompa cổ kính nhất, khám phá kho tàng bích họa và di sản Phật giáo Tây Tạng.',
    url: 'https://thericetour.com/tu-vien-tai-zanskar/',
    image: 'https://media.fittour.vn/uploads/toan-canh-hop-luu-song-indus-va-zanskar-tai-sangam.webp',
  },
  {
    part: 8,
    title: 'Tu viện Stongdey: Điểm ngắm cảnh hoàn hảo',
    excerpt: 'Ngôi chùa cổ kính thứ hai của vùng Zanskar với tầm nhìn bao quát toàn bộ thung lũng Padum ngoạn mục.',
    url: 'https://thericetour.com/tu-vien-stongdey/',
    image: 'https://media.fittour.vn/uploads/2023/06/canh-dep-ngo-ngang-o-zanskar.webp',
  }
];

export default function RelatedArticles() {
  return (
    <section className="relative py-24 px-4 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 bg-amber-500 rounded-sm"></div>
          <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
            Bài Viết Cùng Series
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERIES.map((article, idx) => (
            <a 
              key={idx}
              href={article.url}
              target="_blank"
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="aspect-[1.5/1] overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-stone-900 font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md z-10">
                  Phần {article.part}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-sans font-bold text-lg text-sky-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm font-sans text-stone-500 leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-[13px] font-sans font-bold text-amber-700 mt-auto group-hover:text-amber-800 transition-colors">
                  Xem chi tiết <ChevronRight className="w-4 h-4 ml-0.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
