import laptopCoffee from '@assets/images/main-page-img.png';
import passwordKeeper from '@assets/images/passwordKeeper/password-keeper.png';
import passwordKeeper2 from '@assets/images/passwordKeeper/password-keeper-2.png';
import passwordKeeper3 from '@assets/images/passwordKeeper/password-keeper-3.png';
import passwordKeeper4 from '@assets/images/passwordKeeper/password-keeper-4.png';
import passwordKeeper5 from '@assets/images/passwordKeeper/password-keeper-5.png';
import portfolio from '@assets/images/portfolio/portfolio.png';
import portfolio1 from '@assets/images/portfolio/portfolio-1.png';
import portfolio2 from '@assets/images/portfolio/portfolio-2.png';
import portfolio3 from '@assets/images/portfolio/portfolio-3.png';
import venueBookingFrontend from '@assets/images/venueBooking/venue-booking-frontend.png';
import venueBookingFrontend1 from '@assets/images/venueBooking/venue-booking-frontend-1.png';
import venueBookingFrontend2 from '@assets/images/venueBooking/venue-booking-frontend-2.png';
import venueBookingFrontend3 from '@assets/images/venueBooking/venue-booking-frontend-3.png';
import venueBookingFrontend4 from '@assets/images/venueBooking/venue-booking-frontend-4.png';
import venueBookingFrontend5 from '@assets/images/venueBooking/venue-booking-frontend-5.png';
import venueBookingFrontend6 from '@assets/images/venueBooking/venue-booking-frontend-6.png';
import venueBookingBackend from '@assets/images/venueBooking/venue-booking-backend.png';

export const HERO_SECTION = [
  {
    id: 'home',
    title: 'Welcome',
    subtitle: `My name is Nikita Koval, I am a frontend developer living in Ukraine. I am interested in learning and discovering new things in programming. Currently, I am deepening my knowledge in frontend web development, TypeScript, and the React framework, and I have recently started exploring back-end development with Node.js and NestJS as well.`,
    image: laptopCoffee,
    imageTitle: 'Professional Web Development',
  },
];

export const ABOUT = {
  id: 'about',
  title: 'About Me',
  text: `I am a frontend developer from Ukraine, and I enjoy learning new things. I like working with modern technologies such as React, TypeScript, and Tailwind CSS to create responsive, accessible, and user-friendly websites. Always striving to learn new tools and best practices, I focus on writing clean, maintainable code and creating a pleasant user experience. I have created several educational projects that reflect my ability to build real-world applications and grow as a developer. I am also interested in how the back end works, and I have started learning it through hands-on projects using Node.js and NestJS. I strive to collaborate, receive feedback, and grow as part of a development team. Here is a list of my skills.`,
  languages: {
    title: 'Languages',
    items: [
      { name: 'Ukrainian', level: 'Native' },
      { name: 'English', level: 'B1' },
    ],
  },
  skills: [
    {
      title: 'Frontend',
      skills: [
        'React',
        'JavaScript',
        'TypeScript',
        'TailwindCSS',
        'Redux Toolkit',
        'Shadcn UI',
        'Responsive Web Design',
        'Framer Motion',
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        'Node.js (basic)',
        'NestJS (basic)',
        'PostgreSQL (basic)',
        'TypeORM (basic)',
        'REST API (basic)',
        'JWT Authentication (basic)',
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        'Git / GitHub',
        'Vite',
        'Docker (learning)',
        'ESLint & Prettier',
        'Sentry',
      ],
    },
  ],
  contacts: {
    github: 'https://github.com/Nik91K',
    likedin: 'https://www.linkedin.com/in/nikita-koval-17680331b/',
  },
};

export const WORK = {
  id: 'experience',
  title: 'Portfolio & Case Studies',
  experience: {
    title: 'Development Focus',
    subtitle: 'My focus is on building complex, production-ready applications',
    items: [
      {
        company: 'Independent Projects',
        role: 'Frontend Developer',
        years: '2024 — Present',
        description:
          'Developing frontend applications with a focus on user experience and modern web technologies.',
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A selection of my technical implementations',
    items: [
      {
        id: 1,
        title: 'Venue Booking - Frontend',
        text: 'A high-performance booking interface designed for seamless user interaction. I integrated Google Maps API for real-time location tracking and utilized Shadcn UI to ensure a premium, accessible look. By implementing Redux Toolkit and Motion, I achieved smooth state management and fluid transitions, significantly enhancing the overall user experience.',
        image: venueBookingFrontend,
        imageAlt: 'Screenshot of the Venue Booking frontend',
        images: [
          venueBookingFrontend1,
          venueBookingFrontend2,
          venueBookingFrontend3,
          venueBookingFrontend4,
          venueBookingFrontend5,
          venueBookingFrontend6,
        ],
        links: ['https://github.com/Nik91K/venue-booking-frontend'],
        technologies: [
          'React',
          'TypeScript',
          'TailwindCSS',
          'Vite',
          'Redux Toolkit',
          'Axios',
          'Shadcn',
          'Google Maps API',
          'Embla Carousel',
          'Sonner',
          'Motion',
          'Sentry',
        ],
      },
      {
        id: 2,
        title: 'Venue Booking - Backend',
        text: 'A reliable and scalable server architecture built on NestJS and PostgreSQL. This project focuses on enterprise-grade security, featuring JWT-based authentication (Access & Refresh tokens) and encrypted data storage. The entire API is fully documented via Swagger, ensuring easy integration and professional-standard maintenance.',
        image: venueBookingBackend,
        imageAlt: 'Screenshot of the Venue Booking backend Swagger docs',
        images: [venueBookingFrontend, venueBookingBackend],
        links: ['https://github.com/Nik91K/venue-booking-system'],
        technologies: [
          'NestJS',
          'TypeScript',
          'TypeORM',
          'PostgreSQL',
          'JWT',
          'Swagger',
          'bcrypt',
          'Multer',
          'class-validator',
          'DiceBear API',
        ],
      },
      {
        id: 3,
        title: 'Password Keeper',
        text: 'A minimalist password manager that lives entirely in your browser. Nothing uploaded. Nothing shared. Encrypted with your master password alone. Fully offline, with all data stored securely in indexedDB. Built with React and TypeScript, it features a clean, intuitive interface and AES-256 encryption to keep your passwords safe.',
        image: passwordKeeper,
        imageAlt: 'Screenshot of the Password Keeper application',
        images: [
          passwordKeeper2,
          passwordKeeper3,
          passwordKeeper4,
          passwordKeeper5,
        ],
        links: ['https://github.com/Nik91K/Password-Keeper'],
        technologies: [
          'React',
          'TypeScript',
          'TailwindCSS',
          'Vite',
          'Shadcn',
          'idb',
          'zod',
          'zxcvbn',
        ],
      },
      {
        id: 4,
        title: 'Portfolio Website',
        text: 'This responsive personal resume website showcases my skills, projects, and background as a frontend developer. Built with React, TypeScript, and TailwindCSS, it features smooth animations powered by Motion and a clean, modern design.',
        image: portfolio,
        imageAlt: 'Screenshot of personal portfolio website',
        images: [portfolio1, portfolio2, portfolio3],
        links: [
          'https://github.com/Nik91K/cv-website',
          'https://cv-website-olive-three.vercel.app/',
        ],
        technologies: [
          'React',
          'TypeScript',
          'TailwindCSS',
          'Vite',
          'Shadcn',
          'Motion',
        ],
      },
    ],
  },
};
