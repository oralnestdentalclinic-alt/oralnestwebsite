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
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-[#0f2a2e]"
        >
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(62, 199, 186, 0.15), transparent 50%)",
            }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-12 px-6">
            {/* Circular orbit container */}
            <motion.div
              className="relative h-56 w-56 sm:h-64 sm:w-64"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Three rotating orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/60"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-cyan-400/40"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-primary/40"
              />

              {/* Center white circle with logo */}
              <motion.div
                className="absolute inset-12 rounded-full bg-white shadow-[0_0_40px_rgba(62,199,186,0.5)]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative h-full w-full flex items-center justify-center p-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fulllogo-CWXDgvZIcruvu02tztQk0jhx4SXHyO.png"
                    alt="OralNest Dental Clinic"
                    width={180}
                    height={180}
                    priority
                    className="h-full w-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Floating accent dots */}
              <motion.div
                className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(167,255,247,1)]"
                style={{ top: "-8px", left: "50%", x: "-50%" }}
                animate={{ y: [0, -6, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(62,199,186,0.8)]"
                style={{ top: "12px", right: "20px" }}
                animate={{ y: [0, -8, 0], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
            </motion.div>

            {/* Text and progress section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 z-10"
            >
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-center"
              >
                <p className="text-white text-3xl font-bold tracking-wide">OralNest</p>
                <p className="text-cyan-300 text-sm mt-2 font-medium">Loading your perfect smile...</p>
              </motion.div>

              {/* Progress bar */}
              <div className="w-72 h-1 bg-gray-700/40 rounded-full overflow-hidden border border-primary/20">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-primary via-cyan-300 to-primary rounded-full"
                  style={{
                    boxShadow: "0 0 15px rgba(62, 199, 186, 0.8)",
                  }}
                />
              </div>

              {/* Loading dots */}
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -5, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      delay: i * 0.12,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(167,255,247,0.8)]"
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
