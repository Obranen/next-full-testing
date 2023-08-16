'use client'

import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input} from '@chakra-ui/react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {createReview} from '../../async/review'
import {IReview} from '../../interface/review'
import {useSession} from 'next-auth/react'

const CreateReview = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const session = useSession()

  const {
    handleSubmit,
    control,
    resetField,
    reset
  } = useForm<IReview>(
    // @ts-ignore
    session.status === 'authenticated' ?
      {values: {nameReview: session.data?.user?.name, descReview: ''}} :
      {defaultValues: {nameReview: '', descReview: ''}}
  )
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IReview> = async (data) => {
    setIsLoading(true)

    await createReview({
      // @ts-ignore
      id: session.data?.user.id,
      nameReview: data.nameReview,
      descReview: data.descReview
    }).finally(() => {
      setIsLoading(false)
      router.refresh()
    })

    if (session.status === 'authenticated') {
      resetField('nameReview')
      resetField('descReview')
    } else {
      reset({nameReview: '', descReview: ''})
    }
  }

  return (
    <Container>
      <Heading as={'h3'} size={'lg'} textAlign={'center'} marginTop={'20px'}>
        Chakra, RHF and Next.js(Fetch)
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: '20px'}}>
        <Controller
          control={control}
          name="nameReview"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.nameReview?.message} marginTop={'20px'}>
              <FormLabel>Author</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
                isDisabled={session.status === 'authenticated' && true}
              />
              <FormErrorMessage>{errors.nameReview?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="descReview"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.descReview?.message} marginTop={'20px'}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.descReview?.message}</FormErrorMessage>
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
            Add Post
          </Button>
        </Center>
      </form>
    </Container>
  )
}

export default CreateReview