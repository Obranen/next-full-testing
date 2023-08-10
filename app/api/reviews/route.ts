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
    const review = await prisma.review.create({data: {descReview, nameReview}})
    return NextResponse.json(review)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}