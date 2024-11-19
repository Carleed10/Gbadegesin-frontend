import React from 'react'
import { GoHome } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <>
        <div className="w-full bg-[rgb(24,22,22)] text-white flex bg-no-repeat mt-[15vh] bg-center justify-center items-center bg-[url(../src/Images/breadcrumb-img.png)] h-[65vh]">
            <div>
            <h1 className="mt-2 font-bold leading-tight text-center text-[50px] bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(246,143,32), rgb(240,92,33))",
            }}>
            Contact Us!
          </h1>
            <div className='flex justify-center items-center gap-4'>
            <h4 className='flex gap-2 justify-center items-center'><GoHome  size={24} color='white' /> Home</h4>
            <MdOutlineKeyboardArrowRight size={30} color='white' />

            <h4>Contact Us</h4>
            </div>

            </div>
        </div>
    </>
  )
}

export default Hero