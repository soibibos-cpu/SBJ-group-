
import React, { useState } from 'react';
import { PILLARS } from '../constants.tsx';
import { Eye, Shield, Radio, MapPin, Power, Activity, Terminal, ShieldCheck, Zap, Crosshair } from 'lucide-react';

const SecurityHub: React.FC = () => {
  const [nightOps, setNightOps] = useState(false);
  const pillar = PILLARS.find(p => p.id === 'security');

  return (
    <section id="security-hub" className={`relative py-40 transition-colors duration-1000 overflow-hidden scroll-mt-24 ${nightOps ? 'bg-black' : 'bg-crude'}`}>
      {/* Scanning Line Effect for Night Ops */}
      {nightOps && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="h-full w-full opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '100% 4px'
          }}></div>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-[scan_4s_linear_infinite]"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-6 mb-10 reveal-on-scroll">
            <span className={`px-4 py-2 text-[10px] font-bold tracking-[0.4em] uppercase border transition-all duration-700 ${nightOps ? 'border-green-500 text-green-500' : 'border-safety text-safety'}`}>
              {nightOps ? 'SECURED PROTOCOL ACTIVE' : 'SECURITY & SURVEILLANCE'}
            </span>
            <button 
              onClick={() => setNightOps(!nightOps)}
              className={`flex items-center gap-3 px-6 py-3 text-xs font-black transition-all rounded-full ${nightOps ? 'bg-green-600 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
            >
              <Power className="w-4 h-4" />
              {nightOps ? 'TERMINATE NIGHT OPS' : 'INITIATE NIGHT OPS'}
            </button>
          </div>

          <h2 className={`text-4xl md:text-8xl font-display font-extrabold leading-[1] mb-12 tracking-tighter transition-colors duration-700 reveal-on-scroll stagger-1 uppercase ${nightOps ? 'text-green-500' : 'text-white'}`}>
            SECURING <br />
            <span className={nightOps ? 'text-white' : 'text-silt'}>NATIONAL ASSETS.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/50 font-light mb-20 max-w-2xl reveal-on-scroll stagger-2 leading-relaxed">
            From pipeline protection to armed tactical escorts, our intelligence-led security framework ensures territorial integrity across the Cawthorne Channel and beyond.
          </p>

          {/* Symmetrical Metrics Cards - Stacked on mobile, Grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl">
            {[
              { icon: <Shield />, label: 'Tactical', val: '24/7' },
              { icon: <Eye />, label: 'Intel', val: 'Active' },
              { icon: <Radio />, label: 'Comms', val: 'Digital' },
              { icon: <MapPin />, label: 'Global', val: 'Secured' }
            ].map((item, i) => (
              <div key={i} className={`p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border backdrop-blur-2xl transition-all duration-700 reveal-on-scroll stagger-${i + 2} flex flex-col items-center ${nightOps ? 'border-green-500/20 bg-green-500/5 hover:border-green-500/50 hover:bg-green-500/10' : 'border-white/10 bg-white/[0.03] hover:border-safety/30 hover:bg-white/[0.08]'}`}>
                <div className={`mb-4 md:mb-6 transition-colors duration-700 transform ${nightOps ? 'text-green-500' : 'text-safety'}`}>
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1 md:mb-2">{item.label}</p>
                <p className="text-xl md:text-2xl font-black text-white">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </section>
  );
};

export default SecurityHub;
