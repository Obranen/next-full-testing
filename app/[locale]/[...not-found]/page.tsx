import Image from 'next/image'

export default function NotFound() {
  return (
    <>
      <Image
        src='/404.png'
        alt='404 error'
        priority
        fill
        style={{
          objectFit: 'cover'
        }}
      />
    </>
  )
}