import React from "react";
import Service from "../Components/Our-Service/Service.jsx";
import OurService from "../Components/Our-Service/OurService.jsx";
// import AccordionUsage from "../Components/Our-Service/accordion.jsx";
import Faq from "../Components/Our-Service/Faq.jsx";






const ServicePage = () => {
  return (
    <>
      <div>
      <div id="service">
            <Service/>
        </div>

        <div id="OurService">
            <OurService/>
        </div>

        <div id="faq">
            <Faq/>
        </div>

        {/* <div id="OurService">
            <AccordionUsage/>
        </div> */}

      
      </div>
      
    
    </>
  );
};

export default ServicePage;
