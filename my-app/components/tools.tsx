"use client"
import { useState, useEffect } from "react"
import { Github, Linkedin, Code, Server, Database, GitBranch } from "lucide-react"
import SectionBackground from "./SectionBackground";

const journeyData = [
  {
    title: 'Frontend Technologies',
    description: 'Crafting modern, responsive user interfaces with a focus on performance and accessibility.',
    icon: <Code className="h-8 w-8 text-blue-400" />,
    color: 'blue',
    skills: [
      { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white' },
      { name: 'React', icon: 'https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
      { name: 'HTML5', icon: 'https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
      { name: 'CSS3', icon: 'https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
      { name: 'TailwindCSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
      { name: 'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' },
      { name: 'Bootstrap', icon: 'https://img.shields.io/badge/Bootstrap-%237952B3.svg?style=for-the-badge&logo=bootstrap&logoColor=white' },
    ],
  },
  {
    title: 'Backend Technologies',
    description: 'Building scalable and secure backend systems to power dynamic applications.',
    icon: <Server className="h-8 w-8 text-green-400" />,
    color: 'green',
    skills: [
      { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white' },
      { name: 'Express.js', icon: 'https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' },
      { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' },
      { name: 'REST APIs', icon: 'https://img.shields.io/badge/REST_APIs-000000?style=for-the-badge&logo=rest&logoColor=white' },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Writing clean, efficient, and maintainable code to solve complex problems.',
    icon: <Database className="h-8 w-8 text-purple-400" />,
    color: 'purple',
    skills: [
      { name: 'Java', icon: 'https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white' },
      { name: 'C++', icon: 'https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
      { name: 'C', icon: 'https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' },
      { name: 'JavaScript', icon: 'https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
      { name: 'Python', icon: 'https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' },
    ],
  },
  {
    title: 'Core Fundamentals',
    description: 'Mastering the foundations of software development for robust solutions.',
    icon: <GitBranch className="h-8 w-8 text-orange-400" />,
    color: 'orange',
    skills: [
      { name: 'OOPS', icon: 'https://img.shields.io/badge/OOP-000000?style=for-the-badge&logo=code&logoColor=white' },
      { name: 'Operating Systems', icon: 'https://img.shields.io/badge/Operating_Systems-000000?style=for-the-badge&logo=linux&logoColor=white' },
      { name: 'Version Control', icon: 'https://img.shields.io/badge/Version_Control-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white' },
      { name: 'Computer Networks', icon: 'https://img.shields.io/badge/Computer%20Networking-%23007ACC.svg?style=for-the-badge&logo=cloudflare&logoColor=white' },
      { name: 'Object Oriented Software Engineering', icon: 'https://img.shields.io/badge/Object%20Oriented%20Software%20Engineering-%236A5ACD.svg?style=for-the-badge&logo=abstract&logoColor=white' },
    ],
  },
];

export default function Tools(){
  return(
 <section id="tools"className="scroll-mt-24 pt-10 min-h-[60vh] py-20 px-6 bg-black/90 relative overflow-hidden">
  {/* Background Canvas */}
  <SectionBackground />

  {/* Foreground Content */}
  <div className="relative z-10">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-fade-in mb-4 flex items-center justify-center gap-3 pb-6">
      <Code className="h-8 w-8 text-pink-300" />
      Tools & Skills
    </h2>
    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto text-center mb-12">
      Consistent learner. Passionate tech explorer.
    </p>
  </div>

      {/* Stats Row - Redesigned with glassmorphism */}
  <div className="flex flex-wrap justify-center gap-8 px-4 mb-16">
  {[
    { label: 'Learning Hours', value: '1200+', textColor: 'text-indigo-400' },
    { label: 'Projects Built', value: '7+', textColor: 'text-pink-400' },
    { label: 'Leetcode Questions', value: '150+', textColor: 'text-green-400' },
    { label: 'Technologies Learnt', value: '10+', textColor: 'text-yellow-400' },
  ].map((stat, index) => (
    <div
      key={index}
      className="group w-[220px] p-6 bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 text-center rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-gray-800/60 hover:border-gray-600/50"
    >
      <div className="text-sm text-gray-400 mb-2 font-medium tracking-wide">{stat.label}</div>
      <div
        className={`text-3xl font-bold ${stat.textColor} group-hover:text-white transition-all duration-300 text-center`}
      >
        {stat.value}
      </div>
    </div>
  ))}
</div>


      {/* Auto-Scrolling Tech Cards - Redesigned with better spacing and colors */}
      <div className="relative overflow-hidden max-w-6xl mx-auto px-4 py-8">
        <div className="flex w-max gap-8 animate-scroll-horizontal">
          {journeyData.concat(journeyData).map((item, index) => ( 
            <div key={index} className="group w-[320px] shrink-0 p-8 bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:bg-gray-800/50 hover:border-gray-600/50 flex flex-col justify-between min-h-[280px]">
              
              <div className="flex flex-col items-center text-center mb-6">
                <div className="mb-4 p-3 rounded-2xl bg-gray-800/50 transition-all duration-300 group-hover:bg-gray-700/50">
                  <div className="h-8 w-8 text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-100 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-gray-700/30">
                {item.skills.map((skill, idx) => (
                  <img
                    key={idx}
                    src={skill.icon}
                    alt={skill.name}
                    className="h-5 object-contain opacity-90 hover:opacity-100 transition-opacity duration-200 hover:scale-110 transform"
                    title={skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 25s linear infinite;
        }
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}