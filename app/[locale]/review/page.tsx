import ReviewsList from '../../components/List/List'
import CreateForm from '../../../components/Review/CreateForm/CreateForm'
import {fetchReviews} from '../../../async/review'
import {IReviewState} from '../../../interface/schema/review'
import Review from '../../../components/Review/Review'

export const metadata = {
  title: 'Review',
  description: 'page Review'
}

const ReviewPage = async () => {
  const reviews: IReviewState[] = await fetchReviews()
  return (
    <>
      <Review reviews={reviews}/>
    </>
  )
}

export default ReviewPage