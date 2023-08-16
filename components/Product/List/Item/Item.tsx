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
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            width={500}
            height={500}
            // borderRadius="lg"
          />
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