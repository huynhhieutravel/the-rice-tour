import type { LocationPoint, CuisineItem, HeritageItem, NomadicAspect, EditorialMemory } from '../types';

export const locationsData: LocationPoint[] = [
  {
    id: 'almaty',
    name: 'Almaty',
    vietnameseName: 'Almaty (Kazakhstan)',
    coords: { x: 25, y: 35 },
    days: 'Day 1 - 3',
    title: 'Thành Phố Trái Cây & Hẻm Núi Đỏ Au',
    description: 'Cố đô tĩnh lặng rợp bóng cây nép mình dưới đỉnh núi Thiên Sơn hùng vĩ. Một đô thị xinh đẹp kết hợp với kỳ quan địa chất thung lũng Charyn—nơi những cột đất sét đỏ rực rỡ hiện lên như một Grand Canyon của châu Á.',
    image: 'https://images.unsplash.com/photo-1548682140-fc88a0f5110e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1589553461298-5c4ab94f7b60?auto=format&fit=crop&q=80&w=800', // Charyn Canyon
      'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=800', // Kok Tobe
      'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800'  // Mountain lake
    ],
    keyHighlight: 'Trekking đỉnh Kok-Tobe & thu trọn vẻ đẹp tráng lệ của thung lũng Charyn dưới ráng chiều hoàng hôn.',
    activities: [
      'Đi cáp treo lên đỉnh Kok-Tobe ngắm nhìn quy hoạch kiến trúc Soviet cổ kính rợp bóng cây.',
      'Khám phá khu nghỉ dưỡng trượt tuyết Shymbulak và các cung đường mòn uốn lượn.',
      'Dạo bước dưới ánh hoàng hôn qua Thung lũng Lâu Đài bên trong thung lũng đá trầm tích 12 triệu năm tuổi Charyn.'
    ],
    altitude: '850m - 1,600m'
  },
  {
    id: 'issyk-kul',
    name: 'Issyk-Kul',
    vietnameseName: 'Hồ Issyk-Kul (Kyrgyzstan)',
    coords: { x: 50, y: 48 },
    days: 'Day 4 - 6',
    title: 'Tấm Gương Xanh Ấm Áp Của Trung Á',
    description: 'Hồ núi lửa lớn thứ hai thế giới, được ôm trọn bởi những đỉnh núi tuyết Thiên Sơn. Nước hồ với độ mặn tự nhiên không bao giờ đóng băng dù giữa mùa đông âm độ. Khu vực này là cái nôi của các môn thể thao trên lưng ngựa và nghệ thuật huấn luyện đại bàng.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200', // Beautiful blue lakeside
    gallery: [
      'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800', // Mountain landscape
      'https://images.unsplash.com/photo-1616036740257-9449ea1f6605?auto=format&fit=crop&q=80&w=800', // Yurt on the shore
      'https://images.unsplash.com/photo-1581090700227-13617d5c35e1?auto=format&fit=crop&q=80&w=800'  // Falconry / Wilderness
    ],
    keyHighlight: 'Chiêm ngưỡng những thợ săn đại bàng Salburun chân chính và lưu trú trong những túp lều nỉ truyền thống ven hồ.',
    activities: [
      'Gặp gỡ các nghệ nhân huấn luyện chim ưng truyền thống và tiếp xúc gần gũi với đại bàng vàng.',
      'Đi thuyền dạo quanh mặt hồ sâu thẳm, tận hưởng làn nước giàu khoáng chất trị liệu.',
      'Thong dong thả bộ qua Hẻm núi Semenovskoe, ngắm nhìn những dòng sông băng chảy xiết và cánh đồng hoa dại.'
    ],
    altitude: '1,607m'
  },
  {
    id: 'son-kul',
    name: 'Son-Kul',
    vietnameseName: 'Hồ Son-Kul (Kyrgyzstan)',
    coords: { x: 68, y: 65 },
    days: 'Day 7 - 9',
    title: 'Thiên Đường Du Mục Nơi Cao Nguyên',
    description: 'Nằm ở độ cao 3.016 mét, hồ trên núi này chỉ có thể tiếp cận vào mùa hè (Tháng 6 - Tháng 9). Bao quanh là những đồng cỏ jailoo bát ngát, nơi người du mục Kyrgyz chăn thả cừu và ngựa bán hoang dã dưới bầu trời trong vắt.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200', // Mountain pasture heights
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800', // Mirror lake
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800', // Starry night
      'https://images.unsplash.com/photo-1532787192644-d3a42aca1b1e?auto=format&fit=crop&q=80&w=800'  // Horse riding
    ],
    keyHighlight: 'Ngủ trong lều nỉ truyền thống dưới bầu trời đêm rực rỡ không ánh đèn phố thị, đếm từng chòm sao.',
    activities: [
      'Cưỡi ngựa vượt những con đường mòn bán hoang dã cùng người du mục Kyrgyz.',
      'Thưởng thức Kumis (sữa ngựa lên men) ấm nóng ngay tại lều của một gia đình du mục hiếu khách.',
      'Lưu lại khoảnh khắc bầu trời hừng đông phản chiếu trên mặt hồ trong vắt như gương.'
    ],
    altitude: '3,016m'
  },
  {
    id: 'naryn',
    name: 'Naryn',
    vietnameseName: 'Naryn & Tash Rabat (Kyrgyzstan)',
    coords: { x: 82, y: 85 },
    days: 'Day 10 - 12',
    title: 'Pháo Đài Vùng Biên Ải & Trạm Dừng Chân',
    description: 'Vùng núi non hiểm trở nằm trên tuyến đường Tơ Lụa cổ đại. Ẩn mình sâu trong hẻm núi Kara-Koyun là Tash Rabat—một pháo đài bằng đá bí ẩn từ thế kỷ 15, từng là trạm dừng chân cho các thương nhân, tu sĩ và nhà thám hiểm.',
    image: 'https://images.unsplash.com/photo-1528154291023-a6525fafd533?auto=format&fit=crop&q=80&w=1200', // Epic historical dome structure / stone arches
    gallery: [
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800', // Traveler hiking mountains
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800', // High-tier scenic landscape
      'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=800'  // Rocky passage / mountain
    ],
    keyHighlight: 'Ngược dòng thời gian khi dạo bước bên trong những mái vòm đá hùng vĩ, vương màu rêu phong của Trạm Tash Rabat.',
    activities: [
      'Khám phá các hành lang ngầm, phòng ngủ mái vòm và đại sảnh bằng đá khổng lồ của Tash Rabat.',
      'Nhâm nhi trà nóng trên thảm da cừu cùng những người lính gác biên giới địa phương.',
      'Trekking qua các hành lang núi đá sát tuyến đèo thương mại Torugart cổ xưa dẫn sang miền Tây Trung Quốc.'
    ],
    altitude: '2,200m - 3,200m'
  }
];

