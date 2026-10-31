import React from 'react';
import {useState} from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Dock from './components/Dock';
import useTheme from './hooks/useTheme';
import useActiveSection from './hooks/useActiveSection';
import './styles.css';

export default function App(){
 const [dark,toggleTheme]=useTheme();
 const active=useActiveSection();
 const [copied,setCopied]=useState(false);
 async function copyEmail(){try{await navigator.clipboard.writeText('akashadhikari061@gmail.com');setCopied(true);setTimeout(()=>setCopied(false),2200)}catch{window.location.href='mailto:akashadhikari061@gmail.com'}}
 return <><div className="page-glow"/><Dock active={active} dark={dark} onToggleTheme={toggleTheme}/><main className="container">
  <Home/><About/><Skills/><Projects/><Education/><Contact copied={copied} copyEmail={copyEmail}/><Footer/>
 </main></>;
}
