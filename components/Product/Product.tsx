'use client'

import {FC} from 'react'
import {IProduct} from '../../interface/product'
import List from './List/List'

interface IProductState {
  products: IProduct[]
}

const Product: FC<IProductState> = ({products}) => {
  return (
    <>
      <List products={products}/>
    </>
  )
}

export default Product