import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
  { href: '/schedule', label: 'Book Now' },
]

const services = [
  'Landscape Design',
  'Garden Installation',
  'Lawn Maintenance',
  'Tree & Shrub Care',
  'Hardscaping',
  'Seasonal Cleanup',
]

export function Footer() {
  return (
    <footer className="bg-dark text-offwhite">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo-light.png"
                  alt="Dogwood Landscaping & Gardening"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Dogwood</h3>
                <p className="text-sm text-cream">Landscaping & Gardening</p>
              </div>
            </Link>
            <p className="text-sm text-cream/80 leading-relaxed">
              Creating beautiful outdoor spaces that bring joy and tranquility to your home. Est. 2026.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-olive/50 rounded-full hover:bg-sage transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-olive/50 rounded-full hover:bg-sage transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-sage transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-cream/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-cream/80">
                <MapPin size={18} className="text-sage mt-0.5 flex-shrink-0" />
                <span>123 Garden Way<br />Portland, OR 97201</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Phone size={18} className="text-sage flex-shrink-0" />
                <a href="tel:+16043405859" className="hover:text-sage transition-colors">
                  (604) 340-5859
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Mail size={18} className="text-sage flex-shrink-0" />
                <a href="mailto:dogwoodlandgardening@gmail.com" className="hover:text-sage transition-colors">
                  dogwoodlandgardening@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-olive/30">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/60">
            &copy; {new Date().getFullYear()} Dogwood Landscaping & Gardening. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream/60">
            <Link href="/privacy" className="hover:text-sage transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sage transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
