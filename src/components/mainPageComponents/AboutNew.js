import React from "react";
import { Code, Database, Globe, Cpu, BookOpen, Coffee } from "lucide-react";

export function AboutNew() {
  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      name: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      name: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      name: "Full Stack",
      items: ["MERN Stack", "Full Stack Development", "API Integration"],
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I empower individuals to create personalized portfolios that truly
            reflect their unique talents and experiences. The user-friendly
            interface of my platform allows you to effortlessly select from a
            range of stylish templates, ensuring your portfolio matches your
            personality and professional goals.
            <br /> Simply input your information, and my platform will
            seamlessly integrate it into your chosen template, producing a
            polished portfolio ready to impress. Whether you're a freelancer,
            student, or job seeker, I'm here to help you showcase your skills
            and accomplishments in a compelling way. Join me and take the first
            step towards building your digital presence today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 text-indigo-600 mb-4">
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <Coffee className="h-4 w-4 mr-2 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Education & Experience
          </h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  Final Year Software Engineering Student
                </h4>
                <p className="text-gray-600">
                  Focusing on modern web technologies and full-stack development
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Cpu className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Full Stack Developer</h4>
                <p className="text-gray-600">
                  Experience with MERN stack and Next.js development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
