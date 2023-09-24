import {FC} from 'react'
import Link from 'next/link'
import {INavigation} from '../Navbar'
import {signOut, useSession} from 'next-auth/react'
import classes from './NavbarItem.module.scss'
import clsx from 'clsx'

interface INavbarItem {
  nav: INavigation
  onClose: () => void
  pathname: string
}

const NavbarItem: FC<INavbarItem> = ({onClose, nav, pathname}) => {
  const session = useSession()
  const linkClick = async () => {
    if (nav.role === 'authenticated' && nav.href === '#') {
      await signOut({callbackUrl: '/'})
    }
    onClose()
  }

  return (
    <>
      {nav.role === 'public' &&
        <Link
          as={nav.href}
          href={nav.href}
          onClick={linkClick}
          className={pathname === nav.href ? clsx(classes.activeLink, classes.link) : classes.link}
        >{nav.name}</Link>}
      {session.status === 'authenticated' && nav.role === 'authenticated' &&
        <Link
          as={nav.href}
          href={nav.href}
          onClick={linkClick}
          className={pathname === nav.href ? clsx(classes.activeLink, classes.link) : classes.link}
        >{nav.name}</Link>}
      {session.status !== 'authenticated' && nav.role === 'notAuthenticated' &&
        <Link
          as={nav.href}
          href={nav.href}
          onClick={linkClick}
          className={pathname === nav.href ? clsx(classes.activeLink, classes.link) : classes.link}
        >{nav.name}</Link>}
    </>
  )
}

export default NavbarItem