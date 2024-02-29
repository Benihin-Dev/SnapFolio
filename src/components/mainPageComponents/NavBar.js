import React, { useState } from "react";
import { AiOutlineFund } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { useMainPageData } from "./MainPageDataProvider";
import logo from "../../img/logo.png";

export default function NavBar() {
  const { activeState, setActiveState } = useMainPageData();
  const [handleShowNavItems, SetHandleShowNavItems] = useState(false);
  return (
    <div
      className={`${
        activeState === "review" ? "hidden" : ""
      } fixed top-0 left-0 right-0 z-10 shadow pb-0 pt-2 bg-[#ffffffc6]`}
    >
      <div className=" relative mx-auto flex justify-between px-3 sm:px-0 pb-0 sm:w-9/12">
        <div className=" sm:w-1/5  sm:px-5 justify-center items-center">
          <img src={logo} alt="" className=" h-12" />
        </div>
        <div className="hidden sm:flex font-ubuntu font-medium sm:w-3/5 h-12 sm:px-5  justify-end items-end">
          <ul className=" flex justify-end items-end gap-10 pb-0 w-3/5">
            <li
              onClick={() => {
                setActiveState("home");
              }}
              className={`${
                activeState === "home"
                  ? "border-indigo-500"
                  : "border-transparent"
              }  text-indigo-500  text-center w-6/12 mx-auto border-b-2  pb-2  hover:border-indigo-500 duration-300 hover:text-indigo-500`}
            >
              Home
            </li>
            <li
              onClick={() => {
                setActiveState("contact");
              }}
              className={`${
                activeState === "contact"
                  ? "border-indigo-500"
                  : "border-transparent"
              } text-indigo-500  text-center w-6/12 mx-auto border-b-2  pb-2 hover:border-indigo-500 duration-300 hover:text-indigo-500`}
            >
              Contact
            </li>
            <li
              onClick={() => {
                setActiveState("about");
              }}
              className={`${
                activeState === "about"
                  ? "border-indigo-500"
                  : "border-transparent"
              } text-indigo-500  text-center w-6/12 mx-auto border-b-2 pb-2 hover:border-indigo-500 duration-300 hover:text-indigo-500`}
            >
              About
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            SetHandleShowNavItems(!handleShowNavItems);
          }}
          className={` ${
            handleShowNavItems === true ? "flex" : "hidden"
          } absolute top-10 right-0 left-0 bg-[#ffffffe6] z-10 border-indigo-500 sm:hidden font-ubuntu w-full font-medium border-b shadow-md  justify-center items-center`}
        >
          <ul className=" w-full pt-2 pb-3">
            <li
              onClick={() => {
                setActiveState("home");
              }}
              className={`${
                activeState === "home"
                  ? "border-indigo-500"
                  : "border-transparent"
              } py-1 text-slate-500 text-center w-6/12 mx-auto border-b-2  hover:border-indigo-500 duration-300 hover:text-indigo-500`}
            >
              Home
            </li>
            <li
              onClick={() => {
                setActiveState("contact");
              }}
              className={`${
                activeState === "contact"
                  ? "border-indigo-500"
                  : "border-transparent"
              } py-1 text-slate-500  text-center w-6/12 mx-auto border-b-2 hover:border-indigo-500 duration-300 hover:text-indigo-500`}
            >
              Contact
            </li>
            <li
              onClick={() => {
                setActiveState("about");
              }}
              className={`${
                activeState === "about"
                  ? "border-indigo-500"
                  : "border-transparent"
              } py-1 text-slate-500  text-center w-6/12 mx-auto border-b-2  hover:border-indigo-500 duration-300 hover:text-indigo-500`}
            >
              About
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center sm:hidden">
          <FaBarsStaggered
            onClick={() => {
              SetHandleShowNavItems(!handleShowNavItems);
            }}
            className=" size-6 text-slate-400 hover:text-indigo-500 duration-200"
          />
        </div>
      </div>
    </div>
  );
}
