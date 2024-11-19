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
        className="w-[85%] flex justify-between space-x-10 "
      >
        {/* Properties Sold */}
        <div className="text-center flex items-center gap-8 text-black">
          <FaHome className="mx-auto text-5xl" />
          <div>
          <h1 className="text-4xl font-bold mt-2 text-[black] font-vidaloka leading-tight text-center text-[35px] mt-4">
            {inView && (
              <CountUp start={0} end={12000} duration={5.5} separator="," />
            )}
            +
          </h1>
          <p className="mt-2 text-md text-[rgb(136,136,145)]">Properties Sold</p>
          </div>
        </div>

        {/* Properties Listed */}
        <div className="text-center flex items-center gap-8 text-black">
          <FaClipboardList className="mx-auto text-5xl" />
         <div>
         <h1 className="text-4xl font-bold mt-2 text-[black] font-vidaloka leading-tight text-center text-[35px] mt-4">
            {inView && (
              <CountUp start={0} end={15000} duration={5.5} separator="," />
            )}
            +
          </h1>
          <p className="mt-2 text-md text-[rgb(136,136,145)]">Properties Listed</p>
         </div>
        </div>

        {/* Happy Clients */}
        <div className="text-center flex items-center gap-8 text-black">
          <FaUsers className="mx-auto text-5xl" />
          <div>
          <h1 className="text-4xl font-bold mt-2 text-[black] font-vidaloka leading-tight text-center text-[35px] mt-4">
            {inView && (
              <CountUp start={0} end={9000} duration={5.5} separator="," />
            )}
            +
          </h1>
          <p className="mt-2 text-md text-[rgb(136,136,145)]">Happy Clients</p>
          </div>
        </div>

        {/* New Properties Added */}
        <div className="text-center flex items-center gap-8 text-black">
          <FaPlusCircle className="mx-auto text-5xl" />
          <div>
          <h1 className="text-4xl font-bold mt-2 text-[black] font-vidaloka leading-tight text-center text-[35px] mt-4">
            {inView && (
              <CountUp start={0} end={2000} duration={5.5} separator="," />
            )}
            +
          </h1>
          <p className="mt-2 text-md text-[rgb(136,136,145)]">Complete Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
