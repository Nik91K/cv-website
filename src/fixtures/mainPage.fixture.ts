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
        ],
        contacts: {
            github: 'https://github.com/Nik91K',
            likedin: 'https://www.linkedin.com/in/nikita-koval-17680331b/',
        }

}
