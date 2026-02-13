
import React, { useEffect, useState } from 'react';
import { PillarData } from '../types.ts';
import { OpuamakubaPattern, PILLARS } from '../constants.tsx';
import { ArrowLeft, ArrowRight, Target, Globe, Activity, Crosshair, Navigation, Cpu, ShieldCheck, Zap } from 'lucide-react';

interface PillarPageProps {
  pillar: PillarData;
  onBack: () => void;
  onNavigate: (id: string) => void;
}

const IndustryHUD: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'energy':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,87,34,0.15)_0%,transparent_70%)] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-px h-64 bg-safety animate-[heightGrow_4s_ease-in-out_infinite]"></div>
            <div className="absolute top-1/2 right-1/4 w-px h-64 bg-safety animate-[heightGrow_6s_ease-in-out_infinite_reverse]"></div>
          </div>
          <div className="absolute top-1/4 right-10 flex flex-col items-end gap-2">
            <Activity className="text-safety animate-pulse" size={24} />
            <span className="text-[8px] font-black text-safety tracking-[0.5em] uppercase">Thermal Flow: Nominal</span>
          </div>
        </div>
      );
    case 'maritime':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          <div className="absolute bottom-20 left-10 flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <span className="w-16 h-[1px] bg-silt animate-[widthExpand_3s_infinite]"></span>
              <span className="text-[10px] text-silt font-mono">HDG 284.5°</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-10 h-[1px] bg-silt"></span>
              <span className="text-[10px] text-silt font-mono">SPD 14.2 KTS</span>
            </div>
          </div>
          <div className="absolute top-20 right-20 animate-spin-slow">
            <Navigation className="text-white/20" size={120} />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>
      );
    case 'security':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] bg-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-[scanLine_4s_linear_infinite]"></div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,255,0,0.03)_0px,rgba(0,255,0,0.03)_1px,transparent_1px,transparent_2px)] opacity-40"></div>
          <div className="absolute top-20 right-20">
            <Crosshair className="text-safety animate-pulse" size={48} />
          </div>
        </div>
      );
    case 'civil':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <svg className="w-full h-full">
            <defs>
              <pattern id="civilGridLarge" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#C2B280" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#civilGridLarge)" />
          </svg>
        </div>
      );
    case 'logistics':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_100%]"></div>
        </div>
      );
    case 'procurement':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Globe className="text-white animate-spin-slow" size={400} />
          </div>
        </div>
      );
    case 'diversified':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu className="text-safety animate-pulse" size={500} />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const PillarPage: React.FC<PillarPageProps> = ({ pillar, onBack, onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pillar]);

  const nextPillar = PILLARS[(PILLARS.findIndex(p => p.id === pillar.id) + 1) % PILLARS.length];
  
  return (
    <div className="min-h-screen bg-[#000d1a] text-white animate-fadeIn">
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0 bg-navy">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-black opacity-90"></div>
          <div 
            className="absolute inset-0 flex items-center justify-center text-white/[0.03]"
            style={{ transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.2}px)` }}
          >
            {React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 900, strokeWidth: 0.1 })}
          </div>
          <div className="absolute inset-0 oil-texture opacity-40 mix-blend-overlay"></div>
        </div>

        <IndustryHUD type={pillar.id} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-24">
          <div className="overflow-hidden mb-10">
            <button 
              onClick={onBack}
              className="group flex items-center gap-3 text-silt font-black text-[10px] tracking-[0.4em] uppercase hover:text-white transition-all duration-500 outline-none"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
              Return to Portal
            </button>
          </div>
          
          <div className="max-w-5xl">
            <div className="flex items-center gap-6 mb-8 md:mb-12">
              <div className="p-4 md:p-6 bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl text-safety">
                {pillar.icon}
              </div>
              <div>
                 <span className="text-silt font-black text-[9px] md:text-[10px] tracking-[0.5em] uppercase block mb-2">Industrial Intelligence</span>
                 <div className="h-px w-16 md:w-24 bg-safety"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tighter leading-[1.1] md:leading-tight mb-10 uppercase">
              {pillar.title.split(' & ').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-white/20 block md:inline md:mx-4">&</span>}
                  <span className={i % 2 === 1 ? 'text-silt' : 'text-white'}>{part}</span>
                </React.Fragment>
              ))}
            </h1>

            <p className="text-lg md:text-2xl text-white/50 font-light leading-relaxed border-l-4 border-safety pl-6 md:pl-10 max-w-4xl">
              {pillar.description}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities & Subsidiaries Section */}
      <section className="py-24 md:py-40 bg-navy relative">
        <div className="absolute inset-0 opacity-10 grayscale">
          <OpuamakubaPattern />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-12 mb-12">
              <h2 className="text-3xl font-display font-black uppercase tracking-tight mb-12 text-white flex items-center gap-4">
                <Zap className="text-safety" size={24} />
                Unit Capabilities
              </h2>
              {/* Cards arranged side-by-side in 2 or 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {pillar.focus.map((f, i) => (
                  <div key={i} className="p-8 md:p-10 rounded-[2rem] bg-white/[0.03] backdrop-blur-3xl border border-white/5 hover:border-safety transition-all duration-700 group shadow-2xl">
                    <div className="flex items-center gap-4 md:gap-6 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-safety group-hover:bg-safety group-hover:text-white transition-all">
                        <Target size={20} />
                      </div>
                      <h4 className="text-lg md:text-xl font-black uppercase text-white">{f}</h4>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm leading-relaxed font-medium">Strategic deployment of resources to achieve operational excellence in {f.toLowerCase()}.</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-12">
              <div className="h-full p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-white/[0.04] backdrop-blur-3xl border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                   <Globe size={300} className="animate-spin-slow" />
                 </div>
                 
                 <div className="flex items-center justify-between mb-12 md:mb-16 relative z-10">
                   <h3 className="text-silt font-black text-[10px] md:text-[11px] tracking-[0.5em] uppercase">Subsidiaries</h3>
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-safety animate-pulse"></div>
                     <span className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-widest">Active Units</span>
                   </div>
                 </div>

                 {/* Subsidiaries arranged side-by-side */}
                 <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {pillar.subsidiaries.map((sub, i) => (
                    <div key={i} className="group/sub p-6 md:p-8 bg-white/[0.03] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                        <div className="flex-1">
                          <h4 className="text-xl md:text-2xl font-display font-black mb-1 md:mb-2 uppercase text-white group-hover/sub:text-safety transition-colors tracking-tight">
                            {sub.name}
                          </h4>
                          <div className="flex items-center gap-3 md:gap-4">
                            <p className="text-silt text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                              {sub.division || 'Strategic Division'}
                            </p>
                            <div className="h-px w-6 md:w-8 bg-white/10"></div>
                            <div className="flex items-center gap-2 text-white/30 text-[8px] md:text-[9px] font-bold uppercase tracking-widest group-hover/sub:text-white/60 transition-colors">
                              <ShieldCheck size={12} className="text-safety" />
                              Active
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover/sub:text-safety group-hover/sub:border-safety transition-all">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Unit Navigation */}
      <section className="py-20 md:py-24 bg-crude border-t border-white/5 relative overflow-hidden group">
        <div className="max-w-7xl mx-auto px-6">
          <button 
            onClick={() => onNavigate(nextPillar.id)}
            className="w-full text-left flex items-center justify-between group/next outline-none"
          >
            <div>
              <span className="text-silt font-black text-[10px] md:text-xs tracking-[0.6em] uppercase mb-6 md:mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">Launch Next Industrial Unit</span>
              <span className="text-4xl md:text-7xl lg:text-9xl font-display font-black uppercase tracking-tighter text-white/10 group-hover:text-white transition-all duration-1000">
                {nextPillar.title.split(' & ')[0]}
              </span>
            </div>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-safety group-hover:border-safety transition-all duration-700">
              <ArrowRight size={32} className="text-white md:w-10 md:h-10" />
            </div>
          </button>
        </div>
      </section>

      <style>{`
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes heightGrow { 0%, 100% { height: 100px; } 50% { height: 400px; } }
        @keyframes scanLine { 0% { transform: translateY(-500px); } 100% { transform: translateY(500px); } }
        @keyframes widthExpand { 0%, 100% { width: 40px; } 50% { width: 100px; } }
      `}</style>
    </div>
  );
};

export default PillarPage;
