import React from 'react'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

export default function MultiColumnFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8 text-gray-600 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand & Newsletter Column */}
        <div className="space-y-4 lg:col-span-2">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex h-30 items-center justify-between space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
              <div className="mr-3 w-30 overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  className="block dark:hidden"
                  src="/static/images/logo-light.png"
                  alt={`${siteMetadata.headerTitle} logo light`}
                />
                <Image
                  width={200}
                  height={200}
                  className="hidden dark:block"
                  src="/static/images/logo-dark.png"
                  alt={`${siteMetadata.headerTitle} logo dark`}
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
            Solutions
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Lorem Ipsum</li>
            <li>Marketing</li>
            <li>Commerce</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Claim</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
