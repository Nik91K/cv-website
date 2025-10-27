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

type Experience = {
  company: string,
  role: string,
  years: string,
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
