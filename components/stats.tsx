"use client"

import { Award, Smile, Users, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  {
    icon: Award,
    value: "7+",
    label: "Years of Excellence",
  },
  {
    icon: Smile,
    value: "100+",
    label: "Happy Smiles",
  },
  {
    icon: CheckCircle,
    value: "99%",
    label: "Success Rate",
  },
]

export function Stats() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
