"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  // TESTIMONIALS HIDDEN — uncomment to restore:
  // { href: '/testimonials', label: 'Testimonials' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/schedule', label: 'Book Now' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // On the home page, navbar starts transparent (dark hero image underneath).
  // On all other pages, navbar is always in the "scrolled" (light) style
  // because those pages have light-colored hero sections.
  const isHomePage = pathname === '/'
  const useDarkStyle = !isHomePage || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        useDarkStyle
          ? "bg-offwhite/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={useDarkStyle ? "/images/logo.png" : "/images/logo-light.png"}
              alt="Dogwood Landscaping & Gardening"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className={cn(
            "hidden sm:block font-serif text-lg font-bold transition-colors duration-300",
            useDarkStyle ? "text-[#111111]" : "text-offwhite"
          )}>
            Dogwood
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative font-sans text-sm font-medium transition-colors duration-300",
                link.label === "Book Now"
                  ? "bg-sage text-offwhite px-4 py-2 rounded-full hover:bg-olive hover:text-offwhite"
                  : cn(
                      useDarkStyle
                        ? pathname === link.href ? "text-sage" : "text-[#111111] hover:text-sage"
                        : pathname === link.href ? "text-pink" : "text-offwhite hover:text-pink"
                    )
              )}
            >
              {link.label}
              {pathname === link.href && link.label !== "Book Now" && (
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 rounded-full",
                  useDarkStyle ? "bg-sage" : "bg-pink"
                )} />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors",
            useDarkStyle ? "text-[#111111] hover:text-sage" : "text-offwhite hover:text-pink"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-offwhite shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-base font-medium transition-colors py-2",
                link.label === "Book Now"
                  ? "bg-sage text-offwhite px-4 py-3 rounded-full text-center hover:bg-olive"
                  : pathname === link.href
                    ? "text-sage"
                    : "text-[#111111] hover:text-sage"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
