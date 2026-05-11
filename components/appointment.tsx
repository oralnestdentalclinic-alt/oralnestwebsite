"use client"

import { ContactForm } from "@/components/contact-form"

export function Appointment() {
  return (
    <section id="appointment" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* SAME FORM EVERYWHERE */}
          <ContactForm />

        </div>
      </div>
    </section>
  )
}