import type { AlaskaArticleSection, GeographicHighlight, SurvivalGearItem, HistoricalEvent, ArticleConfig } from '../types';
import { ALASKA_PART2_SECTIONS } from './alaskaPart2Data';
import { alaskaPart3Sections } from './alaskaPart3Data';
import { alaskaPart4Sections } from './alaskaPart4Data';
import { alaskaPart5Sections } from './alaskaPart5Data';
import { alaskaPart6Sections } from './alaskaPart6Data';
import { alaskaPart7Sections } from './alaskaPart7Data';
import { alaskaPart8Sections } from './alaskaPart8Data';
import { alaskaPart9Sections } from './alaskaPart9Data';
import { alaskaPart10Sections } from './alaskaPart10Data';

export const ALASKA_SECTIONS: AlaskaArticleSection[] = [
  {
    id: 'intro',
    order: 1,
    title: 'Miền Biên Cương Cuối Cùng',
    subtitle: 'The Last Frontier',
    paragraphs: [
      'Có những nơi trên thế giới mà khi đặt chân đến, người ta nhận ra rằng bản thân mình nhỏ bé hơn rất nhiều so với những gì vẫn tưởng.',
      'Alaska là một nơi như vậy.',
      'Trên bản đồ nước Mỹ, Alaska nằm tách biệt khỏi phần lãnh thổ chính. Một vùng đất rộng hơn 1,7 triệu km², lớn gấp nhiều lần Việt Nam, nhưng chỉ có chưa đến một triệu cư dân sinh sống. Từ trên cao nhìn xuống, những dãy núi phủ tuyết trắng kéo dài bất tận, những dòng sông băng xanh thẳm len lỏi qua các thung lũng cổ xưa, những khu rừng Taiga trải dài đến tận đường chân trời và đại dương lạnh giá nơi cá voi vẫn đều đặn trở về mỗi mùa hè.',
      'Người Mỹ gọi Alaska là "The Last Frontier" – Miền Biên Cương Cuối Cùng.',
      'Không phải bởi nơi đây nằm ở cực Bắc.',
      'Mà bởi Alaska vẫn giữ được điều mà phần lớn thế giới hiện đại đã đánh mất: sự hoang dã nguyên bản.'
    ],
    keyInsight: 'Một vùng đất bao la với mật độ dân cư thưa thớt, nơi bạn thực sự chạm vào sự hoang dã trọn vẹn và tĩnh lặng nhất của Trái Đất.',
    highlightText: 'Sự hoang dã nguyên bản là điều vô giá mà phần lớn thế giới hiện đại đã lỡ đánh mất.',
    illustrativeFact: {
      label: 'Diện Tích Lãnh Thổ',
      value: '1.717.856 km²',
      description: 'Lớn gấp hơn 5 lần diện tích Việt Nam nhưng chỉ có vỏn vẹn khoảng 730,000 cư dân sinh sống.'
    }
  },
  {
    id: 'nature',
    order: 2,
    title: 'Nơi Thiên Nhiên Giữ Vai Trò Chủ Đạo',
    subtitle: 'Nature Rules the Realm',
    paragraphs: [
      'Ở Alaska, thiên nhiên vẫn là nhân vật chính. Con người chỉ là những vị khách ghé thăm.',
      'Đó cũng là lý do vì sao Alaska luôn nằm trong danh sách những điểm đến mơ ước của những người yêu khám phá trên toàn thế giới. Không phải để mua sắm. Không phải để check-in. Càng không phải để tìm kiếm sự xa hoa.',
      'Người ta đến Alaska để cảm nhận cảm giác đứng trước một dòng sông băng hàng nghìn năm tuổi và nhận ra tuổi đời của mình chỉ là một khoảnh khắc rất ngắn trong lịch sử Trái Đất.',
      'Người ta đến Alaska để nhìn thấy một con cá voi lưng gù nặng hàng chục tấn bất ngờ trồi lên khỏi mặt nước giữa đại dương bao la.',
      'Người ta đến Alaska để hiểu thế nào là sự tự do của thiên nhiên.',
      'Điều thú vị là Alaska không giống bất kỳ hành trình Mỹ nào mà chúng ta từng biết. Khi nhắc đến nước Mỹ, đa phần du khách sẽ nghĩ đến những đô thị hiện đại, những xa lộ đông đúc và những biểu tượng quen thuộc. Nhưng Alaska lại là một nước Mỹ hoàn toàn khác. Một nước Mỹ của núi non, băng hà và động vật hoang dã. Đây là lý do ngày càng nhiều du khách tìm kiếm những tour Mỹ độc lạ và những hành trình khám phá có chiều sâu lựa chọn Alaska thay vì các cung đường truyền thống.'
    ],
    keyInsight: 'Hành trình ngắt kết nối với ồn ào đô thị để hòa vào nhịp đập vũ trụ bên vách đá và sóng ngầm.',
    highlightText: 'Con người chỉ là những vị khách ghé thăm gõ cửa vương quốc tự do của tạo hóa.',
    illustrativeFact: {
      label: 'Tuổi Đời Sông Băng',
      value: '10.000+ Năm',
      description: 'Chứa đựng những bong bóng khí cổ đại từ thời kỳ băng hà xa xưa của hành tinh.'
    }
  },
  {
    id: 'giants',
    order: 3,
    title: 'Vương Quốc Của Băng Hà & Những Kẻ Khổng Lồ',
    subtitle: 'Lãnh Địa Của Núi Tuyết',
    paragraphs: [
      'Đây là nơi những con gấu nâu khổng lồ vẫn tự do đi dọc các dòng sông săn cá hồi.',
      'Là nơi những đàn tuần lộc Caribou thực hiện những cuộc di cư dài hàng nghìn kilomet.',
      'Là nơi những ngọn núi cao nhất Bắc Mỹ vẫn đứng đó từ hàng triệu năm trước.',
      'Trong số đó, Denali là biểu tượng vĩ đại nhất. Ngọn núi cao hơn 6.000 mét này được người bản địa gọi là "The Great One" – Người Khổng Lồ. Vào những ngày trời quang, đỉnh Denali xuất hiện phía xa như một bức tường trắng khổng lồ dựng đứng giữa bầu trời Alaska.',
      'Không chỉ có núi. Alaska còn là vùng đất của băng hà. Khoảng hai vạn năm trước, phần lớn lãnh thổ nơi đây bị bao phủ bởi những lớp băng dày hàng kilomet. Những khối băng khổng lồ ấy đã chậm rãi di chuyển, bào mòn đá núi, tạo nên các thung lũng, hồ nước và vịnh biển mà chúng ta thấy ngày nay.',
      'Nếu thiên nhiên là một nghệ sĩ, thì băng hà chính là người kiến tạo nên Alaska.',
      'Khi đứng trước những khối băng xanh ngọc tại các vịnh biển phía Nam, rất nhiều người thường hỏi vì sao băng lại có màu xanh kỳ lạ đến vậy. Câu trả lời nằm ở thời gian. Hàng nghìn năm nén ép khiến băng hấp thụ phần lớn ánh sáng màu đỏ và chỉ phản chiếu lại sắc xanh. Đó là màu sắc của thời gian. Đó cũng là một trong những trải nghiệm đặc biệt nhất mà du lịch Alaska mang lại cho những người yêu thiên nhiên.'
    ],
    keyInsight: 'Ngắm nhìn màu xanh thẳm của thời gian nén chặt cả triệu tấn tuyết thành khối băng huyền bí dâng đời.',
    highlightText: 'Nếu thiên nhiên là một nghệ sĩ vĩ đại, thì băng hà chính là điêu khắc gia định hình nên Alaska.',
    illustrativeFact: {
      label: 'Chiều Cao Denali',
      value: '6.190 mét',
      description: 'Nóc nhà của lục địa Bắc Mỹ, sừng sững vượt rặng mây tuyết trắng vĩnh cửu.'
    }
  },
  {
    id: 'frontier',
    order: 4,
    title: 'Đi Xa Hơn Một Chuyến Du Lịch',
    subtitle: 'Beyond A Common Journey',
    paragraphs: [
      'Nhưng Alaska không chỉ là câu chuyện của thiên nhiên. Đó còn là câu chuyện của những con người dám bước vào vùng đất chưa ai biết đến.',
      'Năm 1867, Đế quốc Nga bán Alaska cho Mỹ với giá chỉ 7,2 triệu USD. Khi ấy, nhiều người Mỹ chế giễu thương vụ này và gọi đó là "Sự điên rồ của Seward" (Seward\'s Folly). Họ cho rằng chính phủ đã bỏ tiền mua một vùng đất toàn tuyết và băng.',
      'Ít ai ngờ rằng chỉ vài thập kỷ sau, những cơn sốt vàng cùng nguồn tài nguyên khổng lồ đã biến Alaska trở thành một trong những vùng đất giá trị nhất nước Mỹ.',
      'Đối với Max Vu, Alaska không đơn thuần là một điểm đến mới trong danh sách hành trình. Nó là sự tiếp nối của những vùng đất biên cương mà anh luôn theo đuổi. Nếu Murmansk mở ra cánh cửa của Bắc Cực, thì Alaska lại mở ra một chương khác của thế giới phương Bắc, nơi thiên nhiên vẫn giữ gần như nguyên vẹn vẻ đẹp nguyên sơ của mình.',
      'Đó cũng là lý do FIT TOUR đang nghiên cứu những tour độc lạ thuộc series tour Arnatic – những hành trình dành cho cộng đồng yêu khám phá, yêu thiên nhiên và tìm kiếm những giá trị vượt ra ngoài khái niệm du lịch thông thường.',
      'Với vai trò là một curator của những hành trình đặc biệt, FIT TOUR tin rằng những chuyến đi đáng nhớ nhất không phải là những chuyến đi giúp chúng ta nhìn thấy nhiều hơn. Mà là những chuyến đi giúp chúng ta hiểu sâu hơn. Và Alaska, miền biên cương cuối cùng của nước Mỹ, chính là một nơi như thế.'
    ],
    keyInsight: 'Một hành trình có chiều sâu lý giải vì sao một vùng đất từng bị chế giễu bỗng trở thành báu vật quý giá nhất hành tinh.',
    highlightText: 'FIT TOUR Arnatic Series: Những bước đi không tìm kiếm sự hào nhoáng, mà tìm kiếm chiều sâu kết nối tâm hồn lữ hành.',
    illustrativeFact: {
      label: 'Giá Trị Thương Vụ',
      value: '$7.2 Million',
      description: 'Mua lại từ Sa hoàng Nga năm 1867. Chỉ tương đương khoảng 4.74 xu cho mỗi hecta đất!'
    }
  }
];

