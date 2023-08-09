import {NextResponse} from 'next/server'
import {prisma} from '../../../prisma/db'

export const GET = async () => {
  try {
    const reviews = await prisma.review.findMany()
    return NextResponse.json(reviews)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}

export const POST = async (req: Request) => {
  try {
    const {nameReview, descReview} = await req.json()
    // const review = await prisma.reviews.create({data: {descReview, nameReview}})

    const review = await prisma.user.create({
      data: {
        email: 'ban@email.ua',
        name: 'Ban',
        password: '12345',
        reviews: {
          create: [
            {descReview, nameReview}
          ]
        }
      }
    })
    return NextResponse.json(review)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}