'use client'

import { useState } from 'react'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import DestinationGrid from '@/components/DestinationGrid'
import BlogList from '@/components/BlogList'
import BlogGrid from '@/components/BlogGrid'

interface MainProps {
  posts: CoreContent<Blog>[]
}

export default function Home({ posts }: MainProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <section>
        <DestinationGrid searchQuery={searchQuery} />
        {/* <BlogList /> */}
        <BlogGrid posts={posts} />
      </section>
    </>
  )
}
