'use client'

import { useState } from 'react'
import DestinationGrid from '@/components/DestinationGrid'
import BlogList from '@/components/BlogList'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <section>
        <DestinationGrid searchQuery={searchQuery} />
        <BlogList />
      </section>
    </>
  )
}