export const ALASKA_HIGHLIGHTS: GeographicHighlight[] = [
  {
    id: 'denali',
    name: 'Denali National Park',
    vietnameseName: 'Vườn quốc gia Denali',
    coords: { x: 42, y: 38 },
    feature: 'Ngọn Núi Khổng Lồ',
    altitude: '6.190m',
    description: 'Nơi có đỉnh Denali vĩ đại - ngọn núi cao nhất Bắc Mỹ sừng sững sương giá. Thung lũng hoang dã bao quanh là mái nhà của gấu nâu gặm nhấm quả mọng và linh miêu săn tuyết.',
    image: 'https://media.fittour.vn/uploads/du-lich-alaska-usa-phan-4-glacier-nhung-dong-song-bang-bang-o-alaska.webp',
    quote: 'Denali có nghĩa là "Người Khổng Lồ vĩ đại" theo ngôn ngữ bản địa Athabaskan.',
    heritageStory: 'Biểu tượng tối cao của ý chí chinh phục và sức mạnh tự nhiên vĩnh hằng.'
  },
  {
    id: 'kenai-fjords',
    name: 'Kenai Fjords',
    vietnameseName: 'Vịnh Cửa Nghệ Kenai',
    coords: { x: 46, y: 64 },
    feature: 'Quần Thể Sông Băng & Đại Dương',
    description: 'Nơi hội ngộ kỳ vĩ của gần 40 dòng sông băng khổng lồ dập dìu đổ xuống đại dương lạnh giá sâu thẳm. Điểm tập trung của cá voi lưng gù nhào lộn tung bọt nước trắng xoá.',
    image: 'https://media.fittour.vn/uploads/du-lich-alaska-usa-phan-9-con-sot-vang-klondike-giac-mo-doi-doi.webp',
    quote: 'Nơi bạn nhìn thấy băng từ kỷ băng hà sập đổ xuống lòng đại dương với thanh âm vang dội trời cao.',
    heritageStory: 'Khối băng ngọc bích nén ép nghìn năm phản chiếu sắc xanh thần thoại.'
  },
  {
    id: 'seward',
    name: 'Seward Coast',
    vietnameseName: 'Vành Đai Cảng Biển Seward',
    coords: { x: 53, y: 70 },
    feature: 'Thương Vụ Lịch Sử và Cảng Cửa Ngõ',
    description: 'Thị trấn cảng cổ xưa khơi dậy ký ức về William H. Seward, người đã ký thương vụ bạc tỷ mua lại Alaska từ Sa hoàng Nga. Ngày nay là ngõ hẻm lộng gió dẫn vào Kenai.',
    image: 'https://media.fittour.vn/uploads/du-lich-alaska-usa-phan-1-mien-bien-cuong-cuoi-cung-cua-nuoc-my.webp',
    quote: 'Từng bị chế giễu là "Vườn bách thú của gấu tuyết", nay là cánh cửa biển giàu đẹp tuyệt trần.',
    heritageStory: 'Thương vụ tốn 7,2 triệu USD lịch sử đổi lấy một triệu báu vật vàng đen và băng ngọc.'
  },
  {
    id: 'anchorage',
    name: 'Anchorage Wilderness',
    vietnameseName: 'Thành Phố Giữa Rừng Hoang',
    coords: { x: 48, y: 53 },
    feature: 'Trái Tim Đại Đô Thị Hoang Dã',
    description: 'Đô thị lớn nhất của bang nhưng lại mang dáng dấp thảo nguyên tuyết sương. Nơi mà thỉnh thoảng một con nai sừng tấm khổng lồ lững thững dạo bước thong thả qua dãy phố đông đúc xơ rơ.',
    image: 'https://media.fittour.vn/uploads/du-lich-alaska-usa-phan-3-denali-nguoi-khong-lo-canh-giu-bac-my.webp',
    quote: 'Sự cân bằng tinh tế giữa nền văn minh hiện đại và rừng Taiga lẫm liệt gầm vang lộng gió.',
    heritageStory: 'Điểm xuất phát lý tưởng khám phá lòng sâu vương quốc cực Bắc.'
  },
  {
    id: 'yukon-border',
    name: 'Yukon & White Pass',
    vietnameseName: 'Con Đường Cơn Sốt Vàng White Pass',
    coords: { x: 78, y: 65 },
    feature: 'Huyền Thoại Cơn Sốt Vàng 2026',
    description: 'Tử địa vách sương đá, nơi hàng vạn kẻ tìm vàng từng liều mạng leo qua đèo White Pass mong đổi đời hồi cuối thế kỷ 19 dọc sông Yukon huyền thoại thơ mộng.',
    image: 'https://media.fittour.vn/uploads/du-lich-alaska-usa-phan-6-moose-ga-khong-lo-tram-lang-cua-alaska.webp',
    quote: 'Bụi cát lấp lánh vàng dệt nên những tiểu thuyết sống động của Jack London bất hủ.',
    heritageStory: 'Ký ức bất biến về lòng tham, khát vọng tự do và can đảm vượt qua giới cực đoan thiên nhiên.'
  }
];

