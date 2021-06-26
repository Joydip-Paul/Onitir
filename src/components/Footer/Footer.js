import React from "react";
import "./Footer.css";
import footerLogo from "../../Images/footerLogo.png";
import footerImg1 from "../../Images/footerImg1.jpg";
import footerImg2 from "../../Images/footerImg2.jpg";
import footerImg3 from "../../Images/footerImg3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Facebook from "../../Images/facebook-brands.svg";
import Twitter from "../../Images/twitter-brands.svg";
import Behance from "../../Images/behance-brands.svg";

import {
  faGripVertical,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer-area">
      <div className="top-footer-area">
        <div className="container">
          <div className="row">
            <div className="top-footer">
              <div className="footer-logo">
                <a href="#">
                  <img src={footerLogo} alt="" />
                </a>
              </div>
              <div className="footer-icon">
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#">
                  <img src={Twitter} alt="" />
                </a>
                <a href="#">
                  <img src={Behance} alt="" />
                </a>
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#">
                  <img src={Twitter} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-menu">
                <h3>COMPANY</h3>
                <ul className="footer-menu-list">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Referral Program</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-menu">
                <h3>COMMUNITY</h3>
                <ul>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Meetups</a>
                  </li>
                  <li>
                    <a href="#">Q&A</a>
                  </li>
                  <li>
                    <a href="#">Write for DOnations</a>
                  </li>
                  <li>
                    <a href="#">Droplets for Demos</a>
                  </li>
                  <li>
                    <a href="#">Hatch Startup Program</a>
                  </li>
                  <li>
                    <a href="#">Shop Swag</a>
                  </li>
                  <li>
                    <a href="#">Research Program</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-menu">
                <h3>SOLUTIONS</h3>
                <ul>
                  <li>
                    <a href="#">Web & Mobile Apps</a>
                  </li>
                  <li>
                    <a href="#">Website Hosting</a>
                  </li>
                  <li>
                    <a href="#">Big Data</a>
                  </li>
                  <li>
                    <a href="#">Managed Services</a>
                  </li>
                  <li>
                    <a href="#">Business Solutions</a>
                  </li>
                  <li>
                    <a href="#">Research Program</a>
                  </li>
                  <li>
                    <a href="#">Currents Research</a>
                  </li>
                  <li>
                    <a href="#">Open Source</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-menu">
                <h3>NEWS FEEDS</h3>
                <div className="footer-right">
                  <div className="footer-right-img">
                    <img src={footerImg1} alt="" />
                  </div>
                  <div className="footer-right-text">
                    {/* <FontAwesomeIcon icon={faCalendar} /> */}
                    <p>14TH MAY 2020</p>
                    <h2>MANAGING PARTNER ALONG WITH SENIOR COUNSELS.</h2>
                  </div>
                </div>

                <div className="footer-right">
                  <div className="footer-right-img">
                    <img src={footerImg2} alt="" />
                  </div>
                  <div className="footer-right-text">
                    {/* <FontAwesomeIcon icon={faCalendar} /> */}
                    <p>14TH MAY 2020</p>
                    <h2>MANAGING PARTNER ALONG WITH SENIOR COUNSELS.</h2>
                  </div>
                </div>

                <div className="footer-right">
                  <div className="footer-right-img">
                    <img src={footerImg3} alt="" />
                  </div>
                  <div className="footer-right-text">
                    {/* <FontAwesomeIcon icon={faCalendar} /> */}
                    <p>14TH MAY 2020</p>
                    <h2>MANAGING PARTNER ALONG WITH SENIOR COUNSELS.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <hr></hr>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <h3>Copyright By@AndroThemes - 2020</h3>
            </div>
            <div className="footer-bottom-right">
              <h3>Design By@AndroThemes - 2020</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
