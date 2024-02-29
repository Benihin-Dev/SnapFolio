import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

export default function LinkProvideSection() {
  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      <div
        className={` ${
          isMounted ? "slide-in5" : ""
        } opacity-0 size-32 circleLoading mx-auto rounded-full  relative`}
      >
        <div className="absolute size-32 top-[-6px] left-[-6px]  circleLoading2 mx-auto rounded-full"></div>
      </div>
      <div className="  w-full mx-auto text-center mt-20">
        <p className=" text-gray-700">Please Wait..</p>
        <p className=" mt-10 text-indigo-500">
          <ReactTyped
            strings={[" Your Protfolio is in a Developing Stage.."]}
            typeSpeed={100}
            backSpeed={40}
            loop
          />
        </p>
        <p className=" text-indigo-300">It's take few minutes</p>
      </div>
    </div>
  );
}
