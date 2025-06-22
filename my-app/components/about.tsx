"use client";
import { useState, useEffect } from "react";
import SectionBackground from './SectionBackground'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[70vh] py-20 px-4 relative z-10 scroll-mt-24 bg-black/90"
    >
      <SectionBackground/>
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[90vw] h-[90vw] bg-purple-500/10 rounded-full blur-[180px] z-0" />

      {/* Floating Command Box */}
      <div className="max-w-6xl mx-auto w-full backdrop-blur-lg bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_5px_rgba(255,255,255,0.03)] transition-transform duration-300 hover:scale-[1.01] relative z-10">
        {/* Dots like window controls */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Inside Content */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
          {/* Text Section */}
          <div className="md:w-2/3 space-y-6 text-gray-200">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-fade-in">
              About Me
            </h2>

            {/* About Paragraph */}
            <div className="flex flex-wrap gap-3">
              {["Inquisitive Coder", "Creative Thinker", "Tech Explorer"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-gradient-to-r from-blue-600/50 to-indigo-600/50 text-white rounded-full text-sm font-medium tracking-wide hover:shadow-md hover:scale-105 transition duration-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <code className="text-sm sm:text-base text-gray-400 font-mono bg-white/10 px-4 py-2 rounded-md shadow-inner inline-block animate-fade-in">
            
            <br/>
           I'm a third-year Computer Science Engineering student at Chitkara University, driven by a passion for web development & problem-solving.
              <br />
              <br/>
              As a full-stack developer, I specialize in crafting seamless digital experiences, from intuitive user interfaces to efficient, scalable backends.
              <br />
              <br/>
              I thrive on turning ideas into reality and enjoy every step of the development process.
              <br/>
              <br/>
          </code>
          <p className="text-sm sm:text-base text-muted-foreground">
               🎓 <strong>CGPA:</strong> 9.25 &nbsp;|&nbsp; <strong>12th:</strong> 91% &nbsp;|&nbsp; <strong>10th:</strong> 94%
          </p>


          </div>

          {/* Profile Image Section */}
          <div className="md:w-1/3 flex justify-center animate-fade-in-delayed">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <img
                src="Anmol_pic.jpeg"
                alt="Anmol's Profile"
                className="relative rounded-full w-64 h-64 object-cover border-4 border-white/30 shadow-xl transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
