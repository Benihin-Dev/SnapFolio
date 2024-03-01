import React, { useState, useEffect } from "react";
import { useUserInfoCollections } from "../UserInfoProvider";
import { MdKeyboardBackspace } from "react-icons/md";

export default function Form_EducationSection() {
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      eduSkills: {
        ...prevData.eduSkills,
        education: prevData.eduSkills.education.map((edu, i) =>
          i === index ? { ...edu, [name]: value } : edu
        ),
      },
    }));
  };
  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    setCurrentForm("skillsSection");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={` ${isMounted ? "slide-in5" : ""} opacity-0 w-full`}
    >
      <div className="border p-5 mb-8 border-[#dec9ff5f] shadow-[#eeeeee57] shadow rounded relative">
        <h1 className=" absolute top-[-12px] text-sm bg-white text-gray-300">
          Education Section
        </h1>
        <div className=" mb-3">
          <label htmlFor="eduTitle" className="block text-sm  text-gray-500">
            Education Title*
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Bachelor of Science in Computer Science"
            autoComplete="name"
            onChange={(e) => handleChange(e, 0)}
            required
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="place" className="block text-sm text-gray-500">
            School / University Name with Year*
          </label>
          <input
            name="place"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="University of Mars, 2014-2018"
            autoComplete="name"
            onChange={(e) => handleChange(e, 0)}
            required
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Education*
          </label>
          <textarea
            rows={3}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 15 words"
            autoComplete="name"
            onChange={(e) => handleChange(e, 0)}
            required
          />
        </div>
        <div className="mt-10 mb-3">
          <label htmlFor="eduTitle" className="block text-sm  text-gray-500">
            Education Title
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Bachelor of Science in Computer Science"
            autoComplete="name"
            onChange={(e) => handleChange(e, 1)}
            required
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="place" className="block text-sm text-gray-500">
            School / University Name with Year*
          </label>
          <input
            name="place"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="University of Mars, 2014-2018"
            autoComplete="name"
            onChange={(e) => handleChange(e, 1)}
            required
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Education*
          </label>
          <textarea
            rows={3}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 15 words"
            autoComplete="name"
            onChange={(e) => handleChange(e, 1)}
            required
          />
        </div>
        <div className="mt-10 mb-3">
          <label htmlFor="eduTitle" className="block text-sm  text-gray-500">
            Education Title
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Bachelor of Science in Computer Science"
            autoComplete="name"
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="place" className="block text-sm text-gray-500">
            School / University Name with Year
          </label>
          <input
            name="place"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="University of Mars, 2014-2018"
            autoComplete="name"
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Education
          </label>
          <textarea
            rows={3}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 15 words"
            autoComplete="name"
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className="w-full flex justify-end">
          <div
            onClick={() => {
              setCurrentForm("profileSection");
            }}
            className="mt-2 cursor-pointer flex justify-center items-center bg-slate-100 border border-gray-00 hover:border-gray-600 rounded px-3"
          >
            <MdKeyboardBackspace />
          </div>
          <button className="py-1 mt-2 w-full border border-indigo-400 text-white hover:bg-indigo-700 bg-indigo-500 rounded px-8 ">
            Next
          </button>
        </div>{" "}
      </div>
    </form>
  );
}
