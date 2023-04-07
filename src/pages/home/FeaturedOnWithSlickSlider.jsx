import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../../assets/FeatureOnImage/one.png";
import two from "../../assets/FeatureOnImage/two.png";
import three from "../../assets/FeatureOnImage/three.png";
import four from "../../assets/FeatureOnImage/four.png";
import five from "../../assets/FeatureOnImage/five.png";

export default class FeaturedOnWithSlickSlider extends Component {
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="container featurenOnSection mb-5">
        <div className="top d-flex justify-content-center align-items-center">
          <p className="featured_on_txt">Featured on</p>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <img src={one} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={two} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={three} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={four} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={five} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={three} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={four} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={five} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={three} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={four} class="img-fluid p-3" alt="Responsive image" />
            </div>
            <div>
              <img src={five} class="img-fluid p-3" alt="Responsive image" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