export const cuisinesData: CuisineItem[] = [
  {
    id: 'beshbarmak',
    name: 'Beshbarmak',
    vietnameseName: 'Thịt Đoạn "Năm Ngón Tay"',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=800', // Steaming hot broth noodle dish representation
    description: 'Vị vua tuyệt đối của nền ẩm thực du mục Trung Á. Thịt cừu hoặc bò thái mỏng được luộc trong chảo gang khổng lồ, đặt trên lớp mì lá làm thủ công và rưới nước dùng thảo mộc cùng hành tây thái mỏng.',
    ingredients: ['Thịt cừu luộc chảo gang', 'Mì lá thủ công', 'Hành tây trắng chần', 'Nước dùng cừu nóng', 'Tiêu đen & hẹ rừng'],
    tradition: 'Tên gọi mang ý nghĩa "Năm ngón tay" vì người du mục truyền thống thường dùng tay không để ăn. Món ăn này luôn được dọn ra với nghi thức trang trọng để thiết đãi khách quý, tượng trưng cho lòng hiếu khách và tình cảm gia đình gắn kết.'
  },
  {
    id: 'lepeshka',
    name: 'Central Asian Nan (Lepeshka)',
    vietnameseName: 'Bánh Mì Đất Sét Lepeshka',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800', // Clay-baked flat bread
    description: 'Bánh mì lúa mì nướng vàng ươm, hình tròn, được in các hoa văn hình học bằng khuôn đinh (Cekic) ở giữa. Bánh được nướng bằng cách dán trực tiếp lên thành lò đất sét tandoor nóng rực.',
    ingredients: ['Bột lúa mì', 'Hạt vừng', 'Lớp men sữa', 'Áo bơ', 'Nhiệt từ lò đất sét'],
    tradition: 'Người du mục coi bánh mì như một vật phẩm thiêng liêng. Bánh không bao giờ được cắt bằng dao, mà chỉ được bẻ nhẹ nhàng bằng tay. Úp mặt bánh Lepeshka xuống bàn bị coi là hành động cực kỳ bất kính với gia chủ.'
  },
  {
    id: 'lagman',
    name: 'Lagman Noodle',
    vietnameseName: 'Mì Kéo Tay Lagman',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800', // Dynamic colorful hand-pulled noodles
    description: 'Một món ăn đậm đà với những sợi mì lúa mì dai và dài, được kéo tay thủ công bằng các vòng vung tay điệu nghệ. Mì được xào trong dầu thơm miền núi cùng những khối thịt cừu non, ớt chuông, cà chua, ngồng tỏi và bột thì là cay nồng.',
    ingredients: ['Sợi mì kéo tay siêu dai', 'Thịt cừu xào khối', 'Ớt chuông ngọt', 'Ngồng tỏi', 'Gia vị thì là Trung Á'],
    tradition: 'Bắt nguồn từ các đoàn lữ hành thời cổ đại, Lagman đại diện cho sự giao thoa ẩm thực tuyệt đẹp giữa miền Tây Trung Quốc, truyền thống Uyghur và văn hóa ẩm thực du mục Uzbek-Kyrgyz.'
  },
  {
    id: 'kumis',
    name: 'Kumis / Shubat',
    vietnameseName: 'Sữa Ngựa Lên Men Kumis',
    type: 'beverage',
    image: 'https://images.unsplash.com/photo-1571175487738-f1558bf0ef12?auto=format&fit=crop&q=80&w=800', // Traditional beverage look
    description: 'Phương thuốc trường sinh của sức mạnh cổ đại. Sữa ngựa tươi được lên men bên trong những chiếc thùng da ngựa, tạo ra một loại thức uống có vị chua thanh mát, hơi sủi bọt nhẹ với nồng độ cồn tự nhiên thấp.',
    ingredients: ['Sữa ngựa thuần khiết', 'Men vi sinh tự nhiên từ da ngựa', 'Hương khói gỗ sồi'],
    tradition: 'Kumis đã được sử dụng từ hàng ngàn năm trước. Nó tượng trưng cho sức khỏe và sự trường thọ. Được ca ngợi rộng rãi nhờ đặc tính hỗ trợ tiêu hóa cực tốt, Kumis là thức uống không thể thiếu trong các dịp lễ hội lớn.'
  }
];

