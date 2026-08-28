import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Hiểu Độ Cao',
    subtitle: '150+ hành trình không tự tạo nên kinh nghiệm',
    abstract: 'Ở Himalaya, một lịch trình đẹp trên giấy chưa chắc là một lịch trình tốt ngoài thực địa.',
    paragraphs: [
      'Độ cao thay đổi cách cơ thể vận động, cách đoàn di chuyển và cả cách một ngày nên được sắp xếp.',
      'Những điều tưởng như nhỏ — một giờ nghỉ, một bữa ăn nóng hay tốc độ đi chậm hơn — đôi khi lại quyết định cảm nhận của cả hành trình.'
    ],
    quote: 'Kinh nghiệm chỉ hình thành khi mỗi chuyến đi để lại một điều gì đó cho hành trình tiếp theo.',
    locationName: 'Tây Tạng - 5,359m',
    imgUrl: 'https://media.fittour.vn/uploads/2022/09/binh-minh-tren-day-nui-himalayas.webp'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Hiểu Mùa',
    subtitle: 'Có những nơi chỉ đẹp trong một khoảng thời gian',
    abstract: 'Một thung lũng đổi màu, một mặt hồ phản chiếu dãy tuyết sơn, một buổi sáng trời quang sau nhiều ngày mây phủ.',
    paragraphs: [
      'Muốn bắt gặp những khoảnh khắc ấy, không thể chỉ nhìn vào lịch trình có sẵn.',
      'Phải biết mùa, biết địa phương và biết khi nào đáng để chờ.'
    ],
    quote: 'Càng đi sâu, FIT TOUR càng nhận ra rằng một hành trình tốt không nằm ở việc đưa khách qua thật nhiều điểm.',
    locationName: 'Ladakh - 3,500m',
    imgUrl: 'https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Hiểu Con Người',
    subtitle: 'Himalaya không chỉ được tạo nên bởi núi',
    abstract: 'Đó còn là những gia đình sống giữa cao nguyên, những người dẫn đường bản địa, những tu viện, những ngôi làng và những câu chuyện đã tồn tại qua nhiều thế hệ.',
    paragraphs: [
      'Một local guide tốt không chỉ giúp đoàn tìm đường.',
      'Họ giúp du khách hiểu nơi mình đang đứng, xóa tan khoảng cách ngôn ngữ và bỡ ngỡ ban đầu.'
    ],
    quote: 'Chính nụ cười bừng sáng và sự bảo bọc vững chãi của họ đã kiến tạo nên chữ "Chân Thực" trong từng chuyến đi.',
    locationName: 'Nepal - 3,800m',
    imgUrl: 'https://media.fittour.vn/uploads/cuoc-song-nguoi-dan-ladakh.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Hiểu Giới Hạn',
    subtitle: 'Quyết định đúng nhất đôi khi là chậm lại',
    abstract: 'Có những ngày thời tiết khiến một lịch trình phải thay đổi. Có những cung đường đẹp nhưng không phù hợp với thể trạng của cả đoàn.',
    paragraphs: [
      'Và có những lúc quyết định đúng nhất không phải là tiếp tục, mà là chậm lại.',
      'Đó là một phần của kinh nghiệm thực địa mà không catalogue nào có thể thay thế.'
    ],
    quote: 'Sự an tâm tuyệt đối giúp biến hành trình khắc nghiệt thành một kỳ nghỉ dưỡng tinh thần đích thực.',
    locationName: 'Kailash - 4,500m',
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/nui-tuyen-vung-zanskar-ladakh.webp'
  },
  {
    id: 'chapter-5',
    number: '05',
    title: 'Hiểu Vì Sao Muốn Quay Lại',
    subtitle: 'Điều khiến một người trở lại hiếm khi chỉ là ngọn núi',
    abstract: 'Có thể là cảm giác của một buổi sáng rất lạnh. Một bữa ăn nóng giữa vùng cao.',
    paragraphs: [
      'Một người bạn gặp trên đường.',
      'Hoặc đơn giản là cảm giác bình yên khi đứng trước một dãy núi đã từng xuất hiện trong giấc mơ.'
    ],
    quote: 'Hơn 150 hành trình Himalaya là kết quả của quá trình lắng nghe và điều chỉnh để mỗi hành trình sau tốt hơn hành trình trước.',
    locationName: 'Bhutan - 2,500m',
    imgUrl: 'https://media.fittour.vn/uploads/2024/06/toan-canh-lang-canh-ho-pangong.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/du-khach-fit-tour-check-in-khardungla-pass.webp',
    caption: 'Niềm tự hào khi chinh phục các ngọn đèo Himalaya ở độ cao ngoạn mục.',
    category: 'moments',
    location: 'Himalaya Pass',
    date: 'Khoảnh khắc Tự hào'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/2023/06/nui-tuyen-vung-zanskar-ladakh.webp',
    caption: 'Vẻ đẹp tráng lệ của những ngọn núi tuyết vĩnh cửu, bức tường thành tự nhiên bảo vệ miền đất Phật.',
    category: 'natural',
    location: 'Himalaya Valley',
    date: 'Thiên nhiên Hùng vĩ'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/cuoc-song-nguoi-dan-ladakh.webp',
    caption: 'Nhịp sống đời thường dung dị và kiên cường của người dân bản địa giữa vùng cao nguyên.',
    category: 'people',
    location: 'Nepal',
    date: 'Cuộc sống Đời thường'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/2023/06/tu-vien-hemis-ladakh-fittour.webp',
    caption: 'Tu viện cổ kính với kiến trúc Tạng truyền đặc trưng, nép mình bình yên giữa những vách núi.',
    category: 'spiritual',
    location: 'Tây Tạng Monastery',
    date: 'Dấu ấn Tâm linh'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/2024/06/toan-canh-lang-canh-ho-pangong.webp',
    caption: 'Toàn cảnh ngôi làng nhỏ thanh bình nằm nép mình bên hồ thiêng, thu trọn sắc xanh kỳ ảo.',
    category: 'natural',
    location: 'Bhutan',
    date: 'Góc nhìn Toàn cảnh'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp',
    caption: 'Hồ thiêng lộng lẫy dưới bầu trời xanh ngắt, nơi ranh giới giữa mặt nước và mây trời như hòa làm một.',
    category: 'natural',
    location: 'Kailash',
    date: 'Sắc xanh Lục bảo'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Oxygen Medical Tanks',
    vietnameseName: 'Bình Oxy Y Tế Cỡ Lớn',
    description: 'Trang bị dự phòng tiêu chuẩn trong xe suốt dọc tuyến Himalaya, giúp việc hít thở không khí loãng trở nên êm ái, nhẹ nhõm cho lữ khách U70.',
    qty: 'Trang bị chuẩn',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Glamping Thermal Blankets',
    vietnameseName: 'Đệm Sưởi Điện & Chăn Nhiệt',
    description: 'Chuẩn bị chu toàn cho lều cách nhiệt tại các vùng cao, vận hành liên tục 12 tiếng đêm để đem lại giấc ngủ phục hồi ấm áp giữa tiết trời âm độ.',
    qty: '100% Lều',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Diamox & Medical Kit',
    vietnameseName: 'Thuốc Chống Sốc AMS',
    description: 'Bộ y tế dã chiến chuyên dụng với các loại thuốc bổ trợ tuần hoàn não, xua tan cảm giác chếnh choáng buổi đầu tiên thích nghi với độ cao.',
    qty: 'Luôn sẵn sàng',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-4',
    name: 'Outdoor Cooking Set',
    vietnameseName: 'Bộ Bếp Dã Ngoại',
    description: 'Nơi Trưởng đoàn FIT Tour nấu phở bò, đun nước pha trà bơ béo ngậy để chiêu đãi lữ khách giữa thiên nhiên hoang sơ.',
    qty: 'Bộ đầy đủ',
    category: 'essential',
    importance: 'medium'
  },
  {
    id: 'item-5',
    name: 'Dried ginger slice & Honey',
    vietnameseName: 'Gừng Sấy & Mật ong',
    description: 'Vị cay nồng của gừng kết hợp cốc trà nóng mật ong xua tan khí hàn len lỏi, nâng đỡ tinh thần và làm ấm cơ thể nhanh chóng.',
    qty: 'Phục vụ liên tục',
    category: 'essential',
    importance: 'medium'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Kathmandu, Nepal',
    elevation: '1,400m',
    temperature: '10°C đến 25°C',
    coordinate: { x: 25, y: 70 },
    diaryTitle: 'Điểm khởi đầu: Thích nghi êm ái',
    diaryEntry: 'Đón đoàn tại thủ đô Kathmandu. Hướng dẫn viên sắp xếp nghỉ ngơi tại khách sạn boutique, dùng trà gừng, nhịp bách bộ thong thả để làm quen không khí.',
    soundEffectName: 'Nhịp sống thị trấn & Chuông đồng'
  },
  {
    id: 'loc-2',
    name: 'Lhasa, Tây Tạng',
    elevation: '3,656m',
    temperature: '5°C đến 15°C',
    coordinate: { x: 38, y: 76 },
    diaryTitle: 'Khám phá: Nóc nhà thế giới',
    diaryEntry: 'Thăm điện Potala hùng vĩ. Phong cảnh tráng lệ của cung điện đỏ au mở ra định nghĩa chân thực về viễn du tâm linh.',
    soundEffectName: 'Kinh luân xoay & Gió cao nguyên'
  },
  {
    id: 'loc-3',
    name: 'Kailash, Tây Tạng',
    elevation: '6,638m',
    temperature: '-10°C đến 5°C',
    coordinate: { x: 45, y: 35 },
    diaryTitle: 'Thử thách: Kora quanh núi thiêng',
    diaryEntry: 'Kiêu hãnh hành hương quanh ngọn núi thiêng nhất thế giới. Cảm giác chinh phục vỡ òa khi đứng giữa rừng cờ nguyện tung bay.',
    soundEffectName: 'Tiếng gió rít đỉnh núi'
  },
  {
    id: 'loc-4',
    name: 'Leh, Ladakh',
    elevation: '3,500m',
    temperature: '2°C đến 16°C',
    coordinate: { x: 60, y: 22 },
    diaryTitle: 'Trải nghiệm: Bếp lửa Tiểu Tây Tạng',
    diaryEntry: 'Hạ trại nướng bánh và nấu phở bò dã ngoại. Không khí ấm cúng giữa lữ khách và các bạn Local Guide chan hòa quanh bếp.',
    soundEffectName: 'Chuông lạc đà & Tiếng lửa'
  },
  {
    id: 'loc-5',
    name: 'Paro, Bhutan',
    elevation: '2,200m',
    temperature: '5°C đến 20°C',
    coordinate: { x: 88, y: 55 },
    diaryTitle: 'Cột mốc: Vương quốc hạnh phúc',
    diaryEntry: 'Chinh phục Tu viện Taktsang (Tiger Nest) cheo leo trên vách đá. Ngắm nhìn thung lũng xanh mướt, khép lại hành trình đầy tự hào.',
    soundEffectName: 'Chuông gió & Tiếng thông reo'
  }
];
