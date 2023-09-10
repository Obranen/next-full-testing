import {FC} from 'react'
import Image from 'next/image'
import {Tooltip} from '@chakra-ui/tooltip'
import Link from 'next-intl/link'
import {usePathname} from 'next-intl/client'
import {IFlagCountryState} from '../FlagCountry'

export type AppearanceType = 'link' | 'button'

interface IItem {
  flag: IFlagCountryState
  appearance: AppearanceType
  onClickImage?: (e: any) => void
}

const Item: FC<IItem> = ({flag, appearance, onClickImage}) => {
  const pathName = usePathname()

  return (
    <>
      {appearance === 'link' &&
        <Tooltip label={flag.tooltip} placement="bottom">
          <Link
            href={pathName}
            style={{marginRight: '10px'}}
            locale={flag.language}
          >
            <Image src={flag.src} alt={flag.alt} width={'20'} height={'20'}/>
          </Link>
        </Tooltip>}
      {appearance === 'button' &&
        <Tooltip label={flag.tooltip} placement="bottom">
          <Image
            onClick={onClickImage}
            data-locale={flag.language}
            style={{cursor: 'pointer'}}
            src={flag.src}
            alt={flag.alt}
            width={'20'}
            height={'20'}
          />
        </Tooltip>}
    </>
  )
}

export default Item