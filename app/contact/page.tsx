"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setStatus('Sending...')
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData as any)),
      headers: { 'Content-Type': 'application/json' },
    })
    if (res.ok) setStatus('Message sent!')
    else setStatus('Failed to send. Please try again.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-secondary via-white to-brand-secondary/50">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-hero text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Send className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Talk About Your
              <br />
              <span className="text-brand-accent">Next Project</span>
            </h1>
            <p className="text-lg text-brand-secondary/90">
              We respond quickly — send us a message and our team will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', info: '+234 (0) 123 456 7890' },
                { icon: Mail, title: 'Email', info: 'info@arodonnaictarena.com' },
                { icon: MapPin, title: 'Office', info: 'Port Harcourt, Rivers State, Nigeria' },
                { icon: Clock, title: 'Working Hours', info: 'Mon - Sat: 9:00 AM - 6:00 PM' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text">{item.title}</h3>
                    <p className="text-brand-textLight">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <form action={onSubmit} className="grid gap-4">
                <input name="name" placeholder="Your name" className="rounded-lg border border-gray-200 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/40" required />
                <input name="email" placeholder="Your email" type="email" className="rounded-lg border border-gray-200 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/40" required />
                <textarea name="message" placeholder="Your message" className="rounded-lg border border-gray-200 bg-white p-3 h-32 focus:outline-none focus:ring-2 focus:ring-brand-accent/40" required />
                <Button className="bg-gradient-button hover:bg-gradient-button-hover text-brand-text">
                  Send Message
                </Button>
                {status && (
                  <p className="text-sm text-brand-textLight flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
