import {FC} from 'react'
import {Heading} from '@chakra-ui/react'
import Item from './ReviewItem/ReviewItem'
import {IReviewState} from '../../../interface/review'


interface IReviewList {
  reviews: IReviewState[]
}

const ReviewList: FC<IReviewList> = ({reviews}) => {

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
      {reviews.map((review: IReviewState) =>
        <Item key={review.id} review={review}/>
      )}
    </>
  )
}

export default ReviewList