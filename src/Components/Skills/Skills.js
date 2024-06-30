import React from 'react'
import './skill.css';
import { Element } from 'react-scroll';
import Lottie from 'lottie-react';
import WebAnimation from './../../Components/assests/83087-developer-front-end.json'
import { LinearProgress } from '@mui/material';

const Skills = () => {
  return (
    <div >
      <Element className='Skills__Container' id='Skills'>
      <h1>SkillSet</h1> 
    <div className='Skills'>
     <div className='Skills__ContentLeft'>
      <Lottie animationData={WebAnimation} loop={true} />
     </div>

     <div className='Skills__ContentRight'>
      <div className='Skills__ContentSlider1'>
      <h2>Front-End</h2>
      <div className='Skills_sliderF1'>
      <h5>React</h5>
        <LinearProgress variant='determinate' value={80} />
      </div>
      <div className='Skills_sliderF2'>
      <h5>Html</h5>
        <LinearProgress variant='determinate' value={95} />
      </div>
      <div className='Skills_sliderF3'>
      <h5>CSS</h5>
        <LinearProgress variant='determinate' value={90} />
      </div>
      <div className='Skills_sliderF4'>
      <h5>JavaScript</h5>
        <LinearProgress variant='determinate' value={70} />
      </div>
     </div>
     

     <div className='Skills__ContentSlider2'>
      <h2>Back-End</h2>
      <div className='Skills_sliderB1'>
      <h5>Java</h5>
        <LinearProgress variant='determinate' value={75} />
      </div>
      <div className='Skills_sliderB2'>
      <h5>C & C++</h5>
        <LinearProgress variant='determinate' value={50} />
      </div>
     </div>
     </div>
    </div>
    </Element>
  </div>
  )
}

export default Skills