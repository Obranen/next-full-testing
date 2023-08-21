'use client'

import Button from './Button/Button'
import {Container, Heading} from '@chakra-ui/react'
import Form from './Form/Form'
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
      <Form/>
    </Container>
  )
}

export default GoogleAuth