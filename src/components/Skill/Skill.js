import React, { useState } from "react";
import "./Skill.css";
import skillGirl from "../../Images/skillGirl.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee,faGlobe } from "@fortawesome/free-solid-svg-icons";

const Skill = ({done1,done2,done3}) => {
  const [style, setStyle] = useState({});
  // const [style2, setStyle2] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done1}%`,
      width: `${done2}%`,
      width: `${done3}%`,
    };

    setStyle(newStyle);
  }, 300);
  return (
    <section className="skill-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center hireBtn">
            <button className="theme-button1 hire-btn">Hire us now</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="skill-content">
              <p>SKILLSET</p>
              <h1>CHECK SKILLSET & MANUPULATION</h1>
              <h4>CONSULTING & MARKETING</h4>
              <div className="progress">
                <div className="progress-done" style={style}>
                  {done1}%
                </div>
              </div>
              <h4>IT SOLUTION & TRAVELSHOOTING</h4>
              <div className="progress">
                <div className="progress-done" style={style}>
                  {done2}%
                </div>
              </div>
              <h4>UIX SOLUTION</h4>
              <div className="progress">
                <div className="progress-done" style={style}>
                  {done3}%
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={skillGirl} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
