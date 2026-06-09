import Link from '@/components/Link'
import { destinations as travelDestinations } from '@/data/destinations'

export default function Home() {
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
    </>
  )
}
