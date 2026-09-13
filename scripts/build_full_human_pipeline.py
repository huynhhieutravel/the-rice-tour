#!/usr/bin/env python3
"""
scripts/build_full_human_pipeline.py

Comprehensive De-AI-ification & Human Writing Polish across all 18 Ben Thanh articles:
- Vietnamese pipeline directories: campaign-ben-thanh/vietnamese, 03-qa-passed, 02-vietnamese-guu
- English pipeline directories: campaign-ben-thanh/english, 04-english
- batch_convert.cjs & batch_convert.js (metadata dictionary)
- Recompile src/data/demo-articles.ts
"""

import os
import re
import subprocess

VN_DIRS = [
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/campaign-ben-thanh/vietnamese",
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/03-qa-passed",
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/02-vietnamese-guu"
]

EN_DIRS = [
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/campaign-ben-thanh/english",
    "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/04-english"
]

VN_REPLACEMENTS = {
    "001": [
        ('subtitle: "Hành trình tản bộ khám phá trầm tích di sản trăm năm, nghệ thuật Đông Dương và nhịp đập đô thị tương lai trong bán kính 1km"', 'subtitle: "Hành trình tản bộ khám phá di sản trăm năm, nghệ thuật Đông Dương và không gian ngầm hiện đại trong bán kính 1km"'),
        ('> *“Nếu Sài Gòn là một cuốn cổ thư bằng đá và gạch nung được viết qua ba thế kỷ, thì Chợ Bến Thành và những đại lộ tỏa bóng quanh nó chính là trang mở đầu rực rỡ nhất. Nơi đây, tiếng chuông đồng hồ trăm năm hòa nhịp cùng tiếng còi tàu metro ngầm hiện đại, nơi những vòm dinh thự Đông Dương trầm mặc soi bóng xuống những dòng người bất tận của một đô thị không bao giờ ngủ.”*', '> *“Sáng sớm ở giao lộ Quách Thị Trang, khi những rặng cây cổ thụ trên đường Lê Lợi còn đẫm sương, tháp đồng hồ Bến Thành đã bắt đầu điểm nhịp quen thuộc. Chỉ cần tản bộ trong bán kính một cây số quanh ngôi chợ trăm tuổi này, bạn sẽ bước qua ba thời kỳ của thành phố: từ những dãy phố buôn bán thời thuộc địa, các dinh thự Art Deco đầu thế kỷ 20, cho đến không gian ngầm hiện đại của tuyến metro vừa đi vào hoạt động.”*'),
        ('Khu vực xung quanh Chợ Bến Thành từ lâu đã vượt thoát khỏi khái niệm của một trung tâm giao thương thuần túy để trở thành **"Trái tim văn hóa và di sản"** của đô thị Sài Gòn – Thành phố Hồ Chí Minh. Trong bán kính tản bộ chỉ từ 300m đến 1.200m tính từ tháp đồng hồ bốn mặt trứ danh, du khách sẽ bắt gặp sự giao thoa kỳ diệu giữa ba lớp trầm tích: kiến trúc thời thuộc địa đầu thế kỷ 20, những công trình kiến trúc Hiện đại nhiệt đới thời kỳ đỉnh cao, và hệ thống hạ tầng ngầm đô thị tương lai vừa chính thức định hình diện mạo mới vào năm 2026.', 'Khu vực xung quanh Chợ Bến Thành không chỉ là trung tâm buôn bán sầm uất mà còn là **trung tâm văn hóa và di sản** gắn liền với ký ức đô thị Sài Gòn – Thành phố Hồ Chí Minh. Trong bán kính tản bộ từ 300m đến 1.200m quanh tháp đồng hồ bốn mặt, bạn sẽ cảm nhận rõ ba giai đoạn lịch sử đan cài: những tòa nhà thời thuộc địa đầu thế kỷ 20, các công trình kiến trúc Hiện đại nhiệt đới, và hệ thống hạ tầng ngầm đô thị vừa đi vào vận hành từ năm 2026.'),
        ('## Trầm Tích Lịch Sử: Từ Cửa Sông Bến Nghé Đến Tâm Điểm Đô Thị Thế Kỷ 21', '## Lịch Sử Hình Thành: Từ Bến Sông Xưa Đến Giao Lộ Đô Thị Hôm Nay'),
        ('Để thấu cảm trọn vẹn vẻ đẹp của khu vực quanh Bến Thành, người lữ khách cần nhìn lại hành trình tiếp biến không gian hơn hai trăm năm của vùng đất này.', 'Để hiểu vì sao khu vực quanh Bến Thành lại giữ vị trí quan trọng như vậy đối với đời sống Sài Gòn, hãy cùng nhìn lại chặng đường biến đổi không gian hơn hai thế kỷ của khu đất này.'),
        ('## Top Tọa Độ Di Sản & Văn Hóa Không Thể Bỏ Qua Trong Bán Kính 1km', '## Các Điểm Di Sản & Văn Hóa Đáng Khám Phá Trong Bán Kính 1km'),
        ('- **Trải nghiệm có GUU:** Đừng chỉ nhìn ngắm vẻ bề ngoài. Hãy bước vào các lối đi hẹp đan cài như ô cờ, chiêm ngưỡng hệ thống vì kèo thép kiên cố từ đầu thế kỷ 20 giúp không gian lòng chợ luôn thoáng mát dù thời tiết nhiệt đới oi bức bên ngoài.', '- **Gợi ý trải nghiệm:** Đừng chỉ đứng ngắm mặt tiền chợ. Hãy bước vào các lối đi hẹp đan cài bàn cờ bên trong, ngắm nhìn hệ thống vì kèo thép kiên cố từ đầu thế kỷ 20 giúp không gian lòng chợ luôn thoáng mát dù thời tiết bên ngoài oi bức.'),
        ('### Bảo Tàng Mỹ Thuật TP.HCM: Trầm Tích Nghệ Thuật Trong Dinh Thự Nhà Chú Hỏa', '### Bảo Tàng Mỹ Thuật TP.HCM: Dấu Ấn Kiến Trúc Trong Dinh Thự Chú Hỏa'),
        ('- **Trầm tích di sản:** Quần thể gồm ba tòa nhà tráng lệ từng là tư gia kiêm tổng hành dinh kinh doanh của gia tộc thương gia gốc Hoa Hứa Bổn Hỏa (Hui Bon Hoa)', '- **Bối cảnh lịch sử:** Quần thể gồm ba tòa nhà từng là tư gia kiêm văn phòng kinh doanh của gia tộc thương gia Hứa Bổn Hỏa (Hui Bon Hoa)'),
        ('Khu ẩm thực bên trong Cửa Nam và Cửa Đông chợ Bến Thành là một bản hòa ca rực rỡ của màu sắc và mùi vị:', 'Dãy quầy ăn bên trong Cửa Nam và Cửa Đông chợ Bến Thành luôn tấp nập từ sáng sớm, thơm nức mùi nước lèo và các món ăn đặc trưng:'),
        ('### Những Nốt Lặng Trong Chung Cư Cổ', '### Những Quán Cà Phê Ẩn Mình Trong Chung Cư Cổ'),
        ('Nếu muốn tìm một khoảng lặng chiêm nghiệm, hãy men theo những bậc cầu thang gạch bông của các chung cư cổ trên đường Pasteur, Lê Lợi hoặc Lý Tự Trọng quanh chợ. Nơi đây ẩn giấu những tiệm cà phê pha thủ công (Pour-over), nơi bạn có thể nhâm nhi ly cà phê Robusta chất lượng cao vùng đất đỏ Tây Nguyên, phóng tầm mắt qua khung cửa sổ gỗ lá sách ngắm nhìn dòng xe cộ hối hả phía dưới.', 'Nếu muốn tìm một góc yên tĩnh sau những giờ đi bộ ngoài phố, hãy rẽ vào các khu chung cư cũ trên đường Pasteur, Lê Lợi hoặc Tôn Thất Đạm. Ẩn sau những dãy hành lang cũ kỹ là các quán cà phê rang xay mộc mạc, nơi bạn có thể ngồi bên khung cửa sổ ngắm nhìn dòng xe cộ bên dưới.'),
        ('## Lời Khuyên Thực Chiến Dành Cho Người Du Hành Có GUU (Field Notes 2026)', '## Kinh Nghiệm & Lưu Ý Khi Khám Phá Khu Vực Bến Thành (2026)'),
        ('## Lời Kết (Epilogue): Giữ Lại Chút Hồn Sài Gòn\n\nDẫu nhịp sống hiện đại có cuốn những tòa cao ốc chọc trời mọc lên như nấm sau mưa, khu vực quanh Chợ Bến Thành vẫn kiên định giữ cho riêng mình một linh hồn không thể thay thế. Đó là linh hồn được dệt nên từ tiếng còi xe rộn rã, tiếng rao ngọt ngào của những gánh chè rong, bóng đổ trầm mặc của những thức cột gạch Pháp cổ và ánh nhìn lạc quan hướng về tương lai của những người con gắn bó máu thịt với mảnh đất này.\n\nHãy chậm rãi thả bộ trên những đại lộ rợp bóng dầu cổ thụ, để từng giác quan của bạn được đánh thức bởi một Sài Gòn dung dị mà sâu lắng, cổ điển mà hiện đại – một Sài Gòn chân phương nhưng mang đậm phong vị của một cuộc du hành đích thực.', '## Lời Kết: Chút Hồn Phố Thị Sài Gòn\n\nDù trung tâm thành phố ngày càng nhiều cao ốc hiện đại, khu phố quanh Chợ Bến Thành vẫn giữ được nét quyến rũ rất riêng: tiếng gọi nhau đầu ngày của các tiểu thương, bóng râm mát rượi dưới hàng cây cổ thụ trên đường Pasteur, và sự đan xen tự nhiên giữa nếp sống cũ với hạ tầng mới. Dành trọn một ngày đi bộ quanh khu vực này sẽ cho bạn cảm nhận rõ nét về một Sài Gòn vừa quen vừa lạ, sống động và đầy lòng hiếu khách.')
    ],

    "002": [
        ('title: "Bảo Tàng Mỹ Thuật TP.HCM: Trầm Tích Nghệ Thuật Trong Dinh Thự Chú Hỏa"', 'title: "Bảo Tàng Mỹ Thuật TP.HCM: Dấu Ấn Kiến Trúc & Nghệ Thuật Trong Dinh Thự Chú Hỏa"'),
        ('# Bảo Tàng Mỹ Thuật TP.HCM: Trầm Tích Nghệ Thuật Trong Dinh Thự Chú Hỏa', '# Bảo Tàng Mỹ Thuật TP.HCM: Dấu Ấn Kiến Trúc & Nghệ Thuật Trong Dinh Thự Chú Hỏa'),
        ('subtitle: "Khám phá bản giao hưởng kiến trúc Art Deco phương Tây và phong thủy Á Đông giữa 99 ô cửa kính màu huyền thoại cách Bến Thành 350m"', 'subtitle: "Khám phá sự kết hợp giữa kiến trúc Art Deco Pháp và phong thủy Á Đông qua 99 ô cửa sổ cách Bến Thành 350m"'),
        ('> *“Trong bản đồ những điểm đến văn hóa quanh Bến Thành, có một nơi mà thời gian dường như ngưng đọng trên từng phiến gạch bông cổ điển và từng dải quang phổ rọi qua khung kính màu. Đó là Dinh thự số 97A Phó Đức Chính – nơi từng lưu giữ câu chuyện về gia tộc giàu có bậc nhất phương Nam, nay trở thành thánh đường mỹ thuật tĩnh lặng bậc nhất giữa lòng Sài Gòn náo nhiệt.”*', '> *“Rẽ từ trục đường Bến Thành vào phố Phó Đức Chính rợp bóng mát, tiếng ồn ào của xe cộ bỗng nhường chỗ cho không gian tĩnh lặng của dinh thự số 97A. Nắng sớm xiên qua những ô kính màu, rọi xuống hàng gạch hoa trăm tuổi của gia tộc Hứa Bổn Hỏa – nơi ngày nay gìn giữ những bộ sưu tập mỹ thuật quý giá nhất của thành phố.”*'),
        ('## Bản Giao Hưởng Kiến Trúc Art Deco & Phong Thủy Á Đông', '## Sự Kết Hợp Độc Đáo Giữa Kiến Trúc Art Deco Pháp & Phong Thủy Á Đông'),
        ('## Kinh Nghiệm Thực Địa Cho Người Du Hành Có GUU (Field Notes 2026)', '## Kinh Nghiệm & Lưu Ý Tham Quan Thực Tế (2026)'),
        ('## Lời Kết: Bản Tình Ca Nghệ Thuật Giữa Lòng Đô Thị', '## Lời Kết: Điểm Lặng Nghệ Thuật Giữa Lòng Sài Gòn')
    ],

    "003": [
        ('title: "Thiên Đường Ẩm Thực Chợ Bến Thành: Bóc Tách Hương Vị Sạp Chợ Trăm Năm & Phố Đêm Phan Bội Châu"', 'title: "Cẩm Nang Ẩm Thực Chợ Bến Thành: Những Quầy Quán Trăm Năm & Món Ngon Phố Đêm Phan Bội Châu"'),
        ('# Thiên Đường Ẩm Thực Chợ Bến Thành: Bóc Tách Hương Vị Sạp Chợ Trăm Năm & Phố Đêm Phan Bội Châu', '# Cẩm Nang Ẩm Thực Chợ Bến Thành: Những Quầy Quán Trăm Năm & Món Ngon Phố Đêm Phan Bội Châu'),
        ('subtitle: "Khám phá bản giao hưởng mỹ vị phương Nam từ nồi nước lèo bún riêu gánh 50 năm đến những bếp than hồng rực sáng góc phố đêm Quận 1"', 'subtitle: "Từ gánh bún riêu cua thơm lừng góc cửa Đông đến sạp chè ba thế hệ và những bếp than rực hồng buổi chập tối"'),
        ('> *“Nếu muốn chạm vào nhịp đập chân thực nhất của một đô thị phương Nam, đừng tìm trong những sảnh tiệc máy lạnh khép kín. Hãy ngồi xuống chiếc ghế đẩu nhựa mộc mạc bên một sạp chợ Bến Thành, hít hà làn khói nghi ngút bốc lên từ nồi nước lèo ninh xương thơm nồng vị giấm bỗng, và lắng nghe bản hòa ca rộn rã của tiếng dao thớt va lách cách giữa buổi sớm mai.”*', '> *“Muốn cảm nhận trọn vẹn sức sống của khu chợ này, hãy bắt đầu bằng việc ngồi xuống chiếc ghế nhựa thấp bên dãy ẩm thực lúc sáng sớm. Tiếng muỗng đũa va lách cách, mùi nước lèo ninh xương thơm phức và tiếng chào mời đon đả của các cô bán hàng sẽ lập tức kéo bạn vào nhịp sinh hoạt chân thật nhất của người Sài Gòn.”*'),
        ('## Triết Lý Ẩm Thực Phương Nam: Vị Đậm Đà Của Đất Phù Sa', '## Hương Vị Mộc Mạc Của Đất Phương Nam: Nước Lèo Đậm Đà & Rau Sống Tươi Ngon'),
        ('## Bản Hòa Ca Đêm Phan Bội Châu: Bếp Than Hồng Dưới Bầu Trời Đô Thị', '## Phố Đêm Phan Bội Châu: Bếp Than Đỏ Lửa & Món Nướng Vỉa Hè'),
        ('### Sạp Chè Bé (Sạp 1119): Nốt Trầm Ngọt Ngào 60 Năm', '### Sạp Chè Bé (Sạp 1119): Hương Vị Chè Nam Bộ Qua Ba Thế Hệ Từ 1968'),
        ('## Sổ Tay Ăn Chợ Cho Người Du Hành Có GUU (Field Notes 2026)', '## Sổ Tay Ăn Uống & Kinh Nghiệm Thanh Toán (2026)')
    ],

    "004": [
        ('subtitle: "Hành trình 4,5km kết nối ba thế kỷ kiến trúc, không gian tâm linh tĩnh lặng và hoàng hôn lộng gió bên bờ sông Sài Gòn"', 'subtitle: "Lộ trình tản bộ 4,5km qua các công trình di sản trăm năm, quán cà phê chung cư cổ và ngắm hoàng hôn bến Bạch Đằng"'),
        ('> *“Cách duy nhất để thấu cảm linh hồn của một đô thị không phải là nhìn ngắm nó qua khung kính kín mít của những chiếc xe hơi máy lạnh, mà là đặt từng bước chân chậm rãi trên vỉa hè lát đá, lắng nghe tiếng chuông gió va lách cách trên hiên chung cư cũ và cảm nhận làn gió sông Sài Gòn mơn man da thịt lúc chiều tà.”*', '> *“Để thực sự hiểu nhịp sống Sài Gòn, cách tốt nhất là bước xuống phố và đi bộ. Dưới những tán cây dầu cổ thụ râm mát, từng góc phố quanh Chợ Bến Thành mở ra những câu chuyện rất đỗi bình dị: mùi cà phê vợt thơm nồng trong con hẻm nhỏ, bóng râm mát rượi của dinh thự Pháp cổ, và những chiếc ghế nhựa thấp bên vỉa hè lúc hoàng hôn buông xuống sông Sài Gòn.”*'),
        ('## Triết Lý "Slow Travel": Đi Bộ Để Chạm Vào Ký Ức Thành Phố', '## Vì Sao Trung Tâm Quận 1 Rất Thích Hợp Để Đi Bộ'),
        ('### 14:30 – 16:00: Nốt Trầm Chung Cư Cổ & Cà Phê Di Sản', '### 14:30 – 16:00: Ghé Thăm Chung Cư Cà Phê Cổ & Nghỉ Chân'),
        ('## Sổ Tay Chuẩn Bị Cho Người Du Hành Có GUU (2026 Checklist)', '## Sổ Tay Chuẩn Bị & Kinh Nghiệm Tản Bộ (2026 Checklist)')
    ],

    "005": [
        ('title: "Dinh Độc Lập Sài Gòn: Đỉnh Cao Kiến Trúc Nhiệt Đới & Trầm Tích Lịch Sử Phương Nam"', 'title: "Dinh Độc Lập Sài Gòn: Kiến Trúc Hiện Đại Nhiệt Đới & Những Dấu Mốc Lịch Sử"'),
        ('# Dinh Độc Lập Sài Gòn: Đỉnh Cao Kiến Trúc Nhiệt Đới & Trầm Tích Lịch Sử Phương Nam', '# Dinh Độc Lập Sài Gòn: Kiến Trúc Hiện Đại Nhiệt Đới & Những Dấu Mốc Lịch Sử'),
        ('subtitle: "Giải mã triết học phương Đông ẩn sau những đốt trúc bê tông thanh thoát và khu hầm chỉ huy thời chiến cách Bến Thành 700m"', 'subtitle: "Khám phá triết lý phương Đông trong thiết kế của KTS Ngô Viết Thụ và khu hầm chỉ huy thời chiến cách Bến Thành 700m"'),
        ('> *“Hiếm có công trình kiến trúc nào trên thế giới mà từng đường nét bê tông, từng hành lang lộng gió lại phản chiếu trọn vẹn những bước ngoặt lịch sử kịch tính như Dinh Độc Lập. Giữa khuôn viên rợp bóng đại thụ của trung tâm Quận 1, tòa dinh thự sừng sững như một khúc tráng ca trầm mặc – nơi triết lý kiến trúc phương Đông hòa quyện tuyệt mỹ cùng tư duy công năng hiện đại của thế kỷ 20.”*', '> *“Nằm giữa khuôn viên rợp bóng cây cổ thụ của trung tâm Quận 1, Dinh Độc Lập gây ấn tượng bởi những hàng rèm hoa đá hình đốt trúc thanh thoát và những hành lang lộng gió mát rượi. Công trình do kiến trúc sư Ngô Viết Thụ thiết kế không chỉ là một dấu mốc lịch sử đặc biệt của Sài Gòn, mà còn là một trong những kiệt tác tiêu biểu nhất của trào lưu kiến trúc Hiện đại nhiệt đới tại Đông Nam Á.”*'),
        ('## Giải Mã Mật Mã Triết Học Phương Đông Của KTS Ngô Viết Thụ', '## Dấu Ấn Triết Lý Phương Đông Trong Thiết Kế Của KTS Ngô Viết Thụ'),
        ('## Kinh Nghiệm Thực Địa Cho Người Du Hành Có GUU (Field Notes 2026)', '## Kinh Nghiệm Tham Quan & Lưu Ý Thực Tế (2026)')
    ],

    "006": [
        ('subtitle: "Khám phá kỳ quan ngầm 4 tầng sâu 32m và giếng trời hoa sen kết nối trái tim lịch sử với tương lai đô thị hiện đại"', 'subtitle: "Khám phá nhà ga ngầm 4 tầng sâu 32m và giếng trời hoa sen kết nối giao thông hiện đại với trung tâm thành phố"'),
        ('> *“Nếu tháp đồng hồ Chợ Bến Thành là biểu tượng của ký ức thế kỷ 20, thì ngay dưới chân nó, Ga ngầm Trung tâm Bến Thành chính là cánh cửa dẫn lối vào một Sài Gòn tương lai. Dưới độ sâu 32 mét trong lòng đất, một thành phố ngầm hiện đại, tinh tế và ngập tràn ánh sáng tự nhiên từ giếng trời hoa sen đã sẵn sàng viết tiếp trang sử mới cho đô thị phương Nam.”*', '> *“Ngay bên dưới Quảng trường Quách Thị Trang, Ga ngầm Trung tâm Bến Thành đánh dấu bước chuyển mình quan trọng của giao thông công cộng Sài Gòn. Với bốn tầng ngầm sâu 32 mét và giếng trời hoa sen đón nắng tự nhiên rọi thẳng xuống sảnh chờ, nhà ga vừa là đầu mối kết nối các tuyến đường sắt đô thị, vừa mang lại trải nghiệm di chuyển hiện đại, tiện lợi cho người dân và du khách.”*'),
        ('## Không Gian Đô Thị Ngầm: Bước Chuyển Mình Kỳ Vĩ Của Hạ Tầng Phương Nam', '## Giao Thông Đô Thị Ngầm: Bước Chuyển Mình Hiện Đại Của TP.HCM'),
        ('## Giải Mã Kiến Trúc 4 Tầng Ngầm Dưới Lòng Bến Thành', '## Khám Phá Cấu Trúc 4 Tầng Ngầm Dưới Lòng Bến Thành'),
        ('## Hướng Dẫn Trải Nghiệm Thực Tế Cho Người Du Hành Có GUU (Field Notes 2026)', '## Hướng Dẫn Di Chuyển Thực Tế Bằng Tuyến Metro Số 1 (2026)')
    ],

    "007": [
        ('subtitle: "Khám phá tháp cổng Dravidian rực rỡ và nghi thức áp đá thiêng độc nhất vô nhị của cộng đồng Tamil cách Bến Thành 200m"', 'subtitle: "Khám phá tháp cổng Dravidian rực rỡ và nghi thức áp đá thiêng độc đáo của cộng đồng Tamil cách Bến Thành 200m"'),
        ('> *“Chỉ cần rẽ khỏi dòng xe hối hả trên đường Lê Thánh Tôn bước vào đường Trương Định, âm thanh phố thị dường như lập tức lùi lại phía sau. Không gian mở ra với mùi nhang trầm nồng nàn, sắc vàng rực của những tràng hoa cúc và vẻ trầm mặc của ngôi đền Hindu hơn một thế kỷ tuổi – nơi tín ngưỡng Nam Ấn đan cài diệu kỳ vào đời sống tâm linh của người Sài Gòn.”*', '> *“Chỉ cách Chợ Bến Thành vài bước chân trên đường Trương Định, Đền Hindu Mariamman mở ra một không gian trầm mặc, thơm nồng mùi trầm hương và long não. Ngôi đền được cộng đồng thương nhân Tamil Chettiar xây dựng từ cuối thế kỷ 19, với tháp cổng Gopuram rực rỡ tượng các vị thần và phong tục áp trán vào tường đá thiêng cầu bình an – một nét văn hóa tâm linh độc đáo giữa trung tâm Sài Gòn.”*'),
        ('## Giải Mã Nghệ Thuật Kiến Trúc Dravidian Nam Ấn', '## Kiến Trúc Đền Dravidian Nam Ấn: Tháp Cổng Gopuram & Các Ban Thờ Cổ'),
        ('## Cẩm Nang Thực Địa Cho Người Du Hành Có GUU (Field Notes 2026)', '## Lưu Ý & Văn Hóa Chiêm Bái Khi Vào Đền (2026)')
    ],

    "008": [
        ('subtitle: "Bí quyết khám phá 1.400 sạp hàng trăm năm, phân biệt lụa tơ tằm – sơn mài độc bản và nghệ thuật mặc cả duyên dáng chuẩn mực"', 'subtitle: "Bí quyết khám phá 1.400 sạp hàng, phân biệt lụa tơ tằm – sơn mài và kinh nghiệm mua sắm thoải mái, đúng giá"'),
        ('> *“Mua sắm tại Chợ Bến Thành chưa bao giờ là một cuộc giao dịch tiền – hàng khô khan. Đó là một vũ điệu giao tiếp văn hóa đầy duyên dáng giữa người mua và người bán, nơi một nụ cười chân thành và sự am tường về giá trị thủ công có thể mở ra những câu chuyện đời sâu sắc đằng sau từng tấm lụa, từng món đồ sơn mài.”*', '> *“Dạo quanh các lối đi bên trong Chợ Bến Thành là một trải nghiệm sống động: từ những sạp vải lụa rực rỡ, quầy sơn mài chạm khảm tinh xảo đến các hàng trà, cà phê rang xay thơm phức. Để có một buổi mua sắm vui vẻ và mua được món đồ ưng ý với giá hợp lý, bạn chỉ cần nắm rõ cách phân bổ các gian hàng, giữ nụ cười cởi mở và trò chuyện tự nhiên với các tiểu thương.”*'),
        ('### Cửa Đông (Đường Phan Bội Châu): Hương Vị Nông Sản & Trầm Tích Đồ Khô', '### Cửa Đông (Đường Phan Bội Châu): Hương Vị Nông Sản & Gian Hàng Đồ Khô'),
        ('## Nghệ Thuật Trả Giá Văn Minh: "Bargaining With Grace"', '## Nghệ Thuật Mặc Cả Duyên Dáng & Tôn Trọng Người Bán'),
        ('## Sổ Tay Mua Sắm Dành Cho Người Du Hành Có GUU (2026 Checklist)', '## Sổ Tay Mua Sắm & Mẹo Dạo Chợ Thực Tế (2026 Checklist)')
    ],

    "009": [
        ('## Dẫn Nhập: Góc Nhìn Khác Biệt Về Sài Gòn Từ Tầng Mui Trần', '## Góc Nhìn Khác Biệt Về Sài Gòn Từ Tầng Mui Trần'),
        ('## Sổ Tay Kinh Nghiệm Đắt Giá Dành Cho Lữ Khách "Có GUU"', '## Sổ Tay Kinh Nghiệm Dành Cho Du Khách Đi Xe Bus 2 Tầng')
    ],

    "010": [
        ('## Dẫn Nhập: Sức Hút Của Những "Tổ Chim Cú" Trên Tầng Lầu Cổ', '## Sức Hút Của Những Quán Cà Phê Chung Cư Cũ'),
        ('## Cẩm Nang Văn Hóa Ứng Xử Cho Người Lữ Khách Tinh Tế', '## Văn Hóa Ứng Xử Khi Ghé Thăm Các Khu Chung Cư Cũ')
    ],

    "011": [
        ('## Dẫn Nhập: Khi Sài Gòn Thắp Lên Những Tinh Cầu Đêm', '## Ngắm Sài Gòn Lên Đèn Từ Những Quán Bar Sân Thượng'),
        ('## Văn Hóa Mixology Bản Địa: Sự Trỗi Dậy Của Cocktail Hương Vị Việt', '## Cocktail Hương Vị Bản Địa: Sự Kết Hợp Cùng Thảo Mộc Việt Nam')
    ],

    "012": [
        ('## Dẫn Nhập: Trải Nghiệm Lưu Trú Mang Chiều Sâu Văn Hóa', '## Nghỉ Dưỡng Giữa Không Gian Di Sản Trung Tâm Sài Gòn'),
        ('## Tiêu Chuẩn Lựa Chọn Khách Sạn Boutique Chuẩn "GUU"', '## Tiêu Chuẩn Của Một Khách Sạn Boutique Đậm Chất Sài Gòn'),
        ('## Kinh Nghiệm Đặt Phòng & Đặc Quyền Dành Cho Khách "Có GUU"', '## Kinh Nghiệm Đặt Phòng & Lưu Ý Thực Tế')
    ],

    "013": [
        ('## Dẫn Nhập: Chợ Bến Thành Đâu Chỉ Là Nơi Mua Bán', '## Góc Nhìn Mới Về Chợ Bến Thành: Không Chỉ Là Nơi Mua Bán'),
        ('## Lời Kết: Chợ Bến Thành – Bản Hòa Ca Đầy Màu Sắc', '## Lời Kết: Trọn Vẹn Một Ngày Trải Nghiệm Bến Thành')
    ],

    "014": [
        ('## Dẫn Nhập: Bước Vào Trái Tim Sài Gòn Với Tâm Thế Của Một Chuyên Gia', '## Kinh Nghiệm Dạo Chợ Bến Thành: Tự Tin & Thoải Mái')
    ],

    "015": [
        ('## Dẫn Nhập: Sự Thật Đằng Sau Sự Hoa Lệ Của Khu Chợ Trăm Tuổi', '## Kinh Nghiệm Đi Chợ An Toàn: Nhận Diện Các Chiêu Trò Phổ Biến')
    ],

    "016": [
        ('## Dẫn Nhập: "Phố Wall Ngoại Tệ" Thu Nhỏ Của Sài Gòn', '## Phố Đổi Ngoại Tệ Cửa Tây: Vì Sao Tiệm Vàng Hà Tâm Luôn Tấp Nập?')
    ],

    "017": [
        ('## Dẫn Nhập: "Cuộc Chiến" Tìm Chỗ Đỗ Xe Giữa Lõi Di Sản Sài Gòn', '## Kinh Nghiệm Gửi Xe Quanh Chợ Bến Thành: Tìm Điểm Đỗ An Toàn, Đúng Giá')
    ],

    "018": [
        ('## Dẫn Nhập: Chuyến Xe Đầu Tiên Chạm Ngõ Trái Tim Sài Gòn', '## Từ Sân Bay Tân Sơn Nhất Về Bến Thành: Lựa Chọn Nào Tiện Nhất?')
    ]
}

