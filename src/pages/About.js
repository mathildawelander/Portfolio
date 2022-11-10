import React from 'react';
import Container from '@mui/material/Container';
import '../styles/about.css';
import me from '../Images/info.jpg'; 


import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

function About() {


    const boxVariant = {
        visible: { opacity: 1, scale: 1, x:0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0, x:200 }
      };


      const Box = ({ num }) => {

        const control = useAnimation();
        const [ref, inView] = useInView();
      
        useEffect(() => {
          if (inView) {
            control.start("visible");
          } else {
            control.start("hidden");
          }
        }, [control, inView]);

        return (
            <motion.div
              className="box"
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
            >
              <p>{num} </p>
            </motion.div>
          );
        };


return <motion.div className='about' 
initial={{width: 0}}
animate={{width: "100%"}}
exit={{width: window.innerWidth, transition: {duration: 0.2}}}
>
<Container>

<div className='body_a'>

<h1 className='h1_a'> Mathilda Welander</h1>
<img className='image_a' src={me} />
<div> 

<Box num={"Welcome to my portfolio."}/>
<Box num={ "I am currently studying my master in Media Technology and Engineering at Linköping University"}/>


</div>


</div>
</Container>
</motion.div>;

}

export default About;