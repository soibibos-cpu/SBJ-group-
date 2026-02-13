
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { BRAND_CONFIG, OpuamakubaPattern } from '../constants.tsx';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPillars = () => {
    document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToPortfolio = () => {
    window.location.hash = 'portfolio';
  };

  return (
    <section className="relative min-h-screen md:h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Immersive Video Background with Parallax */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden bg-black will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover brightness-[0.25] scale-110"
        >
          <source 
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c1633513364234027735391c53e0d86f78e03e54&profile_id=165&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
        </video>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-black"></div>
        <div 
          className="absolute inset-0 oil-texture opacity-30 mix-blend-overlay"
          style={{ transform: `scale(${1 + scrollY * 0.0005}) rotate(${scrollY * 0.02}deg)` }}
        ></div>
      </div>
      
      {/* Content Container: Centered Alignment */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-6 text-center will-change-transform py-12 md:py-0"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6 reveal-entry justify-center" style={{ animationDelay: '200ms' }}>
            <div className="h-[1px] w-12 bg-silt/40"></div>
            <span className="text-silt text-[10px] md:text-xs font-display font-bold tracking-[0.3em] uppercase">Industrial Excellence</span>
            <div className="h-[1px] w-12 bg-silt/40"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold text-white leading-[1.1] mb-8 tracking-tighter reveal-entry uppercase max-w-6xl mx-auto" style={{ animationDelay: '400ms' }}>
            Integrated <span className="text-silt">Energy</span>, Construction <br className="hidden md:block" /> & <span className="text-silt">Security</span> Solutions
          </h2>
          
          <div className="max-w-3xl mx-auto reveal-entry mb-10" style={{ animationDelay: '600ms' }}>
            <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
              SBJ Upstream Oil & Gas Limited delivers world-class expertise in energy, construction, and procurement, backed by cutting-edge security technologies—protecting vital infrastructure and securing Nigeria’s economic future.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 reveal-entry" style={{ animationDelay: '800ms' }}>
            <button 
              onClick={scrollToPillars}
              className="bg-safety text-white px-8 md:px-12 py-4 md:py-5 font-black text-[10px] md:text-xs tracking-[0.2em] uppercase shadow-2xl hover:bg-safety/90 transition-all flex items-center gap-3 group outline-none"
            >
              Explore Our Businesses
              <div className="w-6 h-[1px] bg-white group-hover:w-10 transition-all"></div>
            </button>
            <button 
              onClick={goToPortfolio}
              className="border border-white/20 backdrop-blur-md text-white px-8 md:px-12 py-4 md:py-5 font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all outline-none"
            >
              Corporate Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 reveal-entry" 
        style={{ animationDelay: '1200ms' }}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-white">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 reveal-entry overflow-hidden" 
        style={{ animationDelay: '1000ms' }}
      >
        <OpuamakubaPattern />
      </div>
    </section>
  );
};

export default Hero;
