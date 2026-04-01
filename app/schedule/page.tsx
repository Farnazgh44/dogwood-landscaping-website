"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animated-section'
import { Calendar, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
]

const serviceTypes = [
  'Landscape Design',
  'Garden Installation',
  'Hardscaping',
  'Lawn Maintenance',
  'Irrigation Systems',
  'Other'
]

export default function SchedulePage() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedService, setSelectedService] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Generate next 14 days for date selection
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return {
      full: date.toISOString().split('T')[0],
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale" className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-offwhite" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
              Consultation Booked!
            </h1>
            <p className="text-olive mb-2">
              Your consultation has been scheduled for:
            </p>
            <p className="font-serif text-xl text-sage font-bold mb-6">
              {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
            </p>
            <p className="text-olive mb-8">
              We&apos;ve sent a confirmation email with all the details. We look forward to meeting you!
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false)
                setStep(1)
                setSelectedDate('')
                setSelectedTime('')
                setSelectedService('')
              }}
              className="bg-sage text-offwhite hover:bg-olive"
            >
              Schedule Another Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Book Now</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mt-2 mb-6">
              Schedule Your Free Consultation
            </h1>
            <p className="text-olive text-lg leading-relaxed">
              Take the first step toward your dream outdoor space. Book a free consultation with our experts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors",
                    step >= s ? "bg-sage text-offwhite" : "bg-cream text-olive"
                  )}>
                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={cn(
                      "w-24 md:w-32 h-1 mx-2 rounded transition-colors",
                      step > s ? "bg-sage" : "bg-cream"
                    )} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className={step >= 1 ? "text-sage font-medium" : "text-olive"}>Select Date</span>
              <span className={step >= 2 ? "text-sage font-medium" : "text-olive"}>Choose Service</span>
              <span className={step >= 3 ? "text-sage font-medium" : "text-olive"}>Your Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border-cream">
              <CardContent className="p-8">
                {/* Step 1: Date & Time Selection */}
                {step === 1 && (
                  <AnimatedSection animation="fade">
                    <h2 className="font-serif text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-sage" />
                      Select Date & Time
                    </h2>
                    
                    {/* Date Selection */}
                    <div className="mb-8">
                      <p className="text-sm text-olive mb-4">Choose a date:</p>
                      <div className="grid grid-cols-7 gap-2">
                        {dates.map((d) => (
                          <button
                            key={d.full}
                            onClick={() => setSelectedDate(d.full)}
                            className={cn(
                              "p-2 rounded-lg text-center transition-all hover:scale-105",
                              selectedDate === d.full
                                ? "bg-sage text-offwhite"
                                : "bg-cream/50 hover:bg-cream text-dark"
                            )}
                          >
                            <div className="text-xs">{d.day}</div>
                            <div className="font-bold">{d.date}</div>
                            <div className="text-xs">{d.month}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <div className="mb-8">
                        <p className="text-sm text-olive mb-4 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Select a time:
                        </p>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={cn(
                                "p-3 rounded-lg text-sm font-medium transition-all",
                                selectedTime === time
                                  ? "bg-sage text-offwhite"
                                  : "bg-cream/50 hover:bg-cream text-dark"
                              )}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedDate || !selectedTime}
                      className="w-full bg-sage text-offwhite hover:bg-olive disabled:opacity-50"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </AnimatedSection>
                )}

                {/* Step 2: Service Selection */}
                {step === 2 && (
                  <AnimatedSection animation="fade">
                    <h2 className="font-serif text-2xl font-bold text-dark mb-6">
                      What service are you interested in?
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {serviceTypes.map((service) => (
                        <button
                          key={service}
                          onClick={() => setSelectedService(service)}
                          className={cn(
                            "p-4 rounded-lg text-left transition-all border-2",
                            selectedService === service
                              ? "border-sage bg-sage/10"
                              : "border-cream hover:border-sage/50"
                          )}
                        >
                          <span className="font-medium text-dark">{service}</span>
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={() => setStep(1)}
                        variant="outline"
                        className="flex-1 border-sage text-sage hover:bg-sage hover:text-offwhite"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        onClick={() => setStep(3)}
                        disabled={!selectedService}
                        className="flex-1 bg-sage text-offwhite hover:bg-olive disabled:opacity-50"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AnimatedSection>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <AnimatedSection animation="fade">
                    <h2 className="font-serif text-2xl font-bold text-dark mb-6">
                      Your Contact Information
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-dark mb-2">First Name *</label>
                          <Input id="firstName" required className="bg-cream/20 border-cream" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-2">Last Name *</label>
                          <Input id="lastName" required className="bg-cream/20 border-cream" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">Email *</label>
                        <Input id="email" type="email" required className="bg-cream/20 border-cream" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">Phone *</label>
                        <Input id="phone" type="tel" required className="bg-cream/20 border-cream" />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-dark mb-2">Property Address *</label>
                        <Input id="address" required className="bg-cream/20 border-cream" />
                      </div>
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-dark mb-2">Additional Notes</label>
                        <Textarea 
                          id="notes" 
                          rows={3}
                          className="bg-cream/20 border-cream resize-none"
                          placeholder="Tell us more about your project..."
                        />
                      </div>

                      {/* Summary */}
                      <div className="p-4 bg-cream/30 rounded-lg">
                        <h3 className="font-medium text-dark mb-2">Booking Summary</h3>
                        <p className="text-sm text-olive">
                          {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                        </p>
                        <p className="text-sm text-olive">Service: {selectedService}</p>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          variant="outline"
                          className="flex-1 border-sage text-sage hover:bg-sage hover:text-offwhite"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-sage text-offwhite hover:bg-olive"
                        >
                          Confirm Booking
                          <CheckCircle2 className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </AnimatedSection>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
