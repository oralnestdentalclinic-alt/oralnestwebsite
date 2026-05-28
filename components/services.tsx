
"use client";
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our advanced whitening treatments.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M32 8c-12 0-20 10-20 22 0 12 8 26 20 26s20-14 20-26c0-12-8-22-20-22z"
          className="stroke-primary"
          fill="none"
        />
        <path d="M22 24l4 4 8-8 8 8 4-4" className="stroke-primary/60" />
        <circle cx="44" cy="16" r="6" className="stroke-amber-400 fill-amber-50" />
        <path d="M44 12v8M40 16h8" className="stroke-amber-400" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Dental Implants",
    description:
      "Permanent, natural-looking solutions for missing teeth.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M32 4c-8 0-14 6-14 14 0 8 4 14 10 20h8c6-6 10-12 10-20 0-8-6-14-14-14z"
          className="stroke-primary fill-primary/5"
        />
        <path
          d="M28 38h8l2 22h-12l2-22z"
          className="stroke-primary"
          fill="none"
        />
        <path d="M26 44h12M26 50h12M28 56h8" className="stroke-primary/60" />
      </svg>
    ),
  },
  {
    title: "Root Canal",
    description:
      "Painless and precise root canal therapy for healthy smiles.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M32 6c-10 0-16 8-16 18 0 10 6 20 12 30h8c6-10 12-20 12-30 0-10-6-18-16-18z"
          className="stroke-primary fill-primary/5"
        />
        <path d="M32 20v24" className="stroke-primary" strokeWidth="2" />
        <path d="M26 28l6 6 6-6" className="stroke-primary/60" />
        <circle cx="32" cy="38" r="4" className="stroke-primary fill-white" />
      </svg>
    ),
  },
  {
    title: "Orthodontics",
    description:
      "Straighten your teeth with braces or clear aligners.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect
          x="8"
          y="24"
          width="48"
          height="16"
          rx="4"
          className="stroke-primary fill-primary/5"
        />
        <rect x="14" y="28" width="8" height="8" rx="1" className="stroke-primary" />
        <rect x="28" y="28" width="8" height="8" rx="1" className="stroke-primary" />
        <rect x="42" y="28" width="8" height="8" rx="1" className="stroke-primary" />
        <path d="M22 32h6M36 32h6" className="stroke-primary/60" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-12 gap-8 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {/* Left Content */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Complete <span className="text-primary">Dental Care</span>
              <br />
              Under One Roof
            </h2>
            <p className="text-muted-foreground">
              From routine checkups to advanced smile makeovers — we&apos;ve got
              you covered.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="lg:col-span-8 grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group p-6 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
