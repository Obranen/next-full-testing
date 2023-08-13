import {FC} from 'react'
import NextLink from 'next/link'
import {Link} from '@chakra-ui/react'
import {INavigation} from '../Navbar'
import classes from '../Navbar.module.scss'
import {useRouter} from 'next/router'

interface IPublicItem {
  nav: INavigation
  onClose: () => void
  pathname: string
}

const PublicItem: FC<IPublicItem> = ({nav, onClose, pathname}) => {
  return (
    <>
      <Link
        as={NextLink}
        href={nav.href}
        onClick={onClose}
        style={{display: 'block'}}
        className={pathname === nav.href ? classes.activeLink : ''}
      >{nav.name}</Link>
    </>
  )
}

export default PublicItem