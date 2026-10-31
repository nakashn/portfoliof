import React from 'react';
import {Code2,Database,GitBranch,Server,Terminal,Braces,Layers,Sparkles as PromptIcon} from 'lucide-react';
const skillIcons={'Java':Code2,'Spring Boot':Server,'React.js':Layers,'JavaScript':Braces,'Python':Code2,'HTML':Code2,'CSS':Braces,'REST APIs':Server,'Hibernate':Database,'MySQL':Database,'Oracle Database':Database,'Java Servlet':Server,'JSP':Code2,'Git & GitHub':GitBranch,'Maven':Layers,'Apache Tomcat':Server,'IntelliJ IDEA':Terminal,'VS Code':Terminal,'Prompt Engineering':PromptIcon};
import {motion,AnimatePresence} from 'framer-motion';
import {Github,Linkedin,Mail,Download,MapPin,ExternalLink,ArrowUpRight,Send,Sparkles,ChevronRight} from 'lucide-react';
import SectionHeading,{rise} from '../components/SectionHeading';
import {projects,skills,education} from '../data/portfolio';
export default function Skills(){return (<section id="skills" className="section"><SectionHeading eyebrow="02 / WHAT I WORK WITH" title="My toolkit">Technologies and tools I use to bring ideas to life.</SectionHeading><motion.div {...rise} className="skills-cloud">{skills.map(s=>{const Icon=skillIcons[s];return <span className="skill-pill" key={s}><Icon className="skill-icon" size={12} aria-hidden="true"/>{s}</span>})}</motion.div></section>);}
