import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
  faDiceThree,
    faGripVertical,
    faHamburger,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="container">
      <header className="top-header">
        <div className="left-info">
          <p>info@webmail.com</p>
          <p className="phone">+988 987 876 87 87 6</p>
        </div>
        <div className="right-info">Fb tw be yi Li</div>
      </header>
      <div className="Navbar">
        <div className="leftSide">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="#" className="logo">
              <img src={Logo} alt="" />
            </a>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">pages</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>
          <div className = "ham-btn">
            <FontAwesomeIcon
              onClick={() => setShowLinks(!showLinks)}
              icon={faBars}
            />
          </div>
          {/* <button onClick={() => setShowLinks(!showLinks)}>open</button> */}
        </div>
        <div className="rightSide">
          <a href="#" className="theme-button2">
            Get a quote
          </a>
          <a href="#" className="theme-button1 dots">
            <FontAwesomeIcon icon={faGripVertical} className="navIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
