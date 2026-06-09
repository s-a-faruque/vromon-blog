export type Destination = {
  slug: string
  title: string
  location: string
  description: string
  overview: string
  highlights: string[]
  image: string
  imageCredit: string
  imageCreditUrl: string
  wikiUrl: string
}

export const destinations: Destination[] = [
  {
    slug: 'paris',
    title: 'Paris, France',
    location: 'Île-de-France, France',
    description: 'Chic cafés, river strolls, and timeless museum moments in the city of lights.',
    overview:
      'Paris blends historic boulevards with world-class art, hidden gardens, and elegant nightlife. Wander the Seine, savor fresh pastries, and discover a city built for romantic exploration.',
    highlights: [
      'Stroll the banks of the Seine and visit the Louvre',
      'Sip coffee in Saint-Germain-des-Prés',
      'Watch the Eiffel Tower sparkle after dark',
    ],
    image:
      'https://www.parisdiscoveryguide.com/image-files/x1500-terrass-hotel-eiffel-tower-night-1x1.jpg.pagespeed.ic.aNYvUZHMJ8.jpg',
    imageCredit: 'Paris Discovery Guide',
    imageCreditUrl: 'https://www.parisdiscoveryguide.com/paris-skyline-views.html',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:Paris',
  },
  {
    slug: 'halifax',
    title: 'Halifax, Canada',
    location: 'Nova Scotia, Canada',
    description:
      'Historic waterfront strolls, vibrant culinary scenes, and ocean-side charm in the heart of the Maritimes.',
    overview:
      "Halifax seamlessly blends maritime history with a modern, energetic cultural scene. Wander the iconic wooden boardwalk, discover a thriving local culinary landscape, and explore historic citadels while enjoying sweeping views of one of the world's largest natural harbors.",
    highlights: [
      'Stroll the historic Halifax Waterfront Boardwalk and visit the Seaport Farmers Market',
      'Explore the historic grounds and take in the panoramic views at the Citadel National Historic Site',
      'Take the iconic ferry across the harbor to Dartmouth for local shops and craft breweries',
    ],
    image:
      'https://commons.wikimedia.org/wiki/Halifax,_Nova_Scotia#/media/File:Halifaxnighttime.jpg',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl:
      'https://commons.wikimedia.org/wiki/File:Halifax_Waterfront_and_Skyline_from_Dartmouth_(53245464197).jpg',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:Halifax,_Nova_Scotia',
  },
  {
    slug: 'kyoto',
    title: 'Kyoto, Japan',
    location: 'Kansai region, Japan',
    description: 'Temple gardens, sakura trails, and peaceful tea houses for slow travel.',
    overview:
      'Kyoto is a gentle city of temples, shrines, and seasonal beauty. Explore historic neighborhoods, join a tea ceremony, and let calming gardens reshape your sense of place.',
    highlights: [
      'Visit Kiyomizu-dera and Fushimi Inari Shrine',
      'Wander the Gion historic district',
      'Experience cherry blossoms in spring or maple leaves in autumn',
    ],
    image:
      'https://www.travelcaffeine.com/wp-content/uploads/2014/12/Kiyomizudera-Temple-Sunset-Wooden-Pavilion-Overlook-copy.jpg',
    imageCredit: 'Travel Caffeine',
    imageCreditUrl: 'https://www.travelcaffeine.com/kiyomizudera-temple-kyoto-photos-tips/',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:Kyoto',
  },
  {
    slug: 'santorini',
    title: 'Santorini, Greece',
    location: 'South Aegean, Greece',
    description: 'Whitewashed cliffs, cobalt seas, and sunsets that feel made for travel stories.',
    overview:
      'Santorini is the postcard-perfect island destination known for dramatic caldera views, cliffside villages, and volcanic beaches. It is ideal for sunset seekers and slow coastal escapes.',
    highlights: [
      'Watch the sunset from Oia',
      'Visit ancient Akrotiri ruins',
      'Relax on black-sand beaches',
    ],
    image:
      'https://www.strogilisantorini.com/blog/user/pages/01.home/02.caldera-santorini-greece/01-santorini-caldera-greece.jpg',
    imageCredit: 'Strogili Santorini',
    imageCreditUrl: 'https://www.strogilisantorini.com/blog/caldera-santorini-greece',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:Santorini',
  },
  {
    slug: 'bali',
    title: 'Bali, Indonesia',
    location: 'Bali province, Indonesia',
    description: 'Rainforest escapes, surf beaches, and rich island culture for curious travelers.',
    overview:
      'Bali balances lush jungle, dramatic coastline, and vibrant rituals into an island that feels both adventurous and restorative. From rice terraces to beach cafés, there is always a new path to explore.',
    highlights: [
      'Explore Ubud’s art scene and rice terraces',
      'Catch sunrise on Mount Batur',
      'Relax on beaches in Seminyak and Canggu',
    ],
    image:
      'https://cdn.prod.website-files.com/66fab24d6dde4d79b3b50865/67de721a9834260c076e97be_Tegallalang%20Rice%20Terraces.webp',
    imageCredit: '30 Sundays Club',
    imageCreditUrl: 'https://www.30sundays.club/blog/tegallalang-rice-terraces',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:Bali',
  },
  {
    slug: 'new-york',
    title: 'New York, USA',
    location: 'New York, United States',
    description: 'City energy, iconic landmarks, and endless neighborhoods to explore.',
    overview:
      'New York is a city of unrivaled scale and diversity. Every borough offers a different mood, from rooftop bars and museum nights to the quiet charm of historic brownstone-lined streets.',
    highlights: [
      'Visit Central Park and the High Line',
      'Explore museums on Museum Mile',
      'Experience vibrant neighborhoods across Manhattan and Brooklyn',
    ],
    image:
      'https://roamingtheamericas.com/wp-content/uploads/2023/07/Brooklyn-Bridge-Park-NYC-W-6467-1024x683.jpg',
    imageCredit: 'Roaming the Americas',
    imageCreditUrl: 'https://roamingtheamericas.com/brooklyn-bridge-park-guide/',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:New_York_City',
  },
  {
    slug: 'cape-town',
    title: 'Cape Town, South Africa',
    location: 'Western Cape, South Africa',
    description: 'Mountains, ocean drives, and vibrant markets that bring every trip alive.',
    overview:
      'Cape Town mixes rugged nature with cultural flair. From Table Mountain and ocean cliffs to lively waterfronts, it is a destination that rewards both adventure and relaxation.',
    highlights: [
      'Ride the Table Mountain cableway',
      'Drive along Chapman’s Peak',
      'Browse craft markets and seaside neighborhoods',
    ],
    image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/cape-town-city-tour1.jpg',
    imageCredit: 'andBeyond',
    imageCreditUrl:
      'https://www.andbeyond.com/experiences/africa/south-africa/cape-town/private-city-tour/',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:Cape_Town',
  },
]
