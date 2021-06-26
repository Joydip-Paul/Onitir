import React from "react";
import "./ChooseUs.css";
import Man from "../../Images/man.png";

const ChooseUs = () => {
  return (
    <section className="ChooseUs-area">
      <div className="container">
        <div className="row chooseUsTop">
          <div className="col-md-6 title-left">
            <p>Why us</p>
            <h2>WHY CHOOSE US</h2>
          </div>
          <div className="col-md-6 chooseUsBtn">
            <button className="theme-button1">Learn More</button>
          </div>
        </div>
        <div className="row chooseContent">
          <div className="col-md-4">
            <div className="chooseLeft1">
              <h2> UNLIMITED LAYOUT</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="chooseLeft1">
              <h2> EASY TO CUSTOMIZE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="chooseLeft1">
              <h2> 24/7 ONLINE SUPPORT</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={Man} className="chooseImg" />
          </div>
          <div className="col-md-4">
            <div className="chooseRight1">
              <h2> RETINA READY WORK</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="chooseRight1">
              <h2> GLOBAL LANGUAGE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="chooseRight1">
              <h2> HIGH QUALITY SECURITY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
