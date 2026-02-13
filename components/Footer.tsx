
import React from 'react';
import { BRAND_CONFIG, OpuamakubaPattern, PILLARS, SBJLogo } from '../constants.tsx';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, ArrowUpRight, ShieldCheck, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="footer" className="bg-navy relative overflow-hidden text-white scroll-mt-0">
      {/* Visual Accents */}
      <div className="absolute inset-0 oil-texture opacity-20 pointer-events-none"></div>
      
      {/* Layer 1: Brand & Mission Header */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="flex flex-col gap-6 max-w-2xl">
              <SBJLogo className="scale-110 origin-left" />
              <p className="text-white/40 text-sm md:text-base leading-relaxed font-light italic">
                "{BRAND_CONFIG.mission}"
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
                { icon: <Twitter size={18} />, label: "Twitter" },
                { icon: <Globe size={18} />, label: "Web" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="group flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:bg-safety hover:border-safety transition-all duration-500 rounded-sm"
                >
                  <span className="text-white group-hover:scale-110 transition-transform">{social.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: Core Operational Directory (Grid) */}
      <div className="relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            
            {/* Column 1: Industrial Divisions */}
            <div>
              <h5 className="text-silt font-display font-black uppercase tracking-[0.3em] text-[11px] mb-10 flex items-center gap-3">
                <Briefcase size={14} className="text-safety" />
                Our Pillars
              </h5>
              <ul className="space-y-4">
                {PILLARS.map((pillar) => (
                  <li key={pillar.id}>
                    <a 
                      href={`#${pillar.id}`} 
                      onClick={(e) => scrollToSection(e, pillar.id)}
                      className="group flex items-center justify-between text-white/40 hover:text-white text-[10px] transition-all uppercase tracking-[0.2em] font-bold"
                    >
                      {pillar.title.split(' & ')[0]}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Corporate Presence */}
            <div>
              <h5 className="text-silt font-display font-black uppercase tracking-[0.3em] text-[11px] mb-10 flex items-center gap-3">
                <MapPin size={14} className="text-safety" />
                Headquarters
              </h5>
              <div className="space-y-6">
                <div className="p-5 bg-white/5 border border-white/5 rounded-sm">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-widest block mb-2">Primary Office</span>
                  <p className="text-xs text-white/70 leading-relaxed uppercase tracking-tight">
                    {BRAND_CONFIG.contact.address}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-safety animate-pulse">
                  <ShieldCheck size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Secured Zone</span>
                </div>
              </div>
            </div>

            {/* Column 3: Communication Channels */}
            <div>
              <h5 className="text-silt font-display font-black uppercase tracking-[0.3em] text-[11px] mb-10 flex items-center gap-3">
                <Mail size={14} className="text-safety" />
                Inquiry Portal
              </h5>
              <div className="space-y-8">
                <div>
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-widest block mb-3">Email Access</span>
                  <div className="flex flex-col gap-2">
                    {BRAND_CONFIG.contact.email.map((e, i) => (
                      <a key={i} href={`mailto:${e}`} className="text-xs text-white/70 hover:text-safety transition-colors truncate font-medium">
                        {e}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-widest block mb-3">Priority Line</span>
                  <div className="flex flex-col gap-2">
                    {BRAND_CONFIG.contact.phone.map((p, i) => (
                      <p key={i} className="text-xs text-white/70 font-medium tracking-widest">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Quality & Standards */}
            <div className="flex flex-col justify-between">
              <div>
                <h5 className="text-silt font-display font-black uppercase tracking-[0.3em] text-[11px] mb-10 flex items-center gap-3">
                  <ShieldCheck size={14} className="text-safety" />
                  Standards
                </h5>
                <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-widest">
                  Committed to ISO compliant operations and indigenous content excellence across all Nigerian operational zones.
                </p>
              </div>
              <button 
                onClick={scrollToTop}
                className="mt-10 md:mt-0 flex items-center gap-4 text-white/20 hover:text-white transition-all group"
              >
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-full group-hover:border-safety transition-all">
                  <ArrowUpRight size={20} className="-rotate-45" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">To Top</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Layer 3: Compliance & Legal Strip + Centered Credit */}
      <div className="relative z-10 border-t border-white/5 bg-navy/50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col items-center gap-10">
            {/* Sitemap Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
              {["Sitemap", "Legal", "Safety", "Privacy"].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-black hover:text-safety transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Centered Compliance & Credit Block */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-white/5"></div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
                  <span className="text-[9px] font-black tracking-widest text-white/40">NG</span>
                </div>
                <div className="h-px w-8 bg-white/5"></div>
              </div>
              
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium leading-relaxed">
                © {new Date().getFullYear()} SBJ Group Industries Limited. All Rights Reserved.
              </p>

              {/* The Balanced, Centered Credit */}
              <div className="mt-2 group/credit cursor-default">
                <p className="text-[9px] font-black uppercase tracking-[0.6em] text-silt/50 group-hover/credit:text-silt transition-all duration-700">
                  Engineered by <span className="text-white/80 group-hover/credit:text-white transition-colors">Ordy Prime LTD</span>
                </p>
                <div className="h-[1px] w-12 bg-silt/20 mx-auto mt-3 group-hover/credit:w-24 group-hover/credit:bg-safety transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Base Accent */}
      <div className="relative z-10">
        <OpuamakubaPattern />
      </div>
    </footer>
  );
};

export default Footer;
