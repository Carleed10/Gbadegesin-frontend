import React from 'react';
import CountUp from 'react-countup';
import { FaHome, FaClipboardList, FaUsers, FaPlusCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Customers = () => {
  // Setup Intersection Observer to track visibility of the component
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the count once when it enters view
    threshold: 0.5,    // Trigger when 50% of the component is in view
  });

  return (
    <div className="flex justify-center items-center py-10">
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-duration="2000"
      className="w-[85%] flex flex-wrap justify-center gap-10"
    >
      {/* Properties Sold */}
      <div className="w-full md:w-[22%] text-center flex flex-col items-center gap-4 text-black">
        <FaHome color='rgb(246,145,32)' className="mx-auto text-5xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[black] font-vidaloka">
            {inView && (
              <CountUp start={0} end={12000} duration={5.5} separator="," />
            )}
            +
          </h1>
          <p className="mt-2 text-md text-[rgb(136,136,145)]">
            Properties Sold
          </p>
        </div>
      </div>
  
      {/* Properties Listed */}
      <div className="w-full md:w-[22%] text-center flex flex-col items-center gap-4 text-black">
        <FaClipboardList color='rgb(246,145,32)' className="mx-auto text-5xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[black] font-vidaloka">
            {inView && (
              <CountUp start={0} end={15000} duration={5.5} separator="," />
            )}
            +
          </h1>
          <p className="mt-2 text-md text-[rgb(136,136,145)]">
            Properties Listed
          </p>
        </div>
      </div>
  
      {/* Happy Clients */}
      <div className="w-full md:w-[22%] text-center flex flex-col items-center gap-4 text-black">
        <FaUsers color='rgb(246,145,32)' className="mx-auto text-5xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[black] font-vidaloka">
            {inView && (
              <CountUp start={0} end={9000} duration={5.5} separator="," />
            )}
            +
          </h1>
          <p className="mt-2 text-md text-[rgb(136,136,145)]">
            Happy Clients
          </p>
        </div>
      </div>
  
      {/* New Properties Added */}
      <div className="w-full md:w-[22%] text-center flex flex-col items-center gap-4 text-black">
        <FaPlusCircle color='rgb(246,145,32)' className="mx-auto text-5xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[black] font-vidaloka">
            {inView && (
              <CountUp start={0} end={2000} duration={5.5} separator="," />
            )}
            +
          </h1>
          <p className="mt-2 text-md text-[rgb(136,136,145)]">
            Complete Projects
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Customers;