EN_REPLACEMENTS = {
    "001": [
        ('subtitle: "An evocative stroll through a century of Indochinese architecture, sacred sanctuaries, and futuristic underground pulses within a 1-kilometer radius"', 'subtitle: "A walking guide to century-old Indochine architecture, quiet neighborhood temples, and modern street life within a 1-kilometer radius"'),
        ('lead: "If Saigon is a three-century-old chronicle inscribed in brick and stone, Ben Thanh Market and its surrounding tree-shaded boulevards represent its most luminous opening chapter. Here, the century-old chime of the clock tower harmonizes with the modern hum of the underground metro, where quiet Indochine colonnades cast long shadows across the ceaseless energy of a city that never sleeps."', 'lead: "Early in the morning, before traffic builds around Quach Thi Trang Square, the chime of Ben Thanh Market\'s South Clock Tower marks the start of another southern day. Within a short walk of this 1914 iron-framed market hall, Saigon reveals its layered character: sun-bleached colonial shutters, fragrant sweet-soup stalls passed down through three generations, and the quiet underground concourses of Metro Line 1."'),
        ('If Saigon is a three-century-old chronicle inscribed in brick and stone, Ben Thanh Market and its surrounding tree-shaded boulevards represent its most luminous opening chapter. Here, the century-old chime of the clock tower harmonizes with the modern hum of the underground metro, where quiet Indochine colonnades cast long shadows across the ceaseless energy of a city that never sleeps.', 'Early in the morning, before traffic builds around Quach Thi Trang Square, the chime of Ben Thanh Market\'s South Clock Tower marks the start of another southern day. Within a short walk of this 1914 iron-framed market hall, Saigon reveals its layered character: sun-bleached colonial shutters, fragrant sweet-soup stalls passed down through three generations, and the quiet underground concourses of Metro Line 1.'),
        ('The urban quarter cradling Ben Thanh Market has long evolved beyond its identity as a bustling commercial marketplace; it stands as the veritable **cultural and architectural heart of Ho Chi Minh City**. Within a gentle walking radius of 300 to 1,200 meters from the iconic four-dial clock tower, travelers are treated to a captivating layered narrative: early 20th-century colonial elegance, mid-century tropical modernism at its zenith, and a visionary underground transit metropolis newly completed in 2026.', 'Around Ben Thanh Market, the streets tell the story of modern Ho Chi Minh City in real time. Within a 10- to 15-minute walk of the iconic clock tower, travelers encounter three distinct eras: quiet French colonial administrative buildings, mid-century tropical modernism, and the wide granite esplanades and underground concourses of the new Metro Line 1 completed in 2026.'),
        ('## 🌟 Key Curated Dimensions of the Ben Thanh Heritage Axis', '## 🌟 At a Glance: Key Numbers & Highlights Around Ben Thanh'),
        ('## Historical Stratigraphy: From the Ben Nghe Riverbank to a 21st-Century Crossroads', '## From Riverbank Wharf to Modern Crossroads: A Century of History'),
        ('In the early 19th century, the ancestral precursor to Ben Thanh was a riverine trading dock along the Ben Nghe canal, nestled beneath the ramparts of the historic Gia Dinh Citadel.', 'In the early 19th century, the ancestral precursor to Ben Thanh was a riverine trading dock along the Ben Nghe canal, built near the ramparts of the historic Gia Dinh Citadel.'),
        ('- **Conscious Travel Insight:** Venture beyond the outer perimeter. Step into the cooler labyrinth of interior alleys, where early 20th-century iron roof trusses still support high ceilings, facilitating natural cross-ventilation against the tropical afternoon warmth.', '- **Insider Tip:** Venture beyond the souvenir stalls at the perimeter. Step into the interior aisles, where early 20th-century iron roof trusses still support high ceilings that keep the market cool through natural cross-ventilation even on hot afternoons.'),
        ('### HCMC Museum of Fine Arts: Indochine Splendor in the Hui Bon Hoa Mansion', '### HCMC Museum of Fine Arts: Indochine Architecture & Vietnamese Fine Art'),
        ('- **Gilded Heritage:** This magnificent three-mansion estate once served as the private residence and headquarters of **Hui Bon Hoa** (popularly known as *Chú Hỏa*), the legendary Chinese-Vietnamese merchant whose real estate empire defined colonial Saigon. Designed between 1929 and 1934 by French architect Rivera, the complex represents an opulent marriage of **Western Art Deco, Beaux-Arts flourishes, and traditional Feng Shui geomancy**.', '- **Historical Background:** This three-building estate once served as the private home and company headquarters of **Hui Bon Hoa** (popularly known as *Chú Hỏa*), one of Saigon\'s most prominent early-20th-century merchants. Designed between 1929 and 1934 by French architect Rivera, the complex combines **Western Art Deco lines, Beaux-Arts stonework, and Chinese feng shui principles**.'),
        ('## Curated Matrix: Comparing Landmarks Along the Ben Thanh Axis', '## Key Landmarks at a Glance'),
        ('| **Ben Thanh Market** | *Epicenter (0m)* |', '| **Ben Thanh Market** | *Starting Point (0m)* |'),
        ('## Epicurean Mapping & Neighborhood Life\n\nNo encounter with Ben Thanh is complete without immersing your palate in the rich gastronomic mosaic of the southern delta.', '## Where to Eat & Neighborhood Street Life\n\nFood around Ben Thanh offers a direct taste of southern Vietnam\'s everyday culinary culture.'),
        ('### Secret Vintage Apartment Hideaways\n\nFor travelers seeking a contemplative pause, slip into the encaustic-tiled stairwells of aging residential buildings along Pasteur, Le Loi, or Ly Tu Trong Streets. Tucked behind vintage louvered doors are artisan pour-over cafes where one can savor single-origin Arabica from the misty highlands of Da Lat, peering through weathered shutters as Saigon\'s evening traffic flows like ribbons of light below.', '### Quiet Apartment Cafes Tucked in Heritage Buildings\n\nFor a break from the tropical heat, slip into the tile-floored stairwells of older residential buildings along Pasteur, Le Loi, or Ly Tu Trong Streets. Hidden behind louvered wooden doors are relaxed specialty coffee shops where you can enjoy Vietnamese drip coffee or a slow pour-over while looking down at the street from a narrow balcony.'),
        ('## Field Notes for the Discerning Traveler (2026 Guidelines)', '## Practical Tips & Field Advice for Visitors (2026)'),
        ('## Epilogue: Preserving the Timeless Soul of Saigon\n\nNo matter how many futuristic glass towers rise into the southern sky, the quarter surrounding Ben Thanh Market preserves an irreplaceable human soul. It is a soul woven from the rhythmic clatter of street life, the sweet call of wandering dessert vendors, the stoic beauty of French brick facades, and the unquenchable optimism of those who call this river city home.\n\nTake your time walking down these tamarind-canopied boulevards. Allow your senses to be awakened by a Saigon that is both humble and grand, timeless yet boldly accelerating into the future—a true pilgrimage for the thoughtful traveler.', '## Closing Thoughts: Walking Saigon with Open Eyes\n\nNo matter how many glass towers rise into the southern sky, the quarter surrounding Ben Thanh Market preserves an irreplaceable human rhythm: morning street greetings between stall keepers, quiet courtyards tucked behind bustling avenues, and the easy coexistence of old traditions with modern city life. Exploring this neighborhood on foot offers a genuine, unfiltered encounter with Saigon at its most welcoming.')
    ],

    "002": [
        ('title: "HCMC Museum of Fine Arts: Inside the Gilded Legacy of Hui Bon Hoa"', 'title: "HCMC Museum of Fine Arts: Inside the Historic Estate of Hui Bon Hoa"'),
        ('# HCMC Museum of Fine Arts: Inside the Gilded Legacy of Hui Bon Hoa', '# HCMC Museum of Fine Arts: Inside the Historic Estate of Hui Bon Hoa'),
        ('subtitle: "A mesmerizing intersection of French Art Deco and southern Vietnamese lore across 99 stained-glass portals just 350m from Ben Thanh"', 'subtitle: "Exploring French Art Deco architecture, Chinese feng shui balance, and 99 stained-glass windows just 350m from Ben Thanh"'),
        ('lead: "Tucked behind a verdant canopy on Pho Duc Chinh Street, the Ho Chi Minh City Museum of Fine Arts stands as a sanctuary of golden stillness amidst District 1\'s unrelenting kinetic rush. Once the palatial residence of colonial Saigon’s wealthiest merchant, this architectural masterpiece now shelters over 22,000 national art treasures."', 'lead: "Just a five-minute walk south of Ben Thanh Market on Pho Duc Chinh Street, the city\'s frantic pace gives way to the shaded courtyard of the Ho Chi Minh City Museum of Fine Arts. Housed in the former early-20th-century mansions of the merchant Hui Bon Hoa, this three-building complex blends French Art Deco facades, patterned encaustic floor tiles, and cool, high-ceilinged galleries holding over 22,000 works of Vietnamese art."'),
        ('## 🌟 Key Curated Dimensions of the Fine Arts Estate', '## 🌟 At a Glance: Key Numbers & Architectural Highlights'),
        ('## The Hui Bon Hoa Dynasty: From River Porter to Real Estate Titan', '## The Hui Bon Hoa Family: How a Merchant Built a Saigon Landmark'),
        ('## Architectural Alchemy: French Art Deco Meets Southern Geomancy', '## Architectural Harmony: French Art Deco Meets Chinese Feng Shui'),
        ('## Curated Field Notes for the Discerning Traveler (2026)', '## Visitor Guide & Practical Tips (2026)'),
        ('epilogue: "The HCMC Museum of Fine Arts is far more than a gallery of mounted canvases; the mansion itself breathes with the layered soul of southern history. In an era of breakneck modernization, spending two unhurried hours listening to the breeze whisper through 99 louvered windows reminds the discerning traveler that true beauty remains forever anchored in patience and craftsmanship."', 'epilogue: "Visiting the Museum of Fine Arts offers an unhurried look into both Vietnamese art and the residential architecture of 1930s Saigon. From the quiet courtyards to the breeze flowing through louvered wooden windows, the estate invites visitors to slow down and take in the city\'s artistic heritage."')
    ],

    "003": [
        ('title: "The Culinary Maze of Ben Thanh: Signature Stalls & Night Street Delicacies"', 'title: "Ben Thanh Market Food Guide: Iconic Heritage Stalls & Night Street Dining"'),
        ('# The Culinary Maze of Ben Thanh: Signature Stalls & Night Street Delicacies', '# Ben Thanh Market Food Guide: Iconic Heritage Stalls & Night Street Dining'),
        ('subtitle: "Unraveling Simmering Broths, Freshwater Crab Cakes & Charcoal Braziers"', 'subtitle: "From Morning Crab Noodle Bowls to Evening Charcoal Stalls on Phan Boi Chau Street"'),
        ('lead: "If you seek the authentic heartbeat of Saigon, do not search within sterile air-conditioned dining halls. Pull up a modest plastic stool beside a steaming cauldron in Ben Thanh Market, inhale the intoxicating perfume of crab essence and fermented herbs, and surrender to the culinary poetry of the Southern Delta."', 'lead: "To understand the rhythm of Saigon, pull up a low plastic stool at one of Ben Thanh Market\'s food stalls early in the morning. Between steaming pots of tomato-scented crab broth, rows of vibrant sweet desserts, and cooks calling out orders, the market serves as an accessible, living introduction to southern Vietnamese cooking."'),
        ('## Southern Gastronomic Philosophy: The Bold Soul of Alluvial Soil', '## The Flavors of Southern Vietnam: Sweet Broths, Fresh Herbs & River Fish'),
        ('## Phan Boi Chau Night Dining: Charcoal Braziers Beneath the Neon Sky', '## Phan Boi Chau Street at Night: Sizzling Seafood & Charcoal Grills'),
        ('### Ba Muoi’s Sweet Soup Stall: 60 Years of Sugarcane Romance', '### Chè Bé Dessert Stall (Stall 1119): Southern Sweet Soups Since 1968'),
        ('### Che Be Heritage Sweet Soup Stall (Stall 1119): 60 Years of Sugarcane Romance', '### Chè Bé Dessert Stall (Stall 1119): Southern Sweet Soups Since 1968'),
        ('## Field Notes for Conscious Gourmands (2026)', '## Practical Dining Tips & Payment Advice (2026)'),
        ('epilogue: "Gastronomic genius is rarely born in isolation; it is forged across decades of devotion by matriarchs who guard family recipes with fierce pride. Ben Thanh\'s food stands not as museum artifacts, but as living, breathing testaments to the resilience, generosity, and boundless inventiveness of southern Vietnamese civilization."', 'epilogue: "The best food in Ben Thanh is born of routine, patience, and family memory: broth pots simmered before dawn, fresh herbs bundled daily, and simple wooden counters where locals and visitors sit elbow-to-elbow."')
    ],

    "004": [
        ('subtitle: "A curated 4.5-kilometer slow-travel expedition connecting three centuries of architecture, spiritual quietude, and dynamic riverine horizons"', 'subtitle: "A 4.5-kilometer walking route linking century-old colonial alleys, quiet neighborhood shrines, and the Saigon River waterfront"'),
        ('lead: "The only authentic way to absorb the living soul of Saigon is not through the tinted, sealed windows of an air-conditioned car, but by setting foot upon its historic sidewalks. Across a 4.5-kilometer pedestrian journey connecting Ben Thanh Market to the shimmering Saigon River, three centuries of architectural ambition and daily life reveal themselves to the observant traveler."', 'lead: "To understand Saigon, you have to explore it on foot. Beneath the tamarind and mahogany trees shading District 1, a walking route reveals quiet details that zip past unseen from a taxi window: early-morning coffee stalls set up on low plastic stools, cool tiled corridors of heritage apartment blocks, and the soft river breeze drifting across Bach Dang Wharf at sunset."'),
        ('## Slow Travel Philosophy: Embracing the City on Foot', '## Why District 1 Is Best Explored on Foot'),
        ('## Field Checklist for Conscious Voyagers (2026)', '## Walking Tour Checklist & Essential Tips (2026)'),
        ('epilogue: "A walking journey through District 1 is an exercise in mindful presence. In an urban landscape hurtling toward modernity, choosing to walk is an act of quiet rebellion—a commitment to honoring the subtle textures, fragrant breezes, and unscripted human encounters that define the true magic of Saigon."', 'epilogue: "Walking through central Saigon reminds you that the city\'s character isn\'t just found in grand monuments, but in everyday sidewalk moments: the clink of ice in a glass of coffee, the aroma of lemongrass skewers over charcoal, and the friendly wave of a neighborhood vendor."')
    ],

    "005": [
        ('title: "The Independence Palace: Mid-Century Modernism & Historic Crossroads of Saigon"', 'title: "The Independence Palace: Mid-Century Modernism & Historic Landmarks of Saigon"'),
        ('# The Independence Palace: Mid-Century Modernism & Historic Crossroads of Saigon', '# The Independence Palace: Mid-Century Modernism & Historic Landmarks of Saigon'),
        ('subtitle: "Deciphering Eastern philosophical ideograms, climate-responsive bamboo louvers, and fortified wartime bunkers 700 meters from Ben Thanh Market"', 'subtitle: "A guide to Ngo Viet Thu\'s modernist masterpiece: Eastern symbolic architecture, climate-responsive stone louvers, and wartime bunkers 700m from Ben Thanh"'),
        ('lead: "Few architectural monuments on earth mirror the tectonic shifts of modern history with the stoic poetry of the Independence Palace. Nestled within twelve hectares of centuries-old mahogany and tamarind groves in District 1, this reinforced-concrete masterwork designed by Grand Prix de Rome laureate Ngo Viet Thu stands as Southeast Asia\'s preeminent temple of Tropical Modernism."', 'lead: "Set within a sprawling park shaded by century-old trees in District 1, the Independence Palace stands as one of Southeast Asia\'s finest examples of mid-century tropical modernism. Designed by architect Ngo Viet Thu—the first Vietnamese winner of the Grand Prix de Rome—the building combines raw concrete, breeze-catching stone louvers inspired by bamboo stalks, and quiet inner courtyards with a turbulent 20th-century political history."'),
        ('## Historical Stratigraphy: From Colonial Norodom Palace to National Reunification', '## From Norodom Palace to National Reunification: Key Historical Milestones'),
        ('The palatial grounds have served as the fulcrum of southern governance across three distinct epochs:', 'The site has served as the administrative center of southern Vietnam across three distinct eras:'),
        ('## Deciphering Ngo Viet Thu’s Eastern Architectural Cryptogram', '## Ngo Viet Thu\'s Symbolic Architecture: Eastern Philosophy in Concrete'),
        ('## Field Notes for the Discerning Traveler (2026)', '## Visitor Tips & Field Guidelines (2026)'),
        ('epilogue: "The Independence Palace is far more than a stage where geopolitical chapters drew to a close; it is a profound testament to Vietnamese architectural ingenuity. Here, raw modernist concrete was bent to the will of Eastern geomancy and tropical wisdom, crafting a structure that breathes with the monsoons and commands the respect of all who walk its dignified colonnades."', 'epilogue: "Beyond its historic significance, the Independence Palace remains a masterclass in regional architecture: wide eaves shielding open corridors from monsoon rains, natural cross-ventilation keeping grand reception halls comfortable, and balanced geometric proportions that feel timeless."')
    ],

    "006": [
        ('subtitle: "A 32-meter subterranean engineering marvel crowned by a celestial lotus skylight uniting colonial memory with rapid transit velocity"', 'subtitle: "How to navigate Saigon\'s first underground transit hub: 4 levels, 32 meters below street level, and direct connections across District 1"'),
        ('lead: "If Ben Thanh Market\'s clock tower embodies the romance of 20th-century nostalgia, the cavernous terminal directly beneath Quach Thi Trang Square acts as the gateway to Saigon\'s 21st-century future. Descending 32 meters into the alluvial subterranean strata, the Ben Thanh Central Metro Station connects Line 1 with future urban transit arteries, crowned by an awe-inspiring architectural lotus skylight."', 'lead: "Directly beneath Quach Thi Trang Square, the Ben Thanh Central Metro Station marks a major step forward for urban mobility in Ho Chi Minh City. Descending 32 meters across four underground tiers, the central terminal connects Metro Line 1 with future transit lines, crowned by a wide glass lotus skylight that brings natural daylight down into the concourse."'),
        ('## Subterranean Renaissance: Reimagining the Urban Landscape', '## Saigon\'s Underground Transit: How Metro Line 1 Connects the City'),
        ('## Navigating the Four-Tier Subterranean Labyrinth', '## Navigating the 4 Underground Levels: Entrances, Ticketing & Platforms'),
        ('## Curated Transit Insights for Conscious Travelers (2026)', '## Practical Transit Tips & Passenger Guidelines (2026)')
    ],

    "007": [
        ('subtitle: "Ascending Gopuram towers, fragrant camphor altars, and the unique stone-pressing meditation ritual 200 meters from Ben Thanh Market"', 'subtitle: "A colorful Dravidian sanctuary on Truong Dinh Street: carved Gopuram towers, floral offerings, and the sacred stone-pressing ritual"'),
        ('lead: "Turn off the roaring stream of motorbikes on Le Thanh Ton Street into Truong Dinh, and urban velocity recedes instantly into a sanctuary of golden stillness. Founded in the late 19th century by Tamil Chettiar merchants, the Mariamman Hindu Temple stands as a radiant, polychromatic marvel of South Indian Dravidian architecture in the very heart of District 1."', 'lead: "A short walk from Ben Thanh Market on Truong Dinh Street, the Mariamman Hindu Temple offers a quiet, contemplative atmosphere scented with jasmine, incense, and camphor. Built in the late 19th century by Tamil Chettiar merchants, the temple features a colorful Gopuram tower carved with Hindu deities and a unique local tradition where worshippers press their hands and foreheads against the stone walls of the inner sanctum to pray for peace."'),
        ('## Deciphering South Indian Dravidian Temple Art', '## Dravidian Temple Architecture: Carved Gopuram Towers & Sacred Shrines'),
        ('epilogue: "The Mariamman Hindu Temple stands as a radiant testament to Saigon\'s timeless capacity for cultural inclusion. Within these cool colonnades, fragrant with rosewater and burning camphor, differences of ethnicity and dogma dissolve in a shared reverence for life\'s sacred mysteries."', 'epilogue: "The Mariamman Temple is a living reminder of Saigon\'s multicultural heritage. Over the decades, it has become a shared spiritual space where local Vietnamese, Chinese, and Indian visitors come together in common reverence."')
    ],

    "008": [
        ('subtitle: "Mastering the etiquette of 1,400 generational stalls, authentic silk identification, and the gentle art of respectful negotiation"', 'subtitle: "How to navigate 1,400 market stalls, distinguish handmade crafts from factory goods, and bargain with a smile"'),
        ('lead: "Shopping inside the vaulted avenues of Ben Thanh Market has never been a sterile commercial transaction. It is a graceful cultural dance between stallholder and traveler, where mutual respect, lighthearted wit, and a discerning eye transform the pursuit of handcrafted treasures into an unforgettable human connection."', 'lead: "Walking the interior aisles of Ben Thanh Market is an engaging experience: colorful silk rolls, fine lacquerware bowls, woven rattan bags, and aromatic tea and coffee beans stacked high in neat wooden bins. To enjoy your time here and secure quality souvenirs at reasonable prices, all it takes is knowing the layout of the four main gates and bargaining with good humor and genuine respect."'),
        ('## Bargaining with Grace: Cultural Guidelines', '## Bargaining with a Smile: Practical Etiquette & Tips')
    ],

    "009": [
        ('lead: "Above the pulsating kinetic currents of District 1’s shaded avenues, viewing Saigon from the open deck of a double-decker bus unlocks a completely transformed perspective. Gliding four meters above the street, colonial cornices, emerald tree canopies, and iconic landmarks like Ben Thanh Market reveal themselves in sweeping, cinematic continuity."', 'lead: "Riding the upper deck of an open-top double-decker bus offers an entirely fresh perspective on Ho Chi Minh City. Gliding four meters above the street along shaded boulevards, landmarks like Ben Thanh Market, the Saigon Opera House, and the Independence Palace come into view at canopy level, providing a comfortable, unhurried tour of District 1."'),
        ('subtitle: "Gliding 4 meters above urban avenues: Ba Son Bridge sunsets, French colonial silhouettes & Chợ Lớn historic enclaves"', 'subtitle: "A practical guide to routes, 2026 fares, and the best open-top views of colonial landmarks and city bridges"'),
        ('## Introduction: Saigon Unveiled from an Open Deck', '## Seeing Saigon from the Upper Deck'),
        ('## Curated Field Notes for the Discerning Traveler', '## Practical Tips & Seating Advice for Travelers')
    ],

    "010": [
        ('lead: "Tucked behind peeling ochre facades and shadowy, sun-dappled corridors within a ten-minute radius of Ben Thanh Market, modern Saigon’s most creative subculture quietly flourishes. Vintage residential walk-ups built during the colonial and mid-century modern eras have found vibrant rebirth as independent pour-over sanctuaries, artisanal ceramic workshops, and hidden record bars."', 'lead: "Wandering up the worn concrete staircases of vintage apartment buildings near Ben Thanh Market reveals one of Saigon\'s most distinctive cafe cultures. High-ceilinged colonial and mid-century residential flats have been converted into quiet coffee shops, where visitors can sit on narrow balconies above the street, listen to vinyl records, and enjoy slowly dripped Vietnamese coffee or specialty pour-overs."'),
        ('subtitle: "Ascending spiral cement staircases: Handcrafted specialty pour-overs, ceramic encaustic tiles & time-weathered balconies"', 'subtitle: "Finding quiet coffee spots hidden in vintage residential buildings along Le Loi, Ton That Dam, and Pasteur Streets"'),
        ('## Introduction: The Allure of Saigon’s Hidden Perches', '## The Charm of Saigon\'s Heritage Apartment Cafes'),
        ('## Adaptive Heritage: The Renaissance of Residential Blocks', '## How Old Residential Buildings Became Creative Spaces'),
        ('## Conscious Voyager Etiquette for Residential Walk-Ups', '## Visitor Etiquette in Residential Apartment Blocks')
    ],

    "011": [
        ('lead: "As equatorial twilight yields to indigo dusk, Saigon’s iconic District 1 undergoes an intoxicating nocturnal metamorphosis. Perched high above the animated kinetic currents of Quach Thi Trang Square or concealed behind disguised vintage barbershop mirrors, a refined constellation of rooftop lounges and clandestine speakeasies invites travelers to savor craft mixology inspired by native botanicals."', 'lead: "As evening falls and the Ben Thanh clock tower lights up against the twilight sky, rooftop venues around the market offer panoramic views across central District 1. High above street noise, you can enjoy cool cross-breezes, sip cocktails infused with local citrus and herbs, and watch the city\'s evening traffic trace bright lines along the boulevards below."'),
        ('subtitle: "Sipping artisanal botanical mixology aloft: 360-degree skyline vistas, subterranean jazz parlors & nocturnal elegance"', 'subtitle: "Where to enjoy evening cocktails, panoramic skyline views, and relaxed speakeasies around District 1"'),
        ('## Introduction: When Saigon Kindles Her Constellations', '## Saigon After Sunset: The Rooftop View'),
        ('## Terroir Mixology: The Rise of Vietnamese Craft Cocktails', '## Craft Cocktails with Local Flavors: Kumquat, Betel Leaf & Lotus Seeds'),
        ('## The Subterranean Realm: Hidden Alleyway Speakeasies', '## Hidden Speakeasies: Tucked-Away Bars in District 1 Alleys')
    ],

    "012": [
        ('lead: "For the discerning voyager, accommodation in Saigon is far more than a nocturnal resting place—it is the emotional anchor of the entire expedition. In the heritage precinct encircling Ben Thanh Market, an extraordinary portfolio of restored French colonial villas, mid-century modernist residences, and intimate design hotels offers sanctuary from the vibrant energy of District 1."', 'lead: "Choosing a boutique hotel near Ben Thanh Market puts you within walking distance of District 1\'s top cultural sites while offering a quiet, character-filled retreat. From restored French colonial villas with patterned cement tiles to sleek, contemporary design hotels tucked along side streets, these properties provide thoughtful hospitality and authentic local charm."'),
        ('subtitle: "Resting within living history: Repurposed shipyard timber, centennial French courtyards & rooftop infinity pools (2026)"', 'subtitle: "A curated selection of heritage boutique hotels, colonial villas, and quiet design stays within walking distance of the market"'),
        ('## Introduction: Hospitality Imbued with Heritage', '## Staying in Historic District 1: Character & Convenience'),
        ('## Core Hallmarks of a Bespoke Saigon Boutique Hotel', '## What Makes a Great Boutique Hotel in Central Saigon'),
        ('## Strategic Reservation Guidance for the Discerning Guest', '## Booking Advice & Room Selection Tips')
    ],

    "013": [
        ('lead: "Beyond the bustling souvenir stalls and rolled silks, Ben Thanh Market and its encircling boulevards form one of Southeast Asia\'s most captivating urban stages. From steaming morning cauldrons of freshwater crab noodles to moonlit strolls along pedestrianized esplanades, here are 15 curated experiences that capture the timeless magic of Saigon across four distinct diurnal windows."', 'lead: "Beyond its souvenir stalls, Ben Thanh Market and its surrounding streets offer a full day of diverse neighborhood experiences: savoring hot crab noodle soup for breakfast, admiring 1950s ceramic art above the main gates, wandering shaded pathways in September 23rd Park, and enjoying sizzling street food when night markets open along Phan Boi Chau Street."'),
        ('subtitle: "15 Curated Daytime Traditions, Gastronomic Rituals & Nocturnal Wonders Across 4 Time Windows"', 'subtitle: "15 Classic Experiences from Morning Coffee to Late-Night Charcoal Grills (2026 Guide)"'),
        ('## Introduction: Far More Than a Commodity Bazaar', '## Ben Thanh: More Than Just a Shopping Hall'),
        ('### 🌙 TIME WINDOW 4: Vibrant Nightfall & Gastronomic Revelry (19:00 – Late)', '### 🌙 TIME WINDOW 4: Street Food & Evening Rhythms (19:00 – Late)')
    ],

    "014": [
        ('lead: "Stepping into Saigon’s centennial market can feel overwhelming without advance intelligence. From decoding stall numbering systems to distinguishing between tourist quotes and fair street values, this master field handbook provides every operational protocol, opening hour, parking coordinates, and cultural etiquette needed to navigate Ben Thanh with effortless confidence."', 'lead: "Ben Thanh Market is a staple on almost every visitor\'s itinerary in Ho Chi Minh City. To make the most of your visit, a few practical tips go a long way: knowing when to visit to beat midday crowds, understanding how stalls are organized by the four main gates, locating secure parking basements, and negotiating with good humor."'),
        ('subtitle: "The Definitive Insider Field Handbook: Operating Hours, Stalls, Bargaining & 2026 Field Logistics"', 'subtitle: "Operating Hours, Stall Layouts, Bargaining Tips & Practical 2026 Advice"'),
        ('## Introduction: Stepping into Saigon\'s Beating Heart Like an Insider', '## Navigating Ben Thanh Market with Confidence'),
        ('## Master Bargaining Rules: The "Smiling Negotiation" Code', '## Bargaining with a Smile: Practical Tips for Respectful Negotiation'),
        ('epilogue: "Armed with cultural understanding and practical wisdom, Ben Thanh transforms from a bewildering maze into an open book of southern commerce and hospitality. Walk with curiosity, bargain with a smile, and savor the unforgettable tapestry of flavors and human connections waiting around every turn."', 'epilogue: "With a clear sense of how the market is organized and a friendly attitude toward vendors, Ben Thanh becomes an enjoyable, vibrant stop where you can chat with multi-generational shopkeepers, sample home-style dishes, and bring home memorable keepsakes."')
    ],

    "015": [
        ('lead: "While Ben Thanh Market is a cultural treasure, unwary travelers often face sleeve-pulling, aggressive price gouging, and sleight-of-hand cash swaps. Arm yourself with this comprehensive security manual covering the 7 most prevalent tourist traps, official 2026 price verification benchmarks, and emergency contact hotlines to ensure a safe, dignified exploration."', 'lead: "While Ben Thanh Market is generally safe and well-monitored, like any famous tourist market it has its share of inflated initial prices, pushy vendors, and opportunistic pickpockets in crowded aisles. This practical guide outlines common traveler pitfalls, verified benchmark prices for 2026, and straightforward safety habits for a hassle-free visit."'),
        ('subtitle: "7 Common Tourist Traps, Price Inflation Countermeasures & 2026 Personal Security Protocols"', 'subtitle: "7 Common Tourist Traps, Price Benchmarks & Essential Safety Tips (2026)"'),
        ('## Introduction: The Shadows Behind the Splendor of a Century-Old Bazaar', '## Staying Safe & Avoiding Price Inflation at Ben Thanh')
    ],

    "016": [
        ('lead: "Across the West Gate of Ben Thanh Market lies Saigon’s premier open currency exchange nexus: Ha Tam Gold Shop. Learn how to secure the city’s sharpest daily cash rates, understand unwritten banknote condition rules, and navigate cash transactions with absolute personal security in this definitive insider guide."', 'lead: "Located opposite the West Gate of Ben Thanh Market on Phan Chu Trinh Street, Ha Tam Gold Shop is one of the most reliable and widely used currency exchange counters in Ho Chi Minh City. With competitive daily rates and quick service, it is a convenient alternative to airport booths or banks. Here is a practical overview of how the exchange process works, currency condition guidelines, and basic safety tips."'),
        ('subtitle: "Insider Exchange Rates, Banknote Quality Rules & Security Guide at Ha Tam Gold Shop (2026)"', 'subtitle: "Competitive Rates, Banknote Quality Rules & Practical Safety Guide at Ha Tam (2026)"'),
        ('## Introduction: Saigon\'s Miniature Financial Street', '## Why Ha Tam Is Saigon\'s Go-To Currency Exchange'),
        ('Ask any seasoned expatriate, diplomat, or frequent international traveler where to secure the absolute best currency exchange rates in Ho Chi Minh City, and nine out of ten will point you to a modest gold boutique nestled at the corner of Nguyen An Ninh and Phan Chu Trinh streets directly across from Ben Thanh Market\'s West Gate: **Ha Tam Gold Shop** (*Tiệm vàng Hà Tâm*).', 'Ask local merchants, tour guides, or regular visitors where they exchange foreign currency in central Saigon, and most will direct you to Ha Tam Gold Shop at the corner of Nguyen An Ninh and Phan Chu Trinh streets, directly facing Ben Thanh Market\'s West Gate.')
    ],

    "017": [
        ('lead: "District 1’s dense urban grid makes finding legitimate parking a major headache. Navigate directly to 6 verified, surveillance-equipped parking basements and municipal lots encircling Ben Thanh Market, complete with official 2026 municipal price ceilings and clear steps to avoid rogue curbside operators."', 'lead: "Finding reliable vehicle parking in central District 1 can be frustrating due to busy traffic and unofficial curbside parking attendants charging inflated rates. This practical guide maps 6 legitimate, regulated parking basements and lots around Ben Thanh Market for both motorbikes and cars, complete with official 2026 tariff benchmarks and directions."'),
        ('subtitle: "6 Official Basements, Regulated Municipal Rates & Curbside Scam Prevention (2026 Master Guide)"', 'subtitle: "6 Regulated Parking Basements, Official Rates & Curbside Scam Prevention (2026 Guide)"'),
        ('## Introduction: The Battle for Parking in Saigon’s Heritage Heart', '## Where to Park Near Ben Thanh Market Safely and at Official Rates')
    ],

    "018": [
        ('lead: "Arriving at Tan Son Nhat Airport (SGN) can be daunting with unlicensed taxi touts and complex terminal pickup lanes. Here is your definitive transfer blueprint covering Express Bus 109, verified app-based ride-hailing, metered airport taxis, and private car services—complete with 2026 fares, travel times, and traffic navigation tactics."', 'lead: "The distance from Tan Son Nhat International Airport (SGN) to Ben Thanh Market in District 1 is approximately 7 to 8 kilometers. Depending on your arrival hour, luggage, and budget, you can choose between the direct Bus 109 express, app-based ride-hailing (Grab, Be, Xanh SM), or metered airport taxis. Here is a clear comparison of all 5 transfer options, complete with realistic travel times and tips for navigating terminal pickup lanes."'),
        ('subtitle: "5 Best Transfer Options from SGN to District 1: Express Bus 109, Reputable Cabs & VIP Private Cars (2026)"', 'subtitle: "5 Best Ways from SGN to District 1: Express Bus 109, Grab & Verified Taxis (2026 Guide)"'),
        ('## Introduction: Your Gateway Ride into Saigon’s Vibrant Heart', '## Getting from Tan Son Nhat Airport to Ben Thanh Market')
    ]
}

