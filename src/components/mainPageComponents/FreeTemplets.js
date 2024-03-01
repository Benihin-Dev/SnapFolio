import React, { useState, useEffect } from "react";
import { useTempletCollections } from "./TempletCollectionsProvider";

export default function FreeTemplets() {
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

  const handleSelectedTemplet = (event) => {
    const itemName = event.currentTarget.getAttribute("name");
    setSelectedTemplet(itemName);
    setHomeActiveComponent("templetSelected");
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
      } opacity-0 grid grid-cols-2 sm:grid-cols-3 gap-5  md:gap-4 lg:gap-6 pb-40`}
    >
      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="purple"
        className=" text-center border rounded-lg  overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={purple[0]}
          alt=""
          className="border-2   duration-300 border-purple-400 hover:border-purple-800"
        />
      </div>
      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="whiteDark"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={whiteDark[0]}
          alt=""
          className="border-2   duration-300 border-gray-400 hover:border-gray-600"
        />
      </div>
      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="blueDark"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={blueDark[0]}
          alt=""
          className="border-2   duration-300 border-blue-400 hover:border-blue-700"
        />
      </div>
      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="yellow"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={yellow[0]}
          alt=""
          className="border-2   duration-300 border-yellow-300 hover:border-yellow-500"
        />
      </div>

      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="blue"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={blue[0]}
          alt=""
          className="border-2   duration-300 border-blue-400 hover:border-blue-600"
        />
      </div>
      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="pinkDark"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={pinkDark[0]}
          alt=""
          className="border-2   duration-300 border-pink-400 hover:border-pink-600"
        />
      </div>
      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="yellowDark"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={yellowDark[0]}
          alt=""
          className="border-2   duration-300 border-yellow-300 hover:border-yellow-500"
        />
      </div>
      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="green"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={green[0]}
          alt=""
          className="border-2   duration-300 border-green-400 hover:border-green-600"
        />
      </div>

      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="pink"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={pink[0]}
          alt=""
          className="border-2   duration-300 border-pink-400 hover:border-pink-600"
        />
      </div>
      <div
        onClick={(event) => {
          handleSelectedTemplet(event);
        }}
        name="greenDark"
        className=" text-center border rounded-lg overflow-hidden hover:shadow-lg shadow border-[#0f387e4b] relative flex   "
      >
        <img
          src={greenDark[0]}
          alt=""
          className="border-2   duration-300 border-green-400 hover:border-green-600"
        />
      </div>
      <div className=" rounded-lg hover:shadow-lg justify-center items-center border h-28 sm:h-full shadow border-[#0f387e4b]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templete is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded-lg hover:shadow-lg justify-center items-center border h-28 sm:h-full shadow border-[#0f387e4b]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templete is under development</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
