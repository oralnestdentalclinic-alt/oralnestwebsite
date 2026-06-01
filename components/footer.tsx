"use client";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Our Doctors", href: "/doctors" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
]

const treatments = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Root Canal",
  "Dental Implants",
  "Orthodontics",
  "Teeth Whitening",
]

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-oralnest-co009vF16KpYOXKqPJiAcIwUDZr7kc.png"
                alt="OralNest Dental Clinic"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
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
            <p className="text-sm text-muted-foreground mb-4">
              We are committed to providing compassionate, advanced and
              affordable dental care for you and your family.
            </p>
            {/* Social Links - Only Instagram */}
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/oralnestclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Treatments</h4>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <Link
                    href="/treatments"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  9545705876
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  oralnestdentalclinic@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  4th Floor, Sonigara Landmark,<br />
                  Kaspate Vasti, Wakad, Pune
                </span>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => window.open('https://wa.me/919545705876', '_blank')}
                className="flex-1 px-3 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all"
              >
                WhatsApp
              </button>
              <button
                onClick={() => window.open('https://www.google.com/maps/search/OralNest+Dental+Clinic+Wakad+Pune', '_blank')}
                className="flex-1 px-3 py-2 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all"
              >
                Directions
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 OralNest Dental Clinic. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
