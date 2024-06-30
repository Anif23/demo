import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'> 
        <div  className='Header__Left'>
          <h1>WELCOME TO <span>MY PORTFOLIO</span></h1>
        </div>
      <div className='Header__Right'>
        <Link to='About' smooth={true} duration={500}><h4>About me</h4></Link>
        <Link to='Skills' smooth={true} duration={500}><h4>Skills</h4></Link>
        <Link to='Projects' smooth={true} duration={500}><h4>Projects</h4></Link>
        <Link to='Contact' smooth={true} duration={500}><h4>Contact</h4></Link> 
        </div>       
    </div>
  )
}

export default Header