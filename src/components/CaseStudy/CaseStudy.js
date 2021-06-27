import React from "react";
import "./CaseStudy.css";
import cs2 from "../../Images/cs2.jpg";
import cs3 from "../../Images/cs3.jpg";
import cs4 from "../../Images/cs4.jpg";
import cs5 from "../../Images/cs5.jpg";

const CaseStudy = () => {
  return (
    <section className="study-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="study-title">
              <h4>PORTFOLIO</h4>
              <h1>CASE STUDY</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-3">
            <div className="single-team">
              <img src={cs2} alt="" />
              <div className="team-content">
                <p>UIX DESIGN</p>
                <h4>MIXER WEBSITE SOLUTION</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="single-team">
              <img src={cs3} alt="" />
              <div className="team-content">
                <p>UIX DESIGN</p>
                <h4>MIXER WEBSITE SOLUTION</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="single-team">
              <img src={cs4} alt="" />
              <div className="team-content">
                <p>UIX DESIGN</p>
                <h4>MIXER WEBSITE SOLUTION</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="single-team">
              <img src={cs4} alt="" />
              <div className="team-content">
                <p>UIX DESIGN</p>
                <h4>MIXER WEBSITE SOLUTION</h4>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="single-team">
              <img src={cs5} />
              <div className="team-content">
                <p>UIX DESIGN</p>
                <h4>MIXER WEBSITE SOLUTION</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
