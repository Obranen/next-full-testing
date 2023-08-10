import {prisma} from '../../../../prisma/db'
import {NextResponse} from 'next/server'

export const GET = async (req: Request) => {
  try {
    const emailValue = req.url.split('/registration/')[1]
    const response = await prisma.user.findFirst({where: {email: emailValue}})
    return NextResponse.json(response)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}