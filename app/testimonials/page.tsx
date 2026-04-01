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
    name: 'Sarah Mitchell',
    location: 'Portland, OR',
    rating: 5,
    text: 'Dogwood transformed our backyard into an absolute paradise. Their attention to detail and creative vision exceeded all our expectations. We now spend every evening enjoying our beautiful new patio.',
    project: 'Backyard Transformation',
  },
  {
    name: 'David & Lisa Chen',
    location: 'Lake Oswego, OR',
    rating: 5,
    text: 'From the initial consultation to the final walkthrough, the Dogwood team was professional, communicative, and incredibly talented. Our front yard is now the envy of the neighborhood!',
    project: 'Front Yard Design',
  },
  {
    name: 'Jennifer Adams',
    location: 'Beaverton, OR',
    rating: 5,
    text: 'We hired Dogwood for our irrigation system and lawn maintenance. Their team is always on time, thorough, and our lawn has never looked better. Highly recommend their maintenance services.',
    project: 'Lawn Care & Irrigation',
  },
  {
    name: 'Michael Torres',
    location: 'Tigard, OR',
    rating: 5,
    text: 'The hardscaping work Dogwood did for our outdoor kitchen area is stunning. Quality craftsmanship and beautiful materials. They really listened to what we wanted and delivered beyond expectations.',
    project: 'Outdoor Kitchen',
  },
  {
    name: 'Emily & Robert Brown',
    location: 'West Linn, OR',
    rating: 5,
    text: 'We&apos;ve used Dogwood for three separate projects over the years - garden installation, a water feature, and seasonal maintenance. Consistently excellent work every single time.',
    project: 'Multiple Projects',
  },
  {
    name: 'Amanda Peterson',
    location: 'Milwaukie, OR',
    rating: 5,
    text: 'As first-time homeowners, we had no idea where to start with our overgrown yard. Dogwood made the process easy and stress-free. They educated us along the way and created a low-maintenance garden we absolutely love.',
    project: 'Complete Yard Renovation',
  },
]

const stats = [
  { value: '4.9', label: 'Average Rating' },
  { value: '500+', label: 'Happy Clients' },
  { value: '98%', label: 'Would Recommend' },
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

      {/* Stats */}
      <section className="py-12 bg-sage">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="fade-up" delay={index * 100}>
                <div className="text-center text-offwhite">
                  <div className="font-serif text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-cream/80 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} animation="fade-up" delay={index * 100}>
                <Card className="h-full bg-white border-cream hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-cream fill-sage text-sage" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-sage/20 mb-2" />
                    <p className="text-olive mb-6 leading-relaxed">{testimonial.text}</p>
                    <div className="border-t border-cream pt-4">
                      <p className="font-serif font-bold text-dark">{testimonial.name}</p>
                      <p className="text-sm text-olive">{testimonial.location}</p>
                      <p className="text-xs text-sage mt-1">{testimonial.project}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-20 bg-olive">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-cream fill-current" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-4xl text-offwhite mb-8 leading-relaxed">
              &quot;Working with Dogwood was an absolute pleasure from start to finish. 
              They didn&apos;t just create a landscape - they created an outdoor living 
              space that has become the heart of our home.&quot;
            </blockquote>
            <cite className="text-cream not-italic">
              <span className="font-bold text-lg">The Morrison Family</span>
              <span className="block text-sm text-cream/70 mt-1">Complete Property Renovation - Portland Hills</span>
            </cite>
          </AnimatedSection>
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
            <Button asChild size="lg" className="bg-sage text-offwhite hover:bg-olive font-medium">
              <Link href="/schedule">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
