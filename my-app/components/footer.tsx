"use client"
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Heart, Code, Coffee, Sparkles } from 'lucide-react';
import SectionBackground from './SectionBackground';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Anmol283", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/your-link", label: "LinkedIn" },
    { icon: Mail, href: "mailto:295anmol@gmail.com", label: "Email" },
  ];


  return (
  <footer className="relative w-full bg-black/90 text-white py-16 overflow-hidden">

        <SectionBackground/>
      {/* Cursor Glow Effect */}
      <div
        className="absolute pointer-events-none opacity-20 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center space-y-8">
          
          {/* Animated Quote with Sparkle */}
          <div className="relative">
            <div 
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="relative inline-block">
                <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-relaxed">
                 That’s a wrap — hope you enjoyed the scroll!
                </h2>
                <Sparkles className="absolute -bottom-2 -right-2 w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
              </div>
              <p className="text-lg text-gray-300 mt-4 font-light">
                Keep building, keep growing, keep being awesome ✨
              </p>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div 
            className={`flex justify-center gap-8 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <div key={social.label} className="relative group">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:rotate-6"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
                    
                    <Icon size={24} className="relative z-10 text-purple-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div 
            className={`flex items-center justify-center gap-4 transform transition-all duration-1000 delay-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent w-24" />
            <div className="flex items-center gap-2 text-purple-300">
              <Coffee size={16} className="animate-bounce" style={{ animationDelay: '0.5s' }} />
              <Code size={16} className="animate-bounce" style={{ animationDelay: '1s' }} />
              <Heart size={16} className="animate-bounce text-pink-400" style={{ animationDelay: '1.5s' }} />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent w-24" />
          </div>

          {/* Copyright with enhanced styling */}
          <div 
            className={`space-y-2 transform transition-all duration-1000 delay-900 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Anmol</span>
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              Crafted with <Heart size={12} className="text-red-400 animate-pulse" /> and lots of ☕
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-60" />
    </footer>
  );
};

export default Footer;