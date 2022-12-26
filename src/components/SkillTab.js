import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/SkillTabWrapper";

function SkillTab() {
  const [selected, setSelected] = useState("");
  const [active, setActive] = useState(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const skills = (
    <div className="skills">
      <div className="front-end">
        <p className="heading">Front-end</p>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Javascript</p>
        <p>React js</p>
        <p>Next js</p>
      </div>
      <div className="backend">
        <p className="heading">Back-end</p>
        <p>Node js</p>
        <p>Express js</p>
        <p>MongoDB</p>
      </div>
    </div>
  );
  const experience = (
    <div className="experience">
      <div className="exp">
        <p className="heading">2021 - Current</p>
        <p>Software Developer at Trigyn Technologies</p>
      </div>
      <div className="exp">
        <p className="heading">2019 - 2021</p>
        <p>Web Developer at Vedhasa Pvt. Ltd.</p>
      </div>
    </div>
  );

  const education = (
    <div className="education">
      <div className="edu">
        <p className="heading">2021</p>
        <p>BTech in CSE from University Of Engineering & Management, Kolkata</p>
      </div>
      <div className="edu">
        <p className="heading">2017</p>
        <p>12th from GGPS, Bokaro</p>
      </div>
    </div>
  );

  useEffect(() => {
    setSelected(skills);
    setActive(1);
  }, [skills]);

  function clickFunctionality(tab, number) {
    setSelected(tab);
    setActive(number);
  }
  return (
    <Wrapper>
      <div className="body">
        <div className="main-title">
          <p
            className={active === 1 ? `active` : null}
            onClick={() => clickFunctionality(skills, 1)}
          >
            Skills
          </p>
          <p
            className={active === 2 ? `active` : null}
            onClick={() => clickFunctionality(experience, 2)}
          >
            Experience
          </p>
          <p
            className={active === 3 ? `active` : null}
            onClick={() => clickFunctionality(education, 3)}
          >
            Education
          </p>
        </div>
        <div className="content">{selected}</div>
      </div>
    </Wrapper>
  );
}

export default SkillTab;
