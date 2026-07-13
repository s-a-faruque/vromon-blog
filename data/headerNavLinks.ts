import siteMetadata from './siteMetadata'
const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
]

if (siteMetadata.displayTripPlanner) {
  headerNavLinks.push({
    href: siteMetadata.tripPlannerURL,
    title: 'Trip Planner',
  })
}

export default headerNavLinks
