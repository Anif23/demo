import React from 'react'
import './contact.css'
import { Element } from 'react-scroll';

class contact extends React.Component{
   constructor(){
    super();
    this.state = {subject:'', body:''};
  }
   validateForm = event =>{
     var subject =document.getElementById('subject').value;
     var body =document.getElementById('body').value;
     window.location.href = 'mailto:mohamedanif32@gmail.com ? subject='+subject+ '&body='+body;
     event.preventDefault();
     return false;
   }

  render(){
    return(
      <div className='heading'>
        <Element id='Contact'/>
        <h1>Contact me</h1> 
        <div className='contact'>
        <div className='container__Contact' id='mailme'>
            <form onSubmit={this.validateForm} target='_blank' method='GET'>
              <div className='contact__Subject'>
                <label className='skills' for='subject'>
                  <strong>Name</strong>
                  </label>
                    <input type='text' id='subject' className='name' required />
              </div>

              <div className='contant__Body'>
                <label className='skills' for='body'>
                  <strong>Message</strong>
                  </label>
                 <textarea id='body' className='message' row='5' required />
                </div>
              <input type='submit' value='send' id='navigation' className='btn btn-primary'/>
            </form>
            </div>
            <div className='contact__Right'>
              <h1>Don't hesited to Contact me</h1>
              <p>It's time to speak </p>
              <p> Thanking You..!</p>
            </div>
            
          </div>
        </div>
    
    )

  }
}

export default contact