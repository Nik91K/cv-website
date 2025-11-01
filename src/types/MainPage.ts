type HeroSection = {
    id: string,
    title: string,
    subtitle: string,
    image: string,
    imageTitle: string,
}

export type HeroSectionProps = {
    items?: HeroSection[],
}

type Skills = {
    title?: string,
    skills?: string[]
}

export type AboutItemProps = {
    id?: string,
    title?: string,
    text?: string,
    skills?: Skills[]
}

type Experience = {
    company?: string,
    role?: string,
    years?: string,
    description?: string,
}

type ExperienceSection = {
    title?: string,
    subtitle?: string,
    items?: Experience[],
}

type Projects = {
    title?: string,
    text?: string,
    image?: string,
    imageAlt?: string,
    links?: string[],
    technologies?: string[],
}

type ProjectsSection = {
    title?: string,
    subtitle?: string,
    items?: Projects[]
}

export type WorkProps = {
    id?: string,
    title?: string
    experience?: ExperienceSection,
    projects?: ProjectsSection,
}