export const heritagesData: HeritageItem[] = [
  {
    id: 'tash-rabat',
    title: 'Tash Rabat Caravanserai',
    vietnameseTitle: 'Trạm Cổ Thạch Tash Rabat',
    location: 'Naryn Gorge, Kyrgyzstan',
    period: '15th Century (Silk Road Zenith)',
    description: 'Một trạm dừng chân bằng đá cổ đại còn nguyên vẹn, ẩn mình sâu trong một hẻm núi hẻo lánh. Được xây dựng bởi các tín đồ Cơ đốc giáo Nestorian hoặc những kiến trúc sư Hồi giáo sơ khai, nơi đây từng đóng vai trò như một pháo đài kiên cố, một tu viện và tiền đồn giao thương của các đoàn lạc đà.',
    architecture: 'Nổi bật với một mái vòm trung tâm khổng lồ được bao bọc bởi 31 căn phòng nhỏ. Toàn bộ công trình được xây dựng bằng những phiến đá vôi bản địa xếp chồng lên nhau mà không hề sử dụng vữa.',
    image: 'https://images.unsplash.com/photo-1528154291023-a6525fafd533?auto=format&fit=crop&q=80&w=800' // Gorgeous Central Asian grand structural vault
  },
  {
    id: 'zenkov-cathedral',
    title: 'Zenkov Cathedral',
    vietnameseTitle: 'Nhà Thờ Gỗ Thiên Chúa Giáo Zenkov',
    location: 'Almaty Parks, Kazakhstan',
    period: 'Commissioned 1904',
    description: 'Một trong những công trình hoàn toàn bằng gỗ cao nhất thế giới. Được sơn những tông màu pastel vui tươi bắt mắt và được bao bọc bởi rặng thông xanh mướt, Nhà thờ này đã đứng vững qua trận động đất kinh hoàng năm 1911 ở Almaty (9.0 độ Richter).',
    architecture: 'Được xây dựng hoàn toàn từ các khối gỗ linh sam Siberia, liên kết với nhau bằng các khớp nối và chốt gỗ bên trong, tuyệt đối không sử dụng bất kỳ một chiếc đinh sắt nào.',
    image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&q=80&w=800' // Beautiful wooden architecture facade
  },
  {
    id: 'cholpon-ata-stones',
    title: 'Cholpon-Ata Petroglyphs',
    vietnameseTitle: 'Bảo Tàng Đá Cổ Cholpon-Ata',
    location: 'Issyk-Kul Basin, Kyrgyzstan',
    period: '800 BC to 1st Century AD',
    description: 'Bảo tàng ngoài trời rộng 42 ha khổng lồ với hàng trăm tảng đá do sông băng bồi đắp. Các nghệ nhân cổ đại người Saka và Usun đã sử dụng đục đá để khắc lên những bản đồ săn bắn tuyệt mỹ, tư thế động vật đang phi nước đại và các biểu tượng thiên thể vũ trụ.',
    architecture: 'Những khối đá granite tự nhiên khắc họa hình ảnh dê núi sừng dài, báo tuyết và các đoàn lữ hành, tất cả đều hướng về phía bình minh để phản chiếu tinh thần vũ trụ.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800' // Rocks and mountains in Central Asia
  }
];

