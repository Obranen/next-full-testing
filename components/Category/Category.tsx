'use client'

import {FC} from 'react'
import {ICategoryState} from '../../interface/category'
import CategoryItem from './CategoryItem/CategoryItem'

interface ICategory {
  categories: ICategoryState[]
}

const Category: FC<ICategory> = ({categories}) => {
  return (
    <>
      <h1 style={{fontWeight: 'bold', fontSize: '20px'}}>Product-Category: </h1>
      {categories.map((category) =>
        <CategoryItem key={category.id} category={category}/>
      )}
    </>
  )
}

export default Category