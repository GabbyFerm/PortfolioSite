import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { HiArrowLeft } from 'react-icons/hi2';
import Squiggle from '../ui/Squiggle';
import Section from '../layout/Section';
import { printProjects } from '../../data/printData';
import type { PrintSection } from '../../types';

// ─── Print Section ─────────────────────────────────────────────────────────────
// Renders one named section — e.g. "European Edition" — with optional
// description text and a thumbnail grid that opens a lightbox on click.
interface PrintSectionProps {
  section: PrintSection;
  sectionIndex: number;
}

function PrintSectionBlock({ section, sectionIndex }: PrintSectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Don't render if no images have been added yet
  if (section.images.length === 0) return null;

  return (
    <section className="project-phase" aria-labelledby={`print-section-heading-${sectionIndex}`}>
      <h2 id={`print-section-heading-${sectionIndex}`} className="project-phase-title">
        {section.title}
      </h2>

      {section.description && <p className="project-phase-description">{section.description}</p>}

      {/* Thumbnail grid */}
      <ul className="phase-image-grid" aria-label={`${section.title} images`}>
        {section.images.map((src, i) => (
          <li key={i}>
            <button
              className="phase-image-btn"
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              aria-label={`Open ${section.title} image ${i + 1} of ${section.images.length} in full view`}
            >
              <img src={src} alt={`${section.title} — image ${i + 1}`} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={section.images.map((src) => ({ src }))}
        styles={{
          container: { backgroundColor: 'var(--color-bg-1)' },
        }}
      />
    </section>
  );
}

// ─── Print Page ────────────────────────────────────────────────────────────────
export default function PrintPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = printProjects.find((p) => p.id === id);

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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page">{project.title}</li>
          </ol>
        </nav>

        {/* Back button */}
        <button
          className="project-back-btn"
          onClick={() => navigate('/', { state: { scrollTo: 'portfolio' } })}
          aria-label="Back to portfolio"
        >
          <HiArrowLeft size={20} aria-hidden="true" />
          Back
        </button>

        {/* Title + squiggle */}
        <header className="project-page-header">
          <div className="section-header">
            <h1>{project.title}</h1>
            <Squiggle />
          </div>
          {project.year && <p className="project-year">{project.year}</p>}
        </header>

        {/* Intro text — supports newlines via white-space pre-line */}
        <section className="project-section" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="project-section-title">
            About the Project
          </h2>
          {/* Split on \n so multi-paragraph intro renders correctly */}
          {project.intro
            .split('\n')
            .filter(Boolean)
            .map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
        </section>

        {/* Print sections — EU edition, Japan edition, merch etc. */}
        {project.sections.map((section, i) => (
          <PrintSectionBlock key={i} section={section} sectionIndex={i} />
        ))}
      </article>
    </Section>
  );
}
