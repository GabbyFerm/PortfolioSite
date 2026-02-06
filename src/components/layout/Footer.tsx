import { HiMail, HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <p className="footer-heading">
          <HiHeart size={20} /> <span>Thanks for visiting!</span>
        </p>

        {/* Contact Links */}
        <ul className="footer-links">
          <li>
            <a href="mailto:gabbzf@gmail.com" aria-label="Send email to Gabriella">
              <HiMail size={20} />
              <span>Email</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GabbyFerm"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Gabriella's GitHub profile"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriella-frank-ferm-75aa10291/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Gabriella's LinkedIn profile"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
