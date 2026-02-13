
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Home, LayoutDashboard, Globe, Shield, Zap } from 'lucide-react';
import { PILLARS, OpuamakubaPattern, BRAND_CONFIG, SBJLogo } from '../constants.tsx';

interface HeaderProps {
  onLogoClick?: () => void;
  onNavigate?: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Toggle Body Scroll Lock for Mobile Menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);
      
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScroll / height) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'home-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onNavigate?.('home');
    } else if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate?.(id);
    }
    setIsMenuOpen(false);
  };

  const handleLogoAction = () => {
    onLogoClick?.();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          isScrolled 
            ? 'bg-navy/95 backdrop-blur-xl py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border-b border-white/5' 
            : 'bg-transparent py-8'
        } ${isMenuOpen ? 'bg-navy !py-6' : ''}`}
      >
        {/* Scroll Progress Indicator */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-safety transition-all duration-300 z-50 shadow-[0_0_10px_#FF5722]" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Official Logo Branding Area */}
          <div 
            onClick={handleLogoAction}
            className="flex items-center cursor-pointer group"
          >
            <div className="relative flex items-center">
              <div className="absolute inset-0 bg-safety opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-700"></div>
              <SBJLogo className="transform transition-all duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Desktop Navigation Engine */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('home-top')}
              className="group relative text-[10px] font-black tracking-[0.3em] uppercase text-white hover:text-safety transition-colors flex items-center gap-2"
            >
              <Home size={12} className="opacity-40 group-hover:opacity-100" />
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-safety transition-all duration-500 group-hover:w-full"></span>
            </button>
            
            {/* Mega-Menu Trigger */}
            <div className="group relative">
              <button className="flex items-center gap-2 text-[12px] font-black tracking-[0.3em] uppercase text-white hover:text-safety transition-all duration-300">
                <Zap size={14} className="text-safety opacity-80 group-hover:opacity-100" />
                OUR BUSINESS
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-500 text-silt" />
              </button>
              
              <div className="absolute top-full right-1/2 translate-x-1/2 pt-6 w-[700px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="bg-navy border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden rounded-sm">
                  <div className="grid grid-cols-2 p-6 gap-2">
                    {PILLARS.map((pillar) => (
                      <button
                        key={pillar.id}
                        onClick={() => handleNavClick(pillar.id)}
                        className="flex items-start gap-4 p-4 hover:bg-white/5 text-left transition-all duration-300 group/item rounded-sm border border-transparent hover:border-white/10"
                      >
                        <div className="mt-1 w-10 h-10 flex items-center justify-center bg-white/5 text-silt group-hover/item:text-safety group-hover/item:scale-110 transition-all duration-500 border border-white/5">
                          {/* Use any as type parameter for ReactElement to allow icon-specific props like size */}
                          {React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 18 })}
                        </div>
                        <div>
                          <span className="text-[10px] font-black tracking-widest uppercase text-white group-hover/item:text-safety block mb-1">
                            {pillar.title.split(' & ')[0]}
                          </span>
                          <p className="text-[9px] text-white/40 uppercase tracking-tighter line-clamp-1">
                            {pillar.focus[0]} & Specialized Services
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="bg-white/5 p-4 flex justify-between items-center border-t border-white/5">
                    <span className="text-[8px] font-bold text-white/30 tracking-[0.3em] uppercase">Unified Industrial Excellence</span>
                    <button onClick={() => handleNavClick('portfolio')} className="text-[9px] font-black text-silt hover:text-white transition-colors uppercase flex items-center gap-2">
                      Full Portfolio <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleNavClick('portfolio')}
              className="group relative text-[10px] font-black tracking-[0.3em] uppercase text-white hover:text-safety transition-colors"
            >
              Portfolio
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-safety transition-all duration-500 group-hover:w-full"></span>
            </button>

            <button 
              onClick={() => handleNavClick('#contact-section')}
              className="group relative text-[10px] font-black tracking-[0.3em] uppercase text-white hover:text-safety transition-colors"
            >
              CONTACT
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-safety transition-all duration-500 group-hover:w-full"></span>
            </button>

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <button 
              onClick={() => handleNavClick('#contact-section')}
              className="relative overflow-hidden group bg-safety text-white px-8 py-3.5 text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]"
            >
              <span className="relative z-10">Inquire</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
            </button>
          </nav>

          {/* Mobile Toggle Trigger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-[110] w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all"
          >
            {isMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Staggered Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[95] transition-all duration-1000 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-navy/95 backdrop-blur-2xl"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-navy shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } border-l border-white/5 flex flex-col`}
        >
          <div className="flex flex-col h-full pt-32 pb-12 px-8 overflow-y-auto">
            <nav className="flex flex-col gap-6">
              {[
                { label: 'Home', id: 'home-top' },
                { label: 'Corporate Portfolio', id: 'portfolio' },
                { label: 'OUR BUSINESS PILLARS', id: 'business', isLabel: true },
              ].map((item, idx) => (
                item.isLabel ? (
                  <div key={idx} className="mt-8 mb-4">
                    <h3 className="text-2xl font-display font-black text-silt tracking-[0.2em] uppercase">{item.label}</h3>
                    <div className="h-1 w-16 bg-safety mt-2"></div>
                  </div>
                ) : (
                  <button 
                    key={idx}
                    onClick={() => handleNavClick(item.id)}
                    className="text-4xl font-display font-black tracking-tighter uppercase text-left text-white hover:text-safety transition-all"
                  >
                    {item.label}
                  </button>
                )
              ))}

              <div className="grid grid-cols-1 gap-3 mt-2">
                {PILLARS.map((pillar) => (
                  <button 
                    key={pillar.id}
                    onClick={() => handleNavClick(pillar.id)}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:bg-safety/20 text-left transition-all group"
                  >
                    <div className="text-silt group-hover:text-white transition-colors">
                      {/* Use any as type parameter for ReactElement to allow icon-specific props like size */}
                      {React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 18 })}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white">
                      {pillar.title.split(' & ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              <div className="h-px bg-white/5 my-8"></div>

              <button 
                onClick={() => handleNavClick('#contact-section')}
                className="text-2xl font-display font-black uppercase text-left text-white/60 hover:text-safety transition-all"
              >
                CONTACT
              </button>
            </nav>
            
            <div className="mt-auto pt-12">
              <button 
                onClick={() => handleNavClick('#contact-section')}
                className="w-full bg-white text-navy py-5 font-black text-xs tracking-[0.5em] uppercase hover:bg-safety hover:text-white transition-all shadow-2xl"
              >
                Inquiry Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
