import { useState } from 'react';
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2';
import { useTheme } from '../../hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState('', document.title, window.location.pathname);
  };

  return (
    <header className="site-header">
      <div className="container header-content">
        {/* Logo */}
        <h1 className="logo">
          <a href="#" onClick={handleLogoClick} aria-label="Go to top of page">
            Gabriella Frank Ferm
          </a>
        </h1>

        <div className="nav-and-toggle">
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>

          {/* Navigation Links */}
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {/* Show Sun icon in dark mode, Moon icon in light mode */}
            {theme === 'dark' ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
