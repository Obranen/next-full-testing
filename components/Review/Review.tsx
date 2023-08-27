'use client'

import {FC} from 'react'
import CreateForm from './CreateForm/CreateForm'
import List from './List/List'
import {IReviewState} from '../../interface/schema/review'

interface IReviewStateState {
  reviews: IReviewState[]
}

const Review: FC<IReviewStateState> = ({reviews}) => {
  return (
    <>
      <CreateForm/>
      <List reviews={reviews}/>
    </>
  )
}

export default Review