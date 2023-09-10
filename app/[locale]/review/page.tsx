import {fetchReviews} from '../../../async/review'
import {IReviewState} from '../../../interface/review'
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