import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "../../styles/resume.css"

function EducationStep(){

  const steps = [
    {
      label: 'Programming tutor',
      employee: "LiTHehack, Linköping University",
      time: "2021-2022",
      description: `I helped student with programming, mostly about school labs but also own projects. 
      I took cake of the periods where the labs were mainly in C++ and Java.`,
    },
    {
      label: 'Laboratory Assistant in Java',
      employee: "Linköping University",
      time: "2021-2022",
      description:
        "As a laboratory assistant, I help students in the course object-oriented programming with their labs."
    },
    {
      label: 'President of 3Cant',
      time: "2020-2021",
      description:
        "I was president of Norrköping biggest student association. I made sure to fairly divide the work, lead meetings and be the contact person for other associations."},
        {
          label: 'Secretary of Mette',
          time: "2021-2022",
          description:
          `Mette is a girls' association for the media technology program 
            that works to strengthen the community between girls on the program and also get more girls to
apply for a technical education.
`},
       
  ];




return( <Box sx={{ maxWidth: 400 }}>
<div className="div_step_h1_two">
       <h1 className='title_resume'> Experience</h1>
       </div>
 {steps.map((step, index) => (
   <div className="div_step" key={step.label}>
    
      <p className='resume_label'> {step.label} </p>
   
     <p className='resume_employee'>{step.employee}</p>
     <p className='resume_time'>{step.time}</p>
       <p className='resume_description'>{step.description}</p>
   
  
   </div>
 ))}


</Box>)
}

export default EducationStep;