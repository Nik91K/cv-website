import React from "react";
import { ABOUT } from "../../../fixtures/mainPage.fixture";
import type { AboutItemProps } from "../../../types/MainPage";

const AboutHero: React.FC<AboutItemProps> = ({
    title = ABOUT.title,
    text = ABOUT.text,
    
    skills = ABOUT.skills,
    id = ABOUT.id,
}) => {
    return (
        <section
        id={id}
        className="w-full min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center py-24 px-6"
        >
            <div className="container max-w-5xl text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8">
                    {title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                    {text}
                </p>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 border border-amber-100"
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
            </div>
        </section>
    )
}

export default AboutHero
