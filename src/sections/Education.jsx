import React from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {Github,Linkedin,Mail,Download,MapPin,ExternalLink,ArrowUpRight,Send,Sparkles,ChevronRight} from 'lucide-react';
import SectionHeading,{rise} from '../components/SectionHeading';
import {projects,skills,education} from '../data/portfolio';
export default function Education(){return (<section id="education" className="section"><SectionHeading eyebrow="04 / MY JOURNEY" title="Education"/><div className="timeline">{education.map(e=><motion.div {...rise} className="timeline-row" key={e.school}><div className="school-logo">{e.initial}</div><div className="school-info"><h3>{e.school}</h3><p>{e.degree}</p></div><span className="school-date">{e.date}</span></motion.div>)}</div></section>);}
