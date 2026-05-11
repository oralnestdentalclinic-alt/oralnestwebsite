import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Doctors } from "@/components/doctors"
import { Appointment } from "@/components/appointment"

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Team
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Expert Doctors</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our team of experienced dentists is dedicated to providing you with the 
              highest quality dental care in a comfortable environment.
            </p>
          </div>
        </div>
      </section>

      <Doctors />
      <Appointment />
      <Footer />
    </main>
  )
}
