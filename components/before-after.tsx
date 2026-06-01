"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ToothSlider } from "./tooth-slider"

export function BeforeAfter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Before/After Slider */}
          <div className="bg-white rounded-3xl border border-border p-6 shadow-sm">
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Smile Transformations
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Witness the <span className="text-primary">Transformation</span>.
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Slide left to reveal clean teeth, right to see staining
            </p>

            {/* Tooth Slider Component */}
            <ToothSlider />

            <Button
              variant="outline"
              className="mt-6 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              View More Transformations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Testimonial */}
          <motion.div
            className="bg-white rounded-3xl border border-border p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              What Our Patients Say
            </div>

            <div className="relative">
              <svg
                className="absolute -top-2 -left-2 w-10 h-10 text-primary/20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-foreground leading-relaxed pl-8">
               Had my root canal treatment done at OralNest Dental Clinic with Dr. Ashutosh Dighe, and the entire experience was excellent. As a Project Manager at Tata Consultancy Services, I really value professionalism, clear communication, and efficiency, and Dr. Dighe delivered on all three. The procedure was smooth, comfortable, and explained in detail at every step. The clinic is modern, hygienic, and well-managed. Highly recommend Dr. Ashutosh Dighe and the team for quality dental care in Wakad.😊🦷
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-primary/60"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-foreground">
Rani Dhonde</p>
                <p className="text-sm text-muted-foreground">Verified Patient</p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

           
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
