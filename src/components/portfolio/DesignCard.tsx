import type { DesignProject } from '../../types';

interface DesignCardProps {
  project: DesignProject;
  onOpenModal: () => void;
}

export default function DesignCard({ project, onOpenModal }: DesignCardProps) {
  return (
    <div className="portfolio-card">
      {/* Clicking the image opens the modal, same pattern as PortfolioCard */}
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

      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{project.title}</h3>
        <p className="portfolio-card-description">{project.shortDescription}</p>

        {/* Design cards only have one action — open the modal */}
        <div className="portfolio-card-links">
          <button className="portfolio-link portfolio-link-more" onClick={onOpenModal}>
            View Case Study →
          </button>
        </div>
      </div>
    </div>
  );
}
