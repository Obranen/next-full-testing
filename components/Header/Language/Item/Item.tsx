import {FC} from 'react'
import {IFlag} from '../Language'
import Image from 'next/image'
import {Tooltip} from '@chakra-ui/tooltip'
import Link from 'next-intl/link'
import {usePathname} from 'next-intl/client'

interface IItem {
  flag: IFlag
}

const Item: FC<IItem> = ({flag}) => {
  const pathName = usePathname()

  return (
    <Tooltip label={flag.tooltip} placement='auto'>
      <Link
        href={pathName}
        style={{marginRight: '10px'}}
        locale={flag.language}
      >
        <Image src={flag.src} alt={flag.alt} width={'20'} height={'20'}/>
      </Link>
    </Tooltip>
  )
}

export default Item