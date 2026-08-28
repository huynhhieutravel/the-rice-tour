import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Route, Star, HeartPulse, MountainSnow, Tent, ArrowRight, Sparkles, ChevronDown, PhoneCall, MapPin, ThumbsUp, Quote
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Tại sao nên chọn đi Ladakh cùng Fit Tour thay vì tự túc?",
    answer: "Fit Tour có kinh nghiệm nhiều năm tổ chức các đoàn thám hiểm Himalaya. Chúng tôi lo toàn bộ thủ tục cấp phép vùng nhạy cảm, có Local Guide và Road Captain thổ địa, đội ngũ y tế sơ cấp cứu, và chọn lọc dịch vụ lưu trú chất lượng để đảm bảo sức khoẻ cho du khách."
  },
  {
    question: "Fit Tour chuẩn bị gì để đảm bảo an toàn về sốc độ cao (AMS)?",
    answer: "Xe luôn trang bị bình oxy y tế lớn sục trực tiếp và túi sơ cứu chuyên dụng. HDV và Local Guide đi cùng được huấn luyện kỹ năng xử lý say độ cao. Lịch trình được thiết kế chuẩn y khoa, nghỉ ngơi thích nghi tại Leh 48 tiếng trước khi lên đèo cao."
  },
  {
    question: "Ăn uống tại Ladakh có hợp khẩu vị không?",
    answer: "Các bữa ăn được Fit Tour lên thực đơn kỹ lưỡng, kết hợp ẩm thực địa phương và các món ăn hợp khẩu vị người Việt. Đặc biệt, chúng tôi có đầu bếp chăm lo các bữa ăn nóng sốt tại các điểm cắm trại hoang sơ như hồ Pangong hay thung lũng Nubra."
  },
  {
    question: "Visa đi Ladakh do Fit Tour lo từ A-Z phải không?",
    answer: "Đúng vậy. Fit Tour hỗ trợ làm trọn gói e-Tourist Visa Ấn Độ một cách nhanh chóng. Du khách chỉ cần cung cấp hộ chiếu scan và ảnh thẻ phông trắng. Chúng tôi cũng lo toàn bộ giấy phép thông hành (Inner Line Permit) cho các vùng cấm tại Ladakh."
  },
  {
    question: "Thủ tục đăng ký tour như thế nào?",
    answer: "Bạn chỉ cần để lại thông tin trên form Đăng Ký Đặt Tour. Chuyên viên tư vấn Ladakh của chúng tôi sẽ liên hệ trong vòng 15 phút qua Zalo hoặc điện thoại để thiết kế lịch trình phù hợp nhất với nhu cầu của bạn."
  }
];

const GOOGLE_REVIEWS = [
  {
    name: "Mai Nguyễn",
    date: "3 tháng trước",
    text: "Hành trình Ladakh thật sự đáng nhớ. Cảm ơn Fit Tour đã chuẩn bị bình oxy, thuốc men, và thức ăn siêu ngon. Team chăm sóc tận tình từ A-Z!",
    rating: 5
  },
  {
    name: "Tuấn Trần",
    date: "5 tháng trước",
    text: "Lần đầu đi Himalaya cũng hơi rén vụ sốc độ cao, nhưng nhờ lịch trình hợp lý của Fit Tour mà cả đoàn an toàn. Road Captain rất chuyên nghiệp.",
    rating: 5
  },
  {
    name: "Hồng Nhung",
    date: "1 năm trước",
    text: "Tour chất lượng cao, từ khách sạn Leh đến camp ở Pangong đều rất tốt so với mặt bằng chung. Sẽ ủng hộ Fit Tour các tour khác như Bhutan.",
    rating: 5
  }
];