export const SURVIVAL_GEAR: SurvivalGearItem[] = [
  {
    id: 'parka',
    name: 'Arctic Insulated Parka',
    vietnameseName: 'Áo Khoác Nam Cực Chống Bão Cát Tuyết',
    category: 'clothing',
    necessity: 'critical',
    description: 'Áo khoác dài lót lông cách nhiệt tuyệt đối, dán băng chống thấm nước dập tràn lảo đảo gió giông.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'crampons',
    name: 'Glacier Crampons & Boots',
    vietnameseName: 'Giày Đinh Leo Băng Chuyên Dụng Mới',
    category: 'equipment',
    necessity: 'critical',
    description: 'Giúp bám chắc vào các tảng nước đá trơn trượt hàng nghìn năm tuổi bờ vách dốc thẳm xanh ngọc.',
    iconName: 'Footprints'
  },
  {
    id: 'flair',
    name: 'Bear Spray Alert',
    vietnameseName: 'Bình Xịt Đuổi Gấu Nâu Hoang Dã',
    category: 'emergency',
    necessity: 'critical',
    description: 'Vật dụng hộ thân bất ly thân cứu mạng du khách khi vô tình giáp mặt gấu nâu săn mồi tại thung lũng Denali.',
    iconName: 'Flame'
  },
  {
    id: 'gps',
    name: 'Satellite GPS Beacon',
    vietnameseName: 'Thiết Bị Định Vị Vệ Tinh Khẩn Cấp SOS',
    category: 'navigation',
    necessity: 'recommended',
    description: 'Bảo đảm kết nối và định vị khi dấn sâu vào thung lũng sâu không sóng điện thoại toàn Alaska.',
    iconName: 'Radio'
  },
  {
    id: 'goggles',
    name: 'Polarized Snow Goggles',
    vietnameseName: 'Kính Râm Phản Quang Chống Chói Tuyết',
    category: 'clothing',
    necessity: 'recommended',
    description: 'Ngăn chặn hiện tượng lóa mắt mù tuyết trắng xóa tạm thời do khúc xạ mặt trời óng ánh hốc băng tuyết.',
    iconName: 'Eye'
  }
];

