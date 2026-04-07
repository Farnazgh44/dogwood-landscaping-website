'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative z-20 w-full max-w-2xl mx-auto px-4">
      <div
        className="relative rounded-2xl overflow-hidden border border-[#e4aeb5]/30"
        style={{ background: 'rgba(42, 68, 42, 0.92)' }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-cream/60 hover:text-cream transition-colors z-10"
          aria-label="Close offer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Main content */}
        <div className="flex items-center gap-4 px-5 py-4">
          {/* Pink circle - 15% OFF */}
          <div
            className="flex-shrink-0 w-16 h-16 rounded-full flex flex-col items-center justify-center"
            style={{ background: '#e4aeb5' }}
          >
            <span className="font-serif font-bold text-dark text-xl leading-none">15%</span>
            <span className="font-bold text-dark text-xs tracking-widest">OFF</span>
          </div>

          {/* Divider */}
          <div className="w-px h-12 bg-cream/20 flex-shrink-0" />

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[#e4aeb5] text-xs font-semibold tracking-[0.2em] uppercase mb-0.5">
              Limited Time Offer
            </p>
            <p className="text-offwhite font-serif font-bold text-lg leading-tight">
              15% Off All Services
            </p>
            <p className="text-cream/80 text-xs mt-0.5">
              Book by May 15 to enjoy our first year promotion.
            </p>
          </div>

          {/* Divider */}
          <div className="w-px h-12 bg-cream/20 flex-shrink-0 hidden sm:block" />

          {/* Dogwood flower image */}
          <div className="flex-shrink-0 hidden sm:block relative w-16 h-16">
            <Image
              src="/images/Deal.png"
              alt="Dogwood flower"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 py-1.5 px-5 flex items-center justify-center gap-3">
          <span className="text-cream/50 text-xs">✦</span>
          <p className="text-cream/60 text-xs tracking-[0.15em] uppercase">
            Offer Ends May 15
          </p>
          <span className="text-cream/50 text-xs">•</span>
          <p className="text-cream/60 text-xs tracking-[0.15em] uppercase">
            Spots Filling Fast
          </p>
          <span className="text-cream/50 text-xs">✦</span>
        </div>
      </div>
    </div>
  )
}
