import React from "react";
import { ABOUT } from "../../../fixtures/mainPage.fixture";
import type { AboutItemProps } from "../../../types/MainPage";
import SkillsGrid from "../SkillsGrid";
import EmptyState from "../EmptyState";


const AboutHero: React.FC<AboutItemProps> = ({
    title = ABOUT.title,
    text = ABOUT.text,
    id = ABOUT.id,
    languages = ABOUT.languages
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
                <div>
                    <h2>{languages.title}</h2>
                    <ul className="mt-4 flex flex-wrap gap-3 justify-center max-w-md mx-auto">
                        {languages.items && languages.items.length > 0 ? ( languages.items.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 hover:bg-[var(--secondary-color)]/5 transition-all duration-200"
                            >
                                <span className="font-medium text-sm text-gray-800">
                                    {item.name}
                                </span>
                                <span className="text-xs text-gray-800 ml-2">
                                    {item.level}
                                </span>
                            </li>
                        ))) : (
                            <EmptyState text={languages.title ?? 'title'} />
                        )}
                    </ul>
                </div>

                <SkillsGrid />
            </div>
        </section>
    )
}

export default AboutHero
