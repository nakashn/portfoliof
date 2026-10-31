import React, {useRef, useState} from 'react';
import {Sun, Moon, Menu, X} from 'lucide-react';
import {nav} from '../data/portfolio';

export default function Dock({active, dark, onToggleTheme}) {
 const [menuOpen, setMenuOpen] = useState(false);
 const menuButton = useRef(null);
 function closeOnEscape(event) {
  if (event.key === 'Escape' && menuOpen) {
   setMenuOpen(false);
   menuButton.current?.focus();
  }
 }
 return (
  <nav className="dock" aria-label="Main navigation" onKeyDown={closeOnEscape}>
   <div className="dock-inner">
    <a className="dock-logo" href="#home" onClick={() => setMenuOpen(false)} aria-label="Akash, home">Akash.</a>
    <div id="portfolio-navigation" className={`dock-links${menuOpen ? ' is-open' : ''}`}>
     {nav.map(item => (
      <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'active' : ''}
       aria-current={active === item.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>
       {item.label}
      </a>
     ))}
    </div>
    <div className="dock-actions">
     <button type="button" onClick={onToggleTheme} title="Toggle theme" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {dark ? <Sun size={19}/> : <Moon size={19}/>}
     </button>
     <button type="button" className="dock-menu-toggle" ref={menuButton} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={menuOpen} aria-controls="portfolio-navigation" onClick={() => setMenuOpen(open => !open)}>
      {menuOpen ? <X size={21}/> : <Menu size={21}/>}
     </button>
    </div>
   </div>
  </nav>
 );
}
