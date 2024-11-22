import React from 'react'
import house from "../Images/banner-five-img.png"

const Banner = () => {
  return (
    <>
    
      <div className='relative bg-[rgb(248,248,248)] flex justify-center items-center w-full mt-[15vh] md:py-0 py-10  md:h-[85vh]'>
          <div className=''>
            <div className=' flex justify-center md:justify-between flex-wrap'>

              <div className='w-full md:w-[44%] flex flex-col justify-center items-center md:items-start pl-0 md:pl-[7%] text-center md:text-left'>
              <h1 className='font-bold leading-[55px] text-[50px] sm:text-[65px]  sm:leading-[70px]'> Find Your Dream Home Today!</h1>

                <h4 className='w-[75%] sm:w-[80%] text-[18px] mt-[20px] text-[rgb(136,134,134)]'>Explore a wide range of properties tailored to your needs and lifestyle.</h4>
              </div>


              <div className='w-[85%] md:w-[56%] md:h-[85vh] mt-[20px] md:mt-0'>
                <img className='w-full h-full object-cover rounded-md' src={house} alt="" />
              </div>
            </div>
          </div>

      </div>
    
    
    </>
  )
}

export default Banner