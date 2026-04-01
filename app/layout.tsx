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
  title: 'Dogwood Landscaping & Gardening | Professional Landscape Services',
  description: 'Transform your outdoor space with Dogwood Landscaping & Gardening. We offer professional landscaping, garden design, lawn care, and maintenance services.',
  keywords: ['landscaping', 'gardening', 'lawn care', 'garden design', 'outdoor living', 'landscape maintenance'],
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
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
