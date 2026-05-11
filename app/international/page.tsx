import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InternationalHub } from "@/components/international-hub"

export const metadata: Metadata = {
  title: "Dental Implants India Cost | Luxury Dental Tourism Pune | OralNest Clinic",
  description: "Experience refined dental tourism in India at OralNest Pune. Premium dental implants, smile makeovers, and world-class care for international patients. Book a private consultation.",
}

export default function InternationalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InternationalHub />
      <Footer />
    </main>
  )
}
