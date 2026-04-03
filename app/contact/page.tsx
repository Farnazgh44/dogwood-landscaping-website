"use client"

// SEO metadata is handled in layout.tsx for client components
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animated-section'
import { Mail, Phone, Clock, Send, CheckCircle2, Instagram, Youtube } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(604) 340-5859', href: 'tel:+16043405859' },
  { icon: Mail, label: 'Email', value: 'dogwoodlandgardening@gmail.com', href: 'mailto:dogwoodlandgardening@gmail.com' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 8am-4pm', href: '#' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dogwoodlandgardening?igsh=dXpub25kNWxvOWFw#',
    icon: Instagram,
    username: '@dogwoodlandgardening',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/message/NFM5PCZJKKYKP1',
    icon: null,
    username: 'Message us on WhatsApp',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@dogwoodlandgardening?si=RrQz9Rar5oGQ7JzF',
    icon: Youtube,
    username: '@dogwoodlandgardening',
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')
    try {
      const form = e.currentTarget
      const payload = {
        access_key: '7a4e2835-9a4e-4e01-8bac-1738ed4cc9f7',
        subject: 'New Contact Message - Dogwood Landscaping & Gardening',
        first_name: (form.querySelector('[name="first_name"]') as HTMLInputElement)?.value,
        last_name: (form.querySelector('[name="last_name"]') as HTMLInputElement)?.value,
        email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value,
        phone: (form.querySelector('[name="phone"]') as HTMLInputElement)?.value,
        subject_line: (form.querySelector('[name="subject_line"]') as HTMLInputElement)?.value,
        message: (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value,
      }
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (data.success) {
        setIsSubmitted(true)
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setErrorMessage('Error: ' + String(err))
    } finally {
      setIsLoading(false)
    }
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
                            <Input id="firstName" name="first_name" required className="bg-cream/20 border-cream focus:border-sage" />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-2">Last Name</label>
                            <Input id="lastName" name="last_name" required className="bg-cream/20 border-cream focus:border-sage" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">Email</label>
                          <Input id="email" name="email" type="email" required className="bg-cream/20 border-cream focus:border-sage" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">Phone (Optional)</label>
                          <Input id="phone" name="phone" type="tel" className="bg-cream/20 border-cream focus:border-sage" />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">Subject</label>
                          <Input id="subject" name="subject_line" required className="bg-cream/20 border-cream focus:border-sage" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">Message</label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="bg-cream/20 border-cream focus:border-sage resize-none"
                            placeholder="Tell us about your project..."
                          />
                        </div>
                        {errorMessage && (
                          <p className="text-red-500 text-sm text-center">
                            {errorMessage}
                          </p>
                        )}
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

                {/* Social Media */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-dark mb-4">Follow Us</h2>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-cream/30 rounded-lg hover:bg-cream/50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                          {social.icon ? (
                            <social.icon className="w-5 h-5 text-sage" />
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-sage">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-sm text-olive">{social.label}</p>
                          <p className="font-medium text-dark">{social.username}</p>
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

              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
