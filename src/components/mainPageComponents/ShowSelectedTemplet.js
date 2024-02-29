import React, { useState, useEffect } from "react";
import { useMainPageData } from "./MainPageDataProvider";
import { useTempletCollections } from "./TempletCollectionsProvider";

import { MdKeyboardBackspace } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { ImMobile } from "react-icons/im";
import { CiGrid32 } from "react-icons/ci";

export default function ShowSelectedTemplet() {
  const { activeState, setActiveState } = useMainPageData();

  const {
    blue,
    green,
    purple,
    yellow,
    pink,
    pinkDark,
    yellowDark,
    greenDark,
    blueDark,
    whiteDark,
    homeActiveComponent,
    setHomeActiveComponent,
    selectedTemplet,
    setSelectedTemplet,
  } = useTempletCollections();

  const picsLookup = {
    blue: blue,
    green: green,
    purple: purple,
    yellow: yellow,
    pink: pink,
    pinkDark: pinkDark,
    yellowDark: yellowDark,
    greenDark: greenDark,
    blueDark: blueDark,
    whiteDark: whiteDark,
  };

  const pics = picsLookup[selectedTemplet] || null;

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
      } opacity-0 w-full lg:w-9/12 mx-auto sm:mt-5 sm:w-11/12 sm:flex shadow rounded relative`}
    >
      <div className="rounded  pb-0 pt-0 mb-0 sm:w-9/12 lg:  mx-auto font-ubuntu ">
        <div className=" w-10/12 ">
          <MdKeyboardBackspace
            onClick={() => {
              setHomeActiveComponent("free");
            }}
            className="size-7 w-16 text-gray-500 border mb-2 hover:border-blue-400 rounded shadow px-3 py-1 "
          />
        </div>
        <div className="w-full px-0 overflow-hidden">
          <div className=" ">
            <div
              onClick={() => {
                setActiveState("review");
              }}
              className="flex relative imageShowParent"
            >
              <img
                src={pics[1]}
                alt=""
                className="border sm:hidden flex  w-full  border-gray-400 hover:border-gray-700"
              />
              <img
                src={pics[0]}
                alt=""
                className="border hidden  sm:block  hover:border-gray-700  h-full border-gray-400"
              />
              <img
                src={pics[1]}
                alt=""
                className="imageShowChild hidden opacity-50 sm:block border absolute top-0 right-[-14vw] h-[23.8vw] border-gray-400 hover:border-black"
              />
            </div>
          </div>
        </div>
        <div className="mt-1 mb-32 sm:mb-0">
          <div
            onClick={() => {
              setActiveState("review");
            }}
            className="flex gap-5 justify-center mb-1 items-center w-full mx-auto rounded bg-indigo-200 hover:bg-indigo-300 text-blue-800 py-1 border"
          >
            <CiGrid32 className="size-5 font-bold " />
            <button className=" ">Preview</button>
          </div>

          <div
            onClick={() => {
              setActiveState("form");
            }}
            className="flex gap-5 justify-center items-center w-full mx-auto rounded bg-blue-500 hover:bg-blue-600 text-white py-1 border"
          >
            <button className=" ">Make a Protfolio</button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block sm:w-3/12 mt-9 "></div>
      <div className=" absolute scrollbarSize3 overflow-auto hidden sm:block  h-[87.5%] top-0 sm:w-3/12 right-0  mt-9">
        <div className=" space-y-1">
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("blue");
              }}
              src={blue[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("pinkDark");
              }}
              src={pinkDark[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("purple");
              }}
              src={purple[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("yellowDark");
              }}
              src={yellowDark[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("greenDark");
              }}
              src={greenDark[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("pink");
              }}
              src={pink[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("whiteDark");
              }}
              src={whiteDark[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("green");
              }}
              src={green[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("blueDark");
              }}
              src={blueDark[0]}
              alt=""
            />
          </div>
          <div className=" w-11/12 mx-auto border hover:shadow-md shadow border-gray-300 hover:border-blue-500">
            <img
              onClick={() => {
                setSelectedTemplet("yellow");
              }}
              src={yellow[0]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
