import React from "react";
// import about from "../Images/about-img.png";
import property from "../../Images/service1.webp";
import rent from "../../Images/service3.webp";
import management from "../../Images/management.jpg";

import estate from "../../Images/estate.jpg";
import materials from "../../Images/building.jpg";
import land2 from "../../Images/land2.jpg";

import { FaLongArrowAltRight } from "react-icons/fa";

const OurService = () => {
  return (
    <>
      <div className="relative bg-[white] flex justify-center py-16 items-center w-full">
        <div className="w-[80%]">
          <h1
            className="mt-2 font-vidaloka leading-tight text-center text-[40px]"
            
          >
            Our Service
          </h1>

          <div className="flex flex-wrap gap-6 items-center justify-center mt-10">
            <div className="w-full md:w-[340px] h-[450px] mb-8 md:mb-0 rounded-lg bg-[rgb(248,248,248)] group overflow-hidden">
              <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={property}
                alt="Property Sales"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[black] text-[18px]">
                  Property Sales
                </h3>
                <p className="font-[300] mt-2 text-[black] text-[15px]">
                Whether you’re looking to buy or sell, we provide expert guidance and access to a wide range of property listings to ensure you find the perfect match for your needs.
                </p>
                
              </div>
            </div>

            <div className="w-full md:w-[340px] h-[450px] mb-8 md:mb-0 rounded-lg bg-[rgb(248,248,248)] group overflow-hidden">
              <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={management}
                alt="Estate Management"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[black] text-[18px]">
                  Property Management
                </h3>
                <p className="mt-2 font-[300] text-[black] text-[15px]">
                Our property management services ensure your investments are well-maintained and profitable, offering peace of mind through expert oversight and personalized care
                </p>
                
              </div>
            </div>

            <div className="w-full md:w-[340px] h-[450px] mb-8 md:mb-0 rounded-lg bg-[rgb(248,248,248)] group overflow-hidden">
              <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={rent}
                alt="Land Development"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[black] text-[18px] text-[black]">
                Rent and Leasing
                </h3>
                <p className="mt-2 font-[300] text-[black] text-[15px]">
                Explore flexible rental and leasing options for both residential and commercial properties, tailored to meet your lifestyle or business needs.
                </p>
                
              </div>
            </div>

            <div className="w-full md:w-[340px] h-[450px] mb-8 md:mb-0 rounded-lg bg-[rgb(248,248,248)] group overflow-hidden">
            <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={estate}
                alt="Estate Management"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[black] text-[18px] text-[black]">
                Estate Development
                </h3>
                <p className="mt-2 font-[300] text-[black] text-[15px]">
                From planning to execution, we specialize in creating sustainable and thriving communities that combine innovation with functionality.
                </p>
                
              </div>
            </div>



            <div className="w-full md:w-[340px] h-[450px] mb-8 md:mb-0 rounded-lg bg-[rgb(248,248,248)] group overflow-hidden">
              <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={materials}
                alt="Property Development"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[black] text-[18px] text-[black]">
                Sales of Building Materials
                </h3>
                <p className="mt-2 font-[300] text-[black] text-[15px]">
                We provide top-quality building materials to support your construction and renovation projects, ensuring durability and excellence in every project.
                </p>
                
              </div>
            </div>


            <div className="w-full md:w-[340px] h-[450px] mb-8 md:mb-0 rounded-lg bg-[rgb(248,248,248)] group overflow-hidden">
              <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={land2}
                alt="Land Development"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[black] text-[18px] text-[black]">
                  Land Development
                </h3>
                <p className="mt-2 font-[300] text-[black] text-[15px]">
                Maximize the potential of your land with our expert development strategies, tailored to bring your vision to life while enhancing value and usability.
                </p>
                
              </div>
            </div>



            

          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
