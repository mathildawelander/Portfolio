import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../styles/resume.css';
import EducationStep from "../Komponenter/resume/EducationStep";

import ExperienceStep from "../Komponenter/resume/ExperienceStep";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import {motion} from "framer-motion";


function Master() {
    const comfortable = '#8AAE9C';
    const curious = "#D3DCD9";
    const confident ='#587569'
return <motion.div className='about' 
initial={{width: 0}}
animate={{width: "100%"}}
exit={{width: window.innerWidth, transition: {duration: 0.2}}}
>
    <Container>
     <div className='resume_div'>

<div className='left_div' >
<p className='title_resume'> My master's courses</p>


<p className='resume_employee'> Hösttermin 2022 </p>
<div> <p className='resume_description'> Programvarutestning </p> </div>
<div> <p className='resume_description'> Maskininlärning för sociala medier </p> </div>
<div> <p className='resume_description'> Nätverksprogrammering och säkerhet </p> </div>
<div> <p className='resume_description'> Komplexa nätverk och stora datamängder </p> </div>
<div> <p className='resume_description'> Interaktionsprogrammering </p> </div>


</div >

</div >

</Container>
</motion.div>;}

export default Master;