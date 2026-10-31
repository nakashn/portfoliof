import {useEffect,useState} from 'react';
import {nav} from '../data/portfolio';
export default function useActiveSection(){const [active,setActive]=useState('home');useEffect(()=>{const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)})},{rootMargin:'-25% 0px -60% 0px'});nav.forEach(x=>{const el=document.getElementById(x.id);if(el)observer.observe(el)});return()=>observer.disconnect()},[]);return active;}
