"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const clinicImages = [
  {
    id: 1,
    title: "Advanced Treatment Room",
    description: "Equipped with the latest dental technology",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TZsvSF0wJFYKIzzAbEA3DsoM3V0iLJ.png",
  },
  {
    id: 2,
    title: "State-of-the-Art Equipment",
    description: "Modern dental chairs with precision instruments",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FM8lGzQozXBVJ9oYVJKInUBOQqFq6c.png",
  },
  {
    id: 3,
    title: "OralNest Clinic Entrance",
    description: "Welcome to a safe nest for every smile",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ZQxpi2rbFsQE8GQUr4ViozmFwzkxF.png",
  },
  {
    id: 4,
    title: "Comfortable Waiting Lounge",
    description: "Relax in our warm and welcoming environment",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x6Lk88yRKhuNNzSgFgCCsGfH6nmmqT.png",
  },
  {
    id: 5,
    title: "Premium Treatment Suite",
    description: "Digital diagnostics with expert care",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uP04X7xHDpj5P8r2BIPJSyWJTLz0h7.png",
  },
]

export function ClinicSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clinicImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clinicImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clinicImages.length) % clinicImages.length)
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Slider */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 aspect-[4/3] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={clinicImages[currentIndex].image}
                    alt={clinicImages[currentIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay with title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {clinicImages[currentIndex].title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {clinicImages[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {clinicImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-primary w-8" 
                        : "bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Clinic
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              State-of-the-Art
              <br />
              <span className="text-primary">Dental Facility</span>
            </h2>
            <p className="text-muted-foreground">
              Step into a modern, comfortable environment designed with your 
              well-being in mind. Our clinic features the latest dental technology, 
              ensuring precise diagnostics and gentle treatments.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">100% Sterile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Latest Tech</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Expert Team</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">5-Star Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
