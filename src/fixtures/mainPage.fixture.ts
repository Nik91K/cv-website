import laptopCoffee from '../assets/images/main-page-img.png';
import portfolioScreenshot from '../assets/images/portfolio-screenshot.png'

export const HERO_SECTION = [
  {
    id: 'home',
    title: 'Welcome',
    subtitle: `My name is Koval Nikita, I am a front-end developer live in Ukraine. Unfortunately, I don't have any real projects yet, but I really enjoy learning and discovering new things about programming. Currently, I am studying front-end web programming, TypeScript, and the React framework. Perhaps in the future, I will study something else.`,
    image: laptopCoffee,
    imageTitle: 'Portfolio'
  }
]

export const ABOUT = {
  id: 'about',
  title: 'About Me',
  text: `I am a beginner front-end developer from Ukraine who loves to turn creative ideas into beautiful and functional user interfaces. I enjoy working with modern technologies like React, TypeScript, and Tailwind CSS to build responsive, accessible, and user-friendly websites. Always eager to learn new tools and best practices, I focus on writing clean, maintainable code and creating smooth user experiences. Although I currently don't have formal work experience, I've developed several personal and educational projects that reflect my ability to build real-world applications and grow as a developer. I am also interested in how the backend works, and I am starting to study it superficially. I'm eager to collaborate, receive feedback, and grow as part of a development team. Here is a list of my skills.`,
  languages: {
    title: 'Languages',
    items: [
      { name: 'Ukrainian', level: 'Native' },
      { name: 'English', level: 'B1' }
    ]
  },
  skills: [
    {
        title: 'Frontend',
        skills: ['HTML5', 'CSS3', 'Responsive design', 'Git', 'JavaScript', 'TypeScript', 'React', 'TailwindCSS'],
    },
    {
        title: 'Backend',
        skills: ['Node.js (basic)', 'NestJS (basic)'],
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
    items: []
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A selection of my best work',
    items: [
      {
        title: 'Portfolio Website',
        text: 'This is a responsive resume website where I talk about myself and my skills. It uses TypeScript and the React framework.',
        image: portfolioScreenshot,
        imageAlt: 'Screenshot of personal portfolio website',
        links: ['https://github.com/Nik91K/cv-website'],
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
      },
      {
        title: 'Password-Keeper',
        text: 'A website that has a password generator and stores passwords in a convenient format. When generating a password, you can specify formulas, length, and remove certain characters. Local storage in the browser, export/import of json files.',
        links: ['https://github.com/Nik91K/Password-Keeper'],
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'IndexDB'],
      }
    ]
  }
}
