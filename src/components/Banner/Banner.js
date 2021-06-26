import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="banner-content">
        <h1>
          WE Create  Perfect Brand <br/>  Goods Value
        </h1>
        <p>Bring your ideas to life with us</p>
        <div className = "banner-btn">
          <button className="theme-button1 firstBtn">Get Started now</button>
          <button className="theme-button2 secondBtn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
