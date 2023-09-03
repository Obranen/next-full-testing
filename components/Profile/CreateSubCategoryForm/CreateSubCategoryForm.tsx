import {useState} from 'react'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {ICategoryState} from '../../../interface/schema/category'
import {Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input} from '@chakra-ui/react'
import {createSubCategory} from '../../../async/subCategory'
import CategorySelect from './CategorySelect/CategorySelect'
import {useSubCategoryStore} from '../../../store/subCategory'

const CreateSubCategoryForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const currentOption = useSubCategoryStore(state => state.currentOption)

  const {
    handleSubmit,
    control,
    reset
  } = useForm<ICategoryState>({
    defaultValues: {value: '', label: ''}
  })
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<ICategoryState> = async (data) => {
    if (!currentOption?.value) return
    setIsLoading(true)

    await createSubCategory({
      id: currentOption.id,
      value: data.value,
      label: data.label
    }).finally(() => {
      setIsLoading(false)
      reset()
    })
  }
  return (
    <Container>
      <Heading as={'h3'} size={'lg'} textAlign={'center'} marginTop={'20px'}>
        Create subCategory
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: '20px'}}>
        <Controller
          control={control}
          name="value"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.value?.message} marginTop={'20px'}>
              <FormLabel>value</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.value?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          control={control}
          name="label"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.label?.message} marginTop={'20px'}>
              <FormLabel>label</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.label?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        <FormControl isInvalid={!currentOption.value} marginTop={'20px'}>
          <FormLabel>category</FormLabel>
          <CategorySelect/>
          <FormErrorMessage>{'Выберите категорию'}</FormErrorMessage>
        </FormControl>

        <Center marginTop={'20px'}>
          <Button
            disabled={isLoading}
            type="submit"
            colorScheme="teal"
            variant="solid"
            loadingText="Loading..."
            isLoading={isLoading}
          >
            Add Category
          </Button>
        </Center>
      </form>
    </Container>
  )
}

export default CreateSubCategoryForm