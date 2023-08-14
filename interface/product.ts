export interface IImageProduct {
  src: string
  alt: string
}

export interface IProduct {
  id: string
  imageAlt: string
  imageSrc: string
  images: IImageProduct[]
  title: string
  weight: number
  desc: string
  price: number
  quantity: number
  stock: number
  createdAt?: Date
  updatedAt?: Date
}