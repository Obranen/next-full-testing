import {FC, useEffect} from 'react'
import {IProductState} from '../../../interface/product'
import {Heading} from '@chakra-ui/react'
import ProductItem from './ProductItem/ProductItem'
import {useFilterProductStore} from '../../../store/filterProduct'

interface IProductList {
  products: IProductState[]
}

const ProductList: FC<IProductList> = ({products}) => {
  const productsFilter = useFilterProductStore(state => state.productsFilter)
  const cleanProductFilter = useFilterProductStore(state => state.cleanProductFilter)

  useEffect(() => {
    if (productsFilter.length) {
      cleanProductFilter()
    }
  }, [])

  if (!products.length) {
    return <Heading as={'h2'} size={'lg'} textAlign={'center'} marginTop={'30px'} color={'red'}>
      No Products
    </Heading>
  }

  return (
    <>
      {!productsFilter.length ? products.map((product: IProductState) =>
        <ProductItem key={product.id} product={product}/>
      ) :
        productsFilter.map((product: IProductState) =>
          <ProductItem key={product.id} product={product}/>
        )}
    </>
  )
}

export default ProductList