import Product from '../../components/Product/Product'
import {fetchProducts} from '../../async/product'
import {IProduct} from '../../interface/product'

export const metadata = {
  title: 'Product',
  description: 'Product'
}

export default async function ProductPage({params: {locale}}: {params: { locale: string }}) {
  const products: IProduct[] = await fetchProducts()
  return (
    <>
      <Product products={products}/>
    </>
  )
}
