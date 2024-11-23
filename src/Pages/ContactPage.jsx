import React from "react";
// import welcomeBanner from "../Components/Banner";
import Hero from "../Components/Contact/Hero.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import Animation from "../Components/Animation/Animation.js";






const ContactPage = () => {
  return (
    <>
      <Animation>
      <div>
      <div id="contact">
            <Hero/>
        </div>

      <div id="contact">
            <Contact/>
        </div>
      
      </div>

      </Animation>
      
    
    </>
  );
};

export default ContactPage;
