import type { DesignProject } from '../types';

const designImages = import.meta.glob<{ default: string }>(
  '../assets/images/design/*.{jpg,png,svg}',
  { eager: true }
);

// Helper to resolve the image path at build time
const getDesignImage = (filename: string) => {
  const path = `../assets/images/design/${filename}`;
  return designImages[path]?.default || '';
};

export const designProjects: DesignProject[] = [
  {
    id: 'stitchtrack-design',
    category: 'design',
    title: 'StitchTrack — Mobile App UI',
    shortDescription:
      'Mobile UI design for a local-first row counter app for knitters and crocheters. Designed for both light and dark mode.',
    designIntro:
      'StitchTrack is a personal passion project — I am both the designer and the developer. The brief I gave myself was simple: build the app I actually want to use while crafting. That meant calm, distraction-free screens that work well with one hand.',
    designGoals: [
      'Design a one-handed friendly interface for use while crafting',
      'Create a full light and dark mode colour system',
      'Keep the UI minimal so it never competes with the craft itself',
      'Design clear visual feedback for counter interactions',
    ],
    designProcess:
      'I started with rough sketches on paper to nail the layout before opening Figma. The core interaction — incrementing a counter — needed to be impossible to miss and satisfying to tap. I designed both modes in parallel from the start so the colour tokens were built for theming from day one.',
    designReflection:
      'Designing something for yourself is both easier and harder than designing for a client. I had total freedom but also had to consciously separate "what I want" from "what a user needs". Testing the designs on my own phone while actually crocheting was genuinely useful — it revealed that tap targets needed to be larger than I initially thought.',
    image: getDesignImage('stitchtrack1.jpg'),
    imageAlt: 'StitchTrack mobile app UI',
    imageFit: 'contain',
    tags: ['Figma', 'Mobile UI', 'iOS & Android', 'Dark Mode', 'Design System'],
    modalImages: [
      getDesignImage('stitchtrack1.jpg'),
      getDesignImage('stitchtrack2.jpg'),
      getDesignImage('stitchtrack3.jpg'),
      getDesignImage('stitchtrack4.jpg'),
      getDesignImage('stitchtrack5.jpg'),
      getDesignImage('stitchtrack6.jpg'),
    ],
  },
  {
    id: 'pluggkompis-design',
    category: 'design',
    title: 'PluggKompis — UI/UX',
    shortDescription:
      'UI design for a homework help coordination platform serving students, volunteers and coordinators across Sweden.',
    designIntro:
      'PluggKompis needed to serve three very different user roles — students looking for help, volunteers offering it, and coordinators managing both. The design challenge was making one platform feel simple and welcoming for all three.',
    designGoals: [
      'Design role-specific dashboards that feel distinct but visually consistent',
      'Create a booking flow that is frictionless for younger students',
      'Communicate trust and safety through visual tone',
    ],
    designProcess:
      'I mapped the three user roles and their core tasks before touching Figma. Each role got its own flow diagram first. I then designed a shared component library and built out each dashboard view from there, making sure the colour and typographic system held together across roles.',
    designReflection:
      'Designing for multiple user roles in one product was a great challenge. It pushed me to think systematically — every component decision had to work in at least three different contexts. I also learned how important it is to validate flows with real users early, even just through informal walkthroughs.',
    image: getDesignImage('pluggkompis1.jpg'),
    imageAlt: 'PluggKompis platform UI overview',
    tags: ['Figma', 'UI Design', 'Multi-role UX', 'Component Library'],
    modalImages: [
      getDesignImage('pluggkompis1.jpg'),
      getDesignImage('pluggkompis2.jpg'),
      getDesignImage('pluggkompis3.jpg'),
    ],
  },
  {
    id: 'dojo-design',
    category: 'design',
    title: 'Dojo Course Platform — UI/UX',
    shortDescription:
      'Full UI design for a course platform built during my first LIA internship. Covers landing page, course pages, events and student dashboard.',
    designIntro:
      'During my internship at InFiNetCode AB I was responsible for the visual design of Dojo — a full course platform. Working directly in Figma, I designed everything from the marketing landing page to the authenticated student dashboard.',
    designGoals: [
      'Create a consistent visual language across all platform pages',
      'Design an intuitive course browsing and purchase flow',
      'Build a clean student dashboard that surfaces the right information quickly',
      'Ensure the design was handoff-ready for the development team',
    ],
    designProcess:
      'I started by mapping out the core user journeys — a visitor discovering the platform, a student purchasing a course, and a returning student continuing their learning. From there I built a component library in Figma covering typography, colour tokens, buttons, cards and form elements. Each page was designed mobile-first and reviewed with the dev team before implementation.',
    designReflection:
      'This project taught me how to design within real technical constraints. Because I was also part of the development team, I saw firsthand how design decisions affect implementation complexity. I became much more intentional about spacing systems and component reuse as a result.',
    image: getDesignImage('dojo1.jpg'),
    imageAlt: 'Dojo course platform UI overview',
    tags: ['Figma', 'UI Design', 'UX', 'Component Library', 'Mobile-first'],
    modalImages: [
      getDesignImage('dojo1.jpg'),
      getDesignImage('dojo2.jpg'),
      getDesignImage('dojo4.jpg'),
      getDesignImage('dojo5.jpg'),
      getDesignImage('dojo6.jpg'),
      getDesignImage('dojo7.jpg'),
    ],
  },
];
