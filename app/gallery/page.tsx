"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { ArrowRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = ['All', 'Landscape Design', 'Gardens', 'Maintenance']

type Project = {
  id: number
  src: string
  title: string
  category: string
  description: string
  before?: string
  final?: string
}

const projects: Project[] = [
  { id: 7, src: '/images/gallery/After1.jpg', before: '/images/gallery/Before1.jpeg', final: '/images/gallery/Final1.jpg', title: 'Garden Refresh & Cleanup', category: 'Maintenance', description: 'General gardening including lawn care, debris and leaves clean-up, pruning, trimming and weeding.' },
  { id: 8, src: '/images/gallery/After2.jpg', before: '/images/gallery/Before2.jpeg', final: '/images/gallery/Final2.jpg', title: 'Lawn & Bed Restoration', category: 'Maintenance', description: 'General gardening including lawn care, debris and leaves clean-up, pruning, trimming and weeding.' },
  { id: 9, src: '/images/gallery/After3.jpg', before: '/images/gallery/Before3.jpeg', final: '/images/gallery/final3.jpg', title: 'Yard Tidy-up & Pruning', category: 'Maintenance', description: 'General gardening including lawn care, debris and leaves clean-up, pruning, trimming and weeding.' },
  { id: 1, src: '/images/gallery/project-1.jpg', title: 'Modern Backyard Retreat', category: 'Landscape Design', description: 'Complete backyard transformation with patio and garden beds.' },
  { id: 2, src: '/images/gallery/project-2.jpg', title: 'Welcoming Front Entrance', category: 'Gardens', description: 'Curved beds and stone walkway for stunning curb appeal.' },
  { id: 3, src: '/images/gallery/project-3.jpg', title: 'Garden Transformation', category: 'Gardens', description: 'Lush garden beds with mixed plantings and natural stone accents.' },
  { id: 4, src: '/images/gallery/project-4.jpg', title: 'Zen Garden Corner', category: 'Gardens', description: 'Peaceful retreat with Japanese maple and river rocks.' },
  { id: 5, src: '/images/gallery/project-5.jpg', title: 'Kitchen Garden', category: 'Gardens', description: 'Raised beds for herbs and vegetables.' },
  { id: 6, src: '/images/gallery/project-6.jpg', title: 'Rose Arbor Entrance', category: 'Landscape Design', description: 'Romantic cottage-style garden entrance.' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  useEffect(() => {
    if (!selectedProject) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [selectedProject])

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mt-2 mb-6">
              Project Gallery
            </h1>
            <p className="text-olive text-lg leading-relaxed">
              Explore our collection of landscaping projects and get inspired for your own outdoor transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-offwhite border-b border-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-sage text-offwhite"
                    : "bg-cream/50 text-dark hover:bg-cream"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} animation="scale" delay={index * 100}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md w-full text-left"
                >
                  {project.before ? (
                    <>
                      {/* After (default) */}
                      <Image
                        src={project.src}
                        alt={`${project.title} — after`}
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
                      />
                      {/* Before (hover) */}
                      <Image
                        src={project.before}
                        alt={`${project.title} — before`}
                        fill
                        className="object-cover transition-[opacity,transform] duration-700 ease-in-out scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100"
                      />
                      {/* After / Before badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-offwhite/90 text-dark text-xs font-medium tracking-wider uppercase shadow-sm z-10">
                        <span className="inline-block transition-opacity duration-500 group-hover:opacity-0">After</span>
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Before</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-sage text-xs font-medium uppercase tracking-wider">{project.category}</span>
                          <h3 className="text-offwhite font-serif text-xl font-bold mt-1">{project.title}</h3>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-sage text-xs font-medium uppercase tracking-wider">{project.category}</span>
                          <h3 className="text-offwhite font-serif text-xl font-bold mt-1">{project.title}</h3>
                        </div>
                      </div>
                    </>
                  )}
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-dark/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 text-offwhite hover:text-pink transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div
            className={cn(
              "w-full bg-offwhite rounded-xl overflow-hidden shadow-2xl",
              selectedProject.final ? "max-w-7xl" : "max-w-4xl"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={cn(
              "relative",
              selectedProject.final ? "aspect-[21/9] bg-cream/40" : "aspect-video"
            )}>
              <Image
                src={selectedProject.final ?? selectedProject.src}
                alt={selectedProject.title}
                fill
                className={selectedProject.final ? "object-contain" : "object-cover"}
              />
            </div>
            <div className="p-6">
              <span className="text-sage text-xs font-medium uppercase tracking-wider">{selectedProject.category}</span>
              <h3 className="font-serif text-2xl font-bold text-dark mt-1 mb-2">{selectedProject.title}</h3>
              <p className="text-olive">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-offwhite mb-4">
              Love What You See?
            </h2>
            <p className="text-cream/90 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can create something beautiful for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark text-offwhite hover:bg-dark/80 font-medium">
                <Link href="/schedule">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-offwhite text-dark hover:bg-cream font-medium">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
