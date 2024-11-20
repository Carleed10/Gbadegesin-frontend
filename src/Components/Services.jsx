import React from "react";
import about from "../Images/about-img.png";
import property from "../Images/propertyy.jpg";
import management from "../Images/management.jpg";
import estate from "../Images/estate.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="relative bg-[rgb(24,22,22)] flex justify-center py-16 items-center w-full">
        <div className="w-[80%]">
          <h1
            className="font-bold mt-2 font-vidaloka leading-tight text-center text-[40px] bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(246,143,32), rgb(240,92,33))",
            }}
          >
            Your One-Stop Destination for <br /> Real Estate Services
          </h1>

          <div className="flex flex-wrap gap-4 items-center justify-center mt-10">
            <div className="w-full md:w-[340px] mb-8 md:mb-0 rounded-lg bg-[rgb(29,27,27)] group overflow-hidden">
              <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={property}
                alt="Property Sales"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[white] text-[18px]">
                  PROPERTY SALES
                </h3>
                <p className="mt-2 text-[white] text-[15px]">
                  Offering a wide selection of properties for sale, with expert
                  guidance to help you make the right choice.
                </p>
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(246,143,32), rgb(240,92,33))",
                  }}
                  className="mt-4 bg-[red] flex items-center gap-2 rounded-[20px] text-white p-2 px-6 bg-gradient-to-r"
                >
                  Learn More <FaLongArrowAltRight color="white" />
                </button>
              </div>
            </div>

            <div className="w-full md:w-[340px] mb-8 md:mb-0 rounded-lg bg-[rgb(29,27,27)] group overflow-hidden">
              <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={estate}
                alt="Estate Management"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[white] text-[18px]">
                  ESTATE MANAGEMENT
                </h3>
                <p className="mt-2 text-[white] text-[15px]">
                  Transforming spaces into thriving communities with expert
                  planning, design, and construction services.
                </p>
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(246,143,32), rgb(240,92,33))",
                  }}
                  className="mt-4 bg-[red] flex items-center gap-2 rounded-[20px] text-white p-2 px-6 bg-gradient-to-r"
                >
                  Learn More <FaLongArrowAltRight color="white" />
                </button>
              </div>
            </div>

            <div className="w-full md:w-[340px] mb-8 md:mb-0 rounded-lg bg-[rgb(29,27,27)] group overflow-hidden">
              <img
                className="w-full h-[230px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={management}
                alt="Property Development"
              />
              <div className="px-4 py-6">
                <h3 className="font-bold text-[white] text-[18px] text-[white]">
                  PROPERTY DEVELOPMENT
                </h3>
                <p className="mt-2 text-[white] text-[15px]">
                  Providing property management solutions to ensure your
                  investments are well-maintained and profitable.
                </p>
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(246,143,32), rgb(240,92,33))",
                  }}
                  className="mt-4 bg-[red] flex items-center gap-2 rounded-[20px] text-white p-2 px-6 bg-gradient-to-r"
                >
                  Learn More <FaLongArrowAltRight color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
