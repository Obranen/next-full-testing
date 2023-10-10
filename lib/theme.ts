import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  //Customize Theme
  // colors: {
  //   primary: {
  //     light: '#b6dffd',
  //     dark: '#0094fc',
  //   }
  // },
  //Color mode - Dark, Light
  initialColorMode: 'light',
  useSystemColorMode: true,
})

//Примеры использования:
//<Box bg={'primary.dark'} color={'primary.light'}>Hello</Box>
// .box {
//   color: var(--chakra-colors-primary-dark);
// }

//Переключение темы: тёмная, светлая
// const { colorMode, toggleColorMode } = useColorMode()
// <Button onClick={toggleColorMode}>
//   Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
// </Button>