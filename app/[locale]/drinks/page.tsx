import {ICategoryState} from '../../../interface/category'
import {fetchCategories} from '../../../async/category'
import {IProductState} from '../../../interface/product'
import {fetchProducts} from '../../../async/product'
import Product from '../../../components/Product/Product'
import {fetchFilters} from '../../../async/filter'

export const metadata = {
  title: 'Drinks',
  description: 'Drinks'
}

const DrinkPage = async () => {
  const products = await fetchProducts().then((data: IProductState[]) => {
    return data.filter((product) => product.category === '651193813611c6c9ad5199ce')
  })
  const filtersCategory = await fetchFilters().then((data: any[]) => {
    return data.filter((filter) => filter.categoryId === '651193813611c6c9ad5199ce')
  })
  const categories = await fetchCategories().then((data: ICategoryState[]) => {
    return data.filter((category) => category.id === '651193813611c6c9ad5199ce')
  })
  return (
    <Product products={products} filtersCategory={filtersCategory} categories={categories}/>
  )
}

export default DrinkPage