import {ReactNode} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import {Provider} from '../../components/Provider/Provider'
import {notFound} from 'next/navigation'
import classes from './global.module.scss'

import {NextIntlClientProvider} from 'next-intl'
import {useLocale} from 'next-intl'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout({children}: { children: ReactNode }) {
  let messages
  const locale = useLocale()

  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
    {/*<body className={inter.className}>*/}
    <body className={classes.body}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Provider>
        <header className={classes.header}><Header/></header>
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}><Footer/></footer>
      </Provider>
    </NextIntlClientProvider>
    </body>
    </html>
  )
}
