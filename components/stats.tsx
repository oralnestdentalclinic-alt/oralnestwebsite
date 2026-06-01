"use client"

import { Award, Lightbulb, Star } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Award,
    title: "7+ Years of Clinical Excellence",
    description: "Delivering trusted, high-quality dental care with experience you can rely on.",
  },
  {
    icon: Lightbulb,
    title: "Advanced Digital Dentistry",
    description: "Using the latest technology for precise diagnosis, comfortable and effective treatment.",
  },
  {
    icon: Star,
    title: "5-Star Patient Experience",
    description: "Personalized care, gentle approach and comfort that make every visit a pleasant one.",
  },
]

export function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
