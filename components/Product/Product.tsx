'use client'

import {FC} from 'react'
import {IProductState} from '../../interface/product'
import List from './List/List'
import {SimpleGrid, VStack} from '@chakra-ui/react'
import Filter from './Filter/Filter'
import {ISubCategoryState} from '../../interface/subCategory'
import {ICategoryState} from '../../interface/category'


interface IProductProps {
  products: IProductState[]
  subCategories: ISubCategoryState[]
  categories: ICategoryState[]
}

const Product: FC<IProductProps> = ({products, categories, subCategories}) => {
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