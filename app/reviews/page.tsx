import ReviewsList from '../../components/ReviewsList/ReviewsList'

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
    next: {
      revalidate: 20
    }
  })
  return response.json()
}

const Reviews = async () => {
  const reviews: IReview[] = await fetchReviews()
  return (
    <>
      <ReviewsList reviews={reviews}/>
    </>
  )
}

export default Reviews