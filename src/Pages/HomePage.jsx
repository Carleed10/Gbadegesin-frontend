import React from "react";
// import welcomeBanner from "../Components/Banner";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Services from "../Components/Services";




const HomePage = () => {
  return (
    <>
      <div>

        <div id="welcomeBanner">
            <Banner/>
        </div>

        <div id="about">
          <About/>
        </div>

        <div id="services">
          <Services/>
        </div>
      
      
      </div>
      
      

      {/* <OurProduct/> */}
    </>
  );
};

export default HomePage;
