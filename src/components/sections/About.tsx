import { useTheme } from '../../hooks/useTheme';

import meImg from '../../assets/images/me.jpg';
import monstersImg from '../../assets/images/monsters.jpg';
import totoroImg from '../../assets/images/totoro.jpg';
import lunisImg from '../../assets/images/lunis.jpg';

export default function About() {
  const { theme } = useTheme();

  // Choose background image based on theme
  const backgroundImage =
    theme === 'dark' ? '/images/bg-image-dark.jpg' : '/images/bg-image-light.jpg';

  return (
    <section
      className="about-section"
      id="about"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="about-overlay">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1>Hi, I'm Gabriella - but most people call me Gabby!</h1>
              <p className="lead">I'm a student, crazy cat person and creation lover.</p>
              <p className="lead">
                I enjoy making things — whether that's with code, yarn, a paintbrush, or pixels. I
                believe the best ideas come from combining creativity and curiosity. Right now, I'm
                on an exciting path into tech, learning and building every day.
              </p>
              <p className="lead">
                Also: I'm a lifelong Star Wars nerd and yes — the hair color probably won't be the
                same next time you meet me...
              </p>
              <a
                href="https://www.linkedin.com/in/gabriella-frank-ferm-75aa10291/"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say hi on LinkedIn
              </a>
            </div>

            {/* Personal images grid - 2x2 rounded images */}
            <div className="about-images">
              <img src={meImg} alt="Gabriella" />
              <img src={monstersImg} alt="Handmade crochet monsters" />
              <img src={totoroImg} alt="Crochet Totoro character" />
              <img src={lunisImg} alt="Gabriella's cat Lunis" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
