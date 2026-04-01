import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, Phone, Youtube } from 'lucide-react'

const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  // TESTIMONIALS HIDDEN — uncomment to restore:
  // { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
  { href: '/schedule', label: 'Book Now' },
]

const services = [
  'Landscape Design',
  'Garden Installation',
  'Lawn Care',
  'Tree & Shrub Care',
  'Pruning & Trimming',
  'Mulching & Ground Cover',
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
                <p className="text-sm text-offwhite">Landscaping & Gardening</p>
              </div>
            </Link>
            <p className="text-sm text-cream/80 leading-relaxed">
              Creating beautiful outdoor spaces that bring joy and tranquility to your home.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dogwoodlandgardening?igsh=dXpub25kNWxvOWFw#" target="_blank" rel="noopener noreferrer" className="p-2 bg-olive/50 rounded-full hover:bg-sage transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/message/NFM5PCZJKKYKP1" target="_blank" rel="noopener noreferrer" className="p-2 bg-olive/50 rounded-full hover:bg-sage transition-colors" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@dogwoodlandgardening?si=RrQz9Rar5oGQ7JzF" target="_blank" rel="noopener noreferrer" className="p-2 bg-olive/50 rounded-full hover:bg-sage transition-colors" aria-label="YouTube">
                <Youtube size={18} />
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
