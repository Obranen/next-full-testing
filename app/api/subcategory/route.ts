import {prisma} from '../../../lib/prismaDB'
import {NextResponse} from 'next/server'

export const GET = async () => {
  try {
    const category = await prisma.subCategory.findMany()
    return NextResponse.json(category)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}