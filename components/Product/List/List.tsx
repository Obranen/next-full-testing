import {FC, useEffect} from 'react'
import {IProductState} from '../../../interface/product'
import {Heading} from '@chakra-ui/react'
import Item from './Item/Item'
import {useFilterProductStore} from '../../../store/filterProduct'

interface IList {
  products: IProductState[]
}

const List: FC<IList> = ({products}) => {
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
        <Item key={product.id} product={product}/>
      ) :
        productsFilter.map((product: IProductState) =>
          <Item key={product.id} product={product}/>
        )}
    </>
  )
}

export default List