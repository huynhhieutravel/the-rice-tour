import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, CreditCard, ThermometerSnowflake, Footprints, Droplets, Pill, Plug, AlertTriangle, RefreshCw, Check, Sun, Coffee, ChevronDown } from 'lucide-react';

export default function AlaskaBaggageChecklist() {
  const [selectedItems, setSelectedItems] = useState<string[]>(['passport', 'clothing']); 
  const [explorerType, setExplorerType] = useState<'minimal' | 'balanced' | 'prepared'>('balanced');
  const [isExpanded, setIsExpanded] = useState(false);

  const fullGear = [
    { id: 'passport', vietnameseName: 'Giấy Tờ Quan Trọng', necessity: 'critical', description: 'Hộ chiếu, vé máy bay (nếu tự bay), ảnh 5x5 nền trắng in sẵn. Ngoại tệ & thẻ thanh toán quốc tế.', iconName: 'FileText' },
    { id: 'clothing', vietnameseName: 'Trang Phục Giữ Ấm', necessity: 'critical', description: 'Áo khoác chống gió/nước (đi tàu/trực thăng), áo giữ nhiệt lớp trong, quần dài nhanh khô. Mũ len, khăn choàng mỏng & găng tay nhẹ.', iconName: 'ThermometerSnowflake' },
    { id: 'shoes', vietnameseName: 'Giày Dép & Vớ', necessity: 'critical', description: 'Giày thể thao/trekking chống trượt, boots cổ cao chống nước (cho ngày đi rừng) và vớ chân dày, cổ cao.', iconName: 'Footprints' },
    { id: 'toiletries', vietnameseName: 'Vệ Sinh Cá Nhân', necessity: 'recommended', description: 'Bàn chải, lược, khăn mặt (vì lý do môi trường KS có thể không có sẵn). Xịt côn trùng, gel rửa tay, khăn giấy/ướt.', iconName: 'Droplets' },
    { id: 'skincare', vietnameseName: 'Bảo Vệ Da & Mắt', necessity: 'recommended', description: 'Kem chống nắng, kính mát. Son dưỡng môi, kem dưỡng ẩm/xịt khoáng vì không khí Alaska khá khô.', iconName: 'Sun' },
    { id: 'medicine', vietnameseName: 'Thuốc Cá Nhân', necessity: 'critical', description: 'Thuốc đặc trị cá nhân và các loại thông dụng (cảm cúm, đau đầu, say xe, đau bụng).', iconName: 'Pill' },
    { id: 'electronic', vietnameseName: 'Điện Tử & Tiện Ích', necessity: 'recommended', description: 'Sạc dự phòng, bình nước cá nhân. Ổ cắm chuyển đổi loại A/B (Mỹ dùng điện 110-120V, 60Hz).', iconName: 'Plug' },
    { id: 'food', vietnameseName: 'Đồ Ăn Nhẹ', necessity: 'critical', description: 'Mì tôm, đồ ăn nhẹ dọc đường. LƯU Ý HẢI QUAN: Cấm tuyệt đối mang thực phẩm từ thịt (khô bò, khô gà...) và trái cây tươi.', iconName: 'AlertTriangle' },
  ];

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const getReadinessRate = () => {
    const itemPoints = selectedItems.length * 12.5; 
    let multiplier = 1;
    if (explorerType === 'minimal') multiplier = 0.6; 
    if (explorerType === 'balanced') multiplier = 0.8; 
    if (explorerType === 'prepared') multiplier = 1.0; 
    return Math.min(100, Math.max(0, Math.round(itemPoints * multiplier)));
  };

  const getReadinessStatus = (rate: number) => {
    if (rate >= 80) return { text: 'Sẵn Sàng Khởi Hành', color: 'text-emerald-600', desc: 'Tuyệt vời! Hành lý của bạn đã chuẩn bị rất đầy đủ và an toàn cho chuyến đi Alaska.' };
    if (rate >= 50) return { text: 'Tạm Ổn, Cần Soát Lại', color: 'text-amber-600', desc: 'Hãy kiểm tra lại các mục QUAN TRỌNG (đặc biệt là giấy tờ, thuốc men và quy định Hải Quan Mỹ).' };
    return { text: 'Thiếu Sót Nhiều', color: 'text-red-600', desc: 'Cảnh báo! Bạn đang thiếu nhiều vật dụng thiết yếu hoặc chưa kiểm tra kỹ quy định cấm nhập cảnh.' };
  };

  const readinessRate = getReadinessRate();
  const statusInfo = getReadinessStatus(readinessRate);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-5 h-5" />;
      case 'Footprints': return <Footprints className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Pill': return <Pill className="w-5 h-5" />;
      case 'Plug': return <Plug className="w-5 h-5" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      default: return <Check className="w-5 h-5" />;
    }
  };

  return (
    <div id="alaska-baggage-checklist" className="bg-white rounded-3xl border border-gray-200 text-gray-800 text-left relative overflow-hidden shadow-sm my-12 font-sans max-w-4xl mx-auto transition-all">
      
      {/* Header - Click to toggle */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between p-5 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors select-none group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 shadow-sm text-brand-600 group-hover:scale-105 transition-transform">
            <Check className="w-6 h-6" />
          </div>
          <div>
            <span className="font-sans text-xs tracking-widest text-brand-600 font-bold uppercase block mb-1">
              Baggage Preparation
            </span>
            <h4 className="font-serif text-xl md:text-2xl text-gray-900 font-bold m-0 tracking-tight">
              Checklist Chuẩn Bị Hành Lý
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isExpanded && (
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-sans text-xs font-bold text-gray-500 tracking-wider">TIẾN ĐỘ:</span>
              <span className={`font-sans font-black text-lg ${readinessRate >= 80 ? 'text-emerald-500' : readinessRate >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                {readinessRate}%
              </span>
            </div>
          )}
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 group-hover:bg-gray-100 transition-colors">
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-8 md:pb-8 border-t border-gray-100 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
                <p className="text-gray-500 text-[14px] font-medium m-0">
                  Hãy tick chọn những món đồ bạn đã chuẩn bị để kiểm tra mức độ sẵn sàng.
                </p>
                <button 
                  onClick={() => setSelectedItems(fullGear.map(g => g.id))}
                  className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-1.5 bg-gray-50 p-2 px-4 rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition-all shrink-0 w-full sm:w-auto justify-center"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>CHỌN ĐẦY ĐỦ</span>
                </button>
              </div>

              <div className="flex flex-col gap-6">

                {/* Gear Checklist */}
                <div className="space-y-3">
                  {fullGear.map((gear) => {
                    const checked = selectedItems.includes(gear.id);
                    return (
                      <div
                        key={gear.id}
                        onClick={() => toggleItem(gear.id)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                          checked 
                            ? gear.necessity === 'critical' ? 'bg-brand-50/50 border-brand-200' : 'bg-blue-50/50 border-blue-200'
                            : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl transition-colors ${
                            checked 
                              ? gear.necessity === 'critical' ? 'bg-brand-600 text-white shadow-sm' : 'bg-blue-600 text-white shadow-sm' 
                              : 'bg-gray-50 text-gray-500 group-hover:text-gray-600 group-hover:bg-gray-100'
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
                                {gear.necessity === 'critical' ? 'QUAN TRỌNG' : 'NÊN MANG'}
                              </span>
                            </div>
                            <p className="font-serif italic text-[14px] leading-relaxed text-gray-600 m-0">
                              {gear.description}
                            </p>
                          </div>
                        </div>

                        <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all shrink-0 ml-4 ${
                          checked 
                            ? gear.necessity === 'critical' ? 'bg-brand-500 border-brand-500 text-white' : 'bg-blue-500 border-blue-500 text-white' 
                            : 'border-gray-300 bg-gray-50'
                        }`}>
                          <Check className={`w-3.5 h-3.5 ${checked ? 'opacity-100' : 'opacity-0 text-gray-300 group-hover:opacity-100'}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Horizontal Score Banner */}
                <div className="bg-[#F9FAFB] rounded-2xl border border-gray-200 p-5 flex flex-col md:flex-row items-center justify-between shadow-inner gap-6 mt-4">
                   <div className="flex items-center gap-6 w-full md:w-auto">
                     <div className="flex flex-col items-center shrink-0">
                       <span className={`text-4xl md:text-5xl font-black font-sans tracking-tighter ${
                         readinessRate >= 80 ? 'text-emerald-500' : readinessRate >= 50 ? 'text-amber-500' : 'text-red-500'
                       }`}>
                         {readinessRate}%
                       </span>
                       <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest block font-bold mt-1">
                         Sẵn Sàng
                       </span>
                     </div>
                     
                     <div className="flex-1 w-full md:w-56 space-y-2">
                        <span className={`font-sans text-xs uppercase tracking-wider font-extrabold ${statusInfo.color} block`}>
                          {statusInfo.text}
                        </span>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${
                              readinessRate >= 80 ? 'bg-emerald-500' : readinessRate >= 50 ? 'bg-amber-400' : 'bg-red-500'
                            }`}
                            initial={{ width: '0%' }}
                            animate={{ width: `${readinessRate}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                     </div>
                   </div>

                   <div className="flex-1 md:pl-6 md:border-l border-gray-200 w-full">
                     <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-2">
                       Phong cách chuẩn bị
                     </span>
                     <div className="grid grid-cols-3 gap-2">
                       <button
                         onClick={() => setExplorerType('minimal')}
                         className={`py-2 px-1 rounded-xl font-sans text-[10px] uppercase tracking-wider text-center font-semibold transition-colors border ${
                           explorerType === 'minimal' ? 'bg-brand-50 text-brand-700 border-brand-200 shadow-sm' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                         }`}
                       >
                         Gọn Nhẹ
                       </button>
                       <button
                         onClick={() => setExplorerType('balanced')}
                         className={`py-2 px-1 rounded-xl font-sans text-[10px] uppercase tracking-wider text-center font-semibold transition-colors border ${
                           explorerType === 'balanced' ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-sm' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                         }`}
                       >
                         Đủ Dùng
                       </button>
                       <button
                         onClick={() => setExplorerType('prepared')}
                         className={`py-2 px-1 rounded-xl font-sans text-[10px] uppercase tracking-wider text-center font-semibold transition-colors border ${
                           explorerType === 'prepared' ? 'bg-emerald-50 text-emerald-700 border-emerald-300 shadow-sm' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                         }`}
                       >
                         Chu Đáo
                       </button>
                     </div>
                   </div>
                </div>

                {/* Advice Quote */}
                <div className={`border-l-4 p-4 rounded-r-xl ${
                  readinessRate >= 80 ? 'bg-emerald-50 border-emerald-400 text-emerald-900' : 
                  readinessRate >= 50 ? 'bg-amber-50 border-amber-400 text-amber-900' : 
                  'bg-red-50 border-red-400 text-red-900'
                }`}>
                   <p className="font-serif text-[15px] leading-relaxed italic m-0 font-medium">
                     "{statusInfo.desc}"
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
