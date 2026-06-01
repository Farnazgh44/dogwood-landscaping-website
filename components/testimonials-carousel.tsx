"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { cn } from '@/lib/utils'

type Testimonial = {
  text: string
  name: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    text: "Farzam goes above and beyond for his services, and it certainly shows with the work he did for us! Will definitely recommend his services to anyone 😊 …",
    name: "Lulu Wang",
    rating: 5,
  },
  {
    text: "Very skilled and professional, they've done soil and plants installation for my yard and the results is neat and tidy. Pricing is also very reasonable, they even had a promotion which made the service beyond worth it! I'm definitely gonna ask them for more services since they're also a local business I feel good to support!",
    name: "Amytis",
    rating: 5,
  },
  {
    text: "Farzam will go above and beyond to ensure your lawn looks spotless! He is responsive, reliable and professional. I highly recommend for lawn service.",
    name: "Rachel Miller Yasser",
    rating: 5,
  },
  {
    text: "Hired to work a contract with Farzam, he's friendly, hardworking, and knowledgeable. It was brief but I recommend his services, you won't be disappointed.",
    name: "Ichoric 97",
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const total = testimonials.length

  const goPrev = () => setActive((i) => (i - 1 + total) % total)
  const goNext = () => setActive((i) => (i + 1) % total)

  // Mobile swipe handling
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) goNext()
    else if (distance < -minSwipeDistance) goPrev()
  }

  // Determine each card's position relative to the active one
  const getPosition = (index: number): 'center' | 'left' | 'right' | 'hidden' => {
    const diff = (index - active + total) % total
    if (diff === 0) return 'center'
    if (diff === 1) return 'right'
    if (diff === total - 1) return 'left'
    return 'hidden'
  }

  return (
    <section className="py-20 bg-olive overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-offwhite">
            Stories From Our Clients
          </h2>
        </AnimatedSection>

        <div className="relative max-w-6xl mx-auto">
          {/* Prev arrow — desktop only */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-offwhite text-dark hover:bg-cream items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next arrow — desktop only */}
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-offwhite text-dark hover:bg-cream items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards stage */}
          <div
            className="relative h-[460px] sm:h-[420px] md:h-[400px] flex items-center justify-center touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {testimonials.map((t, i) => {
              const position = getPosition(i)
              const isCenter = position === 'center'
              const isLeft = position === 'left'
              const isRight = position === 'right'
              const isHidden = position === 'hidden'

              return (
                <article
                  key={i}
                  aria-hidden={!isCenter}
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] sm:w-[80%] md:w-[560px] bg-offwhite rounded-2xl p-7 md:p-10 shadow-2xl flex flex-col justify-between min-h-[340px] md:min-h-[340px] transition-all duration-500 ease-out",
                    isCenter && "z-20 opacity-100 scale-100",
                    isLeft && "z-10 opacity-0 md:opacity-50 scale-90 -translate-x-[140%] md:-translate-x-[105%] pointer-events-none md:pointer-events-auto",
                    isRight && "z-10 opacity-0 md:opacity-50 scale-90 translate-x-[40%] md:translate-x-[5%] pointer-events-none md:pointer-events-auto",
                    isHidden && "opacity-0 scale-75 pointer-events-none"
                  )}
                  onClick={() => {
                    if (isLeft) goPrev()
                    if (isRight) goNext()
                  }}
                  style={{ cursor: isLeft || isRight ? 'pointer' : 'default' }}
                >
                  <p className="text-dark text-base md:text-lg leading-relaxed text-center">
                    {t.text}
                  </p>
                  <div className="mt-6">
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-center font-medium text-dark">— {t.name}</p>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  i === active ? "w-8 bg-offwhite" : "w-2 bg-offwhite/40 hover:bg-offwhite/70"
                )}
              />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button asChild className="bg-sage text-offwhite hover:bg-sage/80 font-medium">
            <Link href="/testimonials">View Testimonials</Link>
          </Button>
          <Button asChild className="bg-sage text-offwhite hover:bg-sage/80 font-medium">
            <a
              href="https://maps.app.goo.gl/kNch99uUDyY3KRYB9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="mr-2 h-4 w-4 fill-current" />
              Add a Review
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