const TOURS = [
  {
    id: "tour-1",
    title: "Tour Ladakh Roadtrip từ TPHCM",
    duration: "8 Ngày 7 Đêm",
    price: "Khởi hành từ TP.HCM",
    vibe: "Roadtrip trọn vẹn sa mạc lạnh",
    highlights: ["Đèo Khardung La 5.359m", "Hồ Pangong Tso", "Thung lũng Nubra"],
    tag: "Được yêu thích nhất",
    url: "https://thericetour.com/tour/tour-ladakh-roadtrip"
  },
  {
    id: "tour-2",
    title: "Tour Ladakh từ Hà Nội",
    duration: "10 Ngày 10 Đêm",
    price: "Khởi hành từ Hà Nội",
    vibe: "Hành trình mây trời rực lửa",
    highlights: ["Tu viện Thiksey & Hemis", "Cắm trại hồ muối Pangong", "Sông Indus huyền thoại"],
    tag: "Khởi hành Hà Nội",
    url: "https://thericetour.com/tour/tour-ladakh-khoi-hanh-ha-noi"
  },
  {
    id: "tour-3",
    title: "Tour Ladakh Mùa Lễ Hội Hemis",
    duration: "10 Ngày 10 Đêm",
    price: "Trải nghiệm văn hóa",
    vibe: "Lễ hội mặt nạ linh thiêng ngàn năm",
    highlights: ["Lễ hội Hemis huyền bí", "Múa Cham cổ truyền", "Tu viện cổ nghìn năm"],
    tag: "Trải nghiệm văn hóa",
    url: "https://thericetour.com/tour/tour-ladakh-mua-le-hoi-hemis"
  },
  {
    id: "tour-4",
    title: "Motor Trip Ladakh 8N7Đ",
    duration: "8 Ngày 7 Đêm",
    price: "Motor Trip trọn gói",
    vibe: "Cung đường mô tô huyền thoại",
    highlights: ["Royal Enfield xuyên đèo", "Khardung La & Chang La", "Nubra Valley hoang dã"],
    tag: "Motor Trip",
    url: "https://thericetour.com/tour/motor-trip-ladakh"
  },
  {
    id: "tour-5",
    title: "Motor Ladakh Chinh Phục Đèo Umlingla",
    duration: "10 Ngày 9 Đêm",
    price: "Motor Trip đỉnh cao",
    vibe: "Thử thách cực hạn đỉnh đèo cao nhất",
    highlights: ["Đèo Umlingla 5.883m", "Sa mạc Hanle thiên văn", "Nhiệt độ cực hạn âm độ"],
    tag: "Thử thách mạo hiểm",
    url: "https://thericetour.com/tour/tour-motor-ladakh-10n9d-chinh-phuc-deo-cao-nhat"
  }
];

