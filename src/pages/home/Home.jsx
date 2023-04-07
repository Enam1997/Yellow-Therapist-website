import React from "react";
import "./home.css";
import TopNavBart from "../../components/TopNavBart";
import HeroSection from "./HeroSection";
import WhyChoseUsSection from "./WhyChoseUsSection";
import FeaturedOnWithSlickSlider from "./FeaturedOnWithSlickSlider";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <div>
      <TopNavBart />
      <HeroSection />
      <FeaturedOnWithSlickSlider />
      <div className="container">
        <ScrollDown />
      </div>

      <WhyChoseUsSection />

      <div class="container d-flex">
        <div class="p-2 flex-fill bg-success">Flex item</div>
        <div class="p-2 flex-fill bg-primary">Flex item</div>
      </div>
    </div>
  );
};

export default Home;
