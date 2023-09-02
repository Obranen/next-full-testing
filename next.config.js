/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'pixabay.com'
      }
    ]
  },
  env: {
    FETCH_URL: 'http://localhost:3000',
  }
}

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
)

module.exports = withNextIntl(nextConfig)
