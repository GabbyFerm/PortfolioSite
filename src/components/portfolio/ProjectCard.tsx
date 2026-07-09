import { useNavigate } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi2';
import type { UnifiedProject } from '../../types';

interface ProjectCardProps {
  project: UnifiedProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  const goToProject = () => navigate(`/projects/${project.id}`);

  return (
    // article is semantically correct here — each card is a self-contained piece of content
    <article className="portfolio-card">
      {/* Image as a button — clicking navigates to the project page */}
      <button
        className="portfolio-card-image"
        onClick={goToProject}
        aria-label={`View ${project.title} project details`}
      >
        <img
          src={project.cardImage}
          alt={project.imageAlt}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </button>

      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{project.title}</h3>
        <p className="portfolio-card-description">{project.shortDescription}</p>

        <div className="portfolio-card-links">
          {/* Row 1 — external links as badges */}
          <div className="portfolio-card-badges">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-badge"
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-badge"
              >
                {project.demoLabel ?? 'Live Demo'}
              </a>
            )}
            {project.report && (
              <a
                href={project.report}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-badge"
              >
                Read Report
              </a>
            )}
          </div>

          {/* Row 2 — primary action, separated by a dotted line */}
          <div className="portfolio-card-action">
            <button
              className="portfolio-link portfolio-link-more"
              onClick={goToProject}
              aria-label={`View ${project.title} project details`}
            >
              View Project <HiChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
