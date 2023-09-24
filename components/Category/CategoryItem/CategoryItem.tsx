import {FC} from 'react'
import {ICategoryState} from '../../../interface/category'
import Link from 'next/link'

interface ICategoryItem {
  category: ICategoryState
}

const CategoryItem: FC<ICategoryItem> = ({category}) => {
  return (
    <Link
      href={`/${category.value}`}
      style={{color: '#000', display: 'block', textDecoration: 'underline'}}
    >{category.label}</Link>
  )
}

export default CategoryItem