export const ALASKA_TIMELINE: HistoricalEvent[] = [
  {
    year: '1867',
    title: "Seward's Folly Deal",
    vietnameseTitle: 'Thương Vụ Điên Rồ "Seward\'s Folly"',
    description: 'Ngoại trưởng Mỹ Seward hoàn tất việc giao dịch mua Alaska từ Đế quốc Nga Sa hoàng với gia tài 7,2 triệu USD, bị dèm pha kịch liệt là mua băng hoang dại hẻo lánh trống rỗng.',
    economicValue: '7.2 Triệu USD',
    funFact: 'Ngày nay số gỗ, cá hồi và mỏ dầu quý kiếm được mỗi tháng gấp ngàn lần sớ mua ban đầu.'
  },
  {
    year: '1896',
    title: 'Klondike Gold Rush',
    vietnameseTitle: 'Cơn Sốt Vàng Thắp Sáng Bắc Cực',
    description: 'Phát hiện mỏ quặng vàng khổng lồ tại vùng Yukon và đèo Klondike, kéo hàng trăm ngàn phu đào vàng liều mạng dấn thân khai hoang tạo nên một Alaska sầm uất thăng trầm vạn thế.',
    economicValue: 'Hàng ngàn tấn vàng rực rực',
    funFact: 'Là cảm hứng làm nên những kiệt tác văn học trường tồn của Jack London như Tiếng Gọi Nơi Hoang Dã.'
  },
  {
    year: '1959',
    title: 'The 49th US State Admission',
    vietnameseTitle: 'Alaska Chính Thức Hóa Bang Thứ 49 Của Mỹ',
    description: 'Tổng thống Eisenhower phê chuẩn sắc lệnh chính thức đưa Alaska gia nhập liên bang Mỹ với biểu tượng Ngôi sao cực Bắc lẫm liệt trên nền cờ chòm sao Đại Hùng màu vàng óng biếc.',
    economicValue: 'Chính trị & Địa chiến lược tối thượng',
    funFact: 'Diện tích lớn ngang tổng 3 bang lớn thứ nhì, thứ ba, thứ tư cộng tắp lại!'
  },
  {
    year: '2026',
    title: 'Arnatic Series by FIT TOUR',
    vietnameseTitle: 'Series Thám Hiểm Độc Lạ "Arnatic"',
    description: 'FIT TOUR chính thức khởi nghiên và thiết chế dòng hành trình thám hiểm chạm thềm sâu tịnh độ tuyết trắng, mở ra triết lý thấu hiểu có chiều sâu vương quốc Bắc cực của người yêu tự do tự đắc.',
    economicValue: 'Trải Nghiệm Thượng Thiết Độc Bản',
    funFact: 'Chu du có curators dẫn giải tỉ mỉ giúp bạn thấm trọn vẹn chứ không thuần check-in hời hợt.'
  }
];

