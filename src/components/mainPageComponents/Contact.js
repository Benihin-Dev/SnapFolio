import React, { useState, useEffect } from "react";
import formWelcomeImg from "../../img/formWelcomeImg.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Mail sent");
  };

  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div
      className={` ${
        isMounted ? "slide-in5" : ""
      } opacity-0 font-ubuntu  relative  pt-20 sm:pt-0 sm:w-9/12 mx-auto mt-24 sm:flex border-indigo-200 shadow`}
    >
      <div className=" sm:w-7/12 relative bg-[#ffffffdc]">
        <div className=" w-full  mt-10 ">
          <p className=" w-4/5 sm:mx-auto px-10 text-xl mb-5">
            Benihin Mahendra
          </p>
          <div className="  w-4/5 sm:mx-auto py-1 px-10 flex  gap-3 items-center ">
            <FaWhatsapp className=" size-5 text-gray-600" />
            <p className=" text-sm">+94 77 220 6096</p>
          </div>
          <div className="  w-4/5 sm:mx-auto py-1 px-10 flex  gap-3 items-center ">
            <FaLinkedin className=" size-5 text-gray-600" />
            <p className=" text-sm">Benihin Mahendra </p>
          </div>
          <div className="  w-4/5 sm:mx-auto py-1 px-10 flex  gap-3 items-center ">
            <MdAlternateEmail className="text-gray-600 size-5" />
            <p className=" text-sm"> mahendrabenihin@gmail.com</p>
          </div>
          <div className="  w-4/5 sm:mx-auto py-1 px-10 flex  gap-3 items-center ">
            <IoLocationSharp className="text-gray-600 size-5" />
            <p className=" text-sm">Batticaloa, Sri Lanka</p>
          </div>
        </div>
        <img
          src={formWelcomeImg}
          alt=""
          className=" hidden px-20 sm:block absolute bottom-0"
        />
      </div>
      <div className=" w-10/12 mx-auto sm:w-5/12 pb-10  bg-[#ffffffdc] border-indigo-100  ">
        <div className="pt-20 sm:pt-0 md:mt-16 mx-4 space-y-2 sm:space-y-5">
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-sm  text-gray-800">
              Sent a Message
            </label>
            <input
              name="name"
              type="text"
              className="mt-1 block w-full px-3 text-sm py-1 border border-blue-200 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
              placeholder="Full-name"
              autoComplete="name"
              required
            />
            <input
              name="email"
              type="text"
              className="mt-1 block w-full  px-3 py-1 text-sm border border-blue-200 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
              placeholder="Emaill"
              autoComplete="email"
              required
            />
            <input
              name="subject"
              type="text"
              className="mt-1 block w-full px-3 py-1 text-sm border border-blue-200 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
              placeholder="Subject"
              autoComplete="subject"
              required
            />
            <textarea
              name="message"
              type="text"
              rows={5}
              className="mt-1 block w-full resize-none text-sm px-3 py-1 border border-blue-200 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
              placeholder="Message"
              autoComplete="mesage"
              required
            />
            <button className=" py-3 mt-1 w-full text-sm border rounded text-white bg-indigo-500 hover:bg-indigo-700">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="bgimg h-screen w-screen top-0 left-0  "></div>
    </div>
  );
}
