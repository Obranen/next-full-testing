import {ICategoryState} from '../interface/schema/category'

export const fetchCategories = async () => {
  const response = await fetch(`http://localhost:3000/api/category`, {
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