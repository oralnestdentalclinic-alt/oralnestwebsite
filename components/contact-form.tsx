"use client"

import { useState } from "react"
import { Send, User, Phone, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const problemTypes = [
  "General Checkup",
  "Tooth Pain",
  "Dental Implants",
  "Root Canal",
  "Teeth Whitening",
  "Orthodontics",
  "Cosmetic Dentistry",
  "TMJ Pain",
  "Oral Surgery",
  "Other",
]

interface ContactFormProps {
  variant?: "full" | "compact"
  showSubject?: boolean
  title?: string
  subtitle?: string
}

export function ContactForm({
  variant = "full",
  showSubject = true,
  title = "Send Us a Message",
  subtitle = "Fill out the form below and we'll get back to you soon."
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    problemType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Construct the payload for Web3Forms
    const payload = {
      access_key: "a1fe08ff-a008-4143-9ad7-adcee517ecb0",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject || `New Appointment: ${formData.problemType}`,
      problem_type: formData.problemType,
      message: formData.message,
      from_name: "OralNest Dental Clinic",
      to_email: "oralnestdentalclinic@gmail.com",
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", email: "", subject: "", problemType: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Common styles for both variants
  const inputStyles = "rounded-xl border-border focus:border-primary focus:ring-primary/20"

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`pl-12 ${inputStyles}`}
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`pl-12 ${inputStyles}`}
            required
          />
        </div>

        <div className="relative">
          <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <select
            value={formData.problemType}
            onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
            className="w-full pl-12 pr-10 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
            required
          >
            <option value="" disabled>Select Problem Type</option>
            {problemTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>

        <Textarea
          placeholder="Describe your issue..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          className={`${inputStyles} resize-none`}
        />

        {submitStatus === "success" && (
          <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm">Sent! We'll call you soon.</div>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 rounded-xl py-6">
          {isSubmitting ? "Sending..." : "Book Appointment"}
          <Send className="w-4 h-4 ml-2" />
        </Button>
      </form>
    )
  }

  return (
    <div className="relative h-auto overflow-visible mb-12">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary/50 opacity-70 blur-sm pointer-events-none" />
      <div className="relative bg-white rounded-3xl p-8 shadow-xl h-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground mb-6">{subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputStyles} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <Input placeholder="Your phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputStyles} required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputStyles} required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">What's the issue?</label>
            <select
              value={formData.problemType}
              onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              required
            >
              <option value="" disabled>Select Issue Type</option>
              {problemTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea placeholder="Tell us more..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className={`${inputStyles} resize-none`} />
          </div>

          {submitStatus === "success" && (
            <div className="p-4 rounded-xl bg-green-50 text-green-700 text-sm">Message sent successfully!</div>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 rounded-xl py-6">
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </div>
    </div>
  )
}
