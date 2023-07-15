'use client'

import GoogleButton from './GoogleButton/GoogleButton'
import {Container, Heading} from '@chakra-ui/react'
import GoogleForm from './GoogleForm/GoogleForm'
import { Text } from '@chakra-ui/react'

const GoogleAuth = () => {
  return (
    <Container>
      <Heading as={'h3'} size={'lg'} textAlign={'center'} marginTop={'20px'}>
        SignIn Custom
      </Heading>
      <GoogleButton/>
      <Text fontSize='lg' textAlign={'center'} marginTop={'20px'}>
        or
      </Text>
      <GoogleForm/>
    </Container>
  )
}

export default GoogleAuth