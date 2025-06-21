"use client"
import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import SectionBackground from './SectionBackground';

const Progress = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      id: 1,
      name: "Next.js",
      projects: 2,
      category: "Framework",
      color: "from-gray-700 to-black",
      borderColor: "border-gray-500",
      position: { x: 20, y: 30 },
      description: "Used in Polyverse and Portfolio"
    },
    {
      id: 2,
      name: "React",
      projects: 1,
      category: "Library",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-400",
      position: { x: 50, y: 20 },
      description: "Used in OptiFlow"
    },
    {
      id: 3,
      name: "Tailwind CSS",
      projects: 2,
      category: "Styling",
      color: "from-teal-500 to-cyan-600",
      borderColor: "border-teal-400",
      position: { x: 75, y: 35 },
      description: "Used in Polyverse and Portfolio"
    },
    {
      id: 4,
      name: "Three.js",
      projects: 1,
      category: "3D Graphics",
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-400",
      position: { x: 80, y: 65 },
      description: "Used in OptiFlow"
    },
    {
      id: 5,
      name: "Express.js",
      projects: 1,
      category: "Backend",
      color: "from-green-600 to-emerald-600",
      borderColor: "border-green-400",
      position: { x: 25, y: 70 },
      description: "Used in Elara Regency"
    },
    {
      id: 6,
      name: "Node.js",
      projects: 1,
      category: "Runtime",
      color: "from-green-500 to-lime-500",
      borderColor: "border-green-400",
      position: { x: 45, y: 60 },
      description: "Used in Digital Clock & Weather App"
    },
    {
      id: 7,
      name: "Databases",
      projects: 3,
      category: "Database",
      color: "from-green-700 to-green-800",
      borderColor: "border-green-500",
      position: { x: 15, y: 50 },
      description: "MongoDB Atlas used in Elara Regency & Polyverse, Firebase used in OptiFlow"
    },
    {
      id: 8,
      name: "APIs",
      projects: 3,
      category: "API",
      color: "from-sky-500 to-indigo-500",
      borderColor: "border-sky-400",
      position: { x: 55, y: 50 },
      description: "OpenWeatherAPI (Digital Clock), LibreTranslate API (Polyverse), EmailJS (Portfolio)"
    },
    {
      id: 9,
      name: "Coding",
      projects: 2,
      category: "Skill",
      color: "from-indigo-500 to-purple-600",
      borderColor: "border-indigo-400",
      position: { x: 70, y: 20 },
      description: "Java used in PMS, C++ used in LMS"
    }
  ];

  const totalProjects = techStack.reduce((sum, tech) => sum + tech.projects, 0);

  return (
    <section
      id="stack-utilization"
      className="scroll-mt-24 pt-10 min-h-[60vh] py-20 px-6 bg-black/90 relative overflow-hidden"
    >
      <SectionBackground/>
      <div className="max-w-5xl mx-auto text-white">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3"> 
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-fade-in inline-flex items-center justify-center gap-3">
            <Layers className="h-8 w-8 text-pink-300" />
            Stack Utilization
          </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Technologies used across my real-world projects
            </p>
        </div>

        {/* Tech Visualization */}
        <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl border border-gray-800 p-6 mb-6 overflow-visible z-10">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative h-80 z-10">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="20%" y1="30%" x2="50%" y2="20%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="50%" y1="20%" x2="75%" y2="35%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="75%" y1="35%" x2="80%" y2="65%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="15%" y1="50%" x2="25%" y2="70%" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="25%" y1="70%" x2="45%" y2="60%" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="45%" y1="60%" x2="65%" y2="75%" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
            </svg>

            {techStack.map((tech) => (
              <div
                key={tech.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                style={{ left: `${tech.position.x}%`, top: `${tech.position.y}%` }}
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 border-2 ${tech.borderColor}`}>
                  <div className="text-center">
                    <div className="text-xs font-bold text-white leading-tight truncate max-w-[3.5rem]">
                      {tech.name.length > 8 ? tech.name.split(/[.\s]/)[0] : tech.name}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-gray-900">
                    {tech.projects}
                  </div>
                </div>

                {hoveredTech === tech.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 z-30 animate-in fade-in duration-200">
                    <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-xl whitespace-nowrap">
                      <h3 className="font-bold text-white text-sm">{tech.name}</h3>
                      <p className="text-gray-300 text-xs mb-1">{tech.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-blue-400">{tech.category}</span>
                        <span className="text-green-400">{tech.projects} project{tech.projects > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
