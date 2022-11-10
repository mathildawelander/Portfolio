import React from 'react';
import {motion} from "framer-motion";
import '../styles/contact.css';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import MdPhone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contacts() {
return <motion.div className='about' 
initial={{width: 0}}
animate={{width: "100%"}}
exit={{width: window.innerWidth, transition: {duration: 0.2}}}
>
<div className="div_body_c"> 
    <div className="div_box_c"> 


<div className="box_margin">
    <div className="div_info_c">
    <EmailIcon/>
    <p className="p_c"> mathilda.v@hotmail.com</p>
    </div>

    <div className="div_info_c">
        
    <MdPhone/> 
    <p className="p_c"> 070 541 20 99</p>
    </div>


    <div className="div_info_c">
        
    <LinkedInIcon/> 
<a className="p_c" href="https://www.linkedin.com/in/mathilda-welander-3a8663142/" target="_blank">LinkedIn</a>
    </div>

    </div>
    </div>
    </div>


</motion.div>
}

export default Contacts;