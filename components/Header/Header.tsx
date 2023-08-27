'use client'

import Navbar from './Navbar/Navbar'
import {Box, SimpleGrid} from '@chakra-ui/react'
import Language from './Language/Language'

const Header = () => {
  return (
    <SimpleGrid columns={2} spacing={4}>
      <Box><Navbar/></Box>
      <Box><Language/></Box>
    </SimpleGrid>
  )
}

export default Header