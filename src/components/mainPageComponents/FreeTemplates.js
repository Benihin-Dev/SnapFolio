import React, { useContext, useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import { TemplateCard } from "./TemplateCard";
import { useTempletCollections } from "./TempletCollectionsProvider";

export function FreeTemplates() {
  const { templateDetails } = useTempletCollections();

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  // Use shuffled data
  const shuffledTemplates = shuffleArray(templateDetails);

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="py-16 bg-gray-50" id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Free Templates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start building your portfolio today with our collection of free,
            professionally designed templates
          </p>
        </div>

        <div className="template-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledTemplates.map((template, index) =>
            showAll || index < 3 ? (
              <TemplateCard key={index} {...template} />
            ) : null
          )}
        </div>
        <div className=" w-full flex items-center justify-end mt-5">
          <button
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="hover:bg-indigo-600 group flex items-center justify-center whitespace-nowrap hover:text-white pl-6 py-1 duration-300  text-indigo-600 rounded-md  border border-indigo-500 transition-all"
          >
            {!showAll ? "Find " : "Hide "}More Templates
            <IoArrowForward
              className={` ml-2 mr-6  transition-all duration-300 group-hover:mr-4 group-hover:ml-4 size-5 ${
                !showAll ? " " : " rotate-180"
              } `}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
