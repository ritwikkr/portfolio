import React from "react";
import Wrapper from "../wrapper/MyWorkWrapper";
import { TbSend } from "react-icons/tb";

function MyWork() {
  return (
    <Wrapper id="portfolio">
      <div className="body">
        <div className="heading">My Work</div>
        <div className="content">
          <div className="work">
            <div className="text">
              <p className="heading">Social Media App</p>
              <p className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="icon">
                <TbSend />
              </div>
            </div>
          </div>
          <div className="work">
            <div className="text">
              <p className="heading">Music App</p>
              <p className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="icon">
                <TbSend />
              </div>
            </div>
          </div>
          <div className="work">
            <div className="text">
              <p className="heading">Online Shopping App</p>
              <p className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="icon">
                <TbSend />
              </div>
            </div>
          </div>
        </div>
        <div className="see-more">
          <button>See more</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default MyWork;
