import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMainPageData } from "./MainPageDataProvider";
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
import { GoHome } from "react-icons/go";
import { useTempletCollections } from "./TempletCollectionsProvider";
const PortfolioPreviewSection = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const { activeState, setActiveState } = useMainPageData();
  const { setSelectedTemplet } = useTempletCollections();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setSelectedTemplet(id);
    }
  }, [id]);

  return (
    <div className="relative">
      {/* Render the selected template */}
      {id === "blue" && <Blue />}
      {id === "pink" && <Pink />}
      {id === "green" && <Green />}
      {id === "purple" && <Purple />}
      {id === "yellow" && <Yellow />}
      {id === "pinkDark" && <PinkDark />}
      {id === "blueDark" && <BlueDark />}
      {id === "greenDark" && <GreenDark />}
      {id === "whiteDark" && <WhiteDark />}
      {id === "yellowDark" && <YellowDark />}

      {/* Fixed navigation and actions */}
      <div className="fixed z-50 top-[15%] sm:top-[15%] w-full">
        <div className="w-10/12 mx-auto sm:w-9/12 flex gap-1 text-white text-sm">
          {/* Home Button */}
          <Link to="/">
            <div className="   bg-white   rounded-sm flex justify-center items-center px-3 py-1  text-blue-500   duration-300">
              <GoHome className="text-gray-500 cursor-pointer size-5" />
            </div>
          </Link>

          {/* Action Button */}
          <button
            className="   rounded-sm px-3 py-1 bg-indigo-500 hover:bg-indigo-700 duration-300"
            onClick={() => {
              navigate("/form");
            }}
          >
            Make Your Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreviewSection;
