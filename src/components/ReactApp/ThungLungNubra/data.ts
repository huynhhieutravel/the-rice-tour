import type { Chapter, Photo, FaqItem, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: "overview",
    number: "01",
    locationName: "THUNG LŨNG NUBRA",
    title: "Tuyệt Tác Thiên Nhiên Độc Bản",
    subtitle: "Vẻ đẹp mê hoặc giữa đại ngàn",
    abstract: "Nubra Valley là một trong số rất ít nơi trên thế giới mà trong cùng một ngày, du khách có thể băng qua đèo tuyết cao hơn 5.000 m, đi giữa sa mạc cát, cưỡi lạc đà hai bướu và khám phá <a href=\"/tu-vien-ladakh\" class=\"text-amber-700 underline font-semibold hover:text-amber-600 transition-colors\">những tu viện Phật giáo</a> hàng trăm năm tuổi. Chính sự tương phản ấy khiến Nubra trở thành điểm đến độc đáo nhất của Ladakh.",
    paragraphs: [
      "<p>Diskit nằm cách <a href=\"/cho-leh-ladakh\" class=\"text-amber-700 underline font-semibold hover:text-amber-600 transition-colors\">thị trấn Leh</a> khoảng 120 km. Sông Shyok, một phụ lưu của <a href=\"/song-indus\" class=\"text-amber-700 underline font-semibold hover:text-amber-600 transition-colors\">sông Indus</a>, gặp sông Nubra để tạo thành một thung lũng lớn ngăn cách Dãy Ladakh và Karakoram.</p>",
      "<p>Điều làm nên giá trị độc bản của Nubra chính là sự hội tụ kỳ diệu của địa hình. Chỉ trong một ngày, bạn có thể nhìn thấy những <strong>đỉnh núi phủ tuyết</strong> vĩnh cửu, băng qua những <strong>dòng sông băng</strong> hùng vĩ, và ngay sau đó lại đặt chân lên <strong>sa mạc cát</strong> mênh mông rực nắng.</p>",
      "<p>Đặc biệt, từ cuối tháng 3 đến tháng 4, Nubra Valley bước vào <strong>mùa hoa mơ nở</strong>. Những ngôi làng phủ sắc trắng hồng, tạo nên khung cảnh hoàn toàn khác với Ladakh mùa hè. Phong cảnh cực rộng, những khuôn mặt núi non trùng điệp và dòng sông Shyok chảy giữa thung lũng sẽ khiến bạn bị cuốn hút ngay từ cái nhìn đầu tiên.</p>"
    ],
    imgUrl: "https://media.fittour.vn/uploads/2022/06/con-suoi-gan-thung-lung.webp",
    imgCaption: "Mùa xuân tại thung lũng Nubra"
  },
  {
    id: "silk-road",
    number: "02",
    locationName: "DẤU ẤN LỊCH SỬ",
    title: "Ốc Đảo Trên Con Đường Tơ Lụa",
    subtitle: "Giao lộ của những thương nhân",
    abstract: "Nubra không chỉ là một thung lũng đẹp, mà từng là một trạm trung chuyển sầm uất trên <strong>Con đường Tơ lụa (Silk Road)</strong> kết nối Leh với Yarkand (Tân Cương).",
    paragraphs: [
      "<p>Trong nhiều thế kỷ, các đoàn lữ hành từ Yarkand, Trung Á và Tây Tạng từng đi qua Nubra Valley để trao đổi lụa, trà, len pashmina và gia vị. Những đàn <strong>Lạc đà hai bướu (Bactrian Camel)</strong> còn tồn tại ở Hunder ngày nay chính là dấu tích sống động của tuyến thương mại huyền thoại ấy.</p>",
      "<p>Khi biên giới đóng cửa sau những biến cố lịch sử, các thương nhân không thể trở về, để lại những chú lạc đà này thích nghi sinh tồn và trở thành biểu tượng vĩnh cửu của Nubra đến tận bây giờ.</p>"
    ],
    imgUrl: "https://media.fittour.vn/uploads/2022/06/doan-nguoi-cuoi-lac-da-o-thung-lung-nubra.webp",
    imgCaption: "Hậu duệ của lạc đà Con đường Tơ lụa"
  },
  {
    id: "hunder",
    number: "03",
    locationName: "SA MẠC LẠNH",
    title: "Sa Mạc Lạnh Hunder & Lạc Đà Bactrian",
    subtitle: "Sự tương phản diệu kỳ",
    abstract: "Hunder sở hữu một sự kết hợp cực hiếm: sa mạc lạnh, sông Shyok, lạc đà hai bướu và dãy Karakoram hùng vĩ phía sau.",
    paragraphs: [
      "<p>Hunder thực sự là một kỳ quan địa lý. Nằm gọn giữa thung lũng dọc theo dòng <strong>sông Shyok</strong>, nơi đây sở hữu những cồn cát nhấp nhô của một <strong>sa mạc lạnh</strong>, được bao quanh bởi những rừng dương (poplar forests) xanh mướt.</p>",
      "<p>Có lẽ Hunder là một trong số rất ít nơi trên thế giới mà phía trước là những đồi cát vàng, phía sau lại là các đỉnh núi phủ tuyết của dãy Karakoram.</p>",
      "<div class=\"bg-gradient-to-br from-amber-50/80 to-stone-50 p-6 md:p-8 rounded-2xl border border-amber-950/5 shadow-inner w-full relative !mt-8\"><span class=\"font-serif text-5xl md:text-6xl leading-none text-amber-600/30 font-bold absolute top-2 md:top-4 left-2 md:left-4\">“</span><p class=\"font-serif text-base md:text-lg text-stone-800 italic pl-6 md:pl-8 leading-relaxed relative z-10\">Nhiều du khách FIT TOUR chia sẻ rằng khoảnh khắc đáng nhớ nhất ở Nubra không phải lúc cưỡi lạc đà, mà là khi hoàng hôn buông xuống trên cồn cát Hunder, phía xa là dãy Karakoram phủ tuyết. Sự tương phản giữa sa mạc và núi tuyết khiến khung cảnh trở nên rất khác bất kỳ nơi nào khác ở Himalaya.</p></div>"
    ],
    imgUrl: "https://media.fittour.vn/uploads/2022/06/du-khach-viet-hao-hung-chup-anh-cung-lac-da-o-ladakh.webp",
    imgCaption: "Du khách FIT TOUR trải nghiệm cưỡi lạc đà"
  },
  {
    id: "turtuk",
    number: "04",
    locationName: "BIÊN CƯƠNG XA XÔI",
    title: "Văn Hóa Balti Ở Làng Cực Bắc Turtuk",
    subtitle: "Ngôi làng giáp biên giới",
    abstract: "Turtuk không chỉ đẹp bởi những vườn mơ, mà còn là nơi lưu giữ <strong>văn hóa Balti</strong> độc đáo, từng thuộc về Pakistan trước năm 1971.",
    paragraphs: [
      "<p>Nằm sát biên giới Ấn Độ và Pakistan, Turtuk là ngôi làng cực Bắc của Ấn Độ và chỉ vừa được mở cửa cho khách du lịch từ năm 2010. Ngôi làng này từng thuộc quyền kiểm soát của Pakistan trước cuộc chiến tranh Ấn - Pak năm 1971.</p>",
      "<p>Chính vì vậy, Turtuk mang một luồng gió khác hoàn toàn so với phần còn lại của Ladakh. Thay vì Phật giáo Tây Tạng, người Balti ở đây theo đạo Hồi giáo. Khắp làng là những ngôi nhà mang đậm <strong>kiến trúc đá</strong> cổ kính, lẩn khuất dưới những <strong>vườn mơ</strong> bạt ngàn râm mát, tạo nên một trải nghiệm văn hóa vô cùng sâu sắc.</p>"
    ],
    imgUrl: "https://media.fittour.vn/uploads/legacy/tu-vien-diskit-gompa.webp",
    imgCaption: "Kiến trúc văn hóa Balti"
  },
  {
    id: "route-acclimatization",
    number: "05",
    locationName: "LỘ TRÌNH ĐI LẠI",
    title: "So Sánh Nubra & Pangong",
    subtitle: "Chiến lược lịch trình thông minh",
    abstract: "Hành trình đến Nubra đưa bạn qua Khardung La - một trong những cung đường đèo nổi tiếng và cao nhất thế giới dành cho xe cơ giới.",
    paragraphs: [
      "<p>Đèo <strong>Khardung La</strong> hiện nay vẫn là một trong những cung đường đèo xe cơ giới vĩ đại nhất. Trải nghiệm vượt qua độ cao hơn 5.300m giữa những tường tuyết vô cùng choáng ngợp.</p>",
      "<h3>Nubra Có Gì Khác Pangong?</h3>",
      "<table class='w-full text-left border-collapse my-4'><thead><tr class='border-b-2 border-stone-300'><th class='p-2'>Yếu Tố</th><th class='p-2'>Nubra Valley</th><th class='p-2'>Hồ Pangong</th></tr></thead><tbody><tr class='border-b border-stone-200'><td class='p-2 font-semibold'>Đặc Trưng</td><td class='p-2'>Sa mạc lạnh, sông băng, thung lũng</td><td class='p-2'>Hồ nước lợ siêu rộng màu lam</td></tr><tr class='border-b border-stone-200'><td class='p-2 font-semibold'>Điểm Nhấn</td><td class='p-2'>Lạc đà hai bướu, văn hóa Balti</td><td class='p-2'>Màu nước hồ đổi sắc liên tục</td></tr><tr class='border-b border-stone-200'><td class='p-2 font-semibold'>Dân Cư</td><td class='p-2'>Nhiều làng mạc (Diskit, Hunder, Turtuk)</td><td class='p-2'>Rất ít dân cư (chủ yếu là lều trại)</td></tr><tr class='border-b border-stone-200'><td class='p-2 font-semibold'>Thời Gian</td><td class='p-2'>Thích hợp nghỉ 2 đêm</td><td class='p-2'>Thường nghỉ 1 đêm</td></tr></tbody></table>",
      "<p>Chiến lược tốt nhất để <strong>thích nghi độ cao (acclimatization)</strong> là đi Nubra trước (độ cao ~3.000m) rồi mới lên <a href=\"/ho-pangong-tso\" class=\"text-amber-700 underline font-semibold hover:text-amber-600 transition-colors\">hồ Pangong</a> (cao hơn 4.200m). Nhờ đó, cơ thể bạn sẽ giảm thiểu tối đa <a href=\"/ngay-dau-tien-o-ladakh-nen-luu-y-gi\" class=\"text-amber-700 underline font-semibold hover:text-amber-600 transition-colors\">nguy cơ bị say độ cao cấp tính (AMS)</a>.</p>"
    ],
    imgUrl: "https://media.fittour.vn/uploads/2022/04/deo-Khardung-La-ladakh.webp",
    imgCaption: "Đèo Khardung La nổi tiếng",
    imgUrl2: "https://media.fittour.vn/uploads/2022/06/xe-cho-du-khach-trong-hanh-trinh-du-lich-ladakh-cung-fit-tour.webp",
    imgCaption2: "Hành trình cùng Fit Tour"
  },
  {
    id: "wilderness-camp",
    number: "06",
    locationName: "TRẢI NGHIỆM LƯU TRÚ",
    title: "Nghỉ Dưỡng Giữa Sa Mạc Tại Wilderness Camp",
    subtitle: "Khu lều cao cấp tại Diskit",
    abstract: "Ngủ lều giữa sa mạc lạnh là một trong những trải nghiệm đáng giá nhất. Wilderness Camp mang đến không gian tiện nghi nhưng vẫn hòa mình tuyệt đối vào thiên nhiên.",
    paragraphs: [
      "<p>Nằm ẩn mình giữa những tán dương râm mát tại Diskit, <strong>Wilderness Camp</strong> là điểm dừng chân hoàn hảo sau một ngày dài vượt đèo Khardung La. Không giống những khách sạn tường gạch thông thường, việc lưu trú trong lều trại (glamping) giúp du khách cảm nhận trọn vẹn cái lạnh đặc trưng và âm thanh của gió sa mạc về đêm.</p>",
      "<p>Bên trong lều được trang bị đầy đủ tiện nghi với chăn nệm ấm áp và phòng tắm riêng nước nóng - một điều cực kỳ xa xỉ ở vùng núi cao. Buổi sáng, bạn sẽ thức giấc trong tiếng chim hót và ánh nắng Himalaya len lỏi qua từng kẽ lá.</p>",
      "<p>Vào buổi tối, mọi người thường quây quần bên đống lửa trại, nhâm nhi ly trà bơ ấm nóng, ngắm bầu trời đầy sao và lắng nghe những giai điệu truyền thống của người dân địa phương. Bạn có thể xem thêm <a href=\"https://thericetour.com/wilderness-camp-diskit\" target=\"_blank\" rel=\"noopener\" class=\"text-amber-700 underline font-bold\">nhật ký trải nghiệm thực tế tại Wilderness Camp Diskit</a> để hiểu rõ hơn về chất lượng dịch vụ.</p>"
    ],
    imgUrl: "https://media.fittour.vn/uploads/khu-leu-nghi-duong-wilderness-camp-diskit.webp",
    imgCaption: "Khu lều nghỉ dưỡng Wilderness Camp",
    imgUrl2: "https://media.fittour.vn/uploads/lua-trai-dem-tai-wilderness-camp-diskit.webp",
    imgCaption2: "Hoạt động lửa trại về đêm"
  },
  {
    id: "wildlife-hotspring",
    number: "07",
    locationName: "KHÁM PHÁ THÊM",
    title: "Động Vật Hoang Dã & Suối Khoáng",
    subtitle: "Sumur, Panamik và hệ sinh thái đa dạng",
    abstract: "Nubra không chỉ có cát và đá. Thung lũng còn sở hữu hệ sinh thái động vật phong phú và những suối nước nóng chữa lành.",
    paragraphs: [
      "<p>Hệ sinh thái ở Nubra là nơi sinh sống của nhiều loài động vật đặc hữu. Dọc đường đi, bạn có thể dễ dàng bắt gặp những bầy <strong>Blue Sheep</strong> (Cừu xanh Himalaya) leo trèo trên vách đá, những chú <strong>Marmot</strong> (Marmot Himalaya) béo tròn chui rúc trong các hang động nhỏ, hoặc loài <strong>Golden Eagle</strong> (Đại bàng vàng) vút bay trên bầu trời.</p>",
      "<p>Bên cạnh Hunder và Turtuk, nếu đi về hướng Bắc dọc sông Nubra, bạn sẽ đến với <strong>Sumur</strong> và <strong>Panamik</strong>. Nơi đây có <strong>Tu viện Samstanling</strong> linh thiêng, <strong>Hồ Yarab Tso</strong> ẩn mình yên tĩnh, và đặc biệt là <strong>suối nước nóng Panamik</strong> - nơi bạn có thể ngâm mình thư giãn trong nguồn nước khoáng lưu huỳnh ấm áp sau những ngày dài rong ruổi.</p>"
    ],
    imgUrl: "https://media.fittour.vn/uploads/2022/06/cuoi-lac-da-o-thung-lung-nubra-ladakh.webp",
    imgCaption: "Cưỡi lạc đà ngắm nhìn thung lũng"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Nubra hay Pangong nên đi trước?",
    answer: "<p>Bạn <strong>nên đi Nubra trước</strong>. Nubra có độ cao trung bình khoảng 3.000m (thấp hơn Leh). Việc ngủ đêm tại một nơi thấp như Nubra sau khi vượt đèo Khardung La sẽ giúp cơ thể thích nghi độ cao (acclimatization) cực kỳ hiệu quả, chuẩn bị tốt cho việc ngủ ở Pangong (cao hơn 4.200m) sau đó.</p>"
  },
  {
    question: "Có nên ở Nubra 1 hay 2 đêm?",
    answer: "<p>Rất nhiều khách hàng FIT TOUR khuyên bạn <strong>nên ở 2 đêm</strong> tại Nubra. Thung lũng rất rộng và có nhiều điểm đến khác biệt (Turtuk cách Hunder tới hơn 80km). Nếu chỉ đi 1 đêm, bạn sẽ phải di chuyển liên tục trên xe, không đủ thời gian tận hưởng sự tương phản tuyệt đẹp của thiên nhiên và văn hóa nơi đây.</p>"
  },
  {
    question: "Có nên ngủ Hunder hay Diskit?",
    answer: "<p>Cả hai đều có nét hay riêng, nhưng đa số du khách ưu tiên <strong>ngủ tại Hunder</strong> hơn. Hunder có nhiều resort lều trại cao cấp nằm giữa rừng dương hoặc ngay gần đồi cát sa mạc lạnh. Bầu không khí ở Hunder cũng yên tĩnh và lãng mạn hơn. Tuy nhiên, Diskit lại tiện lợi hơn nếu bạn cần các tiện ích y tế hoặc mua sắm.</p>"
  },
  {
    question: "Thung lũng Nubra nằm ở đâu?",
    answer: "<p>Thung lũng Nubra nằm ở phía đông bắc của Ladakh, Ấn Độ, cách thị trấn Leh khoảng 120 km. Trung tâm của thung lũng là làng Diskit.</p>"
  },
  {
    question: "Làm thế nào để đến Thung lũng Nubra?",
    answer: "<p>Để đến Thung lũng Nubra từ Leh, du khách phải vượt qua đèo Khardung La, một trong những cung đường đèo xe cơ giới nổi tiếng và cao nhất thế giới.</p>"
  },
  {
    question: "Thời gian tốt nhất để tham quan Thung lũng Nubra là khi nào?",
    answer: "<p>Thời gian lý tưởng để tham quan Thung lũng Nubra là từ tháng 5 đến tháng 8. Cuối tháng 3 đến tháng 4 là mùa hoa mơ nở rộ, cực kỳ lý tưởng để ngắm cảnh sắc trắng hồng tại Turtuk và Sumur.</p>"
  }
];

