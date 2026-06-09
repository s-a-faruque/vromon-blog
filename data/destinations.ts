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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Paris_Night.jpg/1200px-Paris_Night.jpg',
    imageCredit: 'Thierry Toczé',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Paris_Night.jpg',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:Paris',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kiyomizu-dera_20100509_night.jpg/1200px-Kiyomizu-dera_20100509_night.jpg',
    imageCredit: 'Sven Teschke',
    imageCreditUrl:
      'https://commons.wikimedia.org/wiki/File:Kiyomizu-dera_20100509_night.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Santorini_%28Greece%29_view_from_Firostefani.JPG/1200px-Santorini_%28Greece%29_view_from_Firostefani.JPG',
    imageCredit: 'TooCat',
    imageCreditUrl:
      'https://commons.wikimedia.org/wiki/File:Santorini_(Greece)_view_from_Firostefani.JPG',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Bali_beach.jpg/1200px-Bali_beach.jpg',
    imageCredit: 'Donnington',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Bali_beach.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Manhattan_from_the_East_River_-_April_2015.jpg/1200px-Manhattan_from_the_East_River_-_April_2015.jpg',
    imageCredit: 'David Shankbone',
    imageCreditUrl:
      'https://commons.wikimedia.org/wiki/File:Manhattan_from_the_East_River_-_April_2015.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Table_Mountain_and_victoria_%28Cape_Town%29.jpg/1200px-Table_Mountain_and_victoria_(Cape_Town).jpg',
    imageCredit: 'TnT',
    imageCreditUrl:
      'https://commons.wikimedia.org/wiki/File:Table_Mountain_and_victoria_(Cape_Town).jpg',
    wikiUrl: 'https://commons.wikimedia.org/wiki/Category:Cape_Town',
  },
]