export const PART1_CONFIG: ArticleConfig = {
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Miền Biên Cương Cuối Cùng Của Nước Mỹ',
  heroChapter: 'PHẦN I • CHƯƠNG KHỞI KÝ TIÊN PHONG',
  heroQuote: '"Có những nơi trên thế giới mà khi đặt chân đến, người ta nhận ra rằng bản thân mình nhỏ bé hơn rất nhiều so với những gì vẫn tưởng. Alaska là một nơi như vậy."',
  sections: ALASKA_SECTIONS,
  partNumber: 1
};

export const PART2_CONFIG: ArticleConfig = {
  title: 'Alaska: Vì Sao Nga Bán Alaska Cho Mỹ Chỉ Với 7,2 Triệu USD? (Phần 2)',
  heroImage: 'https://media.fittour.vn/uploads/du-lich-alaska-usa-phan-2-thuong-vu-72-trieu-usd-thay-doi-lich-su-nuoc-my.webp',
  sections: ALASKA_PART2_SECTIONS,
};

export const PART3_CONFIG: ArticleConfig = {
  title: 'Alaska: Denali – Đỉnh Núi Cao Nhất Bắc Mỹ Và Biểu Tượng Của Vùng Đất Hoang Dã (Phần 3)',
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Denali – Đỉnh Núi Cao Nhất Bắc Mỹ Và Biểu Tượng Của Vùng Đất Hoang Dã',
  heroChapter: 'PHẦN III • NGƯỜI KHỔNG LỒ BẮC MỸ',
  heroQuote: '"Điều làm nên sự vĩ đại của một ngọn núi không nằm ở độ cao. Mà nằm ở khả năng khiến con người dừng lại, ngẩng đầu nhìn lên..."',
  heroImage: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
  sections: alaskaPart3Sections,
  partNumber: 3
};

