import React from "react";

import rightImage from "../../assets/FirstSession.gif";

const HeroSection = () => {
  return (
    <div className="heroSection pt-5 pb-5 mb-5">
      <div className="container d-flex  align-items-center flex-sm-row flex-column">
        <div className="heroLeft">
          <h1 className="heroTitle mb-3">
            Integrated platform that aspires to uplift the mental health
            services of Bangladesh
          </h1>
          <h4 className="mb-3">
            It’s where health and taste met and they are getting on famously.
          </h4>
          <button type="submit" class="blinkButton heroBtn">
            I Need a Therapist
          </button>

          {/* <button type="button" class="btn btn-warning me-3">
            I Need a Therapist
          </button> */}
          <button type="button" class="btn btn-outline-warning heroBtn">
            I am a Therapist
          </button>
        </div>
        <div className="heroRight d-flex justify-content-end align-items-center">
          <img src={rightImage} class="img-fluid" alt="Responsive image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
