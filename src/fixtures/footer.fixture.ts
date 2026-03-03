import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const FOOTER = {
  id: 'contacts',
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/Nik91K',
      icon: FaGithub,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nikita-koval-17680331b/',
      icon: FaLinkedin,
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:jview95@gmail.com',
      icon: FaEnvelope,
    },
  ],
  copyright: `© ${new Date().getFullYear()} Nikita Koval. All rights reserved.`,
  quickLinks: [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Experience', path: '#experience' },
    { id: 'contacts', label: 'Contacts', path: '#contacts' },
  ],
};
