import {FC} from 'react'
import FlagCountryItem, {AppearanceType} from './FlagCountryItem/FlagCountryItem'
import {HStack} from '@chakra-ui/layout'
import {Text} from '@chakra-ui/react'

export interface IFlagCountryState {
  id: string
  src: string
  alt: string
  tooltip: string
  language: string
}

interface IFlagCountry {
  array: IFlagCountryState[]
  appearance?: AppearanceType
  onClickImage?: (e: any) => void
  text?: string
  style?: string
  marginTop?: string
}

const FlagCountry: FC<IFlagCountry> = ({array, appearance = 'link', onClickImage, text = '', marginTop = ''}) => {
  return (
    <>
      <HStack marginTop={marginTop} justify={'space-between'}>
        <Text fontWeight={'bold'}>
          {text}
        </Text>
        <HStack marginRight={'30px'} marginTop={'10px'} zIndex={1} position={'relative'}>
          {array.map((flag) =>
            <FlagCountryItem key={flag.id} flag={flag} appearance={appearance} onClickImage={onClickImage}/>
          )}
        </HStack>
      </HStack>
    </>
  )
}

export default FlagCountry