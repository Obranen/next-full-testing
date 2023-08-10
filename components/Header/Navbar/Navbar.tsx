'use client'

import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure} from '@chakra-ui/react'
import {AiOutlineMenu, AiOutlineMenuFold} from 'react-icons/ai'
import PublicItem from './PublicItem/PublicItem'
import PrivateItem from './PrivateItem/PrivateItem'
import {useSession} from 'next-auth/react'

export interface INavigation {
  id: number
  href: string
  name: string
}

const Navbar = () => {
  const session = useSession()
  const {isOpen, onOpen, onClose} = useDisclosure()

  const navPublic: INavigation[] = [
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

  const navPrivateBeforeSignIn: INavigation[] = [
    {
      id: 1,
      href: '/profile',
      name: 'Profile'
    }
  ]

  const navPrivateAfterSignIn: INavigation[] = [
    {
      id: 1,
      href: '/registration',
      name: 'Registration'
    },
    {
      id: 2,
      href: '/api/auth/signin',
      name: 'Sign In'
    },
    {
      id: 3,
      href: 'signin',
      name: 'Sign In Custom'
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
              {navPublic.map((nav) =>
                <PublicItem key={nav.id} onClose={onClose} nav={nav}/>
              )}

              {session.data ?
                <>
                  {navPrivateBeforeSignIn.map((nav) =>
                    <PrivateItem key={nav.id} onClose={onClose} nav={nav}/>
                  )}
                </> :
                <>
                  {navPrivateAfterSignIn.map((nav) =>
                    <PrivateItem key={nav.id} onClose={onClose} nav={nav}/>
                  )}
                </>
              }
            </>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default Navbar