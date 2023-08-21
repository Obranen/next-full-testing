import {FormEventHandler} from 'react'
import {useRouter} from 'next/navigation'
import {signIn} from 'next-auth/react'
import {Button, Center, Input} from '@chakra-ui/react'

const AuthForm = () => {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    if (response && !response.error) {
      router.push('/profile')
    } else {
      console.log(`error... ${response}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
      <Input
        type="email"
        name="email"
        placeholder={'email'}
        marginBottom={'10px'}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder={'password'}
        marginBottom={'10px'}
        required
      />
      <Center>
        <Button
          type={'submit'}
          colorScheme="teal"
          variant="solid"
        >
          SignIn
        </Button>
      </Center>
    </form>
  )
}

export default AuthForm