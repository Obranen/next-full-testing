import Product from '../../components/Product/Product'
import {fetchProducts} from '../../async/product'
import {IProductState} from '../../interface/schema/product'

export const metadata = {
  title: 'Product',
  description: 'Product'
}

export default async function ProductPage() {
  const products: IProductState[] = await fetchProducts()
  return (
    <>
      <Product products={products}/>
    </>
  )
}
