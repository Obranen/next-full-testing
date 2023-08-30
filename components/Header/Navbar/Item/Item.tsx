import {FC} from 'react'
import Link from 'next/link'
import {INavigation} from '../Navbar'
import {signOut, useSession} from 'next-auth/react'
import classes from './Item.module.scss'
import clsx from 'clsx'

interface IItem {
  nav: INavigation
  onClose: () => void
  pathname: string
}

const Item: FC<IItem> = ({onClose, nav, pathname}) => {
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
          href={nav.href}
          onClick={linkClick}
          className={pathname === nav.href ? clsx(classes.activeLink, classes.link) : classes.link}
        >{nav.name}</Link>}
      {session.status === 'authenticated' && nav.role === 'authenticated' &&
        <Link
          href={nav.href}
          onClick={linkClick}
          className={pathname === nav.href ? clsx(classes.activeLink, classes.link) : classes.link}
        >{nav.name}</Link>}
      {session.status !== 'authenticated' && nav.role === 'notAuthenticated' &&
        <Link
          href={nav.href}
          onClick={linkClick}
          className={pathname === nav.href ? clsx(classes.activeLink, classes.link) : classes.link}
        >{nav.name}</Link>}
    </>
  )
}

export default Item