export const PART4_CONFIG: ArticleConfig = {
  title: 'Alaska: Glacier – Những Dòng Sông Băng Đã Tạo Nên Vùng Đất Hoang Dã Này (Phần 4)',
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Glacier – Những Dòng Sông Băng Đã Tạo Nên Vùng Đất Hoang Dã',
  heroChapter: 'PHẦN IV • KIẾN TRÚC SƯ CỦA THIÊN NHIÊN',
  heroQuote: '"Nếu thiên nhiên là một nghệ sĩ, thì glacier chính là người điêu khắc vĩ đại nhất của vùng đất này."',
  heroImage: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
  sections: alaskaPart4Sections,
  partNumber: 4
};

export const PART5_CONFIG: ArticleConfig = {
  title: 'Alaska: Gấu Nâu Alaska – Vì Sao Đây Là Nơi Tốt Nhất Thế Giới Để Ngắm Gấu Hoang Dã? (Phần 5)',
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Gấu Nâu Alaska – Vì Sao Đây Là Nơi Tốt Nhất Thế Giới Để Ngắm Gấu Hoang Dã?',
  heroChapter: 'PHẦN V • CHÚA TỂ CỦA VÙNG ĐẤT HOANG DÃ',
  heroQuote: '"Trong thế giới hoang dã của phương Bắc, gấu nâu không chỉ là một loài động vật. Chúng là hiện thân của sức mạnh, khả năng thích nghi và tinh thần sinh tồn đáng kinh ngạc của tự nhiên."',
  heroImage: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
  sections: alaskaPart5Sections,
  partNumber: 5
};

export const PART6_CONFIG: ArticleConfig = {
  title: 'Alaska: Moose – Loài Nai Sừng Tấm Khổng Lồ Mà Du Khách Thường Gặp Nhất (Phần 6)',
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Moose – Loài Nai Sừng Tấm Khổng Lồ Mà Du Khách Thường Gặp Nhất',
  heroChapter: 'PHẦN VI • GÃ KHỔNG LỒ HIỀN HÒA',
  heroQuote: '"Chính sự gần gũi ấy khiến Moose trở thành một trong những trải nghiệm động vật hoang dã đáng nhớ nhất tại Alaska."',
  heroImage: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
  sections: alaskaPart6Sections,
  partNumber: 6
};

export const PART7_CONFIG: ArticleConfig = {
  title: 'Alaska: Mùa Ngắm Cá Voi – Trải Nghiệm Không Thể Bỏ Lỡ Ở Vùng Cực Bắc (Phần 7)',
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Mùa Ngắm Cá Voi – Trải Nghiệm Không Thể Bỏ Lỡ Ở Vùng Cực Bắc',
  heroChapter: 'PHẦN VII • VŨ ĐIỆU CỦA ĐẠI DƯƠNG',
  heroQuote: '"Bởi khi một con cá voi lưng gù từ từ nổi lên giữa mặt biển bao la rồi lặn xuống làn nước xanh thẳm, đó không chỉ là một cuộc gặp gỡ với động vật hoang dã. Đó là cơ hội để con người cảm nhận sự kỳ vĩ của thiên nhiên theo cách chân thực nhất."',
  heroImage: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
  sections: alaskaPart7Sections,
  partNumber: 7
};

