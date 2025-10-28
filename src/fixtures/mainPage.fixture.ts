import laptopCoffee from '../assets/images/main-page-img.png';

export const HERO_SECTION = [
    {
        id: 'home',
        title: 'Welcome',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi ex maiores alias minima? Porro eos perferendis dolor fugiat animi, eligendi voluptate itaque, quisquam soluta consequuntur deserunt maxime nisi voluptates.',
        image: laptopCoffee,
        imageTitle: 'Portfolio'
    }
]

export const ABOUT = {
        id: 'about',
        title: 'About Me',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi ex maiores alias minima? Porro eos perferendis dolor fugiat animi, eligendi voluptate itaque, quisquam soluta consequuntur deserunt maxime nisi voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi ex maiores alias minima? Porro eos perferendis dolor fugiat animi, eligendi voluptate itaque, quisquam soluta consequuntur deserunt maxime nisi voluptates.',
        skills: [
            {
                title: 'Frontend',
                skills: ['JavaScript', 'TypeScript', 'React', 'TailwindCSS'],
            },
            {
                title: 'Backend',
                skills: [],
            },
        ],
        contacts: {
            github: 'https://github.com/Nik91K',
            likedin: 'https://www.linkedin.com/in/nikita-koval-17680331b/',
        }

}

export const WORK = {
  id: 'experience',
  title: 'My Work',
  experience: {
    title: 'Professional Experience',
    subtitle: 'My journey through various roles and companies',
    items: [
      {
        company: 'Lorem Corp',
        role: 'Frontend Developer',
        years: '2022 — Present',
        description: 'Led frontend development team and implemented modern React architecture',
      },
      {
        company: 'Ipsum Solutions',
        role: 'Backend Developer',
        years: '2020 — 2022',
        description: 'Developed scalable backend services and RESTful APIs',
      },
      {
        company: 'Dolor Inc.',
        role: 'Fullstack Intern',
        years: '2019 — 2020',
        description: 'Learned full-stack development working on various client projects',
      },
    ]
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A selection of my best work',
    items: [
      {
        title: 'Portfolio Website',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://placehold.co/200x300',
        imageAlt: 'Screenshot of personal portfolio website',
        links: ['https://github.com/username/portfolio', 'https://portfolio.com'],
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
      },
      {
        title: 'E-commerce App',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://placehold.co/200x300',
        imageAlt: 'Preview of e-commerce web application interface',
        links: ['https://github.com/username/ecommerce'],
        technologies: ['Next.js', 'Node.js', 'MongoDB'],
      },
      {
        title: 'Task Manager',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: 'https://placehold.co/200x300',
        imageAlt: 'Dashboard view of task manager app',
        links: [],
        technologies: ['React', 'Firebase', 'Material-UI'],
      },
    ]
  }
}
