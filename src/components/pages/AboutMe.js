import React from "react";
import profpic from "./../../images/profpic.jpg";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

export default function AboutMe() {
  return (
    <section id="aboutmeContainer">
      <div className="leftAboutMe">
        <h2 id="aboutMeLeftDivTitle">Brandon Snyder</h2>
        <img className="profPic" src={profpic} alt="" />
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
        </div>
      </div>
      <div className="rightAboutMe">
        <h5>
          Experienced problem solver looking to combine new technical skills
          with proven communication and time management skills in order to break
          into the tech industry. 5+ years experience in a fast paced industry
          managing multiple projects simultaneously, developing collaborative
          partnerships with stakeholders, running weekly meetings, reviewing and
          approving technical documentation, ulitmatley delivering US Navy
          Vessels back into the fleet on time and under budget.
        </h5>
        <div className="resumeContainer">
          
        </div>
      </div>
    </section>
  );
}
