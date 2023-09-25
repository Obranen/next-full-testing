import {prisma} from '../../../lib/prismaDB'
import {NextResponse} from 'next/server'

export const GET = async () => {
  try {
    const filters = await prisma.filter.findMany()
    return NextResponse.json(filters)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}