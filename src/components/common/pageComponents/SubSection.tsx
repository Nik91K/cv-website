import React from "react";
type SubSectionProps = {
    title?: string,
    subtitle?: string,
    children: React.ReactNode,
}

const SubSection: React.FC<SubSectionProps> = ({
    title,
    subtitle,
    children
}) => {
    return (
        <div className="flex flex-col gap-4 mt-12">
            <div className="text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--primary-color)]">
                    {title}
                </h3>
                <p className="text-lg md:text-xl text-white/80 font-medium mt-2">
                    {subtitle}
                </p>
            </div>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {children}
            </ul>
        </div>
    )
}

export default SubSection
