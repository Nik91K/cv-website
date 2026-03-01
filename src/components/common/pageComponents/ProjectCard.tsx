import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { Separator } from '@components/ui/separator';

type Projects = {
  title?: string;
  text?: string;
  image?: string;
  imageAlt?: string;
  links?: string[];
  technologies?: string[];
};

const ProjectCard: React.FC<{ project: Projects }> = ({ project }) => {
  return (
    <Card className="h-full w-full bg-white/5 border-white/10">
      <CardHeader className="p-0">
        {project.image && (
          <img
            src={project.image}
            alt={project.imageAlt || project.title || 'Project image'}
            className="w-full h-full object-cover rounded-t-2xl"
            loading="lazy"
          />
        )}
        {project.title && (
          <CardTitle className="px-6 pt-4 text-xl font-bold">
            {project.title}
          </CardTitle>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-4 px-6 pb-6">
        {project.text && (
          <p className="text-white/80 leading-relaxed">{project.text}</p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={`tech-${index}`} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <>
            <Separator className="bg-white/10" />
            <nav aria-label="Project links">
              <ul className="flex flex-col gap-2">
                {project.links.map((link, index) => (
                  <li key={`link-${index}`}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--blue-color)] hover:text-[var(--blue-color-hover)] hover:underline transition break-all"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
