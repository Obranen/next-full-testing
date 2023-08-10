import {IReview} from '../interface/review'

export const fetchReviews = async () => {
  const response = await fetch('http://localhost:3000/api/reviews', {
    cache: 'no-store'
  })
  return response.json()
}

export const createReview = async (data: IReview) => {
  const response = await fetch(`http://localhost:3000/api/reviews`, {
    method: 'POST',
    body: JSON.stringify({nameReview: data.nameReview, descReview: data.descReview})
  })
  return response.json()
}

export const updateReview = async (data: IReview) => {
  const response = await fetch(`http://localhost:3000/api/reviews/${data.id}`, {
    method: 'PUT',
    body: JSON.stringify({nameReview: data.nameReview, descReview: data.descReview})
  })
  return response.json()
}

export const deleteReview = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/reviews/${id}`, {
    method: 'DELETE'
  })
  return response.json()
}