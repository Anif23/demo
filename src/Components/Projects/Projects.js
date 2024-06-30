import React from 'react'
import './Projects.css'
import { Element } from 'react-scroll'
import Lottie from 'lottie-react';
import WebAnimation1 from './../../Components/assests/99312-developer-skills.json';
import WebAnimation2 from './../../Components/assests/101132-ecommerce-blue.json';
import WebAnimation3 from './../../Components/assests/36605-shopping-cart.json' ;


const Projects = () => {
  return (
    <div className='Projects'>
        <Element id='Projects' />
     <h1>My Projects</h1>
     <div className='Projects__Content'>
     
     <div className="flip_Card">
  <div className="flip_Card_Inner">
    <div className="flip_Card_Front">
    <Lottie className='flip_Image' animationData={WebAnimation1} loop={true} />
    <h1 style={{fontSize:'20px', fontWeight:'bold'}}>MySite Project</h1>
    </div>
    <div className="flip_Card_Back">
      <h1>Desc:</h1> 
      <p>It's my portfolio website<br></br>
        It bulid by Reactjs and Css overall</p>
        <a href='https://www.github.com/'> <button className='btn pbtn'>GitHub</button></a> 
    </div>
  </div>
</div>

<div className="flip_Card">
  <div className="flip_Card_Inner">
    <div className="flip_Card_Front">
    <Lottie className='flip_Image' animationData={WebAnimation2} loop={true} />
    <h1 style={{fontSize:'20px', fontWeight:'bold'}}>E-Commerce Project</h1>
    </div>
    <div className="flip_Card_Back">
      <h1>Desc:</h1> 
      <p>It's fully responsive project<br></br>
        It bulid by Reactjs,Css and JS</p>
     <a href='https://www.github.com/'> <button className='btn pbtn'>GitHub</button></a> 
    </div>
  </div>
</div>

<div className="flip_Card">
  <div className="flip_Card_Inner">
    <div className="flip_Card_Front">
    <Lottie className='flip_Image' animationData={WebAnimation3} loop={true} />
    <h1 style={{fontSize:'20px', fontWeight:'bold'}}>Shopping Project</h1>
    </div>
    <div className="flip_Card_Back">
      <h1>Desc:</h1> 
      <p>It's demo of shopping site to purchase <br></br>
        It bulid by ReactJs and full animated Css</p>
        <a href='https://www.github.com/'> <button className='btn pbtn'>GitHub</button></a> 
    </div>
  </div>
</div>
     </div>
    </div>
  )
}

export default Projects