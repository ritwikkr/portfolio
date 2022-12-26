import React, { useState } from "react";
import Wrapper from "../wrapper/HeaderWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Header() {
  const [showSlideMenu, setShowSlideMenu] = useState(false);
  function openMenuHandler() {
    setShowSlideMenu(!showSlideMenu);
  }
  return (
    <Wrapper>
      <div className="body">
        <div className="logo">
          <span>R</span>itwik.
        </div>
        <nav className={`${showSlideMenu ? "showMenu" : null} `}>
          <div className="cross" onClick={openMenuHandler}>
            <ImCross />
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="menu" onClick={openMenuHandler}>
          <GiHamburgerMenu />
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
