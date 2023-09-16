import {FC} from 'react'
import {FormControl, FormLabel, VStack} from '@chakra-ui/react'
import {ISubCategoryState} from '../../../interface/subCategory'
import Item from './Item/Item'
import {ICategoryState} from '../../../interface/category'
import {IProductState} from '../../../interface/product'

interface IFilter {
  subCategories: ISubCategoryState[]
  categories: ICategoryState[]
  products: IProductState[]
}

const Filter: FC<IFilter> = ({subCategories, categories, products}) => {

  if (subCategories.length === 1 || subCategories.length === 0) {
    return <></>
  }

  return (
    <VStack align="stretch">
      <FormControl>
        <FormLabel>{categories[0].label} ({subCategories.length})</FormLabel>
        {subCategories.map((subCategory =>
            <Item key={subCategory.id} subCategory={subCategory} products={products}/>
        ))}
      </FormControl>
    </VStack>
  )
}

export default Filter