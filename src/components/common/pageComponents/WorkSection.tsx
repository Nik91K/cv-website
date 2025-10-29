import React from "react";
import { WORK } from "../../../fixtures/mainPage.fixture";
import type { WorkProps } from "../../../types/MainPage";
import WorkSectionCard from "../WorkSectionCard";

const WorkSection: React.FC<WorkProps> = ({
    id = WORK.id,
    title = WORK.title,
    experience = WORK.experience,
    projects = WORK.projects
}) => {

    return (
        <section 
            id={id}
            className="w-full min-h-screen flex items-center justify-center py-24 px-6 text-[var(--primary-color)]"
        >
            <div className="container text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                    {title}
                </h2>
                <div className="flex flex-col gap-2 mt-8 text-left">
                    <h2 className="text-4xl md:text-4xl font-extrabold tracking-tight text-[var(--primary-color)]">
                        {experience.title}
                    </h2>
                    <h3 className="text-lg md:text-xl text-white/80 font-medium">
                        {experience.subtitle}
                    </h3>
                    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {experience.items && experience.items.map((experience, index) => (
                            <li key={index} className="flex">
                                <WorkSectionCard>
                                    <div className="flex flex-col h-full gap-4">
                                        <h3 className="text-xl font-bold">
                                            {experience.company}
                                        </h3>
                                        <p className="text-purple-300 text-sm font-medium">
                                            {experience.years}
                                        </p>
                                        <p className="text-lg font-semibold text-white/90">
                                            {experience.role}
                                        </p> 
                                        {experience.description && (
                                            <p className="text-white/70 leading-relaxed mt-2">
                                                {experience.description}
                                            </p>
                                        )}
                                    </div>
                                </WorkSectionCard>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-2 mt-8 text-left">
                    <h2 className="text-4xl md:text-4xl font-extrabold tracking-tight text-[var(--primary-color)]">
                        {projects.title}
                    </h2>
                    <h3 className="text-lg md:text-xl text-white/80 font-medium">
                        {projects.subtitle}
                    </h3>
                    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {projects.items && projects.items.map((project, index) => (
                            <li key={index} className="flex">
                                <WorkSectionCard>
                                    <div className="flex flex-col justify-between items-left">
                                        {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt || project.title}
                                            className="w-full h-48 object-cover rounded-xl shadow-md mb-2"
                                        />
                                        )}
                                        <p>{project.title}</p>
                                        <p>{project.text}</p>
                                        {project.technologies && (
                                            <ul>
                                                {project.technologies.map((technologie, index) => (
                                                    <li key={index}>
                                                        {technologie}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {project.links && (
                                            <ul className="">
                                                {project.links.map((link, index) => (
                                                    <li>
                                                        <a
                                                            href={link}
                                                            key={index}
                                                            target="_blank"
                                                            className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition"
                                                        >
                                                            {link}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </WorkSectionCard>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default WorkSection
