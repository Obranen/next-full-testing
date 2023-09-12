import {FC} from 'react'
import {FormControl, FormLabel} from '@chakra-ui/react'
import {ISubCategoryState} from '../../../interface/subCategory'
import Item from './Item/Item'
import {ICategoryState} from '../../../interface/category'

interface IFilter {
  subCategories: ISubCategoryState[]
  categories: ICategoryState[]
}

const Filter: FC<IFilter> = ({subCategories, categories}) => {

  return (
    <FormControl>
      <FormLabel>{} ({subCategories.length})</FormLabel>
      {subCategories.map((subCategory =>
          <Item key={subCategory.id} subCategory={subCategory}/>
      ))}
    </FormControl>
  )
}

export default Filter