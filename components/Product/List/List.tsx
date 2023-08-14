import {FC} from 'react'
import {Flex, Heading, SimpleGrid, Spacer} from '@chakra-ui/react'
import {IProduct} from '../../../interface/product'
import Item from './Item/Item'

interface IList {
  products: IProduct[]
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
        {products.map((product: IProduct) =>
          <Item key={product.id} product={product}/>
        )}
      </SimpleGrid>
    </>
  )
}

export default List