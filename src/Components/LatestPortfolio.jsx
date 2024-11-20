import React from "react";
import land from "../Images/land.jpg";
import house from "../Images/house.jpg";
import gravel from "../Images/IMG_3128-scaled.jpg";
import house2 from "../Images/portfolio3.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const LatestPortfolio = () => {
  return (
    <>
      <div className="relative bg-[rgb(247,247,247)] flex justify-center py-20 items-center w-full">
        <div className="w-[90%]">
          <h1 className="font-bold mt-2 font-vidaloka leading-tight text-center text-[40px]">
            Optimum Homes & Properties <br /> Realty Experts
          </h1>

          <div className="flex text-[white] justify-between mt-10">
            <div className="flex items-center gap-4 justify-between w-[100%]">
              <div className="relative w-[300px] h-[400px] group">
                <img
                  className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:opacity-70"
                  src={house2}
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 rounded-[20px] p-4">
                  <p className="text-center text-white">
                    Property for Sale <br />
                    A beautiful home waiting for you.
                  </p>
                </div>
              </div>

              <div className="relative w-[300px] h-[350px] group">
                <img
                  className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:opacity-70"
                  src={gravel}
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 rounded-[20px] p-4">
                  <p className="text-center text-white">
                    Gravel Property <br />
                    Explore our landscaping options.
                  </p>
                </div>
              </div>

              <div className="relative w-[300px] h-[400px] group">
                <img
                  className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:opacity-70"
                  src={land}
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 rounded-[20px] p-4">
                  <p className="text-center text-white">
                    Land for Development <br />
                    Your ideal space for investment.
                  </p>
                </div>
              </div>

              <div className="relative w-[300px] h-[350px] group">
                <img
                  className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:opacity-70"
                  src={house}
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 rounded-[20px] p-4">
                  <p className="text-center text-white">
                    Cozy House <br />
                    Perfect for family living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPortfolio;
