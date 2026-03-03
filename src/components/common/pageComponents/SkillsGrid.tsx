import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import type { AboutItemProps } from '@/types/MainPage';

type SkillsGridProps = Pick<AboutItemProps, 'skills'>;

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {skills.map((skill, index) => (
        <Card
          key={index}
          className="bg-[var(--primary-color)] border-amber-100 shadow-md m-2"
        >
          <CardHeader>
            <CardTitle className="text-center text-2xl text-[var(--secondary-color)]">
              {skill.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {skill.skills && skill.skills.length > 0 ? (
                skill.skills.map((s, i) => (
                  <Badge key={i} variant="default">
                    {s}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Work in progress
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsGrid;
