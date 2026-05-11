"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Swapnil Lokhande",
    rating: 5,
    review:
      "OralNest Dental Clinic in Kaspate Vasti is a great place. The equipment is always clean and sterilized, which made me feel safe throughout the treatment. The staff is caring, attentive, and actually listens to patient concerns.",
    image: 11,
    time: "02:20 PM",
    date: "11 Apr, 2026",
    source: "Justdial",
  },
  {
    name: "Sunita Deshpande",
    rating: 5,
    review:
      "Had a really smooth experience. The staff was gentle, there was barely any waiting time, and the clinic is well maintained. They also guide you properly on cost and treatment options.",
    image: 20,
    time: "",
    date: "",
    source: "",
  },
  {
    name: "Sahil Kadam",
    rating: 5,
    review:
      "OralNest Dental Clinic is genuinely impressive. The location is convenient, the team is responsive, and the entire process felt very organized. You don't feel rushed or ignored here.",
    image: 13,
    time: "",
    date: "",
    source: "",
  },
  {
    name: "Priya Joshi",
    rating: 4,
    review:
      "Great experience with my dental checkup. The doctor explained everything clearly and the pricing was fair. Definitely coming back for future treatments.",
    image: 25,
    time: "",
    date: "",
    source: "",
  },
  {
    name: "Vikram Sharma",
    rating: 5,
    review:
      "I usually avoid dentists, but this place changed that completely. The team is patient, calm, and makes you feel comfortable even during procedures.",
    image: 15,
    time: "",
    date: "",
    source: "",
  },
  {
    name: "Anjali Patil",
    rating: 5,
    review:
      "My orthodontic treatment went perfectly. Every visit was handled professionally and my alignment is now exactly how I wanted. Easily one of the best clinics in Pune.",
    image: 30,
    time: "",
    date: "",
    source: "",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            What Our Patients Say
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real Results, <span className="text-primary">Real Smiles</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-border p-6 h-full hover:border-primary/40 transition-colors"
                  >
                    
                    {/* Quote */}
                    <div className="text-4xl text-primary/20 font-serif mb-4">
                      &ldquo;
                    </div>

                    {/* Review */}
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                      {testimonial.review}
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "fill-amber-400 text-amber-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={`https://i.pravatar.cc/48?img=${testimonial.image}`}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>

                        <div className="text-sm text-primary">
                          Verified Patient
                        </div>

                        {(testimonial.date || testimonial.source) && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {testimonial.date && <span>{testimonial.date}</span>}
                            {testimonial.time && (
                              <span> • {testimonial.time}</span>
                            )}
                            {testimonial.source && (
                              <span> • Source: {testimonial.source}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white border border-border shadow-lg flex items-center justify-center hover:border-primary/40 transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white border border-border shadow-lg flex items-center justify-center hover:border-primary/40 transition-colors hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
