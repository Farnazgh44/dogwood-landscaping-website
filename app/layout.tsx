import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const libreBaskerville = Libre_Baskerville({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif'
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Dogwood Landscaping & Gardening | Vancouver BC Landscape Services',
  description: 'Dogwood Landscaping & Gardening offers professional landscaping, garden design, lawn care, pruning, and mulching services in Vancouver and the Greater Vancouver Area, BC.',
  keywords: [
    'landscaping Vancouver', 'landscaping Vancouver BC', 'gardening Vancouver',
    'landscape design Vancouver', 'lawn care Vancouver', 'garden installation Vancouver',
    'pruning trimming Vancouver', 'mulching Vancouver', 'landscaping Greater Vancouver',
    'landscaping North Vancouver', 'landscaping Richmond', 'outdoor spaces Vancouver',
    'landscaping company Vancouver BC', 'professional landscaping BC',
    'Dogwood Landscaping', 'dogwoodlandgardening',
  ],
  verification: {
    google: 'nAeXbEjW_ftICnKZ3Ol4sOrIbjI2c68jOaOjCdH1T10',
  },
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
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#6f9a73',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dogwood Landscaping & Gardening",
    "description": "Professional landscaping, garden design, lawn care, pruning, and mulching services in Vancouver and the Greater Vancouver Area, BC.",
    "url": "https://www.dogwoodlandgardening.com",
    "telephone": "+16043405859",
    "email": "dogwoodlandgardening@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "areaServed": [
      "Vancouver", "North Vancouver", "Richmond"
    ],
    "openingHours": "Mo-Fr 08:00-16:00",
    "sameAs": [
      "https://www.instagram.com/dogwoodlandgardening",
      "https://youtube.com/@dogwoodlandgardening"
    ],
    "serviceType": [
      "Landscape Design", "Garden Installation", "Lawn Care",
      "Tree & Shrub Care", "Pruning & Trimming", "Mulching & Ground Cover"
    ]
  }

  return (
    <html lang="en" className={`${libreBaskerville.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
