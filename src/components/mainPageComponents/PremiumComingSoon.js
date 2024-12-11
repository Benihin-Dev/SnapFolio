import React from "react";
import { Construction, Star } from "lucide-react";

export function PremiumComingSoon() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg">
      <div className="max-w-2xl mx-auto fade-in">
        <div className="flex justify-center mb-6 animate-bounce">
          <Construction className="h-16 w-16 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 slide-up">
          Premium Templates Coming Soon!
        </h3>
        <p
          className="text-gray-600 mb-6 slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          We're crafting exceptional premium templates that will help you stand
          out. Join our waitlist to be the first to know when they launch!
        </p>
        <div
          className="flex flex-col items-center space-y-4 slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center space-x-2 text-yellow-600">
            <Star className="h-5 w-5 fill-current animate-pulse" />
            <Star
              className="h-5 w-5 fill-current animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <Star
              className="h-5 w-5 fill-current animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 hover-lift">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
