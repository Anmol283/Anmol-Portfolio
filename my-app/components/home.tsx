'use client';
import { Github, Linkedin, ChevronDown, Code, Terminal } from 'lucide-react';
import SectionBackground from './SectionBackground';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black via-gray-900 to-black relative z-10 overflow-hidden"
    >
      <SectionBackground />

      <div className="text-center max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* Main Heading with Cursor */}
        <div className="mb-6 flex items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '2.2s' }}>
          <div className="flex items-center gap-3 sm:gap-4">
            <Terminal className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 animate-pulse drop-shadow" />
            <div className="relative flex items-center">
              <div className="text-center">
                 <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-wide bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl pb-6">
                   Hey, I'm Anmol
                  </h1>
              </div>

              <span className="ml-2 w-1.5 h-10 sm:h-12 bg-emerald-400 animate-blink-cursor rounded-sm"></span>
            </div>
          </div>
        </div>

        {/* Subheading */}
        <div className="text-2xl sm:text-2xl font-medium text-indigo-300 mb-4 animate-fade-in-delayed">
          Full-Stack Developer | DSA Enthusiast | CS Student
        </div>

        {/* Typing Tagline */}
        <div className="mb-10 animate-fade-in-delayed flex items-center justify-center w-full">
  <div className="flex items-center -mr-1">
    <Code className="h-6 w-6 text-indigo-400 animate-pulse-fast" />
  </div>
  <div>
    <img
      src="https://readme-typing-svg.herokuapp.com?font=Inter&size=20&pause=1000&color=A1A1AA&center=true&vCenter=true&width=600&lines=Transforming+ideas+into+real-world+digital+experiences.&repeat=false"
      alt="Tagline Typing Animation"
      style={{ fontFamily: "'Inter', sans-serif" }}
    />
  </div>
</div>


        {/* Social Links */}
        <div className="flex gap-4 flex-wrap animate-fade-in-delayed-2">
          <a
            href="https://github.com/Anmol283"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center overflow-hidden rounded-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Github className="h-5 w-5 mr-2 text-white transition-transform duration-300 group-hover:rotate-[-12deg]" />
            <span className="relative z-10">GitHub</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-indigo-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          <a
            href="https://www.linkedin.com/in/anmol283/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center overflow-hidden rounded-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Linkedin className="h-5 w-5 mr-2 text-white transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10">LinkedIn</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-indigo-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        {/* Scroll Down */}
        <div className="animate-fade-in-delayed-4 mt-16">
          <div
            className="flex flex-col items-center gap-3 text-gray-500 group cursor-pointer animate-bounce-soft"
            onClick={() => {
              const section = document.getElementById('about');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-sm font-light tracking-wider uppercase group-hover:text-white transition-colors duration-300">
              Explore More
            </span>
            <ChevronDown className="h-6 w-6 group-hover:translate-y-1 group-hover:text-indigo-400 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
      @keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 5s ease infinite;
}

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

        @keyframes blink-cursor {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        .animate-blink-cursor {
          animation: blink-cursor 1.2s steps(2, start) infinite;
        }

        .animate-fade-in-up {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animate-fade-in-delayed-4 {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.9s;
          opacity: 0;
        }

        @keyframes pulse-fast {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }

        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }

        @keyframes bounce-soft {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-bounce-soft {
          animation: bounce-soft 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
