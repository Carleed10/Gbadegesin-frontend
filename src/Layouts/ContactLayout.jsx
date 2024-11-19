import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const ContactLayout = () => {
  // const [showContactUsModal, setshowContactUsModal] = useState(false);

  return (
    <div>

      <Navbar/>
      <Outlet />
      <Footer/>

      
    </div>
  );
};

export default ContactLayout;
