import {FC} from 'react'
import {Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import {signOut, useSession} from 'next-auth/react'

interface IPrivateItem {
  onClose: () => void
}

const PrivateItem: FC<IPrivateItem> = ({onClose}) => {
  const session = useSession()

  return (
    <>
      {session.data ?
        <>
          <Link
            as={NextLink}
            href={'/profile'}
            onClick={onClose}
            style={{display: 'block'}}
          >Profile</Link>
          <Link
            as={NextLink}
            href={'#'}
            onClick={() => signOut({
              callbackUrl: '/'
            })}
            style={{display: 'block'}}
          >Sign Out</Link>
        </> :
        <>
          <Link
            as={NextLink}
            href={'/api/auth/signin'}
            onClick={onClose}
            style={{display: 'block'}}
          >Sign In</Link>
          <Link
            as={NextLink}
            href={'signin'}
            onClick={onClose}
            style={{display: 'block'}}
          >Sign In Custom</Link>
        </>
      }
    </>
  )
}

export default PrivateItem