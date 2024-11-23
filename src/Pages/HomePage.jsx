import React from "react";
// import welcomeBanner from "../Components/Banner";
import Banner from "../Components/Banner";
import MarqueeText from "../Components/MarqueeText";
import About from "../Components/About";
import Services from "../Components/Services";
import Customers from "../Components/Customers";
import Testimonial from "../Components/Testimonial";
import LatestPortfolio from "../Components/LatestPortfolio";
import Animation from "../Components/Animation/Animation";

const HomePage = () => {
  return (
    <>
      <Animation>
        <div>
          <div id="welcomeBanner">
            <Banner />
          </div>

          <div id="MarqueeText">
            <MarqueeText />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="services">
            <Services />
          </div>

          <div id="customers">
            <Customers />
          </div>

          <div id="testimonial">
            <Testimonial />
          </div>

          <div id="LatestPortfolio">
            <LatestPortfolio />
          </div>
        </div>
      </Animation>

      {/* <OurProduct/> */}
    </>
  );
};

export default HomePage;
