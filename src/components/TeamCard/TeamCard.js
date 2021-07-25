import React from "react";
import "./TeamCard.css";
import cardImg1 from "../../Images/cardImg1.jpg";
import cardImg2 from "../../Images/cardImg2.jpg";
import cardImg3 from "../../Images/cardImg3.jpg";

const TeamCard = () => {
  return (
    <section className="team-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 c1">
            <div className="single-team">
              <img src={cardImg1} alt="" />
              <div className="plus">+</div>
              <div className="team-content">
                <h4>Pokoloko k.Kilix</h4>
                <p>Consultant</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 c1">
            <div className="single-team">
              <img src={cardImg2} alt="" className="w-100" />
              <div className="plus">+</div>
              <div className="team-content">
                <h4>Pokoloko k.Kilix</h4>
                <p>Consultant</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 c1">
            <div className="single-team">
              <img src={cardImg3} alt="" className="w-100" />
              <div className="plus">+</div>
              <div className="team-content">
                <h4>Pokoloko k.Kilix</h4>
                <p>Consultant</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 c1">
            <div className="single-team">
              <img src={cardImg1} alt="" className="w-100" />
              <div className="plus">+</div>
              <div className="team-content">
                <h4>Pokoloko k.Kilix</h4>
                <p>Fpunder & ceo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
