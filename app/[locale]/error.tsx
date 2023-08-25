'use client'

import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage'

const Error = ({error}: {error: Error}) => {
  return (
    <ErrorMessage errorMassage={error.message}/>
  )
}

export default Error