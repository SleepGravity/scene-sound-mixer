'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function KyotoPage() {
  const [volumes, setVolumes] = useState({
    'rain': 0,
    'pouring-and-drinking-tea': 0,
    'book-page-turn': 0,
    'tibetan-bell': 0,
    'koto-and-shamisen-loop': 0
  });
  
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  useEffect(() => {
    const channels = [
      'rain', 
      'pouring-and-drinking-tea', 
      'book-page-turn', 
      'tibetan-bell', 
      'koto-and-shamisen-loop'
    ];
    
    channels.forEach((id) => {
      const audio = new Audio(`/sounds/${id}.mp3`);
      audio.loop = true;
      audio.volume = 0;
      audioRefs.current[id] = audio;
    });

    return () => {
      channels.forEach((id) => {
        audioRefs.current[id]?.pause();
      });
    };
  }, []);

  const handleVolumeChange = async (id: string, val: number) => {
    setVolumes(prev => ({ ...prev, [id]: val }));
    const audio = audioRefs.current[id];
    
    if (audio) {
      if (val > 0 && audio.paused) {
        try {
          await audio.play();
        } catch (err) {
          console.log(err);
        }
      }
      audio.volume = val / 100;
    }
  };

  const channelList = [
    { id: 'rain', title: '🌧 Rain — Courtyard Ambience' },
    { id: 'pouring-and-drinking-tea', title: '🍵 Tea — Matcha Ritual' },
    { id: 'book-page-turn', title: '📖 Paper — Washi Pages' },
    { id: 'tibetan-bell', title: '🔔 Bell — Temple Distance' },
    { id: 'koto-and-shamisen-loop', title: '🎵 Music — Shamisen Ensemble' }
  ];

  return (
    <div className="min-h-screen bg-[#0d0f0d] text-[#f0edf4] flex flex-col items-center justify-between p-8 md:p-12 selection:bg-[#344434]">
      
      {/* Header Section */}
      <header className="text-center z-10 max-w-2xl">
        <Link href="/" className="font-serif italic text-sm text-[#8ca38c] no-underline border-b border-dashed border-[#8ca38c] inline-block mb-6 hover:text-[#c4d4c4] hover:border-[#c4d4c4] transition-colors tracking-wide">
          ← Return to Library
        </Link>
        
        <p className="font-serif italic text-sm md:text-base text-[#ebdcd0] font-light leading-relaxed mb-6 tracking-wide max-w-xl mx-auto opacity-90">
          "As twilight falls over Kyoto, rain softly gathers across a mossy courtyard while steam rises from a warm bowl of matcha. Build your own moment of calm—layer sound, slow time, and create your personal sanctuary."
        </p>

        <h1 className="font-serif italic font-light text-4xl text-[#c4d4c4] mb-1 tracking-wide">
          Rainy Kyoto Tea House
        </h1>
        <p className="text-xs tracking-[0.3em] text-[#8ca38c] uppercase font-light">
          Create your Zen atmosphere
        </p>
      </header>

      {/* 中間區塊：插畫與控制面板 */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-16 my-8 z-10">
        
        {/* 🎨 左側：完美去背圓窗彩色插畫 */}
        <div className="relative w-72 h-72 flex items-center justify-center overflow-hidden">
          <div className="absolute w-56 h-56 bg-[#de7a3b] rounded-full blur-[60px] opacity-15"></div>
          
          <svg className="w-full h-full relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="75" fill="#202b20" />
            <g clipPath="url(#window-clip)">
              <rect x="20" y="20" width="160" height="160" fill="#263326" />
              <path d="M15 125 C 45 100, 75 120, 105 105 C 135 90, 155 110, 185 100 L 185 185 L 15 185 Z" fill="#2f4030" />
              <path d="M5 140 C 35 125, 65 140, 95 122 C 125 105, 155 135, 185 120 L 185 185 L 5 185 Z" fill="#384d39" />
              <circle cx="135" cy="65" r="15" fill="#de7a3b" opacity="0.95" />
              <rect x="15" y="142" width="170" height="45" fill="#705139" />
              <rect x="15" y="150" width="170" height="4" fill="#543d2b" />
              <path d="M62 140 C 62 132, 82 132, 82 140 L 79 147 L 65 147 Z" fill="#ebdcd0" />
              <ellipse cx="72" cy="134" rx="10" ry="1.5" fill="#5c7a5c" />
              <path d="M105 147 L 125 147 C 128 140, 128 129, 122 129 L 108 129 C 102 129, 102 140, 105 147 Z" fill="#1b221b" />
              <path d="M110 129 C 110 120, 120 120, 120 129" stroke="#1b221b" strokeWidth="2.5" fill="none" />
              <path d="M125 133 L 130 131 L 129 135 Z" fill="#1b221b" />
              <line x1="55" y1="35" x2="55" y2="65" stroke="#8ca38c" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.6" />
              <line x1="85" y1="30" x2="85" y2="75" stroke="#ebdcd0" strokeWidth="1.25" strokeDasharray="3 6" opacity="0.4" />
              <line x1="110" y1="40" x2="110" y2="60" stroke="#8ca38c" strokeWidth="1.5" strokeDasharray="2 5" opacity="0.5" />
              <line x1="155" y1="45" x2="155" y2="90" stroke="#8ca38c" strokeWidth="1.5" strokeDasharray="5 7" opacity="0.6" />
            </g>
            <circle cx="100" cy="100" r="75" stroke="#8c6a4f" strokeWidth="4" fill="none" />
            <circle cx="100" cy="100" r="71" stroke="#0d0f0d" strokeWidth="1.5" fill="none" />
            <defs>
              <clipPath id="window-clip">
                <circle cx="100" cy="100" r="71" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* 右側：🎛️ 時尚數位工藝感調音面板 */}
        <main className="w-full max-w-sm flex flex-col gap-6">
          <div className="text-[10px] tracking-[0.25em] text-[#6b7b6b] font-medium uppercase border-b border-[#1b241b] pb-2">
            🎛️ Sound Layers
          </div>
          
          {mapChannels(channelList, volumes, handleVolumeChange)}
        </main>
      </div>

      {/* Footer Section */}
      <footer className="w-full max-w-2xl text-center border-t border-[#1b241b] pt-6 mt-4">
        <div className="text-sm text-[#8ca38c] font-light leading-relaxed max-w-xl mx-auto flex flex-col gap-1 opacity-80">
          <p>✨ <span className="text-[#ebdcd0] font-medium">Tap anywhere to start the soundscape.</span></p>
          <p>Adjust each layer to design your own atmosphere.</p>
        </div>
      </footer>
    </div>
  );
}

