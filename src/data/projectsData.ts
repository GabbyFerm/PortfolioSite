export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  tags: string[];
  features?: string[];
  github?: string;
  demo?: string;
  category: 'coding' | 'design';
  modalImages?: string[];
}

export const projects: Project[] = [
  {
    id: 'pluggkompis',
    title: 'PluggKompis - Homework Help Platform',
    shortDescription:
      'Full-stack platform connecting students with free homework help at libraries and youth centers across Sweden.',
    fullDescription:
      'A full-stack platform connecting students with free homework help at libraries and youth centers across Sweden. Features multi-role authentication, booking management and volunteer scheduling. Built with Clean Architecture and demo deployed to Vercel & Azure.',
    image: '/images/pluggkompis.jpg',
    imageAlt: 'PluggKompis platform screenshot',
    tags: ['ASP.NET Core', 'React', 'TypeScript', 'Clean Architecture', 'Azure'],
    features: [
      'Multi-role authentication (students, volunteers, coordinators)',
      'Booking management system',
      'Volunteer scheduling',
      'Clean Architecture implementation',
      'Deployed to Vercel & Azure',
    ],
    github: 'https://github.com/PluggKompis',
    demo: 'https://pluggkompis-client.vercel.app',
    category: 'coding',
  },
  {
    id: 'stitchtrack',
    title: 'StitchTrack - Mobile Row Counter App',
    shortDescription:
      'A local-first, privacy-focused mobile app for knitters and crocheters to track row counts, projects, and sessions.',
    fullDescription:
      'A local-first, privacy-focused mobile app for knitters and crocheters to track row counts, projects, and sessions. Built as a personal passion project to solve a real need in my own creative practice. Still a work in progress!',
    image: '/images/stitchtrack1.jpg',
    imageAlt: 'StitchTrack mobile app screenshot',
    imageFit: 'contain',
    tags: ['.NET MAUI', 'SQLite', 'MVVM', 'Cross-platform'],
    features: [
      'Local-first data storage',
      'Row counter with project tracking',
      'Session management',
      'MVVM architecture',
      'Cross-platform (iOS & Android)',
    ],
    modalImages: [
      '/images/stitchtrack1.png',
      '/images/stitchtrack2.png',
      '/images/stitchtrack3.png',
    ],
    github: 'https://github.com/GabbyFerm/StitchTrack',
    category: 'coding',
  },
  {
    id: 'savory',
    title: 'Savory - Recipe Management App',
    shortDescription:
      'Full-stack recipe app with user auth, recipe CRUD, profile customization, and image uploads via presigned URLs.',
    fullDescription:
      'Savory is a full‑stack recipe app (React + TypeScript, ASP.NET Core) featuring user auth, recipe CRUD, profile customization, and image uploads via presigned URLs. Built with clean architecture and demo deployed to Vercel & Azure.',
    image: '/images/savory.jpg',
    imageAlt: 'Savory recipe app screenshot',
    tags: ['ASP.NET Core', 'React', 'TypeScript', 'Azure', 'Clean Architecture'],
    features: [
      'User authentication and authorization',
      'Recipe CRUD operations',
      'Profile customization',
      'Image uploads with presigned URLs',
      'Clean architecture implementation',
    ],
    github: 'https://github.com/GabbyFerm/Savory-Backend',
    demo: 'https://savory-frontend.vercel.app',
    category: 'coding',
  },
  {
    id: 'dojo',
    title: 'Dojo Course Platform',
    shortDescription:
      'Full-stack course platform built during LIA internship with Clean Architecture, Identity, and payment integration.',
    fullDescription:
      'During my internship at InFiNetCode AB, I worked as a .NET/Fullstack Developer on the development of Dojo, a comprehensive course platform. I was involved in the entire development process — from design in Figma to implementation of functionality using ASP.NET Core, Entity Framework Core, React, TypeScript, and Next.js, based on Clean Architecture and PipelineBehavior/MediatR patterns.',
    image: '/images/dojo1.jpg',
    imageAlt: 'Dojo platform overview',
    tags: [
      'ASP.NET Core',
      'React',
      'TypeScript',
      'Next.js',
      'Clean Architecture',
      'MediatR',
      'Stripe',
      'OAuth',
    ],
    features: [
      'Authentication & Identity: Implemented GitHub and Google OAuth login with refresh tokens',
      'API Development: Built and integrated APIs between backend and frontend',
      'Payment Integration: Developed and tested Stripe payment solution',
      'UI/UX Design: Designed landing pages, course pages, events, and student dashboard in Figma',
      'Architecture: Worked with Clean Architecture principles and maintained scalable codebase structure',
    ],
    modalImages: [
      '/images/dojo1.jpg',
      '/images/dojo2.jpg',
      '/images/dojo3.jpg',
      '/images/dojo4.jpg',
      '/images/dojo5.jpg',
    ],
    category: 'coding',
  },
  {
    id: 'fork-and-spoon',
    title: 'Fork & Spoon',
    shortDescription:
      'In-progress recipe app with clean architecture, user auth, and modular backend. Frontend coming soon!',
    fullDescription:
      'In-progress recipe app with clean architecture, user auth, and modular backend. Frontend coming soon!',
    image: '/images/forkspoon.jpg',
    imageAlt: 'Fork & Spoon project',
    tags: ['ASP.NET Core', 'Clean Architecture', 'Entity Framework'],
    github: 'https://github.com/GabbyFerm/Fork-and-spoon',
    category: 'coding',
  },
  {
    id: 'clean-architecture-api',
    title: 'Clean Architecture API',
    shortDescription:
      'Backend demo using MediatR, OperationResult, clean layering, and in-memory unit tests.',
    fullDescription:
      'Backend demo using MediatR, OperationResult, clean layering, and in-memory unit tests.',
    image: '/images/pixel2.jpg',
    imageAlt: 'Clean Architecture API project',
    tags: ['ASP.NET Core', 'MediatR', 'Clean Architecture', 'Unit Testing'],
    github: 'https://github.com/GabbyFerm/OperationResultDemo',
    category: 'coding',
  },
  {
    id: 'dungeon-quest',
    title: 'Dungeon Quest',
    shortDescription:
      'A console RPG in C# with combat, progression, and save/load via JSON. Styled with Spectre.Console.',
    fullDescription:
      'A console RPG in C# with combat, progression, and save/load via JSON. Styled with Spectre.Console.',
    image: '/images/pixel3.jpg',
    imageAlt: 'Dungeon Quest game',
    tags: ['C#', 'Console App', 'JSON', 'Spectre.Console'],
    github: 'https://github.com/GabbyFerm/TextBasedAdventure',
    category: 'coding',
  },
  {
    id: 'todo-list',
    title: 'To-Do List App',
    shortDescription: 'Console to-do app with JSON persistence, validation, and interactive UI.',
    fullDescription: 'Console to-do app with JSON persistence, validation, and interactive UI.',
    image: '/images/pixel4.jpg',
    imageAlt: 'To-Do List application',
    tags: ['C#', 'Console App', 'JSON'],
    github: 'https://github.com/GabbyFerm/ToDoListApp',
    category: 'coding',
  },
];
