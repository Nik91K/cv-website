import React from 'react';
import { WORK } from '@fixtures/mainPage.fixture';
import type { WorkProps } from '@/types/MainPage';
import SubSection from '@components/common/pageComponents/SubSection';
import ExperienceCard from '@components/common/pageComponents/ExperienceCard';
import ProjectCard from '@components/common/pageComponents/ProjectCard';
import EmptyState from '@components/common/EmptyState';

const WorkSection: React.FC<WorkProps> = ({
  id = WORK.id,
  title = WORK.title,
  experience = WORK.experience,
  projects = WORK.projects,
}) => {
  return (
    <section
      id={id}
      className="w-full min-h-screen flex items-center justify-center py-[11vh] px-6 text-[var(--primary-color)]"
    >
      <div className="container max-w-7xl">
        <header className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">{title}</h2>
        </header>
        {experience && (
          <SubSection title={experience.title} subtitle={experience.subtitle}>
            {experience.items && experience.items.length > 0 ? (
              experience.items?.map((exp, index) => (
                <li key={index} className="flex">
                  <ExperienceCard experience={exp} />
                </li>
              ))
            ) : (
              <EmptyState text={experience.title ?? 'title'} />
            )}
          </SubSection>
        )}
        {projects && (
          <SubSection title={projects.title} subtitle={projects.subtitle}>
            {projects.items && projects.items.length > 0 ? (
              projects.items?.map((project, index) => (
                <li key={index} className="flex">
                  <ProjectCard project={project} />
                </li>
              ))
            ) : (
              <EmptyState text={projects.title ?? 'title'} />
            )}
          </SubSection>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
