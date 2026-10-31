import {useState,useEffect} from 'react';
export default function useTheme(){const [dark,setDark]=useState(()=>localStorage.getItem('theme')==='dark');useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('theme',dark?'dark':'light')},[dark]);return [dark,()=>setDark(v=>!v)];}
