import React from "react";
import './Review.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewMan from "../../Images/review.png";
import Star from "../../Images/star-solid.svg";
import Star2 from "../../Images/star-regular.svg";

const Review = () => {
  return (
    <section className="review-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={ReviewMan} alt="" />
          </div>
          <div className="col-md-9">
            <div className="rating">
              <a href="#">
                <img src={Star} alt="" />
              </a>
              <a href="#">
                <img src={Star} alt="" />
              </a>
              <a href="#">
                <img src={Star} alt="" />
              </a>
              <a href="#">
                <img src={Star} alt="" />
              </a>
              <a href="#">
                <img src={Star2} alt="" />
              </a>
            </div>
            <div className="client-comment">
              <h1>
                ” Online proofing smart review allows pages within multi page
                documents to be treated as. Aproove was built to be content is
                real. ”
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
