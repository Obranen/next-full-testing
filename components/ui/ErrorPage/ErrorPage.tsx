import {Heading} from '@chakra-ui/react'

import {FC} from 'react'

interface IErrorPage {
  errorMassage: any
}

const ErrorPage: FC<IErrorPage> = ({errorMassage}) => {
  return (
    <>
      <Heading as={'h2'} size={'lg'} textAlign={'center'} color={'red'} marginTop={'30px'}>
        Error... {errorMassage}
      </Heading>
    </>
  )
}

export default ErrorPage