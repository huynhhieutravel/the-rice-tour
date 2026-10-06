const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const viDir = path.join(__dirname, '../content-pipeline/campaign-ben-thanh/vietnamese');
const enDir = path.join(__dirname, '../content-pipeline/campaign-ben-thanh/english');
const outputFile = path.join(__dirname, '../src/data/ben-thanh-articles.ts');

const articlesConfig = [
  {
    order: 1,
    viFile: '001_dia-diem-noi-tieng-quanh-ben-thanh.md',
    enFile: '001_things-to-do-near-ben-thanh-market.md',
    viVar: 'diaDiemNoiTiengQuanhBenThanhHtml',
    enVar: 'thingsToDoNearBenThanhMarketHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-market-clock-tower.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/ben-thanh-market-interior-ho-chi-minh-city.webp', captionVi: 'Không gian sầm uất với hệ thống vì kèo thép kiên cố bên trong Chợ Bến Thành', captionEn: 'Iron-framed vaulted halls and bustling merchants inside historic Ben Thanh Market' },
      { url: 'https://media.thericetour.com/uploads/ben-thanh-metro-station-concourse.webp', captionVi: 'Sảnh chờ hiện đại của Ga ngầm Trung tâm Bến Thành kết nối trực tiếp với quảng trường', captionEn: 'Modern subterranean concourse of Ben Thanh Central Metro Station Line 1' }
    ],
    badgesVi: [
      { icon: "🏛️", text: "Trái Tim Di Sản Sài Gòn" },
      { icon: "🎨", text: "Nghệ Thuật Art Deco Đông Dương" },
      { icon: "🚇", text: "Ga Ngầm Metro Số 1" },
      { icon: "🌿", text: "Cẩm Nang Đi Bộ 1km" }
    ],
    badgesEn: [
      { icon: "🏛️", text: "Centennial Urban Heartland" },
      { icon: "🎨", text: "Indochine Art Deco Heritage" },
      { icon: "🚇", text: "2026 Metro Central Hub" },
      { icon: "🌿", text: "Curated Walking Sanctuary" }
    ],
    statsVi: [
      { icon: "📍", label: "Tọa Độ Trung Tâm", val: "Quảng trường Quách Thị Trang, Quận 1" },
      { icon: "🚶", label: "Bán Kính Tản Bộ", val: "Vòng cung di sản 1.2 km" },
      { icon: "🎟️", label: "Thời Gian Khám Phá", val: "Nửa ngày đến 1 ngày trọn vẹn" }
    ],
    statsEn: [
      { icon: "📍", label: "Coordinates", val: "Quach Thi Trang Square, District 1" },
      { icon: "🚶", label: "Walking Radius", val: "1.2 km Heritage Perimeter" },
      { icon: "🎟️", label: "Recommended Time", val: "Half-Day to Full-Day Stroll" }
    ],
    factsVi: [
      { icon: "📍", label: "Khu vực", val: "Phường Bến Thành, Quận 1, TP.HCM" },
      { icon: "🌤️", label: "Thời điểm vàng", val: "07:30 – 10:30 & 16:30 – 21:00" },
      { icon: "🚶", label: "Phương thức", val: "Tản bộ & Tuyến Metro số 1" },
      { icon: "🚇", label: "Kết nối", val: "Ga ngầm Metro Bến Thành" }
    ],
    factsEn: [
      { icon: "📍", label: "Location", val: "Ben Thanh Ward, District 1, HCMC" },
      { icon: "🌤️", label: "Golden Window", val: "07:30 – 10:30 AM & 16:30 – 21:00 PM" },
      { icon: "🚶", label: "Transit Style", val: "Walking & Subterranean Metro" },
      { icon: "🚇", label: "Direct Link", val: "Ben Thanh Central Metro Station Line 1" }
    ]
  },
  {
    order: 2,
    viFile: '002_bao-tang-my-thuat-tphcm.md',
    enFile: '002_hcmc-museum-of-fine-arts-guide.md',
    viVar: 'baoTangMyThuatTphcmHtml',
    enVar: 'hcmcMuseumOfFineArtsGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ho-chi-minh-city-museum-of-fine-arts.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/ho-chi-minh-city-fine-arts-museum.webp', captionVi: 'Mặt tiền lộng lẫy kết hợp phong cách Tân Cổ Điển Pháp và gốm men Á Đông', captionEn: 'Ornate French Neoclassical facades blended with Chinese ceramic tiles' }
    ],
    badgesVi: [
      { icon: "🏛️", text: "Dinh Thự Chú Hỏa Trăm Năm" },
      { icon: "🎨", text: "Kiến Trúc Art Deco Giao Thoa" },
      { icon: "🖼️", text: "Bảo Vật Sơn Mài Quốc Gia" },
      { icon: "🌿", text: "99 Cửa Sổ Di Sản" }
    ],
    badgesEn: [
      { icon: "🏛️", text: "Hui Bon Hoa Centennial Estate" },
      { icon: "🎨", text: "Art Deco & Chinese Feng Shui" },
      { icon: "🏆", text: "National Lacquer Treasures" },
      { icon: "🌿", text: "99 Stained-Glass Windows" }
    ],
    statsVi: [
      { icon: "📍", label: "Địa Chỉ", val: "97A Phó Đức Chính, Quận 1 (cách chợ 350m)" },
      { icon: "🕒", label: "Giờ Mở Cửa", val: "08:00 – 17:00 Hàng ngày" },
      { icon: "🎟️", label: "Giá Vé 2026", val: "30.000 VNĐ / khách" }
    ],
    statsEn: [
      { icon: "📍", label: "Coordinates", val: "97A Pho Duc Chinh, D1 (350m from market)" },
      { icon: "🕒", label: "Hours", val: "08:00 AM – 17:00 PM Daily" },
      { icon: "🎟️", label: "Admission 2026", val: "30,000 VND / person" }
    ],
    factsVi: [
      { icon: "📍", label: "Vị trí", val: "Góc Phó Đức Chính - Lê Thị Hồng Gấm" },
      { icon: "🌤️", label: "Ánh sáng đẹp nhất", val: "08:30 – 10:30 sáng ở các hành lang" },
      { icon: "🖼️", label: "Kiệt tác", val: "Bức tranh sơn mài 'Vườn xuân Trung Nam Bắc'" },
      { icon: "📸", label: "Lưu ý", val: "Không mang đèn flash và chân máy lớn" }
    ],
    factsEn: [
      { icon: "📍", label: "Location", val: "Pho Duc Chinh & Le Thi Hong Gam Corner" },
      { icon: "🌤️", label: "Best Natural Light", val: "08:30 – 10:30 AM along balconies" },
      { icon: "🖼️", label: "National Treasure", val: "Nguyen Gia Tri's Spring Garden Lacquer" },
      { icon: "📸", label: "Photography", val: "Handheld cameras only; no large tripods" }
    ]
  },
  {
    order: 3,
    viFile: '003_am-thuc-cho-ben-thanh.md',
    enFile: '003_ben-thanh-market-food-guide.md',
    viVar: 'amThucChoBenThanhHtml',
    enVar: 'benThanhMarketFoodGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-market-street-food.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/saigon-food-variety.webp', captionVi: 'Hàng chục món ăn dân dã ba miền hội tụ đầy màu sắc tại khu ẩm thực Cửa Đông', captionEn: 'A vibrant kaleidoscope of authentic regional Vietnamese street food stalls' }
    ],
    badgesVi: [
      { icon: "🍜", text: "Thiên Đường Ẩm Thực Cửa Đông" },
      { icon: "🍧", text: "Chè Bé Ba Đời Trứ Danh" },
      { icon: "🦀", text: "Bún Riêu & Bánh Bèo Cổ Truyền" },
      { icon: "🌙", text: "Phố Ẩm Thực Đêm Phan Bội Châu" }
    ],
    badgesEn: [
      { icon: "🍜", text: "East Gate Culinary Arcade" },
      { icon: "🍧", text: "Legendary Che Be Desserts" },
      { icon: "🦀", text: "Bun Rieu Crab Heritage" },
      { icon: "🌙", text: "Phan Boi Chau Night Dining" }
    ],
    statsVi: [
      { icon: "📍", label: "Khu Vực", val: "Khu Ẩm Thực Cửa Đông (Lòng Chợ Bến Thành)" },
      { icon: "🕒", label: "Khung Giờ Ăn Uống", val: "Chợ ngày: 06:30 - 17:00 | Chợ đêm: 18:00 - 23:00" },
      { icon: "💰", label: "Khoảng Giá 2026", val: "45.000 – 95.000 VNĐ / món" }
    ],
    statsEn: [
      { icon: "📍", label: "Location", val: "East Gate Food Arcade (Ben Thanh Market)" },
      { icon: "🕒", label: "Dining Windows", val: "Day hall: 06:30 - 17:00 | Night: 18:00 - 23:00" },
      { icon: "💰", label: "Budget 2026", val: "45,000 – 95,000 VND / dish" }
    ],
    factsVi: [
      { icon: "📍", label: "Tọa độ ăn vặt", val: "Gian hàng ẩm thực hướng Cửa Đông" },
      { icon: "🍜", label: "Món phải thử", val: "Bún riêu cua, bún mắm, chè sương sa hạt lựu" },
      { icon: "🍧", label: "Quán gia truyền", val: "Chè Bé (từ 1968), Bún riêu Gánh Cửa Tây" },
      { icon: "💡", label: "Mẹo thực khách", val: "Xác nhận giá trước khi gọi món" }
    ],
    factsEn: [
      { icon: "📍", label: "Epicenter", val: "Aisle 7 & 8 near East Gate entrance" },
      { icon: "🍜", label: "Signature Bowls", val: "Bun Rieu, Bun Mam, Che Suong Sa" },
      { icon: "🍧", label: "Generational Stalls", val: "Che Be (Est. 1968), West Gate Bun Rieu" },
      { icon: "💡", label: "Insider Rule", val: "Always check prices on displayed menus" }
    ]
  },
  {
    order: 4,
    viFile: '004_lich-trinh-di-bo-ben-thanh-1-ngay.md',
    enFile: '004_ben-thanh-one-day-walking-tour.md',
    viVar: 'lichTrinhDiBoBenThanh1NgayHtml',
    enVar: 'benThanhOneDayWalkingTourHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-market-evening-walk.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/bitexco-tower-saigon-helipad-skyscraper.webp', captionVi: 'Hoàng hôn buông xuống bên bờ sông Sài Gòn và những tòa tháp chọc trời Quận 1', captionEn: 'Sunset falling across Saigon River and the modern skyline of District 1' }
    ],
    badgesVi: [
      { icon: "🚶", text: "Lộ Trình Tản Bộ 1 Ngày" },
      { icon: "☕", text: "Cà Phê Chung Cư Cổ Tôn Thất Đạm" },
      { icon: "🏛️", text: "Trục Di Sản Đông Dương" },
      { icon: "🌅", text: "Hoàng Hôn Bến Bạch Đằng" }
    ],
    badgesEn: [
      { icon: "🚶", text: "1-Day Walking Blueprint" },
      { icon: "☕", text: "Vintage Apartment Cafes" },
      { icon: "🏛️", text: "French Colonial Axis" },
      { icon: "🌅", text: "Bach Dang River Sunset" }
    ],
    statsVi: [
      { icon: "📍", label: "Điểm Xuất Phát", val: "Cổng Nam Chợ Bến Thành (07:30 Sáng)" },
      { icon: "📏", label: "Quãng Đường Đi Bộ", val: "Khoảng 4.5 km toàn lộ trình" },
      { icon: "⏱️", label: "Thời Lượng", val: "10 tiếng trải nghiệm thư thả" }
    ],
    statsEn: [
      { icon: "📍", label: "Starting Point", val: "Ben Thanh South Gate (07:30 AM)" },
      { icon: "📏", label: "Walking Distance", val: "Approx. 4.5 km circuit" },
      { icon: "⏱️", label: "Duration", val: "10 leisurely hours with rest stops" }
    ],
    factsVi: [
      { icon: "📍", label: "Lộ trình chính", val: "Bến Thành ➔ Bảo tàng Mỹ thuật ➔ Dinh Độc Lập ➔ Bạch Đằng" },
      { icon: "👟", label: "Trang phục", val: "Giày đi bộ êm, nón che nắng, trang phục lịch sự" },
      { icon: "☕", label: "Điểm nghỉ trưa", val: "Chung cư 14 Tôn Thất Đạm hoặc 42 Tôn Thất Thiệp" },
      { icon: "🌅", label: "Khép lại ngày", val: "Ngắm hoàng hôn trên tàu buýt sông hoặc Waterbus" }
    ],
    factsEn: [
      { icon: "📍", label: "Core Circuit", val: "Market ➔ Fine Arts ➔ Palace ➔ River Park" },
      { icon: "👟", label: "Footwear", val: "Breathable walking shoes and lightweight sun hat" },
      { icon: "☕", label: "Midday Respite", val: "14 Ton That Dam vintage apartment block" },
      { icon: "🌅", label: "Golden Finale", val: "Sunset at Bach Dang Park with river breeze" }
    ]
  },
  {
    order: 5,
    viFile: '005_dinh-doc-lap-sai-gon.md',
    enFile: '005_independence-palace-saigon-guide.md',
    viVar: 'dinhDocLapSaiGonHtml',
    enVar: 'independencePalaceSaigonGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/dinh-doc-lap.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/reunification-palace-saigon.webp', captionVi: 'Mặt tiền rèm hoa đá cách điệu hình gióng trúc thanh tao của KTS Ngô Viết Thụ', captionEn: 'Mid-century modernist facades with stylized bamboo stone louvers' }
    ],
    badgesVi: [
      { icon: "🏛️", text: "Di Tích Quốc Gia Đặc Biệt" },
      { icon: "📐", text: "Kiến Trúc Ngô Viết Thụ" },
      { icon: "🎖️", text: "Hầm Chỉ Huy Chiến Tranh" },
      { icon: "🌳", text: "Công Viên Cây Cổ Thụ 12ha" }
    ],
    badgesEn: [
      { icon: "🏛️", text: "Special National Monument" },
      { icon: "📐", text: "Ngo Viet Thu Modernist Masterpiece" },
      { icon: "🎖️", text: "Subterranean Command Bunker" },
      { icon: "🌳", text: "12-Hectare Ancient Parkland" }
    ],
    statsVi: [
      { icon: "📍", label: "Địa Chỉ", val: "135 Nam Kỳ Khởi Nghĩa, Bến Thành, Quận 1" },
      { icon: "🕒", label: "Giờ Tham Quan", val: "08:00 – 16:30 Hàng ngày" },
      { icon: "🎟️", label: "Giá Vé 2026", val: "40.000 – 65.000 VNĐ / khách" }
    ],
    statsEn: [
      { icon: "📍", label: "Coordinates", val: "135 Nam Ky Khoi Nghia, District 1" },
      { icon: "🕒", label: "Hours", val: "08:00 AM – 16:30 PM Daily" },
      { icon: "🎟️", label: "Tariff 2026", val: "40,000 – 65,000 VND / person" }
    ],
    factsVi: [
      { icon: "📍", label: "Vị trí", val: "Cách Chợ Bến Thành 800m đi bộ dọc Nam Kỳ Khởi Nghĩa" },
      { icon: "📐", label: "Triết lý", val: "Hài hòa dịch học phương Đông: Chữ Cát, Khẩu, Trung, Tam" },
      { icon: "🚁", label: "Điểm nhấn", val: "Sân bay trực thăng tầng thượng & Hầm ngầm kiên cố" },
      { icon: "🎧", label: "Dịch vụ", val: "Audio guide đa ngôn ngữ tại quầy vé" }
    ],
    factsEn: [
      { icon: "📍", label: "Proximity", val: "800m walk from Ben Thanh Market" },
      { icon: "📐", label: "Philosophy", val: "Eastern geomancy and I Ching calligraphy in stone" },
      { icon: "🚁", label: "Highlights", val: "Rooftop helipad & blast-proof underground bunker" },
      { icon: "🎧", label: "Audio Guide", val: "Multilingual handheld headsets at entrance" }
    ]
  },
  {
    order: 6,
    viFile: '006_ga-ngam-metro-ben-thanh.md',
    enFile: '006_ben-thanh-central-metro-station-guide.md',
    viVar: 'gaNgamMetroBenThanhHtml',
    enVar: 'benThanhCentralMetroStationGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-metro-station-circular-entrance.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/ben-thanh-metro-station-concourse.webp', captionVi: 'Không gian ngầm 4 tầng hiện đại với hệ thống kiểm soát vé thông minh', captionEn: 'Multilevel subterranean concourse with automated ticket gates' },
      { url: 'https://media.thericetour.com/uploads/ben-thanh-metro-station-district-1-skyline.webp', captionVi: 'Giếng trời hoa sen lấy sáng tự nhiên trên Quảng trường Quách Thị Trang', captionEn: 'Lotus-shaped architectural skylight illuminating subterranean levels' }
    ],
    badgesVi: [
      { icon: "🚇", text: "Kỳ Quan Ngầm Sài Gòn 2026" },
      { icon: "🪷", text: "Giếng Trời Hoa Sen Độc Bản" },
      { icon: "🏙️", text: "Kết Nối 4 Tầng Dưới Lòng Đất" },
      { icon: "🎫", text: "Tuyến Metro Số 1 Vận Hành" }
    ],
    badgesEn: [
      { icon: "🚇", text: "2026 Subterranean Marvel" },
      { icon: "🪷", text: "Lotus Skylight Architectural Dome" },
      { icon: "🏙️", text: "4-Level Underground Hub" },
      { icon: "🎫", text: "Metro Line 1 Operating" }
    ],
    statsVi: [
      { icon: "📍", label: "Tọa Độ Ngầm", val: "Quảng trường Quách Thị Trang, sâu 32m" },
      { icon: "📐", label: "Quy Mô", val: "Dài 236m, rộng 60m, 4 tầng ngầm" },
      { icon: "🎫", label: "Giá Vé Metro 2026", val: "6.000 – 20.000 VNĐ / lượt" }
    ],
    statsEn: [
      { icon: "📍", label: "Coordinates", val: "Quach Thi Trang Square, 32m Depth" },
      { icon: "📐", label: "Scale", val: "236m Length, 60m Width, 4 Levels" },
      { icon: "🎫", label: "Ticket 2026", val: "6,000 – 20,000 VND / single ride" }
    ],
    factsVi: [
      { icon: "📍", label: "Lối vào chính", val: "Quảng trường Quách Thị Trang & Đường Lê Lợi" },
      { icon: "🪷", label: "Kiến trúc biểu tượng", val: "Giếng trời hoa sen (Toplight) đường kính 21.6m" },
      { icon: "⚡", label: "Thời gian di chuyển", val: "Ben Thanh ➔ Suoi Tien chỉ 30 phút" },
      { icon: "💳", label: "Thanh toán", val: "Thẻ ngân hàng không tiếp xúc, QR Code, vé lượt" }
    ],
    factsEn: [
      { icon: "📍", label: "Main Entrances", val: "Quach Thi Trang Plaza & Le Loi Boulevard" },
      { icon: "🪷", label: "Lotus Skylight", val: "21.6m diameter glass dome flooding natural light" },
      { icon: "⚡", label: "Transit Time", val: "Ben Thanh to Suoi Tien in under 30 minutes" },
      { icon: "💳", label: "Ticketing", val: "Contactless EMV cards, QR mobile, tokens" }
    ]
  },
  {
    order: 7,
    viFile: '007_den-hindu-mariamman-sai-gon.md',
    enFile: '007_mariamman-hindu-temple-saigon.md',
    viVar: 'denHinduMariammanSaiGonHtml',
    enVar: 'mariammanHinduTempleSaigonHtml',
    featuredImage: 'https://media.thericetour.com/uploads/mariamman-hindu-temple-saigon.webp',
    extraImages: [],
    badgesVi: [
      { icon: "🛕", text: "Đền Hindu Cổ Kính Nhất Quận 1" },
      { icon: "🕉️", text: "Kiến Trúc Nam Ấn Dravidian" },
      { icon: "🧱", text: "Tường Gốm Cổ Thờ Thần Linh" },
      { icon: "🕊️", text: "Giao Thoa Văn Hóa Việt - Ấn" }
    ],
    badgesEn: [
      { icon: "🛕", text: "Historic South Indian Sanctuary" },
      { icon: "🕉️", text: "Dravidian Architectural Gopuram" },
      { icon: "🧱", text: "Sacred Ceramic Figurine Walls" },
      { icon: "🕊️", text: "Centennial Hindu-Saigon Harmony" }
    ],
    statsVi: [
      { icon: "📍", label: "Địa Chỉ", val: "45 Trương Định, Bến Thành, Quận 1 (cách chợ 250m)" },
      { icon: "🕒", label: "Giờ Mở Cửa", val: "07:00 – 19:00 Hàng ngày" },
      { icon: "🎟️", label: "Vé Vào Cửa", val: "Miễn phí 100% (Tùy tâm công đức)" }
    ],
    statsEn: [
      { icon: "📍", label: "Coordinates", val: "45 Truong Dinh, D1 (250m from market)" },
      { icon: "🕒", label: "Hours", val: "07:00 AM – 19:00 PM Daily" },
      { icon: "🎟️", label: "Admission", val: "Free Entry (Donations Welcome)" }
    ],
    factsVi: [
      { icon: "📍", label: "Vị trí", val: "Góc Trương Định - Lê Thánh Tôn, sát hông chợ" },
      { icon: "🛕", label: "Thờ phụng", val: "Nữ thần Mariamman ban phước lành và bình an" },
      { icon: "👣", label: "Quy tắc", val: "Để giày dép bên ngoài, trang phục kín đáo qua đầu gối" },
      { icon: "🧱", label: "Nghi thức", val: "Áp tai vào bức tường đá linh thiêng phía sau đền" }
    ],
    factsEn: [
      { icon: "📍", label: "Location", val: "Truong Dinh & Le Thanh Ton corner" },
      { icon: "🛕", label: "Deity", val: "Goddess Mariamman, bringer of health and rain" },
      { icon: "👣", label: "Etiquette", val: "Remove footwear outside; cover shoulders & knees" },
      { icon: "🧱", label: "Ritual", val: "Whispering prayers against the rear sacred stone wall" }
    ]
  },
  {
    order: 8,
    viFile: '008_kinh-nghiem-mua-sam-cho-ben-thanh.md',
    enFile: '008_ben-thanh-market-shopping-guide.md',
    viVar: 'kinhNghiemMuaSamChoBenThanhHtml',
    enVar: 'benThanhMarketShoppingGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-market-shopping.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/ben-thanh-market-interior-ho-chi-minh-city.webp', captionVi: 'Hàng ngàn sạp hàng vải lụa, cà phê đặc sản và quà lưu niệm thủ công mỹ nghệ', captionEn: 'Thousands of vibrant textile stalls, coffee beans, and artisan lacquerware' }
    ],
    badgesVi: [
      { icon: "🛍️", text: "Nghệ Thuật Mua Sắm Có GUU" },
      { icon: "🤝", text: "Quy Tắc Trả Giá Văn Minh" },
      { icon: "☕", text: "Cà Phê & Trà Sen Thượng Hạng" },
      { icon: "🏷️", text: "Quầy Hàng Niêm Yết Giá Chuẩn" }
    ],
    badgesEn: [
      { icon: "🛍️", text: "Savvy Market Shopping Guide" },
      { icon: "🤝", text: "The Civilized Bargaining Code" },
      { icon: "☕", text: "Artisan Coffee & Lotus Tea" },
      { icon: "🏷️", text: "Fixed-Price Government Counters" }
    ],
    statsVi: [
      { icon: "📍", label: "Khu Vực", val: "Gần 1.500 sạp hàng trong lòng chợ Bến Thành" },
      { icon: "🕒", label: "Giờ Mua Sắm Đẹp", val: "09:30 – 16:30 (Tránh giờ mở hàng sớm)" },
      { icon: "🤝", label: "Mức Trả Giá Hợp Lý", val: "40% - 60% so với giá phát ban đầu" }
    ],
    statsEn: [
      { icon: "📍", label: "Scale", val: "Nearly 1,500 stalls inside covered halls" },
      { icon: "🕒", label: "Best Hours", val: "09:30 AM – 16:30 PM (Avoid dawn opening)" },
      { icon: "🤝", label: "Bargaining Benchmark", val: "Offer 40% - 60% of initial quoted price" }
    ],
    factsVi: [
      { icon: "📍", label: "Gian hàng uy tín", val: "Khu quầy niêm yết giá cố định gần Cửa Nam" },
      { icon: "☕", label: "Mặt hàng đặc sản", val: "Cà phê Robusta/Arabica rang xay, hạt điều, mứt sen" },
      { icon: "🤝", label: "Văn hóa mở hàng", val: "Không trả giá quá gắt trước 9h sáng" },
      { icon: "💳", label: "Thanh toán", val: "Tiền mặt VNĐ, chuyển khoản ngân hàng qua mã QR" }
    ],
    factsEn: [
      { icon: "📍", label: "Fixed-Price Zone", val: "Official fixed-price counters near South Gate" },
      { icon: "☕", label: "Top Souvenirs", val: "Highland Robusta coffee, cashew nuts, silk" },
      { icon: "🤝", label: "Dawn Etiquette", val: "Respect the sacred first customer tradition ('mo hang')" },
      { icon: "💳", label: "Payment", val: "Vietnamese Dong cash or instant QR transfers" }
    ]
  },
  {
    order: 9,
    viFile: '009_xe-bus-2-tang-hop-on-hop-off-sai-gon.md',
    enFile: '009_saigon-hop-on-hop-off-bus-guide.md',
    viVar: 'xeBus2TangHopOnHopOffSaiGonHtml',
    enVar: 'saigonHopOnHopOffBusGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/saigon-double-decker-sightseeing-bus-street.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/saigon-hop-on-hop-off-bus.webp', captionVi: 'Xe buýt 2 tầng mui trần đón khách ngay trước trạm xe buýt Bến Thành trên đường Hàm Nghi', captionEn: 'Open-top double-decker sightseeing bus departing from Ben Thanh station' }
    ],
    badgesVi: [
      { icon: "🚌", text: "Tầm Nhìn Mui Trần 360 Độ" },
      { icon: "🎧", text: "Thuyết Minh 8 Ngôn Ngữ" },
      { icon: "🎫", text: "Vé 4h - 24h Linh Hoạt" },
      { icon: "🌃", text: "Tour Đêm Ngắm Thành Phố Lên Đèn" }
    ],
    badgesEn: [
      { icon: "🚌", text: "360° Open-Top Panoramic Deck" },
      { icon: "🎧", text: "8-Language GPS Audio Commentary" },
      { icon: "🎫", text: "Flexible 4h to 24h Passes" },
      { icon: "🌃", text: "Night Skyline Illumination Tour" }
    ],
    statsVi: [
      { icon: "📍", label: "Trạm Khởi Hành", val: "Bến xe buýt Hàm Nghi / Cạnh Chợ Bến Thành" },
      { icon: "⏱️", label: "Tần Suất", val: "30 phút / chuyến (08:00 – 22:30)" },
      { icon: "🎟️", label: "Giá Vé 2026", val: "150.000 – 475.000 VNĐ / vé" }
    ],
    statsEn: [
      { icon: "📍", label: "Starting Kiosk", val: "Ham Nghi Bus Hub (Beside Ben Thanh Market)" },
      { icon: "⏱️", label: "Frequency", val: "Every 30 mins (08:00 AM – 22:30 PM)" },
      { icon: "🎟️", label: "Tariff 2026", val: "150,000 – 475,000 VND / pass" }
    ],
    factsVi: [
      { icon: "📍", label: "Các trạm dừng chính", val: "Bến Thành ➔ Bưu điện TP ➔ Dinh Độc Lập ➔ Bảo tàng Chứng tích" },
      { icon: "🌤️", label: "Chuyến đẹp nhất", val: "17:00 – 19:30 (Ngắm hoàng hôn & phố lên đèn)" },
      { icon: "☂️", label: "Trang bị", val: "Áo khoác nhẹ hoặc nón khi ngồi tầng trên mui trần" },
      { icon: "🎫", label: "Cách mua vé", val: "Mua trực tiếp tại quầy hoặc đặt trước qua QR" }
    ],
    factsEn: [
      { icon: "📍", label: "Key Landmarks", val: "Ben Thanh ➔ Central Post Office ➔ Reunification Palace" },
      { icon: "🌤️", label: "Prime Departure", val: "17:00 – 19:30 PM for sunset and city illuminations" },
      { icon: "☂️", label: "Sun Protection", val: "Bring sunglasses and a light jacket for upper deck wind" },
      { icon: "🎫", label: "Ticketing", val: "Purchase at street kiosk or digital mobile vouchers" }
    ]
  },
  {
    order: 10,
    viFile: '010_ca-phe-chung-cu-gan-ben-thanh.md',
    enFile: '010_secret-apartment-cafes-near-ben-thanh.md',
    viVar: 'caPheChungCuGanBenThanhHtml',
    enVar: 'secretApartmentCafesNearBenThanhHtml',
    featuredImage: 'https://media.thericetour.com/uploads/apartment-cafe.webp',
    extraImages: [],
    badgesVi: [
      { icon: "☕", text: "Văn Hóa Cà Phê Chung Cư Cổ" },
      { icon: "🏢", text: "Chung Cư 14 Tôn Thất Đạm" },
      { icon: "🏢", text: "Chung Cư 42 Tôn Thất Thiệp" },
      { icon: "🌿", text: "Góc Trú Ẩn Hoài Niệm Sài Gòn" }
    ],
    badgesEn: [
      { icon: "☕", text: "Heritage Apartment Cafe Culture" },
      { icon: "🏢", text: "14 Ton That Dam Historic Block" },
      { icon: "🏢", text: "42 Ton That Thiep Vintage Arcade" },
      { icon: "🌿", text: "Nostalgic Slow-Drip Sanctuaries" }
    ],
    statsVi: [
      { icon: "📍", label: "Tọa Độ", val: "Chung cư 14 Tôn Thất Đạm & 42 Tôn Thất Thiệp (Quận 1)" },
      { icon: "🕒", label: "Giờ Hoạt Động", val: "08:00 – 22:30 Hàng ngày" },
      { icon: "💰", label: "Mức Giá 2026", val: "45.000 – 85.000 VNĐ / đồ uống" }
    ],
    statsEn: [
      { icon: "📍", label: "Coordinates", val: "14 Ton That Dam & 42 Ton That Thiep, District 1" },
      { icon: "🕒", label: "Hours", val: "08:00 AM – 22:30 PM Daily" },
      { icon: "💰", label: "Pricing 2026", val: "45,000 – 85,000 VND / beverage" }
    ],
    factsVi: [
      { icon: "📍", label: "Khoảng cách", val: "Chỉ 400m - 600m đi bộ từ Chợ Bến Thành" },
      { icon: "☕", label: "Phong cách", val: "Vintage hoài cổ, mộc mạc, sách cũ và tranh nghệ thuật" },
      { icon: "🛵", label: "Gửi xe", val: "Gửi xe dưới tầng trệt chung cư (5.000 - 10.000 VNĐ)" },
      { icon: "📸", label: "Check-in", val: "Hành lang gạch bông cổ điển và cầu thang xoắn ốc" }
    ],
    factsEn: [
      { icon: "📍", label: "Proximity", val: "400m - 600m walking distance from Ben Thanh" },
      { icon: "☕", label: "Atmosphere", val: "Vintage patina, encaustic tiles, indie music & books" },
      { icon: "🛵", label: "Motorbike Parking", val: "Ground-floor courtyard (5,000 - 10,000 VND)" },
      { icon: "📸", label: "Aesthetics", val: "Weathered spiral staircases and French balustrades" }
    ]
  },
  {
    order: 11,
    viFile: '011_rooftop-bar-view-cho-ben-thanh.md',
    enFile: '011_best-rooftop-bars-near-ben-thanh.md',
    viVar: 'rooftopBarViewChoBenThanhHtml',
    enVar: 'bestRooftopBarsNearBenThanhHtml',
    featuredImage: 'https://media.thericetour.com/uploads/rooftop-bar-ben-thanh-market-view.webp',
    extraImages: [],
    badgesVi: [
      { icon: "🍸", text: "Top Rooftop Bar Quận 1" },
      { icon: "🌆", text: "View Tháp Đồng Hồ Bến Thành" },
      { icon: "🍹", text: "Cocktail Nghệ Thuật 2026" },
      { icon: "🎶", text: "Nhạc Acoustic & DJ Hoàng Hôn" }
    ],
    badgesEn: [
      { icon: "🍸", text: "Premier District 1 Rooftops" },
      { icon: "🌆", text: "Ben Thanh Clocktower Panoramas" },
      { icon: "🍹", text: "Artisan Mixology Cocktails" },
      { icon: "🎶", text: "Twilight DJ & Acoustic Sessions" }
    ],
    statsVi: [
      { icon: "📍", label: "Khu Vực", val: "Tầng thượng các tòa nhà quanh giao lộ Quách Thị Trang" },
      { icon: "🕒", label: "Khung Giờ Vàng", val: "17:30 – 19:30 (Hoàng hôn) & 21:00 – khuya" },
      { icon: "💰", label: "Mức Giá 2026", val: "160.000 – 380.000 VNĐ / cocktail" }
    ],
    statsEn: [
      { icon: "📍", label: "Perimeter", val: "Skyline rooftops around Quach Thi Trang Square" },
      { icon: "🕒", label: "Golden Hours", val: "17:30 – 19:30 PM (Sunset) & 21:00 PM late" },
      { icon: "💰", label: "Pricing 2026", val: "160,000 – 380,000 VND / cocktail" }
    ],
    factsVi: [
      { icon: "📍", label: "Địa điểm nổi bật", val: "Chill Skybar, Broma Not A Bar, Shri, Social Club" },
      { icon: "👗", label: "Quy định trang phục", val: "Smart casual (không mặc áo ba lỗ, dép tông)" },
      { icon: "🌅", label: "Thời điểm vàng", val: "Đặt bàn trước 17h30 để đón khoảnh khắc hoàng hôn" },
      { icon: "🍹", label: "Đồ uống gợi ý", val: "Cocktail mang hương vị thảo mộc và rượu gạo Nam Bộ" }
    ],
    factsEn: [
      { icon: "📍", label: "Iconic Venues", val: "Chill Skybar, Broma Not A Bar, Shri, Social Club" },
      { icon: "👗", label: "Dress Code", val: "Smart casual (no flip-flops or athletic tank tops)" },
      { icon: "🌅", label: "Sunset Table", val: "Reserve by 17:30 PM for prime dusk views" },
      { icon: "🍹", label: "Signature Sips", val: "Artisan cocktails infused with Vietnamese botanicals" }
    ]
  },
  {
    order: 12,
    viFile: '012_khach-san-boutique-gan-ben-thanh.md',
    enFile: '012_boutique-hotels-near-ben-thanh.md',
    viVar: 'khachSanBoutiqueGanBenThanhHtml',
    enVar: 'boutiqueHotelsNearBenThanhHtml',
    featuredImage: 'https://media.thericetour.com/uploads/hotel-continental-saigon.webp',
    extraImages: [],
    badgesVi: [
      { icon: "🏨", text: "Khách Sạn Boutique & Di Sản" },
      { icon: "🛎️", text: "Dịch Vụ Concierge Riêng Biệt" },
      { icon: "🎨", text: "Kiến Trúc Indochine Tinh Tế" },
      { icon: "📍", text: "Vị Trí Vàng Trung Tâm Quận 1" }
    ],
    badgesEn: [
      { icon: "🏨", text: "Heritage Boutique Sanctuaries" },
      { icon: "🛎️", text: "Dedicated VIP Concierge" },
      { icon: "🎨", text: "Indochine Architectural Elegance" },
      { icon: "📍", text: "Prime District 1 Epicenter" }
    ],
    statsVi: [
      { icon: "📍", label: "Khu Vực", val: "Bán kính 200m – 800m quanh Chợ Bến Thành" },
      { icon: "⭐", label: "Phân Khúc", val: "Boutique 4 sao – Khách sạn di sản 5 sao" },
      { icon: "💰", label: "Giá Phòng 2026", val: "1.400.000 – 4.500.000 VNĐ / đêm" }
    ],
    statsEn: [
      { icon: "📍", label: "Perimeter", val: "200m – 800m radius around Ben Thanh Market" },
      { icon: "⭐", label: "Category", val: "4-Star Boutique to 5-Star Heritage Mansions" },
      { icon: "💰", label: "Rates 2026", val: "1,400,000 – 4,500,000 VND / night" }
    ],
    factsVi: [
      { icon: "📍", label: "Khách sạn tiêu biểu", val: "Hotel Continental Saigon, The Myst Dong Khoi, Silverland" },
      { icon: "🎨", label: "Phong cách", val: "Gỗ sẫm màu, gạch bông cổ điển, bồn tắm đồng sang trọng" },
      { icon: "🚶", label: "Tiện ích", val: "Dễ dàng tản bộ ra chợ, ga Metro và các điểm ăn uống" },
      { icon: "🛎️", label: "Dịch vụ", val: "Hỗ trợ đặt tour riêng và xe đưa đón sân bay 24/7" }
    ],
    factsEn: [
      { icon: "📍", label: "Top Properties", val: "Hotel Continental Saigon, The Myst, Silverland Yen" },
      { icon: "🎨", label: "Design Details", val: "Dark teakwood, encaustic tiles, freestanding tubs" },
      { icon: "🚶", label: "Convenience", val: "Effortless walking access to metro, market & dining" },
      { icon: "🛎️", label: "Services", val: "24/7 private tour concierge & airport transfers" }
    ]
  },
  {
    order: 13,
    viFile: '013_cho-ben-thanh-co-gi-choi.md',
    enFile: '013_things-to-do-in-ben-thanh-market.md',
    viVar: 'choBenThanhCoGiChoiHtml',
    enVar: 'thingsToDoInBenThanhMarketHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-market-atmosphere.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/ben-thanh-market-interior-ho-chi-minh-city.webp', captionVi: 'Không gian buôn bán đa sắc màu với hơn 1.500 gian hàng bên trong chợ', captionEn: 'A vibrant labyrinth of commerce spanning four interconnected halls' }
    ],
    badgesVi: [
      { icon: "🎪", text: "15 Trải Nghiệm Không Thể Bỏ Lỡ" },
      { icon: "📸", text: "Check-in 4 Cổng Đông Tây Nam Bắc" },
      { icon: "🍜", text: "Khám Phá Hẻm Ẩm Thực Bản Địa" },
      { icon: "🌙", text: "Dạo Phố Đi Bộ & Chợ Đêm" }
    ],
    badgesEn: [
      { icon: "🎪", text: "15 Curated Experiences" },
      { icon: "📸", text: "4 Iconic Heritage Gateways" },
      { icon: "🍜", text: "Epicurean Market Aisles" },
      { icon: "🌙", text: "Evening Bazaar Immersion" }
    ],
    statsVi: [
      { icon: "📍", label: "Địa Điểm", val: "Trung tâm Chợ Bến Thành, Quận 1" },
      { icon: "🕒", label: "Giờ Hoạt Động", val: "06:00 – 18:00 (chợ lồng) & 18:00 – 23:30 (chợ đêm)" },
      { icon: "🎟️", label: "Vé Vào Cửa", val: "Miễn phí 100%" }
    ],
    statsEn: [
      { icon: "📍", label: "Location", val: "Quach Thi Trang Square, District 1" },
      { icon: "🕒", label: "Hours", val: "06:00 - 18:00 (covered hall) & 18:00 - 23:30 (night bazaar)" },
      { icon: "🎟️", label: "Admission", val: "100% Free Entry" }
    ],
    factsVi: [
      { icon: "📍", label: "4 Cửa chính", val: "Cửa Nam (Đồng hồ), Cửa Bắc (Hoa tươi), Cửa Đông (Ăn uống), Cửa Tây (Giày dép)" },
      { icon: "📸", label: "Góc ảnh đẹp", val: "Phù điêu gốm Biên Hòa 1952 phía trên các vòm cửa" },
      { icon: "🍜", label: "Món ăn vặt", val: "Gỏi cuốn, bún suông, chè ba màu, nước mía sầu riêng" },
      { icon: "🎁", label: "Quà tặng", val: "Tranh sơn mài, nón lá trang trí, cà phê hạt mộc" }
    ],
    factsEn: [
      { icon: "📍", label: "4 Gateways", val: "South (Clock), North (Flowers), East (Food), West (Footwear)" },
      { icon: "📸", label: "Photo Angle", val: "1952 Bien Hoa ceramic relief sculptures above main portals" },
      { icon: "🍜", label: "Must-Tastes", val: "Fresh spring rolls, Bun Suong, three-color sweet soup" },
      { icon: "🎁", label: "Artisan Buys", val: "Lacquerware boxes, painted conical hats, artisan coffee" }
    ]
  },
  {
    order: 14,
    viFile: '014_kinh-nghiem-di-cho-ben-thanh.md',
    enFile: '014_ben-thanh-market-ultimate-travel-guide.md',
    viVar: 'kinhNghiemDiChoBenThanhHtml',
    enVar: 'benThanhMarketUltimateTravelGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-market-main-gate.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/ben-thanh-market-clock-tower-1.webp', captionVi: 'Tháp đồng hồ Cửa Nam sừng sững qua hơn 112 năm lịch sử Sài Gòn', captionEn: 'The monumental South Clock Tower standing proud for over 112 years' }
    ],
    badgesVi: [
      { icon: "📘", text: "Cẩm Nang Sinh Tồn A-Z 2026" },
      { icon: "🕒", text: "Khung Giờ Vàng Đi Chợ" },
      { icon: "🛵", text: "Bãi Gửi Xe Chuẩn Giá" },
      { icon: "💡", text: "Bí Quyết Mua Sắm An Toàn" }
    ],
    badgesEn: [
      { icon: "📘", text: "A-Z Survival Field Guide" },
      { icon: "🕒", text: "Optimal Visiting Hours" },
      { icon: "🛵", text: "Verified Parking Basements" },
      { icon: "💡", text: "Savvy Safety Protocols" }
    ],
    statsVi: [
      { icon: "📍", label: "Tọa Độ", val: "Đường Lê Lợi, Phường Bến Thành, Quận 1" },
      { icon: "🕒", label: "Giờ Mở Cửa", val: "06:00 – 18:00 (Nhà lồng) | 18:00 – 23:30 (Chợ đêm)" },
      { icon: "💵", label: "Điểm Đổi Ngoại Tệ", val: "Phố tiệm vàng Phan Chu Trinh (Hà Tâm, Mai Vân)" }
    ],
    statsEn: [
      { icon: "📍", label: "Coordinates", val: "Le Loi Boulevard, Ben Thanh, District 1" },
      { icon: "🕒", label: "Operating Hours", val: "06:00 – 18:00 (Hall) | 18:00 – 23:30 (Night Market)" },
      { icon: "💵", label: "Currency Hub", val: "Phan Chu Trinh Gold Shops (Ha Tam, Mai Van)" }
    ],
    factsVi: [
      { icon: "📍", label: "Vị trí gửi xe", val: "Tầng hầm Ga Metro Bến Thành hoặc TTTM Takashimaya" },
      { icon: "💵", label: "Đổi tiền", val: "Tiệm vàng Hà Tâm (số 2 Nguyễn An Ninh)" },
      { icon: "🕒", label: "Khung giờ đẹp nhất", val: "08:30 – 10:30 sáng (thoáng mát, sạp mở đủ)" },
      { icon: "🚨", label: "Hotline Công an", val: "+84 28 3829 7643 (Công an P. Bến Thành)" }
    ],
    factsEn: [
      { icon: "📍", label: "Best Parking", val: "Metro Station Basement or Saigon Centre Takashimaya" },
      { icon: "💵", label: "Top FX Exchange", val: "Ha Tam Gold Shop (2 Nguyen An Ninh)" },
      { icon: "🕒", label: "Best Hours", val: "08:30 – 10:30 AM (cooler, all aisles open)" },
      { icon: "🚨", label: "Police Hotline", val: "+84 28 3829 7643 (Ben Thanh Ward Police)" }
    ]
  },
  {
    order: 15,
    viFile: '015_canh-bao-lua-dao-chat-chem-cho-ben-thanh.md',
    enFile: '015_ben-thanh-market-scams-safety-guide.md',
    viVar: 'canhBaoLuaDaoChatChemChoBenThanhHtml',
    enVar: 'benThanhMarketScamsSafetyGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-market-tourist-tips.webp',
    extraImages: [],
    badgesVi: [
      { icon: "🚨", text: "Cảnh Báo 7 Cái Bẫy Du Khách" },
      { icon: "📊", text: "Bảng Giá Chuẩn Thực Tế 2026" },
      { icon: "🚕", text: "Nhận Biết Taxi Dù & Chặt Chém" },
      { icon: "🛡️", text: "Đường Dây Nóng Hỗ Trợ 24/7" }
    ],
    badgesEn: [
      { icon: "🚨", text: "7 Tourist Traps Decoded" },
      { icon: "📊", text: "2026 Verified Price Benchmarks" },
      { icon: "🚕", text: "Taxi Scam Neutralization" },
      { icon: "🛡️", text: "24/7 Emergency Support Lines" }
    ],
    statsVi: [
      { icon: "📍", label: "Vùng Nguy Cơ", val: "Các cổng chợ & vỉa hè đường Phan Chu Trinh, Lê Lợi" },
      { icon: "⚠️", label: "Chiêu Trò Phổ Biến", val: "Bẫy gánh dừa chụp ảnh, hét giá gấp 3-5 lần, taxi dù" },
      { icon: "📞", label: "Hotline Du Lịch", val: "Tổng đài 1022 (Nhánh 8) & Công an P. Bến Thành" }
    ],
    statsEn: [
      { icon: "📍", label: "Risk Zone", val: "Market gates & perimeter sidewalks along Le Loi" },
      { icon: "⚠️", label: "Top Traps", val: "Coconut photo trick, 3x-5x price markup, rogue taxis" },
      { icon: "📞", label: "Tourist Hotline", val: "Dial 1022 (Ext. 8) or Ward Police +84 28 3829 7643" }
    ],
    factsVi: [
      { icon: "📍", label: "Quy tắc túi xách", val: "Đeo balo phía trước ngực khi vào khu vực đông đúc" },
      { icon: "🥥", label: "Bẫy gánh dừa", val: "Không tùy tiện nhận gánh dừa lên vai chụp ảnh" },
      { icon: "🚕", label: "Taxi chuẩn", val: "Chỉ đi Vinasun (38 27 27 27) hoặc Mai Linh (38 38 38 38) hoặc Grab/Xanh SM" },
      { icon: "🏷️", label: "Nguyên tắc mua", val: "Chỉ mua khi người bán đồng ý mức giá bạn thấy thỏa đáng" }
    ],
    factsEn: [
      { icon: "📍", label: "Bag Protocol", val: "Carry backpacks in front in crowded market corridors" },
      { icon: "🥥", label: "Coconut Trap", val: "Politely decline fruit-vendor shoulder pole photo offers" },
      { icon: "🚕", label: "Trusted Taxis", val: "Stick strictly to Vinasun, Mai Linh, Grab, or Xanh SM" },
      { icon: "🏷️", label: "Purchase Rule", val: "Never feel pressured to buy; walk away with a smile" }
    ]
  },
  {
    order: 16,
    viFile: '016_doi-ngoai-te-cho-ben-thanh-ha-tam.md',
    enFile: '016_money-exchange-ben-thanh-ha-tam-guide.md',
    viVar: 'doiNgoaiTeChoBenThanhHaTamHtml',
    enVar: 'moneyExchangeBenThanhHaTamGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/currency-exchange-near-ben-thanh-market-1.webp',
    extraImages: [],
    badgesVi: [
      { icon: "💵", text: "Tiệm Vàng Hà Tâm Trứ Danh" },
      { icon: "⚡", text: "Tỷ Giá Ngoại Tệ Tốt Nhất TP.HCM" },
      { icon: "🔍", text: "Tiêu Chuẩn Tiền Đô USD Đổi Giá Cao" },
      { icon: "🛡️", text: "Quy Tắc Đếm Tiền & An Toàn" }
    ],
    badgesEn: [
      { icon: "💵", text: "Legendary Ha Tam Gold Shop" },
      { icon: "⚡", text: "Best City Foreign Exchange Rates" },
      { icon: "🔍", text: "USD Banknote Condition Standards" },
      { icon: "🛡️", text: "5-Step Cash Security Protocol" }
    ],
    statsVi: [
      { icon: "📍", label: "Địa Chỉ", val: "Số 2 Nguyễn An Ninh, Bến Thành, Quận 1 (Đối diện Cửa Tây)" },
      { icon: "🕒", label: "Giờ Giao Dịch", val: "07:30 – 20:30 Hàng ngày (Cả thứ 7 & Chủ nhật)" },
      { icon: "⚡", label: "Tốc Độ Đổi Tiền", val: "Chưa đầy 60 giây / giao dịch" }
    ],
    statsEn: [
      { icon: "📍", label: "Address", val: "2 Nguyen An Ninh, D1 (Opposite West Gate)" },
      { icon: "🕒", label: "Hours", val: "07:30 AM – 20:30 PM (7 Days a Week)" },
      { icon: "⚡", label: "Speed", val: "Under 60 seconds per cash transaction" }
    ],
    factsVi: [
      { icon: "📍", label: "Vị trí tiệm", val: "Góc đường Nguyễn An Ninh & Phan Chu Trinh" },
      { icon: "💵", label: "Tiêu chuẩn USD", val: "Tờ 100 USD đời mới (đầu to, dải băng xanh, không rách/mực)" },
      { icon: "⚡", label: "Tiệm lân cận", val: "Tiệm vàng Mai Vân (ngay cạnh Hà Tâm, tỷ giá tương đương)" },
      { icon: "🛡️", label: "Bảo mật", val: "Đếm tiền ngay tại quầy, cất tiền kín đáo trước khi bước ra ngoài" }
    ],
    factsEn: [
      { icon: "📍", label: "Storefront", val: "Corner Nguyen An Ninh & Phan Chu Trinh" },
      { icon: "💵", label: "Prime USD", val: "Series 2013+ $100 notes (clean, crisp, no stamps/tears)" },
      { icon: "⚡", label: "Alternative", val: "Mai Van Gold Shop (next door with matching rates)" },
      { icon: "🛡️", label: "Cash Security", val: "Count cash on the counter; stow before stepping outside" }
    ]
  },
  {
    order: 17,
    viFile: '017_bai-gui-xe-quanh-cho-ben-thanh.md',
    enFile: '017_parking-guide-near-ben-thanh-market.md',
    viVar: 'baiGuiXeQuanhChoBenThanhHtml',
    enVar: 'parkingGuideNearBenThanhMarketHtml',
    featuredImage: 'https://media.thericetour.com/uploads/ben-thanh-market-motorbike-parking.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/ben-thanh-metro-station-entrance.webp', captionVi: 'Hầm giữ xe hiện đại thuộc quần thể Ga ngầm Trung tâm Bến Thành', captionEn: 'Underground parking facility at the modern Ben Thanh Metro Station complex' }
    ],
    badgesVi: [
      { icon: "🛵", text: "6 Bãi Gửi Xe Quy Chuẩn Quận 1" },
      { icon: "🚇", text: "Hầm Gửi Xe Ga Metro Bến Thành" },
      { icon: "🚗", text: "Bãi Đỗ Ô Tô Saigon Centre" },
      { icon: "⚠️", text: "Tránh Bãi Chặt Chém Tự Phát" }
    ],
    badgesEn: [
      { icon: "🛵", text: "6 Regulated Downtown Basements" },
      { icon: "🚇", text: "Metro Subterranean Parking" },
      { icon: "🚗", text: "Saigon Centre Car Garages" },
      { icon: "⚠️", text: "Curb Extortion Prevention" }
    ],
    statsVi: [
      { icon: "📍", label: "Bán Kính", val: "100m – 500m quanh Chợ Bến Thành" },
      { icon: "🛵", label: "Giá Vé Xe Máy", val: "5.000 – 10.000 VNĐ / lượt (Quy định nhà nước)" },
      { icon: "🚗", label: "Giá Gửi Ô Tô", val: "35.000 – 50.000 VNĐ / block 2 giờ" }
    ],
    statsEn: [
      { icon: "📍", label: "Perimeter", val: "100m – 500m radius around Ben Thanh Market" },
      { icon: "🛵", label: "Scooter Tariffs", val: "5,000 – 10,000 VND / entry (Municipal benchmark)" },
      { icon: "🚗", label: "Car Tariffs", val: "35,000 – 50,000 VND / 2-hour block" }
    ],
    factsVi: [
      { icon: "📍", label: "Bãi khuyên dùng nhất", val: "Hầm Ga Metro Bến Thành & B2 Saigon Centre (Takashimaya)" },
      { icon: "🛵", label: "Bãi vỉa hè", val: "Tránh gửi xe ở các bãi tự phát trên đường Phan Chu Trinh (hét 20k-50k)" },
      { icon: "🚫", label: "Lưu ý đỗ xe", val: "Đường Lê Lợi và trước chợ cấm dừng đỗ hoàn toàn" },
      { icon: "🎫", label: "Thẻ giữ xe", val: "Giữ kỹ thẻ từ hoặc vé giấy, chụp lại ảnh xe khi gửi" }
    ],
    factsEn: [
      { icon: "📍", label: "Top Recommended", val: "Metro Station Basement & B2 Saigon Centre (Takashimaya)" },
      { icon: "🛵", label: "Street Touts", val: "Avoid informal curb attendants quoting 20k-50k VND" },
      { icon: "🚫", label: "No Parking Zones", val: "Strict zero-curb stopping on Le Loi Boulevard" },
      { icon: "🎫", label: "Parking Card", val: "Safeguard magnetic card; photograph your parking spot" }
    ]
  },
  {
    order: 18,
    viFile: '018_di-tu-san-bay-tan-son-nhat-ve-ben-thanh.md',
    enFile: '018_tan-son-nhat-airport-to-ben-thanh-transfer-guide.md',
    viVar: 'diTuSanBayTanSonNhatVeBenThanhHtml',
    enVar: 'tanSonNhatAirportToBenThanhTransferGuideHtml',
    featuredImage: 'https://media.thericetour.com/uploads/tan-son-nhat-airport.webp',
    extraImages: [
      { url: 'https://media.thericetour.com/uploads/ho-chi-minh-city-public-bus-stop.webp', captionVi: 'Trạm đón xe buýt nhanh tuyến 109 hiện đại ngay sảnh ga quốc tế và quốc nội', captionEn: 'Express Bus 109 passenger stop at Tan Son Nhat domestic and international terminals' }
    ],
    badgesVi: [
      { icon: "✈️", text: "Từ Tân Sơn Nhất Về Quận 1" },
      { icon: "🚌", text: "Xe Buýt Vàng 109 Tiện Lợi" },
      { icon: "📱", text: "Hướng Dẫn Đón Grab Tầng 3-4 TCP" },
      { icon: "🚕", text: "Làn Taxi Vinasun & Mai Linh" }
    ],
    badgesEn: [
      { icon: "✈️", text: "SGN Airport to District 1" },
      { icon: "🚌", text: "Yellow Bus 109 Express" },
      { icon: "📱", text: "TCP Garage App Pickup Drill" },
      { icon: "🚕", text: "Vinasun & Mai Linh Verified Lanes" }
    ],
    statsVi: [
      { icon: "📍", label: "Quãng Đường", val: "7.5 km – 8.5 km từ sân bay về chợ" },
      { icon: "⏱️", label: "Thời Gian Di Chuyển", val: "25 phút (giờ vắng) – 60 phút (giờ cao điểm)" },
      { icon: "💰", label: "Chi Phí Tham Khảo", val: "5.000 – 220.000 VNĐ tùy phương tiện" }
    ],
    statsEn: [
      { icon: "📍", label: "Transit Distance", val: "7.5 km – 8.5 km to Ben Thanh Market" },
      { icon: "⏱️", label: "Transit Duration", val: "25 mins (off-peak) to 60 mins (rush hour)" },
      { icon: "💰", label: "Budget Range", val: "5,000 – 220,000 VND across 5 options" }
    ],
    factsVi: [
      { icon: "📍", label: "Lựa chọn tiết kiệm nhất", val: "Xe buýt 109 (20.000 VNĐ) hoặc xe buýt 152 (5.000 VNĐ)" },
      { icon: "📱", label: "Đón xe công nghệ", val: "Di chuyển lên Tầng 3, 4 hoặc 5 nhà giữ xe TCP" },
      { icon: "🚕", label: "Taxi truyền thống", val: "Xếp hàng đón xe tại Làn D1 / D2 (Vinasun, Mai Linh)" },
      { icon: "🚗", label: "Dịch vụ đưa đón riêng", val: "Đặt trước xe riêng qua The Rice Tour có tài xế đón bảng tên" }
    ],
    factsEn: [
      { icon: "📍", label: "Best Value Option", val: "Express Bus 109 (20,000 VND) or Bus 152 (5,000 VND)" },
      { icon: "📱", label: "Ride-Hailing Pickups", val: "Elevator up to Floors 3, 4 or 5 of TCP multi-story garage" },
      { icon: "🚕", label: "Metered Taxi Stalls", val: "Queue at Ground Lane D1 / D2 for Vinasun or Mai Linh" },
      { icon: "🚗", label: "Private Chauffeur", val: "Pre-book with The Rice Tour for personalized nameboard greeting" }
    ]
  }
];

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function cleanSlug(str) {
  const decoded = decodeHtmlEntities(str)
    .replace(/<[^>]+>/g, '')
    .replace(/^[⚡🌟📍\d\.\s]+/, '')
    .trim();
  return decoded
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'and')
    .replace(/['’"]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatTOC(body, lang = 'vi') {
  const tokens = marked.lexer(body);
  const headings = tokens.filter(t => t.type === 'heading' && (t.depth === 2 || t.depth === 3));
  let tocHtml = '';
  
  headings.forEach(h => {
    const rawText = decodeHtmlEntities(h.text).replace(/<[^>]+>/g, '').trim();
    if (rawText.toLowerCase().includes('quick overview') || rawText.toLowerCase().includes('thông số ấn tượng')) return;
    
    const id = cleanSlug(h.text);
    const displayText = rawText.replace(/^[⚡🌟📍\d\.\s]+/, '').trim();
    
    if (h.depth === 2) {
      tocHtml += `  <a href="#${id}" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">${displayText}</a>\n`;
    } else {
      tocHtml += `  <a href="#${id}" class="block transition-colors leading-tight py-1 text-slate-500 hover:text-amber-700 pl-2 text-[12.5px]">${displayText}</a>\n`;
    }
  });
  return tocHtml;
}

function compileArticle(cfg, lang = 'vi') {
  const isVi = lang === 'vi';
  const filePath = path.join(isVi ? viDir : enDir, isVi ? cfg.viFile : cfg.enFile);
  const raw = fs.readFileSync(filePath, 'utf8');

  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  const fm = {};
  if (fmMatch) {
    fmMatch[1].split('\n').forEach(line => {
      const idx = line.indexOf(':');
      if (idx > -1) {
        const k = line.slice(0, idx).trim();
        let v = line.slice(idx + 1).trim();
        if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
        fm[k] = v;
      }
    });
  }

  const slug = fm.slug || (isVi ? cfg.viFile.replace(/^\d+_/, '').replace('.md', '') : cfg.enFile.replace(/^\d+_/, '').replace('.md', ''));
  const title = fm.title || (isVi ? 'Cẩm Nang Bến Thành' : 'Ben Thanh Market Guide');
  const subtitle = fm.subtitle || (isVi ? 'Cẩm nang thực địa và trải nghiệm văn hóa trọn vẹn 2026' : 'A 2026 In-Depth Cultural Expedition & Field Guide');
  const readTime = fm.read_time || (isVi ? 14 : 12);
  const pubDate = isVi ? '07 Tháng 9, 2026' : 'Sep 7, 2026';
  const featuredImage = cfg.featuredImage || fm.featured_image || 'https://media.thericetour.com/uploads/ben-thanh-market-clock-tower.webp';

  let body = raw.replace(/^---\n[\s\S]*?\n---/, '').trim();
  // Strip redundant H1 at top of body
  body = body.replace(/^#\s+.*$/m, '');

  // Extract lead quote if present
  let lead = '';
  const leadMatch = body.match(/^>\s*\*(?:“|")([\s\S]*?)(?:”|")\*/m) || body.match(/^>\s*(?:“|")([\s\S]*?)(?:”|")/m);
  if (leadMatch) {
    lead = leadMatch[1].replace(/\n>\s*/g, ' ').trim();
    body = body.replace(/^>[\s\S]*?\n\n/m, '');
  } else {
    lead = isVi 
      ? 'Chỉ cần tản bộ trong bán kính một cây số quanh ngôi chợ trăm tuổi này, bạn sẽ bước qua ba thời kỳ của thành phố: từ những dãy phố buôn bán thời thuộc địa, các dinh thự Art Deco đầu thế kỷ 20, cho đến không gian ngầm hiện đại của tuyến metro vừa đi vào hoạt động.'
      : 'Early in the morning, before traffic builds around Quach Thi Trang Square, the chime of Ben Thanh Market South Clock Tower marks the start of another southern day. Discover layered heritage, street gastronomy, and subterranean metro concourses.';
  }

  // Build Badges
  const badges = isVi ? cfg.badgesVi : cfg.badgesEn;
  const badgesHtml = badges.map(b => `<span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-semibold rounded-full border border-slate-200/80 shadow-2xs">${b.icon} ${b.text}</span>`).join('\n          ');

  // Build 3-Item Quick Stats Bar
  const stats = (isVi ? cfg.statsVi : cfg.statsEn).slice(0, 3);
  const statsHtml = stats.map(s => `
        <div class="flex items-center gap-3.5 md:px-5 first:pl-0 last:pr-0">
          <div class="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/80 shrink-0 shadow-2xs">${s.icon}</div>
          <div class="min-w-0 flex-1">
            <div class="text-[11px] sm:text-[12px] font-bold text-slate-600 uppercase tracking-wider mb-0.5 truncate">${s.label}</div>
            <div class="text-[13.5px] sm:text-[14.5px] font-bold text-slate-900 leading-snug">${s.val}</div>
          </div>
        </div>`).join('\n');

  // Build Right Sidebar Facts
  const facts = isVi ? cfg.factsVi : cfg.factsEn;
  const factsHtml = facts.map(f => `
        <div class="flex gap-3">
          <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80 text-lg">${f.icon}</div>
          <div>
            <div class="text-[11px] text-slate-600 uppercase tracking-wider font-bold">${f.label}</div>
            <div class="font-bold text-slate-900 text-[13.5px]">${f.val}</div>
          </div>
        </div>`).join('\n');

  // Build Related Guides
  const otherConfigs = articlesConfig.filter(c => c.order !== cfg.order).slice(0, 4);
  const relatedHtml = otherConfigs.map(c => {
    const rSlug = isVi ? c.viFile.replace(/^\d+_/, '').replace('.md', '') : c.enFile.replace(/^\d+_/, '').replace('.md', '');
    const rTitle = isVi 
      ? (c.order === 1 ? 'Địa Điểm Nổi Tiếng Quanh Bến Thành' : c.order === 2 ? 'Bảo Tàng Mỹ Thuật TP.HCM' : c.order === 3 ? 'Khu Ẩm Thực Chợ Bến Thành' : c.order === 6 ? 'Ga Ngầm Metro Bến Thành' : c.order === 14 ? 'Kinh Nghiệm Đi Chợ Bến Thành' : 'Cẩm Nang Bến Thành 2026')
      : (c.order === 1 ? 'Things to Do Near Ben Thanh' : c.order === 2 ? 'HCMC Museum of Fine Arts' : c.order === 3 ? 'Ben Thanh Market Food Guide' : c.order === 6 ? 'Central Metro Station Guide' : c.order === 14 ? 'Ultimate Travel Guide' : 'Ben Thanh Travel Guide');
    return `
      <a href="/${rSlug}" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          ${rTitle}
        </div>
      </a>`;
  }).join('\n');

  // Format TOC
  const tocHtml = formatTOC(body, lang);

  // Inject additional Media photos into body if defined
  if (cfg.extraImages && cfg.extraImages.length > 0) {
    const extraImageHtml = cfg.extraImages.map(img => `
<figure class="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200 not-prose">
  <img src="${img.url}" alt="${isVi ? img.captionVi : img.captionEn}" class="w-full h-auto object-cover max-h-[500px]" loading="lazy" />
  <figcaption class="text-xs text-slate-500 italic p-3 text-center bg-slate-50 border-t border-slate-100">${isVi ? img.captionVi : img.captionEn}</figcaption>
</figure>
`).join('\n');

    // Insert extra images before the second H2 if possible
    const h2Positions = [...body.matchAll(/^##\s+/gm)];
    if (h2Positions.length >= 2) {
      const pos = h2Positions[1].index;
      body = body.slice(0, pos) + extraImageHtml + '\n\n' + body.slice(pos);
    } else {
      body += '\n\n' + extraImageHtml;
    }
  }

  // Parse Markdown to HTML
  let parsedContent = marked.parse(body);

  // Inject Heading IDs and styling
  parsedContent = parsedContent.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, text) => {
    const id = cleanSlug(text);
    return `<div class="border-l-4 border-amber-500 pl-4 mt-10 mb-4"><h2 id="${id}" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">${text}</h2></div>`;
  });

  parsedContent = parsedContent.replace(/<h3([^>]*)>(.*?)<\/h3>/gi, (match, attrs, text) => {
    const id = cleanSlug(text);
    return `<h3 id="${id}" class="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">${text}</h3>`;
  });

  // Style Tables with responsive wrapper
  parsedContent = parsedContent.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match, content) => {
    let styled = content.replace(/<th([^>]*)>/gi, '<th class="bg-slate-900 text-white font-serif px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">');
    styled = styled.replace(/<td([^>]*)>/gi, '<td class="px-4 py-3 border-b border-slate-100 text-slate-700 text-sm">');
    return `<div class="overflow-x-auto my-8 rounded-2xl border border-slate-200/90 shadow-2xs"><table class="w-full text-sm divide-y divide-slate-100">${styled}</table></div>`;
  });

  // Style Blockquotes
  parsedContent = parsedContent.replace(/<blockquote([^>]*)>([\s\S]*?)<\/blockquote>/gi, (match, attrs, content) => {
    if (match.includes('instagram-media') || match.includes('instagram.com')) return match; // Leave Instagram blockquotes untouched
    return `<blockquote class="border-l-4 border-amber-500 bg-amber-50/60 p-5 rounded-r-2xl italic my-6 text-slate-800 text-[16px]">${content}</blockquote>`;
  });

  // Tour Booking CTA Widget
  const ctaHtml = isVi ? `
    <div class="my-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 border border-amber-300 shadow-sm not-prose">
      <div class="max-w-xl">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">Du Lịch Có GUU • The Rice Tour</span>
        <h3 class="font-serif text-2xl font-bold text-slate-950 mb-2">Trải Nghiệm Sài Gòn Riêng Tư & Đậm Chất Bản Địa</h3>
        <p class="text-slate-600 text-sm leading-relaxed mb-6">Đồng hành cùng chuyên gia bản địa của The Rice Tour trong hành trình tản bộ di sản, khám phá ẩm thực hẻm sâu và trải nghiệm phong vị Sài Gòn chậm rãi.</p>
        <div class="flex flex-wrap gap-3">
          <a href="/tailor-made" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm transition-colors">Thiết Kế Lịch Trình Riêng ➜</a>
          <a href="/tours" class="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs transition-colors">Xem Danh Sách Tour</a>
        </div>
      </div>
    </div>
  ` : `
    <div class="my-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 border border-amber-300 shadow-sm not-prose">
      <div class="max-w-xl">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">Bespoke Inbound Journeys • The Rice Tour</span>
        <h3 class="font-serif text-2xl font-bold text-slate-950 mb-2">Curate Your Private Saigon Heritage Journey</h3>
        <p class="text-slate-600 text-sm leading-relaxed mb-6">Discover the hidden Indochine quarters, intimate street food alleys, and historic market corridors alongside our in-house destination architects.</p>
        <div class="flex flex-wrap gap-3">
          <a href="/tailor-made" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm transition-colors">Tailor-Made Journey ➜</a>
          <a href="/tours" class="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs transition-colors">Explore All Journeys</a>
        </div>
      </div>
    </div>
  `;

  // Epilogue Box
  const epilogueTitle = isVi ? 'Lắng Đọng Tâm Hồn Sài Gòn' : 'The Timeless Soul of Saigon';
  const epilogueText = isVi
    ? 'Dù bao nhiêu tòa tháp kính tương lai mọc lên trên bầu trời phương Nam, khu vực quanh Chợ Bến Thành vẫn lưu giữ một tâm hồn nguyên vẹn: được dệt nên từ tiếng còi xe rộn rã, tiếng mời chào ngọt ngào của những gánh chè ba đời, nét trầm tư của những ô cửa gỗ Pháp trăm năm, và niềm lạc quan bất tận của những con người xem mảnh đất này là quê hương.'
    : 'No matter how many futuristic glass towers rise into the southern sky, the quarter surrounding Ben Thanh Market preserves an irreplaceable human soul. It is a soul woven from the rhythmic clatter of street life, the sweet call of wandering dessert vendors, the stoic beauty of French brick facades, and the unquenchable optimism of those who call this river city home.';

  const epilogueHtml = `
    <div class="my-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-50/50 to-transparent border border-amber-200/80 not-prose">
      <h3 class="font-serif text-xl font-bold text-slate-900 mb-2">${epilogueTitle}</h3>
      <p class="text-slate-700 text-[15px] leading-relaxed italic">${epilogueText}</p>
    </div>
  `;

  const fullHtml = `<!-- layout: landing -->
<div class="bg-[#F8F9FA] text-[#1E293B] font-sans antialiased selection:bg-[#F7931E] selection:text-white">

    <!-- ================= HERO SECTION ================= -->
    <section class="relative w-full min-h-[550px] lg:min-h-[650px] overflow-hidden flex flex-col justify-center pt-32 pb-20 bg-slate-950">
      <div class="absolute inset-0 z-0">
        <img 
          src="${featuredImage}" 
          alt="${title}" 
          class="w-full h-full object-cover object-center scale-105 transform filter brightness-60 contrast-105"
          loading="eager"
          fetchpriority="high"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
      </div>

      <div class="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-[13px] text-white/70 font-medium mb-6">
          <a href="/" class="hover:text-white transition-colors">${isVi ? 'Trang chủ' : 'Home'}</a>
          <span class="text-white/40">/</span>
          <a href="/blog" class="hover:text-white transition-colors">${isVi ? 'Cẩm nang du lịch' : 'Travel Guides'}</a>
          <span class="text-white/40">/</span>
          <span class="text-white font-semibold line-clamp-1">${title}</span>
        </div>

        <!-- Titles -->
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          ${title}
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          ${subtitle}
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          ${lead}
        </p>

        <!-- Author Meta -->
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>${isVi ? 'Cập nhật:' : 'Published:'} ${pubDate}</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">${readTime} ${isVi ? 'phút đọc' : 'min read'}</span>
          </div>
        </div>

        <!-- Badges Line -->
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          ${badgesHtml}
        </div>

      </div>
    </section>

    <!-- ================= MAIN CONTENT GRID (3 COLUMNS) ================= -->
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

        <!-- ---------------- LEFT SIDEBAR (TOC) ---------------- -->
        <aside class="hidden lg:block lg:col-span-3 sticky top-24">
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 overflow-hidden">
            <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-amber-500 pl-3 text-sm tracking-wide uppercase">
              ${isVi ? 'Mục Lục Cẩm Nang' : 'Table of Contents'}
            </div>
            
            <nav class="space-y-1 text-[13.5px] font-medium max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
              <a href="#introduction" class="flex items-center gap-2 text-amber-900 bg-amber-50/80 px-3 py-2 rounded-lg transition-colors font-bold">
                <span class="text-amber-600 text-base">🏠</span> ${isVi ? 'Giới thiệu tổng quan' : 'Introduction'}
              </a>
              
              <div class="pt-1.5 space-y-1 border-l border-slate-200 ml-3 pl-3">
                ${tocHtml}
              </div>
            </nav>

            <div class="pt-5 mt-6 border-t border-slate-100">
              <a 
                href="/tailor-made" 
                class="block w-full py-2.5 px-4 bg-amber-50 hover:bg-amber-100 text-amber-900 text-center font-bold text-xs rounded-xl border border-amber-200 transition-colors"
              >
                ${isVi ? 'Thiết Kế Tour Riêng ➜' : 'Plan Private Journey ➜'}
              </a>
            </div>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar (3 Curated Dimensions) -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-slate-200/80 my-8">
            ${statsHtml}
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16.5px] prose-p:text-slate-700">
            ${parsedContent}
          </div>

          <!-- Tour CTA Widget -->
          ${ctaHtml}

          <!-- Epilogue -->
          ${epilogueHtml}

        </main>

        <!-- ---------------- RIGHT SIDEBAR (FACTS & RELATED) ---------------- -->
        <aside class="col-span-1 lg:col-span-3 space-y-8">
          
          <!-- Quick Expedition Facts Card -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
            <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-amber-500 pl-3 text-sm tracking-wide uppercase">
              ${isVi ? 'Thông Tin Thực Địa' : 'Quick Facts'}
            </div>
            <div class="space-y-4">
              ${factsHtml}
            </div>
          </div>

          <!-- Related Travel Guides -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
            <div class="flex items-center gap-2 font-bold text-slate-900 mb-4 border-l-4 border-amber-500 pl-3 text-sm tracking-wide uppercase">
              ${isVi ? 'Cẩm Nang Cùng Chủ Đề' : 'Related Guides'}
            </div>
            <div class="space-y-2.5">
              ${relatedHtml}
            </div>
          </div>

          <!-- Inbound Advisory Box -->
          <div class="bg-amber-500/10 border border-amber-300/80 rounded-2xl p-6 text-center space-y-3">
            <div class="text-2xl">🌿</div>
            <h4 class="font-serif font-bold text-slate-900 text-base">${isVi ? 'Chuyên Gia Bản Địa Hỗ Trợ' : 'Inbound Concierge Desk'}</h4>
            <p class="text-xs text-slate-600 leading-relaxed">${isVi ? 'Cần tư vấn lộ trình riêng tư, phương tiện hay trải nghiệm đặc thù quanh Bến Thành? Liên hệ với chúng tôi 24/7.' : 'Need assistance crafting a bespoke walking circuit, private driver, or local dining reservations? Reach out 24/7.'}</p>
            <a href="https://wa.me/84962333621" target="_blank" class="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-colors shadow-sm">
              WhatsApp Concierge
            </a>
          </div>

        </aside>

      </div>
    </div>

    <!-- Instagram Embed Activation Script -->
    <script is:inline>
      if (typeof window !== 'undefined' && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    </script>
</div>`;

  return fullHtml;
}

