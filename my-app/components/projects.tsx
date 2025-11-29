"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, Code, Code2, Database, Globe, Shield, Smartphone, Brain, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import SectionBackground from './SectionBackground';
import { LayoutTemplate } from "lucide-react";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

const projects = [
  {
  id: 1,
  title: "Anmol-Portfolio",
  description: "A visually rich, fully responsive personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and EmailJS to showcase my skills, projects, and journey.",
  image: "/projects/Portfolio.png", // Update this to your actual portfolio image path
  tags: ["nextjs", "tailwindcss", "framer-motion", "emailjs"],
  category: "Full Stack",
  icon: <Globe className="w-5 h-5" />,
  gradient: "from-indigo-600 to-pink-500",
  liveUrl: "https://anmol-portfolio-zeta.vercel.app/", // Update to your actual live portfolio URL
  githubUrl: "https://github.com/Anmol283/Anmol-Portfolio"
  },
  {
    id: 2,
    title: "Elara Regency",
    description: "A full-stack hotel management platform built with Node.js, Express, MongoDB, and EJS.",
    image: "/projects/ElaraRegency.png", // Updated path
    tags: ["express", "ejs", "mongodb-atlas"],
    category: "Full Stack",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-blue-600 to-purple-600",
    liveUrl: "https://elararegency-anmol.onrender.com/",
    githubUrl: "https://github.com/Anmol283/BE_ElaraRegency"
  },
  {
    id: 3,
    title: "E-commerce Mini Store",
    description: "Mini e-commerce app built with Spring Boot microservices & Java, featuring JWT auth, MySQL, and REST APIs for products, cart, and orders.",
    image: "/projects/ecms.png", 
    tags: ["spring-boot", "microservices", "jwt"],
    category: "Backend Development",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-blue-600 to-purple-600",
    // liveUrl: "#", 
    githubUrl: "https://github.com/Anmol283/E-commerceMiniStore"
  },   
  {
    id: 4,
    title: "Clean Space Dashboard",
    description: "Terminal-based file organizer and disk monitor with dialog UI, alerts, and real-time stats for Linux users.",
    image: "/projects/csd.jpeg", // needs change
    tags: ["bash", "linux", "shell-scripting"],
    category: "Command Line Tools",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-blue-600 to-purple-600",
    // liveUrl: "#",
    githubUrl: "https://github.com/Anmol283/Clean-Space-Dashboard-Linux"
  },
  {
    id: 5,
    title: "Playlist Management System",
    description: "Console-based Java app to create, edit, and manage your music playlists.",
    image: "/projects/PMS.png", // Fixed path
    tags: ["java", "linkedlist", "dsa"],
    category: "DSA & Java Projects",
    icon: <Code className="w-5 h-5" />,
    gradient: "from-orange-600 to-red-600",
    // liveUrl: "#",
    githubUrl: "https://github.com/Anmol283/PlaylistManagementSystem"
  },
   {
    id: 6,
    title: "PolyVerse - A Translator App",
    description: "Translate across 12+ languages with smart history and a sleek dark UI.",
    image: "/projects/polyverse.png", // Fixed path
    tags: ["nextjs", "tailwindcss", "mongodb-atlas", "postgresql", "docker"],
    category: "AI & Language Tools",
    icon: <Brain className="w-5 h-5" />,
    gradient: "from-emerald-600 to-teal-600",
    liveUrl: "https://poly-verse-a-translator-app.vercel.app",
    githubUrl: "https://github.com/Anmol283/PolyVerse-A-translator-app"
  },
  {
    id: 7,
    title: "Gif-it-up",
    description: "A fun side project — a GIF generator built with Spring Boot and Thymeleaf, letting users create and view custom GIFs right from the browser.",
    image: "/projects/gifitup.png",
    tags: ["spring-boot", "thymeleaf", "webapp"],
    category: "Productivity Tools",
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-purple-600 to-pink-600",
    liveUrl: "gif-it-up-cslh.onrender.com/",
    githubUrl: "https://github.com/Anmol283/Gif-it-up"
  },
  {
    id: 8,
    title: "OptiFlow",
    description: "A smart task manager with real-time syncing, modern UI, and seamless flow.",
    image: "/projects/optiflow.png", // Fixed path
    tags: ["reactjs", "firebase-auth", "three-js"],
    category: "Productivity Tools",
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-purple-600 to-pink-600",
    liveUrl: "https://opti-flow-self.vercel.app",
    githubUrl: "https://github.com/Anmol283/OptiFlow"
  },
  {
    id: 9,
    title: "Digital Clock & Weather App",
    description: "Track time and weather instantly with a beautiful, minimal web UI.",
    image: "/projects/Digital_clock_and_weather.png", // Fixed path
    tags: ["node-js", "open-weather-api"],
    category: "Frontend & API",
    icon: <Globe className="w-5 h-5" />,
    gradient: "from-cyan-600 to-blue-600",
    liveUrl: "https://anmol283.github.io/Digital-clock-and-Weather-App/",
    githubUrl: "https://github.com/Anmol283/Digital-clock-and-Weather-App"
  },
  {
    id: 10,
    title: "Library Management System",
    description: "Efficiently manage physical & digital books with DevOps best practices.",
    image: "/projects/LMS.png", // Fixed path
    tags: ["c++","CLI"],
    category: "C++ & CLI",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-yellow-600 to-orange-600",
    // liveUrl: "#",
    githubUrl: "https://github.com/Anmol283/Library_Management_System_Cpp"
  },
  
];
  const itemsPerView = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const clientX = e.type === 'mousedown' 
      ? (e as React.MouseEvent<HTMLDivElement>).clientX 
      : (e as React.TouchEvent<HTMLDivElement>).touches[0].clientX;
    setStartX(clientX);
    if (scrollContainerRef.current) {
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const clientX = e.type === 'mousemove' 
      ? (e as React.MouseEvent<HTMLDivElement>).clientX 
      : (e as React.TouchEvent<HTMLDivElement>).touches[0].clientX;
    const x = clientX;
    const walk = (x - startX) * 2;
    
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const clientX = e.type === 'mouseup' 
      ? (e as React.MouseEvent<HTMLDivElement>).clientX 
      : (e as React.TouchEvent<HTMLDivElement>).changedTouches[0].clientX;
    const dragDistance = clientX - startX;
    const threshold = 100;
    
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        setCurrentIndex(prev => Math.max(0, prev - 1));
      } else if (dragDistance < 0 && currentIndex < maxIndex) {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
      }
    }
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(maxIndex, index)));
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth / itemsPerView;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, itemsPerView]);

  const [screenSize, setScreenSize] = useState('lg');
  
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('sm');
      } else if (window.innerWidth < 1024) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getItemsPerView = () => {
    switch (screenSize) {
      case 'sm': return 1;
      case 'md': return 2;
      case 'lg': return 3; // Changed to show 3 cards on large screens
      default: return 3;
    }
  };

  const responsiveItemsPerView = getItemsPerView();
  const responsiveMaxIndex = Math.max(0, projects.length - responsiveItemsPerView);

  return (
    
   <section id="projects"className="scroll-mt-24 pt-10 pb-12 px-4 relative z-10 bg-black/90">
    <SectionBackground/>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          
          <h2 className="text-6xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-fade-in mb-4 flex items-center justify-center gap-3 pb-2">
         <LayoutTemplate className="w-8 h-8 text-pink-400 mr-2" />
          Projects
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto -mt-1 text-center">
          My Tech Stack in Action
        </p>

        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
              currentIndex === 0 
                ? 'bg-slate-800/30 border-slate-700 text-slate-600 cursor-not-allowed' 
                : 'bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700/80 hover:border-slate-500'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            disabled={currentIndex >= responsiveMaxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
              currentIndex >= responsiveMaxIndex 
                ? 'bg-slate-800/30 border-slate-700 text-slate-600 cursor-not-allowed' 
                : 'bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700/80 hover:border-slate-500'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{ userSelect: 'none' }}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / responsiveItemsPerView)}%)`,
                gap: responsiveItemsPerView === 1 ? '0px' : '20px'
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0"
                  style={{ 
                    width: responsiveItemsPerView === 1 
                      ? '100%' 
                      : responsiveItemsPerView === 2
                      ? 'calc(50% - 10px)'
                      : 'calc(33.333% - 14px)', // Narrower cards for 3-column layout
                    pointerEvents: isDragging ? 'none' : 'auto'
                  }}
                >
                  <div
                    className="group relative bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 h-full"
                    onMouseEnter={() => !isDragging && setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Increased image container height */}
                    <div className="relative h-52 overflow-hidden bg-slate-900/50">
                      {/* Image Container */}
                      <div className="relative w-full h-full flex items-center justify-center p-2">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{
                            objectFit: 'contain',
                            objectPosition: 'center'
                          }}
                          onError={(e) => {
                            // Fallback to gradient background if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.parentElement) {
                              target.parentElement.style.background = `linear-gradient(to bottom right, ${project.gradient.replace('from-', '').replace('to-', '').replace(' ', ', ')})`;
                            }
                          }}
                        />
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 mix-blend-overlay`}></div>
                      </div>
                      
                      {/* Hover overlay with buttons */}
                      <div className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-all duration-300 ${
                        hoveredProject === project.id && !isDragging ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-blue-500/90 backdrop-blur-sm rounded-full hover:bg-blue-400/90 transition-all duration-200 transform hover:scale-110"
                          onMouseDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-600/90 backdrop-blur-sm rounded-full hover:bg-gray-500/90 transition-all duration-200 transform hover:scale-110"
                          onMouseDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      </div>

                      {/* Category badge - only visible on hover */}
                      <div className={`absolute top-4 left-4 transition-all duration-300 ${
                        hoveredProject === project.id && !isDragging ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}>
                        <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                          {project.category}
                        </span>
                      </div>

                      {/* Tech Stack Icon - only visible on hover */}
                      <div className={`absolute top-4 right-4 transition-all duration-300 ${
                        hoveredProject === project.id && !isDragging ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}>
                        <div className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                          {project.icon}
                        </div>
                      </div>
                    </div>

                    {/* Optimized content padding and height */}
                    <div className="p-6 min-h-[260px] flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600 hover:bg-slate-600/50 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2.5 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full border border-slate-600">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-700 mt-auto">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium hover:underline"
                          onMouseDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm hover:underline"
                          onMouseDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>

                    <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none ${
                      hoveredProject === project.id && !isDragging
                        ? 'opacity-100 shadow-xl shadow-blue-500/10' 
                        : 'opacity-0'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;