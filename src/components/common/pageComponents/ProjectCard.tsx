import React from "react";
import WorkSectionCard from "../WorkSectionCard";

type Project = {
    title?: string,
    text?: string,
    image?: string,
    imageAlt?: string,
    links?: string[],
    technologies?: string[],
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <WorkSectionCard>
            <div className="flex flex-col gap-4">
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.imageAlt || project.title || 'Project image'}
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                    />
                )}
                
                {project.title && (
                    <h3 className="text-xl font-bold">{project.title}</h3>
                )}
                
                {project.text && (
                    <p className="text-white/80 leading-relaxed">{project.text}</p>
                )}
                
                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={`tech-${index}`}
                                className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                
                {project.links && project.links.length > 0 && (
                    <nav className="mt-2" aria-label="Project links">
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
                )}
            </div>
        </WorkSectionCard>
    )
}

export default ProjectCard
