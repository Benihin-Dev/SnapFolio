import React from "react";
import { ExternalLink } from "lucide-react";
import { BiSolidLeaf } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useTempletCollections } from "./TempletCollectionsProvider";

export function TemplateCard({ name, title, img, desc }) {
  const { selectedTemplet, setSelectedTemplet } = useTempletCollections();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/preview/${name}`); // Navigate to the "/preview" route
  };
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img
          onClick={handleClick}
          src={img}
          alt={title}
          className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
        />

        <div className="absolute bottom-2   right-2 text-green-500 px-3 py-1 rounded-full flex items-center text-xs scale-in">
          <BiSolidLeaf className="h-4 w-4 mr-1" />
          Free
        </div>
      </div>
      <div className="px-4 pb-4 pt-1 border-t border-[#c6c6c675]">
        <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 italic">{desc}</p>
        <div className=" w-full">
          <button
            onClick={handleClick}
            className="flex-1 w-full bg-indigo-600 text-white px-4 py-1 text-sm rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
          >
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
}
