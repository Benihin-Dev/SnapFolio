import React, { useState, useEffect } from "react";
import { useTempletCollections } from "../TempletCollectionsProvider";
import { useUserInfoCollections } from "../UserInfoProvider";
import { FaRegCopy } from "react-icons/fa";
import clipboardy from "clipboardy";
import { useNavigate } from "react-router-dom";

export default function FinalLinkProviderComponent() {
  const { selectedTemplet } = useTempletCollections();
  const [copyIconColour, setcopyIconColour] = useState("text-indigo-600 ");
  const { setCurrentForm, userData } = useUserInfoCollections();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  const navigate = useNavigate();

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={` ${isMounted ? "slide-in5" : ""} opacity-0 w-full`}
      >
        <div className="border p-5 mb-2 border-[#dec9ff5f] shadow-[#8d8d8d] shadow rounded relative">
          <div className=" mb-3 relative">
            <p className=" my-5 text-indigo-500 text-xl">
              Congratulation, Your Portfolio website has been created
              Successfully!..
            </p>
            <label htmlFor="contact" className="block text-sm  text-gray-500">
              Your Portfolio Link
            </label>
            <div className=" flex justify-center items-center">
              <input
                name="email"
                type="text"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
                autoComplete="name"
                readOnly
                value={`https://snap-folio.vercel.app/${selectedTemplet}/${userData.about.userid}`}
              />
              <FaRegCopy
                onClick={() => {
                  const linkToCopy = `https://snap-folio.vercel.app/${selectedTemplet}/${userData.about.userid}`;
                  clipboardy
                    .write(linkToCopy)
                    .then(() => {
                      setcopyIconColour(" text-indigo-300");
                    })
                    .catch((error) => {
                      console.error("Error copying link:", error);
                      alert("Failed to copy link. Please try again.");
                    });
                }}
                className={`${copyIconColour} py-1 px-1 size-8`}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="  w-full">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-indigo-600 text-white text-sm px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </>
  );
}
