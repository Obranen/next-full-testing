import {ICategoryState} from '../../../interface/category'
import {fetchCategories} from '../../../async/category'
import {IProductState} from '../../../interface/product'
import {fetchProducts} from '../../../async/product'
import Product from '../../../components/Product/Product'
import {ISubCategoryState} from '../../../interface/subCategory'
import {fetchSubCategories} from '../../../async/subCategory'

export const metadata = {
  title: 'Drinks',
  description: 'Drinks'
}

const DrinkPage = async () => {
  const products: IProductState[] = await fetchProducts().then((data: IProductState[]) => {
    return data.filter((product) => product.category === '64fb5d7686487529418fbb81')
  })
  const subCategories: ISubCategoryState[] = await fetchSubCategories().then((data) => {
    return data.filter((subCategory: any) => subCategory.categoryId === '64fb5d7686487529418fbb81')
  })
  const categories: ISubCategoryState[] = await fetchCategories().then((data: ICategoryState[]) => {
    return data.filter((category) => category.id === '64fb5d7686487529418fbb81')
  })
  return (
    <Product products={products} subCategories={subCategories} categories={categories}/>
  )
}

export default DrinkPage