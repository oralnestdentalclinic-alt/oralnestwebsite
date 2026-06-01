"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Tukaram Lipane",
    rating: 5,
    review: "I had an excellent experience at OralNest Dental Clinic for Oral Submucous Fibrosis (OSMF) treatment. Dr. Ashutosh Dighe provided exceptional care, and the results have been truly remarkable. After undergoing treatment, there has been a drastic improvement in mouth opening and overall oral comfort. Highly recommended for OSMF treatment and mouth opening therapy."
  },
  {
    name: "Mrunal Asawale",
    rating: 5,
    review: "मी बराच भीत होतो dentist कडे जाण्यास, पण OralNest Dental Clinic ने सर्वकाही बदलून दिले. Dr. Ashutosh Dighe यांनी खूप patiently सगळं explain केलं आणि treatment खूपच painless होते. Clinic एकदम neat, hygienic आणि premium feel देणारं आहे. इतका delay का केला असे वाटतं. Nक्की recommend करेन!"
  },
  {
    name: "Neel K",
    rating: 5,
    review: "I'm 16 and visited OralNest Dental Clinic. The staff was highly attentive and caring. Equipment was sterilised, booking was easy, and the waiting time was short. Overall, a very gentle and comfortable experience."
  },
  {
    name: "SWAPNIL LOKHANDE",
    rating: 5,
    review: "Accurate diagnosis with attentive and caring staff. The clinic had sterilised equipment, good facilities, and immediate availability. Overall, a smooth and professional dental experience."
  },
  {
    name: "Chaitanya Bhosle",
    rating: 5,
    review: "I got my dental implant done at OralNest Dental Clinic, Wakad with Dr. Ashutosh Dighe. The procedure was smooth, painless, and handled with utmost care. Excellent service and professionalism."
  },
  {
    name: "Sachin Tapkir",
    rating: 5,
    review: "Excellent experience at OralNest Dental Clinic with Dr. Ashutosh Dighe. My root canal treatment and dental cap were done smoothly and painlessly. Orthodontic treatment is also going very well."
  },
  {
    name: "VISHWAS",
    rating: 5,
    review: "Had a great experience at OralNest Dental Clinic in Wakad. The clinic is clean, modern, and well-maintained, and the staff is polite and professional. Dr. Ashutosh Dighe explained everything clearly."
  },
  {
    name: "Sreyuktha",
    rating: 5,
    review: "Top-quality dental clinic in Wakad. The dentist is very friendly, and the root canal specialist handled everything perfectly. Dental implant services were also very reliable."
  },
  {
    name: "DIGHE",
    rating: 5,
    review: "I had a great experience at OralNest Dental Clinic in Kaspate Vasti. The care was of a very high standard, and the staff were friendly and professional throughout the treatment."
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            What Our Patients Say
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real Results, <span className="text-primary">Real Smiles</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Hear from our satisfied patients about their experiences at OralNest Dental Clinic.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="bg-white rounded-2xl border border-border p-6 hover:border-primary/40 transition-all hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm whitespace-pre-wrap">
                "{testimonial.review}"
              </p>

              {/* Name */}
              <p className="font-semibold text-foreground text-sm">
                {testimonial.name}
              </p>
              <p className="text-xs text-primary">
                Verified Patient
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
