import Box from '@mui/material/Box';
import "../../styles/projects.css"
import kandidat from '../../Images/kandidat.jpg'; // Tell webpack this JS file uses this image


import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";


function BoxProject(props){


    const boxVariant = {
        visible: { opacity: 1, scale: 1, x:0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0, x:200 }
      };
    
    
      const Box = ({ title, image, text}) => {
    
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
              className="div_box"
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
            >
        
<h1 className='title'> {title}</h1>
<img className='image_box' src={image} />
<p className='text_box'> {text}</p>
{props.title==="Bachelor project "? 
<a href="https://youtu.be/vDYjw798b_k" target="_blank">Video</a>
: <> </>}
    
            </motion.div>
          );
        };    

    const sd= "hej"; 
return( 
<Box title={props.title} image={props.image} text={props.text}/>

)
}

export default BoxProject;