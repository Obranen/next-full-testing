import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure} from '@chakra-ui/react'
import {AiOutlineMenu, AiOutlineMenuFold} from 'react-icons/ai'
import {usePathname} from 'next-intl/client'
import NavbarItem from './NavbarItem/NavbarItem'

export interface INavigation {
  id: number
  href: string
  name: string
  role: string
}

const Navbar = () => {
  const pathname = usePathname()
  const {isOpen, onOpen, onClose} = useDisclosure()

  const navigation: INavigation[] = [
    {
      id: 1,
      href: '/',
      name: 'Catalog Product',
      role: 'public'
    },
    {
      id: 2,
      href: '/review',
      name: 'Review',
      role: 'public'
    },
    {
      id: 3,
      href: '/contact',
      name: 'Contact',
      role: 'public'
    },
    {
      id: 4,
      href: '/profile',
      name: 'Profile',
      role: 'authenticated'
    },
    {
      id: 5,
      href: '#',
      name: 'Sign Out',
      role: 'authenticated'
    },
    {
      id: 6,
      href: '/registration',
      name: 'Registration',
      role: 'notAuthenticated'
    },
    {
      id: 7,
      href: '/api/auth/signin',
      name: 'Sign In',
      role: 'notAuthenticated'
    },
    {
      id: 8,
      href: '/signin',
      name: 'Sign In Custom',
      role: 'notAuthenticated'
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
          <DrawerBody padding={0}>
            {navigation.map((nav) =>
              <NavbarItem key={nav.id} onClose={onClose} nav={nav} pathname={pathname}/>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default Navbar