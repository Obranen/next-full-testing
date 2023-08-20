import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea
} from '@chakra-ui/react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {useSession} from 'next-auth/react'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {IProduct} from '../../../interface/product'
import {createProduct} from '../../../async/product'
import {ImageListType} from 'react-images-uploading'
import {createImages} from '../../../async/upload'
import Uploader from '../../ui/Uploader/Uploader'

const CreateProduct = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {data: session} = useSession()
  const [images, setImages] = useState<any[]>([])
  const [imageError, setImageError] = useState(false)

  const {
    handleSubmit,
    control,
    reset
  } = useForm<IProduct>(
    {defaultValues: {title: '', imageSrc: '', imageAlt: '', desc: '', price: 1, weight: 1, quantity: 1, stock: 1}}
  )
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    if (images.length !== 0) {
      setIsLoading(true)

      if (imageError) {
        setImageError(false)
      }

      const formData = new FormData()
      images.forEach(image => {
        formData.append('file', image.file)
      })
      await createImages(formData)

      await createProduct({
        // @ts-ignore
        id: session?.user.id,
        title: data.title,
        imageSrc: images[0].file.name,
        imageAlt: data.imageAlt,
        desc: data.desc,
        price: data.price,
        weight: data.weight,
        quantity: data.quantity,
        stock: data.stock,
        images: [{
          alt: '',
          src: ''
        }]
      }).finally(() => {
        setIsLoading(false)
        reset()
        router.refresh()
      })
    } else {
      setImageError(true)
    }
  }

  const imagesChange = (imageList: ImageListType) => {
    setImages(imageList as never[])
  }

  return (
    <Container>
      <Heading as={'h3'} size={'lg'} textAlign={'center'} marginTop={'20px'}>
        Create Product
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: '20px'}}>
        <Controller
          control={control}
          name="title"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.title?.message} marginTop={'20px'}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        <FormControl isInvalid={imageError} marginTop={'20px'}>
          <FormLabel>Main Image</FormLabel>
          <Uploader onChange={imagesChange} images={images}/>
          <FormErrorMessage>{'Выберите картинку'}</FormErrorMessage>
        </FormControl>

        <Controller
          control={control}
          name="imageAlt"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.imageAlt?.message} marginTop={'20px'}>
              <FormLabel>Image Alt</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.imageAlt?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="desc"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.desc?.message} marginTop={'20px'}>
              <FormLabel>Desc</FormLabel>
              <Textarea
                placeholder="Описание товара"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.desc?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="price"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.price?.message} marginTop={'20px'}>
              <FormLabel>Price</FormLabel>
              <NumberInput
                value={field.value}
                onChange={(e) => field.onChange(Number(e))}
                min={1}
              >
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="weight"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.weight?.message} marginTop={'20px'}>
              <FormLabel>Weight</FormLabel>
              <NumberInput
                value={field.value}
                onChange={(e) => field.onChange(Number(e))}
                min={1}
              >
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="quantity"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.quantity?.message} marginTop={'20px'}>
              <FormLabel>Quantity</FormLabel>
              <NumberInput
                value={field.value}
                onChange={(e) => field.onChange(Number(e))}
                min={1}
              >
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errors.quantity?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="stock"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.stock?.message} marginTop={'20px'}>
              <FormLabel>Stock</FormLabel>
              <NumberInput
                value={field.value}
                onChange={(e) => field.onChange(Number(e))}
                min={1}
              >
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errors.stock?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Center marginTop={'20px'}>
          <Button
            disabled={isLoading}
            type="submit"
            colorScheme="teal"
            variant="solid"
            loadingText="Loading..."
            isLoading={isLoading}
          >
            Add Product
          </Button>
        </Center>
      </form>
    </Container>
  )
}

export default CreateProduct