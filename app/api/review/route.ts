import {NextResponse} from 'next/server'
import {prisma} from '../../../lib/prismaDB'

export const GET = async () => {
  try {
    const reviews = await prisma.review.findMany()
    return NextResponse.json(reviews)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}