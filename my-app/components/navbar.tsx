"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 104; // Adjusted for h-16 (64px) + mt-10 (40px)
    const yOffset = -navbarHeight;
    let y;
    if (sectionId === "journey") {
      const titleElement = element.querySelector("h2");
      if (titleElement) {
        y = titleElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      } else {
        y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; // Fallback
      }
    } else {
      y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    }
    window.scrollTo({ top: y, behavior: "smooth" });
    // Only adjust for bottom visibility for non-Achievements sections
    if (sectionId !== "achievements") {
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) {
          window.scrollBy({ top: rect.bottom - window.innerHeight + 20, behavior: "smooth" });
        }
      }, 500);
    }
  }
  setIsOpen(false);
};

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // Adjust offset for active section detection
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className="absolute top-6 left-0 z-50 w-full bg-black/90 text-white shadow-md">

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-center h-16">
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {navItems.map(({ id, label }, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-3 py-2 text-sm font-xl rounded-md transition-all duration-300 animate-nav-item ${
                    activeSection === id
                      ? "text-indigo-400 scale-105 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:animate-underline"
                      : "text-gray-300 hover:text-indigo-400 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:to-purple-600 hover:after:animate-underline"
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Button */}
            <div className="md:hidden absolute right-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-indigo-400 rounded-md transition-all duration-300"
              >
                {isOpen ? (
                  <X className="h-6 w-6 animate-rotate-out" />
                ) : (
                  <Menu className="h-6 w-6 animate-rotate-in" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-gradient-to-br from-purple-800/90 to-indigo-800/90 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 flex flex-col justify-center items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-indigo-200 hover:bg-indigo-700/40 rounded-full transition-all duration-300 animate-rotate-out"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="flex flex-col gap-4">
              {navItems.map(({ id, label }, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-6 py-3 rounded-lg text-xl font-semibold transition-all duration-300 animate-mobile-nav-item ${
                    activeSection === id
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 scale-105"
                      : "text-white hover:text-indigo-200 hover:bg-indigo-700/40"
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes nav-item {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-nav-item {
          animation: nav-item 0.5s ease-out forwards;
        }

        @keyframes underline {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          100% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        .animate-underline {
          animation: underline 0.3s ease-out forwards;
        }

        @keyframes rotate-in {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(90deg);
          }
        }
        .animate-rotate-in {
          animation: rotate-in 0.3s ease-out forwards;
        }

        @keyframes rotate-out {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-90deg);
          }
        }
        .animate-rotate-out {
          animation: rotate-out 0.3s ease-out forwards;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        @keyframes mobile-nav-item {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-mobile-nav-item {
          animation: mobile-nav-item 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}