export const fetchSubCategories = async () => {
  const response = await fetch(`${process.env.FETCH_URL}/api/subcategory`, {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}

export const createSubCategory = async (data: { id: string, value: string, label: string }) => {
  const response = await fetch(`/api/subcategory/${data.id}`, {
    method: 'POST',
    body: JSON.stringify({value: data.value, label: data.label})
  })
  return response.json()
}