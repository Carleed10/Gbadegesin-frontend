import React, { useState } from "react";
// import logo from "../../Images/kik-logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { CgMenu } from "react-icons/cg";
import { navigationLinks } from "./constants";
import TemporaryDrawer from "./drawer";

const Navbar = ({ onContactClick }) => {
  const [showDrawer, setshowDrawer] = useState(false);
 

  return (
    <div className="px-4 bg-[rgb(248,248,248)] text-[black] md:px-0 fixed top-0 w-full h-[15vh] font-semibold flex items-center justify-center z-50">
      <div className="w-full lg:w-4/5 md:px-4 lg:px-0">
        <div className="flex justify-between items-center">
          {/* <img className="w-[55px]" src={logo} alt="" /> */}

          <ul className="flex items-center md:gap-8 lg:gap-24 hidden md:flex">
            {navigationLinks.map((data) => (
              <li
                key={data.title}
                onClick={() => {
                //   if (data.title === "Contact Us") {
                //     onContactClick();
                //   } else {
                //     scrollToSection(data.path);
                //   }
                }}
                className="font-[400] cursor-pointer"
              >
                {data.title}
              </li>
            ))}
          </ul>

          
          <div
            onClick={() => setshowDrawer(true)}
            className="md:hidden text-white md:text-black border border-white/10 p-2 rounded-md"
          >
            <CgMenu size={20} />
          </div>
        </div>
      </div>

      {/* Drawer */}
      <TemporaryDrawer
        onClose={() => setshowDrawer(!showDrawer)}
        open={showDrawer}
      />

    

      
    
   {/* <BasicModal2 open={showDrawer} onClose={() => setshowDrawer(false)} /> */}

    </div>
  );
};

export default Navbar;
