import laptopCoffee from '@assets/images/main-page-img.png';
import portfolioScreenshot from '@assets/images/portfolio-screenshot.png';
import venueBookingBackend from '@assets/images/venue-booking-system-backend.png';
import venueBookingFrontend from '@assets/images/venue-booking-system-frontend.png';

export const HERO_SECTION = [
  {
    id: 'home',
    title: 'Welcome',
    subtitle: `My name is Nikita Koval, I am a front-end developer living in Ukraine. I am interested in learning and discovering new things in programming. Currently, I am deepening my knowledge in front-end web development, TypeScript, and the React framework, and I have recently started exploring back-end development with Node.js and NestJS as well.`,
    image: laptopCoffee,
    imageTitle: 'Portfolio',
  },
];

export const ABOUT = {
  id: 'about',
  title: 'About Me',
  text: `I am a front-end developer from Ukraine, and I enjoy learning new things. I like working with modern technologies such as React, TypeScript, and Tailwind CSS to create responsive, accessible, and user-friendly websites. Always striving to learn new tools and best practices, I focus on writing clean, maintainable code and creating a pleasant user experience. I have created several educational projects that reflect my ability to build real-world applications and grow as a developer. I am also interested in how the back end works, and I have started learning it through hands-on projects using Node.js and NestJS. I strive to collaborate, receive feedback, and grow as part of a development team. Here is a list of my skills.`,
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
        'HTML5',
        'CSS3',
        'Responsive design',
        'JavaScript',
        'TypeScript',
        'React',
        'TailwindCSS',
        'Redux Toolkit',
        'Shadcn',
      ],
    },
    {
      title: 'Backend',
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
      skills: ['Git', 'Vite', 'ESLint', 'Prettier', 'Husky', 'lint-staged'],
    },
  ],
  contacts: {
    github: 'https://github.com/Nik91K',
    likedin: 'https://www.linkedin.com/in/nikita-koval-17680331b/',
  },
};

export const WORK = {
  id: 'experience',
  title: 'My Work',
  experience: {
    title: 'Professional Experience',
    subtitle: 'My journey through various roles and companies',
    items: [],
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A selection of my best work',
    items: [
      {
        title: 'Venue Booking — Front-end',
        text: 'This is the front-end part of the platform for booking seats and tables in restaurants and other establishments. Users can browse and search for establishments, reserve tables, leave reviews, and manage their reservations. This project features a Google Maps map, data visualization using Recharts, and a clear, accessible interface created using Shadcn components.',
        image: venueBookingFrontend,
        imageAlt: 'Screenshot of the Venue Booking front-end',
        links: [
          'https://github.com/Nik91K/venue-booking-frontend/tree/develop',
        ],
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
        ],
      },
      {
        title: 'Venue Booking — Backend',
        text: 'This is the backend part of a project for booking tables in establishments. It uses REST API, which ensures the operation of the room booking platform created on the basis of NestJS and PostgreSQL. It handles user authentication using JWT (access and refresh tokens), venue and reservation management, uploading venue image files, user reviews, and populating the database with realistic sample data. The API is fully documented using Swagger.',
        image: venueBookingBackend,
        imageAlt: 'Screenshot of the Venue Booking backend Swagger docs',
        links: ['https://github.com/Nik91K/venue-booking-system/tree/develop'],
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
        title: 'Portfolio Website',
        text: 'This responsive personal resume website showcases my skills, projects, and background as a front-end developer. Built with React, TypeScript, and TailwindCSS, it features smooth animations powered by GSAP and a clean, modern design.',
        image: portfolioScreenshot,
        imageAlt: 'Screenshot of personal portfolio website',
        links: ['https://github.com/Nik91K/cv-website/tree/develop'],
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Shadcn'],
      },
    ],
  },
};
