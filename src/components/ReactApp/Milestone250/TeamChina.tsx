import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 'thinh-tran',
    name: 'Trần Quốc Thịnh',
    role: 'Phụ trách quản lý và phát triển kinh doanh thị trường Trung Quốc.',
    image: 'https://media.fittour.vn/uploads/2024/05/trip-planner-tran-thinh.webp',
    badge: 'KIÊM HDV',
    badgeType: 'orange'
  },
  {
    id: 'thuy-an',
    name: 'Đoàn Thúy An',
    role: 'Chuyên viên tư vấn thị trường Trung Quốc.',
    image: 'https://media.fittour.vn/uploads/doan-thuy-an-fittour.webp',
    badge: null,
    badgeType: null
  },
  {
    id: 'quynh-phuong',
    name: 'Nguyễn Quỳnh Phương',
    role: 'Chuyên viên tư vấn thị trường Trung Quốc.',
    image: 'https://media.fittour.vn/uploads/nguyen-quynh-phuong-fittour.webp',
    badge: 'NV CỦA NĂM 2025',
    badgeType: 'yellow'
  },
  {
    id: 'hung-thinh',
    name: 'Nguyễn Hưng Thịnh',
    role: 'Chuyên viên tư vấn thị trường Trung Quốc.',
    image: 'https://media.fittour.vn/uploads/hdv-nguyen-hung-thinh.webp',
    badge: 'KIÊM HDV',
    badgeType: 'orange'
  },
  {
    id: 'my-duyen',
    name: 'Lâm Mỹ Duyên',
    role: 'Chuyên viên tư vấn thị trường Trung Quốc.',
    image: 'https://media.fittour.vn/uploads/lam-my-duyen-fittour.webp',
    badge: null,
    badgeType: null
  },
  {
    id: 'dong-hai',
    name: 'Nguyễn Hồ Đông Hải',
    role: 'Điều hành dịch vụ và tour thị trường Trung Quốc.',
    image: 'https://media.fittour.vn/uploads/2025/05/hdv-nguyen-ho-dong-hai-fittour.webp',
    badge: 'KIÊM HDV',
    badgeType: 'orange'
  },
  {
    id: 'minh-dung',
    name: 'Trần Minh Dũng',
    role: 'Điều hành dịch vụ và tour thị trường Trung Quốc.',
    image: 'https://media.fittour.vn/uploads/tran-minh-dung-fittour.webp',
    badge: null,
    badgeType: null
  }
];

export default function TeamChina() {
  return (
    <section className="py-24 px-4 sm:px-12 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-red-900 font-bold block mb-4">ĐỘI NGŨ CHUYÊN GIA</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Những Con Người Làm Nên<br/>Hành Trình Trung Hoa</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => {
            const isOrange = member.badgeType === 'orange';
            const isYellow = member.badgeType === 'yellow';
            
            const cardBorder = isOrange ? 'border-orange-500' : isYellow ? 'border-amber-400' : 'border-stone-100';
            const imageRing = isYellow ? 'ring-4 ring-amber-400 ring-offset-4' : 'shadow-md';
            const badgeBg = isOrange ? 'bg-[#d94814]' : isYellow ? 'bg-amber-500' : '';

            return (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white rounded-3xl p-8 flex flex-col items-center text-center border shadow-sm transition-all duration-300 hover:shadow-lg ${cardBorder}`}
              >
                {/* Badge */}
                {member.badge && (
                  <div className={`absolute -top-3 right-6 px-3 py-1 text-[10px] font-bold text-white uppercase rounded-full shadow-sm z-10 ${badgeBg}`}>
                    {member.badge}
                  </div>
                )}
                
                {/* Image */}
                <div className="relative mb-6">
                  <div className={`w-32 h-32 rounded-full overflow-hidden ${imageRing}`}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-stone-900 mb-3">{member.name}</h3>
                <p className="text-sm text-stone-600 leading-relaxed font-medium">
                  {member.role}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
