export const fetchFilters = async () => {
  const response = await fetch(`${process.env.FETCH_URL}/api/filter`, {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}

export const createFilter = async (data: { id: string, value: string, label: string }) => {
  const response = await fetch(`/api/filter/${data.id}`, {
    method: 'POST',
    body: JSON.stringify({value: data.value, label: data.label})
  })
  return response.json()
}