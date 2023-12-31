import {ICategoryState} from '../interface/category'

export const fetchCategories = async () => {
  const response = await fetch(`${process.env.FETCH_URL}/api/category`, {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}

export const createCategory = async (data: ICategoryState) => {
  const response = await fetch(`/api/category`, {
    method: 'POST',
    body: JSON.stringify({value: data.value, label: data.label})
  })
  return response.json()
}