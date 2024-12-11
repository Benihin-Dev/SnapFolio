import React from "react";
import { IoArrowForward } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r  pt-20 from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center fade-in cursor-default">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
            Create Your Professional Portfolio in Minutes
          </h1>
          <p
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Choose from our collection of beautiful templates and customize them
            to showcase your work. No coding required.
          </p>
          <div
            className="flex justify-center space-x-4 slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a href="#templates">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-100 flex items-center hover-lift transition-all duration-300">
                Get Started <IoArrowForward className="ml-2  size-5" />
              </button> 
            </a>
            <a href="#templates">
              <button className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 hover-lift transition-all duration-300">
                View Templates
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
