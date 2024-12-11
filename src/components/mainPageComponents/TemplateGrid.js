import React from 'react';
import { TemplateCard } from './TemplateCard';

const templates = [
  {
    title: "Modern Minimal",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800",
    isPremium: true,
    description: "Clean and minimal design perfect for developers"
  },
  {
    title: "Creative Portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    isPremium: true,
    description: "Showcase your creative work with style"
  },
  {
    title: "Developer Basic",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800",
    isPremium: false,
    description: "Simple and effective developer portfolio"
  },
  {
    title: "Professional Resume",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800",
    isPremium: false,
    description: "Traditional resume-style portfolio"
  }
];

export function TemplateGrid() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Template</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from our collection of professionally designed templates to create your perfect portfolio
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Premium Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates
              .filter(template => template.isPremium)
              .map((template, index) => (
                <TemplateCard key={index} {...template} />
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Free Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates
              .filter(template => !template.isPremium)
              .map((template, index) => (
                <TemplateCard key={index} {...template} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}