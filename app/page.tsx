import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { ServicesDashboard } from "@/components/services-dashboard"
import { StateOfTheArt } from "@/components/state-of-the-art"
import { ClinicSlider } from "@/components/clinic-slider"
import { Doctors } from "@/components/doctors"
import { BeforeAfter } from "@/components/before-after"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Appointment } from "@/components/appointment"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <ServicesDashboard />
      <StateOfTheArt />
      <ClinicSlider />
      <Doctors />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      <Appointment />
      <Footer />
    </main>
  )
}
