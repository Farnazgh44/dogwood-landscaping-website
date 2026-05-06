import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Free Consultation — Vancouver Landscaping',
  description: 'Schedule a free landscaping consultation with Dogwood Landscaping & Gardening in Vancouver BC. Choose a date and time that works for you.',
  alternates: { canonical: '/schedule' },
  openGraph: {
    title: 'Book a Free Landscaping Consultation — Vancouver BC',
    description: 'Schedule your free Vancouver landscaping consultation with Dogwood Landscaping & Gardening.',
    url: 'https://www.dogwoodlandgardening.com/schedule',
    type: 'website',
  },
}

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children
}
