import {FC} from 'react'
import {Heading} from '@chakra-ui/react'
import Item from './Item/Item'
import {IReviewState} from '../../../interface/review'


interface IList {
  reviews: IReviewState[]
}

const List: FC<IList> = ({reviews}) => {

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

export default List