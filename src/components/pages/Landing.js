import React from "react";
import profpic from "./../../images/profpic.jpg";
import {
  BsGithub,
  BsLinkedin,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

export default function Landing() {
  return (
    <section id="aboutmeContainer">
      <div className="leftAboutMe">
        <img className="profPic" src={profpic} alt="" />
        <h5>Brandon Snyder</h5>
        <div className="profileLinks">
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
      </div>
      <div className="rightAboutMe">
        <h2>Biography</h2>
        <p>
          Hi, I'm Brandon Snyder, currently working as a freelance web
          developer. I have a Bachelors degree in Mechanical Engineering and am
          a recent Georgia Institute of Technology Full Stack Bootcamp Graduate.
        </p>
        <p>
          My passions lie in helping others, problem solving, and working in
          tight niche groups of like minded people.
        </p>
        <div>
          <h2 className="skillsHeader">Skills</h2>
          <div className="skillsContainer">
            <div className="skillsLeft">
              <ul>
                <li>React.js</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="skillsRight">
              <ul>
                <li>MySQL </li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Rest APIs</li>
                <li>Scrum/Agile</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="resumeContainer">
          <a
            href="https://drive.google.com/file/d/1QAFS0f-T2aaitTer9OvhbnafRQpQAeCN/view?usp=sharing"
            download
          >
            Click to Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
