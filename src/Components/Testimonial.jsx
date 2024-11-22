import React from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full bg-[rgb(247,247,247)] relative flex flex-col py-10 justify-center items-center h-[100vh]">
                <h1 className='mt-2 font-vidaloka leading-tight items-center text-centre text-[25px] sm:text-[40px]'>Hear from Our Happy Clients</h1>



      {/* Yellow Background with Background Image */}
      <div className="w-[90%] mt-[20px] h-screen relative overflow-hidden">
        <div className="bg-[url(../src/Images/testimonial.png)] w-[95%] ml-[5%]  bg-no-repeat bg-cover absolute inset-0"></div>

        {/* White Testimonial Box */}
        <div className="absolute left-0 top-0 bottom-0 m-auto w-[300px] sm:w-[500px] border bg-white shadow-lg rounded-lg flex items-center  py-12 px-8 z-10 h-fit">
          <div className="w-full max-w-xl">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="text-left">
                <div className="text-orange-500 text-5xl mb-4">
                  <FaQuoteRight />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  John Doe
                </h3>
                <p className="text-sm text-gray-500">Frontend Developer</p>
                <p className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, autem! Consectetur illo tempora sed repudiandae eaque
                  velit expedita.
                </p>
                <div className="flex items-center mt-4">
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-gray-300 text-lg">&#9733;</span>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="text-left">
                <div className="text-orange-500 text-5xl mb-4">
                  <FaQuoteRight />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Jane Smith
                </h3>
                <p className="text-sm text-gray-500">Backend Developer</p>
                <p className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, autem! Consectetur illo tempora sed repudiandae eaque
                  velit expedita.
                </p>
                <div className="flex items-center mt-4">
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-gray-300 text-lg">&#9733;</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
