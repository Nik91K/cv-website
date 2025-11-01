import React from "react";
import { WORK } from "../../../fixtures/mainPage.fixture";
import type { WorkProps } from "../../../types/MainPage";
import SubSection from "./SubSection";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

const WorkSection: React.FC<WorkProps> = ({
    id = WORK.id,
    title = WORK.title,
    experience = WORK.experience,
    projects = WORK.projects
}) => {

    return (
        <section 
            id={id}
            className="w-full min-h-screen flex items-center justify-center py-[11vh] px-6 text-[var(--primary-color)]"
        >
            <div className="container max-w-7xl">
                <header>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                        {title}
                    </h2>
                </header>
                {experience && (
                    <SubSection
                        title={experience.title}
                        subtitle={experience.subtitle}
                    >
                        {experience.items && experience.items.length > 0 ? (
                            experience.items?.map((exp, index) => (
                                <li key={index} className="flex">
                                    <ExperienceCard experience={exp} />
                                </li>
                            ))
                        ) : (
                            <p>No experience</p>
                        )}
                    </SubSection>
                )}
                {projects && (
                    <SubSection
                        title={projects.title}
                        subtitle={projects.subtitle}
                    >
                        {projects.items && projects.items.length > 0 ? (
                            projects.items?.map((project, index) => (
                                <li key={index} className="flex">
                                    <ProjectCard project={project}/>
                                </li>
                            ))
                        ) : (
                            <p>No projects</p>
                        )}
                    </SubSection>
                )}
            </div>
        </section>
    )

}

export default WorkSection
