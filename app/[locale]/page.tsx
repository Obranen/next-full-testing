import Product from '../../components/Product/Product'
import {fetchProducts} from '../../async/product'
import {IProduct} from '../../interface/product'
import {getTranslator} from 'next-intl/server'

export const metadata = {
  title: 'Product',
  description: 'Product'
}

export default async function ProductPage({params: {locale}}: {params: { locale: string }}) {
  const products: IProduct[] = await fetchProducts()
  const t = await getTranslator(locale, 'Index')
  return (
    <>
      <h1>{t('title')}</h1>
      <Product products={products}/>
    </>
  )
}
