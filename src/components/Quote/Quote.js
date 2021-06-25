import React from "react";
import "./Quote.css";
import Man from "../../Images/man.png";

const Quote = () => {
  return (
    <section className="quote-area">
      <div className="container">
        <div className="arrow">
          <a href="">--</a>
        </div>

        <div className="row bg-color">
          <div className="col-md-6 left-img">{/* <img src={Man} /> */}</div>
          <div className="col-md-6 quote-content">
            {/* <div className = "bar"></div> */}
            <p>GET A QUOTE</p>
            <h1>
              WE ARE HERE FOR <br /> YOUR ESTIMATE PRICE.
            </h1>
          </div>
        </div>
        <img src={Man} className="manImg" />
      </div>
    </section>
  );
};

export default Quote;
