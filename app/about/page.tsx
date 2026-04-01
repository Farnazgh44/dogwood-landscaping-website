import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { Heart, Leaf, Users, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Dogwood Landscaping & Gardening',
  description: 'Learn about Dogwood Landscaping & Gardening - our story, values, and commitment to creating beautiful outdoor spaces.',
}

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our hearts into every project, treating your garden as if it were our own.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Eco-friendly practices and native plants are at the core of our designs.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building lasting relationships with our clients and supporting local suppliers.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to the highest standards in every aspect of our work.',
  },
]

const team = [
  { name: 'Michael Chen', role: 'Founder & Lead Designer', image: '/images/gallery/project-1.jpg' },
  { name: 'Sarah Williams', role: 'Horticulturist', image: '/images/gallery/project-2.jpg' },
  { name: 'James Rodriguez', role: 'Project Manager', image: '/images/gallery/project-3.jpg' },
]

const stats = [
  { value: '2026', label: 'Established' },
  { value: '500+', label: 'Happy Clients' },
  { value: '15+', label: 'Team Members' },
  { value: '100%', label: 'Satisfaction' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">About Us</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mt-2 mb-6">
              Our Story
            </h1>
            <p className="text-olive text-lg leading-relaxed">
              Rooted in passion, growing with purpose. Discover the heart behind Dogwood Landscaping & Gardening.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/gallery/project-4.jpg"
                    alt="Our team at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-sage text-offwhite p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="font-serif text-3xl font-bold">Est.</div>
                  <div className="text-cream">2026</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">
                From a Dream to a Blooming Reality
              </h2>
              <div className="space-y-4 text-olive leading-relaxed">
                <p>
                  Dogwood Landscaping & Gardening was born from a simple belief: that everyone deserves 
                  a beautiful outdoor space to call their own. Founded in 2026, we started with a small 
                  team and big dreams.
                </p>
                <p>
                  Today, we&apos;ve grown into a full-service landscaping company, but our core values remain 
                  unchanged. We approach every project with the same enthusiasm and attention to detail 
                  that marked our very first garden.
                </p>
                <p>
                  Our name comes from the beloved Dogwood tree - a symbol of rebirth and new beginnings. 
                  Just like this resilient tree, we help transform outdoor spaces into vibrant, thriving 
                  environments that bring joy year after year.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">What Drives Us</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mt-2 mb-4">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                <div className="text-center p-6 bg-offwhite rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">{value.title}</h3>
                  <p className="text-olive text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-sage">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="fade-up" delay={index * 100}>
                <div className="text-center text-offwhite">
                  <div className="font-serif text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-cream/80 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Our People</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mt-2 mb-4">
              Meet the Team
            </h2>
            <p className="text-olive max-w-2xl mx-auto">
              A dedicated group of professionals passionate about creating beautiful outdoor spaces.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dark">{member.name}</h3>
                  <p className="text-sage text-sm">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-olive">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-offwhite mb-4">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-cream/90 max-w-2xl mx-auto mb-8">
              Ready to transform your outdoor space? We&apos;d love to hear about your project.
            </p>
            <Button asChild size="lg" className="bg-sage text-offwhite hover:bg-sage/80 font-medium">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
