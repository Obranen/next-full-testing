'use client'

import {ReactNode} from 'react'

import {CacheProvider} from '@chakra-ui/next-js'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import {theme} from './theme'

import {SessionProvider} from 'next-auth/react'

export function Provider({children}: { children: ReactNode }) {
  return (
    <SessionProvider>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </SessionProvider>
  )
}