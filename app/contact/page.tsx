"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animated-section'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(604) 340-5859', href: 'tel:+16043405859' },
  { icon: Mail, label: 'Email', value: 'dogwoodlandgardening@gmail.com', href: 'mailto:dogwoodlandgardening@gmail.com' },
  { icon: MapPin, label: 'Address', value: '123 Garden Way, Portland, OR 97201', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 8am-6pm, Sat: 9am-4pm', href: '#' },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Contact Us</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mt-2 mb-6">
              Get In Touch
            </h1>
            <p className="text-olive text-lg leading-relaxed">
              Have a question or ready to start your project? We&apos;d love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fade-right">
              <Card className="bg-white border-cream">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-sage" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-dark mb-2">Message Sent!</h3>
                      <p className="text-olive mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                      <Button 
                        onClick={() => setIsSubmitted(false)} 
                        variant="outline" 
                        className="border-sage text-sage hover:bg-sage hover:text-offwhite"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-dark mb-2">First Name</label>
                            <Input id="firstName" required className="bg-cream/20 border-cream focus:border-sage" />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-2">Last Name</label>
                            <Input id="lastName" required className="bg-cream/20 border-cream focus:border-sage" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">Email</label>
                          <Input id="email" type="email" required className="bg-cream/20 border-cream focus:border-sage" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">Phone (Optional)</label>
                          <Input id="phone" type="tel" className="bg-cream/20 border-cream focus:border-sage" />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">Subject</label>
                          <Input id="subject" required className="bg-cream/20 border-cream focus:border-sage" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">Message</label>
                          <Textarea 
                            id="message" 
                            rows={5} 
                            required 
                            className="bg-cream/20 border-cream focus:border-sage resize-none"
                            placeholder="Tell us about your project..."
                          />
                        </div>
                        <Button 
                          type="submit" 
                          disabled={isLoading}
                          className="w-full bg-sage text-offwhite hover:bg-olive"
                        >
                          {isLoading ? 'Sending...' : 'Send Message'}
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-dark mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-start gap-4 p-4 bg-cream/30 rounded-lg hover:bg-cream/50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-sage" />
                        </div>
                        <div>
                          <p className="text-sm text-olive">{info.label}</p>
                          <p className="font-medium text-dark">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-sage rounded-xl text-offwhite">
                  <h3 className="font-serif text-xl font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-cream/90 mb-4">
                    For urgent inquiries, give us a call and speak directly with our team.
                  </p>
                  <Button asChild variant="outline" className="border-offwhite text-offwhite bg-transparent hover:bg-offwhite hover:text-sage">
                    <Link href="tel:+16043405859">Call Now</Link>
                  </Button>
                </div>

                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-cream/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-sage/50 mx-auto mb-4" />
                    <p className="text-olive">Map integration available</p>
                    <p className="text-sm text-olive/70">123 Garden Way, Portland, OR</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
