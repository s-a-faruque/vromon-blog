'use client'

import { useState } from 'react'
import Link from './Link'
import { destinations as travelDestinations } from '@/data/destinations'

export default function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredDestinations, setFilteredDestinations] = useState(travelDestinations)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.trim() === '') {
      setFilteredDestinations(travelDestinations)
    } else {
      const filtered = travelDestinations.filter(
        (dest) =>
          dest.title.toLowerCase().includes(query) || dest.description.toLowerCase().includes(query)
      )
      setFilteredDestinations(filtered)
    }
  }

  const featuredDestination = travelDestinations[0]

  return (
    <>
      {/* Hero Banner */}
      <div className="relative -mx-6 mb-12 overflow-hidden sm:-mx-10 lg:mb-16">
        <div
          className="relative h-80 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 sm:h-96 lg:h-[500px]"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)`,
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          </div>

          {/* Hero Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
            <div className="max-w-3xl space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold tracking-widest text-white/80 uppercase">
                  Discover the World
                </p>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Inspire Your Next Adventure
                </h1>
              </div>
              <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                Explore stunning destinations, hidden gems, and travel stories from around the
                globe. Start your journey today.
              </p>

              {/* Search Bar */}
              <div className="pt-4">
                <div className="mx-auto flex max-w-2xl gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search destinations, stories, places..."
                    className="flex-1 rounded-lg border-0 bg-white/95 px-6 py-3 text-gray-900 placeholder-gray-500 shadow-xl backdrop-blur-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 shadow-xl transition-all hover:bg-gray-50 hover:shadow-2xl">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destination Highlight */}
      {featuredDestination && (
        <div className="mb-12 overflow-hidden rounded-2xl border border-gray-200/50 bg-white shadow-lg lg:mb-16 dark:border-gray-700/50 dark:bg-gray-900">
          <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8 lg:p-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                  Featured Destination
                </p>
                <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl dark:text-white">
                  {featuredDestination.title}
                </h2>
              </div>
              <p className="text-base leading-8 text-gray-600 dark:text-gray-300">
                {featuredDestination.description}
              </p>
              <Link
                href={`/destination/${featuredDestination.slug}`}
                className="inline-flex w-fit items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
              >
                Explore {featuredDestination.title}
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="text-center">
                <p className="text-6xl">🌍</p>
                <p className="mt-4 font-medium text-gray-600 dark:text-gray-300">
                  Discover amazing places
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Info */}
      {searchQuery && (
        <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Found {filteredDestinations.length} destination
          {filteredDestinations.length !== 1 ? 's' : ''} matching "{searchQuery}"
        </div>
      )}
    </>
  )
}
