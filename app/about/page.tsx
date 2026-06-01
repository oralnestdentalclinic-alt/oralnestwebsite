"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, Award, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const doctors = [
  {
    name: "Dr. Ashutosh Dighe",
    qualifications: "BDS, MDS, PhD Scholar",
    specialty: "Oral & Maxillofacial Surgery",
    description: "At the helm of OralNest Dental Clinic, Wakad, Dr. Ashutosh Dighe exemplifies a rare confluence of diagnostic precision, clinical excellence, and academic distinction—delivering dentistry that is both sophisticated and uncompromising in its standards. With advanced expertise in Oral Medicine and Maxillofacial Radiology, Dr. Dighe is known for his ability to discern and manage complex oral conditions with exceptional clarity. His clinical focus encompasses oral mucosal diseases, temporomandibular joint disorders, orofacial pain, and advanced radiographic evaluation—ensuring that every treatment is guided by meticulous diagnosis and long-term predictability.\n\nOralNest is envisioned as a bespoke, specialist-driven dental destination, where every aspect of care is curated through a multidisciplinary approach. Each procedure is entrusted to accomplished consultants, allowing patients to benefit from dedicated expertise across a comprehensive spectrum of treatments. These include advanced dental implants, full mouth rehabilitation, precision-driven root canal treatments, orthodontic care, pediatric dentistry, gum care, and wisdom tooth surgeries, along with preventive oral cancer screening and state-of-the-art 3D intraoral scanning.\n\nThis collaborative philosophy ensures that every treatment is not only clinically precise but also aesthetically refined and functionally superior.\n\nAs a Ph.D. scholar, Dr. Dighe remains deeply engaged in research and innovation, continuously integrating evolving scientific advancements into clinical practice. His approach is defined by discretion, attention to detail, and a commitment to delivering a seamless, elevated patient experience—where trust, comfort, and clarity remain paramount.\n\nAt OralNest, dentistry transcends routine care—it is a carefully curated experience of precision, expertise, and understated luxury, designed for those who value excellence without compromise.",
    image: "/images/doctor-ashutosh.jpg",
  },
  {
    name: "Dr. Sayali Jagtap Dighe",
    qualifications: "BDS",
    specialty: "Cosmetic Dentist",
    description: "Dr. Sayali Jagtap Dighe brings a refined blend of clinical understanding and patient-centric insight to OralNest Dental Clinic, Wakad, where she is known for her thoughtful approach to patient care and treatment journey design. With a strong foundation in dentistry, she possesses an in-depth understanding of oral health, enabling her to guide patients with clarity, precision, and reassurance from the very first interaction. Her ability to simplify complex dental concerns into clear, well-structured guidance allows patients to feel informed, comfortable, and confident in their decisions.\n\nHer expertise lies in patient counselling, comprehensive case coordination, and delivering a seamless clinical experience defined by attention to detail and understated elegance. Dr. Sayali is recognised for her calm, empathetic communication and her commitment to maintaining the highest standards of professionalism and care. Her presence ensures that every patient journey is not only clinically sound but also thoughtfully curated—reflecting the ethos of excellence, discretion, and personalised attention that defines OralNest.",
    image: "/images/doctor-sayali.jpg",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for{" "}
              <span className="text-primary">Dental Health</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              At OralNest Dental Clinic, we combine advanced technology with compassionate 
              care to deliver exceptional dental services for the whole family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Section - MOVED TO TOP (after Hero) */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Meet Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert <span className="text-primary">Dental Professionals</span>
            </h2>
            <p className="text-muted-foreground">
              Our team of skilled dentists brings years of experience and a passion for 
              exceptional patient care.
            </p>
          </motion.div>

          {/* Vertical Doctor Cards */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Doctor Image - Left Side */}
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/5 to-primary/10">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r" />
                  </div>
                  
                  {/* Doctor Info - Right Side */}
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">{doctor.qualifications}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {doctor.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{doctor.specialty}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {doctor.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - NOW SECOND */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Ylsbyk3k2x1PAIRv0E6MAcPTIFJrWB.png"
                alt="OralNest"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-muted-foreground">
                We are committed to providing compassionate, advanced, and affordable 
                dental care. Our mission is to help every patient achieve optimal oral 
                health and a beautiful smile they can be proud of.
              </p>
              <div className="space-y-4">
                {[
                  "State-of-the-art dental technology",
                  "Experienced and caring dental team",
                  "Comfortable and relaxing environment",
                  "Comprehensive treatment options",
                  "Affordable pricing with flexible payment",
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - NOW AT BOTTOM */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at OralNest Dental Clinic.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient-Centered Care",
                description: "Every treatment plan is tailored to your unique needs and preferences.",
              },
              {
                title: "Excellence in Dentistry",
                description: "We pursue the highest standards in all our dental procedures.",
              },
              {
                title: "Continuous Innovation",
                description: "We stay updated with the latest advancements in dental technology.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
