import FlagCountry, {IFlagCountryState} from '../../ui/FlagCountry/FlagCountry'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Language = () => {
  const flags: IFlagCountryState[] = [
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
    <>
      <FlagCountry array={flags}/>
    </>
  )
}

export default Language