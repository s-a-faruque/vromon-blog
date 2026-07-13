'use client'

import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function HeroBanner() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative mb-6">
        <div className="relative h-80 sm:h-96 lg:h-[500px]">
          {/* 1. Next.js Optimized Background Image */}
          <Image
            src="/static/images/man-standing-cliff-overlooking-azure-ocean-vibrant-green-sky.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />

          {/* 2. Gradient Overlay (Ensures text stays readable) */}
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.7) 0%, rgba(139, 92, 246, 0.7) 100%)`,
            }}
          />

          {/* Decorative Blur Orbs */}
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          </div>

          {/* Hero Content */}
          {/* Note: Added z-30 to keep content above the image and overlay */}
          <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
            <div className="max-w-3xl space-y-6">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full bg-white/70 px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Meet your AI trip planner -{' '}
                  <a href={siteMetadata.tripPlannerURL} className="font-semibold text-indigo-600">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Explore <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-medium tracking-tight text-white drop-shadow-xl sm:text-5xl lg:text-4xl">
                  Inspire Your Next Adventure
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
