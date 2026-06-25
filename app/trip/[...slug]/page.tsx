import PageHeader from '@/components/PageHeader'
import { notFound } from 'next/navigation'

type Location = {
  name: string
  address: string
  coordinates?: {
    latitude: number
    longitude: number
  }
}

type Activity = {
  time?: string
  activityName: string
  type?: string
  notes?: string
  location?: Location
  cost?: number
  subActivities?: Activity[]
  activities?: Activity[]
}

type Day = {
  dayNumber: number
  date: string
  theme: string
  accommodation: {
    name: string
    address: string
  }
  activities: Activity[]
}

type Itinerary = {
  tripTitle: string
  destination: string
  startDate: string
  endDate: string
  totalBudget: number
  currency: string
  days: Day[]
}

// const itinerary: Itinerary = {
//   tripTitle: 'Weekend in Paris',
//   destination: 'Paris, France',
//   startDate: '2026-07-10',
//   endDate: '2026-07-12',
//   totalBudget: 500,
//   currency: 'EUR',
//   days: [
//     {
//       dayNumber: 1,
//       date: '2026-07-10',
//       theme: 'Arrival & Iconic Landmarks',
//       accommodation: {
//         name: 'Hotel Les Deux Gares',
//         address: '2 Rue des Deux Gares, 75010 Paris',
//       },
//       activities: [
//         {
//           time: '14:30',
//           activityName: 'Check-in at Hotel',
//           type: 'lodging',
//           notes: 'Booking confirmation: #XYZ-12345',
//           subActivities: [
//             {
//               time: '14:45',
//               activityName: 'Drop off luggage',
//               type: 'logistics',
//             },
//             {
//               time: '15:15',
//               activityName: 'Order coffee',
//               type: 'food',
//               notes: 'Try the hotel lounge espresso',
//             },
//           ],
//         },
//         {
//           time: '18:00',
//           activityName: 'Eiffel Tower Sunset Viewing',
//           type: 'sightseeing',
//           location: {
//             name: 'Champ de Mars',
//             address: '5 Avenue Anatole France, 75007 Paris',
//             coordinates: {
//               latitude: 48.8584,
//               longitude: 2.2945,
//             },
//           },
//           cost: 28.5,
//         },
//       ],
//     },
//     {
//       dayNumber: 2,
//       date: '2026-07-10',
//       theme: 'Arrival & Iconic Landmarks',
//       accommodation: {
//         name: 'Hotel Les Deux Gares',
//         address: '2 Rue des Deux Gares, 75010 Paris',
//       },
//       activities: [
//         {
//           time: '14:30',
//           activityName: 'Check-in at Hotel',
//           type: 'lodging',
//           notes: 'Booking confirmation: #XYZ-12345',
//           subActivities: [
//             {
//               time: '14:45',
//               activityName: 'Drop off luggage',
//               type: 'logistics',
//             },
//             {
//               time: '15:15',
//               activityName: 'Order coffee',
//               type: 'food',
//               notes: 'Try the hotel lounge espresso',
//             },
//           ],
//         },
//         {
//           time: '18:00',
//           activityName: 'Eiffel Tower Sunset Viewing',
//           type: 'sightseeing',
//           location: {
//             name: 'Champ de Mars',
//             address: '5 Avenue Anatole France, 75007 Paris',
//             coordinates: {
//               latitude: 48.8584,
//               longitude: 2.2945,
//             },
//           },
//           cost: 28.5,
//         },
//       ],
//     },
//   ],
// }

async function getItinerary(slug: string): Promise<Itinerary> {
  try {
    // Rename the destructuring or the variable to avoid the 'module' keyword
    const itineraryData = await import(`/data/trip/${slug}.json`)
    const itinerary: Itinerary = itineraryData.default
    return itinerary
  } catch (error) {
    console.error(`Failed to load itinerary for slug: ${slug}`, error)
    return notFound()
  }
}

function ActivitySummary({ activity }: { activity: Activity }) {
  const nestedActivities = activity.subActivities || activity.activities

  return (
    <li className="space-y-2 border-t border-gray-200 bg-white p-4">
      <div className="grid gap-2 sm:grid-cols-[120px_minmax(0,_1fr)] sm:items-start">
        <div className="text-sm font-semibold text-sky-700">{activity.time || 'Any time'}</div>
        <div className="text-sm">
          <p className="font-semibold text-gray-900">{activity.activityName}</p>
          {activity.type ? (
            <p className="text-xs tracking-wide text-slate-500 uppercase">{activity.type}</p>
          ) : null}
          {activity.location ? (
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-medium">Location:</span> {activity.location.name},{' '}
              {activity.location.address}
            </p>
          ) : null}
          {activity.notes ? <p className="mt-1 text-sm text-gray-600">{activity.notes}</p> : null}
          {typeof activity.cost === 'number' ? (
            <p className="mt-1 text-sm text-gray-600">Cost: {activity.cost.toFixed(2)}</p>
          ) : null}
        </div>
      </div>

      {Array.isArray(nestedActivities) && nestedActivities.length > 0 ? (
        <ul className="mt-3 space-y-3 border-l border-slate-200 pl-4">
          {nestedActivities.map((nestedActivity: Activity, index: number) => (
            <ActivitySummary key={`${activity.activityName}-${index}`} activity={nestedActivity} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export default async function Example(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  // Usage:
  const itinerary = await getItinerary(slug)
  return (
    <>
      <PageHeader />
      <section className="space-y-6 px-4 py-6 sm:px-0">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h1 className="text-lg font-semibold text-slate-900">{itinerary.tripTitle}</h1>
          <p className="mt-2 text-sm text-slate-600">{itinerary.destination}</p>
          <p className="mt-1 text-sm text-slate-600">
            {itinerary.startDate} — {itinerary.endDate} · {itinerary.currency}
            {itinerary.totalBudget ? ` ${itinerary.totalBudget}` : ''}
          </p>
        </div>

        <dl className="divide-y divide-gray-100 bg-white">
          {itinerary.days.map((day) => (
            <div key={day.dayNumber} className="px-6 py-6 sm:grid sm:grid-cols-5 sm:gap-4">
              <dt className="flex items-center rounded-lg bg-slate-100 p-2 text-sm font-semibold text-gray-900">
                <div className="h-3.5 w-3.5 rounded-full bg-sky-400" />
                <p className="ml-3">Day {day.dayNumber}</p>
              </dt>
              <dd className="mt-4 sm:col-span-4 sm:mt-0">
                <p className="text-sm font-semibold text-gray-900">{day.theme}</p>
                <p className="mt-1 text-sm text-gray-600">{day.date}</p>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">Accommodation</p>
                  <p className="mt-1 text-sm text-gray-600">{day.accommodation.name}</p>
                  <p className="text-sm text-gray-600">{day.accommodation.address}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">Activities</p>
                  <ul className="mt-3 space-y-3">
                    {day.activities.map((activity: Activity, index: number) => (
                      <ActivitySummary
                        key={`${day.dayNumber}-${activity.activityName}-${index}`}
                        activity={activity}
                      />
                    ))}
                  </ul>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
