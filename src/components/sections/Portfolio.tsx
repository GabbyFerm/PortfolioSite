import { useState } from 'react';
import Section from '../layout/Section';
import Squiggle from '../ui/Squiggle';
import PortfolioCard from '../portfolio/PortfolioCard';
import ProjectModal from '../portfolio/ProjectModal';
import LogoGrid from '../portfolio/LogoGrid';
import { projects, type Project } from '../../data/projectsData';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const codingProjects = projects.filter((p) => p.category === 'coding');

  return (
    <Section id="portfolio" bgColor={1}>
      <div className="section-header">
        <h2>Portfolio</h2>
        <Squiggle />
      </div>
      {/* Coding Projects */}
      <div className="portfolio-intro">
        <h3>Coding</h3>
        <p>
          Code, coffee, and creativity. These projects represent my journey into the world of clean
          architecture, APIs, and solving real problems with code.
        </p>
      </div>
      <div className="portfolio-grid">
        {codingProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onOpenModal={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {/* Logo Design Section */}
      <LogoGrid />

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </Section>
  );
}
