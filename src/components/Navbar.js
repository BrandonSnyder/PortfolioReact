import React from 'react';
import NavbarIcons from './NavbarIcons';

export default function Navbar(){
    return(
        <header>
        <h1>Brandon Snyder</h1>
        <nav>
            <a href="#about"> About Me</a>
            <a href="#work">Work</a>
            <a href="#contact-me">Contact Me</a>
            {/* <a href="">Resume</a> */}
        </nav>
        <div className='icon'> 
        </div>
    </header>
    )
}