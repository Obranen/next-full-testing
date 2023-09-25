'use client'

import {FC} from 'react'
import {IProductState} from '../../interface/product'
import ProductList from './ProductList/ProductList'
import {SimpleGrid} from '@chakra-ui/react'
import Filter from './Filter/Filter'
import {IFilterState} from '../../interface/filter'
import {ICategoryState} from '../../interface/category'


interface IProductProps {
  products: IProductState[]
  filtersCategory: IFilterState[]
  categories: ICategoryState[]
}

const Product: FC<IProductProps> = ({products, filtersCategory, categories}) => {
  return (
    <>
      <SimpleGrid columns={5} spacing={3}>
        <Filter filtersCategory={filtersCategory} categories={categories}/>
        <ProductList products={products}/>
      </SimpleGrid>
    </>
  )
}

export default Product