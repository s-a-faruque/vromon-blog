import Link from './Link'

const categories = [
  { name: 'Adventure', icon: '🎯', color: 'from-orange-400 to-red-500' },
  { name: 'Beach', icon: '🏖️', color: 'from-cyan-400 to-blue-500' },
  { name: 'Culture', icon: '🏛️', color: 'from-purple-400 to-pink-500' },
  { name: 'Nature', icon: '🌿', color: 'from-green-400 to-emerald-500' },
  { name: 'Food', icon: '🍜', color: 'from-yellow-400 to-orange-500' },
  { name: 'Nightlife', icon: '🌃', color: 'from-indigo-400 to-purple-500' },
]

export default function PopularCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-black text-gray-900 sm:text-3xl dark:text-white">
          Browse by Category
        </h2>
        <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/tags/${category.name.toLowerCase()}`}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
          >
            {/* Background decoration */}
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-150" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5" />

            {/* Content */}
            <div className="relative z-10">
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                {category.icon}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">{category.name}</h3>
              <p className="mt-2 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Explore stories →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
