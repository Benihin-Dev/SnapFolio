import React, { useState } from "react";
import { AiOutlineFund } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { useMainPageData } from "./MainPageDataProvider";
import logo from "../../img/logo.png";
import { useScrollDirection } from "./useScrollDirection";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const scrollDirection = useScrollDirection();
  const { activeState, setActiveState } = useMainPageData();
  const [handleShowNavItems, SetHandleShowNavItems] = useState(false);
  const navigate = useNavigate();
  const navLinks = ["templates", "pricing", "about"];
  return (
    <div
      className={`${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } fixed top-0 left-0 right-0 z-10  transition-transform duration-300 font-ubuntu bg-white `}
    >
      <div className=" w-full relative">
        <div className=" bg-white relative mx-auto flex justify-between pt-4 pb-5 w-11/12">
          <div className=" sm:w-1/5  sm:px-5 justify-center items-center">
            <img
              onClick={() => {
                navigate("/");
              }}
              src={logo}
              alt=""
              className=" h-12 md:h-[50px] object-contain"
            />
          </div>
          <div className=" hidden  md:flex items-center justify-end gap-8">
            <ul className=" items-center justify-end gap-8 flex">
              {navLinks.map((link, i) => (
                <a href={`#${link}`}>
                  <li
                    key={i}
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer capitalize "
                  >
                    {link}
                  </li>
                </a>
              ))}
            </ul>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="flex justify-center items-center md:hidden">
            <FaBarsStaggered
              onClick={() => {
                SetHandleShowNavItems(!handleShowNavItems);
              }}
              className=" cursor-pointer size-6 text-indigo-500 hover:text-indigo-700 duration-200"
            />
          </div>
        </div>
        <div
          className={`transition-transform -z-10 duration-300 ${
            !handleShowNavItems ? "translate-x-full" : "translate-x-0"
          } absolute top-[100%] right-0 w-fit rounded-es-xl shadow-md bg-[#ffffff] `}
        >
          <div className=" pr-32 pl-5 pt-5 pb-10 capitalize space-y-3  items-end  mx-auto w-11/12">
            {navLinks.map((link, i) => (
              <a href={`#${link}`}>
                <p
                  key={i}
                  className=" text-gray-600 py-1 hover:text-gray-900 cursor-pointer"
                >
                  {link}
                </p>{" "}
              </a>
            ))}
            <button className="bg-indigo-600 whitespace-nowrap text-white  px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
