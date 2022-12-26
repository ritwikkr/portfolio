import React from "react";
import Wrapper from "../wrapper/HomeWrapper";

function Home() {
  return (
    <Wrapper id="home">
      <div className="body">
        <div className="info">
          <div className="info-content">
            <p className="designation">Web Developer</p>
            <p className="name">
              Hi, I'm <span>Ritwik</span>
            </p>
            <p className="address">Rishu From India</p>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </Wrapper>
  );
}

export default Home;
