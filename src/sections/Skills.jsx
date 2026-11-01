import {
  Code2,
  Database,
  GitBranch,
  Server,
  Terminal,
  Braces,
  Layers,
  Sparkles as PromptIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading, { rise } from '../components/SectionHeading';
import { skills } from '../data/portfolio';

const skillIcons = {
  Java: Code2,
  'Spring Boot': Server,
  'React.js': Layers,
  JavaScript: Braces,
  Python: Code2,
  HTML: Code2,
  CSS: Braces,
  'REST APIs': Server,
  Hibernate: Database,
  MySQL: Database,
  'Oracle Database': Database,
  'Java Servlet': Server,
  JSP: Code2,
  'Git & GitHub': GitBranch,
  Maven: Layers,
  'Apache Tomcat': Server,
  'IntelliJ IDEA': Terminal,
  'VS Code': Terminal,
  'Prompt Engineering': PromptIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading eyebrow="02 / WHAT I WORK WITH" title="My toolkit">
        Technologies and tools I use to bring ideas to life.
      </SectionHeading>
      <motion.div {...rise} className="skills-cloud">
        {skills.map((s) => {
          const Icon = skillIcons[s];
          return (
            <span className="skill-pill" key={s}>
              <Icon className="skill-icon" size={12} aria-hidden="true" />
              {s}
            </span>
          );
        })}
      </motion.div>
    </section>
  );
}
