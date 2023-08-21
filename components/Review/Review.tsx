'use client'

import {FC} from 'react'
import CreateForm from './CreateForm/CreateForm'
import List from './List/List'
import {IReview} from '../../interface/review'

interface IReviewState {
  reviews: IReview[]
}

const Review: FC<IReviewState> = ({reviews}) => {
  return (
    <>
      <CreateForm/>
      <List reviews={reviews}/>
    </>
  )
}

export default Review