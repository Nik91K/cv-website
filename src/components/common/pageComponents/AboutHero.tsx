import React from 'react';
import type { AboutItemProps } from '@/types/MainPage';
import { Badge } from '@components/ui/badge';
import SkillsGrid from '@components/common/pageComponents/SkillsGrid';

const AboutHero: React.FC<AboutItemProps> = ({
  title,
  text,
  id,
  languages,
  skills,
}) => {
  return (
    <section
      id={id}
      className="w-full min-h-screen bg-gradient-to-b from-sky-100 to-[var(--primary-color)] flex items-center justify-center py-24 px-6"
    >
      <div className="container text-center text-[var(--secondary-color)]">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8">{title}</h2>
        <p className="text-left color- md:text-lg leading-relaxed ">{text}</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">{languages.title}</h2>
          <ul className="flex flex-wrap gap-3 justify-center max-w-md mx-auto">
            {languages.items && languages.items.length > 0 ? (
              languages.items.map((item, index) => (
                <li key={index}>
                  <Badge variant="default" className="px-4 py-2 text-sm">
                    <span className="font-medium">{item.name}</span>
                    {item.level && (
                      <span className="ml-2 text-xs text-gray-500">
                        {item.level}
                      </span>
                    )}
                  </Badge>
                </li>
              ))
            ) : (
              <p>{languages.title ?? 'title'}</p>
            )}
          </ul>
        </div>
        <div className="mt-2">
          <SkillsGrid skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
