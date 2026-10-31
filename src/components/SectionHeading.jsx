import React from 'react';
import {motion} from 'framer-motion';
export const rise={initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.12},transition:{duration:.55}};
export default function SectionHeading({eyebrow,title,children}){return <motion.div {...rise} className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children&&<p>{children}</p>}</motion.div>}
