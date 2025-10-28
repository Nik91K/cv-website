import React from "react"
import type { AboutItemProps } from "../../../types/MainPage"
import { ABOUT } from "../../../fixtures/mainPage.fixture"

const SkillsGrid: React.FC<AboutItemProps> = ({
    skills = ABOUT.skills
}) => {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-[var(--primary-color)] rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg p-8 border border-amber-100 m-2"
                    >
                        <h3 className="text-center text-2xl mb-4" >
                            {skill.title}
                        </h3>
                        <ul className="flex flex-wrap items-center justify-center">
                            {skill.skills?.map((s, i) => (
                                <li key={i} className="m-2">
                                    <p>{s}</p>
                                </li>
                            ))}
                        </ul>
                </div>
            ))}
        </div>
    )
}

export default SkillsGrid
