import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Khai Phá Zanskar & Khardung La',
    subtitle: 'Những chuyến Road Trip đẽo gọt từ đá tuyết',
    abstract: 'Ladakh không dành cho những trải nghiệm hời hợt. Hành trình của FIT Tour khởi đầu từ những cung đường Road Trip và Motor Trip dọc thung lũng Zanskar và vạn đèo Khardung La, nơi mỗi mét đường là một bài học về sự thấu cảm thiên nhiên.',
    paragraphs: [
      'Gió thốc qua kính xe, mang theo cái lạnh buốt sắc sảo của độ cao 5.359 mét trên đỉnh Khardung La. Hành trình của chúng tôi không bắt đầu bằng những tiện nghi êm ái, mà được xây dựng từ những chuyến Road Trip mạo hiểm, những đoàn Motor Trip trần trụi băng qua sa mạc lạnh. Giữa những vách đá sừng sững xám xịt của rặng Karakoram, mỗi vòng quay bánh xe đều đòi hỏi sự tập trung tuyệt đối và lòng can trường.',
      'Dưới ánh nắng rát bỏng ngày cao nguyên và sự tĩnh lặng của thung lũng Zanskar, những người dẫn đường của FIT Tour đã dò dẫm từng cung đường, đo lường từng nhịp thở oxy loãng. Khai phá không chỉ là việc tìm ra đường đi, mà là tìm ra nhịp điệu hoàn hảo để con người có thể an tâm hòa mình vào sự hoang dã tráng lệ của miền đất Phật.'
    ],
    quote: 'Chinh phục không phải là chiến thắng ngọn núi, mà là thấu hiểu từng dốc đá và hơi thở của chính mình.',
    locationName: 'Zanskar & Khardung La - 5,359m',
    imgUrl: 'https://media.fittour.vn/uploads/trai-nghiem-choi-tuyet-khardungla-ladakh.webp'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Liên Minh Bản Địa',
    subtitle: 'Bản sắc viễn du từ những người kể chuyện địa phương',
    abstract: 'Kinh nghiệm 80 chuyến đi không nằm trên giấy tờ. Nó nằm trong cái bắt tay thân tình với những thủ lĩnh Local Guide và các tài xế bản xứ dạn sương, những người thuộc nằm lòng từng khúc cua của đèo tuyết.',
    paragraphs: [
      'FIT Tour tự hào sở hữu mạng lưới liên minh trực tiếp với các thủ lĩnh dẫn dắt bản địa lão luyện hàng đầu vùng núi. Họ không chỉ là người chỉ đường, họ là những "Local Curator" - những người tuyển tập và kể chuyện văn hóa bằng thổ ngữ địa phương. Sự am hiểu thông thạo của họ giúp xóa tan khoảng cách ngôn ngữ và bỡ ngỡ ban đầu.',
      'Từ những bác tài xế cự phách đưa đoàn an toàn qua đèo Chang La hiểm trở, đến những người hướng dẫn Tạng truyền kiến văn tâm linh phong phú, họ đồng hành cùng lữ khách như anh em một nhà. Chính nụ cười bừng sáng và sự bảo bọc vững chãi của họ đã kiến tạo nên chữ "Chân Thực" trong từng chuyến đi.'
    ],
    quote: 'Quy chuẩn an toàn cao nhất không nằm ở máy móc, mà nằm ở trực giác và tình người của những người con sinh ra từ núi tuyết.',
    locationName: 'Leh & Chang La',
    imgUrl: 'https://media.fittour.vn/uploads/ms-may-chup-anh-tai-deo-magnetic-hill-ladakh.webp'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Bếp Lửa Giữa Đại Ngàn',
    subtitle: 'Nấu phở bò và nướng bánh sưởi ấm tình bằng hữu',
    abstract: 'Không có khoảng cách giữa lữ khách và người hướng dẫn. Giữa thung lũng Nubra hay ven hồ lạnh giá, hoạt động tự tay nhóm bếp dã chiến mang hơi sực quê hương vào tim lữ khách.',
    paragraphs: [
      'Ẩm thực dã ngoại là một di sản độc bản của FIT Tour. Trong cái lạnh thấu xương của sa mạc, chúng tôi cùng du khách tự tay nhóm mâm bếp ga dã ngoại. Hình ảnh Trưởng đoàn đun nước pha cốc trà bơ béo ngậy, hay nấu một nồi phở bò nóng hổi nghi ngút khói giữa thung lũng đá vôi, đã trở thành biểu tượng của sự chăm chút vô giá.',
      'Bữa ăn không đơn thuần để no bụng. Nó là sự chiêu đãi vị giác, là cái cớ để lữ khách và người dân địa phương cùng nướng bánh, chia sẻ những câu chuyện trầm hùng bên ngọn lửa rực hồng. Mỹ vị đồng hành dã ngoại chân thật kiến tạo nên tiếng cười giòn tan, gắn kết tình thân sâu đậm giữa muôn trùng mây khói.'
    ],
    quote: 'Sự xa xỉ nhất ở Ladakh không phải là khách sạn 5 sao, mà là bát phở bò nóng hổi đẫm tình quê nhà giữa đỉnh đèo 4.000 mét.',
    locationName: 'Nubra Valley - 3,000m',
    imgUrl: 'https://media.fittour.vn/uploads/du-khach-ben-bo-ho-pangong.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Glamping Bờ Hồ & Đội U70',
    subtitle: 'Sự tận tâm chăm chút biến nỗi lo thành sự thảnh thơi',
    abstract: 'Kỷ lục 80 chuyến đi có sự đóng góp của hàng trăm lữ khách U70. Đêm lạnh Pangong âm 10 độ được sưởi ấm bằng lều Glamping cách nhiệt cao cấp và đệm sưởi rực hồng.',
    paragraphs: [
      'Nhiều người e ngại độ tuổi lão niên không thể chinh phục Himalaya. Nhưng với FIT Tour, lữ khách U70 chiếm một phần không nhỏ làm nên thành công của 80 chuyến đi. Bí quyết nằm ở nhịp độ bách bộ thong thả, không hối hả, để nhịp tim thích nghi dẻo dai cùng khí áp. Và đặc biệt là sự chu toàn trong từng thiết bị lưu trú.',
      'Tại bờ hồ Pangong Tso đổi màu tuyệt sắc, cái giá lạnh âm độ bị đẩy lùi phía ngoài màng lều canvas Glamping kép. Những chiếc đệm sưởi điện hoạt động suốt 12 tiếng, bình oxy y tế dự phòng luôn kề bên, cùng cốc trà gừng ấm nóng đưa tận tay mỗi đêm. Chúng tôi biến nỗi lo sợ của bậc cha mẹ lớn tuổi thành giấc ngủ sâu phục hồi, để sáng hôm sau, họ kiêu hãnh ngắm nhìn dải Ngân Hà rực rỡ và mặt hồ lục bảo hoang sơ.'
    ],
    quote: 'Sự an tâm tuyệt đối giúp những đôi chân U70 bước đi nhẹ tênh, biến hành trình khắc nghiệt thành một kỳ nghỉ dưỡng tinh thần đích thực.',
    locationName: 'Pangong Tso - 4,225m',
    imgUrl: 'https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/du-khach-fit-tour-check-in-khardungla-pass.webp',
    caption: 'Niềm tự hào khi chinh phục Khardung La - một trong những con đèo có đường xe chạy cao nhất thế giới ở độ cao ngoạn mục.',
    category: 'moments',
    location: 'Khardung La Pass',
    date: 'Khoảnh khắc Tự hào'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/2023/06/nui-tuyen-vung-zanskar-ladakh.webp',
    caption: 'Vẻ đẹp tráng lệ của những ngọn núi tuyết vĩnh cửu tại thung lũng Zanskar, bức tường thành tự nhiên bảo vệ miền đất Phật.',
    category: 'natural',
    location: 'Zanskar Valley',
    date: 'Thiên nhiên Hùng vĩ'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/cuoc-song-nguoi-dan-ladakh.webp',
    caption: 'Nhịp sống đời thường dung dị và kiên cường của người dân bản địa giữa vùng cao nguyên đá khắc nghiệt.',
    category: 'people',
    location: 'Ladakh',
    date: 'Cuộc sống Đời thường'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/2023/06/tu-vien-hemis-ladakh-fittour.webp',
    caption: 'Tu viện cổ kính với kiến trúc Tạng truyền đặc trưng, nép mình bình yên giữa những vách núi đá cằn cỗi.',
    category: 'spiritual',
    location: 'Hemis Monastery',
    date: 'Dấu ấn Tâm linh'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/2024/06/toan-canh-lang-canh-ho-pangong.webp',
    caption: 'Toàn cảnh ngôi làng nhỏ thanh bình nằm nép mình bên hồ Pangong Tso thiêng liêng, thu trọn sắc xanh kỳ ảo của mặt hồ.',
    category: 'natural',
    location: 'Pangong Village',
    date: 'Góc nhìn Toàn cảnh'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp',
    caption: 'Hồ Pangong Tso lộng lẫy dưới bầu trời xanh ngắt, nơi ranh giới giữa mặt nước và mây trời như hòa làm một.',
    category: 'natural',
    location: 'Pangong Tso',
    date: 'Sắc xanh Lục bảo'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Oxygen Medical Tanks',
    vietnameseName: 'Bình Oxy Y Tế Cỡ Lớn',
    description: 'Trang bị dự phòng tiêu chuẩn trong xe suốt dọc tuyến Khardung La & Pangong, giúp việc hít thở không khí loãng trở nên êm ái, nhẹ nhõm cho lữ khách U70.',
    qty: 'Trang bị chuẩn',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Glamping Thermal Blankets',
    vietnameseName: 'Đệm Sưởi Điện & Chăn Nhiệt',
    description: 'Chuẩn bị chu toàn cho lều cách nhiệt tại Pangong Tso, vận hành liên tục 12 tiếng đêm để đem lại giấc ngủ phục hồi ấm áp giữa tiết trời âm độ.',
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
    name: 'Leh City',
    elevation: '3,500m',
    temperature: '5°C đến 18°C',
    coordinate: { x: 25, y: 70 },
    diaryTitle: 'Điểm khởi đầu: Thích nghi êm ái',
    diaryEntry: 'Đón đoàn tại sân bay Leh. Hướng dẫn viên sắp xếp nghỉ ngơi tại khách sạn boutique, dùng trà gừng, nhịp bách bộ thong thả để làm quen khí áp.',
    soundEffectName: 'Nhịp sống thị trấn & Chuông đồng'
  },
  {
    id: 'loc-2',
    name: 'Zanskar Valley',
    elevation: '3,800m',
    temperature: '8°C đến 15°C',
    coordinate: { x: 38, y: 76 },
    diaryTitle: 'Khám phá: Road Trip hoang dã',
    diaryEntry: 'Đoàn SUV lăn bánh dọc theo dòng Zanskar cuộn chảy. Phong cảnh tráng lệ của vách đá đỏ au mở ra định nghĩa chân thực về viễn du.',
    soundEffectName: 'Động cơ xe & Gió thung lũng'
  },
  {
    id: 'loc-3',
    name: 'Khardung La Pass',
    elevation: '5,359m',
    temperature: '-8°C đến 2°C',
    coordinate: { x: 45, y: 35 },
    diaryTitle: 'Thử thách: Vượt đỉnh đèo cao',
    diaryEntry: 'Kiêu hãnh vượt qua đỉnh đèo giao thông cao bậc nhất thế giới. Cảm giác chinh phục vỡ òa khi đứng giữa rừng cờ nguyện tung bay.',
    soundEffectName: 'Tiếng gió rít đỉnh đèo'
  },
  {
    id: 'loc-4',
    name: 'Nubra Valley',
    elevation: '3,000m',
    temperature: '2°C đến 16°C',
    coordinate: { x: 60, y: 22 },
    diaryTitle: 'Trải nghiệm: Bếp lửa sa mạc',
    diaryEntry: 'Hạ trại nướng bánh và nấu phở bò dã ngoại. Không khí ấm cúng giữa lữ khách và các bạn Local Guide Tây Tạng chan hòa quanh bếp.',
    soundEffectName: 'Chuông lạc đà & Tiếng lửa'
  },
  {
    id: 'loc-5',
    name: 'Pangong Tso Lake',
    elevation: '4,225m',
    temperature: '-5°C đến 10°C',
    coordinate: { x: 88, y: 55 },
    diaryTitle: 'Cột mốc: Glamping đêm ngân hà',
    diaryEntry: 'An giấc trong lều sưởi điện. Ngắm nhìn dải Milky Way lấp lánh phản chiếu trên mặt hồ lục bảo, khép lại hành trình đầy tự hào.',
    soundEffectName: 'Sóng hồ êm ả & Tiếng gió'
  }
];

