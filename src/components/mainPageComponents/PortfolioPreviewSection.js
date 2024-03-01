import React, { useState } from "react";
import { useMainPageData } from "./MainPageDataProvider";
import { useTempletCollections } from "./TempletCollectionsProvider";
import PinkDark from "../portfolioComponents/pinkDarkComponents/pinkDarkMainPage";
import Blue from "../portfolioComponents/blueComponents/BlueMainPage";
import Pink from "../portfolioComponents/pinkComponents/PinkMainPage";
import Green from "../portfolioComponents/greenComponents/GreenMainPage";
import BlueDark from "../portfolioComponents/blueDarkComponents/BlueDarkMainPage";
import GreenDark from "../portfolioComponents/greenDarkComponents/GreenDarkMainPage";
import WhiteDark from "../portfolioComponents/whiteDarkComponents/WhiteDarkMainPage";
import YellowDark from "../portfolioComponents/yellowDarkComponents/YellowDarkMainPage";
import Yellow from "../portfolioComponents/yellowComponents/YellowMainPage";
import Purple from "../portfolioComponents/purpleComponents/PurpleMainPage";
import { MdKeyboardBackspace } from "react-icons/md";

export default function PortfolioPreviewSection() {
  const { activeState, setActiveState } = useMainPageData();
  const { selectedTemplet } = useTempletCollections();

  return (
    <div className=" relative">
      {selectedTemplet === "blue" && <Blue />}
      {selectedTemplet === "pink" && <Pink />}
      {selectedTemplet === "green" && <Green />}
      {selectedTemplet === "purple" && <Purple />}
      {selectedTemplet === "yellow" && <Yellow />}
      {selectedTemplet === "pinkDark" && <PinkDark />}
      {selectedTemplet === "blueDark" && <BlueDark />}
      {selectedTemplet === "greenDark" && <GreenDark />}
      {selectedTemplet === "whiteDark" && <WhiteDark />}
      {selectedTemplet === "yellowDark" && <YellowDark />}

      <div className=" fixed z-50 top-[20%]  sm:top-[15%]  w-full">
        <div className="w-10/12 mx-auto sm:w-9/12 flex text-white text-sm">
          <div
            className="w-1/6 sm:w-1/12 border-l bg-white border-gray-300 rounded-sm flex justify-center items-center px-3 border-r py-[6px] text-blue-500 border hover:border-gray-400 duration-300 duration-400"
            onClick={() => {
              setActiveState("home");
            }}
          >
            <MdKeyboardBackspace className=" size-5" />
          </div>
          <button
            className="  w-5/6 sm:w-3/12 border-gray-200 border rounded-sm px-3 py-1 bg-indigo-500 hover:bg-indigo-700 duration-300"
            onClick={() => {
              setActiveState("form");
            }}
          >
            Make Your Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
