export type BackpackItem = {
  id: string;
  name: string;
  vietnameseName: string;
  description: string;
  qty: string;
  category: 'gear' | 'health' | 'essential' | 'electronics';
  importance: 'high' | 'medium' | 'low';
};

export type LadakhLocation = {
  id: string;
  name: string;
  elevation: string;
  temperature: string;
  coordinate: { x: number; y: number };
  diaryTitle: string;
  diaryEntry: string;
  soundEffectName: string;
};

export type Photo = {
  id: string;
  url: string;
  caption: string;
  category: 'natural' | 'cultural' | 'people';
  location: string;
  date: string;
};

export type Story = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  abstract: string;
  paragraphs: string[];
  quote?: string;
  locationName: string;
  imgUrl: string;
};

export const STORIES: Story[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Dấu ấn thế kỷ 11',
    subtitle: 'Nguồn cội Phật giáo tại Zanskar',
    abstract: 'Được sáng lập vào thế kỷ 11 bởi đại dịch giả Lama Marpa Lotsawa, Stongdey là tu viện lớn thứ hai của toàn vùng Zanskar.',
    paragraphs: [
      'Nằm trên một ngọn đồi cách Padum khoảng 18km, Tu viện Stongdey (Stongde Gompa) thuộc dòng Gelugpa (Mũ Vàng) là một trong những <a href="/tu-vien-ladakh" class="text-amber-700 font-medium hover:underline">di tích tôn giáo</a> lâu đời nhất khu vực.',
      'Trải qua gần một thiên niên kỷ, Stongdey vẫn giữ được nét kiến trúc cổ kính và không gian tu tập tĩnh lặng nguyên bản.'
    ],
    quote: 'Một trong những điểm đến quan trọng của Phật giáo Tây Tạng tại vùng Zanskar.',
    locationName: 'Thung lũng Doda',
    imgUrl: 'https://media.fittour.vn/uploads/toan-canh-tu-vien-stongdey.jpeg'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Kiến trúc Mật tông',
    subtitle: 'Không gian linh thiêng bên trong',
    abstract: 'Quần thể tu viện được phân bổ khoa học trên sườn đồi, với chánh điện lưu giữ nhiều bích họa và tượng Phật cổ.',
    paragraphs: [
      'Giống như phần lớn các công trình ở Ladakh, Stongdey được xây dựng với những bức tường đá dày, mái ngói bằng gỗ và tông màu đỏ trắng đặc trưng. Sự phân bổ các không gian rất thực dụng, lợi dụng triệt để địa hình sườn núi dốc để xếp lớp các khu vực chức năng.',
      'Trung tâm của quần thể là Chánh điện (Assembly Hall hay Dukhang), nơi diễn ra các buổi lễ cầu nguyện chính. Xung quanh Dukhang là các khu vực vệ tinh: một thư viện lưu trữ kinh thư cổ viết tay, khu ở của chư tăng (Monks\' quarters) với kiến trúc chống chọi lại mùa đông khắc nghiệt, và những phòng thiền định (Meditation room) nằm ở góc khuất.',
      'Bước vào bên trong chánh điện, những bức tranh tường (thangka) mang đậm phong cách nghệ thuật Mật tông vẫn còn giữ được màu sắc rõ nét. Tại đây có hình ảnh uy nộ của hộ pháp Mahakala, Đức độ mẫu Tara, bức tranh Vòng Luân Hồi (Wheel of Life) và hình tượng đại sư Tsongkhapa - người sáng lập phái Mũ Vàng.'
    ],
    quote: 'Sự kết hợp giữa kiến trúc phòng thủ và nghệ thuật điêu khắc Mật tông cổ đại.',
    locationName: 'Chánh điện Stongdey',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/khong-gian-ben-trong-yen-tinh-tu-vien-Stongdey-Zanskar-ladakh.webp'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Tầm nhìn bao quát',
    subtitle: 'Toàn cảnh thung lũng Doda',
    abstract: 'Nhờ vị trí đắc địa trên cao, từ Stongdey du khách có thể quan sát trọn vẹn cảnh quan của thung lũng Doda bên dưới.',
    paragraphs: [
      'Hệ thống thủy lợi tận dụng nước từ băng tuyết tan giúp thung lũng Doda duy trì thảm thực vật phong phú. Cảnh quan nơi đây thay đổi rõ rệt theo mùa: xanh mướt lúa mạch vào mùa hè, ngả vàng khi sang thu và phủ trắng tuyết vào mùa đông.',
      'Đứng từ sân thượng của tu viện, toàn bộ sự thay đổi này cùng dòng sông Zanskar uốn lượn được thu gọn trong tầm mắt.'
    ],
    quote: 'Góc nhìn toàn cảnh rõ nét nhất về cuộc sống nông nghiệp dọc thung lũng Doda.',
    locationName: 'Sân thượng Tu viện',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/dang-thuy-duong-va-cac-em-nho-o-tu-vien-Stongdey2.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Giao lưu cùng nhà sư',
    subtitle: 'Cuộc sống tu học chân thực',
    abstract: 'Tu viện Stongdey hiện là nơi tu học của khoảng 60 vị lạt ma và các chú tiểu đến từ những ngôi làng lân cận.',
    paragraphs: [
      'Các chú tiểu thường sinh hoạt và học tập tại khu vực sân trong của tu viện. Dù điều kiện sống còn nhiều thiếu thốn, họ vẫn giữ tinh thần lạc quan và hiếu khách.',
      'Việc giao lưu với các nhà sư diễn ra khá tự nhiên, giúp du khách hiểu thêm về nếp sống và văn hóa tu tập đặc trưng của người dân vùng cao Zanskar.'
    ],
    quote: 'Sự thân thiện của các nhà sư là cầu nối văn hóa tốt nhất cho du khách.',
    locationName: 'Sân sinh hoạt',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/dang-thuy-duong-va-cac-em-nho-o-tu-vien-Stongdey.webp'
  },
  {
    id: 'chapter-5',
    number: '05',
    title: 'Không gian tĩnh lặng',
    subtitle: 'Trải nghiệm tâm linh',
    abstract: 'Khác với các tu viện gần trung tâm Leh, Stongdey ít bị thương mại hóa và giữ được không gian thanh tịnh vốn có.',
    paragraphs: [
      'Buổi cầu nguyện sáng tại đây thường diễn ra trong không khí trang nghiêm, với sự kết hợp của tiếng chuông, kèn ống Tây Tạng và giọng đọc kinh truyền thống của các lạt ma.',
      'Sự vắng vẻ của khách du lịch giúp môi trường nơi đây luôn duy trì được sự tập trung cao độ, rất phù hợp cho những ai muốn tìm kiếm không gian yên tĩnh.'
    ],
    quote: 'Một trong những không gian tu tập ít bị ảnh hưởng bởi du lịch đại trà nhất Zanskar.',
    locationName: 'Phòng cầu nguyện',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/du-khach-tour-ladakh-tan-huong-khong-khi-o-tu-vien.webp'
  },
  {
    id: 'chapter-6',
    number: '06',
    title: 'Lễ hội Stongdey Gustor',
    subtitle: 'Sự kiện văn hóa thường niên',
    abstract: 'Stongdey Gustor là lễ hội tôn giáo quan trọng nhất trong năm của tu viện, thu hút đông đảo người dân quanh vùng tham dự.',
    paragraphs: [
      '<a href="/le-hoi-ladakh" class="text-amber-700 font-medium hover:underline">Lễ hội</a> được tổ chức vào tháng 11 theo lịch Tây Tạng. Điểm nhấn của sự kiện là các màn múa mặt nạ (Cham Dance) do chính các nhà sư biểu diễn, mang ý nghĩa xua đuổi tà ma và cầu mong một năm an lành.',
      'Đây vừa là một nghi thức tôn giáo, vừa là dịp để cộng đồng dân cư Zanskar tụ họp và giao lưu trước khi bước vào mùa đông khắc nghiệt.'
    ],
    quote: 'Điệu múa mặt nạ Cham Dance là linh hồn của lễ hội Gustor truyền thống.',
    locationName: 'Sân trung tâm',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/du-khach-den-tu-vien-ladakh-va-giao-luu-cung-cac-tu-si.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/toan-canh-tu-vien-stongdey.jpeg',
    caption: 'Kiến trúc tường đá và mái đỏ vươn mình sừng sững trên đỉnh đồi.',
    category: 'cultural',
    location: 'Stongdey',
    date: 'Toàn cảnh'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/2023/06/dang-thuy-duong-va-cac-em-nho-o-tu-vien-Stongdey2.webp',
    caption: 'Nụ cười hồn nhiên của các chú tiểu sư khi vui đùa cùng du khách.',
    category: 'people',
    location: 'Khuôn viên',
    date: 'Đời thường'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/2023/06/Binh-yen-o-tu-vien-ladakh.webp',
    caption: 'Khung cảnh bình yên và tĩnh lặng tại các tu viện cổ kính.',
    category: 'spiritual',
    location: 'Ladakh',
    date: 'Thanh bình'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/2023/06/khong-gian-ben-trong-yen-tinh-tu-vien-Stongdey-Zanskar-ladakh.webp',
    caption: 'Không gian chánh điện linh thiêng và vô cùng tĩnh lặng.',
    category: 'cultural',
    location: 'Chánh điện',
    date: 'Tâm linh'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/2022/06/tu-vien-Mulbekh-ladakh.webp',
    caption: 'Tu viện Mulbekh vươn mình giữa vùng đồi núi cằn cỗi của Himalaya.',
    category: 'cultural',
    location: 'Mulbekh',
    date: 'Kiến trúc'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/2023/06/du-khach-den-tu-vien-ladakh-va-giao-luu-cung-cac-tu-si.webp',
    caption: 'Du khách giao lưu cùng các tu sĩ trong không gian thanh tịnh.',
    category: 'people',
    location: 'Ladakh',
    date: 'Giao lưu'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Áo khoác gió & Giữ nhiệt',
    vietnameseName: 'Áo ấm',
    description: 'Do nằm trên đồi cao không có vật che chắn, gió ở Stongdey thổi rất mạnh và lạnh buốt.',
    qty: '1 bộ',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Kính râm & Kem chống nắng',
    vietnameseName: 'Bảo vệ da',
    description: 'Ở độ cao 3.900m, tia UV rất gắt. Bạn cần bảo vệ mắt và da khi tham quan ngoài trời.',
    qty: '1 set',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Máy ảnh / Smartphone',
    vietnameseName: 'Thiết bị chụp ảnh',
    description: 'Tầm nhìn bao quát thung lũng Doda từ Stongdey là góc chụp Panorama hoàn hảo nhất.',
    qty: '1 chiếc',
    category: 'electronics',
    importance: 'medium'
  },
  {
    id: 'item-4',
    name: 'Kẹo / Đồ ngọt',
    vietnameseName: 'Quà nhỏ',
    description: 'Bạn có thể mang một chút kẹo ngọt để tặng cho các tiểu sư và trẻ em địa phương.',
    qty: '1 túi',
    category: 'essential',
    importance: 'low'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Padum',
    elevation: '3,669m',
    temperature: '10°C - 20°C',
    coordinate: { x: 20, y: 50 },
    diaryTitle: 'Trung tâm Zanskar',
    diaryEntry: 'Điểm khởi hành. Chỉ cần 30 phút lái xe từ Padum là bạn đã tới được chân đồi của tu viện.',
    soundEffectName: 'Tiếng động cơ xe'
  },
  {
    id: 'loc-2',
    name: 'Thung lũng Doda',
    elevation: '3,700m',
    temperature: '8°C - 18°C',
    coordinate: { x: 50, y: 60 },
    diaryTitle: 'Dọc đường đèo',
    diaryEntry: 'Xe vượt qua những khúc cua ziczac hẹp, hai bên là cánh đồng lúa mạch bạt ngàn.',
    soundEffectName: 'Tiếng gió rít'
  },
  {
    id: 'loc-3',
    name: 'Stongdey Gompa',
    elevation: '3,900m',
    temperature: '5°C - 15°C',
    coordinate: { x: 80, y: 35 },
    diaryTitle: 'Tổ hợp tâm linh',
    diaryEntry: 'Đứng trên sân thượng tu viện, toàn bộ Zanskar như thu bé lại trong tầm mắt.',
    soundEffectName: 'Tiếng chuông xoay'
  }
];
