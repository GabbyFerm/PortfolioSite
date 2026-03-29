import { useEffect } from 'react';
import { HiXMark } from 'react-icons/hi2';
import type { DesignProject } from '../../types';

interface DesignModalProps {
  project: DesignProject;
  onClose: () => void;
}

export default function DesignModal({ project, onClose }: DesignModalProps) {
  // Close on Escape key + lock body scroll — same pattern as ProjectModal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    // Cleanup: remove listener and restore scroll when modal unmounts
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Close when clicking the dark backdrop behind the modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <HiXMark size={32} />
        </button>

        {/* Header */}
        <h2 className="modal-title">{project.title}</h2>

        {/* Image gallery — same as ProjectModal */}
        {project.modalImages && project.modalImages.length > 0 ? (
          <div
            className={`modal-image-gallery ${project.imageFit === 'contain' ? 'modal-gallery-mobile' : 'modal-gallery-design'}`}
          >
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
          <div className="modal-image-single">
            <img
              src={project.image}
              alt={project.imageAlt}
              style={{ objectFit: project.imageFit || 'cover' }}
            />
          </div>
        )}

        {/* Intro */}
        <div className="modal-section">
          <h3>About the Project</h3>
          <p>{project.designIntro}</p>
        </div>

        {/* Goals — rendered as a bullet list, same style as features in ProjectModal */}
        <div className="modal-section">
          <h3>Design Goals</h3>
          <ul className="modal-feature-list">
            {project.designGoals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="modal-section">
          <h3>Process</h3>
          <p>{project.designProcess}</p>
        </div>

        {/* Reflection */}
        <div className="modal-section">
          <h3>Reflection</h3>
          <p>{project.designReflection}</p>
        </div>

        {/* Tools / tags */}
        <div className="modal-section">
          <h3>Tools Used</h3>
          <div className="modal-tech-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
