import React from 'react';

export default function Portfolio(){
    return(
        <section className='projectContainer'>
            <a class="projectCard project1" href="https://brandonsnyder.github.io/Ukraine-News-Now/">
                <div className='cardContent'> 
                    <h2>Ukraine-News-Now</h2>
                    <h3>HTML/CSS/JavaScript</h3>
                </div>
            </a>
            <a class="projectCard project2" href="https://brandonsnyder.github.io/passwordGenerator/">
                <div className='cardContent'> 
                    <h2>Password Generator</h2>
                    <h3>HTML/CSS/JavaScript</h3>
                </div>
            </a>
            <a class="projectCard project3" href="https://brandonsnyder.github.io/JSQuiz/">
                <div className='cardContent'> 
                    <h2>JavaScript Quiz</h2>
                    <h3>HTML/CSS/JS</h3>
                </div>
            </a>
            <a class="projectCard project4" href="https://brandonsnyder.github.io/Employed/">
                <div className='cardContent'> 
                    <h2>Employed</h2>
                    <h3>Node/JavaScript/MySQL</h3>
                </div>
            </a>

        </section>
    )
}