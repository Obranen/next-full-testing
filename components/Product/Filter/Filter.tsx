import {FC} from 'react'
import {FormControl, FormLabel, VStack} from '@chakra-ui/react'
import {ISubCategoryState} from '../../../interface/subCategory'
import FilterItem from './FilterItem/FilterItem'
import {ICategoryState} from '../../../interface/category'
import {IProductState} from '../../../interface/product'

interface IFilter {
  subCategories: ISubCategoryState[]
  categories: ICategoryState[]
}

const Filter: FC<IFilter> = ({subCategories, categories}) => {

  if (subCategories.length === 1 || subCategories.length === 0) {
    return <></>
  }

  return (
    <VStack align="stretch">
      <FormControl>
        <FormLabel>{categories[0].label} ({subCategories.length})</FormLabel>
        {subCategories.map((subCategory =>
            <FilterItem key={subCategory.id} subCategory={subCategory} categories={categories}/>
        ))}
      </FormControl>
    </VStack>
  )
}

export default Filter