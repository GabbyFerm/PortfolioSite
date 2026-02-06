import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/ui/BackToTop';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Journey />
        <Skills />
        <Portfolio />
      </main>

      <Footer />

      {/* BackToTop button - fixed position, shows when scrolling */}
      <BackToTop />
    </>
  );
}

export default App;
