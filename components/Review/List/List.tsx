import {FC} from 'react'
import {Heading} from '@chakra-ui/react'
import Item from './Item/Item'
import {IReview} from '../../../interface/review'


interface IList {
  reviews: IReview[]
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
      {reviews.map((review: IReview) =>
        <Item key={review.id} review={review}/>
      )}
    </>
  )
}

export default List