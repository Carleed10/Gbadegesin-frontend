import React from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Custom Next Button
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute bottom-[-20px] right-[40px] cursor-pointer z-20 text-orange-500 hover:text-orange-600"
      onClick={onClick}
    >
      <FiChevronRight size={30} />
    </div>
  );
};

// Custom Previous Button
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute bottom-[-20px] right-[80px] cursor-pointer z-20 text-orange-500 hover:text-orange-600"
      onClick={onClick}
    >
      <FiChevronLeft size={30} />
    </div>
  );
};

const Testimonial = () => {
  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full bg-[rgb(247,247,247)] relative flex flex-col py-10 justify-center items-center h-[100vh]">
      <h1 className="mt-2 font-vidaloka leading-tight text-center text-[25px] sm:text-[40px]">
        Hear from Our Happy Clients
      </h1>

      {/* Yellow Background with Background Image */}
      <div className="w-[90%] mt-[20px] h-screen relative overflow-hidden">
        <div className="bg-[url(../src/Images/testimonial.png)] w-[95%] ml-[5%] bg-no-repeat bg-cover absolute inset-0"></div>

        {/* White Testimonial Box */}
        <div data-aos="fade-up-right" data-aos-duration="2000" className="absolute left-0 top-0 bottom-0 m-auto w-[300px] sm:w-[500px] border bg-white shadow-lg rounded-lg flex items-center py-12 px-8 z-10 h-fit">
          <div className="w-full max-w-xl relative">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="text-left">
                <div className="text-orange-500 text-5xl mb-4">
                  <FaQuoteRight />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Mr Lawal Alowonle</h3>
                {/* <p className="text-sm text-gray-500">Frontend Developer</p> */}
                <p className="text-gray-700 mt-4">
                Found my dream home effortlessly! Professional, reliable, and supportive throughout the entire process.
                </p>
                <div className="flex items-center mt-4">
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-gray-300 text-lg">&#9733;</span>
                </div>
              </div>

              <div className="text-left">
                <div className="text-orange-500 text-5xl mb-4">
                  <FaQuoteRight />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Miss Anifat Bello</h3>
                {/* <p className="text-sm text-gray-500">Banker</p> */}
                <p className="text-gray-700 mt-4">
                Their expertise made renting my property quick and hassle-free. Couldn’t be happier!
                </p>
                <div className="flex items-center mt-4">
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-gray-300 text-lg">&#9733;</span>
                </div>
              </div>


              <div className="text-left">
                <div className="text-orange-500 text-5xl mb-4">
                  <FaQuoteRight />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Mr Ojo Samuel</h3>
                {/* <p className="text-sm text-gray-500">Engineer</p> */}
                <p className="text-gray-700 mt-4">
                Excellent communication and unmatched expertise. Truly the best experience I’ve had with real estate services!
                </p>
                <div className="flex items-center mt-4">
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>

                  {/* <span className="text-gray-300 text-lg">&#9733;</span> */}
                </div>
              </div>

              <div className="text-left">
                <div className="text-orange-500 text-5xl mb-4">
                  <FaQuoteRight />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Mrs Esther Dairo</h3>
                {/* <p className="text-sm text-gray-500">Frontend Developer</p> */}
                <p className="text-gray-700 mt-4">
                They made buying my first home stress-free. Highly knowledgeable and approachable team!
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
                <h3 className="text-xl font-semibold text-gray-800">Mr Igboama John</h3>
                {/* <p className="text-sm text-gray-500">Business man</p> */}
                <p className="text-gray-700 mt-4">
                Impressive market insights and smooth process, I couldn’t have asked for better real estate agents!
                </p>
                <div className="flex items-center mt-4">
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>
                  <span className="text-orange-500 text-lg mr-1">&#9733;</span>

                  {/* <span className="text-gray-300 text-lg">&#9733;</span> */}
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
