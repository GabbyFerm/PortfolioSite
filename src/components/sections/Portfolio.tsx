import { useState } from 'react';
import Section from '../layout/Section';
import Squiggle from '../ui/Squiggle';
import PortfolioCard from '../portfolio/PortfolioCard';
import ProjectModal from '../portfolio/ProjectModal';
import DesignCard from '../portfolio/DesignCard';
import DesignModal from '../portfolio/DesignModal';
import LogoGrid from '../portfolio/LogoGrid';
import { projects } from '../../data/projectsData';
import { designProjects } from '../../data/designData';
import type { CodingProject, DesignProject } from '../../types';

export default function Portfolio() {
  // Separate state for each modal type — they are different shapes of data
  const [selectedCodingProject, setSelectedCodingProject] = useState<CodingProject | null>(null);
  const [selectedDesignProject, setSelectedDesignProject] = useState<DesignProject | null>(null);

  return (
    <Section id="portfolio" bgColor={1}>
      <div className="section-header">
        <h2>Portfolio</h2>
        <Squiggle />
      </div>

      {/* ── Coding Projects ─────────────────────────────────────────── */}
      <div className="portfolio-intro">
        <h3>Coding</h3>
        <p>
          Code, coffee, and creativity. These projects represent my journey into the world of clean
          architecture, APIs, and solving real problems with code.
        </p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onOpenModal={() => setSelectedCodingProject(project)}
          />
        ))}
      </div>

      {/* ── UI/UX Design Projects ───────────────────────────────────── */}
      <div className="portfolio-intro">
        <h3>UI/UX Design</h3>
        <p>
          Where logic meets aesthetics. These case studies show my design process — from goals and
          structure through to finished screens.
        </p>
      </div>
      <div className="portfolio-grid">
        {designProjects.map((project) => (
          <DesignCard
            key={project.id}
            project={project}
            onOpenModal={() => setSelectedDesignProject(project)}
          />
        ))}
      </div>

      {/* ── Logo Design ─────────────────────────────────────────────── */}
      <div className="portfolio-intro">
        <h3>Logos</h3>
        <p>
          A selection of logos created for various companies and clients — part of my broader
          background in graphic design and visual branding.
        </p>
      </div>
      <LogoGrid />

      {/* ── Modals ──────────────────────────────────────────────────── */}
      {/* Only one modal can be open at a time since state is separate */}
      {selectedCodingProject && (
        <ProjectModal
          project={selectedCodingProject}
          onClose={() => setSelectedCodingProject(null)}
        />
      )}
      {selectedDesignProject && (
        <DesignModal
          project={selectedDesignProject}
          onClose={() => setSelectedDesignProject(null)}
        />
      )}
    </Section>
  );
}
