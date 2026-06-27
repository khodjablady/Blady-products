/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import heroBg from '../src/assets/images/regenerated_image_1781549009148.webp';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping, safely ignoring errors in sandboxed environments
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#D6D1C7]">
      
      {/* Background Image - Authentic Kabyle heritage and traditional dress */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src={heroBg} 
            alt="Beautiful Algerian Kabyle woman in traditional handwoven dress and silver crown in an olive grove" 
            className="w-full h-full object-cover grayscale-[0.02] contrast-[1.05] brightness-[0.6] animate-[pulse_25s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
        />
        {/* Warmer Amber Overlay for Sunset Sunlight Feel */}
        <div className="absolute inset-0 bg-[#3D2F1E]/30 mix-blend-multiply"></div>
        {/* Fine Grain Shadow Depth */}
        <div className="absolute inset-0 bg-[#1C1610]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto">
          <span className="block text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/90 mb-6 backdrop-blur-sm bg-white/10 px-6 py-2 rounded-full mx-0 md:mx-auto w-fit">
            Blady — Terroir d'Algérie
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white tracking-tight mb-8 drop-shadow-sm">
            Flavor of <span className="italic text-[#F5F2EB]">Algeria.</span>
          </h1>
          <p className="max-w-xl mx-0 md:mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed mb-12 text-shadow-sm">
            Premium handpicked table olives, extra-virgin olive oils, <br/>
            sun-dried organic figs, and expert agricultural services.
          </p>
          
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className="group relative px-10 py-5 bg-[#F5F2EB] text-[#2C2A26] rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl inline-block"
          >
            <span className="relative z-10 group-hover:text-[#2C2A26]">Explore Terroir</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
