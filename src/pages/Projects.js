import React from 'react';
import Container from '@mui/material/Container';
import BoxProject from "../Komponenter/projects/BoxProject";
import kandidat from '../Images/kandidat.jpg'; 
import mos from '../Images/mos.jpg'; 
import ljud from '../Images/mathilda_s.JPG'; 
import fulvinet from '../Images/fulvinet.jpg'; 
import shopping from '../Images/shopping.jpg'; 

import {motion} from "framer-motion";



function Projects() {
const textbachelor= `Me and four other students made a website that will facilitate the choice of master's courses. 
My focus was to work on the connection to and from the database:
Skills used: .NET, mongoDB, react, Scrum, Git.`
;

const textmos= `In the course modeling project my group made a angry bird inspired modeling. We calculated the physically 
trajectory of motion and applied Eulers's method, simulated the motion in MatLab then it was implemented in Java Script with the library Two.js. Skills used: MatLab, JavaScript(Two.js).`
;

const textljud= `In the beginning of my third year me and two other students made an webbsite that visulises the frequency spectrum of a choosen song or frequency.
Skills used: JavaScript(p5.js)`
;

const textfulvin= `Me and three others made a mobile -adapted website for wine brewing. Skills used: React.`
;

const textshopping= `I have developed an shopping App in flutter, using firebase as storage. 
`
;


return<motion.div className='about' 
initial={{width: 0}}
animate={{width: "100%"}}
exit={{width: window.innerWidth, transition: {duration: 0.2}}}
>  
<p className="titles"> School projects </p>

<Container style={{marginTop: "0"}}>

<div className="div_body"> 
<BoxProject title="Bachelor project " image={kandidat} text ={textbachelor}/>
<BoxProject title="Modeling project" image={mos} text ={textmos}/>
</div>


<div className="div_body"> 
<BoxProject title= "Physics of sound" image={ljud} text={textljud}/>
<BoxProject title="Fulvin" image={fulvinet} text={textfulvin}/>
</div>


</Container>

<Container style={{marginTop: "0"}}>

<p className="titles"> Own projects </p>

<div className="div_body" > 
<BoxProject title="ShoppingList" image={shopping} text={textshopping}/>
<BoxProject/>
</div>

</Container></motion.div>;





}

export default Projects;