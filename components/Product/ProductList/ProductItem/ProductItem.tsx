import {FC} from 'react'
import {IProductState} from '../../../../interface/product'
import Image from 'next/image'
import {Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text} from '@chakra-ui/react'
import {useLocale, useTranslations} from 'next-intl'

interface IProductItem {
  product: IProductState
}

const ProductItem: FC<IProductItem> = ({product}) => {
  const locale = useLocale()
  const tProduct = useTranslations('Product')

  return (
    <Box>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={`/images/product/${product.imageSrc}`}
            alt={product.imageAlt}
            width={500}
            height={500}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {locale === 'en' && product.titleEn}
              {locale === 'ru' && product.titleRu}
              {locale === 'ua' && product.titleUa}
            </Heading>
            <Text>
              {locale === 'en' && product.descEn}
              {locale === 'ru' && product.descRu}
              {locale === 'ua' && product.descUa}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              {locale === 'en' && product.currencyEn}
              {locale === 'ru' && product.currencyRu}
              {locale === 'ua' && product.currencyUa}
              {product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              {tProduct('buttonBuy')}
            </Button>
            <Button variant="ghost" colorScheme="blue">
              {tProduct('buttonCart')}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  )
}

export default ProductItem