export const nomadsData: NomadicAspect[] = [
  {
    id: 'yurt',
    title: 'The Sacred Yurt (Boz-Ui)',
    vietnameseTitle: 'Kỹ Thuật Dựng Lều Yurt Linh Thiêng',
    description: 'Một kiệt tác của kiến trúc vòm tròn, được chế tác bằng gỗ liễu (kerege) và những tấm nỉ len lông cừu chống nước dày dặn. Đỉnh mái vòm là một vòng gỗ (shanyrak / tunduk) đóng vai trò như ống khói và cánh cửa sổ giao tiếp với vũ trụ.',
    image: 'https://images.unsplash.com/photo-1616036740257-9449ea1f6605?auto=format&fit=crop&q=80&w=800',
    interactiveAction: 'Dựng Bộ Khung Gỗ',
    highlightText: 'Vòng gỗ trên đỉnh lều (tunduk) tượng trưng cho gia huy của dòng họ và thiêng liêng đến mức nó được đặt ở vị trí trung tâm trên Quốc kỳ của Kyrgyzstan.'
  },
  {
    id: 'eagle',
    title: 'Salburun Eagle Falconry',
    vietnameseTitle: 'Nghệ Thuật Huấn Luyện Đại Bàng',
    description: 'Nghệ thuật thượng thừa được truyền qua nhiều thế hệ về việc huấn luyện đại bàng cái (Berkut) bay từ các vách đá cao, lao xuống khóa mục tiêu với tốc độ 150km/h. Các thợ săn Berkutchi thường bắt đại bàng khi chúng còn nhỏ và nuôi dưỡng chúng như con gái ruột suốt 20 năm.',
    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=800', // Rugged raptor cliffs / bird background representation
    interactiveAction: 'Phóng Đại Bàng Vàng',
    highlightText: 'Những người thợ săn hát các bài hát ru của tổ tiên để dỗ dành chim ưng và đội cho chúng những chiếc mũ trùm đầu bằng da (tomaga) trang trí công phu nhằm giúp đại bàng giữ bình tĩnh.'
  },
  {
    id: 'kok-boru',
    title: 'Kok-Boru Riding Mastery',
    vietnameseTitle: 'Môn Thể Thao Kỵ Sĩ Kok-Boru',
    description: 'Môn polo trên lưng ngựa cổ đại của những nhà chinh phục Trung Á. Các đội kỵ sĩ điêu luyện sẽ cạnh tranh nhau để nhấc một xác cừu nặng trịch, né tránh những con chiến mã đang lao đến và ném xác cừu vào một khung thành vòng tròn đất nện.',
    image: 'https://images.unsplash.com/photo-1532787192644-d3a42aca1b1e?auto=format&fit=crop&q=80&w=800', // Horse riding action
    interactiveAction: 'Cú Nhảy Kỵ Sĩ',
    highlightText: 'Kok-boru là bài kiểm tra sự tin tưởng tuyệt đối giữa kỵ sĩ và ngựa chiến—những chú ngựa được lai tạo và rèn luyện suốt nhiều tháng trời để có thể chịu đựng được những cú va chạm trực diện nảy lửa.'
  }
];

