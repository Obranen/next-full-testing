import {IProductState} from '../../../interface/product'
import {fetchProducts} from '../../../async/product'
import Product from '../../../components/Product/Product'
import {fetchFilters} from '../../../async/filter'
import {fetchCategories} from '../../../async/category'
import {ICategoryState} from '../../../interface/category'

export const metadata = {
  title: 'Pizza',
  description: 'Pizza'
}

const PizzaPage = async () => {
  const products = await fetchProducts().then((data: IProductState[]) => {
    return data.filter((product) => product.category === '651193713611c6c9ad5199cd')
  })
  const filtersCategory = await fetchFilters().then((data: any[]) => {
    return data.filter((filter) => filter.categoryId === '651193713611c6c9ad5199cd')
  })
  const categories = await fetchCategories().then((data: ICategoryState[]) => {
    return data.filter((category) => category.id === '651193713611c6c9ad5199cd')
  })
  return (
    <Product products={products} filtersCategory={filtersCategory} categories={categories}/>
  )
}

export default PizzaPage