import { FaGithub, FaEnvelope } from 'react-icons/fa';

export const FOOTER = {
  id: 'contacts',
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/notnikbtw',
      icon: FaGithub,
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:notnikbtw@proton.me',
      icon: FaEnvelope,
    },
  ],
  copyright: `© ${new Date().getFullYear()} !Nik. All rights reserved.`,
  quickLinks: [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Experience', path: '#experience' },
    { id: 'contacts', label: 'Contacts', path: '#contacts' },
  ],
};
