import Image from 'next/image'
import imgPizza from '../assets/pizza.jpg'

export const metadata = {
  title: 'Home',
  description: 'page Home'
}

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Image
        src={imgPizza}
        alt={'pizza'}
        priority
      />
    </>
  )
}
