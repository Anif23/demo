import React from 'react'
import './Footer.css'
import {BsFacebook,BsTwitter,BsInstagram,
    BsGithub} from 'react-icons/bs';

       


const Footer = () => {
  return (
    <div className='footer__Container'>
   
      <section className='footer__Icons'>
       <button><a href='https://www.facebook.com/'><BsFacebook /></a></button>
       <button><a href='https://www.github.com/'><BsGithub /></a></button>
       <button><a href='https://www.instagram.com/'><BsInstagram /></a></button>
       <button><a href='https://www.twitter.com/'><BsTwitter /></a></button>
        
      </section>


    <div className='footer__Copy'>
      © 2023 Copyright : 
      <a href='https://MyPortfolio.com/'>
        MyPortfolio.com
      </a>
    </div>
  </div>
  )
}

export default Footer