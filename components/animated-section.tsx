"use client"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import type { ReactNode, HTMLAttributes } from 'react'

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale' | 'slide-up'

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer'
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0'
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0'
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0'
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0'
  },
  'fade': {
    initial: 'opacity-0',
    animate: 'opacity-100'
  },
  'scale': {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100'
  },
  'slide-up': {
    initial: 'opacity-0 translate-y-12',
    animate: 'opacity-100 translate-y-0'
  }
}

export function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  as: Component = 'div',
  className,
  ...props
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { initial, animate } = animationClasses[animation]

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all ease-out',
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
