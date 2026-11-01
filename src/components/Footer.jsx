import { useCallback, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { nav, projects } from '../data/portfolio';
import ProjectDetailsModal from './ProjectDetailsModal';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/nakashn', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/meakashadhikari',
    icon: Linkedin,
  },
  { label: 'Email', href: 'mailto:akashadhikari061@gmail.com', icon: Mail },
];
const footerProjects = [
  { index: 0, label: 'AI Text Summarizer' },
  { index: 2, label: 'KhelPoshak' },
  { index: 1, label: 'E-Commerce Application' },
  { index: 3, label: 'Real-Time Chat Application' },
];

const quickLinks = nav.filter((item) => item.id !== 'education');

export default function Footer() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeDetails = useCallback(() => setSelectedProject(null), []);
  return (
    <footer className="portfolio-footer">
      <div className="footer-columns">
        <div className="footer-identity">
          <a className="footer-logo" href="#home">
            Akash.
          </a>
          <p>Computing Student &amp; Backend Developer</p>
          <p className="footer-description">
            Building practical web applications and exploring better ways to
            solve problems through code.
          </p>
          <nav className="footer-socials" aria-label="Social profiles">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith('https:')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <nav className="footer-column" aria-labelledby="footer-quick-links">
          <h2 id="footer-quick-links">Quick Links</h2>
          <div className="footer-links">
            {quickLinks.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="footer-column">
          <h2 id="footer-projects">Projects</h2>
          <div
            className="footer-links"
            role="group"
            aria-labelledby="footer-projects"
          >
            {footerProjects.map(({ index, label }) => (
              <button
                key={projects[index].url}
                type="button"
                aria-haspopup="dialog"
                onClick={() => setSelectedProject(projects[index])}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <nav className="footer-column" aria-labelledby="footer-connect">
          <h2 id="footer-connect">Connect</h2>
          <div className="footer-links">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('https:')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} Akash Adhikari. All rights reserved.
      </p>
      {selectedProject && (
        <ProjectDetailsModal project={selectedProject} onClose={closeDetails} />
      )}
    </footer>
  );
}
