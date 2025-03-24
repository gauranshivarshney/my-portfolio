import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/ecommerce.png';
import Work2 from './assets/portfolio.png'
import Work3 from './assets/rock.png';
import Work4 from './assets/todo.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/my-portfolio',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/projects',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Gauranshi',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Varshney',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '24 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Uttar Pradesh',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+917253099079',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'gauranshivarshney@gmail.com',
  },

  {
    id: 9,
    title: 'Langages : ',
    description: 'German, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '< 1',
    title: '<br /> Fresher',
  },

  {
    id: 2,
    no: '1+',
    title: 'Years of Experience <br /> in Web Development',
  },

  {
    id: 3,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 4,
    no: '4',
    title: 'Internships <br /> Completed',
  }
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024',
    title: 'FrontEnd Developer'
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Web developer'
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2025',
    title: 'Master Degree <span> IPU University </span>'
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Bachelor Degree <span> University of Delhi </span>'
  }
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 4,
    title: 'React',
    percentage: '75',
  },

  {
    id: 5,
    title: 'Python',
    percentage: '85'
  },

  {
    id: 6,
    title: 'C++',
    percentage: '70'
  },

  {
    id: 7,
    title: 'Figma',
    percentage: '75'
  },

  {
    id: 8,
    title: 'SQL',
    percentage: '70'
  }
];

export const projects = [
  {
    id: 1,
    img: Work1,
    title: 'E-commerce Website',
    techStack: ['React', 'Node.js', 'MongoDB', 'CSS'],
    liveDemo: 'https',
    github: 'https'
  },

  {
    id: 2,
    img: Work2,
    title: 'Portfolio Website',
    techStack: ['React', 'CSS'],
    liveDemo: 'https://gauranshivarshney.github.io/my-portfolio',
    github: 'https://github.com/gauranshivarshney/my-portfolio'
  },

  {
    id: 3,
    img: Work3,
    title: 'Rock Paper Scissor Game',
    techStack: ['React', 'CSS'],
    liveDemo: 'https://gauranshivarshney.github.io/RockPaperScissor-JavaScript/',
    github: 'https://github.com/gauranshivarshney/RockPaperScissor-JavaScript'
  },

  {
    id: 4,
    img: Work4,
    title: 'ToDo List Website',
    techStack: ['React', 'MongoDB', 'CSS'],
    liveDemo: 'https://to-do-react-wheat-seven.vercel.app/',
    github: 'https://github.com/gauranshivarshney/ToDo-React'
  }
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
