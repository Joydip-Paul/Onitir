import React from "react";
import './Services.css';
import serviceIcon1 from "../../Images/serviceIcon1.png";
import serviceIcon2 from "../../Images/serviceIcon2.png";
import serviceIcon3 from "../../Images/serviceIcon3.png";

const Services = () => {
  return (
    <section className="Services-area text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 services-title">
            <p>Services</p>
            <h1>WHAT WE DO</h1>
          </div>
        </div>

        <div className="row card-area">
          <div className="col-md-4 card1">
            <img src={serviceIcon1} />
            <h2>DATE RESEARCH ANALYSIS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button>Read More</button>
          </div>

          <div className="col-md-4 card2 mt-3">
            <img src={serviceIcon2} />
            <h2>DATE RESEARCH ANALYSIS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button>Read More</button>
          </div>

          <div className="col-md-4 card3 mt-5">
            <img src={serviceIcon3} />
            <h2>DATE RESEARCH ANALYSIS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
