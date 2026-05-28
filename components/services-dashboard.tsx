"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const topServices = [
  {
    title: "Dental Implants",
    description: "Permanent titanium tooth roots surgically placed in the jawbone to support replacement teeth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental_implants-p7kn73KYuKDPfAbe1ZCJP3FUQoUMkp.jpeg",
  },
  {
    title: "Advanced Root Canal",
    description: "Precision root canal treatment using advanced microscopy for better outcomes and faster recovery.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advanced_rootcanal-3DV0SZpk9NH81x6RUY0Bciz9ZKVChm.jpeg",
  },
  {
    title: "Smile Makeover",
    description: "Complete smile transformation combining teeth whitening, veneers, and cosmetic procedures.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smile_makeover-6NSSIy3oYkP5QpqytT4T1GMXypb9dv.jpeg",
  },
  {
    title: "Clear Aligners",
    description: "Invisible aligners for discreet orthodontic treatment without the look of traditional braces.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clear%20aligners-KWVA7dfsD0LKxtKTaYpUxXvHYeMTep.jpeg",
  },
]

export function ServicesDashboard() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete <span className="text-primary">Dental Care</span> Under One Roof
          </h2>
          <p className="text-muted-foreground">
            From routine checkups to advanced procedures — we offer comprehensive
            dental treatments to meet all your oral health needs.
          </p>
        </motion.div>

        {/* Top 4 Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all group"
            >
              {/* Service Image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Service Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">


                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/treatments">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8 py-6"
            >
              View All Treatments
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
