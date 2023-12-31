import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast
} from '@chakra-ui/react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {createReview} from '../../../async/review'
import {IReviewState} from '../../../interface/review'
import {useSession} from 'next-auth/react'
import Link from 'next-intl/link'

const CreateForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const session = useSession()
  const toast = useToast()

  const {
    handleSubmit,
    control,
    resetField,
    reset
  } = useForm<IReviewState>(
    // @ts-ignore
    session.status === 'authenticated' ?
      {values: {nameReview: session.data?.user?.name, descReview: ''}} :
      {defaultValues: {nameReview: '', descReview: ''}}
  )
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IReviewState> = async (data) => {
    // @ts-ignore
    if (!session.data?.user.id) {
      return toast({
        status: 'warning',
        title:
          <>
            <Link
              href={`registration`}
              style={{display: 'block'}}
            >Registration</Link>
            <Link
              href={`signin`}
              style={{display: 'block'}}
            >Sign In Custom</Link>
          </>,
        position: 'top'
      })
    }

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

export default CreateForm