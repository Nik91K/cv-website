import React from "react";
import { HERO_SECTION } from "../../../fixtures/mainPage.fixture";
import type { HeroSectionProps } from "../../../types/MainPage";

const HeroSection: React.FC<HeroSectionProps> = ({
    items = HERO_SECTION,
}) => {

    return (
        <>
            {items.map((item, index) =>
                <section className="min-h-screen flex items-center justify-center text-white" id={item.id} key={index}>
                        <div className='flex justify-center items-center max-w-7xl mx-auto -translate-y-20' >
                            <div className="flex-1 text-left">
                                <h1 className="text-5xl md:text-8xl font-bold mb-6">
                                    {item.title}
                                </h1>
                                <p className="text-xl">
                                    {item.subtitle}
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img
                                    src={item.image}
                                    alt={item.imageTitle}
                                    className="max-w-xl rounded-3xl shadow-2xl shadow-black/50 transition"
                                />
                            </div>
                        </div>
                </section>
            )}
        </>
    )
}

export default HeroSection
