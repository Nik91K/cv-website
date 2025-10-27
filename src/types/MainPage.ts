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

type Contacts = {
    email: string,
    github?: string,
    linkedin?: string,
    twitter?: string,
    website?: string,
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
}

type Projects = {
    title?: string,
    text?: string,
    image?: string,
    links?: string[],
}

export type WorkProps = {
    id?: string,
    title?: string
    experience?: Experience[],
    projects?: Projects[],
}
