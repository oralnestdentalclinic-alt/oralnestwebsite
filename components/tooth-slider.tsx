"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function ToothSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = (x / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, percent)))
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 cursor-ew-resize"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onMouseDown={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* SVG DEFS for tooth area mask and filters */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          {/* Tooth area mask - isolates just the teeth region */}
          <mask id="teethMask">
            <rect width="100%" height="100%" fill="white" />
            {/* Define tooth area - approximate mouth region */}
            <ellipse cx="50%" cy="55%" rx="35%" ry="20%" fill="black" />
          </mask>

          {/* Staining filter for yellowing effect */}
          <filter id="stainingFilter">
            <feColorMatrix
              type="saturate"
              values="1.8"
            />
            <feComponentTransfer>
              <feFuncR type="linear" slope="1.15" intercept="0.05" />
              <feFuncG type="linear" slope="1.05" intercept="0" />
              <feFuncB type="linear" slope="0.7" intercept="0" />
            </feComponentTransfer>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.95" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* BASE LAYER - Clean White Teeth (Always Visible) */}
      <div className="absolute inset-0">
        <img
          src="/images/teeth-transformation.jpg"
          alt="Clean white teeth - OralNest Result"
          className="w-full h-full object-cover"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* OVERLAY LAYER - Stained/Yellow Teeth (Clipped by Slider Position) */}
      <div
        className="absolute inset-0 transition-none"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src="/images/teeth-transformation.jpg"
          alt="Stained teeth - Before"
          className="w-full h-full object-cover"
          style={{
            objectFit: "cover",
            filter: "sepia(0.5) saturate(1.8) brightness(0.75) contrast(1.1)",
          }}
        />
      </div>

      {/* VERTICAL SLIDER LINE - Medical Teal */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-[#3EC7BA] z-30 pointer-events-none"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          boxShadow: "0 0 12px rgba(0, 255, 255, 0.6)",
        }}
        animate={{
          boxShadow: [
            "0 0 12px rgba(0, 255, 255, 0.4)",
            "0 0 20px rgba(0, 255, 255, 0.8)",
            "0 0 12px rgba(0, 255, 255, 0.4)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* CIRCULAR KNOB - White with Cyan Glow */}
      <motion.div
        className="absolute top-1/2 z-40 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl"
        style={{
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          boxShadow: [
            "0 0 0 3px #3EC7BA, 0 0 12px rgba(62, 199, 186, 0.6), 0 0 20px rgba(0, 255, 255, 0.3)",
            "0 0 0 3px #3EC7BA, 0 0 20px rgba(62, 199, 186, 0.9), 0 0 30px rgba(0, 255, 255, 0.6)",
            "0 0 0 3px #3EC7BA, 0 0 12px rgba(62, 199, 186, 0.6), 0 0 20px rgba(0, 255, 255, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronRight className="w-5 h-5 text-[#3EC7BA] -ml-0.5" />
        <ChevronRight className="w-5 h-5 text-[#3EC7BA] -ml-3 rotate-180" />
      </motion.div>

      {/* LEFT LABEL - Naturally Stained */}
      <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full z-20 pointer-events-none">
        Naturally Stained
      </div>

      {/* RIGHT LABEL - OralNest Result */}
      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-[#3EC7BA]/80 backdrop-blur-sm text-white text-xs font-medium rounded-full z-20 pointer-events-none">
        OralNest Result
      </div>

      {/* INVISIBLE RANGE INPUT - For touch/mouse interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-50"
        style={{ margin: 0, padding: 0 }}
      />
    </div>
  )
}
