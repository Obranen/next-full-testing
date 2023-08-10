'use client'

import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup, InputRightElement
} from '@chakra-ui/react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {BsEyeSlashFill, BsEyeFill} from 'react-icons/bs'
import {IUser} from '../../interface/user'
import {createUser} from '../../async/user'

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const showPasswordClick = () => {
    setShowPassword(!showPassword)
  }

  const {handleSubmit, control, resetField} = useForm<IUser>({
    defaultValues: {name: '', email: '', password: ''}
  })
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IUser> = async (data) => {
    setIsLoading(true)
    await createUser({
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password
    }).finally(() => {
      setIsLoading(false)
      router.refresh()
    })

    resetField('name')
    resetField('email')
    resetField('password')
  }

  return (
    <Container>
      <Heading as={'h3'} size={'lg'} textAlign={'center'} marginTop={'20px'}>
        Registration User
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '20px'}}>
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
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.email?.message} marginTop={'20px'}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <FormControl isInvalid={!!errors.password?.message} marginTop={'20px'}>
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={showPasswordClick}>
                    {showPassword ? <BsEyeSlashFill/> : <BsEyeFill/>}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Center marginTop={'20px'}>
          <Button
            disabled={isLoading}
            type="submit"
            colorScheme="teal"
            variant="solid"
            loadingText='Loading...'
            isLoading={isLoading}
          >
            Registration User
          </Button>
        </Center>
      </form>
    </Container>
  )
}

export default RegistrationForm