def apply_replacements():
    # Process Vietnamese
    for d in VN_DIRS:
        if not os.path.exists(d):
            continue
        for fname in os.listdir(d):
            if not fname.endswith(".md"):
                continue
            prefix = fname[:3]
            if prefix in VN_REPLACEMENTS:
                fpath = os.path.join(d, fname)
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
                orig = content
                for old, new in VN_REPLACEMENTS[prefix]:
                    if old in content:
                        content = content.replace(old, new)
                if content != orig:
                    with open(fpath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Applied VN rewrites: {fname} in {os.path.basename(d)}")

    # Process English
    for d in EN_DIRS:
        if not os.path.exists(d):
            continue
        for fname in os.listdir(d):
            if not fname.endswith(".md"):
                continue
            prefix = fname[:3]
            if prefix in EN_REPLACEMENTS:
                fpath = os.path.join(d, fname)
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
                orig = content
                for old, new in EN_REPLACEMENTS[prefix]:
                    if old in content:
                        content = content.replace(old, new)
                if content != orig:
                    with open(fpath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Applied EN rewrites: {fname} in {os.path.basename(d)}")

def update_batch_convert():
    for script_path in [
        "/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.cjs",
        "/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.js"
    ]:
        if not os.path.exists(script_path):
            continue
        with open(script_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        orig = content
        for prefix, reps in EN_REPLACEMENTS.items():
            for old, new in reps:
                if old in content:
                    content = content.replace(old, new)
        
        if content != orig:
            with open(script_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated metadata in {os.path.basename(script_path)}")

if __name__ == "__main__":
    print("Applying specific editorial rewrites...")
    apply_replacements()
    print("Updating batch_convert scripts...")
    update_batch_convert()
    print("Running batch_convert.cjs to compile demo-articles.ts...")
    subprocess.run(["node", "/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.cjs"], check=True)
    print("All tasks completed successfully!")
