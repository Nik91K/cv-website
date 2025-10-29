import type { IconType } from 'react-icons';

type Socials = {
    id: string,
    label: string,
    url: string,
    icon: IconType,
}

type QuickLinks = {
    label: string,
    path: string,
}

export type Footer = {
    id: string,
    socials: Socials[],
    copyright: string,
    quickLinks: QuickLinks[],
}
