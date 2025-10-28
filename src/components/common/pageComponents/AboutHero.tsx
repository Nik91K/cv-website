import React from "react";
import { ABOUT } from "../../../fixtures/mainPage.fixture";
import type { AboutItemProps } from "../../../types/MainPage";
import SkillsGrid from "../SkillsGrid";


const AboutHero: React.FC<AboutItemProps> = ({
    title = ABOUT.title,
    text = ABOUT.text,
    id = ABOUT.id,
}) => {
    return (
        <section
            id={id}
            className="w-full min-h-screen bg-gradient-to-b from-sky-100 to-[var(--primary-color)] flex items-center justify-center py-24 px-6"
        >
            <div className="container text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--secondary-color)] mb-8">
                    {title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                    {text}
                </p>
                <SkillsGrid />
            </div>
        </section>
    )
}

export default AboutHero
