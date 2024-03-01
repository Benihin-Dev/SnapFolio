import React, { useState, useEffect } from "react";
import { useMainPageData } from "./MainPageDataProvider";
import { useTempletCollections } from "./TempletCollectionsProvider";

import FreeTemplets from "./FreeTemplets";
import PremiumTemplets from "./PremiumTemplets";
import ShowSelectedTemplet from "./ShowSelectedTemplet";

export default function HomePage() {
  const { activeState, setActiveState } = useMainPageData();
  const {
    homeActiveComponent,
    setHomeActiveComponent,
    selectedTemplet,
    setSelectedTemplet,
  } = useTempletCollections();

  const [isHover, setIsHover] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  // console.log(previewMood);

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="mx-auto px-3 sm:px-5 overflow-hidden h-screen pt-20 sm:w-9/12  relative">
      <ul
        className={`${
          homeActiveComponent === "templetSelected" ? "hidden" : ""
        } flex  font-ubuntu`}
      >
        <li
          onClick={() => {
            setHomeActiveComponent("free");
          }}
          className={`${
            homeActiveComponent === "free"
              ? "bg-indigo-400 border text-white"
              : "text-[#063991]"
          } border rounded-full cursor-pointer border-[#ffffff9c] py-[2px]  px-8  hover:border-[#6994e0e1] duration-300`}
        >
          Free
        </li>
        <li
          onClick={() => {
            setHomeActiveComponent("premium");
          }}
          className={`${
            homeActiveComponent === "premium"
              ? "bg-orange-400 text-white  border"
              : ""
          } border rounded-full py-[2px] cursor-pointer border-[#ffffff9c]  px-8  text-orange-400 hover:border-orange-400 duration-300`}
        >
          Premium
        </li>
      </ul>
      <div
        className={`${
          homeActiveComponent === "free"
            ? "pt-8 border-t"
            : homeActiveComponent === "premium"
            ? "pt-8 border-t"
            : ""
        }    h-screen scrollbarSize backdrop-blur-[3px] overflow-auto relative `}
      >
        {homeActiveComponent === "free" ? (
          <FreeTemplets />
        ) : homeActiveComponent === "premium" ? (
          <PremiumTemplets />
        ) : homeActiveComponent === "templetSelected" ? (
          <ShowSelectedTemplet />
        ) : (
          ""
        )}
      </div>
      <div className="bgimg h-screen w-screen top-0 left-0  "></div>
    </div>
  );
}
