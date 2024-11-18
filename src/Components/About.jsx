import React from 'react'
import about from "../Images/about-img.png"

const About = () => {
  return (
    <>
    
      <div className='relative bg-[white] flex justify-center items-center w-full h-[100vh]'>
          <div className='w-[80%]'>
            <div className='flex justify-between'>

              <div className='w-[40%]'>
                <img  src={about} alt="" />
              </div>



              <div className='w-[50%]'>
                <h2 className='text-[20px] text-[rgb(244,131,31)]'>Why Gbadegesin Properties?</h2>
                <h1 className='font-bold mt-2 text-[#011427] font-vidaloka leading-tight text-centre text-[50px]'>Turning Your Property Dreams into Reality</h1>
                <p className='mt-6'>We’re dedicated to helping you find the perfect property. With years of experience in the real estate market, our expert team offers personalized service and local knowledge to ensure a smooth and successful journey. </p>
                <p className='mt-6'>Whether you’re buying, selling, or renting, we understand that every client has unique needs. We listen carefully to your goals and provide guidance every step of the way. Our mission is to make your property experience stress-free and rewarding. Let us help you turn your property dreams into reality.</p>
               
                
              </div>
            </div>
          </div>

      </div>
    
    
    </>
  )
}

export default About