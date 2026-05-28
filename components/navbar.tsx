"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "International", href: "/international" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-oralnest-co009vF16KpYOXKqPJiAcIwUDZr7kc.png"
              alt="OralNest Dental Clinic"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground">
                Oral<span className="text-primary">Nest</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground -mt-1">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={scrollToAppointment}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
            >
              Book Appointment
            </Button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  setIsOpen(false)
                  scrollToAppointment()
                }}
                className="bg-primary hover:bg-primary/90 text-white rounded-full w-full mt-2"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
