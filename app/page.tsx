'use client';

import Link from 'next/link';

export default function HomePage() {
  const scenes = [
    {
      id: 'kyoto',
      title: 'Rainy Kyoto Tea House',
      subtitle: 'SCENE 01 — ZEN SANCTUARY',
      description: 'Mossy courtyards, steaming matcha, and the slow rhythm of tatami twilight.',
      bgGradient: 'from-[#141a14] to-[#202b20]',
      tag: 'ENTER',
      available: true,
      // 這裡直接畫出妳那顆超美的圓窗插畫作為任意門
      illustration: (
        <svg className="w-40 h-40 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="75" fill="#202b20" />
          <rect x="35" y="35" width="130" height="130" fill="#263326" rx="4" />
          <circle cx="135" cy="65" r="15" fill="#de7a3b" opacity="0.85" />
          <path d="M15 135 C 45 110, 75 130, 105 115 C 135 100, 155 120, 185 110 L 185 185 L 15 185 Z" fill="#2f4030" />
          <rect x="35" y="145" width="130" height="20" fill="#705139" />
          <circle cx="100" cy="100" r="71" stroke="#8c6a4f" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'iceland',
      title: 'Icelandic Glacier Cabin',
      subtitle: 'SCENE 02 — COZY SOLITUDE',
      description: 'Crackling firewood, distant glacial winds, and the dance of the northern lights.',
      bgGradient: 'from-[#12161a] to-[#1a232c]',
      tag: 'COMING SOON',
      available: false,
      illustration: (
        <svg className="w-40 h-40 opacity-40 group-hover:opacity-50 transition-all duration-500" viewBox="0 0 200 200" fill="none">
          <rect x="30" y="30" width="140" height="140" fill="#1e242b" rx="2" stroke="#4a5a6a" strokeWidth="2" />
          <path d="M30 120 L100 50 L170 120 Z" fill="#161b22" />
          <circle cx="140" cy="70" r="12" fill="#d0e1f9" opacity="0.3" className="blur-[2px]" />
          <line x1="100" y1="30" x2="100" y2="170" stroke="#4a5a6a" strokeWidth="1" opacity="0.3" />
        </svg>
      )
    },
    {
      id: 'paris',
      title: 'Left Bank Rainy Café',
      subtitle: 'SCENE 03 — URBAN NOSTALGIA',
      description: 'Muffled jazz, jazz-age vinyl hiss, and raindrops hitting classic bistro awnings.',
      bgGradient: 'from-[#1a1412] to-[#261c18]',
      tag: 'COMING SOON',
      available: false,
      illustration: (
        <svg className="w-40 h-40 opacity-40 group-hover:opacity-50 transition-all duration-500" viewBox="0 0 200 200" fill="none">
          <path d="M40 170 A 60 60 0 0 1 160 170 Z" fill="#2c201c" stroke="#5c4033" strokeWidth="2" />
          <rect x="50" y="120" width="100" height="50" fill="#201815" />
          <line x1="100" y1="60" x2="100" y2="170" stroke="#5c4033" strokeWidth="1" opacity="0.3" />
          <path d="M40 120 Q 100 100 160 120" stroke="#ebdcd0" strokeWidth="2" opacity="0.4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0f0d] text-[#ebdcd0] flex flex-col justify-between p-6 md:p-16 selection:bg-[#344434]">
      
      {/* 📖 雜誌風頂部 Header */}
      <header className="max-w-4xl mx-auto w-full pt-8 pb-12 border-b border-[#1b241b] text-center md:text-left">
        <p className="text-[10px] tracking-[0.4em] text-[#6b7b6b] uppercase font-semibold mb-3">
          The Soundscape Library — Vol. 01
        </p>
        <h1 className="font-serif italic font-light text-5xl md:text-6xl text-[#f0edf4] tracking-wide mb-4">
          Atmospheric Sanctuaries
        </h1>
        <p className="font-serif italic text-sm text-[#8ca38c] font-light max-w-xl leading-relaxed">
          A curated collection of quiet spaces. Click on a portal to design your personal soundtrack, layer craftsmanship sound, and slow down time.
        </p>
      </header>

      {/* 🚪 任意門網格系統 (Magazine Grid) */}
      <main className="max-w-5xl mx-auto w-full my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenes.map((scene) => {
            const CardContent = (
              <div className={`group relative h-[420px] bg-gradient-to-b ${scene.bgGradient} border border-[#1b241b] rounded-xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 ${scene.available ? 'hover:border-[#8ca38c] cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}>
                
                {/* 頂部標籤與編號 */}
                <div className="flex justify-between items-start z-10">
                  <span className="text-[9px] tracking-[0.25em] text-[#6b7b6b] uppercase font-mono">
                    {scene.subtitle}
                  </span>
                  <span className={`text-[9px] tracking-widest font-mono px-2 py-0.5 rounded-full border ${scene.available ? 'border-[#8ca38c] text-[#8ca38c] group-hover:bg-[#ebdcd0] group-hover:text-[#0d0f0d]' : 'border-[#333] text-[#555]'} transition-all duration-300`}>
                    {scene.tag}
                  </span>
                </div>

                {/* 中間：視覺任意門插畫（平面色塊圖） */}
                <div className="flex justify-center items-center py-4 relative">
                  {/* 心機發光背景色塊 */}
                  <div className="absolute w-32 h-32 bg-[#ebdcd0] rounded-full blur-[50px] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                  {scene.illustration}
                </div>

                {/* 底部：雜誌風格敘述 */}
                <div className="z-10">
                  <h2 className="font-serif italic text-xl text-[#f0edf4] mb-2 group-hover:text-[#ebdcd0] transition-colors">
                    {scene.title}
                  </h2>
                  <p className="text-xs text-[#8ca38c] leading-relaxed font-light opacity-80 line-clamp-2">
                    {scene.description}
                  </p>
                </div>
              </div>
            );

            return scene.available ? (
              <Link href={`/kyoto`} key={scene.id} className="no-underline block">
                {CardContent}
              </Link>
            ) : (
              <div key={scene.id}>{CardContent}</div>
            );
          })}
        </div>
      </main>

      {/* 🏷️ 雜誌風底部 Footer */}
      <footer className="max-w-4xl mx-auto w-full border-t border-[#1b241b] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6b7b6b] tracking-wider uppercase">
        <div>© 2026 Sleep Gravity Curated Studio.</div>
        <div className="font-serif italic lowercase tracking-normal text-[#8ca38c]">crafted for slow living.</div>
      </footer>
    </div>
  );
}