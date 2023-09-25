import {useEffect, useState} from 'react'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {ICategoryState} from '../../../interface/category'
import {Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input} from '@chakra-ui/react'
import {createFilter} from '../../../async/filter'
import SelectBasic from '../../ui/SelectBasic/SelectBasic'

import {FC} from 'react'
import {fetchCategories} from '../../../async/category'
import {useCategoryStore} from '../../../store/category'

interface ICreateFilterForm {
  categories: ICategoryState
}

const CreateFilterForm: FC<ICreateFilterForm> = ({categories}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [optionCategory, setOptionCategory] = useState<ICategoryState>({id: '', value: '', label: ''})
  const updateCategoryAfterCreate = useCategoryStore(state => state.updateCategoryAfterCreate)
  const [category, setCategory] = useState(categories)

  const getCurrentOptionCategory = (option: any) => {
    setOptionCategory(option)
  }

  useEffect(() => {
    fetchCategories().then(data => {
      setCategory(data)
    })
  }, [updateCategoryAfterCreate])

  const {
    handleSubmit,
    control,
    reset
  } = useForm<ICategoryState>({
    defaultValues: {value: '', label: ''}
  })
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<ICategoryState> = async (data) => {
    if (!optionCategory?.value) return
    setIsLoading(true)

    await createFilter({
      id: optionCategory.id,
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
        Create filter
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

        <FormControl isInvalid={!optionCategory.value} marginTop={'20px'}>
          <FormLabel>Category</FormLabel>
          <SelectBasic getCurrentOption={getCurrentOptionCategory} options={category}/>
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

export default CreateFilterForm