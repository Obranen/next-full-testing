'use client'

import {FC} from 'react'
import {IReview} from '../../app/reviews/page'
import {Heading} from '@chakra-ui/react'
import Item from './Item/Item'

interface IReviewsList {
  reviews: IReview[]
}

const ReviewsList: FC<IReviewsList> = ({reviews}) => {
  return (
    <>
      <Heading as={'h2'} size={'lg'} textAlign={'center'} marginTop={'30px'}>
        List
      </Heading>
      {reviews.map((review: IReview) =>
        <Item key={review.id} review={review}/>
      )}
    </>
  )
}

export default ReviewsList