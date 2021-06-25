import React from "react";
import "./Navbar.css";
import Logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <div className="CustomContainer">
      {/* Top Header */}
      <header className="top-header">
        <div className="left-info">
          <p>info@webmail.com</p>
          <p className="phone">+988 987 876 87 87 6</p>
        </div>
        <div className="right-info">Fb tw be yi Li</div>
      </header>

      {/* Main Header */}
      <header className="mainHeader">
        {/* <div className = "logo">
                              <a href="#">ONITIR</a>
                       </div> */}
        <div className="left-menu">
          <a href="#" className="logo">
            {/* ONITIR */}
            <img src={Logo} />
          </a>
          <ul>
            {/* <li><a href="#" className = "logo">ONITIR</a></li> */}
            <li>
              {" "}
              <a href="#">Home</a>
            </li>
            <li>
              {" "}
              <a href="#">About</a>
            </li>
            <li>
              {" "}
              <a href="#">Services</a>
            </li>
            <li>
              {" "}
              <a href="#">pages</a>
            </li>
            <li>
              {" "}
              <a href="#">News</a>
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="right-menu">
          <a href="#" className="theme-button2">
            Get a quote
          </a>
          <a href="#" className="theme-button1 dots">
            ...
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
