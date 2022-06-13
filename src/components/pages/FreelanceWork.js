import React from 'react';

export default function FreelanceWork(){
    return(
        <section className='projectContainer'>
            <section id='projectSectionDescription'>
                <h1>HELP ME HELP YOU!</h1> 
                <h2>Below is some of the work I have done for clients.</h2>
                <h3>If you are interested in getting a website to increase the number of individuals viewing your site or interested in a web application that will help your business be more efficient,<a href="contact" >CONTACT ME</a>.</h3>      
            </section>
            <a class="projectCard project5" href="https://cachemarket.herokuapp.com/">
                <div className='cardContent'> 
                    <h2>CacheMarket</h2>
                    <h3>MERN Stack</h3>
                    <h5>This project was focused on integrating a react frontend with MongoDB using GraphQL.</h5>
                </div>
            </a>
            <a class="projectCard project1" href="https://brandonsnyder.github.io/Ukraine-News-Now/">
                <div className='cardContent'> 
                    <h2>Ukraine-News-Now</h2>
                    <h3>HTML/CSS/JavaScript</h3>
                    <h5>This project was focused on utilizing information from outside databases through API's</h5>
                </div>
            </a>
        </section>
    )
}