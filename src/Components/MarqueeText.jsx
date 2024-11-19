import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaHome, FaRegBuilding, FaClipboardList, FaCity } from 'react-icons/fa';

const MarqueeText = () => {
  return (
    <div className='h-[25vh] flex justify-center bg-[white] border-[1px] border-[rgb(136,134,153)]'>
      <Marquee speed={70} gradient={false}>
        <div className='font-bold mt-2 text-[black] font-vidaloka leading-tight text-center text-[35px]' style={{ display: 'flex', gap: '50px' }}>
          <div className='flex items-center'>
            <FaHome className='mr-2' style={{ fontSize: '30px', marginLeft: '80px' , color: 'rgb(246,145,32)' }} />
            Property Sales
          </div>
          <div className='flex items-center'>
            <FaRegBuilding className='mr-2' style={{ fontSize: '30px', color: 'rgb(246,145,32)' }} />
            Rent & Leasing
          </div>
          <div className='flex items-center'>
            <FaCity className='mr-2' style={{ fontSize: '30px', color: 'rgb(246,145,32)' }} />
            Estate Development
          </div>
          <div className='flex items-center'>
            <FaClipboardList className='mr-2' style={{ fontSize: '30px', color: 'rgb(246,145,32)' }} />
            Property Management
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeText;
