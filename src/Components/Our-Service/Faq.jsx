import React from 'react'
import AccordionUsage from './accordion'
import house from '../../Images/gallery.png'

const Faq = () => {
  return (
    <>
      <div className='flex py-10 justify-center items-center'>
        
        <div className='w-[85%] space-y-10 md:space-y-0 md:flex flex-wrap justify-between items-center'>
        <div className='w-[100%] md:w-[50%]'>
          <h4 className='font-bold text-[rgb(249,115,22)] text-[15px] sm:text-[20px]'>Have Any Question?</h4>
          <h1 className='font-vidaloka text-[25px] sm:text-[45px] mb-6'>Frequently Asked Questions</h1>
          <AccordionUsage/>
        </div>

        <div className='w-[100%] md:w-[45%] rounded-[30px] bg-[purple]'>
          <img className='w-full h-full md:h-[600px] object-fit ' src={house} alt="" />
        </div>
        </div>

      </div>
    
    </>
  )
}

export default Faq