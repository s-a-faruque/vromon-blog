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

  const galleryImages = destination.galleryImages ?? []

  return (
    <section className="space-y-10">
      <div className="space-y-1">
        <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-[0.24em] uppercase">
          Destination
        </p>
        <div className="space-y-1">
          <Link
            href="/destination"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
          >
            ← Back to destinations
          </Link>
        </div>
      </div>
      <h1 className="mx-auto text-center text-3xl font-semibold">{destination.title}</h1>
      <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500">
        {destination.description}
      </p>
      <div className="mx-auto mt-10 flex h-[400px] w-full max-w-4xl items-center gap-2">
        {galleryImages.length > 0 ? (
          <div className="flex h-full w-full gap-2 overflow-hidden rounded-lg">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-full flex-grow overflow-hidden rounded-lg transition-all duration-500 hover:flex-grow-2"
              >
                <Image
                  className="h-full w-full object-cover object-center"
                  src={image}
                  alt={`${destination.title} gallery image ${index + 1}`}
                  fill
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              className="h-full w-full object-cover object-center"
              src={destination.image}
              alt={destination.title}
              fill
            />
          </div>
        )}
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.9fr_1fr]">
        <div className="space-y-6">
          <div className="space-y-5 rounded-xl border border-gray-200/70 bg-white/90 p-8 dark:border-gray-700/70 dark:bg-slate-900/80 dark:shadow-none">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              About this destination
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              {destination.overview}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200/70 bg-white/90 p-8 dark:border-gray-700/70 dark:bg-slate-900/80 dark:shadow-none">
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

        <aside className="space-y-4 rounded-xl border border-gray-200/70 bg-slate-50 p-8 text-sm text-gray-700 dark:border-gray-700/70 dark:bg-slate-900/80 dark:text-gray-300 dark:shadow-none">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-slate-400">
              Related Destinations
            </p>
          </div>
          <div className="space-y-3">
            {destinations
              .filter((d) => d.slug !== destination.slug)
              .slice(0, 5)
              .map((relatedDest) => (
                <Link
                  key={relatedDest.slug}
                  href={`/destination/${relatedDest.slug}`}
                  className="group hover:border-primary-400 dark:hover:border-primary-400 block rounded-lg border border-gray-200 bg-white p-3 transition-all hover:shadow-md dark:border-gray-600 dark:bg-slate-800"
                >
                  <p className="group-hover:text-primary-600 dark:group-hover:text-primary-400 font-semibold text-slate-900 dark:text-white">
                    {relatedDest.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {relatedDest.location}
                  </p>
                </Link>
              ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