function run() {
  console.log('Compiling all 18 Ben Thanh articles (VI & EN) into standard Magazine 3 Cột layout...');
  
  let tsCode = `// src/data/ben-thanh-articles.ts\n// Auto-generated 3-Column Magazine Articles for Ben Thanh Campaign\n\n`;

  // Array to collect metadata
  const metadataList = [];

  for (const cfg of articlesConfig) {
    console.log(`Processing Article ${cfg.order}: ${cfg.viFile} & ${cfg.enFile}`);

    // Compile Vietnamese
    const viHtml = compileArticle(cfg, 'vi');
    // Escape backticks and ${} in string literals
    const safeViHtml = viHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    tsCode += `export const ${cfg.viVar} = \`${safeViHtml}\`;\n\n`;

    // Compile English
    const enHtml = compileArticle(cfg, 'en');
    const safeEnHtml = enHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    tsCode += `export const ${cfg.enVar} = \`${safeEnHtml}\`;\n\n`;

    // Read frontmatters for metadata
    const viRaw = fs.readFileSync(path.join(viDir, cfg.viFile), 'utf8');
    const enRaw = fs.readFileSync(path.join(enDir, cfg.enFile), 'utf8');

    const viTitle = viRaw.match(/^title:\s*\"?([^\n\"]+)\"?/m)?.[1] || '';
    const enTitle = enRaw.match(/^title:\s*\"?([^\n\"]+)\"?/m)?.[1] || '';
    const viSubtitle = viRaw.match(/^subtitle:\s*\"?([^\n\"]+)\"?/m)?.[1] || '';
    const enSubtitle = enRaw.match(/^subtitle:\s*\"?([^\n\"]+)\"?/m)?.[1] || '';
    const viSlug = viRaw.match(/^slug:\s*\"?([^\n\"]+)\"?/m)?.[1] || cfg.viFile.replace(/^\d+_/, '').replace('.md', '');
    const enSlug = enRaw.match(/^slug:\s*\"?([^\n\"]+)\"?/m)?.[1] || cfg.enFile.replace(/^\d+_/, '').replace('.md', '');

    metadataList.push({
      order: cfg.order,
      slug_vi: viSlug,
      slug_en: enSlug,
      title_vi: viTitle,
      title_en: enTitle,
      subtitle_vi: viSubtitle,
      subtitle_en: enSubtitle,
      featuredImage: cfg.featuredImage,
      readTime: 14,
      publishedAt: '2026-09-07T08:00:00.000Z',
      viVar: cfg.viVar,
      enVar: cfg.enVar
    });
  }

  // Export metadata
  tsCode += `export const benThanhArticlesMetadata = ${JSON.stringify(metadataList, null, 2)};\n\n`;

  // Export posts array for database seeding
  tsCode += `export const benThanhPostsForDatabase = [\n`;
  for (const meta of metadataList) {
    tsCode += `  {
    id: 'bt_vi_${meta.order}',
    title: ${JSON.stringify(meta.title_vi)},
    slug: ${JSON.stringify(meta.slug_vi)},
    featuredImage: ${JSON.stringify(meta.featuredImage)},
    excerpt: ${JSON.stringify(meta.subtitle_vi || meta.title_vi)},
    content: ${meta.viVar},
    status: 'published',
    format: 'landing',
    contentFormat: 'html',
    author: 'The Rice Tour Editorial',
    publishedAt: ${JSON.stringify(meta.publishedAt)}
  },
  {
    id: 'bt_en_${meta.order}',
    title: ${JSON.stringify(meta.title_en)},
    slug: ${JSON.stringify(meta.slug_en)},
    featuredImage: ${JSON.stringify(meta.featuredImage)},
    excerpt: ${JSON.stringify(meta.subtitle_en || meta.title_en)},
    content: ${meta.enVar},
    status: 'published',
    format: 'landing',
    contentFormat: 'html',
    author: 'The Rice Tour Editorial',
    publishedAt: ${JSON.stringify(meta.publishedAt)}
  },\n`;
  }
  tsCode += `];\n`;

  fs.writeFileSync(outputFile, tsCode, 'utf8');
  console.log(`✅ Successfully generated ${outputFile} (${(fs.statSync(outputFile).size / 1024 / 1024).toFixed(2)} MB)`);
}

run();
