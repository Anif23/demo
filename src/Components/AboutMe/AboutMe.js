import React from 'react'
import './AboutMe.css'
import { Link,Element } from 'react-scroll'
import Resume from './../assests/MY (2) (1).pdf'

const AboutMe = () => {
  return (
    <div className='AboutMe'>
      <Element id='About'>
      <div className='AboutMe__Content'>
      
        <h3>I'm</h3>
        <h1>Mohamed Puhari Anif Y</h1>
        <p>Front-end developer using ReactJS,Html,CSS & JavaScript</p>
        <a href='www.google.com' download={Resume}><button className='cv btn'> My CV Download
        </button>
       </a>
       <Link to='Projects' smooth={true} duration={500}>
        <button className='btn wrkbtn' >My Work</button>
       </Link>
       </div>
       </Element>
    </div>
  )
}

export default AboutMe