export const editorialsData: EditorialMemory[] = [
  {
    id: 'charyn-sunset',
    title: 'Charyn Canyon Editorial',
    vietnameseTitle: 'Chiều Tà Thung Lũng Charyn',
    location: 'Charyn Castle Valley, Almaty',
    clothingTip: 'Những bộ váy lụa tông màu đất thướt tha hoặc trang phục linen màu kem nhẹ nhàng sẽ tạo độ tương phản vô cùng ấn tượng với những khối đá trầm tích sa thạch đỏ rực.',
    poseTip: 'Đứng trên vách đá sa thạch cao chót vót, để chiếc khăn choàng tung bay trong gió tạo nên những chuyển động mềm mại, như một khung hình tạp chí thực thụ.',
    image: 'https://images.unsplash.com/photo-1589553461298-5c4ab94f7b60?auto=format&fit=crop&q=80&w=800',
    quote: '"Khi ánh hoàng hôn nhuộm đỏ cả vách đá Charyn, mỗi hơi thở đón cát vàng như hóa mình vào giấc mộng Con Đường Tơ Lụa cổ xưa."'
  },
  {
    id: 'yurt-shoreline',
    title: 'Issyk-Kul Yurt Canvas',
    vietnameseTitle: 'Duyên Hồ Issyk-Kul Du Mục Chic',
    location: 'Southern Shore Yurt Camps, Issyk-Kul',
    clothingTip: 'Áo choàng poncho bằng nỉ màu be, đồ len dệt kim thủ công, kết hợp cùng vòng tay bạc dân tộc Trung Á hoặc khuyên tai họa tiết boho phóng khoáng.',
    poseTip: 'Ngồi tựa bên hiên của một túp lều yurt hoa văn truyền thống, ánh mắt dịu dàng hướng về phía những rặng núi tuyết phủ trắng đang soi bóng xuống mặt hồ xanh biếc.',
    image: 'https://images.unsplash.com/photo-1616036740257-9449ea1f6605?auto=format&fit=crop&q=80&w=800',
    quote: '"Chiếc lều nỉ lấp lánh cạnh mặt hồ lạnh giá, nơi gió thảo nguyên thì thầm qua những nhành oải hương dại."'
  },
  {
    id: 'milkyway-sonkul',
    title: 'Milky Way Stargazing Portal',
    vietnameseTitle: 'Cổng Vũ Trụ Giữa Đêm Son-Kul',
    location: 'High pastors, Lake Son-Kul',
    clothingTip: 'Áo khoác da cừu dày dặn, áo gile thêu họa tiết truyền thống và những đôi bốt da cao cổ dành riêng cho dân xê dịch.',
    poseTip: 'Đứng ngay giữa dải Ngân Hà lấp lánh, hơi ngẩng đầu hướng lên bầu trời đêm, tay cầm một chiếc đèn bão cắm trại tỏa ánh sáng vàng ấm áp.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    quote: '"Ở độ cao 3,000 mét, dải Ngân Hà rực sáng sà xuống mặt hồ xanh thẫm, tựa vai vào mái lều tròn Boz-Ui ấm cúng."'
  }
];
