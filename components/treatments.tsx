"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { allTreatments, treatmentCategories, type Treatment } from "@/lib/treatments-data"

const treatmentFilters = [
  { name: "All", treatments: allTreatments },
  ...treatmentCategories,
]

export function Treatments() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null)
  const activeFilter = treatmentFilters[activeCategory]

  return (
    <section id="treatments" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            Google Profile Treatments
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Complete <span className="text-primary">Treatment Menu</span>
          </h2>
          <p className="text-muted-foreground">
            Browse every listed treatment, filter by need, and open any card for the full details.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {treatmentFilters.map((category, index) => (
            <motion.button
              key={category.name}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.06 }}
              onClick={() => setActiveCategory(index)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === index
                  ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                  : "border-border bg-white text-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {activeFilter.name === "All" ? "All Treatments" : activeFilter.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {activeFilter.treatments.length} treatment{activeFilter.treatments.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeFilter.treatments.map((treatment, index) => (
                <motion.button
                  key={treatment.title}
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  onClick={() => setSelectedTreatment(treatment)}
                  className="group overflow-hidden rounded-2xl border border-border bg-white text-left transition-all hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="relative h-48 overflow-hidden bg-secondary/30">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary shadow-sm">
                      {treatment.group}
                    </span>
                  </div>

                  <div className="p-5">
                    <h4 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {treatment.title}
                    </h4>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {treatment.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Dialog open={Boolean(selectedTreatment)} onOpenChange={(open) => !open && setSelectedTreatment(null)}>
        <DialogContent className="max-h-[90svh] overflow-y-auto p-0 sm:max-w-3xl">
          {selectedTreatment && (
            <>
              <div className="relative h-56 overflow-hidden rounded-t-lg bg-secondary/30 sm:h-72">
                <Image
                  src={selectedTreatment.image}
                  alt={selectedTreatment.title}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-12">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white/80">
                    {selectedTreatment.group}
                  </p>
                  <DialogTitle className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {selectedTreatment.title}
                  </DialogTitle>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <DialogHeader>
                  <DialogDescription className="text-base leading-7 text-muted-foreground">
                    {selectedTreatment.detail}
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="rounded-full">
                      Close
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90">
                      <Link href="#appointment">Book Appointment</Link>
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
