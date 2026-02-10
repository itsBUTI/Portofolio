import autobesaScr from '../images/autobesa-scr.png'
import bluepeakScr from '../images/bluepeak-scr.png'
import motoriderScr from '../images/motorider-scr.png'

export const projects = [
  {
    title: 'AutoBesa',
    description:
      'A production-style automotive website focused on clarity, performance, and a clean browsing experience across devices.',
    details: [
      'Focus: performance + UI clarity',
      'Bootstrap-based responsive layout',
      'Clean, production-style marketing structure',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://auto-besa.netlify.app',
    repoUrl: 'https://github.com/itsBUTI/AutoBesa-FINALIZED',
    imageSrc: autobesaScr,
    imageAlt: 'AutoBesa project preview',
  },
  {
    title: 'BluePeak Realty',
    description:
      'A real estate platform-style UI with listing presentation and product-like structure designed for scalability and readability.',
    details: ['Focus: information hierarchy', 'Product-style UI patterns', 'Responsive listing layouts'],
    stack: ['React', 'Vite', 'UI Architecture', 'UX'],
    liveUrl: 'https://bluepeak-realty.netlify.app',
    repoUrl: 'https://github.com/itsBUTI/RealEstate-BluePeak',
    imageSrc: bluepeakScr,
    imageAlt: 'BluePeak Realty project preview',
  },
  {
    title: 'MotoRider',
    description:
      'A motorcycle-focused web experience built with a clean UI and responsive layout, designed to showcase bikes, features, and a modern brand feel.',
    details: ['Responsive marketing-style layout', 'Focus: clean UI + browsing experience', 'Deployed on Netlify'],
    stack: ['React', 'Vite', 'CSS'],
    liveUrl: 'https://motorider.netlify.app/',
    repoUrl: 'https://github.com/itsBUTI/MotoRider.git',
    imageSrc: motoriderScr,
    imageAlt: 'MotoRider project preview',
  },
]
