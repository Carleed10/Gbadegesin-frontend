import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import land from "../Images/land.jpg";
import house from "../Images/house.jpg";
import gravel from "../Images/IMG_3128-scaled.jpg";
import house2 from "../Images/portfolio3.png";

const LatestPortfolio = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "2px",
    cssEase: "ease-in-out",
  };

  return (
    <>
      <div className="relative bg-[rgb(247,247,247)] flex justify-center py-20 items-center w-full">
        <div className="w-[90%]">
          <h1 className="font-bold mt-2 font-vidaloka leading-tight text-center text-[30px] sm:text-[40px]">
            Optimum Homes & Properties <br /> Realty Experts
          </h1>

          {isSmallScreen ? (
            <Slider {...settings} className="mt-10">
              {[house2, gravel, land, house].map((image, index) => (
                <div key={index} className="px-2">
                  <div className="relative w-[300px] h-[400px] mx-auto group">
                    <img
                      className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:opacity-70"
                      src={image}
                      alt={`Portfolio ${index + 1}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 rounded-[20px] p-4">
                      <p className="text-center text-white">
                        {index === 0
                          ? "Property for Sale"
                          : index === 1
                          ? "Gravel Property"
                          : index === 2
                          ? "Land for Development"
                          : "Cozy House"}{" "}
                
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="flex text-[white] justify-between mt-10">
              <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-4 justify-between w-[100%]">
                {[house2, gravel, land, house].map((image, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      index === 1 || index === 3 ? "h-[350px]" : "h-[400px]"
                    } w-[300px] group`}
                  >
                    <img
                      className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:opacity-70"
                      src={image}
                      alt={`Portfolio ${index + 1}`}
                    />
                    <div  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 rounded-[20px] p-4">
                      <p className="text-center text-white">
                        {index === 0
                          ? "Property for Sale"
                          : index === 1
                          ? "Gravel Property"
                          : index === 2
                          ? "Land for Development"
                          : "Cozy House"}{" "}
                        
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LatestPortfolio;
