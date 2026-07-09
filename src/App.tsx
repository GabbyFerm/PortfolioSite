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

interface LocationState {
  scrollTo?: string;
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Cast state to our known shape — useLocation types it as unknown by default
    const state = location.state as LocationState | null;
    const scrollTarget = state?.scrollTo;

    if (scrollTarget) {
      // Store the timeout id so we can clear it if the component unmounts
      // before the scroll fires — prevents a memory leak
      const timer = setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      // Cleanup — cancel the timeout if the component unmounts early
      return () => clearTimeout(timer);
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
