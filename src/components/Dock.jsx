import React from 'react';
import {Sun,Moon} from 'lucide-react';
import {nav} from '../data/portfolio';
export default function Dock({active,dark,onToggleTheme}){return (<nav className="dock" aria-label="Main navigation">{nav.map(n=>{const Icon=n.icon;return <a key={n.id} className={active===n.id?'active':''} href={'#'+n.id} title={n.label} aria-label={n.label}><Icon size={19}/><span className="tooltip">{n.label}</span></a>})}<span className="dock-divider"/><button onClick={()=>onToggleTheme()} title="Toggle theme" aria-label="Toggle dark mode">{dark?<Sun size={19}/>:<Moon size={19}/>}</button></nav>);}
