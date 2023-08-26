import Item from './Item/Item'
import {HStack} from '@chakra-ui/layout'

export interface IFlag {
  id: string
  src: string
  alt: string
  tooltip: string
  language: string
}

const Language = () => {
  const flags: IFlag[] = [
    {
      id: '1',
      src: '/language/flag-us.svg',
      alt: 'flag-en',
      tooltip: 'en',
      language: 'en'
    },
    {
      id: '2',
      src: '/language/flag-ua.svg',
      alt: 'flag-ua',
      tooltip: 'ua',
      language: 'ua'
    },
    {
      id: '3',
      src: '/language/flag-ru.svg',
      alt: 'flag-ru',
      tooltip: 'ru',
      language: 'ru'
    },
  ]
  return (
    <HStack justify={'end'} marginRight={'30px'} marginTop={'10px'}>
      {flags.map((flag) =>
        <Item key={flag.id} flag={flag} />
      )}
    </HStack>
  )
}

export default Language