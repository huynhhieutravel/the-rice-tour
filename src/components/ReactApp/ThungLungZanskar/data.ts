import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Chút lịch sử về Vương quốc Zanskar',
    subtitle: 'Phật giáo Tây Tạng và tuyến đường giao thương cổ',
    abstract: 'Trước khi sáp nhập vào <a href="/country/ladakh/" class="text-amber-600 hover:underline hover:text-amber-800" target="_blank">Ladakh</a>, Zanskar từng là một vương quốc độc lập, đóng vai trò trạm dừng chân quan trọng trên tuyến thương mại cổ đại.',
    paragraphs: [
      'Ngày xưa, nó nằm ngay trên tuyến đường thương mại cổ nối liền Spiti, Lahaul và Thung lũng Indus, là trạm dừng chân quan trọng của dân buôn muối và tơ lụa.',
      'Thế nhưng, thứ ăn sâu vào lòng Zanskar nhất lại là <a href="/country/tay-tang/" class="text-amber-600 hover:underline hover:text-amber-800" target="_blank">Phật giáo Tây Tạng</a>. Đến tận bây giờ, các nhà khảo cổ vẫn tìm thấy những văn bản khắc chữ Brahmi cổ hay tàn tích của lâu đài Kanishka - nơi được cho là do vị hoàng đế vĩ đại Kanishka xây dựng.',
      'Sự kết hợp giữa thiên nhiên khắc nghiệt và đức tin bền bỉ đã tạo nên những tu viện hàng ngàn năm tuổi (như Sani, Phugtal hay Karsha) vẫn kiên cường bám trụ trên vách đá cheo leo.'
    ],
    quote: 'Một vương quốc độc lập, tĩnh lặng và tách biệt ẩn mình giữa lòng Himalaya.',
    locationName: 'Tu viện cổ Sani',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/kien-truc-tu-vien-o-ladakh.webp'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Đường đi Zanskar (Cập nhật 2026)',
    subtitle: 'Chọn cung đường nào để đi?',
    abstract: 'Đường đi Zanskar bây giờ đã khác xa chục năm trước. Bạn không còn bị giới hạn duy nhất một đường vào qua ngõ Kargil nữa.',
    paragraphs: [
      '<p class="mb-4">Hiện tại, có 3 hướng chính để vào thung lũng, mỗi ngả đường lại mang đến một cảm xúc khác biệt:</p>',
      '<div class="overflow-x-auto"><table class="min-w-full text-sm text-left"><thead class="bg-amber-100/50"><tr><th class="px-4 py-2 font-bold text-amber-900 border-b border-amber-200">Tuyến đường</th><th class="px-4 py-2 font-bold text-amber-900 border-b border-amber-200">Đặc điểm (2026)</th></tr></thead><tbody class="divide-y divide-amber-100"><tr><td class="px-4 py-3 font-semibold text-stone-800">Leh – Nimmu – Chilling – Padum</td><td class="px-4 py-3">Đường mới làm, chạy dọc theo sông Zanskar. Dễ đi và rất phổ biến hiện nay.</td></tr><tr><td class="px-4 py-3 font-semibold text-stone-800">Kargil – Suru – Pensi La – Padum</td><td class="px-4 py-3">Cung đường kinh điển và đẹp nhất. Bạn sẽ đi qua thung lũng Suru xanh ngắt và nhìn ngắm dòng sông băng khổng lồ.</td></tr><tr><td class="px-4 py-3 font-semibold text-stone-800">Darcha – Shinku La – Padum</td><td class="px-4 py-3">Hướng tiếp cận mới từ phía Manali, rút ngắn được kha khá thời gian di chuyển.</td></tr></tbody></table></div>'
    ],
    quote: 'Ba con đường, ba câu chuyện, nhưng đều dẫn về trái tim của thung lũng.',
    locationName: 'Đèo Pensi La',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/hanh-trinh-road-trip-vung-dat-zanskar-ladakh.webp'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Zanskar Có Gì Đẹp?',
    subtitle: 'Những điểm check-in không thể bỏ lỡ',
    abstract: 'Từ những tu viện nằm chênh vênh trên vách núi đến các dòng sông băng khổng lồ, Zanskar có dư cảnh đẹp để làm thỏa mãn bất kỳ ai yêu thiên nhiên hoang dã.',
    paragraphs: [
      '<ul class="space-y-4 pl-4 list-disc marker:text-amber-500">',
      '<li><b><a href="/tu-vien-phugtal" class="text-amber-600 hover:underline hover:text-amber-800" target="_blank">Tu viện Phugtal</a>:</b> Trái tim của Zanskar. Tu viện này được xây dựng quanh một hang động thiêng (nơi các bậc ẩn tu đã ghé qua từ hơn 2000 năm trước) và chính thức thành lập vào thế kỷ 12. Khung cảnh vắt vẻo trên vách núi cực kỳ ấn tượng và choáng ngợp.</li>',
      '<li><b>Đèo Pensi La & Sông băng Drang Drung:</b> Đứng trên đỉnh đèo (cao 4.400m), bạn sẽ thấy toàn cảnh dòng sông băng Drang Drung uốn lượn như một con rồng trắng dài 23km.</li>',
      '<li><b>Núi thiêng Gombo Rangjon:</b> Khối đá nhọn hoắt đứng trơ trọi giữa thung lũng này đang là tọa độ cắm trại cực "hot" trong giới off-road.</li>',
      '<li><b>Làng cổ Zangla:</b> Từng là kinh đô cũ của Zanskar, giờ vẫn còn sót lại phế tích của cung điện vương triều xưa.</li>',
      '<li><b>Thung lũng Suru & Cặp đỉnh Nun Kun:</b> Cửa ngõ xanh mướt dẫn vào Zanskar từ hướng Kargil. Điểm nhấn là hai đỉnh núi tuyết vĩnh cửu Nun (7.135m) và Kun (7.077m) uy nghi.</li>',
      '<li><b>Thị trấn Padum:</b> Thị trấn trung tâm, nơi bạn sẽ dừng chân ăn ngủ và đổ xăng trước khi rong ruổi đi tiếp.</li>',
      '</ul>'
    ],
    quote: 'Những gì kỳ vĩ nhất của thiên nhiên dường như đều cất giấu ở thâm sơn cùng cốc này.',
    locationName: 'Tu viện Phugtal',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/cay-cau-go-bat-ngang-song-ladakh.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Lịch Trình Đi Zanskar (Tham khảo)',
    subtitle: 'Nên đi bao nhiêu ngày là đủ?',
    abstract: 'Để cảm nhận hết vẻ đẹp của <a href="/tour/tour-kashmir-zanskar" class="text-amber-600 hover:underline hover:text-amber-800" target="_blank">Zanskar</a>, bạn nên dành ít nhất 2 đến 3 ngày trọn vẹn ở đây. Dưới đây là khung lịch trình cơ bản:',
    paragraphs: [
      '<div class="space-y-6 mt-4">',
      '<div class="border-l-2 border-amber-500 pl-6 relative"><div class="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-1 border-4 border-stone-50"></div><h4 class="font-bold text-lg text-amber-900">Ngày 1: Vượt đèo Pensi La</h4><div class="mt-2 text-stone-600 font-mono text-sm space-y-2"><p>Kargil &rarr; Thung lũng Suru &rarr; Đèo Pensi La &rarr; Padum</p></div><p class="mt-2">Quãng đường dài khoảng 240km, mất từ 8-10 tiếng lái xe. Hành trình đi dọc thung lũng Suru tuyệt đẹp. Đường tuy dài nhưng cảnh sắc thay đổi liên tục, từ hoang mạc đá sang đồng cỏ xanh mướt, không hề nhàm chán.</p></div>',
      '<div class="border-l-2 border-amber-500 pl-6 relative"><div class="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-1 border-4 border-stone-50"></div><h4 class="font-bold text-lg text-amber-900">Ngày 2: Chạm vào trái tim Zanskar</h4><div class="mt-2 text-stone-600 font-mono text-sm space-y-2"><p>Padum &rarr; Tu viện Phugtal &rarr; Làng cổ Zangla &rarr; Tu viện Sani &rarr; Padum</p></div><p class="mt-2">Dành trọn một ngày để khám phá văn hóa bản địa. Bạn sẽ leo bộ lên tu viện Phugtal nổi tiếng và lượn lờ các di tích cổ quanh thị trấn.</p></div>',
      '</div>'
    ],
    quote: 'Mỗi góc cua, mỗi dặm đường ở Zanskar đều đẹp như một bức tranh.',
    locationName: 'Thung lũng Suru',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/doi-cuu-ben-nui-o-zanskar.webp'
  },
  {
    id: 'chapter-5',
    number: '05',
    title: 'Mùa Nào Đi Zanskar Đẹp Nhất?',
    subtitle: 'Thời tiết và những lưu ý',
    abstract: 'Mùa hè ở Zanskar rất ngắn, bù lại cảnh sắc cực kỳ rực rỡ. Còn mùa đông thì kéo dài và ngập chìm trong tuyết trắng.',
    paragraphs: [
      '<div class="overflow-x-auto mb-6"><table class="min-w-full text-sm text-center"><thead class="bg-sky-100/50"><tr><th class="px-4 py-2 font-bold text-sky-900 border-b border-sky-200">Thời gian</th><th class="px-4 py-2 font-bold text-sky-900 border-b border-sky-200">Nên đi?</th><th class="px-4 py-2 font-bold text-sky-900 border-b border-sky-200 text-left">Đặc điểm</th></tr></thead><tbody class="divide-y divide-sky-100"><tr><td class="px-4 py-2 font-semibold">Tháng 6</td><td class="px-4 py-2 text-amber-500">⭐⭐⭐⭐</td><td class="px-4 py-2 text-left">Tuyết trên đèo bắt đầu tan, đường thông thoáng trở lại.</td></tr><tr><td class="px-4 py-2 font-semibold">Tháng 7 & 8</td><td class="px-4 py-2 text-amber-500">⭐⭐⭐⭐</td><td class="px-4 py-2 text-left">Trời ấm, dễ chịu, rất hợp để đi trek và ngắm cảnh.</td></tr><tr class="bg-amber-50/50"><td class="px-4 py-2 font-semibold text-amber-900">Tháng 9</td><td class="px-4 py-2 text-amber-500">⭐⭐⭐⭐⭐</td><td class="px-4 py-2 text-left font-semibold">Đỉnh nhất! Trời trong vắt và cây cối bắt đầu chuyển màu thu vàng rực.</td></tr><tr><td class="px-4 py-2 font-semibold">Tháng 10</td><td class="px-4 py-2 text-amber-500">⭐⭐⭐⭐</td><td class="px-4 py-2 text-left">Bắt đầu lạnh buốt, ít khách du lịch. Phù hợp cho ai thích sự tĩnh lặng tuyệt đối.</td></tr><tr><td class="px-4 py-2 font-semibold text-sky-700">Mùa Đông</td><td class="px-4 py-2 font-bold text-sky-700">Chadar Trek</td><td class="px-4 py-2 text-left">Nhiệt độ rớt xuống -20°C. Trải nghiệm đi bộ trên dòng sông băng đóng cứng, chỉ dành cho người có thể lực cực tốt.</td></tr></tbody></table></div>'
    ],
    quote: 'Chadar Trek – Huyền thoại đi bộ trên dòng sông băng vĩ đại.',
    locationName: 'Sông băng Zanskar',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-va-nhung-ngay-tan-huong-o-Zanskar.webp'
  },
  {
    id: 'chapter-6',
    number: '06',
    title: 'Kinh Nghiệm Thực Tế Từ FIT TOUR',
    subtitle: 'Hỏi xoáy đáp xoay',
    abstract: 'Dưới đây là một số đúc kết thực tế sau nhiều lần trực tiếp dẫn đoàn và khảo sát tuyến Zanskar của team FIT Tour:',
    paragraphs: [
      '<div class="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg shadow-sm">',
      '<h4 class="font-bold text-lg text-amber-900 mb-4 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Chia sẻ chân thật từ nhà Tour</h4>',
      '<ul class="space-y-4 text-sm md:text-base">',
      '<li><b>Đi SUV hay đi Motor?</b> Tùy gu. Nhưng khuyên thật là nên đi SUV gầm cao. Đường Zanskar dù mới làm vẫn còn nhiều đoạn rải đá dăm, xóc nảy và bụi mù mịt. Ngồi ô tô sẽ giữ sức tốt hơn nhiều so với việc gồng mình chạy motor mấy ngày liền.</li>',
      '<li><b>Có nên ngủ Padum 2 đêm?</b> Chắc chắn rồi. Padum là nơi duy nhất có khách sạn, điện nước đầy đủ và trạm y tế đàng hoàng. Ngủ lại 2 đêm để dưỡng sức và có trọn 1 ngày đi chơi Phugtal, Zangla.</li>',
      '<li><b>Có sợ sốc độ cao (AMS) không?</b> Zanskar cao trung bình 3.500m - 4.000m. Để an toàn, bạn BẮT BUỘC phải ở Leh ít nhất 2 ngày để cơ thể quen với không khí loãng rồi mới đi Zanskar nhé. (<a href="/cam-nang-du-lich-ladakh" class="text-amber-600 hover:underline hover:text-amber-800" target="_blank">Đọc thêm Cẩm nang du lịch Ladakh</a>)</li>',
      '<li><b>Đoạn nào cảnh đẹp nhất?</b> Đường từ thung lũng Suru lên đèo Pensi La. Cảnh sắc đoạn này được xem là ngoạn mục hàng đầu Ladakh, bạn chắc chắn sẽ bấm máy mỏi tay.</li>',
      '<li><b>Có phải xin Permit?</b> Có. Bạn cần xin giấy phép Inner Line Permit (ILP) y như các vùng khác của Ladakh để đi qua các trạm kiểm soát.</li>',
      '</ul>',
      '</div>'
    ],
    quote: 'Kinh nghiệm thực tế là chìa khóa để chuyến đi của bạn an toàn và trọn vẹn nhất.',
    locationName: 'Chợ Padum',
    imgUrl: 'https://media.fittour.vn/uploads/2022/10/nguoi-dan-dia-phuong-o-thung-lung-zanskar.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/2023/06/vung-thao-nguyen-zanskar.webp',
    caption: 'Vùng thảo nguyên bao la tại Zanskar.',
    category: 'natural',
    location: 'Thung lũng Zanskar',
    date: 'Mùa hè'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/2023/06/tu-cua-so-nhin-ra-khung-canh-tuyet-dep.webp',
    caption: 'Khung cảnh tuyệt đẹp nhìn từ khung cửa sổ cổ kính.',
    category: 'natural',
    location: 'Tu viện cổ',
    date: 'Thanh bình'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/2023/06/doi-cuu-ben-nui-o-zanskar.webp',
    caption: 'Đàn cừu thong dong gặm cỏ bên sườn núi.',
    category: 'natural',
    location: 'Sườn đồi Zanskar',
    date: 'Thường nhật'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/2023/06/nhung-du-khach-check-in-o-tu-vien-tai-vung-zanskar.webp',
    caption: 'Khám phá kiến trúc độc đáo của tu viện trên cao.',
    category: 'people',
    location: 'Tu viện Zanskar',
    date: 'Khám phá'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/2023/06/buoi-trinh-dien-le-hoi-o-ladakh.webp',
    caption: 'Màu sắc rực rỡ trong một buổi lễ hội truyền thống.',
    category: 'culture',
    location: 'Ladakh',
    date: 'Lễ hội'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-Zanskar.webp',
    caption: 'Lưu giữ khoảnh khắc tại vùng đất hoang sơ.',
    category: 'people',
    location: 'Thung lũng Zanskar',
    date: 'Road trip'
  },
  {
    id: 'p7',
    url: 'https://media.fittour.vn/uploads/2023/06/dung-tren-tu-vien-o-Zanskar-nhin-ra-khung-canh-binh-yen.webp',
    caption: 'Từ tu viện nhìn ra thung lũng bình yên rộng lớn.',
    category: 'natural',
    location: 'Tu viện Zanskar',
    date: 'Toàn cảnh'
  },
  {
    id: 'p8',
    url: 'https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-tu-vien-o-Zanskar.webp',
    caption: 'Trải nghiệm tâm linh tại không gian tu viện.',
    category: 'people',
    location: 'Tu viện cổ',
    date: 'Trải nghiệm'
  },
  {
    id: 'p9',
    url: 'https://media.fittour.vn/uploads/2023/06/Dang-Thuy-Duong-o-Zanskar.webp',
    caption: 'Hòa mình vào thiên nhiên hùng vĩ của Zanskar.',
    category: 'people',
    location: 'Zanskar',
    date: 'Khám phá'
  },
  {
    id: 'p10',
    url: 'https://media.fittour.vn/uploads/2023/06/du-khach-vui-ve-ben-cac-em-nho-tai-tu-vien-Zanskar.webp',
    caption: 'Giao lưu nụ cười cùng các chú tiểu tại tu viện.',
    category: 'people',
    location: 'Tu viện Zanskar',
    date: 'Tương tác'
  },
  {
    id: 'p11',
    url: 'https://media.fittour.vn/uploads/2023/06/khong-gian-ben-trong-yen-tinh-tu-vien-Stongdey-Zanskar-ladakh.webp',
    caption: 'Không gian tĩnh lặng bên trong tu viện Stongdey.',
    category: 'culture',
    location: 'Tu viện Stongdey',
    date: 'Tâm linh'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Quần áo giữ nhiệt',
    vietnameseName: 'Trang phục layer',
    description: 'Thời tiết Zanskar thay đổi liên tục trong ngày. Luôn mang theo áo khoác gió chống thấm, áo giữ nhiệt và đồ mặc lớp (layering) kể cả vào mùa hè.',
    qty: 'Đầy đủ',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Tủ thuốc cá nhân',
    vietnameseName: 'Thuốc dự phòng',
    description: 'Các hiệu thuốc rất hiếm hoi dọc đường đi và gần như không có khi tiến sâu vào thung lũng. Cần mang theo thuốc đau đầu, thuốc tiêu hóa và thuốc say độ cao.',
    qty: 'Vừa đủ',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Kem chống nắng & Kính râm',
    vietnameseName: 'Đồ chống nắng',
    description: 'Tia UV ở độ cao trên 3.000m cực kỳ gắt. Bạn rất dễ bị say nắng hoặc cháy khét da nếu không che chắn kỹ.',
    qty: '1 bộ',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-4',
    name: 'Giày trekking & Đèn pin',
    vietnameseName: 'Đồ dã ngoại',
    description: 'Giày leo núi có độ bám tốt, đèn pin cá nhân và bộ sơ cứu khẩn cấp là những thứ bắt buộc phải có khi đi vào vùng hẻo lánh.',
    qty: '1 bộ',
    category: 'gear',
    importance: 'medium'
  },
  {
    id: 'item-5',
    name: 'Đồ ăn vặt & Nước uống',
    vietnameseName: 'Thực phẩm dự trữ',
    description: 'Thanh năng lượng, lương khô, sô cô la. Nước suối đóng chai (hoặc bình lọc nước), bản đồ ngoại tuyến và thông tin tuyến đường.',
    qty: 'Cần thiết',
    category: 'essential',
    importance: 'high'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Từ Srinagar & Kargil',
    elevation: '3,657m',
    temperature: '10°C đến 25°C',
    coordinate: { x: 30, y: 35 },
    diaryTitle: 'Tuyến đường nhanh nhất',
    diaryEntry: 'Tuyến đường Srinagar - Kargil - Padum mang lại khả năng tiếp cận an toàn, cảnh quan ngoạn mục đi ngang qua thung lũng Suru xanh tươi.',
    soundEffectName: 'Tiếng động cơ trên đèo'
  },
  {
    id: 'loc-2',
    name: 'Từ Leh (qua Nimoo, Chilling)',
    elevation: '3,500m',
    temperature: '5°C đến 15°C',
    coordinate: { x: 80, y: 40 },
    diaryTitle: 'Dọc dòng sông Zanskar',
    diaryEntry: 'Tuyến đường chạy song song dòng sông Zanskar hùng vĩ, dễ dàng tiếp cận vào mùa hè và mở ra cảnh quan tuyệt đẹp.',
    soundEffectName: 'Tiếng róc rách của suối'
  },
  {
    id: 'loc-3',
    name: 'Từ Darcha (Himachal)',
    elevation: '5,091m (Shingo La)',
    temperature: '-5°C đến 10°C',
    coordinate: { x: 50, y: 80 },
    diaryTitle: 'Đèo Shingo La xa xôi',
    diaryEntry: 'Tuyến đường dài 40km từ Darcha qua Shingo La đưa bạn tới tu viện Phugtal độc đáo treo leo trên vách núi.',
    soundEffectName: 'Tiếng gió rít qua hẻm núi'
  }
];
