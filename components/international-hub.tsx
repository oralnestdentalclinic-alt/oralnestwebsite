"use client"

import { motion } from "framer-motion"
import { Globe, Award, Shield, Clock, Plane, Heart, CheckCircle, Sparkles, DollarSign, MapPin, Quote } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const benefits = [
  {
    icon: Award,
    title: "World-Class Expertise",
    description: "Our specialists are trained at globally recognized institutions and bring decades of experience in complex dental procedures."
  },
  {
    icon: Shield,
    title: "Uncompromising Standards",
    description: "We adhere to international sterilization protocols and use only FDA-approved, globally certified materials."
  },
  {
    icon: Heart,
    title: "Personalized Concierge Care",
    description: "From airport pickup to accommodation recommendations, we handle every detail so you can focus on your health."
  }
]

const signatureTreatments = [
  "Full Mouth Dental Implants (All-on-4, All-on-6, Zygoma Implants)",
  "Smile Makeovers & Hollywood Smile Design",
  "Porcelain Veneers & Lumineers",
  "Laser Gum Recontouring",
  "Teeth-in-a-Day Procedures",
  "Bone Grafting & Sinus Lifts",
  "Digital Smile Design (DSD) Consultations"
]

const journeySteps = [
  {
    step: "01",
    title: "Virtual Consultation",
    description: "Share your dental records and photographs for a comprehensive remote assessment."
  },
  {
    step: "02",
    title: "Customized Treatment Plan",
    description: "Receive a detailed treatment plan with transparent pricing and timeline."
  },
  {
    step: "03",
    title: "Travel Coordination",
    description: "Our team assists with visa documentation, travel planning, and accommodation."
  },
  {
    step: "04",
    title: "Treatment & Recovery",
    description: "Experience your procedure in our state-of-the-art facility with dedicated aftercare."
  },
  {
    step: "05",
    title: "Follow-Up Care",
    description: "Ongoing virtual consultations ensure your continued dental health after returning home."
  }
]

const discreteJourney = [
  "Private consultation rooms ensuring complete confidentiality",
  "Flexible scheduling to accommodate your travel itinerary",
  "Dedicated patient coordinator for seamless communication",
  "Luxury recovery suites for post-procedure comfort",
  "Secure handling of all medical records and documentation"
]

const testimonials = [
  {
    name: "Sarah M.",
    location: "UK",
    quote: "Exceptional clinical precision. The cost of my implants was significantly lower than in London, but the luxury and care at OralNest far exceeded my expectations."
  },
  {
    name: "David H.",
    location: "Australia",
    quote: "A seamless experience from the first virtual consult. Dr. Dighe's team handled my full-mouth rehabilitation with world-class technology and absolute professionalism."
  },
  {
    name: "James L.",
    location: "USA",
    quote: "I chose OralNest for their transparency and high-end environment. A truly elite dental experience in the heart of Pune."
  }
]

