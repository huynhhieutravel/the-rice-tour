import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Sắc xanh huyễn hoặc của hồ Pangong Tso',
    subtitle: 'Nơi mặt nước thay đổi theo từng khoảnh khắc trong ngày',
    abstract: 'Điều làm nên sức hút ma mị của Pangong chính là khả năng "thay màu áo mới" theo từng thời điểm trong ngày và góc độ ánh sáng.',
    paragraphs: [
      'Tùy thuộc vào góc độ ánh sáng mặt trời, mặt hồ có thể chuyển từ xanh ngọc bích rực rỡ, lục nhạt dịu êm đến tím thẫm chạng vạng đầy bí ẩn. Đứng trước làn nước mênh mông không có điểm dừng này, bạn sẽ hiểu vì sao người ta gọi Pangong là "Đại dương trên mây".',
      'Mặc dù là một hồ nước lợ cằn cỗi ở độ cao hơn 4.000m, Pangong vẫn là mái nhà của nhiều loài sinh vật đặc biệt. Sự tương phản giữa những dãy núi đá khô cằn nâu đỏ và đàn mòng biển hay vịt Brahmini bơi lội tung tăng trên mặt hồ tạo nên một bức tranh tuyệt mỹ.'
    ],
    quote: 'Mỗi khoảnh khắc tại Pangong là một bảng màu duy nhất không bao giờ lặp lại của mẹ thiên nhiên.',
    locationName: 'Pangong Tso - 4.225m',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/khach-du-lich-di-ben-ho-pangong-tso.webp'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Check-in điểm quay phim 3 Idiots tại hồ Pangong',
    subtitle: 'Ranh giới giữa màn bạc và sự tĩnh lặng nguyên bản',
    abstract: 'Rất nhiều du khách tìm đến đây để check-in tại chiếc ghế vàng trứ danh trong phim "3 Idiots". Tuy nhiên, giá trị thực sự của Pangong lại nằm ở sự bình yên khi bạn bước ra khỏi những khu vực đông đúc.',
    paragraphs: [
      'Phía đông của hồ kéo dài qua tận biên giới Tây Tạng (Trung Quốc), chiếm khoảng 60% tổng diện tích. Vì tính chất nhạy cảm của vùng giáp ranh quân sự, các trạm kiểm soát của quân đội Ấn Độ hiện diện khắp nơi, tạo nên một không khí trang nghiêm nhưng cực kỳ an toàn.',
      'Rời khỏi những điểm chụp ảnh thương mại, lắng nghe tiếng gió rít qua những dãy núi trập trùng và ngắm nhìn mặt nước bao la, đó là lúc bạn thực sự chạm vào linh hồn của cao nguyên Ladakh.'
    ],
    quote: 'Giá trị thực sự của Pangong Tso không nằm ở những bức hình check-in, mà ở những giây phút tĩnh tại tuyệt đối.',
    locationName: 'Shooting Point',
    imgUrl: 'https://media.fittour.vn/uploads/2024/06/toan-canh-lang-canh-ho-pangong.webp'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Kinh nghiệm lưu trú Luxury Glamping tại Pangong',
    subtitle: 'Sự thoải mái giữa thiên nhiên khắc nghiệt',
    abstract: 'Với định hướng du lịch cao cấp Bespoke, FIT Tour đưa bạn thoát khỏi những nhà nghỉ cơ bản để tận hưởng không gian lưu trú thượng lưu tại các khu resort cao cấp như Sama Resort Pangong.',
    paragraphs: [
      'Dậy sớm và kéo nhẹ lớp cửa lều, bạn sẽ chứng kiến khoảnh khắc những tia nắng đầu ngày từ từ nhuộm vàng rặng tuyết sơn Karakorams. Nhiệt độ ban đêm ở đây có thể rớt xuống dưới 0 độ C, nhưng hệ thống sưởi ấm chuyên dụng cùng trang bị bình oxy y tế túc trực 24/7 của FIT Tour sẽ giúp bạn có một giấc ngủ say sưa, hoàn toàn gạt bỏ nỗi lo về hội chứng say độ cao (AMS).',
      'Thưởng thức một ly trà bơ nóng hổi (Butter tea) hay tách cà phê đậm đà trong không khí se lạnh, ngắm nhìn vẻ hùng vĩ của thiên nhiên trong một không gian biệt lập, đó là một liệu pháp chữa lành tuyệt đối mà ít nơi nào có được.'
    ],
    quote: 'Bạn không cần phải đánh đổi sự thoải mái của bản thân để chiêm ngưỡng những cảnh quan kỳ vĩ nhất thế giới.',
    locationName: 'Khu Glamping Biệt Lập',
    imgUrl: 'https://media.fittour.vn/uploads/2024/06/nha-nghi-canh-ho-pangong.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Trải nghiệm không gian tĩnh lặng vùng biên giới Ladakh',
    subtitle: 'Ranh giới của sự an yên giữa núi đồi hùng vĩ',
    abstract: 'Khi những đoàn khách du lịch trong ngày rời đi, Pangong Tso trả lại không gian tĩnh lặng nguyên sơ vốn có của vùng viễn biên.',
    paragraphs: [
      'Ngồi bên bờ hồ vào lúc chiều tà, bạn chỉ còn nghe thấy tiếng gió rít qua những hẻm núi và tiếng vỗ nhẹ của mặt nước bao la.',
      'Không có sóng điện thoại, không có internet, đây là thời điểm hoàn hảo nhất để thực hiện "Digital Detox" - ngắt kết nối với thế giới ảo để thực sự kết nối với thiên nhiên và chính tâm hồn mình.'
    ],
    quote: 'Sự vĩ đại của thiên nhiên luôn đi kèm với sự tĩnh lặng. Ở Pangong, bạn nghe thấy rõ nhất tiếng lòng mình.',
    locationName: 'Bờ hồ Pangong',
    imgUrl: 'https://media.fittour.vn/uploads/2024/06/canh-quan-hoang-so-ho-pangong.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/2022/06/khach-du-lich-di-ben-ho-pangong-tso.webp',
    caption: 'Làn nước trong vắt đổi màu theo ánh sáng mặt trời tại hồ Pangong.',
    category: 'natural',
    location: 'Bờ hồ Pangong Tso',
    date: 'Buổi sáng'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/2022/06/ho-pangong-tso-va-nhung-ngon-nui-phu-tuyet-bao-quanh-tuyet-dep.webp',
    caption: 'Dãy tuyết sơn hùng vĩ phản chiếu xuống mặt hồ xanh biếc.',
    category: 'natural',
    location: 'Rặng Karakorams',
    date: 'Bình minh'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/2024/06/toan-canh-lang-canh-ho-pangong.webp',
    caption: 'Sự tĩnh lặng tuyệt đối tại vùng viễn biên.',
    category: 'natural',
    location: 'Phía Đông hồ',
    date: 'Trưa nắng'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/2024/06/canh-quan-hoang-so-ho-pangong.webp',
    caption: 'Sự tương phản giữa những ngọn núi cằn cỗi và mặt nước bao la.',
    category: 'natural',
    location: 'Vịnh Pangong',
    date: 'Chiều tà'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/2022/06/du-khach-viet-check-in-o-ho-thanh-ladakh.webp',
    caption: 'Lưu giữ khoảnh khắc đáng giá tại độ cao 4.225m.',
    category: 'people',
    location: 'Shooting Point',
    date: 'Ngày hè'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/2022/06/ngon-nui-xuong-ho-pangong-tso.webp',
    caption: 'Vẻ đẹp nguyên sơ thách thức giới hạn con người.',
    category: 'natural',
    location: 'Góc núi đá',
    date: 'Hoàng hôn'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Trang phục Layering',
    vietnameseName: 'Nguyên tắc xếp lớp',
    description: 'Nhiệt độ thay đổi chóng mặt. Áo giữ nhiệt + Áo len + Áo khoác chống gió là chuẩn nhất.',
    qty: 'Nhiều lớp',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Thuốc AMS (Diamox)',
    vietnameseName: 'Phòng say độ cao',
    description: 'Ngủ lại qua đêm ở độ cao 4.225m tiềm ẩn rủi ro. Hãy tham khảo kỹ cẩm nang say độ cao và dùng thuốc theo chỉ định.',
    qty: '1 vỉ',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Bình Oxy Mini',
    vietnameseName: 'Oxy cá nhân',
    description: 'Dù FIT Tour luôn trang bị sẵn bình oxy lớn tại khu Glamping phục vụ du khách 24/7, việc có một bình xịt cá nhân vẫn rất hữu ích khi dạo chơi xa lều.',
    qty: '1 bình',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-4',
    name: 'Tiền mặt INR',
    vietnameseName: 'Rupee Ấn Độ',
    description: 'Hoàn toàn không có sóng điện thoại và ATM ở Pangong. Hãy chuẩn bị sẵn tiền mặt lẻ từ Leh để mua trà nóng, đồ lưu niệm hoặc tip cho thợ ảnh.',
    qty: '3.000 - 5.000 INR',
    category: 'essential',
    importance: 'medium'
  },
  {
    id: 'item-5',
    name: 'Kính râm & Kem chống nắng',
    vietnameseName: 'Bảo vệ tia UV',
    description: 'Không khí loãng làm bức xạ UV cực mạnh. Phải bảo vệ da và mắt nếu không muốn bị rát.',
    qty: 'Tuýp nhỏ',
    category: 'health',
    importance: 'high'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Từ Thung lũng Nubra',
    elevation: '4,225m',
    temperature: '5°C đến 15°C',
    coordinate: { x: 45, y: 35 },
    diaryTitle: 'Tuyến đường men sông Shyok',
    diaryEntry: 'Tuyến đường được nâng cấp hiện đại, tiết kiệm thời gian và khung cảnh vô cùng hùng vĩ dọc theo dòng sông Shyok vĩ đại.',
    soundEffectName: 'Tiếng gió rít qua hẻm núi'
  },
  {
    id: 'loc-2',
    name: 'Từ Leh (qua Chang La)',
    elevation: '5,360m (Đỉnh đèo)',
    temperature: '0°C',
    coordinate: { x: 25, y: 70 },
    diaryTitle: 'Đèo Chang La hùng vĩ',
    diaryEntry: 'Đèo cơ giới cao thứ ba thế giới. Xe sẽ băng qua những bức tường băng tuyết trắng xóa. Nên uống đủ nước!',
    soundEffectName: 'Tiếng lốp xe nghiến qua tuyết'
  },
  {
    id: 'loc-3',
    name: 'Khu trại Glamping',
    elevation: '4,225m',
    temperature: '-2°C (Ban đêm)',
    coordinate: { x: 88, y: 55 },
    diaryTitle: 'Đêm ngàn sao',
    diaryEntry: 'Cái lạnh buốt giá không thể ngăn cản sự sung sướng khi ngắm nhìn dải Ngân Hà. Trong lều có lò sưởi ấm áp.',
    soundEffectName: 'Tiếng củi nổ lách tách'
  }
];
