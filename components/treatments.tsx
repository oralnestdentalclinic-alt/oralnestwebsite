"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const treatmentCategories = [
  {
    name: "Therapy",
    treatments: [
      { 
        title: "Microscopic Root Canal", 
        description: "Precision root canal treatment using advanced microscopy for better outcomes.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/microscopic_rootcanal-CGGIS1zDeLbxdeONG72NUJ6y0CtgGd.jpeg"
      },
      { 
        title: "Advanced Root Canal", 
        description: "Complex root canal treatments using the latest techniques and equipment.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advanced_rootcanal-3DV0SZpk9NH81x6RUY0Bciz9ZKVChm.jpeg"
      },
      { 
        title: "Periodontal Therapy", 
        description: "Treatment for gum disease including deep cleaning and maintenance.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/periodontal_therapy-7cwdatUQDE8c9r3Y4cfvi5lHGgE5Zx.jpeg"
      },
      { 
        title: "Fluoride Therapy", 
        description: "Professional fluoride treatments to strengthen tooth enamel and prevent decay.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fluroide%20therapy-FqgbWtqW3xGfGXDI8nZ3A7XWtDTKYi.jpeg"
      },
    ],
  },
  {
    name: "Surgery",
    treatments: [
      { 
        title: "Dental Implants", 
        description: "Permanent titanium tooth roots surgically placed in the jawbone to support replacement teeth.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental_implants-p7kn73KYuKDPfAbe1ZCJP3FUQoUMkp.jpeg"
      },
      { 
        title: "Implant Prosthesis", 
        description: "Custom-designed prosthetic teeth supported by dental implants for a natural look and feel.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/implant_prosthesis-Z1SucCFK8hGCuMSnnYWHxUyNdBPoiZ.jpeg"
      },
      { 
        title: "Disimpactions", 
        description: "Surgical removal of impacted teeth, including wisdom teeth, with minimal discomfort.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disimpactions-eHMduE0fzVoxn9mhZCWUUaXSxRvpLS.jpeg"
      },
      { 
        title: "Oral Biopsy", 
        description: "Safe tissue sampling procedures for accurate diagnosis of oral conditions.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oral_biopsy-pZajcQ4BQw0CUAfE0J7YFN7XiVUR3J.jpeg"
      },
    ],
  },
  {
    name: "Cosmetic",
    treatments: [
      { 
        title: "Smile Makeover", 
        description: "Complete smile transformation combining multiple cosmetic procedures.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smile_makeover-6NSSIy3oYkP5QpqytT4T1GMXypb9dv.jpeg"
      },
      { 
        title: "Dental Veneers", 
        description: "Thin porcelain shells to cover imperfections and create a perfect smile.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental_venners-PqEuIhdsWA4WVz2N5vV28vhHwluIbm.jpeg"
      },
      { 
        title: "Cosmetic Aesthetic Dentistry", 
        description: "Comprehensive aesthetic treatments for your ideal smile.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmetric%20aesthetic%20dentistry-1mEYNxIJXY25Qoo3ufy7C2g69GE6nE.jpeg"
      },
    ],
  },
  {
    name: "Orthodontics",
    treatments: [
      { 
        title: "Traditional Braces", 
        description: "Metal braces for effective teeth alignment and bite correction.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/triditional%20braces-svqR2cRv7v26fFMwhEClHGLLvz7GBA.jpeg"
      },
      { 
        title: "Clear Aligners", 
        description: "Invisible aligners for discreet orthodontic treatment.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clear%20aligners-KWVA7dfsD0LKxtKTaYpUxXvHYeMTep.jpeg"
      },
      { 
        title: "Retainers", 
        description: "Custom retainers to maintain your perfect smile after treatment.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/retainers-9sJOH3F5qJ6GXG1wqNUC9VN8XKIAda.jpeg"
      },
      { 
        title: "Orthodontic Assessment", 
        description: "Comprehensive evaluation for personalized treatment planning.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orthodontic%20assessment-DzHJ0kWh1xBtr5kBap4H6HWzExk3Zk.jpeg"
      },
    ],
  },
  {
    name: "Management",
    treatments: [
      { 
        title: "Oral Thrush", 
        description: "Treatment for fungal infections in the mouth with antifungal medications and oral care guidance.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oral_thursh-g0URtr7HNaamVN8UCOPi1rC1HWkEOt.jpeg"
      },
      { 
        title: "Leukoplakia", 
        description: "Diagnosis and treatment of white patches in the mouth with careful monitoring and intervention.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leukoplakia-bE3OTgGnvbdiDEHZO43sCBXC5wMUBS.jpeg"
      },
      { 
        title: "TMJ Pain", 
        description: "Comprehensive treatment for temporomandibular joint disorders including therapy and splints.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmj_pain-Ll8ckGQP8qe94FvulukGvWRL6IZHge.jpeg"
      },
      { 
        title: "Bruxism", 
        description: "Treatment for teeth grinding including custom night guards and stress management techniques.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bruxism-znCKRCQ8PlFHjvw2Hlzr07IH4DRMT2.jpeg"
      },
    ],
  },
]

export function Treatments() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="treatments" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Our Treatments
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                  Comprehensive <span className="text-primary">Dental Care</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Click on a category to explore our range of specialized dental treatments.
                </p>
              </motion.div>
              
              {/* Category Menu */}
              <div className="space-y-2">
                {treatmentCategories.map((category, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all ${
                      activeCategory === index
                        ? "bg-primary text-white shadow-lg"
                        : "bg-secondary/50 text-foreground hover:bg-secondary hover:border-primary/40 border border-transparent"
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${activeCategory === index ? "rotate-90" : ""}`} />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {treatmentCategories[activeCategory].name} Treatments
                  </h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {treatmentCategories[activeCategory].treatments.map((treatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all group"
                    >
                      {/* Treatment Image */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                        <Image
                          src={treatment.image}
                          alt={treatment.title}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Treatment Info */}
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {treatment.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {treatment.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
