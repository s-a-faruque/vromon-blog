/* eslint-disable prettier/prettier */
import Image from './Image'
import Link from './Link'
import type { Destination } from '@/data/destinations'

interface CardWithFooterProps {
  destination: Destination
}

export default function CardWithFooter({ destination }: CardWithFooterProps) {
  return (
    <div className="group overflow-hidden border border-gray-200/70 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700/60 dark:bg-slate-950">
      <Link
        href={`/destination/${destination.slug}`}
        className="flex h-full flex-col no-underline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none dark:focus-visible:ring-offset-slate-950"
        aria-label={`View details for ${destination.title}`}
      >
        <div className="relative h-56 overflow-hidden bg-slate-100">
          <Image
            alt={destination.title}
            src={destination.thumbnail ? `/static/images/${destination.thumbnail}` : destination.image}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            width={720}
            height={400}
          />
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-sm">
            {destination.location}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="space-y-3">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              {destination.title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{destination.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
