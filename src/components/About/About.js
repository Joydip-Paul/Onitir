import React from 'react';
import './About.css';
import pic1 from '../../Images/01.jpg'
import pic2 from '../../Images/02.jpg'
import pic3 from '../../Images/03.jpg'
import icon1 from '../../Images/icon.png'
import icon2 from '../../Images/icon-2.png'
import { FaBeer } from "react-icons/fa";

const About = () => {
    return (
      <section class="about-area" id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-6 about-img">
              <img src={pic1} className="image1" />
              <img src={pic3} className="image2" />
              <img src={icon1} className="image3" />
              <img src={icon2} className="image4" />
              <img src={pic2} className="image5" />
            </div>
            <div class="col-md-6 about-content">
              <div className="aboutUs">
                <div className="bar"></div>
                <p>About us</p>
              </div>
              <h1>ONITIR HELP BUSINESSES ELEVATE THEIR VALUE.</h1>
              <p>
                Over the years, a wide range of developments and innovations in
                the global IT arena have led to many new IT-enabled devices and
                services being produced. Moreover, there is need for IT today,
                not just in urban areas but rural regions as well.
              </p>

              <div className="projectCount">
                <div className="experience">
                  <h3>
                    <FaBeer />
                  </h3>
                  <h1>32+</h1>
                  <div className="content">
                    <h2>YEARS OF EXPERIENCE</h2>
                    <p>
                      As a result, most of us need to know how to use computers.
                      Our knowledge of computers.
                    </p>
                  </div>
                </div>

                <div className="Together experience">
                  <h3>
                    <FaBeer />
                  </h3>
                  <h1>99+</h1>
                  <div className="content">
                    <h2>PROJECT DONE TOGETHER</h2>
                    <p>
                      As a result, most of us need to know how to use computers.
                      Our knowledge of computers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;