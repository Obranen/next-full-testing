'use client'

import {Center, Spinner} from '@chakra-ui/react'

const LoadingPage = () => {
  return (
    <>
      <Center marginTop={30}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="lg"
        />
      </Center>
    </>
  )
}

export default LoadingPage