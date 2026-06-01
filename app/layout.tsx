import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PreloaderWrapper } from '@/components/preloader-wrapper'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: 'OralNest Dental Clinic | Best Dental Clinic in Wakad',
  description: 'Best Dentist in Wakad, Dental Clinic near Hinjawadi. Expert Root Canal Treatment, Cosmetic Dentistry & Dental Implants in Pimpri-Chinchwad.',
  keywords: ['Best Dentist in Wakad', 'Dental Clinic near Hinjawadi', 'Dentist near Pimpri-Chinchwad', 'Cosmetic Dentistry in Wakad', 'Root Canal Treatment Wakad'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
