
import React, { useEffect } from 'react';
import { OpuamakubaPattern } from '../constants.tsx';
import { ArrowLeft, Heart, GraduationCap, Sprout, Briefcase, HelpingHand, Droplets } from 'lucide-react';

interface EgberipapaFoundationProps {
  onBack: () => void;
}

export default function EgberipapaFoundation({ onBack }: EgberipapaFoundationProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white animate-fadeIn">
      {/* Philanthropic Hero */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Empowerment" 
            className="w-full h-full object-cover grayscale brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-24 text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-silt font-black text-[10px] tracking-[0.4em] uppercase mb-10 hover:text-white transition-all duration-500 outline-none"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Portal Exit
          </button>
          
          <div className="reveal-entry stagger-1 max-w-5xl">
            <span className="text-safety font-black text-[10px] md:text-xs tracking-[0.6em] uppercase mb-8 block">Operational Since 2011</span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-tight md:leading-[1.1] mb-10 uppercase">
              Egberipapa <br/>Leadership <span className="text-silt">Foundation</span>
            </h1>
            <div className="flex justify-center mb-10">
               <div className="h-1.5 w-24 bg-safety"></div>
            </div>
            <p className="text-lg md:text-2xl lg:text-3xl text-white/50 font-medium tracking-[0.1em] uppercase max-w-3xl leading-relaxed mx-auto italic">
              "Empowering Lives through Strategic Philanthropy"
            </p>
          </div>
        </div>
      </section>

      {/* Program Grid - Standardized Responsive Protocol */}
      <section className="py-24 md:py-40 bg-crude relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] grayscale">
           <OpuamakubaPattern />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6 text-white leading-none">Impact <span className="text-safety">Force</span></h2>
            <div className="h-1.5 w-32 bg-safety mx-auto"></div>
          </div>

          {/* Grid: 1-col mobile, 2-col tablet, 3-col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { 
                icon: <Briefcase size={32} />, 
                title: "Economic Independence", 
                desc: "Strategic startup grants and capital injection for local entrepreneurs driving the grassroots economy." 
              },
              { 
                icon: <Sprout size={32} />, 
                title: "Agro-Industrial Support", 
                desc: "Resource allocation for rural farmers to enhance yields and secure local food supply chains." 
              },
              { 
                icon: <GraduationCap size={32} />, 
                title: "Academic Pipeline", 
                desc: "Comprehensive scholarships for the next generation of industrial leaders and technical specialists." 
              },
              { 
                icon: <HelpingHand size={32} />, 
                title: "Crisis Operations", 
                desc: "Rapid response logistics for orphanages and communities facing environmental or social emergencies." 
              },
              { 
                icon: <Droplets size={32} />, 
                title: "Utility Infrastructure", 
                desc: "Engineering clean water solutions and critical power links for underserved territorial zones." 
              },
              { 
                icon: <Heart size={32} />, 
                title: "Social Welfare", 
                desc: "Integrated health and wellness programs designed to increase the regional quality of life indices." 
              }
            ].map((program, i) => (
              <div key={i} className="p-10 md:p-12 bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3rem] border border-white/5 hover:border-safety transition-all duration-700 reveal-on-scroll shadow-2xl group text-center flex flex-col items-center">
                <div className="text-safety group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-8 md:mb-10 p-5 bg-white/5 rounded-3xl">
                  {program.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-display font-black uppercase mb-4 md:mb-6 text-white leading-tight">{program.title}</h4>
                <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed max-w-xs">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Call to Action */}
      <section className="py-24 md:py-40 bg-navy text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-8xl font-display font-black mb-10 md:mb-12 uppercase tracking-tighter text-white leading-none">
            Engineering <span className="text-silt">Social Change</span>
          </h2>
          <button 
            onClick={onBack}
            className="bg-white text-navy px-12 md:px-20 py-6 md:py-8 rounded-full font-black text-[10px] md:text-xs tracking-[0.5em] uppercase hover:bg-safety hover:text-white transition-all duration-700 shadow-2xl"
          >
            SUPPORT THE LEGACY
          </button>
        </div>
      </section>
    </div>
  );
}
