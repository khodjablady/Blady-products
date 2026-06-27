/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import aboutImg from '../src/assets/images/regenerated_image_1781543015942.jpg';
import sncKhodjaMillImg from '../src/assets/images/regenerated_image_1781548160846.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] leading-tight">
            Born from the sun, <br/> built for the soul.
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            Blady Terroir was founded on a simple, timeless principle: our food and agricultural care should tell the story of the earth. We design delicious, handpicked foods and expert pruning/regeneration services that respect the rhythm of nature.
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            In an age of instant gratification and chemical-heavy farming, we champion the slow, raw purity of ancient groves. Our handpressed olive oils, naturally cured table olives, sun-ripened dried figs, and wild medicinal forest honey build a tasty, tactile bridge between Algeria's spectacular mountains and your kitchen table.
          </p>
          <img 
            src={aboutImg} 
            alt="Traditional olive basket under tree shade" 
            className="w-full h-[400px] object-cover mt-12"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-[#A8A29E] mt-4">
            Beni Yenni, Kabylie
          </p>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             id="snc-khodja-mill-image"
             src={sncKhodjaMillImg} 
             alt="Aerial view of SNC KHODJA ET CIE solar-powered olive mill and grove estate" 
             referrerPolicy="no-referrer"
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 sepia-[0.05] saturate-[1.05] brightness-90"
           />
           {/* Fine-art gold-beige frame overlay */}
           <div className="absolute inset-6 border border-[#F5F2EB]/15 pointer-events-none z-10 transition-all duration-700 group-hover:inset-4" />
           
           {/* Dark luxury gradient for readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#2C2A26]/80 via-transparent to-transparent pointer-events-none z-10" />
           
           {/* Elegant label and branding matching attached image */}
           <div className="absolute bottom-10 left-10 right-10 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
             <div>
               <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6D1C7] mb-2 block">
                 SNC KHODJA ET CIE
               </span>
               <h4 className="text-2xl md:text-3xl font-serif text-[#F5F2EB] tracking-tight leading-tight">
                 Solar-Powered <br className="hidden md:block"/> Olive Mill & Estate
               </h4>
             </div>
             <div className="flex items-center gap-2">
               <span className="px-3.5 py-1.5 text-[9px] font-bold tracking-widest uppercase bg-[#EBE7DE]/15 text-[#F5F2EB] backdrop-blur-md border border-[#F5F2EB]/20 rounded-full">
                 100% Solar Energy
               </span>
             </div>
           </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-6">Our Craft</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
             Patience we can <br/> taste.
           </h3>
           <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
             We reject industrial shortcuts. Our olives are naturally cured over months using only fresh spring water, sea salt, and wild herbs. There are no artificial thickeners, chemical dye agents, or preservation sprays.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">The Land</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
             Sustaining ancient soil.
           </h3>
           <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
             Our agricultural services bring modern regenerative agronomy to smallholders. We consult on sub-surface water layout drip lines, traditional granite stone pressing, and organic pruning to help Algeria's olive groves thrive for centuries to come.
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1200" 
             alt="Agronomist soil sampling in sunny high-altitude orchard" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
           />
        </div>
      </div>
    </section>
  );
};

export default About;