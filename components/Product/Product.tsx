'use client'

import {FC} from 'react'
import {IProductState} from '../../interface/product'
import ProductList from './ProductList/ProductList'
import {SimpleGrid} from '@chakra-ui/react'
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
        <Filter subCategories={subCategories} categories={categories}/>
        <ProductList products={products}/>
      </SimpleGrid>
    </>
  )
}

export default Product