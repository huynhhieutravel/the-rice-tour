import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Tiếng Gọi Của Sa Mạc Lạnh',
    subtitle: 'Lời từ chối an phận ở tuổi sáu mươi tám',
    abstract: 'Ladakh không chào đón những người vội vã. Ở độ tuổi 68, khi hành lý mang theo là những viên thuốc huyết áp và chiếc áo khoác lông vũ, Cô Mây đã dẫm chân lên những ranh giới định kiến để lắng nghe tiếng gọi từ rặng Himalaya kỳ vĩ.',
    paragraphs: [
      'Gió thốc qua cửa sổ sân bay Leh, mang theo cái lạnh buốt sắc sảo của độ cao 3.500 mét. Mọi người vẫn bảo, U70 rồi thì đi loanh quanh ngoại ô, cùng lắm sang vài nước Đông Nam Á phẳng lặng mà nghỉ ngơi dưỡng già. Con cháu cản, bạn bè lắc đầu bảo Cô dại dột, tự mua dây buộc mình vào nơi "bước một bước là thở dốc". Nhưng Cô Mây chỉ cười nhạt. "Nếu không phải bây giờ, thì bao giờ?". Bản tính một người phụ nữ cả đời lo toan cho gia đình, giờ đây thèm khát được tự do một lần, được thở bầu không khí mộc mạc hoang đại của Ladakh.',
      'Ngày đầu tiên ở Leh là bài kiểm tra sự kiên nhẫn. Cô Mây nằm im lìm trong căn phòng khách sạn nhỏ bằng gỗ mộc, lắng nghe nhịp tim đập dồn dập phản kháng lại không khí loãng của miền cao nguyên. Cô nhấp từng ngụm nước ấm pha gừng, hít thở sâu theo nhịp yoga quen thuộc. Ngoài kia, ánh nắng rát bỏng rọi trên những ngọn núi đất sét xám xịt phủ tuyết trắng xa xăm. Buổi tối đầu tiên vượt qua không cần máy thở, đó là chiến thắng đầu đời của tuổi 68 trên đất Ấn Độ.'
    ],
    quote: 'Sự dũng cảm không phải là không sợ hãi, mà là bước đi khi chân vẫn còn run. Bản thân việc đứng ở Leh đã là một đặc ân.',
    locationName: 'Thị trấn Leh - 3,500m',
    imgUrl: 'https://media.fittour.vn/uploads/pho-di-bo-main-bazaar-leh-ladakh.webp'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Khardung La: Nơi Chạm Tay Vào Trời Xanh',
    subtitle: 'Vệt lốp xe vượt đỉnh đèo cao nhất thế giới giao thông được',
    abstract: '5.359 mét trên mực nước biển. Con đèo uốn lượn như dải lụa mỏng vắt qua núi đá phủ băng, nơi không khí mỏng mảnh đến mức mỗi hơi thở là một sự nỗ lực kiêu hãnh.',
    paragraphs: [
      'Chiếc xe lướt trên những cung đường đất chênh vênh bám chặt vào sườn đá dốc đứng. Nhiệt độ tụt dần xuống dưới âm độ, sương muối phủ trắng xóa những lan can bảo vệ tạm bợ. Qua lớp kính xe, Cô Mây chăm chú ngắm rặng Karakoram sừng sững như vạn bức tường thành bảo vệ nền văn minh cổ xưa. Đầu óc có chút chếnh choáng do không khí loãng, nhưng ánh mắt Cô lại rực sáng. Cô tự dặn mình: hãy thở thật êm, hãy để cơ thể tự hòa nhịp vào đất trời.',
      'Khi chiếc xe dừng lăn bánh tại đỉnh đèo Khardung La, xung quanh Cô là một rừng cờ nguyện rực rỡ ngũ sắc tung bay rách tươm trong gió tuyết khô khốc. Bước xuống xe, mặt đất đóng băng trơn trượt dưới hố giày dã ngoại. Cô Mây nghẹn ngào níu lấy cột mốc ghi độ cao 17.582 feet. Giữa không gian lồng lộng lạnh giá, giọt nước mắt lăn dài rồi đóng băng trên gò má nhăn nheo đầy hạnh phúc. Tuổi tác chỉ là những con số vô nghĩa khi ý chí đạt đỉnh cao.'
    ],
    quote: 'Lần đầu tiên trong đời, tôi thấy mình đứng cao hơn cả mây trời, xung quanh chỉ có gió hú, tiếng cờ vải đập phần phật và sự im lặng tuyệt đối của vũ trụ.',
    locationName: 'Đèo Khardung La - 5,359m',
    imgUrl: 'https://media.fittour.vn/uploads/ms-van-check-in-khardungla-top-ladakh.webp'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Thiksey: Tiếng Chuông Đồng & Ánh Nến Sáp Ong',
    subtitle: 'Nơi tâm hồn neo đậu vào cội nguồn bình yên cổ kính',
    abstract: 'Mười hai tầng thiền viện Thiksey xếp chồng rực rỡ như đóa sen nở trên đồi đá cuội. Dưới bóng bức đại tượng Di Lặc phản chiếu ánh vàng kim, Cô Mây tìm lại những khoảng trắng thuần khiết nhất của suy tư.',
    paragraphs: [
      'Hành trình leo bộ gần trăm bậc thang đá dốc đứng dẫn vào chánh điện Thiksey là một thách thức khác với đôi khớp gối U70. Đi ba bước, Cô Mây dừng lại tựa vào vách tường đỏ gạch rêu phong để lấy hơi. Những vị tiểu sư tăng khoác áo sòng đỏ mận chạy thoăn thoắt qua, gật đầu chào bằng nụ cười bừng sáng sưởi ấm cả buổi sáng lạnh giá. Không gian ngập tràn mùi hương thảo mộc, bơ yak ấm nồng nàn và tiếng tụng kinh trầm bổng vang vọng dưới mái vòm gỗ.',
      'Đặt bàn tay đầy nếp nhăn lên chiếc kinh luân chuyển bằng đồng sáng bóng, Cô Mây nhẹ nhàng xoay tròn theo chiều kim đồng hồ. Mỗi vòng xoay gieo đi một lời cầu nguyện bình an cho gia đình, cho con cháu phương xa, và cho cả chính mình. Đứng trước bức tượng Phật Maitreya cao 15 mét tôn nghiêm sừng sững, Cô cảm giác mọi gánh nặng ưu tư, mọi bụi bặm của một đời dâu bể bỗng chốc hóa thành mây khói buông trôi vào hư không.'
    ],
    quote: 'Ở đây, tôn giáo không còn là lý thuyết. Tôn giáo chính là hơi thở, là những vòng kinh luân xoay đều sưởi ấm cho tâm can giữa gió tuyết lạnh lùng.',
    locationName: 'Tu viện Thiksey - 3,600m',
    imgUrl: 'https://media.fittour.vn/uploads/toan-canh-tu-vien-thiksey-ladakh.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Pangong Tso: Sắc Xanh Kiêu Hãnh Của Sa Mạc Lạnh',
    subtitle: 'Nước mắt đại dương rơi xuống thung lũng đá xám',
    abstract: 'Một mặt hồ dài hơn trăm cây số vắt từ Ấn Sơn sang Tây Tạng, đổi màu liên tục từ ngọc lục bảo sang chàm biếc dưới ánh mặt trời rực rỡ rọi thẳng đầu người.',
    paragraphs: [
      'Vượt qua đèo Chang La hiểm trở, hồ Pangong hiện ra như một ảo ảnh diệu kỳ giữa một dải thung lũng đá xám xịt trơ trụi. Không một loài cây nào có thể sống bên bờ hồ mặn này, nhưng mặt nước phản chiếu bầu trời tinh khiết rực rỡ một sắc xanh lam huyền ảo đậm đà chưa từng thấy trong đời. Cô Mây đứng yên lặng bên mép nước, chạm tay vào làn nước lạnh buốt như băng tuyết tan chảy. Gió hồ mạnh mẽ thổi tung mái tóc pha sương của Cô.',
      'Đêm hôm đó ở Pangong là một thử thách khủng khiếp nhất. Trú chân trong chiếc lều canvas xập xình bên hồ, nhiệt độ rớt sâu xuống âm 5 độ C. Nồng độ không khí loãng giảm xuống mức tối thiểu gây ra những cơn đau đầu nhức nhối. Cô Mây quấn chặt thêm lớp khăn choàng, tĩnh tâm thở từng ngụm sâu đều đặn. Cô không ngủ được. Cô hé cửa lều nhìn lên bầu trời: triệu triệu ngôi sao sáng rực lấp lánh dải Ngân Hà như một tấm lụa satin phủ lên đỉnh Himalaya kỳ vĩ. Đó là món quà tuyệt mỹ bù đắp cho những đau đớn thể xác.'
    ],
    quote: 'Chưa bao giờ tôi thấy mình gần bầu trời đầy sao đến thế. Ở tuổi 68, tôi nằm co ro trong chăn ấm giữa một sa mạc lạnh giá, tự hào biết bao vì tôi đã vượt qua giới hạn để ngắm nhìn Thiên Hà chân thực bằng đôi mắt của chính mình.',
    locationName: 'Hồ Pangong - 4,225m',
    imgUrl: 'https://media.fittour.vn/uploads/suong-mu-tren-ho-pangong-buoi-sang.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/du-khach-fit-tour-chup-anh-cung-lac-da-hai-buouu-nubra.webp',
    caption: 'Tibetan Prayer flags (Phướn nguyện lungta) bay lồng lộng trong gió thung lũng Nubra, chở những lời cầu nguyện bình an đến muôn trùng khói mây.',
    category: 'spiritual',
    location: 'Nubra Valley',
    date: 'Ngày 06/10'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/thung-lung-nubra-ladakh-lac-da-hai-buouu-nghi-ngoi.webp',
    caption: 'Đàn lạc đà Bactrian hoang dã dạo bước khoan thai trên đụn cát Hunder trắng giữa lòng sa mạc lạnh hoang sơ, tương phản tuyệt đối với núi tuyết.',
    category: 'natural',
    location: 'Hunder Sand Dunes',
    date: 'Ngày 07/10'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/nha-su-di-bo-tai-tu-vien-hemis.webp',
    caption: 'Nụ cười hiền hậu, lấm tấm những đốm đồi mồi sương gió của một bà mẹ Ladakhi đang bện len sưởi nắng, làm tôi nhận ra con người ở đâu cũng cần sự ấm áp giản đơn.',
    category: 'people',
    location: 'Chuchot Village',
    date: 'Ngày 04/10'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/tuong-phat-di-lac-khong-lo-tai-diskit-monastery-ladakh.webp',
    caption: 'Hoàng hôn đỏ rực tía ôm trọn những nếp nhà đất sét của tu viện cổ xưa. Nơi thời gian dường như ngưng đọng suốt 8 thế kỷ qua.',
    category: 'spiritual',
    location: 'Likir Monastery',
    date: 'Ngày 05/10'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp',
    caption: 'Bóng tối đổ xuống thung lũng, nhường chỗ cho hàng triệu vì tinh tú hội tụ dệt nên dải Milky Way sáng bừng rực rỡ trên bầu trời Pangong sắt lạnh.',
    category: 'moments',
    location: 'Pangong Camp',
    date: 'Ngày 09/10'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/toan-canh-hop-luu-song-indus-va-zanskar-tai-sangam.webp',
    caption: 'Cung đường rực rỡ lá vàng mùa thu Ladakh men theo thung lũng sông Indus xanh biếc pha lê, rực rỡ như một giấc mơ đầy chất thơ cổ tích.',
    category: 'natural',
    location: 'Indus River Valley',
    date: 'Ngày 03/10'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Cashmere Scarf',
    vietnameseName: 'Khăn Choàng Len',
    description: 'Người bạn cứu cánh lúc nửa đêm bên bờ hồ Pangong hay trên đỉnh đèo lộng gió. Không chỉ giữ ấm tuyệt đối, nó còn là phụ kiện lên hình tuyệt đẹp giữa mây trời Tây Tạng.',
    qty: '01 chiếc',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Red patterned scarf',
    vietnameseName: 'Khăn len họa tiết đỏ',
    description: 'Món quà từ con gái út trước ngày mẹ lên đường. Chiếc khăn vừa ôm chặt cổ sưởi ấm trước gió lùa 5.000m xám xịt, vừa là nét đỏ thắm nổi bật trên mọi tấm hình lưu niệm.',
    qty: '01 chiếc',
    category: 'sentimental',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Ginkgo biloba & Diamox',
    vietnameseName: 'Thuốc chống sốc độ cao',
    description: 'Người đồng hành thầm lặng giúp tăng tuần hoàn não, giảm bớt những cơn đau đầu nhức nhối như búa bổ những ngày đầu tiên thích nghi ở Leh.',
    qty: '02 vỉ',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-4',
    name: 'Leather Notebook & Pen',
    vietnameseName: 'Sổ tay da ghi chép',
    description: 'Nơi Cô Mây nắn nót viết vội từng dòng nhật ký xúc động cuối ngày trước khi tay lạnh cóng đi, lưu lại thứ xúc cảm thô mộc nhất của hành trình.',
    qty: '01 cuốn',
    category: 'essential',
    importance: 'medium'
  },
  {
    id: 'item-5',
    name: 'Dried ginger slice & Honey',
    vietnameseName: 'Gừng sấy dẻo & Mật ong',
    description: 'Vị cay nồng của lát gừng sấy dẻo ngậm dưới đầu lưỡi kết hợp cốc trà nóng mật ong xua tan khí hàn sâu hoắm len lỏi qua từng kẽ xương khớp U70.',
    qty: '01 hộp',
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
    diaryTitle: 'Ngày 1: Thích nghi thầm lặng',
    diaryEntry: 'Bước chân xuống Leh, lồng ngực tựa như có tảng đá đè nén. Cố gắng uống nhiều nước ấm, thiền nhẹ nhàng để nhịp tim hòa quyện nhịp thở cao nguyên đá vôi.',
    soundEffectName: 'Sáo Tây Tạng & Chuông Đồng'
  },
  {
    id: 'loc-2',
    name: 'Thiksey Monastery',
    elevation: '3,600m',
    temperature: '8°C đến 15°C',
    coordinate: { x: 38, y: 76 },
    diaryTitle: 'Ngày 3: Âm vang trong sương sớm',
    diaryEntry: 'Gần trăm bậc thang dựng đứng rút cạn sức lực của đôi khớp gối sáu mươi tám tuổi. Nhưng tiếng chuông vọng ra xoa dịu lòng người lạ lẫm.',
    soundEffectName: 'Tiếng tụng kinh của chư tăng'
  },
  {
    id: 'loc-3',
    name: 'Khardung La Pass',
    elevation: '5,359m',
    temperature: '-8°C đến 2°C',
    coordinate: { x: 45, y: 35 },
    diaryTitle: 'Ngày 5: Trên đỉnh thế giới',
    diaryEntry: 'Đeo kính râm chống lóa tuyết đứng tựa vào rào chắn. Tòan bộ Karakoram hoành tráng sừng sững dưới nắng rọi hanh hao. Không ngờ, ở U70 tôi chạm được tới đây.',
    soundEffectName: 'Tiếng gió rít đỉnh đèo'
  },
  {
    id: 'loc-4',
    name: 'Nubra Valley',
    elevation: '3,000m',
    temperature: '2°C đến 16°C',
    coordinate: { x: 60, y: 22 },
    diaryTitle: 'Ngày 6: Đụn cát bạc Hunder',
    diaryEntry: 'Cưỡi trên lưng chú lạc đà Bactrian hai bướu thong dong băng qua thung lũng sông Shyok lộng gió. Sa mạc cát nằm ngay cạnh ngọn núi tuyết vĩnh cửu.',
    soundEffectName: 'Chuông lạc đà ngân nga'
  },
  {
    id: 'loc-5',
    name: 'Pangong Tso Lake',
    elevation: '4,225m',
    temperature: '-5°C đến 10°C',
    coordinate: { x: 88, y: 55 },
    diaryTitle: 'Ngày 8: Đại dương xanh kiêu hãnh',
    diaryEntry: 'Cơn buốt thấu tim của đêm đông Pangong đã thử thách giới hạn chịu đựng của tôi. Nhưng nhìn lên trời, dải Ngân Hà rực sáng đến mức tôi như sờ tay vào được.',
    soundEffectName: 'Sóng vỗ hồ Pangong & Gió đêm'
  }
];
