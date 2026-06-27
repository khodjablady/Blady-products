import React, { useState } from 'react';

const HarvestShowcase: React.FC = () => {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  const badges = [
    {
      id: 1,
      side: 'left',
      icon: (
        <svg className="w-6 h-6 text-[#2C2A26]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Brain / Cognitive */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925-3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 006 12a3.75 3.75 0 00.5 1.933m4.5 4.067A3.75 3.75 0 1115.75 12c0 .93-.34 1.782-.9 2.433m-4.35 3.634A3.75 3.75 0 0012 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17c.096-.443.25-.864.453-1.254m0 0A3.75 3.75 0 0113.5 12c1.4 0 2.583.767 3.195 1.9M9.75 17h4.5" />
        </svg>
      ),
      originalText: 'Oles Gil Mght',
      meaning: 'Soutien Cognitif & Mémoire',
      description: 'Haute teneur en polyphénols protégeant les cellules cérébrales contre le vieillissement cognitive.',
      positionY: 'top-0 lg:top-[5%]',
      positionX: 'left-[15%] lg:left-[5%]',
    },
    {
      id: 2,
      side: 'left',
      icon: (
        <svg className="w-6 h-6 text-[#2C2A26]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Medicine Bottle / Glycemia */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
      originalText: 'Oiea.Ol R65',
      meaning: 'Régulation Glycémique',
      description: 'Aide à équilibrer le métabolisme de l\'insuline et soutient la prévention du diabète.',
      positionY: 'top-[33%] lg:top-[35%]',
      positionX: 'left-[5%] lg:left-[1%]',
    },
    {
      id: 3,
      side: 'left',
      icon: (
        <svg className="w-6 h-6 text-[#2C2A26]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Heart / Cardio */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      originalText: 'Glive Oil Keaps',
      meaning: 'Santé Cardiovasculaire',
      description: 'L\'acide oléique mono-insaturé favorise un taux de cholestérol sain et protège le cœur.',
      positionY: 'top-[66%] lg:top-[65%]',
      positionX: 'left-[15%] lg:left-[5%]',
    },
    {
      id: 4,
      side: 'right',
      icon: (
        <svg className="w-6 h-6 text-[#2C2A26]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Bone Joints */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      originalText: 'Olse GB Tegnte',
      meaning: 'Anti-Inflammatoire Naturel',
      description: 'Réduit les douleurs articulaires grâce à l\'oléocanthal, qui émule les agents apaisants naturels.',
      positionY: 'top-0 lg:top-[5%]',
      positionX: 'right-[15%] lg:right-[5%]',
    },
    {
      id: 5,
      side: 'right',
      icon: (
        <svg className="w-6 h-6 text-[#2C2A26]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Mind/Depression */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      originalText: 'Olise Qit Way',
      meaning: 'Sérénité d\'Esprit',
      description: 'Aide à combattre l\'anxiété et soutient la synthèse naturelle de la sérotonine cérébrale.',
      positionY: 'top-[33%] lg:top-[35%]',
      positionX: 'right-[5%] lg:right-[1%]',
    },
    {
      id: 6,
      side: 'right',
      icon: (
        <svg className="w-6 h-6 text-[#2C2A26]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {/* Shield/Check */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      originalText: 'Clise Oil Fnem',
      meaning: 'Barrière Immunitaire',
      description: 'Des antioxydants puissants fortifient les défenses biologiques contre les agressions quotidiennes.',
      positionY: 'top-[66%] lg:top-[65%]',
      positionX: 'right-[15%] lg:right-[5%]',
    }
  ];

  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#4A4736] via-[#2F2D21] to-[#12110A] text-[#F5F2EB] flex flex-col justify-between p-6 select-none rounded-[4px] shadow-2xl border border-[#3E3C2F]/50">
      
      {/* Soft warm sun ray overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180%] h-[150%] bg-gradient-to-b from-[#F2E0BD]/15 via-transparent to-transparent pointer-events-none blur-3xl rotate-12"></div>

      {/* Top Header - '2026 Harvesting' banner */}
      <div className="relative z-10 w-full flex justify-center pt-2">
        <div className="bg-[#B5945C]/10 border border-[#B5945C]/40 backdrop-blur-md px-10 py-2.5 rounded shadow-lg text-center">
          <span className="block text-xs uppercase tracking-[0.3em] font-semibold text-[#E9D6B3]">
            2026 Harvesting
          </span>
        </div>
      </div>

      {/* Symmetrical Badges & Oil Bottle Section */}
      <div className="relative w-full h-full my-auto flex items-center justify-center p-4">
        
        {/* Badges Left Stack */}
        <div className="absolute left-0 top-0 bottom-0 w-[40%] flex flex-col justify-around py-4 z-20">
          {badges.filter(b => b.side === 'left').map((b) => (
            <div 
              key={b.id} 
              className="flex items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredBadge(b.id)}
              onMouseLeave={() => setHoveredBadge(null)}
            >
              {/* Gold Ring container */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex-shrink-0 bg-gradient-to-br from-[#E0CDA6] via-[#A6884E] to-[#E0CDA6] p-[2px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(224,205,166,0.6)]">
                <div className="w-full h-full rounded-full bg-[#E5D7BE] flex flex-col items-center justify-center text-[#2C2A26] p-1.5 transition-colors duration-300 group-hover:bg-[#EBE0CD]">
                  {b.icon}
                  {/* Miniature curved look original latin text */}
                  <span className="text-[7px] md:text-[8px] tracking-tight font-sans font-bold text-center mt-0.5 opacity-60 uppercase overflow-hidden whitespace-nowrap leading-none">
                    {b.originalText.substring(0, 12)}
                  </span>
                </div>
              </div>
              {/* Text side label (hidden on tiny screens, beautiful text on tablet+) */}
              <div className="hidden md:flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-[#E9D6B3] font-semibold leading-tight">{b.originalText}</span>
                <span className="text-[11px] font-serif italic text-white/80 leading-tight">{b.meaning}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Center Bottle */}
        <div className="relative z-10 w-[35%] h-[90%] flex items-center justify-center">
          
          {/* Glowing Aura back */}
          <div className="absolute w-[150%] aspect-square bg-gradient-to-r from-[#B5945C]/20 to-transparent rounded-full filter blur-2xl pointer-events-none animate-pulse"></div>
          
          {/* Glass Bottle Body Representation */}
          <div className="relative w-24 md:w-28 h-72 md:h-[340px] flex flex-col items-center group/bottle">
            {/* Neck sleeve */}
            <div className="w-[18px] md:w-[22px] h-14 md:h-16 bg-gradient-to-b from-[#1E3B20] to-[#142A16] rounded-t-sm shadow-inner relative flex justify-center">
              {/* Gold neck collar */}
              <div className="absolute bottom-1 w-full h-[3px] bg-gradient-to-r from-[#D8C7A3] to-[#A8874C]"></div>
            </div>
            {/* Crown Bottle Cap */}
            <div className="absolute -top-[1px] w-[20px] md:w-[24px] h-[6px] bg-[#1E3B20] border-b border-[#D8C7A3]/30 rounded-t-sm"></div>

            {/* Glass shoulders */}
            <div className="w-12 md:w-14 h-5 bg-gradient-to-b from-[#142A16] to-[#0A160B] rounded-t-xl"></div>
            
            {/* Main glass column */}
            <div className="w-14 md:w-[68px] h-48 md:h-[240px] bg-gradient-to-r from-[#070D08] via-[#102313] to-[#070D08] rounded-b-md shadow-[0_15px_30px_rgba(0,0,0,0.5)] border-x border-white/5 relative overflow-hidden flex flex-col items-center pt-5">
              
              {/* Glass glare highlight */}
              <div className="absolute inset-y-0 left-1 w-[4px] bg-white/10 blur-[0.5px]"></div>
              <div className="absolute inset-y-0 right-2 w-[2px] bg-white/5"></div>

              {/* Elegant Royal Brand Label */}
              <div className="w-[85%] h-[80%] bg-[#0B0D0A] border border-[#A6884E]/30 rounded p-1.5 flex flex-col justify-between items-center text-center relative">
                {/* Gold floral background pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#A6884E_1px,transparent_1px)] [background-size:12px_12px]"></div>

                {/* Micro branding top */}
                <span className="text-[6px] text-[#A6884E] uppercase tracking-[0.2em] relative z-10">Béni Yenni - Kabylie</span>
                
                {/* Brand label "Blady" curvey cursive typography */}
                <div className="my-1 relative z-10 flex flex-col items-center">
                  <span className="font-serif italic text-sm md:text-base font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#F5EAD4] to-[#C1A572] tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Blady
                  </span>
                  {/* Subtle emblem */}
                  <div className="w-3 h-3 rounded-full border border-[#A6884E]/50 flex items-center justify-center my-0.5">
                    <div className="w-1 h-1 bg-[#A6884E] rounded-full"></div>
                  </div>
                </div>

                {/* Description texts */}
                <div className="flex flex-col items-center relative z-10 gap-[2px]">
                  <span className="text-[5px] uppercase tracking-wider text-white/50">HUILE D'OLIVE</span>
                  <span className="text-[7px] text-[#DBC297] font-semibold tracking-widest uppercase">EXTRA VIERGE</span>
                  <span className="text-[5px] text-white/40 italic">100% Organique - Kabylie</span>
                </div>

                {/* Bottom weight / volume */}
                <span className="text-[5px] text-[#A6884E]/80 tracking-widest relative z-10">750 ML / e 0.75L</span>
              </div>
            </div>
            
            {/* Real shadow below bottle base */}
            <div className="absolute -bottom-1 w-[90%] h-3 bg-black/40 blur-[3px] rounded-full"></div>
            
            {/* Traditional Kabyle Rug Base Layer - placed just beneath the bottle base */}
          </div>
        </div>

        {/* Badges Right Stack */}
        <div className="absolute right-0 top-0 bottom-0 w-[40%] flex flex-col justify-around py-4 z-20">
          {badges.filter(b => b.side === 'right').map((b) => (
            <div 
              key={b.id} 
              className="flex items-center justify-end gap-2 group cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredBadge(b.id)}
              onMouseLeave={() => setHoveredBadge(null)}
            >
              {/* Text side label */}
              <div className="hidden md:flex flex-col text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#E9D6B3] font-semibold leading-tight">{b.originalText}</span>
                <span className="text-[11px] font-serif italic text-white/80 leading-tight">{b.meaning}</span>
              </div>
              {/* Gold Ring container */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex-shrink-0 bg-gradient-to-br from-[#E0CDA6] via-[#A6884E] to-[#E0CDA6] p-[2px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(224,205,166,0.6)]">
                <div className="w-full h-full rounded-full bg-[#E5D7BE] flex flex-col items-center justify-center text-[#2C2A26] p-1.5 transition-colors duration-300 group-hover:bg-[#EBE0CD]">
                  {b.icon}
                  {/* Miniature text */}
                  <span className="text-[7px] md:text-[8px] tracking-tight font-sans font-bold text-center mt-0.5 opacity-60 uppercase overflow-hidden whitespace-nowrap leading-none">
                    {b.originalText.substring(0, 12)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Floating Interactive Benefit Details Panel */}
      <div className="absolute bottom-[24%] left-1/2 -translate-x-1/2 z-30 w-[85%] max-w-sm h-14 relative">
        {hoveredBadge !== null ? (
          <div className="absolute inset-0 bg-gradient-to-r from-[#171611]/95 to-[#24221A]/95 backdrop-blur-md border border-[#A6884E]/40 p-2.5 rounded shadow-xl text-center flex flex-col justify-center animate-fade-in-up">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#E9D6B3] block mb-0.5">
              ★ {badges.find(b => b.id === hoveredBadge)?.meaning}
            </span>
            <span className="text-[9px] md:text-[10px] text-white/80 leading-tight block">
              {badges.find(b => b.id === hoveredBadge)?.description}
            </span>
          </div>
        ) : (
          <div className="absolute inset-0 bg-[#000]/25 backdrop-blur-[2px] border border-white/5 p-2 rounded text-center flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-widest text-white/40">
              Survolez les pastilles dorées pour découvrir les vertus
            </span>
          </div>
        )}
      </div>

      {/* Bottom Section: Kabyle Rug Pattern Underlay & Olive Wicker Basket */}
      <div className="relative z-10 w-full h-[22%] flex items-end justify-between border-t border-[#A6884E]/10 pt-2">
        
        {/* Basket filled with green/purple olives (Bottom Left) */}
        <div className="relative w-[30%] h-full flex items-end pl-2">
          {/* Detailed Woven Wicker Basket Vector using CSS & Overlays */}
          <div className="relative w-16 md:w-20 aspect-square flex flex-col justify-end">
            
            {/* Pile of olives sticking out of the basket */}
            <div className="absolute bottom-[22px] left-1 right-1 h-8 flex flex-wrap justify-center overflow-visible">
              <div className="w-3.5 h-[11px] bg-[#6B8E23] rounded-full rotate-[12deg] shadow-md border-[0.5px] border-black/10 absolute -top-1 left-3"></div>
              <div className="w-3.5 h-[11px] bg-[#556B2F] rounded-full -rotate-[22deg] shadow-md border-[0.5px] border-black/10 absolute top-1 left-5"></div>
              <div className="w-4 h-[12px] bg-[#2E3B1C] rounded-full rotate-[42deg] shadow-md border-[0.5px] border-black/10 absolute top-0 left-1 pb-1"></div>
              <div className="w-3.5 h-[11px] bg-[#3B2C1C] rounded-full rotate-[5deg] shadow-md border-[0.5px] border-black/10 absolute top-2 right-2"></div>
              <div className="w-3.5 h-[11px] bg-[#8FBC8F] rounded-full rotate-[15deg] shadow-md border-[0.5px] border-black/10 absolute top-0 right-4"></div>
            </div>
            
            {/* Basket Handle */}
            <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 w-[85%] h-12 rounded-t-full border-2 border-[#8E7044] bg-transparent pointer-events-none"></div>

            {/* Basket wicker container */}
            <div className="w-full h-[24px] bg-[#785E35] rounded-b-md relative overflow-hidden border border-[#523F21]/40 shadow-xl flex flex-col justify-between p-[2px]">
              {/* Detailed wicker weave effect */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#523f21_25%,transparent_25%),linear-gradient(-45deg,#523f21_25%,transparent_25%)] [background-size:6px_6px] opacity-40"></div>
              {/* Wooden weave rim */}
              <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-[#8E7044] via-[#AA8A59] to-[#8E7044] border-b border-[#523F21]/40"></div>
            </div>
          </div>
        </div>

        {/* Kabyle traditional rug ribbon spanning across bottom */}
        <div className="absolute bottom-0 inset-x-0 h-[15px] bg-[#9e2a22] overflow-hidden flex flex-col justify-center border-t border-[#F5EAD4]/20 shadow-inner">
          {/* Traditional geometrical Kabyle red-orange motif ribbon */}
          <div className="w-full h-full opacity-65 flex items-center justify-around">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="flex items-center gap-1 flex-shrink-0">
                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-[#E5A93C]"></div>
                <div className="w-[6px] h-[6px] bg-[#E95C33] rotate-45 flex-shrink-0"></div>
                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#E5A93C]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Scattered olive branches and organic aesthetics (Bottom Right) */}
        <div className="w-[35%] h-full flex flex-col justify-end items-end pr-2 pb-[18px] text-right">
          <span className="text-[9px] text-[#A6884E]/70 uppercase tracking-widest leading-none block">TERROIR</span>
          <span className="text-[12px] font-serif italic text-[#F5EAD4] font-medium leading-tight block">KABYLIE-ALGÉRIE</span>
        </div>

      </div>

    </div>
  );
};

export default HarvestShowcase;
