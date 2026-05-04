"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { cn } from '@/lib/utils'

type Project = {
  after: string
  before: string
  final: string
  alt: string
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const [showingBefore, setShowingBefore] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowingBefore((s) => !s)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${project.alt}`}
      className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sage bg-cream/30"
    >
      <Image
        src={project.after}
        alt={`${project.alt} — after`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
        className={cn(
          "object-cover transition-opacity duration-1000 ease-in-out",
          showingBefore ? "opacity-0" : "opacity-100"
        )}
      />
      <Image
        src={project.before}
        alt={`${project.alt} — before`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
        className={cn(
          "object-cover transition-opacity duration-1000 ease-in-out",
          showingBefore ? "opacity-100" : "opacity-0"
        )}
      />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-offwhite/90 text-dark text-xs font-medium tracking-wider uppercase shadow-sm min-w-[64px] text-center">
        <span
          className={cn(
            "inline-block transition-opacity duration-700",
            showingBefore ? "opacity-0" : "opacity-100"
          )}
        >
          After
        </span>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
            showingBefore ? "opacity-100" : "opacity-0"
          )}
        >
          Before
        </span>
      </span>
      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-500 flex items-end justify-center p-4">
        <span className="text-offwhite font-medium text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          Click to view full project
        </span>
      </div>
    </button>
  )
}

const projects: Project[] = [
  {
    after: '/images/gallery/After1.jpg',
    before: '/images/gallery/Before1.jpeg',
    final: '/images/gallery/Final1.jpg',
    alt: 'Project 1',
  },
  {
    after: '/images/gallery/After2.jpg',
    before: '/images/gallery/Before2.jpeg',
    final: '/images/gallery/Final2.jpg',
    alt: 'Project 2',
  },
  {
    after: '/images/gallery/After3.jpg',
    before: '/images/gallery/Before3.jpeg',
    final: '/images/gallery/final3.jpg',
    alt: 'Project 3',
  },
]

export function RecentProjects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [openIndex])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <AnimatedSection key={project.after} animation="scale" delay={index * 100}>
            <ProjectCard project={project} index={index} onOpen={() => setOpenIndex(index)} />
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[60] bg-dark/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          style={{ animation: 'fadeIn 300ms ease-out' }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex(null)
            }}
            aria-label="Close"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-offwhite/90 text-dark hover:bg-offwhite flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            style={{ animation: 'scaleIn 350ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <Image
              src={projects[openIndex].final}
              alt={`${projects[openIndex].alt} — final`}
              fill
              sizes="(max-width: 1280px) 95vw, 1280px"
              className="object-contain bg-dark"
              priority
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  )
}
