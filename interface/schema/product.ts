export interface IImageProduct {
  src: string
  alt: string
}

export interface IProductState {
  id: string
  titleEn: string
  titleRu?: string
  titleUa?: string
  currencyEn: string
  currencyRu?: string
  currencyUa?: string
  descEn: string
  descRu?: string
  descUa?: string
  imageAlt: string
  imageSrc: string
  images: IImageProduct[]
  weight: number
  price: number
  quantity: number
  stock: number
  category: string
  createdAt?: Date
  updatedAt?: Date
}