import type { Project } from '../../types';

interface PortfolioCardProps {
  project: Project;
  onOpenModal: () => void;
}

export default function PortfolioCard({ project, onOpenModal }: PortfolioCardProps) {
  return (
    <div className="portfolio-card">
      {/* Image - clickable to open modal */}
      <div className="portfolio-card-image" onClick={onOpenModal} style={{ cursor: 'pointer' }}>
        <img
          src={project.image}
          alt={project.imageAlt}
          style={{
            objectFit: project.imageFit || 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Content */}
      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{project.title}</h3>
        <p className="portfolio-card-description">{project.shortDescription}</p>

        {/* Links */}
        <div className="portfolio-card-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
          )}
          <button className="portfolio-link portfolio-link-more" onClick={onOpenModal}>
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
}
