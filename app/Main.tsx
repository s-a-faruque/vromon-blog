import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { destinations as travelDestinations } from '@/data/destinations'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <section className="space-y-10 pb-12">
        <div className="space-y-3">
          <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-[0.24em] uppercase">
            Destinations
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Inspiring travel destinations for your next adventure
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Discover a curated travel grid of iconic places, each designed to spark your
              imagination and guide the next chapter of your journey.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {travelDestinations.map((destination) => (
            <article
              key={destination.title}
              className="hover:border-primary-500/40 overflow-hidden rounded-3xl border border-gray-200/70 bg-white/90 p-6 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-1 dark:border-gray-700/70 dark:bg-slate-900/80 dark:shadow-none"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {destination.title}
                  </h2>
                  <div className="bg-primary-500 mt-3 h-1.5 w-16 rounded-full transition-all duration-300 group-hover:w-24" />
                </div>
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  {destination.description}
                </p>
                <div>
                  <Link
                    href={`/destination/${destination.slug}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center text-sm font-semibold"
                  >
                    Explore travel stories
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
