import {FC, useEffect} from 'react'
import {IProductState} from '../../../interface/product'
import {Heading} from '@chakra-ui/react'
import ProductItem from './ProductItem/ProductItem'
import {useFilterProductStore} from '../../../store/filterProduct'

interface IProductList {
  products: IProductState[]
}

const ProductList: FC<IProductList> = ({products}) => {
  const getProductsFilter = useFilterProductStore(state => state.getProductsFilter)
  const productsFilter = useFilterProductStore(state => state.productsFilter)

  useEffect(() => {
    getProductsFilter(products)
  }, [])

  if (!products.length) {
    return <Heading as={'h2'} size={'lg'} textAlign={'center'} marginTop={'30px'} color={'red'}>
      No Products
    </Heading>
  }

  return (
    <>
      {productsFilter.map((product: IProductState) =>
        <ProductItem key={product.id} product={product}/>
      )}
    </>
  )
}

export default ProductList