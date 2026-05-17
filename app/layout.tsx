import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PreloaderWrapper } from '@/components/preloader-wrapper'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Ylsbyk3k2x1PAIRv0E6MAcPTIFJrWB.png'

export const metadata: Metadata = {
  title: 'OralNest Dental Clinic - A Safe Nest For Every Smile',
  description: 'Experience the perfect blend of advanced technology, gentle care, and beautiful results at OralNest Dental Clinic.',
  generator: 'v0.app',
  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        <PreloaderWrapper />
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
