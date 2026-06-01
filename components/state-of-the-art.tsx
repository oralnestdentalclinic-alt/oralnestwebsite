"use client"

import { motion } from "framer-motion"
import { CheckSquare, Users, Clipboard, Heart } from "lucide-react"

const features = [
  {
    icon: CheckSquare,
    title: "Digital Precision Dentistry",
    description: "Advanced technology for accurate diagnosis and better outcomes.",
  },
  {
    icon: Users,
    title: "Experienced Dental Experts",
    description: "Skilled specialists committed to your oral health.",
  },
  {
    icon: Clipboard,
    title: "Transparent Treatment Planning",
    description: "Clear explanations and honest guidance at every step.",
  },
  {
    icon: Heart,
    title: "Comfort-Focused Care",
    description: "A relaxing environment and gentle care you can trust.",
  },
]

export function StateOfTheArt() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            Step into a modern, comfortable environment designed with your well-being in mind. Our clinic features the latest dental technology, ensuring precise diagnostics and gentle treatments.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
