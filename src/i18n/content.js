import autobesaScr from '../images/autobesa-scr.png'
import bluepeakScr from '../images/bluepeak-scr.png'
import motoriderScr from '../images/motorider-scr.png'

const content = {
  en: {
    profile: {
      fullName: 'Butrint Bytyqi',
      role: 'Senior Web Developer',
      location: 'Prizren, Kosovo',
      age: '',
      experienceYears: 3,
      cvUrl: '/cv.pdf',
      email: 'bytyqibutrint78@gmail.com',
      headline: 'Senior web developer building clean, fast, production-grade UI.',
      summary:
        'As an upcoming full-stack developer from Prizren, Kosovo, I’m driven by a passion for clean code, performance, and impactful design. I build modern web applications using HTML, CSS, JavaScript and React blending functionality with smooth user experiences. Constantly learning and evolving, I aim to craft digital products that feel powerful, polished, and built to scale.',
      socials: [
        { label: 'GitHub', href: 'https://github.com/itsBUTI', icon: 'github' },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/butrint-bytyqi-a6a333349/',
          icon: 'linkedin',
        },
        { label: 'Email', href: 'mailto:bytyqibutrint78@gmail.com', icon: 'email' },
      ],
    },

    projects: [
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
        details: [
          'Focus: information hierarchy',
          'Product-style UI patterns',
          'Responsive listing layouts',
        ],
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
        details: [
          'Responsive marketing-style layout',
          'Focus: clean UI + browsing experience',
          'Deployed on Netlify',
        ],
        stack: ['React', 'Vite', 'CSS'],
        liveUrl: 'https://motorider.netlify.app/',
        repoUrl: 'https://github.com/itsBUTI/MotoRider.git',
        imageSrc: motoriderScr,
        imageAlt: 'MotoRider project preview',
      },
    ],

    services: [
      {
        title: 'Web Development',
        icon: 'code',
        desc: 'Modern, accessible interfaces with clean component structure and predictable UX.',
      },
      {
        title: 'Full Stack Development',
        icon: 'server',
        desc: 'End-to-end delivery with robust APIs, validation, and production-ready patterns.',
      },
      {
        title: 'UI/UX Design',
        icon: 'palette',
        desc: 'Senior-level layout, spacing, and interaction design that feels premium and clear.',
      },
      {
        title: 'Responsive Design',
        icon: 'sparkles',
        desc: 'Pixel-consistent layouts across mobile, tablet, and desktop—no broken states.',
      },
      {
        title: 'API Integration',
        icon: 'external',
        desc: 'Reliable integrations with proper loading/error states and resilient data handling.',
      },
      {
        title: 'Accessibility',
        icon: 'sparkles',
        desc: 'Inclusive interfaces with proper semantics, keyboard support, and real-world usability.',
      },
    ],

    skillGroups: [
      {
        title: 'Frontend',
        icon: 'code',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'ReactJs'],
      },
      {
        title: 'Cybersecurity',
        icon: 'server',
        skills: ['Cybersecurity', 'Phishing', 'Man-in-the-Middle', 'SQL Injection'],
      },
      {
        title: 'Tools & Design',
        icon: 'palette',
        skills: ['Figma', 'GitHub', 'Canva'],
      },
    ],
  },

  sq: {
    profile: {
      fullName: 'Butrint Bytyqi',
      role: 'Software Engineer',
      location: 'Prizren, Kosovë',
      age: '',
      experienceYears: 3,
      cvUrl: '/cv.pdf',
      email: 'bytyqibutrint78@gmail.com',
      headline: 'Zhvillues senior web për UI të pastra, të shpejta dhe gati për production.',
      summary:
        'Jam një krijues softueri nga Prizreni, në rrugën drejt full‑stack. Fokusohem në kod të pastër, performancë të lartë dhe dizajn me ndikim. Krijoj aplikacione moderne me HTML, CSS, JavaScript dhe React, duke ofruar eksperienca të rrjedhshme, funksionale dhe të këndshme për përdoruesin. Synimi im është të krijoj produkte digjitale që duken elegante, ndihen të fuqishme dhe rriten pa kufij.',
      socials: [
        { label: 'GitHub', href: 'https://github.com/itsBUTI', icon: 'github' },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/butrint-bytyqi-a6a333349/',
          icon: 'linkedin',
        },
        { label: 'Email', href: 'mailto:bytyqibutrint78@gmail.com', icon: 'email' },
      ],
    },

    projects: [
      {
        title: 'AutoBesa',
        description:
          'Website automobilistik me stil production, i fokusuar te qartësia, performanca dhe një shfletim i pastër në çdo pajisje.',
        details: [
          'Fokus: performancë + qartësi në UI',
          'Layout responsive me Bootstrap',
          'Strukturë marketingu e pastër, gati për production',
        ],
        stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        liveUrl: 'https://auto-besa.netlify.app',
        repoUrl: 'https://github.com/itsBUTI/AutoBesa-FINALIZED',
        imageSrc: autobesaScr,
        imageAlt: 'Pamje e projektit AutoBesa',
      },
      {
        title: 'BluePeak Realty',
        description:
          'UI me stil platforme për pasuri të paluajtshme: listime të qarta, strukturë “product”, dhe bazë e mirë për shkallëzim.',
        details: [
          'Fokus: hierarkia e informacionit',
          'Modele UI si produkt',
          'Layout listimesh plotësisht responsive',
        ],
        stack: ['React', 'Vite', 'UI Architecture', 'UX'],
        liveUrl: 'https://bluepeak-realty.netlify.app',
        repoUrl: 'https://github.com/itsBUTI/RealEstate-BluePeak',
        imageSrc: bluepeakScr,
        imageAlt: 'Pamje e projektit BluePeak Realty',
      },
      {
        title: 'MotoRider',
        description:
          'Eksperiencë web për motorë me UI të pastër dhe layout responsive, e ndërtuar për të prezantuar modelet, veçoritë dhe një ndjesi moderne brendi.',
        details: [
          'Layout marketingu responsive',
          'Fokus: UI e pastër + shfletim i lehtë',
          'E publikuar në Netlify',
        ],
        stack: ['React', 'Vite', 'CSS'],
        liveUrl: 'https://motorider.netlify.app/',
        repoUrl: 'https://github.com/itsBUTI/MotoRider.git',
        imageSrc: motoriderScr,
        imageAlt: 'Pamje e projektit MotoRider',
      },
    ],

    services: [
      {
        title: 'Zhvillim Web',
        icon: 'code',
        desc: 'Interface moderne dhe të aksesueshme, me strukturë të pastër komponentësh dhe UX të parashikueshme.',
      },
      {
        title: 'Zhvillim Full‑Stack',
        icon: 'server',
        desc: 'Dorëzim end‑to‑end me API të forta, validim të saktë dhe modele të gatshme për production.',
      },
      {
        title: 'Dizajn UI/UX',
        icon: 'palette',
        desc: 'Layout, spacing dhe ndërveprime që duken premium dhe lexohen qartë.',
      },
      {
        title: 'Dizajn Responsive',
        icon: 'sparkles',
        desc: 'Pamje të qëndrueshme në mobile, tablet dhe desktop—pa gjendje të thyera.',
      },
      {
        title: 'Integrim API',
        icon: 'external',
        desc: 'Integrime të besueshme me state të qarta loading/error dhe trajtim rezistent të të dhënave.',
      },
      {
        title: 'Aksesueshmëri',
        icon: 'sparkles',
        desc: 'UI gjithëpërfshirëse me semantikë të saktë, tastierë, dhe përdorshmëri reale.',
      },
    ],

    skillGroups: [
      {
        title: 'Frontend',
        icon: 'code',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'ReactJs'],
      },
      {
        title: 'Siguri Kibernetike',
        icon: 'server',
        skills: ['Cybersecurity', 'Phishing', 'Man-in-the-Middle', 'SQL Injection'],
      },
      {
        title: 'Mjete & Dizajn',
        icon: 'palette',
        skills: ['Figma', 'GitHub', 'Canva'],
      },
    ],
  },
}

export function getProfile(lang) {
  return (content[lang] || content.en).profile
}

export function getProjects(lang) {
  return (content[lang] || content.en).projects
}

export function getServices(lang) {
  return (content[lang] || content.en).services
}

export function getSkillGroups(lang) {
  return (content[lang] || content.en).skillGroups
}
