import {FC, MouseEvent, useEffect, useState} from 'react'
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
import {useRouter} from 'next/navigation'
import {useSession} from 'next-auth/react'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {IProductState} from '../../../interface/product'
import {createProduct} from '../../../async/product'
import {ImageListType} from 'react-images-uploading'
import {createImages} from '../../../async/upload'
import Uploader from '../../ui/Uploader/Uploader'
import FlagCountry, {IFlagCountryState} from '../../ui/FlagCountry/FlagCountry'
import classes from './CreateProductForm.module.scss'
import SelectBasic from '../../ui/SelectBasic/SelectBasic'
import {ICategoryState} from '../../../interface/category'
import {IFilterState} from '../../../interface/filter'
import {fetchCategories} from '../../../async/category'
import {useCategoryStore} from '../../../store/category'

interface ICreateProductForm {
  categories: ICategoryState
  filtersCategory: IFilterState
}

const CreateProductForm: FC<ICreateProductForm> = ({categories, filtersCategory}) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {data: session} = useSession()
  const [images, setImages] = useState<any[]>([])
  const [imageError, setImageError] = useState(false)
  const [isVisibleRu, setIsVisibleRu] = useState(false)
  const [isVisibleUa, setIsVisibleUa] = useState(false)
  const [optionCategory, setOptionCategory] = useState<ICategoryState>({id: '', value: '', label: ''})
  const [optionSubCategory, setOptionSubCategory] = useState<ICategoryState>({id: '', value: '', label: ''})
  const updateCategoryAfterCreate = useCategoryStore(state => state.updateCategoryAfterCreate)
  const [category, setCategory] = useState(categories)

  const flags: IFlagCountryState[] = [
    {
      id: '1',
      src: '/language/flag-ua.svg',
      alt: 'flag-ua',
      tooltip: 'ua',
      language: 'ua'
    },
    {
      id: '2',
      src: '/language/flag-ru.svg',
      alt: 'flag-ru',
      tooltip: 'ru',
      language: 'ru'
    }
  ]

  const flagCountryVisibleClick = (e: MouseEvent<HTMLElement>) => {
    const $target = e.currentTarget
    const localeCurrent = e.currentTarget.dataset.locale
    if (localeCurrent === 'ru') {
      setIsVisibleRu(prev => !prev)
      if ($target.classList.contains(classes.active)) {
        $target.classList.remove(classes.active)
      } else {
        $target.classList.add(classes.active)
      }
    }
    if (localeCurrent === 'ua') {
      setIsVisibleUa(prev => !prev)
      if ($target.classList.contains(classes.active)) {
        $target.classList.remove(classes.active)
      } else {
        $target.classList.add(classes.active)
      }
    }
  }

  const {
    handleSubmit,
    control,
    reset
  } = useForm<IProductState>(
    {
      defaultValues: {
        titleEn: '',
        titleRu: '',
        titleUa: '',
        descEn: '',
        descRu: '',
        descUa: '',
        currencyEn: '',
        currencyRu: '',
        currencyUa: '',
        price: 1,
        weight: 1,
        quantity: 1,
        stock: 1
      }
    }
  )
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IProductState> = async (data) => {
    if (images.length !== 0) {
      if (!optionCategory.value) return
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
        titleEn: data.titleEn,
        titleRu: data.titleRu,
        titleUa: data.titleUa,
        currencyEn: data.currencyEn,
        currencyRu: data.currencyRu,
        currencyUa: data.currencyUa,
        descEn: data.descEn,
        descRu: data.descRu,
        descUa: data.descUa,
        imageSrc: images[0].file.name,
        imageAlt: data.imageAlt,
        price: data.price,
        weight: data.weight,
        quantity: data.quantity,
        stock: data.stock,
        category: optionCategory.id,
        filter: optionSubCategory.value,
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

  const getCurrentOptionCategory = (option: any) => {
    setOptionCategory(option)
  }

  const getCurrentOptionSubCategory = (option: any) => {
    setOptionSubCategory(option)
  }

  useEffect(() => {
    fetchCategories().then(data => {
      setCategory(data)
    })
  }, [updateCategoryAfterCreate])

  return (
    <Container>
      <Heading as={'h3'} size={'lg'} textAlign={'center'} marginTop={'20px'}>
        Create product
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: '20px'}}>
        <FlagCountry
          array={flags}
          appearance={'button'}
          onClickImage={flagCountryVisibleClick}
          text={'Показать инпуты для перевода:'}
          marginTop={'20px'}
        />

        <Controller
          control={control}
          name="titleEn"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.titleEn?.message} marginTop={'20px'}>
              <FormLabel>titleEn</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.titleEn?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        {isVisibleRu &&
          <Controller
            control={control}
            name="titleRu"
            rules={{required: 'Заполните поле'}}
            render={({field}) => (
              <FormControl isInvalid={!!errors.titleRu?.message} marginTop={'20px'}>
                <FormLabel>titleRu</FormLabel>
                <Input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
                <FormErrorMessage>{errors.titleRu?.message}</FormErrorMessage>
              </FormControl>
            )}
          />}

        {isVisibleUa &&
          <Controller
            control={control}
            name="titleUa"
            rules={{required: 'Заполните поле'}}
            render={({field}) => (
              <FormControl isInvalid={!!errors.titleUa?.message} marginTop={'20px'}>
                <FormLabel>titleUa</FormLabel>
                <Input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
                <FormErrorMessage>{errors.titleUa?.message}</FormErrorMessage>
              </FormControl>
            )}
          />}

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
          name="descEn"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.descEn?.message} marginTop={'20px'}>
              <FormLabel>descEn</FormLabel>
              <Textarea
                placeholder="Описание товара"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.descEn?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        {isVisibleRu &&
          <Controller
            control={control}
            name="descRu"
            rules={{required: 'Заполните поле'}}
            render={({field}) => (
              <FormControl isInvalid={!!errors.descRu?.message} marginTop={'20px'}>
                <FormLabel>descRu</FormLabel>
                <Textarea
                  placeholder="Описание товара"
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
                <FormErrorMessage>{errors.descRu?.message}</FormErrorMessage>
              </FormControl>
            )}
          />}

        {isVisibleUa &&
          <Controller
            control={control}
            name="descUa"
            rules={{required: 'Заполните поле'}}
            render={({field}) => (
              <FormControl isInvalid={!!errors.descUa?.message} marginTop={'20px'}>
                <FormLabel>descUa</FormLabel>
                <Textarea
                  placeholder="Описание товара"
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
                <FormErrorMessage>{errors.descUa?.message}</FormErrorMessage>
              </FormControl>
            )}
          />}

        <Controller
          control={control}
          name="currencyEn"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.currencyEn?.message} marginTop={'20px'}>
              <FormLabel>currencyEn</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.currencyEn?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        {isVisibleRu &&
          <Controller
            control={control}
            name="currencyRu"
            rules={{required: 'Заполните поле'}}
            render={({field}) => (
              <FormControl isInvalid={!!errors.currencyRu?.message} marginTop={'20px'}>
                <FormLabel>currencyRu</FormLabel>
                <Input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
                <FormErrorMessage>{errors.currencyRu?.message}</FormErrorMessage>
              </FormControl>
            )}
          />}

        {isVisibleUa &&
          <Controller
            control={control}
            name="currencyUa"
            rules={{required: 'Заполните поле'}}
            render={({field}) => (
              <FormControl isInvalid={!!errors.currencyUa?.message} marginTop={'20px'}>
                <FormLabel>currencyUa</FormLabel>
                <Input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
                <FormErrorMessage>{errors.currencyUa?.message}</FormErrorMessage>
              </FormControl>
            )}
          />}

        <FormControl isInvalid={!optionCategory.value} marginTop={'20px'}>
          <FormLabel>Category</FormLabel>
          <SelectBasic getCurrentOption={getCurrentOptionCategory} options={category}/>
          <FormErrorMessage>{'Выберите категорию'}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!optionSubCategory.value} marginTop={'20px'}>
          <FormLabel>filter</FormLabel>
          <SelectBasic getCurrentOption={getCurrentOptionSubCategory} options={filtersCategory}/>
          <FormErrorMessage>{'Выберите категорию'}</FormErrorMessage>
        </FormControl>

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

export default CreateProductForm