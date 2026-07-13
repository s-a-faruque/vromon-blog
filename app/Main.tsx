'use client'

import { useState } from 'react'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import DestinationGrid from '@/components/DestinationGrid'
import BlogList from '@/components/BlogList'
import BlogGrid from '@/components/BlogGrid'
import Hero from '@/components/HeroBanner'

interface MainProps {
  posts: CoreContent<Blog>[]
}

export default function Home({ posts }: MainProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <section>
        <Hero />
        <DestinationGrid searchQuery={searchQuery} />
        {/* <BlogList /> */}
        <BlogGrid posts={posts} />
      </section>
    </>
  )
}
