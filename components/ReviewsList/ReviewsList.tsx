'use client'

import {FC} from 'react'
import {IReview} from '../../app/review/page'
import {Heading} from '@chakra-ui/react'
import Item from './Item/Item'

interface IReviewsList {
  reviews: IReview[]
}

const ReviewsList: FC<IReviewsList> = ({reviews}) => {

  if (!reviews.length) {
    return <Heading as={'h2'} size={'lg'} textAlign={'center'} marginTop={'30px'} color={'red'}>
      No Reviews
    </Heading>
  }

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