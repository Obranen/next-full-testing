'use client'

import {FC} from 'react'
import {IProductState} from '../../interface/schema/product'
import List from './List/List'


interface IProductStateState {
  products: IProductState[]
}

const Product: FC<IProductStateState> = ({products}) => {
  return (
    <>
      <List products={products}/>
    </>
  )
}

export default Product