export function InternationalHub() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3EC7BA] text-[#3EC7BA] mb-6">
              <Globe className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-medium">International Patient Services</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 leading-tight">
              International Dental Care in India | OralNest Dental Clinic, Pune
            </h1>
            <p className="text-xl md:text-2xl text-[#3EC7BA] font-medium mb-8">
              Precision Dentistry. Curated Luxury. Exceptional Outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              For those exploring dental tourism in India or seeking clarity on dental implants in India cost, OralNest Dental Clinic in Pune offers a refined alternative to conventional dental care. We cater to discerning international patients—from the UK, USA, Canada, Australia, and the Middle East—who value precision, privacy, and world-class outcomes.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              Our clinic combines advanced European and American dental technologies with the warmth of Indian hospitality, delivering results that rival the finest clinics in London, New York, or Dubai—at a fraction of the cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why OralNest Section - 3 Column Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              Why OralNest is Chosen by International Patients
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#3EC7BA]/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl border border-[#3EC7BA]/20 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#3EC7BA]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Treatments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
                Signature Treatments
              </h2>
              <p className="text-gray-600">Premium procedures tailored for international patients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {signatureTreatments.map((treatment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#3EC7BA]/30 transition-colors"
                >
                  <Sparkles className="w-5 h-5 text-[#3EC7BA] flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-gray-800">{treatment}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Call-out Box - White with Teal Border */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-10 md:p-12 border border-[#3EC7BA] shadow-sm">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3EC7BA] text-[#3EC7BA] mb-6">
                  <DollarSign className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-sm font-medium">Value Proposition</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6">
                  A Thoughtful Balance of Value & Excellence
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  We believe exceptional dental care should be accessible without compromise. At OralNest, you receive the same quality of materials, technology, and expertise found in premium Western clinics—while benefiting from India&apos;s favorable economics. Our transparent pricing means no hidden fees, and our comprehensive packages often include travel coordination, making your dental journey both seamless and cost-effective.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-6 py-3 rounded-full border border-[#3EC7BA] text-[#3EC7BA]">
                    <span className="font-medium">Up to 70% Savings</span>
                  </div>
                  <div className="px-6 py-3 rounded-full border border-[#3EC7BA] text-[#3EC7BA]">
                    <span className="font-medium">Transparent Pricing</span>
                  </div>
                  <div className="px-6 py-3 rounded-full border border-[#3EC7BA] text-[#3EC7BA]">
                    <span className="font-medium">Premium Materials</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seamless International Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3EC7BA] text-[#3EC7BA] mb-4">
              <Plane className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-medium">Your Journey</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              A Seamless International Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From your first inquiry to your final follow-up, we orchestrate every detail of your dental journey.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {journeySteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl border border-[#3EC7BA]/30 flex items-center justify-center">
                    <span className="font-serif text-2xl text-[#3EC7BA] font-semibold">{item.step}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discreet & Structured Care Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
                A Discreet & Structured Care Journey
              </h2>
              <p className="text-gray-600">Privacy and comfort at every step</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="space-y-4">
                {discreteJourney.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-[#3EC7BA] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Patient Stories - Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              Global Patient Stories
            </h2>
            <p className="text-gray-600">Experiences from our international patients</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                <Quote className="w-8 h-8 text-[#3EC7BA] mb-4" strokeWidth={1.5} />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1A1A1A]">{testimonial.name}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-[#3EC7BA]">{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Two Column */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Location Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3EC7BA] text-[#3EC7BA] mb-4">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm font-medium">Our Location</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
                Conveniently Located in Wakad, Pune
              </h2>
              <p className="text-gray-600 mb-8">
                Just 45 minutes from Pune International Airport, our clinic is situated in the upscale Wakad area, surrounded by premium hotels and restaurants perfect for your recovery stay.
              </p>
              <div className="flex flex-col gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#3EC7BA]/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#3EC7BA]" strokeWidth={1.5} />
                  </div>
                  <span>45 min from Airport</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#3EC7BA]/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#3EC7BA]" strokeWidth={1.5} />
                  </div>
                  <span>Premium Hotels Nearby</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#3EC7BA]/30 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#3EC7BA]" strokeWidth={1.5} />
                  </div>
                  <span>English-Speaking Staff</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Clinic Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/international-pagephoto-T879fvbG1BRRB2X7U4fMNAlBtrFNex.png"
                  alt="OralNest Dental Clinic Interior - Modern and Luxurious Reception Area"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#3EC7BA]" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-[#1A1A1A]">Premium Facility</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              Begin Your Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schedule a private consultation with our international patient coordinator. Share your dental concerns, and we&apos;ll craft a personalized treatment plan tailored to your needs.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ContactForm 
              variant="full"
              title="Request a Private Consultation"
              subtitle="Our international patient coordinator will respond within 24 hours."
            />
          </div>
        </div>
      </section>
    </div>
  )
}
