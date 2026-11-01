import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  ArrowUpRight,
  SquareTerminal,
} from 'lucide-react';
import { rise } from '../components/SectionHeading';
export default function Home() {
  return (
    <header className="hero" id="home">
      <motion.div {...rise} className="hero-copy">
        <div
          className="availability"
          style={{ width: 264, maxWidth: '100%', justifyContent: 'center' }}
          aria-label="Developer toolkit: Java and Spring Boot"
        >
          <SquareTerminal
            size={13}
            aria-hidden="true"
            style={{ color: 'var(--accent)', flexShrink: 0 }}
          />
          {/* prettier-ignore */}
          <span><span style={{color:"var(--accent)"}}>{'{ '}</span>Java <span style={{color:"var(--accent)"}}>+</span> Spring Boot<span style={{color:"var(--accent)"}}>{' }'}</span></span>
        </div>
        <h1>
          Hi, I'm Akash <span className="wave">👋</span>
        </h1>
        <h3>Computing Student &amp; Backend Developer</h3>
        <p>
          I build thoughtful web applications, reliable backends, and practical
          AI-powered experiences. Currently learning, creating, and growing one
          project at a time.
        </p>
        <div className="location">
          <MapPin size={15} /> Pokhara, Nepal
        </div>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="secondary-btn" href="/resume.pdf" download>
            Download CV <Download size={16} />
          </a>
        </div>
        <div className="social-row">
          <a
            href="https://github.com/nakashn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/meakashadhikari"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a href="mailto:akashadhikari061@gmail.com" aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7 }}
        className="hero-art"
      >
        <div className="art-grid" />
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-main portrait">
          <img src="/images/profile.jpg" alt="Akash Adhikari portrait" />
        </div>
        <div className="floating-tag tag-top">
          <span>●</span> Spring Boot
        </div>
        <div className="floating-tag tag-bottom">{'</>'} React.js</div>
      </motion.div>
    </header>
  );
}
