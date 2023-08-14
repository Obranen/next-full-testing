import {IProduct} from '../interface/product'

export const fetchProducts = async () => {
  const response = await fetch('http://localhost:3000/api/product', {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}

export const createProduct = async (data: IProduct) => {
  const {id, imageAlt, imageSrc, images, title, weight, desc, price, quantity, stock} = data
  const response = await fetch(`http://localhost:3000/api/product/${id}`, {
    method: 'POST',
    body: JSON.stringify({imageAlt, imageSrc, images, title, weight, desc, price, quantity, stock})
  })
  return response.json()
}