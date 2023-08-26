import Contact from '../../../components/Contact/Contact'
import {getTranslator} from 'next-intl/server'

export const metadata = {
  title: 'Contact',
  description: 'Send Contact'
}

const ContactPage = async ({params: {locale}}: {params: { locale: string }}) => {
  const t = await getTranslator(locale, 'Contact')
  return (
    <>
      <h1>{t('title')}</h1>
      <Contact/>
    </>
  )
}

export default ContactPage