const REASONS = [
  {
    id: 1,
    title: 'Đi cùng thổ địa và trải nghiệm chất lượng',
    tag: 'LOCAL EXPERTISE',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    icon: Compass,
    fact: 'Đi cùng một thổ địa ở Ladakh sẽ mang thật nhiều lợi thế: Khám phá những vùng đất bản địa theo cách hoàn toàn mới, biết những nơi ăn uống đặc biệt giúp tiết kiệm chi phí, và tận hưởng an toàn tối đa.',
    hazard: 'Chỉ thổ địa mới hiểu những địa điểm tốt nhất và những điều kiện để kích hoạt điều đó (như nơi ngắm hoàng hôn đẹp nhất hay những địa điểm ít ai biết đến). Trải nghiệm địa phương có lẽ là điều tuyệt nhất để học hỏi.',
    imageUrl: 'https://media.fittour.vn/uploads/legacy/nguoi-dan-o-ladakh.webp'
  },
  {
    id: 2,
    title: 'Hành trình độc đáo theo Guu',
    tag: 'TAILOR-MADE',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    icon: Route,
    fact: 'Hành trình Fit Tour tổ chức các tuyến điểm và hoạt động tuỳ chỉnh theo mùa lễ hội, thời tiết để khai thác những điểm đến tốt nhất.',
    hazard: 'Chúng tôi đa dạng nhu cầu hoạt động theo guu riêng của khách du lịch: Private Tour, Adventure Trip, BikeTrip, Culture Tour, Tour Hành Hương, Roadtrip...',
    imageUrl: 'https://media.fittour.vn/uploads/hanh-trinh-kham-pha-ladakh-cung-fit-tour.webp'
  },
  {
    id: 3,
    title: 'Dịch vụ được chọn lọc kỹ lưỡng',
    tag: 'PREMIUM SERVICE',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
    icon: Star,
    fact: 'Các điểm đến, dịch vụ lưu trú và ăn uống tại Ladakh đều được khảo sát và lựa chọn cẩn thận để đem lại cho du khách cảm giác thoải mái nhất.',
    hazard: 'Trước khi lựa chọn, Fit Tour tiến hành kiểm tra, đánh giá chất lượng phòng, tiện nghi và vệ sinh an toàn thực phẩm. Phản hồi tốt của khách hàng là thước đo quan trọng để tiếp tục cải thiện.',
    imageUrl: 'https://media.fittour.vn/uploads/2022/06/trai-nghiem-cuoi-lac-da-o-thung-lung-nubra-ladakh.webp'
  },
  {
    id: 4,
    title: 'Chăm sóc "tận răng" và an toàn',
    tag: 'FULL CARE',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    icon: HeartPulse,
    fact: 'Luôn có HDV và Local Guide đi cùng. Trang bị đầy đủ sơ cấp cứu y tế, bình oxy và kỹ năng xử lý say độ cao trong suốt chuyến đi.',
    hazard: 'Các loại giấy phép nhập cảnh luôn được chuẩn bị sẵn. Đặc biệt, có đầu bếp chuyên nghiệp đi cùng đoàn nấu ăn hoặc phục vụ các món nóng sốt hợp khẩu vị người Việt tại các điểm cắm trại. Đối tác đại diện tại Ladakh là người địa phương, đảm bảo an toàn tuyệt đối.',
    imageUrl: 'https://media.fittour.vn/uploads/bep-nha-hang-wilderness-camp-diskit.webp'
  },
  {
    id: 5,
    title: '"Bội thực" các cảnh đẹp hùng vĩ',
    tag: 'SCENIC BEAUTY',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
    icon: MountainSnow,
    fact: 'Fit Tour luôn đảm bảo cho khách hàng một hành trình Roadtrip độc đáo với những cảnh đẹp hùng vĩ nhất ở Ladakh.',
    hazard: 'Đặc biệt, chúng tôi luôn chọn cho khách hàng cung đường "Signature" nhất, dưới sự dẫn dắt của HDV thông thạo đường xá, thời tiết ở Himalaya, đảm bảo trọn vẹn và an toàn.',
    imageUrl: 'https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp'
  },
  {
    id: 6,
    title: 'Trải nghiệm văn hoá nguyên bản',
    tag: 'AUTHENTIC',
    badgeColor: 'bg-stone-100 text-stone-900 border-stone-200',
    icon: Tent,
    fact: 'Tham gia dự lễ Puja và gặp gỡ các Lạt Ma địa phương, để khám phá sâu hơn về tín ngưỡng và tâm linh của người dân Ladakh.',
    hazard: 'Sắp xếp thăm thú các tu viện cổ kính, tận hưởng trà Bơ và mang đến những cuộc gặp gỡ các Lạt Ma đáng kính tại vùng đất linh thiêng này.',
    imageUrl: 'https://media.fittour.vn/uploads/legacy/tu-vien-diskit-gompa.webp'
  },
  {
    id: 7,
    title: 'Đơn vị tiên phong khai phá Ladakh cho khách Việt',
    tag: 'PIONEER',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-200',
    icon: MapPin,
    fact: 'FIT Tour không phải đơn vị bán tour Ladakh theo trào lưu. Đội ngũ đã nhiều lần khảo sát, tổ chức Roadtrip, Motor Trip và các hành trình trải nghiệm chuyên sâu tại vùng Himalaya.',
    hazard: 'Nhờ kinh nghiệm thực chiến, hành trình được tối ưu về thời gian, độ cao, sức khỏe và trải nghiệm, giúp du khách tận hưởng Ladakh một cách an toàn hơn.',
    imageUrl: ''
  },
  {
    id: 8,
    title: 'Khách hàng đã trải nghiệm và quay trở lại',
    tag: 'TRUSTED',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-200',
    icon: ThumbsUp,
    fact: 'Những đánh giá thực tế từ khách hàng là thước đo rõ ràng nhất cho chất lượng dịch vụ. Sự hài lòng là ưu tiên hàng đầu.',
    hazard: 'Nhiều du khách tiếp tục đồng hành cùng FIT Tour ở các hành trình khác như Xinjiang, Tibet, Ladakh, Bhutan hay Nepal sau chuyến đi đầu tiên.',
    imageUrl: 'https://media.fittour.vn/uploads/doan-khach-fit-tour-kham-pha-nubra-valley-ladakh.webp'
  }
];

