/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Nunito } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
// import FooterTop from '@/components/FooterTop'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import Container from '@/components/Container'
import AppHeader from '@/components/AppHeader'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${nunito.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`${basePath}/static/favicons/favicon-96x96.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      {/* <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white"> */}
      <body className="bg-white dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <AppHeader />
              <div className="relative" id="home">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
                >
                  <div className="from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px] dark:from-blue-700"></div>
                  <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
                </div>
                <Container>
                  <div className="relative ml-auto pt-36">
                    <div className="mx-auto text-center lg:w-2/3">
                      <h1 className="text-5xl font-bold text-balance text-gray-900 md:text-6xl xl:text-7xl dark:text-white">
                        Shaping a world with{' '}
                        <span className="text-primary dark:text-white">reimagination.</span>
                      </h1>
                      <p className="mt-8 text-gray-700 dark:text-gray-300">
                        Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
                        doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum
                        soluta!
                      </p>
                      <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
                        <a
                          href="#"
                          className="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                        >
                          <span className="relative text-base font-semibold text-white">
                            Get started
                          </span>
                        </a>
                        <a
                          href="#"
                          className="before:bg-primary/10 relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max dark:before:border-gray-700 dark:before:bg-gray-800"
                        >
                          <span className="text-primary relative text-base font-semibold dark:text-white">
                            Learn more
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
              <Header />
              <main className="mb-auto">{children}</main>
            </SearchProvider>
            {/* <FooterTop /> */}
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
