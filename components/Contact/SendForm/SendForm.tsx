import {useState} from 'react'
import {useRouter} from 'next/navigation'
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
  Textarea
} from '@chakra-ui/react'
import {IContact} from '../../../interface/contact'
import {SendContactForm} from '../../../async/contact'
import {useTranslations} from 'next-intl'

const SendForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const t = useTranslations('Contact');

  const {
    handleSubmit,
    control,
    reset
  } = useForm<IContact>(
    {defaultValues: {name: '', email: '', subject: '', message: ''}}
  )
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IContact> = async (data) => {
    setIsLoading(true)

    await SendContactForm({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    }).finally(() => {
      setIsLoading(false)
      reset()
    })
  }

  return (
    <Container>
      <h1>{t('title')}</h1>
      <Heading as={'h3'} size={'lg'} textAlign={'center'} marginTop={'20px'}>
        Send Contact
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: '20px'}}>
        <Controller
          control={control}
          name="name"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.name?.message} marginTop={'20px'}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Заполните поле',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Не правильно введён email'
            }
          }}
          render={({field}) => (
            <FormControl isInvalid={!!errors.email?.message} marginTop={'20px'}>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="subject"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.subject?.message} marginTop={'20px'}>
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          control={control}
          name="message"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.message?.message} marginTop={'20px'}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Опишите запрос"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
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
            Send
          </Button>
        </Center>
      </form>
    </Container>
  )
}

export default SendForm