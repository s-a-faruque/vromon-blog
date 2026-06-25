'use client'

import { CoreContent, coreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import { allAuthors } from 'contentlayer/generated'
import Link from '@/components/Link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

interface BlogGridProps {
  posts: CoreContent<Blog>[]
  title?: string
  description?: string
}

export default function BlogGrid({
  posts,
  title = 'From the blog',
  description = 'Learn how to grow your business with our expert advice.',
}: BlogGridProps) {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">{description}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => {
            const { path, date, title, summary, tags, images, authors } = post
            const thumbnail = images && images[0]
            const authorList = authors || ['default']
            const authorDetails = authorList.map((author) => {
              const authorResults = allAuthors.find((p) => p.slug === author)
              return coreContent(authorResults as Authors)
            })
            const firstAuthor = authorDetails[0]

            return (
              <article key={path} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={date} className="text-gray-500" suppressHydrationWarning>
                    {formatDate(date, siteMetadata.locale)}
                  </time>
                  {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.slice(0, 1).map((tag) => (
                        <Link
                          key={tag}
                          href={`/tags/${tag}`}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {thumbnail && (
                  <div className="w-full pt-5">
                    <Link href={`/${path}`}>
                      <div className="relative h-48 w-full">
                        <Image
                          alt={title}
                          src={thumbnail}
                          fill
                          className="rounded-xl bg-gray-50 object-cover"
                        />
                      </div>
                    </Link>
                  </div>
                )}
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white">
                    <Link href={`/${path}`}>
                      <span className="absolute inset-0" />
                      {title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-white">
                    {summary}
                  </p>
                </div>
                {firstAuthor && (
                  <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                    {firstAuthor.avatar && (
                      <div className="relative h-10 w-10 flex-shrink-0">
                        <Image
                          alt={firstAuthor.name}
                          src={firstAuthor.avatar}
                          fill
                          className="rounded-full bg-gray-50 object-cover"
                        />
                      </div>
                    )}
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {firstAuthor.name}
                      </p>
                      {firstAuthor.occupation && (
                        <p className="text-gray-600">{firstAuthor.occupation}</p>
                      )}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
