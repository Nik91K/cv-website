import React from 'react';
import { HERO_SECTION } from '@fixtures/mainPage.fixture';
import type { HeroSectionProps } from '@/types/MainPage';
import Aurora from '@/components/ui/Aurora';
import SplitText from '@/components/ui/SplitText';

const HeroSection: React.FC<HeroSectionProps> = ({ items = HERO_SECTION }) => {
  return (
    <>
      {items.map((item, index) => (
        <section
          className="min-h-screen flex items-center justify-center text-[var(--primary-color)]"
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
          <div className="flex justify-center items-center max-w-7xl mx-auto -translate-y-20">
            <div className="flex flex-col justify-start text-left lg:w-1/2 w-full p-8">
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
              <p className="text-2xl">{item.subtitle}</p>
            </div>
            <div className="hidden lg:flex flex-1 justify-center">
              <img
                src={item.image}
                alt={item.imageTitle}
                className="max-w-xl rounded-3xl shadow-2xl shadow-black/50 transition"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default HeroSection;
