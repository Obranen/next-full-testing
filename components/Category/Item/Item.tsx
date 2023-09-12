import {FC} from 'react'
import {ICategoryState} from '../../../interface/category'
import Link from 'next/link'

interface IItem {
  category: ICategoryState
}

const Item: FC<IItem> = ({category}) => {
  return (
    <Link
      href={`${category.value}`}
      style={{color: '#000', display: 'block', textDecoration: 'underline'}}
    >{category.label}</Link>
  )
}

export default Item