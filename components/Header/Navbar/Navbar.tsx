'use client'

import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure} from '@chakra-ui/react'
import {AiOutlineMenu, AiOutlineMenuFold} from 'react-icons/ai'
import PublicItem from './PublicItem/PublicItem'
import PrivateItem from './PrivateItem/PrivateItem'

export interface INavigation {
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
      href: '/reviews',
      name: 'Reviews'
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
            </Button>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <>
              {navigation.map((nav) =>
                <PublicItem key={nav.id} onClose={onClose} nav={nav}/>
              )}
              <PrivateItem onClose={onClose}/>
            </>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default Navbar