import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-center pt-20 pb-20">
        <div className="w-[90%] flex justify-center items-center">
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-4">
            <div data-aos="fade-right" data-aos-duration="2000" className="w-full  md:w-[31%] p-6 bg-white h-[250px] flex flex-col text-center justify-center items-center rounded-lg border border-gray-300 transition-transform duration-300 hover:border-none hover:shadow-lg hover:scale-105">
              <MdMarkEmailUnread color="rgb(244,121,33)" size={50} />
              <h3 className="font-semibold mt-4 text-[25px]">Email</h3>
              <p className="text-[14px]">gbadegesinproperties@gmail.com</p>
            </div>

            <div className="w-full  md:w-[31%] p-6 bg-white h-[250px] flex flex-col text-center justify-center items-center rounded-lg border border-gray-300 transition-transform duration-300 hover:border-none hover:shadow-lg hover:scale-105">
              <FaLocationDot color="rgb(244,121,33)" size={50} />
              <h3 className="font-semibold mt-4 text-[25px]">Address</h3>
              <p className="text-[14px]">
                No 1, Onikoko Area, Kasumu Road, Arubiewe-Olodo P.O. Box 6442
                Agodi Post Office, Ibadan, Oyo State.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="w-full  md:w-[31%] p-6 bg-white h-[250px] flex flex-col text-center justify-center items-center rounded-lg border border-gray-300 transition-transform duration-300 hover:border-none hover:shadow-lg hover:scale-105">
              <IoMdContact color="rgb(244,121,33)" size={50} />
              <h3 className="font-semibold mt-4 text-[25px]">Contacts</h3>
              <p className="text-[14px]">gbadegesinproperties@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;





