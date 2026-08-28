import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Footprints, Flame, Radio, Eye, Check, RefreshCw, Sparkles, Award } from 'lucide-react';
import { LADAKH_GEAR } from '../data/ladakhData';
import type { SurvivalGearItem } from '../types';

export default function SurvivalChecklist() {
  const [selectedItems, setSelectedItems] = useState<string[]>(['parka']); // Default starter item
  const [explorerType, setExplorerType] = useState<'rugged' | 'curator' | 'comfy'>('curator');

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const getSurvivalRate = () => {
    // Math logic based on selections and explorerType multiplier
    const itemPoints = selectedItems.length * 20;
    
    let multiplier = 1;
    if (explorerType === 'rugged') multiplier = 0.85; // Less gear, high risk
    if (explorerType === 'curator') multiplier = 1.0; // Perfect balance
    if (explorerType === 'comfy') multiplier = 1.15; // High comfort, safe

    const baseScore = Math.min(100, Math.round(itemPoints * multiplier));
    
    // Critical alert items check (parka, crampons, spray)
    const hasParka = selectedItems.includes('parka');
    const hasSpray = selectedItems.includes('flair');
    const hasCrampons = selectedItems.includes('crampons');
    
    if (selectedItems.length === 0) return 0;
    
    let penalty = 0;
    if (!hasParka) penalty += 25; // Dead cold
    if (!hasCrampons) penalty += 15; // Fails to hook ice
    if (!hasSpray) penalty += 15; // Grizzly bear factor

    return Math.max(5, baseScore - penalty);
  };

  const getSurvivalStatus = (rate: number) => {
    if (rate >= 85) return { text: 'Bảo Toàn Tuyệt Đối (Polar Elite Warrior)', color: 'text-emerald-400', desc: 'Thương đoàn sẵn sàng chinh chinh vạn dặm Taiga bão bùng.' };
    if (rate >= 55) return { text: 'Khả Thi Thôi (Vừa Đủ Sống Sót)', color: 'text-amber-400', desc: 'Sẽ gặp không ít cam go và cóng tủi dọc đèo White Pass.' };
    return { text: 'Nguy Hiểm Cực Đoan (Tử Địa Băng Giá)', color: 'text-red-400', desc: 'Không thể sống sót quá 48 tiếng nếu không trang bị Parka lông cách nhiệt!' };
  };

  const survivalRate = getSurvivalRate();
  const statusInfo = getSurvivalStatus(survivalRate);

  // Helper render for icons
  const renderIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Footprints': return <Footprints className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Radio': return <Radio className="w-5 h-5" />;
      default: return <Eye className="w-5 h-5" />;
    }
  };

  return (
    <div id="polar-survival-suitcase" className="bg-[#0A0D0F] rounded-3xl border border-white/10 p-5 md:p-6 text-white text-left relative overflow-hidden">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 mb-5 gap-3">
        <div>
          <span className="font-mono text-[13px] md:text-[11px] md:text-[9px] tracking-[0.4em] text-cyan-400 font-extrabold uppercase block">
            ARNATIC POLAR CABIN EQUIPMENT
          </span>
          <h4 className="font-prata text-md md:text-lg uppercase text-white font-normal mt-0.5 tracking-wide">
            Hành Trang Ngăn Cơn Lạnh Cực Bắc
          </h4>
        </div>

        <button 
          onClick={() => setSelectedItems(['parka', 'crampons', 'flair', 'gps', 'goggles'])}
          className="font-mono text-[12px] md:text-[10px] md:text-[8.5px] uppercase tracking-widest text-[#A8D1DB]/80 flex items-center gap-1 bg-white/5 p-1 px-3.5 rounded-lg border border-white/10 hover:bg-white/10 cursor-pointer transition-all shrink-0"
        >
          <RefreshCw className="w-3 h-3" />
          <span>XẾP ĐẦY TOA</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Gear Checklist (6 cols) */}
        <div className="lg:col-span-7 space-y-3.5">
          <span className="font-mono text-[12px] md:text-[10px] md:text-[8px] text-stone-400 uppercase tracking-widest block font-bold">
            CHỌN VẬT TƯ THU NIÊN TRƯỚC HÀNH TRÌNH:
          </span>

          <div className="space-y-3">
            {LADAKH_GEAR.map((gear) => {
              const checked = selectedItems.includes(gear.id);
              return (
                <div
                  key={gear.id}
                  onClick={() => toggleItem(gear.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    checked 
                      ? 'bg-emerald-950/40 border-emerald-500/30' 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl transition-colors ${
                      checked ? 'bg-emerald-800 text-emerald-200' : 'bg-white/5 text-stone-400 group-hover:text-white'
                    }`}>
                      {renderIcon(gear.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-sans font-bold text-sm md:text-xs text-white block">
                          {gear.vietnameseName}
                        </span>
                        <span className={`text-[11px] md:text-[9px] md:text-[7.5px] font-mono p-0.5 px-2 rounded-md ${
                          gear.necessity === 'critical' ? 'bg-red-950 text-red-300 border border-red-500/20' : 'bg-slate-900 text-slate-300'
                        }`}>
                          {gear.necessity === 'critical' ? 'ĐẠO CỤ TUYỆT THẬT' : 'KHUYÊN DÙNG'}
                        </span>
                      </div>
                      <p className="font-serif italic text-[15px] md:text-[13px] md:text-[11px] text-stone-400 mt-0.5">
                        {gear.description}
                      </p>
                    </div>
                  </div>

                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                    checked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-white/20'
                  }`}>
                    {checked && <Check className="w-4.5 h-4.5 stroke-[2.5]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic score calculator and advice (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-white/5 p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-[12px] md:text-[10px] md:text-[8px] text-[#A8D1DB] uppercase tracking-widest block font-bold">
              BẢNG PHÂN TÍCH TỶ LỆ SỐNG SÓT (POLAR COLD ANALYSER)
            </span>

            {/* Circular score display */}
            <div className="flex items-baseline gap-1 relative py-1.5 justify-center md:justify-start">
              <span className={`text-6xl font-black font-mono tracking-tighter ${
                survivalRate >= 80 ? 'text-emerald-400' : survivalRate >= 50 ? 'text-amber-300' : 'text-red-400'
              }`}>
                {survivalRate}%
              </span>
              <span className="text-sm md:text-xs text-stone-400 font-mono tracking-widest uppercase">Chỉ số sinh khí</span>
            </div>

            {/* Progress line */}
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full ${
                  survivalRate >= 80 ? 'bg-emerald-400' : survivalRate >= 50 ? 'bg-amber-300' : 'bg-red-500'
                }`}
                initial={{ width: '0%' }}
                animate={{ width: `${survivalRate}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="space-y-1.5 border-t border-white/5 pt-4">
              <span className={`font-mono text-[13px] md:text-[11px] md:text-[9px] uppercase tracking-wider font-extrabold ${statusInfo.color}`}>
                Trạng thái: {statusInfo.text}
              </span>
              <p className="font-serif text-[16px] md:text-[14px] md:text-[12.5px] leading-relaxed text-stone-300 italic">
                "{statusInfo.desc}"
              </p>
            </div>
          </div>

          {/* Quick interactive Selector for travel style style */}
          <div className="pt-4 border-t border-white/5 mt-4 space-y-2">
            <span className="font-mono text-[11px] md:text-[9px] md:text-[7.5px] text-stone-400 uppercase tracking-widest block font-bold">
              LOẠI HÌNH ĐOÀN LỮ HÀNH (CARAVAN SELECTION):
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setExplorerType('rugged')}
                className={`py-1.5 rounded font-mono text-[12px] md:text-[10px] md:text-[8px] uppercase tracking-wider text-center cursor-pointer transition-colors ${
                  explorerType === 'rugged' ? 'bg-red-950 text-red-300 border border-red-500/20' : 'bg-white/5 text-stone-400 hover:text-white'
                }`}
              >
                Du Mục Bụi
              </button>
              <button
                onClick={() => setExplorerType('curator')}
                className={`py-1.5 rounded font-mono text-[12px] md:text-[10px] md:text-[8px] uppercase tracking-wider text-center cursor-pointer transition-colors ${
                  explorerType === 'curator' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/20' : 'bg-white/5 text-stone-400 hover:text-white'
                }`}
              >
                Nhà Giám Tuyển
              </button>
              <button
                onClick={() => setExplorerType('comfy')}
                className={`py-1.5 rounded font-mono text-[12px] md:text-[10px] md:text-[8px] uppercase tracking-wider text-center cursor-pointer transition-colors ${
                  explorerType === 'comfy' ? 'bg-blue-950 text-blue-300 border border-blue-500/20' : 'bg-white/5 text-stone-400 hover:text-white'
                }`}
              >
                Dưỡng Thưởng
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
