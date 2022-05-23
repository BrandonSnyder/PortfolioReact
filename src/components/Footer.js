import React from 'react';
import navseaLogo from './../images/NAVSEAlogo.jpg'
import homedepotLogo from './../images/homedepotlogo.jpg'
import hiilogo from './../images/hiilogo.jpg'
import odumsrclogo from './../images/odumsrc.jpg'


export default function Footer(){
    return(
        <footer>
            
            <div className='employerContainer'>
                <h2>Previously employed by:</h2>
                <img className='elogo hdLogo' src={homedepotLogo} alt="Home Depot logo"/>
                <img className='elogo navseaLogo' src={navseaLogo} alt="NAVSEA logo"/>
                <img className='elogo hiiLogo' src={hiilogo} alt="Huntington Ingalls logo"/>
                <img className='elogo hiiLogo' src={odumsrclogo} alt="ODU Math and Science Resource Center logo"/>

            </div>
        </footer>
        
    )
}