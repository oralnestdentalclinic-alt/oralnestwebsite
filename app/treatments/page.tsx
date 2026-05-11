import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Treatments } from "@/components/treatments"
import { Appointment } from "@/components/appointment"

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Treatments
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive <span className="text-primary">Dental Care</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From routine checkups to advanced procedures, we offer a full range of 
              dental treatments to meet all your oral health needs.
            </p>
          </div>
        </div>
      </section>

      <Treatments />
      <Appointment />
      <Footer />
    </main>
  )
}
