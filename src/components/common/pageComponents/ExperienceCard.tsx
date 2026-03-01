import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';

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
    <Card className="h-full w-full bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-white/10 transition-all duration-300">
      <CardHeader>
        {experience.company && (
          <CardTitle className="text-xl font-bold">
            {experience.company}
          </CardTitle>
        )}
        {experience.years && (
          <Badge
            variant="outline"
            className="w-fit text-[var(--blue-color)] border-[var(--blue-color)]"
          >
            {experience.years}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {experience.role && (
          <p className="text-lg font-semibold text-white/90">
            {experience.role}
          </p>
        )}
        {experience.description && (
          <p className="text-white/70 leading-relaxed">
            {experience.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
