import {FC, useEffect, useState} from 'react'
import {FormControl, FormLabel} from '@chakra-ui/react'
import {ISubCategoryState} from '../../../interface/subCategory'
import Item from './Item/Item'
import {ICategoryState} from '../../../interface/category'

interface IFilter {
  subCategories: ISubCategoryState[]
  categories: ICategoryState[]
}

const Filter: FC<IFilter> = ({subCategories, categories}) => {
  const [category, setCategory] = useState('')

  useEffect(() => {
    const currentCategory = categories.filter((category) => category.id === '64fb5d7686487529418fbb81')
    console.log(currentCategory)
    setCategory(currentCategory[0].label)
  }, [categories])

  return (
    <FormControl>
      <FormLabel>{category} ({subCategories.length})</FormLabel>
      {subCategories.map((subCategory =>
          <Item key={subCategory.id} subCategory={subCategory}/>
      ))}
    </FormControl>
  )
}

export default Filter