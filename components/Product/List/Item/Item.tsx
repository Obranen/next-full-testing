import {FC} from 'react'
import {IProduct} from '../../../../interface/product'
import Image from 'next/image'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,

  Box
} from '@chakra-ui/react'

interface IItem {
  product: IProduct
}

const Item: FC<IItem> = ({product}) => {
  // @ts-ignore
  const createdDate = new Date(product.createdAt).toLocaleString()

  return (
    <Box>
      <Card maxW="sm">
        <CardBody>
          {/*<Image*/}
          {/*  // src={product.imageSrc}*/}
          {/*  // src={'http://localhost:3000/assets/product/pizza/chetyre-syra_1567059967719.jpeg'}*/}
          {/*  src={'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80'}*/}
          {/*  // alt={product.imageAlt}*/}
          {/*  alt={'resg'}*/}
          {/*  width={500}*/}
          {/*  height={500}*/}
          {/*  // borderRadius="lg"*/}
          {/*/>*/}
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.title}</Heading>
            <Text>
              {product.desc}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  )
}

export default Item