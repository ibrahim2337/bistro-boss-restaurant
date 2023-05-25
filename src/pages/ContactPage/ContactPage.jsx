/* eslint-disable no-unused-vars */
import React from "react";
import contact from "../../assets/contact/banner.jpg";
import phone from "../../assets/icons/phone.png";
import location from "../../assets/icons/location.png";
import clock from "../../assets/icons/clock.png";

const ContactPage = () => {
  return (
    <div className="">
      <div className="">
        <img className="h-800" src={contact} />
      </div>
      <div>
        <div className=" text-center mt-20">
          <p className=" text-center text-xl text-yellow-400 mb-2">
            ---Visit Us---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 md:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">OUR LOCATION </p>
          <p className="mx-auto border-b-4 mb-20 md:w-4/12 "></p>
        </div>
        <div className="container mx-auto px-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:px-40 text-center  ">
          <div className="border">
            <div className=" bg-[#D1A054] py-3">
              <img className="w-6 h-6 mx-auto" src={phone} />
            </div>
            <div className="bg-[#F3F3F3] py-10 mx-5 mb-5">
              <h3 className="text-lg font-bold mb-2">PHONE</h3>
              <p className="text-sm">+38 (012) 34 56 789</p>
              <p className="text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="border">
            <div className=" bg-[#D1A054] py-3">
              <img className="w-6 h-6 mx-auto" src={location} />
            </div>
            <div className="bg-[#F3F3F3] py-10 mx-5 mb-5">
              <h3 className="text-lg font-bold mb-2">ADDRESS</h3>
              <p className="text-sm">+38 (012) 34 56 789</p>
              <p className="text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="border">
            <div className=" bg-[#D1A054] py-3">
              <img className="w-6 h-6 mx-auto" src={clock} />
            </div>
            <div className="bg-[#F3F3F3] py-10 mx-5 mb-5">
              <h3 className="text-lg font-bold mb-2">WORKING HOURS</h3>
              <p className="text-sm">Mon - Fri: 08:00 - 22:00 </p>
              <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
