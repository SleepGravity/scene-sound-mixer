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

    return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#242b24] flex flex-col items-center justify-between p-8 md:p-12 selection:bg-[#ebdcd0]">
      
      {/* Header Section */}
      <header className="text-center z-10 max-w-2xl">
        <Link href="/" className="font-serif italic text-sm text-[#5c6b5c] no-underline border-b border-dashed border-[#5c6b5c] inline-block mb-6 hover:text-[#242b24] hover:border-[#242b24] transition-colors tracking-wide">
          ← Return to Library
        </Link>
        
        <p className="font-serif italic text-sm md:text-base text-[#7c6a5c] font-light leading-relaxed mb-6 tracking-wide max-w-xl mx-auto opacity-90">
          "As twilight falls over Kyoto, rain softly gathers across a mossy courtyard while steam rises from a warm bowl of matcha. Build your own moment of calm—layer sound, slow time, and create your personal sanctuary."
        </p>

        <h1 className="font-serif italic font-light text-4xl text-[#3d4a3d] mb-1 tracking-wide">
          Rainy Kyoto Tea House
        </h1>
        <p className="text-xs tracking-[0.3em] text-[#5c6b5c] uppercase font-light">
          Create your Zen atmosphere
        </p>
      </header>

      {/* 中間區塊：插畫與控制面板 */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-16 my-8 z-10">
        
        {/* 🎨 左側：圓窗插畫（在外層加上柔和陰影，更有立體任意門感） */}
        <div className="relative w-72 h-72 flex items-center justify-center overflow-hidden rounded-full shadow-lg bg-[#f4f0ea]">
          <div className="absolute w-56 h-56 bg-[#de7a3b] rounded-full blur-[60px] opacity-10"></div>
          
          <svg className="w-full h-full relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="75" fill="#f4f0ea" />
            <g clipPath="url(#window-clip)">
              <rect x="20" y="20" width="160" height="160" fill="#e4ded5" />
              <path d="M15 125 C 45 100, 75 120, 105 105 C 135 90, 155 110, 185 100 L 185 185 L 15 185 Z" fill="#c4d4c4" />
              <path d="M5 140 C 35 125, 65 140, 95 122 C 125 105, 155 135, 185 120 L 185 185 L 5 185 Z" fill="#a3b8a3" />
              <circle cx="135" cy="65" r="15" fill="#de7a3b" opacity="0.85" />
              <rect x="15" y="142" width="170" height="45" fill="#8c6a4f" />
              <rect x="15" y="150" width="170" height="4" fill="#543d2b" />
              <path d="M62 140 C 62 132, 82 132, 82 140 L 79 147 L 65 147 Z" fill="#fcfaf7" />
              <ellipse cx="72" cy="134" rx="10" ry="1.5" fill="#8ca38c" />
              <path d="M105 147 L 125 147 C 128 140, 128 129, 122 129 L 108 129 C 102 129, 102 140, 105 147 Z" fill="#242b24" />
              <path d="M110 129 C 110 120, 120 120, 120 129" stroke="#242b24" strokeWidth="2.5" fill="none" />
              <path d="M125 133 L 130 131 L 129 135 Z" fill="#242b24" />
              <line x1="55" y1="35" x2="55" y2="65" stroke="#5c6b5c" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.4" />
              <line x1="85" y1="30" x2="85" y2="75" stroke="#7c6a5c" strokeWidth="1.25" strokeDasharray="3 6" opacity="0.3" />
            </g>
            <circle cx="100" cy="100" r="75" stroke="#8c6a4f" strokeWidth="4" fill="none" />
            <circle cx="100" cy="100" r="71" stroke="#fcfaf7" strokeWidth="1.5" fill="none" />
            <defs>
              <clipPath id="window-clip">
                <circle cx="100" cy="100" r="71" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* 右側：🎛️ 調音面板（文字加深，拉桿軌道更清晰） */}
        <main className="w-full max-w-sm flex flex-col gap-6">
          <div className="text-[10px] tracking-[0.25em] text-[#5c6b5c] font-medium uppercase border-b border-[#ebdcd0] pb-2">
            🎛️ Sound Layers
          </div>
          
          {mapChannels(channelList, volumes, handleVolumeChange)}
        </main>
      </div>

      {/* Footer Section */}
      <footer className="w-full max-w-2xl text-center border-t border-[#ebdcd0] pt-6 mt-4">
        <div className="text-sm text-[#5c6b5c] font-light leading-relaxed max-w-xl mx-auto flex flex-col gap-1 opacity-80">
          <p>✨ <span className="text-[#242b24] font-medium">Tap anywhere to start the soundscape.</span></p>
          <p>Adjust each layer to design your own atmosphere.</p>
        </div>
      </footer>
    </div>
  );
}