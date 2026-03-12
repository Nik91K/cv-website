import React from 'react';
import type { HeroSectionProps } from '@/types/MainPage';
import Aurora from '@components/ui/Aurora';
import SplitText from '@components/ui/SplitText';
import { motion } from 'motion/react';

const HeroSection: React.FC<HeroSectionProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <section
          className="min-h-screen flex items-center justify-center text-[var(--primary-color)] overflow-hidden"
          id={item.id}
          key={index}
        >
          <div className="absolute inset-0">
            <Aurora
              colorStops={[
                '#1E3A8A',
                '#2563EB',
                '#06B6D4',
                '#22D3EE',
                '#A855F7',
              ]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto -translate-y-20">
            <div className="flex flex-col text-left lg:w-1/2 w-full p-8 pt-28">
              <SplitText
                text={item.title}
                className="text-5xl md:text-8xl font-bold mb-6"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl"
              >
                {item.subtitle}
              </motion.p>
            </div>
            <div className="hidden lg:flex flex-1 justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.imageTitle}
                className="w-full max-w-[500px] h-auto rounded-3xl shadow-2xl shadow-black/50"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default HeroSection;
