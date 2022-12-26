import React from "react";
import Wrapper from "../wrapper/AboutMeWrapper";
import SkillTab from "./SkillTab";
import myPic from "../assets/myPic2.png";

function AboutMe() {
  return (
    <Wrapper id="about">
      <div className="body">
        <div className="image">
          <img src={myPic} alt="myPic2" />
        </div>
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            Innovative, task-driven professional in web development across
            diverse industries. Equipped with a record of success in
            consistently identifying and providing the technological needs of
            companies through ingenious innovation. Proficient in developing
            databases, creating user interfaces, writing and testing codes,
            troubleshooting simple/complex issues and implementing new feature
            based on user feedback
          </p>
          <div className="skill-tab">
            <SkillTab />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AboutMe;
