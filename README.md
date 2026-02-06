# Gabriella Frank Ferm - Portfolio

Welcome to my personal portfolio website! This site showcases my journey as a .NET/Fullstack developer, combining technical skills with creative design expertise.

## 🌟 About This Portfolio

This portfolio represents my work as a student at NBI Handelsakademin in Gothenburg, studying .NET-focused system development (graduating June 2026). It highlights my technical projects, design work, and professional experience through a modern, interactive interface.

## 🛠️ Technologies Used

### Frontend

- **React 18** - Component-based UI architecture
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Modern styling with CSS Grid, Flexbox, custom properties, and animations

### Tools & Libraries

- **React Icons** - Icon components (HeroIcons 2)
- **React Hooks** - State management and side effects
- **Context API** - Theme management
- **Intersection Observer API** - Scroll-triggered animations
- **Google Fonts** - Custom typography (Comforter, Space Grotesk, Barlow)

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Git** - Version control
- **GitHub Actions** - CI/CD pipeline

## ✨ Features

- **Responsive Design** - Mobile-first approach, fully optimized for all devices
- **Dark Mode Toggle** - Seamless theme switching with localStorage persistence
- **Smooth Animations** - Scroll-triggered squiggle underlines using Intersection Observer
- **Component Architecture** - Reusable, maintainable React components
- **Type Safety** - Full TypeScript implementation for robust code
- **Project Modals** - Detailed project views with image galleries and tech stacks
- **Logo Showcase** - Professional design portfolio with hover effects
- **Accessible Navigation** - Keyboard navigation and ARIA labels
- **Performance Optimized** - Fast load times with Vite's optimized bundling
- **GitHub Actions Deployment** - Automated deployment to GitHub Pages

## 📂 Project Structure

```
portfolio/
│
├── public/
│   ├── images/
│   │   ├── logos/              # Logo design portfolio
│   │   ├── pluggkompis.jpg     # Project screenshots
│   │   ├── stitchtrack*.png    # Mobile app screenshots
│   │   ├── savory.jpg
│   │   ├── dojo1-5.jpg         # LIA internship screenshots
│   │   └── pixel*.jpg          # Project thumbnails
│   └── GabriellaFerm-CV-eng.pdf
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation with mobile menu
│   │   │   ├── Footer.tsx      # Contact links
│   │   │   ├── Section.tsx     # Reusable section wrapper
│   │   │   └── BackToTop.tsx   # Scroll-to-top button
│   │   ├── sections/
│   │   │   ├── About.tsx       # Hero section with background image
│   │   │   ├── Journey.tsx     # Experience and background
│   │   │   ├── Skills.tsx      # Technical and soft skills
│   │   │   └── Portfolio.tsx   # Project showcase
│   │   ├── portfolio/
│   │   │   ├── PortfolioCard.tsx   # Project card component
│   │   │   ├── ProjectModal.tsx    # Detailed project view
│   │   │   └── LogoGrid.tsx        # Design portfolio
│   │   └── ui/
│   │       └── Squiggle.tsx    # Animated underline component
│   ├── context/
│   │   ├── ThemeContext.tsx    # Theme context
│   │   └── ThemeProvider.tsx   # Theme state management
│   ├── hooks/
│   │   └── useTheme.ts         # Theme hook
│   ├── data/
│   │   ├── projectsData.ts     # Project information
│   │   └── logosData.ts        # Logo portfolio data
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── styles/
│   │   ├── index.css           # Global resets
│   │   └── App.css             # Main styles with CSS variables
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
│
├── .vscode/
│   └── settings.json           # VS Code workspace settings
│
├── .prettierrc                 # Prettier configuration
├── .prettierignore             # Prettier ignore rules
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎨 Design System

### Color Palette

**Light Mode:**

- Background: `#f7f6f0`, `#f0eee6`, `#dfded8`
- Text: `#24282d`, `#2f343a`
- Accent: `#da5d7e` (pink)

**Dark Mode:**

- Background: `#24282d`, `#2f343a`, `#454a50`
- Text: `#f7f6f0`, `#f0eee6`
- Accent: `#47bcca` (teal)

### Typography

- **Headings**: Space Grotesk (400, 700)
- **Body**: Barlow (400, 600, 700)
- **Logo**: Comforter (cursive)

### Design Principles

- Mobile-first responsive design
- Consistent spacing using CSS custom properties
- Smooth transitions and animations
- High contrast for accessibility
- Clean, minimal aesthetic

## 📋 Sections

1. **Hero/About** - Introduction with background image and personal photos
2. **Journey** - Three-column grid detailing my path from design to development
3. **Skills** - Card-based layout showcasing technical and soft skills
4. **Portfolio**
   - **Coding Projects**: PluggKompis, StitchTrack, Savory, Dojo (LIA), and more
   - **Design Work**: Logo portfolio from freelance and retail work
5. **Contact** - Footer with email, GitHub, and LinkedIn

## 🚀 Key Projects Featured

### PluggKompis - Homework Help Platform

Full-stack platform connecting students with free homework help across Sweden

- **Tech**: ASP.NET Core, React, TypeScript, Clean Architecture, Azure
- **Live Demo**: [pluggkompis-client.vercel.app](https://pluggkompis-client.vercel.app)

### StitchTrack - Mobile Row Counter App

Local-first mobile app for knitters and crocheters to track projects

- **Tech**: .NET MAUI, SQLite, MVVM, Cross-platform (iOS & Android)

### Savory - Recipe Management App

Full-stack recipe app with authentication and image uploads

- **Tech**: ASP.NET Core, React, TypeScript, Azure, Clean Architecture
- **Live Demo**: [savory-frontend.vercel.app](https://savory-frontend.vercel.app)

### Dojo Course Platform (LIA Internship)

Comprehensive course platform built during internship at InFiNetCode AB

- **Tech**: ASP.NET Core, React, TypeScript, Next.js, Clean Architecture, MediatR, Stripe, OAuth
- **Features**: GitHub/Google authentication, payment integration, Figma UI/UX design

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Process

1. Push to `main` branch
2. GitHub Actions workflow triggers
3. Dependencies installed
4. TypeScript compiled
5. Vite build process runs
6. Static files deployed to GitHub Pages

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format

# Lint code
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AA compliant)
- Respects `prefers-reduced-motion` for animations
- Focus states for all interactive elements

## 🔄 Migration Notes

**Version 2.0** represents a complete rebuild from vanilla HTML/CSS/JS to React + TypeScript:

### Key Improvements

- ✅ Component-based architecture for better maintainability
- ✅ TypeScript for type safety and better developer experience
- ✅ Modern build tooling with Vite
- ✅ Improved performance with code splitting
- ✅ Enhanced animations with scroll-triggered effects
- ✅ Better state management with Context API
- ✅ Automated deployment with GitHub Actions
- ✅ Professional code formatting and linting

### Legacy Version

The original HTML/CSS/JS portfolio is preserved in the `portfolio-v1-backup` branch for reference.

## 📧 Contact

- **Email**: gabbzf@gmail.com
- **LinkedIn**: [Gabriella Frank Ferm](https://www.linkedin.com/in/gabriella-frank-ferm-75aa10291/)
- **GitHub**: [GabbyFerm](https://github.com/GabbyFerm)

## 📄 License

This portfolio is © 2025 Gabriella Frank Ferm. All rights reserved.

The code structure can be used as reference, but please do not copy the content, images, or design directly.

---

**Built with ❤️ by Gabriella Frank Ferm**

_"I believe the most exciting solutions come from the overlap of logic and creativity."_

**Portfolio v2.0** - Rebuilt with React, TypeScript & Vite
