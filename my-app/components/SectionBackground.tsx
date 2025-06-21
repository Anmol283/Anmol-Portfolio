'use client'
import React, { useEffect, useState } from 'react'
import { Code, Sparkles, Terminal, Coffee } from 'lucide-react'

const floatingIcons = [
  Code,
  Terminal,
  Coffee,
  Sparkles,
  Coffee,
  Code,
  Terminal,
  Sparkles,
  Coffee,
  Code
]

const generateTinyDots = (count: number) =>
  Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 1 + 2, // 1px to 2.5px
    opacity: Math.random() * 0.5 + 0.3 // 0.2 to 0.5
  }))

const SectionBackground = () => {
  const [isClient, setIsClient] = useState(false)
  const [tinyDots, setTinyDots] = useState(generateTinyDots(50))

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {/* Tiny subtle white dots */}
          {tinyDots.map((dot, i) => (
            <div
              key={`dot-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                opacity: dot.opacity,
                filter: 'blur(0.5px)'
              }}
            />
          ))}

          {/* Floating Lucide icons */}
          {floatingIcons.map((Icon, i) => (
            <div
              key={`icon-${i}`}
              className="absolute animate-float-icons opacity-15"
              style={{
                left: `${(i * 10 + 10) % 90}%`,
                top: `${(i % 3) * 25 + 10}%`,
                animationDelay: `${i * 0.7}s`
              }}
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes float-icons {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-5px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        .animate-float-icons {
          animation: float-icons 6s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default SectionBackground
