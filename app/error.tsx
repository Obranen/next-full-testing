'use client'

import ErrorPage from '../components/ui/ErrorPage/ErrorPage'

const Error = ({error}: {error: Error}) => {
  return (
    <ErrorPage errorMassage={error.message}/>
  )
}

export default Error