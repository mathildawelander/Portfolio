import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "../../styles/resume.css";
import SchoolIcon from '@mui/icons-material/School';

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
function EducationStep(){

  
  const boxVariant = {
    visible: { opacity: 1, scale: 1, x:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x:200 }
  };


  const Box = ({ label, employee, time, description }) => {

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
          className="div_step"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
              <p className='resume_label'> {label} </p>
       
       <p className='resume_employee'>{employee}</p>
       <p className='resume_time'>{time}</p>
         <p className='resume_description'>{description}</p>
     
    

        </motion.div>
      );
    };
    const steps = [
        {
          label: 'M.Sc. in Media Technology and Engineering',
          employee: "Linköping University",
          time: "2019-present",
          description: ``,
        },
        {
          label: 'Natural science',
          employee: "Katedralskolan, Växjö",
          time: "2015-2017",
          description:
            '',
        },
       
      ];
return( <>
  <div className="div_step_h1">
           <h1 className='title_resume'> Education</h1>
           </div>
     {steps.map((step, index) => (
    <Box label={steps.label} employee={steps.employee} time={steps.time} description={steps.description}/>

    ))}

  
  </>)
}

export default EducationStep;