import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle,faDiceThree,faGripVertical } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [state, setState] = useState(0);
  // let state = {
  //   nav: false
  // }
  function componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   function  componentWillUnmount() {
     window.removeEventListener("scroll");
   }
   const handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
          }
          console.log("working");
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

  return (
    <div className="container">
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
        {/* <div className={`left-menu ${this.nav && "Nav__black"}`}
        > */}
        <div className="left-menu">
          <a href="#" className="logo">
            <img src={Logo} />
          </a>
          <ul>
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
            <FontAwesomeIcon icon={faGripVertical} className = "navIcon" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
