import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { motion } from 'motion/react';

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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="h-full"
    >
      <Card className="h-full w-full bg-white/5 border-white/10 overflow-hidden hover:border-white/25 hover:bg-white/8 transition-colors duration-200">
        <CardHeader>
          {experience.company && (
            <CardTitle className="text-xl font-bold">
              {experience.company}
            </CardTitle>
          )}
          {experience.years && (
            <Badge
              variant="outline"
              className="w-fit text-(--blue-color) border-(--blue-color)"
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
    </motion.div>
  );
};

export default ExperienceCard;
