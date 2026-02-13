
import React from 'react';
import { BRAND_CONFIG, OpuamakubaPattern, SBJLogo } from '../constants.tsx';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="relative overflow-hidden group scroll-mt-24 bg-navy py-40">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale">
        <OpuamakubaPattern />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Official Logo Branding */}
          <div className="flex flex-col items-center gap-6 mb-16 reveal-on-scroll">
            <SBJLogo className="transform transition-transform group-hover:scale-110 duration-700" />
            <div className="h-1 w-12 bg-safety mx-auto"></div>
          </div>
          
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-[0.9] mb-12 reveal-on-scroll stagger-1 uppercase">
              Transforming <span className="text-silt">Communities</span>.
            </h2>
            
            <p className="text-white/60 text-2xl md:text-3xl leading-relaxed mb-24 font-light italic reveal-on-scroll stagger-2">
              "Beyond industrial output, SBJ Group is a vehicle for social transformation. We integrate sustainability into every project, ensuring our growth fosters economic empowerment for all."
            </p>

            {/* Impact Grid: Stacked on Mobile, Side-by-Side on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-24 w-full max-w-3xl mx-auto">
              <div className="p-12 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl reveal-on-scroll stagger-3 group/stat">
                <span className="block text-7xl font-display font-black text-white mb-4 transition-all duration-700 group/stat:text-safety">500+</span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Direct Industrial Jobs</span>
              </div>
              <div className="p-12 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl reveal-on-scroll stagger-4 group/stat">
                <span className="block text-7xl font-display font-black text-white mb-4 transition-all duration-700 group/stat:text-silt">100%</span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Safety Protocol Integrity</span>
              </div>
            </div>

            <div className="reveal-on-scroll stagger-5">
              <button 
                className="bg-safety text-white px-16 py-6 rounded-full font-black text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-navy transition-all duration-700 shadow-2xl group inline-flex items-center gap-6"
              >
                ACCESS IMPACT REPORT
                <div className="w-12 h-[2px] bg-white transition-all group-hover:w-20 group-hover:bg-navy"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
