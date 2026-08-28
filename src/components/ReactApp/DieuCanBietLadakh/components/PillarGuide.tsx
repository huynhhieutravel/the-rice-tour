import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CloudSun, FileText, Compass, DollarSign, Briefcase, HelpCircle, 
  ChevronDown, PhoneCall, ArrowRight, CheckCircle2, Ticket, AlertTriangle, 
  Map, Sunrise, Snowflake, ShieldCheck, Heart, Sparkles, Wifi, CreditCard,
  Utensils, Activity, Home, Shirt, Backpack, Shield
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Bị sốc độ cao (AMS) khi đi Ladakh có nguy hiểm không? Làm sao phòng tránh?",
    answer: "Sốc độ cao do thiếu oxy (AMS) là hiện tượng phổ biến khi tăng đột ngột lên trên 3.000m. Cách phòng tránh tốt nhất: dành trọn vẹn 36-48 giờ đầu tiên nghỉ ngơi tuyệt đối tại Leh; uống thuốc Diamox theo hướng dẫn y tế; tránh tắm vòi sen nước nóng ngay ngày đầu; tránh vận động mạnh, kiêng rượu bia; luôn giữ ấm đầu cổ và uống nước ấm liên tục."
  },
  {
    question: "Xin visa đi Ladakh có phức tạp không? Mất bao nhiêu lâu?",
    answer: "Thực tế rất đơn giản! Du khách chỉ cần xin e-Tourist Visa trực tuyến của chính phủ Ấn Độ với hộ chiếu scan và ảnh thẻ phông trắng tỉ lệ 2x2. Thời gian duyệt nhanh chóng từ 48h đến 72h làm việc. Fit Tour hỗ trợ làm trọn gói nhanh chóng cho khách hàng."
  },
  {
    question: "Tại sao eSIM hay sim du lịch Ấn Độ thông thường không dùng được ở Ladakh?",
    answer: "Ladakh là vùng giáp biên giới quốc phòng nhạy cảm gắt gao giữa Ấn Độ và Trung Quốc. Do đó, chính quyền Ấn Độ phong tỏa toàn bộ sim trả trước (Prepaid) của du khách quốc tế lẫn sim nội địa vùng khác đem tới. Bạn bắt buộc phải dùng Sim trả sau (Postpaid) đăng ký trực tiếp bằng hộ chiếu tại Leh để có sóng BSNL/Airtel."
  },
  {
    question: "Thời điểm nào trong năm đi du lịch Ladakh là lý tưởng và an toàn nhất?",
    answer: "Mùa vàng đẹp nhất là từ tháng 6 đến tháng 10 hàng năm. Lúc này thời tiết ấm dần từ 15-25 độ vào ban ngày, trời xanh thẳm tràn ngập nắng, các chặn đèo mở cửa hoàn toàn, thung lũng sông Indus ngập sắc vàng óng của lá thu phong cảnh vô cùng rực rỡ dã ngoại."
  },
  {
    question: "Fit Tour bảo đảm an toàn sức khỏe cho khách du lịch U70 như thế nào?",
    answer: "Fit Tour là đơn vị tiên phong có tiêu chuẩn y tế khắt khe: Toàn bộ đoàn được trang bị máy đo huyết áp, đo nồng độ oxy SPO2 hàng ngày; xe SUV đi kèm bình oxy y tế sục trực tiếp và túi thuốc sơ cứu chuyên sâu chống sốc cao độ. Lộ trình di chuyển luôn được giãn cách dài thong thả để giữ ổn định nhịp thở phổi khách lớn tuổi."
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

const ESSENTIALS = [
  {
    id: 1,
    icon: Activity,
    title: "Sốc Độ Cao (AMS) – Hiểm Họa Vô Hình Ranh Giới 3.000m",
    tag: "Sức khỏe số 1",
    badgeColor: "bg-red-50 text-red-800 border-red-200/50",
    fact: "Sân bay Leh nằm ở độ cao 3.500m. Không khí loãng chỉ bằng 60% so với đồng bằng, cơ thể đột ngột thiếu oxy nghiêm trọng.",
    hazard: "Khách vừa đáp máy bay quá phấn khích lội bộ ngay lập tức, hoặc tắm vòi sen nước nóng ngày đầu làm giãn mạch nhanh gây tụt oxy não, chóng mặt dữ dội, khó thở và buồn nôn.",
    solution: "Dành trọn 36-48 tiếng đầu tiên ngủ nghỉ tĩnh lặng tuyệt đối tại khách sạn Leh. Uống đủ 3-4 lít nước ấm (không uống nước lạnh buốt). Tuyệt đối không tắm ngày đầu. Sử dụng Diamox dưới sự hướng dẫn y tế chuyên khoa trước khởi hành.",
    expertTip: "Fit Tour luôn bố trí y tế đo chỉ số SPO2 & huyết áp mỗi sáng cho du khách, có bình oxy sục túc trực 24/7 trên xe SUV đồng hành.",
    linkUrl: "https://thericetour.com/say-do-cao-ladakh",
    linkText: "Cẩm nang Sinh tồn Hội Chứng Sốc Độ Cao (AMS)",
    imageUrl: "https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp"
  },
  {
    id: 2,
    icon: CloudSun,
    title: "Khí Hậu Sa Mạc Khô Cực Đoan – Chênh Lệch Nhiệt Lượng Kỷ Lục",
    tag: "Thời tiết & Da",
    badgeColor: "bg-orange-50 text-orange-800 border-orange-200/50",
    fact: "Ladakh có kiểu khí hậu sa mạc lạnh khô. Ban ngày nắng hanh giòn giã đến 25°C với chỉ số tia cực tím cực mạnh, ban đêm lập tức tụt âm sâu dưới 0°C.",
    hazard: "Khô nứt nẻ chảy máu môi dã ngoại, chảy cam do vỡ mao mạch mỏng, sạm da cháy nắng rộp đỏ, đau rát họng kéo dài.",
    solution: "Bắt buộc dùng kem chống nắng phổ rộng SPF 50+ bôi dặm mỗi 3-4 tiếng. Đeo kính mát râm phân cực chống mù sương tuyết. Thoa son sáp dưỡng ẩm thường trực và dùng xịt mũi nước muối biển sinh lí tránh khô rát.",
    expertTip: "Mùa vàng dễ chịu nhất cho hệ hô hấp của phượt thủ và khách trung niên U70 là từ giữa tháng 6 đến giữa tháng 10 hàng năm.",
    imageUrl: "https://media.fittour.vn/uploads/khu-cuoi-lac-da-hai-buouu-tai-thung-lung-nubra.webp",
    linkUrl: "https://thericetour.com/ladakh-lanh-nhu-the-nao",
    linkText: "Ladakh Lạnh Như Thế Nào? Chuẩn Bị Ra Sao?"
  },
  {
    id: 3,
    icon: Compass,
    title: "Giao Thông Đường Đèo Hiểm Trở – Tuyệt Đối Có Tài Xế Bản Địa",
    tag: "Di chuyển an toàn",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200/50",
    fact: "Đường đèo Khardung La (5.359m) và Chang La (5.360m) là những cung đường núi ngoạn mục nhất thế giới, đôi chỗ hẹp và uốn khúc liên tục qua sườn núi.",
    hazard: "Tự thuê xe máy hoặc ô tô tự lái khi chưa quen tay lái nghịch hướng (xe Ấn lái phải), chưa thạo đường đèo dốc liên tiếp — rất dễ gặp nguy hiểm không đáng có.",
    solution: "Luôn di chuyển bằng xe SUV gầm cao dẫn động 2 cầu (Innova Crysta hoặc Mahindra Scorpio) do tài xế bản địa giàu kinh nghiệm cầm lái. An toàn tuyệt đối, bạn chỉ cần ngồi ngắm cảnh và tận hưởng.",
    expertTip: "Tất cả các bác tài của Fit Tour đều là người bản địa Leh với hàng chục năm kinh nghiệm lái đèo cao, thông thuộc từng khúc cua, từng điểm sạt lở — bạn hoàn toàn yên tâm.",
    imageUrl: "https://media.fittour.vn/uploads/2023/06/doan-duong-cao-toc-di-zanskar.webp"
  },
  {
    id: 4,
    icon: Home,
    title: "Tiêu Chuẩn Đêm Nghỉ Lưu Trú – Homestay Đến Lều Glamping Bờ Hồ",
    tag: "Lưu trú",
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200/50",
    fact: "Đại đa số nhà nghỉ tại trung tâm Leh không lắp đặt thang máy do luật quy hoạch chiều cao. Đêm nghỉ ven hồ muối Pangong Tso nhiệt độ hạ cực thấp.",
    hazard: "Leo cầu thang gỗ cao gây dồn nén hồi hộp tim, mất ngủ lạnh thấu xương tại lều bạt ven hồ Pangong rách toạc gió mùa.",
    solution: "Lựa chọn các khách sạn 3-4 sao tiện nghi tốt có hệ thống sưởi sàn trung tâm ấm áp. Khi ngủ lều hồ Pangong, bắt buộc chọn trại Glamping VIP kín gió bọc nhiều lớp vách cách nhiệt kĩ càng.",
    expertTip: "Fit Tour cam kết trang bị chăn đệm sưởi điện rực túc trực tại lều ven hồ Pangong, bảo hộ giấc ngủ êm đềm dưới dải Ngân hà cho du khách.",
    imageUrl: "https://media.fittour.vn/uploads/khu-leu-nghi-duong-wilderness-camp-diskit.webp",
    links: [
      { url: "https://thericetour.com/wilderness-camp-diskit", text: "Khu Lều Nghỉ Wilderness Camp Diskit" },
      { url: "https://thericetour.com/sama-resort-pangong", text: "Sama Resort & Spa Ven Hồ Pangong" }
    ]
  },
  {
    id: 5,
    icon: Shirt,
    title: "Công Thức Mặc Quần Áo 'Hành Tây' Nhiều Lớp Giữ Nhiệt",
    tag: "Trang phục dã ngoại",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/50",
    fact: "Lên đèo cao gió quất lạnh run cầm cập, bước vào khoang xe SUV máy sưởi ấm nóng hừng hực. Thân nhiệt cần điều tiết uyển chuyển tức thì.",
    hazard: "Mặc duy nhất một chiếc áo phao to sụ khó cởi ra khoác vào liên tục, dẫn đến đổ mồ hôi bí bách thấm nguợc lại cơ thể gây viêm phổi cấp.",
    solution: "Áp dụng cấu trúc 3 lớp: Lớp sát da (thun giữ nhiệt Merino ôm sát) → Lớp sưởi cách nhiệt tốt (nỉ cổ cao, áo lông vũ siêu nhẹ) → Lớp bảo vệ chống nước cản gió ngoài cùng. Khăn len Yak vừa giữ ấm cũng rất thời trang khi chụp ảnh ở Ladakh.",
    expertTip: "Mẹo hay: Mua sẵn túi giữ nhiệt (hand warmer) bỏ túi áo khoác để sưởi tay khi lên đèo. Tại chợ Leh có bán khăn len Yak Pashmina chính hiệu giá rất hợp lý — vừa giữ ấm tuyệt vời vừa làm quà tặng ý nghĩa.",
    imageUrl: "https://media.fittour.vn/uploads/doan-khach-fit-tour-kham-pha-nubra-valley-ladakh.webp",
    linkUrl: "https://thericetour.com/ladakh-lanh-nhu-the-nao",
    linkText: "Ladakh Lạnh Như Thế Nào? Mặc Gì Cho Ấm?"
  },
  {
    id: 6,
    icon: Backpack,
    title: "Balo Hành Lý Dã Ngoại & Bình Giữ Nhiệt Khẩn Thiết",
    tag: "Hành trang cá nhân",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200/50",
    fact: "Xe SUV chở hành lý cồng kềnh buộc trên nóc mui xe rất khó gỡ xuống dọc đường đi chuyển. Bạn luôn cần balo riêng rẽ cận kề.",
    hazard: "Khát nước lạnh buốt dã ngoại gây rộp cuống họng phế quản nhanh chóng dẫn đến sốc độ cao; thiếu thuốc men y tế cá nhân khẩn cấp.",
    solution: "Chuẩn bị 01 balo nhỏ đeo vai đựng: bình giữ nhiệt chân không Inox chứa nước nóng sục, hộ chiếu gốc, tiền mặt và hộp thuốc cá nhân thường dùng.",
    expertTip: "Hớp một ngụm trà gừng nóng ấm từ bình giữ nhiệt cứ sau mỗi 15-20 phút di chuyển đường đèo là thần dược bảo vệ phổi tốt nhất."
  },
  {
    id: 7,
    icon: CreditCard,
    title: "Bí kíp Tiền Tệ & Sức Mạnh Thẻ Quốc Tế Vô Hiệu Lực",
    tag: "Tài chính thực tế",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/50",
    fact: "Công nghệ số hầu như chưa hiện diện rộng rãi ở rẻo cao dốc thẳm. Máy quẹt thẻ tín dụng tại Leh không có kết nối viễn thông liên ngân hàng.",
    hazard: "Cây ATM hết tiền mặt cục bộ hoặc ngưng cấp giao dịch quốc tế, khiến bạn lâm vào cảnh bế tắc khi mua đồ lưu niệm hoặc cơm trưa.",
    solution: "Đổi sẵn USD từ Việt Nam trước khi đi. Khi đến Ấn Độ (sân bay New Delhi hoặc khu phố cổ Leh), đổi USD sang Rupee (INR) tại các quầy đổi tiền uy tín — tỷ giá tốt hơn đổi trực tiếp từ VNĐ.",
    expertTip: "Chuẩn bị các tờ tiền mặt INR mệnh giá nhỏ 100, 200, 500 Rupee để dễ dàng chi trả tiền ăn nhẹ dã ngoại, mua trà bơ dọc đèo sỏi đá.",
    linkUrl: "https://thericetour.com/doi-tien-ladakh",
    linkText: "Hướng Dẫn Đổi Tiền Đi Ladakh Chi Tiết"
  },
  {
    id: 8,
    icon: Wifi,
    title: "Mạng Quốc Phòng Thắt Chặt – Chỉ Sim Trả Sau Hoạt Động",
    tag: "Phương tiện sóng",
    badgeColor: "bg-violet-50 text-violet-800 border-violet-200/50",
    fact: "Vì an ninh quốc gia vùng cát giáp ranh, chính phủ Ấn Độ cấm ngặt du khách quốc tế dùng sim trả trước (Prepaid) thông thường.",
    hazard: "Mua sim du lịch online hay sim 4G Ấn Độ thông dụng mang lên Leh hoàn toàn hiện thông báo vô hiệu sóng liên hệ, mất tích thông tin.",
    solution: "Bắt buộc đăng ký sim trả sau (Postpaid) trực tiếp bằng hộ chiếu tại thủ phủ Leh, chọn mạng chính yếu BSNL hoặc Airtel có độ phủ sóng tốt nhất.",
    expertTip: "Fit Tour trang bị các thiết bị bộ đàm vệ tinh nội hàm và sẵn nguồn sim trả sau cho các đại sự trưởng đoàn liên thông cứu trợ khẩn cấp."
  },
  {
    id: 9,
    icon: Utensils,
    title: "Đặc Trưng Ẩm Thực Ladakh – Khắc Phục Khẩu Vị Dầu Mỡ",
    tag: "Ẩm thực bản xứ",
    badgeColor: "bg-rose-50 text-rose-800 border-rose-200/50",
    fact: "Ẩm thực Ladakh chịu ảnh hưởng nặng nề bởi cà ri bơ sữa béo ngậy kiểu Bắc Ấn nồng mùi gia vị thảo mộc hạt cumin hành tỏi nồng nặc.",
    hazard: "Du khách Việt bị đầy trướng bụng do không quen dầu mỡ trôi chảy thức ăn, dắt cơ thể mỏi mệt kiệt quệ do nhịn ăn liên tiếp dã ngoại.",
    solution: "Lựa chọn ẩm thực Tây Tạng dịu thanh: Thukpa (súp mì dẹt tơi nóng), Momos (bánh hấp nhân rau củ, thịt cừu tơi), hoặc mì gói bản xứ Maggi tỏi ớt.",
    expertTip: "Khuyên hành khách chuẩn bị sẵn chà bông sấy khô, mắm kho quẹt gia đình, cháo gói súp liền Việt Nam để bổ trợ năng lượng rực rỡ.",
    imageUrl: "https://media.fittour.vn/uploads/mon-an-tai-the-tibetan-kitchen-leh-ladakh.webp",
    linkUrl: "https://thericetour.com/the-tibetan-kitchen-leh-ladakh",
    linkText: "The Tibetan Kitchen – Nhà Hàng Ngon Nhất Leh"
  },
  {
    id: 10,
    icon: Map,
    title: "Lộ Trình Chia Nhỏ Thông Thả – Tuyệt Đối Tránh Quá Tải Thể Lực",
    tag: "Hành trình kén khách",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/50",
    fact: "Khoảng cách địa lí thung lũng khá ngắn (130-150km) nhưng thời gian lăn dằn bánh lên tới 5-7 tiếng ròng rã dốc uốn khúc xiên xẹo sỏi đèo.",
    hazard: "Ép tiến độ đi liên chặng không nghỉ chân khiến cơ tim mệt mỏi, mạch máu căng giãn liên hồi, say xe ói mửa trầm trọng kiệt sức dốc thở.",
    solution: "Thiết kế lịch trình giãn cách thông minh. Nghỉ chặng thong thả ngắm thung lũng Indus vàng óng rực rỡ, nhấp chén trà bơ sưởi ấm tim phổi.",
    expertTip: "Lịch trình độc quyền của Fit Tour luôn cách đêm đan xen thung lũng hợp lí, giúp cơ thể có điểm thích nghi cao độ tự nhiên vững vàng.",
    imageUrl: "https://media.fittour.vn/uploads/co-gai-chup-anh-tren-xe-roadtrip-ladakh-truoc-tu-vien-thiksey.webp",
    showCta: true,
    linkUrl: "https://thericetour.com/country/ladakh/",
    linkText: "Xem Series Tour Ladakh Signature từ Fit Tour"
  },
  {
    id: 11,
    icon: Sunrise,
    title: "Hành Lễ Tu Viện Cổ Tây Tạng – Văn Hóa Mật Tông Nghiêm Cẩn",
    tag: "Tâm linh Mật tông",
    badgeColor: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200/50",
    fact: "Ladakh được mệnh danh là 'Tiểu Tây Tạng'. Có hàng chục thiền viện nghìn năm tuổi xây chênh vênh vách đá dốc thẳm (Hemis, Thiksey, Diskit).",
    hazard: "Nói cười hò hét huyên náo phật chính điện linh thiêng, quay lật hiện vật, đi ngược chiều bảo tháp Phật giáo gây phật lòng bậc sư tăng.",
    solution: "Luôn đi nhiễu tháp Phật giáo theo chiều từ trái qua phải (chiều kim đồng hồ). Tháo giày, tất bảo hộ cẩn mật trước khi cung tiến thánh điện kín.",
    expertTip: "Xin phép kính cẩn các nhà sư trước khi giơ máy ảnh ghi hình. Giữ im lặng tuyệt đối cảm nhận năng lượng lành tịnh gột rửa tâm hồn nhẹ nhõm.",
    imageUrl: "https://media.fittour.vn/uploads/co-gai-cau-nguyen-tai-tu-vien-hemis.webp",
    linkUrl: "https://thericetour.com/tu-vien-ladakh",
    linkText: "Khám Phá Các Tu Viện Cổ Ladakh"
  }
];

interface PillarGuideProps {
  onTourSelect?: (tour: any) => void;
  seoDescription?: string;
}

export default function PillarGuide({ onTourSelect, seoDescription }: PillarGuideProps = {}) {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const detailRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Inject JSON-LD FAQ Schema dynamically for outstanding SEO/GEO validation
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const scriptId = 'jsonld-faq-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const scrollToDetail = (id: number) => {
    setActiveTab(id);
    const element = detailRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="pillar-guide-section" className="bg-stone-50 py-16 px-4 md:px-8 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION MASTER HEADER - SEO & GEO OPTIMIZATION OF TOP 11 CONDITIONS */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-900/10 text-xs font-mono font-bold uppercase tracking-wider mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>KẾT QUẢ KHẢO SÁT DU LỊCH LỮ HÀNH ĐỊA PHƯƠNG</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-none mb-4">
            Top 11 Điều Cần Biết Khi Du Lịch Ladakh
          </h1>
          <p className="font-serif text-lg italic text-amber-800 leading-relaxed max-w-2xl mx-auto">
            "Cẩm nang thực chiến cốt tủy chống sốc độ cao núi tuyết hiểm nguy, tối ưu chi phí và bảo hiểm y tế nghiêm ngặt từ chuyên gia Fit Tour"
          </p>
          <div className="w-24 h-1 bg-amber-800 mx-auto my-6 rounded-full"></div>
          <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-3xl mx-auto leading-relaxed text-center">
            {seoDescription ? (
              seoDescription
            ) : (
              <>
                Chúng tôi chuyển hóa bản tin bài viết của <b className="text-stone-900">Fit Tour Việt Nam</b> thành giao diện 
                Landing Page tương tác cao nương theo hành trình thực nghiệm khắt khe. Dưới đây là 
                danh sách 11 bí mật sống còn để có chuyến bay thông suốt sướng vui nhất tại Himalaya hoang dã.
              </>
            )}
          </p>
        </div>

        {/* 1. INTERACTIVE NAVIGATION INDEX (1 to 11) */}
        <div className="mb-14 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm text-left">
          <div className="flex items-center gap-2 mb-4 border-b border-stone-100 pb-3">
            <Compass className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider">
              Mục lục tương tác nhanh 11 điều cốt lõi:
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {ESSENTIALS.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToDetail(item.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl border text-xs text-left font-sans transition-all duration-350 cursor-pointer ${
                    isActive 
                      ? 'bg-stone-950 text-white border-stone-950 font-semibold shadow-md scale-102 font-mono'
                      : 'bg-stone-50 hover:bg-amber-50 hover:text-amber-900 text-stone-700 border-stone-200'
                  }`}
                >
                  <span className="font-mono text-xs font-black px-1.5 py-0.5 rounded bg-amber-900 text-white">
                    {item.id.toString().padStart(2, '0')}
                  </span>
                  <span className="truncate leading-tight font-medium">{item.title.split('–')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. SPECIFIC RICH DETAIL GRID OF 11 ESSENTIALS */}
        <div className="space-y-8 mb-20 text-left">
          {ESSENTIALS.map((item) => {
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

                <div className="relative z-10 flex flex-col lg:flex-row gap-6 justify-between items-start">
                  
                  {/* Left Column: Icon + Core titles */}
                  <div className="lg:max-w-[55%] space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-3 bg-stone-900 text-amber-500 rounded-2xl flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`inline-block font-mono text-[9px] uppercase font-bold border rounded-full px-2.5 py-0.5 mb-1 ${item.badgeColor}`}>
                          {item.tag}
                        </span>
                        <h2 className="font-serif text-lg md:text-xl font-black text-stone-900 leading-tight">
                          ĐIỀU {item.id.toString().padStart(2, '0')}: {item.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-3 font-sans text-xs sm:text-sm">
                      <div className="bg-stone-50 border border-stone-200/65 p-4 rounded-xl">
                        <strong className="text-stone-900 block font-mono text-[10px] uppercase text-emerald-800 mb-1">■ Hiện trạng địa phương / Sự thật:</strong>
                        <p className="text-stone-700 leading-relaxed text-justify">{item.fact}</p>
                      </div>

                      <div className="bg-rose-50/60 border border-rose-100 p-4 rounded-xl">
                        <strong className="text-rose-950 block font-mono text-[10px] uppercase text-rose-800 mb-1">✗ Sự cố dã ngoại thường gặp:</strong>
                        <p className="text-rose-800 leading-relaxed text-justify">{item.hazard}</p>
                      </div>

                      {item.imageUrl && (
                        <div className="mt-4 rounded-xl overflow-hidden border border-stone-200/65 shadow-sm relative group aspect-[16/9]">
                          <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Expert Solutions Box */}
                  <div className="w-full lg:max-w-[40%] space-y-4 bg-amber-50/40 border border-amber-900/5 p-6 rounded-2xl">
                    <div className="flex items-center gap-1.5 border-b border-amber-900/10 pb-2">
                      <Shield className="w-4 h-4 text-amber-800" />
                      <strong className="font-mono text-[10px] uppercase text-stone-900 tracking-wider">Cẩm nang thực chiến Fit Tour:</strong>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-stone-800 leading-relaxed text-justify">
                      {item.solution}
                    </p>

                    <div className="mt-4 p-3 bg-white rounded-xl border border-amber-900/10 flex items-start gap-2.5 shadow-xs">
                      <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] font-mono font-bold text-amber-900 block uppercase">HỖ TRỢ ĐẬC QUYỀN FIT TOUR:</span>
                        <p className="text-[11px] text-stone-600 mt-0.5 italic leading-snug">{item.expertTip}</p>
                      </div>
                    </div>

                    {item.showCta && (
                      <button
                        onClick={() => {
                          if (onTourSelect) {
                            onTourSelect({
                              title: `Hành Trình Ladakh - Tư Vấn & Đặt Tour`,
                              duration: "Phản hồi trong 15 phút",
                              price: "Miễn phí tư vấn",
                              tag: "Đặt tour"
                            });
                          }
                        }}
                        className="w-full mt-4 flex items-center justify-center gap-1.5 bg-stone-950 hover:bg-amber-800 text-stone-50 hover:text-white rounded-xl py-2.5 text-xs font-mono font-bold cursor-pointer transition shadow-xs"
                      >
                        <span>Đăng ký tư vấn & đặt tour Ladakh</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {item.linkUrl && (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener"
                        className="w-full mt-2 flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl py-2.5 text-xs font-mono font-bold transition border border-stone-200 shadow-xs"
                      >
                        <span>{item.linkText || 'Tìm hiểu thêm'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {item.links && item.links.map((link: any, li: number) => (
                      <a
                        key={li}
                        href={link.url}
                        target="_blank"
                        rel="noopener"
                        className="w-full mt-2 flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl py-2.5 text-xs font-mono font-bold transition border border-stone-200 shadow-xs"
                      >
                        <span>{link.text}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 3. HIGH-CONVERSION CTA TOUR CARDS - Direct link to optimized tour options */}
        <div id="optimized-tour-cards" className="mt-20 border-t border-stone-200 pt-16">
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

        {/* 4. FAQ ACCORDION SECTION WITH HIGH-END RICH SCHEMA INTEGRATION */}
        <div id="faq-pillar-accordion" className="mt-24 border-t border-stone-200 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left intro text (4 columns) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-800 font-bold block">HỎI ĐÁP PHÙ HỢP CỰC ĐẠI</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
                Giải Đáp Mọi Thắc Mắc Trước Khi Xuất Hành
              </h2>
              <p className="text-xs font-sans text-stone-600 leading-relaxed text-justify">
                Tất cả các lo âu về thủ tục, mức độ kén của chặng bay, bồi hoàn quốc tế, 
                và cách sắm sửa hành lý đều được ban biên tập lữ hành Fit Tour giải đáp súc tích.
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
                  className="inline-flex items-center gap-2 text-xs font-mono text-blue-900 hover:blue-700 font-bold cursor-pointer bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5 transition"
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
                      className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-stone-900 text-sm md:text-base select-none gap-4 hover:bg-amber-50/20"
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
