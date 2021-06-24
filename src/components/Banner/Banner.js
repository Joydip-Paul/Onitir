import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="CustomContainer">
        <div className="banner-content">
          <h1>
            WE Create <br /> Perfect Brand <br /> Goods Value
          </h1>
          <p>Bring your ideas to life with us</p>
          <button className="theme-button2 firstBtn">Get Started now</button>
          <button className="theme-button1 secondBtn">Learn More</button>
        </div>
      </div>
    );
};

export default Banner;