import React, {useState, useEffect} from "react";
import { useUserInfoCollections } from "../UserInfoProvider";
import { MdKeyboardBackspace } from "react-icons/md";


export default function Form_ExperienceSection() {
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp, i) =>
        i === index ? { ...exp, [name]: value } : exp
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    setCurrentForm("contactSection");
  };

  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className={` ${isMounted ? "slide-in5" : ""} opacity-0 w-full`}
    >
      <div className="border p-5 mb-8 border-[#dec9ff5f] shadow-[#eeeeee57] shadow rounded relative">
        <h1 className=" absolute top-[-12px] text-sm bg-white text-gray-300">
          Experience Details
        </h1>
        <div className=" mb-3">
          <label htmlFor="Experience" className="block text-sm  text-gray-500">
            Work Experience Title*
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Software Developer"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="Experience" className="block text-sm  text-gray-500">
            Year of Experience*
          </label>
          <input
            name="year"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="2021-2023"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Experience*
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className="mx-auto border-indigo-200 border-b mt-7 w-3/5 shadow"></div>

        <div className="mt-5 mb-3">
          <label htmlFor="Experience" className="block text-sm  text-gray-500">
            Work Experience Title*
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Network Security"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="Experience" className="block text-sm  text-gray-500">
            Year of Experience*
          </label>
          <input
            name="year"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="2005-2013"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Experience*
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className="mx-auto border-indigo-200 border-b mt-7 w-3/5 shadow"></div>

        <div className="mt-5 mb-3">
          <label htmlFor="Experience" className="block text-sm  text-gray-500">
            Work Experience Title*
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Network Security"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="Experience" className="block text-sm  text-gray-500">
            Year of Experience*
          </label>
          <input
            name="year"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="2005-2013"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Experience*
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className="mx-auto border-indigo-200 border-b mt-7 w-3/5 shadow"></div>

        <div className="mt-5 mb-3">
          <label htmlFor="Experience" className="block text-sm  text-gray-500">
            Work Experience Title
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Mobile Appication Developer"
            autoComplete="name"
            onChange={(e) => handleChange(e, 3)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="Experience" className="block text-sm  text-gray-500">
            Year of Experience
          </label>
          <input
            name="year"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="2015-2023"
            autoComplete="name"
            onChange={(e) => handleChange(e, 3)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Experience
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            onChange={(e) => handleChange(e, 3)}
          />
        </div>
        <div className="w-full flex justify-end">
        <div
                onClick={() => {
                  setCurrentForm("projectSection");
                }}
                className="mt-2 cursor-pointer flex justify-center items-center bg-slate-100 border border-gray-00 hover:border-gray-600 rounded px-3"
              >
                <MdKeyboardBackspace />
              </div>
          <button className="py-1 mt-2 w-full border border-indigo-400 text-white hover:bg-indigo-700 bg-indigo-500 rounded px-8 ">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}
