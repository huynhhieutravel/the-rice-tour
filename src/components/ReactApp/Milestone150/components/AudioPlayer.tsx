import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Wind } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeMood, setActiveMood] = useState<'wind' | 'bowl' | 'mix'>('bowl');
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  
  // Audio Nodes
  const windVolumeNodeRef = useRef<GainNode | null>(null);
  const bowlVolumeNodeRef = useRef<GainNode | null>(null);
  const mainVolumeNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const windBufferSourceRef = useRef<AudioBufferSourceNode | null>(null);

  // Initialize Audio Context on demand
  const initAudio = () => {
    if (audioCtxRef.current) return;
    
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Create main output volume
      const mainVolume = ctx.createGain();
      mainVolume.gain.setValueAtTime(0, ctx.currentTime);
      mainVolume.connect(ctx.destination);
      mainVolumeNodeRef.current = mainVolume;

      // Set up Wind Generator (using custom noise buffer and lowpass filter)
      const bufferSize = ctx.sampleRate * 2; // 2 seconds of noise
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      
      // Fill buffer with pinkish-brownish noise approximation
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Simple filter to make white noise brown / wind-like
        output[i] = (lastOut * 0.95 + white * 0.05);
        lastOut = output[i];
      }

      // Wind Volume
      const windVolume = ctx.createGain();
      windVolume.gain.setValueAtTime(0.08, ctx.currentTime);
      windVolumeNodeRef.current = windVolume;

      // Lowpass filter to modulate for wind gusts
      const windFilter = ctx.createBiquadFilter();
      windFilter.type = 'lowpass';
      windFilter.frequency.setValueAtTime(400, ctx.currentTime);
      windFilter.Q.setValueAtTime(2, ctx.currentTime);

      // Loop wind buffer
      const playWind = () => {
        const source = ctx.createBufferSource();
        source.buffer = noiseBuffer;
        source.loop = true;
        source.connect(windFilter);
        windFilter.connect(windVolume);
        windVolume.connect(mainVolume);
        source.start(0);
        windBufferSourceRef.current = source;

        // Modulate winding filter frequency to mimic gusts of Himalayai mountain wind
        const modulate = () => {
          if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
          const now = ctx.currentTime;
          const targetFreq = 200 + Math.random() * 400; // between 200Hz and 600Hz
          const rate = 1 + Math.random() * 3; // speed of change
          windFilter.frequency.exponentialRampToValueAtTime(targetFreq, now + rate);
          setTimeout(modulatingLoop, rate * 1000);
        };
        
        let timeoutId: any;
        const modulatingLoop = () => {
          modulate();
        };
        modulate();
      };
      
      playWind();

      // Create Singing Bowl oscillators (Multi-harmonics sine waves)
      const bowlVolume = ctx.createGain();
      bowlVolume.gain.setValueAtTime(0.3, ctx.currentTime);
      bowlVolume.connect(mainVolume);
      bowlVolumeNodeRef.current = bowlVolume;

      // Harmonic frequencies for Tibetan Bowl (F# fundamental)
      const baseFreq = 180; // F#3
      const harmonics = [1, 1.5, 2.01, 2.6, 3.12, 4.2]; // approximate overtones of singing bowl
      
      harmonics.forEach((harmonic, index) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = baseFreq * harmonic;
        
        // Lower volumes for higher overtones
        const baseVolume = 0.15 / (index + 1);
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        
        // Modulate individual overtone volumes slowly using LFO (Low Frequency Oscillator)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.05 + index * 0.02; // slow drift (0.05Hz - 0.15Hz)
        lfoGain.gain.value = baseVolume * 0.4; // +/- modulation depth
        
        lfo.connect(lfoGain);
        lfoGain.connect(gainNode.gain);
        
        // Connect nodes
        osc.connect(gainNode);
        gainNode.connect(bowlVolume);
        
        // Save references to start
        osc.start(0);
        lfo.start(0);
        
        // Fade in inividual harmonic values
        gainNode.gain.linearRampToValueAtTime(baseVolume, ctx.currentTime + 3);
        
        oscillatorsRef.current.push(osc);
        oscillatorsRef.current.push(lfo); // store LFOs so we can stop them too
      });

    } catch (e) {
      console.error("Web Audio API not supported", e);
    }
  };

  // Handle active volume adjustment based on mood selections
  useEffect(() => {
    if (!isPlaying || !audioCtxRef.current) return;
    
    const ctx = audioCtxRef.current;
    
    if (windVolumeNodeRef.current && bowlVolumeNodeRef.current) {
      const now = ctx.currentTime;
      if (activeMood === 'wind') {
        windVolumeNodeRef.current.gain.linearRampToValueAtTime(0.2, now + 1.5);
        bowlVolumeNodeRef.current.gain.linearRampToValueAtTime(0.0, now + 1.5);
      } else if (activeMood === 'bowl') {
        windVolumeNodeRef.current.gain.linearRampToValueAtTime(0.01, now + 1.5);
        bowlVolumeNodeRef.current.gain.linearRampToValueAtTime(0.35, now + 1.5);
      } else { // mix
        windVolumeNodeRef.current.gain.linearRampToValueAtTime(0.12, now + 1.5);
        bowlVolumeNodeRef.current.gain.linearRampToValueAtTime(0.25, now + 1.5);
      }
    }
  }, [activeMood, isPlaying]);

  // Main Play / Stop control
  const handleTogglePlay = async () => {
    if (!isPlaying) {
      initAudio();
      
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume();
      }
      
      if (mainVolumeNodeRef.current && audioCtxRef.current) {
        setIsPlaying(true);
        mainVolumeNodeRef.current.gain.linearRampToValueAtTime(0.6, audioCtxRef.current.currentTime + 1.5);
      }
    } else {
      if (mainVolumeNodeRef.current && audioCtxRef.current) {
        mainVolumeNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          setIsPlaying(false);
        }, 800);
      }
    }
  };

  // Clean elements on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <div id="audio-panel" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Expanded Controls when playing */}
      {isPlaying && (
        <div className="flex items-center gap-1.5 rounded-full border border-amber-900/10 bg-amber-50/95 px-3 py-1.5 shadow-lg backdrop-blur-md transition-all duration-300">
          <button
            id="mood-bowl"
            onClick={() => setActiveMood('bowl')}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
              activeMood === 'bowl'
                ? 'bg-amber-700 text-amber-50'
                : 'text-amber-800 hover:bg-amber-100/50'
            }`}
            title="Sóng âm chuông Tây Tạng"
          >
            <Music className="inline mr-1 w-3.5 h-3.5" />
            Chuông
          </button>
          
          <button
            id="mood-wind"
            onClick={() => setActiveMood('wind')}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
              activeMood === 'wind'
                ? 'bg-amber-700 text-amber-50'
                : 'text-amber-800 hover:bg-amber-100/50'
            }`}
            title="Tiếng gió rít đỉnh đèo"
          >
            <Wind className="inline mr-1 w-3.5 h-3.5" />
            Gió Núi
          </button>

          <button
            id="mood-mix"
            onClick={() => setActiveMood('mix')}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
              activeMood === 'mix'
                ? 'bg-amber-700 text-amber-50'
                : 'text-amber-800 hover:bg-amber-100/50'
            }`}
            title="Cộng âm hòa điệu"
          >
            Hòa Điệu
          </button>
        </div>
      )}

      {/* Main Activation Trigger */}
      <button
        id="audio-activation-toggle"
        onClick={handleTogglePlay}
        className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg border backdrop-blur-sm transition-all duration-300 ${
          isPlaying
            ? 'animate-pulse bg-amber-700 hover:bg-amber-800 text-amber-50 border-amber-800'
            : 'bg-white/95 hover:bg-amber-50 text-amber-900 border-amber-900/15'
        }`}
        title={isPlaying ? 'Tắt âm nhạc nền' : 'Bật âm nhạc nền Tây Tạng'}
      >
        {isPlaying ? (
          <Volume2 className="h-5.5 w-5.5" />
        ) : (
          <VolumeX className="h-5.5 w-5.5 text-stone-500 hover:text-amber-800" />
        )}
      </button>
      
      {/* Mini notification if not playing to entice user */}
      {!isPlaying && (
        <span className="bg-amber-800/90 text-amber-50 text-[10px] px-2.5 py-1 rounded-md shadow-md animate-bounce select-none pointer-events-none mr-2 font-serif font-med italic">
          Bật nhạc nền Tây Tạng ♫
        </span>
      )}
    </div>
  );
}
