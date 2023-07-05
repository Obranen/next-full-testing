'use client'

import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import {AiOutlineMenu, AiOutlineMenuFold} from 'react-icons/ai'

interface INavigation {
  id: number
  href: string
  name: string
}

const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const navigation: INavigation[] = [
    {
      id: 1,
      href: '/',
      name: 'Home'
    },
    {
      id: 2,
      href: '/about',
      name: 'About'
    }
  ]

  return (
    <nav>
      <Button variant={'ghost'} colorScheme="blue" onClick={onOpen}><AiOutlineMenu/></Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Button variant={'ghost'} colorScheme="blue" onClick={onClose}>
              <AiOutlineMenuFold/>
              Menu
            </Button>
          </DrawerHeader>
          <DrawerBody>
            {navigation.map((nav) =>
              <Link
                key={nav.id}
                as={NextLink}
                href={nav.href}
                onClick={onClose}
              >{nav.name}</Link>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default Navbar