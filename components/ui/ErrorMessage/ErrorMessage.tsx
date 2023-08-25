import {Heading} from '@chakra-ui/react'

import {FC} from 'react'

interface IErrorMessage {
  errorMassage: any
}

const ErrorMessage: FC<IErrorMessage> = ({errorMassage}) => {
  return (
    <>
      <Heading as={'h2'} size={'lg'} textAlign={'center'} color={'red'} marginTop={'30px'}>
        Error... {errorMassage}
      </Heading>
    </>
  )
}

export default ErrorMessage