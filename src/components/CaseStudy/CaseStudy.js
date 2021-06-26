import React from 'react';
import "./CaseStudy.css";
import cs2 from "../../Images/cs2.jpg";
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
            <div className="col-md-4">
              <div className="single-team">
                <img src={cs2} />
                <div className="team-content">
                  <p>UIX DESIGN</p>
                  <h4>MIXER WEBSITE SOLUTION</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-team">
                <img src={cs2} />
                <div className="team-content">
                  <p>UIX DESIGN</p>
                  <h4>MIXER WEBSITE SOLUTION</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-team">
                <img src={cs2} />
                <div className="team-content">
                  <p>UIX DESIGN</p>
                  <h4>MIXER WEBSITE SOLUTION</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className="single-team">
                <img src={cs2} />
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