import React from "react";
import rightImage from "../../assets/hero_slider_image.png";

const WhyChoseUsSection = () => {
  return (
    <div className="container whyChoseSection">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="whyChoseTitle d-flex justify-content-center align-items-center flex-column mb-5">
          <h1 className="wcut">Why chose us</h1>
          <h3 className="wcud">
            A platform that probide the mental health solution
          </h3>
        </div>

        <div className="whyChosePart1 d-flex flex-column flex-sm-row">
          <div className="d-flex justify-content-center align-items-center w-50">
            <img src={rightImage} class="img-fluid" alt="Responsive image" />
          </div>
          <div className="d-flex justify-content-center  flex-column w-50">
            <h3 className="wcupt">A bridge between...</h3>
            <p className="wcupp">
              A platform serving both of who seeks professional help for their
              mental well being and the professional therapists who are always
              ready to help. We're providing a smooth bridge between these two.
            </p>
            <p className="wcups">Get started for free</p>
          </div>
        </div>
        <div className="whyChosePart2 d-flex flex-column flex-sm-row">
          <div className="d-flex justify-content-center  flex-column w-50">
            <h3 className="wcupt">those who need help...</h3>
            <p className="wcupp">
              Something ails? Hey, seeking help is the most humane thing we can
              do. It's not always easy on our own. This is the place where you
              get the proper help you need.
            </p>
            <p className="wcups">Get started for free</p>
          </div>
          <div className="d-flex justify-content-center align-items-center w-50">
            <img src={rightImage} class="img-fluid" alt="Responsive image" />
          </div>
        </div>
        <div className="whyChosePart3 d-flex flex-column flex-sm-row">
          <div className="d-flex justify-content-center align-items-center w-50">
            <img src={rightImage} class="img-fluid" alt="Responsive image" />
          </div>
          <div className="d-flex justify-content-center  flex-column w-50">
            <h3 className="wcupt">and those who can provide.</h3>
            <p className="wcupp">
              Are you a professional therapist? We're providing a structured
              platform to reach out to those who need your help. An independant
              platform to work on your own schedule and demand.
            </p>
            <p className="wcups">Get started for free</p>
          </div>
        </div>
        <div className="whyChosePart2"></div>
        <div className="whyChosePart3"></div>
      </div>
    </div>
  );
};

export default WhyChoseUsSection;
