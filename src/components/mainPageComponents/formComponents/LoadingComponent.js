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
        } opacity-0 size-32  mx-auto rounded-full  relative`}
      >
        <img
          src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif"
          alt="loading"
          className=" "
        />
      </div>
      <div className="  w-full mx-auto text-center mt-[60px]">
        <p className=" text-gray-700">Please Wait..</p>
        <p className=" mt-8 text-indigo-500">
          Your Protfolio is in a Developing Stage..
        </p>
        <p className=" text-indigo-300">It's take few minutes</p>
      </div>
    </div>
  );
}
