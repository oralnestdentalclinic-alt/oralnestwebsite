"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const doctors = [
  {
    name: "Dr. Ashutosh Dighe",
    qualifications: "BDS, MDS, Ph.D (Scholar) – Oral Medicine & Maxillofacial Radiology",
    specialty: "",
    image: "/images/doctor-ashutosh.jpg",
    description: "With 7+ years of clinical experience, Dr. Ashutosh specializes in comprehensive oral diagnosis, treatment planning, and advanced radiological evaluation. As the lead Oral Physician at OralNest Dental Clinic, he coordinates multidisciplinary dental care, ensuring every patient receives the most appropriate specialist-led treatment with precision, transparency, and personalized attention.",
  },
  {
    name: "Dr. Sayali Jagtap Dighe",
    qualifications: "BDS",
    specialty: "",
    image: "/images/doctor-sayali.jpg",
    description: "Dr. Sayali Jagtap Dighe brings a refined blend of clinical understanding and patient-centric insight to OralNest Dental Clinic, Wakad, where she is known for her thoughtful approach to patient care and treatment journey design. With a strong foundation in dentistry, she possesses an in-depth understanding of oral health, enabling her to guide patients with clarity, precision, and reassurance from the very first interaction. ",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
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

export function Doctors() {
  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Our Experts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Meet Our <span className="text-primary">Dental Team</span>
          </h2>
          <p className="text-muted-foreground">
            Our team of experienced dentists is dedicated to providing you with
            the highest quality dental care in a comfortable environment.
          </p>
        </div>

        {/* Doctor Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-64 bg-white overflow-hidden flex items-center justify-center p-4">
                <div className="w-48 h-48 rounded-2xl border-2 border-primary overflow-hidden shadow-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-1">
                  {doctor.qualifications}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {doctor.specialty}
                </p>
                <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line leading-relaxed">
                  {doctor.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <Link
                    href="https://www.instagram.com/oralnestclinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

