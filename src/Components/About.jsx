import React from 'react';
import about from "../Images/about-img.png";

const About = () => {
  return (
    <>
      <div className='relative bg-[white] flex justify-center items-center w-full py-20'>
        <div className='w-[80%]'>
          <div className='flex flex-col md:flex-row justify-between items-center'>

            {/* Image Section */}
            <div className='w-full md:w-[40%]'>
              <img className='w-full h-auto' src={about} alt="About" />
            </div>

            {/* Text Section */}
            <div data-aos="fade-right" data-aos-duration="2000"  className='w-full md:w-[52%] mt-6 md:mt-0'>
              <h2 className='font-semibold sm:font-normal text-[12px] sm:text-[20px] text-[rgb(244,131,31)]'>Why Gbadegesin Properties?</h2>
              <h1 className='font-bold mt-2 text-[#011427] font-vidaloka leading-tight text-left w-[70%] md:w-full md:text-left text-[23px] sm:text-[30px] md:text-[50px]'>
                Turning Your Property Dreams into Reality
              </h1>
              <p className='mt-4 md:text-left'>
                We’re dedicated to helping you find the perfect property. With years of experience in the real estate market, our expert team offers personalized service and local knowledge to ensure a smooth and successful journey.
              </p>
              <p className='mt-4 md:text-left'>
                Whether you’re buying, selling, or renting, we understand that every client has unique needs. We listen carefully to your goals and provide guidance every step of the way. Our mission is to make your property experience stress-free and rewarding. Let us help you turn your property dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
