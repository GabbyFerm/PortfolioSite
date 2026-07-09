import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/ui/BackToTop';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import ProjectPage from './components/pages/ProjectPage';
import ScrollToTop from './components/ui/ScrollToTop';
import './styles/App.css';

// HomePage renders all sections.
// It also handles scrolling to a section when navigating back from a project page.
// e.g. clicking "Skills" in the header from a project page navigates home
// and passes { scrollTo: 'skills' } as location state.
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (scrollTarget) {
      // Small delay lets the sections render before we try to scroll
      setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <About />
      <Journey />
      <Skills />
      <Portfolio />
    </>
  );
}

function App() {
  return (
    // HashRouter uses the URL hash for routing, e.g. /#/projects/pluggkompis.
    // This works reliably on GitHub Pages without any server configuration.
    <HashRouter>
      <ScrollToTop />
      <Header />
      {/* id="main-content" lets the skip-to-main link work for screen readers */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </HashRouter>
  );
}

export default App;
