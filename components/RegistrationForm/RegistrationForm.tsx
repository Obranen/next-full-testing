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
  InputGroup, InputLeftElement, InputRightElement
} from '@chakra-ui/react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {BsEyeSlashFill, BsEyeFill, BsFillCheckSquareFill} from 'react-icons/bs'
import {AiFillStop} from 'react-icons/ai'
import {IUser} from '../../interface/user'
import {createUser, fetchUser} from '../../async/user'
import {signIn} from 'next-auth/react'

const minLengthValue = 3
const maxLengthValue = 12

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [showCheckEmail, setShowCheckEmail] = useState(false)
  const [loadingCheckEmail, setLoadingCheckEmail] = useState(false)
  const router = useRouter()

  const checkEmail = async (value: string) => {
    setIsEmail(false)
    setShowCheckEmail(true)
    setLoadingCheckEmail(true)
    const emailCheck = await fetchUser(value)
    if (emailCheck !== null) {
      setIsEmail(true)
    } else {
      setIsEmail(false)
    }
    setLoadingCheckEmail(false)
  }

  const showPasswordClick = () => {
    setShowPassword(!showPassword)
  }

  const {handleSubmit, control, resetField} = useForm<IUser>({
    defaultValues: {name: '', email: '', password: ''}
  })
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IUser> = async (data) => {

    if (!isEmail) {
      await createUser({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password
      }).finally(() => {
        setIsLoading(false)
      })

      resetField('name')
      resetField('email')
      resetField('password')

      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })

      if (response && !response.error) {
        router.push('/profile')
      } else {
        console.log(`error signIn ${response}`)
      }
    } else {
      await checkEmail(data.email)
    }
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
          rules={{
            required: 'Заполните поле',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Не правильно введён email'
            }
          }}
          render={({field}) => (
            <FormControl isInvalid={!!errors.email?.message || isEmail} marginTop={'20px'}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                {showCheckEmail && !loadingCheckEmail &&
                  <InputLeftElement fontWeight={'bold'}>
                    {isEmail ?
                      <AiFillStop/> :
                      <BsFillCheckSquareFill/>}
                  </InputLeftElement>
                }
                <Input
                  type="text"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e)
                    setShowCheckEmail(false)
                  }}
                  onBlur={() => field.value.length > 5 && checkEmail(field.value)}
                />
              </InputGroup>
              <FormErrorMessage>{errors.email?.message || isEmail && showCheckEmail && 'Такой email уже существует'}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Заполните поле',
            minLength: {
              value: minLengthValue,
              message: `Минимум ${minLengthValue} символа`
            },
            maxLength: {
              value: maxLengthValue,
              message: `Максимум ${maxLengthValue} символов`
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
              message: 'Минимум одна заглавная буква, одна строчная буква, одна цифра и один специальный символ'
            }
          }}
          render={({field}) => (
            <FormControl isInvalid={!!errors.password?.message} marginTop={'20px'}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement fontWeight={'bold'}>
                  {field.value.length}
                </InputLeftElement>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={showPasswordClick}>
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
            loadingText="Loading..."
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