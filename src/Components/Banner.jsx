import React from 'react'
import house from "../Images/banner-five-img.png"

const Banner = () => {
  return (
    <>
    
      <div className='relative bg-[white] flex justify-center items-center w-full mt-[15vh]'>
          <div className=''>
            <div className='flex justify-between'>

              <div className='w-[44%] flex flex-col justify-center  pl-[8%]'>
              <h1 className='font-bold text-[70px]  leading-[70px]'> Find Your Dream Home Today!</h1>

                <h4 className='text-[18px] mt-[20px] text-[rgb(136,134,134)]'>Explore a wide range of properties tailored to your needs and lifestyle.</h4>
              </div>


              <div className='w-[53%]'>
                <img className='' src={house} alt="" />
              </div>
            </div>
          </div>

      </div>
    
    
    </>
  )
}

export default Banner