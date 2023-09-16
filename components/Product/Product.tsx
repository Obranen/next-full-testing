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

const Product: FC<IProductProps> = ({products, subCategories, categories}) => {
  return (
    <>
      <SimpleGrid columns={5} spacing={3}>
        <Filter subCategories={subCategories} categories={categories} products={products}/>
        <List products={products}/>
      </SimpleGrid>
    </>
  )
}

export default Product