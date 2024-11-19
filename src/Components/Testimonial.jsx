import React from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Testimonial = () => {
  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <IoChevronForward/>,
    prevArrow: <IoChevronBack />,
  };

  // Custom Arrow Components
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute bottom-4 right-16 bg-orange-100 p-2 rounded-full text-orange-500 text-xl shadow-md hover:bg-orange-200"
      onClick={onClick}
    >
      <IoChevronForward />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute bottom-4 right-28 bg-orange-100 p-2 rounded-full text-orange-500 text-xl shadow-md hover:bg-orange-200"
      onClick={onClick}
    >
      <IoChevronBack />
    </button>
  );

  return (
      <div className="w-full relative flex justify-center items-center h-[100vh]">
          <div className="bg-gray-50 bg-[url(../src/Images/testimonial.png)] bg-no-repeat  py-12 absolute bg-cover w-[87%] h-screen">
          <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-xl h-[400px] bg-white shadow-lg rounded-lg p-8">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <FaQuoteRight />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                John Doe
              </h3>
              <p className="text-sm text-gray-500">Frontend Developer</p>
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                autem! Consectetur illo tempora sed repudiandae eaque velit
                expedita.
              </p>
              <div className="flex items-center justify-center mt-4">
                <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                <span className="text-gray-300 text-lg">&#9733;</span>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <FaQuoteRight />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-sm text-gray-500">Backend Developer</p>
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                autem! Consectetur illo tempora sed repudiandae eaque velit
                expedita.
              </p>
              <div className="flex items-center justify-center mt-4">
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
