import { notFound } from 'next/navigation'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { destinations } from '@/data/destinations'

export const generateStaticParams = async () =>
  destinations.map((destination) => ({
    slug: destination.slug,
  }))

export default async function DestinationPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const destination = destinations.find((item) => item.slug === params.slug)

  if (!destination) {
    return notFound()
  }

  return (
    <section className="space-y-10 py-12">
      <div className="space-y-3">
        <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-[0.24em] uppercase">
          Destination
        </p>
        <div className="space-y-4">
          <Link
            href="/destination"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
          >
            ← Back to destinations
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              {destination.title}
            </h1>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              {destination.description}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-200/70 bg-gray-50 dark:border-gray-700/70 dark:bg-slate-950/80">
        <Image
          src={destination.image}
          alt={`Photo of ${destination.title}`}
          width={1200}
          height={675}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.9fr_1fr]">
        <div className="space-y-6">
          <div className="space-y-5 rounded-3xl border border-gray-200/70 bg-white/90 p-8 shadow-xl shadow-slate-900/5 dark:border-gray-700/70 dark:bg-slate-900/80 dark:shadow-none">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              About this destination
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              {destination.overview}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200/70 bg-white/90 p-8 shadow-xl shadow-slate-900/5 dark:border-gray-700/70 dark:bg-slate-900/80 dark:shadow-none">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Highlights</h3>
            <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
              {destination.highlights.map((highlight) => (
                <li key={highlight} className="list-disc pl-4">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-gray-200/70 bg-slate-50 p-8 text-sm text-gray-700 shadow-xl shadow-slate-900/5 dark:border-gray-700/70 dark:bg-slate-900/80 dark:text-gray-300 dark:shadow-none">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-slate-400">
              Location
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              {destination.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-slate-400">
              Image credit
            </p>
            <p className="mt-3 leading-7">
              <Link
                href={destination.imageCreditUrl}
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {destination.imageCredit}
              </Link>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-slate-400">
              Source
            </p>
            <p className="mt-3 leading-7">
              <Link
                href={destination.wikiUrl}
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Wikimedia Commons
              </Link>
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
