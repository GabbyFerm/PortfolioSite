import Section from '../layout/Section';
import Squiggle from '../ui/Squiggle';
import {
  HiCpuChip,
  HiSparkles,
  HiCircleStack,
  HiCog6Tooth,
  HiWrench,
  HiPaintBrush,
  HiHeart,
  HiGlobeAlt,
  HiPuzzlePiece,
} from 'react-icons/hi2';

export default function Skills() {
  return (
    <Section id="skills" bgColor={3}>
      <div className="section-header">
        <h2>Skills</h2>
        <Squiggle />
      </div>

      <ul className="skills-list">
        {/* Backend */}
        <li className="skill-item">
          <HiCpuChip className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">Backend:</strong>
            <span className="skill-text">C#, .NET, ASP.NET Core Web API, .NET MAUI</span>
          </div>
        </li>

        {/* Frontend */}
        <li className="skill-item">
          <HiSparkles className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">Frontend:</strong>
            <span className="skill-text">React, TypeScript, HTML, CSS, TailwindCSS, Next.js</span>
          </div>
        </li>

        {/* Databases */}
        <li className="skill-item">
          <HiCircleStack className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">Databases & ORM:</strong>
            <span className="skill-text">SQL Server, SQLite, Entity Framework Core</span>
          </div>
        </li>

        {/* DevOps */}
        <li className="skill-item">
          <HiCog6Tooth className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">DevOps & Cloud:</strong>
            <span className="skill-text">GitHub Actions, CI/CD, Azure</span>
          </div>
        </li>

        {/* Tools */}
        <li className="skill-item">
          <HiWrench className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">Tools:</strong>
            <span className="skill-text">
              Visual Studio, VS Code, GitHub, SQL Server Management Studio, Postman, Pyramid, Figma
            </span>
          </div>
        </li>

        {/* Design */}
        <li className="skill-item">
          <HiPaintBrush className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">Design:</strong>
            <span className="skill-text">Figma, Photoshop, Illustrator, InDesign, Canva</span>
          </div>
        </li>

        {/* Soft Skills */}
        <li className="skill-item">
          <HiHeart className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">Soft Skills:</strong>
            <span className="skill-text">
              Collaborative, detail-oriented, clear communication, proactive problem-solver
            </span>
          </div>
        </li>

        {/* Languages */}
        <li className="skill-item">
          <HiGlobeAlt className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">Languages:</strong>
            <span className="skill-text">Swedish (native), English (fluent)</span>
          </div>
        </li>

        {/* Methods & Frameworks */}
        <li className="skill-item">
          <HiPuzzlePiece className="skill-icon" />
          <div className="skill-content">
            <strong className="skill-label">Methods & Frameworks:</strong>
            <span className="skill-text">
              Agile, Scrum, Clean Architecture, MediatR, OAuth/Identity, RBAC, API Integration
            </span>
          </div>
        </li>
      </ul>

      <a
        href={`${import.meta.env.BASE_URL}GabriellaFerm-CV-eng.pdf`}
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </Section>
  );
}
