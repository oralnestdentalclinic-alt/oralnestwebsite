"use client"

import { useEffect, useRef, useState, type RefCallback } from "react"
import { motion } from "framer-motion"

interface Testimonial {
  name: string
  treatment: string
  review: string
}

const testimonials: Testimonial[] = [
  {
    name: "Rekha Siwach",
    treatment: "Wisdom Tooth Extraction",
    review: `Dr. Ashutosh performed my wisdom tooth extraction, his polite and clear communication made the entire process very reassuring. He provided detailed post-operative care instructions, which were extremely helpful for recovery. The clinic’s ambience is warm and welcoming. Overall a very positive experience✨`
  },
  {
    name: "Sahil Kadam",
    treatment: "First Dental Visit",
    review: `I’m 20 and this was my first proper dental visit without any fear.
Visited OralNest Dental Clinic in Wakad after a lot of postponing, but the experience was actually very easy. The doctor was calm, explained things clearly, and didn’t rush into treatment. Everything was done in a very systematic way and it was completely painless.
What I liked most was that nothing felt forced or confusing. If you’re searching for a dentist in Wakad who is professional and keeps things simple, this clinic is definitely worth visiting.`
  },
  {
    name: "Gaurav Jachak",
    treatment: "Gum Treatment",
    review: `I visited OralNest Dental Clinic in Wakad for bleeding gums and food getting stuck between teeth. I’m 43 and was quite worried, but since I stay in Pimple Saudagar, the clinic was very convenient.

Dr. Ashutosh Dighe explained the problem in a simple way and did the treatment very smoothly. The whole process was comfortable.

Now my bleeding has reduced a lot and food lodgement is almost gone. Overall, a very good experience. Would recommend for anyone nearby looking for good dental care`
  },
  {
    name: "OM INGOLE",
    treatment: "Gum Recession & Tooth Mobility",
    review: `I visited Oral Nest Clinic where Dr. Ashutosh Dighe and Dr. Sayali Dighe treated me for gum recession and lower tooth mobility, and I’m extremely satisfied with the results.

Dr. Ashutosh handled my case with great expertise and confidence. He explained everything clearly and made the entire treatment process very smooth and comfortable. Dr. Sayali Dighe also supported during the treatment, and together they ensured everything was done with precision and care.

I have seen significant improvement in my gum health and tooth stability, which I’m really happy about.

If you are looking for the best dental clinic in Wakad and Pimple Saudagar, I would highly recommend this clinic. The professionalism, hygiene, and patient care are excellent.

Truly one of the best dental experiences I’ve had. Highly recommended!`
  },
  {
    name: "Shubham Nale",
    treatment: "Dental Consultation & Treatment",
    review: `I had been researching quite a bit before choosing a dental clinic, as I prefer understanding the treatment properly rather than rushing into it. After going through multiple options, I decided to visit OralNest Dental Clinic in Wakad, and it turned out to be a very well-informed decision.
What stood out to me was the clarity and precision with which Dr. Ashutosh Dighe explained the diagnosis and treatment plan. Everything was discussed in a structured and logical manner, which really builds confidence when you know exactly what is being done and why. The approach here feels very systematic and specialist-driven rather than routine.
The procedure itself was smooth and surprisingly comfortable. You can clearly notice the use of modern techniques and a strong focus on maintaining hygiene and quality standards. There was no unnecessary rush, and the entire experience felt professional from start to finish.
If someone is looking for a best dentist in Wakad or a specialist dental clinic in Pimpri Chinchwad that combines clinical expertise with a thoughtful approach, I would definitely recommend OralNest Dental Clinic. It’s a place where you feel assured that the treatment is being done the right way.`
  },
  {
    name: "Roopa Shetty",
    treatment: "Dental Procedure",
    review: `I usually get nervous with dental visits, but my experience at OralNest Dental Clinic was quite comfortable. Hygiene is well maintained, which I really liked. Dr. Ashutosh explained the procedure properly and handled everything smoothly. Overall, a smooth and reassuring experience.`
  },
  {
    name: "Maksud Alam",
    treatment: "Wisdom Tooth Removal",
    review: `Got my wisdom tooth removed at OralNest Dental Clinic, Wakad by Dr. Ashutosh Dighe. The procedure was smooth and much easier than I expected. Dr. Dighe explained everything clearly and made me feel comfortable throughout. The clinic is clean, and the staff is very friendly. Recovery was also hassle-free. Highly recommend for dental treatment in Wakad.`
  },
  {
    name: "Rani Dhonde",
    treatment: "Root Canal Treatment",
    review: `Had my root canal treatment done at OralNest Dental Clinic with Dr. Ashutosh Dighe, and the entire experience was excellent. As a Project Manager at Tata Consultancy Services, I really value professionalism, clear communication, and efficiency, and Dr. Dighe delivered on all three. The procedure was smooth, comfortable, and explained in detail at every step. The clinic is modern, hygienic, and well-managed. Highly recommend Dr. Ashutosh Dighe and the team for quality dental care in Wakad.😊🦷`
  },
  {
    name: "Tukaram Lipane",
    treatment: "OSMF Treatment",
    review: `I had an excellent experience at OralNest Dental Clinic for Oral Submucous Fibrosis (OSMF) treatment. Dr. Ashutosh Dighe provided exceptional care, and the results have been truly remarkable.

Before starting treatment, mouth opening was severely restricted due to OSMF, making eating and speaking uncomfortable. After undergoing treatment at OralNest Dental Clinic, there has been a drastic improvement in mouth opening and overall oral comfort. Dr. Ashutosh Dighe explained every step of the treatment clearly and ensured a comfortable and professional experience throughout.

If you are searching for the best OSMF treatment in Wakad, Pune, or looking for an experienced dentist for oral submucous fibrosis management, I highly recommend OralNest Dental Clinic. The clinic is clean, modern, and patient-friendly, with advanced treatment options for oral diseases and dental care.

Highly recommended for anyone looking for trusted dental care, OSMF treatment, mouth opening therapy, and oral health specialists in Wakad Pune`
  },
  {
    name: "Ganesh Mule",
    treatment: "TMJ & Jaw Pain Treatment",
    review: `I visited OralNest Dental Clinic for my severe jaw pain and TMJ problem, and the treatment by Dr Ashutosh Dighe was excellent. The clinic uses advanced dental technology and modern diagnostic methods, which made the entire treatment process smooth and accurate. Dr. Ashutosh Dighe carefully explained the root cause of my TMJ pain and provided a personalized treatment plan that gave me significant relief. The staff was professional, the clinic was clean and hygienic, and appointments were managed efficiently. Highly recommended for anyone looking for advanced TMJ treatment, jaw pain treatment, and modern dental care in Chinchwad/Pune.`
  }
]

