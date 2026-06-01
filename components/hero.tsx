"use client";

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { VideoModal } from "./video-modal"

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 text-primary"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2C8 2 6 5 6 8c0 4 2 8 6 14 4-6 6-10 6-14 0-3-2-6-6-6z" />
              </svg>
              <span className="text-sm font-medium text-primary">
                Advanced Dental Care
              </span>
            </motion.div>

            {/* Heading with subtle drift animation */}
            <motion.h1 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              <motion.span
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                Complete Dental Care
              </motion.span>
              <br />
              <motion.span
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="inline-block"
              >
                Under One <span className="text-primary">Roof</span>
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-md"
            >
              Experience the perfect blend of advanced technology, gentle care,
              and beautiful results. Because your smile deserves the best.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button 
                onClick={scrollToAppointment}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                onClick={() => setIsVideoOpen(true)}
                variant="outline"
                className="rounded-full px-6 py-6 text-base border-2 hover:bg-primary/5"
              >
                <Play className="w-4 h-4 mr-2 fill-primary text-primary" />
                Watch Our Story
              </Button>
            </motion.div>


          </div>

          {/* Right Content - Animated Tooth Image */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Fluorescent Teal Glow Layers */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outermost soft glow */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, rgba(20, 184, 166, 0.1) 30%, transparent 60%)",
                  filter: "blur(60px)",
                }}
              />
              {/* Middle glow */}
              <motion.div 
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute w-[380px] h-[380px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, rgba(20, 184, 166, 0.2) 40%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              {/* Inner bright glow */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-[280px] h-[280px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(20, 184, 166, 0.6) 0%, rgba(20, 184, 166, 0.3) 50%, transparent 80%)",
                  filter: "blur(25px)",
                }}
              />
            </div>

            {/* Main Tooth Image with Floating Animation */}
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div 
                className="relative"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(20, 184, 166, 0.6)) drop-shadow(0 0 80px rgba(20, 184, 166, 0.4)) drop-shadow(0 0 120px rgba(20, 184, 166, 0.3))",
                }}
              >
                {/* The tooth image with transparent background treatment */}
                <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
  <Image
    src="/images/float_teeth-removebg-preview.png"
    alt="3D Tooth"
    fill
    className="object-contain"
    style={{
      filter: "drop-shadow(0 0 40px rgba(20, 184, 166, 0.6))",
    }}
    priority
  />
</div>
              </div>
            </motion.div>

            {/* Decorative sparkles */}
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="absolute top-20 right-20 w-3 h-3 bg-primary/60 rounded-full"
              style={{ filter: "blur(1px)" }}
            />
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              className="absolute bottom-32 left-16 w-2 h-2 bg-primary/50 rounded-full"
              style={{ filter: "blur(1px)" }}
            />
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              className="absolute top-40 left-24 w-2 h-2 bg-primary/40 rounded-full"
              style={{ filter: "blur(1px)" }}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
  isOpen={isVideoOpen}
  onClose={() => setIsVideoOpen(false)}
  videoUrl="/videos/oral-nest-video.mp4"
  title="OralNest - Our Story"
/>
    </section>
  )
}
