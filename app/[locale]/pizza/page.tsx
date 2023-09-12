import {ICategoryState} from '../../../interface/category'
import {fetchCategories} from '../../../async/category'
import {IProductState} from '../../../interface/product'
import {fetchProducts} from '../../../async/product'
import Product from '../../../components/Product/Product'
import {ISubCategoryState} from '../../../interface/subCategory'
import {fetchSubCategories} from '../../../async/subCategory'

export const metadata = {
  title: 'Pizza',
  description: 'Pizza'
}

const PizzaPage = async () => {
  const products: IProductState[] = await fetchProducts()
  const subCategories: ISubCategoryState[] = await fetchSubCategories()
  const categories: ICategoryState[] = await fetchCategories()
  return (
    <Product products={products} subCategories={subCategories} categories={categories}/>
  )
}

export default PizzaPage