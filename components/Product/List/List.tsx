import {FC} from 'react'
import {IProductState} from '../../../interface/schema/product'
import {Heading, SimpleGrid} from '@chakra-ui/react'
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
      <SimpleGrid columns={5} spacing={3}>
        {products.map((product: IProductState) =>
          <Item key={product.id} product={product}/>
        )}
      </SimpleGrid>
    </>
  )
}

export default List