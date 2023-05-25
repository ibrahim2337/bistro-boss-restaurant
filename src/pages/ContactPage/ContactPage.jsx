/* eslint-disable no-unused-vars */
import React from "react";
import contact from "../../assets/contact/banner.jpg";
import phone from "../../assets/icons/phone.png";
import location from "../../assets/icons/location.png";
import clock from "../../assets/icons/clock.png";

const ContactPage = () => {
  return (
    <section>
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
            <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
            <p className="text-3xl my-4 font-bold">OUR LOCATION </p>
            <p className="mx-auto border-b-4 mb-20 w-9/12 lg:w-4/12 "></p>
          </div>
          <div className="container mx-auto px-5 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:px-40 text-center  ">
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

      <div>
        <div className="text-center mt-20">
          <p className="text-center text-xl text-yellow-400 mb-2">
            ---Send Us a Message---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">CONTACT FORM </p>
          <p className="mx-auto border-b-4 mb-20 w-9/12 lg:w-4/12"></p>
        </div>

        <div className="container mx-auto text-center ">
          <div className="px-5  lg:px-60">
            <div className="p-4 py-6 rounded-lg bg-[#F3F3F3]  md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-start">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your First Name"
                      className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-start">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your First Name"
                      className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-start">Email address</label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-start">Message</label>
                  <textarea
                    className="block w-full px-5 py-2.5 mt-2 mb-20 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;