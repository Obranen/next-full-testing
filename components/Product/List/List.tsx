import {FC} from 'react'
import {IProductState} from '../../../interface/product'
import {Heading} from '@chakra-ui/react'
import Item from './Item/Item'

interface IList {
  products: IProductState[]
}

const List: FC<IList> = ({products}) => {

  if (!products.length) {
    return <Heading as={'h2'} size={'lg'} textAlign={'center'} marginTop={'30px'} color={'red'}>
      No Products
    </Heading>
  }

  return (
    <>
      {products.map((product: IProductState) =>
        <Item key={product.id} product={product}/>
      )}
    </>
  )
}

export default List