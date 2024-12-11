import React, { useState, useEffect } from "react";
import { useUserInfoCollections } from "./UserInfoProvider";
import formImg from "../../img/form.png";
import formWelcomeImg from "../../img/formWelcomeImg.png";
import Form_UserID from "./formComponents/Form_UserID";
import Form_AboutSection from "./formComponents/Form_AboutSection";
import Form_EducationSection from "./formComponents/Form_EducationSection";
import Form_SkillsSection from "./formComponents/Form_SkillsSection";
import Form_ProjectsSection from "./formComponents/Form_ProjectsSection";
import Form_ExperienceSection from "./formComponents/Form_ExperienceSection";
import Form_ContactSection from "./formComponents/Form_ContactSection";
import Form_ProfilePic from "./formComponents/Form_ProfilePic";
import NavBar from "./NavBar";
import { Footer } from "./Footer";

export default function UserDetailsForm() {
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();
  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <NavBar />
      <div
        className={` ${
          isMounted ? "slide-in5" : ""
        } opacity-0 sm:w-11/12 md:w-4/5 mx-auto sm:pt-5 h-full relative font-ubuntu `}
      >
        <div className="flex   w-11/12 mx-auto pb-6 overflow-hidden ">
          <div className="w-full   py-5 mt-20 overflow-y-scroll lg:ml-10 shadow-indigo-200 relative scrollbarSize">
            <h1
              className={` ${
                currentForm === "welcomePara"
                  ? "text-transparent"
                  : currentForm === "idSection"
                  ? "text-transparent"
                  : currentForm === "finalSection"
                  ? "text-transparent"
                  : "text-black"
              }  text-xl sm:text-2xl w-full font-light text-center pb-10`}
            >
              Fill all infromation below for your Portfolio
            </h1>
            <div className=" py-5  mx-auto sm:w-10/12 lg:w-8/12 md:w-9/12 ">
              {currentForm === "welcomePara" ? (
                <div className="px-5 flex justify-center items-end mb-20">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xl  text-gray-700"
                    >
                      <span className=" text-7xl text-indigo-500">
                        {" "}
                        Welcome!.
                      </span>{" "}
                      <br />
                      Start making your portfolio here. <br />
                      <span className=" text-slate-400">
                        {" "}
                        please provide all information based on the instructions
                      </span>
                    </label>
                    <div className="w-full flex justify-end">
                      <button
                        onClick={() => {
                          setCurrentForm("idSection");
                        }}
                        className="py-1 mt-5 border duration-300 text-gray-600 border-indigo-400 hover:text-white hover:bg-indigo-500 rounded-2xl px-10 "
                      >
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              ) : currentForm === "idSection" ? (
                <Form_UserID />
              ) : currentForm === "aboutSection" ? (
                <Form_AboutSection />
              ) : currentForm === "profileSection" ? (
                <Form_ProfilePic />
              ) : currentForm === "educationSection" ? (
                <Form_EducationSection />
              ) : currentForm === "skillsSection" ? (
                <Form_SkillsSection />
              ) : currentForm === "projectSection" ? (
                <Form_ProjectsSection />
              ) : currentForm === "experienceSection" ? (
                <Form_ExperienceSection />
              ) : currentForm === "contactSection" ? (
                <Form_ContactSection />
              ) : currentForm === "finalSection" ? (
                <Form_ContactSection />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
