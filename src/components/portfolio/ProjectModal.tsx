import { useEffect } from 'react';
import { HiXMark } from 'react-icons/hi2';
import type { Project } from '../../data/projectsData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Determine if this is a mobile app (portrait) screenshot
  const isMobileApp = project.imageFit === 'contain';

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <HiXMark size={32} />
        </button>

        {/* Modal Header */}
        <h2 className="modal-title">{project.title}</h2>

        {/* Images - Single or Gallery */}
        {project.modalImages ? (
          <div className={`modal-image-gallery ${isMobileApp ? 'modal-gallery-mobile' : ''}`}>
            {project.modalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="modal-gallery-image"
                style={{ objectFit: project.imageFit || 'cover' }}
              />
            ))}
          </div>
        ) : (
          <div className={`modal-image-single ${isMobileApp ? 'modal-image-mobile' : ''}`}>
            <img
              src={project.image}
              alt={project.imageAlt}
              style={{ objectFit: project.imageFit || 'cover' }}
            />
          </div>
        )}

        {/* Description */}
        <div className="modal-section">
          <h3>About the Project</h3>
          <p>{project.fullDescription}</p>
        </div>

        {/* Features */}
        {project.features && (
          <div className="modal-section">
            <h3>Key Features & Contributions</h3>
            <ul className="modal-feature-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="modal-section">
          <h3>Technologies Used</h3>
          <div className="modal-tech-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button">
              View Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
