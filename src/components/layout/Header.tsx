import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2';
import { useTheme } from '../../hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  // Scroll to a section by id.
  // If we're on a project page, navigate home first and pass the target section
  // as state — HomePage picks this up and scrolls after render.
  const scrollToSection = (sectionId: string) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    closeMenu();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container header-content">
        {/* Logo — always navigates to top of home page */}
        <p className="logo">
          <button onClick={goHome} aria-label="Go to top of page" className="logo-btn">
            Gabriella Frank Ferm
          </button>
        </p>

        <div className="nav-and-toggle">
          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
          >
            {isMenuOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>

          {/* Navigation */}
          <nav
            id="nav-menu"
            className={`nav-menu ${isMenuOpen ? 'open' : ''}`}
            aria-label="Main navigation"
          >
            <ul className="nav-links">
              <li>
                <button onClick={() => scrollToSection('skills')} className="nav-link-btn">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="nav-link-btn">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="nav-link-btn">
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'dark' ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
