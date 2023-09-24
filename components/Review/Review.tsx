'use client'

import {FC} from 'react'
import CreateForm from './CreateForm/CreateForm'
import List from './ReviewList/ReviewList'
import {IReviewState} from '../../interface/review'

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