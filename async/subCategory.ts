export const createSubCategory = async (data: { id: string, value: string, label: string }) => {
  const response = await fetch(`/api/subcategory/${data.id}`, {
    method: 'POST',
    body: JSON.stringify({value: data.value, label: data.label})
  })
  return response.json()
}