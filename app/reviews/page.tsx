import ReviewsList from '../../components/ReviewsList/ReviewsList'
import CreateReview from '../../components/CreateReview/CreateReview'

export const metadata = {
  title: 'Reviews',
  description: 'page Reviews'
}

export interface IReview {
  id: string
  nameReview: string
  descReview: string
}

const fetchReviews = async () => {
  const response = await fetch('http://localhost:3000/api/reviews', {
    cache: 'no-store'
  })
  return response.json()
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