// 🎛️ 時尚拉桿組件渲染函數（已優化行動端觸控與垂直間距，兼顧跨裝置美感）
function mapChannels(list: any[], volumes: any, onChange: any) {
  return list.map((ch) => {
    const currentVal = volumes[ch.id];
    return (
      // 1. 【優化】把間距從 gap-2 微調大到 gap-3，並增加拉桿彼此的垂直間距，防止手指誤觸隔壁
      <div key={ch.id} className="flex flex-col gap-3 group mb-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#ebdcd0] font-light tracking-wide group-hover:text-[#f0edf4] transition-colors duration-300">
            {ch.title}
          </span>
          <span className="font-mono text-[11px] text-[#6b7b6b] tracking-wider group-hover:text-[#c4d4c4] transition-colors duration-300">
            {currentVal.toString().padStart(3, '0')}
          </span>
        </div>
        {/* 2. 【優化】將點擊觸控熱區高度從 h-4 提升到 h-6，手指更好抓，但視覺細線保持不變 */}
        <div className="relative w-full h-6 flex items-center">
          {/* 客製化時尚拉桿樣式 */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={currentVal} 
            onChange={(e) => onChange(ch.id, parseInt(e.target.value))}
            // 3. 【核心優化】手機端（預設）點點放大至 w-5 h-5 (20px)，電腦端 (md:) 自動還原成精緻的 w-2.5 h-2.5
            className="w-full h-[1px] bg-[#222a22] appearance-none outline-none cursor-pointer z-10
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-5 
              [&::-webkit-slider-thumb]:h-5 
              md:[&::-webkit-slider-thumb]:w-2.5 
              md:[&::-webkit-slider-thumb]:h-2.5 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-[#e4ded5] 
              [&::-webkit-slider-thumb]:shadow-[0_0_0_0px_rgba(196,212,196,0.15)]
              [&::-webkit-slider-thumb]:transition-[all_0.2s_ease]
              hover:[&::-webkit-slider-thumb]:scale-125
              hover:[&::-webkit-slider-thumb]:bg-[#ffffff]
              hover:[&::-webkit-slider-thumb]:shadow-[0_0_0_6px_rgba(196,212,196,0.1)]
              
              [&::-moz-range-thumb]:w-5 
              [&::-moz-range-thumb]:h-5 
              md:[&::-moz-range-thumb]:w-2.5 
              md:[&::-moz-range-thumb]:h-2.5 
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:bg-[#e4ded5]
              [&::-moz-range-thumb]:transition-[all_0.2s_ease]
              hover:[&::-moz-range-thumb]:scale-125
              hover:[&::-moz-range-thumb]:bg-[#ffffff]"
          />
          {/* 已填滿進度的發光高亮細軌道 */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#9ca39c] opacity-60 pointer-events-none transition-all duration-75"
            style={{ width: `${currentVal}%` }}
          />
        </div>
      </div>
    );
  });
}