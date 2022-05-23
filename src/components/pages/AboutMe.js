import React from 'react';
import profpic from './../../images/profpic.jpg'

export default function AboutMe(){
    return(
        <section id="aboutmeContainer">
            <div className='leftAboutMe'>
                <h2>Brandon Snyder</h2>
                <img className='profPic' src={profpic} alt=""/>
                <h5>Email: Brandon.Snyder019@gmail.com</h5>
                <h5>LinkedIn: linkedin.com/in/brandonlsnyder/</h5>
                <h5>Github: github.com/BrandonSnyder</h5>
            </div>
            <div className='rightAboutMe'>
              <h5>Experienced problem solver looking to combine new technical skills with proven communication and time management skills in order to break into the tech industry. 5+ years experience in a fast paced industry managing multiple projects simultaneously, developing collaborative partnerships with stakeholders, running weekly meetings, reviewing and approving technical documentation, ulitmatley delivering US Navy Vessels back into the fleet on time and under budget.</h5>  
            </div>
        
        </section>
    )
}