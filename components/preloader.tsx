"use client"

import Image from "next/image"
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
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-[#071314]"
        >
          <motion.div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 42%, rgba(62, 199, 186, 0.2), transparent 35%), radial-gradient(circle at 50% 58%, rgba(255,255,255,0.05), transparent 28%)",
            }}
            animate={{ scale: [1, 1.03, 1], opacity: [0.55, 0.8, 0.55] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.div
              className="relative h-44 w-44 sm:h-52 sm:w-52"
              initial={{ scale: 0.78, opacity: 0, filter: "blur(6px)" }}
              animate={{
                scale: [0.78, 1.08, 1],
                opacity: [0, 1, 1],
                filter: ["blur(6px)", "blur(0px)", "blur(0px)"],
              }}
              transition={{
                duration: 0.78,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.68, 1],
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-primary"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border-2 border-transparent border-b-cyan-400 border-l-primary"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border-2 border-transparent border-t-primary border-r-cyan-400"
              />

              <motion.div
                animate={{ scale: [0.86, 1.12, 0.86], opacity: [0.18, 0.42, 0.18] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 rounded-full bg-primary/25 blur-xl sm:inset-10"
              />

              <motion.svg
                viewBox="0 0 208 208"
                className="absolute inset-0 h-full w-full"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="smileTraceStatic" x1="38" x2="170" y1="150" y2="150">
                    <stop stopColor="#3EC7BA" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#A7FFF7" />
                    <stop offset="1" stopColor="#3EC7BA" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M44 144C64 166 143 166 164 144"
                  stroke="url(#smileTraceStatic)"
                  strokeLinecap="round"
                  strokeWidth="4"
                  animate={{ pathLength: [0.18, 1, 0.18], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                  d="M60 66C70 52 86 49 104 60C122 49 138 52 148 66C158 80 151 107 135 129C125 143 116 151 108 151C101 151 100 136 96 126C91 136 90 151 82 151C74 151 65 143 55 129C39 107 50 80 60 66Z"
                  stroke="#D7FFFB"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  animate={{ opacity: [0.12, 0.38, 0.12] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.svg>

              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 sm:h-32 sm:w-32">
                <div
                  className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_0_36px_rgba(62,199,186,0.38)]"
                >
                  <Image
                    src="/icon.png"
                    alt="OralNest Dental Clinic"
                    width={128}
                    height={128}
                    priority
                    className="h-full w-full object-contain p-3"
                  />
                  <motion.div
                    className="absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/65 to-transparent"
                    animate={{ x: ["0%", "320%"] }}
                    transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
                  />
                </div>
              </div>

              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-cyan-100 shadow-[0_0_14px_rgba(167,255,247,0.9)]"
                  style={{
                    left: `${32 + i * 18}%`,
                    top: i === 1 ? "12%" : "24%",
                  }}
                  animate={{ y: [0, -8, 0], opacity: [0.25, 1, 0.25], scale: [0.8, 1.25, 0.8] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.16, ease: "easeOut" }}
              className="flex flex-col items-center gap-8"
            >
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="text-center"
              >
                <p className="text-white text-2xl font-bold tracking-widest">OralNest</p>
                <p className="text-cyan-400 text-xs mt-1">Loading your perfect smile...</p>
              </motion.div>

              <div className="h-1.5 w-64 overflow-hidden rounded-full border border-white/10 bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, delay: 0.18, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-cyan-100 to-primary"
                  style={{
                    boxShadow: "0 0 18px rgba(62, 199, 186, 0.75)",
                  }}
                />
              </div>

              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -6, 0],
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: 0.2 + i * 0.1,
                    }}
                    className="h-2 w-2 rounded-full bg-cyan-100"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
