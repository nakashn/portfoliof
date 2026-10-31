import React from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {Github,Linkedin,Mail,Download,MapPin,ExternalLink,ArrowUpRight,Send,Sparkles,ChevronRight} from 'lucide-react';
import SectionHeading,{rise} from '../components/SectionHeading';
import {projects,skills,education} from '../data/portfolio';
export default function Skills(){return (<section id="skills" className="section"><SectionHeading eyebrow="02 / WHAT I WORK WITH" title="My toolkit">Technologies and tools I use to bring ideas to life.</SectionHeading><motion.div {...rise} className="skills-cloud">{skills.map(s=><span className="skill-pill" key={s}><span className="skill-dot"/>{s}</span>)}</motion.div></section>);}
