"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
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
  images?: string[]
}

const projects: Project[] = [
  { id: 7, src: '/images/gallery/After1.jpg', before: '/images/gallery/Before1.jpeg', final: '/images/gallery/Final1.jpg', title: 'Garden Refresh & Cleanup', category: 'Maintenance', description: 'General gardening including lawn care, debris and leaves clean-up, pruning, trimming and weeding.' },
  { id: 8, src: '/images/gallery/After2.jpg', before: '/images/gallery/Before2.jpeg', final: '/images/gallery/Final2.jpg', title: 'Lawn & Bed Restoration', category: 'Maintenance', description: 'General gardening including lawn care, debris and leaves clean-up, pruning, trimming and weeding.' },
  { id: 9, src: '/images/gallery/After3.jpg', before: '/images/gallery/Before3.jpeg', final: '/images/gallery/final3.jpg', title: 'Yard Tidy-up & Pruning', category: 'Maintenance', description: 'General gardening including lawn care, debris and leaves clean-up, pruning, trimming and weeding.' },
  { id: 10, src: '/images/gallery/After4.jpg', before: '/images/gallery/Before4.jpg', final: '/images/gallery/Final4.jpg', title: 'Garden Revival', category: 'Maintenance', description: 'General gardening including lawn care, debris and leaves clean-up, pruning, trimming and weeding.' },
  { id: 11, src: '/images/gallery/After5.jpg', images: ['/images/gallery/After5.jpg', '/images/gallery/After6.jpg', '/images/gallery/After7.jpg'], title: 'Lawn Aeration, Overseeding & Fertilization', category: 'Maintenance', description: 'Reviving tired lawns with professional aeration, overseeding, and fertilization — for thicker, greener, healthier grass that lasts all season.' },
]

const CARD_SIZES = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

function GalleryCard({ project, onOpen, eager }: { project: Project; onOpen: () => void; eager?: boolean }) {
  const [imgIndex, setImgIndex] = useState(0)
  const [showingBefore, setShowingBefore] = useState(false)

  useEffect(() => {
    if (!project.images || project.images.length < 2) return
    const interval = setInterval(() => {
      setImgIndex((i) => (i + 1) % project.images!.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [project.images])

  useEffect(() => {
    if (!project.before) return
    const interval = setInterval(() => {
      setShowingBefore((s) => !s)
    }, 3000)
    return () => clearInterval(interval)
  }, [project.before])

  return (
    <button
      onClick={onOpen}
      className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md w-full text-left bg-cream/30"
    >
      {project.images ? (
        <>
          {project.images.map((img, i) => (
            <Image
              key={img}
              src={img}
              alt={`${project.title} — ${i + 1}`}
              fill
              sizes={CARD_SIZES}
              priority={eager && i === 0}
              loading={eager && i === 0 ? undefined : 'lazy'}
              className={cn(
                "object-cover transition-opacity duration-1000 ease-in-out",
                i === imgIndex ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 rounded-full bg-offwhite transition-all duration-500",
                  i === imgIndex ? "w-5 opacity-100" : "w-1.5 opacity-60"
                )}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-10">
              <span className="text-sage text-xs font-medium uppercase tracking-wider">{project.category}</span>
              <h3 className="text-offwhite font-serif text-xl font-bold mt-1">{project.title}</h3>
            </div>
          </div>
        </>
      ) : project.before ? (
        <>
          {/* After */}
          <Image
            src={project.src}
            alt={`${project.title} — after`}
            fill
            sizes={CARD_SIZES}
            priority={eager}
            loading={eager ? undefined : 'lazy'}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              showingBefore ? "opacity-0" : "opacity-100"
            )}
          />
          {/* Before */}
          <Image
            src={project.before}
            alt={`${project.title} — before`}
            fill
            sizes={CARD_SIZES}
            priority={eager}
            loading={eager ? undefined : 'lazy'}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              showingBefore ? "opacity-100" : "opacity-0"
            )}
          />
          {/* After / Before badge */}
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-offwhite/90 text-dark text-xs font-medium tracking-wider uppercase shadow-sm z-10 min-w-[64px] text-center">
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
            sizes={CARD_SIZES}
            priority={eager}
            loading={eager ? undefined : 'lazy'}
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
  )
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const galleryImages = selectedProject?.images
  const totalImages = galleryImages?.length ?? 0

  const goPrev = () => {
    if (!totalImages) return
    setModalImageIndex((i) => (i - 1 + totalImages) % totalImages)
  }
  const goNext = () => {
    if (!totalImages) return
    setModalImageIndex((i) => (i + 1) % totalImages)
  }

  useEffect(() => {
    setModalImageIndex(0)
  }, [selectedProject])

  useEffect(() => {
    if (!selectedProject) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
      if (galleryImages) {
        if (e.key === 'ArrowLeft') goPrev()
        if (e.key === 'ArrowRight') goNext()
      }
    }
    window.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <GalleryCard project={project} onOpen={() => setSelectedProject(project)} eager={index < 3} />
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
              "relative group",
              selectedProject.final ? "aspect-[21/9] bg-cream/40" : "aspect-video bg-dark/5"
            )}>
              <Image
                src={
                  galleryImages
                    ? galleryImages[modalImageIndex]
                    : selectedProject.final ?? selectedProject.src
                }
                alt={selectedProject.title}
                fill
                priority
                sizes="(max-width: 1280px) 95vw, 1280px"
                className={selectedProject.final ? "object-contain" : "object-cover"}
                key={galleryImages ? galleryImages[modalImageIndex] : selectedProject.src}
              />
              {galleryImages && totalImages > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); goPrev() }}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-offwhite/85 hover:bg-offwhite text-dark flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goNext() }}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-offwhite/85 hover:bg-offwhite text-dark flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1.5 rounded-full bg-dark/40 backdrop-blur-sm">
                    {galleryImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setModalImageIndex(i) }}
                        aria-label={`Go to image ${i + 1}`}
                        className={cn(
                          "h-2 rounded-full bg-offwhite transition-all duration-500",
                          i === modalImageIndex ? "w-6 opacity-100" : "w-2 opacity-60 hover:opacity-90"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
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
