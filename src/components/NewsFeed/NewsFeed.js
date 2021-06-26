import React from 'react';
import "./NewsFeed.css";
import newsFeed1 from "../../Images/newsFeed1.jpg";

const NewsFeed = () => {
    return (
      <section className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="news-title">
                <span>BLOG</span>
                <h1>NEWS FEED</h1>
              </div>
            </div>
          </div>
          <div className="row pt-100">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-meta">
                  <a href="#">14TH MAY 2020</a>
                  <a href="#">10 COMMENTS</a>
                </div>
                <div className="blog-img">
                  <img src={newsFeed1} />
                </div>

                <div className="blog-title">
                  <h4>WE’LL THEN ASK YOU TO TELL US YOUR CURRENT LEVEL</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae distinctio quaerat minima, nulla aliquam tenetur
                    explicabo ipsa facere veniam itaque?
                  </p>
                  <a href="">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-meta">
                  <a href="#">14TH MAY 2020</a>
                  <a href="#">10 COMMENTS</a>
                </div>
                <div className="blog-img">
                  <img src={newsFeed1} />
                </div>

                <div className="blog-title">
                  <h4>WE’LL THEN ASK YOU TO TELL US YOUR CURRENT LEVEL</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae distinctio quaerat minima, nulla aliquam tenetur
                    explicabo ipsa facere veniam itaque?
                  </p>
                  <a href="">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-meta">
                  <a href="#">14TH MAY 2020</a>
                  <a href="#">10 COMMENTS</a>
                </div>
                <div className="blog-img">
                  <img src={newsFeed1} />
                </div>

                <div className="blog-title">
                  <h4>WE’LL THEN ASK YOU TO TELL US YOUR CURRENT LEVEL</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae distinctio quaerat minima, nulla aliquam tenetur
                    explicabo ipsa facere veniam itaque?
                  </p>
                  <a href="">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default NewsFeed;