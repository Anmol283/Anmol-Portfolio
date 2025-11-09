"use client"
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleClick = (e: MouseEvent) => {
      setRipples(prev => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]);
      setTimeout(() => {
        setRipples(prev => prev.slice(1));
      }, 800);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);
  
  return (
    <>
      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9998] animate-ping"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
          }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-cyan-400 opacity-75" />
        </div>
      ))}
      
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 12,
          top: position.y - 12,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-80 blur-sm" />
      </div>
      
      {/* Center dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 2,
          top: position.y - 2,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-white" />
      </div>
    </>
  );
}