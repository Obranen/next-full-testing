import {prisma} from '../../../prisma/db'
import {NextResponse} from 'next/server'

export const POST = async (req: Request) => {
  try {
    const {name, email, password} = await req.json()
    const user = await prisma.user.create({data: {name, email, password}})
    return NextResponse.json(user)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}