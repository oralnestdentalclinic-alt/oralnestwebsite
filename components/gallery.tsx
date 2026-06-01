"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1-gW5WO45lHPPR3L2JebaqTuXkO0CrB3.jpeg",
    alt: "OralNest clinic inauguration event with visitors"
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-K5X81tz1JNZgEOPJpSE3PISwy90eya.jpeg",
    alt: "Team gathering and celebration at clinic"
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-1H0waRa1877EHX2M2ZNBz75TZj0pL0.jpeg",
    alt: "Professional team members at OralNest"
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-TlE3XFku7NwRHFLtxzMbdSO4w35zat.jpeg",
    alt: "Clinic consultation with dental professional"
  },
  {
    id: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img5-xHOEgPiwFSUybvZ5f0by9Ef1uer8Pg.jpeg",
    alt: "Happy patient with dentist at OralNest"
  },
  {
    id: 6,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6-jdUcshnarbX8vLlq3qSw6D2bwpFFEN.jpeg",
    alt: "Professional consultation in treatment room"
  },
  {
    id: 7,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img7-PFd60AA32MYU7zlAfEkO9TtlgVJd54.jpeg",
    alt: "Team members holding flowers at celebration"
  },
  {
    id: 8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img8-1o0ZAghXWdjplctMB70zLLmNGpX7Ls.jpeg",
    alt: "Large team group photo at OralNest clinic"
  },
  {
    id: 9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9-KFkfPCpz8hG2BUlCwet1fH0O2S4isX.jpeg",
    alt: "Professional team members with award"
  },
  {
    id: 10,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img10-FMVbzeoPz0xoDPWjSqYOkv7hPIt2zB.jpeg",
    alt: "Clinic visit with patients and staff"
  },
  {
    id: 11,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img11-TKsGUwOZXH4eXJsChuLhDs5wfJFSsQ.jpeg",
    alt: "Clinic tour and professional consultation"
  },
  {
    id: 12,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img12-v6sLxuVfpBkIGmU3fhMqLkfJtBZ3XJ.jpeg",
    alt: "Team celebration with visitors at clinic"
  },
  {
    id: 13,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img13-XQpoc8PYrLVZt8ttRE3wiL2r1y23Io.jpeg",
    alt: "Team members gathering at OralNest"
  }
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Our Moments
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Events & <span className="text-primary">Celebrations</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Moments that define our clinic culture and the relationships we build with our patients.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            {/* Main Image */}
            <Image
              src={galleryImages[currentIndex].image}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-foreground hover:text-primary transition-all shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-foreground hover:text-primary transition-all shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>

          {/* Thumbnail Dots */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
