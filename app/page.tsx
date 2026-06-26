import Link from 'next/link';

export default function HomePage() {
  const scenes = [
    { id: 'kyoto', num: 'I', title: 'Rainy Kyoto Tea House', desc: 'Listen to rain tapping on tatami and bamboo. Perfect for late-night writing or finding inner stillness.' },
    { id: 'london', num: 'II', title: 'Midnight London Cafe', desc: 'Muffled British chatter paired with vintage vinyl jazz. A safe haven for creative minds.' },
    { id: 'iceland', num: 'III', title: 'Icelandic Cabin Fire', desc: 'Hearth crackle contrasted with an Arctic blizzard outside. Engineered for deep sleep and anxiety relief.' }
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#f4f0eb] flex flex-col items-center justify-between p-8 md:p-16">
      
      {/* Header Section */}
      <header className="text-center my-12">
        <h1 className="font-serif italic font-light text-4xl tracking-wider text-[#cbd5e1] mb-4">
          Scene Sound Mixer
        </h1>
        <p className="text-xs tracking-[0.25em] text-[#788290] uppercase mb-4">
          Mix the sounds of immersive worlds.
        </p>
        <p className="max-w-md mx-auto text-sm text-[#788290] leading-relaxed font-serif italic">
          “Travel through sound. Create your own immersive atmosphere by mixing rain, wind, fire, cafés, temples, forests, and more.”
        </p>
      </header>

      {/* Library Grid */}
      <main className="w-full max-w-lg flex flex-col gap-6">
        {scenes.map((scene) => (
          <Link 
            key={scene.id} 
            href={`/${scene.id}`}
            className="block p-8 bg-white/[0.01] border border-[#1c212a] rounded hover:bg-white/[0.03] hover:border-[#cbd5e1] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="block text-[10px] tracking-widest text-[#788290] uppercase mb-2">
              {scene.num} . Immersive World
            </span>
            <div className="text-xl font-serif italic text-[#f4f0eb] mb-2">
              {scene.title}
            </div>
            <p className="text-sm text-[#788290] font-light leading-relaxed">
              {scene.desc}
            </p>
          </Link>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="w-full max-w-lg text-center border-t border-[#1c212a] pt-8 mt-16">
        <p className="text-xs text-[#788290] leading-loose">
          Welcome to your digital refuge. Click any soundscape theater above to curate your personal environment of rest.
        </p>
        
        {/* AdSense Placeholder */}
        <div className="w-full h-[60px] border border-dashed border-[#1c212a] rounded flex items-center justify-center text-[10px] tracking-widest text-[#2e3844] mt-8 uppercase">
          【 Scene Sound Mixer ｜ AdSense Area 】
        </div>
      </footer>

    </div>
  );
}