import {FC, useEffect} from 'react'
import {IProductState} from '../../../interface/product'
import {Heading} from '@chakra-ui/react'
import ProductItem from './ProductItem/ProductItem'
import {useFilterProductStore} from '../../../store/filterProduct'
import {useSearchParams} from 'next/navigation'

interface IProductList {
  products: IProductState[]
}

const ProductList: FC<IProductList> = ({products}) => {
  const productsFilter = useFilterProductStore(state => state.productsFilter)
  const addProductInFilter = useFilterProductStore(state => state.addProductInFilter)
  const cleanProductFilter = useFilterProductStore(state => state.cleanProductFilter)
  const searchParams = useSearchParams()

  const createArrayProductFilter = () => {
    searchParams.forEach((value, key, parent) => {
      products.forEach((product) => {
        if (value === product.filter) {
          addProductInFilter({...product})
        }
      })
    })
  }

  useEffect(() => {
    if (productsFilter.length !== 0) {
      cleanProductFilter()
    }
    createArrayProductFilter()
  }, [searchParams])

  if (!products.length) {
    return <Heading as={'h2'} size={'lg'} textAlign={'center'} marginTop={'30px'} color={'red'}>
      No Products
    </Heading>
  }

  return (
    <>
      {productsFilter.length === 0 ?
        products.map((product: IProductState) =>
          <ProductItem key={product.id} product={product}/>
        ) :
        productsFilter.map((product: IProductState) =>
          <ProductItem key={product.id} product={product}/>
        )
      }
    </>
  )
}

export default ProductList