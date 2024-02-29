import React, { useState, useEffect } from "react";

export default function PremiumTemplets() {
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
      } opacity-0 grid grid-cols-2 sm:grid-cols-3 gap-5  md:gap-10 pb-40`}
    >
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
      <div className=" rounded hover:shadow-lg justify-center items-center border h-28 sm:h-40 shadow border-[#234f9a69]  bg-[#ffffffc6] relative flex   ">
        <div className=" w-3/4 ">
          <div className=" w-7 h-4 justify-center mx-auto  loadingParent flex items-center">
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
            <div className=" w-2 border border-white bg-gray-300 loadingChild"></div>
          </div>
          <div className=" text-center text-[8px] mt-1 leading-3  text-gray-400">
            <h1>Templet is under development</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
