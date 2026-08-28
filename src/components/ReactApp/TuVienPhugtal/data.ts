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
    title: 'Điều kiện đường đi và lộ trình mới',
    subtitle: 'Tuyến NPD Road (Nimmu - Padum - Darcha)',
    abstract: 'Trước đây hầu như bài báo nào cũng ghi: "Chỉ có thể trekking nhiều giờ." Tuy nhiên, hiện nay mọi thứ đã khác nhờ tiến độ mở đường.',
    paragraphs: [
      'Trước năm 2020, để đến được Phugtal, du khách phải bắt đầu đi bộ từ làng Anmo hoặc Cha, mất từ 7-8 giờ cho đến vài ngày ròng rã băng qua thung lũng Lungnak khắc nghiệt. Nhưng hiện nay, tuyến Nimmu – Padum – Darcha (NPD Road) đang được thi công và đã mở thông nhiều đoạn.',
      'Nhờ đó, xe địa hình hiện đã có thể đưa bạn từ Padum đến thẳng Purne. Từ đây, quãng đường trekking chỉ còn lại khoảng 2-3 giờ dọc theo dòng sông Tsarap cuộn chảy để tới tu viện, giúp tiết kiệm rất nhiều sức lực mà vẫn giữ trọn vẹn sự hùng vĩ của hẻm núi Zanskar.'
    ],
    quote: 'Dù con đường đã dễ dàng hơn, Phugtal vẫn ẩn mình một cách hoàn hảo giữa đại ngàn Zanskar.',
    locationName: 'Purne',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/tu-vien-duoc-xem-la-trai-tim-zanskar.webp'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Lịch sử và kiến trúc độc bản',
    subtitle: 'Ngôi chùa hang động thế kỷ XII',
    abstract: 'Không phải vì cảnh quan đẹp rực rỡ, Phugtal đặc biệt bởi nó là một trong những tu viện duy nhất xây dựng hoàn toàn bên trong một hang động tự nhiên khổng lồ.',
    paragraphs: [
      'Được thành lập vào khoảng thế kỷ XII, gắn liền với tên tuổi của học giả Jangsem Sherap Zangpo thuộc truyền thống Gelug của Phật giáo Tây Tạng. Dù vậy, hang động này được tin là nơi các bậc hiền triết vô danh đã tu tập từ rất lâu trước khi tu viện chính thức hình thành.',
      'Sự biệt lập suốt nhiều thế kỷ đã giúp Phugtal giữ nguyên vẹn nhịp sống tâm linh. Hàng ngày, các tu sĩ vẫn tụng kinh, học tập và sinh hoạt như cách họ đã làm từ hàng trăm năm trước.'
    ],
    quote: 'Một kỳ quan kiến trúc tâm linh dường như mọc ra từ chính vách đá sừng sững, tách biệt với thế giới bên ngoài.',
    locationName: 'Phugtal Gompa',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/tu-vien-Phugtal.webp'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Trải nghiệm qua đêm vô giá',
    subtitle: 'Ngủ guesthouse và nghe tụng kinh sáng',
    abstract: 'Đa số du khách chỉ trekking đến rồi quay về trong ngày, nhưng ngủ lại Phugtal mới là trải nghiệm đáng giá nhất.',
    paragraphs: [
      'Bạn có thể ngủ tại guesthouse nhỏ bé nằm cheo leo ngay bên dưới tu viện, hoặc nếu may mắn và được sự cho phép, bạn có thể xin ở lại cùng các nhà sư.',
      'Khoảnh khắc tĩnh lặng tuyệt đối khi bóng tối bao trùm thung lũng, và âm thanh duy nhất đánh thức bạn vào sáng sớm là tiếng kèn, tiếng tụng kinh trầm hùng vang vọng khắp vách núi - đó là lúc bạn thực sự chạm vào linh hồn của Zanskar.'
    ],
    quote: 'Nghe tiếng tụng kinh buổi sớm vọng ra từ hang đá là một sự gột rửa tâm hồn mạnh mẽ.',
    locationName: 'Chánh điện tu viện',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/du-khach-chup-anh-ben-tu-vien-Phugtal.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Tham gia lễ hội Phugtal',
    subtitle: 'Lễ hội Phugtal Gustor truyền thống',
    abstract: 'Nếu bạn có cơ hội, hãy tham gia vào Lễ hội Phugtal Gustor, một sự kiện quan trọng của tu viện diễn ra vào tháng 12 âm lịch hàng năm.',
    paragraphs: [
      'Đây là dịp để tôn vinh Đức Phật và xua đuổi tà ma. Lễ hội mang đến một sự kết hợp độc đáo giữa nghi lễ tôn giáo và hoạt động giải trí như múa Cham (múa mặt nạ), diễu hành và nhạc cụ truyền thống Tây Tạng.',
      'Sự tĩnh lặng thường ngày được thay thế bằng nhịp điệu của trống và kèn, thu hút người dân từ các bản làng hẻo lánh quanh vùng.'
    ],
    quote: 'Nhịp điệu của trống và kèn Tây Tạng đánh thức toàn bộ năng lượng của thung lũng Lungnak lạnh giá.',
    locationName: 'Sân lễ hội',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/du-khach-tai-tu-vien-Phugtal.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/2023/06/tu-vien-Phugtal.webp',
    caption: 'Kiến trúc kỳ vĩ tựa như tổ ong khổng lồ bám vào vách đá Lungnak.',
    category: 'cultural',
    location: 'Vách đá Lungnak',
    date: 'Buổi sáng'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/2023/06/hanh-trinh-road-trip-vung-dat-zanskar-ladakh.webp',
    caption: 'Hành trình roadtrip băng qua những cung đường hoang sơ hùng vĩ nhất của Zanskar.',
    category: 'natural',
    location: 'Tuyến NPD Road',
    date: 'Hành trình'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/2023/06/khung-canh-nui-non-dep-ngo-ngang-o-zanskar.webp',
    caption: 'Khung cảnh núi non lớp lớp mờ ảo tựa bức tranh thủy mặc bao quanh các bản làng.',
    category: 'natural',
    location: 'Thung lũng Zanskar',
    date: 'Toàn cảnh'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/2023/06/doi-cuu-ben-nui-o-zanskar.webp',
    caption: 'Đàn cừu thong dong gặm cỏ bên sườn núi, mang lại cảm giác bình yên đến lạ.',
    category: 'people',
    location: 'Sườn núi Zanskar',
    date: 'Đời thường'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/toan-canh-hop-luu-song-indus-va-zanskar-tai-sangam.webp',
    caption: 'Ngã ba Sangam - nơi dòng sông Indus xanh ngắt hòa quyện cùng dòng Zanskar đục phù sa.',
    category: 'natural',
    location: 'Ngã ba Sangam',
    date: 'Tự nhiên'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/2023/06/nui-tuyen-vung-zanskar-ladakh.webp',
    caption: 'Những đỉnh núi tuyết vĩnh cửu ôm trọn vùng đất Zanskar như một hàng rào bảo vệ vững chãi.',
    category: 'natural',
    location: 'Đỉnh núi tuyết',
    date: 'Góc nhìn'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Giày Trekking Chuyên Dụng',
    vietnameseName: 'Giày leo núi',
    description: 'Trekking 2-3 tiếng qua địa hình sỏi đá dọc sông Tsarap yêu cầu giày có độ bám tốt.',
    qty: '1 đôi',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Nước uống & Điện giải',
    vietnameseName: 'Nước và Oresol',
    description: 'Mất nước ở độ cao 3.850m diễn ra rất nhanh. Phải luôn tiếp nước đều đặn suốt tuyến đi bộ.',
    qty: '2-3 lít',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Pin dự phòng',
    vietnameseName: 'Sạc dự phòng',
    description: 'Dù Phugtal đã có điện mặt trời từ năm 2016, nguồn điện vẫn hạn chế và ưu tiên cho sinh hoạt tu viện.',
    qty: '1-2 cục',
    category: 'electronics',
    importance: 'medium'
  },
  {
    id: 'item-4',
    name: 'Trang phục kín đáo',
    vietnameseName: 'Quần áo dài',
    description: 'Yêu cầu ăn mặc lịch sự, tôn trọng văn hóa Tây Tạng khi bước vào khuôn viên tu viện.',
    qty: 'Vài bộ',
    category: 'essential',
    importance: 'high'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Padum',
    elevation: '3,669m',
    temperature: '10°C - 20°C',
    coordinate: { x: 20, y: 30 },
    diaryTitle: 'Trung tâm Zanskar',
    diaryEntry: 'Điểm khởi hành quen thuộc. Từ đây xe địa hình sẽ bắt đầu tiến vào tuyến NPD Road đang xây dựng.',
    soundEffectName: 'Tiếng động cơ xe Off-road'
  },
  {
    id: 'loc-2',
    name: 'Purne',
    elevation: '3,800m',
    temperature: '8°C - 15°C',
    coordinate: { x: 50, y: 50 },
    diaryTitle: 'Điểm bắt đầu Trekking',
    diaryEntry: 'Xe dừng lại tại đây. Bắt đầu hành trình đi bộ dọc theo dòng sông Tsarap cuồn cuộn.',
    soundEffectName: 'Tiếng suối chảy siết'
  },
  {
    id: 'loc-3',
    name: 'Phugtal Gompa',
    elevation: '3,850m',
    temperature: '5°C - 12°C',
    coordinate: { x: 80, y: 65 },
    diaryTitle: 'Đích đến tâm linh',
    diaryEntry: 'Tổ ong khổng lồ bám trên vách đá hiện ra sau 2-3 giờ đi bộ. Nơi thời gian như ngừng trôi.',
    soundEffectName: 'Tiếng tụng kinh vang vọng'
  }
];
