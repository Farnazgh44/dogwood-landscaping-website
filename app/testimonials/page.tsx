import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animated-section'
import { Star, Quote, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials | Dogwood Landscaping & Gardening',
  description: 'Read what our clients say about their experience with Dogwood Landscaping & Gardening.',
}

const testimonials = [
  {
    name: 'Amytis',
    location: 'Vancouver, BC',
    rating: 5,
    text: "Very skilled and professional, they've done soil and plants installation for my yard and the results is neat and tidy. Pricing is also very reasonable, they even had a promotion which made the service beyond worth it! I'm definitely gonna ask them for more services since they're also a local business I feel good to support!",
  },
  {
    name: 'Rachel Miller Yasser',
    location: 'Richmond, BC',
    rating: 5,
    text: 'Farzam will go above and beyond to ensure your lawn looks spotless! He is responsive, reliable and professional. I highly recommend for lawn service.',
  },
  {
    name: 'Ichoric 97',
    location: 'North Vancouver, BC',
    rating: 5,
    text: "Hired to work a contract with Farzam, he's friendly, hardworking, and knowledgeable. It was brief but I recommend his services, you won't be disappointed.",
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Testimonials</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mt-2 mb-6">
              What Our Clients Say
            </h1>
            <p className="text-olive text-lg leading-relaxed">
              Don&apos;t just take our word for it. Hear from homeowners who&apos;ve experienced the Dogwood difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} animation="fade-up" delay={index * 100}>
                <Card className="h-full bg-white border-cream hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-cream fill-sage text-sage" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-sage/20 mb-2" />
                    <p className="text-olive mb-6 leading-relaxed">{testimonial.text}</p>
                    <div className="border-t border-cream pt-4 mt-auto">
                      <p className="font-serif font-bold text-dark">{testimonial.name}</p>
                      <p className="text-sm text-olive">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mb-4">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-olive max-w-2xl mx-auto mb-8">
              Start your landscaping journey with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage text-offwhite hover:bg-olive font-medium">
                <Link href="/schedule">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sage text-sage bg-transparent hover:bg-sage hover:text-offwhite font-medium">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
