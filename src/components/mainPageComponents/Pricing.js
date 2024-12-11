import React from "react";
import { PricingTier } from "./PricingTier";

export function Pricing() {
  const pricingTiers = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for getting started with your portfolio",
      features: [
        { text: "10 Basic Templates", included: true },
        { text: "Custom Domain Support", included: false },
        { text: "Analytics Dashboard", included: false },
        { text: "SEO Optimization", included: false },
        { text: "Priority Support", included: false },
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$9",
      description: "Everything you need for a professional portfolio",
      features: [
        { text: "All Free Templates", included: true },
        { text: "10 Premium Templates", included: true },
        { text: "Custom Domain Support", included: true },
        { text: "Analytics Dashboard", included: true },
        { text: "Priority Support", included: false },
      ],
      buttonText: "Upgrade to Pro",
      highlighted: true,
      comingSoon: true,
    },
    {
      name: "Enterprise",
      price: "$29",
      description: "Advanced features for professional developers",
      features: [
        { text: "All Pro Templates", included: true },
        { text: "Custom Domain Support", included: true },
        { text: "Analytics Dashboard", included: true },
        { text: "SEO Optimization", included: true },
        { text: "Priority Support", included: true },
      ],
      buttonText: "Contact Sales",
      comingSoon: true,
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include access to
            our template editor and hosting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution?{" "}
            <a
              href="#contact"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
