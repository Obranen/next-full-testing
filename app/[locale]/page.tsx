import Product from '../../components/Product/Product'
import {fetchProducts} from '../../async/product'
import {IProductState} from '../../interface/product'
import {fetchSubCategories} from '../../async/subCategory'
import {ISubCategoryState} from '../../interface/subCategory'
import {fetchCategories} from '../../async/category'
import {ICategoryState} from '../../interface/category'

export const metadata = {
  title: 'Product',
  description: 'Product'
}

export default async function ProductPage() {
  const products: IProductState[] = await fetchProducts()
  const subCategories: ISubCategoryState[] = await fetchSubCategories()
  const categories: ICategoryState[] = await fetchCategories()
  return (
    <>
      <Product products={products} subCategories={subCategories} categories={categories}/>
    </>
  )
}
