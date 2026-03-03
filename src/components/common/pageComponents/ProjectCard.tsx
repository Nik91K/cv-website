import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { Separator } from '@components/ui/separator';
import { Button } from '@components/ui/button';
import { ExternalLink } from 'lucide-react';

type Project = {
  title?: string;
  text?: string;
  image?: string | null;
  imageAlt?: string;
  links?: string[];
  technologies?: string[];
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showFullText, setShowFullText] = useState(false);
  const isLong = (project.text?.length ?? 0) > 200;

  return (
    <Card className="flex flex-col h-full w-full bg-white/5 border-white/10 overflow-hidden">
      <div className="h-48 w-full overflow-hidden shrink-0">
        <img
          src={project.image || 'https://placehold.co/600x400'}
          alt={project.imageAlt || project.title || 'Project image'}
          className="w-full h-full object-cover transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <CardHeader className="pb-2">
        {project.title && (
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-4 px-6 pb-6 flex-grow">
        {project.text && (
          <>
            <p
              className={`text-white/80 leading-relaxed text-sm ${!showFullText && isLong ? 'line-clamp-4' : ''}`}
            >
              {project.text}
            </p>
            {isLong && (
              <Button
                onClick={() => setShowFullText(!showFullText)}
                variant="outline"
                size="sm"
                className="self-start"
              >
                {showFullText ? 'Show less' : 'Read more'}
              </Button>
            )}
          </>
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
      </CardContent>

      {project.links && project.links.length > 0 && (
        <CardFooter className="px-6 pb-6 pt-0 flex flex-col gap-2 items-start">
          <Separator className="bg-white/10 mb-2" />
          <nav aria-label="Project links" className="w-full">
            <ul className="flex flex-col gap-2">
              {project.links.map((link, index) => (
                <li key={`link-${index}`}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue-color)] hover:text-[var(--blue-color-hover)] hover:underline transition"
                  >
                    <ExternalLink size={14} className="shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
