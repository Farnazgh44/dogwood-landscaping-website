import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Roboto, Caveat } from 'next/font/google'
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

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-handwritten'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dogwoodlandgardening.com'),
  title: {
    default: 'Dogwood Landscaping & Gardening | Vancouver BC Landscape Services',
    template: '%s | Dogwood Landscaping & Gardening Vancouver BC',
  },
  description: 'Dogwood Landscaping & Gardening — WorkSafeBC-registered landscaping, garden design, lawn care, pruning, and mulching services in Vancouver and the Greater Vancouver Area, BC.',
  applicationName: 'Dogwood Landscaping & Gardening',
  authors: [{ name: 'Dogwood Landscaping & Gardening' }],
  generator: 'Next.js',
  keywords: [
    'landscaping Vancouver', 'landscaping Vancouver BC', 'gardening Vancouver',
    'landscape design Vancouver', 'lawn care Vancouver', 'garden installation Vancouver',
    'pruning trimming Vancouver', 'mulching Vancouver', 'landscaping Greater Vancouver',
    'landscaping North Vancouver', 'landscaping Richmond', 'outdoor spaces Vancouver',
    'landscaping company Vancouver BC', 'professional landscaping BC',
    'lawn aeration Vancouver', 'overseeding Vancouver', 'fertilization Vancouver',
    'yard maintenance Vancouver', 'WorkSafeBC landscaping',
    'Dogwood Landscaping', 'dogwoodlandgardening',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.dogwoodlandgardening.com',
    siteName: 'Dogwood Landscaping & Gardening',
    title: 'Dogwood Landscaping & Gardening | Vancouver BC',
    description: 'WorkSafeBC-registered landscaping, garden design, lawn care, pruning, and mulching services in Vancouver and the Greater Vancouver Area.',
    images: [
      {
        url: '/images/hero-garden.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautifully landscaped garden by Dogwood Landscaping & Gardening Vancouver BC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dogwood Landscaping & Gardening | Vancouver BC',
    description: 'Professional, WorkSafeBC-registered landscaping and gardening services in Vancouver, BC.',
    images: ['/images/hero-garden.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
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
    "@type": ["LocalBusiness", "LandscapingBusiness"],
    "@id": "https://www.dogwoodlandgardening.com/#business",
    "name": "Dogwood Landscaping & Gardening",
    "alternateName": "Dogwood Land Gardening",
    "description": "WorkSafeBC-registered landscaping, garden design, lawn care, pruning, mulching, aeration, overseeding, and fertilization services in Vancouver and the Greater Vancouver Area, BC.",
    "url": "https://www.dogwoodlandgardening.com",
    "telephone": "+16043405859",
    "email": "dogwoodlandgardening@gmail.com",
    "image": "https://www.dogwoodlandgardening.com/images/hero-garden.jpg",
    "logo": "https://www.dogwoodlandgardening.com/images/logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2827,
      "longitude": -123.1207
    },
    "areaServed": [
      { "@type": "City", "name": "Vancouver" },
      { "@type": "City", "name": "North Vancouver" },
      { "@type": "City", "name": "West Vancouver" },
      { "@type": "City", "name": "Richmond" },
      { "@type": "City", "name": "Burnaby" },
      { "@type": "AdministrativeArea", "name": "Greater Vancouver" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/dogwoodlandgardening",
      "https://youtube.com/@dogwoodlandgardening"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landscaping & Gardening Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landscape Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garden Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lawn Care & Maintenance" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pruning & Trimming" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mulching & Ground Cover" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lawn Aeration, Overseeding & Fertilization" } }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.dogwoodlandgardening.com/#website",
    "url": "https://www.dogwoodlandgardening.com",
    "name": "Dogwood Landscaping & Gardening",
    "publisher": { "@id": "https://www.dogwoodlandgardening.com/#business" },
    "inLanguage": "en-CA"
  }

  return (
    <html lang="en" className={`${libreBaskerville.variable} ${roboto.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