const CHAR_THRESHOLD = 260
const PREVIEW_CHARACTER_LIMIT = 240

const getPreviewText = (review: string) => {
  if (review.length <= PREVIEW_CHARACTER_LIMIT) return review

  const trimmed = review.slice(0, PREVIEW_CHARACTER_LIMIT)
  const lastSpace = trimmed.lastIndexOf(" ")

  return trimmed.slice(0, lastSpace > 0 ? lastSpace : PREVIEW_CHARACTER_LIMIT).trimEnd()
}

interface ReviewPreviewProps {
  review: string
  isExpanded: boolean
  isLongReview: boolean
  reviewRef: RefCallback<HTMLParagraphElement>
  onEllipsisClick: () => void
}

const ReviewPreview = ({ review, isExpanded, isLongReview, reviewRef, onEllipsisClick }: ReviewPreviewProps) => {
  if (isExpanded) {
    return (
      <p
        ref={reviewRef}
        tabIndex={-1}
        className="text-muted-foreground mb-4 text-sm leading-6 whitespace-pre-line outline-none"
      >
        "{review}"
      </p>
    )
  }

  if (!isLongReview) {
    return (
      <p className="text-muted-foreground mb-4 text-sm leading-6 whitespace-pre-line">
        "{review}"
      </p>
    )
  }

  const previewText = getPreviewText(review)

  return (
    <div className="mb-4 text-sm leading-6 text-muted-foreground">
      <p className="whitespace-pre-line">
        "{previewText}
        <button
          type="button"
          onClick={onEllipsisClick}
          className="ml-0.5 inline font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          aria-expanded={isExpanded}
          aria-label="Expand full Google Review"
        >
          …
        </button>
        "
      </p>
    </div>
  )
}

export function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const fullReviewRefs = useRef<Array<HTMLParagraphElement | null>>([])
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (expandedIndex === null) return

      const expandedCard = cardRefs.current[expandedIndex]
      if (expandedCard && !expandedCard.contains(event.target as Node)) {
        setExpandedIndex(null)
      }
    }

    document.addEventListener("pointerdown", handleClickOutside)
    return () => document.removeEventListener("pointerdown", handleClickOutside)
  }, [expandedIndex])

  useEffect(() => {
    if (expandedIndex === null) return

    const animationFrame = requestAnimationFrame(() => {
      const fullReview = fullReviewRefs.current[expandedIndex]
      fullReview?.focus({ preventScroll: true })
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [expandedIndex])

  useEffect(() => {
    if (expandedIndex === null) return

    const collapseExpandedReview = () => setExpandedIndex(null)
    const scrollContainer = scrollContainerRef.current

    window.addEventListener("scroll", collapseExpandedReview, { passive: true })
    scrollContainer?.addEventListener("scroll", collapseExpandedReview, { passive: true })

    return () => {
      window.removeEventListener("scroll", collapseExpandedReview)
      scrollContainer?.removeEventListener("scroll", collapseExpandedReview)
    }
  }, [expandedIndex])

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
            Real feedback from patients who visited OralNest Dental Clinic.
          </p>
        </motion.div>

        {/* Testimonials Grid on Desktop/Tablet, Horizontal Scroll on Mobile */}
        <div
          ref={scrollContainerRef}
          className="-mx-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-4 md:mx-auto md:grid md:max-w-6xl md:grid-cols-2 md:items-start md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndex === index
            const isLongReview = testimonial.review.length > CHAR_THRESHOLD

            return (
              <motion.div
                key={index}
                ref={(element) => {
                  cardRefs.current[index] = element
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="flex w-[86vw] max-w-[22rem] flex-shrink-0 snap-center self-start flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/40 hover:shadow-lg md:w-auto md:max-w-none xl:min-h-[17rem]"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">
                  {testimonial.treatment}
                </p>

                <ReviewPreview
                  review={testimonial.review}
                  isExpanded={isExpanded}
                  isLongReview={isLongReview}
                  reviewRef={(element) => {
                    fullReviewRefs.current[index] = element
                  }}
                  onEllipsisClick={() => setExpandedIndex(isExpanded ? null : index)}
                />

                <div className="mt-auto">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-primary">
                    Google Review
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
