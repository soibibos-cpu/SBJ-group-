
import React from 'react';
import { PILLARS, OpuamakubaPattern } from '../constants.tsx';
import { Plus, ArrowRight } from 'lucide-react';
import { PillarData } from '../types.ts';

interface BentoCardProps {
  pillar: PillarData;
  index: number;
  onClick: (id: string) => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ pillar, index, onClick }) => {
  return (
    <div 
      onClick={() => onClick(pillar.id)}
      className={`group relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer reveal-on-scroll stagger-${(index % 4) + 1} hover:bg-white/[0.07] hover:border-white/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] flex flex-col h-full min-h-[340px] md:min-h-[420px]`}
    >
      {/* Glass Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none z-10"></div>
      
      {/* Background Icon Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:scale-110 pointer-events-none text-white">
        {React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 240, strokeWidth: 0.5 })}
      </div>

      {/* Dynamic Hover Border Glow */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2rem]"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_infinite]"></div>
      </div>

      {/* Industrial Accent - Top Left Corner */}
      <div className="absolute top-5 left-5 w-6 h-6 z-30 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-safety"></div>
        <div className="absolute top-0 left-0 w-[1.5px] h-full bg-safety"></div>
      </div>

      <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-end">
        <div className="transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/10 backdrop-blur-md text-white border border-white/10 shadow-xl flex items-center justify-center transform group-hover:rotate-6 group-hover:bg-safety group-hover:border-safety/50 group-hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] transition-all duration-500 rounded-xl">
              {React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 20 })}
            </div>
          </div>
          
          <h3 className="font-display font-black text-white leading-[1.1] tracking-tighter transition-all duration-500 text-lg md:text-2xl mb-2 uppercase">
            {pillar.title.split(' & ')[0]}
          </h3>
          
          <div className="h-[2px] transition-all duration-700 mb-4 w-8 bg-white/10 group-hover:w-full group-hover:bg-safety group-hover:shadow-[0_0_15px_#FF5722]"></div>
          
          <div className="overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] max-h-0 opacity-0 group-hover:max-h-[80px] group-hover:opacity-100 hidden sm:block">
            <p className="text-white/50 text-[11px] md:text-xs font-medium line-clamp-2 leading-relaxed mb-4">
              {pillar.description}
            </p>
          </div>

          <div className="mt-4 text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase flex items-center gap-3 text-white/30 group-hover:text-white transition-all duration-500">
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 group-hover:border-safety group-hover:bg-safety/10 transition-all duration-500">
               <ArrowRight size={14} className="group-hover:text-safety transition-transform group-hover:translate-x-1" />
            </div>
            <span className="border-b-2 border-transparent group-hover:border-safety py-1">
              OPEN DOSSIER
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

interface BentoGridProps {
  onPillarClick: (id: string) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onPillarClick }) => {
  return (
    <section className="py-32 md:py-40 bg-navy relative overflow-hidden" id="pillars">
      {/* Background imagery with consistent industrial overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&w=2070&auto=format&fit=crop" 
          alt="Refinery Infrastructure"
          className="w-full h-full object-cover grayscale brightness-[0.2] opacity-25 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale z-0">
        <OpuamakubaPattern />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-24">
          <div className="max-w-3xl reveal-on-scroll">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-safety"></div>
              <span className="text-safety text-[10px] font-black tracking-[0.5em] uppercase">Group Divisions</span>
              <div className="h-[1px] w-8 bg-safety"></div>
            </div>
            <h2 className="text-white text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter mb-8 uppercase leading-none">
              Business <span className="text-silt">Units</span>
            </h2>
            <p className="text-white/50 font-medium text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Symmetrical industrial deployment across seven strategic sectors, engineered for integrated excellence and regional dominance.
            </p>
          </div>
        </div>

        {/* Updated Grid: Stacked (grid-cols-1) on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-6">
          {PILLARS.map((pillar, idx) => (
            <BentoCard key={pillar.id} pillar={pillar} index={idx} onClick={onPillarClick} />
          ))}
          
          {/* Group Profile Call-to-action - Follows grid rules */}
          <div className="group relative overflow-hidden bg-safety/5 border border-safety/20 rounded-[2rem] transition-all duration-700 cursor-pointer reveal-on-scroll stagger-5 hover:bg-safety/10 p-10 flex flex-col items-center justify-center text-center min-h-[340px]">
             <div className="w-16 h-16 rounded-full bg-safety/20 flex items-center justify-center text-safety mb-6 group-hover:scale-110 transition-transform">
               <Plus size={32} />
             </div>
             <h3 className="text-white font-display font-black text-xl uppercase mb-3">Group Synergy</h3>
             <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">Cross-sector integration fueling Nigeria's future</p>
          </div>
        </div>

        <div className="mt-20 md:mt-24 flex flex-col items-center reveal-on-scroll">
          <div className="w-16 h-px bg-white/10 mb-10"></div>
          <button className="group relative px-10 md:px-14 py-4 md:py-5 overflow-hidden border border-white/20 rounded-full text-white font-black text-[10px] md:text-xs tracking-[0.4em] uppercase transition-all duration-500 hover:text-navy outline-none">
            <span className="relative z-10">Download Corporate Portfolio</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
