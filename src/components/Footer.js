import React from 'react';
import navseaLogo from './../images/NAVSEAlogo.jpg'
import homedepotLogo from './../images/homedepotlogo.jpg'
import hiilogo from './../images/hiilogo.jpg'
import odumsrclogo from './../images/odumsrc.jpg'
import {
    BsGithub,
    BsLinkedin,
    BsFillEnvelopeFill,
    BsFillTelephoneFill,
  } from "react-icons/bs";

export default function Footer(){
    return(
        <footer>
            <div className='footerContainer'>
            <h2>Created by: Brandon Snyder</h2>
            <a href="mailto:Brandon.Snyder019@gmail.com? subject=Good Afternoon">
            {" "}
            <BsFillEnvelopeFill />
          </a>
          <a href="https://www.linkedin.com/in/brandonlsnyder/">
            {" "}
            <BsLinkedin />
          </a>
          <a href="https://github.com/BrandonSnyder">
            {" "}
            <BsGithub />
          </a>
          <a href="tel:7576467117">
            {" "}
            <BsFillTelephoneFill />
          </a>
            </div>
        </footer>
        
    )
}