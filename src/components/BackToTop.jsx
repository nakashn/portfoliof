import React, {useEffect, useState} from 'react';
import {ArrowUp} from 'lucide-react';
export default function BackToTop() {
 const [visible, setVisible] = useState(false);
 useEffect(() => {
  function update() {setVisible(window.scrollY > 500);}
  update();
  window.addEventListener('scroll', update, {passive:true});
  return () => window.removeEventListener('scroll', update);
 }, []);
 if (!visible) return null;
 return <button type="button" className="back-to-top" aria-label="Back to top" onClick={() => {
  window.scrollTo({top:0, behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  const home = document.getElementById('home');
  if (home) {
   home.setAttribute('tabindex', '-1');
   home.focus({preventScroll:true});
   home.addEventListener('blur', () => home.removeAttribute('tabindex'), {once:true});
  }
 }}><ArrowUp size={16}/></button>;
}
