import Section from '../layout/Section';
import Squiggle from '../ui/Squiggle';
import ProjectCard from '../portfolio/ProjectCard';
import LogoGrid from '../portfolio/LogoGrid';
import { projects } from '../../data/projectsData';

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
