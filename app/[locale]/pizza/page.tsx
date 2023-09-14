import {IProductState} from '../../../interface/product'
import {fetchProducts} from '../../../async/product'
import Product from '../../../components/Product/Product'
import {ISubCategoryState} from '../../../interface/subCategory'
import {fetchSubCategories} from '../../../async/subCategory'
import {fetchCategories} from '../../../async/category'
import {ICategoryState} from '../../../interface/category'

export const metadata = {
  title: 'Pizza',
  description: 'Pizza'
}

const PizzaPage = async () => {
  const products: IProductState[] = await fetchProducts().then((data: IProductState[]) => {
    return data.filter((product) => product.category === '64fb658a77d875fb65aebd2f')
  })
  const subCategories: ISubCategoryState[] = await fetchSubCategories().then((data) => {
    return data.filter((subCategory: any) => subCategory.categoryId === '64fb658a77d875fb65aebd2f')
  })
  const categories: ISubCategoryState[] = await fetchCategories().then((data: ICategoryState[]) => {
    return data.filter((category) => category.id === '64fb658a77d875fb65aebd2f')
  })
  return (
    <Product products={products} subCategories={subCategories} categories={categories}/>
  )
}

export default PizzaPage