import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Hanle: Khu Bảo Tồn Bầu Trời Tối',
    subtitle: 'Vùng Đệm Thích Nghi Quan Trọng Nhất',
    abstract: 'Chuyến đi Umling La luôn bắt đầu từ Hanle, điểm dừng chân bắt buộc không chỉ để chiêm ngưỡng một trong những bầu trời đêm nguyên sơ nhất thế giới mà còn để cơ thể làm quen với độ cao.',
    paragraphs: [
      'Nằm ở độ cao 4.267m, Hanle là trung tâm của Khu bảo tồn Bầu trời tối Hanle (HDSR) - nơi đầu tiên tại Ấn Độ đạt chuẩn quốc tế về độ trong suốt của bầu trời. Không ô nhiễm ánh sáng và độ ẩm cực thấp, bạn có thể dễ dàng nhìn thấy Dải Ngân Hà vắt ngang bầu trời.',
      'Nhưng quan trọng hơn, việc nghỉ ngơi từ 1-2 đêm tại Hanle là bắt buộc. Nhảy vọt từ <a href="/cho-leh-ladakh" className="text-amber-600 hover:text-amber-700 underline decoration-amber-500/30 underline-offset-2">Leh</a> (3.500m) lên thẳng Umling La (5.883m) trong ngày là một rủi ro y tế cực lớn. Hanle là vùng đệm hoàn hảo để nhịp tim và phổi bạn quen dần với việc lượng oxy trong không khí bắt đầu sụt giảm mạnh.'
    ],
    quote: 'Từ dữ liệu của hơn 30 đoàn khách FIT Tour, những khách lưu trú hai đêm ở Leh và một đêm ở Hanle trước khi lên Umling La thường thích nghi tốt hơn đáng kể so với lịch trình gấp.',
    locationName: 'Làng Hanle - 4.267m',
    imgUrl: ''
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Cung Đường Chisumle & Động Vật Hoang Dã',
    subtitle: 'Sự Sống Giữa Cao Nguyên',
    abstract: 'Từ Hanle hướng về cầu Chisumle, con đường nhựa cắt ngang qua những bình nguyên cằn cỗi màu đất nung. Trái với vẻ ngoài hoang vu, hệ sinh thái ở đây lại khá đa dạng.',
    paragraphs: [
      'Dọc tuyến đường này, nếu tinh mắt, bạn sẽ bắt gặp lừa hoang Tây Tạng (Kiang) thong dong chạy trên các triền đồi, hay những chú Marmot béo mập tò mò ngó nhìn từ hang đá. Ở các bãi ngập nước nhỏ, thi thoảng sếu cổ đen (Black-necked Crane) cũng xuất hiện tìm mồi.',
      'Khu vực này cực kỳ nhạy cảm vì nằm rất gần Đường Kiểm soát Thực tế (LAC) giữa Ấn Độ và Trung Quốc. Đó là lý do mọi du khách ngoại quốc lẫn nội địa đều bắt buộc phải có Giấy phép Inner Line Permit (ILP) - loại giấy phép mà team điều hành FIT Tour luôn chuẩn bị sẵn từ nhà.'
    ],
    quote: 'Chuyến đi không chỉ có cát đá, mà còn là cơ hội để bạn quan sát những loài động vật hoang dã hiếm có bậc nhất của dãy Himalaya.',
    locationName: 'Cầu Chisumle',
    imgUrl: ''
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Dự Án Himank Của BRO',
    subtitle: 'Mở Đường Lên Cao Độ 6.000m',
    abstract: 'Tuyến đường qua đèo Umling La là một công trình hạ tầng vô cùng phức tạp, do Tổ chức Đường Biên giới Ấn Độ (BRO) thi công dưới những điều kiện thời tiết khắc nghiệt nhất.',
    paragraphs: [
      'Bắt đầu rải nhựa từ năm 2017, dự án Himank phải đối mặt với muôn vàn khó khăn: máy móc hoạt động chập chờn vì thiếu oxy, công nhân liên tục bị kiệt sức, và mùa đông nhiệt độ rơi xuống dưới -40°C khiến mặt đất đóng băng thành đá cứng như thép.',
      'Đến năm 2021, tuyến đường Chisumle-Demchok dài 52km chính thức hoàn thành, đánh bại đường lên núi lửa Uturuncu ở Bolivia (5.777m) để được Kỷ lục Guinness ghi nhận là Tuyến đường cơ giới cao nhất thế giới.'
    ],
    quote: 'Không chỉ là kỷ lục, con đường này còn là tuyến giao thông chiến lược quan trọng để quân đội tiếp tế hậu cần ra vùng biên giới.',
    locationName: 'Tuyến đường biên giới',
    imgUrl: 'https://media.fittour.vn/uploads/du-khach-tha-dang-trai-tim-giua-nhung-dinh-nui-phu-tuyet-trang-tai-deo-umling-la.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Khoa Học Về Độ Cao 5.883m',
    subtitle: 'Oxy, Áp Suất & Wind Chill',
    abstract: 'Đứng ở độ cao 5.883m, cơ thể bạn sẽ phải đối mặt với những giới hạn vật lý hoàn toàn khác biệt so với đồng bằng.',
    paragraphs: [
      'Tại đây, áp suất khí quyển và lượng oxy chỉ còn khoảng 50%. Độ ẩm cực thấp khiến họng rất mau khô. Tia cực tím (UV) cao hơn khoảng 50–60% so với mực nước biển, có thể gây bỏng nắng và mù tuyết chỉ sau nửa tiếng nếu không đeo kính râm bảo vệ mắt.',
      'Không chỉ con người, xe cộ cũng chịu trận. Động cơ diesel chạy yếu đi hẳn do thiếu oxy để đốt cháy nhiên liệu, khói xả ra đen hơn. Sự chênh lệch áp suất còn khiến lốp xe rất dễ bị tụt áp hoặc nứt nẻ bề mặt, đòi hỏi kỹ năng lái rất chắc tay.'
    ],
    quote: 'Vừa bước xuống xe, mình chỉ định chạy vài bước tới tấm bảng vàng để chụp ảnh. Nhưng mới khoảng 20 mét đã phải dừng lại lấy hơi. Đó là lần đầu tiên mình cảm nhận rõ ràng độ cao gần 6.000m không còn là một con số.',
    locationName: 'Cao độ 5.883m',
    imgUrl: 'https://media.fittour.vn/uploads/ceo-max-vu-tu-hao-cam-chung-nhan-ky-luc-guinness-tai-deo-umling-la.webp'
  },
  {
    id: 'chapter-5',
    number: '05',
    title: 'Chạm Tay Vào Đỉnh Đèo',
    subtitle: 'Điểm Dừng Chân 15 Phút',
    abstract: 'Khoảnh khắc nhìn thấy tấm bảng vàng quen thuộc của BRO hiện ra giữa rặng tuyết, đó là lúc bạn biết mình đã hoàn tất trọn vẹn hành trình.',
    paragraphs: [
      'Nhiệt độ trên đỉnh đèo vào mùa hè ban ngày thường dao động từ 0°C đến 10°C. Tuy nhiên, hiệu ứng gió buốt (wind chill) mạnh bạo thường xuyên quét qua đèo sẽ khiến cơ thể bạn cảm nhận cái lạnh buốt xương như đang ở mức âm độ.',
      'Quy tắc vàng của HDV là bạn chỉ có tối đa 15 đến 20 phút ở đỉnh. Mười lăm phút đó đủ để bạn ghi lại bức ảnh kỷ niệm với bảng Guinness, tận hưởng sự phấn khích, và sau đó nhanh chóng lên xe hạ độ cao để đảm bảo an toàn y tế.'
    ],
    quote: 'Không cần đao to búa lớn. Chỉ riêng việc bạn đứng vững ở độ cao này và mỉm cười thoải mái chụp ảnh đã là một thành tích đáng gờm.',
    locationName: 'Đỉnh Umling La',
    imgUrl: 'https://media.fittour.vn/uploads/thanh-vien-ekip-tu-hao-voi-chung-nhan-ky-luc-guinness-tai-deo-tuyet-umling-la.webp'
  },
  {
    id: 'chapter-6',
    number: '06',
    title: 'Góc Nhìn Từ Tour Leader',
    subtitle: 'Dữ Liệu Thực Tế Từ FIT Tour',
    abstract: 'Sau nhiều mùa dẫn đoàn khách Việt Nam lên Umling La, sự đúc kết lớn nhất của đội ngũ FIT Tour gói gọn trong chữ: Đừng vội vã.',
    paragraphs: [
      'Khách hàng thường có tâm lý nôn nóng muốn lên thẳng đèo. Nhưng theo thống kê thực tế từ các đoàn chúng tôi, việc chia nhỏ chặng đi và tuân thủ tuyệt đối lịch trình nới lỏng nhịp độ giúp tỷ lệ gặp biến chứng AMS nặng gần như bằng 0.',
      'Để phòng hờ rủi ro, mọi xe chở khách của FIT Tour đều được gắn một bình oxy y tế dung tích lớn (không phải bình xịt mini). Điều quan trọng nhất mà một Tour Designer hướng đến không phải là đưa bạn đến nơi nhanh nhất, mà là đưa bạn trở về khỏe mạnh với một ký ức trọn vẹn.'
    ],
    quote: 'Chúng tôi thiết kế lịch trình dựa trên các số liệu y tế và kinh nghiệm thực địa, để việc chạm mốc 5.883m là một niềm vui thay vì sự hành xác.',
    locationName: 'Kinh nghiệm FIT Tour',
    imgUrl: 'https://media.fittour.vn/uploads/toan-canh-ekip-fit-tour-an-mung-ky-luc-guinness-tai-deo-umling-la.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/trai-nghiem-choi-tuyet-khardungla-ladakh.webp',
    caption: 'Đèo Khardung La quanh năm phủ tuyết trắng, một trong những đèo cơ giới cao nhất thế giới.',
    category: 'moments',
    location: 'Đèo Khardung La',
    date: 'Bình minh'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/suong-mu-tren-ho-pangong-buoi-sang.webp',
    caption: 'Mặt hồ Pangong Tso xanh biếc hiện ra huyền ảo dưới lớp sương mù sáng sớm.',
    category: 'natural',
    location: 'Hồ Pangong',
    date: 'Sáng sớm'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/toan-canh-tu-vien-thiksey-ladakh.webp',
    caption: 'Tu viện Thiksey uy nghi tựa lưng vào núi đá, được mệnh danh là Potala thu nhỏ.',
    category: 'spiritual',
    location: 'Thiksey Gompa',
    date: 'Nắng chiều'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/khu-cuoi-lac-da-hai-buouu-tai-thung-lung-nubra.webp',
    caption: 'Đàn lạc đà hai bướu Bactrian băng qua đụn cát Hunder giữa thung lũng sỏi đá.',
    category: 'natural',
    location: 'Thung lũng Nubra',
    date: 'Hoàng hôn'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/toan-canh-hop-luu-song-indus-va-zanskar-tai-sangam.webp',
    caption: 'Ngã ba Sangam - Nơi hai dòng sông Indus xanh ngọc và Zanskar đục ngầu phù sa hòa quyện.',
    category: 'natural',
    location: 'Ngã ba Sangam',
    date: 'Ban ngày'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/2023/06/mua-mat-na-huou-tai-le-hoi-Purnima-ladakh.webp',
    caption: 'Điệu múa mặt nạ Cham truyền thống đầy tính biểu tượng của các nhà sư Tây Tạng.',
    category: 'people',
    location: 'Lễ hội địa phương',
    date: 'Mùa hè'
  },
  {
    id: 'p7',
    url: 'https://media.fittour.vn/uploads/pho-di-bo-main-bazaar-leh-ladakh.webp',
    caption: 'Nhịp sống thanh bình và sầm uất tại khu chợ trung tâm Main Bazaar của thị trấn Leh.',
    category: 'people',
    location: 'Thị trấn Leh',
    date: 'Xế chiều'
  },
  {
    id: 'p8',
    url: 'https://media.fittour.vn/uploads/2023/06/tu-vien-Phugtal.webp',
    caption: 'Tu viện Phugtal cheo leo vách núi, ẩn mình trong hang động với kiến trúc tổ ong độc đáo.',
    category: 'spiritual',
    location: 'Vùng Zanskar',
    date: 'Giữa trưa'
  },
  {
    id: 'p9',
    url: 'https://media.fittour.vn/uploads/2022/06/kien-truc-bao-thap-shanti-stupa.webp',
    caption: 'Bảo tháp Shanti Stupa đứng sừng sững, mang ý nghĩa biểu tượng hòa bình giữa thung lũng Leh.',
    category: 'spiritual',
    location: 'Shanti Stupa',
    date: 'Hoàng hôn'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Trang phục giữ nhiệt Extreme',
    vietnameseName: 'Áo phao & Đồ lót nhiệt',
    description: 'Nhiệt độ trên đỉnh đèo dù là mùa hè vẫn rất lạnh do gió rít mạnh. Áo khoác chống gió, găng tay giữ ấm là bắt buộc.',
    qty: '3-4 lớp',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Thuốc Diamox',
    vietnameseName: 'Phòng say độ cao',
    description: 'Ở độ cao 5883m, lượng oxy chỉ còn khoảng 50%. Cần uống thuốc Diamox trước 2 ngày theo chỉ định của bác sĩ.',
    qty: '1 vỉ',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Bình Oxy Y Tế',
    vietnameseName: 'Oxy dự phòng',
    description: 'Mặc dù xe của FIT Tour luôn trang bị bình oxy lớn, mang theo một bình xịt mini bên người khi đi bộ chụp ảnh là rất hữu ích.',
    qty: '1-2 bình',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-4',
    name: 'Giấy phép ILP',
    vietnameseName: 'Inner Line Permit',
    description: 'Umling La nằm sát đường LAC. Quân đội sẽ kiểm tra giấy phép cực kỳ gắt gao. FIT Tour sẽ xin sẵn giấy này cho bạn.',
    qty: 'Nhiều bản in',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-5',
    name: 'Kính râm Polarized & Kem dưỡng UV',
    vietnameseName: 'Bảo vệ da & mắt',
    description: 'Bức xạ tia cực tím ở 5.883m cao hơn bình thường rất nhiều. Thiếu kính râm dễ dẫn tới hội chứng mù tuyết tạm thời.',
    qty: '1 bộ',
    category: 'health',
    importance: 'high'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Làng Hanle',
    elevation: '4,267m',
    temperature: '10°C đến 20°C',
    coordinate: { x: 30, y: 70 },
    diaryTitle: 'Trạm dừng thiên văn',
    diaryEntry: 'Đêm ở Hanle tĩnh mịch, ngước lên là bầu trời sao sáng rực rỡ nhất từng thấy do độ trong suốt không khí tuyệt đối.',
    soundEffectName: 'Tiếng gió nhẹ'
  },
  {
    id: 'loc-2',
    name: 'Cầu Chisumle',
    elevation: '5,000m',
    temperature: '5°C đến 15°C',
    coordinate: { x: 50, y: 50 },
    diaryTitle: 'Vùng đất hoang dã',
    diaryEntry: 'Đàn Kiang nhởn nhơ gặm cỏ. Đường nhựa bắt đầu uốn lượn liên tục qua các sườn đồi trống trải.',
    soundEffectName: 'Tiếng động cơ gầm'
  },
  {
    id: 'loc-3',
    name: 'Đỉnh Umling La',
    elevation: '5,883m',
    temperature: '0°C đến 10°C (Mùa hè)',
    coordinate: { x: 80, y: 20 },
    diaryTitle: 'Kỷ Lục Guinness',
    diaryEntry: '15 phút trên đỉnh đèo là sự hãnh diện tột cùng. Tim đập thình thịch, hơi thở dồn dập vì oxy chỉ còn một nửa.',
    soundEffectName: 'Tiếng gió rít mạnh'
  }
];
