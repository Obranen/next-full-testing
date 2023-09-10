'use client'

import {FC} from 'react'
import {IProductState} from '../../interface/product'
import List from './List/List'
import Filter from './Filter/Filter'
import {SimpleGrid, VStack} from '@chakra-ui/react'
import {ISubCategoryState} from '../../interface/subCategory'
import {ICategoryState} from '../../interface/category'


interface IProductStateState {
  products: IProductState[]
  subCategories: ISubCategoryState[]
  categories: ICategoryState[]
}

const Product: FC<IProductStateState> = ({products, subCategories, categories}) => {
  return (
    <>
      <SimpleGrid columns={5} spacing={3}>
        <VStack align="stretch">
          <Filter subCategories={subCategories} categories={categories}/>
        </VStack>
        <List products={products}/>
      </SimpleGrid>
    </>
  )
}

export default Product