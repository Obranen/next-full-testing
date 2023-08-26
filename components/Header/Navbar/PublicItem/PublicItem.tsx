import {FC} from 'react'
import Link from 'next-intl/link'
import {INavigation} from '../Navbar'
import classes from '../Navbar.module.scss'

interface IPublicItem {
  nav: INavigation
  onClose: () => void
  pathname: string
}

const PublicItem: FC<IPublicItem> = ({nav, onClose, pathname}) => {
  return (
    <>
      <Link
        href={nav.href}
        onClick={onClose}
        style={{display: 'block'}}
        className={pathname === nav.href ? classes.activeLink : undefined}
      >{nav.name}</Link>
    </>
  )
}

export default PublicItem