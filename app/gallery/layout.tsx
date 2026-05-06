import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Gallery — Vancouver Landscaping Before & After',
  description: 'Browse before-and-after photos of our Vancouver BC landscaping and gardening projects — lawn restoration, garden refreshes, pruning, aeration, overseeding, and more.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Project Gallery | Dogwood Landscaping & Gardening Vancouver',
    description: 'Before-and-after photos of real Vancouver landscaping and gardening projects.',
    url: 'https://www.dogwoodlandgardening.com/gallery',
    type: 'website',
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
