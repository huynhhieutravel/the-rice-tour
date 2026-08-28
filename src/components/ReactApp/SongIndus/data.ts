import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';
export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Nguồn gốc tên gọi Ấn Độ từ sông Indus',
    subtitle: 'Sindhu, Hindu và sự hình thành India',
    abstract: 'Ít người biết rằng tên gọi "India" có nguồn gốc từ chính dòng sông Indus này.',
    paragraphs: [
      'Tên gọi <strong>India</strong> (Ấn Độ) có một lịch sử thú vị bắt nguồn trực tiếp từ dòng sông này. Trong tiếng Phạn (Sanskrit), sông Indus được gọi là <strong>Sindhu</strong>. Khi người Ba Tư cổ đại tiến vào tiểu lục địa, họ phát âm "Sindhu" thành "Hindu".',
      'Sau đó, người Hy Lạp tiếp nhận từ này và gọi dòng sông là "Indus", từ đó toàn bộ vùng đất phía đông dòng sông được gọi là "India". Sự tiến hóa từ <strong>Sindhu → Hindu → Indus → India</strong> là một fact lịch sử mạnh mẽ, chứng minh rằng sông Indus không chỉ là một đặc điểm địa lý mà còn là cội nguồn tên gọi của một quốc gia rộng lớn.'
    ],
    quote: 'Sự tiến hóa từ Sindhu → Hindu → Indus → India chứng minh sông Indus chính là cội nguồn tên gọi của quốc gia này.',
    locationName: 'Nguồn gốc lịch sử',
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Dòng sông dài hơn 3.000 km',
    subtitle: 'Hành trình xuyên quốc gia vĩ đại',
    abstract: 'Từ cao nguyên Tây Tạng, sông Indus chảy qua Ladakh trước khi tiếp tục hành trình vạn dặm.',
    paragraphs: [
      'Bắt nguồn từ vùng phụ cận Hồ Mansarovar trên cao nguyên Tây Tạng thần thánh, sông Indus bắt đầu một trong những hành trình ngoạn mục nhất hành tinh.',
      'Dòng nước lạnh buốt cắt ngang qua những dãy núi sừng sững của dãy Himalaya và Karakoram, chảy xuyên qua <a href="/cho-leh-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">thung lũng Leh</a> của Ladakh trước khi đổ về Pakistan và cuối cùng hòa vào biển Ả Rập với tổng chiều dài hơn 3.180 km.'
    ],
    quote: 'Từ cao nguyên Tây Tạng, sông Indus chảy qua Ladakh trước khi tiếp tục hành trình hơn 3.000 km ra biển Ả Rập.',
    locationName: 'Hành trình vạn dặm',
    imgUrl: 'https://media.fittour.vn/uploads/2022/12/du-khach-viet-chup-anh-ben-con-song-an-trai-qua-pakistan.webp',
    imgCaption: 'Dòng Indus nhìn từ trên cao'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Vì sao sông Indus quan trọng với Ladakh?',
    subtitle: 'Huyết mạch của vùng sa mạc lạnh',
    abstract: 'Indus là huyết mạch của một vùng sa mạc lạnh gần như không có mưa. Nếu không có Indus, sẽ không có nền văn minh Ladakh.',
    paragraphs: [
      'Nền văn minh của Ladakh đã được phát triển mạnh mẽ xung quanh bờ sông Indus. Về mặt lịch sử, nó là lý do chính cho sự tồn tại của các cộng đồng dân cư phụ thuộc vào nguồn nước.',
      '<strong>Không có Indus thì không có <a href="/cho-leh-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">Leh</a>, không có các làng cổ, không có Alchi, Shey hay Hemis.</strong> Sông Indus là huyết mạch của một vùng sa mạc lạnh gần như không có mưa. Nước sông Indus ở Ladakh được sử dụng để tưới tiêu trong một thời gian rất dài. Đất đai phù sa dọc hai bên bờ sông là nguồn sống cho nông nghiệp vùng cao.',
      'Sông Indus là một nguồn cung cấp nước ngọt lớn ở Ladakh hiện tại và cả trong lịch sử. Hiện tại, khoảng 144 MW điện đang được sản xuất chung cho một số dự án thủy điện nhỏ ở Ladakh. Nhiều dự án thủy điện khác đang được tiến hành trên sông Indus và các phụ lưu của nó.'
    ],
    quote: 'Không có Indus thì không có Leh, không có các làng cổ, không có Alchi, Shey hay Hemis.',
    locationName: 'Vùng Ladakh'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Khám phá vẻ đẹp sông Indus qua thung lũng Leh',
    subtitle: 'Hành trình ngoạn mục ở trung tâm Himalaya',
    abstract: 'Từ Leh đến Alchi, dòng Indus uốn lượn qua những cảnh quan đẹp nhất của Ladakh.',
    paragraphs: [
      'Từ Leh đến Alchi, dòng Indus uốn lượn qua những dãy núi đá khô cằn, các cánh đồng lúa mạch xanh mướt và những ngôi làng cổ hàng trăm năm tuổi. Đây là một trong những <a href="/du-lich-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">hành trình đường bộ đẹp nhất Ladakh</a>.',
      'Đi qua một vùng hoang dã rộng lớn ở ngay trung tâm của <a href="/country/himalaya/" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">dãy Himalaya</a>, nơi đây mang một vẻ đẹp tráng lệ với dòng nước trong xanh lấp lánh, phản chiếu bầu trời xanh ngắt của cao nguyên.',
      'Một trong những tuyến đường chạy xe máy đẹp nhất là chạy dọc theo sông Indus qua những ngọn đồi giữa Likkir và Temisgong, trong đó có 3 tu viện chính – <a href="/tu-vien-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">Likir</a>, Rizong và Tamisgang.'
    ],
    quote: 'Từ Leh đến Alchi, dòng Indus uốn lượn qua những dãy núi đá khô cằn, các cánh đồng lúa mạch xanh mướt và những ngôi làng cổ hàng trăm năm tuổi.',
    locationName: 'Thung Lũng Leh',
    imgUrl: 'https://media.fittour.vn/uploads/cung-duong-ven-song-tai-sangam-view-point-ladakh.webp',
    imgCaption: 'Tu viện Likir Ladakh nhìn ra thung lũng'
  },
  {
    id: 'chapter-5',
    number: '05',
    title: 'Điểm ngắm sông Indus đẹp nhất ở Ladakh',
    subtitle: 'Nơi hai dòng sông hùng vĩ gặp nhau',
    abstract: 'Từ Sangam Point cho đến Hall of Fame, thung lũng Indus có vô vàn các điểm ngắm cảnh ngoạn mục.',
    paragraphs: [
      'Một trong những địa điểm thu hút du khách nhất dọc theo dòng sông là điểm giao thoa <strong>Sangam Point</strong> gần làng Nimmu, cách Leh khoảng 35km.',
      'Vào mùa hè, màu nước của sông Zanskar hùng vĩ và sông Indus thường khác biệt rõ rệt, tạo nên một trong những điểm hợp lưu nổi tiếng nhất Himalaya. Đây chính là lý do khiến bất kỳ du khách nào cũng muốn dừng chân tại Sangam để chiêm ngưỡng.',
      'Ngoài ra, còn rất nhiều điểm ngắm sông tuyệt đẹp dọc hành trình như <strong>Hall of Fame (Indus View)</strong>, những mỏm đá cao ở <strong>Alchi</strong>, di tích <strong>Basgo</strong> hay khu vực <strong>Magnetic Hill</strong>. Tất cả đều liên quan trực tiếp tới thung lũng Indus kỳ vĩ.'
    ],
    quote: 'Vào mùa hè, màu nước của Zanskar và Indus thường khác biệt rõ rệt, tạo nên một trong những điểm hợp lưu nổi tiếng nhất Himalaya.',
    locationName: 'Làng Nimmu & Các Điểm Ngắm Cảnh',
    imgUrl: 'https://media.fittour.vn/uploads/toan-canh-hop-luu-song-indus-va-zanskar-tai-sangam.webp',
    imgCaption: 'Điểm giao thoa Sangam'
  },
  {
    id: 'chapter-6',
    number: '06',
    title: 'Sông Indus và các Tu viện Ladakh',
    subtitle: 'Cội nguồn tâm linh dọc đôi bờ',
    abstract: 'Người đọc sẽ hiểu vì sao nền văn minh Phật giáo Tây Tạng của Ladakh lại phát triển rực rỡ dọc theo con sông này.',
    paragraphs: [
      'Sông Indus không chỉ nuôi dưỡng thể chất mà còn là cái nôi của đời sống tâm linh. Hầu hết các tu viện lớn và quan trọng nhất của Ladakh đều được xây dựng dọc theo thung lũng Indus.',
      'Nổi bật nhất là các <a href="/tu-vien-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">tu viện Ladakh</a> nổi tiếng như <strong>Thiksey</strong> với kiến trúc tựa cung điện Potala, thiền viện <strong>Hemis</strong> linh thiêng, cố đô <strong>Shey</strong> hay <strong>Likir</strong> với bức tượng Phật Di Lặc khổng lồ.',
      'Đặc biệt, khác với phần lớn tu viện Ladakh nằm trên đỉnh đồi, <strong>tu viện Alchi</strong> được xây dựng ngay bên thung lũng Indus và nổi tiếng với các bức bích họa có niên đại từ thế kỷ XI.',
      'Những dòng nước mát lạnh từ Indus đã tạo điều kiện cho các nhà sư và người dân xây dựng nên một nền văn minh rực rỡ ngay giữa lòng sa mạc khắc nghiệt.'
    ],
    quote: 'Khác với phần lớn tu viện, Alchi được xây dựng ngay bên thung lũng Indus và nổi tiếng với các bức bích họa từ thế kỷ XI.',
    locationName: 'Dọc Thung Lũng Indus',
    imgUrl: 'https://media.fittour.vn/uploads/2022/04/tu-vien-likir.webp',
    imgCaption: 'Các tu viện nương mình dọc theo bờ sông'
  },
  {
    id: 'chapter-7',
    number: '07',
    title: 'Hệ sinh thái sông Indus',
    subtitle: 'Sức sống mãnh liệt giữa sa mạc lạnh',
    abstract: 'Indus không chỉ là lịch sử. Nó còn nuôi dưỡng một hệ sinh thái vùng sa mạc lạnh vô cùng phong phú.',
    paragraphs: [
      'Indus không chỉ là một thực thể lịch sử. Nó còn là nguồn nước chính, nuôi dưỡng hệ sinh thái đặc biệt của <a href="/du-lich-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">vùng sa mạc lạnh Ladakh</a>.',
      'Dọc theo các vùng đất ngập nước ven sông, bạn có thể dễ dàng bắt gặp những loài động vật hoang dã quý hiếm thích nghi tốt với độ cao như lừa hoang Tây Tạng <strong>Kiang</strong>, cừu xanh <strong>Blue Sheep (Bharal)</strong>, cừu núi <strong>Argali</strong> và đặc biệt là biểu tượng bảo tồn của vùng Changthang: <strong>Black-necked Crane (Sếu cổ đen)</strong>.',
      'Vào mùa di cư, đôi bờ Indus trở thành điểm dừng chân của hàng ngàn loài chim, tạo nên một bức tranh thiên nhiên sống động và tràn đầy sức sống.'
    ],
    quote: 'Từ cừu xanh Bharal đến Sếu cổ đen biểu tượng, đôi bờ Indus quy tụ một hệ sinh thái sống động đáng kinh ngạc.',
    locationName: 'Khu Bảo Tồn Ven Sông',
  },
  {
    id: 'chapter-8',
    number: '08',
    title: 'Sindhu Darshan Festival',
    subtitle: 'Lễ hội tôn vinh dòng sông thiêng',
    abstract: 'Mỗi năm, người dân Ladakh và du khách từ khắp Ấn Độ tham dự Sindhu Darshan Festival để tôn vinh dòng sông Indus.',
    paragraphs: [
      'Sự tôn kính của người dân đối với dòng sông được thể hiện rõ nhất qua lễ hội <strong>Sindhu Darshan Festival</strong>. Đây là một sự kiện đầy sắc màu, thường diễn ra vào tháng 6 hằng năm tại Leh.',
      'Mỗi năm, người dân Ladakh và du khách từ khắp Ấn Độ đổ về đây để tham dự <a href="/le-hoi-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">Sindhu Darshan Festival</a>, thả hoa và dâng lễ vật để tôn vinh dòng sông Indus, cầu mong sự hòa bình và thịnh vượng cho toàn khu vực.'
    ],
    quote: 'Sindhu Darshan Festival thường diễn ra vào tháng 6 hằng năm tại Leh để tôn vinh dòng sông Indus.',
    locationName: 'Thị Trấn Leh',
  },
  {
    id: 'chapter-9',
    number: '09',
    title: 'Trải Nghiệm Sông Indus Tại Ladakh',
    subtitle: 'River Rafting, Thời điểm & Nơi lưu trú',
    abstract: 'Từ trải nghiệm River Rafting đầy hứng khởi đến những lưu ý khi chọn thời điểm ghé thăm.',
    paragraphs: [
      '<a href="/trai-nghiem-du-lich-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">Trải nghiệm tuyệt vời nhất</a> trên sông Indus và các phụ lưu của nó chính là bộ môn <strong>River Rafting (chèo thuyền vượt thác)</strong>. Các chuyến đi bè thường bắt đầu từ Phey đến Nimmu (dễ dàng, phù hợp cho người mới) hoặc từ Chilling đến Nimmu (thử thách hơn).',
      'Thời gian lý tưởng nhất để chiêm ngưỡng trọn vẹn vẻ đẹp của sông Indus là vào những tháng mùa hè từ <strong>tháng 5 đến tháng 9</strong>. Lúc này, thời tiết ấm áp, nước sông dồi dào. Vào mùa đông, đây lại là thời điểm diễn ra tuyến đường đi bộ trên sông băng cực kỳ nổi tiếng mang tên Chadar Trek.',
      'Dọc theo thung lũng Indus có rất nhiều lựa chọn lưu trú đa dạng, từ các khách sạn tiện nghi ở <a href="/cho-leh-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-2">trung tâm thị trấn Leh</a> cho đến các homestay bình dị ở các làng bản như Alchi hay Uleytokpo. Đường xá (đặc biệt là trục quốc lộ Leh - Kargil) được quân đội bảo trì rất tốt.'
    ],
    quote: 'Ngồi trên thuyền cao su vượt qua những con sóng bạc đầu giữa hẻm núi sâu thẳm sẽ là một trải nghiệm không thể nào quên.',
    locationName: 'Phey đến Nimmu',
    imgUrl: 'https://media.fittour.vn/uploads/du-khach-chup-anh-toan-canh-hop-luu-song-indus-va-zanskar.webp',
    imgCaption: 'Du lịch khám phá sông Indus'
  }
];
export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'bp-1',
    name: 'Áo khoác gió & Áo ấm',
    vietnameseName: 'Áo Khoác Chống Gió',
    description: 'Bắt buộc. Dù đi vào mùa hè, gió thổi dọc theo hẻm núi thung lũng Indus vẫn rất lạnh.',
    qty: '1-2 cái',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'bp-2',
    name: 'Giày Trekking/Thể Thao',
    vietnameseName: 'Giày Thể Thao',
    description: 'Đế bám tốt để leo lên các điểm ngắm cảnh (viewpoint) dọc sông hoặc đi bộ xuống bờ sông.',
    qty: '1 đôi',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'bp-3',
    name: 'Kính râm chống tia UV',
    vietnameseName: 'Kính Râm UV',
    description: 'Bảo vệ mắt khỏi ánh nắng gắt trên độ cao trên 3000m và tia phản chiếu từ mặt nước.',
    qty: '1 cái',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'bp-4',
    name: 'Quần áo khô dự phòng',
    vietnameseName: 'Đồ Dự Phòng',
    description: 'Nếu có tham gia River Rafting, bạn cần một bộ đồ khô để thay sau khi kết thúc chuyến đi.',
    qty: '1 bộ',
    category: 'sentimental',
    importance: 'medium'
  },
  {
    id: 'bp-5',
    name: 'Máy ảnh / GoPro',
    vietnameseName: 'Máy Ảnh',
    description: 'Để ghi lại những khoảnh khắc tuyệt vời tại điểm giao thoa Sangam hay cảnh hoàng hôn rực rỡ.',
    qty: '1 cái',
    category: 'sentimental',
    importance: 'high'
  }
];
export const FAQ_QUESTIONS = [
  {
    question: "Sông Indus bắt nguồn từ đâu?",
    answer: "Sông Indus bắt nguồn từ cao nguyên Tây Tạng quanh vùng lân cận hồ Mansarovar. Nó hình thành từ hợp lưu của sông Sengge Zangbo và Gar Tsangpo trước khi chảy qua thung lũng Leh (Ladakh)."
  },
  {
    question: "Sông Indus dài bao nhiêu?",
    answer: "Sông Indus là một trong những con sông dài nhất châu Á với tổng chiều dài khoảng 3.180 km (3.200 km). Nó chảy qua Tây Tạng, Ấn Độ và Pakistan trước khi đổ ra biển Ả Rập."
  },
  {
    question: "Vì sao sông Indus được gọi là linh hồn của Ladakh?",
    answer: "Indus là huyết mạch cung cấp nguồn nước ngọt quý giá cho một vùng sa mạc lạnh gần như không có mưa. Nhờ có sông Indus mà nông nghiệp có thể phát triển, và các trung tâm văn hóa, làng mạc, tu viện (như Leh, Alchi, Hemis) mới có thể tồn tại và rực rỡ như ngày nay."
  },
  {
    question: "Điểm ngắm sông Indus đẹp nhất ở Ladakh là ở đâu?",
    answer: "Điểm ngắm nổi tiếng nhất là Sangam Point (nơi hợp lưu của sông Indus và sông Zanskar). Ngoài ra, bạn có thể ngắm khung cảnh ngoạn mục của dòng sông tại Hall of Fame (Indus View), thung lũng Alchi, Basgo hoặc từ khu vực Magnetic Hill."
  },
  {
    question: "Tên gọi India có liên quan đến sông Indus không?",
    answer: "Có, tên gọi 'India' có nguồn gốc trực tiếp từ sông Indus. Trong tiếng Phạn, sông được gọi là 'Sindhu'. Qua thời gian, người Ba Tư phát âm thành 'Hindu', và người Hy Lạp gọi là 'Indus'. Từ đó, vùng đất rộng lớn nằm dọc và phía đông dòng sông được thế giới biết đến với tên gọi 'India'."
  }
];
export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'sangam',
    name: 'Điểm Sangam',
    elevation: '3.100m',
    temperature: '15°C',
    coordinate: { x: 45, y: 35 },
    diaryTitle: 'Hợp lưu tuyệt đẹp',
    diaryEntry: 'Nơi hai dòng sông hòa quyện, một bên đục ngầu mạnh mẽ, một bên xanh ngọc tĩnh lặng.',
    soundEffectName: 'river_flow'
  },
  {
    id: 'chilling',
    name: 'Chilling',
    elevation: '3.200m',
    temperature: '12°C',
    coordinate: { x: 35, y: 50 },
    diaryTitle: 'Bắt đầu Rafting',
    diaryEntry: 'Trải nghiệm vượt thác bắt đầu từ ngôi làng nhỏ yên bình dọc dòng Zanskar.',
    soundEffectName: 'water_splash'
  },
  {
    id: 'likir',
    name: 'Tu viện Likir',
    elevation: '3.500m',
    temperature: '10°C',
    coordinate: { x: 55, y: 20 },
    diaryTitle: 'Bóng hình tâm linh',
    diaryEntry: 'Tu viện cổ kính nương mình bên thung lũng, nơi tiếng tụng kinh hòa cùng tiếng gió rít.',
    soundEffectName: 'monk_chanting'
  }
];
export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/2024/06/canh-quan-hoang-so-ho-pangong.webp?v=2',
    caption: 'Cảnh quan hoang sơ và hùng vĩ của vùng hồ trên cao nguyên Changthang.',
    category: 'natural',
    location: 'Hồ Pangong',
    date: 'Bình minh'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/cung-duong-ven-song-tai-sangam-view-point-ladakh.webp?v=2',
    caption: 'Cung đường đèo uốn lượn ven sông băng kỳ vĩ tại ngã ba sông Indus và Zanskar.',
    category: 'natural',
    location: 'Sangam View Point',
    date: 'Trưa muộn'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/du-khach-fit-tour-chup-anh-cung-lac-da-hai-buouu-nubra.webp?v=2',
    caption: 'Du khách FIT Tour cùng những chú lạc đà hai bướu tại đụn cát Hunder.',
    category: 'people',
    location: 'Thung lũng Nubra',
    date: 'Buổi chiều'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/toan-canh-tu-vien-thiksey-ladakh.webp?v=2',
    caption: 'Tu viện Thiksey sừng sững trên đỉnh đồi, được ví như Potala thu nhỏ của Ladakh.',
    category: 'spiritual',
    location: 'Tu viện Thiksey',
    date: 'Sáng sớm'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp?v=2',
    caption: 'Biển mây cuộn tràn dưới chân dãy Himalaya hùng vĩ.',
    category: 'moments',
    location: 'Đèo cao Ladakh',
    date: 'Bình minh'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/toan-canh-hop-luu-song-indus-va-zanskar-tai-sangam.webp?v=2',
    caption: 'Hợp lưu hai dòng sông Indus và Zanskar tạo nên bức tranh hai gam màu ấn tượng.',
    category: 'natural',
    location: 'Sangam Confluence',
    date: 'Buổi trưa'
  },
  {
    id: 'p7',
    url: 'https://media.fittour.vn/uploads/thung-lung-nubra-ladakh-lac-da-hai-buouu-nghi-ngoi.webp?v=2',
    caption: 'Đàn lạc đà Bactrian thong thả nghỉ ngơi giữa sa mạc cát trắng Hunder.',
    category: 'natural',
    location: 'Hunder Sand Dunes',
    date: 'Chiều tà'
  },
  {
    id: 'p8',
    url: 'https://media.fittour.vn/uploads/nha-su-di-bo-tai-tu-vien-hemis.webp?v=2',
    caption: 'Nhà sư thiền hành tĩnh lặng tại tu viện Hemis cổ kính.',
    category: 'spiritual',
    location: 'Tu viện Hemis',
    date: 'Sáng sớm'
  },
  {
    id: 'p9',
    url: 'https://media.fittour.vn/uploads/tuong-phat-di-lac-khong-lo-tai-diskit-monastery-ladakh.webp?v=2',
    caption: 'Tượng Phật Di Lặc khổng lồ tại tu viện Diskit nhìn xuống thung lũng Nubra.',
    category: 'spiritual',
    location: 'Tu viện Diskit',
    date: 'Hoàng hôn'
  }
];