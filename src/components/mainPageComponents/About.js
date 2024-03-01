import React from "react";
import aboutimg from "../../img/about.gif";
import me from "../../img/me.png";

export default function About() {
  return (
    <div className=" w-full font-ubuntu px-5 sm:px-0 sm:w-9/12  mx-auto mt-20">
      <div className=" sm:flex pb-5 border-b">
        <div className=" sm:hidden sm:w-6/12 mt-auto">
          <img src={aboutimg} alt="" className="" />
        </div>
        <div className=" sm:w-7/12 pt-10 px-5 ">
          <span className=" justify-end  text-xl  leading-3">
            Welcome to my portfolio-building platform -{" "}
            <span className=" text-indigo-500">snapfolio</span>
            <br />
          </span>
          <p className=" mt-4 text-xs text-justify text-gray-700">
            I empower individuals to create personalized portfolios that truly
            reflect their unique talents and experiences. The user-friendly
            interface of my platform allows you to effortlessly select from a
            range of stylish templates, ensuring your portfolio matches your
            personality and professional goals. <br />
            <br />
            Simply input your information, and my platform will seamlessly
            integrate it into your chosen template, producing a polished
            portfolio ready to impress. Whether you're a freelancer, student, or
            job seeker, I'm here to help you showcase your skills and
            accomplishments in a compelling way. Join me and take the first step
            towards building your digital presence today.
          </p>
        </div>
        <div className="hidden sm:flex sm:w-5/12 mt-auto">
          <img src={aboutimg} alt="" className="" />
        </div>
      </div>
      <div className=" sm:flex py-8">
        <div className=" sm:w-7/12">
          <img src={me} alt="" className="  pr-32 pl-5 sm:px-20" />
        </div>
        <div className="sm:w-5/12 sm:px-0 px-5">
          <div className=" py-5">
            <span className="  text-indigo-500 text-3xl">Hello..</span>
          </div>

          <span className=" text-[16px]">I'm Benihin Mahendra,</span>
          <p className=" text-justify text-xs pt-2">
            undergraduate student at the University of Sri Jayewardenapura with
            a strong ambition to innovate and develop impactful software
            solutions. This portfolio-making web application is a result of my
            dedication and skills.
            <br /> I welcome any feedback or suggestions for improvement.
            Currently, the application offers free templates for creating
            portfolios. I invite you to explore the platform, create your
            portfolios, and experience the convenience it offers. <br />
            <br />
            Thank you for considering my work.
          </p>
        </div>
      </div>
    </div>
  );
}
