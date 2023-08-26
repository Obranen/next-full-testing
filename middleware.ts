import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ru', 'ua'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
})

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
    '/profile', '/protected/:path*'
  ]
}