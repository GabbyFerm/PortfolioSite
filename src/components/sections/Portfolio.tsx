import Section from '../layout/Section';
import Squiggle from '../ui/Squiggle';
import ProjectCard from '../portfolio/ProjectCard';
import PrintCard from '../portfolio/PrintCard';
import LogoGrid from '../portfolio/LogoGrid';
import { projects } from '../../data/projectsData';
import { printProjects } from '../../data/printData';

export default function Portfolio() {
  return (
    <Section id="portfolio" bgColor={1}>
      <div className="section-header">
        <h2>Portfolio</h2>
        <Squiggle />
      </div>

      <div className="portfolio-intro">
        <p>
          A mix of code, design, and everything in between. Some projects are built from scratch,
          some are design case studies, and some are both.
        </p>
      </div>

      {/* Unified grid — no Coding / UI/UX split */}
      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* ── Print Design ────────────────────────────────────────────────── */}
      <div className="portfolio-intro" style={{ marginTop: 'var(--spacing-lg)' }}>
        <h3>Print Design</h3>
        <p>
          Selected print work — CD artwork, booklets, merchandise, and visual identities. A mix of
          past freelance work and ongoing projects as I continue to take on graphic design alongside
          my other work.
        </p>
      </div>
      <div className="portfolio-grid">
        {printProjects.map((project) => (
          <PrintCard key={project.id} project={project} />
        ))}
      </div>

      {/* Logo section */}
      <div className="portfolio-intro" style={{ marginTop: 'var(--spacing-lg)' }}>
        <h3>Logos</h3>
        <p>
          A selection of logos created for various companies and clients — part of my broader
          background in graphic design and visual branding.
        </p>
      </div>
      <LogoGrid />
    </Section>
  );
}
