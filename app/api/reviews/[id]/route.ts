import {NextResponse} from 'next/server'
import {prisma} from '../../../../prisma/db'

export const GET = async (req: Request) => {
  try {
    const id = req.url.split('/reviews/')[1]
    const review = await prisma.review.findFirst({where: {id}})
    if (review) {
      return NextResponse.json(review)
    }
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}

export const PUT = async (req: Request) => {
  try {
    const id = req.url.split('/reviews/')[1]
    const {nameReview, descReview} = await req.json()
    const review = await prisma.review.update({data: {descReview, nameReview}, where: {id}})
    return NextResponse.json(review)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split('/reviews/')[1]
    const review = await prisma.review.delete({where: {id}})
    return NextResponse.json(review)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}