export const GALLERY_PHOTOS: Photo[] = [
  {
    id: "p1",
    url: 'https://media.fittour.vn/uploads/du-khach-fit-tour-chup-anh-cung-lac-da-hai-buouu-nubra.webp?v=2',
    caption: 'Du khách FIT Tour cùng những chú lạc đà hai bướu tại đụn cát Hunder.',
    category: 'people',
    location: 'Thung lũng Nubra',
    date: 'Buổi chiều'
  },
  {
    id: "p2",
    url: 'https://media.fittour.vn/uploads/thung-lung-nubra-ladakh-lac-da-hai-buouu-nghi-ngoi.webp?v=2',
    caption: 'Đàn lạc đà Bactrian thong thả nghỉ ngơi giữa sa mạc cát trắng Hunder.',
    category: 'natural',
    location: 'Hunder Sand Dunes',
    date: 'Chiều tà'
  },
  {
    id: "p3",
    url: 'https://media.fittour.vn/uploads/tuong-phat-di-lac-khong-lo-tai-diskit-monastery-ladakh.webp?v=2',
    caption: 'Tượng Phật Di Lặc khổng lồ tại tu viện Diskit nhìn xuống thung lũng Nubra.',
    category: 'spiritual',
    location: 'Tu viện Diskit',
    date: 'Hoàng hôn'
  },
  {
    id: "p4",
    url: 'https://media.fittour.vn/uploads/cung-duong-ven-song-tai-sangam-view-point-ladakh.webp?v=2',
    caption: 'Cung đường đèo uốn lượn ven sông băng kỳ vĩ tại ngã ba sông Indus và Zanskar.',
    category: 'natural',
    location: 'Sangam View Point',
    date: 'Trưa muộn'
  },
  {
    id: "p5",
    url: 'https://media.fittour.vn/uploads/toan-canh-tu-vien-thiksey-ladakh.webp?v=2',
    caption: 'Tu viện Thiksey sừng sững trên đỉnh đồi, được ví như Potala thu nhỏ của Ladakh.',
    category: 'spiritual',
    location: 'Tu viện Thiksey',
    date: 'Sáng sớm'
  },
  {
    id: "p6",
    url: 'https://media.fittour.vn/uploads/nha-su-di-bo-tai-tu-vien-hemis.webp?v=2',
    caption: 'Nhà sư thiền hành tĩnh lặng tại tu viện Hemis cổ kính.',
    category: 'spiritual',
    location: 'Tu viện Hemis',
    date: 'Sáng sớm'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Cơ sở y tế & Oxy',
    vietnameseName: 'Chống say độ cao',
    description: 'Trạm y tế có ở làng Diskit (Diskit Hospital). Nubra thấp hơn Leh nên bạn sẽ ít bị sốc độ cao hơn, nhưng bình oxy cá nhân vẫn luôn cần thiết khi qua đèo Khardung La.',
    qty: '1-2 bình/người',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Tiền mặt (Máy ATM)',
    vietnameseName: 'Hạn chế ATM',
    description: 'Nên rút tiền mặt ở Leh trước khi khởi hành. Diskit có máy ATM của SBI, nhưng thỉnh thoảng sẽ hết tiền hoặc mất mạng.',
    qty: 'Đủ dùng',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Bơm xăng',
    vietnameseName: 'Nhiên liệu',
    description: 'Diskit có một trạm xăng (Diskit Petrol Pump), trạm xăng duy nhất trong thung lũng Nubra. Bạn vẫn nên đổ đầy bình từ Leh.',
    qty: 'Đầy bình',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-4',
    name: 'Kết nối điện thoại',
    vietnameseName: 'Sóng BSNL/Jio',
    description: 'Mạng BSNL và Jio (trả sau) có sóng khá tốt ở Diskit và Hunder. Turtuk thì sóng Jio mới phủ gần đây nhưng chập chờn.',
    qty: 'Sim trả sau',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-5',
    name: 'Giấy phép Nội tuyến',
    vietnameseName: 'Inner Line Permit',
    description: 'Bắt buộc phải có Inner Line Permit cho tất cả du khách để vào khu vực thung lũng Nubra (kiểm tra tại trạm South Pullu và North Pullu).',
    qty: 'Nhiều bản copy',
    category: 'essential',
    importance: 'high'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Leh',
    elevation: '3,500m',
    temperature: '15°C',
    coordinate: { x: 20, y: 20 },
    diaryTitle: 'Xuất phát',
    diaryEntry: 'Chuẩn bị đầy đủ tiền mặt, bình oxy và nhiên liệu trước khi rời thị trấn Leh.',
    soundEffectName: 'Tiếng nhộn nhịp phố núi'
  },
  {
    id: 'loc-2',
    name: 'South Pullu',
    elevation: '4,600m',
    temperature: '8°C',
    coordinate: { x: 35, y: 35 },
    diaryTitle: 'Trạm kiểm tra đầu tiên',
    diaryEntry: 'Dừng lại trình giấy phép Inner Line Permit trước khi bắt đầu chặng leo đèo khắc nghiệt.',
    soundEffectName: 'Tiếng gió vù vù'
  },
  {
    id: 'loc-3',
    name: 'Khardung La',
    elevation: '5,360m',
    temperature: '-5°C',
    coordinate: { x: 50, y: 55 },
    diaryTitle: 'Đỉnh đèo vĩ đại',
    diaryEntry: 'Đứng trên một trong những con đèo cao nhất thế giới dành cho xe cơ giới. Không khí loãng đến ngộp thở.',
    soundEffectName: 'Tiếng thở gấp gáp'
  },
  {
    id: 'loc-4',
    name: 'Hunder',
    elevation: '3,100m',
    temperature: '18°C',
    coordinate: { x: 70, y: 70 },
    diaryTitle: 'Sa mạc lạnh',
    diaryEntry: 'Cảnh tượng khó tin khi đồi cát vàng nhấp nhô hiện ra giữa những rặng núi tuyết.',
    soundEffectName: 'Tiếng chuông cổ lạc đà'
  },
  {
    id: 'loc-5',
    name: 'Turtuk',
    elevation: '2,900m',
    temperature: '20°C',
    coordinate: { x: 85, y: 85 },
    diaryTitle: 'Biên giới bình yên',
    diaryEntry: 'Ngôi làng tận cùng biên giới với vườn mơ rợp bóng và những nụ cười hiền hậu của người Balti.',
    soundEffectName: 'Tiếng nước chảy róc rách'
  }
];
