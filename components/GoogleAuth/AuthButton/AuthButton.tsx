import {Button, Center} from '@chakra-ui/react'
import {useSearchParams} from 'next/navigation'
import {signIn} from 'next-auth/react'

const AuthButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  return (
    <Center marginTop={'20px'}>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => signIn('google', {callbackUrl})}
      >
        Sign in with Google
      </Button>
    </Center>
  )
}

export default AuthButton