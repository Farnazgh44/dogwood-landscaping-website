import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animated-section'
import { 
  TreeDeciduous, Leaf, Shovel, Sparkles, Droplets, Scissors, 
  ArrowRight, CheckCircle2, Clock, Shield, Award 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Dogwood Landscaping & Gardening',
  description: 'Explore our comprehensive landscaping services including design, installation, maintenance, and hardscaping.',
}

const services = [
  {
    icon: TreeDeciduous,
    title: 'Landscape Design',
    description: 'Custom landscape designs that reflect your style and complement your home.',
    features: ['3D Design Renderings', 'Plant Selection Guide', 'Budget Planning', 'Phased Implementation Plans'],
  },
  {
    icon: Leaf,
    title: 'Garden Installation',
    description: 'Expert installation of flower beds, shrubs, trees, and ornamental plants.',
    features: ['Soil Preparation', 'Native Plant Selection', 'Irrigation Setup', 'Mulching & Edging'],
  },
  {
    icon: Shovel,
    title: 'Hardscaping',
    description: 'Beautiful patios, walkways, retaining walls, and outdoor living spaces.',
    features: ['Natural Stone Work', 'Paver Installation', 'Retaining Walls', 'Outdoor Kitchens'],
  },
  {
    icon: Sparkles,
    title: 'Lawn Care',
    description: 'Comprehensive lawn maintenance to keep your grass lush and healthy.',
    features: ['Weekly Mowing', 'Fertilization', 'Aeration & Overseeding', 'Weed Control'],
  },
  {
    icon: Droplets,
    title: 'Irrigation Systems',
    description: 'Smart irrigation solutions for efficient watering and water conservation.',
    features: ['System Design', 'Installation', 'Smart Controllers', 'Seasonal Adjustments'],
  },
  {
    icon: Scissors,
    title: 'Tree & Shrub Care',
    description: 'Professional pruning, trimming, and health management for your plants.',
    features: ['Seasonal Pruning', 'Disease Treatment', 'Pest Management', 'Fertilization'],
  },
]

const process = [
  { step: '01', title: 'Consultation', description: 'We visit your property to discuss your vision and assess the space.' },
  { step: '02', title: 'Design', description: 'Our designers create a custom plan tailored to your needs and budget.' },
  { step: '03', title: 'Proposal', description: 'We present a detailed proposal with timeline and transparent pricing.' },
  { step: '04', title: 'Installation', description: 'Our expert team brings your design to life with precision and care.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Our Services</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mt-2 mb-6">
              Comprehensive Landscaping Solutions
            </h1>
            <p className="text-olive text-lg leading-relaxed">
              From initial design to ongoing maintenance, we offer a complete range of services 
              to create and maintain your perfect outdoor space.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
                <Card className="h-full bg-white border-cream hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-sage" />
                    </div>
                    <CardTitle className="font-serif text-2xl text-dark">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-olive mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-dark">
                          <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">How We Work</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mt-2 mb-4">
              Our Process
            </h2>
            <p className="text-olive max-w-2xl mx-auto">
              A streamlined approach to bringing your landscaping vision to life.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-up" delay={index * 150}>
                <div className="text-center">
                  <div className="text-6xl font-serif font-bold text-sage/20 mb-4">{item.step}</div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-olive text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mb-4">
              Why Choose Dogwood?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: 'Timely Service', description: 'We respect your time and complete projects on schedule.' },
              { icon: Shield, title: 'Fully Insured', description: 'Peace of mind with comprehensive liability coverage.' },
              { icon: Award, title: 'Award Winning', description: 'Recognized excellence in landscape design and service.' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-olive text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-offwhite mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-cream/90 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and let&apos;s discuss your project.
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
