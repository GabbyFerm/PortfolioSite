import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { HiArrowLeft } from 'react-icons/hi2';
import Squiggle from '../ui/Squiggle';
import Section from '../layout/Section';
import { projects } from '../../data/projectsData';
import type { DesignPhase } from '../../types';

// ─── Phase Section ────────────────────────────────────────────────────────────
// Renders one named design phase — e.g. "Wireframes" — with a description
// and an image grid where clicking any image opens the lightbox.
interface PhaseSectionProps {
  phase: DesignPhase;
  // Used to generate unique heading ids for accessibility
  phaseIndex: number;
}

function PhaseSection({ phase, phaseIndex }: PhaseSectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Don't render the section at all if there are no images yet
  if (phase.images.length === 0) return null;

  return (
    <section className="project-phase" aria-labelledby={`phase-heading-${phaseIndex}`}>
      <h2 id={`phase-heading-${phaseIndex}`} className="project-phase-title">
        {phase.title}
      </h2>
      <p className="project-phase-description">{phase.description}</p>

      {/* Image grid — each image is a button that opens the lightbox */}
      <ul className="phase-image-grid" aria-label={`${phase.title} images`}>
        {phase.images.map((src, i) => (
          <li key={i}>
            <button
              className="phase-image-btn"
              onClick={() => openAt(i)}
              aria-label={`Open ${phase.title} image ${i + 1} of ${phase.images.length} in full view`}
            >
              <img src={src} alt={`${phase.title} — image ${i + 1}`} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox — themed to match your site */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={phase.images.map((src) => ({ src }))}
        styles={{
          container: { backgroundColor: 'var(--color-bg-1)' },
        }}
      />
    </section>
  );
}

// ─── Screenshot Section ───────────────────────────────────────────────────────
// Live product screenshots get their own section at the bottom of the page.
interface ScreenshotSectionProps {
  images: string[];
  projectTitle: string;
}

function ScreenshotSection({ images, projectTitle }: ScreenshotSectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <section className="project-phase" aria-labelledby="screenshots-heading">
      <h2 id="screenshots-heading" className="project-phase-title">
        Live Product
      </h2>
      <p className="project-phase-description">Screenshots from the deployed product.</p>

      <ul className="phase-image-grid" aria-label="Live product screenshots">
        {images.map((src, i) => (
          <li key={i}>
            <button
              className="phase-image-btn"
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              aria-label={`Open ${projectTitle} screenshot ${i + 1} of ${images.length} in full view`}
            >
              <img src={src} alt={`${projectTitle} — live screenshot ${i + 1}`} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((src) => ({ src }))}
        styles={{
          container: { backgroundColor: 'var(--color-bg-1)' },
        }}
      />
    </section>
  );
}

// ─── Project Page ─────────────────────────────────────────────────────────────
export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Friendly not-found state if the id doesn't match any project
  if (!project) {
    return (
      <Section bgColor={1}>
        <div className="project-not-found">
          <h1>Project not found</h1>
          <p>The project you're looking for doesn't exist or has been moved.</p>
          <button className="button" onClick={() => navigate('/')}>
            Back to portfolio
          </button>
        </div>
      </Section>
    );
  }

  return (
    <Section bgColor={1}>
      <article className="project-page">
        {/* Breadcrumb — tells screen readers and users where they are */}
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* aria-current="page" marks the current page in the breadcrumb */}
            <li aria-current="page">{project.title}</li>
          </ol>
        </nav>

        {/* Back button — goes to the previous page in history */}
        <button
          className="project-back-btn"
          onClick={() => navigate('/', { state: { scrollTo: 'portfolio' } })}
          aria-label="Back to portfolio"
        >
          <HiArrowLeft size={20} aria-hidden="true" />
          Back
        </button>

        {/* Page title with squiggle — same pattern as other sections */}
        <header className="project-page-header">
          <div className="section-header">
            <h1>{project.title}</h1>
            <Squiggle />
          </div>
        </header>

        {/* About */}
        <section className="project-section" aria-labelledby="about-heading">
          <h2 id="about-heading" className="project-section-title">
            About the Project
          </h2>
          <p>{project.about}</p>
        </section>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <section className="project-section" aria-labelledby="features-heading">
            <h2 id="features-heading" className="project-section-title">
              Key Features & Contributions
            </h2>
            <ul className="modal-feature-list">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        <section className="project-section" aria-labelledby="tech-heading">
          <h2 id="tech-heading" className="project-section-title">
            Technologies Used
          </h2>
          <div className="modal-tech-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* External links */}
        {(project.github || project.demo || project.report) && (
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button">
                {project.demoLabel ?? 'View Live Demo'}
              </a>
            )}
            {project.report && (
              <a href={project.report} target="_blank" rel="noopener noreferrer" className="button">
                Read Report
              </a>
            )}
          </div>
        )}

        {/* Design Goals */}
        {project.designGoals && project.designGoals.length > 0 && (
          <section className="project-section" aria-labelledby="goals-heading">
            <h2 id="goals-heading" className="project-section-title">
              Design Goals
            </h2>
            <ul className="modal-feature-list">
              {project.designGoals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Design Phases — each renders its own section with lightbox */}
        {project.designPhases?.map((phase, i) => (
          <PhaseSection key={i} phase={phase} phaseIndex={i} />
        ))}

        {/* Live screenshots */}
        {project.screenshots && (
          <ScreenshotSection images={project.screenshots} projectTitle={project.title} />
        )}

        {/* Reflection */}
        {project.designReflection && (
          <section className="project-section" aria-labelledby="reflection-heading">
            <h2 id="reflection-heading" className="project-section-title">
              Reflection
            </h2>
            <p>{project.designReflection}</p>
          </section>
        )}
      </article>
    </Section>
  );
}
