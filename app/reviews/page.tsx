import ReviewsList from '../../components/ReviewsList/ReviewsList'
import CreateReview from '../../components/CreateReview/CreateReview'
import {fetchReviews} from '../../async/review'
import {IReview} from '../../interface/review'

export const metadata = {
  title: 'Reviews',
  description: 'page Reviews'
}

const Reviews = async () => {
  const reviews: IReview[] = await fetchReviews()
  return (
    <>
      <CreateReview/>
      <ReviewsList reviews={reviews}/>
    </>
  )
}

export default Reviews