"use client"

import { motion, AnimatePresence } from "framer-motion"

interface PreloaderProps {
  isLoading: boolean
}

export function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="fixed inset-0 z-9999 bg-black flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Animated Tooth Icon with Rotating Circles */}
            <div className="relative w-32 h-32">
              {/* Outer rotating circle - clockwise */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-primary"
              />

              {/* Middle rotating circle - counter-clockwise */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border-2 border-transparent border-b-cyan-400 border-l-primary"
              />

              {/* Inner circle - clockwise */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border-2 border-transparent border-t-primary border-r-cyan-400"
              />

              {/* Tooth SVG - animated scale and rotation */}
              <motion.svg
                viewBox="0 0 100 120"
                className="absolute inset-0 w-full h-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                  filter: ["drop-shadow(0 0 10px rgba(62, 199, 186, 0.5))", "drop-shadow(0 0 20px rgba(0, 255, 255, 0.8))", "drop-shadow(0 0 10px rgba(62, 199, 186, 0.5))"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <defs>
                  <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3EC7BA" />
                    <stop offset="50%" stopColor="#00FFFF" />
                    <stop offset="100%" stopColor="#3EC7BA" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Tooth shape */}
                <path
                  d="M 30 25 Q 20 35 20 55 Q 20 85 50 110 Q 80 85 80 55 Q 80 35 70 25 Q 50 15 50 15 Q 50 15 30 25 Z"
                  fill="url(#toothGradient)"
                  stroke="#00FFFF"
                  strokeWidth="1"
                  filter="url(#glow)"
                />

                {/* Shine highlight */}
                <ellipse cx="45" cy="40" rx="7" ry="10" fill="#ffffff" opacity="0.5" />
                <ellipse cx="50" cy="35" rx="3" ry="5" fill="#ffffff" opacity="0.8" />
              </motion.svg>
            </div>

            {/* "OralNest" Text with pulse */}
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-center"
            >
              <p className="text-white text-2xl font-bold tracking-widest">OralNest</p>
              <p className="text-cyan-400 text-xs mt-1">Loading your perfect smile...</p>
            </motion.div>

            {/* Progress Bar with gradient fill */}
            <div className="w-56 h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full shadow-lg"
                style={{
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)"
                }}
              />
            </div>

            {/* Animated dots below progress */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -6, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
