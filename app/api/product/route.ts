import {prisma} from '../../../prisma/db'
import {NextResponse} from 'next/server'

export const GET = async () => {
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json(products)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}