export const PART8_CONFIG: ArticleConfig = {
  title: 'Alaska: Người Bản Địa Alaska – Những Người Đầu Tiên Gọi Vùng Đất Này Là Quê Hương (Phần 8)',
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Người Bản Địa – Những Người Đầu Tiên Gọi Vùng Đất Này Là Quê Hương',
  heroChapter: 'PHẦN VIII • LINH HỒN CỦA VÙNG ĐẤT',
  heroQuote: '"Bởi Alaska không chỉ được tạo nên bởi băng hà, núi tuyết hay động vật hoang dã. Alaska còn được tạo nên bởi những con người đã sống, thích nghi và gìn giữ tinh thần của phương Bắc qua hàng nghìn năm lịch sử."',
  heroImage: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
  sections: alaskaPart8Sections,
  partNumber: 8
};

export const PART9_CONFIG: ArticleConfig = {
  title: 'Alaska: Cơn Sốt Vàng Klondike – Hành Trình Đã Thay Đổi Alaska Và Yukon (Phần 9)',
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Cơn Sốt Vàng Klondike – Hành Trình Đã Thay Đổi Alaska Và Yukon',
  heroChapter: 'PHẦN IX • GIẤC MƠ PHƯƠNG BẮC',
  heroQuote: '"Trong lịch sử Bắc Mỹ, rất ít sự kiện tạo ra làn sóng dịch chuyển con người mạnh mẽ như Cơn sốt vàng Klondike. Nó không chỉ làm thay đổi Alaska và Yukon. Nó còn tạo nên một trong những câu chuyện hấp dẫn nhất về khát vọng, lòng can đảm và những giấc mơ đổi đời của con người."',
  heroImage: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
  sections: alaskaPart9Sections,
  partNumber: 9
};

export const PART10_CONFIG: ArticleConfig = {
  title: 'Alaska: Điều Còn Lại Sau Hành Trình Đến Miền Biên Cương Cuối Cùng Của Nước Mỹ (Phần 10)',
  seriesTitle: 'ALASKA',
  heroSubtitle: 'Điều Còn Lại Sau Hành Trình Đến Miền Biên Cương Cuối Cùng Của Nước Mỹ',
  heroChapter: 'PHẦN X • LỜI TỰ TÌNH CỦA THIÊN NHIÊN',
  heroQuote: '"Alaska không chỉ là một điểm đến. Đó là một trải nghiệm giúp con người nhìn lại mối quan hệ giữa mình với thế giới tự nhiên."',
  heroImage: 'https://media.fittour.vn/uploads/song-bang-va-day-nui-tuyet-alaska.webp',
  sections: alaskaPart10Sections,
  partNumber: 10
};

export const ALASKA_TOC = [
  { part: 1, title: 'Miền Biên Cương Cuối Cùng Của Nước Mỹ', slug: 'alaska-mien-bien-cuong-cuoi-cung' },
  { part: 2, title: 'Thương Vụ 7,2 Triệu USD', slug: 'alaska-thuong-vu-72-trieu-usd-thay-doi-lich-su' },
  { part: 3, title: 'Denali - Đỉnh Núi Cao Nhất Bắc Mỹ', slug: 'alaska-denali-dinh-nui-cao-nhat-bac-my' },
  { part: 4, title: 'Glacier - Những Dòng Sông Băng', slug: 'alaska-glacier-nhung-dong-song-bang' },
  { part: 5, title: 'Gấu Nâu Alaska', slug: 'alaska-gau-nau-alaska' },
  { part: 6, title: 'Moose - Loài Nai Sừng Tấm', slug: 'alaska-moose-nai-sung-tam' },
  { part: 7, title: 'Mùa Ngắm Cá Voi', slug: 'alaska-mua-ngam-ca-voi' },
  { part: 8, title: 'Người Bản Địa Alaska', slug: 'alaska-nguoi-ban-dia' },
  { part: 9, title: 'Cơn Sốt Vàng Klondike', slug: 'alaska-con-sot-vang-klondike' },
  { part: 10, title: 'Điều Còn Lại', slug: 'alaska-dieu-con-lai' }
];
