import React from "react";
import "./Services.css";
import serviceIcon1 from "../../Images/serviceIcon1.png";
import serviceIcon2 from "../../Images/serviceIcon2.png";
import serviceIcon3 from "../../Images/serviceIcon3.png";

const Services = () => {
  return (
    <section className="Services-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-md-12 services-title text-center">
            <p>Services</p>
            <h1>WHAT WE DO</h1>
          </div>
        </div>

        {/* <div className="row card-area">
          <div className="col-md-3 card1">
            <img src={serviceIcon1} />
            <h2>Date research analysis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button>Read More</button>
          </div>

          <div className="col-md-3 card2 mt-3">
            <img src={serviceIcon2} />
            <h2>Date research analysis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button>Read More</button>
          </div>

          <div className="col-md-3 card3 mt-5">
            <img src={serviceIcon3} />
            <h2>Date research analysis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button>Read More</button>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-4 pb-30">
            <div className="card-item card-item-one">
              <img src={serviceIcon1} />
              <h2>Date research analysis</h2>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore.
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="col-lg-4 pb-30">
            <div className="card-item card-item-two">
              <img src={serviceIcon2} />
              <h2>Date research analysis</h2>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore.
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="col-lg-4 pb-30">
            <div className="card-item card-item-three">
              <img src={serviceIcon3} />
              <h2>Date research analysis</h2>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
