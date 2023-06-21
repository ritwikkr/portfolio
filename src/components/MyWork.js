import React from "react";
import Wrapper from "../wrapper/MyWorkWrapper";
import { StyledDiv } from "../wrapper/MyWorkWrapper";
import { TbSend } from "react-icons/tb";
import ProShop from "../assets/projects/ProShop.png";
import Jobify from "../assets/projects/jobify.png";
import Pixture from "../assets/projects/Pixture.png";

function MyWork() {
  return (
    <Wrapper id="portfolio">
      <div className="body">
        <div className="heading">My Work</div>
        <div className="content">
          <StyledDiv className="work" imageUrl={ProShop}>
            <a
              href="https://myproshop.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ border: `2px solid blue` }}
            >
              <div className="text">
                <p className="heading">ProShop - Ecommerce Website</p>
                <p className="content">
                  I created a MERN-based Proshop website featuring user
                  authentication, product viewing, add-to-cart functionality,
                  and seamless payment processing.
                </p>
                <div className="icon">
                  <TbSend />
                </div>
              </div>
            </a>
          </StyledDiv>
          <StyledDiv className="work" imageUrl={Jobify}>
            <a
              href="https://myjobify.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ border: `2px solid blue` }}
            >
              <div className="text">
                <p className="heading">Management App</p>
                <p className="content">
                  Jobify is a MERN-based website with user authentication,
                  allowing users to add and delete jobs. It also provides job
                  stats, enabling insightful analysis.
                </p>
                <div className="icon">
                  <TbSend />
                </div>
              </div>
            </a>
          </StyledDiv>
          <StyledDiv className="work" imageUrl={Pixture}>
            <a
              href="https://pixture.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ border: `2px solid blue` }}
            >
              <div className="text">
                <p className="heading">Video Streaming App</p>
                <p className="content">
                  Video Streaming App with API Integration, Single Movie Detail
                  Page, and Categories for Top Movies, Now Playing, and Upcoming
                  Releases.
                </p>
                <div className="icon">
                  <TbSend />
                </div>
              </div>
            </a>
          </StyledDiv>
        </div>
        {/* <div className="see-more">
          <button>See more</button>
        </div> */}
      </div>
    </Wrapper>
  );
}

export default MyWork;
