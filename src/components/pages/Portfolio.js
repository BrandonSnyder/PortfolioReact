import React from 'react';

export default function Portfolio(){
    return(
        <section className='projectContainer'>
            <section id='projectSectionDescription'>
            
                <p>All of these projects have a feature that it was built around. Focusing on only a key feature while building these applications allowed me to keep my code simple and quick to reference. All of these project adn more can be found on my GitHub.</p>
                
            </section>
            
            <a class="projectCard project1" href="https://brandonsnyder.github.io/Ukraine-News-Now/">
                <div className='cardContent'> 
                    <h2>Ukraine-News-Now</h2>
                    <h3>HTML/CSS/JavaScript</h3>
                    <h5>This project was focused on utilizing information from outside databases through API's</h5>
                </div>
            </a>
            <a class="projectCard project2" href="https://brandonsnyder.github.io/passwordGenerator/">
                <div className='cardContent'> 
                    <h2>Password Generator</h2>
                    <h3>HTML/CSS/JavaScript</h3>
                    <h5>This project was focused on utilizing the implementation of JavaScript logic to create a password meeting a user selected criteria.</h5>
                </div>
            </a>
            <a class="projectCard project3" href="https://brandonsnyder.github.io/JSQuiz/">
                <div className='cardContent'> 
                    <h2>JavaScript Quiz</h2>
                    <h3>HTML/CSS/JS</h3>
                    <h5>This project was focused on traversing the Document Object Model, introducing timers/intervals, and local storage.</h5>
                </div>
            </a>
            <a class="projectCard project4" href="https://brandonsnyder.github.io/Employed/">
                <div className='cardContent'> 
                    <h2>Employed</h2>
                    <h3>Node/JavaScript/MySQL</h3>
                    <h5>This project was focused on utilizing information from outside databases through API's</h5>
                </div>
            </a>

        </section>
    )
}