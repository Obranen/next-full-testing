import {prisma} from '../../../lib/prismaDB'
import {NextResponse} from 'next/server'
import {ICategoryState} from '../../../interface/category'

export const GET = async () => {
  try {
    const category = await prisma.category.findMany()
    return NextResponse.json(category)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}

export const POST = async (req: Request) => {
  try {
    const {value, label}: ICategoryState = await req.json()
    const result = await prisma.category.create({data: {value, label}})
    return NextResponse.json(result)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}