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
                "radial-gradient(circle at 50% 42%, rgba(62, 199, 186, 0.22), transparent 34%), linear-gradient(135deg, rgba(255,255,255,0.05), transparent 45%)",
            }}
            animate={{ scale: [1, 1.03, 1], opacity: [0.55, 0.8, 0.55] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute hidden h-px w-[min(560px,70vw)] bg-gradient-to-r from-transparent via-cyan-100/25 to-transparent sm:block"
            animate={{ y: [-120, 120, -120], opacity: [0, 0.7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute hidden h-[min(420px,62vw)] w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent sm:block"
            animate={{ x: [-160, 160, -160], opacity: [0, 0.55, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-8 px-6">
            <div className="relative h-44 w-44 sm:h-52 sm:w-52">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-transparent border-t-primary border-r-cyan-200/80"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-cyan-200/35"
              />

              <motion.div
                animate={{ scale: [0.86, 1.12, 0.86], opacity: [0.18, 0.42, 0.18] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-7 rounded-full bg-primary/25 blur-xl"
              />

              <motion.svg
                viewBox="0 0 208 208"
                className="absolute inset-0 h-full w-full"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="smileTrace" x1="38" x2="170" y1="150" y2="150">
                    <stop stopColor="#3EC7BA" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#A7FFF7" />
                    <stop offset="1" stopColor="#3EC7BA" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M44 144C64 166 143 166 164 144"
                  stroke="url(#smileTrace)"
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

              <motion.div
                className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_0_36px_rgba(62,199,186,0.38)] sm:h-32 sm:w-32"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
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
              </motion.div>

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
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-white text-2xl font-bold tracking-widest">OralNest</p>
              <p className="text-cyan-400 text-xs mt-1">Loading your perfect smile...</p>
            </motion.div>

            <div className="h-1.5 w-64 overflow-hidden rounded-full border border-white/10 bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
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
                    delay: i * 0.1,
                  }}
                  className="h-2 w-2 rounded-full bg-cyan-100"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
