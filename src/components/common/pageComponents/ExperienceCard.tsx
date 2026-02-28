import React from 'react';
import WorkSectionCard from '@components/common/WorkSectionCard';

type Experience = {
  company?: string;
  role?: string;
  years?: string;
  description?: string;
};

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <WorkSectionCard>
      <div className="flex flex-col h-full gap-4">
        {experience.company && (
          <h3 className="text-xl font-bold">{experience.company}</h3>
        )}
        {experience.years && (
          <p className="text-[var(--blue-color)] text-sm font-medium">
            {experience.years}
          </p>
        )}
        {experience.role && (
          <p className="text-lg font-semibold text-white/90">
            {experience.role}
          </p>
        )}
        {experience.description && (
          <p className="text-white/70 leading-relaxed mt-2">
            {experience.description}
          </p>
        )}
      </div>
    </WorkSectionCard>
  );
};

export default ExperienceCard;
