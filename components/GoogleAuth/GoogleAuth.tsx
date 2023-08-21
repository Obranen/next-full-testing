'use client'

import Button from './AuthButton/AuthButton'
import {Container, Heading} from '@chakra-ui/react'
import AuthForm from './AuthForm/AuthForm'
import { Text } from '@chakra-ui/react'

const GoogleAuth = () => {
  return (
    <Container>
      <Heading as={'h3'} size={'lg'} textAlign={'center'} marginTop={'20px'}>
        SignIn Custom
      </Heading>
      <Button/>
      <Text fontSize='lg' textAlign={'center'} marginTop={'20px'}>
        or
      </Text>
      <AuthForm/>
    </Container>
  )
}

export default GoogleAuth