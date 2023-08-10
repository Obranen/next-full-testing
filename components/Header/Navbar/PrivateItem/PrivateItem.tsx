import {FC} from 'react'
import {Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import {INavigation} from '../Navbar'

interface IPrivateItem {
  nav: INavigation
  onClose: () => void
}

const PrivateItem: FC<IPrivateItem> = ({onClose, nav}) => {
  return (
      <Link
        as={NextLink}
        href={nav.href}
        onClick={onClose}
        style={{display: 'block'}}
      >{nav.name}</Link>
  )
}

export default PrivateItem