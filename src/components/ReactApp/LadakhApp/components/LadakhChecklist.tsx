import { useState } from 'react';
import { motion } from 'motion/react';
import { Footprints, Flame, Check, RefreshCw, ThermometerSun, Pill, Coffee, ShieldAlert, Activity } from 'lucide-react';

export default function LadakhChecklist() {
  const [selectedItems, setSelectedItems] = useState<string[]>(['water', 'sleep']); 
  const [explorerType, setExplorerType] = useState<'rugged' | 'curator' | 'comfy'>('curator');

  const fullGear = [
    { id: 'water', vietnameseName: 'Uống Thật Nhiều Nước', necessity: 'critical', description: 'Uống liên tục từng ngụm nhỏ để chống mất nước và duy trì oxy.', iconName: 'Coffee' },
    { id: 'medicine', vietnameseName: 'Thuốc Say Độ Cao', necessity: 'critical', description: 'Uống theo liều lượng bác sĩ để cơ thể không bị sốc.', iconName: 'Pill' },
    { id: 'sleep', vietnameseName: 'Ngủ Trưa 1-2 Tiếng', necessity: 'critical', description: 'Cực kỳ quan trọng ngay khi nhận phòng để hồi phục thể lực.', iconName: 'ThermometerSun' },
    { id: 'no_shower', vietnameseName: 'Không Tắm Ngày Đầu', necessity: 'recommended', description: 'Giữ ấm cơ thể, tránh tắm nước nóng trong phòng kín để ngừa ngất xỉu.', iconName: 'Flame' },
    { id: 'walk_slow', vietnameseName: 'Đi Nhẹ, Nói Khẽ', necessity: 'recommended', description: 'Hạn chế nhảy nhót chụp ảnh, chỉ đi dạo chợ Leh thong thả.', iconName: 'Footprints' },
  ];

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const getSurvivalRate = () => {
    // 5 items, each gives 20 base points
    const itemPoints = selectedItems.length * 20; 
    
    let multiplier = 1;
    if (explorerType === 'rugged') multiplier = 0.5; // Max 50%
    if (explorerType === 'curator') multiplier = 0.8; // Max 80%
    if (explorerType === 'comfy') multiplier = 1.0; // Max 100%

    return Math.min(100, Math.max(0, Math.round(itemPoints * multiplier)));
  };

  const getSurvivalStatus = (rate: number) => {
    if (rate >= 80) return { text: 'Thích Nghi Hoàn Hảo', color: 'text-emerald-600', desc: 'Tuyệt vời! Cơ thể bạn đang được nâng niu đúng cách. Hôm sau sẽ khỏe re để đi chơi xa.' };
    if (rate >= 50) return { text: 'Tạm Ổn, Cần Theo Dõi', color: 'text-amber-600', desc: 'Bạn cần chú ý nghỉ ngơi thêm. Hãy đánh dấu thêm các hành động quan trọng để đảm bảo an toàn.' };
    return { text: 'Nguy Cơ Say Độ Cao (AMS)', color: 'text-red-600', desc: 'Cảnh báo! Lịch trình của bạn quá sức cho ngày đầu. Bạn có nguy cơ rất cao bị đau đầu, nôn mửa.' };
  };

  const survivalRate = getSurvivalRate();
  const statusInfo = getSurvivalStatus(survivalRate);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Footprints': return <Footprints className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'ThermometerSun': return <ThermometerSun className="w-5 h-5" />;
      case 'Pill': return <Pill className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      default: return <Check className="w-5 h-5" />;
    }
  };

  return (
    <div id="ladakh-survival-checklist" className="bg-white rounded-3xl border border-gray-200 p-5 md:p-8 text-gray-800 text-left relative overflow-hidden shadow-sm my-12 font-sans max-w-4xl mx-auto">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-gray-100 mb-6 gap-3">
        <div>
          <span className="font-sans text-xs tracking-widest text-amber-700 font-bold uppercase block mb-1">
            Ladakh Acclimatization
          </span>
          <h4 className="font-serif text-xl md:text-2xl text-gray-900 font-bold m-0 tracking-tight">
            Chỉ Số Thích Nghi Ngày Đầu Tiên
          </h4>
        </div>

        <button 
          onClick={() => setSelectedItems(fullGear.map(g => g.id))}
          className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-1.5 bg-gray-50 p-2 px-4 rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition-all shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>CHỌN ĐẦY ĐỦ</span>
        </button>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Horizontal Score Banner */}
        <div className="bg-[#F9FAFB] rounded-2xl border border-gray-200 p-5 flex flex-col md:flex-row items-center justify-between shadow-inner gap-6">
           
           {/* Left side: Score */}
           <div className="flex items-center gap-6 w-full md:w-auto">
             <div className="flex flex-col items-center shrink-0">
               <span className={`text-4xl md:text-5xl font-black font-sans tracking-tighter ${
                 survivalRate >= 80 ? 'text-emerald-500' : survivalRate >= 50 ? 'text-amber-500' : 'text-red-500'
               }`}>
                 {survivalRate}%
               </span>
               <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest block font-bold mt-1">
                 Độ An Toàn
               </span>
             </div>
             
             <div className="flex-1 w-full md:w-56 space-y-2">
                <span className={`font-sans text-xs uppercase tracking-wider font-extrabold ${statusInfo.color} block`}>
                  {statusInfo.text}
                </span>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full ${
                      survivalRate >= 80 ? 'bg-emerald-500' : survivalRate >= 50 ? 'bg-amber-400' : 'bg-red-500'
                    }`}
                    initial={{ width: '0%' }}
                    animate={{ width: `${survivalRate}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
             </div>
           </div>

           {/* Right side: Type Selector */}
           <div className="flex-1 md:pl-6 md:border-l border-gray-200 w-full">
             <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-2">
               Bạn định vận động thế nào?
             </span>
             <div className="grid grid-cols-3 gap-2">
               <button
                 onClick={() => setExplorerType('rugged')}
                 className={`py-2 px-1 rounded-xl font-sans text-[10px] uppercase tracking-wider text-center font-semibold transition-colors border ${
                   explorerType === 'rugged' ? 'bg-red-50 text-red-700 border-red-200 shadow-sm' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                 }`}
               >
                 Đi Chơi Xa
               </button>
               <button
                 onClick={() => setExplorerType('curator')}
                 className={`py-2 px-1 rounded-xl font-sans text-[10px] uppercase tracking-wider text-center font-semibold transition-colors border ${
                   explorerType === 'curator' ? 'bg-amber-50 text-amber-700 border-amber-300 shadow-sm' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                 }`}
               >
                 Dạo Phố
               </button>
               <button
                 onClick={() => setExplorerType('comfy')}
                 className={`py-2 px-1 rounded-xl font-sans text-[10px] uppercase tracking-wider text-center font-semibold transition-colors border ${
                   explorerType === 'comfy' ? 'bg-emerald-50 text-emerald-700 border-emerald-300 shadow-sm' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                 }`}
               >
                 Ngủ Khách Sạn
               </button>
             </div>
           </div>
        </div>

        {/* Advice Quote */}
        <div className={`border-l-4 p-4 rounded-r-xl ${
          survivalRate >= 80 ? 'bg-emerald-50 border-emerald-400 text-emerald-900' : 
          survivalRate >= 50 ? 'bg-amber-50 border-amber-400 text-amber-900' : 
          'bg-red-50 border-red-400 text-red-900'
        }`}>
           <p className="font-serif text-[15px] leading-relaxed italic m-0 font-medium">
             "{statusInfo.desc}"
           </p>
        </div>

        {/* Gear Checklist */}
        <div className="space-y-3 mt-4">
          {fullGear.map((gear) => {
            const checked = selectedItems.includes(gear.id);
            return (
              <div
                key={gear.id}
                onClick={() => toggleItem(gear.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                  checked 
                    ? 'bg-amber-50/50 border-amber-200' 
                    : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl transition-colors ${
                    checked ? 'bg-amber-600 text-white shadow-sm' : 'bg-gray-50 text-gray-500 group-hover:text-gray-600 group-hover:bg-gray-100'
                  }`}>
                    {renderIcon(gear.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-sans font-bold text-[15px] text-gray-900 block">
                        {gear.vietnameseName}
                      </span>
                      <span className={`text-[10px] font-sans font-medium px-2 py-0.5 rounded-md ${
                        gear.necessity === 'critical' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {gear.necessity === 'critical' ? 'QUAN TRỌNG' : 'NÊN LÀM'}
                      </span>
                    </div>
                    <p className="font-serif italic text-[14px] leading-relaxed text-gray-600 m-0">
                      {gear.description}
                    </p>
                  </div>
                </div>

                <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all shrink-0 ml-4 ${
                  checked ? 'bg-amber-500 border-amber-500 text-white' : 'border-gray-300 bg-gray-50'
                }`}>
                  {checked && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
