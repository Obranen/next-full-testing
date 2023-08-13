import {IReview} from '../interface/review'

export const fetchReviews = async () => {
  const response = await fetch('http://localhost:3000/api/review', {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}

export const updateReview = async (data: IReview) => {
  const response = await fetch(`http://localhost:3000/api/review/${data.id}`, {
    method: 'PUT',
    body: JSON.stringify({nameReview: data.nameReview, descReview: data.descReview})
  })
  return response.json()
}

export const deleteReview = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/review/${id}`, {
    method: 'DELETE'
  })
  return response.json()
}

export const createReview = async (data: { id: string, nameReview: string, descReview: string }) => {
  const response = await fetch(`http://localhost:3000/api/review/${data.id}`, {
    method: 'POST',
    body: JSON.stringify({nameReview: data.nameReview, descReview: data.descReview})
  })
  return response.json()
}