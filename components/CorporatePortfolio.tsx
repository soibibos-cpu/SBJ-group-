
import React, { useEffect } from 'react';
import { BRAND_CONFIG, OpuamakubaPattern, PILLARS, SBJLogo } from '../constants.tsx';
import { ArrowLeft, Building2, ShieldCheck } from 'lucide-react';

interface CorporatePortfolioProps {
  onBack: () => void;
}

export default function CorporatePortfolio({ onBack }: CorporatePortfolioProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white animate-fadeIn transition-colors duration-500">
      {/* Cinematic Portfolio Hero */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Excellence" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-20 text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-silt font-black text-[10px] tracking-[0.4em] uppercase mb-8 md:mb-12 hover:text-white transition-all duration-500 outline-none"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Back to Home
          </button>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-tight mb-8 md:mb-12 reveal-entry stagger-1 uppercase">
            Corporate <span className="text-silt">Portfolio</span>
          </h1>
          
          <div className="max-w-4xl reveal-entry stagger-2 p-10 md:p-16 bg-white/[0.04] backdrop-blur-2xl rounded-[3rem] border border-white/10 text-center shadow-industrial">
            <span className="text-safety font-black text-[10px] md:text-[11px] tracking-[0.5em] uppercase block mb-6 md:mb-8">Group Mission</span>
            <p className="text-2xl md:text-4xl text-white font-black leading-tight mb-10 md:mb-12 italic tracking-tighter">
              "{BRAND_CONFIG.mission}"
            </p>
            <div className="h-[2px] w-24 bg-white/10 mb-10 md:mb-12 mx-auto"></div>
            <span className="text-silt font-black text-[10px] md:text-[11px] tracking-[0.5em] uppercase block mb-6 md:mb-8">Group Vision</span>
            <p className="text-xl md:text-3xl text-white font-bold leading-relaxed tracking-tight">
              "{BRAND_CONFIG.vision}"
            </p>
          </div>
        </div>
      </section>

      {/* Quality Policy Statement */}
      <section className="py-24 md:py-32 bg-white/5 relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.05] grayscale">
           <OpuamakubaPattern />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-center">
          <div className="max-w-5xl bg-navy/[0.02] p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] border-2 border-navy/5 shadow-industrial relative text-center">
            <div className="absolute top-0 right-0 p-10 md:p-16 opacity-5">
              <ShieldCheck size={240} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase mb-10 md:mb-16 leading-none text-white">Quality <span className="text-safety">Mandate</span></h2>
            <p className="text-2xl md:text-4xl font-black leading-tight text-navy/80 italic tracking-tighter">
              "{BRAND_CONFIG.qualityPolicy}"
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Structure - Refactored Grid for Centered Alignment */}
      <section className="py-24 md:py-40 bg-navy text-white relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.05] grayscale">
           <OpuamakubaPattern />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center gap-6 mb-20 md:mb-24 reveal-on-scroll">
            <Building2 size={48} className="text-safety" />
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none">Group Governance</h2>
            <div className="h-1.5 w-24 bg-safety"></div>
          </div>

          <div className="w-full space-y-12 md:space-y-16">
            {/* Executive Holding Card - Centered on all devices */}
            <div className="max-w-4xl mx-auto bg-white/[0.05] backdrop-blur-3xl p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 shadow-2xl reveal-on-scroll flex flex-col items-center text-center">
              <h3 className="text-silt font-black text-[10px] tracking-widest uppercase mb-10">Strategic Executive Holding</h3>
              <SBJLogo className="mb-10 scale-125" />
              <h4 className="text-3xl md:text-4xl font-display font-black mb-6 uppercase">SBJ Group Ltd</h4>
              <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                Providing unified strategic governance and high-level industrial synergy across seven operational sectors in the Gulf of Guinea.
              </p>
              <div className="px-8 py-3 bg-safety/10 rounded-full border border-safety/30">
                <span className="text-[10px] font-black text-safety uppercase tracking-[0.4em]">Protocol: Sovereign Standard</span>
              </div>
            </div>

            {/* Business Units Sub-Grid: Stacked on Mobile, side-by-side on tablet/desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PILLARS.map((pillar, idx) => (
                <div key={pillar.id} className="p-8 md:p-10 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[2.5rem] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-700 reveal-on-scroll shadow-xl flex flex-col h-full text-center items-center">
                  <div className="text-safety mb-8 p-4 bg-white/5 rounded-2xl">
                    {React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h5 className="font-display font-black text-xl md:text-2xl mb-6 uppercase text-white leading-tight">
                    {pillar.title.split(' & ')[0]}
                  </h5>
                  <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {pillar.subsidiaries.map((s, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 text-[9px] font-bold uppercase tracking-wider rounded-lg border border-white/10 text-white/60 flex items-center gap-2">
                        {s.logo && <img src={s.logo} alt="" className="w-3 h-3 object-contain opacity-70" referrerPolicy="no-referrer" />}
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