interface ReasonsGuideProps {
  onTourSelect?: (tour: any) => void;
  seoDescription?: string;
}

export default function ReasonsGuide({ onTourSelect, seoDescription }: ReasonsGuideProps = {}) {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const detailRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const scrollToDetail = (id: number) => {
    setActiveTab(id);
    const element = detailRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="pillar-guide-section" className="bg-stone-50 py-16 px-4 md:px-8 border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        
        {/* SECTION MASTER HEADER - SEO & GEO OPTIMIZATION OF TOP 11 CONDITIONS */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-900/10 text-xs font-mono font-bold uppercase tracking-wider mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>BẢO CHỨNG CHẤT LƯỢNG HÀNH TRÌNH TỪ FIT TOUR</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-none mb-4">
            Top 8 Lý Do Chọn Fit Tour Khi Du Lịch Ladakh
          </h1>
          <p className="font-serif text-lg italic text-amber-800 leading-relaxed max-w-2xl mx-auto">
            "Đồng hành cùng chuyên gia lữ hành Fit Tour để tận hưởng trọn vẹn hành trình Himalaya hùng vĩ một cách an toàn và chất lượng nhất"
          </p>
          <div className="w-24 h-1 bg-amber-800 mx-auto my-6 rounded-full"></div>
          <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-3xl mx-auto leading-relaxed text-center">
            {seoDescription ? (
              seoDescription
            ) : (
              <>
                Chúng tôi chuyển hóa triết lý lữ hành của <b className="text-stone-900">Fit Tour – Du lịch có Guu</b> thành những hành trình độc bản. Dưới đây là 
                8 giá trị cốt lõi bạn sẽ nhận được khi giao phó chuyến phiêu lưu Ladakh cho những chuyên gia tận tâm nhất.
              </>
            )}
          </p>
        </div>

        {/* 1. INTERACTIVE NAVIGATION INDEX (1 to 6) */}
        <div className="mb-14 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm text-left">
          <div className="flex items-center gap-2 mb-4 border-b border-stone-100 pb-3">
            <Compass className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider">
              8 Lý Do Chọn Fit Tour Ladakh:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {REASONS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToDetail(item.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-sm text-left font-sans transition-all duration-350 cursor-pointer ${
                    isActive 
                      ? 'bg-stone-950 text-white border-stone-950 font-semibold shadow-md scale-102 font-mono'
                      : 'bg-stone-50 hover:bg-amber-50 hover:text-amber-900 text-stone-700 border-stone-200'
                  }`}
                >
                  <span className="font-mono text-xs font-black px-1.5 py-0.5 rounded bg-amber-900 text-white">
                    {item.id.toString().padStart(2, '0')}
                  </span>
                  <span className="truncate leading-tight font-medium">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. SPECIFIC RICH DETAIL GRID OF 6 REASONS */}
        <div className="space-y-8 mb-20 text-left">
          {REASONS.map((item) => {
            const IconComp = item.icon;
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                ref={(el) => (detailRefs.current[item.id] = el)}
                id={`detail-item-${item.id}`}
                className={`bg-white rounded-3xl border p-6 md:p-8 shadow-sm transition-all duration-300 relative overflow-hidden ${
                  isActive ? 'border-amber-800 ring-2 ring-amber-800/10 shadow-md' : 'border-stone-250 hover:border-amber-700/20'
                }`}
              >
                {/* Visual Number Label */}
                <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 font-mono text-[70px] md:text-[85px] font-black text-stone-100/70 select-none z-0">
                  {item.id.toString().padStart(2, '0')}
                </div>

                <div className="relative z-10 flex flex-col gap-6 justify-between items-start">
                  
                  {/* Icon + Core titles */}
                  <div className="w-full space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-stone-900 text-amber-500 rounded-2xl flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`inline-block font-mono text-[9px] uppercase font-bold border rounded-full px-2.5 py-0.5 mb-1 ${item.badgeColor}`}>
                          {item.tag}
                        </span>
                        <h2 className="font-serif text-lg md:text-2xl font-black text-stone-900 leading-tight">
                          LÝ DO {item.id.toString().padStart(2, '0')}: {item.title}
                        </h2>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-sans text-sm mt-4">
                      <div className="bg-stone-50 border border-stone-200/65 p-5 rounded-2xl">
                        <strong className="text-stone-900 block font-mono text-[10px] uppercase text-emerald-800 mb-2">■ Điểm nổi bật & Khác biệt:</strong>
                        <p className="text-stone-700 leading-relaxed text-justify">{item.fact}</p>
                      </div>

                      <div className="bg-rose-50/60 border border-rose-100 p-5 rounded-2xl">
                        <strong className="text-rose-950 block font-mono text-[10px] uppercase text-rose-800 mb-2">★ Giá trị trải nghiệm:</strong>
                        <p className="text-rose-800 leading-relaxed text-justify">{item.hazard}</p>
                      </div>
                    </div>

                    {item.id === 1 ? (
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="relative aspect-[3/4] md:aspect-[4/3] overflow-hidden rounded-2xl group shadow-sm border border-stone-200">
                          <img src="https://media.fittour.vn/uploads/thuptsan-pangong-lake-guide.webp" alt="Thuptsan - Cultural Guide" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-4 w-full text-center">
                            <p className="text-white font-serif font-bold text-lg mb-0.5">Thuptsan</p>
                            <p className="text-stone-300 text-[10px] font-mono tracking-widest uppercase">Cultural Guide</p>
                          </div>
                        </div>
                        <div className="relative aspect-[3/4] md:aspect-[4/3] overflow-hidden rounded-2xl group shadow-sm border border-stone-200">
                          <img src="https://media.fittour.vn/uploads/lulu-road-captain-ladakh.webp" alt="Lulu - Road Captain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-4 w-full text-center">
                            <p className="text-white font-serif font-bold text-lg mb-0.5">Lulu</p>
                            <p className="text-stone-300 text-[10px] font-mono tracking-widest uppercase">Road Captain</p>
                          </div>
                        </div>
                      </div>
                    ) : item.imageUrl ? (
                      <div className="mt-4 rounded-2xl overflow-hidden border border-stone-200/65 shadow-sm relative group">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-auto max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : null}

                    {item.id === 8 && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {GOOGLE_REVIEWS.map((review, idx) => (
                          <div key={idx} className="bg-stone-50 border border-stone-200 p-5 rounded-2xl relative shadow-sm hover:shadow-md transition">
                            <Quote className="w-8 h-8 text-stone-200/50 absolute right-4 top-4" />
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                              <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-sm uppercase shadow-sm">
                                {review.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-bold text-xs text-stone-900">{review.name}</div>
                                <div className="flex gap-0.5 text-amber-500 mt-1">
                                  {Array.from({length: review.rating}).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-stone-600 leading-relaxed font-medium relative z-10">"{review.text}"</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 3. HIGH-CONVERSION CTA TOUR CARDS - Direct link to optimized tour options */}
        <div id="optimized-tour-cards" className="mt-20 border-t border-stone-200 pt-16 max-w-6xl mx-auto -mx-4 md:-mx-8 px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">HÀNH TRÌNH KHÁM PHÁ TIÊN PHONG</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
              5 Chương Trình Tour Ladakh Khởi Hành Thu 2026
            </h2>
            <div className="w-12 h-px bg-amber-800 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOURS.map(tour => (
              <div 
                key={tour.id}
                id={`tour-card-${tour.id}`}
                className="bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-amber-700/20 transition-all duration-300 relative text-left"
              >
                {/* Badge decoration */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-mono font-bold bg-amber-900 text-white px-2.5 py-0.5 rounded-full uppercase">
                    {tour.tag}
                  </span>
                  <span className="font-mono text-[10px] text-stone-700 font-bold">{tour.duration}</span>
                </div>

                <div className="mb-6">
                  <h3 className="font-serif text-lg font-black text-stone-900 leading-tight">
                    {tour.title}
                  </h3>
                  <p className="font-sans text-[11px] text-amber-800 italic mt-1 mb-4">
                    "{tour.vibe}"
                  </p>
                  
                  {/* Bullet points highlights */}
                  <ul className="space-y-1.5 text-xs text-stone-600 font-sans">
                    {tour.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0"></span>
                        <span className="overflow-hidden truncate whitespace-nowrap max-w-full font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[9px] text-stone-700 font-mono block uppercase">{tour.price}</span>
                    {tour.url && <a href={tour.url} target="_blank" rel="noopener" className="text-[10px] text-amber-800 font-mono font-bold hover:text-amber-600 underline underline-offset-2">Xem chi tiết →</a>}
                  </div>
                  
                  <button 
                    onClick={() => {
                      if (onTourSelect) {
                        onTourSelect(tour);
                      }
                    }}
                    className="flex items-center gap-1 bg-stone-950 hover:bg-amber-800 text-white hover:text-amber-50 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold tracking-wider transition cursor-pointer shadow-sm"
                  >
                    <span>Yêu cầu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Links to Ladakh pages */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="https://thericetour.com/country/ladakh/" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 bg-stone-950 hover:bg-amber-800 text-white hover:text-amber-50 rounded-xl px-5 py-3 text-xs font-mono font-bold tracking-wider transition shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Xem tất cả hành trình Ladakh</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="https://thericetour.com/du-lich-ladakh" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl px-5 py-3 text-xs font-mono font-bold tracking-wider transition border border-stone-200 shadow-xs">
              <Compass className="w-3.5 h-3.5" />
              <span>Tổng quan Du lịch Ladakh</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3. FAQ ACCORDION SECTION WITH HIGH-END RICH SCHEMA INTEGRATION */}
        <div id="faq-pillar-accordion" className="mt-20 border-t border-stone-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left intro text (4 columns) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-800 font-bold block">HỎI ĐÁP PHÙ HỢP CỰC ĐẠI</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
                Giải Đáp Thắc Mắc Trước Khi Lên Đường
              </h2>
              <p className="text-xs font-sans text-stone-600 leading-relaxed text-justify">
                Tất cả các lo âu về thủ tục, bồi hoàn quốc tế, ăn uống 
                và sự an toàn đều được đội ngũ chuyên gia lữ hành Fit Tour giải đáp súc tích.
              </p>
              
              <div className="h-px bg-stone-200 my-4"></div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://thericetour.com/msg"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-xs font-mono text-amber-900 hover:text-amber-700 font-bold cursor-pointer bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Nhắn tin tư vấn ngay</span>
                </a>
                <a 
                  href="https://thericetour.com/zalo"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-xs font-mono text-blue-900 hover:text-blue-700 font-bold cursor-pointer bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5 transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Chat qua Zalo</span>
                </a>
              </div>
            </div>

            {/* Right Accordion flow (8 columns) */}
            <div className="lg:col-span-8 space-y-3">
              {FAQS.map((faq, index) => {
                const isExpanded = expandedFaq === index;
                return (
                  <div 
                    key={index}
                    id={`faq-accordion-item-${index}`}
                    className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
                  >
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-stone-900 text-sm md:text-base select-none gap-4 hover:bg-amber-50/20 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-amber-800 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs md:text-sm font-sans text-stone-600 leading-relaxed border-t border-stone-150 bg-white">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
