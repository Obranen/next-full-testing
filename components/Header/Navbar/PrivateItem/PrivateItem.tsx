import {FC} from 'react'
import Link from 'next/link'
import {INavigation} from '../Navbar'
import classes from '../Navbar.module.scss'

interface IPrivateItem {
  nav: INavigation
  onClose: () => void
  pathname: string
}

const PrivateItem: FC<IPrivateItem> = ({onClose, nav, pathname}) => {
  return (
    <Link
      href={nav.href}
      onClick={onClose}
      style={{display: 'block'}}
      className={pathname === nav.href ? classes.activeLink : ''}
    >{nav.name}</Link>
  )
}

export default PrivateItem