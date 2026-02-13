
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import BentoGrid from './components/BentoGrid.tsx';
import SecurityHub from './components/SecurityHub.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import PillarPage from './components/PillarPage.tsx';
import CorporatePortfolio from './components/CorporatePortfolio.tsx';
import { OpuamakubaPattern, PILLARS, BRAND_CONFIG } from './constants.tsx';
import { PillarData } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio' | string>('home');
  const [activePillar, setActivePillar] = useState<PillarData | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'portfolio') {
        setCurrentPage('portfolio');
        setActivePillar(null);
      } else {
        const pillar = PILLARS.find(p => p.id === hash);
        if (pillar) {
          setActivePillar(pillar);
          setCurrentPage(pillar.id);
        } else {
          setActivePillar(null);
          setCurrentPage('home');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateToPillar = (id: string) => {
    window.location.hash = id;
  };

  const navigateHome = () => {
    window.location.hash = '';
  };

  const navigateToPortfolio = () => {
    window.location.hash = 'portfolio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'portfolio') {
    return (
      <div className="min-h-screen font-sans selection:bg-safety selection:text-white bg-navy overflow-hidden">
        <Header onLogoClick={navigateHome} onNavigate={navigateToPillar} />
        <div className="animate-fadeIn">
          <CorporatePortfolio onBack={navigateHome} />
        </div>
        <Footer />
      </div>
    );
  }

  if (activePillar) {
    return (
      <div className="min-h-screen font-sans selection:bg-safety selection:text-white bg-navy overflow-hidden">
        <Header onLogoClick={navigateHome} onNavigate={navigateToPillar} />
        <div className="animate-fadeIn">
          <PillarPage 
            pillar={activePillar} 
            onBack={navigateHome} 
            onNavigate={navigateToPillar} 
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div id="home" className="min-h-screen font-sans selection:bg-safety selection:text-white bg-crude overflow-hidden">
      <Header onLogoClick={navigateHome} onNavigate={navigateToPillar} />
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 oil-texture opacity-20"></div>
        <div className="absolute inset-0 oil-texture opacity-10 rotate-12 scale-125"></div>
      </div>

      <main className="relative z-10 animate-fadeIn">
        <Hero />
        
        {/* Corporate Purpose - Centered Layout */}
        <section className="py-40 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-safety/10 rounded-full blur-[120px] animate-pulse"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-3xl p-12 md:p-20 border border-white/10 rounded-[3rem] shadow-2xl relative reveal-on-scroll text-center">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <OpuamakubaPattern />
              </div>
              <div className="w-16 h-1 bg-safety mb-12 mx-auto"></div>
              <h3 className="text-white font-display font-black text-4xl md:text-6xl mb-10 tracking-tighter uppercase leading-none">Delivering Industrial Excellence</h3>
              <p className="text-white/60 text-xl leading-relaxed mb-16 font-light">
                SBJ Group is a diversified and fully integrated industrial conglomerate. Our strategic approach to energy, infrastructure, and security serves as a foundation for sustainable development across the Gulf of Guinea.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={navigateToPortfolio}
                  className="bg-white/10 hover:bg-safety text-white px-12 py-6 rounded-full font-black text-[10px] tracking-[0.4em] flex items-center gap-4 outline-none group uppercase transition-all shadow-xl"
                >
                  OUR CORPORATE LEGACY <span className="transition-transform group-hover:translate-x-3">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section - Symmetrical Grid: Stacked on Mobile, Side-by-Side on Desktop */}
        <section className="py-40 bg-crude relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <OpuamakubaPattern />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-12 md:p-20 bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[4rem] reveal-on-scroll stagger-1 flex flex-col items-center text-center">
              <div className="w-16 h-1 bg-silt mb-12"></div>
              <h3 className="text-silt font-display font-black uppercase tracking-[0.3em] text-[10px] mb-10">VISION PROTOCOL</h3>
              <p className="text-2xl md:text-3xl text-white font-light italic leading-tight max-w-lg">
                "{BRAND_CONFIG.vision}"
              </p>
            </div>
            <div className="p-12 md:p-20 bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[4rem] reveal-on-scroll stagger-2 flex flex-col items-center text-center">
              <div className="w-16 h-1 bg-safety mb-12"></div>
              <h3 className="text-safety font-display font-black uppercase tracking-[0.3em] text-[10px] mb-10">MISSION OBJECTIVE</h3>
              <p className="text-2xl md:text-3xl text-white font-light leading-tight max-w-lg">
                "{BRAND_CONFIG.mission}"
              </p>
            </div>
          </div>
        </section>

        <BentoGrid onPillarClick={navigateToPillar} />
        <SecurityHub />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
