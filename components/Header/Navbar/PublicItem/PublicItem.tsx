import {FC} from 'react'
import NextLink from 'next/link'
import {Link} from '@chakra-ui/react'
import {INavigation} from '../Navbar'

interface IPublicItem {
  nav: INavigation
  onClose: () => void
}

const PublicItem: FC<IPublicItem> = ({nav, onClose}) => {
  return (
    <>
      <Link
        as={NextLink}
        href={nav.href}
        onClick={onClose}
        style={{display: 'block'}}
      >{nav.name}</Link>
    </>
  )
}

export default PublicItem