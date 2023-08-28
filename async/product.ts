import {IProductState} from '../interface/schema/product'

export const fetchProducts = async () => {
  const response = await fetch(`http://localhost:3000/api/product`, {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}

export const createProduct = async (data: IProductState) => {
  const {id, imageAlt, imageSrc, titleEn, titleRu, titleUa, images, weight, descEn, descRu, descUa, currencyEn, currencyRu, currencyUa, price, quantity, stock} = data
  const response = await fetch(`/api/product/${id}`, {
    method: 'POST',
    body: JSON.stringify({imageAlt, imageSrc, titleEn, titleRu, titleUa, images, weight, descEn, descRu, descUa, currencyEn, currencyRu, currencyUa, price, quantity, stock})
  })
  return response.json()
}