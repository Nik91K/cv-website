import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { ArrowRight } from 'lucide-react';

type Project = {
  id?: number;
  title?: string;
  text?: string;
  image?: string | null;
  imageAlt?: string;
  links?: string[];
  technologies?: string[];
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const preview = project.text
    ? project.text.length > 140
      ? project.text.slice(0, 140).trimEnd() + '…'
      : project.text
    : null;

  return (
    <Link
      to={`/projects/${project.id}`}
      className="block h-full w-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--blue-color) rounded-xl"
      aria-label={`View ${project.title} project`}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="h-full"
      >
        <Card className="flex flex-col h-full w-full bg-white/5 border-white/10 overflow-hidden group-hover:border-white/25 group-hover:bg-white/8 transition-colors duration-200">
          <div className="h-48 w-full overflow-hidden shrink-0 bg-white/5">
            <img
              src={
                project.image ??
                'https://placehold.co/600x400/1a1a1a/444?text=Project'
              }
              alt={project.imageAlt ?? project.title ?? 'Project image'}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <CardHeader className="pb-2">
            {project.title && (
              <CardTitle className="text-xl font-bold flex items-center justify-between gap-2">
                <span>{project.title}</span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-white/30 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                />
              </CardTitle>
            )}
          </CardHeader>

          <CardContent className="flex flex-col gap-4 px-6 pb-6 grow">
            {preview && (
              <p className="text-white/60 leading-relaxed text-sm">{preview}</p>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.technologies.slice(0, 5).map(tech => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-white/5 border border-white/10"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 5 && (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-white/5 border border-white/10"
                  >
                    +{project.technologies.length - 5}
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
