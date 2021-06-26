import React from 'react';
import './Skill.css'
import skillGirl from "../../Images/skillGirl.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee,faGlobe } from "@fortawesome/free-solid-svg-icons";

const Skill = () => {
    return (
      <section className="skill-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center hireBtn">
              <button className="theme-button1">Hire us now</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="skill-content">
                <p>SKILLSET</p>
                <h1>CHECK SKILLSET & MANUPULATION</h1>
              </div>
            </div>
            <div className="col-md-6">
              <img src={skillGirl} />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Skill;