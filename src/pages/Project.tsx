import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Badge } from '@components/ui/badge';
import { Button } from '@components/ui/button';
import { Separator } from '@components/ui/separator';
import { WORK } from '@fixtures/mainPage.fixture';
import LayoutPage from '@/layoutPage/index';
import ProjectImage from '@components/common/pageComponents/ProjectImage';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = WORK.projects.items.find(p => p.id === Number(id));

  if (!project) {
    return (
      <LayoutPage>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-semibold">Project not found.</p>
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </Button>
        </div>
      </LayoutPage>
    );
  }

  const githubLink = project.links?.find(l => l.includes('github'));
  const liveLink = project.links?.find(l => !l.includes('github'));

  return (
    <LayoutPage>
      <div className="py-[11vh] px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mb-10"
          >
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/90 transition-colors duration-200"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Back to projects
            </button>
          </motion.div>

          <ProjectImage
            images={
              project.images || [
                'https://placehold.co/1200x600/1a1a1a/444?text=No+Image',
              ]
            }
          />

          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <h2 className="md:text-5xl font-semibold leading-tight tracking-tight">
              {project.title}
            </h2>

            <div className="flex items-center gap-3 shrink-0">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-white/20 hover:border-white/50 hover:bg-white/5 transition-all"
                  >
                    <Github size={15} />
                    Source
                  </Button>
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live site"
                >
                  <Button size="sm" className="gap-2">
                    <ExternalLink size={15} />
                    Live site
                  </Button>
                </a>
              )}
            </div>
          </motion.div>

          <Separator className="bg-white/10 mb-10" />

          <motion.section
            custom={1}
            initial="hidden"
            animate="show"
            className="mb-12"
          >
            <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Overview
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              {project.text}
            </p>
          </motion.section>

          {project.technologies && project.technologies.length > 0 && (
            <motion.section
              custom={2}
              initial="hidden"
              animate="show"
              className="mb-12"
            >
              <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                Tech stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.35 + i * 0.04,
                      ease: 'backOut',
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-150 cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {project.links && project.links.length > 1 && (
            <motion.section custom={3} initial="hidden" animate="show">
              <Separator className="bg-white/10 mb-8" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                Links
              </h2>
              <nav aria-label="Project links">
                <ul className="flex flex-col gap-3">
                  {project.links.map(link => (
                    <li key={link}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--blue-color)] hover:text-[var(--blue-color-hover)] hover:underline underline-offset-4 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={14} className="shrink-0" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.section>
          )}
        </div>
      </div>
    </LayoutPage>
  );
};

export default ProjectPage;
