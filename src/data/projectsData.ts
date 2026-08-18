import type { UnifiedProject } from '../types';

// ─── Image helpers ─────────────────────────────────────────────────────────────
// One glob picks up every image across all project subfolders.
// The ** wildcard means "any subfolder depth".
const allImages = import.meta.glob<{ default: string }>(
  '../assets/images/projects/**/*.{jpg,jpeg,png,svg,webp}',
  { eager: true }
);

// Get a single image by its path relative to the projects/ folder.
// Use this when you know the exact filename.
const img = (path: string): string => {
  const key = `../assets/images/projects/${path}`;
  return allImages[key]?.default ?? '';
};

// Get all images from a specific subfolder, sorted alphabetically.
// Numbered prefixes like 01-home.jpg control display order.
// Only picks up direct children — ignores nested subfolders.
const fromFolder = (folderPath: string): string[] =>
  Object.entries(allImages)
    .filter(([key]) => {
      const prefix = `../assets/images/projects/${folderPath}/`;
      const rest = key.slice(prefix.length);
      return key.startsWith(prefix) && !rest.includes('/');
    })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);

// Get the first image from a folder — used for card thumbnails.
// Put your preferred cover image first with a 01- prefix.
const firstFrom = (folderPath: string): string => fromFolder(folderPath)[0] ?? '';

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects: UnifiedProject[] = [
  {
    id: 'fibervault',
    title: 'FiberVault — Yarn Stash Design System',
    cardImage: firstFrom('fibervault/final-ui'),
    imageAlt: 'FiberVault app screenshot',
    shortDescription:
      'A complete design system and UI case study for a yarn stash organizer with a social feed — currently in design, with development planned next.',
    about:
      'FiberVault is an idea I have wanted to build since making a first quick prototype in Lovable: a home for organizing a personal yarn stash — cataloguing skeins, tracking projects, and sharing finished work with other makers. While applying for a Visual Designer role, I realized my portfolio had UI work but nothing that demonstrated systemic design thinking, which pushed me to prioritize building it properly now. I rebuilt FiberVault from the ground up in Figma: locking a cohesive colour and typography system, building a full component library, and designing every core surface — landing, dashboard, stash, projects, social feed, and their mobile equivalents — from those shared foundations. The result is a self-contained design system where one accent colour, one type pairing, and one set of interaction patterns hold consistently across a public marketing page, an authenticated dashboard, and a social feed. Development is planned next, using ASP.NET Core, Clean Architecture, and React.',
    tags: ['Figma', 'Design Systems', 'UI/UX', 'Component Library', 'Mobile Design'],
    features: [
      'Full design system: colour tokens, typography, and a reusable component library',
      'Consistent brand accent applied across buttons, tags, navigation, and interactive states',
      'Desktop and mobile layouts for landing, dashboard, stash, projects, and social feed',
      'Componentized cards, modals, and navigation patterns reused across every surface',
      'Auth-aware navigation and footer states that adapt for logged-in vs logged-out users',
    ],
    designGoals: [
      'Design one brand accent colour used consistently across every interactive element',
      'Create a component library that scales cleanly from desktop to mobile',
      'Keep navigation and footer content aware of authentication state, not static',
      'Build a system ready to hand off directly into development',
    ],
    designPhases: [
      {
        title: 'Design System',
        description:
          'Foundational colour palette, typography (Fraunces and Geist Sans pairing), and a full component library covering buttons, inputs, cards, tags, avatars, and navigation — built first so every subsequent screen could draw from shared, locked tokens rather than one-off styling.',
        images: fromFolder('fibervault/design-system'),
      },
      {
        title: 'Final UI',
        description:
          'High-fidelity desktop and mobile screens for the full app — landing page, dashboard, stash and project management, yarn and project detail views, and the social feed — each built from the shared component library to keep the brand consistent across every surface.',
        images: fromFolder('fibervault/final-ui'),
      },
    ],
    designReflection:
      'Designing this before writing any code meant every colour and spacing decision had to be deliberate rather than eyeballed screen by screen. It pushed me to articulate the "why" behind each choice: one accent colour reserved for interactive elements, consistent active-state logic across the sidebar and top navigation, and navigation that adapts to who is actually looking at it. That discipline is something I plan to carry directly into the build.',
  },
  {
    id: 'family-budget-bloom',
    title: 'Family Budget Bloom',
    cardImage: img('family-budget-bloom/01-familybudgetbloom.jpg'),
    imageAlt: 'Family Budget Bloom app screenshot',
    shortDescription:
      'A collaborative household financial tool built for shared economies, allowing family members to sync budgets in real-time.',
    about:
      'Developed during the She Builds event, Family Budget Bloom focuses on financial transparency for households. Built using "Vibe Coding" principles, the app transitions from an individual-user model to a shared household architecture. The core technical challenge involved architecting a secure data-sharing layer using Row Level Security (RLS) to ensure data privacy between different households while allowing seamless collaboration within them.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Shared household architecture supporting multiple members per home',
      'Real-time synchronization of incomes and expenses across devices',
      'Advanced Row Level Security (RLS) for multi-tenant data privacy',
      'Automated "Sweep to Savings" logic for monthly budget surpluses',
      'Interactive yearly summaries and goal-tracking visualizations',
    ],
    github: 'https://github.com/GabbyFerm/family-budget-bloom-DEMO',
    demo: 'https://family-budget-bloom-demo.vercel.app/',
    screenshots: fromFolder('family-budget-bloom'),
  },
  {
    id: 'thesis',
    title: 'Beyond the Code – Human Skills in the AI Era',
    cardImage: img('thesis/01-thesis.jpg'),
    imageAlt: 'Beyond the Code thesis cover',
    shortDescription:
      'Thesis examining how AI changes the developer role and which human skills become essential when AI takes over more of the coding.',
    about:
      'This thesis investigates how AI-assisted code generation is changing the role of software developers, and which human skills become essential when AI handles more of the coding. Through a qualitative literature review combining academic sources and industry perspectives, the study identifies five key human skills: architectural thinking, critical reasoning, ethical judgement, collaboration, and creativity. The findings show that AI augments developers rather than replacing them — shifting the role from code producer to orchestrator. Passed with distinction (VG).',
    tags: ['Literature Review', 'AI', 'Human Skills', 'Software Development', 'YH Thesis'],
    features: [
      'Qualitative literature review combining academic and industry sources',
      'Identifies five key human skills for the AI era',
      'Compares optimistic industry perspectives with critical academic voices',
      'Discusses implications for developer education',
      'Passed with distinction (VG)',
    ],
    report: `${import.meta.env.BASE_URL}thesis.pdf`,
  },
  {
    id: 'pluggkompis',
    title: 'PluggKompis — Homework Help Platform',
    cardImage: firstFrom('pluggkompis/screen'),
    imageAlt: 'PluggKompis platform screenshot',
    shortDescription:
      'Full-stack platform connecting students with free homework help at libraries and youth centers across Sweden.',
    about:
      'PluggKompis is a platform that connects students and parents with free homework help offered at libraries, youth centers, and study associations across Sweden. Built as a final course project together with Mohanad Al-Daghestani, the platform supports three distinct user roles — students, volunteers, and coordinators — each with their own dashboard and workflows. I was responsible for all UI/UX design in Figma, the complete React/TypeScript frontend, and contributed to the initial backend setup. Mohanad then took ownership of refactoring and expanding the backend as the frontend grew in complexity. The backend runs on Azure with a Supabase PostgreSQL database.',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'ASP.NET Core',
      'PostgreSQL',
      'Supabase',
      'Azure',
      'Figma',
      'Leaflet',
      'Zod',
    ],
    features: [
      'Designed all UI/UX in Figma — wireframes, user journeys, design system, and final screens',
      'Built the complete React/TypeScript frontend from scratch',
      'Multi-role authentication supporting students, volunteers, and coordinators',
      'Booking management system with slot scheduling and volunteer coordination',
      'Form validation with React Hook Form and Zod',
      'Backend built with ASP.NET Core, deployed to Azure with Supabase PostgreSQL',
    ],
    github: 'https://github.com/PluggKompis',
    demo: 'https://pluggkompis-client.vercel.app',
    designGoals: [
      'Design role-specific dashboards that feel distinct but visually consistent',
      'Create a booking flow that is frictionless for younger students',
      'Communicate trust and safety through the visual tone',
      'Build a reusable component library that the whole team could work from',
    ],
    designPhases: [
      {
        title: 'Wireframes',
        description:
          'Low-fidelity wireframes mapping out the core screens before any visual decisions were made. The focus was on structure, hierarchy, and making sure the layout worked for all three user roles.',
        images: fromFolder('pluggkompis/wireframes'),
      },
      {
        title: 'User Journey & Site Map',
        description:
          'Mapping how each role — student, volunteer, and coordinator — moves through the platform. The site map established the information architecture before any screens were designed.',
        images: fromFolder('pluggkompis/user-journey'),
      },
      {
        title: 'Design System',
        description:
          'A shared component library covering typography, colour tokens, buttons, form elements, and cards. Building this first meant every screen stayed visually consistent regardless of which role was using it.',
        images: fromFolder('pluggkompis/design-system'),
      },
      {
        title: 'Final UI',
        description:
          'High-fidelity screens for all three user roles, designed in Figma and handed off to the development team. Every screen was designed mobile-first and reviewed against the design system before implementation.',
        images: fromFolder('pluggkompis/final-ui'),
      },
    ],
    screenshots: fromFolder('pluggkompis/screen'),
    designReflection:
      'Designing and building the same product gave me a rare perspective — I could make design decisions knowing exactly how they would be implemented, and catch frontend complexity early. Working with Mohanad also taught me a lot about clear handoff and communication within a team. The division of ownership that emerged naturally — me on design and frontend, him on backend architecture — meant we could both go deep rather than spreading thin.',
  },
  {
    id: 'stitchtrack',
    title: 'StitchTrack — Mobile Row Counter App',
    cardImage: firstFrom('stitchtrack/screen'),
    imageAlt: 'StitchTrack mobile app screenshot',
    shortDescription:
      'A local-first, privacy-focused mobile app for knitters and crocheters — designed, built, and shipped to Google Play solo.',
    about:
      'StitchTrack is a personal passion project born from a real need in my own creative practice — I wanted a simple, distraction-free row counter that worked without an account, an internet connection, or giving away my data. I am both the designer and the developer, and the app is fully shipped and live on Google Play. Built with .NET MAUI following Clean Architecture across four layers (Domain, Application, Infrastructure, UI), using SQLite via Entity Framework Core for fully local storage and MVVM for data binding. The app went through a two-week closed test phase where I expanded it significantly based on user feedback and my own testing, resulting in a feature-complete v1.',
    tags: [
      '.NET MAUI',
      'SQLite',
      'Entity Framework Core',
      'MVVM',
      'Clean Architecture',
      'NUnit',
      'FluentAssertions',
      'GitHub Actions',
      'Android',
      'iOS',
      'Figma',
    ],
    features: [
      'Published and live on Google Play — fully shipped solo project',
      'Multiple counters per project with individual row tracking and notes per row',
      'Project management with colour tags, project tags, needle/hook size, and total rows',
      'Photo support — cover photo, pattern files, and inspiration photos per project',
      'Session tracking with a statistics dashboard filtered by today, week, month, and all time',
      'Full data export to JSON and CSV, and import from JSON to restore projects, counters, and session history',
      'Quick counter mode — start counting immediately without creating a project',
      'Haptic feedback toggle and theme settings (light/dark mode)',
      'Local-first architecture — no account required, all data stays on device',
      'Clean Architecture across Domain, Application, Infrastructure, and MAUI layers',
      'NUnit + FluentAssertions test suite with CI/CD via GitHub Actions',
    ],
    github: 'https://github.com/GabbyFerm/StitchTrack',
    demo: 'https://play.google.com/store/apps/details?id=com.gabbyferm.stitchtrack',
    demoLabel: 'Google Play',
    designGoals: [
      'Design a one-handed friendly interface for use while crafting',
      'Create a full light and dark mode colour system',
      'Keep the UI minimal so it never competes with the craft itself',
      'Design clear visual feedback for counter interactions',
    ],
    designPhases: [
      // Wireframes coming soon — uncomment and add folder when ready:
      // {
      //   title: 'Wireframes',
      //   description: '...',
      //   images: fromFolder('stitchtrack/wireframes'),
      // },
      {
        title: 'Final UI',
        description:
          'High-fidelity screens designed in Figma for both light and dark mode. The colour tokens were built for theming from day one — both modes were designed in parallel so the design system stays consistent in either context.',
        images: fromFolder('stitchtrack/final-ui'),
      },
    ],
    screenshots: fromFolder('stitchtrack/screen'),
    designReflection:
      'Designing something for yourself is both easier and harder than designing for a client. I had total freedom but also had to consciously separate "what I want" from "what a user needs". The two-week closed test phase was genuinely valuable — real users revealed things I had completely missed, including that tap targets needed to be larger and that the session dashboard needed more granular time filtering than I originally planned.',
  },
  {
    id: 'savory',
    title: 'Savory — Recipe Management App',
    cardImage: img('savory/01-savory.jpg'),
    imageAlt: 'Savory recipe app screenshot',
    shortDescription:
      'Full-stack recipe manager with Clean Architecture, CQRS, JWT auth, and image uploads. Built solo as a school assignment.',
    about:
      'Savory is a personal recipe management app built solo as a school assignment for the Advanced Object-Oriented Programming course. Users can create accounts, add recipes with ingredients, organize by category, upload images, and manage their own digital cookbook. The backend is built with .NET 8 following Clean Architecture and the CQRS pattern via MediatR. Authentication uses ASP.NET Core Identity with JWT tokens, and all data access goes through a Repository pattern with Entity Framework Core. The project includes both unit and integration tests covering handlers, mappings, and full auth flows.',
    tags: [
      'ASP.NET Core',
      '.NET 8',
      'React',
      'TypeScript',
      'Clean Architecture',
      'CQRS',
      'MediatR',
      'Entity Framework Core',
      'JWT',
      'FluentValidation',
      'xUnit',
      'Azure',
      'GitHub Actions',
    ],
    features: [
      'User registration and JWT authentication with ASP.NET Core Identity',
      'Recipe CRUD with server-side filtering by category, ingredient, and search term',
      'Server-side sorting by title, date, and cook time',
      'Recipe image upload (jpg, png, webp — max 5MB)',
      'Dashboard statistics: total recipes, category breakdown, averages, recent recipes',
      'CQRS pattern via MediatR with Commands and Queries',
      'Input validation with FluentValidation and custom OperationResult pattern',
      'Structured logging with Serilog (console + file output)',
      '11 unit tests and 3 integration tests — all passing in CI/CD pipeline',
      'CI/CD via GitHub Actions with automated test runs and code format checks',
    ],
    github: 'https://github.com/GabbyFerm/Savory-Backend',
    demo: 'https://savory-frontend.vercel.app',
    screenshots: fromFolder('savory'),
  },
  {
    id: 'dojo',
    title: 'Dojo Course Platform',
    cardImage: firstFrom('dojo/screen'),
    imageAlt: 'Dojo platform overview',
    shortDescription:
      'Full-stack course platform built during LIA internship with Clean Architecture, Identity, and payment integration.',
    about:
      'During my internship at InFiNetCode AB, I worked as a .NET/Fullstack Developer on Dojo — a comprehensive course platform. I was involved in the entire process, from UI/UX design in Figma to implementation using ASP.NET Core, Entity Framework Core, React, TypeScript, and Next.js, based on Clean Architecture and MediatR patterns. The platform is still in active development with subsequent LIA students continuing to build on it.',
    tags: [
      'ASP.NET Core',
      'React',
      'TypeScript',
      'Next.js',
      'Clean Architecture',
      'MediatR',
      'Stripe',
      'OAuth',
      'Figma',
    ],
    features: [
      'Implemented GitHub and Google OAuth login with refresh tokens',
      'Built and integrated APIs between backend and frontend',
      'Developed and tested Stripe payment solution',
      'Designed landing page, course pages, events, and student dashboard in Figma',
      'Worked with Clean Architecture principles throughout the codebase',
    ],
    designPhases: [
      {
        title: 'Final UI',
        description:
          'UI designs created in Figma covering the landing page, course browsing, events, and the student dashboard. Designed mobile-first and reviewed with the development team before implementation.',
        images: fromFolder('dojo/final-ui'),
      },
    ],
    screenshots: fromFolder('dojo/screen'),
    designReflection:
      'This project taught me how to design within real technical constraints. Because I was also part of the development team, I saw firsthand how design decisions affect implementation complexity. I became much more intentional about spacing systems and component reuse as a result.',
  },
];
