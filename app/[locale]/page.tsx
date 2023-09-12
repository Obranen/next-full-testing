import {fetchCategories} from '../../async/category'
import {ICategoryState} from '../../interface/category'
import Category from '../../components/Category/Category'

export const metadata = {
  title: 'Product',
  description: 'Product'
}

export default async function MainPage() {
  const categories: ICategoryState[] = await fetchCategories()
  return (
    <Category categories={categories}/>
  )
}
