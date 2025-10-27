import React from "react";
import { WORK } from "../../../fixtures/mainPage.fixture";
import type { WorkProps } from "../../../types/MainPage";

const WorkSection: React.FC<WorkProps> = ({
    id = WORK.id,
    title = WORK.title,
    experience = WORK.experience,
    projects = WORK.projects

}) => {

    return (
        <section 
            id={id}
            className="w-full min-h-screen"
        >
            <div className="container" >
                <h2>{title}</h2>
                <div>
                    <ul>
                        {experience.map((experience, index) => (
                            <li key={index}>
                                <p>{experience.company}</p>
                                <p>{experience.years}</p>
                                <p>{experience.role}</p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {projects.map((projects, index) => (
                            <li key={index}>
                                <img src={projects.image} alt="" />
                                <p>{projects.title}</p>
                                <p>{projects.text}</p>
                                <p>{projects.links}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default WorkSection
