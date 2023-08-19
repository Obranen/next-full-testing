export const createImages = async (data: FormData) => {
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: data
  })
  return response.json()
}