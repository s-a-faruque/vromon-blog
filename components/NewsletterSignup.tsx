'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage('✓ Thanks for subscribing! Check your email to confirm.')
        setEmail('')
      } else {
        setMessage('✗ Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('✗ Error subscribing. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative my-12 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 shadow-xl sm:p-12 lg:p-16">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Never Miss Travel Inspiration
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Get curated travel stories, destination guides, and insider tips delivered to your inbox
            weekly.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-lg border-0 bg-white/95 px-6 py-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-white px-8 py-4 font-bold text-blue-600 transition-all hover:bg-gray-50 hover:shadow-lg disabled:opacity-50"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm font-medium ${
                message.includes('✓') ? 'text-green-100' : 'text-red-100'
              }`}
            >
              {message}
            </p>
          )}

          <p className="mt-4 text-xs text-white/70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
