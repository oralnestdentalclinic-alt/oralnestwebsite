import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PreloaderWrapper } from '@/components/preloader-wrapper'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

const siteUrl = 'https://www.oralnestclinic.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'OralNest',
  title: 'OralNest Dental Clinic',
  description: 'Best Dentist in Wakad, Dental Clinic near Hinjawadi. Expert Root Canal Treatment, Cosmetic Dentistry & Dental Implants in Pimpri-Chinchwad.',
  keywords: ['Best Dentist in Wakad', 'Dental Clinic near Hinjawadi', 'Dentist near Pimpri-Chinchwad', 'Cosmetic Dentistry in Wakad', 'Root Canal Treatment Wakad'],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'OralNest',
    title: 'OralNest Dental Clinic',
    description: 'Best Dentist in Wakad, Dental Clinic near Hinjawadi. Expert Root Canal Treatment, Cosmetic Dentistry & Dental Implants in Pimpri-Chinchwad.',
  },
  appleWebApp: {
    title: 'OralNest',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '672x672', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: 'OralNest',
  alternateName: 'OralNest Dental Clinic',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${siteUrl}/#organization`,
  name: 'OralNest',
  legalName: 'OralNest Dental Clinic',
  url: `${siteUrl}/`,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/icon.png`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <PreloaderWrapper />
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
