import React from 'react';
import "./IntroVideo.css";
import laptop from "../../Images/videoLaptop.jpg";

const IntroVideo = () => {
    return (
      <section>
        <div>
          <div className="row video-play">
            <div className="playBtn">
              <a href = "#">Play</a>
            </div>
            
            <div className="col-md-6 video-left">
              <img src={laptop} />
            </div>
            <div className="col-md-6">
              <div className="video-right">
                <h4>Intro Video</h4>
                <h1>LET’S MAKE AN OFFICE TOUR FROM HERE.</h1>
                <p>
                  Over the years, a wide range of developments & innovations in
                  the global IT arena have led to many new IT-enabled devices
                  and services being produced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default IntroVideo;