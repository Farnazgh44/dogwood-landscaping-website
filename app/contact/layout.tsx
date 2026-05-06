import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Vancouver BC Landscaping & Gardening',
  description: 'Contact Dogwood Landscaping & Gardening for landscaping, gardening, and lawn care services in Vancouver BC. Call (604) 340-5859 or email us for a free consultation.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Dogwood Landscaping & Gardening — Vancouver BC',
    description: 'Get in touch for landscaping and gardening services in Vancouver and the Greater Vancouver Area.',
    url: 'https://www.dogwoodlandgardening.com/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
