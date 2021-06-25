import React from 'react';
import "./TeamCard.css";
import cardImg1 from "../../Images/cardImg1.jpg";
import cardImg2 from "../../Images/cardImg2.jpg";
import cardImg3 from "../../Images/cardImg3.jpg";


const TeamCard = () => {
    return (
      <section className="team-area">
        <div className="row">
          <div className="col-md-3 c1">
            <div className="single-team">
              <img src={cardImg1} />
              <div className="plus">+</div>
              <div className="team-content">
                <h4>Pokoloko k.Kilix</h4>
                <p>Consultant</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 c1">
            <div className="single-team">
              <img src={cardImg2} />
              <div className="plus">+</div>
              <div className="team-content">
                <h4>Pokoloko k.Kilix</h4>
                <p>Consultant</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 c1">
            <div className="single-team">
              <img src={cardImg3} />
              <div className="plus">+</div>
              <div className="team-content">
                <h4>Pokoloko k.Kilix</h4>
                <p>Consultant</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 c1">
            <div className="single-team">
              <img src={cardImg1} />
              <div className="plus">+</div>
              <div className="team-content">
                <h4>Pokoloko k.Kilix</h4>
                <p>Fpunder & ceo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default TeamCard;