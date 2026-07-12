import { useNavigate } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi2';
import type { PrintProject } from '../../types';

interface PrintCardProps {
  project: PrintProject;
}

export default function PrintCard({ project }: PrintCardProps) {
  const navigate = useNavigate();

  const goToProject = () => navigate(`/print/${project.id}`);

  return (
    <article className="portfolio-card">
      <button
        className="portfolio-card-image"
        onClick={goToProject}
        aria-label={`View ${project.title} print project details`}
      >
        <img
          src={project.cardImage}
          alt={project.imageAlt}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </button>

      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{project.title}</h3>
        {project.year && <p className="portfolio-card-year">{project.year}</p>}
        <p className="portfolio-card-description">{project.shortDescription}</p>

        <div className="portfolio-card-links">
          {/* Print projects have no external links — just the dedicated page */}
          <div className="portfolio-card-badges" />
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
