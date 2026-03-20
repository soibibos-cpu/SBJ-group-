
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { OpuamakubaPattern, SUBSIDIARIES } from '../constants.tsx';

const SubsidiariesSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  
  // Triple the array to ensure seamless looping even with dragging
  const extendedSubsidiaries = [...SUBSIDIARIES, ...SUBSIDIARIES, ...SUBSIDIARIES];

  return (
    <section className="py-32 bg-crude relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <OpuamakubaPattern />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="w-16 h-1 bg-safety mb-8"></div>
          <h2 className="text-white font-display font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6">
            Our Subsidiaries
          </h2>
          <p className="text-white/50 max-w-2xl font-light text-lg">
            A diverse portfolio of specialized companies driving industrial growth across the Gulf of Guinea.
          </p>
        </div>

        <div 
          className="relative overflow-hidden py-10 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{
              x: isHovered ? undefined : ["0%", "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15, // Faster duration (was effectively slower before)
                ease: "linear",
              },
            }}
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
          >
            {extendedSubsidiaries.map((sub, index) => (
              <div 
                key={index} 
                className="inline-flex flex-col items-center mx-12 group"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 mb-6 relative grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.05] hover:border-safety/30 shadow-2xl group-hover:scale-105 transition-transform">
                  {sub.logo ? (
                    <img 
                      src={sub.logo} 
                      alt={sub.name} 
                      className="w-full h-full object-contain p-6 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/20 text-sm font-black tracking-tighter">{sub.name.substring(0, 3)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-safety/20 rounded-[2.5rem] transition-colors duration-500"></div>
                </div>
                <h3 className="text-white font-display font-bold text-[10px] tracking-[0.3em] uppercase text-center opacity-40 group-hover:opacity-100 group-hover:text-safety transition-all duration-500 max-w-[160px] whitespace-normal">
                  {sub.name}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
