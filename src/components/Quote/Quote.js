import React from "react";
import "./Quote.css";
import Man from "../../Images/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Quote = () => {
  return (
    <section className="quote-area">
      <div className="container">
        <div className="row bg-color">
          <div className="arrow">
            <a href = "">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="col-md-12 quote-content">
            <p>GET A QUOTE</p>
            <h1>
              WE ARE HERE FOR <br /> YOUR ESTIMATE PRICE.
            </h1>
          </div>
        </div>
        {/* <div>
          <img src={Man} className="manImg" alt="" />
        </div> */}
      </div>
    </section>

    // <section className="quote-area">
    //   <div className="container">
    //     <div className="quote-inner">
    //       <div className="row">
    //         <div className="col-lg-5 position-relative">
    //           <div className="quote-img">
    //             <img src={Man} />
    //           </div>
    //         </div>
    //         <div className="col-lg-7">
    //           <div className="quote-some-text">
    //             <p>GET A QUOTE</p>
    //             <h1>WE ARE HERE FOR YOUR ESTIMATE PRICE.</h1>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Quote;
