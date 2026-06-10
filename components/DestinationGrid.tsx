import CardWithFooter from './CardWithFooter'
import Link from './Link'
import { destinations as travelDestinations } from '@/data/destinations'

interface DestinationGridProps {
  searchQuery?: string
}

export default function DestinationGrid({ searchQuery = '' }: DestinationGridProps) {
  const filtered = searchQuery
    ? travelDestinations.filter(
        (dest) =>
          dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : travelDestinations

  const displayDestinations = filtered.length > 0 ? filtered : travelDestinations

  return (
    <section className="py-4">
      <div className="mb-8">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          {searchQuery ? 'Search Results' : 'Destinations to explore'}
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>

      {displayDestinations.length === 0 && searchQuery ? (
        <div className="py-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            No destinations found matching "{searchQuery}". Try a different search.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 border-t border-gray-200 pt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {displayDestinations.map((destination) => (
            <CardWithFooter key={destination.slug} destination={destination} />
          ))}
        </div>
      )}
    </section>
  )
}
