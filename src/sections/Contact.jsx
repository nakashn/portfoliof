import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { rise } from '../components/SectionHeading';
export default function Contact({ copied, copyEmail }) {
  return (
    <section id="contact" className="section contact-section">
      <motion.div {...rise}>
        <span className="eyebrow">05 / LET'S CONNECT</span>
        <h2>
          Let's build something <span>great together.</span>
        </h2>
        <p>
          I'm open to internships, collaboration, and opportunities to learn
          from great teams. Have something in mind? I'd love to hear about it.
        </p>
        <div className="contact-actions">
          <a className="primary-btn" href="mailto:akashadhikari061@gmail.com">
            Say hello <Send size={16} />
          </a>
          <button className="secondary-btn" onClick={copyEmail}>
            {copied ? 'Email copied!' : 'Copy email'} <Mail size={16} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
