import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animated-section'
import { Leaf, TreeDeciduous, Scissors, Sparkles, ArrowRight, Star, CheckCircle2, Layers } from 'lucide-react'
import { PromoBanner } from '@/components/promo-banner'
import { RecentProjects } from '@/components/recent-projects'

const services = [
  {
    icon: TreeDeciduous,
    title: 'Landscape Design',
    description: 'Custom designs that transform your outdoor space into a beautiful retreat.',
  },
  {
    icon: Leaf,
    title: 'Garden Installation',
    description: 'Expert planting and garden bed creation for lasting beauty.',
  },
  {
    icon: Scissors,
    title: 'Pruning & Trimming',
    description: 'Professional pruning, trimming, and shearing to keep your plants healthy and beautiful.',
  },
  {
    icon: Layers,
    title: 'Mulching & Ground Cover',
    description: 'Mulch bed installation, soil covering, and mulching to protect and enrich your garden.',
  },
]

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Awards Won' },
]

const galleryImages = [
  { src: '/images/gallery/project-1.jpg', alt: 'Modern backyard patio design' },
  { src: '/images/gallery/project-2.jpg', alt: 'Front yard landscaping' },
  { src: '/images/gallery/project-3.jpg', alt: 'Outdoor living space' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-garden.jpg"
            alt="Beautiful landscaped garden"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-offwhite">
          <AnimatedSection animation="fade-down" delay={0}>
            <div className="relative w-56 h-56 mx-auto mb-6">
              <Image
                src="/images/logo-light.png"
                alt="Dogwood Landscaping"
                fill
                className="object-contain"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="mb-8">
              <PromoBanner />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span style={{ color: '#fffbf8' }}>Precision in the Mud,</span>
              <span className="block" style={{ color: '#e4aeb5' }}>Perfection in the Yard</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-cream/90 leading-relaxed">
              Professional WorkSafeBC-registered landscaping and gardening services that bring your vision to life,
              creating beautiful, sustainable outdoor environments.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage text-offwhite hover:bg-olive font-medium">
                <Link href="/schedule">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-offwhite text-dark hover:bg-cream font-medium">
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-offwhite/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-offwhite/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>


      {/* Divider */}
      <div className="h-4 w-full" style={{ backgroundColor: '#585e47' }} />

      {/* Services Section */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">What We Do</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-olive max-w-2xl mx-auto">
              From design to installation and ongoing maintenance, we provide comprehensive 
              landscaping solutions tailored to your unique needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
                <Card className="bg-cream/30 border-cream hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-7 h-7 text-sage" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-dark mb-2">{service.title}</h3>
                    <p className="text-olive text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
            <Button asChild className="bg-sage text-offwhite hover:bg-olive">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <span className="text-sage font-medium text-sm tracking-wider uppercase">Why Choose Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Crafting Outdoor Spaces with Passion & Expertise
              </h2>
              <p className="text-olive mb-8 leading-relaxed">
                At Dogwood Landscaping & Gardening, we believe every outdoor space has the potential 
                to become a beautiful sanctuary. Our team combines artistic vision with horticultural 
                expertise to create landscapes that thrive and inspire.
              </p>
              <ul className="space-y-4">
                {[
                  'WorkSafeBC-registered landscaping and gardening services',
                  'Licensed and insured professionals',
                  'Sustainable and eco-friendly practices',
                  'Custom designs for every budget',
                  'Ongoing support and maintenance',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-dark">
                    <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 bg-sage text-offwhite hover:bg-olive">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/gallery/project-1.jpg"
                    alt="Our landscaping work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mt-2 mb-4">
              Recent Projects
            </h2>
            <p className="text-olive max-w-2xl mx-auto">
              We create outdoor spaces with care, precision, and professionalism.
            </p>
          </AnimatedSection>

          <RecentProjects />

          <AnimatedSection animation="fade-up" delay={300} className="text-center mt-12">
            <Button asChild className="bg-sage text-offwhite hover:bg-olive">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIAL PREVIEW — HIDDEN (re-enable when ready)
      <section className="py-20 bg-olive">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-cream fill-current" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-offwhite mb-6 leading-relaxed">
              &quot;Dogwood transformed our backyard into an absolute paradise. Their attention to
              detail and creative vision exceeded all our expectations.&quot;
            </blockquote>
            <cite className="text-cream not-italic">
              <span className="font-bold">Sarah Mitchell</span>
              <span className="block text-sm text-cream/70">Portland, OR</span>
            </cite>
          </AnimatedSection>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-offwhite mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-cream/90 max-w-2xl mx-auto mb-8">
              Schedule a free consultation today and let&apos;s discuss how we can bring your 
              landscaping dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark text-offwhite hover:bg-dark/80 font-medium">
                <Link href="/schedule">
                  Schedule Consultation
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
