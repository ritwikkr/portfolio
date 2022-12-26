import React from "react";
import Wrapper from "../wrapper/ServicesWrapper";
import { BiCodeAlt } from "react-icons/bi";
import { MdBackupTable } from "react-icons/md";
import { BsStack } from "react-icons/bs";

function Services() {
  return (
    <Wrapper id="services">
      <div className="body">
        <div className="heading">My Services</div>
        <div className="content">
          <a
            href="https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html"
            target={"_blank"}
            rel="noreferrer"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <div className="service">
              <div className="service-icon">
                <BiCodeAlt />
              </div>
              <p className="heading">Front-end Web Development</p>
              <p className="content">
                Enjoying developing the front-end of websites and web
                applications using the frameworks set by todays standards.
              </p>
              <p>Learn More</p>
            </div>
          </a>
          <a
            href="https://www.coursera.org/articles/back-end-developer"
            target={"_blank"}
            rel="noreferrer"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <div className="service">
              <div className="service-icon">
                <MdBackupTable />
              </div>
              <p className="heading">Back-end Website Development</p>
              <p className="content">
                I will be responsible for writing backend codes of your website
                and how is it going to communicate when the user will trigger
                any particular action. Besides, I will also take care of the
                whole wireframe of the website, its architecture, coding,
                scripting, and database accessibility
              </p>
              <p>Learn More</p>
            </div>
          </a>
          <a
            href="https://www.w3schools.com/whatis/whatis_fullstack.asp#:~:text=A%20full%20stack%20web%20developer,ASP%2C%20Python%2C%20or%20Node)"
            target={"_blank"}
            rel="noreferrer"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <div className="service">
              <div className="service-icon">
                <BsStack />
              </div>
              <p className="heading">Full-Stack Web Development</p>
              <p className="content">
                Sit back and relax. Your websites is under progress and very
                soon will be online.
              </p>
              <p>Learn More</p>
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
