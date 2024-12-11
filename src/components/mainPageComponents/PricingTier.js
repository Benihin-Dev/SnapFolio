import React from "react";
import { Check } from "lucide-react";

export function PricingTier({
  name,
  price,
  description,
  features,
  buttonText,
  highlighted = false,
  comingSoon = false,
}) {
  return (
    <div
      className={`rounded-lg p-8 transition-all duration-500 hover:shadow-xl ${
        highlighted
          ? "bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-xl scale-105 z-10"
          : "bg-white text-gray-900 hover:-translate-y-2"
      }`}
    >
      <div className="text-center scale-in">
        <h3
          className={`text-xl font-semibold mb-2 ${
            highlighted ? "text-white" : "text-gray-900"
          }`}
        >
          {name}
        </h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-sm">/month</span>}
        </div>
        <p
          className={`mb-6 ${
            highlighted ? "text-indigo-100" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Check
              className={`h-5 w-5 mr-3 transition-colors duration-300 ${
                feature.included
                  ? highlighted
                    ? "text-indigo-200"
                    : "text-indigo-600"
                  : "text-gray-300"
              }`}
            />
            <span
              className={
                feature.included
                  ? ""
                  : highlighted
                  ? "text-indigo-200"
                  : "text-gray-400"
              }
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-md font-medium transition-all duration-300 ${
          highlighted
            ? "bg-white text-indigo-600 hover:bg-indigo-50"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        } ${comingSoon ? "opacity-50 cursor-not-allowed" : "hover-lift"}`}
        disabled={comingSoon}
      >
        {comingSoon ? "Coming Soon" : buttonText}
      </button>
    </div>
  );
}
