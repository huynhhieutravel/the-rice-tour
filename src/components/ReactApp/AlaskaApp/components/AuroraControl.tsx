import { useRef, useEffect, useState } from 'react';
import { Sparkles, Sun, Star, Zap, EyeOff, Eye } from 'lucide-react';

export default function AuroraControl({ onUpdateBackground }: { onUpdateBackground?: (bgStyle: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const [speed, setSpeed] = useState<number>(0.15);
  const [intensity, setIntensity] = useState<number>(0.55);
  const [colorMode, setColorMode] = useState<'emerald' | 'purple' | 'dual'>('emerald');
  const [starsDensity, setStarsDensity] = useState<number>(80);
  const [showCanvasInBackdrop, setShowCanvasInBackdrop] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = 250);

    // Track resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 400;
      height = canvas.height = 250;
    };
    window.addEventListener('resize', handleResize);

    // Pre-generate stars
    const stars: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * 1200,
        y: Math.random() * 250,
        r: Math.random() * 1.2,
        alpha: Math.random(),
        speed: 0.005 + Math.random() * 0.015,
      });
    }

    let time = 0;

    const render = () => {
      ctx.fillStyle = '#060A0C'; // Polar night dark background
      ctx.fillRect(0, 0, width, height);

      // 1. Draw stars up to requested density
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      const limit = Math.min(starsDensity, stars.length);
      for (let i = 0; i < limit; i++) {
        const star = stars[i];
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.speed = -star.speed;
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fillRect(star.x % width, star.y, star.r, star.r);
        ctx.restore();
      }

      // 2. Compute Aurora Waves (Procedural custom curves)
      time += speed * 0.08;
      
      const waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        ctx.save();
        
        // Define aurora vertical gradients with high glow
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        
        let colorStart = 'rgba(39, 245, 140, 0)'; // Aurora Green
        let colorMid = 'rgba(52, 211, 153, 0.35)';
        let colorEnd = 'rgba(16, 185, 129, 0.0)';

        if (colorMode === 'purple') {
          colorMid = 'rgba(167, 139, 250, 0.35)'; // Aurora Purple/Violet
          colorStart = 'rgba(139, 92, 246, 0)';
          colorEnd = 'rgba(109, 40, 217, 0)';
        } else if (colorMode === 'dual') {
          if (w % 2 === 0) {
            colorMid = 'rgba(45, 212, 191, 0.35)'; // Teal and Cyan
          } else {
            colorMid = 'rgba(192, 132, 252, 0.35)'; // Violet
          }
        }

        // Adjust overall scale based on user intensity
        const scaleVal = intensity * 1.5;
        
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = 0.5 + (Math.sin(time + w) * 0.15);

        grad.addColorStop(0, colorStart);
        grad.addColorStop(0.35 + (w * 0.08), colorMid);
        grad.addColorStop(0.85, colorEnd);

        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, height);

        // Plot waveform with compounding sine waves representing particles passing through magnetosphere
        for (let x = 0; x <= width + 10; x += 15) {
          const wavePeriod = 0.005 + (w * 0.002);
          const y1 = Math.sin(x * wavePeriod + time + w * 1.1) * 35;
          const y2 = Math.cos(x * 0.008 - time * 0.6) * 15;
          const yBase = height * 0.25 + w * 25 + y1 + y2;

          ctx.lineTo(x, yBase);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed, intensity, colorMode, starsDensity]);

  // Bubble background settings changes upward if desired
  useEffect(() => {
    if (onUpdateBackground) {
      let cssGlow = 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.08) 0%, transparent 60%)';
      if (colorMode === 'purple') {
        cssGlow = 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.09) 0%, transparent 60%)';
      } else if (colorMode === 'dual') {
        cssGlow = 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.07) 0%, rgba(139, 92, 246, 0.07) 40%, transparent 70%)';
      }
      onUpdateBackground(cssGlow);
    }
  }, [colorMode]);

  return (
    <div id="polar-aurora-generator" className="bg-[#0A0D0F] rounded-3xl border border-white/10 p-5 text-white relative overflow-hidden">
      
      <div className="flex justify-between items-start mb-4">
        <div className="text-left">
          <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] md:text-[8px] tracking-widest font-black uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>AURORA BOREALIS GENERATOR</span>
          </div>
          <h4 className="font-prata text-md uppercase font-light text-white tracking-wide mt-0.5">
            Bình Minh Phương Bắc
          </h4>
        </div>

        {/* Ambient indicator lights */}
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-glow shadow-emerald-400/50" />
      </div>

      {/* Styled Canvas showing the animated aurora */}
      <div className="relative rounded-xl overflow-hidden border border-white/5 mb-4 group shadow-inner">
        <canvas ref={canvasRef} className="w-full h-[150px] md:h-[160px] block" />
        
        {/* Dynamic coordinate watermark overlays */}
        <div className="absolute top-3 left-3 bg-[#060A0C]/80 backdrop-blur-md text-[9.5px] md:text-[7.5px] font-mono p-1 px-2 rounded border border-white/5 text-stone-400">
          📍 AT FAIRBANKS STATION (64.8° N)
        </div>
      </div>

      {/* Dynamic adjusters */}
      <div className="space-y-4 text-left">
        {/* Color buttons */}
        <div className="space-y-1">
          <label className="font-mono text-[9.5px] md:text-[7.5px] text-stone-400 tracking-widest uppercase font-extrabold block">
            Dải Màu Sắc Cực Quang (Color Wave):
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setColorMode('emerald')}
              className={`py-1.5 rounded-md font-mono text-[11px] md:text-[9px] uppercase tracking-wider transition-all cursor-pointer text-center border ${
                colorMode === 'emerald' 
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50' 
                  : 'bg-white/5 text-white/50 border-transparent hover:bg-white/10'
              }`}
            >
              Lục Việt
            </button>
            <button
              onClick={() => setColorMode('purple')}
              className={`py-1.5 rounded-md font-mono text-[11px] md:text-[9px] uppercase tracking-wider transition-all cursor-pointer text-center border ${
                colorMode === 'purple' 
                  ? 'bg-purple-950/80 text-purple-300 border-purple-500/50' 
                  : 'bg-white/5 text-white/50 border-transparent hover:bg-white/10'
              }`}
            >
              Tím Thẫm
            </button>
            <button
              onClick={() => setColorMode('dual')}
              className={`py-1.5 rounded-md font-mono text-[11px] md:text-[9px] uppercase tracking-wider transition-all cursor-pointer text-center border ${
                colorMode === 'dual' 
                  ? 'bg-sky-950/80 text-sky-300 border-indigo-500/50' 
                  : 'bg-white/5 text-white/50 border-transparent hover:bg-white/10'
              }`}
            >
              Lưỡng Cực
            </button>
          </div>
        </div>

        {/* Speed Adjustment Sliders */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9.5px] md:text-[7.5px] text-stone-400 tracking-widest uppercase font-extrabold">Tốc độ cuộn:</span>
              <span className="font-mono text-[10px] md:text-[8px] text-emerald-300">{speed === 0.05 ? 'Mơ màng' : speed < 0.2 ? 'Hiền hòa' : 'Cuồng phong'}</span>
            </div>
            <input
              type="range"
              aria-label="Tốc độ cuộn"
              min="0.05"
              max="0.4"
              step="0.05"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9.5px] md:text-[7.5px] text-stone-400 tracking-widest uppercase font-extrabold">Độ sáng rực:</span>
              <span className="font-mono text-[10px] md:text-[8px] text-emerald-300">{(intensity * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              aria-label="Độ sáng rực"
              min="0.2"
              max="1.0"
              step="0.1"
              value={intensity}
              onChange={(e) => setIntensity(parseFloat(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>
        </div>

        {/* Polar Star count */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9.5px] md:text-[7.5px] text-stone-400 tracking-widest uppercase font-extrabold">Mật độ tinh tú (Stars Count):</span>
            <span className="font-mono text-[10px] md:text-[8px] text-amber-300">{starsDensity} Stars</span>
          </div>
          <input
            type="range"
            aria-label="Mật độ tinh tú"
            min="20"
            max="200"
            step="10"
            value={starsDensity}
            onChange={(e) => setStarsDensity(parseInt(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-300"
          />
        </div>
      </div>

    </div>
  );
}
