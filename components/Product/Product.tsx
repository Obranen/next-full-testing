'use client'

import {FC} from 'react'
import {IProductState} from '../../interface/product'
import ProductList from './ProductList/ProductList'
import {Grid} from '@chakra-ui/react'
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
      <Grid
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={2}
      >
        <Filter filtersCategory={filtersCategory} categories={categories}/>
        <ProductList products={products}/>
      </Grid>
    </>
  )
}

export default Product